var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,r=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&s(e,l,t[l]);if(a)for(var l of a(t))c.call(t,l)&&s(e,l,t[l]);return e},o=(e,a)=>t(e,l(a)),i=(e,t,l)=>new Promise(((a,n)=>{var c=e=>{try{r(l.next(e))}catch(t){n(t)}},s=e=>{try{r(l.throw(e))}catch(t){n(t)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(c,s);r((l=l.apply(e,t)).next())}));import{a1 as d,k as u,au as y,av as h,ad as p,f,F as k,l as v,m as K,K as b,o as L,n as A,R as C,X as g,Y as _,s as m,q as x,as as S,V as E,ah as T,x as N,u as I,am as D,A as w,r as j,t as M,aL as B,a5 as P,D as U,bm as O,w as R,v as H,bU as X,N as Y,ag as F,bn as $}from"./vendor.9d9efc92.js";import{h as Q,j as q,ax as z,p as V,d as G,aP as J,c as W,i as Z,aw as ee,Q as te,aQ as le,ad as ae,F as ne}from"./index.5e2cac4f.js";import{u as ce}from"./useContextMenu.bb55dbb9.js";import{u as se}from"./useExpose.0886c4eb.js";const re=({icon:e})=>e?Q(e)?d(q,{icon:e,class:"mr-1"}):q:null;var oe,ie;(ie=oe||(oe={}))[ie.SELECT_ALL=0]="SELECT_ALL",ie[ie.UN_SELECT_ALL=1]="UN_SELECT_ALL",ie[ie.EXPAND_ALL=2]="EXPAND_ALL",ie[ie.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",ie[ie.CHECK_STRICTLY=4]="CHECK_STRICTLY",ie[ie.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY";var de=u({name:"BasicTreeHeader",components:{BasicTitle:z,Icon:q,Dropdown:y,Menu:h,MenuItem:h.Item,MenuDivider:h.Divider,InputSearch:p.Search},props:{helpMessage:{type:[String,Array],default:""},title:V.string,toolbar:V.bool,checkable:V.bool,search:V.bool,checkAll:V.func,expandAll:V.func},emits:["strictly-change","search"],setup(e,{emit:t}){const{t:l}=G(),a=f((()=>{const{checkable:t}=e,a=[{label:l("component.tree.expandAll"),value:oe.EXPAND_ALL},{label:l("component.tree.unExpandAll"),value:oe.UN_EXPAND_ALL,divider:t}];return t?[{label:l("component.tree.selectAll"),value:oe.SELECT_ALL},{label:l("component.tree.unSelectAll"),value:oe.UN_SELECT_ALL,divider:t},...a,{label:l("component.tree.checkStrictly"),value:oe.CHECK_STRICTLY},{label:l("component.tree.checkUnStrictly"),value:oe.CHECK_UN_STRICTLY}]:a}));const n=k((function(e){t("search",e)}),200);return{t:l,toolbarList:a,handleMenuClick:function(l){var a,n,c,s;const{key:r}=l;switch(r){case oe.SELECT_ALL:null==(a=e.checkAll)||a.call(e,!0);break;case oe.UN_SELECT_ALL:null==(n=e.checkAll)||n.call(e,!1);break;case oe.EXPAND_ALL:null==(c=e.expandAll)||c.call(e,!0);break;case oe.UN_EXPAND_ALL:null==(s=e.expandAll)||s.call(e,!1);break;case oe.CHECK_STRICTLY:t("strictly-change",!1);break;case oe.CHECK_UN_STRICTLY:t("strictly-change",!0)}},handleSearch:function(e){n(e.target.value)}}}});const ue=N();v("data-v-c31eb57c");const ye={class:"flex px-2 py-1.5 items-center basic-tree-header"},he={key:2,class:"flex flex-1 justify-end items-center cursor-pointer"},pe={key:0,class:"mr-1 w-2/3"};K();const fe=ue(((e,t,l,a,n,c)=>{const s=b("BasicTitle"),r=b("InputSearch"),o=b("Icon"),i=b("MenuItem"),d=b("MenuDivider"),u=b("Menu"),y=b("Dropdown");return L(),A("div",ye,[e.$slots.headerTitle?C(e.$slots,"headerTitle",{key:0},void 0,!0):g("",!0),!e.$slots.headerTitle&&e.title?(L(),A(s,{key:1,helpMessage:e.helpMessage},{default:ue((()=>[_(m(e.title),1)])),_:1},8,["helpMessage"])):g("",!0),e.search||e.toolbar?(L(),A("div",he,[e.search?(L(),A("div",pe,[x(r,{placeholder:e.t("common.searchText"),size:"small",allowClear:"",onChange:e.handleSearch},null,8,["placeholder","onChange"])])):g("",!0),e.toolbar?(L(),A(y,{key:1,onClick:t[1]||(t[1]=S((()=>{}),["prevent"]))},{overlay:ue((()=>[x(u,{onClick:e.handleMenuClick},{default:ue((()=>[(L(!0),A(E,null,T(e.toolbarList,(e=>(L(),A(E,{key:e.value},[x(i,{key:e.value},{default:ue((()=>[_(m(e.label),1)])),_:2},1040),e.divider?(L(),A(d,{key:0})):g("",!0)],64)))),128))])),_:1},8,["onClick"])])),default:ue((()=>[x(o,{icon:"ion:ellipsis-vertical"})])),_:1})):g("",!0)])):g("",!0)])}));de.render=fe,de.__scopeId="data-v-c31eb57c";var ke=u({name:"BasicTree",inheritAttrs:!1,props:{value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:V.string,toolbar:V.bool,search:V.bool,checkStrictly:V.bool,clickRowToExpand:V.bool.def(!0),checkable:V.bool.def(!1),replaceFields:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:null},rightMenuList:{type:Array}},emits:["update:expandedKeys","update:selectedKeys","update:value","change","check"],setup(e,{attrs:t,slots:l,emit:a}){const n=w({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),c=w({startSearch:!1,searchData:[]}),s=j([]),[d]=ce(),{prefixCls:u}=W("basic-tree"),y=f((()=>{const{replaceFields:t}=e;return r({children:"children",title:"title",key:"key"},t)})),h=f((()=>{let l=o(r(r({blockNode:!0},t),e),{expandedKeys:n.expandedKeys,selectedKeys:n.selectedKeys,checkedKeys:n.checkedKeys,checkStrictly:n.checkStrictly,replaceFields:I(y),"onUpdate:expandedKeys":e=>{n.expandedKeys=e,a("update:expandedKeys",e)},"onUpdate:selectedKeys":e=>{n.selectedKeys=e,a("update:selectedKeys",e)},onCheck:(e,t)=>{n.checkedKeys=e;const l=M(e);a("update:value",l),a("check",l,t)},onRightClick:C});return l=B(l,"treeData","class"),l})),p=f((()=>c.startSearch?c.searchData:I(s))),k=f((()=>{var e;return c.startSearch&&0===(null==(e=c.searchData)?void 0:e.length)})),{deleteNodeByKey:v,insertNodeByKey:K,filterByLevel:b,updateNodeByKey:L,getAllKeys:A}=function(e,t){return{deleteNodeByKey:function l(a,n){if(!a)return;const c=n||I(e),{key:s,children:r}=I(t);if(r&&s)for(let e=0;e<c.length;e++){const t=c[e],n=t[r];if(t[s]===a){c.splice(e,1);break}n&&n.length&&l(a,t[r])}},insertNodeByKey:function({parentKey:l=null,node:a,push:n="push"}){const c=D(I(e));if(!l)return c[n](a),void(e.value=c);const{key:s,children:r}=I(t);r&&s&&(J(c,(e=>{e[s]===l&&(e[r]=e[r]||[],e[r][n](a))})),e.value=c)},filterByLevel:function l(a=1,n,c=1){if(!a)return[];const s=[],r=n||I(e)||[];for(let e=0;e<r.length;e++){const n=r[e],{key:o,children:i}=I(t),d=o?n[o]:"",u=i?n[i]:[];s.push(d),u&&u.length&&c<a&&(c+=1,s.push(...l(a,u,c)))}return s},updateNodeByKey:function l(a,n,c){if(!a)return;const s=c||I(e),{key:o,children:i}=I(t);if(i&&o)for(let e=0;e<s.length;e++){const t=s[e],c=t[i];if(t[o]===a){s[e]=r(r({},s[e]),n);break}c&&c.length&&l(a,n,t[i])}},getAllKeys:function l(a){const n=[],c=a||I(e),{key:s,children:r}=I(t);if(!r||!s)return n;for(let e=0;e<c.length;e++){const t=c[e];n.push(t[s]);const a=t[r];a&&a.length&&n.push(...l(a))}return n}}}(s,y);function C(t){return i(this,arguments,(function*({event:t,node:l}){var a;const{rightMenuList:n=[],beforeRightClick:c}=e;let s={event:t,items:[]};if(c&&Z(c)){let e=yield c(l,t);Array.isArray(e)?s.items=e:Object.assign(s,e)}else s.items=n;(null==(a=s.items)?void 0:a.length)&&d(s)}))}function g(e){n.expandedKeys=e}function _(e){n.checkedKeys=e?A():[]}function m(e){n.expandedKeys=e?A():[]}function S(e){n.checkStrictly=e}function T(e){if(!e)return void(c.startSearch=!1);c.startSearch=!0;const{title:t}=I(y);c.searchData=le(I(s),(l=>{var a,n;return null!=(n=null==(a=l[t])?void 0:a.includes(e))&&n}),I(y))}function N(t,l){if(e.clickRowToExpand&&l&&0!==l.length)if(n.expandedKeys.includes(t)){const e=[...n.expandedKeys],l=e.findIndex((e=>e===t));-1!==l&&e.splice(l,1),g(e)}else g([...n.expandedKeys,t])}P((()=>{s.value=e.treeData})),P((()=>{n.expandedKeys=e.expandedKeys})),P((()=>{n.selectedKeys=e.selectedKeys})),P((()=>{n.checkedKeys=e.checkedKeys})),U((()=>e.value),(()=>{n.checkedKeys=M(e.value||[])})),U((()=>n.checkedKeys),(()=>{const e=M(n.checkedKeys);a("update:value",e),a("change",e)})),P((()=>{n.checkStrictly=e.checkStrictly}));function Q(t){const{actionList:l}=e;if(l&&0!==l.length)return l.map(((e,l)=>{var a;let n=!0;return Z(e.show)?n=null==(a=e.show)?void 0:a.call(e,t):ne(e.show)&&(n=e.show),n?x("span",{key:l,class:`${u}__action`},[e.render(t)]):null}))}function q({data:t,level:a}){return t?t.map((t=>{const{title:n,key:c,children:s}=I(y),i=B(t,"title"),d=function(t,l){return!l&&e.renderIcon&&Z(e.renderIcon)?e.renderIcon(t):l}(o(r({},t),{level:a}),t.icon),p=$(t,s)||[];return x(X.TreeNode,Y(i,{node:M(t),key:$(t,c)}),{title:()=>{var e;return x("span",{class:`${u}-title pl-2`,onClick:N.bind(null,t[c],t[s])},[(null==l?void 0:l.title)?ae(l,"title",t):x(E,null,[d&&x(re,{icon:d},null),x("span",{class:(null==(e=I(h))?void 0:e.blockNode)?`${u}__content`:""},[$(t,n)]),x("span",{class:`${u}__actions`},[Q(o(r({},t),{level:a}))])])])},default:()=>q({data:p,level:a+1})})})):null}return se({setExpandedKeys:g,getExpandedKeys:function(){return n.expandedKeys},setSelectedKeys:function(e){n.selectedKeys=e},getSelectedKeys:function(){return n.selectedKeys},setCheckedKeys:function(e){n.checkedKeys=e},getCheckedKeys:function(){return n.checkedKeys},insertNodeByKey:K,deleteNodeByKey:v,updateNodeByKey:L,checkAll:_,expandAll:m,filterByLevel:e=>{n.expandedKeys=b(e)}}),()=>{let a;const{title:n,helpMessage:c,toolbar:s,search:o,checkable:i}=e,d=n||s||o||l.headerTitle;return x("div",{class:[u,"h-full",t.class]},[d&&x(de,{checkable:i,checkAll:_,expandAll:m,title:n,search:o,toolbar:s,helpMessage:c,onStrictlyChange:S,onSearch:T},(y=a=ee(l),"function"==typeof y||"[object Object]"===Object.prototype.toString.call(y)&&!O(y)?a:{default:()=>[a]})),R(x(te,{style:{height:"calc(100% - 38px)"}},{default:()=>[x(X,Y(I(h),{showIcon:!1}),r({default:()=>q({data:I(p),level:1})},ee(l)))]}),[[H,!I(k)]]),R(x(F,{class:"!mt-4"},null),[[H,I(k)]])]);var y}}});export{ke as _};
