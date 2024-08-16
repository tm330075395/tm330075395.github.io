"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2780],{21789:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var l=i(74848),t=i(28453);const r={sidebar_position:3},d="K230 GPU \u5e94\u7528\u5b9e\u6218 - VGLite \u7ed8\u5236\u9177\u70ab\u56fe\u5f62",c={id:"CanaanK230/part3/K230GPUPracticalapplication-VGLitedrawscoolgraphics",title:"K230 GPU \u5e94\u7528\u5b9e\u6218 - VGLite \u7ed8\u5236\u9177\u70ab\u56fe\u5f62",description:"1.\u6982\u5ff5\u4ecb\u7ecd",source:"@site/docs/CanaanK230/part3/03_K230GPUPracticalapplication-VGLitedrawscoolgraphics.md",sourceDirName:"CanaanK230/part3",slug:"/CanaanK230/part3/K230GPUPracticalapplication-VGLitedrawscoolgraphics",permalink:"/docs/CanaanK230/part3/K230GPUPracticalapplication-VGLitedrawscoolgraphics",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CanaanK230/part3/03_K230GPUPracticalapplication-VGLitedrawscoolgraphics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"canaanK230Sidebar",previous:{title:"K230 AI\u5b9e\u6218 - HHB\u795e\u7ecf\u7f51\u7edc\u6a21\u578b\u90e8\u7f72\u5de5\u5177",permalink:"/docs/CanaanK230/part3/K230AIActualcombatHHBNeuralNetworkModelDeploymentTool"},next:{title:"K230 GUI\u5b9e\u6218 - LVGL\u79fb\u690d\u6559\u7a0b",permalink:"/docs/CanaanK230/part3/K230GUIpractical LVGLportingtutorials"}},s={},a=[{value:"1.\u6982\u5ff5\u4ecb\u7ecd",id:"1\u6982\u5ff5\u4ecb\u7ecd",level:2},{value:"1.1 \u77e2\u91cf\u56fe\u57fa\u7840",id:"11-\u77e2\u91cf\u56fe\u57fa\u7840",level:3},{value:"1.2 GPU \u57fa\u7840",id:"12-gpu-\u57fa\u7840",level:3},{value:"2.\u4f7f\u7528 VGLite API",id:"2\u4f7f\u7528-vglite-api",level:2},{value:"2.1 \u5f00\u53d1\u73af\u5883\u51c6\u5907",id:"21-\u5f00\u53d1\u73af\u5883\u51c6\u5907",level:3},{value:"2.2.1 make",id:"221-make",level:4},{value:"2.2.2 CMake",id:"222-cmake",level:4},{value:"2.2 \u663e\u793a",id:"22-\u663e\u793a",level:3},{value:"3.\u7ed8\u56fe",id:"3\u7ed8\u56fe",level:2},{value:"3.1 \u4e00\u4e9b\u51c6\u5907",id:"31-\u4e00\u4e9b\u51c6\u5907",level:3},{value:"3.2 \u591a\u8fb9\u5f62",id:"32-\u591a\u8fb9\u5f62",level:3},{value:"3.3 \u66f2\u7ebf",id:"33-\u66f2\u7ebf",level:3},{value:"3.4 \u4f4d\u56fe\u586b\u5145",id:"34-\u4f4d\u56fe\u586b\u5145",level:3},{value:"3.5 \u6e10\u53d8",id:"35-\u6e10\u53d8",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"k230-gpu-\u5e94\u7528\u5b9e\u6218---vglite-\u7ed8\u5236\u9177\u70ab\u56fe\u5f62",children:"K230 GPU \u5e94\u7528\u5b9e\u6218 - VGLite \u7ed8\u5236\u9177\u70ab\u56fe\u5f62"})}),"\n",(0,l.jsx)(n.h2,{id:"1\u6982\u5ff5\u4ecb\u7ecd",children:"1.\u6982\u5ff5\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.h3,{id:"11-\u77e2\u91cf\u56fe\u57fa\u7840",children:"1.1 \u77e2\u91cf\u56fe\u57fa\u7840"}),"\n",(0,l.jsx)(n.p,{children:"\u77e2\u91cf\u56fe\u5f62\u662f\u7528\u70b9\u3001\u76f4\u7ebf\u6216\u8005\u591a\u8fb9\u5f62\u7b49\u57fa\u4e8e\u6570\u5b66\u65b9\u7a0b\u7684\u51e0\u4f55\u56fe\u5143\u8868\u793a\u7684\u56fe\u50cf\uff0c\u77e2\u91cf\u56fe\u5f62\u4e0e\u4f7f\u7528\u50cf\u7d20\u8868\u793a\u56fe\u50cf\u7684\u4f4d\u56fe\u4e0d\u540c\uff0c\u53ef\u4ee5\u65e0\u9650\u653e\u5927\u800c\u4e0d\u5931\u771f\u3002SVG\u662f\u4e00\u79cd\u5178\u578b\u7684\u77e2\u91cf\u56fe\u683c\u5f0f\uff0c\u5176\u672c\u8eab\u662fXML\u6587\u672c\u6587\u4ef6\uff0c\u63cf\u8ff0\u5404\u79cd\u56fe\u5143\u7684\u4f4d\u7f6e\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00\u5373\u53ef\u770b\u5230\u6e32\u67d3\u540e\u7684\u6548\u679c\uff0c\u5982\u679c\u4f60\u5b8c\u5168\u4e0d\u4e86\u89e3 K230 GPU \u4f7f\u7528\u7684 VGLite API\uff0c\u53ef\u4ee5\u628a\u4ed6\u770b\u6210\u662f\u4e00\u4e2a\u5f31\u5316\u7248\u7684 SVG\u3002"}),"\n",(0,l.jsx)(n.p,{children:"K230 GPU \u652f\u6301\u591a\u79cd\u4e8c\u7ef4\u56fe\u5143"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u76f4\u7ebf"}),"\n",(0,l.jsx)(n.li,{children:"\u4e8c\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf"}),"\n",(0,l.jsx)(n.li,{children:"\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf"}),"\n",(0,l.jsx)(n.li,{children:"\u5706\u66f2\u7ebf\uff08\u5f53\u7136\u4e5f\u53ef\u4ee5\u7528\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u62df\u5408\uff09"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a",(0,l.jsx)(n.strong,{children:"\u8fd9\u4e9b\u56fe\u5f62\u90fd\u662f\u7ebf\u6761\uff0cGPU \u4e0d\u80fd\u76f4\u63a5\u7ed8\u5236\u7ebf\u6761\uff0c\u53ea\u80fd\u7ed8\u5236\u7531\u8fd9\u4e9b\u7ebf\u6761\u56f4\u6210\u7684\u95ed\u5408\u56fe\u5f62\u3002"})]}),"\n",(0,l.jsx)(n.h3,{id:"12-gpu-\u57fa\u7840",children:"1.2 GPU \u57fa\u7840"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 K230 SDK \u7684\u5c0f\u6838 Linux \u4e0a\uff0c\u4e3b\u8981\u901a\u8fc7\u8c03\u7528 VGLite API \u6765\u4e0e GPU \u4ea4\u4e92\u3002VGLite \u5185\u90e8\u4f1a\u7ef4\u62a4\u4e00\u4e2a GPU \u7684\u547d\u4ee4\u961f\u5217\uff0c\u5f53\u9700\u8981\u5b8c\u6210\u7ed8\u5236\uff0c\u6216\u8005\u961f\u5217\u6ee1\u65f6\u4f1a\u63d0\u4ea4\u5230 GPU \u786c\u4ef6\u8fdb\u884c\u6e32\u67d3\u3002\u547d\u4ee4\u961f\u5217\u7684\u957f\u5ea6\u9ed8\u8ba4\u4e3a65536\uff0c\u53ef\u4ee5\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"vg_lite_set_command_buffer_size"})," \u51fd\u6570\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a",(0,l.jsx)(n.strong,{children:"VGLite API \u4e0d\u652f\u6301\u5728\u591a\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528\uff0c\u5982\u679c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u4e86\u591a\u7ebf\u7a0b\uff0c\u8bf7\u786e\u4fdd\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u4f1a\u4f7f\u7528VGLite API"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"K230 GPU \u662f\u4e00\u4e2a memory-to-memory \u8bbe\u5907\uff0c\u672c\u8eab\u4e0d\u5177\u5907\u663e\u793a\u8f93\u51fa\u80fd\u529b\uff0c\u5982\u679c\u9700\u8981\u663e\u793a\u53ef\u4ee5\u4e0e DRM \u914d\u5408\u4f7f\u7528\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"2\u4f7f\u7528-vglite-api",children:"2.\u4f7f\u7528 VGLite API"}),"\n",(0,l.jsx)(n.h3,{id:"21-\u5f00\u53d1\u73af\u5883\u51c6\u5907",children:"2.1 \u5f00\u53d1\u73af\u5883\u51c6\u5907"}),"\n",(0,l.jsx)(n.p,{children:"VGLite API \u4e3b\u8981\u5305\u542b\u4e24\u4e2a\u90e8\u5206\uff0c\u5934\u6587\u4ef6\u548c\u5e93\u6587\u4ef6\uff0c\u5176\u4e2d\u5934\u6587\u4ef6\u7684\u4f4d\u7f6e\u5728"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"<K230 SDK>/src/little/buildroot-ext/package/vg_lite/inc/vg_lite.h\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5c06 K230 SDK \u5b8c\u6574\u7f16\u8bd1\u540e\uff0c\u5e93\u6587\u4ef6\u4f1a\u653e\u5728"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"<K230 SDK>/output/k230_evb_defconfig/little/buildroot-ext/target/usr/lib/libvg_lite.so\n"})}),"\n",(0,l.jsx)(n.h4,{id:"221-make",children:"2.2.1 make"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u4ee3\u7801\u7684\u6e90\u6587\u4ef6\u653e\u5230 ",(0,l.jsx)(n.code,{children:"src"})," \u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u4e00\u4e2a Makefile \u5e76\u5c06\u5982\u4e0b\u5185\u5bb9\u7c98\u8d34\u8fdb\u53bb\uff0c\u8bbe\u7f6e",(0,l.jsx)(n.code,{children:"K230SDK"}),"\u73af\u5883\u53d8\u91cf\u4e3a\u5b58\u653e K230 SDK \u7684\u8def\u5f84\uff08\u6216\u8005\u5c06\u7b2c\u4e00\u884c\u7684 ",(0,l.jsx)(n.code,{children:"/path/to/k230_sdk"}),"\u6539\u4e3a\u5b58\u653eK230 SDK\u7684\u8def\u5f84\uff09\uff0c\u5373\u53ef\u4f7f\u7528",(0,l.jsx)(n.code,{children:"make"}),"\u547d\u4ee4\u8fdb\u884c\u6784\u5efa\uff0c\u6784\u5efa\u5b8c\u6210\u540e\u5c06\u5728 Makefile \u540c\u7ea7\u76ee\u5f55\u4e0b\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u5c06\u5176\u62f7\u8d1d\u5230\u5c0f\u6838 linux \u4e0a\u8fd0\u884c\u5373\u53ef\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"make install"})," \u5c06\u5176\u62f7\u8d1d\u5230 K230 SDK\uff0c\u518d\u5230 K230 SDK \u76ee\u5f55\u4e0b\u6784\u5efa\u955c\u50cf\uff0c\u518d\u70e7\u5f55\u5230 SD \u5361\u6216 eMMC \u542f\u52a8\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'K230SDK ?= /path/to/k230_sdk\nBIN := test-vglite\n\nCC := "$(K230SDK)/toolchain/Xuantie-900-gcc-linux-5.10.4-glibc-x86_64-V2.6.0/bin/riscv64-unknown-linux-gnu-gcc"\nCXX := "$(K230SDK)/toolchain/Xuantie-900-gcc-linux-5.10.4-glibc-x86_64-V2.6.0/bin/riscv64-unknown-linux-gnu-g++"\n\nCFLAGS += -I"$(K230SDK)/src/little/buildroot-ext/package/vg_lite/inc" -I"$(K230SDK)/output/k230_evb_defconfig/little/buildroot-ext/host/riscv64-buildroot-linux-gnu/sysroot/usr/include"\nCFLAGS += -L"$(K230SDK)/output/k230_evb_defconfig/little/buildroot-ext/target/usr/lib"\nCFLAGS += -lvg_lite -lvg_lite_util -ldrm\nCFLAGS += -Wall -g\n\nCXXFLAGS := $(CFLAGS)\n\nSRCDIR := ./src\nOBJDIR := ./objs\nSRCS := $(wildcard $(SRCDIR)/*.c) $(wildcard $(SRCDIR)/*.cpp)\nOBJS := $(patsubst $(SRCDIR)/%.c,$(OBJDIR)/%.o,$(filter %.c, $(SRCS))) \\\n        $(patsubst $(SRCDIR)/%.cpp,$(OBJDIR)/%.o,$(filter %.cpp, $(SRCS)))\nDEPS := $(patsubst $(SRCDIR)/%.c,$(OBJDIR)/%.d,$(filter %.c, $(SRCS))) \\\n        $(patsubst $(SRCDIR)/%.cpp,$(OBJDIR)/%.d,$(filter %.cpp, $(SRCS)))\n\nall: $(BIN)\n\n$(OBJDIR):\n\tmkdir -p $(OBJDIR)\n\n$(BIN): $(OBJS)\n\t$(CXX) $(CXXFLAGS) $(OBJS) -o $@\n\n$(OBJDIR)/%.o: $(SRCDIR)/%.c | $(OBJDIR)\n\t$(CC) $(CFLAGS) -MMD -c $< -o $@\n\n$(OBJDIR)/%.o: $(SRCDIR)/%.cpp | $(OBJDIR)\n\t$(CXX) $(CXXFLAGS) -MMD -c $< -o $@\n\n-include $(DEPS)\n\nclean:\n\trm -rf $(OBJDIR) $(BIN)\n\ninstall:\n\tcp $(BIN) "$(K230SDK)/output/k230_evb_defconfig/little/buildroot-ext/target/usr/bin"\n\nuninstall:\n\trm "$(K230SDK)/output/k230_evb_defconfig/little/buildroot-ext/target/usr/bin/$(BIN)"\n\n.PHONY: all clean install\n'})}),"\n",(0,l.jsx)(n.h4,{id:"222-cmake",children:"2.2.2 CMake"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u4ee3\u7801\u7684\u6e90\u6587\u4ef6\u653e\u5230 ",(0,l.jsx)(n.code,{children:"src"})," \u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"CMakeLists.txt"})," \u6587\u4ef6\u5e76\u7c98\u8d34\u5982\u4e0b\u5185\u5bb9\u8fdb\u53bb\uff0c\u5c06\u7b2c\u4e09\u884c\u7684",(0,l.jsx)(n.code,{children:"/path/to/k230_sdk"}),"\u4fee\u6539\u4e3a\u5b58\u653e K230 SDK \u7684\u76ee\u5f55\uff0c\u5373\u53ef\u4f7f\u7528 cmake \u6784\u5efa\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'cmake_minimum_required(VERSION 3.0)\nproject(test-vglite)\nset(K230SDK /path/to/k230_sdk)\n\nset(CMAKE_C_COMPILER "${K230SDK}/toolchain/Xuantie-900-gcc-linux-5.10.4-glibc-x86_64-V2.6.0/bin/riscv64-unknown-linux-gnu-gcc")\nset(CMAKE_CXX_COMPILER "${K230SDK}/toolchain/Xuantie-900-gcc-linux-5.10.4-glibc-x86_64-V2.6.0/bin/riscv64-unknown-linux-gnu-g++")\nset(CMAKE_C_FLAGS "-Wall")\nset(CMAKE_CXX_FLAGS "-Wall")\n\ninclude_directories(\n    "${K230SDK}/output/k230_evb_defconfig/little/buildroot-ext/host/riscv64-buildroot-linux-gnu/sysroot/usr/include"\n    "${K230SDK}/src/little/buildroot-ext/package/vg_lite/inc"\n)\n\nlink_directories("${K230SDK}/output/k230_evb_defconfig/little/buildroot-ext/target/usr/lib")\nlink_libraries(vg_lite vg_lite_util drm)\n\nfile(GLOB SOURCES "src/*.c" "src/*.cpp")\n\nadd_executable(${PROJECT_NAME} ${SOURCES})\n\ninstall(TARGETS ${PROJECT_NAME} DESTINATION "${K230SDK}/output/k230_evb_defconfig/little/buildroot-ext/target/usr/bin")\n'})}),"\n",(0,l.jsx)(n.h3,{id:"22-\u663e\u793a",children:"2.2 \u663e\u793a"}),"\n",(0,l.jsxs)(n.p,{children:["K230 EVB \u6709\u4e00\u4e2a1080x1920\u7684\u663e\u793a\u5c4f\uff0c\u5728\u5c0f\u6838linux\u4e0a\u53ef\u4ee5\u7528 DRM \u8fdb\u884c\u663e\u793a\uff0c\u8ba9 GPU \u9a71\u52a8\u52a0\u8f7d DRM dumb buffer \u53ef\u4ee5\u51cf\u5c11\u5185\u5b58\u62f7\u8d1d\uff0c\u5b9e\u73b0\u9ad8\u6548\u6e32\u67d3\u3002GPU+DRM \u7684\u76f8\u5173\u4ee3\u7801\u53ef\u4ee5\u53c2\u8003 ",(0,l.jsx)(n.code,{children:"vglite_drm"})," \u8fd9\u4e2a demo\uff0c\u8bfb\u8005\u53ef\u4ee5\u5c06 ",(0,l.jsx)(n.code,{children:"drm.c"})," \u6dfb\u52a0\u5230\u81ea\u5df1\u7684\u7a0b\u5e8f\u4e2d\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u622a\u81f3 K230 SDK v0.8\uff0clinux \u4e0a\u7684 DRM \u9a71\u52a8\u4ecd\u7136",(0,l.jsx)(n.strong,{children:"\u4e0d\u80fd"}),"\u72ec\u7acb\u5de5\u4f5c\uff0c\u9700\u8981\u4f9d\u8d56\u5927\u6838\u5bf9 SoC \u89c6\u9891\u8f93\u51fa\u6a21\u5757\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728\u5927\u6838\u4e0a\u6267\u884c ",(0,l.jsx)(n.code,{children:"sample_vo.elf 3"})," \u6765\u5b8c\u6210\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u6b21 DRM \u7684\u989c\u8272\u683c\u5f0f\u679a\u4e3e\u4e0e ",(0,l.jsx)(n.code,{children:"vg_lite_buffer_format_t"})," \u5e76\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u4f8b\u5982 ",(0,l.jsx)(n.code,{children:"VGLITE_BGRA8888"})," \u8868\u793a\u7684\u662f\u7ea2\u8272\u5728\u4f4e8\u4f4d\uff0calpha\u5728\u9ad88\u4f4d\u768432\u4f4d\u989c\u8272\uff0c\u5bf9\u5e94 DRM \u4e2d\u7684 ",(0,l.jsx)(n.code,{children:"DRM_FORMAT_ARGB8888"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"vglite_drm demo \u8fd0\u884c\u7ed3\u679c",src:i(45868).A+"",width:"1080",height:"1440"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u56fe\u662f vglite_drm \u8fd0\u884c\u540e\u5c4f\u5e55\u6b63\u786e\u663e\u793a\u7684\u989c\u8272\uff1aR(255)G(128)B(16)"}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u822c\u6765\u8bf4\u4e3a\u4e86\u5b9e\u73b0\u540c\u6b65\u663e\u793a\u4f1a\u9700\u8981\u4e24\u5f20 buffer \u8fdb\u884c ping-pong \u4ea4\u66ff\u663e\u793a\uff0c\u4f46\u662f\u4e3a\u4e86\u7b80\u5316\u6f14\u793a\u4ee3\u7801\u8fd9\u91cc\u5c31\u53ea\u7528\u4e86\u4e00\u5f20\uff0c\u8bfb\u8005\u53ef\u4ee5\u81ea\u884c\u5b9e\u73b0\u5782\u76f4\u540c\u6b65\u7684\u53cc\u91cd\u7f13\u51b2\u533a\u8fdb\u884c\u8fde\u7eed\u6e32\u67d3\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"3\u7ed8\u56fe",children:"3.\u7ed8\u56fe"}),"\n",(0,l.jsx)(n.h3,{id:"31-\u4e00\u4e9b\u51c6\u5907",children:"3.1 \u4e00\u4e9b\u51c6\u5907"}),"\n",(0,l.jsxs)(n.p,{children:["\u9996\u5148\u9700\u8981\u521d\u59cb\u5316 VGLite\uff0c\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"vg_lite_init"})," \u6765\u5b8c\u6210\uff0c\u5b83\u6709\u4e24\u4e2a\u53c2\u6570 ",(0,l.jsx)(n.code,{children:"tessellation_width"})," \u548c ",(0,l.jsx)(n.code,{children:"tessellation_height"}),"\uff0c\u7528\u4e8e\u6e32\u67d3\u7a97\u53e3\u7684\u5927\u5c0f\uff0c\u8d8a\u5927\u7684\u8bdd\u6548\u7387\u8d8a\u9ad8\uff0c\u5982\u679c\u4e3a0\u5219\u8868\u793a\u4e0d\u4f7f\u7528\u77e2\u91cf\u7ed8\u5236\u529f\u80fd\uff0c\u53ea\u80fd BLIT\uff0c\u901a\u5e38\u4f1a\u8bbe\u7f6e\u4e3a\u6700\u5927 buffer \u7684\u5927\u5c0f\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u6e32\u67d3\u9700\u8981 buffer\uff0c\u53ef\u4ee5\u4ece DRM dumb \u5bfc\u5165\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'vg_lite_buffer_t buffer;\nint buf_fd;\nmemset(&buffer, 0, sizeof(buffer));\nbuf_fd = drm_get_dmabuf_fd(0);\nif (buf_fd < 0) {\n    perror("get fd");\n    return buf_fd;\n}\nmemset(&buffer, 0, sizeof(buffer));\nbuffer.width = width;\nbuffer.height = height;\nbuffer.format = VG_LITE_ARGB8888;\nbuffer.stride = buffer.width * 4;\nbuffer.memory = buffer.memory = drm_get_map(0);\nif (vg_lite_map(&buffer, VG_LITE_MAP_DMABUF, buf_fd)) {\n    perror("import dma-buf");\n    return -1;\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u4ece GPU \u9a71\u52a8\u5206\u914d\u79bb\u5c4f buffer\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"vg_lite_buffer_t buffer;\nmemset(&buffer, 0, sizeof(buffer));\nbuffer.width = width;\nbuffer.height = height;\nbuffer.format = VG_LITE_ARGB8888;\nif (vg_lite_allocate(&buffer)) {\n    return -1;\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u663e\u7136\u5206\u914d\u79bb\u5c4f buffer \u66f4\u7b80\u5355\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u5206\u8fa8\u7387\u548c\u50cf\u7d20\u683c\u5f0f\u5373\u53ef\uff0c\u800c\u4ece DRM dumb \u5bfc\u5165\u8fd8\u9700\u8981\u81ea\u5df1\u8ba1\u7b97 stride(\u4e00\u884c\u50cf\u7d20\u7684\u5b57\u8282\u6570\u91cf)\uff0c\u5f53\u7136\u4ece DRM dumb \u5bfc\u5165\u7684\u597d\u5904\u5c31\u662f\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8e\u663e\u793a\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"32-\u591a\u8fb9\u5f62",children:"3.2 \u591a\u8fb9\u5f62"}),"\n",(0,l.jsxs)(n.p,{children:["\u6709 buffer \u5c31\u53ef\u4ee5\u5f00\u59cb\u7ed8\u5236\u4e86\u3002\u591a\u8fb9\u5f62\u7531\u591a\u6761\u76f4\u7ebf\u7ec4\u6210\uff0c\u4ee5\u4e09\u89d2\u5f62\u4e3a\u4f8b\uff0c\u9996\u5148\u9700\u8981\u786e\u5b9a\u4e09\u89d2\u5f62\u4e09\u4e2a\u9876\u70b9\u7684\u5750\u6807\uff0c\u4f8b\u5982",(0,l.jsx)(n.code,{children:"(0,0) (0,1) (1,0)"}),"\uff0c\u6574\u4e2a\u8fc7\u7a0b\u5982\u4e0b"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5c06\u753b\u7b14\u79fb\u52a8\u5230",(0,l.jsx)(n.code,{children:"(0,0)"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u753b\u4e00\u6761\u7ebf\u5230",(0,l.jsx)(n.code,{children:"(0,1)"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u753b\u4e00\u6761\u7ebf\u5230",(0,l.jsx)(n.code,{children:"(1,0)"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u753b\u4e00\u6761\u7ebf\u5230",(0,l.jsx)(n.code,{children:"(0,0)"})]}),"\n",(0,l.jsx)(n.li,{children:"\u95ed\u5408\u56fe\u5f62"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u67e5\u9605K230 GPU API\u53c2\u8003\u53ef\u4ee5\u770b\u5230\u79fb\u52a8\u7684\u64cd\u4f5c\u7801\u662f2\uff0c\u76f4\u7ebf\u7684\u64cd\u4f5c\u7801\u662f4\uff0c\u95ed\u5408\u8def\u5f84\u7684\u64cd\u4f5c\u7801\u662f0\uff0c\u4f7f\u7528\u7b2c\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u53ef\u4ee5\u6784\u9020 ",(0,l.jsx)(n.code,{children:"path_data"})," \u6570\u7ec4\u5982\u4e0b"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"uint8_t path_data[] = {\n    2, 0, 0, // \u79fb\u52a8\u5230 (0,0)\n    4, 0, 1, // \u76f4\u7ebf\u5230 (0,1)\n    4, 1, 0, // \u76f4\u7ebf\u5230 (1,0)\n    4, 0, 0, // \u76f4\u7ebf\u5230 (0,0)\n0};\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ea\u6709 path_data \u8fd8\u662f\u4e0d\u591f\u7684\uff0c\u6e32\u67d3\u9700\u8981\u7684\u53c2\u6570\u662f path\uff0cpath \u4e2d\u9664\u4e86 path_data \u5916\u8fd8\u5305\u542b\u6570\u636e\u683c\u5f0f\u7b49\u4fe1\u606f\uff0c\u6570\u636e\u7684\u683c\u5f0f\u53ef\u4ee5\u6307\u5b9a\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"8bit \u6709\u7b26\u53f7\u6574\u6570"}),"\n",(0,l.jsx)(n.li,{children:"16bit \u6709\u7b26\u53f7\u6574\u6570"}),"\n",(0,l.jsx)(n.li,{children:"32bit \u6709\u7b26\u53f7\u6574\u6570"}),"\n",(0,l.jsx)(n.li,{children:"32bit \u6d6e\u70b9\u6570"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u4ece\u4e0a\u5230\u4e0b\u6027\u80fd\u4f9d\u6b21\u9012\u51cf\uff0c\u4e0d\u8fc7\u5373\u4f7f\u662f8bit\u6709\u7b26\u53f7\u6574\u6570\u4e5f\u4e0d\u610f\u5473\u7740\u53ea\u80fd\u8986\u76d6-128\u5230127\u7684\u50cf\u7d20\u8303\u56f4\uff0c\u56e0\u4e3a\u8fd8\u9700\u8981\u77e9\u9635\u53d8\u6362\u6765\u8ba1\u7b97\u6700\u7ec8\u5750\u6807\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u73b0\u5728\u6784\u9020 path\uff0c\u5e76\u7ed8\u5236\u5230 buffer"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"vg_lite_path_t path = {\n    .bounding_box = {0., 1., 1., 0.}, // \u56fe\u5f62\u7684\u5305\u56f4\u76d2\n    .quality = VG_LITE_HIGH, // \u6e32\u67d3\u8d28\u91cf\n    .format = VG_LITE_S8, // \u8003\u8651\u5230\u5750\u6807\u5f88\u7b80\u5355\uff0c\u6240\u4ee5 8bit \u8db3\u591f\n    .uploaded = 0, // \u8def\u5f84\u6ca1\u6709\u88ab\u4e0a\u4f20\u8fc7 GPU\uff0c\u6240\u4ee5\u75280\n    .path_length = sizeof(path_data), // \u8def\u5f84\u6570\u636e\u957f\u5ea6\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\n    .path = path_data, // \u8def\u5f84\u6570\u636e\u5c31\u653e\u5728\u8fd9\u4e86\n    .path_changed = 1, // \u7528\u6765\u8868\u793a\u8def\u5f84\u88ab\u66f4\u65b0\u8fc7\n    .pdata_internal = 0 // \u8868\u793a\u8def\u5f84\u6570\u636e\u4e0d\u662f\u7531\u9a71\u52a8\u5206\u914d\u7684\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6709\u4e86\u4e0a\u9762\u90a3\u4e9b\u53d8\u91cf\u540e\u5c31\u53ef\u4ee5\u6267\u884c\u6e32\u67d3\u4e86\uff0c\u6b65\u9aa4\u5982\u4e0b"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5c06 buffer \u6e05\u7a7a\uff0c\u5373\u7528\u4e00\u4e2a\u5355\u8272\u586b\u5145\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"vg_lite_clear"})," \u6765\u5b8c\u6210"]}),"\n",(0,l.jsx)(n.li,{children:"\u4e00\u4e2a\u53d8\u6362\u77e9\u9635\uff0c\u5173\u4e8e\u77e9\u9635\u53ef\u4ee5\u53c2\u8003\u4eff\u5c04\u53d8\u6362\u6709\u5173\u7684\u5185\u5bb9\uff0c\u8fd9\u91cc\u76f4\u63a5\u4f7f\u7528\u4e00\u4e2a\u7f29\u653e\u77e9\u9635\uff0c\u5c06\u56fe\u50cf\u653e\u5927100\u500d\uff0c\u8fd9\u6837\u6700\u7ec8\u957f\u5ea6\u4e3a1\u7684\u76f4\u7ebf\u5728\u56fe\u50cf\u4e2d\u4f1a\u4f7f\u7528100\u4e2a\u50cf\u7d20"}),"\n",(0,l.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"vg_lite_draw"})," \u6765\u5c06 path \u201c\u6e32\u67d3\u201d\u5230 buffer"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6700\u540e\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"vg_lite_finish"})," \u63d0\u4ea4\u6e32\u67d3"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e3a\u4e86\u65b9\u4fbf\u9519\u8bef\u5904\u7406\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"CHECK_ERROR"})," \u5b8f\u6765\u5305\u88f9\u8fd4\u56de ",(0,l.jsx)(n.code,{children:"vg_lite_error_t"})," \u7684\u51fd\u6570"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"vg_lite_matrix_t matrix;\nCHECK_ERROR(vg_lite_clear(&buffer, NULL, 0xffff0000)); // \u4f7f\u7528\u84dd\u8272\u586b\u5145\u6574\u4e2a buffer\nvg_lite_identity(&matrix); // \u521d\u59cb\u5316\u4e3a\u5355\u4f4d\u77e9\u9635\nvg_lite_translate(buffer.width / 2., buffer.height / 2., &matrix); // \u79fb\u52a8\u5230 buffer \u4e2d\u95f4\u4f4d\u7f6e\nvg_lite_scale(100., 100., &matrix); // x y \u65b9\u5411\u90fd\u653ed\u5927100\u500d\nCHECK_ERROR(vg_lite_draw(\n    &buffer, &path,\n    VG_LITE_FILL_NON_ZERO, //  \u586b\u5145\u89c4\u5219\uff0c\u50cf\u7d20\u53ea\u8981\u88ab\u8986\u76d6\u5c31\u4f1a\u88ab\u7ed8\u5236\n    &matrix,\n    VG_LITE_BLEND_NONE, // \u989c\u8272\u6df7\u5408\u89c4\u5219\uff0cNone \u8868\u793a\u5ffd\u7565\u900f\u660e\u5ea6\u76f4\u63a5\u8986\u76d6\n    0xff0000ff // RGBA \u989c\u8272\uff0c\u8fd9\u4e2a\u503c\u8868\u793a\u4e0d\u900f\u660e\u7684\u7ea2\u8272\n));\nCHECK_ERROR(vg_lite_finish()); // \u63d0\u4ea4\u5230 GPU\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5b8c\u6574\u7684\u53c2\u8003\u4ee3\u7801\u53ef\u4ee5\u5728 vglite_drm \u4e2d\u67e5\u770b\uff0c\u4e0b\u9762\u662f\u7ed8\u5236\u51fa\u6765\u7684\u6548\u679c\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u7ed8\u5236\u7684\u7b80\u5355\u4e09\u89d2\u5f62",src:i(72315).A+"",width:"1080",height:"1440"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u53d1\u73b0\uff0c\u5750\u6807\u7cfb\u662f\u4ee5\u53f3\u4e3ax\u6b63\u65b9\u5411\uff0c\u4ee5\u4e0b\u4e3ay\u6b63\u65b9\u5411\uff0c\u8fd9\u4e5f\u662f SVG \u6240\u4f7f\u7528\u7684\u5750\u6807\u7cfb\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6211\u521a\u624d\u8bf4\u5230 ",(0,l.jsx)(n.code,{children:"vg_lite_draw"})," \u65f6\u201c\u6e32\u67d3\u201d\u662f\u6253\u4e86\u5f15\u53f7\u7684\uff0c\u56e0\u4e3a\u5e76\u6ca1\u6709\u771f\u7684\u6e32\u67d3\uff0c\u53ea\u662f\u5199\u5165\u6e32\u67d3\u6307\u4ee4\uff0c\u6700\u7ec8\u6e32\u67d3\u9700\u8981\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"vg_lite_finish"}),"\uff0c\u8fd9\u6837\u5bf9\u6027\u80fd\u662f\u6709\u597d\u5904\u7684\uff0c\u5b9e\u9645\u4f7f\u7528\u4e2d\u53ef\u4ee5\u591a\u6b21\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"vg_lite_draw"}),"\uff0c\u518d\u6700\u540e\u5b9e\u9645\u663e\u793a\u524d\u518d\u6267\u884c ",(0,l.jsx)(n.code,{children:"vg_lite_finish"}),"\uff0c\u56e0\u4e3a ",(0,l.jsx)(n.code,{children:"vg_lite_finish"}),"\u662f\u7cfb\u7edf\u8c03\u7528\uff0c\u5b58\u5728\u4e00\u5b9a\u5f00\u9500\uff0c\u800c ",(0,l.jsx)(n.code,{children:"vg_lite_draw"})," \u4e0d\u662f\uff0c\u53ef\u4ee5\u6267\u884c\u5f97\u5f88\u5feb\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u6e32\u67d3\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5c06\u7ed3\u679c\u663e\u793a\u5230\u5c4f\u5e55\u6216\u8005\u4fdd\u5b58\u4e3a\u56fe\u7247\uff0c\u9700\u8981\u6ce8\u610f\u4fdd\u5b58\u56fe\u7247\u65f6\u662f\u7528 CPU \u6765\u8bfb\u53d6\u6570\u636e\u7684\uff0c\u6240\u4ee5\u9700\u8981\u786e\u4fdd ",(0,l.jsx)(n.code,{children:"vg_lite_buffer_t::memory"})," \u53ef\u8bfb\uff0c\u5982\u679c\u8bfb\u8005\u4f7f\u7528\u4e0a\u9762 DRM \u7684\u4ee3\u7801\u6765\u521b\u5efa ",(0,l.jsx)(n.code,{children:"vg_lite_buffer_t"}),"\uff0c\u90a3\u4e48\u6ca1\u6709\u6620\u5c04 DRM dumb \u7684\u8bdd\u662f\u6ca1\u6cd5\u8bfb\u53d6\u7684\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"33-\u66f2\u7ebf",children:"3.3 \u66f2\u7ebf"}),"\n",(0,l.jsx)(n.p,{children:"K230 GPU \u652f\u6301\u4e09\u79cd\u66f2\u7ebf\uff0c\u5206\u522b\u662f"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e8c\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf"}),"\n",(0,l.jsx)(n.li,{children:"\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf"}),"\n",(0,l.jsx)(n.li,{children:"\u692d\u5706\u66f2\u7ebf"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u7136\u692d\u5706\u66f2\u7ebf\u53ef\u4ee5\u7528\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u62df\u5408\uff0c\u672c\u8d28\u4e0a\u53ef\u4ee5\u770b\u6210\u662f\u540c\u6837\u7684\u66f2\u7ebf\u7c7b\u578b\uff0c\u4e0e\u7ed8\u5236\u591a\u8fb9\u5f62\u7684\u60c5\u51b5\u4e00\u6837\uff0c\u53ea\u9700\u8981\u4fee\u6539\u64cd\u4f5c\u7801\u548c\u6570\u636e\u5373\u53ef\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0b\u9762\u6211\u4eec\u5c1d\u8bd5\u5c06\u521a\u624d\u753b\u7684\u4e09\u89d2\u5f62\u7684\u5e95\u8fb9\u6539\u4e3a\u4e8c\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\uff0c\u5e76\u5c06\u4e2d\u70b9\u653e\u5728",(0,l.jsx)(n.code,{children:"(1,1)"}),"\u5904\uff0c\u7ed8\u5236\u4e00\u4e2a\u8fd1\u4f3c\u5706\u89d2\u7684\u56fe\u6848\uff0c\u5c06\u4e0a\u9762 ",(0,l.jsx)(n.code,{children:"path_data"})," \u6539\u4e3a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"uint8_t path_data[] = {\n    2, 0, 0,\n    4, 0, 1,\n    6, 1, 1, 1, 0, // \u4e8c\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\uff0c\u63a7\u5236\u70b9(1,1)\uff0c\u753b\u5230(1,0)\n    4, 0, 0,\n0};\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4e3a\u4e86\u66f4\u597d\u5730\u89c2\u5bdf\u8fd9\u6761\u66f2\u7ebf\uff0c\u6211\u4eec\u5c06\u7f29\u653e\u500d\u6570\u5f00\u5f97\u66f4\u5927\u4e00\u4e9b\uff0c\u6bd4\u5982500\u500d\uff0c\u540c\u65f6\u5c06\u4f4d\u79fb\u4e5f\u6539\u5c0f\u4e00\u4e9b\uff0c\u4f7f\u5f97\u56fe\u6848\u8fd1\u4f3c\u5728\u5c4f\u5e55\u4e2d\u592e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"vg_lite_translate(buffer.width / 2., buffer.height / 2., &matrix);\nvg_lite_scale(500., 500., &matrix);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6700\u540e\u7ed8\u5236\u7684\u56fe\u6848\u5c31\u50cf\u4e0b\u9762\u8fd9\u6837\u4e86"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u8fd1\u4f3c\u5706\u89d2\u7684\u6247\u5f62",src:i(52158).A+"",width:"1080",height:"1440"})}),"\n",(0,l.jsx)(n.h3,{id:"34-\u4f4d\u56fe\u586b\u5145",children:"3.4 \u4f4d\u56fe\u586b\u5145"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u4e0d\u6ee1\u8db3\u4e8e\u5355\u8272\u7684\u586b\u5145\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u4f4d\u56fe\u56fe\u6765\u586b\u5145\uff0c\u4f4d\u56fe\u6587\u4ef6\u4f1a\u88ab\u6e32\u67d3\u5230\u76ee\u6807\u4f4d\u7f6e\uff0c\u5f53\u7136\u4f4d\u56fe\u4e5f\u5f97\u662f ",(0,l.jsx)(n.code,{children:"vg_lite_buffer_t"})," \u624d\u884c\uff0c\u5982\u679c\u9700\u8981\u4ece\u672c\u5730\u7684 JPEG/PNG \u7b49\u6587\u4ef6\u4e2d\u52a0\u8f7d\uff0c\u90a3\u4e48\u5efa\u8bae\u4f7f\u7528\u79bb\u5c4f buffer \u6765\u5b58\u50a8\u50cf\u7d20\u5185\u5bb9\uff0c\u7528 ",(0,l.jsx)(n.code,{children:"vg_lite_blit"})," \u6216\u8005 ",(0,l.jsx)(n.code,{children:"vg_lite_draw_pattern"})," \u6765\u6e32\u67d3\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"35-\u6e10\u53d8",children:"3.5 \u6e10\u53d8"}),"\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u4e8e VGLite \u7684\u5b9e\u73b0\u6765\u8bf4\uff0c\u6e10\u53d8\u672c\u8eab\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u4f4d\u56fe\u586b\u5145\uff0c",(0,l.jsx)(n.code,{children:"linear_grad"})," \u76f8\u5173\u51fd\u6570\u4f1a\u5206\u914d\u4e00\u4e2a 1x256 \u7684 buffer \u8fdb\u884c BLIT\uff0c\u5f53\u7136\u4f7f\u7528\u8005\u53ef\u4ee5\u4e0d\u5173\u5fc3\u4e0a\u9762\u7684\u7ec6\u8282\uff0c\u62ff\u6765\u7528\u5c31\u597d\uff0c\u53c2\u8003 ",(0,l.jsx)(n.code,{children:"linearGrad"})," demo\uff0c\u5177\u4f53\u8fc7\u7a0b\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u8c03\u7528"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"vg_lite_init_grad"})," \u521d\u59cb\u5316\u4e00\u4e2a\u6e10\u53d8"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"vg_lite_set_grad"})," \u8bbe\u7f6e\u989c\u8272\u548c\u6b62\u70b9\uff0c\u6700\u591a\u652f\u630116\u4e2a\u6b62\u70b9"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"vg_lite_update_grad"})," \u66f4\u65b0\u6e10\u53d8"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"vg_lite_get_grad_matrix"})," \u83b7\u5f97\u6e10\u53d8\u7684\u53d8\u6362\u77e9\u9635\u6307\u9488"]}),"\n",(0,l.jsx)(n.li,{children:"\u5bf9\u53d8\u6362\u77e9\u9635\u8fdb\u884c\u8c03\u6574\uff0c\u4f8b\u5982\u65cb\u8f6c\u548c\u7f29\u653e\uff0c\u9ed8\u8ba4\u957f\u5ea6\u4e3a256\u50cf\u7d20\u4ece\u5de6\u5230\u53f3\uff0c\u5982\u679c\u9700\u8981\u5176\u4ed6\u65b9\u5411\u7684\u6e10\u53d8\u9700\u8981\u7528\u8fd9\u4e2a\u77e9\u9635\u6765\u64cd\u4f5c"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"vg_lite_draw_gradient"})," \u7ed8\u5236\u6e10\u53d8"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},45868:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/gpu-1-6a76e487d1c5b91624de476254f30ab9.jpg"},72315:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/gpu-2-2685859b24e0d3b205388e680613e964.jpg"},52158:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/gpu-3-8ebf6be097508621fa9957d124951b4b.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var l=i(96540);const t={},r=l.createContext(t);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);