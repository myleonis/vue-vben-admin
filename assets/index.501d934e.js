var e=Object.assign;import{d as t,r as n,a,x as i,bD as o,bE as r,h as s,o as p,i as d,aL as c,j as m,az as u,aA as l,k as f}from"./index.c87ef19b.js";import"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import"./index.1cf93748.js";import"./index.4ac4bb42.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import"./useForm.1ecf8423.js";import{_ as j}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import"./data.2505cb7f.js";import S from"./Step1.9638a4a9.js";import x from"./Step2.1e06c30c.js";import v from"./Step3.f0358da2.js";var b=t({components:{Step1:S,Step2:x,Step3:v,PageWrapper:j},setup(){const t=n(0),o=a({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,o.initSetp2=!0},handleStep2Next:function(e){t.value++,o.initSetp3=!0},handleRedo:function(){t.value=0,o.initSetp2=!1,o.initSetp3=!1},handleStepPrev:function(){t.value--}},i(o))}});const h=c("data-v-418f2850");o("data-v-418f2850");const N={class:"step-form-form"},g={class:"mt-5"};r();const P=h(((e,t,n,a,i,o)=>{const r=s("a-step"),c=s("a-steps"),j=s("Step1"),S=s("Step2"),x=s("Step3"),v=s("PageWrapper");return p(),d(v,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"},{default:h((()=>[m("div",N,[m(c,{current:e.current},{default:h((()=>[m(r,{title:"填写转账信息"}),m(r,{title:"确认转账信息"}),m(r,{title:"完成"})])),_:1},8,["current"])]),m("div",g,[u(m(j,{onNext:e.handleStep1Next},null,8,["onNext"]),[[l,0===e.current]]),e.initSetp2?u((p(),d(S,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[l,1===e.current]]):f("",!0),e.initSetp3?u((p(),d(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[l,2===e.current]]):f("",!0)])])),_:1})}));b.render=P,b.__scopeId="data-v-418f2850";export default b;