"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1014],{58604:(x,n,a)=>{a.r(n),a.d(n,{assets:()=>b,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var e=a(74848),t=a(28453);const c={sidebar_position:8},i="3.\u5916\u8bbe \u4f8b\u7a0b\u8bb2\u89e3",r={id:"CanaanK230/part5/PeripheralsRoutineexplanation",title:"3.\u5916\u8bbe \u4f8b\u7a0b\u8bb2\u89e3",description:"1. Cipher - Cipher \u4f8b\u7a0b",source:"@site/docs/CanaanK230/part5/08_PeripheralsRoutineexplanation.md",sourceDirName:"CanaanK230/part5",slug:"/CanaanK230/part5/PeripheralsRoutineexplanation",permalink:"/docs/CanaanK230/part5/PeripheralsRoutineexplanation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CanaanK230/part5/08_PeripheralsRoutineexplanation.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"canaanK230Sidebar",previous:{title:"2.\u4eba\u8138\u68c0\u6d4b",permalink:"/docs/CanaanK230/part5/Facedetection"},next:{title:"4.\u591a\u5a92\u4f53 \u4f8b\u7a0b\u8bb2\u89e3",permalink:"/docs/CanaanK230/part5/MultimediaRoutineExplanation"}},b={},p=[{value:"1. Cipher - Cipher \u4f8b\u7a0b",id:"1-cipher---cipher-\u4f8b\u7a0b",level:2},{value:"2. ADC - ADC\u4f8b\u7a0b",id:"2-adc---adc\u4f8b\u7a0b",level:2},{value:"3. FFT - FFT\u4f8b\u7a0b",id:"3-fft---fft\u4f8b\u7a0b",level:2},{value:"4. FPIOA - FPIOA\u4f8b\u7a0b",id:"4-fpioa---fpioa\u4f8b\u7a0b",level:2},{value:"5. PWM - PWM\u4f8b\u7a0b",id:"5-pwm---pwm\u4f8b\u7a0b",level:2},{value:"6. SPI - SPI\u4f8b\u7a0b",id:"6-spi---spi\u4f8b\u7a0b",level:2},{value:"7. Timer - Timer\u4f8b\u7a0b",id:"7-timer---timer\u4f8b\u7a0b",level:2},{value:"8. WDT - WDT\u4f8b\u7a0b",id:"8-wdt---wdt\u4f8b\u7a0b",level:2}];function d(x){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...x.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.header,{children:(0,e.jsx)(n.h1,{id:"3\u5916\u8bbe-\u4f8b\u7a0b\u8bb2\u89e3",children:"3.\u5916\u8bbe \u4f8b\u7a0b\u8bb2\u89e3"})}),"\n",(0,e.jsx)(n.h2,{id:"1-cipher---cipher-\u4f8b\u7a0b",children:"1. Cipher - Cipher \u4f8b\u7a0b"}),"\n",(0,e.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u7a0b\u5e8f\u7528\u4e8e\u5bf9 CanMV \u5f00\u53d1\u677f\u8fdb\u884c\u4e00\u4e2a Cipher \u8f93\u51fa\u7684\u529f\u80fd\u5c55\u793a\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"import uhashlib\n\nprint('###################### SHA256 Test ##############################')\nprint('********************** Test-1: Only Call update() Once ******************')\n# \u521d\u59cb\u5316sha256\u5bf9\u8c61\nobj = uhashlib.sha256()\n# \u8f93\u5165\u6d88\u606fmessage\nmsg = b'\\x45\\x11\\x01\\x25\\x0e\\xc6\\xf2\\x66\\x52\\x24\\x9d\\x59\\xdc\\x97\\x4b\\x73\\x61\\xd5\\x71\\xa8\\x10\\x1c\\xdf\\xd3\\x6a\\xba\\x3b\\x58\\x54\\xd3\\xae\\x08\\x6b\\x5f\\xdd\\x45\\x97\\x72\\x1b\\x66\\xe3\\xc0\\xdc\\x5d\\x8c\\x60\\x6d\\x96\\x57\\xd0\\xe3\\x23\\x28\\x3a\\x52\\x17\\xd1\\xf5\\x3f\\x2f\\x28\\x4f\\x57\\xb8'\n# \u6807\u51c6\u54c8\u5e0c\u503c\ndgst0 = b'\\x1a\\xaa\\xf9\\x28\\x5a\\xf9\\x45\\xb8\\xa9\\x7c\\xf1\\x4f\\x86\\x9b\\x18\\x90\\x14\\xc3\\x84\\xf3\\xc7\\xc2\\xb7\\xd2\\xdf\\x8a\\x97\\x13\\xbf\\xfe\\x0b\\xf1'\n# \u5c06\u6d88\u606f\u66f4\u65b0\u5230\u786c\u4ef6IP\u4e2d\nobj.update(msg)\n# \u8ba1\u7b97\u54c8\u5e0c\u503c\ndgst = obj.digest()\nprint(dgst0 == dgst)\n# print(binascii.hexlify(dgst))\nprint('********************** Test-2: Call update() Twice ******************')\ndgst0 = b'\\x93\\x6a\\x18\\x5c\\xaa\\xa2\\x66\\xbb\\x9c\\xbe\\x98\\x1e\\x9e\\x05\\xcb\\x78\\xcd\\x73\\x2b\\x0b\\x32\\x80\\xeb\\x94\\x44\\x12\\xbb\\x6f\\x8f\\x8f\\x07\\xaf'\nobj = uhashlib.sha256()\n# \u5411\u786c\u4ef6\u591a\u6b21\u66f4\u65b0\u6d88\u606f\nobj.update(b'hello')\nobj.update(b'world')\ndgst = obj.digest()\nprint(dgst0 == dgst)\n# print('********************** Test-3: Call digest() Twice ******************')\n# dgst0 = b'\\x93\\x6a\\x18\\x5c\\xaa\\xa2\\x66\\xbb\\x9c\\xbe\\x98\\x1e\\x9e\\x05\\xcb\\x78\\xcd\\x73\\x2b\\x0b\\x32\\x80\\xeb\\x94\\x44\\x12\\xbb\\x6f\\x8f\\x8f\\x07\\xaf'\n# obj = uhashlib.sha256()\n# obj.update(b'hello')\n# obj.update(b'world')\n# dgst = obj.digest()\n# dgst1 = obj.digest()\n# print(dgst0 == dgst)\n# print(dgst == dgst1)\n\n\nprint('\\n###################### AES-GCM Test ##############################')\nimport ucryptolib\nimport collections\n# \u521b\u5efa\u4e00\u4e2a\u5177\u540d\u5143\u7ec4\u5e76\u8fd4\u56de\u5177\u540d\u5143\u7ec4\u5b50\u7c7b\nAes = collections.namedtuple('Aes', ['key', 'iv', 'aad', 'pt', 'ct', 'tag'])\naes = [\n    Aes(b'\\xb5\\x2c\\x50\\x5a\\x37\\xd7\\x8e\\xda\\x5d\\xd3\\x4f\\x20\\xc2\\x25\\x40\\xea\\x1b\\x58\\x96\\x3c\\xf8\\xe5\\xbf\\x8f\\xfa\\x85\\xf9\\xf2\\x49\\x25\\x05\\xb4',\n        b'\\x51\\x6c\\x33\\x92\\x9d\\xf5\\xa3\\x28\\x4f\\xf4\\x63\\xd7',\n        b'',\n        b'',\n        b'',\n        b'\\xbd\\xc1\\xac\\x88\\x4d\\x33\\x24\\x57\\xa1\\xd2\\x66\\x4f\\x16\\x8c\\x76\\xf0'\n        ),\n\n    Aes(b'\\x24\\x50\\x1a\\xd3\\x84\\xe4\\x73\\x96\\x3d\\x47\\x6e\\xdc\\xfe\\x08\\x20\\x52\\x37\\xac\\xfd\\x49\\xb5\\xb8\\xf3\\x38\\x57\\xf8\\x11\\x4e\\x86\\x3f\\xec\\x7f',\n        b'\\x9f\\xf1\\x85\\x63\\xb9\\x78\\xec\\x28\\x1b\\x3f\\x27\\x94',\n        b'\\xad\\xb5\\xec\\x72\\x0c\\xcf\\x98\\x98\\x50\\x00\\x28\\xbf\\x34\\xaf\\xcc\\xbc\\xac\\xa1\\x26\\xef',\n        b'\\x27',\n        b'\\xeb',\n        b'\\x63\\x35\\xe1\\xd4\\x9e\\x89\\x88\\xea\\xc4\\x8e\\x42\\x19\\x4e\\x5f\\x56\\xdb'\n        ),\n        \n    Aes(b'\\x1f\\xde\\xd3\\x2d\\x59\\x99\\xde\\x4a\\x76\\xe0\\xf8\\x08\\x21\\x08\\x82\\x3a\\xef\\x60\\x41\\x7e\\x18\\x96\\xcf\\x42\\x18\\xa2\\xfa\\x90\\xf6\\x32\\xec\\x8a',\n        b'\\x1f\\x3a\\xfa\\x47\\x11\\xe9\\x47\\x4f\\x32\\xe7\\x04\\x62',\n        b'',\n        b'\\x06\\xb2\\xc7\\x58\\x53\\xdf\\x9a\\xeb\\x17\\xbe\\xfd\\x33\\xce\\xa8\\x1c\\x63\\x0b\\x0f\\xc5\\x36\\x67\\xff\\x45\\x19\\x9c\\x62\\x9c\\x8e\\x15\\xdc\\xe4\\x1e\\x53\\x0a\\xa7\\x92\\xf7\\x96\\xb8\\x13\\x8e\\xea\\xb2\\xe8\\x6c\\x7b\\x7b\\xee\\x1d\\x40\\xb0',\n        b'\\x91\\xfb\\xd0\\x61\\xdd\\xc5\\xa7\\xfc\\xc9\\x51\\x3f\\xcd\\xfd\\xc9\\xc3\\xa7\\xc5\\xd4\\xd6\\x4c\\xed\\xf6\\xa9\\xc2\\x4a\\xb8\\xa7\\x7c\\x36\\xee\\xfb\\xf1\\xc5\\xdc\\x00\\xbc\\x50\\x12\\x1b\\x96\\x45\\x6c\\x8c\\xd8\\xb6\\xff\\x1f\\x8b\\x3e\\x48\\x0f',\n        b'\\x30\\x09\\x6d\\x34\\x0f\\x3d\\x5c\\x42\\xd8\\x2a\\x6f\\x47\\x5d\\xef\\x23\\xeb'\n        ),\n        \n    Aes(b'\\x24\\x50\\x1a\\xd3\\x84\\xe4\\x73\\x96\\x3d\\x47\\x6e\\xdc\\xfe\\x08\\x20\\x52\\x37\\xac\\xfd\\x49\\xb5\\xb8\\xf3\\x38\\x57\\xf8\\x11\\x4e\\x86\\x3f\\xec\\x7f',\n        b'\\x9f\\xf1\\x85\\x63\\xb9\\x78\\xec\\x28\\x1b\\x3f\\x27\\x94',\n        b'\\xad\\xb5\\xec\\x72\\x0c\\xcf\\x98\\x98\\x50\\x00\\x28\\xbf\\x34\\xaf\\xcc\\xbc\\xac\\xa1\\x26\\xef',\n        b'\\x27\\xf3\\x48\\xf9\\xcd\\xc0\\xc5\\xbd\\x5e\\x66\\xb1\\xcc\\xb6\\x3a\\xd9\\x20\\xff\\x22\\x19\\xd1\\x4e\\x8d\\x63\\x1b\\x38\\x72\\x26\\x5c\\xf1\\x17\\xee\\x86\\x75\\x7a\\xcc\\xb1\\x58\\xbd\\x9a\\xbb\\x38\\x68\\xfd\\xc0\\xd0\\xb0\\x74\\xb5\\xf0\\x1b\\x2c',\n        b'\\xeb\\x7c\\xb7\\x54\\xc8\\x24\\xe8\\xd9\\x6f\\x7c\\x6d\\x9b\\x76\\xc7\\xd2\\x6f\\xb8\\x74\\xff\\xbf\\x1d\\x65\\xc6\\xf6\\x4a\\x69\\x8d\\x83\\x9b\\x0b\\x06\\x14\\x5d\\xae\\x82\\x05\\x7a\\xd5\\x59\\x94\\xcf\\x59\\xad\\x7f\\x67\\xc0\\xfa\\x5e\\x85\\xfa\\xb8',\n        b'\\xbc\\x95\\xc5\\x32\\xfe\\xcc\\x59\\x4c\\x36\\xd1\\x55\\x02\\x86\\xa7\\xa3\\xf0'\n        )\n]\n\nprint('********************** Test-1: ivlen=12, ptlen=0, aadlen=0 ******************')\nprint('GCM Encrypt......')\n# \u521d\u59cb\u5316aes-gcm\u5bc6\u7801\u5bf9\u8c61\uff0c\u53c2\u6570\u5305\u542b\u5bc6\u94a5key\u3001\u521d\u59cb\u5316\u5411\u91cfiv\u4ee5\u53ca\u9644\u52a0\u6570\u636eaad\ncrypto = ucryptolib.aes(aes[0].key, 0, aes[0].iv, aes[0].aad)\n# \u8f93\u5165\u660e\u6587\u6570\u636e\ninbuf = aes[0].pt\noutbuf = bytearray(16)\n# \u52a0\u5bc6\uff0c\u8f93\u51fa\u683c\u5f0f\u4e3a\uff1a\u5bc6\u6587 + tag\nval = crypto.encrypt(inbuf, outbuf)\n# \u6807\u51c6\u6570\u636e\nval0 = aes[0].ct + aes[0].tag\nprint(val0 == val)\nprint('GCM Decrypt......')\ncrypto = ucryptolib.aes(aes[0].key, 0, aes[0].iv, aes[0].aad)\n# \u8f93\u5165\u6570\u636e\u683c\u5f0f\uff1a\u5bc6\u6587 + tag\ninbuf = aes[0].ct + aes[0].tag\n# \u89e3\u5bc6\uff0c\u8f93\u51fa\u6570\u636e\u683c\u5f0f\uff1a\u660e\u6587\nval = crypto.decrypt(inbuf)\nprint(val[:1] == b'\\x00')\n# val0 = aes[0].pt\n# print(val0 == val)\n\nprint('********************** Test-2: ivlen=12, ptlen=1, aadlen=20 ******************')\nprint('GCM Encrypt......')\n# \u521d\u59cb\u5316\ncrypto = ucryptolib.aes(aes[1].key, 0, aes[1].iv, aes[1].aad)\n# \u8f93\u5165\u660e\u6587\ninbuf = aes[1].pt\noutbuf = bytearray(17)\n# \u8f93\u51fa\u5bc6\u6587+tag\nval = crypto.encrypt(inbuf, outbuf)\nval0 = aes[1].ct + aes[1].tag\nprint(val0 == val)\nprint('GCM Decrypt......')\ncrypto = ucryptolib.aes(aes[1].key, 0, aes[1].iv, aes[1].aad)\n# \u8f93\u5165\u5bc6\u6587+tag\ninbuf = aes[1].ct + aes[1].tag\noutbuf = bytearray(1)\n# \u8f93\u51fa\u660e\u6587\nval = crypto.decrypt(inbuf, outbuf)\nval0 = aes[1].pt\nprint(val0 == val)\n\nprint('********************** Test-3: ivlen=12, ptlen=51, aadlen=0 ******************')\nprint('GCM Encrypt......')\n# \u521d\u59cb\u5316\ncrypto = ucryptolib.aes(aes[2].key, 0, aes[2].iv, aes[2].aad)\n# \u8f93\u5165\u660e\u6587\ninbuf = aes[2].pt\noutbuf = bytearray(67)\n# \u8f93\u51fa\u5bc6\u6587+tag\nval = crypto.encrypt(inbuf, outbuf)\nval0 = aes[2].ct + aes[2].tag\nprint(val0 == val)\nprint('GCM Decrypt......')\ncrypto = ucryptolib.aes(aes[2].key, 0, aes[2].iv, aes[2].aad)\n# \u8f93\u5165\u5bc6\u6587+tag\ninbuf = aes[2].ct + aes[2].tag\noutbuf = bytearray(51)\n# \u8f93\u5165\u660e\u6587\nval = crypto.decrypt(inbuf, outbuf)\nval0 = aes[2].pt\nprint(val0 == val)\n\nprint('********************** Test-4: ivlen=12, ptlen=51, aadlen=20 ******************')\nprint('GCM Encrypt......')\n# \u521d\u59cb\u5316\ncrypto = ucryptolib.aes(aes[3].key, 0, aes[3].iv, aes[3].aad)\n# \u8f93\u5165\u660e\u6587\ninbuf = aes[3].pt\noutbuf = bytearray(67)\n# \u8f93\u51fa\u5bc6\u6587+tag\nval = crypto.encrypt(inbuf, outbuf)\nval0 = aes[3].ct + aes[3].tag\nprint(val0 == val)\nprint('GCM Decrypt......')\ncrypto = ucryptolib.aes(aes[3].key, 0, aes[3].iv, aes[3].aad)\n# \u8f93\u5165\u5bc6\u6587+tag\ninbuf = aes[3].ct + aes[3].tag\nval = crypto.decrypt(inbuf)\nval0 = aes[3].pt\nprint(val[:51] == val0)\n# outbuf = bytearray(51)\n# val = crypto.decrypt(inbuf, outbuf)\n# val0 = aes[3].pt\n# print(val0 == val)\n\n\nprint('\\n###################### SM4-ECB/CFB/OFB/CBC/CTR Test ##############################')\nSm4 = collections.namedtuple('Sm4', ['key', 'iv', 'pt', 'ct'])\nsm4 = [\n    # ecb\n    Sm4(b'\\x01\\x23\\x45\\x67\\x89\\xab\\xcd\\xef\\xfe\\xdc\\xba\\x98\\x76\\x54\\x32\\x10',\n        None,\n        b'\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb\\xcc\\xcc\\xcc\\xcc\\xdd\\xdd\\xdd\\xdd\\xee\\xee\\xee\\xee\\xff\\xff\\xff\\xff\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb',\n        b'\\x5e\\xc8\\x14\\x3d\\xe5\\x09\\xcf\\xf7\\xb5\\x17\\x9f\\x8f\\x47\\x4b\\x86\\x19\\x2f\\x1d\\x30\\x5a\\x7f\\xb1\\x7d\\xf9\\x85\\xf8\\x1c\\x84\\x82\\x19\\x23\\x04'\n        ),\n\n    # cbc\n    Sm4(\n        b'\\x01\\x23\\x45\\x67\\x89\\xab\\xcd\\xef\\xfe\\xdc\\xba\\x98\\x76\\x54\\x32\\x10',\n        b'\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f',\n        b'\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb\\xcc\\xcc\\xcc\\xcc\\xdd\\xdd\\xdd\\xdd\\xee\\xee\\xee\\xee\\xff\\xff\\xff\\xff\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb',\n        b'\\x78\\xeb\\xb1\\x1c\\xc4\\x0b\\x0a\\x48\\x31\\x2a\\xae\\xb2\\x04\\x02\\x44\\xcb\\x4c\\xb7\\x01\\x69\\x51\\x90\\x92\\x26\\x97\\x9b\\x0d\\x15\\xdc\\x6a\\x8f\\x6d'\n        ),\n    \n    # cfb\n    Sm4(\n        b'\\x01\\x23\\x45\\x67\\x89\\xab\\xcd\\xef\\xfe\\xdc\\xba\\x98\\x76\\x54\\x32\\x10',\n        b'\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f',\n        b'\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb\\xcc\\xcc\\xcc\\xcc\\xdd\\xdd\\xdd\\xdd\\xee\\xee\\xee\\xee\\xff\\xff\\xff\\xff\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb',\n        b'\\xac\\x32\\x36\\xcb\\x86\\x1d\\xd3\\x16\\xe6\\x41\\x3b\\x4e\\x3c\\x75\\x24\\xb7\\x69\\xd4\\xc5\\x4e\\xd4\\x33\\xb9\\xa0\\x34\\x60\\x09\\xbe\\xb3\\x7b\\x2b\\x3f'\n        ),\n\n    # ofb\n    Sm4(\n        b'\\x01\\x23\\x45\\x67\\x89\\xab\\xcd\\xef\\xfe\\xdc\\xba\\x98\\x76\\x54\\x32\\x10',\n        b'\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f',\n        b'\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb\\xcc\\xcc\\xcc\\xcc\\xdd\\xdd\\xdd\\xdd\\xee\\xee\\xee\\xee\\xff\\xff\\xff\\xff\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb',\n        b'\\xac\\x32\\x36\\xcb\\x86\\x1d\\xd3\\x16\\xe6\\x41\\x3b\\x4e\\x3c\\x75\\x24\\xb7\\x1d\\x01\\xac\\xa2\\x48\\x7c\\xa5\\x82\\xcb\\xf5\\x46\\x3e\\x66\\x98\\x53\\x9b'\n        ),\n\n    # ctr\n    Sm4(\n        b'\\x01\\x23\\x45\\x67\\x89\\xab\\xcd\\xef\\xfe\\xdc\\xba\\x98\\x76\\x54\\x32\\x10',\n        b'\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f',\n        b'\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xbb\\xbb\\xbb\\xbb\\xbb\\xbb\\xbb\\xbb\\xcc\\xcc\\xcc\\xcc\\xcc\\xcc\\xcc\\xcc\\xdd\\xdd\\xdd\\xdd\\xdd\\xdd\\xdd\\xdd\\xee\\xee\\xee\\xee\\xee\\xee\\xee\\xee\\xff\\xff\\xff\\xff\\xff\\xff\\xff\\xff\\xee\\xee\\xee\\xee\\xee\\xee\\xee\\xee\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa',\n        b'\\xac\\x32\\x36\\xcb\\x97\\x0c\\xc2\\x07\\x91\\x36\\x4c\\x39\\x5a\\x13\\x42\\xd1\\xa3\\xcb\\xc1\\x87\\x8c\\x6f\\x30\\xcd\\x07\\x4c\\xce\\x38\\x5c\\xdd\\x70\\xc7\\xf2\\x34\\xbc\\x0e\\x24\\xc1\\x19\\x80\\xfd\\x12\\x86\\x31\\x0c\\xe3\\x7b\\x92\\x2a\\x46\\xb8\\x94\\xbe\\xe4\\xfe\\xb7\\x9a\\x38\\x22\\x94\\x0c\\x93\\x54\\x05'\n        )\n]\n\nprint('********************** Test-1: keybits=128, ptlen=32 ******************')\nprint('SM4-ECB Encrypt......')\n# \u521d\u59cb\u5316sm4\u5bc6\u7801\u5bf9\u8c61\uff0c\u53c2\u6570\u5305\u542b\u5bc6\u94a5key\u3001\u52a0\u89e3\u5bc6\u6a21\u5f0f\ncrypto = ucryptolib.sm4(sm4[0].key, 1)\n# \u8f93\u5165\u660e\u6587\u6570\u636e\ninbuf = sm4[0].pt\noutbuf = bytearray(32)\n# \u52a0\u5bc6\nval = crypto.encrypt(inbuf, outbuf)\n# golden\u6570\u636e\nval0 = sm4[0].ct\nprint(val0 == val)\nprint('SM4-ECB Decrypt......')\n# \u89e3\u5bc6\ncrypto = ucryptolib.sm4(sm4[0].key, 1)\ninbuf = sm4[0].ct\noutbuf = bytearray(32)\nval = crypto.decrypt(inbuf, outbuf)\nval0 = sm4[0].pt\nprint(val0 == val)\n\nprint('********************** Test-2: keybits=128, ivlen=16, ptlen=32 ******************')\nprint('SM4-CBC Encrypt......')\n# \u521d\u59cb\u5316sm4\u5bc6\u7801\u5bf9\u8c61\ncrypto = ucryptolib.sm4(sm4[1].key, 2, sm4[1].iv)\n# \u8f93\u5165\u660e\u6587\u6570\u636e\ninbuf = sm4[1].pt\noutbuf = bytearray(32)\n# \u52a0\u5bc6\nval = crypto.encrypt(inbuf, outbuf)\nval0 = sm4[1].ct\nprint(val0 == val)\nprint('SM4-CBC Decrypt......')\n# \u89e3\u5bc6\ncrypto = ucryptolib.sm4(sm4[1].key, 2, sm4[1].iv)\ninbuf = sm4[1].ct\nval = crypto.decrypt(inbuf)\nval0 = sm4[1].pt\nprint(val0 == val)\n# outbuf = bytearray(32)\n# val = crypto.decrypt(inbuf, outbuf)\n# val0 = sm4[1].pt\n# print(val0 == val)\n\nprint('********************** Test-3: keybits=128, ivlen=16, ptlen=32 ******************')\nprint('SM4-CFB Encrypt......')\n# \u521d\u59cb\u5316sm4\u5bc6\u7801\u5bf9\u8c61\ncrypto = ucryptolib.sm4(sm4[2].key, 3, sm4[2].iv)\n# \u8f93\u5165\u660e\u6587\u6570\u636e\ninbuf = sm4[2].pt\noutbuf = bytearray(32)\n# \u52a0\u5bc6\nval = crypto.encrypt(inbuf, outbuf)\nval0 = sm4[2].ct\nprint(val0 == val)\nprint('SM4-CFB Decrypt......')\n# \u89e3\u5bc6\ncrypto = ucryptolib.sm4(sm4[2].key, 3, sm4[2].iv)\ninbuf = sm4[2].ct\noutbuf = bytearray(32)\nval = crypto.decrypt(inbuf, outbuf)\nval0 = sm4[2].pt\nprint(val0 == val)\n\nprint('********************** Test-4: keybits=128, ivlen=16, ptlen=32 ******************')\nprint('SM4-OFB Encrypt......')\n# \u521d\u59cb\u5316sm4\u5bc6\u7801\u5bf9\u8c61\ncrypto = ucryptolib.sm4(sm4[3].key, 5, sm4[3].iv)\n# \u8f93\u5165\u660e\u6587\u6570\u636e\ninbuf = sm4[3].pt\noutbuf = bytearray(32)\n# \u52a0\u5bc6\nval = crypto.encrypt(inbuf, outbuf)\nval0 = sm4[3].ct\nprint(val0 == val)\nprint('SM4-OFB Decrypt......')\n# \u89e3\u5bc6\ncrypto = ucryptolib.sm4(sm4[3].key, 5, sm4[3].iv)\ninbuf = sm4[3].ct\noutbuf = bytearray(32)\nval = crypto.decrypt(inbuf, outbuf)\nval0 = sm4[3].pt\nprint(val0 == val)\n\nprint('********************** Test-5: keybits=128, ivlen=16, ptlen=64 ******************')\nprint('SM4-CTR Encrypt......')\n# \u521d\u59cb\u5316sm4\u5bc6\u7801\u5bf9\u8c61\ncrypto = ucryptolib.sm4(sm4[4].key, 6, sm4[4].iv)\n# \u8f93\u5165\u660e\u6587\u6570\u636e\ninbuf = sm4[4].pt\noutbuf = bytearray(64)\n# \u52a0\u5bc6\nval = crypto.encrypt(inbuf, outbuf)\nval0 = sm4[4].ct\nprint(val0 == val)\nprint('SM4-CTR Decrypt......')\n# \u89e3\u5bc6\ncrypto = ucryptolib.sm4(sm4[4].key, 6, sm4[4].iv)\ninbuf = sm4[4].ct\noutbuf = bytearray(64)\nval = crypto.decrypt(inbuf, outbuf)\nval0 = sm4[4].pt\nprint(val0 == val)\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u5177\u4f53\u63a5\u53e3\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,e.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/main/zh/api/cipher/K230_CanMV_Ucryptolib%E6%A8%A1%E5%9D%97API%E6%89%8B%E5%86%8C.html",children:"Cipher"}),"\u3001",(0,e.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/main/zh/api/cipher/K230_CanMV_Hashlib%E6%A8%A1%E5%9D%97API%E6%89%8B%E5%86%8C.html",children:"Hash"})]}),"\n",(0,e.jsx)(n.h2,{id:"2-adc---adc\u4f8b\u7a0b",children:"2. ADC - ADC\u4f8b\u7a0b"}),"\n",(0,e.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u7a0b\u5e8f\u7528\u4e8e\u5bf9 CanMV \u5f00\u53d1\u677f\u8fdb\u884c\u4e00\u4e2aADC\u7684\u529f\u80fd\u5c55\u793a\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:'from machine import ADC\n\n# \u5b9e\u4f8b\u5316ADC\u901a\u90530\nadc = ADC(0)\n# \u83b7\u53d6ADC\u901a\u90530\u91c7\u6837\u503c\nprint(adc.read_u16())\n# \u83b7\u53d6ADC\u901a\u90530\u7535\u538b\u503c\nprint(adc.read_uv(), "uV")\n'})}),"\n",(0,e.jsxs)(n.p,{children:["\u5177\u4f53\u63a5\u53e3\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,e.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/main/zh/api/machine/K230_CanMV_ADC%E6%A8%A1%E5%9D%97API%E6%89%8B%E5%86%8C.html",children:"ADC"})]}),"\n",(0,e.jsx)(n.h2,{id:"3-fft---fft\u4f8b\u7a0b",children:"3. FFT - FFT\u4f8b\u7a0b"}),"\n",(0,e.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u7a0b\u5e8f\u7528\u4e8e\u5bf9 CanMV \u5f00\u53d1\u677f\u8fdb\u884c\u4e00\u4e2aFFT\u7684\u529f\u80fd\u5c55\u793a\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"from machine import FFT\nimport array\nimport math\nfrom ulab import numpy as np\nPI = 3.14159265358979323846264338327950288419716939937510\n\nrx = []\ndef input_data():\n    for i in range(64):\n        data0 = 10 *math.cos(2* PI *i / 64)\n        data1  = 20 * math.cos(2 * 2* PI *i / 64)\n        data2  = 30* math.cos(3 *2* PI *i / 64)\n        data3  = 0.2* math.cos(4 *2 * PI * i / 64)\n        data4  = 1000* math.cos(5 *2* PI * i / 64)\n        rx.append((int(data0 + data1 + data2 + data3 + data4)))\ninput_data()                                                            #\u521d\u59cb\u5316\u9700\u8981\u8fdb\u884cFFT\u7684\u6570\u636e\uff0c\u5217\u8868\u7c7b\u578b\nprint(rx)\ndata = np.array(rx,dtype=np.uint16)                                     #\u628a\u5217\u8868\u6570\u636e\u8f6c\u6362\u6210\u6570\u7ec4\nprint(data)\nfft1 = FFT(data, 64, 0x555)                                             #\u521b\u5efa\u4e00\u4e2aFFT\u5bf9\u8c61,\u8fd0\u7b97\u70b9\u6570\u4e3a64\uff0c\u504f\u79fb\u662f0x555\nres = fft1.run()                                                        #\u83b7\u53d6FFT\u8f6c\u6362\u540e\u7684\u6570\u636e\nprint(res)\nres = fft1.amplitude(res)                                               #\u83b7\u53d6\u5404\u4e2a\u9891\u7387\u70b9\u7684\u5e45\u503c\nprint(res)\nres = fft1.freq(64,38400)                                               #\u83b7\u53d6\u6240\u6709\u9891\u7387\u70b9\u7684\u9891\u7387\u503c  \nprint(res)\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u5177\u4f53\u63a5\u53e3\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,e.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/main/zh/api/machine/K230_CanMV_FFT%E6%A8%A1%E5%9D%97API%E6%89%8B%E5%86%8C.html",children:"FFT"})]}),"\n",(0,e.jsx)(n.h2,{id:"4-fpioa---fpioa\u4f8b\u7a0b",children:"4. FPIOA - FPIOA\u4f8b\u7a0b"}),"\n",(0,e.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u7a0b\u5e8f\u7528\u4e8e\u5bf9 CanMV \u5f00\u53d1\u677f\u8fdb\u884c\u4e00\u4e2aFPIOA\u7684\u529f\u80fd\u5c55\u793a\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"from machine import FPIOA\n\n# \u5b9e\u4f8b\u5316FPIOA\nfpioa = FPIOA()\n# \u6253\u5370\u6240\u6709\u5f15\u811a\u914d\u7f6e\nfpioa.help()\n# \u6253\u5370\u6307\u5b9a\u5f15\u811a\u8be6\u7ec6\u914d\u7f6e\nfpioa.help(0)\n# \u6253\u5370\u6307\u5b9a\u529f\u80fd\u6240\u6709\u53ef\u7528\u7684\u914d\u7f6e\u5f15\u811a\nfpioa.help(FPIOA.IIC0_SDA, func=True)\n# \u8bbe\u7f6ePin0\u4e3aGPIO0\nfpioa.set_function(0, FPIOA.GPIO0)\n# \u8bbe\u7f6ePin2\u4e3aGPIO2, \u540c\u65f6\u914d\u7f6e\u5176\u5b83\u9879\nfpioa.set_function(2, FPIOA.GPIO2, ie=1, oe=1, pu=0, pd=0, st=1, sl=0, ds=7)\n# \u83b7\u53d6\u6307\u5b9a\u529f\u80fd\u5f53\u524d\u6240\u5728\u7684\u5f15\u811a\nfpioa.get_pin_num(FPIOA.UART0_TXD)\n# \u83b7\u53d6\u6307\u5b9a\u5f15\u811a\u5f53\u524d\u529f\u80fd\nfpioa.get_pin_func(0)\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u5177\u4f53\u63a5\u53e3\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,e.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/main/zh/api/machine/K230_CanMV_FPIOA%E6%A8%A1%E5%9D%97API%E6%89%8B%E5%86%8C.html",children:"FPIOA"})]}),"\n",(0,e.jsx)(n.h2,{id:"5-pwm---pwm\u4f8b\u7a0b",children:"5. PWM - PWM\u4f8b\u7a0b"}),"\n",(0,e.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u7a0b\u5e8f\u7528\u4e8e\u5bf9 CanMV \u5f00\u53d1\u677f\u8fdb\u884c\u4e00\u4e2aPWM\u8f93\u51fa\u7684\u529f\u80fd\u5c55\u793a\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"from machine import PWM\n# \u5b9e\u4f8b\u5316PWM\u901a\u90530\uff0c\u9891\u7387\u4e3a1000Hz\uff0c\u5360\u7a7a\u6bd4\u4e3a50%\uff0c\u9ed8\u8ba4\u4f7f\u80fd\u8f93\u51fa\npwm0 = PWM(0, 1000, 50, enable = True)\n# \u5173\u95ed\u901a\u90530\u8f93\u51fa\npwm0.enable(0)\n# \u8c03\u6574\u901a\u90530\u9891\u7387\u4e3a2000Hz\npwm0.freq(2000)\n# \u8c03\u6574\u901a\u90530\u5360\u7a7a\u6bd4\u4e3a40%\npwm0.duty(40)\n# \u6253\u5f00\u901a\u90530\u8f93\u51fa\npwm0.enable(1)\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u5177\u4f53\u63a5\u53e3\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,e.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/main/zh/api/machine/K230_CanMV_PWM%E6%A8%A1%E5%9D%97API%E6%89%8B%E5%86%8C.html",children:"PWM"})]}),"\n",(0,e.jsx)(n.h2,{id:"6-spi---spi\u4f8b\u7a0b",children:"6. SPI - SPI\u4f8b\u7a0b"}),"\n",(0,e.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u7a0b\u5e8f\u7528\u4e8e\u5bf9 CanMV \u5f00\u53d1\u677f\u8fdb\u884cspi\u8bfb\u53d6flash id\u7684\u529f\u80fd\u5c55\u793a\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"from machine import SPI\nfrom machine import FPIOA\n\n# \u5b9e\u4f8b\u5316SPI\u7684gpio\na = FPIOA()\n\n# \u6253\u5370gpio14\u7684\u5c5e\u6027\na.help(14)\n# \u8bbe\u7f6egpio14\u4e3aQSPI0_CS0\u529f\u80fd\na.set_function(14,a.QSPI0_CS0)\na.help(14)\n\n# \u6253\u5370gpio15\u7684\u5c5e\u6027\na.help(15)\n# \u8bbe\u7f6egpio15\u4e3aQSPI0_CLK\u529f\u80fd\na.set_function(15,a.QSPI0_CLK)\na.help(15)\n\n# \u6253\u5370gpio16\u7684\u5c5e\u6027\na.help(16)\n# \u8bbe\u7f6egpio16\u4e3aQSPI0_D0\u529f\u80fd\na.set_function(16,a.QSPI0_D0)\na.help(16)\n\n# \u6253\u5370gpio17\u7684\u5c5e\u6027\na.help(17)\n# \u8bbe\u7f6egpio17\u4e3aQSPI0_D1\u529f\u80fd\na.set_function(17,a.QSPI0_D1)\na.help(17)\n\n# \u5b9e\u4f8b\u5316SPI\uff0c\u4f7f\u75285MHz\u65f6\u949f\uff0c\u6781\u6027\u4e3a0\uff0c\u6570\u636e\u4f4d\u5bbd\u4e3a8bit\nspi=SPI(1,baudrate=5000000, polarity=0, phase=0, bits=8)\n\n# \u4f7f\u80fd gd25lq128 \u590d\u4f4d\nspi.write(bytes([0x66]))\n# gd25lq128 \u590d\u4f4d\nspi.write(bytes([0x99]))\n\n# \u8bfbid\u547d\u4ee4\uff080x9f\uff09\na=bytes([0x9f])\n# \u521b\u5efa\u957f\u5ea6\u4e3a3\u7684\u63a5\u6536buff\nb=bytearray(3)\n# \u8bfbid\nspi.write_readinto(a,b)\n# \u6253\u5370\u4e3a\uff1abytearray(b'\\xc8`\\x18')\nprint(b)\n\n# \u8bfbid\u547d\u4ee4\uff080x90,0,0,0\uff09\na=bytes([0x90,0,0,0])\n# \u521b\u5efa\u957f\u5ea6\u4e3a2\u7684\u63a5\u6536buff\nb=bytearray(2)\n# \u8bfbid\nspi.write_readinto(a,b)\n# \u6253\u5370\u4e3a\uff1abytearray(b'\\xc8\\x17')\nprint(b)\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u5177\u4f53\u63a5\u53e3\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,e.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/main/zh/api/machine/K230_CanMV_SPI%E6%A8%A1%E5%9D%97API%E6%89%8B%E5%86%8C.html",children:"SPI"})]}),"\n",(0,e.jsx)(n.h2,{id:"7-timer---timer\u4f8b\u7a0b",children:"7. Timer - Timer\u4f8b\u7a0b"}),"\n",(0,e.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u7a0b\u5e8f\u7528\u4e8e\u5bf9 CanMV \u5f00\u53d1\u677f\u8fdb\u884c\u4e00\u4e2aTimer\u7684\u529f\u80fd\u5c55\u793a\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"from machine import Timer\nimport time\n\n# \u5b9e\u4f8b\u5316\u4e00\u4e2a\u8f6f\u5b9a\u65f6\u5668\ntim = Timer(-1)\n# \u521d\u59cb\u5316\u5b9a\u65f6\u5668\u4e3a\u5355\u6b21\u6a21\u5f0f\uff0c\u5468\u671f100ms\ntim.init(period=100, mode=Timer.ONE_SHOT, callback=lambda t:print(1))\ntime.sleep(0.2)\n# \u521d\u59cb\u5316\u5b9a\u65f6\u5668\u4e3a\u5468\u671f\u6a21\u5f0f\uff0c\u9891\u7387\u4e3a1Hz\ntim.init(freq=1, mode=Timer.PERIODIC, callback=lambda t:print(2))\ntime.sleep(2)\n# \u91ca\u653e\u5b9a\u65f6\u5668\u8d44\u6e90\ntim.deinit()\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u5177\u4f53\u63a5\u53e3\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,e.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/main/zh/api/machine/K230_CanMV_Timer%E6%A8%A1%E5%9D%97API%E6%89%8B%E5%86%8C.html",children:"Timer"})]}),"\n",(0,e.jsx)(n.h2,{id:"8-wdt---wdt\u4f8b\u7a0b",children:"8. WDT - WDT\u4f8b\u7a0b"}),"\n",(0,e.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u7a0b\u5e8f\u7528\u4e8e\u5bf9 CanMV \u5f00\u53d1\u677f\u8fdb\u884c\u4e00\u4e2aWDT\u7684\u529f\u80fd\u5c55\u793a\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"import time\nfrom machine import WDT\n\n# \u5b9e\u4f8b\u5316wdt1\uff0ctimeout\u4e3a3s\nwdt1 = WDT(1,3)\ntime.sleep(2)\n# \u5582\u72d7\u64cd\u4f5c\nwdt1.feed()\ntime.sleep(2)\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u5177\u4f53\u63a5\u53e3\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,e.jsx)(n.a,{href:"https://developer.canaan-creative.com/k230_canmv/main/zh/api/machine/K230_CanMV_WDT%E6%A8%A1%E5%9D%97API%E6%89%8B%E5%86%8C.html",children:"WDT"})]})]})}function s(x={}){const{wrapper:n}={...(0,t.R)(),...x.components};return n?(0,e.jsx)(n,{...x,children:(0,e.jsx)(d,{...x})}):d(x)}},28453:(x,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var e=a(96540);const t={},c=e.createContext(t);function i(x){const n=e.useContext(c);return e.useMemo((function(){return"function"==typeof x?x(n):{...n,...x}}),[n,x])}function r(x){let n;return n=x.disableParentContext?"function"==typeof x.components?x.components(t):x.components||t:i(x.components),e.createElement(c.Provider,{value:n},x.children)}}}]);