import{d as o,u as t,aQ as e,aK as i,$ as s,bf as r,e as a,bg as n,cp as d,cq as p,h as l,o as m,i as c,j as u,l as j,k as f,bw as b}from"./index.25b7b5fc.js";import{L as x}from"./index.83241b69.js";import{D as _,G as g,S as C}from"./siteSetting.c485f07c.js";import{G as F}from"./GithubFilled.3539d8f6.js";import"./vendor.3b1829c7.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.80d69337.js";import"./LeftOutlined.06ccfb10.js";import"./index.10a2e5b4.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./isEqual.ef398636.js";import"./toInteger.34e54435.js";import"./index.95c10fda.js";import"./useTimeout.4101b58e.js";import"./useHeaderSetting.29bc79df.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./useSortable.9390d1f5.js";import"./index.6c4bbdf5.js";import"./index.d317f8e9.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";import"./index.ace1743b.js";import"./useWindowSizeFn.b36958a0.js";import"./usePageContext.003372c7.js";import"./index.6b1f7f37.js";import"./clickOutside.516198a9.js";import"./index.a205e693.js";import"./UpOutlined.2e609594.js";import"./DownOutlined.8796a279.js";import"./PlusOutlined.5871cf2c.js";import"./index.463e2338.js";var h=o({name:"LayoutFooter",components:{Footer:x.Footer,GithubFilled:F},setup(){const{t:o}=t(),{getShowFooter:d}=n(),{currentRoute:p}=e(),{prefixCls:l}=i("layout-footer");return{getShowLayoutFooter:s((()=>{var o;return a(d)&&!(null==(o=a(p).meta)?void 0:o.hiddenFooter)})),prefixCls:l,t:o,DOC_URL:_,GITHUB_URL:g,SITE_URL:C,openWindow:r}}});const w=b("data-v-47369c67");d("data-v-47369c67");const L=u("div",null,"Copyright ©2020 Vben Admin",-1);p();const S=w(((o,t,e,i,s,r)=>{const a=l("GithubFilled"),n=l("Footer");return o.getShowLayoutFooter?(m(),c(n,{key:0,class:o.prefixCls},{default:w((()=>[u("div",{class:`${o.prefixCls}__links`},[u("a",{onClick:t[1]||(t[1]=t=>o.openWindow(o.SITE_URL))},j(o.t("layout.footer.onlinePreview")),1),u(a,{onClick:t[2]||(t[2]=t=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),u("a",{onClick:t[3]||(t[3]=t=>o.openWindow(o.DOC_URL))},j(o.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):f("",!0)}));h.render=S,h.__scopeId="data-v-47369c67";export default h;