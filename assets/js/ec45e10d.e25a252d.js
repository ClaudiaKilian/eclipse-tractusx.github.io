"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[47370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},s="Initiation a Transfer Process",i={unversionedId:"kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/transfer-process",id:"version-23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/transfer-process",title:"Initiation a Transfer Process",description:"Old plain JSON Schema",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/7-transfer-process.md",sourceDirName:"kits/tractusx-edc/docs/samples/management-api-v2-walkthrough",slug:"/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/transfer-process",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/transfer-process",draft:!1,tags:[],version:"23.09",sidebarPosition:7,frontMatter:{},sidebar:"kits",previous:{title:"Initiation a Contract Negotiation",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-negotiation"},next:{title:"Introduction",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api"}},c={},p=[{value:"Old plain JSON Schema",id:"old-plain-json-schema",level:2},{value:"New JSON-LD Document",id:"new-json-ld-document",level:2},{value:"Request",id:"request",level:2}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initiation-a-transfer-process"},"Initiation a Transfer Process"),(0,a.kt)("h2",{id:"old-plain-json-schema"},"Old plain JSON Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "assetId": "<ASSET-ID>",\n  "connectorAddress": "<CONNECTOR-ADDRESS>",\n  "contractId": "<CONTRACT-AGREEMENT-ID>",\n  "dataDestination": {\n    "properties": {\n      "type": "<SUPPORTED-TYPE>"\n    }\n  },\n  "managedResources": false,\n  "privateProperties": {\n    "receiverHttpEndpoint": "<RECEIVER-HTTP-ENDPOINT>"\n  },\n  "protocol": "ids-protocol-http",\n  "transferType": {\n    "contentType": "application/octet-stream",\n    "isFinite": true\n  }\n}\n')),(0,a.kt)("h2",{id:"new-json-ld-document"},"New JSON-LD Document"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note: In our samples, properties ",(0,a.kt)("strong",{parentName:"p"},"WILL NOT")," be explicitly namespaced, and internal nodes ",(0,a.kt)("strong",{parentName:"p"},"WILL NOT")," be typed, relying on ",(0,a.kt)("inlineCode",{parentName:"p"},"@vocab")," prefixing and root schema type inheritance respectively.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "@vocab": "https://w3id.org/edc/v0.0.1/ns/",\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "assetId": "<ASSET-ID>",\n  "connectorAddress": "<CONNECTOR-ADDRESS>",\n  "contractId": "<CONTRACT-AGREEMENT-ID>",\n  "dataDestination": {\n    "type": "<SUPPORTED-TYPE>"\n  },\n  "managedResources": false,\n  "privateProperties": {\n    "receiverHttpEndpoint": "<RECEIVER-HTTP-ENDPOINT>"\n  },\n  "protocol": "dataspace-protocol-http"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dataDestination")," should correspond to one of the supported types listed in the provider's catalog ",(0,a.kt)("inlineCode",{parentName:"p"},"dcat:distribution"),", and it should include all the necessary properties associated with the chosen type."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,"In this case we initiate a transfer process with the provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "${MANAGEMENT_URL}/v2/transferprocesses" \\\n    --header \'X-Api-Key: password\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n              "@context": {\n                "@vocab": "https://w3id.org/edc/v0.0.1/ns/",\n                "odrl": "http://www.w3.org/ns/odrl/2/"\n              },\n              "assetId": "asset-id",\n              "connectorAddress": "provider-dsp-url",\n              "contractId": "contract-agreement-id",\n              "dataDestination": {\n                "type": "HttpProxy"  \n              },\n              "managedResources": false,\n              "privateProperties": {\n                "receiverHttpEndpoint": "http://receiver/endpoint"\n              },\n              "protocol": "dataspace-protocol-http"\n            }\' \\\n    -s -o /dev/null -w \'Response Code: %{http_code}\\n\'\n')))}d.isMDXComponent=!0}}]);