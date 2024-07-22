"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(n),k=r,g=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(g,p(p({ref:t},u),{},{components:n})):a.createElement(g,p({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={id:"postAgent",title:"Invoke a Skill or Query (Flexible)",slug:"agent-post"},p=void 0,i={unversionedId:"kits/knowledge-agents/development-view/api/agent/postAgent",id:"version-24.03/kits/knowledge-agents/development-view/api/agent/postAgent",title:"Invoke a Skill or Query (Flexible)",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.03/kits/knowledge-agents/development-view/api/agent/post.mdx",sourceDirName:"kits/knowledge-agents/development-view/api/agent",slug:"/kits/knowledge-agents/development-view/api/agent/agent-post",permalink:"/docs-kits/24.03/kits/knowledge-agents/development-view/api/agent/agent-post",draft:!1,tags:[],version:"24.03",frontMatter:{id:"postAgent",title:"Invoke a Skill or Query (Flexible)",slug:"agent-post"},sidebar:"kits",previous:{title:"Invoke a Skill or Query (Simple)",permalink:"/docs-kits/24.03/kits/knowledge-agents/development-view/api/agent/agent-get"},next:{title:"Register a Skill",permalink:"/docs-kits/24.03/kits/knowledge-agents/development-view/api/agent/skill/agent-skill-post"}},s={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Request Body",id:"request-body",level:2},{value:"Code Snippets",id:"code-snippets",level:2},{value:"Responses",id:"responses",level:2},{value:"200",id:"200",level:3},{value:"203",id:"203",level:3},{value:"400",id:"400",level:3},{value:"500",id:"500",level:3}],u={toc:o};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /agent\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Invoke a Skill or Query (Flexible): ")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"in"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The Target Asset of the Query (targets the complete dataspace if empty)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runMode"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the preferred execution location which may be ",'"',"consumer",'"'," (in the computing environment of the endpoint agent), ",'"',"provider",'"'," (in the computing environment of the remote agent providing the targetted asset) or ",'"',"all",'"'," (the agent will choose the best computing environment based on contracts and policies, this is the default mode).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryLn"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the query language. Currently only ",'"',"SPARQL",'"'," is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The SPARQL query (in case that the body contains a tuple set)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(vin"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"A sample bound parameter ","'","vin","'"," which opens a new input tuple")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"troubleCode"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"A sample multi-bound parameter ","'","troubleCode","'"," which closes the tuple")))),(0,r.kt)("h2",{id:"request-body"},"Request Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/sparql-results+json")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example request"',title:'"Example','request"':!0},"{}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/sparql-results+xml")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-title="Example',metastring:'request"xml','request"xml':!0},'<?xml version="1.0" encoding="utf-8"?>\n<sparql>\n  <head>\n    <variable>\n      <name>string</name>\n    </variable>\n  </head>\n  <results>\n    <result>\n      <binding>\n        <name>string</name>\n        <literal>string</literal>\n        <uri>string</uri>\n      </binding>\n    </result>\n  </results>\n</sparql>\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/sparql-query")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example request"',title:'"Example','request"':!0},'"string"\n')),(0,r.kt)("h2",{id:"code-snippets"},"Code Snippets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request POST \\\n  --url 'https://knowledge.dev.demo.catena-x.net/consumer-edc-data/BPNL00000003CQI9/api/agent?asset=SOME_STRING_VALUE&runMode=SOME_STRING_VALUE&queryLn=SOME_STRING_VALUE&query=SOME_STRING_VALUE&(vin=SOME_STRING_VALUE&troubleCode=SOME_ARRAY_VALUE' \\\n  --header 'content-type: application/sparql-query'\n")),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("h3",{id:"200"},"200"),(0,r.kt)("p",null,"The SparQL query has been processed successfully."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/sparql-results+json")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"application/sparql-results+json"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/sparql-results+xml")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"application/sparql-results+xml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<sparql>\n  <head>\n    <variable>\n      <name>string</name>\n    </variable>\n  </head>\n  <results>\n    <result>\n      <binding>\n        <name>string</name>\n        <literal>string</literal>\n        <uri>string</uri>\n      </binding>\n    </result>\n  </results>\n</sparql>\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"text/csv")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"text/csv"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"\\"subject\\",\\"predicate\\",\\"object\\"\\n\\"foo\\",\\"meets\\",\\"bar\\"\\n\\"one\\",\\"meets\\",\\"two\\""\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"text/tab-separated-values")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"text/tab-separated-values"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"?subject ?predicate ?object"\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/x-binary-rdf-results-table")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"application/x-binary-rdf-results-table"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"string"\n')),(0,r.kt)("h3",{id:"203"},"203"),(0,r.kt)("p",null,"The SparQL query has been processed successfully but warnings did occur."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/sparql-results+json")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"application/sparql-results+json"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/sparql-results+xml")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"application/sparql-results+xml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<sparql>\n  <head>\n    <variable>\n      <name>string</name>\n    </variable>\n  </head>\n  <results>\n    <result>\n      <binding>\n        <name>string</name>\n        <literal>string</literal>\n        <uri>string</uri>\n      </binding>\n    </result>\n  </results>\n</sparql>\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"text/csv")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"text/csv"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"\\"subject\\",\\"predicate\\",\\"object\\"\\n\\"foo\\",\\"meets\\",\\"bar\\"\\n\\"one\\",\\"meets\\",\\"two\\""\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"text/tab-separated-values")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"text/tab-separated-values"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"?subject ?predicate ?object"\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/x-binary-rdf-results-table")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"application/x-binary-rdf-results-table"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"string"\n')),(0,r.kt)("h3",{id:"400"},"400"),(0,r.kt)("p",null,"Bad request or malformed SPARQL"),(0,r.kt)("h3",{id:"500"},"500"),(0,r.kt)("p",null,"Fatal error"),(0,r.kt)("sub",null,(0,r.kt)("sup",null,"(C) 2021,2023 Contributors to the Eclipse Foundation. SPDX-License-Identifier: CC-BY-4.0")))}m.isMDXComponent=!0}}]);