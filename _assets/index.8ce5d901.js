let e=document.createElement("style");e.innerHTML=".form-wrap[data-v-46649975]{padding:24px;background:#fff}",document.head.appendChild(e);import{a as o,h as t,V as s,W as i,i as r,o as n,j as p,k as a,X as l,n as d}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./index.b3d27e93.js";import"./Trigger.1f027942.js";import"./omit.c8603bdb.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d1376850.js";import"./CheckOutlined.e291a1f5.js";import{s as m}from"./index.ecb658c5.js";import"./index.d2cb24e8.js";import"./colors.863e863c.js";import"./index.bbd9dec1.js";import"./RightOutlined.a721f23a.js";import"./index.648eb728.js";import"./types.ec785e86.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import"./index.ff61dcf3.js";import"./index.ea1c54a6.js";import"./UpOutlined.25f25eae.js";import"./DownOutlined.6f919f42.js";import"./index.335f5816.js";import"./index.2ea1877e.js";import"./index.f02f1014.js";import"./CloseOutlined.1a46c05c.js";import"./index.f6b60b0d.js";import"./LeftOutlined.f312add8.js";import"./functional.7d386e92.js";import"./RightOutlined.83a2612e.js";import"./useContext.2506cc4d.js";import"./useTimeout.e40508cb.js";import"./useDebounce.9c7c5ce5.js";import"./useEventListener.6468cfe0.js";import"./useBreakpoint.be0fab75.js";import"./resizeEvent.dd57c904.js";import"./tsxHelper.c465228b.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";import"./index.859e5d00.js";import"./index.663602f0.js";import"./useWindowSizeFn.6bad7e86.js";import"./uuid.40269c00.js";import"./download.b61d92d2.js";import{u as c}from"./useForm.162de352.js";const u=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var b=o({components:{BasicForm:m},setup(){const{createMessage:e}=t(),[o,{validate:s,setProps:i}]=c({labelCol:{span:7},wrapperCol:{span:10},schemas:u,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await s(),i({submitButtonOptions:{loading:!0}}),setTimeout((()=>{i({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(e){}}});return{register:o}}});const j=l("data-v-46649975");s("data-v-46649975");const f=d(" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。 "),x={class:"m-5 form-wrap"};i();const g=j(((e,o,t,s,i,l)=>{const d=r("a-page-header"),m=r("BasicForm");return n(),p("div",null,[a(d,{title:"基础表单",ghost:!1},{default:j((()=>[f])),_:1}),a("div",x,[a(m,{onRegister:e.register},null,8,["onRegister"])])])}));b.render=g,b.__scopeId="data-v-46649975";export default b;