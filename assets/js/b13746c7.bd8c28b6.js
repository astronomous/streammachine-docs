"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[720],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Data Pipelines",hide_table_of_contents:!1},s=void 0,i={unversionedId:"concepts/data-processing/data-pipelines",id:"concepts/data-processing/data-pipelines",title:"Data Pipelines",description:"Regardless of the type of processing, stream or batch, data flows from one input to another.",source:"@site/docs/02-concepts/01-data-processing/03-data-pipelines.md",sourceDirName:"02-concepts/01-data-processing",slug:"/concepts/data-processing/data-pipelines",permalink:"/streammachine-docs/docs/latest/concepts/data-processing/data-pipelines",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Data Pipelines",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Batch versus Stream",permalink:"/streammachine-docs/docs/latest/concepts/data-processing/batch-vs-streaming"},next:{title:"Batch Jobs",permalink:"/streammachine-docs/docs/latest/concepts/data-processing/batch-jobs"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Regardless of the type of processing, stream or batch, data flows from one input to another.\nWithin STRM Privacy, this is called a ",(0,a.kt)("strong",{parentName:"p"},"Data Pipeline"),"."),(0,a.kt)("p",null,"A Data Pipeline can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A set of streams and their linked resources"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The input stream with all its derived streams"),(0,a.kt)("li",{parentName:"ul"},"The exporters that are linked to these streams"),(0,a.kt)("li",{parentName:"ul"},"Other resources that are linked to these streams"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A collection of batch jobs"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"All jobs that have the same batch job group id.")))))}d.isMDXComponent=!0}}]);