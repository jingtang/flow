import{k as e,aH as a,r as n,f as s,u as t,I as r,J as i,K as o,o as l,n as c,q as p,x as f}from"./vendor.9d9efc92.js";import{p as m,c as u,ab as d}from"./index.5e2cac4f.js";import{u as g}from"./useWindowSizeFn.0534066c.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:m.string.def("")},setup(){const e=n(!1),a=n(50),o=n(window.innerHeight),l=n(null),{prefixCls:c}=u("iframe-page");g(f,150,{immediate:!0});const p=s((()=>({height:`${t(o)}px`})));function f(){const e=t(l);if(!e)return;let{top:n}=d(e);n+=20,a.value=n,o.value=window.innerHeight-n,document.documentElement.clientHeight,e.style.height="100%"}function m(){e.value=!1,f()}return r((()=>{e.value=!0,i((()=>{const e=t(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{m()})):e.onload=()=>{m()}}))})),{getWrapStyle:p,loading:e,frameRef:l,prefixCls:c}}});const h=f(),x=h(((e,a,n,s,t,r)=>{const i=o("Spin");return l(),c("div",{class:e.prefixCls,style:e.getWrapStyle},[p(i,{wrapperClassName:"custom-spin-container",spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[p("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=x,v.__scopeId="data-v-3c0be771";export default v;
