import{B as e,t}from"./data.090f4873.js";import{a as i}from"./index.6c4bbdf5.js";import{_ as r}from"./index.751a0b92.js";import{d as s,bP as a,h as o,o as n,i as l,w as d,j as m}from"./index.25b7b5fc.js";import{P as p}from"./PlusOutlined.5871cf2c.js";import{D as c}from"./DeleteOutlined.04eb5723.js";import"./index.d317f8e9.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./RightOutlined.80d69337.js";import"./index.95c10fda.js";import"./useTimeout.4101b58e.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";import"./index.1a47fee9.js";import"./index.10a2e5b4.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./isEqual.ef398636.js";import"./toInteger.34e54435.js";import"./DownOutlined.8796a279.js";import"./index.fc4261e4.js";import"./usePageContext.003372c7.js";import"./transButton.6bbddf74.js";import"./ArrowLeftOutlined.5053e10e.js";import"./vendor.3b1829c7.js";var f=s({components:{BasicTree:e,CollapseContainer:i,PageWrapper:r},setup:()=>({treeData:t,actionList:[{render:e=>a(p,{class:"ml-2",onClick:()=>{}})},{render:()=>a(c)}],getRightMenuList:function(e){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const j={class:"flex"};f.render=function(e,t,i,r,s,a){const p=o("BasicTree"),c=o("CollapseContainer"),f=o("PageWrapper");return n(),l(f,{title:"Tree函数操作示例"},{default:d((()=>[m("div",j,[m(c,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:d((()=>[m(p,{treeData:e.treeData,actionList:e.actionList},null,8,["treeData","actionList"])])),_:1}),m(c,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:d((()=>[m(p,{treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])])),_:1})};export default f;