import{cA as e,b as s,d as a,g as o,h as i,o as r,i as t,w as n,j as p}from"./index.c87ef19b.js";import{g as m,_ as d}from"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import"./index.1cf93748.js";import"./index.4ac4bb42.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import{u as l}from"./useForm.1ecf8423.js";import{_ as c}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";const{uploadUrl:u=""}=s();function j(s,a){return e.uploadFile({url:u,onUploadProgress:a},s)}const f=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:j}}];var g=a({components:{BasicUpload:m,BasicForm:d,PageWrapper:c},setup(){const{createMessage:e}=o(),[s]=l({labelWidth:120,schemas:f,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:j,register:s}}});g.render=function(e,s,a,o,m,d){const l=i("a-alert"),c=i("BasicUpload"),u=i("BasicForm"),j=i("PageWrapper");return r(),t(j,{title:"上传组件示例"},{default:n((()=>[p(l,{message:"基础示例",class:"my-5"}),p(c,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),p(l,{message:"嵌入表单,加入表单校验",class:"my-5"}),p(u,{onRegister:e.register},null,8,["onRegister"])])),_:1})};export default g;