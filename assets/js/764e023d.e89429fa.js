"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"SaaS",hide_table_of_contents:!1,description:"Plug 'n Play - Let STRM Privacy host your Data Plane for you."},s="SaaS",c={unversionedId:"concepts/deployment-modes/saas",id:"concepts/deployment-modes/saas",title:"SaaS",description:"Plug 'n Play - Let STRM Privacy host your Data Plane for you.",source:"@site/docs/02-concepts/03-deployment-modes/01-saas.md",sourceDirName:"02-concepts/03-deployment-modes",slug:"/concepts/deployment-modes/saas",permalink:"/streammachine-docs/docs/latest/concepts/deployment-modes/saas",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SaaS",hide_table_of_contents:!1,description:"Plug 'n Play - Let STRM Privacy host your Data Plane for you."},sidebar:"docs",previous:{title:"Deployment Modes",permalink:"/streammachine-docs/docs/latest/concepts/deployment-modes/"},next:{title:"Customer Cloud Deployments",permalink:"/streammachine-docs/docs/latest/concepts/deployment-modes/ccd"}},i={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"saas"},"SaaS"),(0,a.kt)("p",null,"As the name implies, STRM Privacy can provide the Data Plane as a Service. This is the default mode that STRM Privacy\nis operating in when you first create your account. This is also the only mode that the account type with a free\nsubscription can run on."),(0,a.kt)("p",null,"Benefits of using the SaaS Data Plane:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Zero effort to deploy"),(0,a.kt)("li",{parentName:"ol"},"Easy to get started"),(0,a.kt)("li",{parentName:"ol"},"Upgrades are taken care of")),(0,a.kt)("p",null,"You might consider ",(0,a.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/concepts/deployment-modes/ccd"},"hosting your own Data Plane"),", if:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You require data never leaving your (cloud) infrastructure"),(0,a.kt)("li",{parentName:"ol"},"You require encryption keys never leaving your (cloud) infrastructure"),(0,a.kt)("li",{parentName:"ol"},"You can benefit from (sustained) discounts for running your infrastructure resources")),(0,a.kt)("p",null,"To start using the Data Plane in SaaS, follow along with the ",(0,a.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/quickstart/streaming/sending-data/language-examples"},"language examples")," in the quickstart section."))}d.isMDXComponent=!0}}]);