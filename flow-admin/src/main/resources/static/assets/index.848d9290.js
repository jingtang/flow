import{_ as e}from"./TableImg.6ede5ece.js";import{f as o}from"./BasicForm.7cdef168.js";import{u as t}from"./useTable.7540cc94.js";import{g as i,d as n}from"./dicType.aa174a8b.js";import{_ as a,c as s,s as r}from"./DicTypeModal.ab4dd267.js";import{g as d}from"./index.5e2cac4f.js";import{b as c}from"./useModal.46624a04.js";import{k as l,K as p,o as m,n as u,q as f,Q as b,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.df0a9cc0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.d030dcef.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";/* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";const{createMessage:h}=d();var g=l({name:"GetDic",components:{BasicTable:e,TableAction:o,GetDicModal:a},setup(){const[e,{openModal:o}]=c(),[a,{reload:d}]=t({title:"列表",api:i,columns:s,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,pagination:!1,expandRowByClick:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:a,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):n([e.id]).then((e=>{d()}))},handleSuccess:function(){d()},doSearch:function(){d()}}}});const x=j(" 新增 ");g.render=function(e,o,t,i,n,a){const s=p("a-button"),r=p("TableAction"),d=p("BasicTable"),c=p("GetDicModal");return m(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(r,{actions:[{title:"添加子公司",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default g;
