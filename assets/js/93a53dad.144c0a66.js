"use strict";(self.webpackChunkicnaming_docs=self.webpackChunkicnaming_docs||[]).push([[726],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,y=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},i="Registry",s={unversionedId:"TechnicalReference/Canister/Registry",id:"TechnicalReference/Canister/Registry",title:"Registry",description:"The core canister of IC Naming, the registry maintains a mapping from domain name (at any level - x, y.x, z.y.x etc) to owner, resolver, and time-to-live.",source:"@site/docs/TechnicalReference/Canister/Registry.md",sourceDirName:"TechnicalReference/Canister",slug:"/TechnicalReference/Canister/Registry",permalink:"/TechnicalReference/Canister/Registry",editUrl:"https://github.com/IC-Naming/icnaming-docs/blob/main/docs/TechnicalReference/Canister/Registry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Registrar",permalink:"/TechnicalReference/Canister/Registrar"},next:{title:"Resolver",permalink:"/TechnicalReference/Canister/Resolver"}},l={},c=[{value:"DID",id:"did",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"registry"},"Registry"),(0,o.kt)("p",null,"The core canister of IC Naming, the registry maintains a mapping from domain name (at any level - x, y.x, z.y.x etc) to owner, resolver, and time-to-live."),(0,o.kt)("h2",{id:"did"},"DID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"service : {\n  /// Get name that owned by owner\n  /// Returns list of names owned by owner\n  ///\n  /// * `owner` - owner of names\n  /// * `page` - page offset and limit\n  get_controlled_names : (principal, GetPageInput) -> (\n      GetControlledNamesResponse,\n    ) query;\n  /// Get details of name\n  ///\n  /// * `name` - a name. e.g. `hello.icp`\n  get_details : (text) -> (GetDetailsResponse) query;\n  /// Get owner of name\n  ///\n  /// * `name` - a name. e.g. `hello.icp`\n  get_owner : (text) -> (GetOwnerResponse) query;\n  /// Get resolver\n  ///\n  /// * `name` - a name. e.g. `hello.icp`\n  get_resolver : (text) -> (GetOwnerResponse) query;\n  /// Get ttl of name\n  ///\n  /// * `name` - a name. e.g. `hello.icp`\n  get_ttl : (text) -> (GetTtlResponse) query;\n  /// Get owner and operators of name\n  ///\n  /// * `name` - a name. e.g. `hello.icp`\n  get_users : (text) -> (GetUsersResponse) query;\n  /// Set approval status of operator. Operator can be update info of subdomain.\n  /// Returns true if success.\n  ///\n  /// * `name` - a name. e.g. `hello.icp`\n  /// * `operator` - operator to be set.\n  /// * `approved` - approval status of operator\n  set_approval : (text, principal, bool) -> (BooleanActorResponse);\n  /// Set full info of subdomain\n  /// Returns true if success\n  ///\n  /// * `name` - a name. e.g. `hello.icp`\n  /// * `ttl` - ttl of name\n  /// * `resolver` - resolver of name\n  set_record : (text, nat64, principal) -> (BooleanActorResponse);\n  /// Set owner of subdomain\n  /// Returns details of the new registry\n  ///\n  /// * `label` - label of subdomain. e.g. `www`\n  /// * `parent_name` - parent name of subdomain. e.g. `hello.icp`\n  /// * `sub_owner` - owner of subdomain\n  /// * `ttl` - ttl of subdomain\n  /// * `resolver` - resolver of subdomain\n  set_subdomain_owner : (text, text, principal, nat64, principal) -> (\n      GetDetailsResponse,\n    );\n}\ntype BooleanActorResponse = variant { Ok : bool; Err : ErrorInfo };\ntype ErrorInfo = record { code : nat32; message : text };\ntype GetControlledNamesResponse = variant {\n  Ok : GetPageOutput;\n  Err : ErrorInfo;\n};\ntype GetDetailsResponse = variant { Ok : RegistryDto; Err : ErrorInfo };\ntype GetOwnerResponse = variant { Ok : principal; Err : ErrorInfo };\ntype GetPageInput = record { offset : nat64; limit : nat64 };\ntype GetPageOutput = record { items : vec text };\ntype GetTtlResponse = variant { Ok : nat64; Err : ErrorInfo };\ntype GetUsersResponse = variant { Ok : RegistryUsers; Err : ErrorInfo };\ntype RegistryDto = record {\n  ttl : nat64;\n  resolver : principal;\n  owner : principal;\n  name : text;\n};\ntype RegistryUsers = record { owner : principal; operators : vec principal };\n")))}m.isMDXComponent=!0}}]);