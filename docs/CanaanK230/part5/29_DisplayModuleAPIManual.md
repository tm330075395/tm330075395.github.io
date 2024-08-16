---
sidebar_position: 29
---
# 3.2 Display模块API手册

## 前言

### 概述

此文档介绍CanMV Display模块，用以指导开发人员如何调用MicroPython API实现图像显示功能。

### 读者对象

本文档（本指南）主要适用于以下人员：

- 技术支持工程师
- 软件开发工程师

### 缩略词定义

| 简称 | 说明                     |
| ---- | ------------------------ |
| VO   | Video Output             |
| DSI  | Display Serial Interface |

### 修订记录

| 文档版本号 | 修改说明 | 修改者 | 日期       |
| ---------- | -------- | ------ | ---------- |
| V1.0       | 初版     | 王权   | 2023-09-15 |
| V2.0       | 重构API  | xel    | 2024-06-11 |

## 1. 概述

**`该模块在固件版本V0.6之后有较大改变，若使用V0.6之前固件请参考旧版本的文档`**

此文档介绍CanMV Display模块，用以指导开发人员如何调用Micro Python API实现图像显示功能。

## 2. API描述

### 2.1 init

【描述】

初始化整个Display通路，包括VO模块、DSI模块、LCD/HDMI

**`必须在MediaManager.init()之前调用`**

【语法】

```
def init(type = None, width = None, height = None, osd_num = 1, to_ide = False, fps = None)
```



【参数】

| 参数名称 | 描述                                                         | 输入/输出 | 说明                 |
| -------- | ------------------------------------------------------------ | --------- | -------------------- |
| type     | [显示设备类型](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#type) | 输入      | 必选                 |
| width    | 分辨率宽度                                                   | 输入      | 默认值根据`type`决定 |
| height   | 分辨率高度                                                   | 输入      | 默认值根据`type`决定 |
| osd_num  | 在[show_image](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#show-image)时可以支持的LAYER数量 | 输入      | 越大占用内存越多     |
| to_ide   | 是否将屏幕显示传输到IDE显示                                  | 输入      | 开启会占用更多内存   |
| fps      | 显示帧率                                                     | 输入      | 仅支持`VIRT`类型     |

【返回值】

| 返回值 | 描述 |
| ------ | ---- |
| 无     |      |

【注意】

无

【举例】

无

【相关主题】

无

### 2.2 show_image

【描述】

在屏幕上显示图像

【语法】

```
def show_image(img, x = 0, y = 0, layer = None, alpha = 255, flag = 0)
```



【参数】

| 参数名称 | 描述                                                         | 输入/输出 | 说明                                                         |
| -------- | ------------------------------------------------------------ | --------- | ------------------------------------------------------------ |
| img      | 显示的图像                                                   | 输入      |                                                              |
| x        | 起始坐标的x值                                                | 输入      |                                                              |
| y        | 起始坐标的y值                                                | 输入      |                                                              |
| layer    | 显示到[指定层](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#layer) | 输入      | 仅支持`OSD`层 若需要多层请设置[init](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#init)参数中的`osd_num` |
| alpha    | 图层混合alpha                                                | 输入      |                                                              |
| flag     | 显示[标志](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#flag) | 输入      |                                                              |

【返回值】

| 返回值 | 描述 |
| ------ | ---- |
| 无     |      |

【注意】

无

【举例】

无

【相关主题】

无

### 2.3 deinit

【描述】

执行反初始化，deinit方法会关闭整个Display通路，包括VO模块、DSI模块、LCD/HDMI

**`必须在MediaManager.deinit()之前调用`** **`必须在sensor.stop()之后调用`**

【语法】

```
def deinit()
```



【返回值】

| 返回值 | 描述 |
| ------ | ---- |
| 无     |      |

【注意】

无

【举例】

无

【相关主题】

无

### 2.4 bind_layer

【描述】

绑定`sensor`或`vdec`模块输出到屏幕显示 不需要用户手动参与即可将图像持续显示到屏幕

**`必须在init之前调用`**

【语法】

```
def bind_layer(src=(mod, dev, layer), dstlayer, rect = (x, y, w, h), pix_format, alpha, flag)
```



【参数】

| 参数名称   | 描述                                                         | 输入/输出 | 说明                           |
| ---------- | ------------------------------------------------------------ | --------- | ------------------------------ |
| src        | `sensor`或`vdec` 输出信息                                    | 输入      | 可通过`sensor.bind_info()`获取 |
| dstlayer   | 绑定到Display的[显示层](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#layer) | 输入      | 可绑定到`video`或`osd`层       |
| rect       | 显示区域                                                     | 输入      | 可通过`sensor.bind_info()`获取 |
| pix_format | 图像像素格式                                                 | 输入      | 可通过`sensor.bind_info()`获取 |
| alpha      | 图层混合alpha                                                | 输入      |                                |
| flag       | 显示[标志](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#flag) | 输入      | `LAYER_VIDEO1`不支持           |

【返回值】

| 返回值 | 描述 |
| ------ | ---- |
| 无     |      |

【注意】

无

【举例】

无

【相关主题】

无

## 3. 数据结构描述

### 3.1 type

| 类型   | 分辨率 (width x height @ fps) | 备注                                                         |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| LT9611 | 1920x1080@30                  | *默认值*                                                     |
|        | 1280x720@30                   |                                                              |
|        | 640x480@60                    |                                                              |
| HX8377 | 1080x1920@30                  | *默认值*                                                     |
| ST7701 | 800x480@30                    | *默认值* 可设置为竖屏480x800                                 |
|        | 854x480@30                    | 可设置为竖屏480x854                                          |
| VIRT   | 640x480@90                    | *默认值*                                                     |
|        |                               | `IDE`调试专用，不显示内容在外接屏幕 用户可自定义设置分辨率(64x64)-(4096x4096)和帧率(1-200) |

### 3.2 layer

| 显示层       | 说明 | 备注                                                         |
| ------------ | ---- | ------------------------------------------------------------ |
| LAYER_VIDEO1 |      | 仅[bind_layer](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#bind-layer)可用 |
| LAYER_VIDEO2 |      | 仅[bind_layer](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#bind-layer)可用 |
| LAYER_OSD0   |      | 支持[show_image](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#show-image)和[bind_layer](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#bind-layer)使用 |
| LAYER_OSD1   |      | 支持[show_image](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#show-image)和[bind_layer](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#bind-layer)使用 |
| LAYER_OSD2   |      | 支持[show_image](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#show-image)和[bind_layer](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#bind-layer)使用 |
| LAYER_OSD3   |      | 支持[show_image](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#show-image)和[bind_layer](https://developer.canaan-creative.com/k230_canmv/main/zh/api/mpp/K230_CanMV_Display模块API手册.html#bind-layer)使用 |

### 3.3 flag

| 标志              | 说明           | 备注 |
| ----------------- | -------------- | ---- |
| FLAG_ROTATION_0   | 旋转`0`度      |      |
| FLAG_ROTATION_90  | 旋转`90`度     |      |
| FLAG_ROTATION_180 | 旋转`180`度    |      |
| FLAG_ROTATION_270 | 旋转`270`度    |      |
| FLAG_MIRROR_NONE  | 不镜像         |      |
| FLAG_MIRROR_HOR   | 水平镜像       |      |
| FLAG_MIRROR_VER   | 垂直镜像       |      |
| FLAG_MIRROR_BOTH  | 水平与垂直镜像 |      |

## 4. 示例程序

例程

```
from media.display import * #导入display模块，使用display相关接口
from media.media import * #导入display模块，使用display相关接口
import os, time, image #导入image模块，使用image相关接口

# use lcd as display output
Display.init(Display.ST7701, width = 800, height = 480, to_ide = True)
# init media manager
MediaManager.init()

# create image for drawing
img = image.Image(800, 480, image.RGB565)
img.clear()
img.draw_string_advanced(0,0,32, "Hello World!，你好世界！！！", color = (255, 0, 0))

Display.show_image(img)

try:
    while True:
        time.sleep(1)
        os.exitpoint()
except KeyboardInterrupt as e:
    print("user stop: ", e)
except BaseException as e:
    print(f"Exception {e}")

Display.deinit()
MediaManager.deinit()
```