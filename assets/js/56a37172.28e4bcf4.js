"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[79744],{52418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>k});var l=a(87462),i=(a(67294),a(3905)),n=a(26389),s=a(94891),p=(a(75190),a(47507)),o=a(24310),m=a(63303),r=(a(75035),a(85162));const d={id:"find",title:"find",description:"find",sidebar_label:"find",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Dataplane Selector"],operationId:"find",requestBody:{content:{"application/json":{schema:{type:"object",properties:{destination:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}},example:null,title:"DataAddress"},source:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}},example:null,title:"DataAddress"},strategy:{type:"string",example:null}},example:null,title:"SelectionRequest"}}}},responses:{default:{description:"default response",content:{"application/json":{schema:{type:"object",properties:{allowedDestTypes:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},allowedSourceTypes:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},id:{type:"string",example:null},lastActive:{type:"integer",format:"int64",example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null},turnCount:{type:"integer",format:"int32",example:null},url:{type:"string",format:"url",example:null}},example:null,title:"DataPlaneInstance"}}}}},description:"find",method:"post",path:"/instances/select",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"find",description:{type:"text/plain"},url:{path:["instances","select"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},c=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/find",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/find",title:"find",description:"find",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/find.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/find",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/find",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"find",title:"find",description:"find",sidebar_label:"find",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Dataplane Selector"],operationId:"find",requestBody:{content:{"application/json":{schema:{type:"object",properties:{destination:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}},example:null,title:"DataAddress"},source:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}},example:null,title:"DataAddress"},strategy:{type:"string",example:null}},example:null,title:"SelectionRequest"}}}},responses:{default:{description:"default response",content:{"application/json":{schema:{type:"object",properties:{allowedDestTypes:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},allowedSourceTypes:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},id:{type:"string",example:null},lastActive:{type:"integer",format:"int64",example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null},turnCount:{type:"integer",format:"int32",example:null},url:{type:"string",format:"url",example:null}},example:null,title:"DataPlaneInstance"}}}}},description:"find",method:"post",path:"/instances/select",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"find",description:{type:"text/plain"},url:{path:["instances","select"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"deprovisionTransferProcess",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/deprovision-transfer-process"},next:{title:"getAgreementById",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/get-agreement-by-id"}},y={},k=[{value:"find",id:"find",level:2}],x={toc:k};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"find"},"find"),(0,i.kt)("p",null,"find"),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(r.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"destination"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"source"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,i.kt)(o.Z,{collapsible:!1,name:"strategy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(r.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"default response")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(r.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"allowedDestTypes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"allowedSourceTypes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"lastActive",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:null},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(o.Z,{collapsible:!1,name:"turnCount",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",example:null},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"url",required:!1,schemaName:"url",qualifierMessage:void 0,schema:{type:"string",format:"url",example:null},mdxType:"SchemaItem"})))),(0,i.kt)(r.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);