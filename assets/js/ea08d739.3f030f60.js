"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[950],{91733:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var s=i(74848),r=i(28453);const c={sidebar_position:15},d="2.2 network \u6a21\u5757API\u624b\u518c",l={id:"CanaanK230/part5/newworkModuleAPIManual",title:"2.2 network \u6a21\u5757API\u624b\u518c",description:"\u524d\u8a00",source:"@site/docs/CanaanK230/part5/15_newworkModuleAPIManual.md",sourceDirName:"CanaanK230/part5",slug:"/CanaanK230/part5/newworkModuleAPIManual",permalink:"/docs/CanaanK230/part5/newworkModuleAPIManual",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CanaanK230/part5/15_newworkModuleAPIManual.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"canaanK230Sidebar",previous:{title:"2.1 uctypes \u6a21\u5757API\u624b\u518c",permalink:"/docs/CanaanK230/part5/uctypesmoduleAPImanual"},next:{title:"2.3 socket \u6a21\u5757API\u624b\u518c",permalink:"/docs/CanaanK230/part5/socketModuleAPIManual"}},t={},a=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u8bfb\u8005\u5bf9\u8c61",id:"\u8bfb\u8005\u5bf9\u8c61",level:3},{value:"\u7f29\u7565\u8bcd\u5b9a\u4e49",id:"\u7f29\u7565\u8bcd\u5b9a\u4e49",level:3},{value:"\u4fee\u8ba2\u8bb0\u5f55",id:"\u4fee\u8ba2\u8bb0\u5f55",level:3},{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2},{value:"2. lan api",id:"2-lan-api",level:2},{value:"2.1\u6784\u9020\u51fd\u6570",id:"21\u6784\u9020\u51fd\u6570",level:3},{value:"2.2\u65b9\u6cd5",id:"22\u65b9\u6cd5",level:3},{value:"2. wlan api",id:"2-wlan-api",level:2},{value:"\u6784\u9020",id:"\u6784\u9020",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3}];function h(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"22-network-\u6a21\u5757api\u624b\u518c",children:"2.2 network \u6a21\u5757API\u624b\u518c"})}),"\n",(0,s.jsx)(e.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,s.jsx)(e.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdnetwork\u6a21\u5757API\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8bfb\u8005\u5bf9\u8c61",children:"\u8bfb\u8005\u5bf9\u8c61"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u6863\uff08\u672c\u6307\u5357\uff09\u4e3b\u8981\u9002\u7528\u4e8e\u4ee5\u4e0b\u4eba\u5458\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6280\u672f\u652f\u6301\u5de5\u7a0b\u5e08"}),"\n",(0,s.jsx)(e.li,{children:"\u8f6f\u4ef6\u5f00\u53d1\u5de5\u7a0b\u5e08"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u7f29\u7565\u8bcd\u5b9a\u4e49",children:"\u7f29\u7565\u8bcd\u5b9a\u4e49"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u7b80\u79f0"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]})})]}),"\n",(0,s.jsx)(e.h3,{id:"\u4fee\u8ba2\u8bb0\u5f55",children:"\u4fee\u8ba2\u8bb0\u5f55"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u6587\u6863\u7248\u672c\u53f7"}),(0,s.jsx)(e.th,{children:"\u4fee\u6539\u8bf4\u660e"}),(0,s.jsx)(e.th,{children:"\u4fee\u6539\u8005"}),(0,s.jsx)(e.th,{children:"\u65e5\u671f"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"V1.0"}),(0,s.jsx)(e.td,{children:"\u521d\u7248"}),(0,s.jsx)(e.td,{children:"\u8f6f\u4ef6\u90e8"}),(0,s.jsx)(e.td,{children:"2023-11-09"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"1-\u6982\u8ff0",children:"1. \u6982\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6a21\u5757\u4e3b\u8981\u7528\u4e8e\u914d\u7f6e\u67e5\u770b\u7f51\u7edc\u53c2\u6570,\u914d\u7f6e\u5b8c\u540e\u624d\u53ef\u4ee5\u4f7f\u7528socket\u6a21\u5757\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"2-lan-api",children:"2. lan api"}),"\n",(0,s.jsxs)(e.p,{children:["\u8be6\u89c1\uff1a",(0,s.jsx)(e.code,{children:"https://docs.micropython.org/en/latest/library/network.LAN.html"})]}),"\n",(0,s.jsx)(e.p,{children:"\u6b64\u7c7b\u4e3a\u6709\u7ebf\u7f51\u7edc\u914d\u7f6e\u63a5\u53e3\u3002\u7528\u6cd5\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"import network\nnic = network.LAN()\nprint(nic.ifconfig())\n\n# now use socket as usual\n...\n"})}),"\n",(0,s.jsx)(e.h3,{id:"21\u6784\u9020\u51fd\u6570",children:"2.1\u6784\u9020\u51fd\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"class"}),"network.LAN()",(0,s.jsx)(e.a,{href:"https://docs.micropython.org/en/latest/library/network.LAN.html#network.LAN",children:"\xb6"})]}),"\n",(0,s.jsx)(e.p,{children:"\u521b\u5efa\u6709\u7ebf\u4ee5\u592a\u7f51\u5bf9\u8c61\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"22\u65b9\u6cd5",children:"2.2\u65b9\u6cd5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["LAN.active([state])",(0,s.jsx)(e.a,{href:"https://docs.micropython.org/en/latest/library/network.LAN.html#network.LAN.active",children:"\xb6"})]}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4f20\u9012\u5e03\u5c14\u53c2\u6570\uff0c\u5219\u6fc0\u6d3b\uff08\u201c\u5411\u4e0a\u201d\uff09\u6216\u505c\u7528\uff08\u201c\u5411\u4e0b\u201d\uff09\u7f51\u7edc\u63a5\u53e3\u3002\u5426\u5219\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u53c2\u6570\uff0c\u5219\u67e5\u8be2\u5f53\u524d\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["LAN.isconnected()",(0,s.jsx)(e.a,{href:"https://docs.micropython.org/en/latest/library/network.LAN.html#network.LAN.isconnected",children:"\xb6"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd4\u56de ",(0,s.jsx)(e.code,{children:"True"}),"\u5982\u679c\u8fde\u63a5\u5230\u7f51\u7edc\uff0c\u5426\u5219\u8fd4\u56de",(0,s.jsx)(e.code,{children:"False"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["LAN.ifconfig([(ip, ",(0,s.jsx)(e.em,{children:"subnet"}),", ",(0,s.jsx)(e.em,{children:"gateway"}),", ",(0,s.jsx)(e.em,{children:"dns)"}),(0,s.jsx)(e.strong,{children:"]"}),")",(0,s.jsx)(e.a,{href:"https://docs.micropython.org/en/latest/library/network.LAN.html#network.LAN.ifconfig",children:"\xb6"})]}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6/\u8bbe\u7f6e IP \u7ea7\u7f51\u7edc\u63a5\u53e3\u53c2\u6570\uff1aIP \u5730\u5740\u3001\u5b50\u7f51\u63a9\u7801\u3001\u7f51\u5173\u548c DNS \u670d\u52a1\u5668\u3002\u5f53\u4e0d\u5e26\u53c2\u6570\u8c03\u7528\u65f6\uff0c\u6b64\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4e0a\u8ff0\u4fe1\u606f\u7684 4 \u5143\u7ec4\u3002\u8981\u8bbe\u7f6e\u4e0a\u8ff0\u503c\uff0c\u8bf7\u4f20\u9012\u5e26\u6709\u6240\u9700\u4fe1\u606f\u7684 4 \u5143\u7ec4\u3002\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"nic.ifconfig(('192.168.0.4', '255.255.255.0', '192.168.0.1', '8.8.8.8'))\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["LAN.config(",(0,s.jsx)(e.em,{children:"config_parameters"}),")",(0,s.jsx)(e.a,{href:"https://docs.micropython.org/en/latest/library/network.LAN.html#network.LAN.config",children:"\xb6"})]}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u6216\u8bbe\u7f6e\u7f51\u7edc\u63a5\u53e3mac\u5730\u5740\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'import network\nlan=network.LAN()\n#\u8bbe\u7f6e\u7f51\u53e3mac\u5730\u5740\nprint(lan.config(mac="42:EA:D0:C2:0D:83"))\n#\u67e5\u770b\u7f51\u53e3mac\u5730\u5740\nprint(lan.config("mac"))\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"2-wlan-api",children:"2. wlan api"}),"\n",(0,s.jsxs)(e.p,{children:["\u8be6\u89c1\uff1a",(0,s.jsx)(e.code,{children:"https://docs.micropython.org/en/latest/library/network.WLAN.html"})]}),"\n",(0,s.jsx)(e.p,{children:"\u6b64\u7c7b\u4e3a WiFi \u914d\u7f6e\u63a5\u53e3\u3002\u7528\u6cd5\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"import network\n# enable station interface and connect to WiFi access point\nnic = network.WLAN(network.STA_IF)\nnic.active(True)\nnic.connect('your-ssid', 'your-password')\n# now use sockets as usual\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6784\u9020",children:"\u6784\u9020"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["classnetwork.WLAN(",(0,s.jsx)(e.em,{children:"interface_id"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u521b\u5efa WLAN \u7f51\u7edc\u63a5\u53e3\u5bf9\u8c61\u3002\u652f\u6301\u7684\u63a5\u53e3\u662f ",(0,s.jsx)(e.code,{children:"network.STA_IF"}),"\uff08\u7ad9\u53c8\u540d\u5ba2\u6237\u7aef\uff0c\u8fde\u63a5\u5230\u4e0a\u6e38 WiFi \u63a5\u5165\u70b9\uff09\u548c",(0,s.jsx)(e.code,{children:"network.AP_IF"}),"\uff08\u63a5\u5165\u70b9\uff0c\u5141\u8bb8\u5176\u4ed6 WiFi \u5ba2\u6237\u7aef\u8fde\u63a5\uff09\u3002\u4ee5\u4e0b\u65b9\u6cd5\u7684\u53ef\u7528\u6027\u53d6\u51b3\u4e8e\u63a5\u53e3\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u53ea\u6709 STA \u63a5\u53e3\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(e.a,{href:"http://micropython.86x.net/en/latet/library/network.WLAN.html#network.WLAN.connect",children:(0,s.jsx)(e.code,{children:"WLAN.connect()"})})," \u8fde\u63a5\u5230\u63a5\u5165\u70b9\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"WLAN.active([is_active])"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4f20\u9012\u5e03\u5c14\u53c2\u6570\uff0c\u5219\u6fc0\u6d3b\uff08\u201cup\u201d\uff09\u6216\u505c\u7528\uff08\u201cdown\u201d\uff09\u7f51\u7edc\u63a5\u53e3\u3002\u5426\u5219\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u53c2\u6570\uff0c\u5219\u67e5\u8be2\u5f53\u524d\u72b6\u6001\u3002\u5927\u591a\u6570\u5176\u4ed6\u65b9\u6cd5\u9700\u8981\u6d3b\u52a8\u63a5\u53e3\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"WLAN.connect(ssid=None, password=None, bssid=None)"}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u6307\u5b9a\u7684\u5bc6\u7801\u8fde\u63a5\u5230\u6307\u5b9a\u7684\u65e0\u7ebf\u7f51\u7edc\u3002\u5982\u679c\u7ed9\u51fa\u4e86bssid\uff0c\u5219\u8fde\u63a5\u5c06\u88ab\u9650\u5236\u4e3a\u5177\u6709\u8be5 MAC \u5730\u5740\u7684\u63a5\u5165\u70b9\uff08\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u8fd8\u5fc5\u987b\u6307\u5b9assid\uff09\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"WLAN.disconnect()"}),"\n",(0,s.jsx)(e.p,{children:"\u65ad\u5f00\u5f53\u524d\u8fde\u63a5\u7684\u65e0\u7ebf\u7f51\u7edc\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"WLAN.scan()"}),"\n",(0,s.jsx)(e.p,{children:"\u626b\u63cf\u53ef\u7528\u7684\u65e0\u7ebf\u7f51\u7edc\u3002\u626b\u63cf\u53ea\u80fd\u5728 STA \u63a5\u53e3\u4e0a\u8fdb\u884c\u3002\u8fd4\u56de\u5305\u542b WiFi \u63a5\u5165\u70b9\u4fe1\u606f\uff0c\u5185\u5bb9\u7c7b\u4f3c\u5982\u4e0b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"#print(sta.scan())\nbssid / frequency / signal level / flags / ssid\nda:c5:47:12:80:ab       2462    -30     [WPA2-PSK-CCMP][ESS]    Redmi Note 11 Pro\n72:a8:d3:ab:c8:2c       2412    -42     [WPA2-PSK-CCMP][WPS][ESS]       wifi_test\ne4:4e:2d:42:ee:60       2412    -61     [WPA2-EAP-CCMP][ESS]    CAN\ne4:4e:2d:43:0a:a1       2437    -61     [WPA2-EAP-CCMP][ESS]    Canaan\ne4:4e:2d:43:0a:a4       2437    -61     [WPA2-PSK-CCMP][ESS]    \n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"WLAN.status([param])"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u65e0\u7ebf\u8fde\u63a5\u7684\u5f53\u524d\u72b6\u6001\u3002\u5f53\u4e0d\u5e26\u53c2\u6570\u8c03\u7528\u65f6\uff0c\u8fd4\u56de\u503c\u63cf\u8ff0\u7f51\u7edc\u94fe\u63a5\u72b6\u6001,\u7c7b\u4f3c\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"#print(sta.status())\nbssid=c6:b5:b6:86:64:d7\nfreq=2462\nssid=wjx_pc\nid=2\nmode=station\nwifi_generation=4\npairwise_cipher=CCMP\ngroup_cipher=CCMP\nkey_mgmt=WPA2-PSK\nwpa_state=COMPLETED\nip_address=192.168.137.221\np2p_device_address=0a:fb:ea:2b:7b:1a\naddress=08:fb:ea:2b:7b:1a\nuuid=f483700c-e90e-58a6-90f5-8d8312ec7412\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"WLAN.isconnected()"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 STA \u6a21\u5f0f\u7684\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(e.code,{children:"True"}),"\u5982\u679c\u8fde\u63a5\u5230 WiFi \u63a5\u5165\u70b9\u5e76\u5177\u6709\u6709\u6548\u7684 IP \u5730\u5740\uff0c\u5219\u8fd4\u56de\u3002\u5728 AP \u6a21\u5f0f\u4e0b\uff0c",(0,s.jsx)(e.code,{children:"True"})," \u5f53\u7ad9\u70b9\u8fde\u63a5\u65f6\u8fd4\u56de\u3002",(0,s.jsx)(e.code,{children:"False"})," \u5426\u5219\u8fd4\u56de\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"WLAN.ifconfig([(ip, subnet, gateway, dns)])"}),"\n",(0,s.jsxs)(e.p,{children:["\u83b7\u53d6/\u8bbe\u7f6e IP \u7ea7\u7f51\u7edc\u63a5\u53e3\u53c2\u6570\uff1aIP \u5730\u5740\u3001\u5b50\u7f51\u63a9\u7801\u3001\u7f51\u5173\u548c DNS \u670d\u52a1\u5668\u3002\u5f53\u4e0d\u5e26\u53c2\u6570\u8c03\u7528\u65f6\uff0c\u6b64\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4e0a\u8ff0\u4fe1\u606f\u7684 4 \u5143\u7ec4\u3002\u8981\u8bbe\u7f6e\u4e0a\u8ff0\u503c\uff0c\u8bf7\u4f20\u9012\u5e26\u6709\u6240\u9700\u4fe1\u606f\u7684 4 \u5143\u7ec4\u3002\u4f8b\u5982\uff1a",(0,s.jsx)(e.code,{children:"nic.ifconfig(('192.168.0.4', '255.255.255.0', '192.168.0.1', '8.8.8.8'))"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"WLAN.config(param)"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"WLAN.config(param=value, \u2026)"}),"\n",(0,s.jsxs)(e.p,{children:["\u83b7\u53d6\u6216\u8bbe\u7f6e\u4e00\u822c\u7f51\u7edc\u63a5\u53e3\u53c2\u6570\u3002\u8fd9\u4e9b\u65b9\u6cd5\u5141\u8bb8\u4f7f\u7528\u8d85\u51fa\u6807\u51c6 IP \u914d\u7f6e\u7684\u9644\u52a0\u53c2\u6570\uff08\u5982 \u5904\u7406 ",(0,s.jsx)(e.a,{href:"http://micropython.86x.net/en/latet/library/network.WLAN.html#network.WLAN.ifconfig",children:(0,s.jsx)(e.code,{children:"WLAN.ifconfig()"})}),"\uff09\u3002\u8fd9\u4e9b\u5305\u62ec\u7279\u5b9a\u4e8e\u7f51\u7edc\u548c\u7279\u5b9a\u4e8e\u786c\u4ef6\u7684\u53c2\u6570\u3002\u8bbe\u7f6e\u53c2\u6570\u65f6\uff0c\u5e94\u4f7f\u7528\u5173\u952e\u5b57\u53c2\u6570\u8bed\u6cd5\uff0c\u53ef\u4ee5\u4e00\u6b21\u8bbe\u7f6e\u591a\u4e2a\u53c2\u6570\u3002\u67e5\u8be2\u65f6\uff0c\u53c2\u6570\u540d\u5e94\u4ee5\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u5f15\u7528\uff0c\u4e00\u6b21\u53ea\u80fd\u67e5\u8be2\u4e00\u4e2a\u53c2\u6570\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"# Set WiFi access point name (formally known as SSID) and WiFi channel\nap.config(ssid='k230_ap_wjx', channel=11, key='12345678')\n# Query params one by one\nprint(ap.config('ssid'))\nprint(ap.config('channel'))\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u652f\u6301\u7684\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53c2\u6570"}),(0,s.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mac"}),(0,s.jsx)(e.td,{children:"MAC\u5730\u5740\uff08\u5b57\u8282\uff09 (bytes)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ssid"}),(0,s.jsx)(e.td,{children:"WiFi \u63a5\u5165\u70b9\u540d\u79f0\uff08\u5b57\u7b26\u4e32\uff09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"channel"}),(0,s.jsx)(e.td,{children:"WiFi\u901a\u9053\uff08\u6574\u6570\uff09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"hidden"}),(0,s.jsx)(e.td,{children:"SSID \u662f\u5426\u9690\u85cf\uff08\u5e03\u5c14\u503c\uff09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"password"}),(0,s.jsx)(e.td,{children:"\u8bbf\u95ee\u5bc6\u7801\uff08\u5b57\u7b26\u4e32\uff09"})]})]})]}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>l});var s=i(96540);const r={},c=s.createContext(r);function d(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);