(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d07f934"],{"39f2":function(t,e,c){"use strict";c.d(e,"c",(function(){return n})),c.d(e,"d",(function(){return a})),c.d(e,"a",(function(){return o})),c.d(e,"b",(function(){return i}));var r=c("b775");function n(){return Object(r["b"])({url:"/ky/kyry/getZhInfo",method:"get",loadingLoader:"getZhInfo"})}function a(t){return Object(r["b"])({url:"/ky/kyry/list",method:"post",data:t,loadingLoader:"listKyry",headers:{applicationId:122}})}function o(t){return Object(r["b"])({url:"/system/dept/deptDictR",method:"post",data:t,headers:{applicationId:122}})}function i(t){return Object(r["b"])({url:"/ky/kyry/getInfo",method:"get",params:t,loadingLoader:"getKyry"})}},"44a1":function(t,e,c){},6777:function(t,e,c){"use strict";c.r(e);var r=c("7a23"),n=Object(r["withScopeId"])("data-v-1489606e");Object(r["pushScopeId"])("data-v-1489606e");var a={class:"name"};Object(r["popScopeId"])();var o=n((function(t,e,c,o,i,d){var u=Object(r["resolveComponent"])("van-cell"),l=Object(r["resolveComponent"])("van-cell-group");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("div",a,Object(r["toDisplayString"])(o.ryInfo.xm),1),Object(r["createVNode"])(l,{inset:""},{default:n((function(){return[Object(r["createVNode"])(u,{title:"性别"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.xb),1)]})),_:1}),Object(r["createVNode"])(u,{title:"联系电话"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.sjh),1)]})),_:1}),Object(r["createVNode"])(u,{title:"邮箱地址"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.email),1)]})),_:1}),Object(r["createVNode"])(u,{title:"专业"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.zymc),1)]})),_:1}),Object(r["createVNode"])(u,{title:"研究专长"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.yjzc),1)]})),_:1}),Object(r["createVNode"])(u,{title:"职称"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.zc),1)]})),_:1}),Object(r["createVNode"])(u,{title:"证件号码"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.zjhm),1)]})),_:1}),Object(r["createVNode"])(u,{title:"出生日期"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.csrq),1)]})),_:1}),Object(r["createVNode"])(u,{title:"入职时间"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.rzsj),1)]})),_:1}),Object(r["createVNode"])(u,{title:"最高学历"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.zgxl),1)]})),_:1}),Object(r["createVNode"])(u,{title:"职工号"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.zgh),1)]})),_:1}),Object(r["createVNode"])(u,{title:"所属学院"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ryInfo.ssxy),1)]})),_:1}),Object(r["createVNode"])(u,{title:"所属机构"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ssjg),1)]})),_:1}),Object(r["createVNode"])(u,{title:"所属学科"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.ssxk),1)]})),_:1}),Object(r["createVNode"])(u,{title:"所属团队"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.sstk),1)]})),_:1}),Object(r["createVNode"])(u,{title:"所属中心"},{default:n((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.sszx),1)]})),_:1})]})),_:1})])})),i=c("6c02"),d=c("39f2"),u={name:"kyry",setup:function(){var t=Object(i["c"])(),e=t.query,c=Object(r["ref"])({}),n=Object(r["ref"])(""),a=Object(r["ref"])(""),o=Object(r["ref"])(""),u=Object(r["ref"])("");return Object(d["b"])({id:e.id}).then((function(t){c.value=t.data;for(var e="",r="",a="",o="",i=0;i<t.data.kypts.length;i++)"科研机构"==t.data.kypts[i].jglx&&(e=e+t.data.kypts[i].jgmc+"、"),"学科建设"==t.data.kypts[i].jglx&&(r=r+t.data.kypts[i].jgmc+"、"),"科研团队"==t.data.kypts[i].jglx&&(a=a+t.data.kypts[i].jgmc+"、"),"研究中心"==t.data.kypts[i].jglx&&(o=o+t.data.kypts[i].jgmc+"、");e&&(n.value=e.substr(0,e.length-1)),r&&(n.value=r.substr(0,r.length-1)),a&&(n.value=a.substr(0,a.length-1)),o&&(n.value=o.substr(0,o.length-1))})),{ryInfo:c,ssjg:n,ssxk:a,sstd:o,sszx:u}}};c("e697");u.render=o,u.__scopeId="data-v-1489606e";e["default"]=u},e697:function(t,e,c){"use strict";c("44a1")}}]);