import{d as e,g as t,h as n,o as i,i as o,w as l,j as s,m as a}from"./index.c87ef19b.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import{a as r}from"./index.1cf93748.js";import"./RightOutlined.74dbef9c.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import{_ as c}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import{u as p}from"./useContextMenu.bee72642.js";var u=e({components:{CollapseContainer:r,PageWrapper:c},setup(){const[e]=p(),{createMessage:n}=t();return{handleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})},handleMultipleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const m=a("Right Click on me"),d=a("Right Click on me");u.render=function(e,t,a,r,c,p){const u=n("a-button"),b=n("CollapseContainer"),f=n("PageWrapper");return i(),o(f,{title:"右键菜单示例"},{default:l((()=>[s(b,{title:"Simple"},{default:l((()=>[s(u,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[m])),_:1},8,["onContextmenu"])])),_:1}),s(b,{title:"Multiple",class:"mt-4"},{default:l((()=>[s(u,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[d])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default u;