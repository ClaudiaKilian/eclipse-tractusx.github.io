"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[69651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),u=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,y=p["".concat(c,".").concat(h)]||p[h]||d[h]||s;return r?i.createElement(y,o(o({ref:t},l),{},{components:r})):i.createElement(y,o({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:n,o[1]=a;for(var u=2;u<s;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},37439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var i=r(87462),n=(r(67294),r(3905));const s={id:"Country Risk Score\xa0",title:"Country Risk Score\xa0",description:"Country Risk Score\xa0",sidebar_position:1},o=void 0,a={unversionedId:"kits/Business Partner Kit/Success Stories/Country Risk Score\xa0",id:"kits/Business Partner Kit/Success Stories/Country Risk Score\xa0",title:"Country Risk Score\xa0",description:"Country Risk Score\xa0",source:"@site/docs-kits/kits/Business Partner Kit/Success Stories/page_country-risk.md",sourceDirName:"kits/Business Partner Kit/Success Stories",slug:"/kits/Business Partner Kit/Success Stories/Country Risk Score\xa0",permalink:"/docs-kits/next/kits/Business Partner Kit/Success Stories/Country Risk Score\xa0",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Country Risk Score\xa0",title:"Country Risk Score\xa0",description:"Country Risk Score\xa0",sidebar_position:1},sidebar:"kits",previous:{title:"Success Stories",permalink:"/docs-kits/next/category/success-stories"},next:{title:"Architecture View",permalink:"/docs-kits/next/category/architecture-view"}},c={},u=[],l={toc:u};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"BPDM (Business Partner Data Management) aims to deliver first class master data and provide additional information regarding the company's business partners. This enables to make the best decision at all times based on actual data. This is especially helpful in a tender situation, for compliance processes or even for regulatory requirements."),(0,n.kt)("p",null,'Therefore, as part of the "Know Your Business Partner"-approach, the Country Risk Score Application has been developed.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Country Risk Service",src:r(89941).Z,width:"1900",height:"936"})),(0,n.kt)("p",null,"The service offers a score per country based on several, customizable ratings. This score indicates how the respective situation in the selected country is. Currently integrated sources are e.g. the Corruption Perception Index (CPI) giving the user an indication how corrupt the respective country is, as well as the Basel AML Index which provides the user with the information about money laundring and terrorism financing in the country. As an outlook there are a lot more publicly available as well as chargeable ratings to be implemented. As well as the granularity which can be increased for the future to take into account that large countries could have better or worse regions (e.g. China, USA, Russia)."),(0,n.kt)("p",null,"Prerequisite to use this product: The consumer has to be sharing member as a company is only allowed to view the business partners they have uploaded initially."),(0,n.kt)("p",null,"The open source solution is developed according to the Catena-X consortia and eclipse guidelines and was security checked. The repositories can be found here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/vas-country-risk-frontend"},"https://github.com/eclipse-tractusx/vas-country-risk-frontend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/vas-country-risk-backend"},"https://github.com/eclipse-tractusx/vas-country-risk-backend"))),(0,n.kt)("p",null,"There is one main interface used from the Golden Record Product which is the GATE API in order to retrieve company specific business partners to be displayed in the dashboard. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/bpdm/tree/main/docs/api"},"https://github.com/eclipse-tractusx/bpdm/tree/main/docs/api"),"."),(0,n.kt)("p",null,"While currently the country risk service is a dashboard without the possibility to share data, in the future there shall be the functionality to request a country risk score from our application for a provided BPN Number. This functionality can then be used by other use cases like traceability or by the sharing member itself to integrate the data into their own proprietary systems. For this a separate API will be developed which will be extended by an EDC in order to take care of the access and usage policy of the data."),(0,n.kt)("p",null,"Once this interface is implemented and the EDC is set up, it can be ensured that the data fields are understood according to the defined semantics and peer-to-peer connections and effort can be minimized after initial setup. Therefore several Country Risk Service Providers are theoretically able to provide their data via this standardized API. This leads to great flexibility for the consumer and very little connection effort."),(0,n.kt)("p",null,"Stay tuned for more information!"))}p.isMDXComponent=!0},89941:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/country-risk-dashboard-min-4aca008df54b35f5252fe5a390a137e1.png"}}]);