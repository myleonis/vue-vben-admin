import{a as e,i as s,o as a,j as t,k as i}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./Trigger.6c22f7c7.js";import"./_baseSlice.1123a25b.js";import{A as r}from"./index.0954de07.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./index.5c941694.js";import"./index.d8838e74.js";import"./RightOutlined.76f7bf3c.js";import"./index.7ccb3c45.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import{D as o}from"./index.578f5bb7.js";import{u as l}from"./useDescription.bfb90c00.js";const c={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},m=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,s)=>`${s.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var n=e({components:{Description:o,Alert:r},setup(){const[e]=l({title:"useDescription",data:c,schema:m}),[s]=l({title:"无边框",bordered:!1,data:c,schema:m});return{mockData:c,schema:m,register:e,register1:s}}});const d={class:"p-4"};n.render=function(e,r,o,l,c,m){const n=s("Description");return a(),t("div",d,[i(n,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(n,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(n,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),i(n,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])};export default n;