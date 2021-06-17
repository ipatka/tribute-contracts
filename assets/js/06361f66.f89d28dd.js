(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2576],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||l[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5578:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],c={},s={unversionedId:"adapters/Template",id:"adapters/Template",isDocsHomePage:!1,title:"Template",description:"Adapter description and scope",source:"@site/docs/adapters/Template.md",sourceDirName:"adapters",slug:"/adapters/Template",permalink:"/tribute-contracts/docs/adapters/Template",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/adapters/Template.md",version:"current",frontMatter:{}},d=[{value:"Adapter description and scope",id:"adapter-description-and-scope",children:[]},{value:"Adapter workflow",id:"adapter-workflow",children:[]},{value:"Adapter configuration",id:"adapter-configuration",children:[]},{value:"Adapter state",id:"adapter-state",children:[]},{value:"Dependencies and interactions (internal / external)",id:"dependencies-and-interactions-internal--external",children:[]},{value:"Functions description and assumptions / checks",id:"functions-description-and-assumptions--checks",children:[{value:"receive() external payable",id:"receive-external-payable",children:[]},{value:"function submitKickProposal",id:"function-submitkickproposal",children:[]}]},{value:"Events",id:"events",children:[]}],p={toc:d};function l(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"adapter-description-and-scope"},"Adapter description and scope"),(0,i.kt)("p",null,"This is a template for the documentation of an Adapter."),(0,i.kt)("p",null,"Here you can provide a brief description of the adapter and what is the use-case covered by the implementation. It is also good to add the goal of the Adapter and what value it brings to the DAO."),(0,i.kt)("h2",{id:"adapter-workflow"},"Adapter workflow"),(0,i.kt)("p",null,"An overview of the entire process executed by Adapter functions, the main interactions and routines covered/executed."),(0,i.kt)("h2",{id:"adapter-configuration"},"Adapter configuration"),(0,i.kt)("p",null,"Specify which additional configurations are required to make this adapter work. For instance: needs access to the DAO members, needs access to the DAO Bank, relies on Adapter X, Y and Extension Z."),(0,i.kt)("p",null,"DAORegistry Access Flags: ",(0,i.kt)("inlineCode",{parentName:"p"},"SUBMIT_PROPOSAL"),", ...."),(0,i.kt)("p",null,"Bank Extension Access Flags: ",(0,i.kt)("inlineCode",{parentName:"p"},"WITHDRAW"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INTERNAL_TRANSFER"),", ...."),(0,i.kt)("h2",{id:"adapter-state"},"Adapter state"),(0,i.kt)("p",null,"Describe each variable public and private of the adapter and what is the purpose of that variable."),(0,i.kt)("h2",{id:"dependencies-and-interactions-internal--external"},"Dependencies and interactions (internal / external)"),(0,i.kt)("p",null,"Add the information about all the interactions that are triggered by this DAO, which contracts it depends on, and which functions it calls."),(0,i.kt)("h2",{id:"functions-description-and-assumptions--checks"},"Functions description and assumptions / checks"),(0,i.kt)("p",null,"Describe the public and private functions signatures with proper documentation and clearly explain what each function does. Specify what are expected the arguments and pre-conditions to execute the functions. Also, provide what is the expected outcome."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("h3",{id:"receive-external-payable"},"receive() external payable"),(0,i.kt)("h3",{id:"function-submitkickproposal"},"function submitKickProposal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Creates a guild kick proposal, opens it for voting, and sponsors it.\n     * @dev A member can not kick himself.\n     * @dev Only one kick per DAO can be executed at time.\n     * @dev Only members that have units can be kicked out.\n     * @dev Proposal ids can not be reused.\n     * @param dao The dao address.\n     * @param proposalId The guild kick proposal id.\n     * @param memberToKick The member address that should be kicked out of the DAO.\n     * @param data Additional information related to the kick proposal.\n     */\n    function submitKickProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        address memberToKick,\n        bytes calldata data\n    ) external override onlyMember(dao)\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"List all the events that are emitted by the function in this Adapter implementation."))}l.isMDXComponent=!0}}]);