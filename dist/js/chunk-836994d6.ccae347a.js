(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-836994d6"],{3677:function(e,t,a){"use strict";var r=a("7a23"),o=Object(r["withScopeId"])("data-v-6ca09639"),n=o((function(e,t,a,n,i,d){var m=Object(r["resolveComponent"])("van-tag"),c=Object(r["resolveComponent"])("van-button"),u=Object(r["resolveComponent"])("van-cell");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{inset:"",class:"task-item-container"},{title:o((function(){return[Object(r["createVNode"])("div",null,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(a.data.procName)+" ",1),Object(r["createVNode"])(m,{plain:"",type:"primary"},{default:o((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(a.data.nodeName),1)]})),_:1})])]})),label:o((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(a.data.createTime),1)]})),"right-icon":o((function(){return[Object(r["createVNode"])(c,{type:"primary",round:"",size:"small",onClick:d.onHandle},{default:o((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(1===a.data.status?"办理":"查看"),1)]})),_:1},8,["onClick"])]})),_:1})})),i=(a("e7e5"),a("d399")),d=(a("ac1f"),a("5319"),a("fb6a"),a("7db0"),a("906c")),m=function(e){return 1===e.type},c={name:"TaskItem",props:{data:{type:Object,default:function(){}}},methods:{onHandle:function(){var e=this;if(m(this.data))this.$router.push({path:"/designForm",query:{id:this.data.formId.replace("table_",""),rowId:this.data.rowId,appId:this.data.wbAppId}});else{var t=Object(d["a"])(this.data);if("科研成果审批"===this.data.typeName){var a=this.data.businessKey.replace(":","/").slice(2);this.$router.push("/ky/kycg/".concat(a))}else t.find((function(t){return t.typeName===e.data.typeName}))?this.$router.push(t.find((function(t){return t.typeName===e.data.typeName})).to):i["a"].fail("请在PC端查看")}}}};a("b347");c.render=n,c.__scopeId="data-v-6ca09639";t["a"]=c},"7d9d":function(e,t,a){},"906c":function(e,t,a){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{typeName:"学术会议审批",to:"/ky/xshd/".concat(e.formId)},{typeName:"调换宿舍申请",to:{name:"switchDormitoy",query:{id:e.formId}}},{typeName:"奖项填报",to:{name:"awardFilling",query:{id:e.formId}}},{typeName:"阳光奖项申请",to:{name:"awardApplication",query:{id:e.formId,activeKey:0}}},{typeName:"三优学生申请",to:{name:"awardApplication",query:{id:e.formId,activeKey:1}}},{typeName:"学生请假申请",to:{name:"askForLeave",query:{id:e.formId}}},{typeName:"学生免军训申请",to:{name:"training",query:{id:e.formId}}},{typeName:"学生假期留校申请",to:{name:"vaction",query:{id:e.formId}}},{typeName:"学生提前返校申请",to:{name:"earily",query:{id:e.formId}}},{typeName:"教务教室使用申请审批",to:{name:"clsRApyInfo",query:{id:e.formId}}},{typeName:"成绩变更申请",to:{name:"cjbg",query:{id:e.formId}}},{typeName:"成绩替换申请",to:{name:"cjth",query:{id:e.formId}}},{typeName:"调课申请",to:{name:"tksq",query:{id:e.formId}}},{typeName:"免听申请",to:{name:"mtsq",query:{id:e.formId}}},{typeName:"旁听申请",to:{name:"ptsq",query:{id:e.formId}}},{typeName:"辅修申请",to:{name:"fxsq",query:{id:e.formId}}},{typeName:"缓考管理申请",to:{name:"hksq",query:{id:e.formId}}},{typeName:"调换监考申请",to:{name:"dhjksq",query:{id:e.formId}}},{typeName:"离校待考申请",to:{name:"lxdksq",query:{id:e.formId}}},{typeName:"学籍异动",to:{name:"xjydsq",query:{id:e.formId}}},{typeName:"转专业申请",to:{name:"zzysq",query:{id:e.formId}}},{typeName:"科研奖励考核",to:{name:"khjl",query:{id:e.formId}}},{typeName:"教学大纲",to:{name:"jxdg",query:{id:e.formId}}},{typeName:"授课计划",to:{name:"skjh",query:{id:e.formId}}},{typeName:"图书馆考研请假申请",to:{name:"yhqj",query:{id:e.formId}}},{typeName:"图书馆摇号座位申请",to:{name:"yhsq",query:{id:e.formId}}},{typeName:"横向项目变更",to:{name:"hxxmbg",query:{id:e.formId}}},{typeName:"横向项目结题",to:{name:"hxxmjt",query:{id:e.formId}}},{typeName:"横向项目申报",to:{name:"hxxmsb",query:{id:e.formId}}},{typeName:"纵向项目申报",to:{name:"zxxmsb",query:{id:e.formId}}},{typeName:"纵向项目中检",to:{name:"zxxmzj",query:{id:e.formId}}},{typeName:"纵向项目结题",to:{name:"zxxmjt",query:{id:e.formId}}},{typeName:"纵向项目延期",to:{name:"zxxmyq",query:{id:e.formId}}},{typeName:"科研成果审批"}]}a.d(t,"a",(function(){return r}))},b347:function(e,t,a){"use strict";a("7d9d")},c398:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),o={style:{height:"calc(100vh - var(--van-tabbar-height))",overflow:"auto"}};function n(e,t,a,n,i,d){var m=Object(r["resolveComponent"])("task-list");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])(m,{"list-type":e.$route.params.listType},null,8,["list-type"])])}function i(e,t,a,o,n,i){var d=Object(r["resolveComponent"])("task-item"),m=Object(r["resolveComponent"])("refresh-and-load");return Object(r["openBlock"])(),Object(r["createBlock"])(m,{api:o.listApi,ref:"list"},{default:Object(r["withCtx"])((function(e){var t=e.listData;return[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(t,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:t,data:e},null,8,["data"])})),128))]})),_:1},8,["api"])}var d=a("f3f3"),m=(a("a9e3"),a("2edf")),c=a("2934"),u=a("3677"),p={name:"TaskList",components:{TaskItem:u["a"],RefreshAndLoad:m["a"]},props:{listType:{type:Number,default:1}},setup:function(e){var t=Object(r["ref"])(null),a=function(t){return Object(c["k"])(Object(d["a"])(Object(d["a"])({},t),{},{listType:e.listType}))};return Object(r["watch"])((function(){return e.listType}),(function(){var e;null===(e=t.value)||void 0===e||e.refresh()})),{listApi:a,list:t}}};p.render=i;var y=p,s={name:"index",components:{TaskList:y},setup:function(){}};s.render=n;t["default"]=s}}]);