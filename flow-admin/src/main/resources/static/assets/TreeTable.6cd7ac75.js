import{_ as e}from"./TableImg.6ede5ece.js";import"./BasicForm.7cdef168.js";import{u as o}from"./useTable.7540cc94.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,K as r,o as a,n,q as p,Q as d,Y as c}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.df0a9cc0.js";import"./index.5e2cac4f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.46624a04.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.d030dcef.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";/* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";var l=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:r}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:r}}});const m={class:"p-4"},j=c("展开全部"),f=c("折叠全部");l.render=function(e,o,t,s,i,c){const l=r("a-button"),b=r("BasicTable");return a(),n("div",m,[p(b,{onRegister:e.register},{toolbar:d((()=>[p(l,{type:"primary",onClick:e.expandAll},{default:d((()=>[j])),_:1},8,["onClick"]),p(l,{type:"primary",onClick:e.collapseAll},{default:d((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default l;
