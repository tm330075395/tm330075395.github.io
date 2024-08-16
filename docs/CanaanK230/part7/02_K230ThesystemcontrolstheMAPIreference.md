---
sidebar_position: 2
---

# K230系统控制MAPI参考

## 1. 概述

### 1.1 概述

系统控制根据 k230芯片特性，完成硬件各个部件的复位、基本初始化工作，同时负责完成 MPP（Media Process Platform 媒体处理平台）系统核间通讯建立，多媒体内存管理等模块的初始化、去初始化。

### 1.2 功能描述

MAPI的特性是跨OS调用，在K230的大小核上均可以调用相同的API来实现需要的功能。整体的系统架构如下图所示

关于MAPI中涉及绑定以及内存管理的具体内容请参考文档《K230 系统控制 API参考 V1.0》中的相关内容

## 2. API参考

该功能模块提供以下API：

- [K230系统控制MAPI参考](#k230系统控制mapi参考)
  - [免责声明](#免责声明)
  - [商标声明](#商标声明)
  - [目录](#目录)
  - [前言](#前言)
    - [概述](#概述)
    - [读者对象](#读者对象)
    - [缩略词定义](#缩略词定义)
    - [修订记录](#修订记录)
  - [1. 概述](#1-概述)
    - [1.1 概述](#11-概述)
    - [1.2 功能描述](#12-功能描述)
  - [2. API参考](#2-api参考)
    - [2.1 kd\_mapi\_sys\_init](#21-kd_mapi_sys_init)
    - [2.2 kd\_mapi\_sys\_deinit](#22-kd_mapi_sys_deinit)
    - [2.3 kd\_mapi\_media\_init](#23-kd_mapi_media_init)
    - [2.4 kd\_mapi\_media\_deinit](#24-kd_mapi_media_deinit)
    - [2.5 kd\_mapi\_alloc\_buffer](#25-kd_mapi_alloc_buffer)
    - [2.6 kd\_mapi\_free\_buffer](#26-kd_mapi_free_buffer)
    - [2.7 kd\_mapi\_sys\_get\_vb\_block](#27-kd_mapi_sys_get_vb_block)
    - [2.8 kd\_mapi\_sys\_release\_vb\_block](#28-kd_mapi_sys_release_vb_block)
  - [3. 数据类型](#3-数据类型)
    - [3.1 k\_mapi\_mod\_id\_e](#31-k_mapi_mod_id_e)
    - [3.2 k\_mapi\_media\_config\_t](#32-k_mapi_media_config_t)
    - [3.3 k\_mapi\_media\_attr\_t](#33-k_mapi_media_attr_t)
  - [4. 错误码](#4-错误码)

### 2.1 kd_mapi_sys_init

【描述】

初始化系统资源，建立双核间的消息通信管道。为了建立双核连接，在每个操作系统上运行的服务需要在初始化过程中调用这个接口来建立连接，然后才能进行核间通信。

【语法】

k_s32 kd_mapi_sys_init(void );

【参数】

无

【返回值】

| **返回值** | **描述**                            |
|--------|---------------------------------|
| 0      | 成功                            |
| 非0    | 失败，其值参见[错误码](#4-错误码) |

【芯片差异】

无。

【需求】

- 头文件：mapi_sys_api.h
- 库文件：libmapi.a

【注意】

这个函数需要在调用kd_mapi_media_init之前被调用

【举例】

无

【相关主题】

无

### 2.2 kd_mapi_sys_deinit

【描述】

去初始化系统资源，断开双核间的消息通信管道。

【语法】

k_s32 kd_mapi_sys_deinit(void );

【参数】

无

【返回值】

| **返回值** | **描述**                            |
|--------|---------------------------------|
| 0      | 成功                            |
| 非0    | 失败，其值参见[错误码](#4-错误码) |

【芯片差异】

无。

【需求】

- 头文件：mapi_sys_api.h
- 库文件：libmapi.a

【注意】

当kd_mapi_sys_init没有被调用时，对这个mapi的调用返回成功。

【举例】

无

【相关主题】

无

### 2.3 kd_mapi_media_init

【描述】

初始化多媒体相关资源。主要是配置vb的个数和大小

【语法】

k_s32 kd_mapi_media_init(const [k_mapi_media_attr_t](#33-k_mapi_media_attr_t) *media_attr);

【参数】

| **参数名称**   | **描述**         | **输入/输出** |
|------------|--------------|-----------|
| media_attr | 媒体属性指针 | 输入      |

【返回值】

| **返回值** | **描述**                            |
|--------|---------------------------------|
| 0      | 成功                            |
| 非0    | 失败，其值参见[错误码](#4-错误码) |

【芯片差异】

无。

【需求】

- 头文件：mapi_sys_api.h
- 库文件：libmapi.a

【注意】

无

【举例】

无

【相关主题】

无

### 2.4 kd_mapi_media_deinit

【描述】

去初始化多媒体相关资源。

【语法】

k_s32 kd_mapi_media_deinit(void);

【参数】

无

【返回值】

| **返回值** | **描述**                            |
|--------|---------------------------------|
| 0      | 成功                            |
| 非0    | 失败，其值参见[错误码](#4-错误码) |

【芯片差异】

无。

【需求】

- 头文件：mapi_sys_api.h
- 库文件：libmapi.a

【注意】

无

【举例】

无

【相关主题】

无

### 2.5 kd_mapi_alloc_buffer

【描述】

在用户态分配 MMZ 的内存(带cache)

【语法】

k_s32 kd_mapi_alloc_buffer(k_u64 *phys_addr, void **virt_addr, k_u32 len, const k_char \*name);

【参数】

| **参数名称**  | **描述**             | **输入/输出** |
|-----------|------------------|-----------|
| phys_addr | buffer的物理地址 | 输出      |
| virt_addr | buffer的虚拟地址 | 输出      |
| len       | buffer的长度     | 输入      |
| name      | buffer的名称     | 输入      |

【返回值】

| **返回值** | **描述**                            |
|--------|---------------------------------|
| 0      | 成功                            |
| 非0    | 失败，其值参见[错误码](#4-错误码) |

【芯片差异】

无。

【需求】

- 头文件：mapi_sys_api.h
- 库文件：libmapi.a

【注意】

- Buffer 的虚拟地址和物理地址已经映射
- 在分配内存之后在大核端msh下通过 cat /proc/umap/media-mem 查看 buffer 是否分配成功。

【举例】

无

【相关主题】

无

### 2.6 kd_mapi_free_buffer

【描述】

在用户态释放 MMZ 的内存。

【语法】

k_s32 kd_mapi_free_buffer(k_u64 phys_addr, void *virt_addr, k_u32 len);

【参数】

| **参数名称**  | **描述**             | **输入/输出** |
|-----------|------------------|-----------|
| phys_addr | buffer的物理地址 | 输入      |
| virt_addr | buffer的虚拟地址 | 输入      |
| len       | buffer的长度     | 输入      |

【返回值】

| **返回值** | **描述**                            |
|--------|---------------------------------|
| 0      | 成功                            |
| 非0    | 失败，其值参见[错误码](#4-错误码) |

【芯片差异】

无。

【需求】

- 头文件：mapi_sys_api.h
- 库文件：libmapi.a

【注意】

在释放内存之后在大核端msh下通过 cat /proc/umap/media-mem 查看 buffer 是否释放成功。

【举例】

无

【相关主题】

无

### 2.7 kd_mapi_sys_get_vb_block

【描述】

在用户态获取一个缓存块。

【语法】

k_s32 kd_mapi_sys_get_vb_block(k_u32 \*pool_id, k_u64 \*phys_addr, k_u64 blk_size, const char\* mmz_name);

【参数】

| **参数名称**  | **描述**                   | **输入/输出** |
|-----------|------------------------|-----------|
| pool_id   | 缓存块所在的缓存池ID号 | 输出      |
| phys_addr | 缓存块的物理地址       | 输出      |
| blk_size  | 缓存块的大小           | 输入      |
| mmz_name  | 缓存池所在的ddr的名称  | 输入      |

【返回值】

| **返回值** | **描述**                            |
|--------|---------------------------------|
| 0      | 成功                            |
| 非0    | 失败，其值参见[错误码](#4-错误码) |

【芯片差异】

无。

【需求】

- 头文件：mapi_sys_api.h
- 库文件：libmapi.a

【注意】

- 如果用户需要从任意一个公共缓存池中获取一块指定大小的缓存块，将第 2 个参数 blk_size 设置为需要的缓存块大小，并指定要从哪个 DDR 上的公共缓存池获取缓存块。如果指定的 DDR 上并没有公共缓存池，那么将获取不到缓存块。如果mmz_name 等于 NULL，则表示在没有命名的 DDR 上的公共缓存池获取缓存块
- 媒体初始化时，如果 VB 在没有命名的 DDR 中创建缓存池，则从任意一个公共缓存池中获取一块指定大小的缓存块, mmz_name设置为 NULL 即可

【举例】

无

【相关主题】

无

### 2.8 kd_mapi_sys_release_vb_block

【描述】

在用户态释放一个缓存块。

【语法】

k_s32 kd_mapi_sys_release_vb_block(k_u64 phys_addr, k_u64 blk_size);

【参数】

| **参数名称**  | **描述**             | **输入/输出** |
|-----------|------------------|-----------|
| phys_addr | 缓存块的物理地址 | 输出      |
| blk_size  | 缓存块的大小     | 输入      |

【返回值】

| **返回值** | **描述**                            |
|--------|---------------------------------|
| 0      | 成功                            |
| 非0    | 失败，其值参见[错误码](#4-错误码) |

【芯片差异】

无。

【需求】

- 头文件：mapi_sys_api.h
- 库文件：libmapi.a

【注意】

获取的缓存块使用完后，应该调用此接口释放缓存块。

【举例】

无

【相关主题】

无

## 3. 数据类型

### 3.1 k_mapi_mod_id_e

【说明】

定义MAPI模块ID

【定义】

```C

typedef enum

{

K_MAPI_MOD_SYS = 0,

K_MAPI_MOD_VI,

K_MAPI_MOD_VPROC,

K_MAPI_MOD_VENC,

K_MAPI_MOD_VDEC,

K_MAPI_MOD_VREC,

K_MAPI_MOD_VO,

K_MAPI_MOD_AI,

K_MAPI_MOD_AENC,

K_MAPI_MOD_ADEC,

K_MAPI_MOD_AREC,

K_MAPI_MOD_AO,

K_MAPI_MOD_VVI,

K_MAPI_MOD_VVO,

K_MAPI_MOD_DPU,

K_MAPI_MOD_VICAP,

K_MAPI_MOD_SENSOR,

K_MAPI_MOD_ISP,

K_MAPI_MOD_BUTT,

} k_mapi_mod_id_e;
```

【成员】

无

【注意事项】

无

【相关数据类型及接口】

无

### 3.2 k_mapi_media_config_t

【说明】

定义媒体配置属性结构体

【定义】

```C

typedef struct {

k_vb_supplement_config vb_supp;

k_vb_config vb_config;

} k_mapi_media_config_t;
```

【成员】

| **成员名称** | **描述**                                            |
|--------------|-----------------------------------------------------|
| vb_supp      | VB 附加信息结构体，参见《K230 系统控制 API参考》    |
| vb_config    | 视频缓存池属性结构体，参见《K230 系统控制 API参考》 |

【注意事项】

无

【相关数据类型及接口】

无

### 3.3 k_mapi_media_attr_t

【说明】

定义媒体初始化属性结构体

【定义】

```C

typedef struct {

k_mapi_media_config_t media_config;

} k_mapi_media_attr_t;
```

【成员】

| **成员名称** | **描述**           |
|--------------|--------------------|
| media_config | 媒体配置属性结构体 |

【注意事项】

无

【相关数据类型及接口】

无

## 4. 错误码

表 41

| 错误代码   | 宏定义                       | **描述**                         |
|------------|------------------------------|------------------------------|
| 0xb0008003 | K_MAPI_ERR_SYS_ILLEGAL_PARAM | 参数错误                     |
| 0xb0008006 | K_MAPI_ERR_SYS_NULL_PTR      | 空指针错误                   |
| 0xb0008009 | K_MAPI_ERR_SYS_NOT_PERM      | 操作不允许                   |
| 0xb0008010 | K_MAPI_ERR_SYS_NOTREADY      | 设备未就绪                   |
| 0xb0008012 | K_MAPI_ERR_SYS_BUSY          | 系统忙                       |
| 0xb000800c | K_MAPI_ERR_SYS_NOMEM         | 分配内存失败，如系统内存不足 |
