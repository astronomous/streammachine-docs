"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),s=n(6775),l=n(1980),c=n(7392),u=n(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=h({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),v(e)}),[c,v,i]),tabValues:i}}var f=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",y.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},6432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const s={title:"The strmMeta section",hide_table_of_contents:!1},l=void 0,c={unversionedId:"concepts/data-contracts/strm-meta",id:"concepts/data-contracts/strm-meta",title:"The strmMeta section",description:"[purpose-maps]: docs/02-concepts/06-purpose-maps.md",source:"@site/docs/02-concepts/02-data-contracts/02-strm-meta.md",sourceDirName:"02-concepts/02-data-contracts",slug:"/concepts/data-contracts/strm-meta",permalink:"/docs/latest/concepts/data-contracts/strm-meta",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"The strmMeta section",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Simple Schemas",permalink:"/docs/latest/concepts/data-contracts/simple-schemas"},next:{title:"Masked Fields",permalink:"/docs/latest/concepts/data-contracts/masked-fields"}},u={},p=[{value:"An event example",id:"an-event-example",level:2},{value:"Reference to the Data Contract (<strike>eventContractRef</strike>)",id:"reference-to-the-data-contract-eventcontractref",level:3},{value:"Data Subject provided consent (consentLevels)",id:"data-subject-provided-consent-consentlevels",level:3},{value:"Reference to the used encryption key (keyLink)",id:"reference-to-the-used-encryption-key-keylink",level:3},{value:"Unique identifier per event (nonce)",id:"unique-identifier-per-event-nonce",level:3},{value:"Process-time event time (timestamp)",id:"process-time-event-time-timestamp",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To allow STRM Privacy to manage privacy transformations, each schema needs to contain a specific section with meta\ninformation that enables this. This article describes the details of the ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta")," section."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Most of the content of this article refers to stream processing as examples, though ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta")," is also applicable\nand of relevance to batch processing.")),(0,r.kt)("h1",{id:"every-schema-needs-an-strmmeta-section"},"Every schema needs an ",(0,r.kt)("inlineCode",{parentName:"h1"},"strmMeta")," section"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Every")," schema in STRM Privacy has a section called ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta"),". Why\nis this? And why does even a private schema, created by you require it?"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta")," section exists because it provides a link to the rules that need to\nbe applied to an event, once it has been deserialized by the STRM\nPrivacy Event Gateway. The serialization schema defines the shape of the\nevent, and is the first way that STRM Privacy helps in maintaining the\nquality of event data."),(0,r.kt)("p",null,"Once deserialized, STRM Privacy needs to ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-processing/pii-field-encryption"},"apply rules to"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"validate event attribute contents"),(0,r.kt)("li",{parentName:"ol"},"apply encryption to personal data attributes"),(0,r.kt)("li",{parentName:"ol"},"determine if events belong to the same data owner")),(0,r.kt)("p",null,"In order to be able to do that, events are assigned a data contract,\nand the data contract defines the rules."),(0,r.kt)("h2",{id:"an-event-example"},"An event example"),(0,r.kt)("p",null,"The fields outside the ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta")," section can be used for anything as your organization\nrequires (as long as the event fields conform to the schema). However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta")," must\nexist, and it will also end up in your persistent storage. This way, the Data Contract that\nwas applied to the event, the consent that was provided by the data subject, the link to the\nencryption key (among others), are still known, even when data is at rest in your persistent storage.\nBelow is an example event, based on the schema that is shown in the tabs, as convenience."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"event",label:"Single Event Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "strmMeta": {\n    // callout-1\n    "eventContractRef": "strmprivacy/example/1.3.0",\n    // callout-2\n    "nonce": 15082564,\n    // callout-3\n    "timestamp": 1629192833072,\n    // callout-4\n    "keyLink": "55c2f72b-cff8-4814-ae33-e125c77e50f9",\n    // callout-5\n    "billingId": "demo8542234275",\n    // callout-6\n    "consentLevels": [ 0, 1, 2, 3 ]\n  },\n  "uniqueIdentifier": "unique-14",\n  "consistentValue": "session-740",\n  "someSensitiveValue": "ASB9bJrnYjxjNF5Txc+Wc2k1zvzFAmE03SYK499WK5Du",\n  "notSensitiveValue": "not-sensitive-39"\n}\n'))),(0,r.kt)(o.Z,{value:"schema",label:"Schema Definition",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"View this schema definition with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/cli"},"CLI"),"\nusing: ",(0,r.kt)("inlineCode",{parentName:"p"},"strm get data-contract strmprivacy/example/1.3.0 -ojson | jq '.dataContract.schema.definition | fromjson'"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "type": "record",\n  "name": "DemoEvent",\n  "namespace": "io.strmprivacy.schemas.demo.v1",\n  "fields": [\n    {\n      "name": "strmMeta",\n      "type": {\n        "type": "record",\n        "name": "StrmMeta",\n        "fields": [\n          // callout-1\n          { "name": "eventContractRef", "type": "string" },\n          // callout-2\n          { "name": "nonce", "type": [ "null", "int" ], "default": null },\n          // callout-3\n          { "name": "timestamp", "type": [ "null", "long" ], "default": null },\n          // callout-4\n          { "name": "keyLink", "type": [ "null", "string" ], "default": null },\n          // callout-5\n          { "name": "billingId", "type": [ "null", "string" ], "default": null },\n          // callout-6\n          { "name": "consentLevels", "type": { "type": "array", "items": "int" } }\n        ]\n      }\n    },\n    { \n      "name": "uniqueIdentifier", "type": [ "null", "string" ], "default": null,\n      "doc": "any value. For illustration purposes: use a value that is consistent over time like a customer or device ID."\n    },\n    {\n      "name": "consistentValue", "type": "string",\n      "doc": "any value. For illustration purposes: use a value that is consistent over a limited period like a session."\n    },\n    {\n      "name": "someSensitiveValue", "type": [ "null", "string" ], "default": null,\n      "doc": "any value. For illustration purposes: use a value that could identify a user over time based on behavior, like browsing behavior (e.g. urls)."\n    },\n    {\n      "name": "notSensitiveValue", "type": [ "null", "string" ], "default": null,\n      "doc": "any value. For illustration purposes: use a value that is not sensitive at all, like the rank of an item in a set."\n    }\n  ]\n}\n')))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"eventContractRef")," ",(0,r.kt)("div",{class:"chip"}," ",(0,r.kt)("div",{class:"chip-content"},"required")," "),": the reference to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/concepts/data-contracts/"},(0,r.kt)("u",null,(0,r.kt)("strong",{parentName:"a"},"\ndata"))," contract")," that\ngoverns the privacy and validation rules. The sending application ",(0,r.kt)("strong",{parentName:"li"},"must\nset this field")," to a (handle/name/version) reference of an event\ncontract that refers to this serialization schema."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"nonce"),": a random integer added to each event on acceptance. This makes it easy\nto detect possible data duplications in downstream processing. The\nsending application does not need to set this field."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),": a millisecond accuracy timestamp added upon acceptance in the STRM\nPrivacy gateway. The sending application does not need to set this\nfield."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"keyLink"),": a random value that provides a link to the encryption key that was used\nto encrypt the PII fields of this event. The sending application does\nnot need to set this field."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"billingId"),": ",(0,r.kt)("strong",{parentName:"li"},"deprecated")," this field was required in the past, but not anymore. Will be removed in a future version\nof ",(0,r.kt)("inlineCode",{parentName:"li"},"strmMeta"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"consentLevels")," ",(0,r.kt)("div",{class:"chip"}," ",(0,r.kt)("div",{class:"chip-content"},"required")," "),": 0 or more ",(0,r.kt)("em",{parentName:"li"},"consents")," that were\ngiven by the data subject for the further use of this event. Each value refers to a specific purpose.\nThe sending application ",(0,r.kt)("strong",{parentName:"li"},"must set this field"),". Read more on purposes\n",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/overview/organization#purposes"},"here"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The fact that the ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta")," section does not use ",(0,r.kt)("inlineCode",{parentName:"p"},"dataContractRef"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"eventContractRef"),",\nis ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-processing/pii-field-encryption#data-contract"},"due to legacy"),".\nThis will be changed in a backwards compatible way in the future, though the two references can be considered identical.")),(0,r.kt)("h3",{id:"reference-to-the-data-contract-eventcontractref"},"Reference to the Data Contract (",(0,r.kt)("strike",null,"eventContractRef"),")"),(0,r.kt)("p",null,"An STRM Privacy event is transmitted to the Event Gateway with the\nserialized event in the ",(0,r.kt)("em",{parentName:"p"},"body")," of the HTTP/2 POST call, and a header\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"Strm-Schema-Ref")," that tells the Event Gateway how to deserialize these\ndata."),(0,r.kt)("p",null,"Once deserialized, the event gateway will look for the value of\n",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta/eventContractRef")," (inside the deserialized event) to determine\nthe rules to be applied to this event. More details on this\nprocess ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-processing/pii-field-encryption#algorithm"},"here"),"."),(0,r.kt)("h3",{id:"data-subject-provided-consent-consentlevels"},"Data Subject provided consent (consentLevels)"),(0,r.kt)("p",null,"The sending application ",(0,r.kt)("strong",{parentName:"p"},"must fill in this field")," with a list of\nconsents given by the data-owner for the use of this event. Technically\nthis field holds a list of 0 or more integers, which refer to your\norganization's ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/concepts/purpose-maps"},"purpose maps"),".\nIf no consent levels are set, the data subject does not give any\npermissions to use their sensitive (personal) data fields. In such case, all\nsensitive data are permanently hidden in the encrypted stream."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/overview/organization#purposes"},"here")," for a discussion on\npurposes in your organization."),(0,r.kt)("h3",{id:"reference-to-the-used-encryption-key-keylink"},"Reference to the used encryption key (keyLink)"),(0,r.kt)("p",null,"When the STRM Privacy Event Gateway determines that an event belongs to\na new sequence (via the value of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/#contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"keyField")),"\nin the data contract), or that an existing sequence has lasted longer than 24 hours (or as the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-processing/pii-field-encryption#algorithm"},"Privacy Algorithm")," dictates), it will\ngenerate a new encryption key for the personal data attributes."),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"keyLink")," field provides a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUID")," value that is used to look up\nthis encryption key. This lookup is done in a decrypted stream, but\ncan also be done in case the encryption keys were exported to the\ncustomer."),(0,r.kt)("h3",{id:"unique-identifier-per-event-nonce"},"Unique identifier per event (nonce)"),(0,r.kt)("p",null,"This is a ",(0,r.kt)("em",{parentName:"p"},"convenience")," attribute, it is not technically necessary by\nSTRM Privacy. Hard experience has taught that data duplication by\nhiccups in stream processing is quite common. This might happen inside\nSTRM Privacy but also downstream with the customers further processing.\nProviding a unique random nonce in the STRM Privacy Event Gateway will\nmake it possible to detect duplicates easily, especially combined with\nthe event timestamp."),(0,r.kt)("h3",{id:"process-time-event-time-timestamp"},"Process-time event time (timestamp)"),(0,r.kt)("p",null,"This is a ",(0,r.kt)("em",{parentName:"p"},"convenience")," attribute, it is not technically necessary by\nSTRM Privacy. It contains the millisecond UTC time since the\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix epoch")," when the event was accepted by the STRM Privacy Event Gateway."))}h.isMDXComponent=!0}}]);