import{d as e,b3 as t,g as s,h as a,o as i,i as o,w as r,j as n}from"./index.c87ef19b.js";import{_ as l}from"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import{a as m}from"./index.1cf93748.js";import"./index.4ac4bb42.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import{_ as d}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import{T as u}from"./index.3ed6a216.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:s})=>t(u,{value:e[s],onChange:t=>{e[s]=t}})}];var p=e({components:{BasicForm:l,CollapseContainer:m,PageWrapper:d},setup(){const{createMessage:e}=s();return{schemas:c,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});p.render=function(e,t,s,l,m,d){const u=a("BasicForm"),c=a("CollapseContainer"),p=a("PageWrapper");return i(),o(p,{title:"富文本嵌入表单示例"},{default:r((()=>[n(c,{title:"富文本表单"},{default:r((()=>[n(u,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default p;