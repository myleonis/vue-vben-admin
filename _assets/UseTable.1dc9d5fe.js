import{a as e,h as t,i,o,j as s,k as n,w as a,n as c}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.7b366c4b.js";import"./index.b3d27e93.js";import"./Trigger.1f027942.js";import"./omit.c8603bdb.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d1376850.js";import"./CheckOutlined.e291a1f5.js";import"./index.ecb658c5.js";import"./index.d2cb24e8.js";import"./colors.863e863c.js";import"./index.bbd9dec1.js";import"./RightOutlined.a721f23a.js";import"./index.648eb728.js";import"./types.ec785e86.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import"./index.ff61dcf3.js";import"./index.ea1c54a6.js";import"./UpOutlined.25f25eae.js";import"./LeftOutlined.670b6be7.js";import"./DownOutlined.6f919f42.js";import"./index.335f5816.js";import"./index.f15549ef.js";import"./index.5c0386e3.js";import"./zh_CN.0242bd16.js";import"./index.2ea1877e.js";import"./index.f02f1014.js";import"./CaretDownFilled.c5689b7c.js";import"./CheckOutlined.9988e31e.js";import"./CloseOutlined.1a46c05c.js";import{s as l}from"./EditTableHeaderIcon.78e8b2e6.js";import"./index.f6b60b0d.js";import"./LeftOutlined.f312add8.js";import"./functional.7d386e92.js";import"./RightOutlined.83a2612e.js";import"./useContext.2506cc4d.js";import"./useTimeout.e40508cb.js";import"./useDebounce.9c7c5ce5.js";import"./useEventListener.6468cfe0.js";import"./useBreakpoint.be0fab75.js";import"./resizeEvent.dd57c904.js";import"./domUtils.7b78aff8.js";import"./tsxHelper.c465228b.js";import"./useExpose.7e9a2ef1.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";import"./index.859e5d00.js";import"./index.663602f0.js";import"./useWindowSizeFn.6bad7e86.js";import"./uuid.40269c00.js";import"./download.b61d92d2.js";import"./useForm.162de352.js";import"./useFullScreen.923f5ed8.js";import"./index.99df5bc0.js";import{u as r}from"./useTable.fc09cb81.js";import{getBasicColumns as m,getBasicShortColumns as d}from"./tableData.fb69a13e.js";import{d as p}from"./table.95b31246.js";var u=e({components:{BasicTable:l},setup(){const{createMessage:e}=t(),[i,{setLoading:o,setColumns:s,getColumns:n,getDataSource:a,reload:c,getPaginationRef:l,setPagination:u,getSelectRows:f,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=r({canResize:!1,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:p,columns:m(),rowKey:"id",rowSelection:{type:"checkbox"}});return{registerTable:i,changeLoading:function(){o(!0),setTimeout((()=>{o(!1)}),1e3)},changeColumns:function(){s(d())},reloadTable:function(){s(m()),c({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),c()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const f={class:"p-4"},j={class:"mb-4"},b=c("还原"),g=c("开启loading"),C=c("更改Columns"),k=c("获取Columns"),x=c("获取表格数据"),w=c("跳转到第2页"),S={class:"mb-4"},T=c("获取选中行"),R=c("获取选中行Key"),_=c("设置选中行"),y=c("清空选中行"),L=c("获取分页信息");u.render=function(e,t,c,l,r,m){const d=i("a-button"),p=i("BasicTable");return o(),s("div",f,[n("div",j,[n(d,{class:"mr-2",onClick:e.reloadTable},{default:a((()=>[b])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.changeLoading},{default:a((()=>[g])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.changeColumns},{default:a((()=>[C])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.getColumn},{default:a((()=>[k])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.getTableData},{default:a((()=>[x])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.setPaginationInfo},{default:a((()=>[w])),_:1},8,["onClick"])]),n("div",S,[n(d,{class:"mr-2",onClick:e.getSelectRowList},{default:a((()=>[T])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:a((()=>[R])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:a((()=>[_])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.clearSelect},{default:a((()=>[y])),_:1},8,["onClick"]),n(d,{class:"mr-2",onClick:e.getPagination},{default:a((()=>[L])),_:1},8,["onClick"])]),n(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;