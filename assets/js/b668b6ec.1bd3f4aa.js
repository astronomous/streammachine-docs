"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[4671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"show",hide_title:!0},s=void 0,i={unversionedId:"reference/cli-reference/strm/auth/show",id:"reference/cli-reference/strm/auth/show",title:"show",description:"strm auth show",source:"@site/docs/04-reference/01-cli-reference/strm/auth/show.md",sourceDirName:"04-reference/01-cli-reference/strm/auth",slug:"/reference/cli-reference/strm/auth/show",permalink:"/streammachine-docs/docs/latest/reference/cli-reference/strm/auth/show",draft:!1,tags:[],version:"current",frontMatter:{title:"show",hide_title:!0},sidebar:"docs",previous:{title:"revoke",permalink:"/streammachine-docs/docs/latest/reference/cli-reference/strm/auth/revoke"},next:{title:"completion",permalink:"/streammachine-docs/docs/latest/reference/cli-reference/strm/completion"}},c={},l=[{value:"strm auth show",id:"strm-auth-show",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"strm-auth-show"},"strm auth show"),(0,o.kt)("p",null,"Show your current login credentials"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Show the email address of your current login credentials"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm auth show [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for show\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -o, --output string         output format [json, json-raw, table, plain] (default "table")\n  -p, --project string        project to use (defaults to context-configured project)\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/streammachine-docs/docs/latest/reference/cli-reference/strm/auth/"},"strm auth"),"\t - Authentication command")))}m.isMDXComponent=!0}}]);