"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2888],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(a),g=n,k=m["".concat(c,".").concat(g)]||m[g]||d[g]||i;return a?r.createElement(k,o(o({ref:e},p),{},{components:a})):r.createElement(k,o({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[m]="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6405:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={title:"Role-Based Access Control (RBAC)",hide_table_of_contents:!1},o=void 0,l={unversionedId:"concepts/rbac",id:"concepts/rbac",title:"Role-Based Access Control (RBAC)",description:"This article covers what Role-Based Access Control is, how it is used within STRM Privacy, and provides an overview",source:"@site/docs/02-concepts/05-rbac.md",sourceDirName:"02-concepts",slug:"/concepts/rbac",permalink:"/streammachine-docs/docs/latest/concepts/rbac",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Role-Based Access Control (RBAC)",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Data Connectors",permalink:"/streammachine-docs/docs/latest/concepts/data-connectors"},next:{title:"Purpose maps",permalink:"/streammachine-docs/docs/latest/concepts/purpose-maps"}},c={},s=[{value:"Permissions",id:"permissions",level:2},{value:"Overview of permissions per role",id:"overview-of-permissions-per-role",level:2}],p={toc:s},m="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This article covers what Role-Based Access Control is, how it is used within STRM Privacy, and provides an overview\nof all permissions and roles."),(0,n.kt)("h1",{id:"role-based-access-control-rbac"},"Role-Based Access Control (RBAC)"),(0,n.kt)("p",null,"In practice, not all users should be able to view or manage the same resources.\nEmployees working one department, shouldn't automatically be granted access to all data streams within an organization.\nIn order to grant permissions to users, STRM Privacy offers a Role-Based Access Control (RBAC) system.\nThis system should help organizations to manage resources and be more easily compliant with privacy regulations.\nCurrently, four basic roles exist: ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," , ",(0,n.kt)("inlineCode",{parentName:"p"},"project_admin")," , ",(0,n.kt)("inlineCode",{parentName:"p"},"approver")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"member"),".\nUsers can have one or more roles and are always assigned at least the ",(0,n.kt)("inlineCode",{parentName:"p"},"member")," role.\nThe user creating an organization is automatically assigned the ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," role.\nWhen a user is ",(0,n.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/reference/cli-reference/strm/invite/users"},"invited")," to your organization, only the ",(0,n.kt)("inlineCode",{parentName:"p"},"member")," role is assigned.\nRoles can be managed via the ",(0,n.kt)("a",{parentName:"p",href:"/streammachine-docs/docs/latest/reference/cli-reference/strm/manage/user-roles"},(0,n.kt)("inlineCode",{parentName:"a"},"manage")," command in the cli"),"."),(0,n.kt)("h2",{id:"permissions"},"Permissions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Scope        Permission"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/manage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create organization handle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/manage users"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add and remove users from the organization. Change user roles.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/create project"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a new project within the organization via cli or console.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/delete project"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Delete a project from an organization, with all its corresponding resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/view projects"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List all projects in an organization. Per project list their members.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/view installation status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"View the status of installation, installed for your organization.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/manage members"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add and remove users from a project.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/create resources"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create streams, derived streams, batch exporters, batch jobs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/delete resources"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Delete streams, derived streams, batch exporters, batch jobs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/view resources"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List and get streams, derived streams, batch exporters, batch jobs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/create data contracts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a proposal for a data contract, that needs to be reviewed before becoming active.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data_contracts/view"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List and get data contracts from the project in scope and those that are public.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data_contracts/review"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Review data contracts, i.e. validate that the contract is compliant with (company) privacy regulations.")))),(0,n.kt)("h2",{id:"overview-of-permissions-per-role"},"Overview of permissions per role"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Scope"),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"th"},"admin")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"th"},"project_admin")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"th"},"approver")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"th"},"member")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/manage"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/manage users"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/create project"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/delete project"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/view projects"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"organization/view installation status"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/manage members"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/create resources"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/delete resources"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/view resources"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project/create data contracts"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data_contracts/view"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data_contracts/review"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);