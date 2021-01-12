import{cA as r,d as e,r as o,u as i,ai as t,S as a,by as s,cX as n,h as l,o as c,i as m,ab as d,ac as f,az as u,aA as p,j,w as b,m as g,l as x}from"./index.c87ef19b.js";import{f as E}from"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import"./index.1cf93748.js";import"./CheckOutlined.f2efb4c6.js";import{b as y}from"./index.4ac4bb42.js";import{_ as R}from"./index.ec8352c8.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./SettingOutlined.1d975297.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import"./useForm.1ecf8423.js";import"./useSortable.12a7edb9.js";import"./useExpose.964f9e60.js";import{u as T}from"./useTable.c40daa9c.js";import"./index.ff1607c3.js";import"./useDescription.54be4faa.js";import{getColumns as A}from"./data.73e6d8a6.js";import h from"./DetailModal.95300caf.js";var w;(w||(w={})).Error="/error";var k=e({name:"ErrorHandler",components:{DetailModal:h,BasicTable:R,TableAction:E},setup(){const e=o(),l=o([]),{t:c}=i(),[m,{setTableData:d}]=T({title:c("sys.errorLog.tableTitle"),columns:A(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[f,{openModal:u}]=y();return t((()=>n.getErrorInfoState),(r=>{a((()=>{d(s(r))}))}),{immediate:!0}),{register:m,registerModal:f,handleDetail:function(r){e.value=r,u(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){l.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await r.request({url:w.Error,method:"GET"})},imgListRef:l,rowInfoRef:e,t:c}}});const C={class:"p-4"};k.render=function(r,e,o,i,t,a){const s=l("DetailModal"),n=l("a-button"),E=l("TableAction"),y=l("BasicTable");return c(),m("div",C,[(c(!0),m(d,null,f(r.imgListRef,(r=>u((c(),m("img",{key:r,src:r},null,8,["src"])),[[p,!1]]))),128)),j(s,{info:r.rowInfoRef,onRegister:r.registerModal},null,8,["info","onRegister"]),j(y,{onRegister:r.register,class:"error-handle-table"},{toolbar:b((()=>[j(n,{onClick:r.fireVueError,type:"primary"},{default:b((()=>[g(x(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),j(n,{onClick:r.fireResourceError,type:"primary"},{default:b((()=>[g(x(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),j(n,{onClick:r.fireAjaxError,type:"primary"},{default:b((()=>[g(x(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:e})=>[j(E,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default k;