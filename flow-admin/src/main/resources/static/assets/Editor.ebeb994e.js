import{_ as e}from"./BasicForm.7cdef168.js";import{ae as t,g as a}from"./index.5e2cac4f.js";import{_ as i}from"./Editor.0fcfc6a3.js";import{_ as s}from"./PageWrapper.5f4c8315.js";import{k as o,a1 as r,K as n,o as d,n as m,Q as p,q as c}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.46624a04.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";import"./onMountedOrActivated.b73559bc.js";import"./usePageContext.1ca8bf0b.js";/* empty css              *//* empty css              */const l=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>r(i,{value:e[t],onChange:a=>{e[t]=a}})}];var f=o({components:{BasicForm:e,CollapseContainer:t,PageWrapper:s},setup(){const{createMessage:e}=a();return{schemas:l,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});f.render=function(e,t,a,i,s,o){const r=n("BasicForm"),l=n("CollapseContainer"),f=n("PageWrapper");return d(),m(f,{title:"富文本嵌入表单示例"},{default:p((()=>[c(l,{title:"富文本表单"},{default:p((()=>[c(r,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;
