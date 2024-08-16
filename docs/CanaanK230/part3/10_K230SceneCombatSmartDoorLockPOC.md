---
sidebar_position: 10
---

# K230 场景实战-智能门锁POC

## K230 智能门锁

在K230平台开发的一套集成UI、人脸检测、人脸识别、人脸注册功能的程序。

### 1.硬件环境

- K230-USIP-LP3-EVB-V1.0/K230-USIP-LP3-EVB-V1.1/K230-SIP-EVB-V1.0
- 配套的LCD模组
- K230-USIP-IMX335-SENSOR-V1.1模组

### 2.概述

智能门锁程序作为一个POC项目，提供给客户如何使用lvgl、大小核通信、多媒体pipeline及ai等功能的参考，程序主要分两部分，大核端程序主要完成视频输入输出，AI处理等相关的功能，小核端完成UI及人脸特征值管理的功能，大小核通过IPCMSG进行通信，在开发板通过norflash启动。

### 3.备注

1.下电和reset之前，应现在小核串口端输入`halt`,保护文件系统不被损坏。

### 4.源码位置

大核端程序源码路径位于`src/reference/business_poc/doorlock/big`，目录结构如下：

```sh
.
├── anchors_320.cc
├── CMakeLists.txt
├── main.cc
├── mbface.kmodel
├── mobile_face.cc
├── mobile_face.h
├── mobile_retinaface.cc
├── mobile_retinaface.h
├── model.cc
├── model.h
├── retinaface.kmodel
├── util.cc
├── util.h
└── vi_vo.h

```

小核端程序源码路径位于`src/little/buildroot-ext/package/door_lock`，目录结构如下：

```sh
.
├── Config.in
├── src
│   ├── CMakeLists.txt
│   └── ui
│       ├── CMakeLists.txt
│       ├── data
│       │   └── img
│       │       ├── delete.png
│       │       ├── import.png
│       │       └── signup.png
│       ├── demo
│       │   └── main.c
│       ├── lvgl_port
│       │   ├── CMakeLists.txt
│       │   ├── k230
│       │   │   ├── buf_mgt.cpp
│       │   │   ├── buf_mgt.hpp
│       │   │   ├── CMakeLists.txt
│       │   │   ├── lv_port_disp.cpp
│       │   │   └── lv_port_indev.c
│       │   ├── lv_conf_demo.h
│       │   ├── lv_conf.h
│       │   └── lv_port.h
│       └── src
│           ├── db_proc.c
│           ├── db_proc.h
│           ├── main.c
│           ├── msg_proc.cpp
│           ├── msg_proc.h
│           ├── scr_main.c
│           ├── scr_signup.c
│           └── ui_common.h
└── src.mk

```

#### 4.1 编译程序

K230-USIP-LP3-EVB-V1.0/K230-USIP-LP3-EVB-V1.1开发板编译程序：
在`k230_sdk`目录下执行`make CONF=k230_evb_doorlock_defconfig`，`k230_sdk/src/reference/business_poc/doorlock/big/out`目录下生成大核程序`door_lock.elf`，`k230_sdk/output/k230_evb_doorlock_defconfig/little/buildroot-ext/target`下生成小核程序`app`目录。

K230-SIP-EVB-V1.0开发板编译程序：
在`k230_sdk`目录下执行`make CONF=k230d_doorlock_defconfig`，`k230_sdk/src/reference/business_poc/doorlock/big/out`目录下生成大核程序`door_lock.elf`，`k230_sdk/output/k230d_doorlock_defconfig/little/buildroot-ext/target`下生成小核程序`app`目录。

备注：
当编译k230d_doorlock_defconfig镜像需要替换k230_sdk\src\big\mpp\kernel\lib\libvo.a。替换方法如下：

1.下载

`https://kendryte-download.canaan-creative.com/k230/downloads/mpp_lib/libvo_k230d.a`

2.替换

先备份一份libvo.a，然后将下载的libvo_k230d.a 替换成 libvo.a，重新编译即可

#### 4.2 运行程序

智能门锁在nor flash镜像中，大小核程序自启，K230-USIP-LP3-EVB-V1.0/K230-USIP-LP3-EVB-V1.1开发板编译完成之后会在`output/k230_evb_doorlock_defconfig/images/`目录下生成`sysimage-spinor32m.img`镜像，K230-SIP-LP3-EVB-V1.0开发板编译完成之后会在`output/k230d_doorlock_defconfig/images/`目录下生成`sysimage-spinor32m.img`镜像，烧写nor flash镜像，开发板拨码开关设置成nor flash启动

#### 4.3 功能演示

1. 大小核程序启动后界面显示如下：![door_lock_menu](${images}/door_lock_menu.png)

1. sd人脸图片导入功能，必须在/sharefs/pic下放入图片，为保证识别效果，导入图片的格式要求为jpg，分辨率为720*1280，用户把需要导入的人脸图片放到`/sharefs/pic`下，按下图片导入键，程序会自动完成提取特征值功能，并以图片的文件名为识别成功后的lable,操作效果如下：![door_lock_import](${images}/door_lock_import.png)

1. 人脸实时注册功能，点击人脸注册按钮，通过UI展示的键盘输入lable，为保证识别效果，注册时人脸应位于图像的中央，操作效果如下：![door_lock_singup](${images}/door_lock_singup.png)
识别效果：![door_lock_singup_show](${images}/door_lock_singup_show.png)

1. 人脸底库删除功能，删除所有通过sd卡和人脸实时注册的人脸，操作效果如下：![door_lock_delete](${images}/door_lock_delete.png)
