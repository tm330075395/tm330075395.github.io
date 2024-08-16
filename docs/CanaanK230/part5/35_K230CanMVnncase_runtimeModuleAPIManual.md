---
sidebar_position: 35
---
# 4.1 K230 CanMV nncase_runtime 模块API手册

## 前言

### 概述

此文档介绍CanMV nncase_runtime模块，用于指导开发人员使用MicroPython调用KPU和AI2D模块。

### 读者对象

本文档（本指南）主要适用于以下人员：

- 技术支持工程师
- 软件开发工程师

### 缩略词定义

| 简称                | 说明                                        |
| ------------------- | ------------------------------------------- |
| nncase_runtime      | k230 nncase runtime包,包含KPU模块和AI2D模块 |
| nncase_runtime.kpu  | kpu模块                                     |
| nncase_runtime.ai2d | ai2d模块                                    |

### 修订记录

| 文档版本号 | 修改说明 | 修改者 | 日期       |
| ---------- | -------- | ------ | ---------- |
| V1.0       | 初版     | 杨浩琪 | 2023-09-18 |

## 1. 概述

此文档介绍CanMV nncase_runtime模块，用于指导开发人员使用MicroPython调用KPU和AI2D模块。

## 2. API描述

### 2.1 from_numpy

【描述】 从MicroPython中ulab.numpy创建runtime_tensor。

【语法】

```
runtime_tensor = nncase_runtime.from_numpy(ulab.numpy)
```



【参数】

| 参数名称   | 描述      | 输入/输出 |
| ---------- | --------- | --------- |
| ulab.numpy | numpy对象 | 输入      |

【返回值】

| 返回值         | 描述                         |
| -------------- | ---------------------------- |
| runtime_tensor | 返回创建好的runtime_tensor。 |
| 其他           | 失败，抛出C++异常。          |

### 2.2 to_numpy

【描述】

将runtime_tensor转为ulab.numpy。

【语法】

```
runtime_tensor = kpu.get_output_tensor(0)
result = runtime_tensor.to_numpy()
```



【参数】

无。

【返回值】

| 返回值     | 描述                                     |
| ---------- | ---------------------------------------- |
| ulab.numpy | 返回从runtime_tensor转换后的ulab.numpy。 |
| 其他       | 失败                                     |

### 2.3 nncase_runtime.kpu

kpu模块提供调用KPU硬件来完成开发板上推理神经网络模型的基础函数，主要包括加载模型，设置输入数据，执行推理，获取输出结果等功能。

#### 2.3.1 load_kmodel

【描述】

加载编译生成的kmodel格式的神经网络。

【语法】

```
load_kmodel(read_bin)
load_kmodel(path)
```



【参数】

| 参数名称 | 描述               | 输入/输出 |
| -------- | ------------------ | --------- |
| read_bin | kmodel的二进制内容 | 输入      |
| path     | kmodel的路径       | 输入      |

【返回值】

| 返回值 | 描述                |
| ------ | ------------------- |
| 无     | 成功。              |
| 其他   | 失败，抛出C++异常。 |

#### 2.3.2 set_input_tensor

【描述】

设置kmodel推理时的runtime_tensor。

【语法】

```
set_input_tensor(index, runtime_tensor)
```



【参数】

| 参数名称       | 描述               | 输入/输出 |
| -------------- | ------------------ | --------- |
| index          | kmodel的输入索引。 | 输入      |
| runtime_tensor | 包含输入数据信息。 | 输入      |

【返回值】

| 返回值 | 描述                |
| ------ | ------------------- |
| 无     | 成功。              |
| 其他   | 失败，抛出C++异常。 |

#### 2.3.3 get_input_tensor

【描述】

获取kmodel推理时的runtime_tensor。

【语法】

```
get_input_tensor(index)
```



【参数】

| 参数名称 | 描述               | 输入/输出 |
| -------- | ------------------ | --------- |
| index    | kmodel的输入索引。 | 输入      |

【返回值】

| 返回值         | 描述                |
| -------------- | ------------------- |
| runtime_tensor | 包含输入数据信息。  |
| 其他           | 失败，抛出C++异常。 |

#### 2.3.4 set_output_tensor

【描述】

设置kmodel推理后的输出结果。

【语法】

```
set_output_tensor(index, runtime_tensor)
```



【参数】

| 参数名称       | 描述               | 输入/输出 |
| -------------- | ------------------ | --------- |
| index          | kmodel的输出索引。 | 输入      |
| runtime_tensor | 输出结果。         | 输入      |

【返回值】

| 返回值 | 描述                |
| ------ | ------------------- |
| 无     | 成功。              |
| 其他   | 失败，抛出C++异常。 |

#### 2.3.5 get_output_tensor

【描述】

获取kmodel推理后的输出结果。

【语法】

```
get_output_tensor(index)
```



【参数】

| 参数名称 | 描述               | 输入/输出 |
| -------- | ------------------ | --------- |
| index    | kmodel的输出索引。 | 输入      |

【返回值】

| 返回值         | 描述                          |
| -------------- | ----------------------------- |
| runtime_tensor | 获取第index个runtime_tensor。 |
| 其他           | 失败，抛出C++异常。           |

#### 2.3.6 run

【描述】

启动kmodel推理

【语法】

```
run()
```



【返回值】

| 返回值 | 描述                |
| ------ | ------------------- |
| 无     | 推理成功            |
| 其他   | 失败，抛出C++异常。 |

#### 2.3.7 inputs_size

【描述】

获取kmodel的输入个数。

【语法】

```
inputs_size()
```



【返回值】

| 返回值 | 描述                |
| ------ | ------------------- |
| size_t | kmodel的输入个数。  |
| 其他   | 失败，抛出C++异常。 |

#### 2.3.8 outputs_size

【描述】

获取kmodel的输出个数。

【语法】

```
outputs_size()
```



【返回值】

| 返回值 | 描述                |
| ------ | ------------------- |
| size_t | kmodel的输出个数。  |
| 其他   | 失败，抛出C++异常。 |

#### 2.3.9 get_input_desc

【描述】

获取指定索引的输入的描述信息。

【语法】

```
get_input_desc(index)
```



【参数】

| 参数名称 | 描述               | 输入/输出 |
| -------- | ------------------ | --------- |
| index    | kmodel的输入索引。 | 输入      |

【返回值】

| 返回值      | 描述                                         |
| ----------- | -------------------------------------------- |
| MemoryRange | 第index个输入信息:`dtype`, `start`, `size`。 |

#### 2.3.10 get_output_desc

【描述】

获取指定索引的输出的描述信息。

【语法】

```
get_output_desc(index)
```



【参数】

| 参数名称 | 描述               | 输入/输出 |
| -------- | ------------------ | --------- |
| index    | kmodel的输入索引。 | 输入      |

【返回值】

| 返回值      | 描述                                         |
| ----------- | -------------------------------------------- |
| MemoryRange | 第index个输出信息:`dtype`, `start`, `size`。 |

### 2.4 nncase_runtime.ai2d

#### 2.4.1 build

【描述】

ai2d_builder的构造函数.

【语法】

```
build(input_shape, output_shape)
```



【参数】

| 名称         | 描述     |
| ------------ | -------- |
| input_shape  | 输入形状 |
| output_shape | 输出形状 |

【返回值 】

| 返回值       | 描述                         |
| ------------ | ---------------------------- |
| ai2d_builder | 返回ai2d_builder，用于执行。 |
| 其他         | 失败，抛出C++异常。          |

#### 2.4.2 run

配置寄存器并启动AI2D的计算.

【定义】

```
ai2d_builder.run(input_tensor, output_tensor)
```



【参数】

| 名称          | 描述       |
| ------------- | ---------- |
| input_tensor  | 输入tensor |
| output_tensor | 输出tensor |

【返回值】

| 返回值 | 描述                |
| ------ | ------------------- |
| 无     | 成功。              |
| 其他   | 失败，抛出C++异常。 |

#### 2.4.3 set_dtype

【描述】

用于设置AI2D计算过程中的数据类型.

【定义】

```
set_dtype(src_format, dst_format, src_type, dst_type)
```



【参数】

| 名称       | 类型        | 描述         |
| ---------- | ----------- | ------------ |
| src_format | ai2d_format | 输入数据格式 |
| dst_format | ai2d_format | 输出数据格式 |
| src_type   | datatype_t  | 输入数据类型 |
| dst_type   | datatype_t  | 输出数据类型 |

#### 2.4.4 set_crop_param

【描述】

用于配置crop相关的参数.

【定义】

```
set_crop_param(crop_flag, start_x, start_y, width, height)
```



【参数】

| 名称      | 类型 | 描述               |
| --------- | ---- | ------------------ |
| crop_flag | bool | 是否开启crop功能   |
| start_x   | int  | 宽度方向的起始像素 |
| start_y   | int  | 高度方向的起始像素 |
| width     | int  | 宽度方向的crop长度 |
| height    | int  | 高度方向的crop长度 |

#### 2.4.5 set_shift_param

【描述】

用于配置shift相关的参数.

【定义】

```
set_shift_param(shift_flag, shift_val)
```



【参数】

| 名称       | 类型 | 描述              |
| ---------- | ---- | ----------------- |
| shift_flag | bool | 是否开启shift功能 |
| shift_val  | int  | 右移的比特数      |

#### 2.4.6 set_pad_param

【描述】

用于配置pad相关的参数.

【定义】

```
set_pad_param(pad_flag, paddings, pad_mode, pad_val)
```



【参数】

| 名称     | 类型 | 描述                                                         |
| -------- | ---- | ------------------------------------------------------------ |
| pad_flag | bool | 是否开启pad功能                                              |
| paddings | list | 各个维度的padding, size=8，分别表示dim0到dim4的前后padding的个数，其中dim0/dim1固定配置{0, 0} |
| pad_mode | int  | 只支持pad constant，配置0即可                                |
| pad_val  | list | 每个channel的padding value                                   |

#### 2.4.7 set_resize_param

【描述】

用于配置resize相关的参数.

【定义】

```
set_resize_param(resize_flag, ai2d_interp_method, ai2d_interp_mode)
```



【参数】

| 名称               | 类型          | 描述               |
| ------------------ | ------------- | ------------------ |
| resize_flag        | bool          | 是否开启resize功能 |
| ai2d_interp_method | interp_method | resize插值方法     |
| ai2d_interp_mode   | interp_mode   | resize模式         |

#### 2.4.8 set_affine_param

【描述】

用于配置affine相关的参数.

【定义】

```
set_affine_param(affine_flag, ai2d_interp_method, cord_round, bound_ind, bound_val, bound_smooth, M)
```



【参数】

| 名称               | 类型          | 描述                                                         |
| ------------------ | ------------- | ------------------------------------------------------------ |
| affine_flag        | bool          | 是否开启affine功能                                           |
| ai2d_interp_method | interp_method | Affine采用的插值方法                                         |
| cord_round         | uint32_t      | 整数边界0或者1                                               |
| bound_ind          | uint32_t      | 边界像素模式0或者1                                           |
| bound_val          | uint32_t      | 边界填充值                                                   |
| bound_smooth       | uint32_t      | 边界平滑0或者1                                               |
| M                  | list          | 仿射变换矩阵对应的vector，仿射变换为Y=[a_0, a_1; a_2, a_3] \cdot X + [b_0, b_1] $, 则 M=[a_0,a_1,b_0,a_2,a_3,b_1 ] |

#### 2.4.9 ai2d_format

【描述】

ai2d_format用于配置输入输出的可选数据格式.

【定义】

```
class ai2d_format
    YUV420_NV12 = 0
    YUV420_NV21 = 1
    YUV420_I420 = 2
    NCHW_FMT = 3
    RGB_packed = 4
    RAW16 = 5
```



#### 2.4.10 interp_method

【描述】

interp_method用于配置可选的插值方式.

【定义】

```
class interp_method:
    tf_nearest = 0
    tf_bilinear = 1
    cv2_nearest = 2
    cv2_bilinear = 3
```



#### 2.4.11 interp_mode

【描述】

interp_mode 用于配置可选的插值模式.

【定义】

```
class interp_mode:
    none = 0
    align_corner = 1
    half_pixel = 2
```



### 2.5 shrink_memory_pool

【描述】

清理nncase_runtime产生的内存池，释放内存。

【语法】

```
import gc
import nncase_runtime

gc.collect()
nncase_runtime.shrink_memory_pool()
```