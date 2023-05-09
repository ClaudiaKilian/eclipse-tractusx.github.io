"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,d=c["".concat(l,".").concat(u)]||c[u]||g[u]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"TRG 4.01 - Image tagging"},o=void 0,s={unversionedId:"release/trg-4/trg-4-01",id:"release/trg-4/trg-4-01",title:"TRG 4.01 - Image tagging",description:"| Status | Created     | Post-History                     |",source:"@site/docs/release/trg-4/trg-4-01.md",sourceDirName:"release/trg-4",slug:"/release/trg-4/trg-4-01",permalink:"/docs/release/trg-4/trg-4-01",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-4/trg-4-01.md",tags:[],version:"current",frontMatter:{title:"TRG 4.01 - Image tagging"},sidebar:"developer",previous:{title:"TRG 3.02 - Persist Data",permalink:"/docs/release/trg-3/trg-3-2"},next:{title:"TRG 4.02 - Base images",permalink:"/docs/release/trg-4/trg-4-02"}},l={},p=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Process example description",id:"process-example-description",level:3},{value:"Implementation",id:"implementation",level:3}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"24-Nov-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"more precise process description")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"10-Nov-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"Using non-specific image tags like ",(0,a.kt)("inlineCode",{parentName:"p"},":latest")," would require everyone to find and check long hashes instead of a version number."),(0,a.kt)("p",null,"This also breaks control of selecting specific versions and upgrading as ",(0,a.kt)("inlineCode",{parentName:"p"},":latest")," would pull in new images on restart of a pod."),(0,a.kt)("p",null,"Container image tagging also helps you to match ",(0,a.kt)("a",{parentName:"p",href:"/docs/release/trg-5/trg-5-05#container-images"},"TRG 5.05 - Chart Values"),"."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The build process for container images ",(0,a.kt)("strong",{parentName:"p"},"must")," ensure proper image tagging. All images ",(0,a.kt)("strong",{parentName:"p"},"must")," be tagged\nfollowing ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),", e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},":0.1.2")," as well as the latest image must be tagged in\naddition with ",(0,a.kt)("inlineCode",{parentName:"p"},":latest"),"."),(0,a.kt)("h3",{id:"process-example-description"},"Process example description"),(0,a.kt)("p",null,"If you follow our recommendation how to create container images and tag them, the following list describes the process\nsteps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create/edit your ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and merge Changes via PullRequest to ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch, if changes where made in a feature\nbranch, or similar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create/push a Git tag to ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch, e.g.:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> git pull\nremote: Enumerating objects: 129, done.\nremote: Counting objects: 100% (84/84), done.\nremote: Compressing objects: 100% (65/65), done.\nremote: Total 129 (delta 29), reused 11 (delta 10), pack-reused 45\n...\n> git tag -a v1.2.3 -m "annotation text goes here"\n> git push origin v1.2.3\n')),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Git CLI will create tag on the latest (local) commit. Ensure to be up-to-date with the remote after,\notherwise ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging#_tagging_later"},"use commit ID")," while creating the\ntag.")),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Prefer annotated tags over lightweight tags. Refer\nto ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging#_creating_tags"},"Git documentation")," about tags."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pushing the tag will trigger the GH workflow to build your Docker image")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the finishing the build workflow, your repository will contain proper versioned Docker images, e.g.:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"SemVer Docker images",src:n(40964).Z,width:"745",height:"487"})))),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"Create a GitHub Workflow file with following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Build - Docker image (SemVer)\n\non:\n  push:\n    branches:\n      - main\n    # trigger events for SemVer like tags\n    tags:\n      - 'v*.*.*'\n      - 'v*.*.*-*'\n  pull_request:\n    branches:\n      - main\n\nenv:\n  # Use GH Container Registry instead of docker\n  # github.repository equals to <account|org>/<repo>\n  REGISTRY: ghcr.io\n  IMAGE_NAME: ${{ github.repository }}\n\njobs:\n  docker:\n    runs-on: ubuntu-latest\n    permissions:\n      packages: write\n\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      # Create SemVer or ref tags dependent of trigger event\n      - name: Docker meta\n        id: meta\n        uses: docker/metadata-action@v4\n        with:\n          images: |\n            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}\n          tags: |\n            type=ref,event=branch\n            type=ref,event=pr\n            type=semver,pattern={{version}}\n            type=semver,pattern={{major}}\n            type=semver,pattern={{major}}.{{minor}}\n\n      - name: Log into registry ${{ env.REGISTRY }}\n        if: github.event_name != 'pull_request'\n        uses: docker/login-action@v2\n        with:\n          registry: ${{ env.REGISTRY }}\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}\n\n      - name: Build and push\n        uses: docker/build-push-action@v3\n        with:\n          context: .\n          push: ${{ github.event_name != 'pull_request' }}\n          tags: ${{ steps.meta.outputs.tags }}\n          labels: ${{ steps.meta.outputs.labels }}\n")))}c.isMDXComponent=!0},40964:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/trg4-1-semver-image-3960931216ff1d5dd1d80c11642d1514.png"}}]);