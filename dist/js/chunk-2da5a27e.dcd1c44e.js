(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2da5a27e"],{"1c92":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"login-content"},n={style:{"text-align":"center","margin-bottom":"10px"}},r=Object(a["createVNode"])("div",{style:{"text-align":"center","margin-bottom":"20px"}},"提交后如果存在账号的情况，会自动加入新组织，允许多组织并存。如果没有账号，系统会自动创建账号，账号密码都是本手机号。",-1),l=Object(a["createTextVNode"])("发送验证码 "),i={style:{margin:"16px"}},u=Object(a["createTextVNode"])(" 提交 ");function s(e,t,c,s,d,b){var m=Object(a["resolveComponent"])("van-field"),f=Object(a["resolveComponent"])("van-button"),h=Object(a["resolveComponent"])("van-number-keyboard"),v=Object(a["resolveComponent"])("van-cell-group"),p=Object(a["resolveComponent"])("van-form");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("h2",n,Object(a["toDisplayString"])(s.orgName)+"组织邀请您加入",1),r,Object(a["createVNode"])(p,{onSubmit:s.onSubmit},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(v,{inset:""},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(m,{modelValue:s.state.realname,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.state.realname=e}),name:"姓名",label:"姓名",placeholder:"姓名",rules:[{required:!0,message:"姓名"}]},null,8,["modelValue"]),Object(a["createVNode"])(m,{modelValue:s.state.mobile,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.state.mobile=e}),name:"手机号",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"}]},null,8,["modelValue"]),Object(a["createVNode"])(m,{modelValue:s.state.code,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.state.code=e}),readonly:"",clickable:"",onTouchstart:Object(a["withModifiers"])(s.showKeyBoard,["stop"]),name:"短信验证码",label:"短信验证码",placeholder:"短信验证码",rules:[{required:!0,message:"请填写短信验证码"}]},{button:Object(a["withCtx"])((function(){return[60===s.count?(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:0,loading:e.$wait.is("getMobileCode"),plain:"",hairline:"",onTouchstart:Object(a["withModifiers"])(s.sendMsg,["stop"]),size:"small",type:"primary"},{default:Object(a["withCtx"])((function(){return[l]})),_:1},8,["loading","onTouchstart"])):(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:1,disabled:"",plain:"",hairline:"",onTouchstart:Object(a["withModifiers"])(s.sendMsg,["stop"]),size:"small"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(s.count)+"秒后可重新发送 ",1)]})),_:1},8,["onTouchstart"]))]})),_:1},8,["modelValue","onTouchstart"]),Object(a["createVNode"])(h,{modelValue:s.state.code,"onUpdate:modelValue":t[4]||(t[4]=function(e){return s.state.code=e}),show:s.show,maxlength:6,onBlur:t[5]||(t[5]=function(e){return s.show=!1})},null,8,["modelValue","show"])]})),_:1}),Object(a["createVNode"])("div",i,[Object(a["createVNode"])(f,{round:"",block:"",type:"primary","native-type":"submit",loading:e.$wait.is("addUser")},{default:Object(a["withCtx"])((function(){return[u]})),_:1},8,["loading"])])]})),_:1},8,["onSubmit"])])}c("e7e5");var d,b=c("d399"),m=c("fc11"),f=(c("414a"),c("7a82")),h=(c("8fec"),c("7bd9")),v=(c("b0c0"),c("7ded")),p=c("fd21"),O=c("6c02"),j={name:"inviteRole",components:(d={},Object(m["a"])(d,h["a"].name,h["a"]),Object(m["a"])(d,f["a"].name,f["a"]),d),setup:function(e){var t=Object(O["d"])(),c=Object(O["c"])(),o=c.query,n=Object(a["reactive"])({mobile:void 0,code:void 0,realname:void 0}),r=(Object(a["ref"])(),Object(a["ref"])(!1)),l=Object(a["ref"])(60),i=Object(a["ref"])(),u=function(){r.value=!0},s=o.orgId,d=o.deptId,m=o.roleId,f=o.orgName,h=function(){Object(v["j"])({phone:n.mobile,messageCaptcha:n.code}).then((function(e){0===e.code&&Object(p["a"])({orgId:s,deptId:d,roleId:m,realname:n.realname,mobile:n.mobile}).then((function(e){0===e.code&&(b["a"].success("加入组织成功，为您切换至登录页"),t.push({path:"/wbLogin"}))}))}))},j=function(){n.mobile&&""!==n.mobile?Object(v["m"])(n.mobile).then((function(){l.value--,i.value=setInterval((function(){l.value>0?l.value--:i.value&&(clearInterval(i.value),l.value=60)}),1e3)})):b["a"].fail("请先输入手机号")};return{state:n,count:l,onSubmit:h,show:r,showKeyBoard:u,sendMsg:j,orgName:f}}};c("7f8b");j.render=s;t["default"]=j},"3c71":function(e,t,c){},"40db":function(e,t,c){},"414a":function(e,t,c){"use strict";c("68ef"),c("40db")},"7a82":function(e,t,c){"use strict";var a=c("c199"),o=c("7a23"),n=c("d282"),r=c("db17"),l=c("68ed");function i(e,t){var{days:c}=t,{hours:a,minutes:o,seconds:n,milliseconds:r}=t;if(e.includes("DD")?e=e.replace("DD",Object(l["c"])(c)):a+=24*c,e.includes("HH")?e=e.replace("HH",Object(l["c"])(a)):o+=60*a,e.includes("mm")?e=e.replace("mm",Object(l["c"])(o)):n+=60*o,e.includes("ss")?e=e.replace("ss",Object(l["c"])(n)):r+=1e3*n,e.includes("S")){var i=Object(l["c"])(r,3);e=e.includes("SSS")?e.replace("SSS",i):e.includes("SS")?e.replace("SS",i.slice(0,2)):e.replace("S",i.charAt(0))}return e}var u=c("82eb"),s=c("4eda"),[d,b]=Object(n["a"])("count-down"),m={autoStart:r["f"],millisecond:Boolean,time:{type:[Number,String],default:0},format:{type:String,default:"HH:mm:ss"}},f=Object(o["defineComponent"])({name:d,props:m,emits:["change","finish"],setup(e,{emit:t,slots:c}){var{start:a,pause:n,reset:r,current:l}=Object(u["a"])({time:+e.time,millisecond:e.millisecond,onChange:e=>t("change",e),onFinish:()=>t("finish")}),d=Object(o["computed"])(()=>i(e.format,l.value)),m=()=>{r(+e.time),e.autoStart&&a()};return Object(o["watch"])(()=>e.time,m,{immediate:!0}),Object(s["a"])({start:a,pause:n,reset:m}),()=>Object(o["createVNode"])("div",{class:b()},[c.default?c.default(l.value):d.value])}}),h=Object(a["a"])(f);t["a"]=h},"7bd9":function(e,t,c){"use strict";var a=c("c199"),o=c("7a23"),n=c("d282"),r=c("db17"),l=c("ea8e"),i=c("1325"),u=c("9cf2"),s=c("cdd8"),d=c("543e"),[b,m]=Object(n["a"])("key"),f=Object(o["createVNode"])("svg",{class:m("collapse-icon"),viewBox:"0 0 30 24"},[Object(o["createVNode"])("path",{d:"M25.877 12.843h-1.502c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.5c.187 0 .187 0 .187-.188v-1.511c0-.19 0-.191-.185-.191zM17.999 10.2c0 .188 0 .188.188.188h1.687c.188 0 .188 0 .188-.188V8.688c0-.187.004-.187-.186-.19h-1.69c-.187 0-.187 0-.187.19V10.2zm2.25-3.967h1.5c.188 0 .188 0 .188-.188v-1.7c0-.19 0-.19-.188-.19h-1.5c-.189 0-.189 0-.189.19v1.7c0 .188 0 .188.19.188zm2.063 4.157h3.563c.187 0 .187 0 .187-.189V4.346c0-.19.004-.19-.185-.19h-1.69c-.187 0-.187 0-.187.188v4.155h-1.688c-.187 0-.187 0-.187.189v1.514c0 .19 0 .19.187.19zM14.812 24l2.812-3.4H12l2.813 3.4zm-9-11.157H4.31c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.502c.187 0 .187 0 .187-.188v-1.511c0-.19.01-.191-.189-.191zm15.937 0H8.25c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h13.5c.188 0 .188 0 .188-.188v-1.511c0-.19 0-.191-.188-.191zm-11.438-2.454h1.5c.188 0 .188 0 .188-.188V8.688c0-.187 0-.187-.188-.189h-1.5c-.187 0-.187 0-.187.189V10.2c0 .188 0 .188.187.188zM27.94 0c.563 0 .917.21 1.313.567.518.466.748.757.748 1.51v14.92c0 .567-.188 1.134-.562 1.512-.376.378-.938.566-1.313.566H2.063c-.563 0-.938-.188-1.313-.566-.562-.378-.75-.945-.75-1.511V2.078C0 1.51.188.944.562.567.938.189 1.5 0 1.875 0zm-.062 2H2v14.92h25.877V2zM5.81 4.157c.19 0 .19 0 .19.189v1.762c-.003.126-.024.126-.188.126H4.249c-.126-.003-.126-.023-.126-.188v-1.7c-.187-.19 0-.19.188-.19zm10.5 2.077h1.503c.187 0 .187 0 .187-.188v-1.7c0-.19 0-.19-.187-.19h-1.502c-.188 0-.188.001-.188.19v1.7c0 .188 0 .188.188.188zM7.875 8.5c.187 0 .187.002.187.189V10.2c0 .188 0 .188-.187.188H4.249c-.126-.002-.126-.023-.126-.188V8.625c.003-.126.024-.126.188-.126zm7.875 0c.19.002.19.002.19.189v1.575c-.003.126-.024.126-.19.126h-1.563c-.126-.002-.126-.023-.126-.188V8.625c.002-.126.023-.126.189-.126zm-6-4.342c.187 0 .187 0 .187.189v1.7c0 .188 0 .188-.187.188H8.187c-.126-.003-.126-.023-.126-.188V4.283c.003-.126.024-.126.188-.126zm3.94 0c.185 0 .372 0 .372.189v1.762c-.002.126-.023.126-.187.126h-1.75C12 6.231 12 6.211 12 6.046v-1.7c0-.19.187-.19.187-.19z",fill:"currentColor"},null)]),h=Object(o["createVNode"])("svg",{class:m("delete-icon"),viewBox:"0 0 32 22"},[Object(o["createVNode"])("path",{d:"M28.016 0A3.991 3.991 0 0132 3.987v14.026c0 2.2-1.787 3.987-3.98 3.987H10.382c-.509 0-.996-.206-1.374-.585L.89 13.09C.33 12.62 0 11.84 0 11.006c0-.86.325-1.62.887-2.08L9.01.585A1.936 1.936 0 0110.383 0zm0 1.947H10.368L2.24 10.28c-.224.226-.312.432-.312.73 0 .287.094.51.312.729l8.128 8.333h17.648a2.041 2.041 0 002.037-2.04V3.987c0-1.127-.915-2.04-2.037-2.04zM23.028 6a.96.96 0 01.678.292.95.95 0 01-.003 1.377l-3.342 3.348 3.326 3.333c.189.188.292.43.292.679 0 .248-.103.49-.292.679a.96.96 0 01-.678.292.959.959 0 01-.677-.292L18.99 12.36l-3.343 3.345a.96.96 0 01-.677.292.96.96 0 01-.678-.292.962.962 0 01-.292-.68c0-.248.104-.49.292-.679l3.342-3.348-3.342-3.348A.963.963 0 0114 6.971c0-.248.104-.49.292-.679A.96.96 0 0114.97 6a.96.96 0 01.677.292l3.358 3.348 3.345-3.348A.96.96 0 0123.028 6z",fill:"currentColor"},null)]),v=Object(o["defineComponent"])({name:b,props:{type:String,text:[Number,String],color:String,wider:Boolean,large:Boolean,loading:Boolean},emits:["press"],setup(e,{emit:t,slots:c}){var a=Object(o["ref"])(!1),n=Object(s["a"])(),r=e=>{n.start(e),a.value=!0},l=e=>{n.move(e),n.direction.value&&(a.value=!1)},i=o=>{a.value&&(c.default||o.preventDefault(),a.value=!1,t("press",e.text,e.type))},u=()=>{if(e.loading)return Object(o["createVNode"])(d["a"],{class:m("loading-icon")},null);var t=c.default?c.default():e.text;switch(e.type){case"delete":return t||h;case"extra":return t||f;default:return t}};return()=>Object(o["createVNode"])("div",{class:m("wrapper",{wider:e.wider}),onTouchstart:r,onTouchmove:l,onTouchend:i,onTouchcancel:i},[Object(o["createVNode"])("div",{role:"button",tabindex:0,class:m([e.color,{large:e.large,active:a.value,delete:"delete"===e.type}])},[u()])])}}),[p,O]=Object(n["a"])("number-keyboard"),j=Object(o["defineComponent"])({name:p,props:{show:Boolean,title:String,zIndex:[Number,String],teleport:[String,Object],transition:r["f"],blurOnClose:r["f"],showDeleteKey:r["f"],randomKeyOrder:Boolean,closeButtonText:String,deleteButtonText:String,closeButtonLoading:Boolean,hideOnClickOutside:r["f"],safeAreaInsetBottom:r["f"],theme:{type:String,default:"default"},modelValue:{type:String,default:""},extraKey:{type:[String,Array],default:""},maxlength:{type:[Number,String],default:Number.MAX_VALUE}},emits:["show","hide","blur","input","close","delete","update:modelValue"],setup(e,{emit:t,slots:c}){var a=Object(o["ref"])(),n=()=>{var t=Array(9).fill("").map((e,t)=>({text:t+1}));return e.randomKeyOrder&&t.sort(()=>Math.random()>.5?1:-1),t},r=()=>[...n(),{text:e.extraKey,type:"extra"},{text:0},{text:e.showDeleteKey?e.deleteButtonText:"",type:e.showDeleteKey?"delete":""}],s=()=>{var t=n(),{extraKey:c}=e,a=Array.isArray(c)?c:[c];return 1===a.length?t.push({text:0,wider:!0},{text:a[0],type:"extra"}):2===a.length&&t.push({text:a[0],type:"extra"},{text:0},{text:a[1],type:"extra"}),t},d=Object(o["computed"])(()=>"custom"===e.theme?s():r()),b=()=>{e.show&&t("blur")},m=()=>{t("close"),e.blurOnClose&&b()},f=()=>t(e.show?"show":"hide"),h=(c,a)=>{if(""!==c){var o=e.modelValue;"delete"===a?(t("delete"),t("update:modelValue",o.slice(0,o.length-1))):"close"===a?m():o.length<e.maxlength&&(t("input",c),t("update:modelValue",o+c))}else"extra"===a&&b()},p=()=>{var{title:t,theme:a,closeButtonText:n}=e,r=c["title-left"],l=n&&"default"===a,i=t||l||r;if(i)return Object(o["createVNode"])("div",{class:O("header")},[r&&Object(o["createVNode"])("span",{class:O("title-left")},[r()]),t&&Object(o["createVNode"])("h2",{class:O("title")},[t]),l&&Object(o["createVNode"])("button",{type:"button",class:O("close"),onClick:m},[n])])},j=()=>d.value.map(e=>{var t={};return"delete"===e.type&&(t.default=c.delete),"extra"===e.type&&(t.default=c["extra-key"]),Object(o["createVNode"])(v,{key:e.text,text:e.text,type:e.type,wider:e.wider,color:e.color,onPress:h},t)}),g=()=>{if("custom"===e.theme)return Object(o["createVNode"])("div",{class:O("sidebar")},[e.showDeleteKey&&Object(o["createVNode"])(v,{large:!0,text:e.deleteButtonText,type:"delete",onPress:h},{delete:c.delete}),Object(o["createVNode"])(v,{large:!0,text:e.closeButtonText,type:"close",color:"blue",loading:e.closeButtonLoading,onPress:h},null)])};return Object(o["watch"])(()=>e.show,c=>{e.transition||t(c?"show":"hide")}),e.hideOnClickOutside&&Object(u["a"])(a,b,{eventName:"touchstart"}),()=>{var t=p(),c=Object(o["createVNode"])(o["Transition"],{name:e.transition?"van-slide-up":""},{default:()=>[Object(o["withDirectives"])(Object(o["createVNode"])("div",{ref:a,style:Object(l["c"])(e.zIndex),class:O({unfit:!e.safeAreaInsetBottom,"with-title":!!t}),onTouchstart:i["b"],onAnimationend:f,onWebkitAnimationEnd:f},[t,Object(o["createVNode"])("div",{class:O("body")},[Object(o["createVNode"])("div",{class:O("keys")},[j()]),g()])]),[[o["vShow"],e.show]])]});return e.teleport?Object(o["createVNode"])(o["Teleport"],{to:e.teleport},{default:()=>[c]}):c}}}),g=Object(a["a"])(j);t["a"]=g},"7f8b":function(e,t,c){"use strict";c("f08d")},"82eb":function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var a=c("7a23"),o=c("22d1"),n=1e3,r=60*n,l=60*r,i=24*l;function u(e){var t=Math.floor(e/i),c=Math.floor(e%i/l),a=Math.floor(e%l/r),o=Math.floor(e%r/n),u=Math.floor(e%n);return{total:e,days:t,hours:c,minutes:a,seconds:o,milliseconds:u}}function s(e,t){return Math.floor(e/1e3)===Math.floor(t/1e3)}function d(e){var t,c,n,r,l=Object(a["ref"])(e.time),i=Object(a["computed"])(()=>u(l.value)),d=()=>{n=!1,Object(o["a"])(t)},b=()=>Math.max(c-Date.now(),0),m=t=>{l.value=t,null==e.onChange||e.onChange(i.value),0===t&&(d(),null==e.onFinish||e.onFinish())},f=()=>{t=Object(o["d"])(()=>{n&&(m(b()),l.value>0&&f())})},h=()=>{t=Object(o["d"])(()=>{if(n){var e=b();s(e,l.value)&&0!==e||m(e),l.value>0&&h()}})},v=()=>{o["c"]&&(e.millisecond?f():h())},p=()=>{n||(c=Date.now()+l.value,n=!0,v())},O=(t=e.time)=>{d(),l.value=t};return Object(a["onBeforeUnmount"])(d),Object(a["onActivated"])(()=>{r&&(n=!0,r=!1,v())}),Object(a["onDeactivated"])(()=>{n&&(d(),r=!0)}),{start:p,pause:d,reset:O,current:i}}},"8fec":function(e,t,c){"use strict";c("68ef"),c("e3b3"),c("3c71")},"9cf2":function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var a=c("7a23"),o=c("22d1"),n=c("3548");function r(e,t,c={}){if(o["c"]){var{eventName:r="click"}=c,l=c=>{var o=Object(a["unref"])(e);o&&!o.contains(c.target)&&t(c)};Object(n["b"])(r,l,{target:document})}}},f08d:function(e,t,c){}}]);