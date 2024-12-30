"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[5710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Google Cloud in S3 mode",hide_table_of_contents:!1,description:"Data Connector for Google Cloud in S3 compatible mode"},c=void 0,s={unversionedId:"quickstart/data-connectors/gcloud-s3-compatible",id:"quickstart/data-connectors/gcloud-s3-compatible",title:"Google Cloud in S3 mode",description:"Data Connector for Google Cloud in S3 compatible mode",source:"@site/docs/03-quickstart/03-data-connectors/04-gcloud-s3-compatible.md",sourceDirName:"03-quickstart/03-data-connectors",slug:"/quickstart/data-connectors/gcloud-s3-compatible",permalink:"/docs/latest/quickstart/data-connectors/gcloud-s3-compatible",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Google Cloud in S3 mode",hide_table_of_contents:!1,description:"Data Connector for Google Cloud in S3 compatible mode"},sidebar:"docs",previous:{title:"Google Cloud",permalink:"/docs/latest/quickstart/data-connectors/gcloud"},next:{title:"Database",permalink:"/docs/latest/quickstart/data-connectors/database"}},i={},l=[{value:"Prepare the storage",id:"prepare-the-storage",level:3},{value:"Create the data connector",id:"create-the-data-connector",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This quickstart shows how to use a Google Cloud Storage bucket in ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/aws-simple-migration"},"s3 compatible mode"),"."),(0,o.kt)("h3",{id:"prepare-the-storage"},"Prepare the storage"),(0,o.kt)("p",null,"First, create a new service account, for example in\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},"Cloud Console"),".\nNext, grant write permissions on the bucket to this service account. You can do this under the\n",(0,o.kt)("inlineCode",{parentName:"p"},"PERMISSIONS")," tab on the bucket's details page. Choose for example ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage Legacy Bucket Writer"),"\nas role and the newly created service account as principal."),(0,o.kt)("p",null,"Create HMAC credentials: ",(0,o.kt)("inlineCode",{parentName:"p"},"gsutil hmac create <service-account-name>"),". Put the secrets in a JSON file, named for\nexample ",(0,o.kt)("inlineCode",{parentName:"p"},"s3.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=s3.json",title:"s3.json"},'{\n "url": "https://storage.googleapis.com",\n "accessKey": "<access-key>",\n "secretKey": "<secret-key>",\n "api": "s3v4",\n "path": "auto"\n}\n')),(0,o.kt)("h3",{id:"create-the-data-connector"},"Create the data connector"),(0,o.kt)("p",null,"With the credentials file (",(0,o.kt)("inlineCode",{parentName:"p"},"s3.json")," in our example), create the data connector using\nthe command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"strm create data-connector s3 my-s3 strmprivacy-export-demo --credentials-file=s3.json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "ref": {\n    "name": "my-s3",\n    "projectId": "30fcd008-9696-...."\n  },\n  "s3Bucket": {\n    "bucketName": "strmprivacy-export-demo"\n  }\n}\n')),(0,o.kt)("p",null,"This will create a data connector named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-s3")," for the bucket ",(0,o.kt)("inlineCode",{parentName:"p"},"strmprivacy-export-demo"),",\nusing the provided credentials. Specify the actual name of your bucket, and any name for the\ndata connector itself."))}d.isMDXComponent=!0}}]);