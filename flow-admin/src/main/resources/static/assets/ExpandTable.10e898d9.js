import{_ as e}from"./TableImg.6ede5ece.js";import"./BasicForm.7cdef168.js";import{u as s}from"./useTable.7540cc94.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.b8dcd896.js";import{k as i,K as t,o as a,n as d,q as n,Q as m,s as p}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.df0a9cc0.js";import"./index.5e2cac4f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.46624a04.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.d030dcef.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";/* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";var c=i({components:{BasicTable:e},setup(){const[e]=s({title:"可展开表格",api:r,titleHelpMessage:"不能与scroll共用",columns:o(),rowKey:"id",canResize:!1});return{registerTable:e}}});const j={class:"p-4"};c.render=function(e,s,o,r,i,c){const f=t("BasicTable");return a(),d("div",j,[n(f,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[n("span",null,"No: "+p(e.no),1)])),_:1},8,["onRegister"])])};export default c;
