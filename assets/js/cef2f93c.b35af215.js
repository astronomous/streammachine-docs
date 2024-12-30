"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[5396],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),l=a(6775),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},3274:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),i=a(5162);const l={title:"Upgrading",hide_table_of_contents:!1,description:"How to upgrade your Data Plane."},s=void 0,u={unversionedId:"quickstart/ccd/updating",id:"quickstart/ccd/updating",title:"Upgrading",description:"How to upgrade your Data Plane.",source:"@site/docs/03-quickstart/05-ccd/99-updating.md",sourceDirName:"03-quickstart/05-ccd",slug:"/quickstart/ccd/updating",permalink:"/streammachine-docs/docs/latest/quickstart/ccd/updating",draft:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"Upgrading",hide_table_of_contents:!1,description:"How to upgrade your Data Plane."},sidebar:"docs",previous:{title:"Authenticated Kafka",permalink:"/streammachine-docs/docs/latest/quickstart/ccd/authenticated"},next:{title:"Authentication via the CLI",permalink:"/streammachine-docs/docs/latest/quickstart/authentication-cli"}},c={},p=[{value:"Upgrade instructions",id:"upgrade-instructions",level:2},{value:"Verifying cluster and namespace",id:"verifying-cluster-and-namespace",level:3},{value:"View the current deployment",id:"view-the-current-deployment",level:3},{value:"Upgrade the Helm Chart",id:"upgrade-the-helm-chart",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Migration guides",id:"migration-guides",level:2},{value:"Upgrading from 1.x to 2.0.0",id:"upgrading-from-1x-to-200",level:3},{value:"Upgrading to 1.15.0",id:"upgrading-to-1150",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Upgrading to a new version can be done easily using Helm. The process on a high level is composed of the following\nsteps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check the ",(0,r.kt)("a",{parentName:"li",href:"#migration-guides"},"migration guides below")),(0,r.kt)("li",{parentName:"ol"},"Determine whether you need to make required changes before upgrading"),(0,r.kt)("li",{parentName:"ol"},"When upgrading multiple versions at once, determine whether smaller version increments are required"),(0,r.kt)("li",{parentName:"ol"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"#upgrade-commands"},"upgrade commands"))),(0,r.kt)("h2",{id:"upgrade-instructions"},"Upgrade instructions"),(0,r.kt)("p",null,"This section assumes that you are able to connect to your Kubernetes cluster and have the appropriate access rights\nto upgrade the Helm Chart. Furthermore, this also assumes that you have followed\nthe ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/quickstart/ccd/pre-requisites"},"prerequisites")," section and have installed the tools mentioned\nthere."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," commands below assume a default namespace of ",(0,r.kt)("inlineCode",{parentName:"p"},"strmprivacy")," which you can set via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubens strmprivacy"),"."),(0,r.kt)("h3",{id:"verifying-cluster-and-namespace"},"Verifying cluster and namespace"),(0,r.kt)("p",null,"First, make sure you're connected to the correct cluster and namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl config current-context\nkubernetes-dev\n\n$ kubectl config view --minify -o jsonpath='{..namespace}'\nnot-the-correct-namespace\n")),(0,r.kt)("p",null,"If not connected to the correct context or namespace, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl config use-context kubernetes-dev\n$ kubectl config set-context --current --namespace=strmprivacy\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The easy way to do this is using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectx")," (without args shows current and other contexts) and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubens")," (without args\nshows current and other namespaces)")),(0,r.kt)("h3",{id:"view-the-current-deployment"},"View the current deployment"),(0,r.kt)("p",null,"To list the currently deployed Helm Chart, execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm list\n\nNAME                   NAMESPACE    REVISION    UPDATED                                 STATUS      CHART       APP VERSION\nstrmprivacy-data-plane strmprivacy  1           2022-09-06 13:36:55.521427 +0200 CEST   deployed    strm-1.15.0 1.16.0\n")),(0,r.kt)("p",null,"As the Kubernetes context and namespace just have been set to the namespace of your Data Plane Helm Chart deployment,\nit only lists the Helm Charts deployed to this namespace. As you can see, the chart version is ",(0,r.kt)("inlineCode",{parentName:"p"},"1.15.0")," here in this\nexample."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"From chart version 1.16.0, the ",(0,r.kt)("inlineCode",{parentName:"p"},"appVersion")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"version"),"\nin ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/data-plane-helm-chart/blob/master/helm/Chart.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"Chart.yaml"))," are identical. For\nversions < 1.16.0, the ",(0,r.kt)("inlineCode",{parentName:"p"},"appVersion")," differs from the ",(0,r.kt)("inlineCode",{parentName:"p"},"version"),".")),(0,r.kt)("h3",{id:"upgrade-the-helm-chart"},"Upgrade the Helm Chart"),(0,r.kt)("p",null,"The upgrade procedure depends on the type of installation you have chosen (self-hosted or AWS Marketplace)."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Omitting the ",(0,r.kt)("inlineCode",{parentName:"p"},"--version")," flag in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," command results in Helm upgrading to the ",(0,r.kt)("strong",{parentName:"p"},"latest")," version.\nBe cautious, as this may include major version upgrades. Consult the ",(0,r.kt)("a",{parentName:"p",href:"#migration-guides"},"migration guides")," first\nfor any breaking changes.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"self-hosted",label:"Self-Hosted Installation",mdxType:"TabItem"},(0,r.kt)("p",null,"First, make sure you are able to access the Helm Chart Repository, either through the Helm GCS Plugin or directly from\nour GitHub repo (see ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/quickstart/ccd/self-hosted/#step-2-install-the-helm-chart"},"here"),")."),(0,r.kt)("p",null,"If you installed the Helm chart directly from our GitHub repo, make sure you checkout the latest release tag again,\nand use the same command as during installation, but replace ",(0,r.kt)("inlineCode",{parentName:"p"},"install")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade"),"."),(0,r.kt)("p",null,"If you have installed the GCS Helm plugin, update the STRM Repo first like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,r.kt)("p",null,"Then, upgrade the deployed Helm Chart (assuming that your chart is named ",(0,r.kt)("inlineCode",{parentName:"p"},"strmprivacy-data-plane"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade strmprivacy-data-plane --namespace strmprivacy strmrepo/strm --values values.yaml\n")),(0,r.kt)("p",null,"In both cases, either use a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file (a pre-populated version can be downloaded from the Console, in\nyour ",(0,r.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io/settings/installation"},"installation page"),"), or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," option to set individual properties.")),(0,r.kt)(i.Z,{value:"aws-marketplace",label:"AWS Marketplace",mdxType:"TabItem"},(0,r.kt)("p",null,"If you have followed the AWS Marketplace installation instructions, you may still have the directory to which the\nprevious\nHelm Chart was downloaded, if so, delete that directory first and recreate it to have a clean working directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rm -r awsmp-chart\n$ mkdir awsmp-chart && cd awsmp-chart\n")),(0,r.kt)("p",null,"Then, ensure the Helm CLI can access the AWS Marketplace container registry, where the Helm Chart Repository resides:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws ecr get-login-password \\\n    --region us-east-1 | helm registry login \\\n    --username AWS \\\n    --password-stdin 709825985650.dkr.ecr.us-east-1.amazonaws.com\n")),(0,r.kt)("p",null,"Pull and untar the Helm Chart (note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm pull")," command does not specify a version, keep mind of the ",(0,r.kt)("em",{parentName:"p"},"danger"),"\nblock shown above):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm pull oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/strm-privacy/strm\n$ tar xf $(pwd)/* && find $(pwd) -maxdepth 1 -type f -delete\n")),(0,r.kt)("p",null,"Next, upgrade the deployed Helm Chart (assuming that your chart is named ",(0,r.kt)("inlineCode",{parentName:"p"},"strmprivacy-data-plane"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm upgrade strmprivacy-data-plane --namespace strmprivacy ./* --values values.yaml\n")),(0,r.kt)("p",null,"Either use a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file (a pre-populated version can be downloaded from the Console, in\nyour ",(0,r.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io"},"installation page"),"), or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," option to set individual properties."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you wish to upgrade to a specific Helm Chart version of the STRM Privacy Data Plane, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--version 1.10.0")," flag\nto upgrade to a specific version (",(0,r.kt)("inlineCode",{parentName:"p"},"1.10.0")," in this example).")),(0,r.kt)("p",null,"For more information about Helm and Chart upgrades, please see\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_upgrade/"},"Helm upgrade documentation"),"."),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Running into issues while upgrading? ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/contact/"},"Contact us")," if you require assistance."),(0,r.kt)("h2",{id:"migration-guides"},"Migration guides"),(0,r.kt)("h3",{id:"upgrading-from-1x-to-200"},"Upgrading from 1.x to 2.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Breaking chart changes"),(0,r.kt)("br",{parentName:"p"}),"\n","The ",(0,r.kt)("inlineCode",{parentName:"p"},"kafkaAuth")," configuration properties of the various components have been replaced\nby a global security config under the top-level section ",(0,r.kt)("inlineCode",{parentName:"p"},"globalKafkaSecurityConfig"),".\nSee ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/quickstart/ccd/authenticated"},"Authenticated Kafka")," page for more details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Chart additions"),(0,r.kt)("br",{parentName:"p"}),"\n","A new property ",(0,r.kt)("inlineCode",{parentName:"p"},"serializeAvroAsJson")," has been added under the ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka")," section. Setting this\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," will result in Avro events to be serialized as Avro JSON instead of Avro Binary,\nallowing you to deserialize STRM events without a schema registry."),(0,r.kt)("h3",{id:"upgrading-to-1150"},"Upgrading to 1.15.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Chart changes"),(0,r.kt)("br",{parentName:"p"}),"\n","This release allows to configure Kubernetes Services of type ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," with allowed IP CIDR ranges and\nconfigure the exposed port of the Service."))}h.isMDXComponent=!0}}]);