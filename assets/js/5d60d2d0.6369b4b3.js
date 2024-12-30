"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||c;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const c={title:"gcs",hide_title:!0},o=void 0,s={unversionedId:"reference/cli-reference/strm/create/data-connector/gcs",id:"reference/cli-reference/strm/create/data-connector/gcs",title:"gcs",description:"strm create data-connector gcs",source:"@site/docs/04-reference/01-cli-reference/strm/create/data-connector/gcs.md",sourceDirName:"04-reference/01-cli-reference/strm/create/data-connector",slug:"/reference/cli-reference/strm/create/data-connector/gcs",permalink:"/streammachine-docs/docs/latest/reference/cli-reference/strm/create/data-connector/gcs",draft:!1,tags:[],version:"current",frontMatter:{title:"gcs",hide_title:!0},sidebar:"docs",previous:{title:"azure-blob-storage",permalink:"/streammachine-docs/docs/latest/reference/cli-reference/strm/create/data-connector/azure-blob-storage"},next:{title:"jdbc",permalink:"/streammachine-docs/docs/latest/reference/cli-reference/strm/create/data-connector/jdbc"}},i={},l=[{value:"strm create data-connector gcs",id:"strm-create-data-connector-gcs",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"strm-create-data-connector-gcs"},"strm create data-connector gcs"),(0,a.kt)("p",null,"Create a Data Connector for a Google Cloud Storage Bucket"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Creates a data connector for a Google Cloud Storage bucket. Service account credentials are required."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"strm create data-connector gcs (data-connector-name) (bucket-name) [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --credentials-file string   file with service account JSON key credentials\n  -h, --help                      help for gcs\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -o, --output string         output format [json, json-raw, table, plain] (default "table")\n  -p, --project string        project to use (defaults to context-configured project)\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/streammachine-docs/docs/latest/reference/cli-reference/strm/create/data-connector/"},"strm create data-connector"),"\t - Create a Data Connector")))}u.isMDXComponent=!0}}]);