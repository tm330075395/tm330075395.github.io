---
sidebar_position: 9
---

# K230_功耗管理适配指南

## 1. 概述

k230平台功耗管理框架分为大核功耗管理和小核功耗管理，两个核独立控制。 大核(rt-smart)主要控制CPU1、AI模块、显示模块、多媒体模块等，小核(linux)主要控制CPU0等。 芯片上电后默认使能所有电源域及时钟，为了减少功耗，因此在uboot-spl阶段关闭了以下电源域及时钟:

1. KPU电源、KPU clk、KPU aclk
2. VPU电源、VPU clk、VPU aclk、VPU cfgclk
3. DPU电源、DPU clk、DPU aclk、DPU pclk
4. DISP电源、disp clk
5. mclk

同时各设备驱动负责相应的时钟及电源域管理，当用户打开设备时，驱动应打开电源域和时钟，当用户关闭设备时，驱动应关闭时钟和电源域。对于不支持电源域管理的设备，只需要控制时钟。

## 2. 大核功耗控制

### 2.1 控制框架介绍

#### 2.1.1 电源管理域

大核功耗控制主要围绕几个电源管理域:

1. CPU1
2. KPU
3. DPU
4. VPU
5. DISP

每个电源管理域可分别设置频率，其中CPU1和KPU还支持DVFS，其它电源管理域只支持设置频率。电源管理域支持频率为驱动内置，用户可根据自己实际场景进行更改。

#### 2.1.2 控制策略

每个电源管理域可分别设置功耗控制策略，分为四种策略:

1. 手动模式，用户可在程序中调用接口手动配置频率
2. 性能模式，锁定最高频率
3. 省电模式，锁定最低频率
4. 自动模式，根据负载自动切换频率(仅支持CPU1)

#### 2.1.3 热保护

功耗控制支持两级热保护，第一级是超过指定温度后对模块进行频率限制，第二级是超过指定温度后强制模块关闭电源域，两级均支持用户配置。

#### 2.1.4 电源和时钟

功耗控制支持手动对每个电源管理域进行上下电和时钟控制，用户一般不需要手动调用，使用设备时设备驱动会打开电源和时钟，关闭设备时设备驱动会关闭电源和时钟。

#### 2.1.5 CPU1

cpu支持4种策略：`手动模式`、`性能模式`、`省电模式`、`自动模式`

针对目前门锁和词典笔POC的CPU1功耗优化，主要还是采用手动模式，用户在计算量大的程序段前设置高频，运行完成后设置为低频。对于多进程或多线程应用，每个应用可以锁定最低运行频率。 可通过查看cpu统计信息来调整应用以达到最佳功耗。

#### 2.1.6 KPU

kpu支持3种策略：`手动模式`、`性能模式`、`省电模式`

KPU功耗控制主要是通过调整KPU频率和开关电源时钟，通过nncase调用`kd_mpi_pm_runtime_runstage`接口告知目前KPU的运行阶段，用户可通过各阶段控制各模块时钟和电源，如在AI使用KPU时，可打开KPU时钟，使用完成后立即关闭时钟(AI2D时钟的控制默认由硬件自动控制)。用户也可根据实际场景，手动设置KPU频率，如要求模型高帧率则设置最大频率，帧率无要求或可满足需求，则设置较低的频率来降低功耗。

#### 2.1.7 DPU

参考 KPU

#### 2.1.8 VPU

参考 KPU

#### 2.1.9 DISPLAY

显示相关部分，内置几种频率组合，如60fps、30fps等，启动时根据不同场景设置好，不支持运行时调整频率，仅支持关闭时钟和关闭电源域

### 2.2 使用方式

功耗管理框架默认使能，所有域初始为`手动模式`，并且频率为系统默认初始值，不影响原系统功能。

#### 2.2.1 使用手动模式

用户可参考以下流程使用`手动模式`:

1. 通过`kd_mpi_pm_get_profiles`接口获取电源管理域支持的频点
2. 通过`kd_mpi_pm_set_governor`接口设置电源管理域的管理策略为手动模式
3. 通过`kd_mpi_pm_set_profile`或`kd_mpi_pm_set_profile_lock`接口设置电源管理域的profile序号

#### 2.2.2 使用其它模式

用户可参考以下流程使用`性能模式`、`省电模式`、`自动模式`:

1. 通过`kd_mpi_pm_set_governor`接口设置电源管理域的管理策略为相应模式

#### 2.2.3 使用热保护

1. 通过`kd_mpi_pm_set_thermal_protect`接口设置热保护温度和降频序号，当温度超过指定值后降频到指定profile
2. 通过`kd_mpi_pm_set_thermal_shutdown`接口设置热关机温度，当温度超过指定值后各电源管理域会强制下电

#### 2.2.4 使用自定义频率

比如需要修改CPU支持的频率，可以修改`k230_sdk/src/big/mpp/kernel/pm/src/pm_domain_cpu.c`文件中的`profiles`数组:

```
static k_pm_profile profiles[] = {
    {1.6e9, 0.8e6},
    {1.188e9, 0.7e6},
    {0.8e9, 0.68e6},
    {0.594e9, 0.66e6},
    {0.4e9, 0.64e6},
    {0.2e9, 0.62e6},
};
```

修改完数组后，同样需要修改同一文件下的`set_clock`函数，去生成相应的频率，如果域支持DVFS，用户还需要指定每个频率对应的电压，如果不支持，则统一为默认电压。

KPU, DPU, VPU的修改也是类似。

*注意:* 如果需要使用CPU`自动模式`策略，修改了频率后，同时需要修改负载转换表`load_table`。

### 2.3 API 参考

该框架提供以下API:

- [kd_mpi_pm_set_reg](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-reg)
- [kd_mpi_pm_get_reg](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-get-reg)
- [kd_mpi_pm_get_profiles](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-get-profiles)
- [kd_mpi_pm_get_stat](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-get-stat)
- [kd_mpi_pm_set_governor](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-governor)
- [kd_mpi_pm_get_governor](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-get-governor)
- [kd_mpi_pm_set_profile](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-profile)
- [kd_mpi_pm_get_profile](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-get-profile)
- [kd_mpi_pm_set_profile_lock](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-profile-lock)
- [kd_mpi_pm_set_profile_unlock](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-profile-unlock)
- [kd_mpi_pm_set_thermal_protect](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-thermal-protect)
- [kd_mpi_pm_get_thermal_protect](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-get-thermal-protect)
- [kd_mpi_pm_set_thermal_shutdown](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-thermal-shutdown)
- [kd_mpi_pm_get_thermal_shutdown](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-get-thermal-shutdown)
- [kd_mpi_pm_set_clock](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-clock)
- [kd_mpi_pm_set_power](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-power)
- [kd_mpi_pm_runtime_runstage](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-runtime-runstage)

#### 2.3.1 kd_mpi_pm_set_reg

【描述】

写寄存器，用于扩展或调试

【语法】

```
int kd_mpi_pm_set_reg(uint32_t reg, uint32_t val);
```

【参数】

| **参数名称** | **描述**   | 输入/输出 |
| ------------ | ---------- | --------- |
| reg          | 寄存器地址 | 输入      |
| val          | 寄存器数据 | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

只支持CMU，PWR地址段

【举例】

无

#### 2.3.2 kd_mpi_pm_get_reg

【描述】

读寄存器，用于扩展或调试

【语法】

```
int kd_mpi_pm_get_reg(uint32_t reg, uint32_t *pval);
```

【参数】

| **参数名称** | **描述**   | 输入/输出 |
| ------------ | ---------- | --------- |
| reg          | 寄存器地址 | 输入      |
| pval         | 寄存器数据 | 输出      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

只支持CMU，PWR地址段

【举例】

无

#### 2.3.3 kd_mpi_pm_get_profiles

【描述】

获取电源管理域的profile属性

【语法】

```
int kd_mpi_pm_get_profiles(k_pm_domain domain, uint32_t *pcount, k_pm_profile *pprofile);
```

【参数】

| **参数名称** | **描述**   | 输入/输出 |
| ------------ | ---------- | --------- |
| domain       | 电源管理域 | 输入      |
| pcount       | 属性个数   | 输入/输出 |
| pprofile     | 属性       | 输出      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

1. *pcount最大值为128
2. *pcount为0时，返回电源管理域的profile个数，pprofile未使用
3. *pcount大于0小于某个值时，返回指定个数的profile属性，pprofile不能为空且必须大于*pcount
4. *pcount大于某个值时，返回最大的profile个数和最大个数的profile属性，pprofile不能为空且必须大于*pcount最大值
5. profile为降序排列，序号0为最高频率，序号越大频率越低

【举例】

无

#### 2.3.4 kd_mpi_pm_get_stat

【描述】

获取电源管理域的统计信息

【语法】

```
int kd_mpi_pm_get_stat(k_pm_domain domain);
```

【参数】

| **参数名称** | **描述**   | 输入/输出 |
| ------------ | ---------- | --------- |
| domain       | 电源管理域 | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

1. 目前仅支持CPU电源管理域

【举例】

无

#### 2.3.5 kd_mpi_pm_set_governor

【描述】

设置电源管理域的管理策略

【语法】

```
int kd_mpi_pm_set_governor(k_pm_domain domain, k_pm_governor governor);
```

【参数】

| **参数名称** | **描述**   | 输入/输出 |
| ------------ | ---------- | --------- |
| domain       | 电源管理域 | 输入      |
| governor     | 管理策略   | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

无

【举例】

无

#### 2.3.6 kd_mpi_pm_get_governor

【描述】

获取电源管理域的管理策略

【语法】

```
int kd_mpi_pm_get_governor(k_pm_domain domain, k_pm_governor *pgovernor);
```

【参数】

| **参数名称** | **描述**   | 输入/输出 |
| ------------ | ---------- | --------- |
| domain       | 电源管理域 | 输入      |
| pgovernor    | 管理策略   | 输出      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

无

【举例】

无

#### 2.3.7 kd_mpi_pm_set_profile

【描述】

设置电源管理域当前的profile序号

【语法】

```
int kd_mpi_pm_set_profile(k_pm_domain domain, int32_t index);
```

【参数】

| **参数名称** | **描述**    | 输入/输出 |
| ------------ | ----------- | --------- |
| domain       | 电源管理域  | 输入      |
| index        | profile序号 | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

1. 仅支持手动模式下设置
2. 支持负数，如-1代表倒数第一个profile，-2代表倒数第二个profile
3. 超出范围的负数，会被限制为第一个profile
4. 超出范围的正数，会被限制为最后一个profile

【举例】

无

#### 2.3.8 kd_mpi_pm_get_profile

【描述】

获取电源管理域当前的profile序号

【语法】

```
int kd_mpi_pm_get_profile(k_pm_domain domain, int32_t *pindex);
```

【参数】

| **参数名称** | **描述**    | 输入/输出 |
| ------------ | ----------- | --------- |
| domain       | 电源管理域  | 输入      |
| pindex       | profile序号 | 输出      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

无

【举例】

无

#### 2.3.9 kd_mpi_pm_set_profile_lock

【描述】

设置电源管理域最低的profile序号

【语法】

```
int kd_mpi_pm_set_profile_lock(k_pm_domain domain, int32_t index);
```

【参数】

| **参数名称** | **描述**    | 输入/输出 |
| ------------ | ----------- | --------- |
| domain       | 电源管理域  | 输入      |
| index        | profile序号 | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

1. 设置完成后，当前profile可能大于设置值，如其它进程设置最低profile为1，当前进程设置最低profile为2，此时实际profile为1
2. 其它参考[kd_mpi_pm_get_profile](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#kd-mpi-pm-set-profile)

【举例】

无

#### 2.3.10 kd_mpi_pm_set_profile_unlock

【描述】

清除电源管理域最低的profile序号

【语法】

```
int kd_mpi_pm_set_profile_unlock(k_pm_domain domain, int32_t index);
```

【参数】

| **参数名称** | **描述**    | 输入/输出 |
| ------------ | ----------- | --------- |
| domain       | 电源管理域  | 输入      |
| index        | profile序号 | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

无

【举例】

无

#### 2.3.11 kd_mpi_pm_set_thermal_protect

【描述】

设置电源管理域热保护降频

【语法】

```
int kd_mpi_pm_set_thermal_protect(k_pm_domain domain, int32_t temp, int32_t index);
```

【参数】

| **参数名称** | **描述**        | 输入/输出 |
| ------------ | --------------- | --------- |
| domain       | 电源管理域      | 输入      |
| temp         | 温度，单位0.01℃ | 输入      |
| index        | profile序号     | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

1. 仅CPU和KPU电源管理域支持热保护设置

【举例】

无

#### 2.3.12 kd_mpi_pm_get_thermal_protect

【描述】

获取电源管理域热保护降频配置

【语法】

```
int kd_mpi_pm_get_thermal_protect(k_pm_domain domain, int32_t *ptemp, int32_t *pindex);
```

【参数】

| **参数名称** | **描述**        | 输入/输出 |
| ------------ | --------------- | --------- |
| domain       | 电源管理域      | 输入      |
| ptemp        | 温度，单位0.01℃ | 输出      |
| pindex       | profile序号     | 输出      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

1. 仅CPU和KPU电源管理域支持热保护设置

【举例】

无

#### 2.3.13 kd_mpi_pm_set_thermal_shutdown

【描述】

设置热关机温度

【语法】

```
int kd_mpi_pm_set_thermal_shutdown(int32_t temp);
```

【参数】

| **参数名称** | **描述**        | 输入/输出 |
| ------------ | --------------- | --------- |
| temp         | 温度，单位0.01℃ | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

无

【举例】

无

#### 2.3.14 kd_mpi_pm_get_thermal_shutdown

【描述】

获取热关机温度

【语法】

```
int kd_mpi_pm_get_thermal_shutdown(int32_t *ptemp);
```

【参数】

| **参数名称** | **描述**        | 输入/输出 |
| ------------ | --------------- | --------- |
| ptemp        | 温度，单位0.01℃ | 输出      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

无

【举例】

无

#### 2.3.15 kd_mpi_pm_set_clock

【描述】

设置电源管理域时钟

【语法】

```
int kd_mpi_pm_set_clock(k_pm_domain domain, bool enable);
```

【参数】

| **参数名称** | **描述**   | 输入/输出 |
| ------------ | ---------- | --------- |
| domain       | 电源管理域 | 输入      |
| enable       | 开关       | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

无

【举例】

无

#### 2.3.16 kd_mpi_pm_set_power

【描述】

设置电源管理域电源

【语法】

```
int kd_mpi_pm_set_power(k_pm_domain domain, bool enable);
```

【参数】

| **参数名称** | **描述**   | 输入/输出 |
| ------------ | ---------- | --------- |
| domain       | 电源管理域 | 输入      |
| enable       | 开关       | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

无

【举例】

无

#### 2.3.17 kd_mpi_pm_runtime_runstage

【描述】

设置nncase运行阶段，由nncase runtime调用

【语法】

```
int kd_mpi_pm_runtime_runstage(k_runtimestage_id stage);
```

【参数】

| **参数名称** | **描述**   | 输入/输出 |
| ------------ | ---------- | --------- |
| stage        | 运行阶段ID | 输入      |

【返回值】

| 返回值 | **描述**                                                     |
| ------ | ------------------------------------------------------------ |
| 0      | 成功                                                         |
| 非0    | 失败，其值参见[错误码](https://developer.canaan-creative.com/k230/zh/dev/01_software/board/mpp/K230_PM框架使用指南.html#id14) |

【需求】

- 头文件：mpi_pm_api.h
- 库文件：libpm.a

【注意】

1. PM模块内置了一套控制策略，在`RUNTIMESTAGE_ID_KPU_START`时打开KPU电源和时钟， `RUNTIMESTAGE_ID_KPU_STOP`时关闭KPU电源和时钟，用户可根据实际需求重写此函数。

【举例】

无

### 2.4 数据结构

#### 2.4.1 k_pm_domain

【说明】

定义电源管理域

【定义】

```
typedef enum {
    PM_DOMAIN_CPU,
    PM_DOMAIN_KPU,
    PM_DOMAIN_DPU,
    PM_DOMAIN_VPU,
    PM_DOMAIN_DISPLAY,
    PM_DOMAIN_MEDIA,
    PM_DOMAIN_NR,
} k_pm_domain;
```

【成员】

| **成员名称**      | **描述**       |
| ----------------- | -------------- |
| PM_DOMAIN_CPU     | CPU电源管理域  |
| PM_DOMAIN_KPU     | KPU电源管理域  |
| PM_DOMAIN_DPU     | DPU电源管理域  |
| PM_DOMAIN_VPU     | VPU电源管理域  |
| PM_DOMAIN_DISPLAY | 显示电源管理域 |
| PM_DOMAIN_MEDIA   | 视频电源管理域 |
| PM_DOMAIN_NR      | 电源管理域总数 |

【注意事项】

无

#### 2.4.2 k_pm_governor

【说明】

定义电源管理策略

【定义】

```
typedef enum {
    PM_GOVERNOR_MANUAL,
    PM_GOVERNOR_PERFORMANCE,
    PM_GOVERNOR_ENERGYSAVING,
    PM_GOVERNOR_AUTO,
} k_pm_governor;
```

【成员】

| **成员名称**             | **描述** |
| ------------------------ | -------- |
| PM_GOVERNOR_MANUAL       | 手动模式 |
| PM_GOVERNOR_PERFORMANCE  | 性能模式 |
| PM_GOVERNOR_ENERGYSAVING | 节能模式 |
| PM_GOVERNOR_AUTO         | 自动模式 |

【注意事项】

无

#### 2.4.3 k_pm_profile

【说明】

定义频点对，包含频率和电压

【定义】

```
typedef struct {
    int32_t freq;
    int32_t volt;
} k_pm_profile;
```

【成员】

| **成员名称** | **描述**       |
| ------------ | -------------- |
| freq         | 频率，单位：Hz |
| volt         | 电压，单位：uV |

【注意事项】

1. 频点对为降序排列，序号0为最高频率，序号越大频率越低

#### 2.4.4 k_runtimestage_id

【说明】

定义AI运行阶段，AI运行过程中可能会用到AI2D、KPU、CPU

【定义】

```
typedef enum {
    RUNTIMESTAGE_ID_AI2D_START,
    RUNTIMESTAGE_ID_AI2D_STOP,
    RUNTIMESTAGE_ID_KPU_START,
    RUNTIMESTAGE_ID_KPU_STOP,
    RUNTIMESTAGE_ID_CPU_START,
    RUNTIMESTAGE_ID_CPU_STOP,
} k_runtimestage_id;
```

【成员】

| **成员名称**               | **描述**     |
| -------------------------- | ------------ |
| RUNTIMESTAGE_ID_AI2D_START | AI2D运行开始 |
| RUNTIMESTAGE_ID_AI2D_STOP  | AI2D运行结束 |
| RUNTIMESTAGE_ID_KPU_START  | KPU运行开始  |
| RUNTIMESTAGE_ID_KPU_STOP   | KPU运行结束  |
| RUNTIMESTAGE_ID_CPU_START  | CPU运行开始  |
| RUNTIMESTAGE_ID_CPU_STOP   | CPU运行结束  |

【注意事项】

无

### 2.5 错误码

| **错误代码** | **宏定义**             | **描述**     |
| ------------ | ---------------------- | ------------ |
| 0xa0178003   | K_ERR_PM_ILLEGAL_PARAM | 参数设置无效 |
| 0xa0178004   | K_ERR_PM_EXIST         | 设备已存在   |
| 0xa0178005   | K_ERR_PM_UNEXIST       | 设备不存在   |
| 0xa0178006   | K_ERR_PM_NULL_PTR      | 参数空指针   |
| 0xa0178007   | K_ERR_PM_NOT_CONFIG    | 设备未配置   |
| 0xa0178008   | K_ERR_PM_NOT_SUPPORT   | 操作不支持   |
| 0xa0178009   | K_ERR_PM_NOT_PERM      | 操作不允许   |
| 0xa017800c   | K_ERR_PM_NOMEM         | 内存分配失败 |
| 0xa0178010   | K_ERR_PM_NOTREADY      | 设备未就绪   |
| 0xa0178011   | K_ERR_PM_BADADDR       | 错误地址     |
| 0xa0178012   | K_ERR_PM_BUSY          | 设备忙       |

## 3. 小核功耗控制

### 3.1 控制框架介绍

小核控制主要是针对CPU0，支持linux cpu_freq、温度保护、降温控制。

### 3.1.1 cpu_freq

cpu_freq为linux标准，请参考[kernel文档](https://www.kernel.org/doc/html/v5.10/cpu-freq/index.html)