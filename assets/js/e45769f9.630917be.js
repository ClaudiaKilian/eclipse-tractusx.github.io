"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[58353],{25403:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>S,toc:()=>u});var s=t(87462),a=(t(67294),t(3905)),o=t(26389),n=t(94891),r=(t(75190),t(47507)),l=t(24310),c=t(63303),p=(t(75035),t(85162));const m={id:"get-description",title:"Returns the self-describing information of a network resource (ServiceDescription)",description:"Returns the self-describing information of a network resource (ServiceDescription)",sidebar_label:"Returns the self-describing information of a network resource (ServiceDescription)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Description API"],operationId:"GetDescription",responses:{200:{description:"Requested Description",content:{"application/json":{schema:{type:"object",properties:{profiles:{minItems:1,type:"array",items:{type:"string",enum:["https://admin-shell.io/aas/API/3/0/AssetAdministrationShellServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/SubmodelServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelServiceSpecification/SSP-003","https://admin-shell.io/aas/API/3/0/AasxFileServerServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRegistryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRegistryServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelRegistryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/SubmodelRegistryServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/DiscoveryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRepositoryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRepositoryServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-003","https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-004","https://admin-shell.io/aas/API/3/0/ConceptDescriptionServiceSpecification/SSP-001"]}}},description:"The Description object enables servers to present their capabilities to the clients, in particular which profiles they implement. At least one defined profile is required. Additional, proprietary attributes might be included. Nevertheless, the server must not expect that a regular client understands them.",example:'{\n  "profiles": [\n    "https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRegistryServiceSpecification/SSP-002",\n    "https://admin-shell.io/aas/API/3/0/SubmodelRegistryServiceSpecification/SSP-002"\n  ]\n}'}}}},401:{description:"Unauthorized, e.g. the server refused the authorization attempt.",content:{"application/json":{schema:{type:"object",properties:{messages:{type:"array",items:{type:"object",properties:{code:{maxLength:32,minLength:1,type:"string"},correlationId:{maxLength:128,minLength:1,type:"string"},messageType:{type:"string",enum:["Undefined","Info","Warning","Error","Exception"]},text:{type:"string"},timestamp:{pattern:"^-?(([1-9][0-9][0-9][0-9]+)|(0[0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01]))T(((([01][0-9])|(2[0-3])):[0-5][0-9]:([0-5][0-9])(.[0-9]+)?)|24:00:00(.0+)?)(Z|+00:00|-00:00)$",type:"string"}}}}}}}}},403:{description:"Forbidden",content:{"application/json":{schema:{type:"object",properties:{messages:{type:"array",items:{type:"object",properties:{code:{maxLength:32,minLength:1,type:"string"},correlationId:{maxLength:128,minLength:1,type:"string"},messageType:{type:"string",enum:["Undefined","Info","Warning","Error","Exception"]},text:{type:"string"},timestamp:{pattern:"^-?(([1-9][0-9][0-9][0-9]+)|(0[0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01]))T(((([01][0-9])|(2[0-3])):[0-5][0-9]:([0-5][0-9])(.[0-9]+)?)|24:00:00(.0+)?)(Z|+00:00|-00:00)$",type:"string"}}}}}}}}}},"x-semanticIds":["https://admin-shell.io/aas/API/Descriptor/GetDescription/3/0"],description:"Returns the self-describing information of a network resource (ServiceDescription)",method:"get",path:"/description",servers:[{url:"{protocol}://{host_name}:{port}/api/{version_prefix}",variables:{protocol:{description:"Allows access through http and https (recommended)",default:"https",enum:["http","https"]},host_name:{description:"Hostname of server hosting the api",default:"admin-shell.io"},port:{description:"80 is default for http, 443 for https",default:"443",enum:["80","443"]},version_prefix:{default:"v3.0",enum:["v3.0"]}}}],info:{title:"DotAAS Part 2 | HTTP/REST | Submodel Service Specification",description:"The Value Profile of the Submodel Service Specification as part of the [Specification of the Asset Administration Shell: Part 2](http://industrialdigitaltwin.org/en/content-hub).  \nPublisher: Industrial Digital Twin Association (IDTA) April 2023",contact:{name:"Industrial Digital Twin Association (IDTA)",email:"info@idtwin.org"},license:{name:"CC BY 4.0",url:"https://creativecommons.org/licenses/by/4.0/"},version:"V3.0.1_SSP-003"},postman:{name:"Returns the self-describing information of a network resource (ServiceDescription)",description:{type:"text/plain"},url:{path:["description"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/Submodel//dotaas-part-2-http-rest-submodel-service-specification",custom_edit_url:null},d=void 0,S={unversionedId:"kits/Digital Twin Kit/Software Development View/API Submodel/get-description",id:"version-24.05/kits/Digital Twin Kit/Software Development View/API Submodel/get-description",title:"Returns the self-describing information of a network resource (ServiceDescription)",description:"Returns the self-describing information of a network resource (ServiceDescription)",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Digital Twin Kit/Software Development View/API Submodel/get-description.api.mdx",sourceDirName:"kits/Digital Twin Kit/Software Development View/API Submodel",slug:"/kits/Digital Twin Kit/Software Development View/API Submodel/get-description",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API Submodel/get-description",draft:!1,editUrl:null,tags:[],version:"24.05",frontMatter:{id:"get-description",title:"Returns the self-describing information of a network resource (ServiceDescription)",description:"Returns the self-describing information of a network resource (ServiceDescription)",sidebar_label:"Returns the self-describing information of a network resource (ServiceDescription)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Description API"],operationId:"GetDescription",responses:{200:{description:"Requested Description",content:{"application/json":{schema:{type:"object",properties:{profiles:{minItems:1,type:"array",items:{type:"string",enum:["https://admin-shell.io/aas/API/3/0/AssetAdministrationShellServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/SubmodelServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelServiceSpecification/SSP-003","https://admin-shell.io/aas/API/3/0/AasxFileServerServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRegistryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRegistryServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelRegistryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/SubmodelRegistryServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/DiscoveryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRepositoryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRepositoryServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-001","https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-002","https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-003","https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-004","https://admin-shell.io/aas/API/3/0/ConceptDescriptionServiceSpecification/SSP-001"]}}},description:"The Description object enables servers to present their capabilities to the clients, in particular which profiles they implement. At least one defined profile is required. Additional, proprietary attributes might be included. Nevertheless, the server must not expect that a regular client understands them.",example:'{\n  "profiles": [\n    "https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRegistryServiceSpecification/SSP-002",\n    "https://admin-shell.io/aas/API/3/0/SubmodelRegistryServiceSpecification/SSP-002"\n  ]\n}'}}}},401:{description:"Unauthorized, e.g. the server refused the authorization attempt.",content:{"application/json":{schema:{type:"object",properties:{messages:{type:"array",items:{type:"object",properties:{code:{maxLength:32,minLength:1,type:"string"},correlationId:{maxLength:128,minLength:1,type:"string"},messageType:{type:"string",enum:["Undefined","Info","Warning","Error","Exception"]},text:{type:"string"},timestamp:{pattern:"^-?(([1-9][0-9][0-9][0-9]+)|(0[0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01]))T(((([01][0-9])|(2[0-3])):[0-5][0-9]:([0-5][0-9])(\\.[0-9]+)?)|24:00:00(\\.0+)?)(Z|\\+00:00|-00:00)$",type:"string"}}}}}}}}},403:{description:"Forbidden",content:{"application/json":{schema:{type:"object",properties:{messages:{type:"array",items:{type:"object",properties:{code:{maxLength:32,minLength:1,type:"string"},correlationId:{maxLength:128,minLength:1,type:"string"},messageType:{type:"string",enum:["Undefined","Info","Warning","Error","Exception"]},text:{type:"string"},timestamp:{pattern:"^-?(([1-9][0-9][0-9][0-9]+)|(0[0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01]))T(((([01][0-9])|(2[0-3])):[0-5][0-9]:([0-5][0-9])(\\.[0-9]+)?)|24:00:00(\\.0+)?)(Z|\\+00:00|-00:00)$",type:"string"}}}}}}}}}},"x-semanticIds":["https://admin-shell.io/aas/API/Descriptor/GetDescription/3/0"],description:"Returns the self-describing information of a network resource (ServiceDescription)",method:"get",path:"/description",servers:[{url:"{protocol}://{host_name}:{port}/api/{version_prefix}",variables:{protocol:{description:"Allows access through http and https (recommended)",default:"https",enum:["http","https"]},host_name:{description:"Hostname of server hosting the api",default:"admin-shell.io"},port:{description:"80 is default for http, 443 for https",default:"443",enum:["80","443"]},version_prefix:{default:"v3.0",enum:["v3.0"]}}}],info:{title:"DotAAS Part 2 | HTTP/REST | Submodel Service Specification",description:"The Value Profile of the Submodel Service Specification as part of the [Specification of the Asset Administration Shell: Part 2](http://industrialdigitaltwin.org/en/content-hub).  \nPublisher: Industrial Digital Twin Association (IDTA) April 2023",contact:{name:"Industrial Digital Twin Association (IDTA)",email:"info@idtwin.org"},license:{name:"CC BY 4.0",url:"https://creativecommons.org/licenses/by/4.0/"},version:"V3.0.1_SSP-003"},postman:{name:"Returns the self-describing information of a network resource (ServiceDescription)",description:{type:"text/plain"},url:{path:["description"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/Submodel//dotaas-part-2-http-rest-submodel-service-specification",custom_edit_url:null},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API Submodel/dotaas-part-2-http-rest-submodel-service-specification"},next:{title:"Returns the Submodel in the ValueOnly representation",permalink:"/docs-kits/kits/Digital Twin Kit/Software Development View/API Submodel/get-submodel-value-only"}},h={},u=[{value:"Returns the self-describing information of a network resource (ServiceDescription)",id:"returns-the-self-describing-information-of-a-network-resource-servicedescription",level:2}],f={toc:u};function v(e){let{components:i,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},f,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"returns-the-self-describing-information-of-a-network-resource-servicedescription"},"Returns the self-describing information of a network resource (ServiceDescription)"),(0,a.kt)("p",null,"Returns the self-describing information of a network resource (ServiceDescription)"),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Requested Description")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"profiles",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:"**Possible values:** [`https://admin-shell.io/aas/API/3/0/AssetAdministrationShellServiceSpecification/SSP-001`, `https://admin-shell.io/aas/API/3/0/AssetAdministrationShellServiceSpecification/SSP-002`, `https://admin-shell.io/aas/API/3/0/SubmodelServiceSpecification/SSP-001`, `https://admin-shell.io/aas/API/3/0/SubmodelServiceSpecification/SSP-002`, `https://admin-shell.io/aas/API/3/0/SubmodelServiceSpecification/SSP-003`, `https://admin-shell.io/aas/API/3/0/AasxFileServerServiceSpecification/SSP-001`, `https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRegistryServiceSpecification/SSP-001`, `https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRegistryServiceSpecification/SSP-002`, `https://admin-shell.io/aas/API/3/0/SubmodelRegistryServiceSpecification/SSP-001`, `https://admin-shell.io/aas/API/3/0/SubmodelRegistryServiceSpecification/SSP-002`, `https://admin-shell.io/aas/API/3/0/DiscoveryServiceSpecification/SSP-001`, `https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRepositoryServiceSpecification/SSP-001`, `https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRepositoryServiceSpecification/SSP-002`, `https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-001`, `https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-002`, `https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-003`, `https://admin-shell.io/aas/API/3/0/SubmodelRepositoryServiceSpecification/SSP-004`, `https://admin-shell.io/aas/API/3/0/ConceptDescriptionServiceSpecification/SSP-001`], `>= 1`",defaultValue:void 0,mdxType:"SchemaItem"}))))))))),(0,a.kt)(p.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Unauthorized, e.g. the server refused the authorization attempt.")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"messages"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"correlationId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"messageType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Undefined`, `Info`, `Warning`, `Error`, `Exception`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^-?(([1-9][0-9][0-9][0-9]+)|(0[0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01]))T(((([01][0-9])|(2[0-3])):[0-5][0-9]:([0-5][0-9])(\\.[0-9]+)?)|24:00:00(\\.0+)?)(Z|\\+00:00|-00:00)$`",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(r.Z,{responseExample:'{\n  "messages": [\n    {\n      "code": "string",\n      "correlationId": "string",\n      "messageType": "Undefined",\n      "text": "string",\n      "timestamp": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(p.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Forbidden")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"messages"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"correlationId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"messageType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Undefined`, `Info`, `Warning`, `Error`, `Exception`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^-?(([1-9][0-9][0-9][0-9]+)|(0[0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01]))T(((([01][0-9])|(2[0-3])):[0-5][0-9]:([0-5][0-9])(\\.[0-9]+)?)|24:00:00(\\.0+)?)(Z|\\+00:00|-00:00)$`",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(r.Z,{responseExample:'{\n  "messages": [\n    {\n      "code": "string",\n      "correlationId": "string",\n      "messageType": "Undefined",\n      "text": "string",\n      "timestamp": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);