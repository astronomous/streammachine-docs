"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2165,7918],{8573:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),n=a(614),r=a(1262);const s=new RegExp("^v\\d+\\.\\d+\\.\\d+$");function o(e,t,a){return a.includes(e)?"":`<${t.toUpperCase().replaceAll(/(?:^\s?|\s*?[.!?]+$|[()])/g,"").replaceAll(/\s/g,"_")}>`}function i(e,t){if(e.download){const a=new Blob([t],{type:"text/plain"});return l.createElement("div",{className:"code-block-footer-download"},l.createElement("a",{target:"_blank",href:window.URL.createObjectURL(a),download:e.download},"Download file"))}return l.createElement(l.Fragment,null)}function c(e){let{children:t,...a}=e;if(a.placeholders){let{metaStringBeforePlaceholderMarker:e,metaStringAfterPlaceholderMarker:c,emptyPlaceholders:u}=function(e){let[t,a]=e.metastring.split(/\s?placeholders\s/),l=[];if(a.includes("empty_placeholders")){const e=new RegExp("(?:empty_placeholders)=(.*?)\\s(.*)","g").exec(a);e.length>1&&(l+=e[1].split(","),a=e[2])}return{metaStringBeforePlaceholderMarker:t,metaStringAfterPlaceholderMarker:a,emptyPlaceholders:l}}(a),p=Object.fromEntries(c.replaceAll(/,\s?/g,",").split(",").map((e=>e.split("="))).map((e=>{let[t,a]=e;return[t,{description:a,inputPlaceholder:o(t,a,u),isExternalData:a.startsWith("https://"),fetched:!1}]}))),d=function(e,t,a){let l={...e};return Object.entries(e).forEach((e=>{let[a,n]=e;t.includes(a)&&delete l[a]})),l.metastring=a,l.className=l.className+" with-footer",l}(a,c,e),{placeholderValues:m,handleChange:h}=function(e){let t=Object.fromEntries(Object.entries(e).map((e=>{let[t,a]=e;return a.isExternalData?[t,{value:"<FETCHING>",fetched:!1}]:[t,{value:a.inputPlaceholder,fetched:!0}]}))),[a,n]=(0,l.useState)(t);const r=(e,t)=>{let l={...a};delete l[e],l[e]={value:t.target.value,fetched:!0},n({...l})};return Object.entries(e).filter((e=>{let[t,a]=e;return a.isExternalData})).sort(((e,t)=>{let[a,l]=e,[n,r]=t;return a.localeCompare(n)})).map((e=>{let[t,n]=e;(0,l.useEffect)((()=>{if(!a[t].fetched){const[e,a]=n.description.split("#");fetch(e).then((e=>e.json())).then((e=>e[a])).then((e=>null!=e.match(s)?e.substring(1):e)).then((e=>{r(t,{target:{value:e}})}))}}))})),{placeholderValues:a,handleChange:r}}(p),k=function(e,t,a,n){let r=[];return Object.entries(t).filter((e=>{let[t,a]=e;return!a.isExternalData})).forEach((s=>{let[o,i]=s;const c=a[o].value===i.inputPlaceholder?"":a[o].value,u="$"+o;let p=null!=e.match(new RegExp("\\"+u+"\\b"));r.push(l.createElement("div",{className:"code-block-placeholder",key:o},l.createElement("label",{className:"code-block-placeholder-element",for:"placeholder-"+o},l.createElement("b",null,t[o].description),l.createElement("input",{type:"text",className:"code-block-placeholder-element",id:"placeholder-"+o,placeholder:p?i.inputPlaceholder:"Unused placeholder. Use it with "+u+" in the code block.",disabled:!p,value:c,onChange:e=>n(o,e)}))))})),r}(t,p,m,h),f=function(e,t,a){let l=e;return Object.entries(t).forEach((e=>{let[t,n]=e;const r="$"+t;if(l.includes(r)){const e=0===n.value.length?a[t].inputPlaceholder:n.value;l=l.replaceAll(r,e)}})),l}(t,m,p);return l.createElement(l.Fragment,null,l.createElement(n.Z,d,f),l.createElement(r.Z,{fallback:l.createElement("div",null,"Loading...")},(()=>l.createElement("div",{className:"code-block-footer"},l.createElement("p",null,l.createElement("b",null,"Placeholders")),l.createElement("div",{className:"code-block-placeholder-footer"},k),i(a,f)))))}if(a.download){let e={...a};return e.className=e.className+" with-footer",l.createElement(l.Fragment,null,l.createElement(n.Z,e,t),l.createElement(r.Z,{fallback:l.createElement("div",null,"Loading...")},(()=>l.createElement("div",{className:"code-block-footer"},i(a,t)))))}return l.createElement(l.Fragment,null,l.createElement(n.Z,a,t))}},4677:(e,t,a)=>{a.d(t,{i:()=>o});var l=a(7294),n=a(8573),r=a(1262);const s=e=>{let[t,a]=(0,l.useState)("");return(0,l.useEffect)((()=>{var t;(t=e.url,fetch(t).then((e=>e.text()))).then((e=>{a(e)}))}),[e.url]),l.createElement(n.Z,{language:e.lang,title:e.title},t)},o=e=>l.createElement(r.Z,{fallback:l.createElement("div",null,"Loading...")},(()=>l.createElement(s,e)))},2531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=a(7462),n=(a(7294),a(3905));a(8573),a(4677);const r={title:"Prerequisites",hide_table_of_contents:!1,description:"Installation of necessary tools."},s=void 0,o={unversionedId:"quickstart/ccd/pre-requisites",id:"quickstart/ccd/pre-requisites",title:"Prerequisites",description:"Installation of necessary tools.",source:"@site/docs/03-quickstart/05-ccd/01-pre-requisites.md",sourceDirName:"03-quickstart/05-ccd",slug:"/quickstart/ccd/pre-requisites",permalink:"/docs/latest/quickstart/ccd/pre-requisites",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Prerequisites",hide_table_of_contents:!1,description:"Installation of necessary tools."},sidebar:"docs",previous:{title:"Customer Cloud Deployments",permalink:"/docs/latest/quickstart/ccd/"},next:{title:"Self-Hosted Installation",permalink:"/docs/latest/quickstart/ccd/self-hosted/"}},i={},c=[{value:"1. Make sure you are on a &#39;Self Hosted&#39; subscription",id:"step1",level:3},{value:"2. Create a Kubernetes cluster with sufficient capacity",id:"step2",level:3},{value:"3. Ensure your Kubernetes cluster has an outgoing internet connection",id:"step3",level:3},{value:"4. Ensure a Kafka and Redis cluster are accessible from Kubernetes",id:"step4",level:3},{value:"5. Ensure a PostgreSQL DB is accessible from Kubernetes",id:"step5",level:3},{value:"6. Ensure access to a common cloud storage solution",id:"step6",level:3},{value:"7. Install a few recommended tools",id:"step7",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In short, please take the following prerequisites into account to run the STRM Privacy Data Plane in your\nown Cloud or infrastructure:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#step1"},"A STRM account on the ",(0,n.kt)("em",{parentName:"a"},"self-hosted plan")),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#step2"},"A ",(0,n.kt)("em",{parentName:"a"},"Kubernetes cluster")," with sufficient capacity"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#step3"},"An ",(0,n.kt)("em",{parentName:"a"},"outgoing")," connection from this Kubernetes cluster to the internet"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#step4"},"For streaming pipelines, a ",(0,n.kt)("em",{parentName:"a"},"Kafka")," and a ",(0,n.kt)("em",{parentName:"a"},"Redis")," cluster, accessible from the kubernetes cluster"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#step5"},"For batch jobs, a PostgreSQL DB, accessible from the cluster"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#step6"},"Access to either AWS S3, Google Cloud Storage, or Azure Blob Storage"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#step7"},"A few recommended tools"),".")),(0,n.kt)("p",null,"See below for more detail. As explained, for testing purposes, certain built-in alternatives are available."),(0,n.kt)("h3",{id:"step1"},"1. Make sure you are on a 'Self Hosted' subscription"),(0,n.kt)("p",null,"Your STRM settings page should show an ",(0,n.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io/settings/installation"},"installation tab"),". If it does not yet do so, please contact us."),(0,n.kt)("p",null,"Once you're on a self-hosted subscription, you can proceed with this quickstart guide."),(0,n.kt)("h3",{id:"step2"},"2. Create a Kubernetes cluster with sufficient capacity"),(0,n.kt)("p",null,"Before you can start with the installation of the STRM Privacy Data Plane, you'll need an operational Kubernetes cluster.\nFor AWS, see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/aws-marketplace/"},"dedicated quickstarts"),". For other platforms, follow their documentation."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For production use cases, we advise a Kubernetes cluster with a capacity of around ",(0,n.kt)("strong",{parentName:"p"},"6 nodes of ~4vCPU/16GiB"),", although\nthis will ultimately depend on your actual usage."),(0,n.kt)("p",{parentName:"admonition"},"For small-scale ",(0,n.kt)("em",{parentName:"p"},"testing")," purposes, a single node of that capacity typically suffices. ")),(0,n.kt)("h3",{id:"step3"},"3. Ensure your Kubernetes cluster has an outgoing internet connection"),(0,n.kt)("p",null,"The STRM Data Plane requires an ",(0,n.kt)("strong",{parentName:"p"},"outgoing")," internet connection, specifically to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"api.strmprivacy.io:443"),(0,n.kt)("li",{parentName:"ul"},"accounts.strmprivacy.io:443"),(0,n.kt)("li",{parentName:"ul"},"The STRM Privacy Docker registry at europe-west4-docker.pkg.dev/stream-machine-production/docker-public,\nalthough a ",(0,n.kt)("a",{parentName:"li",href:"/docs/latest/quickstart/ccd/self-hosted/advanced"},"private registry")," can be used instead.")),(0,n.kt)("h3",{id:"step4"},"4. Ensure a Kafka and Redis cluster are accessible from Kubernetes"),(0,n.kt)("p",null,"To use our streaming pipelines, a Kafka and Redis cluster are required (or Kafka- and Redis-compatible\nmanaged solutions).\nThese clusters should be accessible from the Kubernetes cluster."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For testing purposes, the optional ",(0,n.kt)("strong",{parentName:"p"},"built-in clusters")," can be used (enabled by default in the Helm chart).")),(0,n.kt)("h3",{id:"step5"},"5. Ensure a PostgreSQL DB is accessible from Kubernetes"),(0,n.kt)("p",null,"To use our batch jobs, a PostgreSQL DB is required (or Postgres-compatible managed solution),\naccessible from the Kubernetes cluster."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For testing purposes, the optional ",(0,n.kt)("strong",{parentName:"p"},"built-in PostgreSQL DB")," can be used (enabled by default in the Helm chart).")),(0,n.kt)("h3",{id:"step6"},"6. Ensure access to a common cloud storage solution"),(0,n.kt)("p",null,"To use our batch jobs, as well as batch exports for streaming pipelines, access to common cloud storage solutions\nis required. We support specific authentication mechanisms detailed in our ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/data-connectors/"},"data connector docs"),".\nIn short, you should be able to create the following types of credentials:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AWS S3: AccessKey."),(0,n.kt)("li",{parentName:"ul"},"Google Cloud Storage: Service Account."),(0,n.kt)("li",{parentName:"ul"},"Azure Blob Storage: Client Secret Credentials, e.g. with Application with Service Principal.")),(0,n.kt)("h3",{id:"step7"},"7. Install a few recommended tools"),(0,n.kt)("p",null,"The following tools will either be required or ease your journey in deploying the STRM Privacy Data Plane."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strmprivacy/cli"},(0,n.kt)("inlineCode",{parentName:"a"},"strm")),": The STRM Privacy cli. You need this to control your STRM resources, and to simulate some events for testing purposes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},(0,n.kt)("inlineCode",{parentName:"a"},"kubectl")),": The Kubernetes cli."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://helm.sh"},(0,n.kt)("inlineCode",{parentName:"a"},"helm")),": This Kubernetes package manager is used for installing (and upgrading) your STRM\ncustomer data plane. If you use Google Cloud, also install the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hayorov/helm-gcs"},"helm-gcs plugin"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/derailed/k9s"},(0,n.kt)("inlineCode",{parentName:"a"},"k9s"))," (optional): This ",(0,n.kt)("em",{parentName:"li"},"textual user interface")," offers a very convenient way to\ninteract with kubernetes clusters."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ahmetb/kubectx"},(0,n.kt)("inlineCode",{parentName:"a"},"kubectx"))," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ahmetb/kubectx"},(0,n.kt)("inlineCode",{parentName:"a"},"kubens"))," (optional): Very useful tools to switch the default\nkubernetes context and namespace."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.min.io/docs/minio-client-complete-guide.html"},(0,n.kt)("inlineCode",{parentName:"a"},"minio mc"))," (optional): A useful tool to interact with S3 compatible object storage (including S3 by AWS\nitself).")))}d.isMDXComponent=!0}}]);