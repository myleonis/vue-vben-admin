import{d as e,bV as t,N as i,u as s,s as n,i as a,o as d,j as o,k as r,m as l,y as p,aJ as c}from"./index.94b82568.js";import"./index.925fe361.js";import{b as m}from"./index.4a86bd59.js";import"./index.a45b2b74.js";import"./index.090e117a.js";import"./index.6f7c662f.js";import"./index.17280903.js";import"./index.0d11251c.js";import"./domUtils.9cb5e741.js";import"./RightOutlined.c9667cba.js";import"./index.8d91dadc.js";import"./useTimeout.b50e2d3d.js";import"./useScrollTo.45eb6f71.js";import"./animation.1d7eea81.js";import"./useAttrs.a8ca5768.js";import"./useHeaderSetting.8e67d3c3.js";import"./SettingOutlined.0a8c2055.js";var u=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=i("setting-switch-item"),{t:a}=s();return{prefixCls:t,t:a,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const h=c("data-v-3a858942")(((e,t,i,s,n,c)=>{const m=a("Switch");return d(),o("div",{class:e.prefixCls},[r("span",null,l(e.title),1),r(m,p(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));u.render=h,u.__scopeId="data-v-3a858942";export default u;