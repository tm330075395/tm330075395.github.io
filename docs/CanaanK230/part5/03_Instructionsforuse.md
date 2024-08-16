---
sidebar_position: 3
---
# 1.使用说明

## 1. 概述

K230 CanMV是基于K230开发的一个可运行micropython的应用，用户可通过python语言使用硬件的各种资源。

CanMV源码下载地址如下：

```
https://github.com/kendryte/k230_canmv
https://gitee.com/kendryte/k230_canmv
```

## 2. 开发环境搭建

### 2.1 支持的硬件

CanMV-K230: 具体硬件信息参考 《K230_硬件设计指南》

#### 2.2 编译环境

| 主机环境                    | 描述                                           |
| --------------------------- | ---------------------------------------------- |
| Docker编译环境              | 提供了dockerfile，可以生成docker镜像，用于编译 |
| Ubuntu 20.04.4 LTS (x86_64) | 可以在ubuntu 20.04环境下编译                   |

K230 CanMV需要在linux环境下编译，支持docker环境编译，开发包中发布了docker file（`k230_sdk/tools/docker/Dockerfile`），可以生成docker镜像。具体dockerfile使用和编译步骤，详见4.3.1章节。

CanMV使用的Docker镜像以ubuntu 20.04为基础，如果不使用docker编译环境，可以在ubuntu 20.04主机环境下参考dockerfile的内容，安装相关HOST package和工具链后，编译CanMV。

K230 CanMV没有在其他Linux版本的主机环境下验证过，不保证可以在其他环境下编译通过。

## 3. 编译流程

说明：本章节命令仅供参考，文件名请根据实际情况进行替换。

CanMV源码下载地址如下：

```
https://github.com/kendryte/k230_canmv
https://gitee.com/kendryte/k230_canmv
git clone https://github.com/kendryte/k230_canmv.git
cd k230_canmv
make prepare_sourcecode
# 生成docker镜像（第一次编译需要，已经生成docker镜像后跳过此步骤，可选）
docker build -f k230_sdk/tools/docker/Dockerfile -t k230_docker k230_sdk/tools/docker
# 启动docker环境(可选)
docker run -u root -it -v $(pwd):$(pwd) -v $(pwd)/k230_sdk/toolchain:/opt/toolchain -w $(pwd) k230_docker /bin/bash
# 默认使用CanMV板卡，如果需要使用其他板卡，请使用 make CONF=k230_xx_defconfig，支持的板卡在configs目录下
make CONF=k230_canmv_defconfig
```



编译完成后会在`output/k230_xx_defconfig/images`目录下生成`sysimage-sdcard.img`镜像

## 4. 镜像烧录

### 4.1 ubuntu下烧录

在sd卡插到宿主机之前，输入：

```
ls -l /dev/sd\*
```

查看当前的存储设备。

将sd卡插入宿主机后，再次输入：

```
ls -l /dev/sd\*
```

查看此时的存储设备，新增加的就是sd卡设备节点。

假设/dev/sdc就是sd卡设备节点，执行如下命令烧录sd卡：

```
sudo dd if=sysimage-sdcard.img of=/dev/sdc bs=1M oflag=sync
```

说明：`sysimage-sdcard.img`可以是`images`目录下的`sysimage-sdcard.img`文件，或者`sysimage-sdcard.img.gz`文件解压缩后的文件。

### 4.2 Windows下烧录

Windows下可通过rufus工具对TF卡进行烧录（rufus工具下载地址 `http://rufus.ie/downloads/`）。

1）将TF卡插入PC，然后启动rufus工具，点击工具界面的”选择”按钮，选择待烧写的固件。

![rufus-flash-from-file](${images}/rufus_select.png)

2）点击“开始”按钮开始烧写，烧写过程有进度条展示，烧写结束后会提示“准备就绪”。

![rufus-flash](${images}/rufus_start.png) ![rufus-sure](${images}/rufus_sure.png) ![rufus-warning](${images}/rufus_warning.png) ![rufus-finish](${images}/rufus_finish.png)

说明：`sysimage-sdcard.img`可以是`images`目录下的`sysimage-sdcard.img`文件，或者`sysimage-sdcard.img.gz`文件解压缩后的文件。

## 5. 上板测试

### 5.1 开发板准备

本章节以CanMV-K230为例

请准备如下硬件：

- CanMV-K230
- Typec USB线两根
- SD卡
- 网线一根(可选)
- HDMI转接线一根(可选)

CanMV-K230通过Power接口提供两路调试串口，linux下显示的串口设备为/dev/ttyACMx，windows下显示的串口设备为USB-Enhanced-SERIAL-A/B CH342。

windows驱动下载地址 `https://www.wch.cn/downloads/CH343SER_EXE.html`。

使用type C分别连接Power和USB接口，板子上电，可以发现三个USB串口设备。

linux串口显示：

![linux串口显示](${images}/linux-serial.jpg)

- `/dev/ttyACM0`为小核linux调试串口
- `/dev/ttyACM1`为大核rt-smart调试串口
- `/dev/ttyACM2`为micropython REPL串口，如果没有这个设备，请确定两个USB口都与电脑连接。

windows串口显示：

![windows串口显示](${images}/windows-serial.jpg)

- `USB-Enhanced-SERIAL-A CH342（COM25）`为小核linux调试串口
- `USB-Enhanced-SERIAL-B CH342（COM24）`为大核rt-smart调试串口
- `USB串行设备（COM26）`为micropython REPL串口，如果没有这个设备，请确定两个USB口都与电脑连接。

### 5.2 启动micropython

1. 打开大核rt-smart调试串口，打开micropython REPL串口，串口波特率设置`115200 8N1`
2. 在大核rt-smart调试串口下输入`./sdcard/app/micropython`
3. micropython REPL串口会提示进入REPL

启动过程如下图所示

![micropython-start](${images}/micropython-start.jpg)

## 6. 目录结构

```
k230_canmv
├── configs
├── fs_resource
├── images
├── k230_sdk
├── k230_sdk_overlay
├── micropython
├── output
└── scripts
```



目录介绍:

1. `configs`: 各种板级配置
2. `fs_resource`: 在编译时拷贝到镜像中的资源文件
3. `k230_sdk`: k230_sdk源码
4. `k230_sdk_overlay`: 基于k230源码的修改
5. `micropython`: micropython的移植
6. `output`: 编译产物结果，镜像文件
7. `scripts`: 各种辅助脚本

其中`k230_sdk`, `micropython`是git submodule, 子项目地址为:

- `k230_sdk`: [kendryte/k230_sdk.git](https://github.com/kendryte/k230_sdk.git)
- `micropython`: [micropython/micropython.git](https://github.com/micropython/micropython.git)

`k230_sdk_overlay`中的目录结构与`k230_sdk`相同, 编译时会将`k230_sdk_overlay`同步到`k230_sdk` `output`为编译生成目录

`micropython`目录大体如下:

```
micropython
├── micropython
├── overlay
├── port
│   ├── 3d-party
│   ├── Kconfig
│   ├── Makefile
│   ├── ai_cube
│   ├── ai_demo
│   ├── boards
│   ├── builtin_py
│   ├── core
│   ├── include
│   ├── kpu
│   ├── lextab.py
│   ├── machine
│   ├── maix
│   ├── modules
│   ├── mpconfigport.h
│   ├── omv
│   ├── socket_network
│   └── yacctab.py
└── sync.mk
```



目录介绍:

1. `micropython`: micropython源码
2. `overlay`: 对micropython源码的一些修改patch
3. `port/boards`: 各种板级配置
4. `port/core`: micropython core模块
5. `port/machine`: machine模块, 包含GPIO, SPI, IIC, UART, PWM, WDT等
6. `port/kpu`: k230 kpu模块, 包含KPU, AI2D
7. `port/mpp`: k230 mpp模块, 包含VO, VI, AI, AO, MMZ, VPU, DPU等
8. `port/maix`: k230 其他模块, 包含IOMUX, PM等
9. `port/omv`: openmv模块
10. `port/include`: 各模块头文件