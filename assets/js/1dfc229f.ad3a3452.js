"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[22534],{63921:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>y});var n=i(87462),o=(i(67294),i(3905)),r=i(26389),s=i(94891),a=i(75190),c=i(47507),l=i(24310),p=i(63303),d=(i(75035),i(85162));const u={id:"retrieve-the-offer-subscriptions-for-the-company-with-the-linked-connector-ids-authorization-required-roles-view-connectors",title:"Retrieve the offer subscriptions for the company with the linked connectorIds. (Authorization required - Roles: view_connectors)",description:"Example: GET: /api/administration/connectors/offerSubscriptions",sidebar_label:"Retrieve the offer subscriptions for the company with the linked connectorIds. (Authorization required - Roles: view_connectors)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Connectors"],description:"Example: GET: /api/administration/connectors/offerSubscriptions",parameters:[{name:"connectorIdSet",in:"query",description:"Optional: if `true` only respond with subscriptions where a link to a connector is given,\r\nif `false` it will only return subscriptions where no link to an connector exists.",schema:{type:"boolean"},example:!1}],responses:{200:{description:"Returns list of the offer subscriptions for the company.",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{bpn:{type:"string",description:"",nullable:!0},connectorEndpoint:{type:"array",items:{type:"string"},description:"",nullable:!0}},additionalProperties:!1,description:""}}}}},401:{description:"The User is unauthorized"},500:{description:"Internal Server Error"}},method:"get",path:"/api/administration/Connectors/offerSubscriptions",security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",description:"JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",name:"Authorization",in:"header"}},info:{title:"Org.Eclipse.TractusX.Portal.Backend.Administration.Service",version:"v2"},postman:{name:"Retrieve the offer subscriptions for the company with the linked connectorIds. (Authorization required - Roles: view_connectors)",description:{content:"Example: GET: /api/administration/connectors/offerSubscriptions",type:"text/plain"},url:{path:["api","administration","Connectors","offerSubscriptions"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Optional: if `true` only respond with subscriptions where a link to a connector is given,\r\nif `false` it will only return subscriptions where no link to an connector exists.",type:"text/plain"},key:"connectorIdSet",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Digital Twin Kit/Software Development View/API EDC Discovery//org-eclipse-tractusx-portal-backend-administration-service",custom_edit_url:null},h=void 0,m={unversionedId:"kits/Digital Twin Kit/Software Development View/API EDC Discovery/retrieve-the-offer-subscriptions-for-the-company-with-the-linked-connector-ids-authorization-required-roles-view-connectors",id:"kits/Digital Twin Kit/Software Development View/API EDC Discovery/retrieve-the-offer-subscriptions-for-the-company-with-the-linked-connector-ids-authorization-required-roles-view-connectors",title:"Retrieve the offer subscriptions for the company with the linked connectorIds. (Authorization required - Roles: view_connectors)",description:"Example: GET: /api/administration/connectors/offerSubscriptions",source:"@site/docs-kits/kits/Digital Twin Kit/Software Development View/API EDC Discovery/retrieve-the-offer-subscriptions-for-the-company-with-the-linked-connector-ids-authorization-required-roles-view-connectors.api.mdx",sourceDirName:"kits/Digital Twin Kit/Software Development View/API EDC Discovery",slug:"/kits/Digital Twin Kit/Software Development View/API EDC Discovery/retrieve-the-offer-subscriptions-for-the-company-with-the-linked-connector-ids-authorization-required-roles-view-connectors",permalink:"/docs-kits/next/kits/Digital Twin Kit/Software Development View/API EDC Discovery/retrieve-the-offer-subscriptions-for-the-company-with-the-linked-connector-ids-authorization-required-roles-view-connectors",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"retrieve-the-offer-subscriptions-for-the-company-with-the-linked-connector-ids-authorization-required-roles-view-connectors",title:"Retrieve the offer subscriptions for the company with the linked connectorIds. (Authorization required - Roles: view_connectors)",description:"Example: GET: /api/administration/connectors/offerSubscriptions",sidebar_label:"Retrieve the offer subscriptions for the company with the linked connectorIds. (Authorization required - Roles: view_connectors)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Connectors"],description:"Example: GET: /api/administration/connectors/offerSubscriptions",parameters:[{name:"connectorIdSet",in:"query",description:"Optional: if `true` only respond with subscriptions where a link to a connector is given,\r\nif `false` it will only return subscriptions where no link to an connector exists.",schema:{type:"boolean"},example:!1}],responses:{200:{description:"Returns list of the offer subscriptions for the company.",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{bpn:{type:"string",description:"",nullable:!0},connectorEndpoint:{type:"array",items:{type:"string"},description:"",nullable:!0}},additionalProperties:!1,description:""}}}}},401:{description:"The User is unauthorized"},500:{description:"Internal Server Error"}},method:"get",path:"/api/administration/Connectors/offerSubscriptions",security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",description:"JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",name:"Authorization",in:"header"}},info:{title:"Org.Eclipse.TractusX.Portal.Backend.Administration.Service",version:"v2"},postman:{name:"Retrieve the offer subscriptions for the company with the linked connectorIds. (Authorization required - Roles: view_connectors)",description:{content:"Example: GET: /api/administration/connectors/offerSubscriptions",type:"text/plain"},url:{path:["api","administration","Connectors","offerSubscriptions"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Optional: if `true` only respond with subscriptions where a link to a connector is given,\r\nif `false` it will only return subscriptions where no link to an connector exists.",type:"text/plain"},key:"connectorIdSet",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Digital Twin Kit/Software Development View/API EDC Discovery//org-eclipse-tractusx-portal-backend-administration-service",custom_edit_url:null},sidebar:"kits",previous:{title:"Removes a connector from persistence layer by id. (Authorization required - Roles: delete_connectors)",permalink:"/docs-kits/next/kits/Digital Twin Kit/Software Development View/API EDC Discovery/removes-a-connector-from-persistence-layer-by-id-authorization-required-roles-delete-connectors"},next:{title:"Retrieves all company connectors for currently logged in user. (Authorization required - Roles: view_connectors)",permalink:"/docs-kits/next/kits/Digital Twin Kit/Software Development View/API EDC Discovery/retrieves-all-company-connectors-for-currently-logged-in-user-authorization-required-roles-view-connectors"}},f={},y=[{value:"Retrieve the offer subscriptions for the company with the linked connectorIds. (Authorization required - Roles: view_connectors)",id:"retrieve-the-offer-subscriptions-for-the-company-with-the-linked-connectorids-authorization-required---roles-view_connectors",level:2}],v={toc:y};function b(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"retrieve-the-offer-subscriptions-for-the-company-with-the-linked-connectorids-authorization-required---roles-view_connectors"},"Retrieve the offer subscriptions for the company with the linked connectorIds. (Authorization required - Roles: view_connectors)"),(0,o.kt)("p",null,"Example: GET: /api/administration/connectors/offerSubscriptions"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Query Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(a.Z,{className:"paramsItem",param:{name:"connectorIdSet",in:"query",description:"Optional: if `true` only respond with subscriptions where a link to a connector is given,\r\nif `false` it will only return subscriptions where no link to an connector exists.",schema:{type:"boolean"},example:!1},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(r.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Returns list of the offer subscriptions for the company.")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(p.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema"),(0,o.kt)("span",{style:{opacity:"0.6"}}," array")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:"",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"connectorEndpoint",required:!1,deprecated:void 0,schemaDescription:"",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'[\n  {\n    "bpn": "string",\n    "connectorEndpoint": [\n      "string"\n    ]\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The User is unauthorized")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Internal Server Error")),(0,o.kt)("div",null)))))}b.isMDXComponent=!0}}]);