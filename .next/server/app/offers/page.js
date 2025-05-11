(()=>{var e={};e.id=928,e.ids=[928],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:e=>{"use strict";e.exports=require("assert")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},20668:(e,t,s)=>{"use strict";s.d(t,{nC:()=>X});var r,a=s(43210);let i={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let s="",r="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":r+="f"==i[1]?c(o,i):i+"{"+c(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=c(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=c.p?c.p(i,o):i+":"+o+";")}return s+(t&&a?t+"{"+a+"}":a)+r},x={},p=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+p(e[s]);return t}return e},m=(e,t,s,r,a)=>{let i=p(e),o=x[i]||(x[i]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(i));if(!x[o]){let t=i!==e?e:(e=>{let t,s,r=[{}];for(;t=l.exec(e.replace(n,""));)t[4]?r.shift():t[3]?(s=t[3].replace(d," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);x[o]=c(a?{["@keyframes "+o]:t}:t,s?"":"."+o)}let m=s&&x.g?x.g:null;return s&&(x.g=x[o]),((e,t,s,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=s?e+t.data:t.data+e)})(x[o],t,r,m),o},u=(e,t,s)=>e.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function f(e){let t=this||{},s=e.call?e(t.p):e;return m(s.unshift?s.raw?u(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,o(t.target),t.g,t.o,t.k)}f.bind({g:1});let h,g,y,b=f.bind({k:1});function v(e,t){let s=this||{};return function(){let r=arguments;function a(i,o){let l=Object.assign({},i),n=l.className||a.className;s.p=Object.assign({theme:g&&g()},l),s.o=/ *go\d+/.test(n),l.className=f.apply(s,r)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),y&&d[0]&&y(l),h(d,l)}return t?t(a):a}}var N=e=>"function"==typeof e,w=(e,t)=>N(e)?e(t):e,k=(()=>{let e=0;return()=>(++e).toString()})(),C=(()=>{let e;return()=>e})(),A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return A(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},D=[],P={toasts:[],pausedAt:void 0},$=e=>{P=A(P,e),D.forEach(e=>{e(P)})},_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},q=(e={})=>{let[t,s]=j(P),r=Q(P);H(()=>(r.current!==P&&s(P),D.push(s),()=>{let e=D.indexOf(s);e>-1&&D.splice(e,1)}),[]);let a=t.toasts.map(t=>{var s,r,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||_[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},z=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||k()}),O=e=>(t,s)=>{let r=z(t,e,s);return $({type:2,toast:r}),r.id},E=(e,t)=>O("blank")(e,t);E.error=O("error"),E.success=O("success"),E.loading=O("loading"),E.custom=O("custom"),E.dismiss=e=>{$({type:3,toastId:e})},E.remove=e=>$({type:4,toastId:e}),E.promise=(e,t,s)=>{let r=E.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?w(t.success,e):void 0;return a?E.success(a,{id:r,...s,...null==s?void 0:s.success}):E.dismiss(r),e}).catch(e=>{let a=t.error?w(t.error,e):void 0;a?E.error(a,{id:r,...s,...null==s?void 0:s.error}):E.dismiss(r)}),e};var S=(e,t)=>{$({type:1,toast:{id:e,height:t}})},G=()=>{$({type:5,time:Date.now()})},I=new Map,R=1e3,U=(e,t=R)=>{if(I.has(e))return;let s=setTimeout(()=>{I.delete(e),$({type:4,toastId:e})},t);I.set(e,s)},V=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,F=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=(v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${F} 0.15s ease-out forwards;
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
    animation: ${M} 0.15s ease-out forwards;
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
`),T=(v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),W=b`
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
}`,K=(v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
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
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,r=a.createElement,c.p=void 0,h=r,g=void 0,y=void 0,f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;let X="https://back.apnacity.in/api"},21820:e=>{"use strict";e.exports=require("os")},22457:(e,t,s)=>{Promise.resolve().then(s.bind(s,91467))},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},58905:(e,t,s)=>{Promise.resolve().then(s.bind(s,62001))},60093:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=s(65239),a=s(48088),i=s(88170),o=s.n(i),l=s(30893),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);s.d(t,n);let d={children:["",{children:["offers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,91467)),"C:\\Users\\victus\\Desktop\\ApnaCity copy\\app\\offers\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,58014)),"C:\\Users\\victus\\Desktop\\ApnaCity copy\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["C:\\Users\\victus\\Desktop\\ApnaCity copy\\app\\offers\\page.tsx"],x={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/offers/page",pathname:"/offers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},62001:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(60687),a=s(54604),i=s(88920),o=s(17019),l=s(69587),n=s(64184),d=s(22e3),c=s(43210);s(51060);var x=s(30474);s(20668);let p=({rating:e})=>{let t=Math.floor(e),s=e%1>=.5;return(0,r.jsxs)("div",{className:"flex items-center",children:[[...Array(t)].map((e,t)=>(0,r.jsx)(l.gt3,{className:"text-yellow-400 text-sm"},`full-${t}`)),s&&(0,r.jsx)(l.gVl,{className:"text-yellow-400 text-sm"}),[...Array(5-t-+!!s)].map((e,t)=>(0,r.jsx)(l.wei,{className:"text-yellow-400 text-sm"},`empty-${t}`)),(0,r.jsx)("span",{className:"ml-1 text-gray-700 text-sm",children:e.toFixed(1)})]})};function m(){let[e,t]=(0,c.useState)([]),[s,l]=(0,c.useState)(!0),[m,u]=(0,c.useState)(""),[f,h]=(0,c.useState)("All"),[g,y]=(0,c.useState)("all"),[b,v]=(0,c.useState)(""),[N,w]=(0,c.useState)(null),k=()=>{u(""),h("All"),y("all"),v("")},C=e=>{let t=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`;window.open(t,"_blank")};return(0,r.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,r.jsx)(n.A,{}),(0,r.jsx)("div",{className:"relative md:py-20 py-10 overflow-hidden",children:(0,r.jsxs)("div",{className:"relative max-w-7xl mx-auto px-4 text-center",children:[(0,r.jsxs)(a.P.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900",children:["Local ",(0,r.jsx)("span",{className:"text-red-600",children:"Deals & Offers"})]}),(0,r.jsx)(a.P.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"mt-6 text-[18px] sm:text-xl max-w-2xl mx-auto text-gray-600",children:"Discover exclusive discounts from businesses near you"})]})}),(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-4 mb-6",children:[(0,r.jsxs)("div",{className:"flex border-b border-gray-200",children:[(0,r.jsx)("button",{onClick:()=>y("all"),className:`px-4 py-2 font-medium text-sm ${"all"===g?"border-b-2 border-red-500 text-red-600":"text-gray-500 hover:text-gray-700"}`,children:"All Offers"}),(0,r.jsxs)("button",{onClick:()=>y("online"),className:`px-4 py-2 font-medium text-sm flex items-center ${"online"===g?"border-b-2 border-red-500 text-red-600":"text-gray-500 hover:text-gray-700"}`,children:[(0,r.jsx)(o.VeH,{className:"mr-2"})," Online Offers"]}),(0,r.jsxs)("button",{onClick:()=>y("offline"),className:`px-4 py-2 font-medium text-sm flex items-center ${"offline"===g?"border-b-2 border-red-500 text-red-600":"text-gray-500 hover:text-gray-700"}`,children:[(0,r.jsx)(o.HzC,{className:"mr-2"})," Nearby Offline"]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{type:"text",placeholder:"Search offers...",className:"w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500",value:m,onChange:e=>u(e.target.value)}),m&&(0,r.jsx)("button",{onClick:()=>u(""),className:"absolute right-3 top-2.5 text-gray-500 hover:text-gray-700",children:(0,r.jsx)(o.yGN,{size:18})})]}),(0,r.jsx)("select",{className:"border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500",value:f,onChange:e=>h(e.target.value),children:["All","Food & Dining","Retail","Services","Entertainment","Wellness","Education"].map(e=>(0,r.jsx)("option",{value:e,children:e},e))}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{type:"text",placeholder:"Enter pincode",className:"w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500",value:b,onChange:e=>v(e.target.value),maxLength:6}),b&&(0,r.jsx)("button",{onClick:()=>v(""),className:"absolute right-3 top-2.5 text-gray-500 hover:text-gray-700",children:(0,r.jsx)(o.yGN,{size:18})})]})]}),(m||"All"!==f||"all"!==g||b)&&(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)("button",{onClick:k,className:"text-red-600 hover:text-red-800 text-sm font-medium",children:"Reset all filters"})})]}),(0,r.jsxs)("div",{className:"mb-4 text-sm text-gray-600",children:[e.length>0?`Showing ${e.length} ${"all"!==g?g:""} offers`:"No offers match your criteria",b&&` near ${b}`]})]}),(0,r.jsx)("div",{className:"py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:s?(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[...Array(6)].map((e,t)=>(0,r.jsxs)("div",{className:"bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 h-full animate-pulse",children:[(0,r.jsx)("div",{className:"h-48 bg-gray-200"}),(0,r.jsxs)("div",{className:"p-5 space-y-3",children:[(0,r.jsx)("div",{className:"h-5 bg-gray-200 rounded w-3/4"}),(0,r.jsx)("div",{className:"h-4 bg-gray-200 rounded w-1/2"}),(0,r.jsx)("div",{className:"h-3 bg-gray-200 rounded w-full"}),(0,r.jsx)("div",{className:"h-3 bg-gray-200 rounded w-full"}),(0,r.jsx)("div",{className:"h-10 bg-gray-200 rounded w-full mt-4"})]})]},t))}):0===e.length?(0,r.jsxs)("div",{className:"bg-white rounded-xl shadow-sm p-8 text-center",children:[(0,r.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:0===e.length?"No offers available today":"No offers match your filters"}),(0,r.jsx)("p",{className:"text-gray-500 mb-4",children:0===e.length?"Check back later for new offers from local businesses.":"Try adjusting your search criteria or reset filters."}),e.length>0&&(0,r.jsx)("button",{onClick:k,className:"text-red-600 hover:text-red-800 font-medium px-4 py-2 rounded-lg border border-red-200 hover:bg-red-50",children:"Reset all filters"})]}):(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(e=>(0,r.jsxs)(a.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},whileHover:{y:-5},className:"bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-200",children:[(0,r.jsxs)("div",{className:"relative h-48 w-full",children:[(0,r.jsx)(x.default,{src:e.url||"/placeholder.jpg",alt:e.offerName,fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, 50vw"}),(0,r.jsx)("div",{className:"absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded",children:e.discount}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"})]}),(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,r.jsx)("h3",{className:"font-bold text-lg text-gray-900",children:e.offerName}),(0,r.jsxs)("div",{className:"flex items-center text-sm text-gray-500",children:[(0,r.jsx)(o.HzC,{className:"mr-1"}),(0,r.jsx)("span",{children:e.distance})]})]}),(0,r.jsx)("p",{className:"text-sm text-gray-600 mb-3",children:e.businessName}),(0,r.jsx)("div",{className:"flex items-center justify-between mb-4",children:(0,r.jsx)("span",{className:"text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded",children:e.category})}),(0,r.jsx)("p",{className:"text-gray-700 text-sm line-clamp-2 mb-4",children:e.offerDescription||"Details will be added soon."}),(0,r.jsxs)("div",{className:"flex items-center text-sm text-gray-500 mb-4",children:[(0,r.jsx)(o.Ohp,{className:"mr-2"}),(0,r.jsx)("span",{children:e.validity})]}),e.isOnline?(0,r.jsxs)("a",{href:e.website||"#",target:"_blank",rel:"noopener noreferrer",className:"block w-full bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center",children:[(0,r.jsx)(o.VeH,{className:"inline mr-2"})," Visit Website"]}):(0,r.jsxs)("button",{onClick:()=>e.address&&C(e.address),className:"w-full bg-red-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center",disabled:!e.address,children:[(0,r.jsx)(o.ECz,{className:"mr-2"})," Get Directions"]})]})]},e._id))})}),(0,r.jsx)(i.N,{children:N&&(0,r.jsx)(a.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",onClick:()=>w(null),children:(0,r.jsxs)(a.P.div,{initial:{scale:.9,y:20},animate:{scale:1,y:0},exit:{scale:.9,y:20},className:"bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto",onClick:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"relative h-56 w-full",children:[(0,r.jsx)(x.default,{src:N.url||"/placeholder.jpg",alt:N.offerName,fill:!0,className:"object-cover",sizes:"100vw"}),(0,r.jsx)("div",{className:"absolute top-3 right-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded",children:N.discount})]}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:N.offerName}),(0,r.jsx)("p",{className:"text-gray-600 mb-4",children:N.businessName}),(0,r.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,r.jsx)(p,{rating:N.rating}),(0,r.jsxs)("div",{className:"flex items-center text-sm text-gray-500",children:[(0,r.jsx)(o.HzC,{className:"mr-1"}),(0,r.jsx)("span",{children:N.distance})]})]}),(0,r.jsxs)("div",{className:"space-y-4 mb-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{className:"text-gray-900",children:"Category:"}),(0,r.jsx)("p",{className:"mt-1 text-gray-700",children:N.category})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{className:"text-gray-900",children:"Valid Until:"}),(0,r.jsx)("p",{className:"mt-1 text-gray-700",children:N.validity})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{className:"text-gray-900",children:"Description:"}),(0,r.jsx)("p",{className:"mt-1 text-gray-700",children:N.offerDescription||"Details will be added soon."})]}),N.isOnline&&N.website&&(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{className:"text-gray-900",children:"Website:"}),(0,r.jsx)("p",{className:"mt-1 text-blue-600 break-all",children:(0,r.jsx)("a",{href:N.website,target:"_blank",rel:"noopener noreferrer",children:N.website})})]}),!N.isOnline&&N.address&&(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{className:"text-gray-900",children:"Address:"}),(0,r.jsx)("p",{className:"mt-1 text-gray-700",children:N.address})]})]}),N.isOnline?(0,r.jsxs)("a",{href:N.website||"#",target:"_blank",rel:"noopener noreferrer",className:"block w-full bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center mb-3",children:[(0,r.jsx)(o.VeH,{className:"inline mr-2"})," Visit Website"]}):(0,r.jsxs)("button",{onClick:()=>N.address&&C(N.address),className:"w-full bg-red-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center mb-3",disabled:!N.address,children:[(0,r.jsx)(o.ECz,{className:"mr-2"})," Get Directions"]}),(0,r.jsx)("button",{className:"w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors",onClick:()=>w(null),children:"Close"})]})]})})}),(0,r.jsx)(d.A,{})]})}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74075:e=>{"use strict";e.exports=require("zlib")},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},91467:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\victus\\\\Desktop\\\\ApnaCity copy\\\\app\\\\offers\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\victus\\Desktop\\ApnaCity copy\\app\\offers\\page.tsx","default")},94735:e=>{"use strict";e.exports=require("events")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[447,825,243,969,587,54],()=>s(60093));module.exports=r})();