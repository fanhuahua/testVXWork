(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dd29b17"],{"1dd3":function(e,t,n){"use strict";n("d32f")},"287e":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return c}));var a=n("b775"),o={createApply:"/xg/jqlxsq/createApply/",jqlxsq:"/xg/jqlxsq/",checkDate:"/xg/jqlxsq/checkDate",searchJqlxsqList:"/xg/jqlxsq/list",downApply:"/xg/jqlxsq/downApply/",exportList:"/xg/jqlxsq/export",exportGetZds:"/xg/jqlxsq/export/getZds",importList:"/xg/jqlxsq/import",importGetZds:"/xg/jqlxsq/import/getZds",importTemplate:"/xg/jqlxsq/importTemplate",updateBatchZt:"/xg/jqlxsq/updateBatchZt",updateAudit:"/xg/jqlxsq/updateAudit",getPersonalInfo:"/xg/jqlxsq/autoFillFormPage"};function r(e,t){return Object(a["a"])({url:o.jqlxsq,method:e.id?"put":"post",data:e,loadingTips:t,loadingLoader:"saveLXSQ"})}function u(e,t){return Object(a["a"])({url:o.jqlxsq+e,method:"get",loadingTips:t})}function d(e){return Object(a["a"])({url:o.searchJqlxsqList,method:"get",params:e})}function c(){return Object(a["a"])({url:o.getPersonalInfo,method:"get"})}},"4a89":function(e,t,n){"use strict";var a=n("7a23");function o(e,t,n,o,r,u){var d=Object(a["resolveComponent"])("van-cell"),c=Object(a["resolveComponent"])("van-cell-group");return Object(a["openBlock"])(),Object(a["createBlock"])(c,{inset:""},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(d,{title:"姓名"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.studentInfo.xm),1)]})),_:1}),Object(a["createVNode"])(d,{title:"性别"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.studentInfo.xb),1)]})),_:1}),Object(a["createVNode"])(d,{title:"学号"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.studentInfo.xh),1)]})),_:1}),Object(a["createVNode"])(d,{title:"院系"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.studentInfo.ssxy),1)]})),_:1}),Object(a["createVNode"])(d,{title:"专业"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.studentInfo.zymc),1)]})),_:1}),Object(a["createVNode"])(d,{title:"班级"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.studentInfo.bjmc),1)]})),_:1}),Object(a["renderSlot"])(e.$slots,"default")]})),_:3})}var r=n("d0ff"),u=(n("99af"),n("bd56")),d=n("ca00"),c=n("6c02"),i=n("bade"),l={name:"StudentInfoCell",emits:["update:studentInfo","updateInfo"],props:{requestFunc:{type:Function,isRequired:!0,default:u["b"]},studentInfo:{type:Object,isRequired:!0,default:function(){return{}}},addPickKey:{type:Array,default:function(){return[]}},errorBack:{type:Boolean,default:!1}},setup:function(e,t){var n=Object(c["d"])(),a=["xm","xh","xb","ssxy","zymc","bjmc"],o=function(){return e.requestFunc().then((function(n){if(0===n.code){var o=Object(d["k"])(n.data,[].concat(a,Object(r["a"])(e.addPickKey)));return t.emit("update:studentInfo",Object.assign(e.studentInfo,o)),t.emit("updateInfo",n.data),o}})).catch((function(t){e.errorBack&&n.back()}))};return Object(i["c"])(["xg_xs"])&&o(),{getStudentInfo:o}}};l.render=o;t["a"]=l},"7d85":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t,n,o,r,u){var d=Object(a["resolveComponent"])("student-info-cell"),c=Object(a["resolveComponent"])("van-field"),i=Object(a["resolveComponent"])("s-calendar"),l=Object(a["resolveComponent"])("s-uploader"),s=Object(a["resolveComponent"])("van-form"),f=Object(a["resolveComponent"])("van-cell-group"),p=Object(a["resolveComponent"])("ApprovalCommon");return Object(a["openBlock"])(),Object(a["createBlock"])(p,Object(a["mergeProps"])(o.state,{"type-name":"学生假期留校申请","before-submit-validate":o.onValidate,onSubmit:o.onSubmit,applyInfo:o.state}),{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(d,{ref:"studentInfo",studentInfo:o.state,"onUpdate:studentInfo":t[1]||(t[1]=function(e){return o.state=e}),onUpdateInfo:o.onUpdate,"request-func":o.requestFunc},null,8,["studentInfo","onUpdateInfo","request-func"]),Object(a["createVNode"])(f,{inset:""},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{ref:"formRef","scroll-to-error":"",disabled:o.disabled},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(c,{name:"ss",label:"宿舍",modelValue:o.state.ss,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.state.ss=e}),placeholder:"请输入",required:"",rules:[{required:!0,message:"请输入"}]},null,8,["modelValue"]),Object(a["createVNode"])(c,{name:"lxfs",label:"联系方式",modelValue:o.state.lxfs,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.state.lxfs=e}),placeholder:"请输入",required:"",rules:[{required:!0,message:"请输入"},{validator:o.validate.phoneValidator,trigger:"onChange"}]},null,8,["modelValue","rules"]),Object(a["createVNode"])(c,{name:"jqlxyy",label:"假期留校原因",modelValue:o.state.jqlxyy,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.state.jqlxyy=e}),placeholder:"请输入",required:"",maxlength:200,autosize:"",rows:1,type:"textarea","show-word-limit":"",rules:[{required:!0,message:"请输入"}]},null,8,["modelValue"]),Object(a["createVNode"])(i,{name:"yjlx",label:"假期留校时间",type:"range","start-key":o.state.jqlxkssj,"onUpdate:start-key":t[5]||(t[5]=function(e){return o.state.jqlxkssj=e}),"end-key":o.state.jqlxjssj,"onUpdate:end-key":t[6]||(t[6]=function(e){return o.state.jqlxjssj=e}),"min-date":o.minDate,rules:[{required:!0,message:"请选择"}]},null,8,["start-key","end-key","min-date"]),Object(a["createVNode"])(c,{name:"uploader",label:"文件上传"},{input:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(l,{modelValue:o.state.fj,"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.state.fj=e}),disabled:o.disabled},null,8,["modelValue","disabled"])]})),_:1})]})),_:1},8,["disabled"])]})),_:1})]})),_:1},16,["before-submit-validate","onSubmit","applyInfo"])}n("9a83");var r=n("f564"),u=n("f3f3"),d=n("f602"),c=n("135f"),i=n("287e"),l=n("ca00"),s=n("6c02"),f=n("4a89"),p=n("0b60"),m=n("d193"),b={name:"vaction",components:{SCalendar:m["a"],StudentInfoCell:f["a"],ApprovalCommon:c["a"],SUploader:d["a"]},setup:function(){var e=Object(a["reactive"])({authority:{canEdit:!0},id:0}),t=Object(a["ref"])(!1),n=Object(a["ref"])(null),o=Object(a["ref"])(null),d=Object(s["d"])(),c=Object(s["c"])(),f=c.query;f.id&&Object(i["b"])(f.id,"获取详情").then((function(n){var a;0===n.code&&(Object.assign(e,Object(l["i"])(n.data)),t.value=!(null!==(a=e.authority)&&void 0!==a&&a.canEdit))}));var m=function(t){Object(i["c"])(Object(u["a"])(Object(u["a"])({},t),e),"提交中").then((function(e){0===e.code&&(Object(r["a"])({type:"success",message:"提交成功",duration:1e3}),d.back())}))},b=function(){var e;return null===(e=n.value)||void 0===e?void 0:e.validate()},j=function(e){};return{state:e,formRef:n,disabled:t,studentInfo:o,onSubmit:m,onValidate:b,validate:{phoneValidator:p["g"]},minDate:new Date(2018,0,0),onUpdate:j,requestFunc:i["a"]}}};b.render=o;t["default"]=b},bd56:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return s}));var a=n("b775"),o={createApply:"/xg/qjsq/addApply",qjsq:"/xg/qjsq/",checkDate:"/xg/qjsq/checkDate",searchQjsqList:"/xg/qjsq/list",updateAudit:"/xg/qjsq/updateAudit"};function r(){return Object(a["a"])({url:"/xg/xgxsxx/getXsxx",method:"get",loadingLoader:"getXsxx"})}function u(e,t){return Object(a["a"])({url:o.qjsq,method:e.id?"put":"post",data:e,loadingLoader:"saveXSQJSQ",loadingTips:t})}function d(e,t){return Object(a["a"])({url:o.qjsq,method:"delete",data:e,loadingTips:t})}function c(e,t){return Object(a["a"])({url:"/xg/qjsq/removeSubmitData",method:"delete",data:e,loadingTips:t})}function i(e,t){return Object(a["a"])({url:o.qjsq+e,method:"get",loadingTips:t})}function l(e){return Object(a["a"])({url:o.searchQjsqList,method:"get",params:e})}function s(e,t){return Object(a["a"])({url:"/xg/qjsq/xj/"+e,method:"get",loadingTips:t})}},d193:function(e,t,n){"use strict";n("b0c0");var a=n("7a23");function o(e,t,n,o,r,u){var d=Object(a["resolveComponent"])("van-field"),c=Object(a["resolveComponent"])("van-calendar");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(d,{modelValue:o.state.value,readonly:"",clickable:!o.computedDisabled,disabled:o.computedDisabled,name:n.name,label:n.label,placeholder:n.placeholder,rules:n.rules,onClick:o.onClick,required:o.required},null,8,["modelValue","clickable","disabled","name","label","placeholder","rules","onClick","required"]),Object(a["createVNode"])(c,{show:o.state.showCalendar,"onUpdate:show":t[1]||(t[1]=function(e){return o.state.showCalendar=e}),onConfirm:o.onConfirm,type:n.type,color:n.color,"min-date":o.sMinDate,"max-date":o.sMaxDate,position:n.position,maxRange:n.maxRange,formatter:n.formatter},null,8,["show","onConfirm","type","color","min-date","max-date","position","maxRange","formatter"])],64)}n("a9e3"),n("99af"),n("7db0");var r=n("5a0c"),u=n.n(r),d=n("e6b2"),c={name:"SCalendar",emits:["update:modelValue","update:startKey","update:endKey"],props:{modelValue:[String,Date],disabled:{type:Boolean,default:void 0},format:{type:String,default:"YYYY-MM-DD"},name:{type:String,required:!0},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},color:{type:String},minDate:{type:[Date,String]},maxDate:{type:[Date,String]},maxRange:Number,position:{type:String,default:"bottom"},formatter:Function,rules:{type:Array,default:function(){return[]}},type:{type:[String,void 0],validator:function(e){return void 0===e||-1!==["range"].indexOf(e)}},startKey:String,endKey:String},setup:function(e,t){var n=Object(a["reactive"])({showCalendar:!1,value:""}),o=function(e,t){return"".concat(e," ~ ").concat(t)},r=Object(d["a"])(Object(a["toRef"])(e,"disabled")),c=Object(a["computed"])((function(){return!!e.rules.find((function(e){return e.required}))}));Object(a["watchEffect"])((function(){"range"===e.type?n.value=e.startKey&&e.endKey?o(e.startKey,e.endKey):"":n.value=e.modelValue}));var i=function(a){var r=u()(a).format(e.format);if("range"===e.type){var d=u()(a[0]).format(e.format),c=u()(a[1]).format(e.format);r=o(d,c),t.emit("update:startKey",d),t.emit("update:endKey",c)}n.showCalendar=!1,n.value=r,t.emit("update:modelValue",r),t.emit("onConfirm",a)},l=function(){!r.value&&(n.showCalendar=!0),t.emit("click",{disabled:r.value})};return{state:n,required:c,computedDisabled:r,onConfirm:i,onClick:l,sMinDate:e.minDate?u()(e.minDate).toDate():void 0,sMaxDate:e.maxDate?u()(e.maxDate).toDate():void 0}}};c.render=o;t["a"]=c},d32f:function(e,t,n){},f602:function(e,t,n){"use strict";n("b0c0");var a=n("7a23"),o=Object(a["withScopeId"])("data-v-d08a5ff4"),r=o((function(e,t,n,r,u,d){var c=Object(a["resolveComponent"])("van-icon"),i=Object(a["resolveComponent"])("Uploader");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{modelValue:r.fileList,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.fileList=e}),"before-read":r.beforeRead,"after-read":r.afterRead,"max-size":r.isOverSize,"max-count":n.maxCount,accept:n.accept,"show-upload":!n.disabled,deletable:!n.disabled,name:n.name,onDelete:r.onDelete},{"preview-cover":o((function(e){return[Object(a["createVNode"])("div",{class:"mask-content",onClick:Object(a["withModifiers"])((function(t){return r.fileDownLoad(e)}),["stop"])},[Object(a["createVNode"])(c,{name:"down",class:"icon"})],8,["onClick"])]})),_:1},8,["modelValue","before-read","after-read","max-size","max-count","accept","show-upload","deletable","name","onDelete"])})),u=(n("9a83"),n("f564")),d=n("fc11"),c=(n("480b"),n("a37c")),i=(n("e930"),n("8f80")),l=(n("a9e3"),n("d81d"),n("ac1f"),n("1276"),n("4de4"),n("a15b"),n("2934")),s={name:"SUploader",components:Object(d["a"])({Uploader:i["a"]},c["a"].name,c["a"]),props:{modelValue:String,name:String,disabled:{type:Boolean,required:!1},type:{type:[String,void 0],validator:function(e){return void 0===e||-1!==["link"].indexOf(e)}},accept:{type:String,default:".rar,.zip,.doc,.docx,.pdf,.jpg,.png"},maxSize:{type:Number,default:50},maxCount:{type:Number,default:6}},setup:function(e,t){var n=Object(a["ref"])([]),o="link"===e.type,r=function(e){var t=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;return t.test(e)};Object(a["watch"])((function(){return e.modelValue}),(function(t,a){var u;o?n.value=null===(u=e.modelValue)||void 0===u?void 0:u.split(",").map((function(e){return{id:e,status:"done",url:e}})):!a&&t&&"-2"!==t?Object(l["h"])({ids:t}).then((function(e){0===e.code&&(n.value=e.data.map((function(e){return{id:e.id,name:e.fname,status:"done",url:r(e.furl)?e.furl:e.fname}})))})):t||(n.value=[])}),{immediate:!0}),Object(a["watch"])((function(){return n.value}),(function(e,n){var a=e.filter((function(e){return"uploading"!==e.status})).map((function(e){return e.id}));0===e.length?t.emit("update:modelValue",""):0===a.length?t.emit("update:modelValue","-2"):t.emit("update:modelValue",a.join(","))}),{deep:!0});var d=function(t){var n=t.size/1024/1024<e.maxSize;return n||Object(u["a"])({type:"warning",message:"上传的文件不能超过".concat(e.maxSize,"MB"),duration:1e3}),!n},c=function(e,t){return!0},i=function(e,t){e.status="uploading",e.message="上传中...";var n=new FormData;n.append("ft",""),n.append("file",e.file),(o?l["f"]:l["e"])(n).then((function(t){0===t.code&&(e.status="done",e.message="上传成功",e.id=o?t.msg:t.data)})).catch((function(){e.status="failed",e.message="上传失败"}))},s=function(e,t){},f=function(){};return{fileList:n,onDelete:s,isOverSize:d,beforeRead:c,afterRead:i,fileDownLoad:f}}};n("1dd3");s.render=r,s.__scopeId="data-v-d08a5ff4";t["a"]=s}}]);