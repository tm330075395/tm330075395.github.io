"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1852],{50292:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var d=i(74848),r=i(28453);const l={sidebar_position:26},s="2.13 UART \u6a21\u5757API\u624b\u518c",t={id:"CanaanK230/part5/UARTModuleAPIManual",title:"2.13 UART \u6a21\u5757API\u624b\u518c",description:"\u524d\u8a00",source:"@site/docs/CanaanK230/part5/26_UARTModuleAPIManual.md",sourceDirName:"CanaanK230/part5",slug:"/CanaanK230/part5/UARTModuleAPIManual",permalink:"/docs/CanaanK230/part5/UARTModuleAPIManual",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CanaanK230/part5/26_UARTModuleAPIManual.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26},sidebar:"canaanK230Sidebar",previous:{title:"2.12 WDT \u6a21\u5757API\u624b\u518c",permalink:"/docs/CanaanK230/part5/WDTModuleAPIManual"},next:{title:"2.14 machine \u6a21\u5757API\u624b\u518c",permalink:"/docs/CanaanK230/part5/machinemoduleAPImanual"}},a={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u8bfb\u8005\u5bf9\u8c61",id:"\u8bfb\u8005\u5bf9\u8c61",level:3},{value:"\u7f29\u7565\u8bcd\u5b9a\u4e49",id:"\u7f29\u7565\u8bcd\u5b9a\u4e49",level:3},{value:"\u4fee\u8ba2\u8bb0\u5f55",id:"\u4fee\u8ba2\u8bb0\u5f55",level:3},{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2},{value:"2. API\u63cf\u8ff0",id:"2-api\u63cf\u8ff0",level:2},{value:"2.1 \u793a\u4f8b",id:"21-\u793a\u4f8b",level:3},{value:"2.2 \u6784\u9020\u51fd\u6570",id:"22-\u6784\u9020\u51fd\u6570",level:3},{value:"2.3 init",id:"23-init",level:3},{value:"2.4 read",id:"24-read",level:3},{value:"2.5 readline",id:"25-readline",level:3},{value:"2.6 readinto",id:"26-readinto",level:3},{value:"2.7 write",id:"27-write",level:3},{value:"2.8 deinit",id:"28-deinit",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"213-uart-\u6a21\u5757api\u624b\u518c",children:"2.13 UART \u6a21\u5757API\u624b\u518c"})}),"\n",(0,d.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,d.jsx)(n.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,d.jsx)(n.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdmachine\u6a21\u5757\u4e0b\u7684UART\u7c7bAPI\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u8bfb\u8005\u5bf9\u8c61",children:"\u8bfb\u8005\u5bf9\u8c61"}),"\n",(0,d.jsx)(n.p,{children:"\u672c\u6587\u6863\uff08\u672c\u6307\u5357\uff09\u4e3b\u8981\u9002\u7528\u4e8e\u4ee5\u4e0b\u4eba\u5458\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6280\u672f\u652f\u6301\u5de5\u7a0b\u5e08"}),"\n",(0,d.jsx)(n.li,{children:"\u8f6f\u4ef6\u5f00\u53d1\u5de5\u7a0b\u5e08"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u7f29\u7565\u8bcd\u5b9a\u4e49",children:"\u7f29\u7565\u8bcd\u5b9a\u4e49"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7b80\u79f0"}),(0,d.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]})})]}),"\n",(0,d.jsx)(n.h3,{id:"\u4fee\u8ba2\u8bb0\u5f55",children:"\u4fee\u8ba2\u8bb0\u5f55"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u6587\u6863\u7248\u672c\u53f7"}),(0,d.jsx)(n.th,{children:"\u4fee\u6539\u8bf4\u660e"}),(0,d.jsx)(n.th,{children:"\u4fee\u6539\u8005"}),(0,d.jsx)(n.th,{children:"\u65e5\u671f"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"V1.0"}),(0,d.jsx)(n.td,{children:"\u521d\u7248"}),(0,d.jsx)(n.td,{children:"\u8f6f\u4ef6\u90e8"}),(0,d.jsx)(n.td,{children:"2023-09-17"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"1-\u6982\u8ff0",children:"1. \u6982\u8ff0"}),"\n",(0,d.jsx)(n.p,{children:"K230\u5185\u90e8\u5305\u542b\u4e94\u4e2aUART\u786c\u4ef6\u6a21\u5757\uff0c\u5176\u4e2dUART0\u88ab\u5c0f\u6838sh\u5360\u7528\uff0cUART3\u88ab\u5927\u6838sh\u5360\u7528\uff0c\u5269\u4f59UART1\uff0cUART2\uff0cUART4\u53ef\u4f9b\u7528\u6237\u4f7f\u7528\u3002 UART IO\u914d\u7f6e\u53c2\u8003IOMUX\u6a21\u5757\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"2-api\u63cf\u8ff0",children:"2. API\u63cf\u8ff0"}),"\n",(0,d.jsx)(n.p,{children:"UART\u7c7b\u4f4d\u4e8emachine\u6a21\u5757\u4e0b"}),"\n",(0,d.jsx)(n.h3,{id:"21-\u793a\u4f8b",children:"2.1 \u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'from machine import UART\n# UART1: baudrate 115200, 8bits, parity none, one stopbits\nu1 = UART(UART.UART1, baudrate=115200, bits=UART.EIGHTBITS, parity=UART.PARITY_NONE, stop=UART.STOPBITS_ONE)\n# UART write\nu1.write("UART1 test")\n# UART read\nr = u1.read()\n# UART readline\nr = u1.readline()\n# UART readinto\nb = bytearray(8)\nr = u1.readinto(b)\n# UART deinit\nu1.deinit()\n'})}),"\n",(0,d.jsx)(n.h3,{id:"22-\u6784\u9020\u51fd\u6570",children:"2.2 \u6784\u9020\u51fd\u6570"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"uart = UART(id, baudrate=115200, bits=UART.EIGHTBITS, parity=UART.PARITY_NONE, stop=UART.STOPBITS_ONE)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"id: UART\u53f7\uff0c\u6709\u6548\u503c UART1\u3001UART2\u3001UART4"}),"\n",(0,d.jsx)(n.li,{children:"baudrate: UART\u6ce2\u7279\u7387\uff0c\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4115200"}),"\n",(0,d.jsx)(n.li,{children:"bits: \u6bcf\u4e2a\u5b57\u7b26\u7684\u4f4d\u6570\uff0c\u6709\u6548\u503c FIVEBITS\u3001SIXBITS\u3001SEVENBITS\u3001EIGHTBITS\uff0c\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4EIGHTBITS"}),"\n",(0,d.jsx)(n.li,{children:"parity: \u5947\u5076\u6821\u9a8c\uff0c\u6709\u6548\u503c PARITY_NONE\u3001PARITY_ODD\u3001PARITY_EVEN\uff0c\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4PARITY_NONE"}),"\n",(0,d.jsx)(n.li,{children:"stop: \u505c\u6b62\u4f4d\u7684\u6570\u76ee\uff0c\u6709\u6548\u503c STOPBITS_ONE\u3001STOPBITS_TWO\uff0c\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4STOPBITS_ONE"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"23-init",children:"2.3 init"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"UART.init(baudrate=115200, bits=UART.EIGHTBITS, parity=UART.PARITY_NONE, stop=UART.STOPBITS_ONE)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u914d\u7f6eUART"}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsx)(n.p,{children:"\u53c2\u8003\u6784\u9020\u51fd\u6570"}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsx)(n.p,{children:"\u65e0"}),"\n",(0,d.jsx)(n.h3,{id:"24-read",children:"2.4 read"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"UART.read([nbytes])\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8bfb\u53d6\u5b57\u7b26\u3002\u82e5\u6307\u5b9anbytes\uff0c\u5219\u6700\u591a\u8bfb\u53d6\u8be5\u6570\u91cf\u7684\u5b57\u8282\u3002\u5426\u5219\u53ef\u8bfb\u53d6\u5c3d\u53ef\u80fd\u591a\u7684\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"nbytes: \u6700\u591a\u8bfb\u53d6nbytes\u5b57\u8282\uff0c\u53ef\u9009\u53c2\u6570"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsx)(n.p,{children:"\u4e00\u4e2a\u5305\u62ec\u8bfb\u5165\u5b57\u8282\u7684\u5b57\u8282\u5bf9\u8c61"}),"\n",(0,d.jsx)(n.h3,{id:"25-readline",children:"2.5 readline"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"UART.readline()\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8bfb\u53d6\u4e00\u884c\uff0c\u5e76\u4ee5\u4e00\u4e2a\u6362\u884c\u7b26\u7ed3\u675f\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsx)(n.p,{children:"\u65e0"}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsx)(n.p,{children:"\u4e00\u4e2a\u5305\u62ec\u8bfb\u5165\u5b57\u8282\u7684\u5b57\u8282\u5bf9\u8c61"}),"\n",(0,d.jsx)(n.h3,{id:"26-readinto",children:"2.6 readinto"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"UART.readinto(buf[, nbytes])\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5c06\u5b57\u8282\u8bfb\u53d6\u5165buf\u3002\u82e5\u6307\u5b9anbytes\uff0c\u5219\u6700\u591a\u8bfb\u53d6\u8be5\u6570\u91cf\u7684\u5b57\u8282\u3002\u5426\u5219\uff0c\u6700\u591a\u8bfb\u53d6len(buf)\u6570\u91cf\u7684\u5b57\u8282\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"buf: \u4e00\u4e2abuffer\u5bf9\u8c61"}),"\n",(0,d.jsx)(n.li,{children:"nbytes: \u6700\u591a\u8bfb\u53d6nbytes\u5b57\u8282\uff0c\u53ef\u9009\u53c2\u6570"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsx)(n.p,{children:"\u8bfb\u53d6\u5e76\u5b58\u5165buf\u7684\u5b57\u8282\u6570"}),"\n",(0,d.jsx)(n.h3,{id:"27-write",children:"2.7 write"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"UART.write(buf)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5c06\u5b57\u8282\u7f13\u51b2\u533a\u5199\u5165UART\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"buf: \u4e00\u4e2abuffer\u5bf9\u8c61"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsx)(n.p,{children:"\u5199\u5165\u7684\u5b57\u8282\u6570"}),"\n",(0,d.jsx)(n.h3,{id:"28-deinit",children:"2.8 deinit"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"UART.deinit()\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u91ca\u653eUART\u8d44\u6e90"}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsx)(n.p,{children:"\u65e0"}),"\n",(0,d.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsx)(n.p,{children:"\u65e0"})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>t});var d=i(96540);const r={},l=d.createContext(r);function s(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);