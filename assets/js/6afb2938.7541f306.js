"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[99001],{98410:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var a=i(87462),o=(i(67294),i(3905)),n=i(26389),s=i(94891),d=(i(75190),i(47507),i(24310)),l=(i(63303),i(75035),i(85162));const c={id:"update-quality-notification",title:"updateQualityNotification",description:"Updates a quality notification",sidebar_label:"updateQualityNotification",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Quality notification"],description:"Updates a quality notification",operationId:"updateQualityNotification",requestBody:{content:{"application/json":{schema:{required:["header"],type:"object",properties:{header:{type:"object",required:["notificationId","senderBPN","senderAddress","recipientBPN","status","messageId"],properties:{notificationId:{type:"string",format:"uuid",example:"a7954026-3aff-4b6c-92bf-04671ef2fa46",description:"A UUIDv4 to uniquely identify a quality notification. Actually, this value cannot be updated. Rather, it is used to do a plausibility check."},senderBPN:{type:"string",example:"BPNL00000003BW3S",description:"The business partner number (BPN) of the sender. Actually, this value cannot be updated. Rather, it is used to do a plausibility check."},senderAddress:{type:"string",format:"uri",example:"https://edc.company-xyz.io/BPNL00000003BW3S",description:"The Eclipse Dataspace Connector (EDC) URL of the sender. Actually, this value cannot be updated. Rather, it is used to do a plausibility check."},recipientBPN:{type:"string",example:"BPNL00000003BV4H",description:"The business partner number (BPN) of the receiver. Actually, this value cannot be updated. Rather, it is used to do a plausibility check."},severity:{type:"string",enum:["MINOR","MAJOR","CRITICAL","LIFE-THREATENING"],example:"CRITICAL",description:"The severity of the quality notification describes its criticality."},status:{type:"string",enum:["CREATED","SENT","RECEIVED","ACKNOWLEDGED","ACCEPTED","DECLINED","CLOSED"],example:"SENT",description:"The status of the quality notification."},targetDate:{type:"string",format:"date-time",example:"2022-07-28T14:41:13.214Z",description:"The date and time when a processing of the notification is expected by the sender."},messageId:{type:"string",format:"uuid",example:"c2801472-5f87-41a7-9a25-b0939c4e0dff",description:"A UUIDv4 to uniquely identify an individual quality notification message. In case of an update of a notification the messageId must be a newly generated UUIDv4. It must not be an existing messageId."}}},content:{type:"object",properties:{information:{type:"string",maxLength:1e3,example:"Gear boxes loose oil while driving."}}}}}}}},responses:{200:{description:"Quality notification was updated successfully"},400:{description:"Request body was malformed"},401:{description:"Not authorized"},403:{description:"Forbidden"},404:{description:"Could not update the quality notification, because a quality notification with that notificationId does not exist"},405:{description:"Method not allowed"},422:{description:"Could not update the quality notification even though the request is syntactically correct. The quality notification update is not accepted, because of semantic reasons (e.g., status cannot be changed)."}},method:"post",path:"/qualitynotifications/update",servers:[{url:"/"}],jsonRequestBodyExample:{header:{notificationId:"a7954026-3aff-4b6c-92bf-04671ef2fa46",senderBPN:"BPNL00000003BW3S",senderAddress:"https://edc.company-xyz.io/BPNL00000003BW3S",recipientBPN:"BPNL00000003BV4H",severity:"CRITICAL",status:"SENT",targetDate:"2022-07-28T14:41:13.214Z",messageId:"c2801472-5f87-41a7-9a25-b0939c4e0dff"},content:{information:"Gear boxes loose oil while driving."}},info:{title:"Notification API",description:"Notification API",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"1.1.0"},postman:{name:"update Quality Notification",description:{content:"Updates a quality notification",type:"text/plain"},url:{path:["qualitynotifications","update"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/notification-api",custom_edit_url:null},r=void 0,u={unversionedId:"kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/update-quality-notification",id:"version-24.03/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/update-quality-notification",title:"updateQualityNotification",description:"Updates a quality notification",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/update-quality-notification.api.mdx",sourceDirName:"kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory",slug:"/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/update-quality-notification",permalink:"/docs-kits/24.03/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/update-quality-notification",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"update-quality-notification",title:"updateQualityNotification",description:"Updates a quality notification",sidebar_label:"updateQualityNotification",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Quality notification"],description:"Updates a quality notification",operationId:"updateQualityNotification",requestBody:{content:{"application/json":{schema:{required:["header"],type:"object",properties:{header:{type:"object",required:["notificationId","senderBPN","senderAddress","recipientBPN","status","messageId"],properties:{notificationId:{type:"string",format:"uuid",example:"a7954026-3aff-4b6c-92bf-04671ef2fa46",description:"A UUIDv4 to uniquely identify a quality notification. Actually, this value cannot be updated. Rather, it is used to do a plausibility check."},senderBPN:{type:"string",example:"BPNL00000003BW3S",description:"The business partner number (BPN) of the sender. Actually, this value cannot be updated. Rather, it is used to do a plausibility check."},senderAddress:{type:"string",format:"uri",example:"https://edc.company-xyz.io/BPNL00000003BW3S",description:"The Eclipse Dataspace Connector (EDC) URL of the sender. Actually, this value cannot be updated. Rather, it is used to do a plausibility check."},recipientBPN:{type:"string",example:"BPNL00000003BV4H",description:"The business partner number (BPN) of the receiver. Actually, this value cannot be updated. Rather, it is used to do a plausibility check."},severity:{type:"string",enum:["MINOR","MAJOR","CRITICAL","LIFE-THREATENING"],example:"CRITICAL",description:"The severity of the quality notification describes its criticality."},status:{type:"string",enum:["CREATED","SENT","RECEIVED","ACKNOWLEDGED","ACCEPTED","DECLINED","CLOSED"],example:"SENT",description:"The status of the quality notification."},targetDate:{type:"string",format:"date-time",example:"2022-07-28T14:41:13.214Z",description:"The date and time when a processing of the notification is expected by the sender."},messageId:{type:"string",format:"uuid",example:"c2801472-5f87-41a7-9a25-b0939c4e0dff",description:"A UUIDv4 to uniquely identify an individual quality notification message. In case of an update of a notification the messageId must be a newly generated UUIDv4. It must not be an existing messageId."}}},content:{type:"object",properties:{information:{type:"string",maxLength:1e3,example:"Gear boxes loose oil while driving."}}}}}}}},responses:{200:{description:"Quality notification was updated successfully"},400:{description:"Request body was malformed"},401:{description:"Not authorized"},403:{description:"Forbidden"},404:{description:"Could not update the quality notification, because a quality notification with that notificationId does not exist"},405:{description:"Method not allowed"},422:{description:"Could not update the quality notification even though the request is syntactically correct. The quality notification update is not accepted, because of semantic reasons (e.g., status cannot be changed)."}},method:"post",path:"/qualitynotifications/update",servers:[{url:"/"}],jsonRequestBodyExample:{header:{notificationId:"a7954026-3aff-4b6c-92bf-04671ef2fa46",senderBPN:"BPNL00000003BW3S",senderAddress:"https://edc.company-xyz.io/BPNL00000003BW3S",recipientBPN:"BPNL00000003BV4H",severity:"CRITICAL",status:"SENT",targetDate:"2022-07-28T14:41:13.214Z",messageId:"c2801472-5f87-41a7-9a25-b0939c4e0dff"},content:{information:"Gear boxes loose oil while driving."}},info:{title:"Notification API",description:"Notification API",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"1.1.0"},postman:{name:"update Quality Notification",description:{content:"Updates a quality notification",type:"text/plain"},url:{path:["qualitynotifications","update"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/notification-api",custom_edit_url:null},sidebar:"kits",previous:{title:"receiveQualityNotification",permalink:"/docs-kits/24.03/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/receive-quality-notification"},next:{title:"Introduction",permalink:"/docs-kits/24.03/kits/Traceability Kit/Software Development View/Notification API/v1.2.0 - optional/notification-api"}},p={},m=[{value:"updateQualityNotification",id:"updatequalitynotification",level:2}],y={toc:m};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"updatequalitynotification"},"updateQualityNotification"),(0,o.kt)("p",null,"Updates a quality notification"),(0,o.kt)(s.Z,{mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"header"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"notificationId",required:!0,deprecated:void 0,schemaDescription:"A UUIDv4 to uniquely identify a quality notification. Actually, this value cannot be updated. Rather, it is used to do a plausibility check.",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"senderBPN",required:!0,deprecated:void 0,schemaDescription:"The business partner number (BPN) of the sender. Actually, this value cannot be updated. Rather, it is used to do a plausibility check.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"senderAddress",required:!0,deprecated:void 0,schemaDescription:"The Eclipse Dataspace Connector (EDC) URL of the sender. Actually, this value cannot be updated. Rather, it is used to do a plausibility check.",schemaName:"uri",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"recipientBPN",required:!0,deprecated:void 0,schemaDescription:"The business partner number (BPN) of the receiver. Actually, this value cannot be updated. Rather, it is used to do a plausibility check.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"severity",required:!1,deprecated:void 0,schemaDescription:"The severity of the quality notification describes its criticality.",schemaName:"string",qualifierMessage:"**Possible values:** [`MINOR`, `MAJOR`, `CRITICAL`, `LIFE-THREATENING`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"status",required:!0,deprecated:void 0,schemaDescription:"The status of the quality notification.",schemaName:"string",qualifierMessage:"**Possible values:** [`CREATED`, `SENT`, `RECEIVED`, `ACKNOWLEDGED`, `ACCEPTED`, `DECLINED`, `CLOSED`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"targetDate",required:!1,deprecated:void 0,schemaDescription:"The date and time when a processing of the notification is expected by the sender.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"messageId",required:!0,deprecated:void 0,schemaDescription:"A UUIDv4 to uniquely identify an individual quality notification message. In case of an update of a notification the messageId must be a newly generated UUIDv4. It must not be an existing messageId.",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"content"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"information",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 1000 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,o.kt)("div",null,(0,o.kt)(n.Z,{mdxType:"ApiTabs"},(0,o.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Quality notification was updated successfully")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Request body was malformed")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Not authorized")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Forbidden")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Could not update the quality notification, because a quality notification with that notificationId does not exist")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Method not allowed")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Could not update the quality notification even though the request is syntactically correct. The quality notification update is not accepted, because of semantic reasons (e.g., status cannot be changed).")),(0,o.kt)("div",null)))))}f.isMDXComponent=!0}}]);