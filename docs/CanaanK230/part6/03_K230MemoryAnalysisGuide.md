---
sidebar_position: 3
---

# K230 内存分析指南

## 1.小核内存占用分析

### 1.1 linux内核静态占用

#### 1.1.1 size工具

使用size工具可以查看内核镜像的text、data、bss等大小，vmlinux所在位置为 `k230_sdk/output/k230_evb_defconfig/little/linux` 进入该目录使用size工具查看vmlinux

```
$ size -G vmlinux
      text       data        bss      total filename
   9550790    5033374     375793   14959957 vmlinux
```

#### 1.1.2 ksize.py脚本

在linux源码的tools目录内有一个ksize.py脚本，可以对内核目录下的built-in.a做解析，并将解析内容按照尺寸排序显示。

```
$ ./source/tools/ksize.py vmlinux
Linux Kernel                          total |       text       data        bss
--------------------------------------------------------------------------------
vmlinux                            14959957 |   10010970    4573194     375793
--------------------------------------------------------------------------------
drivers/built-in.a                  4060898 |    3757793     257384      45721
fs/built-in.a                       3450902 |    2984349     439120      27433
net/built-in.a                      3103220 |    2635627     392278      75315
kernel/built-in.a                   2258370 |    1402705     668085     187580
mm/built-in.a                        581664 |     480740      94560       6364
lib/built-in.a                       494079 |     488689       3038       2352
block/built-in.a                     242212 |     219496      20060       2656
crypto/built-in.a                    165559 |     151371      14113         75
arch/riscv/built-in.a                117201 |      46516      43788      26897
ipc/built-in.a                        60699 |      57375       3296         28
security/built-in.a                   45740 |      43716       1944         80
init/built-in.a                       31148 |      20394      10617        137
certs/built-in.a                       1241 |       1217         16          8
usr/built-in.a                          520 |        520          0          0
--------------------------------------------------------------------------------
sum                                14613453 |   12290508    1948299     374646
delta                                346504 |   -2279538    2624895       1147


drivers                               total |       text       data        bss
--------------------------------------------------------------------------------
drivers/built-in.a                  4060898 |    3757793     257384      45721
--------------------------------------------------------------------------------
drivers/net/built-in.a               620309 |     589318      30918         73
drivers/usb/built-in.a               531811 |     500758      27947       3106
drivers/gpu/built-in.a               436282 |     426932       9262         88
drivers/media/built-in.a             305133 |     282425      12048      10660
drivers/mtd/built-in.a               287895 |     272626      12317       2952
drivers/tty/built-in.a               256154 |     225035      21385       9734
drivers/base/built-in.a              206309 |     191470      13710       1129
drivers/mmc/built-in.a               178193 |     168267       9882         44
drivers/scsi/built-in.a              150154 |     124680      24788        686
drivers/hid/built-in.a               106225 |      97793       8360         72
drivers/clk/built-in.a                90344 |      83123       7141         80
drivers/video/built-in.a              83938 |      76886       3240       3812
drivers/gpio/built-in.a               77888 |      74920       2920         48
drivers/i2c/built-in.a                73855 |      61913       8438       3504
drivers/input/built-in.a              71037 |      68181       2836         20
drivers/of/built-in.a                 64023 |      58745        602       4676
drivers/spi/built-in.a                56824 |      50320       6480         24
drivers/char/built-in.a               45568 |      34511      10265        792
drivers/dma/built-in.a                37291 |      35993       1062        236
drivers/firmware/built-in.a           36744 |      33437       2477        830
drivers/crypto/built-in.a             31999 |      27463       3292       1244
drivers/thermal/built-in.a            30926 |      27157       3752         17
drivers/dma-buf/built-in.a            29547 |      26747       2668        132
drivers/virtio/built-in.a             27405 |      25984       1413          8
drivers/iio/built-in.a                27146 |      26470        664         12
drivers/block/built-in.a              25557 |      24084       1393         80
drivers/power/built-in.a              22133 |      14605       6848        680
drivers/soc/built-in.a                19576 |      10632       8912         32
drivers/leds/built-in.a               14605 |      13945        636         24
drivers/pwm/built-in.a                13628 |      11708       1792        128
drivers/watchdog/built-in.a           13598 |      13067        501         30
drivers/ras/built-in.a                12633 |       8089       4528         16
drivers/nvmem/built-in.a              11866 |      10962        904          0
drivers/misc/built-in.a               10180 |       9916        264          0
drivers/perf/built-in.a                8979 |       7839        488        652
drivers/reset/built-in.a               8579 |       8095        484          0
drivers/phy/built-in.a                 7297 |       7138        151          8
drivers/irqchip/built-in.a             5992 |       5248        728         16
drivers/clocksource/built-in.a         3633 |       3229        400          4
drivers/canaan-hwtimer/built-in.a       3553 |       3273        224         56
drivers/mfd/built-in.a                 2350 |       2122        224          4
drivers/canaan-hardlock/built-in.a       1312 |       1096        208          8
drivers/pci/built-in.a                  164 |        164          0          0
--------------------------------------------------------------------------------
sum                                 4048635 |    3746366     256552      45717
delta                                 12263 |      11427        832          4


fs                                    total |       text       data        bss
--------------------------------------------------------------------------------
fs/built-in.a                       3450902 |    2984349     439120      27433
--------------------------------------------------------------------------------
fs/nfs/built-in.a                    831393 |     586545     243616       1232
fs/*.o                               605562 |     543984      44914      16664
fs/ext4/built-in.a                   535651 |     439889      94598       1164
fs/ubifs/built-in.a                  233606 |     232778        704        124
fs/ntfs/built-in.a                   178875 |     175071       3724         80
fs/nls/built-in.a                    147032 |     146220        552        260
fs/proc/built-in.a                   103930 |     102710       1140         80
fs/jffs2/built-in.a                   89382 |      88050       1032        300
fs/hfsplus/built-in.a                 89010 |      66622      22372         16
fs/fuse/built-in.a                    83342 |      82094       1192         56
fs/jbd2/built-in.a                    79685 |      67144      12421        120
fs/fat/built-in.a                     62368 |      61689        627         52
fs/lockd/built-in.a                   56531 |      52860       1415       2256
fs/ext2/built-in.a                    51552 |      51288        256          8
fs/exfat/built-in.a                   50232 |      49891        293         48
fs/hfs/built-in.a                     44570 |      44342        220          8
fs/9p/built-in.a                      38537 |      37968        541         28
fs/iomap/built-in.a                   29506 |      23726       5556        224
fs/kernfs/built-in.a                  24668 |      20038        494       4136
fs/debugfs/built-in.a                 24646 |      24342        288         16
fs/configfs/built-in.a                23513 |      22733        752         28
fs/autofs/built-in.a                  21641 |      21433        208          0
fs/notify/built-in.a                  20350 |      18913        972        465
fs/sysfs/built-in.a                   11121 |      10825        276         20
fs/devpts/built-in.a                   4019 |       3383        628          8
fs/tracefs/built-in.a                  3327 |       3191        120         16
fs/exportfs/built-in.a                 2512 |       2488         24          0
fs/ramfs/built-in.a                    2379 |       2299         80          0
fs/nfs_common/built-in.a               1962 |       1833        105         24
--------------------------------------------------------------------------------
sum                                 3450902 |    2984349     439120      27433
delta                                     0 |          0          0          0


net                                   total |       text       data        bss
--------------------------------------------------------------------------------
net/built-in.a                      3103220 |    2635627     392278      75315
--------------------------------------------------------------------------------
net/wireless/built-in.a              537167 |     416358     118041       2768
net/mac80211/built-in.a              530597 |     448777      81720        100
net/core/built-in.a                  496384 |     441682      49334       5368
net/ipv4/built-in.a                  490329 |     455868      21793      12668
net/sunrpc/built-in.a                424309 |     301164      86725      36420
net/ipv6/built-in.a                  330602 |     305628      12017      12957
net/9p/built-in.a                     74446 |      59002      15140        304
net/ethtool/built-in.a                65232 |      64314        831         87
net/netlink/built-in.a                37972 |      36352       1584         36
net/unix/built-in.a                   31131 |      26138        876       4117
net/packet/built-in.a                 29875 |      29087        786          2
net/*.o                               26420 |      24930       1014        476
net/sched/built-in.a                  14230 |      12813       1417          0
net/bpf/built-in.a                     6775 |       6211        564          0
net/dns_resolver/built-in.a            4191 |       3835        344         12
net/ethernet/built-in.a                3560 |       3468         92          0
--------------------------------------------------------------------------------
sum                                 3103220 |    2635627     392278      75315
delta                                     0 |          0          0          0


kernel                                total |       text       data        bss
--------------------------------------------------------------------------------
kernel/built-in.a                   2258370 |    1402705     668085     187580
--------------------------------------------------------------------------------
kernel/printk/built-in.a             639702 |      28763     469075     141864
kernel/*.o                           395328 |     331882      45935      17511
kernel/bpf/built-in.a                301274 |     289172      11737        365
kernel/trace/built-in.a              291112 |     215997      64131      10984
kernel/sched/built-in.a              196488 |     162431      27197       6860
kernel/time/built-in.a               106971 |      81903      19636       5432
kernel/events/built-in.a              92144 |      85731       5349       1064
kernel/cgroup/built-in.a              81197 |      61877      17188       2132
kernel/rcu/built-in.a                 59568 |      54698       4731        139
kernel/irq/built-in.a                 54302 |      50862       2300       1140
kernel/locking/built-in.a             24859 |      24667        188          4
kernel/dma/built-in.a                 12733 |      12246        422         65
kernel/power/built-in.a                2692 |       2476        196         20
--------------------------------------------------------------------------------
sum                                 2258370 |    1402705     668085     187580
delta                                     0 |          0          0          0


lib                                   total |       text       data        bss
--------------------------------------------------------------------------------
lib/built-in.a                       494079 |     488689       3038       2352
--------------------------------------------------------------------------------
lib/*.o                              283551 |     279738       3605        208
lib/zstd/built-in.a                  217655 |     217655          0          0
lib/mpi/built-in.a                    38286 |      38206         32         48
lib/crypto/built-in.a                 19029 |      18505        524          0
lib/zlib_deflate/built-in.a           17786 |      15394        108       2284
lib/lz4/built-in.a                    17757 |      17757          0          0
lib/zlib_inflate/built-in.a           11310 |      11310          0          0
lib/xz/built-in.a                     10127 |      10055         72          0
lib/fonts/built-in.a                   4597 |       4597          0          0
lib/lzo/built-in.a                     4048 |       4048          0          0
lib/math/built-in.a                    2111 |       2099         12          0
--------------------------------------------------------------------------------
sum                                  626257 |     619364       4353       2540
delta                               -132178 |    -130675      -1315       -188


block                                 total |       text       data        bss
--------------------------------------------------------------------------------
block/built-in.a                     242212 |     219496      20060       2656
--------------------------------------------------------------------------------
block/*.o                            198068 |     176004      19428       2636
block/partitions/built-in.a           44144 |      43492        632         20
--------------------------------------------------------------------------------
sum                                  242212 |     219496      20060       2656
delta                                     0 |          0          0          0


crypto                                total |       text       data        bss
--------------------------------------------------------------------------------
crypto/built-in.a                    165559 |     151371      14113         75
--------------------------------------------------------------------------------
crypto/*.o                           145243 |     131544      13645         54
crypto/asymmetric_keys/built-in.a      20316 |      19827        468         21
--------------------------------------------------------------------------------
sum                                  165559 |     151371      14113         75
delta                                     0 |          0          0          0


arch/riscv                            total |       text       data        bss
--------------------------------------------------------------------------------
arch/riscv/built-in.a                117201 |      46516      43788      26897
--------------------------------------------------------------------------------
arch/riscv/kernel/built-in.a          67393 |      38009      27176       2208
arch/riscv/mm/built-in.a              49808 |       8507      16612      24689
arch/riscv/lib/built-in.a                24 |         16          8          0
--------------------------------------------------------------------------------
sum                                  117225 |      46532      43796      26897
delta                                   -24 |        -16         -8          0


security                              total |       text       data        bss
--------------------------------------------------------------------------------
security/built-in.a                   45740 |      43716       1944         80
--------------------------------------------------------------------------------
security/keys/built-in.a              40288 |      38340       1880         68
security/*.o                           5452 |       5376         64         12
--------------------------------------------------------------------------------
sum                                   45740 |      43716       1944         80
delta
```

#### 1.1.3 nm命令

nm命令可以查看内核模块中各个符号的尺寸。例如

```
$ nm --size -r vmlinux | head -10
0000000000058000 d _printk_rb_static_infos
0000000000020000 b __log_buf
0000000000018000 d _printk_rb_static_descs
0000000000008000 b write_buf.0
0000000000008000 d ftrace_stacks
0000000000003b88 r edid_cea_modes_1
0000000000003b2e T hidinput_connect
00000000000039c0 R v4l2_dv_timings_presets
0000000000002b4e t ntfs_fill_super
0000000000002b4c t ext4_fill_super
```

输出的结果共有三列数据，分别标识大小、符号类型、符号名。对于符号类型

- b/B - 符号位于bss段
- t/T - 符号位于text段
- d/D - 符号位于data段
- r/R - 符号位于rodata段

### 1.2 linux动态占用分析

#### 1.2.1 free

在linux用户态命令行中，执行free命令即可获得当前系统的内存使用情况

```
[root@canaan ~ ]#free
              total        used        free      shared  buff/cache   available
Mem:         106028       28260       39824          84       37944       57024
Swap:             0           0           0
```

- total：Linux内核可支配的内存
- used：系统已使用的内存
- free：系统空闲的内存
- shared：共享内存
- buff/cache：被 buffer 和 cache 使用的物理内存大小
- available：还可以被应用程序使用的物理内存大小

#### 1.2.2 /proc/meminfo节点

可通过cat /proc/meminfo进一步观察linux的内存使用情况

```
[root@canaan ~ ]#cat /proc/meminfo
MemTotal:         106028 kB
MemFree:           39744 kB
MemAvailable:      56976 kB
Buffers:             356 kB
Cached:            10052 kB
SwapCached:            0 kB
Active:             5024 kB
Inactive:           7008 kB
Active(anon):         84 kB
Inactive(anon):     1624 kB
Active(file):       4940 kB
Inactive(file):     5384 kB
Unevictable:           0 kB
Mlocked:               0 kB
SwapTotal:             0 kB
SwapFree:              0 kB
Dirty:                 0 kB
Writeback:             0 kB
AnonPages:          1660 kB
Mapped:             3520 kB
Shmem:                84 kB
KReclaimable:      27600 kB
Slab:              39244 kB
SReclaimable:      27600 kB
SUnreclaim:        11644 kB
KernelStack:         912 kB
PageTables:          240 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:       53012 kB
Committed_AS:      14572 kB
VmallocTotal:   67108863 kB
VmallocUsed:        2440 kB
VmallocChunk:          0 kB
Percpu:              136 kB
```

- MemTotal、MemFree、Buffers、Cached、SwapCached参考free的说明
- MemAvailable：使用MemFree、Active(file)、Inactive(file)、SReclaimable和/proc/zoneinfo中的low watermark根据特定算法计算得出，是一个估值，并不准确。可用来评估应用程序层面可用的内存。
- Active/Inactive: Active表示最近使用的内存，回收的优先级低；Inactive表示最近较少使用的内存，回收的优先极高。
- AnonPages 匿名页
- Mapped：设备或文件映射的大小。比如共享内存、动态库、mmap的文件等都统计在该内存中。
- slab/SReclaimable/SUnreclaim:内核slab使用的内存，包括可回收与不可回收部分。
- KernelStack：内核栈大小
- PageTables：页表的大小(用于将虚拟地址翻译为物理地址)，内存分配越多，此块儿内存就会增大。
- CommitLimit/Committed_AS: overcommit 的阈值/已经申请的内存大小(不是已分配)。Overcommit是Linux一种内存申请处理方式，为了跑更多更大的程序，大部分申请内存的请求都回复”yes”, 总申请的内存大于总物理内存。
- VmallocTotal/VmallocUsed/VmallocChunk: vmalloc区域大小/vmalloc区域使用大小/vmalloc区域中最大可用的连续区块大小。

## 2.大核内存占用分析

大核的内存主要包含以下内容

- rt-smart内核镜像静态占用
- rt-smart堆内存，主要是rt-smart内核使用
- rt-smart页内存，主要是用户态的malloc使用
- 多媒体使用的mmz内存，多媒体设备专用内存

### 2.1 静态分析

#### 2.1.1 使用size工具

使用size工具可以查看rt-smart镜像的text、data、bss等大小，rtthread.elf所在位置为 `k230_sdk/output/k230_evb_defconfig/big/rt-smart$`

```
$ size -G rtthread.elf
      text       data        bss      total filename
   3052420      26852     612126    3691398 rtthread.elf
```

### 2.2 动态分析

#### 2.2.1 堆内存

使用free命令查看rt-smart的堆内存使用情况，单位字节

```
msh />free
memheap               pool size  max used size available size
-------------------- ---------- ------------- --------------
heap                 33554432   1111520       33141096
```

- pool size 堆物理内存总大小
- max used size 历史最大占用物理内存
- available size 当前可用物理内存

#### 2.2.2 页内存

使用list_page查看页内存

```
msh />list_page
level 0 [0x07ffc000][0x07b5c000][0x07b68000]
level 1 [0x0315e000][0x07b6a000][0x07b5e000]
level 2 [0x07ff8000][0x07b6c000][0x07b58000]
level 3 [0x07b50000][0x07b60000]
level 4 [0x07b40000][0x07b70000][0x07fe0000]
level 5 [0x03160000][0x07fc0000]
level 6 [0x07b00000][0x07f80000]
level 7 [0x07b80000][0x03180000][0x07f00000]
level 8 [0x07a00000][0x07e00000]
level 9 [0x03200000][0x07800000][0x07c00000]
level 10 [0x03400000]
level 11 [0x07000000][0x03800000]
level 12 [0x06000000]
level 13 [0x04000000]
level 14
level 15
level 16
level 17
level 18
level 19
level 20
level 21
level 22
level 23
level 24
level 25
level 26
level 27
level 28
level 29
level 30
level 31
level 32
level 33
level 34
level 35
level 36
level 37
level 38
level 39
level 40
level 41
level 42
level 43
level 44
level 45
level 46
level 47
level 48
level 49
level 50
level 51
free pages is 00004e95
used pages is 0000000d
max used pages is 00000992
max used pages memory is 10035200 bytes
-------------------------------
```

- free pages 当前可用的page的个数
- used pages 当前已用的page个数
- max used pages 历史最大使用的page个数

#### 2.2.3 多媒体专用内存

可使用/proc/文件系统查看

```
msh />cat /proc/media-mem
+---ZONE: PHYS(0x10000000, 0x1FAFFFFF), GFP=0, nBYTES=257024KB,    NAME="anonymous"

---MMZ_USE_INFO:
 total size=257024KB(251MB),used=0KB(0MB + 0KB),remain=257024KB(251MB + 0KB),zone_number=1,block_number=0
```