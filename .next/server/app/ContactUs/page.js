(()=>{var e={};e.id=121,e.ids=[121],e.modules={1438:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\victus\\\\Desktop\\\\ApnaCity copy\\\\app\\\\ContactUs\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\victus\\Desktop\\ApnaCity copy\\app\\ContactUs\\page.tsx","default")},1769:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var s=r(65239),a=r(48088),i=r(88170),o=r.n(i),n=r(30893),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d={children:["",{children:["ContactUs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1438)),"C:\\Users\\victus\\Desktop\\ApnaCity copy\\app\\ContactUs\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,58014)),"C:\\Users\\victus\\Desktop\\ApnaCity copy\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["C:\\Users\\victus\\Desktop\\ApnaCity copy\\app\\ContactUs\\page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/ContactUs/page",pathname:"/ContactUs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:e=>{"use strict";e.exports=require("assert")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},20668:(e,t,r)=>{"use strict";r.d(t,{nC:()=>X});var s,a=r(43210);let i={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let r="",s="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":s+="f"==i[1]?c(o,i):i+"{"+c(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=c(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=c.p?c.p(i,o):i+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+s},p={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e},m=(e,t,r,s,a)=>{let i=u(e),o=p[i]||(p[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!p[o]){let t=i!==e?e:(e=>{let t,r,s=[{}];for(;t=n.exec(e.replace(l,""));)t[4]?s.shift():t[3]?(r=t[3].replace(d," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(d," ").trim();return s[0]})(e);p[o]=c(a?{["@keyframes "+o]:t}:t,r?"":"."+o)}let m=r&&p.g?p.g:null;return r&&(p.g=p[o]),((e,t,r,s)=>{s?t.data=t.data.replace(s,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(p[o],t,s,m),o},x=(e,t,r)=>e.reduce((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function h(e){let t=this||{},r=e.call?e(t.p):e;return m(r.unshift?r.raw?x(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,o(t.target),t.g,t.o,t.k)}h.bind({g:1});let g,y,f,b=h.bind({k:1});function v(e,t){let r=this||{};return function(){let s=arguments;function a(i,o){let n=Object.assign({},i),l=n.className||a.className;r.p=Object.assign({theme:y&&y()},n),r.o=/ *go\d+/.test(l),n.className=h.apply(r,s)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),f&&d[0]&&f(n),g(d,n)}return t?t(a):a}}var w=e=>"function"==typeof e,N=(e,t)=>w(e)?e(t):e,C=(()=>{let e=0;return()=>(++e).toString()})(),q=(()=>{let e;return()=>e})(),k=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return k(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},A=[],P={toasts:[],pausedAt:void 0},_=e=>{P=k(P,e),A.forEach(e=>{e(P)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,r]=j(P),s=Q(P);H(()=>(s.current!==P&&r(P),A.push(r),()=>{let e=A.indexOf(r);e>-1&&A.splice(e,1)}),[]);let a=t.toasts.map(t=>{var r,s,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},$=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),E=e=>(t,r)=>{let s=$(t,e,r);return _({type:2,toast:s}),s.id},T=(e,t)=>E("blank")(e,t);T.error=E("error"),T.success=E("success"),T.loading=E("loading"),T.custom=E("custom"),T.dismiss=e=>{_({type:3,toastId:e})},T.remove=e=>_({type:4,toastId:e}),T.promise=(e,t,r)=>{let s=T.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?N(t.success,e):void 0;return a?T.success(a,{id:s,...r,...null==r?void 0:r.success}):T.dismiss(s),e}).catch(e=>{let a=t.error?N(t.error,e):void 0;a?T.error(a,{id:s,...r,...null==r?void 0:r.error}):T.dismiss(s)}),e};var U=(e,t)=>{_({type:1,toast:{id:e,height:t}})},S=()=>{_({type:5,time:Date.now()})},z=new Map,O=1e3,M=(e,t=O)=>{if(z.has(e))return;let r=setTimeout(()=>{z.delete(e),_({type:4,toastId:e})},t);z.set(e,r)},B=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,G=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,R=(v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),L=(v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),K=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,W=(v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,v("div")`
  position: absolute;
`,v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`);v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${W} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,s=a.createElement,c.p=void 0,g=s,y=void 0,f=void 0,h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;let X="https://back.apnacity.in/api"},21820:e=>{"use strict";e.exports=require("os")},22886:(e,t,r)=>{Promise.resolve().then(r.bind(r,1438))},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74075:e=>{"use strict";e.exports=require("zlib")},78432:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(60687),a=r(43210),i=r(54604),o=r(22e3),n=r(64184),l=r(51060),d=r(20668);function c(){let[e,t]=(0,a.useState)({fullName:"",userName:"",Phone:"",Email:"",businessType:"",message:"",natureofInquiry:"",businessAddress:""}),r=e=>{let{name:r,value:s}=e.target;t(e=>({...e,[r]:s}))},c=async r=>{r.preventDefault();try{let r=await l.A.post(`${d.nC}/qurey`,e);alert("Your inquiry has been submitted!"),t({fullName:"",userName:"",Phone:"",Email:"",businessType:"",message:"",natureofInquiry:"",businessAddress:""}),console.log(r?.data)}catch(e){console.error(e),alert("Something went wrong while submitting the form.")}};return(0,s.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,s.jsx)(n.A,{}),(0,s.jsx)("div",{className:"relative md:py-20 py-15 bg-gradient-to-br overflow-hidden",children:(0,s.jsxs)("div",{className:"relative max-w-7xl mx-auto px-4 text-center",children:[(0,s.jsxs)(i.P.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900",children:["Contact ",(0,s.jsx)("span",{className:"text-red-600",children:"Apna City"})," Team"]}),(0,s.jsx)(i.P.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"mt-6 text-[18px] sm:text-xl max-w-2xl mx-auto text-gray-600",children:"Get in touch for business listings, advertising, and partnerships"})]})}),(0,s.jsx)("div",{className:"px-4 sm:px-6 lg:px-8 pb-15",children:(0,s.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,s.jsxs)(i.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"bg-white rounded-xl overflow-hidden border border-[#f1f1f1]",children:[(0,s.jsxs)("div",{className:"bg-gradient-to-r from-red-400 to-red-400 p-6 text-white",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold",children:"Business Inquiry Form"}),(0,s.jsx)("p",{className:"opacity-90 mt-1",children:"Complete this form for business partnerships and listings"})]}),(0,s.jsxs)("form",{onSubmit:c,className:"p-6 md:p-8 space-y-6",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Full Name ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"text",name:"fullName",value:e.fullName,onChange:r,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Company Name ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"text",name:"userName",value:e.userName,onChange:r,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg"})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Business Email ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"email",name:"Email",value:e.Email,onChange:r,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Mobile Number ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"tel",name:"Phone",value:e.Phone,onChange:r,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg"})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Business Type ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsxs)("select",{name:"businessType",value:e.businessType,onChange:r,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg",children:[(0,s.jsx)("option",{value:"",children:"Select Business Type"}),(0,s.jsx)("option",{value:"retail",children:"Retail"}),(0,s.jsx)("option",{value:"restaurant",children:"Restaurant"}),(0,s.jsx)("option",{value:"service",children:"Service Provider"}),(0,s.jsx)("option",{value:"manufacturer",children:"Manufacturer"}),(0,s.jsx)("option",{value:"wholesaler",children:"Wholesaler"}),(0,s.jsx)("option",{value:"other",children:"Other"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Nature of Inquiry ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsxs)("select",{name:"natureofInquiry",value:e.natureofInquiry,onChange:r,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg",children:[(0,s.jsx)("option",{value:"",children:"Select Inquiry Type"}),(0,s.jsx)("option",{value:"listing",children:"Business Listing"}),(0,s.jsx)("option",{value:"advertising",children:"Advertising"}),(0,s.jsx)("option",{value:"partnership",children:"Partnership"}),(0,s.jsx)("option",{value:"support",children:"Technical Support"}),(0,s.jsx)("option",{value:"billing",children:"Billing Inquiry"}),(0,s.jsx)("option",{value:"other",children:"Other"})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Business Address ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("textarea",{name:"businessAddress",value:e.businessAddress,onChange:r,required:!0,rows:2,className:"w-full px-4 py-3 border border-gray-300 rounded-lg"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Detailed Message ",(0,s.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,s.jsx)("textarea",{name:"message",value:e.message,onChange:r,required:!0,rows:4,className:"w-full px-4 py-3 border border-gray-300 rounded-lg"})]}),(0,s.jsx)("div",{className:"text-right",children:(0,s.jsx)("button",{type:"submit",className:"bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium",children:"Submit Inquiry"})})]})]})})}),(0,s.jsx)(o.A,{})]})}},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},92622:(e,t,r)=>{Promise.resolve().then(r.bind(r,78432))},94735:e=>{"use strict";e.exports=require("events")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[447,825,243,969,54],()=>r(1769));module.exports=s})();