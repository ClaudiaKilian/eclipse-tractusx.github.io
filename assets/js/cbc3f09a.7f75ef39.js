"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[83246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2,title:"Architecture",description:"Architecture",id:"connector_kit_development_view_architecture"},a=void 0,c={unversionedId:"kits/Connector Kit/Development View/connector_kit_development_view_architecture",id:"version-24.05/kits/Connector Kit/Development View/connector_kit_development_view_architecture",title:"Architecture",description:"Architecture",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Connector Kit/Development View/architecture.md",sourceDirName:"kits/Connector Kit/Development View",slug:"/kits/Connector Kit/Development View/connector_kit_development_view_architecture",permalink:"/docs-kits/kits/Connector Kit/Development View/connector_kit_development_view_architecture",draft:!1,tags:[],version:"24.05",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Architecture",description:"Architecture",id:"connector_kit_development_view_architecture"},sidebar:"kits",previous:{title:"Specifications",permalink:"/docs-kits/kits/Connector Kit/Development View/connector_kit_development_view_specifications"},next:{title:"Operation View",permalink:"/docs-kits/kits/Connector Kit/Operation View/connector_kit_operation_view"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Database",id:"database",level:3},{value:"Secret Vault",id:"secret-vault",level:3},{value:"Business Applications",id:"business-applications",level:3},{value:"Other Connectors",id:"other-connectors",level:3},{value:"Catena X Portal",id:"catena-x-portal",level:3},{value:"Notice",id:"notice",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The following diagram shows an example architecture including the Connector Kit. In this case the EDC is used as a sample implementation of the Connector Kit."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eclipse-tractusx/eclipse-tractusx.github.io/main/static/img/architecture.drawio.svg",alt:"IMG: Connector Kit Architecture"})),(0,r.kt)("h2",{id:"interactions"},"Interactions"),(0,r.kt)("p",null,"The Connector interacts with the following other components:"),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("p",null,"The Connector requires a database for persistence. In the reference implementation, a database instance for each Connector is required.\nThis database does not store any of the actual asset data, but rather the metadata consisting of Contracts, Negotiations or Policies.\nIn the reference implementation, this metadata is generated by the management plane."),(0,r.kt)("h3",{id:"secret-vault"},"Secret Vault"),(0,r.kt)("p",null,"A Connector is a security-critical component. It handles credentials, secrets and short-lived that must be shielded from\nunauthorized access and potential leaks. A ordinary database is unfit for this task, thus the setup requires a Secret Vault.\nThis is usually accomplished via a implementations such as Hashicorp Vault or Azure Vault."),(0,r.kt)("h3",{id:"business-applications"},"Business Applications"),(0,r.kt)("p",null,"The reason to use a Connector in the first place is to make data available to or obtain it from other participants.\nThis data comes from or is used in your other Business Applications.\nThese interact with the Connector by providing addresses where said data can be found that are then wrapped in Assets by the Connector.\nFor the reference implementation, the interaction will usually pass through the Management API that is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main/docs"},"documented in detail"),"\nin the tractusx-edc repository."),(0,r.kt)("h3",{id:"other-connectors"},"Other Connectors"),(0,r.kt)("p",null,"The interactions between different Connectors are specified by the DSP."),(0,r.kt)("h3",{id:"catena-x-portal"},"Catena X Portal"),(0,r.kt)("p",null,"Contact with the Catena X Portal is necessary to register as a participant and obtain a Business Partner Number. This ID is used in exchanges with other participants."),(0,r.kt)("h2",{id:"notice"},"Notice"),(0,r.kt)("p",null,"This work is licensed under the ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Contributors of the Eclipse Foundation"),(0,r.kt)("li",{parentName:"ul"},"Source\nURL: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}u.isMDXComponent=!0}}]);