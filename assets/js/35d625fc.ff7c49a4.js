"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[75496],{42678:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var n=i(87462),a=(i(67294),i(3905)),l=i(26389),p=i(94891),r=(i(75190),i(47507)),s=i(24310),o=i(63303),c=(i(75035),i(85162));const m={id:"initiate-edr-negotiation",title:"initiateEdrNegotiation",description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",sidebar_label:"initiateEdrNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Control Plane EDR Api"],description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",operationId:"initiateEdrNegotiation",requestBody:{content:{"application/json":{schema:{type:"object",properties:{empty:{type:"boolean",example:null},valueType:{type:"string",example:null,enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"]}},additionalProperties:{type:"object",properties:{callbackAddresses:{type:"array",example:null,items:{type:"object",properties:{authCodeId:{type:"string",example:null},authKey:{type:"string",example:null},events:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},transactional:{type:"boolean",example:null},uri:{type:"string",example:null}},example:null}},connectorAddress:{type:"string",example:null},connectorId:{type:"string",example:null},offer:{type:"object",properties:{assetId:{type:"string",example:null},offerId:{type:"string",example:null},policy:{type:"object",properties:{"@type":{type:"string",example:null,enum:["SET","OFFER","CONTRACT"]},assignee:{type:"string",example:null},assigner:{type:"string",example:null},extensibleProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},inheritsFrom:{type:"string",example:null},obligations:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},parentPermission:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},duties:{type:"array",example:null,items:"circular()"},target:{type:"string",example:null}},example:null},target:{type:"string",example:null}},example:null}},permissions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},duties:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},parentPermission:"circular()",target:{type:"string",example:null}},example:null}},target:{type:"string",example:null}},example:null}},prohibitions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},target:{type:"string",example:null}},example:null}},target:{type:"string",example:null}},example:null}},example:null},protocol:{type:"string",example:null},providerId:{type:"string",example:null}},example:null},example:null}}}},responses:{200:{description:"The negotiation was successfully initiated.",content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@id":"id-value",createdAt:1688465655}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/edrs",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"initiate Edr Negotiation",description:{content:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",type:"text/plain"},url:{path:["edrs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},d=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation",title:"initiateEdrNegotiation",description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"initiate-edr-negotiation",title:"initiateEdrNegotiation",description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",sidebar_label:"initiateEdrNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Control Plane EDR Api"],description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",operationId:"initiateEdrNegotiation",requestBody:{content:{"application/json":{schema:{type:"object",properties:{empty:{type:"boolean",example:null},valueType:{type:"string",example:null,enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"]}},additionalProperties:{type:"object",properties:{callbackAddresses:{type:"array",example:null,items:{type:"object",properties:{authCodeId:{type:"string",example:null},authKey:{type:"string",example:null},events:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},transactional:{type:"boolean",example:null},uri:{type:"string",example:null}},example:null}},connectorAddress:{type:"string",example:null},connectorId:{type:"string",example:null},offer:{type:"object",properties:{assetId:{type:"string",example:null},offerId:{type:"string",example:null},policy:{type:"object",properties:{"@type":{type:"string",example:null,enum:["SET","OFFER","CONTRACT"]},assignee:{type:"string",example:null},assigner:{type:"string",example:null},extensibleProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},inheritsFrom:{type:"string",example:null},obligations:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},parentPermission:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},duties:{type:"array",example:null,items:"circular()"},target:{type:"string",example:null}},example:null},target:{type:"string",example:null}},example:null}},permissions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},duties:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},parentPermission:"circular()",target:{type:"string",example:null}},example:null}},target:{type:"string",example:null}},example:null}},prohibitions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"}}},target:{type:"string",example:null}},example:null}},target:{type:"string",example:null}},example:null}},example:null},protocol:{type:"string",example:null},providerId:{type:"string",example:null}},example:null},example:null}}}},responses:{200:{description:"The negotiation was successfully initiated.",content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@id":"id-value",createdAt:1688465655}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/edrs",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"initiate Edr Negotiation",description:{content:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",type:"text/plain"},url:{path:["edrs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"initiateContractNegotiation",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-contract-negotiation"},next:{title:"initiateTransferProcess",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-transfer-process"}},y={},g=[{value:"initiateEdrNegotiation",id:"initiateedrnegotiation",level:2}],x={toc:g};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},x,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"initiateedrnegotiation"},"initiateEdrNegotiation"),(0,a.kt)("p",null,"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated."),(0,a.kt)(p.Z,{mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(s.Z,{collapsible:!1,name:"empty",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"valueType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ARRAY`, `OBJECT`, `STRING`, `NUMBER`, `TRUE`, `FALSE`, `NULL`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(l.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The negotiation was successfully initiated.")),(0,a.kt)("div",null,(0,a.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(s.Z,{collapsible:!1,name:"@id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(r.Z,{responseExample:'{\n  "@context": {\n    "edc": "https://w3id.org/edc/v0.0.1/ns/"\n  },\n  "@id": "id-value",\n  "createdAt": 1688465655\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Request body was malformed")),(0,a.kt)("div",null,(0,a.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(s.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);