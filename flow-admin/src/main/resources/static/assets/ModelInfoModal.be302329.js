var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,s=(e,o,t)=>new Promise(((r,i)=>{var s=e=>{try{a(t.next(e))}catch(o){i(o)}},n=e=>{try{a(t.throw(e))}catch(o){i(o)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,n);a((t=t.apply(e,o)).next())}));import{_ as n,a}from"./useModal.46624a04.js";import{_ as d}from"./BasicForm.7cdef168.js";import{u as l}from"./useForm.df0a9cc0.js";import{k as p,r as m,u as c,f as u,K as f,o as b,n as j,Q as g,q as y,N as h}from"./vendor.9d9efc92.js";/* empty css              */import{s as x}from"./modelInfo.3ffc31c1.js";import{a as w}from"./app.a51e3ddb.js";import"./index.5e2cac4f.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2b517240.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.069a69f8.js";import"./StrengthMeter.034ee579.js";const v=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"categoryCode",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"名称",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:200,message:"字符长度不能大于200！"}]},{field:"modelKey",label:"标识",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"标识不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:150,message:"字符长度不能大于150！"}]},{field:"appSn",label:"所属系统",component:"Select",componentProps:{getPopupContainer:()=>document.body},required:!0}];var F=p({name:"ModelInfoModal",components:{BasicModal:n,BasicForm:d},emits:["success","register"],setup(e,{emit:n}){const d=m(!0),[p,{setFieldsValue:f,updateSchema:b,resetFields:j,validate:g}]=l({labelWidth:100,schemas:v,showActionButtonGroup:!1,actionColOptions:{span:23}}),[y,{setModalProps:h,closeModal:F}]=a((e=>s(this,null,(function*(){j(),h({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);const s=yield w();b([{field:"appSn",componentProps:{options:s,labelField:"id"}}]),c(d)&&f(((e,s)=>{for(var n in s||(s={}))t.call(s,n)&&i(e,n,s[n]);if(o)for(var n of o(s))r.call(s,n)&&i(e,n,s[n]);return e})({},e.record))}))));return{registerModal:y,registerForm:p,getTitle:u((()=>c(d)?"编辑":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{h({confirmLoading:!0});const e=yield g();yield x(e),F(),n("success")}finally{h({confirmLoading:!1})}}))}}}});F.render=function(e,o,t,r,i,s){const n=f("BasicForm"),a=f("BasicModal");return b(),j(a,h(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:g((()=>[y(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default F;
