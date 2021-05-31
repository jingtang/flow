import{_ as e}from"./TableImg.6ede5ece.js";import{f as o}from"./BasicForm.7cdef168.js";import{u as t}from"./useTable.7540cc94.js";import{b as n}from"./useModal.46624a04.js";import{_ as i,g as r,c as s,s as a,d as c}from"./LoginLogModal.f5869a82.js";import{g as d}from"./index.5e2cac4f.js";import{P as l}from"./perEnum.9a5ef72f.js";import{_ as m}from"./Authority.vue_vue&type=script&lang.128d0092.js";import{k as u,K as p,o as f,n as h,q as b,Q as g,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.df0a9cc0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.d030dcef.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";/* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";var x=u({name:"LoginLog",components:{BasicTable:e,TableAction:o,LoginLogModal:i,Authority:m},setup(){const{createMessage:e,createConfirm:o}=d(),[i,{openModal:m}]=n(),[u,{reload:p,getSelectRows:f}]=t({title:"列表",api:r,columns:s,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},rowSelection:{type:"checkbox",columnWidth:30},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:60,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:l,registerTable:u,registerModal:i,handleCreate:function(){m(!0,{isUpdate:!1})},handleEdit:function(e){m(!0,{record:e,isUpdate:!0})},handleDelete:function(e){c([e.id]).then((()=>{p()}))},handleDeleteAll:function(){const t=f();t&&t.length<=0?e.warn("请选择行！"):o({iconType:"warning",title:"提示",content:"确定要删除所选行吗？",onOk:()=>{return e=this,o=null,n=function*(){const e=t.map((e=>e.id));yield c(e).then((()=>{p()}))},new Promise(((t,i)=>{var r=e=>{try{a(n.next(e))}catch(o){i(o)}},s=e=>{try{a(n.throw(e))}catch(o){i(o)}},a=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,s);a((n=n.apply(e,o)).next())}));var e,o,n}})},handleSuccess:function(){p()}}}});const v=j(" 删除 ");x.render=function(e,o,t,n,i,r){const s=p("a-button"),a=p("Authority"),c=p("TableAction"),d=p("BasicTable"),l=p("LoginLogModal");return f(),h("div",null,[b(d,{onRegister:e.registerTable},{toolbar:g((()=>[b(a,{value:this.$options.name+":"+e.PerEnum.DELETE},{default:g((()=>[b(s,{type:"danger",onClick:e.handleDeleteAll},{default:g((()=>[v])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:g((({record:o})=>[b(c,{actions:[{auth:this.$options.name+":"+e.PerEnum.DELETE,icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
