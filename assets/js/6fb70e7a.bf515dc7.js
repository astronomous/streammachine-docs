"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Buf Studio",hide_table_of_contents:!1,description:"A web based interface for exploring gRPC APIs"},i=void 0,s={unversionedId:"reference/api-reference/buf-studio",id:"reference/api-reference/buf-studio",title:"Buf Studio",description:"A web based interface for exploring gRPC APIs",source:"@site/docs/04-reference/02-api-reference/01-buf-studio.md",sourceDirName:"04-reference/02-api-reference",slug:"/reference/api-reference/buf-studio",permalink:"/docs/latest/reference/api-reference/buf-studio",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Buf Studio",hide_table_of_contents:!1,description:"A web based interface for exploring gRPC APIs"},sidebar:"docs",previous:{title:"API Reference",permalink:"/docs/latest/reference/api-reference/"},next:{title:"Evans",permalink:"/docs/latest/reference/api-reference/evans"}},p={},l=[],c={toc:l},u="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As the APIs of STRM Privacy are available through the ",(0,a.kt)("a",{parentName:"p",href:"https://buf.build/strmprivacy/apis/"},"BSR (Buf Schema Registry)"),",\nit is also possible to use ",(0,a.kt)("a",{parentName:"p",href:"https://studio.buf.build/strmprivacy/apis?serviceDialog=open&target=https%3A%2F%2Fapi.strmprivacy.io&selectedProtocol=grpc-web"},"Buf Studio"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BSR",src:r(5420).Z,width:"2858",height:"2428"})),(0,a.kt)("p",null,"This does however require authentication. STRM Privacy leverages ",(0,a.kt)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth 2.0"),", more specifically,\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://oauth.net/2/grant-types/authorization-code/"},"authorization code flow"),", which means that multiple steps need\nto be taken to retrieve a valid access token that can be passed with each API request. While possible to perform all\nthese steps yourselves, it does require quite some OAuth 2.0 knowledge. For simplicity,\nwe recommend to use the CLI to get an access token."),(0,a.kt)("p",null,"To use ",(0,a.kt)("a",{parentName:"p",href:"https://studio.buf.build/strmprivacy/apis?serviceDialog=open&target=https%3A%2F%2Fapi.strmprivacy.io&selectedProtocol=grpc-web"},"Buf Studio"),", perform the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ensure that you've installed the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/strmprivacy/cli/"},"CLI")),(0,a.kt)("li",{parentName:"ol"},"Login with the CLI and follow the instructions"),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"strm auth print-access-token")," and copy the entire value",(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To copy the access token to the clipboard from a shell, use:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"macOS: ",(0,a.kt)("inlineCode",{parentName:"li"},"strm auth print-access-token | pbcopy")),(0,a.kt)("li",{parentName:"ul"},"Linux: ",(0,a.kt)("inlineCode",{parentName:"li"},"strm auth print-access-token | xclip -selection clipboard"))))),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://studio.buf.build/strmprivacy/apis?serviceDialog=open&target=https%3A%2F%2Fapi.strmprivacy.io&selectedProtocol=grpc-web"},"Buf Studio")," and open the ",(0,a.kt)("inlineCode",{parentName:"li"},"Headers")," tab"),(0,a.kt)("li",{parentName:"ol"},"Add a header with:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Key = ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")),(0,a.kt)("li",{parentName:"ul"},"Value = ",(0,a.kt)("inlineCode",{parentName:"li"},"Bearer <your_token>")))),(0,a.kt)("li",{parentName:"ol"},"Make a request")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Tokens are valid for 1 hour, after which they should be replaced with a new token. Go through steps 3-6 again to regain\naccess to the APIs.")))}f.isMDXComponent=!0},5420:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bsr-944e59714c293a702f5177c0ab9dc874.png"}}]);