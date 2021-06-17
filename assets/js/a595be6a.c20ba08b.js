(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9139],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6611:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={id:"executor-extension",title:"Executor"},c={unversionedId:"extensions/executor-extension",id:"extensions/executor-extension",isDocsHomePage:!1,title:"Executor",description:"Extension description and scope",source:"@site/docs/extensions/Executor.md",sourceDirName:"extensions",slug:"/extensions/executor-extension",permalink:"/tribute-contracts/docs/extensions/executor-extension",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/extensions/Executor.md",version:"current",frontMatter:{id:"executor-extension",title:"Executor"},sidebar:"docs",previous:{title:"NFT",permalink:"/tribute-contracts/docs/extensions/nft-extension"},next:{title:"Overview",permalink:"/tribute-contracts/docs/adapters"}},s=[{value:"Extension description and scope",id:"extension-description-and-scope",children:[]},{value:"Extension state",id:"extension-state",children:[{value:"DaoRegistry public dao;",id:"daoregistry-public-dao",children:[]},{value:"bool public initialized = false;",id:"bool-public-initialized--false",children:[]}]},{value:"Extension functions",id:"extension-functions",children:[{value:"function initialize",id:"function-initialize",children:[]},{value:"function _delegate",id:"function-_delegate",children:[]},{value:"function _fallback",id:"function-_fallback",children:[]},{value:"function fallback",id:"function-fallback",children:[]},{value:"function receive",id:"function-receive",children:[]}]},{value:"Events",id:"events",children:[]},{value:"Required Access Permissions",id:"required-access-permissions",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"extension-description-and-scope"},"Extension description and scope"),(0,r.kt)("p",null,"The Executor Extension is a Proxy Contract inspired by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/Proxy.sol"},"OpenZeppelin Proxy")," from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin"},"OpenZeppelin")," team."),(0,r.kt)("p",null,"The common use case for ",(0,r.kt)("a",{parentName:"p",href:"https://blog.openzeppelin.com/proxy-patterns/"},"Proxy Patterns in Ethereum Blockchain")," is to make your contracts upgradable. This is achieved by setting up a proxy contract that allows you to call a new deployed contract as if the main logic has been upgraded. The trick here is to send the call through a Proxy contract, and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")," EVM instruction to redirect/delegate its the execution to the latest deployed contract logic."),(0,r.kt)("p",null,"When working with Proxy contract we need to take into account:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you call a function that is not supported/implemented by the contract, the contract ",(0,r.kt)("inlineCode",{parentName:"li"},"fallback")," function is trigged. You can customize your ",(0,r.kt)("inlineCode",{parentName:"li"},"fallback")," function to handle special cases. For instance, you can make your proxy contract to use a custom ",(0,r.kt)("inlineCode",{parentName:"li"},"fallback")," function to redirect/delegate calls to other contracts."),(0,r.kt)("li",{parentName:"ol"},"If a contract ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," delegates a call to another contract ",(0,r.kt)("inlineCode",{parentName:"li"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," executes the code of contract ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," in the context of contract ",(0,r.kt)("inlineCode",{parentName:"li"},"A"),", so the ",(0,r.kt)("inlineCode",{parentName:"li"},"msg.value")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," values will be preserved, i.e: you will not see the address of ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," in the executed function in ",(0,r.kt)("inlineCode",{parentName:"li"},"B"),", but you will see the actual caller address that triggered the call to contract ",(0,r.kt)("inlineCode",{parentName:"li"},"A"),". In addition to that, the storage modifications will always be applied to the storage of contract ",(0,r.kt)("inlineCode",{parentName:"li"},"A"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," storage remains intact even after the delegated execution.")),(0,r.kt)("p",null,"With that in mind, we implemented the Executor Extension, which adds to the DAO the capability of executing delegated calls to another contract using the same EVM instruction ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall"),". The call is triggered via custom ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," function, which sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," as the called address, and executes in the target contract identified by its address provided via ",(0,r.kt)("inlineCode",{parentName:"p"},"implementation")," argument. For that, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," function to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"implementation")," address as the ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender"),", i.e: the contract ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", in our example, will be calling itself through a proxy. This enables different use cases for proxy patterns in the Tribute DAO Framework."),(0,r.kt)("p",null,"Most of the time, we determine who is calling a function by checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender"),", but supposing we want to execute calls from the DAO through different adapters directly, ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," would be the address of the adapter itself, and that is an issue because an adapter can be shared between different DAOs. In addition to that, if you want to do execute a new logic from a new adapter, the adapter address would change, hence the ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender"),", and there is no way to link between them."),(0,r.kt)("p",null,"However, when you execute the function call through the Executor Extension, suddenly the DAO has creates an identity, because the interaction with the implementation contract that triggers a new function call that will be using the ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," as the Executor address via an internal transaction, and that provides a generic proxy pattern that allows you to interact with other smart contracts with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," (Executor Extension), no matter the logic implemented in the target contract."),(0,r.kt)("p",null,"There are some restrictions and conventions that need to be respected to make sure the calls are executed safelly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The caller contract, usually an Adapter, must have permission to use the extension. The permission is set through the ACL Flag: ",(0,r.kt)("inlineCode",{parentName:"li"},"EXECUTOR")," during the Adapter configuration phase."),(0,r.kt)("li",{parentName:"ul"},"The caller contract must implement the function that will be triggered by the Executor, and it needs to be restricted to the Executor address only. It can be done by adding the access guard: ",(0,r.kt)("inlineCode",{parentName:"li"},"executorFunc(dao)")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"AdapterGuard"),"."),(0,r.kt)("li",{parentName:"ul"},"The caller contract can not change/upgrade it's own state/storage in the logic function (i.e: the function that will be called by the Executor). The reason for that is to prevent storage collisions with the Executor storage. Any state change must be stored in a third contract, the contract that actually manages the state changes, and that will be associated to the Executor address though an internal transaction.")),(0,r.kt)("p",null,"With the Executor Extension we can cover new use cases, and basically execute any sort function call from the DAO to the outside world. Considering the Tribute DAO Framework architecture, the call should always go through an Adapter, because a core contract should not acess the extenal world directly, but it is fine if it relies on an Adapter. Some examples of these proxy call are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"joining an LP from the DAO (with staking)."),(0,r.kt)("li",{parentName:"ul"},"joining another DAO."),(0,r.kt)("li",{parentName:"ul"},"claiming money from a parent DAO.")),(0,r.kt)("h2",{id:"extension-state"},"Extension state"),(0,r.kt)("h3",{id:"daoregistry-public-dao"},"DaoRegistry public dao;"),(0,r.kt)("p",null,"The DAO address that this extension belongs to"),(0,r.kt)("h3",{id:"bool-public-initialized--false"},"bool public initialized = false;"),(0,r.kt)("p",null,"Internally tracks deployment under eip-1167 proxy pattern"),(0,r.kt)("h4",{id:"access-flags"},"Access Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None, it does not access the DAO Registry.")),(0,r.kt)("p",null,"Access Control Layer Flags - explicitly grant the extension permissions to change the bank and dao states."),(0,r.kt)("h2",{id:"extension-functions"},"Extension functions"),(0,r.kt)("h3",{id:"function-initialize"},"function initialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Initializes the extension with the DAO that it belongs to,\n  * and checks if the parameters were set.\n  * @param _dao The address of the DAO that owns the extension.\n  * @param creator The owner of the DAO and Extension that is also a member of the DAO.\n  */\nfunction initialize(DaoRegistry _dao, address creator) external override\n")),(0,r.kt)("h3",{id:"function-_delegate"},"function ","_","delegate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Delegates the current call to `implementation`.\n  *\n  * This function does not return to its internall call site, it will return directly to the external caller.\n  */\nfunction _delegate(address implementation)\n    internal\n    virtual\n    hasExtensionAccess(AclFlag.EXECUTE)\n")),(0,r.kt)("h3",{id:"function-_fallback"},"function ","_","fallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Delegates the current call to the sender address.\n  *\n  * This function does not return to its internall call site, it will return directly to the external caller.\n  */\nfunction _fallback() internal virtual\n")),(0,r.kt)("h3",{id:"function-fallback"},"function fallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"}," /**\n  * @dev Fallback function that delegates calls to the sender address. Will run if no other\n  * function in the contract matches the call data.\n  */\nfallback() external payable\n")),(0,r.kt)("h3",{id:"function-receive"},"function receive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Fallback function that delegates calls to the address returned by `_implementation()`.\n  */\nreceive() external payable\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No events are emitted.")),(0,r.kt)("h2",{id:"required-access-permissions"},"Required Access Permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EXECUTE"),": to be able to execute the delegatedcall using the Executor Proxy pattern.")))}u.isMDXComponent=!0}}]);