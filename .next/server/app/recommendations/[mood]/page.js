(()=>{var e={};e.id=266,e.ids=[266],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4032:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>l}),r(9581),r(8295),r(5866);var t=r(3191),o=r(8716),a=r(7922),n=r.n(a),i=r(5231),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(s,d);let l=["",{children:["recommendations",{children:["[mood]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9581)),"C:\\Users\\Lukas\\Book Buddie\\src\\app\\recommendations\\[mood]\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"C:\\Users\\Lukas\\Book Buddie\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\Lukas\\Book Buddie\\src\\app\\recommendations\\[mood]\\page.js"],m="/recommendations/[mood]/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/recommendations/[mood]/page",pathname:"/recommendations/[mood]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5107:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},2637:()=>{},6329:(e,s,r)=>{Promise.resolve().then(r.bind(r,1986))},1986:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>n});var t=r(326),o=r(7389),a=r(7577);function n(){let{mood:e}=(0,o.useParams)(),[s,r]=(0,a.useState)([]),[n,i]=(0,a.useState)(!0);return n?t.jsx("div",{children:"Loading..."}):(0,t.jsxs)("main",{className:"container mx-auto px-4 py-8",children:[(0,t.jsxs)("h1",{className:"text-3xl font-bold mb-6 capitalize",children:["Books for ",e," Mood"]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(e=>(0,t.jsxs)("div",{className:"border rounded-lg p-4 shadow-md",children:[t.jsx("img",{src:e.coverImage||"/placeholder-book.jpg",alt:e.title,className:"w-full h-64 object-cover rounded-md"}),t.jsx("h2",{className:"text-xl font-semibold mt-4",children:e.title}),t.jsx("p",{className:"text-gray-600",children:e.author}),t.jsx("p",{className:"mt-2",children:e.description}),(0,t.jsxs)("div",{className:"mt-4",children:[t.jsx("h3",{className:"font-semibold",children:"AI Review:"}),t.jsx("p",{className:"italic",children:e.aiReview})]})]},e.id))})]})}},8295:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a,metadata:()=>o});var t=r(9510);r(5023);let o={title:"Book Buddy - Find Your Next Read",description:"Discover personalized book recommendations based on your current mood"};function a({children:e}){return t.jsx("html",{lang:"en",children:(0,t.jsxs)("body",{className:"bg-gray-50",children:[t.jsx("nav",{className:"bg-white shadow-md fixed w-full top-0 z-50",children:t.jsx("div",{className:"container mx-auto px-4 py-4",children:t.jsx("a",{href:"/",className:"text-2xl font-bold flex items-center gap-2",children:"\uD83D\uDCDA Book Buddy"})})}),e,t.jsx("footer",{className:"bg-white shadow-inner mt-16",children:t.jsx("div",{className:"container mx-auto px-4 py-8 text-center text-gray-600",children:t.jsx("p",{children:"\xa9 2024 Book Buddy. All rights reserved."})})})]})})}},9581:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>t});let t=(0,r(8570).createProxy)(String.raw`C:\Users\Lukas\Book Buddie\src\app\recommendations\[mood]\page.js#default`)},5023:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[819],()=>r(4032));module.exports=t})();