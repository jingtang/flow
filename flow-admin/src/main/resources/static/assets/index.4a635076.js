import{_ as e}from"./PageWrapper.5f4c8315.js";import{f as t}from"./index.5e2cac4f.js";import"./account.b4891462.js";import{k as o,K as n,o as r,n as s,Q as a,q as i,Y as c}from"./vendor.9d9efc92.js";import"./usePageContext.1ca8bf0b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var p=o({name:"TestSessionTimeout",components:{PageWrapper:e},setup(){const e=t();return{test:function(){return t=this,o=null,n=function*(){e.setToken(void 0),e.setSessionTimeout(!0)},new Promise(((e,r)=>{var s=e=>{try{i(n.next(e))}catch(t){r(t)}},a=e=>{try{i(n.throw(e))}catch(t){r(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,a);i((n=n.apply(t,o)).next())}));var t,o,n}}}});const u=c("点击触发用户登录过期");p.render=function(e,t,o,c,p,m){const f=n("a-button"),d=n("PageWrapper");return r(),s(d,{title:"登录过期示例",content:"用户登录过期示例，不再跳转登录页，直接生成页面覆盖当前页面，方便保持过期前的用户状态！"},{default:a((()=>[i(f,{type:"primary",onClick:e.test},{default:a((()=>[u])),_:1},8,["onClick"])])),_:1})};export default p;
