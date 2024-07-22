"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[13814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return n?i.createElement(f,r(r({ref:t},m),{},{components:n})):i.createElement(f,r({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>x,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var i=n(87462),a=n(67294),o=n(3905);function r(e){let{title:t,schedule:n,description:i,contact:o,sessionLink:r,meetingLink:f,additionalLinks:h=[]}=e;return a.createElement("section",{style:l,id:t},a.createElement("div",{style:m},a.createElement("h2",{className:"anchor",style:d},t,a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to open meeting"})),a.createElement("div",{style:u},n)),a.createElement("div",{style:p},a.createElement("p",null,i),a.createElement("ul",null,a.createElement("li",{style:c},"Contact:"),a.createElement("li",{style:s},a.createElement("a",{href:"mailto:"+o},o))),a.createElement("ul",null,a.createElement("li",{style:c},"Participation opportunities:"),r&&a.createElement("li",{style:s},a.createElement("a",{href:r},"Join Meeting")),f&&a.createElement("li",{style:s},a.createElement("a",{href:f},"Download calendar file"))),h.length>0&&a.createElement("ul",null,a.createElement("li",{style:c},"Additional links:"),h.map(((e,t)=>{const{url:n,title:i}=e;return a.createElement("li",{key:`${t}${n}`,style:s},a.createElement("a",{href:n},i))})))))}const s={fontWeight:"400",fontSize:"14px",lineHeight:"18px",color:"#faa023",listStyleImage:'url("/img/product_link_bullet.png")'},c={fontWeight:"400",fontSize:"14px",lineHeight:"18px",listStyle:"none"},l={display:"flex",width:"100%",padding:"1rem 0 0.5rem"},m={width:"33%",margin:"auto 0",padding:"2rem 0 0.5rem",borderRight:"2px solid #faa023"},d={fontWeight:"700",fontSize:"20px",lineHeight:"25px"},u={fontWeight:"400",fontSize:"12px",lineHeight:"16px",color:"#a5a5a5"},p={width:"67%",margin:"auto 0",padding:"0.5rem 1.5rem"},f={},h="Open Meetings",g={unversionedId:"open-meetings",id:"open-meetings",title:"Open Meetings",description:"This page hosts information about all of our open Tractus-X meetings.",source:"@site/community/open-meetings.mdx",sourceDirName:".",slug:"/open-meetings",permalink:"/community/open-meetings",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/community/community/open-meetings.mdx",tags:[],version:"current",frontMatter:{},sidebar:"community",previous:{title:"Intro",permalink:"/community/intro"},next:{title:"What is a SIG?",permalink:"/community/sigs/intro"}},y={},b=[{value:"Regular meetings",id:"regular-meetings",level:2},{value:"One-time meetings",id:"one-time-meetings",level:2}],k={toc:b};function x(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"open-meetings"},"Open Meetings"),(0,o.kt)("p",null,"This page hosts information about all of our open Tractus-X meetings.\nThese are dedicated sync meetings for specific products, as well as open planning sessions."),(0,o.kt)("h2",{id:"regular-meetings"},"Regular meetings"),(0,o.kt)(r,{title:"EDC Weekly | Extended",schedule:"Every Tuesday from 10:30 am to 11:00 am CEST",description:"Open house meeting to support with anything EDC related. You have questions about EDC, problems running/ configuring EDC in your environment or want to know what\xb4s next in EDC and when to expect? This is the place to ask all these questions.",contact:"lars.blaumeiser@cofinity-x.com",sessionLink:"https://eclipse.zoom.us/j/85945828202?pwd=YODkCen20BOQV9WNJEeNFM8zaOlxo9.1",meetingLink:"/meetings/edc-weekly-extended.ics",mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"Community Office Hour",schedule:"Every Friday effective 16. Feb 2024 until 31. Dec 2024 from 01:05 pm to 02:00 pm CEST",description:"Open hour meeting for all interests. The goal of the meeting is to inform and share information about different topics.",contact:"stephan.bauer@catena-x.net",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDFiNDJjMmQtNjFkYi00ODdjLTk2NDgtZGMwNTRmYzg3NzM0%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/office-hour.ics",additionalLinks:[{title:"meeting minutes",url:"https://eclipse-tractusx.github.io/community/meeting-minutes/tags/community"}],mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"NewJoiner - Office Hour",schedule:"Every 4 weeks on Friday effective 8. Mar 2024 until 31. Dec 2024 from 02:05 pm to 03:00 pm CEST",description:"Open hour meeting for all new joiner. The goal of the meeting is to provide an easy entry on all topics. The meeting will only take place if specific questions have been submitted. Please reach out in the first place to Stephan Bauer",contact:"stephan.bauer@catena-x.net",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjAzYzVjZGEtZjEwNC00NDI5LWEwODEtN2RhNmI0NDEzNTI2%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/newjoiner-office-hour.ics",mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"Committer Meeting",schedule:"Every 2 weeks on Friday effective 16. Feb 2024 until 31. Dec 2024 from 02:05 pm to 03:00 pm CEST",description:"Open hour meeting for Eclipse Tractus-X committers. The goal of the meeting is to discuss and share specific committer tasks/responsibilities.",contact:"stephan.bauer@catena-x.net",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjlmNTc5MjMtN2Y2YS00YjliLTg3NTItNWE1MmMzMWUzNmYw%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/committer-office-hour.ics",mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"Security - Office Hour",schedule:"Every 2 weeks on Thursday effective 15. Feb 2024 until 31. Dec 2024 from 08:35 am to 09:30 am CEST",description:"Open hour meeting, hosted by the sig-security team. The goal of the meeting is to follow-up on security incidents, request review and assignments, and progress through security tools and procedures.",contact:"rohan.krishnamurthy@zf.com",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzYzMzVhODMtYWQyOC00NWVlLWEyMjMtNjVlZmY2NTlkNTdk%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/security-office-hour.ics",additionalLinks:[{title:"meeting minutes",url:"https://eclipse-tractusx.github.io/community/meeting-minutes/tags/security"},{title:"sig-security",url:"https://github.com/eclipse-tractusx/sig-security?tab=readme-ov-file#readme"}],mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"Portal - Open Meeting",schedule:"Every Thursday effective 4. Jul 2024 until 31. Dec 2024 from 01:30 pm to 02:00 pm CEST",description:"Coordination of feature refinement and development for portal product.",contact:"erik.wiegert@cofinity-x.com",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_YmIyYjgwOTQtZjI1Ny00YmM0LTlmOWQtODRjZWFmZWM1Y2E3%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/portal-open-meeting.ics",additionalLinks:[{title:"Portal Matrix Chat",url:"https://chat.eclipse.org/#/room/#tractusx-portal:matrix.eclipse.org"}],mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"[TRACE-X] Trace-X Open Meeting",schedule:"Every Thursday effective 8. Feb 2024 until 20. Jun 2024 (except 22. Feb 2024) from 03:05 pm to 03:45 pm CEST",description:"Coordination of feature development & concepts. For further information, please contact Martin Kanal or have a look into the downloadable ics file.",contact:"martin.kanal@doubleslash.de",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTEyNTAyNTYtY2VkOC00ZDdjLTk0NTItNWViYTJmNmJmOTlh%40thread.v2/0?context=%7b%22Tid%22%3a%2226f86412-f875-4281-b566-fe6fe385e17c%22%2c%22Oid%22%3a%22db3ba521-7335-4e4f-b672-fc9f7c3f5536%22%7d",meetingLink:"/meetings/coordination-feature-development-trace-x.ics",additionalLinks:[{title:"Open Meeting Agenda",url:"https://github.com/eclipse-tractusx/traceability-foss/discussions/658"},{title:"Trace-X Matrix Chat",url:"https://matrix.to/#/#tractusx-trace-x:matrix.eclipse.org"},{title:"IRS Matrix Chat",url:"https://matrix.to/#/#tractusx-irs:matrix.eclipse.org"}],mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"Umbrella Helm Chart Sync",schedule:"Every Monday from 11:00 am to 11:30 am CEST",description:"Open meeting to discuss the integration work around the umbrella helm chart with the purpose to enable a sandbox environment to support end-to-end (e2e) testing and to provide an easy entry point to Tractus-X for developers and adopters.",contact:"evelyn.gurschler@bmw.de",sessionLink:"https://teams.microsoft.com/l/meetup-join/19:meeting_ODMzMzMxY2MtMGI4ZC00MjJkLThjZjYtMzk3ZjBjMmEzYjZj@thread.v2/0?context=%7B%22Tid%22:%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22,%22Oid%22:%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7D",additionalLinks:[{title:"Umbrella Repository",url:"https://github.com/eclipse-tractusx/tractus-x-umbrella"},{title:"Umbrella Matrix Chat",url:"https://chat.eclipse.org/#/room/#tractusx-umbrella-chart:matrix.eclipse.org"}],mdxType:"MeetingInfo"}),(0,o.kt)("h2",{id:"one-time-meetings"},"One-time meetings"),(0,o.kt)(r,{title:"Refinement Phase - Release 24.12",schedule:"Monday, 24. June 2024 to Sunday, 28. July 2024 (CEST)",description:"Please be aware that the Refinement Phase is to keep you aware of the overall timeline during the Release Process and does not constitute an actual meeting. It serves informational purposes only. During this time, the necessary people/groups should come together and work (refine) the future features. Feature authors take care of organising appointments and communicating with the relevant contacts themselves. The Teams Session link can be used. Be aware: The link and the shared content is available to everyone.",contact:"stephan.bauer@catena-x.net",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTQ5ZWMzNDUtMWQ0My00MDFhLWIxZmYtZjRlNTU2NzFmYmFk%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/refinement-phase-r2412.ics",additionalLinks:[{title:"Open Planning News",url:"https://eclipse-tractusx.github.io/blog/open-planning-r24-12"},{title:"Working Board (Miro)",url:"https://miro.com/app/board/uXjVKTxFyW0=/?share_link_id=753562836761"},{title:"Release Planning Board (GitHub)",url:"https://github.com/orgs/eclipse-tractusx/projects/26"},{title:"Readme sig-release (GitHub)",url:"https://github.com/orgs/eclipse-tractusx/projects/26"},{title:"Working Model (Catena-X Association)",url:"https://catenax-ev.github.io/docs/next/working-model/process-from-idea-to-production/03-01-process-from-idea-to-production"}],mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"Refinement Day 1 - Release 24.12 - meeting canceled",schedule:"Monday, 1. July 2024 from 09:05 to 12:00 (CEST)",description:"This event is organised and moderated by the Catena-X Association. Based on a predefined agenda (depending on the features on the board), individual dependencies are discussed and also documented directly on the feature. If the refinement of the features has already been carried out 'in the refinement phase' and the Definition of Entry (DoE) has already reached, this meeting can also be used as synchronisation.",contact:"stephan.bauer@catena-x.net",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWE3ZjJmZTItN2ZlYi00YjFkLWIwMGQtNDBmMTBiOTdiZTE2%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/refinement-day-1-r2412.ics",additionalLinks:[{title:"Open Planning News",url:"https://eclipse-tractusx.github.io/blog/open-planning-r24-12"},{title:"Working Board (Miro)",url:"https://miro.com/app/board/uXjVKTxFyW0=/?share_link_id=753562836761"}],mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"Draft Feature Freeze - Release 24.12",schedule:"Friday, 12. July 2024 from 09:05 to 12:00 (CEST)",description:"This event is organised and moderated by the Catena-X Association. Until this date, feature proposal can be submitted to the planning board (in GitHub). The current status (as an interim status in the refinement phase) of the previous feature proposals will also be discussed at this meeting.",contact:"stephan.bauer@catena-x.net",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_YmRhMWViMmUtOTAzYS00YjNmLTgwMDMtMDJhOGZiOGUwOWQ0%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/draft-feature-freeze-r2412.ics",additionalLinks:[{title:"Open Planning News",url:"https://eclipse-tractusx.github.io/blog/open-planning-r24-12"},{title:"Working Board (Miro)",url:"https://miro.com/app/board/uXjVKTxFyW0=/?share_link_id=753562836761"}],mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"Refinement Day 2 - Release 24.12",schedule:"Monday, 22. July 2024 from 09:05 to 12:00 (CEST)",description:"This event is organised and moderated by the Catena-X Association. Based on a predefined agenda (depending on the features on the board), individual dependencies are discussed and also documented directly on the feature. If the refinement of the features has already been carried out 'in the refinement phase' and the Definition of Entry (DoE) has already reached, this meeting can also be used as synchronisation.",contact:"stephan.bauer@catena-x.net",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDFjMWQzNmYtZGZkOS00MDFmLWI5ZjYtNDRhNDRjZjIxNDQ4%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/refinement-day-2-r2412.ics",additionalLinks:[{title:"Open Planning News",url:"https://eclipse-tractusx.github.io/blog/open-planning-r24-12"},{title:"Working Board (Miro)",url:"https://miro.com/app/board/uXjVKTxFyW0=/?share_link_id=753562836761"}],mdxType:"MeetingInfo"}),(0,o.kt)(r,{title:"Open Planning Days - Release 24.12",schedule:"Wednesday, 31. Jul 2024 and Thursday, 01. Aug 2024 from 08:05 to 12:00 (CEST)",description:"Open Planning, hosted by the Catena-X association. The goal for this meeting is planning of the intended work content for the next release - which contains also preparation of future release content, refactoring, general architectural work, tool & process improvements and feature planning for the next Tractus-X release. More information (also an agenda) can be found under the Additional Links.",contact:"stephan.bauer@catena-x.net",sessionLink:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWY0ODI3ZmYtNjFiOS00OTI1LTlmNWMtZGUzNTFhNzg2OWI3%40thread.v2/0?context=%7b%22Tid%22%3a%221ad22c6d-2f08-4f05-a0ba-e17f6ce88380%22%2c%22Oid%22%3a%22a8b7a5ee-66ff-4695-afa2-08f893d8aaf6%22%7d",meetingLink:"/meetings/open-planning-r2412.ics",additionalLinks:[{title:"Open Planning News",url:"https://eclipse-tractusx.github.io/blog/open-planning-r24-12"},{title:"Working Board (Miro)",url:"https://miro.com/app/board/uXjVKTxFyW0=/?share_link_id=753562836761"},{title:"Release Planning Board (GitHub)",url:"https://github.com/orgs/eclipse-tractusx/projects/26"},{title:"Readme sig-release (GitHub)",url:"https://github.com/orgs/eclipse-tractusx/projects/26"},{title:"Working Model (Catena-X Association)",url:"https://catenax-ev.github.io/docs/next/working-model/process-from-idea-to-production/03-01-process-from-idea-to-production"}],mdxType:"MeetingInfo"}))}x.isMDXComponent=!0}}]);