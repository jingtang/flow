var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,i=(e,i)=>{for(var o in i||(i={}))n.call(i,o)&&a(e,o,i[o]);if(t)for(var o of t(i))l.call(i,o)&&a(e,o,i[o]);return e};import{_ as o,u as E}from"./useDrawer.39ff0fe7.js";import{k as r,f as s,q as u,u as _,aV as O,V as d,N as g,K as S,o as T,n as A}from"./vendor.9d9efc92.js";/* empty css              */import{k as N,d as M,b4 as R,b5 as I,b6 as c,M as D,v as C,b7 as H,Z as m,a8 as b,b8 as L,b9 as p,l as f,ba as y,bb as U,bc as v,bd as B,Y as G,w as W,U as h,b as P,be as F,bf as w,bg as x,j as X}from"./index.5e2cac4f.js";import{c as j}from"./createAsyncComponent.a3818432.js";import{a as k}from"./useFrameKeepAlive.f515028f.js";const K=j((()=>N((()=>import("./TypePicker.99b039a5.js")),["/assets/TypePicker.99b039a5.js","/assets/TypePicker.64692008.css","/assets/vendor.9d9efc92.js","/assets/vendor.70495537.css","/assets/index.5e2cac4f.js","/assets/index.69000eb3.css"]))),V=j((()=>N((()=>import("./ThemeColorPicker.33713f7b.js")),["/assets/ThemeColorPicker.33713f7b.js","/assets/ThemeColorPicker.97cf21ea.css","/assets/index.864ac48e.css","/assets/index.6d85b653.css","/assets/index.5e2cac4f.js","/assets/index.69000eb3.css","/assets/vendor.9d9efc92.js","/assets/vendor.70495537.css","/assets/useDrawer.39ff0fe7.js","/assets/useDrawer.1b4eeea2.css","/assets/createAsyncComponent.a3818432.js","/assets/useFrameKeepAlive.f515028f.js"]))),Y=j((()=>N((()=>import("./SettingFooter.067d6821.js")),["/assets/SettingFooter.067d6821.js","/assets/SettingFooter.92900cc7.css","/assets/index.5e2cac4f.js","/assets/index.69000eb3.css","/assets/vendor.9d9efc92.js","/assets/vendor.70495537.css"]))),Q=j((()=>N((()=>import("./SwitchItem.254d18d1.js")),["/assets/SwitchItem.254d18d1.js","/assets/SwitchItem.6322350a.css","/assets/index.5dcbaae4.css","/assets/index.864ac48e.css","/assets/index.6d85b653.css","/assets/vendor.9d9efc92.js","/assets/vendor.70495537.css","/assets/index.5e2cac4f.js","/assets/index.69000eb3.css","/assets/useDrawer.39ff0fe7.js","/assets/useDrawer.1b4eeea2.css","/assets/createAsyncComponent.a3818432.js","/assets/useFrameKeepAlive.f515028f.js"]))),Z=j((()=>N((()=>import("./SelectItem.f3beceab.js")),["/assets/SelectItem.f3beceab.js","/assets/SelectItem.9d41e7fc.css","/assets/index.864ac48e.css","/assets/index.6d85b653.css","/assets/vendor.9d9efc92.js","/assets/vendor.70495537.css","/assets/index.5e2cac4f.js","/assets/index.69000eb3.css","/assets/useDrawer.39ff0fe7.js","/assets/useDrawer.1b4eeea2.css","/assets/createAsyncComponent.a3818432.js","/assets/useFrameKeepAlive.f515028f.js"]))),$=j((()=>N((()=>import("./InputNumberItem.760baca2.js")),["/assets/InputNumberItem.760baca2.js","/assets/InputNumberItem.581e9e46.css","/assets/index.2558ae94.css","/assets/index.864ac48e.css","/assets/index.6d85b653.css","/assets/vendor.9d9efc92.js","/assets/vendor.70495537.css","/assets/index.5e2cac4f.js","/assets/index.69000eb3.css","/assets/useDrawer.39ff0fe7.js","/assets/useDrawer.1b4eeea2.css","/assets/createAsyncComponent.a3818432.js","/assets/useFrameKeepAlive.f515028f.js"]))),{t:z}=M();var q,J;(J=q||(q={}))[J.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",J[J.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",J[J.CHANGE_THEME=2]="CHANGE_THEME",J[J.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",J[J.MENU_ACCORDION=4]="MENU_ACCORDION",J[J.MENU_TRIGGER=5]="MENU_TRIGGER",J[J.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",J[J.MENU_COLLAPSED=7]="MENU_COLLAPSED",J[J.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",J[J.MENU_WIDTH=9]="MENU_WIDTH",J[J.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",J[J.MENU_THEME=11]="MENU_THEME",J[J.MENU_SPLIT=12]="MENU_SPLIT",J[J.MENU_FIXED=13]="MENU_FIXED",J[J.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",J[J.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",J[J.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",J[J.HEADER_SHOW=17]="HEADER_SHOW",J[J.HEADER_THEME=18]="HEADER_THEME",J[J.HEADER_FIXED=19]="HEADER_FIXED",J[J.HEADER_SEARCH=20]="HEADER_SEARCH",J[J.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",J[J.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",J[J.TABS_SHOW=23]="TABS_SHOW",J[J.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",J[J.LOCK_TIME=25]="LOCK_TIME",J[J.FULL_CONTENT=26]="FULL_CONTENT",J[J.CONTENT_MODE=27]="CONTENT_MODE",J[J.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",J[J.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",J[J.GRAY_MODE=30]="GRAY_MODE",J[J.COLOR_WEAK=31]="COLOR_WEAK",J[J.SHOW_LOGO=32]="SHOW_LOGO",J[J.SHOW_FOOTER=33]="SHOW_FOOTER",J[J.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",J[J.OPEN_PROGRESS=35]="OPEN_PROGRESS",J[J.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",J[J.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION";const ee=[{value:R.FULL,label:z("layout.setting.contentModeFull")},{value:R.FIXED,label:z("layout.setting.contentModeFixed")}],te=[{value:I.CENTER,label:z("layout.setting.topMenuAlignRight")},{value:I.START,label:z("layout.setting.topMenuAlignLeft")},{value:I.END,label:z("layout.setting.topMenuAlignCenter")}],ne=[c.ZOOM_FADE,c.FADE,c.ZOOM_OUT,c.FADE_SIDE,c.FADE_BOTTOM,c.FADE_SCALE].map((e=>({label:e,value:e}))),le=[{title:z("layout.setting.menuTypeSidebar"),mode:D.INLINE,type:C.SIDEBAR},{title:z("layout.setting.menuTypeMix"),mode:D.INLINE,type:C.MIX},{title:z("layout.setting.menuTypeTopMenu"),mode:D.HORIZONTAL,type:C.TOP_MENU},{title:z("layout.setting.menuTypeMixSidebar"),mode:D.INLINE,type:C.MIX_SIDEBAR}],ae=[{value:H.HOVER,label:z("layout.setting.triggerHover")},{value:H.CLICK,label:z("layout.setting.triggerClick")}];function ie(e,t){const n=b(),l=function(e,t){const n=b(),{getThemeColor:l,getDarkMode:a}=f();switch(e){case q.CHANGE_LAYOUT:const{mode:e,type:o,split:E}=t;return{menuSetting:i({mode:e,type:o,collapsed:!1,show:!0,hidden:!1},void 0===E?{split:E}:{})};case q.CHANGE_THEME_COLOR:return l.value===t?{}:(B(t),{themeColor:t});case q.CHANGE_THEME:return a.value===t||v(t),{};case q.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case q.MENU_ACCORDION:return{menuSetting:{accordion:t}};case q.MENU_TRIGGER:return{menuSetting:{trigger:t}};case q.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case q.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case q.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case q.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case q.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case q.MENU_THEME:return p(t),{menuSetting:{bgColor:t}};case q.MENU_SPLIT:return{menuSetting:{split:t}};case q.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case q.MENU_FIXED:return{menuSetting:{fixed:t}};case q.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case q.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case q.OPEN_PAGE_LOADING:return n.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case q.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case q.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case q.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case q.LOCK_TIME:return{lockTime:t};case q.FULL_CONTENT:return{fullContent:t};case q.CONTENT_MODE:return{contentMode:t};case q.SHOW_BREADCRUMB:return{showBreadCrumb:t};case q.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case q.GRAY_MODE:return U(t),{grayMode:t};case q.SHOW_FOOTER:return{showFooter:t};case q.COLOR_WEAK:return y(t),{colorWeak:t};case q.SHOW_LOGO:return{showLogo:t};case q.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case q.TABS_SHOW:return{multiTabsSetting:{show:t}};case q.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case q.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case q.HEADER_THEME:return L(t),{headerSetting:{bgColor:t}};case q.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case q.HEADER_FIXED:return{headerSetting:{fixed:t}};case q.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);n.setProjectConfig(l),e===q.CHANGE_THEME&&(L(),p())}const{t:oe}=M();var Ee=r({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:n,getShowFooter:l,getShowBreadCrumb:a,getShowBreadCrumbIcon:i,getShowLogo:E,getFullContent:r,getColorWeak:S,getGrayMode:T,getLockTime:A,getShowDarkModeToggle:N,getThemeColor:M}=f(),{getOpenPageLoading:R,getBasicTransition:I,getEnableTransition:c,getOpenNProgress:D}=G(),{getIsHorizontal:H,getShowMenu:b,getMenuType:L,getTrigger:p,getCollapsedShowTitle:y,getMenuFixed:U,getCollapsed:v,getCanDrag:B,getTopMenuAlign:X,getAccordion:j,getMenuWidth:J,getMenuBgColor:Ee,getIsTopMenu:re,getSplit:se,getIsMixSidebar:ue,getCloseMixSidebarOnChange:_e,getMixSideTrigger:Oe,getMixSideFixed:de}=W(),{getShowHeader:ge,getFixed:Se,getHeaderBgColor:Te,getShowSearch:Ae}=h(),{getShowMultipleTab:Ne,getShowQuick:Me,getShowRedo:Re,getShowFold:Ie}=k(),ce=s((()=>_(b)&&!_(H)));function De(){let e=_(p);const t=(l=_(se),[{value:m.NONE,label:z("layout.setting.menuTriggerNone")},{value:m.FOOTER,label:z("layout.setting.menuTriggerBottom")},...l?[]:[{value:m.HEADER,label:z("layout.setting.menuTriggerTop")}]]);var l;return t.some((t=>t.value===e))||(e=m.FOOTER),u(d,null,[u(Q,{title:oe("layout.setting.splitMenu"),event:q.MENU_SPLIT,def:_(se),disabled:!_(ce)||_(L)!==C.MIX},null),u(Q,{title:oe("layout.setting.mixSidebarFixed"),event:q.MENU_FIXED_MIX_SIDEBAR,def:_(de),disabled:!_(ue)},null),u(Q,{title:oe("layout.setting.closeMixSidebarOnChange"),event:q.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:_(_e),disabled:!_(ue)},null),u(Q,{title:oe("layout.setting.menuCollapse"),event:q.MENU_COLLAPSED,def:_(v),disabled:!_(ce)},null),u(Q,{title:oe("layout.setting.menuDrag"),event:q.MENU_HAS_DRAG,def:_(B),disabled:!_(ce)},null),u(Q,{title:oe("layout.setting.menuSearch"),event:q.HEADER_SEARCH,def:_(Ae),disabled:!_(ge)},null),u(Q,{title:oe("layout.setting.menuAccordion"),event:q.MENU_ACCORDION,def:_(j),disabled:!_(ce)},null),u(Q,{title:oe("layout.setting.collapseMenuDisplayName"),event:q.MENU_COLLAPSED_SHOW_TITLE,def:_(y),disabled:!_(ce)||!_(v)||_(ue)},null),u(Q,{title:oe("layout.setting.fixedHeader"),event:q.HEADER_FIXED,def:_(Se),disabled:!_(ge)},null),u(Q,{title:oe("layout.setting.fixedSideBar"),event:q.MENU_FIXED,def:_(U),disabled:!_(ce)||_(ue)},null),u(Z,{title:oe("layout.setting.mixSidebarTrigger"),event:q.MENU_TRIGGER_MIX_SIDEBAR,def:_(Oe),options:ae,disabled:!_(ue)},null),u(Z,{title:oe("layout.setting.topMenuLayout"),event:q.MENU_TOP_ALIGN,def:_(X),options:te,disabled:!_(ge)||_(se)||!_(re)&&!_(se)||_(ue)},null),u(Z,{title:oe("layout.setting.menuCollapseButton"),event:q.MENU_TRIGGER,def:e,options:t,disabled:!_(ce)||_(ue)},null),u(Z,{title:oe("layout.setting.contentMode"),event:q.CONTENT_MODE,def:_(n),options:ee},null),u($,{title:oe("layout.setting.autoScreenLock"),min:0,event:q.LOCK_TIME,defaultValue:_(A),formatter:e=>0===parseInt(e)?`0(${oe("layout.setting.notAutoScreenLock")})`:`${e}${oe("layout.setting.minute")}`},null),u($,{title:oe("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:q.MENU_WIDTH,disabled:!_(ce),defaultValue:_(J),formatter:e=>`${parseInt(e)}px`},null)])}return()=>u(o,g(t,{title:oe("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"}),{default:()=>[_(N)&&u(O,null,{default:()=>oe("layout.setting.darkMode")}),_(N)&&u(P,{class:"mx-auto"},null),u(O,null,{default:()=>oe("layout.setting.navMode")}),u(d,null,[u(K,{menuTypeList:le,handler:e=>{ie(q.CHANGE_LAYOUT,{mode:e.mode,type:e.type,split:!_(H)&&void 0})},def:_(L)},null)]),u(O,null,{default:()=>oe("layout.setting.sysTheme")}),u(V,{colorList:F,def:_(M),event:q.CHANGE_THEME_COLOR},null),u(O,null,{default:()=>oe("layout.setting.headerTheme")}),u(V,{colorList:w,def:_(Te),event:q.HEADER_THEME},null),u(O,null,{default:()=>oe("layout.setting.sidebarTheme")}),u(V,{colorList:x,def:_(Ee),event:q.MENU_THEME},null),u(O,null,{default:()=>oe("layout.setting.interfaceFunction")}),De(),u(O,null,{default:()=>oe("layout.setting.interfaceDisplay")}),u(d,null,[u(Q,{title:oe("layout.setting.breadcrumb"),event:q.SHOW_BREADCRUMB,def:_(a),disabled:!_(ge)},null),u(Q,{title:oe("layout.setting.breadcrumbIcon"),event:q.SHOW_BREADCRUMB_ICON,def:_(i),disabled:!_(ge)},null),u(Q,{title:oe("layout.setting.tabs"),event:q.TABS_SHOW,def:_(Ne)},null),u(Q,{title:oe("layout.setting.tabsRedoBtn"),event:q.TABS_SHOW_REDO,def:_(Re),disabled:!_(Ne)},null),u(Q,{title:oe("layout.setting.tabsQuickBtn"),event:q.TABS_SHOW_QUICK,def:_(Me),disabled:!_(Ne)},null),u(Q,{title:oe("layout.setting.tabsFoldBtn"),event:q.TABS_SHOW_FOLD,def:_(Ie),disabled:!_(Ne)},null),u(Q,{title:oe("layout.setting.sidebar"),event:q.MENU_SHOW_SIDEBAR,def:_(b),disabled:_(H)},null),u(Q,{title:oe("layout.setting.header"),event:q.HEADER_SHOW,def:_(ge)},null),u(Q,{title:"Logo",event:q.SHOW_LOGO,def:_(E),disabled:_(ue)},null),u(Q,{title:oe("layout.setting.footer"),event:q.SHOW_FOOTER,def:_(l)},null),u(Q,{title:oe("layout.setting.fullContent"),event:q.FULL_CONTENT,def:_(r)},null),u(Q,{title:oe("layout.setting.grayMode"),event:q.GRAY_MODE,def:_(T)},null),u(Q,{title:oe("layout.setting.colorWeak"),event:q.COLOR_WEAK,def:_(S)},null)]),u(O,null,{default:()=>oe("layout.setting.animation")}),u(d,null,[u(Q,{title:oe("layout.setting.progress"),event:q.OPEN_PROGRESS,def:_(D)},null),u(Q,{title:oe("layout.setting.switchLoading"),event:q.OPEN_PAGE_LOADING,def:_(R)},null),u(Q,{title:oe("layout.setting.switchAnimation"),event:q.OPEN_ROUTE_TRANSITION,def:_(c)},null),u(Z,{title:oe("layout.setting.animationType"),event:q.ROUTER_TRANSITION,def:_(I),options:ne,disabled:!_(c)},null)]),u(O,null,null),u(Y,null,null)]})}}),re=r({name:"SettingButton",components:{SettingDrawer:Ee,Icon:X},setup(){const[e,{openDrawer:t}]=E();return{register:e,openDrawer:t}}});re.render=function(e,t,n,l,a,i){const o=S("Icon"),E=S("SettingDrawer");return T(),A("div",{onClick:t[1]||(t[1]=(...t)=>e.openDrawer&&e.openDrawer(...t))},[u(o,{icon:"ion:settings-outline"}),u(E,{onRegister:e.register},null,8,["onRegister"])])};var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re});export{ie as b,se as i};
