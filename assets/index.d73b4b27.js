import{u as e}from"./useContextMenu.9e9f7af8.js";import{a as t}from"./index.17280903.js";import{d as n,h as i,i as o,o as s,j as l,w as a,k as r,n as d}from"./index.94b82568.js";import{_ as p}from"./index.f87270a7.js";import"./index.a45b2b74.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./index.0d11251c.js";import"./domUtils.9cb5e741.js";import"./RightOutlined.c9667cba.js";import"./useTimeout.b50e2d3d.js";import"./useScrollTo.45eb6f71.js";import"./animation.1d7eea81.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.9614bf02.js";var c=n({components:{CollapseContainer:t,PageWrapper:p},setup(){const[t]=e(),{createMessage:n}=i();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const m=d("Right Click on me"),u=d("Right Click on me");c.render=function(e,t,n,i,d,p){const c=o("a-button"),b=o("CollapseContainer"),x=o("PageWrapper");return s(),l(x,{title:"右键菜单示例"},{default:a((()=>[r(b,{title:"Simple"},{default:a((()=>[r(c,{type:"primary",onContextmenu:e.handleContext},{default:a((()=>[m])),_:1},8,["onContextmenu"])])),_:1}),r(b,{title:"Multiple",class:"mt-4"},{default:a((()=>[r(c,{type:"primary",onContextmenu:e.handleMultipleContext},{default:a((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default c;