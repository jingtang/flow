import{k as e,r as t,c6 as i,I as n,o as s,n as c,R as r,K as a,q as d,s as o,x as l}from"./vendor.9d9efc92.js";import{_ as u}from"./PageWrapper.5f4c8315.js";import"./index.5e2cac4f.js";import"./usePageContext.1ca8bf0b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var p=e({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:s}){const c=t(null);return i(c,(()=>{s("clickOutside")})),n((()=>{s("mounted")})),{wrap:c}}});const f={ref:"wrap"};p.render=function(e,t,i,n,a,d){return s(),c("div",f,[r(e.$slots,"default")],512)};var k=e({components:{ClickOutSide:p,PageWrapper:u},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const m=l(),C=m(((e,t,i,n,r,l)=>{const u=a("ClickOutSide"),p=a("PageWrapper");return s(),c(p,{title:"点内外部触发事件"},{default:m((()=>[d(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:m((()=>[d("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},o(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));k.render=C,k.__scopeId="data-v-824d9cd0";export default k;
