"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[7051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Kafka Consumer",hide_table_of_contents:!1},i="Exporting via a Kafka Consumer",c={unversionedId:"quickstart/streaming/receiving-data/exporting-kafka",id:"quickstart/streaming/receiving-data/exporting-kafka",title:"Kafka Consumer",description:"Data can be consumed from your streams (both encrypted and decrypted events) in JSON format via",source:"@site/docs/03-quickstart/01-streaming/04-receiving-data/03-exporting-kafka.md",sourceDirName:"03-quickstart/01-streaming/04-receiving-data",slug:"/quickstart/streaming/receiving-data/exporting-kafka",permalink:"/streammachine-docs/docs/latest/quickstart/streaming/receiving-data/exporting-kafka",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Kafka Consumer",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Exporting Keys",permalink:"/streammachine-docs/docs/latest/quickstart/streaming/receiving-data/exporting-keys"},next:{title:"Receiving events over web socket",permalink:"/streammachine-docs/docs/latest/quickstart/streaming/receiving-data/listen-web-socket"}},s={},p=[{value:"Create an exporter",id:"create-an-exporter",level:2},{value:"Consuming",id:"consuming",level:2},{value:"Deleting the Kafka-Exporter",id:"deleting-the-kafka-exporter",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exporting-via-a-kafka-consumer"},"Exporting via a Kafka Consumer"),(0,r.kt)("p",null,"Data can be consumed from your streams (both encrypted and decrypted events) in JSON format via\nan authorized and authenticated connection to our Kafka export cluster."),(0,r.kt)("h2",{id:"create-an-exporter"},"Create an exporter"),(0,r.kt)("p",null,"First you need to create an exporter. This creates a Kafka Exporter\nand one associated Kafka User. The user credentials can be used to\naccess the topic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'$ strm create kafka-exporter demo -o json\n{\n  "ref": {\n    "name": "kafka-exporter-a9e83206-96e6-463c-8163-3f4493b3ddb7",\n    "projectId": "30fcd008-9696-...."\n  },\n  "streamRef": {\n    "name": "demo",\n    "projectId": "30fcd008-9696-...."\n  },\n  "target": {\n    "clusterRef": {\n      "billingId": "internal",\n      "name": "shared-export"\n    },\n    "topic": "export-a9e83206-96e6-463c-8163-3f4493b3ddb7"\n  },\n  "users": [\n    {\n      "ref": {\n        "name": "service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb",\n        "projectId": "30fcd008-9696-...."\n      },\n      "kafkaExporterName": "kafka-exporter-a9e83206-96e6-...",\n      "topic": "export-a9e83206-96e6-...",\n      "clientId": "export-7d36ea89-2c91-...",\n      "clientSecret": "22a837fb-c299-...",\n      "clusterRef": {\n        "billingId": "internal",\n        "name": "shared-export"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"You can see the created user credentials. The Kafka Exporter is named\n",(0,r.kt)("inlineCode",{parentName:"p"},"shared-export-demo"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"shared-export")," is the name of the Kafka cluster\nowned by STRM Privacy that we export to; your Kafka consumer will\nconsume from this cluster."),(0,r.kt)("p",null,"Kafka users are entities that can consume from the Kafka Export Cluster. They\nhave credentials, and a Kafka topic that they can consume from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'$ strm list kafka-users shared-export-demo -o json\n{\n  "kafkaUsers": [\n    {\n      "ref": {\n        "name": "service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb"\n        "projectId": "30fcd008-9696-...."\n      },\n      "kafkaExporterName": "shared-export-demo",\n      "topic": "export-a9e83206-96e6-463c-8163-3f4493b3ddb7",\n      "clientId": "export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb",\n      "clientSecret": "22a837fb-c299-4e03-b1ec-460684f52ae5",\n      "clusterRef": {\n        "billingId": "internal",\n        "name": "shared-export"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"consuming"},"Consuming"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/python-kafka-consumer-oauth2"},"Python Kafka\nConsumer"),"\nand go into the directory and create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),". Fill out the\nvalues from the JSON above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title=config.ini",title:"config.ini"},"[kafka]\nbootstrap_servers = export-bootstrap.kafka.strmprivacy.io:9092\ntopic = export-a9e83206-96e6-...\nclient_id = export-7d36ea89-2c91-...\nsecret = 22a837fb-c299-...\ntoken_uri = https://sts.strmprivacy.io/token\ngroup = demo\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," can have any arbitrary value. It acts as the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/clients/consumer.html#group-configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"group.id"))," attribute in Kafka.")),(0,r.kt)("p",null,"Next, install the Python dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv .venv\n. .venv/bin/activate\npython3 -m pip install -r requirements.txt\n")),(0,r.kt)("p",null,"Generate some data in a separate terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm simulate random-events demo\n")),(0,r.kt)("p",null,"And run the consumer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},"$ python consumer.py\n\n{'strmMeta': {\n  'eventContractRef': 'strmprivacy/example/1.3.0',\n  'nonce': -1508205704,\n  'timestamp': 1629197150029,\n  'keyLink': '68a1d5c5-d1d0-4a7c-8e03-b9d265071839',\n  'billingId': None,\n  'consentLevels': [0, 1]},\n'uniqueIdentifier': 'ARCc26TVzQnf6SVZpFT3ghde/6ILaeFdn+o9jBW/',\n'consistentValue': 'ARCc26QnGW52Po3QHjADcpvSoY6zf9z9skqy8viZwX8=',\n'someSensitiveValue': 'ARCc26QwShhyvLiHj2EDEp7vSB0CxLMhOm7jAv0D4CM=',\n'notSensitiveValue': 'not-sensitive-98'\n}\n")),(0,r.kt)("h2",{id:"deleting-the-kafka-exporter"},"Deleting the Kafka-Exporter"),(0,r.kt)("p",null,"If you just try to delete the Kafka Exporter, you\u2019ll get an error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'strm delete kafka-exporter shared-export-demo\nError: rpc error: code = FailedPrecondition desc = Cannot delete billing_id: "demo8542234275"\nname: "shared-export-demo"\n.name because it has users attached to it\n')),(0,r.kt)("p",null,"First, the users have to be deleted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'strm delete kafka-user service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb\n{"name":"service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb", "projectId": "30fcd008-9696-...."}\n')),(0,r.kt)("p",null,"And then delete the Kafka Exporter with the same command as before."),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"recursive delete")," would ensure that all attached resources are deleted in on command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"strm delete kafka-exporter shared-export-demo --recursive\n")))}u.isMDXComponent=!0}}]);