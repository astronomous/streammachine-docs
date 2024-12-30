"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(a),h=r,u=l["".concat(c,".").concat(h)]||l[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6961:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"PII Field Encryption",hide_table_of_contents:!1},o=void 0,s={unversionedId:"concepts/data-processing/pii-field-encryption",id:"concepts/data-processing/pii-field-encryption",title:"PII Field Encryption",description:"[data-contract]: docs/02-concepts/02-data-contracts/index.md",source:"@site/docs/02-concepts/01-data-processing/01-pii-field-encryption.md",sourceDirName:"02-concepts/01-data-processing",slug:"/concepts/data-processing/pii-field-encryption",permalink:"/streammachine-docs/docs/latest/concepts/data-processing/pii-field-encryption",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"PII Field Encryption",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"STRM Privacy and your organization",permalink:"/streammachine-docs/docs/latest/overview/organization"},next:{title:"Batch versus Stream",permalink:"/streammachine-docs/docs/latest/concepts/data-processing/batch-vs-streaming"}},c={},p=[{value:"Privacy Algorithm",id:"algorithm",level:2},{value:"Field encryption",id:"field-encryption",level:2},{value:"Using the encrypted data",id:"using-the-encrypted-data",level:2},{value:"Using the decrypted data",id:"using-the-decrypted-data",level:2},{value:"Identify the data purposes you need",id:"identify-the-data-purposes-you-need",level:3},{value:"Create a privacy stream",id:"create-a-privacy-stream",level:3}],d={toc:p},l="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(l,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"STRM Privacy aims to protect ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/overview/pii"},"PII")," data, by encrypting content specified in event fields,\nthat are marked as ",(0,r.kt)("strong",{parentName:"p"},"sensitive")," in the ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/concepts/data-contracts/"},"data contract"),"."),(0,r.kt)("h2",{id:"algorithm"},"Privacy Algorithm"),(0,r.kt)("p",null,"The process of encrypting PII data according to the time-based Privacy Algorithm is shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pii-field-encryption",src:a(3012).Z+"#fullwidth",width:"730",height:"223"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An event is sent to the STRM Privacy Event Gateway."),(0,r.kt)("li",{parentName:"ol"},"An HTTP Header specifies the reference to the schema that was used to serialize the message. The schema is retrieved\nfrom the Data Contracts API and the message can be deserialized. Next,\nthe ",(0,r.kt)("a",{parentName:"li",href:"/streammachine-docs/docs/latest/concepts/data-contracts/strm-meta"},(0,r.kt)("inlineCode",{parentName:"a"},"strmMeta")),"\nsection is extracted from the event data."),(0,r.kt)("li",{parentName:"ol"},"The reference to the Data Contract that should be applied to this event is extracted from ",(0,r.kt)("inlineCode",{parentName:"li"},"strmMeta"),"."),(0,r.kt)("li",{parentName:"ol"},"The Data Contract is retrieved and the names of the sensitive fields and the name of the ",(0,r.kt)("inlineCode",{parentName:"li"},"keyField")," are extracted from the\nData Contract."),(0,r.kt)("li",{parentName:"ol"},"Get an existing / generate a new ",(0,r.kt)("inlineCode",{parentName:"li"},"keyLink")," based on the value in the ",(0,r.kt)("inlineCode",{parentName:"li"},"keyField")," of the event data."),(0,r.kt)("li",{parentName:"ol"},"Encrypt the PII fields using the encryption key."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"24 hours")," after the ",(0,r.kt)("inlineCode",{parentName:"li"},"keyLink")," and encryption key have been generated, the ",(0,r.kt)("inlineCode",{parentName:"li"},"keyLink")," and the encryption key\nrotate. This is called the ",(0,r.kt)("em",{parentName:"li"},"time-based Privacy Algorithm"),".")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"As can be seen, the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyLink")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyField")," are closely related, but different.\nRead more about the ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/concepts/data-contracts/#difference-keyfield-keylink"},"differences here"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the time-based Privacy Algorithm does not match your needs, please ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/contact/"},"contact us")," to think of\nother algorithms.")),(0,r.kt)("h2",{id:"field-encryption"},"Field encryption"),(0,r.kt)("p",null,"STRM Privacy uses ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/tink"},"Google Tink")," as an\nabstraction library for standard ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/tink/deterministic-aead"},(0,r.kt)("inlineCode",{parentName:"a"},"AES-256")," encryption with a synthetic\ninitialization vector"),". The SIV means that for a certain\nplain-text\nvalue, the corresponding cipher text will be identical (for a certain\nencryption key)."),(0,r.kt)("h2",{id:"using-the-encrypted-data"},"Using the encrypted data"),(0,r.kt)("p",null,"When sending data to STRM Privacy, the PII data fields are encrypted. The resulting\ndata stream is called the ",(0,r.kt)("em",{parentName:"p"},"encrypted stream"),", or ",(0,r.kt)("em",{parentName:"p"},"source stream"),". By design, this data stream does not contain any\nsensitive data anymore.\nThis implies that anyone in your company can use it ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". In case these data become compromised, you have a business\nissue, but ",(0,r.kt)("strong",{parentName:"p"},"not")," a privacy issue."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The same credentials that are used for sending data to STRM Privacy can be used to consume the encrypted stream")),(0,r.kt)("p",null,"Though the sensitive data are encrypted, these data are still useful. With a typical clickstream, where ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," is\nnot considered personal data, you could identify dead ends on your site,\nor train recommender engines on the encrypted stream, because the\nattributes that identify the sequence even though encrypted, remain ",(0,r.kt)("em",{parentName:"p"},"the\nsame")," for 24 hours",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". This is plenty long enough to understand typical\ncustomer journeys, without compromising the privacy of your users."),(0,r.kt)("h2",{id:"using-the-decrypted-data"},"Using the decrypted data"),(0,r.kt)("h3",{id:"identify-the-data-purposes-you-need"},"Identify the data purposes you need"),(0,r.kt)("p",null,"Ask\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://edps.europa.eu/data-protection/data-protection/reference-library/data-protection-officer-dpo_en"},"Data Protection Officer"),"\nthe specific data purposes your use case requires, or is allowed to use.\nData for purposes that do not apply to your use case will not be decrypted when creating a ",(0,r.kt)("em",{parentName:"p"},"privacy stream"),"."),(0,r.kt)("h3",{id:"create-a-privacy-stream"},"Create a privacy stream"),(0,r.kt)("p",null,"Here you instruct STRM Privacy to create a derived stream where event data corresponding to the requested purposes is decrypted.\nThis only happens for events where (data subject) consent is granted for these purposes. As such, STRM Privacy will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Exclude all events that have not been allowed to be used for these requested purposes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Decrypt event data (fields/attributes) filed under the purposes you requested (in the event's ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/concepts/data-contracts/"},"data contract"),").\nAttributes with corresponding to other purposes will not be decrypted."))),(0,r.kt)("p",null,"This means that data consumers will only receive the data they are (legally) allowed to process."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more info about creating (privacy) streams, see our ",(0,r.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/quickstart/streaming/creating-streams"},"streams quickstart"),".")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"at least from a GDPR perspective",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"according to the current time-based privacy algorithm",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},3012:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pii-field-encryption-491b89fc4e10977c4677c408f3797b6f.svg"}}]);