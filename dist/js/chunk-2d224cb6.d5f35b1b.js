(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224cb6"],{e23f:function(e,t,l){"use strict";l.r(t);var a=l("7a23"),n=Object(a["createTextVNode"])("万元");function d(e,t,l,d,r,o){var c=Object(a["resolveComponent"])("van-field"),m=Object(a["resolveComponent"])("s-picker"),u=Object(a["resolveComponent"])("SDatetimePicker"),s=Object(a["resolveComponent"])("van-cell-group"),i=Object(a["resolveComponent"])("AddOrEditModal");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{mdl:d.state.mdl,save:d.saveCgjszh,name:"cgjszh",chooseParams:d.cparams.chooseParams},{content:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{inset:""},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(c,{modelValue:d.state.mdl.cgmc,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.state.mdl.cgmc=e}),rules:[{required:!0,message:"请输入成果名称"}],label:"成果名称",name:"cgmc",required:"",maxlength:"50"},null,8,["modelValue"]),Object(a["createVNode"])(m,{modelValue:d.state.mdl.cglx,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.state.mdl.cglx=e}),columns:d.dict.ky_kycg_cglx,"columns-field-names":{text:"dictLabel",setValue:"dictLabel"},rules:[{required:!0,message:"请选择"}],label:"成果类型",name:"cglx"},null,8,["modelValue","columns"]),Object(a["createVNode"])(m,{modelValue:d.state.mdl.zhxs,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.state.mdl.zhxs=e}),columns:d.dict.ky_kycg_zhxs,"columns-field-names":{text:"dictLabel",setValue:"dictLabel"},rules:[{required:!0,message:"请选择"}],label:"转化形式",name:"zhxs"},null,8,["modelValue","columns"]),Object(a["createVNode"])(c,{modelValue:d.state.mdl.cjje,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.state.mdl.cjje=e}),type:"number",rules:[{required:!0,message:"请输入成交金额"}],label:"成交金额",name:"cjje",placeholder:"保留小数点后2位",required:"",maxlength:"999999999",onChange:d.cjjeChange},{button:Object(a["withCtx"])((function(){return[n]})),_:1},8,["modelValue","onChange"]),Object(a["createVNode"])(c,{modelValue:d.state.mdl.syr,"onUpdate:modelValue":t[5]||(t[5]=function(e){return d.state.mdl.syr=e}),rules:[{required:!0,message:"请输入受益人"}],label:"受益人",name:"syr",required:"",maxlength:"50"},null,8,["modelValue"]),Object(a["createVNode"])(c,{modelValue:d.state.mdl.xkdw,"onUpdate:modelValue":t[6]||(t[6]=function(e){return d.state.mdl.xkdw=e}),label:"许可/合作单位",name:"xkdw",maxlength:"50"},null,8,["modelValue"]),Object(a["createVNode"])(u,{modelValue:d.state.mdl.htqdrq,"onUpdate:modelValue":t[7]||(t[7]=function(e){return d.state.mdl.htqdrq=e}),rules:[{required:!0,message:"请选择"}],label:"合同/协议签订日期",name:"htqdrq","value-format":"YYYY-MM-DD"},null,8,["modelValue"]),Object(a["createVNode"])(c,{modelValue:d.state.mdl.sr,"onUpdate:modelValue":t[8]||(t[8]=function(e){return d.state.mdl.sr=e}),rules:[{required:!0,message:"受让"}],label:"受让",name:"sr",required:"",maxlength:"50"},null,8,["modelValue"]),Object(a["createVNode"])(m,{modelValue:d.state.mdl.jtxmcgbc,"onUpdate:modelValue":t[9]||(t[9]=function(e){return d.state.mdl.jtxmcgbc=e}),columns:d.dict.ky_kycg_jtxmcgbc,"columns-field-names":{text:"dictLabel",setValue:"dictLabel"},rules:[{required:!0,message:"请选择"}],label:"结题项目成果补充",name:"jtxmcgbc"},null,8,["modelValue","columns"]),Object(a["createVNode"])(c,{modelValue:d.state.mdl.qwlj,"onUpdate:modelValue":t[10]||(t[10]=function(e){return d.state.mdl.qwlj=e}),label:"全文链接",name:"qwlj",maxlength:"50"},null,8,["modelValue"]),Object(a["createVNode"])(c,{modelValue:d.state.mdl.doi,"onUpdate:modelValue":t[11]||(t[11]=function(e){return d.state.mdl.doi=e}),label:"DOI",name:"doi",maxlength:"50"},null,8,["modelValue"]),Object(a["createVNode"])(c,{modelValue:d.state.mdl.remark,"onUpdate:modelValue":t[12]||(t[12]=function(e){return d.state.mdl.remark=e}),label:"备注",name:"remark",maxlength:"201",type:"textarea",rows:"3"},null,8,["modelValue"]),Object(a["createVNode"])(c,{modelValue:d.state.mdl.yyqk,"onUpdate:modelValue":t[13]||(t[13]=function(e){return d.state.mdl.yyqk=e}),rules:[{required:!0,message:"应用情况"}],label:"应用情况",name:"yyqk",required:"",maxlength:"2001",type:"textarea",rows:"8"},null,8,["modelValue"]),Object(a["createVNode"])(c,{modelValue:d.state.mdl.xyqk,"onUpdate:modelValue":t[14]||(t[14]=function(e){return d.state.mdl.xyqk=e}),rules:[{required:!0,message:"效益情况"}],label:"效益情况",name:"xyqk",required:"",maxlength:"2001",type:"textarea",rows:"8"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["mdl","save","chooseParams"])}var r=l("c964"),o=(l("96cf"),l("056e")),c=l("b775");l("989b");function m(e){return Object(c["b"])({url:"/ky/cgjszh/"+e,method:"get",loadingLoader:"getCgjszh"})}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(c["b"])({url:"/ky/cgjszh/",method:e.id?"put":"post",data:e,loadingLoader:"saveCgjszh".concat(t)})}var s=l("6c02"),i=l("3631"),b=l("b48e"),j=l("9670b"),g={name:"Cgjszh",components:{AddOrEditModal:o["a"],SPicker:i["a"],SDatetimePicker:j["a"]},props:{},setup:function(){Object(a["onMounted"])(Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));var e=Object(a["reactive"])({chooseParams:{}}),t=Object(s["c"])(),l=t.params,n=Object(b["c"])(["ky_kycg_cglx","ky_kycg_zhxs","ky_kycg_jtxmcgbc"]),d=Object(a["reactive"])({mdl:{}});l.id&&m(l.id).then((function(t){d.mdl=t.data,e.chooseParams={deptNo:d.mdl.ssjgdm},d.mdl.jtxmcgbc=0==d.mdl.jtxmcgbc?"是":"否",o()}));var o=function(){d.mdl.cjje=Math.floor(100*d.mdl.cjje)/100};return{cparams:e,state:d,dict:n,saveCgjszh:u,cjjeChange:o}}};g.render=d;t["default"]=g}}]);