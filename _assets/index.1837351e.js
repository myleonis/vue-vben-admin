import{a as e,i as t,o as s,j as a,k as r,w as i}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./Trigger.1f027942.js";import"./omit.c8603bdb.js";import"./_baseSlice.1123a25b.js";import"./index.648eb728.js";import"./types.ec785e86.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import"./index.ff61dcf3.js";import"./DownOutlined.6f919f42.js";import"./index.f15549ef.js";import"./CaretDownFilled.c5689b7c.js";import"./index.2ab7f8f1.js";import{s as o}from"./index.ad3a3cba.js";import"./useTimeout.e40508cb.js";import"./resizeEvent.dd57c904.js";import"./domUtils.7b78aff8.js";import"./tsxHelper.c465228b.js";import"./useExpose.7e9a2ef1.js";import"./animation.91a87d89.js";import"./useScrollTo.8ee4efce.js";import"./index.c5e34609.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";import"./index.859e5d00.js";import"./useContextMenu.e3bdcbf9.js";import{B as p,t as m}from"./data.4fea1c3c.js";var d=e({components:{BasicTree:p,CollapseContainer:o},setup:()=>({treeData:m})});const l={class:"flex p-4"};d.render=function(e,o,p,m,d,n){const c=t("BasicTree"),j=t("CollapseContainer");return s(),a("div",l,[r(j,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:i((()=>[r(c,{treeData:e.treeData},null,8,["treeData"])])),_:1}),r(j,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:i((()=>[r(c,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),r(j,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:i((()=>[r(c,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])};export default d;