"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5135],{90481:(x,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>j,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var d=n(74848),r=n(28453);const c={sidebar_position:11},s="1.1 Ucryptolib \u6a21\u5757API\u624b\u518c",t={id:"CanaanK230/part5/UcryptolibmoduleAPImanual",title:"1.1 Ucryptolib \u6a21\u5757API\u624b\u518c",description:"\u524d\u8a00",source:"@site/docs/CanaanK230/part5/11_UcryptolibmoduleAPImanual.md",sourceDirName:"CanaanK230/part5",slug:"/CanaanK230/part5/UcryptolibmoduleAPImanual",permalink:"/docs/CanaanK230/part5/UcryptolibmoduleAPImanual",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CanaanK230/part5/11_UcryptolibmoduleAPImanual.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"canaanK230Sidebar",previous:{title:"5.\u7f51\u7edc \u4f8b\u7a0b\u8bb2\u89e3",permalink:"/docs/CanaanK230/part5/NetworkRoutineExplanation"},next:{title:"1.2 Hashlib \u6a21\u5757API\u624b\u518c",permalink:"/docs/CanaanK230/part5/HashlibmoduleAPImanual"}},i={},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u8bfb\u8005\u5bf9\u8c61",id:"\u8bfb\u8005\u5bf9\u8c61",level:3},{value:"\u7f29\u7565\u8bcd\u5b9a\u4e49",id:"\u7f29\u7565\u8bcd\u5b9a\u4e49",level:3},{value:"\u4fee\u8ba2\u8bb0\u5f55",id:"\u4fee\u8ba2\u8bb0\u5f55",level:3},{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2},{value:"2. API\u63cf\u8ff0",id:"2-api\u63cf\u8ff0",level:2},{value:"2.1 \u7c7b aes",id:"21-\u7c7b-aes",level:3},{value:"2.1.1 \u52a0\u5bc6\u51fd\u6570 encrypt()",id:"211-\u52a0\u5bc6\u51fd\u6570-encrypt",level:4},{value:"2.1.2 \u89e3\u5bc6\u51fd\u6570 decrypt()",id:"212-\u89e3\u5bc6\u51fd\u6570-decrypt",level:4},{value:"2.2 \u7c7b sm4",id:"22-\u7c7b-sm4",level:3},{value:"2.2.1 \u52a0\u5bc6\u51fd\u6570 encrypt()",id:"221-\u52a0\u5bc6\u51fd\u6570-encrypt",level:4},{value:"2.2.2 \u89e3\u5bc6\u51fd\u6570 decrypt()",id:"222-\u89e3\u5bc6\u51fd\u6570-decrypt",level:4},{value:"3. \u793a\u4f8b\u7a0b\u5e8f",id:"3-\u793a\u4f8b\u7a0b\u5e8f",level:2},{value:"3.1 aes \u52a0\u89e3\u5bc6",id:"31-aes-\u52a0\u89e3\u5bc6",level:3},{value:"3.2 sm4 \u52a0\u89e3\u5bc6",id:"32-sm4-\u52a0\u89e3\u5bc6",level:3},{value:"4. \u4f7f\u7528\u6307\u5357",id:"4-\u4f7f\u7528\u6307\u5357",level:2}];function h(x){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...x.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.header,{children:(0,d.jsx)(e.h1,{id:"11-ucryptolib-\u6a21\u5757api\u624b\u518c",children:"1.1 Ucryptolib \u6a21\u5757API\u624b\u518c"})}),"\n",(0,d.jsx)(e.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,d.jsx)(e.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,d.jsx)(e.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd CanMV \u9879\u76ee\u4e2d\u52a0\u89e3\u5bc6\u7b97\u6cd5\u5e93-ucryptolib\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u8bfb\u8005\u5bf9\u8c61",children:"\u8bfb\u8005\u5bf9\u8c61"}),"\n",(0,d.jsx)(e.p,{children:"\u672c\u6587\u6863\uff08\u672c\u6307\u5357\uff09\u4e3b\u8981\u9002\u7528\u4e8e\u4ee5\u4e0b\u4eba\u5458\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u6280\u672f\u652f\u6301\u5de5\u7a0b\u5e08"}),"\n",(0,d.jsx)(e.li,{children:"\u8f6f\u4ef6\u5f00\u53d1\u5de5\u7a0b\u5e08"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u7f29\u7565\u8bcd\u5b9a\u4e49",children:"\u7f29\u7565\u8bcd\u5b9a\u4e49"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u7b80\u79f0"}),(0,d.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"AES"}),(0,d.jsx)(e.td,{children:"Advanced Encryption Standard"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"GCM"}),(0,d.jsx)(e.td,{children:"Galois/Counter Mode"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u4fee\u8ba2\u8bb0\u5f55",children:"\u4fee\u8ba2\u8bb0\u5f55"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u6587\u6863\u7248\u672c\u53f7"}),(0,d.jsx)(e.th,{children:"\u4fee\u6539\u8bf4\u660e"}),(0,d.jsx)(e.th,{children:"\u4fee\u6539\u8005"}),(0,d.jsx)(e.th,{children:"\u65e5\u671f"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"V1.0"}),(0,d.jsx)(e.td,{children:"\u521d\u7248"}),(0,d.jsx)(e.td,{children:"\u6768\u5e06"}),(0,d.jsx)(e.td,{children:"2023-09-15"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"V1.1"}),(0,d.jsx)(e.td,{children:"\u4fee\u6539\u793a\u4f8b\u7a0b\u5e8f\uff0c\u65b0\u589e\u4f7f\u7528\u6307\u5357"}),(0,d.jsx)(e.td,{children:"\u6768\u5e06"}),(0,d.jsx)(e.td,{children:"2023-10-10"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"V1.2"}),(0,d.jsx)(e.td,{children:"\u589e\u52a0 AES-ECB/CBC/CTR \u8f6f\u4ef6\u6e90\u751f\u5b9e\u73b0"}),(0,d.jsx)(e.td,{children:"\u6768\u5e06"}),(0,d.jsx)(e.td,{children:"2023-10-13"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"1-\u6982\u8ff0",children:"1. \u6982\u8ff0"}),"\n",(0,d.jsx)(e.p,{children:"Ucryptolib \u5e93\u63d0\u4f9b\u4e86 AES-ECB/CBC/CTR\u3001AES-GCM\u3001SM4 \u52a0\u89e3\u5bc6\u529f\u80fd\u3002\u5176\u4e2d\uff0cAES-ECB/CBC/CTR \u4e09\u79cd\u6a21\u5f0f\u662f\u7531 micropython \u7684\u8f6f\u4ef6\u6e90\u751f\u5b9e\u73b0\uff0cAES-GCM \u548c SM4 \u7531\u5e95\u5c42\u786c\u4ef6\u52a0\u901f\u5668\u8fdb\u884c\u52a0\u901f\u3002"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.em,{children:(0,d.jsxs)(e.strong,{children:["\u6ce8\u610f\uff1a\u672c\u6587\u6863\u4e0d\u4f1a\u4ecb\u7ecd AES-ECB/CBC/CTR \u4e09\u79cd\u6a21\u5f0f\u7684\u52a0\u89e3\u5bc6\u8be6\u7ec6\u6b65\u9aa4\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 micropython ",(0,d.jsx)(e.a,{href:"https://docs.micropython.org/en/latest/library/cryptolib.html",children:"cryptolib\u5b98\u65b9\u6587\u6863"})]})})}),"\n",(0,d.jsx)(e.h2,{id:"2-api\u63cf\u8ff0",children:"2. API\u63cf\u8ff0"}),"\n",(0,d.jsx)(e.p,{children:"Ucryptolib \u5e93\u63d0\u4f9b\u4e86\u4e24\u4e2a\u7c7b\uff0c\u5206\u522b\u662f aes \u548c sm4\uff0c\u5b83\u4eec\u5206\u522b\u5b9e\u73b0\u4e86\u4e24\u4e2a\u51fd\u6570\uff0c\u52a0\u5bc6 encrypt() \u548c\u89e3\u5bc6 decrypt()\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"21-\u7c7b-aes",children:"2.1 \u7c7b aes"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u7c7b aes \u7528\u4e8e\u521d\u59cb\u5316\u4e00\u4e2a AES-GCM \u56fd\u9645\u52a0\u89e3\u5bc6\u5bf9\u8c61\uff0c\u4ece\u800c\u5b8c\u6210\u52a0\u5bc6/\u89e3\u5bc6\u64cd\u4f5c\u3002\u540c\u65f6\uff0c\u5728 AES-GCM \u52a0\u89e3\u5bc6\u7b97\u6cd5\u4e2d\uff0c\u521d\u59cb\u5316\u65f6\u5fc5\u987b\u8f93\u5165 key\u3001mode\u3001IV \u548c AAD\u3002"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.em,{children:(0,d.jsx)(e.strong,{children:"\u6ce8\u610f\uff1a\u521d\u59cb\u5316\u540e\uff0c\u52a0\u89e3\u5bc6\u5bf9\u8c61\u53ea\u80fd\u7528\u4e8e\u52a0\u5bc6\u6216\u89e3\u5bc6\u64cd\u4f5c\uff0c\u4e0d\u5141\u8bb8\u521b\u5efa\u4e00\u4e2a\u5bc6\u7801\u5bf9\u8c61\u540c\u65f6\u7528\u4e8e\u52a0\u5bc6\u3001\u89e3\u5bc6\u64cd\u4f5c"})})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"ucryptolib.aes((key, mode, IV, AAD))\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,d.jsx)(e.th,{children:"\u8f93\u5165/\u8f93\u51fa"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"key"}),(0,d.jsx)(e.td,{children:"\u52a0\u89e3\u5bc6\u5bc6\u94a5\uff0c\u652f\u6301\u7684\u5bc6\u94a5\u957f\u5ea6\u4e3a 256 bits"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mode"}),(0,d.jsx)(e.td,{children:"\u52a0\u89e3\u5bc6\u6a21\u5f0f\uff0c\u652f\u6301\u7684\u52a0\u89e3\u5bc6\u6a21\u5f0f\u4e3a AES-GCM\uff0c\u8fd9\u91cc\u8bbe\u7f6e mode=0 \u5373\u53ef"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"IV"}),(0,d.jsx)(e.td,{children:"\u521d\u59cb\u5316\u5411\u91cf\uff0c\u652f\u6301\u7684 IV \u957f\u5ea6\u4e3a 12 bytes"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"AAD"}),(0,d.jsx)(e.td,{children:"\u9644\u52a0\u6570\u636e"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u8fd4\u56de\u503c"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u6210\u529f"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u975e 0"}),(0,d.jsx)(e.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u6ce8\u610f\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u4e3e\u4f8b\u3011"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"/**********encrypt************/\nkey = b'\\x24\\x50\\x1a\\xd3\\x84\\xe4\\x73\\x96\\x3d\\x47\\x6e\\xdc\\xfe\\x08\\x20\\x52\\x37\\xac\\xfd\\x49\\xb5\\xb8\\xf3\\x38\\x57\\xf8\\x11\\x4e\\x86\\x3f\\xec\\x7f'\niv = b'\\x9f\\xf1\\x85\\x63\\xb9\\x78\\xec\\x28\\x1b\\x3f\\x27\\x94'\naad = b'\\xad\\xb5\\xec\\x72\\x0c\\xcf\\x98\\x98\\x50\\x00\\x28\\xbf\\x34\\xaf\\xcc\\xbc\\xac\\xa1\\x26\\xef'\npt = b'\\x27'\n\ncrypto = ucryptolib.aes(key, 0, iv, aad)\ninbuf = pt\noutbuf = bytearray(17)\ncrypto.encrypt(inbuf, outbuf)\n\n/**********decrypt************/\nct = b'\\xeb'\ntag = b'\\x63\\x35\\xe1\\xd4\\x9e\\x89\\x88\\xea\\xc4\\x8e\\x42\\x19\\x4e\\x5f\\x56\\xdb'\ncrypto = ucryptolib.aes(key, 0, iv, aad)\ninbuf = ct + tag\noutbuf = bytearray(1)\ncrypto.decrypt(inbuf, outbuf)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u76f8\u5173\u4e3b\u9898\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.h4,{id:"211-\u52a0\u5bc6\u51fd\u6570-encrypt",children:"2.1.1 \u52a0\u5bc6\u51fd\u6570 encrypt()"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u5bf9\u8f93\u5165\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u8fd0\u7b97\u3002\u8f93\u5165\u6570\u636e\u5b58\u653e\u5728 inbuf \u4e2d\uff0c\u52a0\u5bc6\u7ed3\u679c\u5c06\u5b58\u50a8\u5230\u8f93\u51fa\u7f13\u51b2\u533a outbuf \u4e2d\uff0c\u5982\u679c\uff1a"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"\u6ca1\u6709\u7ed9\u5b9a outbuf\uff0c\u52a0\u5bc6\u51fd\u6570 encrypt() \u5c06\u8fd4\u56de\u4e00\u4e2a bytes \u7c7b\u578b\u7684\u5bf9\u8c61\uff1b"}),"\n",(0,d.jsx)(e.li,{children:"\u5982\u679c\u7ed9\u5b9a outbuf \u4e14 outbuf = inbuf\uff0c\u6570\u636e\u5c06\u88ab\u5c31\u5730\u52a0\u5bc6\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"crypto.encrypt(inbuf[, outbuf])\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,d.jsx)(e.th,{children:"\u8f93\u5165/\u8f93\u51fa"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"inbuf"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165\u7f13\u51b2\u533a\uff0c\u5b58\u653e\u5f85\u52a0\u5bc6\u7684\u660e\u6587\u6570\u636e"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"outbuf(\u53ef\u9009)"}),(0,d.jsx)(e.td,{children:"\u8f93\u51fa\u7f13\u51b2\u533a\uff0c\u5b58\u653e\u52a0\u5bc6\u5b8c\u6210\u7684\u5bc6\u6587\u6570\u636e"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u8fd4\u56de\u503c"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u6210\u529f"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u975e 0"}),(0,d.jsx)(e.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u6ce8\u610f\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u52a0\u5bc6\u540e\u8fd4\u56de\u7684\u6570\u636e(\u5bc6\u6587\u6570\u636e)\u683c\u5f0f\u4e3a\uff1a\u5bc6\u6587 + TAG\uff0cTAG \u957f\u5ea6\u56fa\u5b9a\u4e3a 16 bytes\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u4e3e\u4f8b\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u76f8\u5173\u4e3b\u9898\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.h4,{id:"212-\u89e3\u5bc6\u51fd\u6570-decrypt",children:"2.1.2 \u89e3\u5bc6\u51fd\u6570 decrypt()"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u5bf9\u8f93\u5165\u6570\u636e\u8fdb\u884c\u89e3\u5bc6\u8fd0\u7b97\u3002\u8f93\u5165\u6570\u636e\u5b58\u653e\u5728 inbuf \u4e2d\uff0c\u89e3\u5bc6\u7ed3\u679c\u5c06\u5b58\u50a8\u5230\u8f93\u51fa\u7f13\u51b2\u533a outbuf \u4e2d\uff0c\u5982\u679c\uff1a"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"\u6ca1\u6709\u7ed9\u5b9a outbuf\uff0c\u89e3\u5bc6\u51fd\u6570 decrypt() \u5c06\u8fd4\u56de\u4e00\u4e2a bytes \u7c7b\u578b\u7684\u5bf9\u8c61\uff1b"}),"\n",(0,d.jsx)(e.li,{children:"\u5982\u679c\u7ed9\u5b9a outbuf \u4e14 outbuf = inbuf\uff0c\u6570\u636e\u5c06\u88ab\u5c31\u5730\u89e3\u5bc6\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"crypto.decrypt(inbuf[, outbuf])\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,d.jsx)(e.th,{children:"\u8f93\u5165/\u8f93\u51fa"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"inbuf"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165\u7f13\u51b2\u533a\uff0c\u5b58\u653e\u5f85\u89e3\u5bc6\u7684\u5bc6\u6587\u6570\u636e"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"outbuf(\u53ef\u9009)"}),(0,d.jsx)(e.td,{children:"\u8f93\u51fa\u7f13\u51b2\u533a\uff0c\u5b58\u653e\u89e3\u5bc6\u5b8c\u6210\u7684\u660e\u6587\u6570\u636e"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u8fd4\u56de\u503c"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u6210\u529f"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u975e 0"}),(0,d.jsx)(e.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u6ce8\u610f\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u89e3\u5bc6\u540e\u8fd4\u56de\u7684\u6570\u636e(\u660e\u6587\u6570\u636e)\u683c\u5f0f\u4e3a\uff1a\u660e\u6587\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u4e3e\u4f8b\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u76f8\u5173\u4e3b\u9898\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.h3,{id:"22-\u7c7b-sm4",children:"2.2 \u7c7b sm4"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u7c7b sm4 \u7528\u4e8e\u521d\u59cb\u5316\u4e00\u4e2a\u56fd\u5bc6\u52a0\u89e3\u5bc6\u5bf9\u8c61\uff0c\u4ece\u800c\u5b8c\u6210\u52a0\u5bc6/\u89e3\u5bc6\u64cd\u4f5c\u3002"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.em,{children:(0,d.jsx)(e.strong,{children:"\u6ce8\u610f\uff1a\u521d\u59cb\u5316\u540e\uff0c\u52a0\u89e3\u5bc6\u5bf9\u8c61\u53ea\u80fd\u7528\u4e8e\u52a0\u5bc6\u6216\u89e3\u5bc6\u64cd\u4f5c\uff0c\u4e0d\u5141\u8bb8\u521b\u5efa\u4e00\u4e2a\u5bc6\u7801\u5bf9\u8c61\u540c\u65f6\u7528\u4e8e\u52a0\u5bc6\u3001\u89e3\u5bc6\u64cd\u4f5c"})})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"ucryptolib.sm4((key, mode[, IV]))\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,d.jsx)(e.th,{children:"\u8f93\u5165/\u8f93\u51fa"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"key"}),(0,d.jsx)(e.td,{children:"\u52a0\u89e3\u5bc6\u5bc6\u94a5\uff0c\u652f\u6301\u7684\u5bc6\u94a5\u957f\u5ea6\u4e3a 128 bits"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mode"}),(0,d.jsx)(e.td,{children:"\u52a0\u89e3\u5bc6\u6a21\u5f0f\uff0c\u652f\u6301\u7684\u6a21\u5f0f\u6709 ecb/cbc/cfb/ofb/ctr\uff0cmode \u5206\u522b\u4e3a 1/2/3/5/6"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"IV(\u53ef\u9009)"}),(0,d.jsx)(e.td,{children:"\u521d\u59cb\u5316\u5411\u91cf\uff0c\u652f\u6301\u7684 IV \u957f\u5ea6\u4e3a 20 bytes"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u8fd4\u56de\u503c"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u6210\u529f"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u975e 0"}),(0,d.jsx)(e.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u6ce8\u610f\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u4e3e\u4f8b\u3011"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"/**********encrypt************/\nkey = b'\\x01\\x23\\x45\\x67\\x89\\xab\\xcd\\xef\\xfe\\xdc\\xba\\x98\\x76\\x54\\x32\\x10'\niv = b'\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f'\npt = b'\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb\\xcc\\xcc\\xcc\\xcc\\xdd\\xdd\\xdd\\xdd\\xee\\xee\\xee\\xee\\xff\\xff\\xff\\xff\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb'\ncrypto = ucryptolib.sm4(key, 2, iv)\ninbuf = pt\noutbuf = bytearray(32)\ncrypto.encrypt(inbuf, outbuf)\n\n/**********decrypt************/\nct = b'\\x78\\xeb\\xb1\\x1c\\xc4\\x0b\\x0a\\x48\\x31\\x2a\\xae\\xb2\\x04\\x02\\x44\\xcb\\x4c\\xb7\\x01\\x69\\x51\\x90\\x92\\x26\\x97\\x9b\\x0d\\x15\\xdc\\x6a\\x8f\\x6d'\ncrypto = ucryptolib.sm4(key, 2, iv)\ninbuf = ct\noutbuf = bytearray(32)\ncrypto.decrypt(inbuf, outbuf)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u76f8\u5173\u4e3b\u9898\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.h4,{id:"221-\u52a0\u5bc6\u51fd\u6570-encrypt",children:"2.2.1 \u52a0\u5bc6\u51fd\u6570 encrypt()"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u5bf9\u8f93\u5165\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u8fd0\u7b97\u3002\u8f93\u5165\u6570\u636e\u5b58\u653e\u5728 inbuf \u4e2d\uff0c\u52a0\u5bc6\u7ed3\u679c\u5c06\u5b58\u50a8\u5230\u8f93\u51fa\u7f13\u51b2\u533a outbuf \u4e2d\uff0c\u5982\u679c\uff1a"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"\u6ca1\u6709\u7ed9\u5b9a outbuf\uff0c\u52a0\u5bc6\u51fd\u6570 encrypt() \u5c06\u8fd4\u56de\u4e00\u4e2a bytes \u7c7b\u578b\u7684\u5bf9\u8c61\uff1b"}),"\n",(0,d.jsx)(e.li,{children:"\u5982\u679c\u7ed9\u5b9a outbuf \u4e14 outbuf = inbuf\uff0c\u6570\u636e\u5c06\u88ab\u5c31\u5730\u52a0\u5bc6\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"crypto.encrypt(inbuf[, outbuf])\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,d.jsx)(e.th,{children:"\u8f93\u5165/\u8f93\u51fa"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"inbuf"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165\u7f13\u51b2\u533a\uff0c\u5b58\u653e\u5f85\u52a0\u5bc6\u7684\u660e\u6587\u6570\u636e"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"outbuf(\u53ef\u9009)"}),(0,d.jsx)(e.td,{children:"\u8f93\u51fa\u7f13\u51b2\u533a\uff0c\u5b58\u653e\u52a0\u5bc6\u5b8c\u6210\u7684\u5bc6\u6587\u6570\u636e"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u8fd4\u56de\u503c"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u6210\u529f"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u975e 0"}),(0,d.jsx)(e.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u6ce8\u610f\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u4e3e\u4f8b\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u76f8\u5173\u4e3b\u9898\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.h4,{id:"222-\u89e3\u5bc6\u51fd\u6570-decrypt",children:"2.2.2 \u89e3\u5bc6\u51fd\u6570 decrypt()"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u5bf9\u8f93\u5165\u6570\u636e\u8fdb\u884c\u89e3\u5bc6\u8fd0\u7b97\u3002\u8f93\u5165\u6570\u636e\u5b58\u653e\u5728 inbuf \u4e2d\uff0c\u89e3\u5bc6\u7ed3\u679c\u5c06\u5b58\u50a8\u5230\u8f93\u51fa\u7f13\u51b2\u533a outbuf \u4e2d\uff0c\u5982\u679c\uff1a"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"\u6ca1\u6709\u7ed9\u5b9a outbuf\uff0c\u89e3\u5bc6\u51fd\u6570 decrypt() \u5c06\u8fd4\u56de\u4e00\u4e2a bytes \u7c7b\u578b\u7684\u5bf9\u8c61\uff1b"}),"\n",(0,d.jsx)(e.li,{children:"\u5982\u679c\u7ed9\u5b9a outbuf \u4e14 outbuf = inbuf\uff0c\u6570\u636e\u5c06\u88ab\u5c31\u5730\u89e3\u5bc6\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"crypto.decrypt(inbuf[, outbuf])\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,d.jsx)(e.th,{children:"\u8f93\u5165/\u8f93\u51fa"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"inbuf"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165\u7f13\u51b2\u533a\uff0c\u5b58\u653e\u5f85\u89e3\u5bc6\u7684\u5bc6\u6587\u6570\u636e"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"outbuf(\u53ef\u9009)"}),(0,d.jsx)(e.td,{children:"\u8f93\u51fa\u7f13\u51b2\u533a\uff0c\u5b58\u653e\u89e3\u5bc6\u5b8c\u6210\u7684\u660e\u6587\u6570\u636e"}),(0,d.jsx)(e.td,{children:"\u8f93\u5165"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u8fd4\u56de\u503c"}),(0,d.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u6210\u529f"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u975e 0"}),(0,d.jsx)(e.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u6ce8\u610f\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u4e3e\u4f8b\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.p,{children:"\u3010\u76f8\u5173\u4e3b\u9898\u3011"}),"\n",(0,d.jsx)(e.p,{children:"\u65e0"}),"\n",(0,d.jsx)(e.h2,{id:"3-\u793a\u4f8b\u7a0b\u5e8f",children:"3. \u793a\u4f8b\u7a0b\u5e8f"}),"\n",(0,d.jsx)(e.h3,{id:"31-aes-\u52a0\u89e3\u5bc6",children:"3.1 aes \u52a0\u89e3\u5bc6"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"/********** AES-GCM encrypt ************/\nimport ucryptolib\n\n# key(256 bytes)\nkey = b'\\x24\\x50\\x1a\\xd3\\x84\\xe4\\x73\\x96\\x3d\\x47\\x6e\\xdc\\xfe\\x08\\x20\\x52\\x37\\xac\\xfd\\x49\\xb5\\xb8\\xf3\\x38\\x57\\xf8\\x11\\x4e\\x86\\x3f\\xec\\x7f'\n# iv(12 bytes)\niv = b'\\x9f\\xf1\\x85\\x63\\xb9\\x78\\xec\\x28\\x1b\\x3f\\x27\\x94'\n# aad(20 bytes)\naad = b'\\xad\\xb5\\xec\\x72\\x0c\\xcf\\x98\\x98\\x50\\x00\\x28\\xbf\\x34\\xaf\\xcc\\xbc\\xac\\xa1\\x26\\xef'\n# plaintext(51 bytes)\npt = b'\\x27\\xf3\\x48\\xf9\\xcd\\xc0\\xc5\\xbd\\x5e\\x66\\xb1\\xcc\\xb6\\x3a\\xd9\\x20\\xff\\x22\\x19\\xd1\\x4e\\x8d\\x63\\x1b\\x38\\x72\\x26\\x5c\\xf1\\x17\\xee\\x86\\x75\\x7a\\xcc\\xb1\\x58\\xbd\\x9a\\xbb\\x38\\x68\\xfd\\xc0\\xd0\\xb0\\x74\\xb5\\xf0\\x1b\\x2c'\nct = b'\\xeb\\x7c\\xb7\\x54\\xc8\\x24\\xe8\\xd9\\x6f\\x7c\\x6d\\x9b\\x76\\xc7\\xd2\\x6f\\xb8\\x74\\xff\\xbf\\x1d\\x65\\xc6\\xf6\\x4a\\x69\\x8d\\x83\\x9b\\x0b\\x06\\x14\\x5d\\xae\\x82\\x05\\x7a\\xd5\\x59\\x94\\xcf\\x59\\xad\\x7f\\x67\\xc0\\xfa\\x5e\\x85\\xfa\\xb8'\ntag = b'\\xbc\\x95\\xc5\\x32\\xfe\\xcc\\x59\\x4c\\x36\\xd1\\x55\\x02\\x86\\xa7\\xa3\\xf0'\n# init cipher object(aes-gcm)\ncrypto = ucryptolib.aes(key, 0, iv, aad)\ninbuf = pt\n# outbuf = ciphertext + tag\noutbuf = bytearray(67)\ncrypto.encrypt(inbuf, outbuf).hex(' ')\n\n/********** AES-GCM decrypt ************/\ncrypto = ucryptolib.aes(key, 0, iv, aad)\n# ciphertext + tag\ninbuf = ct + tag\noutbuf = bytearray(51)\ncrypto.decrypt(inbuf, outbuf).hex(' ')\n"})}),"\n",(0,d.jsx)(e.h3,{id:"32-sm4-\u52a0\u89e3\u5bc6",children:"3.2 sm4 \u52a0\u89e3\u5bc6"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"import ucryptolib\n\n/********** SM4-ECB encrypt ************/\n# key(128 bits)\nkey = b'\\x01\\x23\\x45\\x67\\x89\\xab\\xcd\\xef\\xfe\\xdc\\xba\\x98\\x76\\x54\\x32\\x10'\niv = b'\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f'\n# plaintext(32 bytes)\npt = b'\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb\\xcc\\xcc\\xcc\\xcc\\xdd\\xdd\\xdd\\xdd\\xee\\xee\\xee\\xee\\xff\\xff\\xff\\xff\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb'\nct = b'\\x5e\\xc8\\x14\\x3d\\xe5\\x09\\xcf\\xf7\\xb5\\x17\\x9f\\x8f\\x47\\x4b\\x86\\x19\\x2f\\x1d\\x30\\x5a\\x7f\\xb1\\x7d\\xf9\\x85\\xf8\\x1c\\x84\\x82\\x19\\x23\\x04'\n# init cipher object(sm4-ebc)\ncrypto = ucryptolib.sm4(key, 1)\ninbuf = pt\noutbuf = bytearray(32)\ncrypto.encrypt(inbuf, outbuf).hex(' ')\n\n/********** SM4-EBC decrypt ************/\n# init cipher object(aes-ebc)\ncrypto = ucryptolib.sm4(key, 1)\ninbuf = ct\noutbuf = bytearray(32)\ncrypto.decrypt(inbuf, outbuf).hex(' ')\n"})}),"\n",(0,d.jsx)(e.h2,{id:"4-\u4f7f\u7528\u6307\u5357",children:"4. \u4f7f\u7528\u6307\u5357"}),"\n",(0,d.jsxs)(e.p,{children:["\u622a\u6b62\u5230\u5f53\u524d\u7248\u672c\uff0cucryptolib \u5e93\u5df2\u7ecf\u6d4b\u8bd5\u4e86\u4e0b\u5217 case\u3002\u6d4b\u8bd5\u7a0b\u5e8f\u53c2\u8003 ",(0,d.jsx)(e.em,{children:"./tests/cipher/cipher.py"}),"\uff0c\u542f\u52a8 canmv \u5f00\u53d1\u677f\uff0c\u8fdb\u5165 REPL \u4e4b\u540e\uff0c\u901a\u8fc7\u547d\u4ee4 ",(0,d.jsx)(e.strong,{children:"import sdcard.app.tests.cipher.cipher"})," \u53ef\u76f4\u63a5\u8fd0\u884c\u6d4b\u8bd5 demo\u3002"]}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u7c7b"}),(0,d.jsx)(e.th,{children:"\u65b9\u6cd5"}),(0,d.jsx)(e.th,{children:"\u6d4b\u8bd5 case"}),(0,d.jsx)(e.th,{children:"\u6d4b\u8bd5\u7ed3\u679c"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"aes-gcm"}),(0,d.jsx)(e.td,{children:"encrypt / decrypt"}),(0,d.jsx)(e.td,{children:"ivlen=12, ptlen=0, aadlen=0"}),(0,d.jsx)(e.td,{children:"pass"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"ivlen=12, ptlen=1, aadlen=20"}),(0,d.jsx)(e.td,{children:"pass"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"ivlen=12, ptlen=51, aadlen=0"}),(0,d.jsx)(e.td,{children:"pass"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"ivlen=12, ptlen=51, aadlen=20"}),(0,d.jsx)(e.td,{children:"pass"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sm4-ecb"}),(0,d.jsx)(e.td,{children:"encrypt / decrypt"}),(0,d.jsx)(e.td,{children:"keybits=128, ptlen=32"}),(0,d.jsx)(e.td,{children:"pass"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sm4-cbc"}),(0,d.jsx)(e.td,{children:"encrypt / decrypt"}),(0,d.jsx)(e.td,{children:"keybits=128, ivlen=16, ptlen=32"}),(0,d.jsx)(e.td,{children:"pass"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sm4-cfb"}),(0,d.jsx)(e.td,{children:"encrypt / decrypt"}),(0,d.jsx)(e.td,{children:"keybits=128, ivlen=16, ptlen=32"}),(0,d.jsx)(e.td,{children:"pass"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sm4-ofb"}),(0,d.jsx)(e.td,{children:"encrypt / decrypt"}),(0,d.jsx)(e.td,{children:"keybits=128, ivlen=16, ptlen=32"}),(0,d.jsx)(e.td,{children:"pass"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sm4-ctr"}),(0,d.jsx)(e.td,{children:"encrypt / decrypt"}),(0,d.jsx)(e.td,{children:"keybits=128, ivlen=16, ptlen=64"}),(0,d.jsx)(e.td,{children:"pass"})]})]})]})]})}function j(x={}){const{wrapper:e}={...(0,r.R)(),...x.components};return e?(0,d.jsx)(e,{...x,children:(0,d.jsx)(h,{...x})}):h(x)}},28453:(x,e,n)=>{n.d(e,{R:()=>s,x:()=>t});var d=n(96540);const r={},c=d.createContext(r);function s(x){const e=d.useContext(c);return d.useMemo((function(){return"function"==typeof x?x(e):{...e,...x}}),[e,x])}function t(x){let e;return e=x.disableParentContext?"function"==typeof x.components?x.components(r):x.components||r:s(x.components),d.createElement(c.Provider,{value:e},x.children)}}}]);