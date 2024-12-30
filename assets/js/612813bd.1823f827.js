"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Data Connectors",hide_table_of_contents:!1},c=void 0,l={unversionedId:"concepts/data-connectors",id:"concepts/data-connectors",title:"Data Connectors",description:"A Data Connector represents a location from and to which data can be read and written. For example, an AWS S3 bucket",source:"@site/docs/02-concepts/04-data-connectors.md",sourceDirName:"02-concepts",slug:"/concepts/data-connectors",permalink:"/docs/latest/concepts/data-connectors",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Data Connectors",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Customer Cloud Deployments",permalink:"/docs/latest/concepts/deployment-modes/ccd"},next:{title:"Role-Based Access Control (RBAC)",permalink:"/docs/latest/concepts/rbac"}},i={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Data Connector represents a location from and to which data can be read and written. For example, an AWS S3 bucket\nor a Google Cloud Storage bucket. By itself, a Data Connector does nothing, but paired with a batch job or batch exporter,\nit provides a flexible way to read or export data. When creating a Data Connector, credentials must be provided that grant the required access (read, write, or both)."),(0,a.kt)("p",null,"The following data connector and credential types are currently supported:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data Connector Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Credentials Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Amazon S3 Bucket"),(0,a.kt)("td",{parentName:"tr",align:null},"IAM User Access Key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Google Cloud Storage Bucket"),(0,a.kt)("td",{parentName:"tr",align:null},"Service Account Credentials")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Azure Blob Storage Container"),(0,a.kt)("td",{parentName:"tr",align:null},"Application Principal Client Secret Credentials")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mysql Database"),(0,a.kt)("td",{parentName:"tr",align:null},"Database connection URI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Postgresql Database"),(0,a.kt)("td",{parentName:"tr",align:null},"Database connection URI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BigQuery"),(0,a.kt)("td",{parentName:"tr",align:null},"BigQuery connection URI")))),(0,a.kt)("p",null,"For examples on how to create and use these Data Connectors, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/data-connectors/"},"Data Connectors quickstart"),",\nor the ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/reference/cli-reference/strm/create/data-connector/"},"CLI reference")," for data connectors."))}u.isMDXComponent=!0}}]);