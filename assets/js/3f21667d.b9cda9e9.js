"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[69098],{21246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>h,toc:()=>v});var s=a(87462),n=(a(67294),a(3905)),i=a(26389),o=a(94891),r=a(75190),l=a(47507),d=(a(24310),a(63303)),c=(a(75035),a(85162));const p={id:"update-asset",title:"Update an asset with the given ID",description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",sidebar_label:"Update an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",operationId:"updateAsset",parameters:[{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],requestBody:{content:{"application/json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"Asset was updated successfully",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request body was malformed, e.g. id was null"},404:{description:"Asset could not be updated, because it does not exist."}},method:"put",path:"/v2/assets",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:{},info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Update an asset with the given ID",description:{content:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",type:"text/plain"},url:{path:["v2","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},u=void 0,h={unversionedId:"kits/Data Governance Kit/resources/MDX Files/update-asset",id:"version-24.03/kits/Data Governance Kit/resources/MDX Files/update-asset",title:"Update an asset with the given ID",description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Data Governance Kit/resources/MDX Files/update-asset.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/update-asset",permalink:"/docs-kits/24.03/kits/Data Governance Kit/resources/MDX Files/update-asset",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"update-asset",title:"Update an asset with the given ID",description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",sidebar_label:"Update an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",operationId:"updateAsset",parameters:[{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],requestBody:{content:{"application/json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"Asset was updated successfully",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request body was malformed, e.g. id was null"},404:{description:"Asset could not be updated, because it does not exist."}},method:"put",path:"/v2/assets",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:{},info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Update an asset with the given ID",description:{content:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",type:"text/plain"},url:{path:["v2","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Update an asset with the given ID",permalink:"/docs-kits/24.03/kits/Data Governance Kit/resources/MDX Files/update-asset-1"},next:{title:"Updates a connector by id",permalink:"/docs-kits/24.03/kits/Data Governance Kit/resources/MDX Files/update-connector-info"}},m={},v=[{value:"Update an asset with the given ID",id:"update-an-asset-with-the-given-id",level:2}],f={toc:v};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"update-an-asset-with-the-given-id"},"Update an asset with the given ID"),(0,n.kt)("p",null,"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}},mdxType:"ParamsItem"})))),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object"))))))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Asset was updated successfully")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request body was malformed, e.g. id was null")),(0,n.kt)("div",null)),(0,n.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Asset could not be updated, because it does not exist.")),(0,n.kt)("div",null)))))}k.isMDXComponent=!0}}]);