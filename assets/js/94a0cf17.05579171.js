"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[71843],{42201:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>y,toc:()=>h});var r=o(87462),s=(o(67294),o(3905)),n=o(26389),c=o(94891),a=o(75190),i=o(47507),l=o(24310),d=o(63303),p=(o(75035),o(85162));const u={id:"get-resource-connectors-by-connector-id",title:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",description:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",sidebar_label:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ResourceConnector API"],operationId:"getResourceConnectorsByConnectorId",parameters:[{name:"resourceType",in:"path",required:!0,schema:{type:"string"}},{name:"connectorId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"The resource-connector pair",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{resource_id:{type:"string"},resource_revision_id:{type:"string"},resource_type:{type:"string"},connector_id:{type:"string"},connector_url:{type:"string"},sync_status:{type:"string"},connector_name:{type:"string"}}}}}}}}}}},404:{description:"No resource-connector rows found by connectorId",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",method:"get",path:"/resource-connector/connector/{resourceType}/{connectorId}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",description:{type:"text/plain"},url:{path:["resource-connector","connector",":resourceType",":connectorId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"resourceType"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"connectorId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},m=void 0,y={unversionedId:"kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-connector-id",id:"version-24.05/kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-connector-id",title:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",description:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-connector-id.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-connector-id",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-connector-id",draft:!1,editUrl:null,tags:[],version:"24.05",frontMatter:{id:"get-resource-connectors-by-connector-id",title:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",description:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",sidebar_label:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ResourceConnector API"],operationId:"getResourceConnectorsByConnectorId",parameters:[{name:"resourceType",in:"path",required:!0,schema:{type:"string"}},{name:"connectorId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"The resource-connector pair",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{resource_id:{type:"string"},resource_revision_id:{type:"string"},resource_type:{type:"string"},connector_id:{type:"string"},connector_url:{type:"string"},sync_status:{type:"string"},connector_name:{type:"string"}}}}}}}}}}},404:{description:"No resource-connector rows found by connectorId",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",method:"get",path:"/resource-connector/connector/{resourceType}/{connectorId}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",description:{type:"text/plain"},url:{path:["resource-connector","connector",":resourceType",":connectorId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"resourceType"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"connectorId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Gets a resource publication basis on given resourceId",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-publication-by-resource-id"},next:{title:"Gets all resource-connector rows for resourceId to find out where a resource has been published",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-resource-connectors-by-resource-data"}},g={},h=[{value:"Gets all resource-connector rows for connectorId to find out all resources published to a connector",id:"gets-all-resource-connector-rows-for-connectorid-to-find-out-all-resources-published-to-a-connector",level:2}],v={toc:h};function k(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"gets-all-resource-connector-rows-for-connectorid-to-find-out-all-resources-published-to-a-connector"},"Gets all resource-connector rows for connectorId to find out all resources published to a connector"),(0,s.kt)("p",null,"Gets all resource-connector rows for connectorId to find out all resources published to a connector"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(a.Z,{className:"paramsItem",param:{name:"resourceType",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(a.Z,{className:"paramsItem",param:{name:"connectorId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The resource-connector pair")),(0,s.kt)("div",null,(0,s.kt)(c.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"result"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"items"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"resource_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"resource_revision_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"resource_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"connector_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"connector_url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"sync_status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"connector_name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": {\n    "items": [\n      {\n        "resource_id": "string",\n        "resource_revision_id": "string",\n        "resource_type": "string",\n        "connector_id": "string",\n        "connector_url": "string",\n        "sync_status": "string",\n        "connector_name": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"No resource-connector rows found by connectorId")),(0,s.kt)("div",null,(0,s.kt)(c.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);