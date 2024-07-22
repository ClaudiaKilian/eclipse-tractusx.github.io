"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[30977],{22242:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>m});var a=i(87462),n=(i(67294),i(3905)),r=i(26389),s=(i(94891),i(75190)),p=(i(47507),i(24310),i(63303),i(75035),i(85162));const c={id:"get-pcf",title:"get_pcf",description:"get_pcf",sidebar_label:"get_pcf",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_pcf",parameters:[{name:"productId",description:"ID of the product/materiual the PCF is requested for",example:"SomeProductID",in:"path",required:!0,schema:{type:"string"}},{name:"BPN",description:"The caller's Catena-X BusinessPartnerNumber",example:"BPN9354218404L",in:"query",required:!0,schema:{type:"string"}},{name:"requestId",description:"ID identifying the call (will be referenced in corresponding PCF response)",example:"X374e9453K",in:"query",required:!0,schema:{type:"string"}},{name:"message",in:"query",required:!1,description:"URL encoded, max 250 chars",example:"No%20offset%20included%2C%20please%21",schema:{type:"string"}}],responses:{202:{description:"PCF was accepted. PCF will be sent later via to POST endpoint."}},description:"get_pcf",method:"get",path:"/productIds/{productId}",info:{title:"Catena-X-pcf-request-endpoint",version:"1.0.0"},postman:{name:"get pcf",description:{type:"text/plain"},url:{path:["productIds",":productId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The caller's Catena-X BusinessPartnerNumber",type:"text/plain"},key:"BPN",value:""},{disabled:!1,description:{content:"(Required) ID identifying the call (will be referenced in corresponding PCF response)",type:"text/plain"},key:"requestId",value:""},{disabled:!1,description:{content:"URL encoded, max 250 chars",type:"text/plain"},key:"message",value:""}],variable:[{disabled:!1,description:{content:"(Required) ID of the product/materiual the PCF is requested for",type:"text/plain"},type:"any",value:"",key:"productId"}]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api//catena-x-pcf-request-endpoint",custom_edit_url:null},d=void 0,o={unversionedId:"kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf",id:"version-24.03/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf",title:"get_pcf",description:"get_pcf",source:"@site/docs-kits_versioned_docs/version-24.03/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf.api.mdx",sourceDirName:"kits/PCF Exchange Kit/Software Development View/pcf-exchange-api",slug:"/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf",permalink:"/docs-kits/24.03/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/get-pcf",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"get-pcf",title:"get_pcf",description:"get_pcf",sidebar_label:"get_pcf",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_pcf",parameters:[{name:"productId",description:"ID of the product/materiual the PCF is requested for",example:"SomeProductID",in:"path",required:!0,schema:{type:"string"}},{name:"BPN",description:"The caller's Catena-X BusinessPartnerNumber",example:"BPN9354218404L",in:"query",required:!0,schema:{type:"string"}},{name:"requestId",description:"ID identifying the call (will be referenced in corresponding PCF response)",example:"X374e9453K",in:"query",required:!0,schema:{type:"string"}},{name:"message",in:"query",required:!1,description:"URL encoded, max 250 chars",example:"No%20offset%20included%2C%20please%21",schema:{type:"string"}}],responses:{202:{description:"PCF was accepted. PCF will be sent later via to POST endpoint."}},description:"get_pcf",method:"get",path:"/productIds/{productId}",info:{title:"Catena-X-pcf-request-endpoint",version:"1.0.0"},postman:{name:"get pcf",description:{type:"text/plain"},url:{path:["productIds",":productId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The caller's Catena-X BusinessPartnerNumber",type:"text/plain"},key:"BPN",value:""},{disabled:!1,description:{content:"(Required) ID identifying the call (will be referenced in corresponding PCF response)",type:"text/plain"},key:"requestId",value:""},{disabled:!1,description:{content:"URL encoded, max 250 chars",type:"text/plain"},key:"message",value:""}],variable:[{disabled:!1,description:{content:"(Required) ID of the product/materiual the PCF is requested for",type:"text/plain"},type:"any",value:"",key:"productId"}]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api//catena-x-pcf-request-endpoint",custom_edit_url:null},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/24.03/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/catena-x-pcf-request-endpoint"},next:{title:"set_pcf",permalink:"/docs-kits/24.03/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/set-pcf"}},l={},m=[{value:"get_pcf",id:"get_pcf",level:2}],u={toc:m};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get_pcf"},"get_pcf"),(0,n.kt)("p",null,"get_pcf"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"productId",description:"ID of the product/materiual the PCF is requested for",example:"SomeProductID",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"BPN",description:"The caller's Catena-X BusinessPartnerNumber",example:"BPN9354218404L",in:"query",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"requestId",description:"ID identifying the call (will be referenced in corresponding PCF response)",example:"X374e9453K",in:"query",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"message",in:"query",required:!1,description:"URL encoded, max 250 chars",example:"No%20offset%20included%2C%20please%21",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"PCF was accepted. PCF will be sent later via to POST endpoint.")),(0,n.kt)("div",null)))))}f.isMDXComponent=!0}}]);