"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[85910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},s="Postman Collection",i={unversionedId:"kits/tractusx-edc/docs/development/postman/README",id:"version-23.09/kits/tractusx-edc/docs/development/postman/README",title:"Postman Collection",description:"Prerequisites",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/development/postman/README.md",sourceDirName:"kits/tractusx-edc/docs/development/postman",slug:"/kits/tractusx-edc/docs/development/postman/",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/development/postman/",draft:!1,tags:[],version:"23.09",frontMatter:{},sidebar:"kits",previous:{title:"Endpoint Data Reference API Overview",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/edr-api-overview/"},next:{title:"EDC API Examples",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/kit/operation-view/page08_api"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Postman",id:"postman",level:2},{value:"Install/Download Postman",id:"installdownload-postman",level:3},{value:"Import Postman collection",id:"import-postman-collection",level:3},{value:"Collection",id:"collection",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postman-collection"},"Postman Collection"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Postman-URL-orange",alt:"Postman"}))),(0,r.kt)("h2",{id:"postman"},"Postman"),(0,r.kt)("p",null,"The Postman app can be used to send and receive EDC messages."),(0,r.kt)("h3",{id:"installdownload-postman"},"Install/Download Postman"),(0,r.kt)("p",null,"please visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"https://www.postman.com/downloads/")),(0,r.kt)("h3",{id:"import-postman-collection"},"Import Postman collection"),(0,r.kt)("p",null,"please visit ",(0,r.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/importing-and-exporting-data/"},"https://learning.postman.com/docs/getting-started/importing-and-exporting-data/")),(0,r.kt)("h2",{id:"collection"},"Collection"),(0,r.kt)("p",null,"The postman collection contains the most common API calls. Please note that the"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Policy & Negotiation calls come in pairs for the different kinds of policies"),(0,r.kt)("li",{parentName:"ul"},"the 'Data' call only works when using the All-In-One Deployment of this repository")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot",src:n(47870).Z,width:"1245",height:"834"})))}m.isMDXComponent=!0},47870:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-68999245da91999155474a865ec1c9b7.png"}}]);