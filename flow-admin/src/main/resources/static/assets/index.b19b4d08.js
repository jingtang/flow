import{_ as e}from"./TableImg.6ede5ece.js";import{f as t}from"./BasicForm.7cdef168.js";import{u as i}from"./useTable.7540cc94.js";import{a as o,d as a}from"./dept.76233b2b.js";import{_ as n}from"./PageWrapper.5f4c8315.js";import r from"./DictTypeTree.7dc89d23.js";import s from"./DictionaryTable.6866685b.js";import c from"./DictionaryItemTable.e101084d.js";import{g as d}from"./index.5e2cac4f.js";import{b as l}from"./useModal.46624a04.js";import{k as m,l as p}from"./dictionary.2c36d493.js";import{k as f,r as u,K as b,o as j,n as x,Q as y,q as T}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.df0a9cc0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.d030dcef.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";/* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";import"./usePageContext.1ca8bf0b.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.42d665ec.js";import"./useContextMenu.bb55dbb9.js";import"./dicType.aa174a8b.js";import"./DictionaryModal.835f87f6.js";import"./DictionaryItemModal.697b922a.js";const{createMessage:h}=d();var D=f({name:"Dictionary",components:{BasicTable:e,PageWrapper:n,DictTypeTree:r,DictionaryTable:s,DictionaryItemTable:c,TableAction:t},setup(){const[e,{openModal:t}]=l(),n=u(),r=u(),[s,{reload:c}]=i({title:"列表",api:o,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictionaryRef:n,dictionaryItemRef:r,registerTable:s,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDictSelect:function(e){e&&r.value.filterByDict(e)},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):a([e.id]).then((()=>{c()}))},handleSuccess:function(){c()},handleDictTypeSelect:function(e=""){e?(n.value.filterByDictType(e),r.value.cleanTableData()):n.value.cleanTableData()}}}});D.render=function(e,t,i,o,a,n){const r=b("DictTypeTree"),s=b("DictionaryTable"),c=b("DictionaryItemTable"),d=b("PageWrapper");return j(),x(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:y((()=>[T(r,{class:"w-2/8 xl:w-2/8",onSelect:e.handleDictTypeSelect},null,8,["onSelect"]),T(s,{ref:"dictionaryRef",onHandleSelect:e.handleDictSelect,class:"w-3/8 xl:w-3/8"},null,8,["onHandleSelect"]),T(c,{ref:"dictionaryItemRef",class:"w-3/8 xl:w-3/8"},null,512)])),_:1})};export default D;
