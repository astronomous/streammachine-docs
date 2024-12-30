"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Simple Schemas",hide_table_of_contents:!1},o=void 0,s={unversionedId:"concepts/data-contracts/simple-schemas",id:"concepts/data-contracts/simple-schemas",title:"Simple Schemas",description:"To simplify the complexity of creating schemas in formats such as Avro (.avsc) or JSON-schemas, a new format has been",source:"@site/docs/02-concepts/02-data-contracts/01-simple-schemas.md",sourceDirName:"02-concepts/02-data-contracts",slug:"/concepts/data-contracts/simple-schemas",permalink:"/streammachine-docs/docs/latest/concepts/data-contracts/simple-schemas",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Simple Schemas",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Data Contracts",permalink:"/streammachine-docs/docs/latest/concepts/data-contracts/"},next:{title:"The strmMeta section",permalink:"/streammachine-docs/docs/latest/concepts/data-contracts/strm-meta"}},l={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To simplify the complexity of creating schemas in formats such as Avro (",(0,i.kt)("inlineCode",{parentName:"p"},".avsc"),") or JSON-schemas, a new format has been\ncreated at STRM Privacy, called Simple Schemas. It is a YAML based format",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", which allows for readability and\nunderstandability by many people in your organization."),(0,i.kt)("h1",{id:"simple-schemas"},"Simple Schemas"),(0,i.kt)("p",null,"A Simple Schema is composed of only the data fields that you require.\nThe ",(0,i.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/concepts/data-contracts/strm-meta"},"strmMeta section")," in\nis omitted in the Simple Schema representation, as it is translated into an\n",(0,i.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html#schemas"},"Avro ",(0,i.kt)("inlineCode",{parentName:"a"},"avsc")," definition")," for you to use when serializing data.\nSince Avro is well-equipped for serializing and deserializing data, there was no need to create yet another\nserialization format."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Simple Schema is a ",(0,i.kt)("em",{parentName:"p"},"representation")," of your schema, it is ",(0,i.kt)("u",null,"not")," a serialization format.")),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/quickstart/data-contracts/simple-schema"},"quickstart Simple Schema example"),", you'll be guided\nthrough a hands-on\ninteraction that shows the technical details when using Simple Schemas."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L436"},"simple schema"),"\ndefines a list of ",(0,i.kt)("em",{parentName:"p"},"nodes"),". Each node is an entity with the following attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ",(0,i.kt)("div",{class:"chip"}," ",(0,i.kt)("div",{class:"chip-content"},"required")," ")," that you can use to access the entity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"avro_name")," ",(0,i.kt)("div",{class:"chip-optional"}," ",(0,i.kt)("div",{class:"chip-content"},"optional")," ")," conforms to ",(0,i.kt)("a",{parentName:"li",href:"https://avro.apache.org/docs/current/spec.html#names"},"the naming rules for Avro"),".\nIs derived from ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," ",(0,i.kt)("em",{parentName:"li"},"unless")," it was explicitly set. ",(0,i.kt)("strong",{parentName:"li"},"Only")," use if you need to override the Avro name; as this needs\nto be an Avro compatible name, this needs to be correct."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," ",(0,i.kt)("div",{class:"chip"}," ",(0,i.kt)("div",{class:"chip-content"},"required")," ")," an ",(0,i.kt)("inlineCode",{parentName:"li"},"integer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," or a ",(0,i.kt)("inlineCode",{parentName:"li"},"node")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repeated")," ",(0,i.kt)("div",{class:"chip-optional"}," ",(0,i.kt)("div",{class:"chip-content"},"optional")," ")," defines whether the field can\noccur more than once (i.e. is a list). Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"required")," ",(0,i.kt)("div",{class:"chip-optional"}," ",(0,i.kt)("div",{class:"chip-content"},"optional")," ")," defines whether the sender must\nfill in this field value. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"doc")," ",(0,i.kt)("div",{class:"chip-optional"}," ",(0,i.kt)("div",{class:"chip-content"},"optional")," ")," documents the purpose of the field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodes")," ",(0,i.kt)("div",{class:"chip-optional"}," ",(0,i.kt)("div",{class:"chip-content"},"optional")," ")," holds ",(0,i.kt)("em",{parentName:"li"},"child-nodes")," for nested data structure.\nThis is only valid when the ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"NODE"))),(0,i.kt)("p",null,"An example of a simple schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'name: Clicks\nnodes:\n  - name: SessionId\n    type: STRING\n    doc: the string value that connects events to a single sequence\n    required: true\n    repeated: false\n  - name: User Name\n    type: STRING\n    doc:  we use a data contract to define that this is private\n  - name: url\n    type: STRING\n    doc:  the URL of the current page\n  - name: mouse positions\n    repeated: true\n    type: NODE\n    nodes:\n      - name: x\n        type: INTEGER\n      - name: "y"\n        type: INTEGER\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"YAML ",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/type/bool.html"},"allows for many variations")," to indicate the boolean value ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". The reason ",(0,i.kt)("inlineCode",{parentName:"p"},'"y"')," is quoted in the example above,\nis since YAML otherwise would resolve ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," the shortcomings and challenges of YAML ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML#Criticism"},"are well-known"),", though\nreadability and simplicity was the major motivation to use YAML for Simple Schemas."))}d.isMDXComponent=!0}}]);