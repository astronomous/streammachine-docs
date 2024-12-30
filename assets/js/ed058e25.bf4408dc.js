"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),i=a(6010),o=a(2466),s=a(6775),l=a(1980),d=a(7392),c=a(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=u(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,d]=m({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=l??p;return h({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var b=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=d[a].value;n!==s&&(p(t),l(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:u},o,{className:(0,i.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),i=a(4866),o=a(5162);const s={title:"Batch Jobs",hide_table_of_contents:!1,description:"Process batches of data and apply privacy transformations"},l=void 0,d={unversionedId:"quickstart/batch/batch-jobs",id:"quickstart/batch/batch-jobs",title:"Batch Jobs",description:"Process batches of data and apply privacy transformations",source:"@site/docs/03-quickstart/02-batch/01-batch-jobs.md",sourceDirName:"03-quickstart/02-batch",slug:"/quickstart/batch/batch-jobs",permalink:"/streammachine-docs/docs/latest/quickstart/batch/batch-jobs",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Batch Jobs",hide_table_of_contents:!1,description:"Process batches of data and apply privacy transformations"},sidebar:"docs",previous:{title:"Batch Processing",permalink:"/streammachine-docs/docs/latest/quickstart/batch/"},next:{title:"Data Connectors",permalink:"/streammachine-docs/docs/latest/quickstart/data-connectors/"}},c={},p=[{value:"Create a STRM Privacy batch mode pipeline",id:"create-a-strm-privacy-batch-mode-pipeline",level:2},{value:"Quickstart outline",id:"quickstart-outline",level:3},{value:"Creating a data connector",id:"creating-a-data-connector",level:2},{value:"Define the data contract",id:"define-the-data-contract",level:3},{value:"Define a batch job via the CLI",id:"define-a-batch-job-via-the-cli",level:3},{value:"Indicate the data subject consent field",id:"indicate-the-data-subject-consent-field",level:4},{value:"Indicate the timestamp config",id:"indicate-the-timestamp-config",level:4},{value:"Define the derived data",id:"define-the-derived-data",level:3},{value:"Intermezzo: Privacy-transforming your data",id:"intermezzo-privacy-transforming-your-data",level:4},{value:"A real-world use case for derived data: masking for recommenders",id:"a-real-world-use-case-for-derived-data-masking-for-recommenders",level:4},{value:"Generate the batch data",id:"generate-the-batch-data",level:3},{value:"Explore privacy-transformed data",id:"explore-privacy-transformed-data",level:3},{value:"Input data",id:"input-data",level:4},{value:"Encrypted data",id:"encrypted-data",level:4},{value:"Derived Data",id:"derived-data",level:4},{value:"Example notebook",id:"example-notebook",level:3},{value:"Wrapping up",id:"wrapping-up",level:3}],u={toc:p},h="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(h,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"STRM Privacy offers support for batch processing. This quickstart helps you to get started with Batch Jobs. To read\nmore about the background for batch data pipelines, go ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/concepts/data-processing/batch-jobs"},"here"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Prefer to look at the example notebook directly? Find it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/demos/blob/main/strm_batch_mode_demo.ipynb"},"here"),".")),(0,r.kt)("h2",{id:"create-a-strm-privacy-batch-mode-pipeline"},"Create a STRM Privacy batch mode pipeline"),(0,r.kt)("p",null,"With batch mode, you can set up data routines that, based on the data contract, grab data from a bucket,\ntransform it according to a data contract and subsequently pick it up for downstream processing."),(0,r.kt)("p",null,"This is a powerful way to quickly set up data pipelines to feed applications that process or need sensitive data in\nbatch routines without the overhead. In the real-world, this means you align on the privacy implications with your\nsecurity and/or legal counterparts first, and because privacy comes by design and is encoded into the pipeline ",(0,r.kt)("strong",{parentName:"p"},"and"),"\ndata\nitself, you can just go ahead and use it."),(0,r.kt)("p",null,"This saves you a lot of trips to legal desks, and so improves your workflow considerably."),(0,r.kt)("h3",{id:"quickstart-outline"},"Quickstart outline"),(0,r.kt)("p",null,"The following steps will be covered in this quickstart:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a data connection to retrieve and store the data"),(0,r.kt)("li",{parentName:"ol"},"Define the data contract your data adheres to."),(0,r.kt)("li",{parentName:"ol"},"Define a batch job in the CLI"),(0,r.kt)("li",{parentName:"ol"},"Generate some data for demo purposes"),(0,r.kt)("li",{parentName:"ol"},"Explore the transformed data for downstream consumption")),(0,r.kt)("h2",{id:"creating-a-data-connector"},"Creating a data connector"),(0,r.kt)("p",null,"First create a ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/quickstart/data-connectors/"},"data-connector")," of the desired kind."),(0,r.kt)("h3",{id:"define-the-data-contract"},"Define the data contract"),(0,r.kt)("p",null,"The next step is to instruct STRM Privacy what your data looks like. This is done in the ",(0,r.kt)("em",{parentName:"p"},"data contract"),", which combines\nthe data\nshape (your fields) with the privacy implications. In this quickstart, the ",(0,r.kt)("a",{parentName:"p",href:"https://strmprivacy.io/schemas/strmprivacy/example/1.3.0/"},"privacy demo data\ncontract")," is used:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"event",label:"Data Contract (schema shown separately for brevity)",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"View this data contract with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/cli"},"CLI"),"\nusing: ",(0,r.kt)("inlineCode",{parentName:"p"},"strm get data-contract strmprivacy/example/1.3.0 -ojson"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "dataContract": {\n    "id": "44cc99df-04f1-4e42-9345-28151b1139d0",\n    "ref": { "handle": "strmprivacy", "name": "example", "version": "1.3.0" },\n    "state": "ACTIVE",\n    "isPublic": true,\n    "keyField": "consistentValue",\n    "piiFields": {\n      "consistentValue": 2,\n      "someSensitiveValue": 3,\n      "uniqueIdentifier": 1\n    },\n    "validations": [ { "field": "consistentValue", "type": "regex", "value": "^.+$" } ],\n    "metadata": { ... omitted ... },\n    "schema": {\n      "ref": { "handle": "strmprivacy", "name": "example", "version": "1.3.0", "schemaType": "AVRO" },\n      "state": "ACTIVE",\n      "isPublic": true,\n      "definition": ... shown in separate tab for brevity ...,\n      "fingerprint": "6093265390869578999",\n      "metadata": { ... omitted ... },\n      "simpleSchema": {},\n      "id": "44cc99df-04f1-4e42-9345-28151b1139d0"\n    },\n    "projectId": "d995bd01-22ea-458b-a184-4fac5ba48535"\n  },\n  "checksum": "5321256876911080621"\n}\n\n'))),(0,r.kt)(o.Z,{value:"schema",label:"Schema Definition (Avro representation)",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"View this schema definition with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/cli"},"CLI"),"\nusing: ",(0,r.kt)("inlineCode",{parentName:"p"},"strm get data-contract strmprivacy/example/1.3.0 -ojson | jq '.dataContract.schema.definition | fromjson'"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "type": "record",\n  "name": "DemoEvent",\n  "namespace": "io.strmprivacy.schemas.demo.v1",\n  "fields": [\n    {\n      "name": "strmMeta",\n      "type": {\n        "type": "record",\n        "name": "StrmMeta",\n        "fields": [\n          { "name": "eventContractRef", "type": "string" },\n          { "name": "nonce", "type": [ "null", "int" ], "default": null },\n          { "name": "timestamp", "type": [ "null", "long" ], "default": null },\n          { "name": "keyLink", "type": [ "null", "string" ], "default": null },\n          { "name": "billingId", "type": [ "null", "string" ], "default": null },\n          { "name": "consentLevels", "type": { "type": "array", "items": "int" } }\n        ]\n      }\n    },\n    { \n      "name": "uniqueIdentifier", "type": [ "null", "string" ], "default": null,\n      "doc": "any value. For illustration purposes: use a value that is consistent over time like a customer or device ID."\n    },\n    {\n      "name": "consistentValue", "type": "string",\n      "doc": "any value. For illustration purposes: use a value that is consistent over a limited period like a session."\n    },\n    {\n      "name": "someSensitiveValue", "type": [ "null", "string" ], "default": null,\n      "doc": "any value. For illustration purposes: use a value that could identify a user over time based on behavior, like browsing behavior (e.g. urls)."\n    },\n    {\n      "name": "notSensitiveValue", "type": [ "null", "string" ], "default": null,\n      "doc": "any value. For illustration purposes: use a value that is not sensitive at all, like the rank of an item in a set."\n    }\n  ]\n}\n')))),(0,r.kt)("p",null,"You can use an existing data contract or create your own. Refer to this blog on ",(0,r.kt)("a",{parentName:"p",href:"https://strmprivacy.io/posts/add-your-own-schemas/"},"creating data\ncontracts"),". Furthermore, you can also use ",(0,r.kt)("a",{parentName:"p",href:"https://strmprivacy.io/posts/simple-data-schemas/"},"Simple\nSchemas"),", a much easier way to define your data shape than the\nunderlying Avro serialization schema."),(0,r.kt)("h3",{id:"define-a-batch-job-via-the-cli"},"Define a batch job via the CLI"),(0,r.kt)("p",null,"With the data connection and contract defined, the batch job itself can be defined.\nBatch jobs can be defined by providing a config JSON to the CLI. The reference can be\nfound ",(0,r.kt)("a",{parentName:"p",href:"https://buf.build/strmprivacy/apis/docs/main:strmprivacy.api.entities.v1#strmprivacy.api.entities.v1.BatchJob"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm create batch-job --help\nCreate a Batch Job\n\nUsage:\n  strm create batch-job [flags]\n\nFlags:\n  -F, --file string The path to the JSON file containing the batch job configuration\n  -h, --help help for batch-job\n")),(0,r.kt)("p",null,"The JSON simply details which data-connector to use, what contract to apply and how to write the data back. We are\nworking to include GCP Storage, a visual interface and even a file upload in follow-on releases."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Configure your editor (",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/json#_intellisense-and-validation"},"VS Code"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/json.html"},"IntelliJ"),") to validate the Batch Job JSON definition against\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.api.strmprivacy.io/latest/strmprivacy.api.entities.v1.BatchJob.json"},"JSON Schema"),".")),(0,r.kt)("h4",{id:"indicate-the-data-subject-consent-field"},"Indicate the data subject consent field"),(0,r.kt)("p",null,"For each record (row) processed by a batch job, the data subject (data owner) may or may not consent with\ntheir data being used for certain purposes. In other words, the legal ground under which the data was collected\nmay differ per record.\nIn streaming pipelines, the consent is provided by you and embedded in the metadata of each event.\nSimilarly, for batch jobs, you need to indicate which field in your data contains the legal ground per row.\nThis field does not necessarily need to be defined in your data contract."),(0,r.kt)("p",null,"In the definition file you need to set these three values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"what the default legal ground (consent level) is"),(0,r.kt)("li",{parentName:"ul"},"the field that contains the legal ground in your data"),(0,r.kt)("li",{parentName:"ul"},"how each of field's values map to consent levels")),(0,r.kt)("p",null,"Here, consent levels are integer values referring to the respective purposes as defined in your ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/concepts/purpose-maps"},"purpose map"),"."),(0,r.kt)("p",null,"About the default consent: It's safest to keep this to the integer value 0. It just means the data was collected under\nthe most basic consent or legal ground you use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  // partial excerpt\n  "consent": {\n    "default_consent_levels": [ 0 ],\n    "consent_level_extractor": {\n      "field": "the field that indicates collection ground",\n      "field_patterns": {\n        "example, like legitimate interest": {\n          "consent_levels": [ 1 ]\n        },\n        "example, like marketing": {\n          "consent_levels": [ 2 ]\n        }\n      }\n    }\n  }\n  // partial excerpt\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/demos/blob/main/strm_batch_mode_demo.ipynb"},"An example of the full definition file is included in the demo\nnotebook"),". Just swap the example values for\nyour own data-connector names and preferred buckets."),(0,r.kt)("h4",{id:"indicate-the-timestamp-config"},"Indicate the timestamp config"),(0,r.kt)("p",null,"An important part of data that is processed in batch, is the time that belongs to an individual record in the data. This\ncan be the time this data was recorded (i.e. the event time equivalent for streaming data), or the time that this data\nwas processed. Regardless of the meaning, it is required to have a field in the CSV data that represents a date and time.\nAs can be seen in the ",(0,r.kt)("a",{parentName:"p",href:"https://buf.build/strmprivacy/apis/docs/main:strmprivacy.api.entities.v1#strmprivacy.api.entities.v1.BatchJob"},"Batch Job reference"),", the ",(0,r.kt)("a",{parentName:"p",href:"https://buf.build/strmprivacy/apis/docs/main:strmprivacy.api.entities.v1#strmprivacy.api.entities.v1.EncryptionConfig"},"EncryptionConfig"),"\nrequires a ",(0,r.kt)("a",{parentName:"p",href:"https://buf.build/strmprivacy/apis/docs/main:strmprivacy.api.entities.v1#strmprivacy.api.entities.v1.TimestampConfig"},"TimestampConfig"),". The TimestampConfig defines how data is encrypted\nwith respect to time. The ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/concepts/data-processing/pii-field-encryption#privacy-algorithm-algorithm"},"privacy algorithm"),"\nwe use, uses the concept of time to determine whether the same encryption key or a new one should be used."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"https://buf.build/strmprivacy/apis/docs/main:strmprivacy.api.entities.v1#strmprivacy.api.entities.v1.TimestampConfig"},"TimestampConfig"),", a format field defines the pattern that is used\nto parse the date and time that is specified in the time field (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"field")," in the TimestampConfig). To test the\npattern, we advise to use the ",(0,r.kt)("a",{parentName:"p",href:"https://javadevtools.com/datetimeformatterparse"},"following tool"),". Keep a reference\nto ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html#patterns"},"the patterns")," open as well."),(0,r.kt)("h3",{id:"define-the-derived-data"},"Define the derived data"),(0,r.kt)("p",null,"The next step is to define the derived data - the privacy-transformed output. Just think of this as a folder on a disk\nthat contains data that is ready for a specific purpose (like, in the example below, training a recommender)."),(0,r.kt)("p",null,"First, let's dive a bit deeper into how transformations are applied. In this quickstart, we'll focus on a specific derived\nstream - in real-world applications you would probably have many different purposes and so a bunch of different derived streams."),(0,r.kt)("h4",{id:"intermezzo-privacy-transforming-your-data"},"Intermezzo: Privacy-transforming your data"),(0,r.kt)("p",null,"Based on the data contract, data is processed and transformed in your batches. The level of privacy that can be achieved\ndepends on the format of your source data."),(0,r.kt)("p",null,"A temporal (i.e. time-based) field in your data is used to achieve a fast but powerful way to apply the necessary transformations (through\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"keyField")," in the data contract) via encryption. It is therefore important to understand that data is\npseudonimized at best, unless you have multiple rows per user that are closely spaced in time (like separated clicks or\nurl hits with context data)."),(0,r.kt)("p",null,"We plan to extend the privacy transforms, but as we expand batch mode further this is currently an important\nlimitation. In streaming mode, you usually\nhave separate but closely spaced data points (e.g. events over multiple days)."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"So are you planning to use batch mode for e.g. user profile info, where every row is just one user? That won't get you\nanonymized data currently.")),(0,r.kt)("h4",{id:"a-real-world-use-case-for-derived-data-masking-for-recommenders"},"A real-world use case for derived data: masking for recommenders"),(0,r.kt)("p",null,"Imagine you have a batch job with clickstream data you plan to use to train or evaluate a\nrecommender system."),(0,r.kt)("p",null,"Your data includes a PII field that you do not want or are not allowed to reveal, while you do need it for your data\nanalysis. Recommendations are highly personal and therefore require linking previous behaviour (orders, movies etc.) to\nthe same user."),(0,r.kt)("p",null,'The only "personality dimension" a basic recommender really needs is to know what was the same user. They do not\nnecessarily need to know who was the underlying customer. This is where masking comes in.'),(0,r.kt)("p",null,"By masking a field, the actual value (e.g. the customer id) is replaced with a hash, allowing to link multiple data\npoints to a single user, without revealing personal information. This can be done with derived streams."),(0,r.kt)("p",null,"In the snippet below, you will find the ",(0,r.kt)("inlineCode",{parentName:"p"},"derived_data")," configuration of the batch-job. This configuration shows the\ndata-connector to read ",(0,r.kt)("em",{parentName:"p"},"from"),", the file to write ",(0,r.kt)("em",{parentName:"p"},"to"),", and the allowed consent levels (purposes that should be decrypted).\nThe consent level type is deprecated and should typically be set to ",(0,r.kt)("em",{parentName:"p"},"GRANULAR"),", meaning that each desired purpose should\nbe listed explicitly under the consent levels, and each record should explicitly specify consent for each corresponding\npurpose as well. Here, ",(0,r.kt)("em",{parentName:"p"},"CUMULATIVE")," means that a consent for purpose 2 will include consent for purpose 1 as well.\nFinally, the snippet also shows the ",(0,r.kt)("inlineCode",{parentName:"p"},"masked_fields"),". Within the data contract block\n",(0,r.kt)("inlineCode",{parentName:"p"},'"databert-handle/batch_job_public/1.0.1"{ ... }')," you can see the column names or ",(0,r.kt)("inlineCode",{parentName:"p"},"field_patterns")," of the fields to\nmask."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  // partial excerpt\n  "derived_data": [\n    {\n      "target": {\n        "data_connector_ref": {\n          "billing_id": "your_billing_id",\n          "name": "databert-demo"\n        },\n        "data_type": {\n          "csv": {\n            "charset": "UTF-8"\n          }\n        },\n        "file_name": "databert-demo-derived.csv"\n      },\n      "consent_levels": [\n        2\n      ],\n      "consent_level_type": "CUMULATIVE",\n      "masked_fields": {\n        "field_patterns": {\n          "databert-handle/batch_job_public/1.0.0": {\n            "field_patterns": [\n              "Email",\n              "UserName"\n            ]\n          }\n        }\n      }\n    }\n  ]\n  // partial excerpt\n}\n')),(0,r.kt)("h3",{id:"generate-the-batch-data"},"Generate the batch data"),(0,r.kt)("p",null,"In a batch job, data is read, transformed and returned as soon as new files are found inside the bucket."),(0,r.kt)("p",null,"To simulate a data routine you already have or plan to set up, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/demos/blob/main/strm_batch_mode_demo.ipynb"},"example notebook")," includes a\n",(0,r.kt)("inlineCode",{parentName:"p"},"DataGenerator"),' class that simulates some random user data (when we say random, we really mean "nonsensical"). Apart\nfrom session, user and meta (like a timestamp) fields you will recognize the ',(0,r.kt)("inlineCode",{parentName:"p"},"PrivacyPlane")," as the consent field in step\n3.1 above."),(0,r.kt)("p",null,"Clone/fork/download the notebook and add/replace your own credentials in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AwsProperties()")," class\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"s3.json")," to quickly prepare a demo pipeline of your own."),(0,r.kt)("h3",{id:"explore-privacy-transformed-data"},"Explore privacy-transformed data"),(0,r.kt)("p",null,"The data shape and privacy implications (the ",(0,r.kt)("inlineCode",{parentName:"p"},"data contract"),") are now defined, the ",(0,r.kt)("inlineCode",{parentName:"p"},"batch job")," is defined, a\n",(0,r.kt)("inlineCode",{parentName:"p"},"derived stream")," with masking applied is defined, and some example data is generated."),(0,r.kt)("p",null,"Next, let's explore what happens to the data based on (1) the data contract and (2) derived stream we defined."),(0,r.kt)("h4",{id:"input-data"},"Input data"),(0,r.kt)("p",null,"The input data coming from the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataGenerator")," class that acts as input looks as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"input data",src:a(6407).Z,width:"2204",height:"908"})),(0,r.kt)("h4",{id:"encrypted-data"},"Encrypted data"),(0,r.kt)("p",null,"The next step is to look at the data that is just encrypted (per field)."),(0,r.kt)("p",null,"Basically, all connections that might exist between rows are destroyed here: the pii-fields ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"PrivateFieldA")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivateFieldB"),", set in the data contract, are encrypted."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"encryped data",src:a(9341).Z,width:"2234",height:"1204"})),(0,r.kt)("h4",{id:"derived-data"},"Derived Data"),(0,r.kt)("p",null,"It becomes more interesting looking at the derived data (as defined by the derived stream above). Remember,\nthe goal was to apply masking instead of destroying any connection between rows that might exist."),(0,r.kt)("p",null,"Per the batch job configuration, the derived data is allowed to contain entries with a consent level of 2 or higher. From the\ninput data it is known that there are 3 entries with a consent level of 2, which correspond to the three outputs below. In\nthe table below, you can also see that the values for ",(0,r.kt)("inlineCode",{parentName:"p"},"UserName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," are hashed. This corresponds to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"field_patterns")," that have been set in de ",(0,r.kt)("inlineCode",{parentName:"p"},"masked_fields")," section of the data contract for ",(0,r.kt)("inlineCode",{parentName:"p"},"derived_data"),". The username\nhas been masked, but the hashed username is consistent over all rows. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," field is different for every entry and\ntherefore the hashed field is too."),(0,r.kt)("p",null,"Records that did not include consent for purpose 2 have been excluded from the derived data."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"derived data",src:a(6866).Z,width:"2210",height:"396"})),(0,r.kt)("h3",{id:"example-notebook"},"Example notebook"),(0,r.kt)("p",null,"To quickly see for yourself how Batch Mode works, copy or clone the example notebook from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/demos/blob/main/strm_batch_mode_demo.ipynb"},"GitHub")," with your own S3 and\nSTRM Privacy credentials and explore the data. It also includes the batch job definition file."),(0,r.kt)("h3",{id:"wrapping-up"},"Wrapping up"),(0,r.kt)("p",null,"So, to illustrate how to create batch jobs with privacy transformations, the following steps have been covered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We created a data connection to retrieve and store the data"),(0,r.kt)("li",{parentName:"ul"},"Defined the data contract your data adheres to."),(0,r.kt)("li",{parentName:"ul"},"We defined a batch job in the CLI"),(0,r.kt)("li",{parentName:"ul"},"Generated some data for demo purposes"),(0,r.kt)("li",{parentName:"ul"},"Explore the transformed data for downstream consumption")))}m.isMDXComponent=!0},6866:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/derived-data-588090b5f778a21b7f44d067ef593210.png"},9341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/encrypted-data-d1a3da61db712c530acb3f6356bb4468.png"},6407:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/input-data-914e1107391b4add319bc98b1aaeabd8.png"}}]);