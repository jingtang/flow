import{k as e,ad as o,b2 as n,cg as t,cb as a,bO as r,r as s,u as i,K as l,o as d,n as c,Q as p,q as m,Y as u}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              */import{_ as f}from"./TableImg.6ede5ece.js";import{f as g}from"./BasicForm.7cdef168.js";import{u as h}from"./useTable.7540cc94.js";import{g as b,a as j,d as x,b as S}from"./role.b127e2c8.js";import{_ as P}from"./PageWrapper.5f4c8315.js";import w from"./CompanyTree.5e3c6d9f.js";import{g as C}from"./index.5e2cac4f.js";import{b as T}from"./useModal.46624a04.js";import{_ as I,s as y,c as R,p as M}from"./RoleModal.213bd0b5.js";import v from"./index.b4fcf6ce.js";import{b as k}from"./personal.5c18c43d.js";/* empty css              *//* empty css              */import"./useForm.df0a9cc0.js";/* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.d030dcef.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";/* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";import"./usePageContext.1ca8bf0b.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.42d665ec.js";import"./useContextMenu.bb55dbb9.js";import"./company.ce3df36d.js";import"./OrgTree.fb489e5e.js";import"./dept.76233b2b.js";const{createMessage:_}=C();var A=e({name:"RoleManagement",components:{BasicTable:f,PageWrapper:P,CompanyTree:w,RoleModal:I,PersonalSelector:v,TableAction:g,Input:o,Tag:n,Affix:t,Space:a,Search:o.Search,SettingOutlined:r},setup(){const[e,{openModal:o}]=T(),[n,{openModal:t,setModalProps:a}]=T(),r=s({}),l=s([]);s([]);const d=s("");y.forEach((e=>{e&&(e.componentProps.onkeypress=e=>{13===e.keyCode&&p()})}));const[c,{reload:p}]=h({title:"列表",api:b,columns:R,formConfig:{labelWidth:120,schemas:y,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!1,pagination:!0,onExpand:(e,o)=>{e?(r.value=o,d.value="",setTimeout((()=>{u({roleId:o.id})}),0)):l.value=[]},rowKey:"id",canResize:!1}),[m,{reload:u}]=h({title:"",size:"small",api:j,columns:M,useSearchForm:!1,immediate:!1,showIndexColumn:!0,showTableSetting:!1,bordered:!0,pagination:!1,actionColumn:{align:"center"},rowKey:"id",canResize:!1});return{currentRole:r,onSearchPerson:function(e){u({roleId:r.value.id,searchInfo:{personal:{keyword:e}}})},searchPersonTxt:d,registerTable:c,registerPersonalTable:m,registerModal:e,registerPersonalModal:n,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e,n){n.stopPropagation(),o(!0,{record:e,isUpdate:!0})},handleAddPersonal:function(e,o){o.stopPropagation(),r.value=e,j({roleId:e.id}).then((o=>{t(!0,{selectorProps:{multiSelect:!0,selectedList:o.map((e=>({code:e.code,name:e.name})))}}),a({title:`设置角色【${e.name}】下的人员`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})})).finally((()=>{}))},handleDelete:function(e){e.children&&e.children.length>0?_.warning("有子节点，不能删除！"):x([e.id]).then((e=>{p()}))},handleDeletePersonal:function(e){k({roleId:e.roleId,personalId:e.personalId}).then((()=>{u({roleId:e.roleId})}))},handleSuccess:function(){p()},handleSettingPersonalSuccess:function(e){const o=e.map((e=>({id:e.id,code:e.code})));S({roleId:i(r).id,personalList:o}).then((()=>{l.value=[i(r).id],u({roleId:i(r).id})}))},handleSelect:function(e){p({searchInfo:{companyId:e?e.id:""}})}}}});const B=u("新增"),F=u(" 姓名 "),O={class:"manager-range",style:{"text-align":"right"}},z=u("中国石化"),E=u("中国石化");A.render=function(e,o,n,t,a,r){const s=l("CompanyTree"),i=l("Affix"),u=l("a-button"),f=l("TableAction"),g=l("Search"),h=l("Tag"),b=l("Space"),j=l("SettingOutlined"),x=l("BasicTable"),S=l("RoleModal"),P=l("PersonalSelector"),w=l("PageWrapper");return d(),c(w,{dense:"",contentFullHeight:"",contentClass:"flex"},{default:p((()=>[m(i,{"offset-top":"8",class:"w-1/4 xl:w-1/5"},{default:p((()=>[m(s,{contentFullHeight:"",onSelect:e.handleSelect},null,8,["onSelect"])])),_:1}),m(x,{onRegister:e.registerTable,class:"personal w-3/4 xl:w-4/5"},{toolbar:p((()=>[m(u,{type:"primary",onClick:e.handleCreate},{default:p((()=>[B])),_:1},8,["onClick"])])),action:p((({record:o})=>[m(f,{actions:[{title:"添加人员",icon:"ant-design:user-add",onClick:e.handleAddPersonal.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),expandedRowRender:p((({record:n,index:t,indent:a,expanded:r})=>[m(x,{onRegister:e.registerPersonalTable,searchInfo:{roleId:n.id},class:"w-4/4 xl:w-5/5"},{customName:p((({record:n})=>[m("span",null,[F,m(g,{value:e.searchPersonTxt,"onUpdate:value":o[1]||(o[1]=o=>e.searchPersonTxt=o),placeholder:"姓名/工号/手机",style:{width:"150px"},size:"small",allowClear:"",onSearch:o[2]||(o[2]=o=>{e.onSearchPerson(o)})},null,8,["value"])])])),action:p((({record:o})=>[m(f,{actions:[{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDeletePersonal.bind(null,o)}}]},null,8,["actions"])])),setManagerRange:p((({record:e})=>[m("div",O,[m(b,{size:"small"},{default:p((()=>[m(h,{color:"processing"},{default:p((()=>[z])),_:1}),m(h,{color:"processing"},{default:p((()=>[E])),_:1})])),_:1}),m(j,{class:"ant-btn-link"})])])),_:2},1032,["onRegister","searchInfo"])])),_:1},8,["onRegister"]),m(S,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),m(P,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingPersonalSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default A;
