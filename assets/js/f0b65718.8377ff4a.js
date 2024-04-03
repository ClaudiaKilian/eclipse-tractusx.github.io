"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[55934],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},48693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"Provide data",sidebar_position:2},i=void 0,s={unversionedId:"tutorials/e2e/boost/provideData",id:"tutorials/e2e/boost/provideData",title:"Provide data",description:"Create first data asset",source:"@site/docs/tutorials/e2e/boost/provideData.md",sourceDirName:"tutorials/e2e/boost",slug:"/tutorials/e2e/boost/provideData",permalink:"/docs/tutorials/e2e/boost/provideData",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/tutorials/e2e/boost/provideData.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Provide data",sidebar_position:2},sidebar:"tutorials",previous:{title:"Chapter 3: Boost",permalink:"/docs/tutorials/e2e/boost/"},next:{title:"Consume data",permalink:"/docs/tutorials/e2e/boost/consumeData"}},c={},l=[{value:"Create first data asset",id:"create-first-data-asset",level:2},{value:"Request catalog",id:"request-catalog",level:2},{value:"Create first access policy",id:"create-first-access-policy",level:2},{value:"Request catalog - second try",id:"request-catalog---second-try",level:2},{value:"Create first contract definition",id:"create-first-contract-definition",level:2},{value:"Request catalog - third try",id:"request-catalog---third-try",level:2},{value:"Notice",id:"notice",level:2}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-first-data-asset"},"Create first data asset"),(0,o.kt)("p",null,"In this step we will focus on inserting data into our provider connector (Alice) using\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/eclipse-edc-bot/management-api"},"Management API"),". We will use plain\nCLI tools (",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),") for this, but feel free to use graphical tools such as Postman or Insomnia."),(0,o.kt)("p",null,"Alice, as a data consumer, wants to consume data from Bob. Bob, as a data provider, needs to create an asset for Alice.\nAction (Bob): Create this asset using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/bob/management/v2/assets\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n    "@context": {},\n    "asset": {\n        "@type": "Asset",\n        "@id": "3", \n        "properties": {\n            "description": "Product EDC Demo Asset 3"\n        }\n    },\n    "dataAddress": {\n        "@type": "DataAddress",\n        "type": "HttpData",\n        "baseUrl": "https://jsonplaceholder.typicode.com/todos/3"\n    }\n}\' | jq\n')),(0,o.kt)("h2",{id:"request-catalog"},"Request catalog"),(0,o.kt)("p",null,"Bob tells Alice, that he created an asset, and she should now be able to request it. In the next step, Alice requests a contract offer catalog. In the catalog, all contract offers for Alice are listed."),(0,o.kt)("p",null,"Action (Alice): Execute a request using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/alice/management/v2/catalog/request\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n    "@context": {},\n    "protocol": "dataspace-protocol-http",\n    "counterPartyAddress": "http://bob-controlplane:8084/api/v1/dsp",\n    "querySpec": {\n        "offset": 0,\n        "limit": 100\n    }\n}\' | jq\n')),(0,o.kt)("h2",{id:"create-first-access-policy"},"Create first access policy"),(0,o.kt)("p",null,"Let\xb4s see if Alice can see the Asset (ID: 3)."),(0,o.kt)("p",null,'As you can see in the response, the data offer "Product EDC Demo Asset 3" (asset ID: 3) does not appear. Unfortunately, Alice sees some contract offers but she cannot find the contract offer from Bob.'),(0,o.kt)("p",null,"Alice calls Bob and says she can\xb4t see the asset. Bob remembers that he did not create an access policy. An access policy defines who is allowed to see a data offering."),(0,o.kt)("p",null,"Action (Bob): Create the access policy using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/bob/management/v2/policydefinitions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@type": "PolicyDefinitionRequestDto",\n  "@id": "3-1",\n  "policy": {\n    "@type": "Policy"\n  }\n}\' | jq\n')),(0,o.kt)("h2",{id:"request-catalog---second-try"},"Request catalog - second try"),(0,o.kt)("p",null,"Now that Bob created an access policy, Alice can once again try to access Bob's asset."),(0,o.kt)("p",null,"Action (Alice): Execute the request again using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/alice/management/v2/catalog/request\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n    "@context": {},\n    "protocol": "dataspace-protocol-http",\n    "counterPartyAddress": "http://bob-controlplane:8084/api/v1/dsp",\n    "querySpec": {\n        "offset": 0,\n        "limit": 100\n    }\n}\' | jq\n')),(0,o.kt)("h2",{id:"create-first-contract-definition"},"Create first contract definition"),(0,o.kt)("p",null,"Let\xb4s see if Alice can see the Asset."),(0,o.kt)("p",null,"Once again Alice cannot find the data offer. This is by design and to be expected since Bob has only created an asset and a policy definition. An asset and a policy can not be displayed to Alice as a consumer without a contract definition."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is the first lesson in this tutorial: For providing data, a contract definition must be created on the provider side. This must always contain an asset, an access policy, and a contract policy.")),(0,o.kt)("p",null,"Contract definitions state how assets and policies are linked together. Contract definitions express under what conditions an asset is published in a data space. Those conditions are comprised of a contract policy and an access policy. Those policies are referenced by ID, that means they must already exist in the policy store before creating the contract definition."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Access policy:")," determines whether or not a particular consumer can see an asset in the provider's catalog. For example, we may want to restrict certain assets such that only selected consumers from a list of selected partners can access the asset. This can be done using a unique identifier such as the Business Partner Number (BPN). Other data space participants than those whose BPN is listed in the access policy wouldn't even be able to see the asset in the catalog."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contract policy:")," determines the conditions for initiating a contract negotiation for a particular asset. Note that this does not automatically guarantee the successful creation of a contract, it merely expresses the eligibility to start the negotiation.")),(0,o.kt)("p",null,"Find additional information on transferring data in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/docs/blob/main/developer/handbook.md"},"Developer's Handbook"),"."),(0,o.kt)("p",null,"Since an access policy has already been created, a contract policy must be created and linked in a contract definition."),(0,o.kt)("p",null,"Action (BoB): Create the contract policy using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/bob/management/v2/policydefinitions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@type": "PolicyDefinitionRequestDto",\n  "@id": "3-2",\n  "policy": {\n    "@type": "Policy"\n  }\n}\' | jq\n')),(0,o.kt)("p",null,"Action (Bob): Create a contract definition including the asset and the policies you have created. For this, use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/bob/management/v2/contractdefinitions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n  "@context": {},\n  "@id": "3",\n  "@type": "ContractDefinition",\n  "accessPolicyId": "3-1",\n  "contractPolicyId": "3-2",\n  "assetsSelector": {\n    "@type": "CriterionDto",\n    "operandLeft": "https://w3id.org/edc/v0.0.1/ns/id",\n    "operator": "=",\n    "operandRight": "3"\n  }\n}\' | jq\n')),(0,o.kt)("h2",{id:"request-catalog---third-try"},"Request catalog - third try"),(0,o.kt)("p",null,"Let\xb4s see if Alice can finally see the Asset.\nAction (Alice): Execute the request again using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://localhost/alice/management/v2/catalog/request\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: password\' \\\n--data-raw \'{\n    "@context": {},\n    "protocol": "dataspace-protocol-http",\n    "counterPartyAddress": "http://bob-controlplane:8084/api/v1/dsp",\n    "querySpec": {\n        "offset": 0,\n        "limit": 100\n    }\n}\' | jq\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Finally Alice can see the Contract Offer from Bob.\nCongratulations on yor first successful offering of data in your own data space!")),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("p",null,"This work is licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 sovity GmbH"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 msg systems AG"),(0,o.kt)("li",{parentName:"ul"},"Source URL: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}d.isMDXComponent=!0}}]);