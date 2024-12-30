"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[7999],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={title:"Advanced Configuration",hide_table_of_contents:!1,description:"Advanced setups of AWS Marketplace based Data Plane configurations."},o="Advanced Configuration",i={unversionedId:"quickstart/ccd/aws-marketplace/advanced",id:"quickstart/ccd/aws-marketplace/advanced",title:"Advanced Configuration",description:"Advanced setups of AWS Marketplace based Data Plane configurations.",source:"@site/docs/03-quickstart/05-ccd/03-aws-marketplace/03-advanced.md",sourceDirName:"03-quickstart/05-ccd/03-aws-marketplace",slug:"/quickstart/ccd/aws-marketplace/advanced",permalink:"/docs/latest/quickstart/ccd/aws-marketplace/advanced",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Advanced Configuration",hide_table_of_contents:!1,description:"Advanced setups of AWS Marketplace based Data Plane configurations."},sidebar:"docs",previous:{title:"Pay As You Go (PAYG)",permalink:"/docs/latest/quickstart/ccd/aws-marketplace/payg"},next:{title:"Interacting with your Data Plane",permalink:"/docs/latest/quickstart/ccd/interacting"}},l={},c=[{value:"Using a values.yaml",id:"using-a-valuesyaml",level:2},{value:"Using managed prerequisites for the Data Plane",id:"using-managed-prerequisites-for-the-data-plane",level:2},{value:"Purpose of using managed instances",id:"purpose-of-using-managed-instances",level:3},{value:"AWS RDS for PostgreSQL",id:"aws-rds-for-postgresql",level:3},{value:"AWS MSK for Apache Kafka",id:"aws-msk-for-apache-kafka",level:3},{value:"AWS ElastiCache for Redis",id:"aws-elasticache-for-redis",level:3},{value:"Routing traffic",id:"routing-traffic",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-configuration"},"Advanced Configuration"),(0,r.kt)("h2",{id:"using-a-valuesyaml"},"Using a values.yaml"),(0,r.kt)("p",null,"It is recommended to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," over the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," option, as this prevents secrets from ending up in\nyour terminal history and eases repeatability. If you plan to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," instead of the inline Helm values:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"make sure to set the ",(0,r.kt)("inlineCode",{parentName:"li"},"license.installationType")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_MARKETPLACE")),(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.imagePullSecret")," can be omitted / left blank, as this is facilitated by your AWS Marketplace\ndeployment")),(0,r.kt)("p",null,"Run the following command to install the Helm chart (ensure that your working directory is ",(0,r.kt)("inlineCode",{parentName:"p"},"awsmp-chart")," as\nalso shown in the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," example above):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install strmprivacy --namespace strmprivacy --create-namespace ./* --values values.yaml\n")),(0,r.kt)("p",null,"After these steps, you should end up with a namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"strmprivacy")," with, by\ndefault, ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/#components"},"all components")," enabled. If you\nwish otherwise, you can edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," to match your needs."),(0,r.kt)("h2",{id:"using-managed-prerequisites-for-the-data-plane"},"Using managed prerequisites for the Data Plane"),(0,r.kt)("p",null,"As the STRM Privacy Data Plane depends on Kafka, Redis and/or a Postgres Database, you should only use the embedded\ninstances of these prerequisites to deploy your initial version. For production purposes, we recommend to use managed\ninstances."),(0,r.kt)("h3",{id:"purpose-of-using-managed-instances"},"Purpose of using managed instances"),(0,r.kt)("p",null,"The subcharts for Kafka, Redis and PostgreSQL that are included in the STRM Privacy Data Plane Helm Chart are not meant\nfor production purposes, as they have not been configured as such. Furthermore, not all Kubernetes Clusters fulfill the\npre-requisites for this (e.g. support for persistent storage). The more convenient route here, is to use managed\ninstances of the prerequisites for your Data Plane. The following sections discuss how to set up these managed\ninstances."),(0,r.kt)("h3",{id:"aws-rds-for-postgresql"},"AWS RDS for PostgreSQL"),(0,r.kt)("p",null,"To be able to run Batch Jobs, a PostgreSQL database is required. Please follow the steps from\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html"},"AWS RDS for PostgreSQL guide"),"\n, in order to setup a PostgreSQL database for your STRM Privacy Data Plane. Make sure to implement the best practices to\nbackup and restore data at any point in time as\ndescribed ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_CommonTasks.BackupRestore.html"},"here"),". General\nremarks considering the database:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a separate user (following\nthe ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"},"principle of least privilege"),") with read and write\naccess rights to the database. Set the credentials in the ",(0,r.kt)("inlineCode",{parentName:"li"},"values.yaml")," for the PostgreSQL user."),(0,r.kt)("li",{parentName:"ul"},"Data usage will increase over time, therefore, it is wise to\nenable ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html"},"AWS RDS Storage Autoscaling"),"\nto prevent manual interventions.")),(0,r.kt)("h3",{id:"aws-msk-for-apache-kafka"},"AWS MSK for Apache Kafka"),(0,r.kt)("p",null,"To be able to run any streaming tasks, a Kafka (or Kafka API compatible) cluster is required. Please follow the steps\nfrom the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/msk/latest/developerguide/create-cluster.html"},"AWS MSK for Apache Kafka guide")," to\nsetup a managed Kafka cluster in your AWS account. Take note of the private bootstrap servers (and\npossibly ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/authenticated"},"credentials"),") and set the value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,r.kt)("h3",{id:"aws-elasticache-for-redis"},"AWS ElastiCache for Redis"),(0,r.kt)("p",null,"To be able to run any streaming tasks, a Redis (or Redis API compatible) deployment is required. Please follow the steps\nfrom\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/GettingStarted.html"},"AWS ElastiCache for Redis guide"),"\nto setup a managed Redis deployment. Take note of the endpoint (and\npossibly credentials) and set the value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,r.kt)("h2",{id:"routing-traffic"},"Routing traffic"),(0,r.kt)("p",null,"The Helm chart includes ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP")," Kubernetes services by default to route traffic to. If you need to route traffic\nfrom outside the cluster to one of the STRM Privacy applications, set ",(0,r.kt)("inlineCode",{parentName:"p"},"services.loadbalancer.enabled")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," Kubernetes service.\nArbitrary annotations can be added with ",(0,r.kt)("inlineCode",{parentName:"p"},"services.loadbalancer.annotations"),", which allows you to configure\nthe Network Load Balancer to fit your\nneeds (",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/guide/service/annotations/#subnets"},"view all annotations here"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  loadbalancer:\n    enabled: true\n    annotations:\n      service.beta.kubernetes.io/aws-load-balancer-scheme: "internet-facing"\n')))}p.isMDXComponent=!0}}]);