---
sidebar_position: 6
---

# K230 OpenBLAS开发指南

## 1.OpenBLAS简介

OpenBLAS 是一个基于BSD许可(开源)发行的优化BLAS计算库。BLAS(Basic Linear Algebra Subprograms，基础线性代数程序集)是一个应用程序接口(API)标准，用以规范发布基础线性代数操作的数值库(如矢量或矩阵乘法)，OpenBLAS是BLAS标准的一种具体实现。 在SDK中，已包含预先交叉编译好的OpenBLAS库(位于`k230_sdk/src/big/utils/lib/openblas/`路径下)，用户直接使用该静态库编译自己的可执行程序即可。

## 2.测试用例编译

注意：

> 本节讲解如何通过SDK中预设的OpenBLAS静态库，来进行可执行程序的编译。SDK中已包含多个基于OpenBLAS实现的可执行程序编译示例(位于`k230_sdk/src/big/utils/examples/openblas/`路径下)，本节基于这些示例来进行讲解。

`k230_sdk/src/big/utils/examples/openblas/`路径下的目录结构说明如下：

```
|-- 1_openblas_level1             # OpenBLAS示例1
|   |-- CMakeLists.txt            # OpenBLAS示例1的CMake配置文件
|   `-- openblas_level1.cpp
|-- 2_openblas_level2
|   |-- CMakeLists.txt
|   `-- openblas_level2.cpp
|-- 3_openblas_level3
|   |-- CMakeLists.txt
|   `-- openblas_level3.cpp
|-- 4_fortran_example
|   |-- CMakeLists.txt
|   `-- openblas_fortran.cpp
|-- CMakeLists.txt               # 总体CMake配置文件
|-- build_app.sh                 # 总体编译脚本
|-- cmake                        # 默认CMaek配置
|   |-- Riscv64.cmake
|   `-- link.lds
```

首先，在`k230_sdk/src/big/utils/examples/openblas/`路径下，运行`build_app.sh`文件：

```
./build_app.sh
```

在终端中出现如下提示，说明可执行程序编译成功：

```
Install the project...
-- Install configuration: "Release"
-- Installing: /data/zhanglimin/code_kmodel_export_build_inference_k230/k230_sdk/src/big/utils/examples/openblas/out/bin/1_openblas_level1.elf
-- Installing: /data/zhanglimin/code_kmodel_export_build_inference_k230/k230_sdk/src/big/utils/examples/openblas/out/bin/2_openblas_level2.elf
-- Installing: /data/zhanglimin/code_kmodel_export_build_inference_k230/k230_sdk/src/big/utils/examples/openblas/out/bin/3_openblas_level3.elf
-- Installing: /data/zhanglimin/code_kmodel_export_build_inference_k230/k230_sdk/src/big/utils/examples/openblas/out/bin/4_openblas_fortran.elf
```

最后，在`k230_sdk/src/big/utils/examples/openblas/out/bin`文件夹中即包含了编译好的所有elf文件：

- `1_openblas_level1.elf`
- `2_openblas_level2.elf`
- `3_openblas_level3.elf`
- `4_openblas_fortran.elf`

## 3.测试用例运行演示

### 3.1 level_1测试用例

运行方式及输出结果示例如下：

```
msh /sharefs/bin_openblas>./1_openblas_level1.elf
*********************************************************
This is the result:
4 7 11 14
*********************************************************
This is the reference:
4 7 11 14
{Test PASS}.
```

### 3.2 level_2测试用例

运行方式及输出结果示例如下：

```
msh /sharefs/bin_openblas>./2_openblas_level2.elf
*********************************************************
This is the result:
20 40 10 20 30 60
*********************************************************
This is the reference:
20 40 10 20 30 60
{Test PASS}.
```

### 3.3 level_3测试用例

运行方式及输出结果示例如下：

```
msh /sharefs/bin_openblas>./3_openblas_level3.elf
*********************************************************
This is the result:
7 10 15 22
*********************************************************
This is the reference:
7 10 15 22
{Test PASS}.
```

### 3.4 Fortran接口测试用例

运行方式及输出结果示例如下：

```
msh /sharefs/bin_openblas>./4_openblas_fortran.elf
m=2,n=3,k=4,alpha=1.200000,beta=0.001000,sizeofc=6
This is matrix A

1.000000 2.000000 3.000000 1.000000 2.000000 3.000000 1.000000 2.000000
This is matrix B

1.000000 2.000000 3.000000 1.000000 2.000000 3.000000 1.000000 2.000000 3.000000 1.000000 2.000000 3.000000
*********************************************************
This is the result:
16.801 18.002 18.003 16.801 15.602 22.803
*********************************************************
This is the reference:
16.801 18.002 18.003 16.801 15.602 22.803
{Test PASS}.
```

## 4.OpenBLAS交叉编译

注意：

> 尽管SDK中已包含预先交叉编译好的OpenBLAS库(位于`k230_sdk/src/big/utils/lib/openblas/`路径下)，感兴趣的用户也可以自己对OpenBLAS进行交叉编译，得到适配K230的OpenBLAS静态库。

### 4.1 OpenBLAS编译环境搭建

#### 4.1.1 Git代码下载

首先使用git获取OpenBLAS仓库，由于OpenBLAS来自于Github，因此克隆速度慢为正常现象，请耐心等待:

```
git clone https://github.com/xianyi/OpenBLAS.git
```

OpenBLAS中存在着很多版本，由于 0.3.21 版本与最新分支相比缺少部分特性，这里我们选用当前最新 提交:

```
git checkout e9a911fb9f011c886077e68eab81c48817cdb782
```

#### 4.1.2 patch补丁包应用

注意：

> patch补丁包在SDK中的路径为`k230_sdk/src/big/rt-smart/userapps/openblas/`。

首先，在OpenBLAS根目录下，新建`patch`目录，并将patch补丁包拷贝至`patch`目录下，放置好的文件夹目录结构示例如下所示：

```
├── appveyor.yml
├── azure-pipelines.yml
├── BACKERS.md
├── benchmark
├── cblas.h
...
├── common_lapack.h
├── common_level1.h
├── common_level2.h
├── common_level3.h
├── common_linux.h
├── common_loongarch64.h
├── common_macro.h
|-- patch # OpenBLAS 的 补 丁 包
| |-- 0001-****.patch
| |-- 0002-****.patch
| |-- 0003-****.patch
...
| |-- 0009-****.patch
| |-- 0010-****.patch
| |-- 0011-****.patch
...
...
...
├── utest
└── version.h
```

在OpenBLAS根目录执行以下命令，应用补丁：

```
git am ./patch/*.patch
```

### 4.2 OpenBLAS编译

进入 OpenBLAS 的根目录，执行以下命令，进行编译：

```
# 注意：工具链路径会随开发者具体环境不同，路径前缀会有所不同，仅供参考。
make TARGET=C908V HOSTCC=gcc BINARY=64 FC=k230_sdk/toolchain/riscv64-linux-musleabi_for_x86_64-pc-linux-gnu/bin/riscv64-unknown-linux-musl-gfortran CC=k230_sdk/toolchain/riscv64-linux-musleabi_for_x86_64-pc-linux-gnu/bin/riscv64-unknownlinux-musl-gcc NOFORTRAN=0 USE_THREAD=0 LIBPREFIX="./libopenblas" LAPACKE="NO_LAPACKE=0" INTERFACE64=0 NO_STATIC=0 NO_SHARED=1 -Wimplicit-functiondeclaration
```

编译完成后，将编译好的库安装到指定文件夹中，本示例安装到`./install`文件夹中：

```
# 注意：可以按照自己的需求， 修改相应的安装路径。
make PREFIX=./install NO_STATIC=0 NO_SHARED=1 install
```