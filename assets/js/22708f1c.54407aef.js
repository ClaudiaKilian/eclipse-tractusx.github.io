"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[96544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"TRG 4.07 - Read-only filesystems"},i=void 0,l={unversionedId:"release/trg-0/trg-4-07",id:"release/trg-0/trg-4-07",title:"TRG 4.07 - Read-only filesystems",description:"Proposed release date: 01st of Nov 2023",source:"@site/docs/release/trg-0/trg-4-07.md",sourceDirName:"release/trg-0",slug:"/release/trg-0/trg-4-07",permalink:"/docs/release/trg-0/trg-4-07",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-0/trg-4-07.md",tags:[],version:"current",frontMatter:{title:"TRG 4.07 - Read-only filesystems"},sidebar:"docs",previous:{title:"TRG 4.06 - Notice for docker images",permalink:"/docs/release/trg-0/trg-4-06"},next:{title:"TRG 8.01 - CodeQL",permalink:"/docs/release/trg-0/trg-8-01"}},s={},c=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Temporary Folders (If needed)",id:"temporary-folders-if-needed",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Proposed release date: 01st of Nov 2023")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"03-Octo-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial contribution")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"11-Nove-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Added fixes to overwrite tmp")))),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"The read-only root filesystem right can limit the impact of container compromise when set properly.\nThis can prevent malicous processes or applications from writing back to the host file system.\nSuch a setting can be an extra protection layer to prevent an attack."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,'The read-only filesystem configuration is defined in the deployment yaml. The security context parameters are assigned to the pod.\nThis ensures that unpriviledged access cannot be abused to install malicous software of write to the file system. This control is by default false.\nTherefore it is to be considered for each deployment if the flag can be set to the recommended value "true". Only read in this case.'),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"The container's ",(0,a.kt)("strong",{parentName:"p"},"Pod resource file (yaml)")," has to be modified to set rights to read-only."),(0,a.kt)("p",null,"Mounts the container's root filesystem as read-only:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: read-only\nspec:\n  containers:\n    ...\n      # The [container security context](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container) defines privilege and access control settings for a Container within a pod\n        securityContext:\n          capabilities:\n             # -- Specifies which capabilities to drop to reduce syscall attack surface\n            drop:\n            - ALL\n            # -- Specifies which capabilities to add to issue specialized syscalls\n            add: []\n          # -- Whether the root filesystem is mounted in read-only mode\n          readOnlyRootFilesystem: true\n          # -- Controls [Privilege Escalation](https://kubernetes.io/docs/concepts/security/pod-security-policy/#privilege-escalation) enabling setuid binaries changing the effective user ID\n          allowPrivilegeEscalation: false\n          # -- Requires the container to run without root privileges\n          runAsNonRoot: true\n          # -- The container's process will run with the specified uid\n          runAsUser: 10001\n")),(0,a.kt)("p",null,"In some cases you might encounter the issue that tmp cannot be overwritten:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},'[emerg] 1#1: mkdir() "/tmp/proxy_temp" failed (30: Read-only file system)\nnginx: [emerg] mkdir() "/tmp/proxy_temp" failed (30: Read-only file system)\n')),(0,a.kt)("p",null,"To fix this you need to make tmp writeable and mount /tmp to emptyDir."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"      spec:\n        securityContext:\n          runAsUser: 999\n        containers:\n        - image: nginxinc/nginx-unprivileged:latest\n          imagePullPolicy: Always\n          name: nginx\n          ports:\n          - containerPort: 8080 //ONLY open ports that are necessary to run\n            protocol: TCP\n          securityContext:\n            capabilities:\n              drop:\n                - NET_RAW //ONLY required if your containers have NET_RAW capability\n            runAsNonRoot: true\n            allowPrivilegeEscalation: false\n            readOnlyRootFilesystem: true\n          resources: //Set proper limits for your container\n              .\n              .\n              .\n          volumeMounts:\n          - mountPath: /tmp\n            name: tmp\n        volumes:\n        - emptyDir: {}\n          name: tmp\n")),(0,a.kt)("p",null,"Checkout these great Tractus-X template examples."),(0,a.kt)("p",null,"K8s Deployment:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/112fc6e86202ce6a64a88142899a425abfbfd364/charts/tractusx-connector/templates/deployment-controlplane.yaml#L54-L55"},"EDC Security Context 1")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/112fc6e86202ce6a64a88142899a425abfbfd364/charts/tractusx-connector/templates/deployment-controlplane.yaml#L81-L82"},"EDC Security Context 2")),(0,a.kt)("p",null,"Values.yaml:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/112fc6e86202ce6a64a88142899a425abfbfd364/charts/tractusx-connector/values.yaml#L145-L155"},"EDC Security Context 3")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/112fc6e86202ce6a64a88142899a425abfbfd364/charts/tractusx-connector/values.yaml#L156-L171"},"EDC Security Context 4")),(0,a.kt)("h3",{id:"temporary-folders-if-needed"},"Temporary Folders (If needed)"),(0,a.kt)("p",null,"A temporary filesystem (tmpfs) works similiar like a regular volume. Everything written to this filesystem will be removed when the container gets terminated.\nIn the case that an executable in your container should need a temporary folder for logging or spooling purposes, you can mount a writable emptydir volume as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: temporary-folder\nspec:\n  containers:\n    - name: sample-container-which-needs-temporary-folder\n      image: your-image\n      securityContext:\n        readOnlyRootFilesystem: true\n      volumeMounts:\n        - name: tempfolder\n          mountPath: /tmp\n          readOnly: false\n  volumes:\n    - name: tempfolder\n      emptyDir: {}\n")))}u.isMDXComponent=!0}}]);