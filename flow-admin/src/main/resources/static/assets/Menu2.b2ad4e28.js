import{_ as e}from"./PageWrapper.5f4c8315.js";import{b as t}from"./useModal.46624a04.js";import{k as o,ad as s,r as n,K as r,o as i,n as a,q as d,Q as l,V as c,Y as p}from"./vendor.9d9efc92.js";import m from"./index.b4fcf6ce.js";import u from"./index.fd869ae5.js";import"./index.5e2cac4f.js";import"./usePageContext.1ca8bf0b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";import"./useWindowSizeFn.0534066c.js";import"./TableImg.6ede5ece.js";/* empty css              *//* empty css              */import"./BasicForm.7cdef168.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";import"./useForm.df0a9cc0.js";import"./useSortable.d030dcef.js";import"./useExpose.0886c4eb.js";import"./useTable.7540cc94.js";import"./personal.5c18c43d.js";import"./OrgTree.fb489e5e.js";import"./Tree.vue_vue&type=style&index=0&lang.42d665ec.js";import"./useContextMenu.bb55dbb9.js";import"./dept.76233b2b.js";var f=o({name:"Menu2Demo",components:{Input:s,PageWrapper:e,PersonalSelector:m,OrgSelector:u},setup(){const[e,{openModal:o,setModalProps:s}]=t(),[r,{openModal:i,setModalProps:a}]=t();return n([]),{registerPersonalModal:e,registerOrgModal:r,handleSelectPersonal:function(e){o(!0,{selectorProps:{multiSelect:!0,selectedList:[]}}),s({title:`设置角色【${e.name}】下的人员`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSelectOrgMultiSelect:function(e){i(!0,{selectorProps:{multiSelect:!0,selectedList:[{id:"12ae3090e3e15810a9d7ebc0d291ad7e",name:"研发部"}]}}),a({title:"选择组织",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSelectOrg:function(e){i(!0,{selectorProps:{multiSelect:!1,selectedList:[{id:"12ae3090e3e15810a9d7ebc0d291ad7e",name:"研发部"}]}}),a({title:"选择组织",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSettingPersonalSuccess:function(e){},handleSettingOrgSuccess:function(e){},handleSelect:function(){}}}});const g={class:"p-4"},j=p(" 人员选择 "),S=p(" 组织选择-多选 "),b=p(" 组织选择-单选 ");f.render=function(e,t,o,s,n,p){const m=r("a-button"),u=r("PageWrapper"),f=r("PersonalSelector"),h=r("OrgSelector");return i(),a(c,null,[d(u,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:l((()=>[d("div",g,[d(m,{type:"primary",onClick:e.handleSelectPersonal},{default:l((()=>[j])),_:1},8,["onClick"]),d(m,{type:"primary",onClick:e.handleSelectOrgMultiSelect},{default:l((()=>[S])),_:1},8,["onClick"]),d(m,{type:"primary",onClick:e.handleSelectOrg},{default:l((()=>[b])),_:1},8,["onClick"])])])),_:1}),d(f,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingPersonalSuccess},null,8,["onRegister","onSuccess"]),d(h,{onRegister:e.registerOrgModal,onSuccess:e.handleSettingOrgSuccess},null,8,["onRegister","onSuccess"])],64)};export default f;
