import{c as e}from"./index.5e2cac4f.js";import{b as r}from"./index.967d3be8.js";import{k as s,bN as t,K as i,o as n,n as o,V as a,ah as c,q as p}from"./vendor.9d9efc92.js";import"./useDrawer.39ff0fe7.js";/* empty css              *//* empty css              */import"./createAsyncComponent.a3818432.js";import"./useFrameKeepAlive.f515028f.js";var f=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&r(s.event,e)}}}});f.render=function(e,r,s,t,f,l){const d=i("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,c(e.colorList||[],(r=>(n(),o("span",{key:r,onClick:s=>e.handleClick(r),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===r}],style:{background:r}},[p(d)],14,["onClick"])))),128))],2)};export default f;
