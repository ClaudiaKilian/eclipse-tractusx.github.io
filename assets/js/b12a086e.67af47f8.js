"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[42886],{96334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),o=a(26389),s=a(94891),n=(a(75190),a(47507)),c=a(24310),l=a(63303),d=(a(75035),a(85162));const p={id:"creates-a-new-connector-with-provided-parameters-from-body-also-registers-connector-at-sd-factory-service-authorization-required-roles-add-connectors",title:"Creates a new connector with provided parameters from body, also registers connector at sd factory service. (Authorization required - Roles: add_connectors)",description:"Example: POST: /api/administration/connectors/daps",sidebar_label:"Creates a new connector with provided parameters from body, also registers connector at sd factory service. (Authorization required - Roles: add_connectors)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Connectors"],description:"Example: POST: /api/administration/connectors/daps",requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{Name:{type:"string",description:"Display name of the connector."},ConnectorUrl:{type:"string",description:"URL of the connector."},Location:{type:"string",description:"Connector's location country code."},Certificate:{type:"file",description:"The certificate for the daps call.",format:"binary"},TechnicalUserId:{type:"string",description:"Id of the technical user.",format:"uuid"}}},encoding:{Name:{style:"form"},ConnectorUrl:{style:"form"},Location:{style:"form"},Certificate:{style:"form"},TechnicalUserId:{style:"form"}}}}},responses:{201:{description:"Returns a view model of the created connector.",content:{"application/json":{schema:{type:"string",format:"uuid"}}}},400:{description:"Input parameter are invalid.",content:{"application/json":{schema:{type:"object",properties:{type:{type:"string",nullable:!0},title:{type:"string",nullable:!0},status:{type:"integer",format:"int32"},errors:{type:"object",additionalProperties:{type:"array",items:{type:"string"}},nullable:!0},errorId:{type:"string",nullable:!0}},additionalProperties:!1}}}},401:{description:"The User is unauthorized"},500:{description:"Internal Server Error"},503:{description:"Access to SD factory failed with the given status code.",content:{"application/json":{schema:{type:"object",properties:{type:{type:"string",nullable:!0},title:{type:"string",nullable:!0},status:{type:"integer",format:"int32"},errors:{type:"object",additionalProperties:{type:"array",items:{type:"string"}},nullable:!0},errorId:{type:"string",nullable:!0}},additionalProperties:!1}}}}},method:"post",path:"/api/administration/Connectors",security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",description:"JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",name:"Authorization",in:"header"}},info:{title:"Org.Eclipse.TractusX.Portal.Backend.Administration.Service",version:"v2"},postman:{name:"Creates a new connector with provided parameters from body, also registers connector at sd factory service. (Authorization required - Roles: add_connectors)",description:{content:"Example: POST: /api/administration/connectors/daps",type:"text/plain"},url:{path:["api","administration","Connectors"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"multipart/form-data"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"formdata",formdata:[]}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Digital Twin Kit/Software Development View/API EDC Discovery//org-eclipse-tractusx-portal-backend-administration-service",custom_edit_url:null},m=void 0,u={unversionedId:"kits/Digital Twin Kit/Software Development View/API EDC Discovery/creates-a-new-connector-with-provided-parameters-from-body-also-registers-connector-at-sd-factory-service-authorization-required-roles-add-connectors",id:"version-23.09/kits/Digital Twin Kit/Software Development View/API EDC Discovery/creates-a-new-connector-with-provided-parameters-from-body-also-registers-connector-at-sd-factory-service-authorization-required-roles-add-connectors",title:"Creates a new connector with provided parameters from body, also registers connector at sd factory service. (Authorization required - Roles: add_connectors)",description:"Example: POST: /api/administration/connectors/daps",source:"@site/docs-kits_versioned_docs/version-23.09/kits/Digital Twin Kit/Software Development View/API EDC Discovery/creates-a-new-connector-with-provided-parameters-from-body-also-registers-connector-at-sd-factory-service-authorization-required-roles-add-connectors.api.mdx",sourceDirName:"kits/Digital Twin Kit/Software Development View/API EDC Discovery",slug:"/kits/Digital Twin Kit/Software Development View/API EDC Discovery/creates-a-new-connector-with-provided-parameters-from-body-also-registers-connector-at-sd-factory-service-authorization-required-roles-add-connectors",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API EDC Discovery/creates-a-new-connector-with-provided-parameters-from-body-also-registers-connector-at-sd-factory-service-authorization-required-roles-add-connectors",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"creates-a-new-connector-with-provided-parameters-from-body-also-registers-connector-at-sd-factory-service-authorization-required-roles-add-connectors",title:"Creates a new connector with provided parameters from body, also registers connector at sd factory service. (Authorization required - Roles: add_connectors)",description:"Example: POST: /api/administration/connectors/daps",sidebar_label:"Creates a new connector with provided parameters from body, also registers connector at sd factory service. (Authorization required - Roles: add_connectors)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Connectors"],description:"Example: POST: /api/administration/connectors/daps",requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{Name:{type:"string",description:"Display name of the connector."},ConnectorUrl:{type:"string",description:"URL of the connector."},Location:{type:"string",description:"Connector's location country code."},Certificate:{type:"file",description:"The certificate for the daps call.",format:"binary"},TechnicalUserId:{type:"string",description:"Id of the technical user.",format:"uuid"}}},encoding:{Name:{style:"form"},ConnectorUrl:{style:"form"},Location:{style:"form"},Certificate:{style:"form"},TechnicalUserId:{style:"form"}}}}},responses:{201:{description:"Returns a view model of the created connector.",content:{"application/json":{schema:{type:"string",format:"uuid"}}}},400:{description:"Input parameter are invalid.",content:{"application/json":{schema:{type:"object",properties:{type:{type:"string",nullable:!0},title:{type:"string",nullable:!0},status:{type:"integer",format:"int32"},errors:{type:"object",additionalProperties:{type:"array",items:{type:"string"}},nullable:!0},errorId:{type:"string",nullable:!0}},additionalProperties:!1}}}},401:{description:"The User is unauthorized"},500:{description:"Internal Server Error"},503:{description:"Access to SD factory failed with the given status code.",content:{"application/json":{schema:{type:"object",properties:{type:{type:"string",nullable:!0},title:{type:"string",nullable:!0},status:{type:"integer",format:"int32"},errors:{type:"object",additionalProperties:{type:"array",items:{type:"string"}},nullable:!0},errorId:{type:"string",nullable:!0}},additionalProperties:!1}}}}},method:"post",path:"/api/administration/Connectors",security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",description:"JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",name:"Authorization",in:"header"}},info:{title:"Org.Eclipse.TractusX.Portal.Backend.Administration.Service",version:"v2"},postman:{name:"Creates a new connector with provided parameters from body, also registers connector at sd factory service. (Authorization required - Roles: add_connectors)",description:{content:"Example: POST: /api/administration/connectors/daps",type:"text/plain"},url:{path:["api","administration","Connectors"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"multipart/form-data"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"formdata",formdata:[]}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Digital Twin Kit/Software Development View/API EDC Discovery//org-eclipse-tractusx-portal-backend-administration-service",custom_edit_url:null},sidebar:"kits",previous:{title:"Define the endpoint to BPN discovery services and the EDC discovery service.",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API Discovery Finder/post-discovery-endpoint"},next:{title:"Retrieves company connector details for the given connetor id. (Authorization required - Roles: view_connectors)",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API EDC Discovery/get-company-connector-by-id-for-current-user-async"}},y={},h=[{value:"Creates a new connector with provided parameters from body, also registers connector at sd factory service. (Authorization required - Roles: add_connectors)",id:"creates-a-new-connector-with-provided-parameters-from-body-also-registers-connector-at-sd-factory-service-authorization-required---roles-add_connectors",level:2}],v={toc:h};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"creates-a-new-connector-with-provided-parameters-from-body-also-registers-connector-at-sd-factory-service-authorization-required---roles-add_connectors"},"Creates a new connector with provided parameters from body, also registers connector at sd factory service. (Authorization required - Roles: add_connectors)"),(0,i.kt)("p",null,"Example: POST: /api/administration/connectors/daps"),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"Name",required:!1,deprecated:void 0,schemaDescription:"Display name of the connector.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"ConnectorUrl",required:!1,deprecated:void 0,schemaDescription:"URL of the connector.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"Location",required:!1,deprecated:void 0,schemaDescription:"Connector's location country code.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"Certificate",required:!1,deprecated:void 0,schemaDescription:"The certificate for the daps call.",schemaName:"binary",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"TechnicalUserId",required:!1,deprecated:void 0,schemaDescription:"Id of the technical user.",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returns a view model of the created connector.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"))))))))))),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Input parameter are invalid.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"title",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"errors"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"items",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!1,name:"errorId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "type": "string",\n  "title": "string",\n  "status": 0,\n  "errors": {},\n  "errorId": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The User is unauthorized")),(0,i.kt)("div",null)),(0,i.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)),(0,i.kt)(d.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Access to SD factory failed with the given status code.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"title",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"errors"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"items",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!1,name:"errorId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "type": "string",\n  "title": "string",\n  "status": 0,\n  "errors": {},\n  "errorId": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);