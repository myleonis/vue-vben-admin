import{a as e,bt as s,i as l,o,j as t,k as r,w as c,p as i}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./Trigger.6c22f7c7.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./index.5c941694.js";import{a}from"./index.d8838e74.js";import"./RightOutlined.76f7bf3c.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";var n=e({name:"TabsDemo",components:{CollapseContainer:a},setup(){const{closeAll:e,closeLeft:l,closeRight:o,closeOther:t,closeCurrent:r,refreshPage:c}=s();return{closeAll:e,closeLeft:l,closeRight:o,closeOther:t,closeCurrent:r,refreshPage:c}}});const m={class:"p-4"},f=i("关闭所有"),d=i("关闭左侧"),p=i("关闭右侧"),u=i("关闭其他"),C=i("关闭当前"),j=i("刷新当前");n.render=function(e,s,i,a,n,k){const h=l("a-input"),g=l("CollapseContainer"),_=l("a-button");return o(),t("div",m,[r(g,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:c((()=>[r(h,{placeholder:"请输入"})])),_:1}),r(g,{class:"mt-4",title:"标签页操作"},{default:c((()=>[r(_,{class:"mr-2",onClick:e.closeAll},{default:c((()=>[f])),_:1},8,["onClick"]),r(_,{class:"mr-2",onClick:e.closeLeft},{default:c((()=>[d])),_:1},8,["onClick"]),r(_,{class:"mr-2",onClick:e.closeRight},{default:c((()=>[p])),_:1},8,["onClick"]),r(_,{class:"mr-2",onClick:e.closeOther},{default:c((()=>[u])),_:1},8,["onClick"]),r(_,{class:"mr-2",onClick:e.closeCurrent},{default:c((()=>[C])),_:1},8,["onClick"]),r(_,{class:"mr-2",onClick:e.refreshPage},{default:c((()=>[j])),_:1},8,["onClick"])])),_:1})])};export default n;