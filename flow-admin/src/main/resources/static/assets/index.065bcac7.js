import{M as e}from"./index.6cf33c52.js";import{_ as n}from"./PageWrapper.5f4c8315.js";import{k as a,r as t,u as o,K as r,o as s,n as c,Q as i,q as l,Y as m}from"./vendor.9d9efc92.js";import"./index.5e2cac4f.js";import"./createAsyncComponent.a3818432.js";import"./usePageContext.1ca8bf0b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var p=a({components:{MarkDown:e,PageWrapper:n},setup(){const e=t(null),n=t("\n# title\n\n# content\n");return{value:n,toggleTheme:function(){const n=o(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){n.value=e}}}});const u=m(" 黑暗主题 ");p.render=function(e,n,a,t,o,m){const p=r("a-button"),f=r("MarkDown"),d=r("PageWrapper");return s(),c(d,{title:"MarkDown组件示例"},{default:i((()=>[l(p,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:i((()=>[u])),_:1},8,["onClick"]),l(f,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default p;
