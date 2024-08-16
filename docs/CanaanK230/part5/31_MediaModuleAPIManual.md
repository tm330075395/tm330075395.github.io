---
sidebar_position: 31
---
# 3.8 Media模块API手册

## 前言

### 概述

本文档主要介绍K230 CanMV平台media模块 API使用说明及应用示例。

### 读者对象

本文档（本指南）主要适用于以下人员：

- 技术支持工程师
- 软件开发工程师

### 缩略词定义

| 简称 | 说明 |
| ---- | ---- |
|      |      |

### 修订记录

| 文档版本号 | 修改说明 | 修改者 | 日期       |
| ---------- | -------- | ------ | ---------- |
| V1.0       | 初版     | 汪成根 | 2023-09-25 |
| V2.0       | 重构API  | xel    | 2024-06-11 |

## 1. 概述

 K230 CanMV平台media模块是一个软件抽象模块，主要是针对K230 CanMV平台媒体数据链路以及媒体缓冲区相关操作的封装。

## 2. API描述

K230 CanMV平台media模块提供MediaManager静态类，该类提供以下章节描述的方法。

### 2.1 init

【描述】

用户[配置](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Media模块API手册.html#config)完`buffer`之后，调用`init`进行初始化，必须在最后进行调用

【语法】

```
MediaManager.init()
```



【参数】

| 参数名称 | 描述 | 输入/输出 |
| -------- | ---- | --------- |
| 无       |      |           |

【返回值】

| 返回值 | 描述 |
| ------ | ---- |
| 无     |      |

【注意】

【举例】

无

【相关主题】

无

### 2.2 deinit

【描述】

销毁所有申请的`buffer`

【语法】

```
MediaManager.deinit()
```



【参数】

| 参数名称 | 描述 | 输入/输出 |
| -------- | ---- | --------- |
| 无       |      |           |

【返回值】

| 返回值 | 描述 |
| ------ | ---- |
| 无     |      |

【注意】

【举例】

无

【相关主题】

无

### 2.3 _config

【描述】

配置媒体缓冲区

【语法】

```
MediaManager._config(config)
```



【参数】

| 参数名称 | 描述               | 输入/输出 |
| -------- | ------------------ | --------- |
| config   | 媒体缓冲区配置参数 | 输入      |

【返回值】

| 返回值 | 描述                 |
| ------ | -------------------- |
| 0      | 成功。               |
| 非 0   | 失败，其值为[错误码] |

【注意】 该方法仅提供给K230 CanMV平台各媒体子模块（例如：camera，video encode等）封装本模块接口时内部使用。上层应用开发者无需关注！

【举例】

无

【相关主题】

无

### 2.4 link

【描述】

为不同模块的通道建立连接，数据自动流转，无需用户手动操作

```
Display`可使用`bind_layer`自动创建`link
```

【语法】

```
MediaManager.link(src=(mod,dev,chn), dst = (mod,dev,chn))
```



【参数】

| 参数名称 | 描述 | 输入/输出 |
| -------- | ---- | --------- |
| 无       |      |           |

【返回值】

| 返回值                  | 描述 |
| ----------------------- | ---- |
| `MediaManager.linker`类 |      |

【注意】 该方法仅提供给K230 CanMV平台各媒体子模块（例如：camera，video encode等）封装本模块接口时内部使用。上层应用开发者无需关注！

【举例】

无

【相关主题】

无

### 2.5 Buffer 管理

#### 2.5.1 get

【描述】

用户在[_config](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Media模块API手册.html#config)之后，可通过`MediaManager.Buffer.get`获取`buffer`

**必须在[init](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Media模块API手册.html#init)执行之后才能获取**

【语法】

```
MediaManager.Buffer.get(size)
```



【参数】

| 参数名称 | 描述                                              | 输入/输出 |
| -------- | ------------------------------------------------- | --------- |
| size     | 想要获取的`buffer`大小，不能超过`_config`中配置的 | 输入      |

【返回值】

| 返回值                   | 描述 |
| ------------------------ | ---- |
| `MediaManager.Buffer` 类 | 成功 |

【举例】

无

【相关主题】

无

#### 2.5.2 释放内存

【描述】

用户手动释放获取到的`buffer`

【语法】

```
buffer.__del__()
```



【参数】

| 参数名称 | 描述 | 输入/输出 |
| -------- | ---- | --------- |
| 无       |      |           |

【返回值】

| 返回值 | 描述 |
| ------ | ---- |
| 无     |      |

【举例】

无

【相关主题】

无

## 3. 数据结构描述

K230 CanMV平台Meida模块包含如下描述的各个数据定义。

### 3.1 媒体模块ID

【说明】

K230 CanMV平台当前定义的各个媒体模块ID，用户创建媒体链路时需要设置对应的模块ID。

【定义】

```
# K230 CanMV meida module define
AUDIO_IN_MOD_ID = K_ID_AI          # audio in device module
AUDIO_OUT_MOD_ID = K_ID_AO         # audio out device module
AUDIO_ENCODE_MOD_ID = K_ID_AENC    # audio encode device module
AUDIO_DECODE_MOD_ID = K_ID_ADEC    # audio decode device module
CAMERA_MOD_ID = K_ID_VI            # camera cdevice module
DISPLAY_MOD_ID = K_ID_VO           # display device module
DMA_MOD_ID = K_ID_DMA              # DMA device module
DPU_MOD_ID = K_ID_DPU              # DPU device module
VIDEO_ENCODE_MOD_ID = K_ID_VENC    # video encode device module
VIDEO_DECODE_MOD_ID = K_ID_VDEC    # video decode device module
```



【注意事项】

无

【相关数据类型及接口】

### 3.2 媒体设备ID

【说明】

K230 CanMV平台当前定义的各个媒体设备ID，用户创建媒体链路时需要设置对应的设备ID。

【定义】

```
# audio device id definition
# TODO

# camera device id definition
CAM_DEV_ID_0 = VICAP_DEV_ID_0
CAM_DEV_ID_1 = VICAP_DEV_ID_1
CAM_DEV_ID_2 = VICAP_DEV_ID_2
CAM_DEV_ID_MAX = VICAP_DEV_ID_MAX

# display device id definition
DISPLAY_DEV_ID = K_VO_DISPLAY_DEV_ID

# DMA device id definition
# TODO

# DPU device id definition
# TODO

# video encode device id definition
# TODO

# video decode device id definition
# TODO
```



【注意事项】

无

【相关数据类型及接口】

### 3.3 媒体设备通道ID

【说明】

K230 CanMV平台当前定义的各个媒体设备通道ID，用户创建媒体链路时需要设置对应的设备通道ID。

【定义】

```
# audio channel id definition
# TODO

# camera channel id definition
CAM_CHN_ID_0 = VICAP_CHN_ID_0
CAM_CHN_ID_1 = VICAP_CHN_ID_1
CAM_CHN_ID_2 = VICAP_CHN_ID_2
CAM_CHN_ID_MAX = VICAP_CHN_ID_MAX

# display channel id definition
DISPLAY_CHN_ID_0 = K_VO_DISPLAY_CHN_ID0
DISPLAY_CHN_ID_1 = K_VO_DISPLAY_CHN_ID1
DISPLAY_CHN_ID_2 = K_VO_DISPLAY_CHN_ID2
DISPLAY_CHN_ID_3 = K_VO_DISPLAY_CHN_ID3
DISPLAY_CHN_ID_4 = K_VO_DISPLAY_CHN_ID4
DISPLAY_CHN_ID_5 = K_VO_DISPLAY_CHN_ID5
DISPLAY_CHN_ID_6 = K_VO_DISPLAY_CHN_ID6

# DMA channel id definition
# TODO

# DPU channel id definition
# TODO

# video encode channel id definition
# TODO

# video decode channel id definition
# TODO
```



【注意事项】

无

【相关数据类型及接口】

无

## 4. 示例程序

### 例程

```
from media.media import *

config = k_vb_config()
config.max_pool_cnt = 1
config.comm_pool[0].blk_size = 1024
config.comm_pool[0].blk_cnt = 1
config.comm_pool[0].mode = VB_REMAP_MODE_NOCACHE

ret = MediaManager._config(config)
if not ret:
    raise RuntimeError(f"configure buffer failed.")

MediaManager.init()

buffer = MediaManager.Buffer.get(1024)

print(buffer)

buffer.__del__()

MediaManager.deinit()

'''
buffer pool :  1
MediaManager.Buffer: handle 0, size 1024, poolId 0, phyAddr 268439552, virtAddr 100424000
'''
```