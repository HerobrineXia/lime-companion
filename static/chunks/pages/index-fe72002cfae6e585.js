(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4488)}])},4488:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Home}});var n=a(5893),r=a(9044),s=a.n(r),i=a(9008),o=a.n(i),c=a(7294),l=a(5697),d=a.n(l),h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},p=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,__spreadValues=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&__defNormalProp(e,a,t[a]);if(x)for(var a of x(t))g.call(t,a)&&__defNormalProp(e,a,t[a]);return e},__spreadProps=(e,t)=>u(e,m(t)),__objRest=(e,t)=>{var a={};for(var n in e)f.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&x)for(var n of x(e))0>t.indexOf(n)&&g.call(e,n)&&(a[n]=e[n]);return a},createReactComponent=(e,t,a)=>{let n=(0,c.forwardRef)((t,n)=>{var{color:r="currentColor",size:s=24,stroke:i=2,children:o}=t,l=__objRest(t,["color","size","stroke","children"]);return(0,c.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:n},h),{width:s,height:s,stroke:r,strokeWidth:i,className:`tabler-icon tabler-icon-${e}`}),l),[...a.map(([e,t])=>(0,c.createElement)(e,t)),...o||[]])});return n.propTypes={color:d().string,size:d().oneOfType([d().string,d().number]),stroke:d().oneOfType([d().string,d().number])},n.displayName=`${t}`,n},y=createReactComponent("arrow-bar-left","IconArrowBarLeft",[["path",{d:"M4 12l10 0",key:"svg-0"}],["path",{d:"M4 12l4 4",key:"svg-1"}],["path",{d:"M4 12l4 -4",key:"svg-2"}],["path",{d:"M20 4l0 16",key:"svg-3"}]]);let CloseSidebarButton=e=>{let{onClick:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"fixed top-[42px] left-[335px] z-50 h-7 w-7",onClick:t,children:(0,n.jsx)(y,{})}),(0,n.jsx)("div",{onClick:t,className:"absolute top-0 left-0 z-10 w-full bg-black opacity-70 sm:hidden"})]})},SidebarButton=e=>{let{text:t,icon:a,onClick:r,className:s}=e;return(0,n.jsx)("button",{className:"flex justify-between w-full cursor-pointer select-none items-center gap-3 rounded-md py-3 px-3 text-[14px] leading-3 text-white transition-colors duration-200 hover:bg-gray-500/10 ".concat(s),onClick:r,children:(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[a,(0,n.jsx)("span",{children:t})]})})};var b=createReactComponent("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),LHS_SettingsButton=()=>{let[e,t]=(0,c.useState)(!1);return(0,n.jsx)("div",{className:"relative flex flex-col items center",children:(0,n.jsx)(SidebarButton,{text:"Settings",icon:(0,n.jsx)("div",{children:(0,n.jsx)(b,{size:23})}),onClick:()=>{}})})},j=createReactComponent("brand-steam","IconBrandSteam",[["path",{d:"M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 3l-.176 0a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z",key:"svg-0"}],["circle",{cx:"16.5",cy:"9.5",r:"1",fill:"currentColor",key:"svg-1"}]]),LHS_Login=()=>(0,n.jsx)("div",{className:"relative flex flex-col items center",children:(0,n.jsx)(SidebarButton,{text:"Login",icon:(0,n.jsx)("div",{children:(0,n.jsx)(j,{})}),onClick:()=>{}})}),v=createReactComponent("reload","IconReload",[["path",{d:"M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747",key:"svg-0"}],["path",{d:"M20 4v5h-5",key:"svg-1"}]]);let _={url:"https://www.bungie.net/Platform",key:"ace1abe8389b458fa91b621887738eb2"};async function Fetch(){let e={method:"GET","x-api-key":_.key,authorization:"grant_type=authorization_code&code=45568"},t=await fetch(_.url+"/Destiny2/Manifest",e),a=await t.json();console.log(a)}async function GetCharacterInfo(){let e={method:"GET",headers:{"x-api-key":_.key},authorization:"grant_type=authorization_code&code=45568"},t=await fetch(_.url+"/Destiny2/3/Profile/4611686018484567966/?components=200",e),a=await t.json();return a.Response.characters.data}async function GetVerboseInformation(){let e={method:"GET",headers:{"x-api-key":_.key},authorization:"grant_type=authorization_code&code=45568"},t=await fetch(_.url+"/Destiny2/3/Profile/4611686018484567966/?components=205,201",e),a=await t.json();return console.log(a),a}async function GetItem(e){let t={method:"GET",headers:{"x-api-key":_.key},Authorization:"grant_type=authorization_code&code=45568"},a=await fetch(_.url+"/Destiny2/Manifest/DestinyInventoryItemDefinition/".concat(e,"/"),t),n=await a.json();return n.Response}var LHS_ReloadManifest=()=>(0,n.jsx)("div",{className:"relative flex flex-col items center",children:(0,n.jsx)(SidebarButton,{text:"Fetch Manifest",icon:(0,n.jsx)("div",{children:(0,n.jsx)(v,{})}),onClick:()=>{Fetch()}})}),LHS_ReloadCharacters=()=>(0,n.jsx)("div",{className:"relative flex flex-col items center",children:(0,n.jsx)(SidebarButton,{text:"Reload Character Info",icon:(0,n.jsx)("div",{children:(0,n.jsx)(v,{})})})});let SidebarImageButton=e=>{let{text:t,race:a,light:r,image:s,onClick:i,className:o}=e;return(0,n.jsxs)("button",{className:"flex justify-between w-full cursor-pointer select-none items-center gap-3 rounded-md py-3 px-3 text-[14px] leading-3 text-white transition-colors duration-200 hover:bg-gray-500/10 ".concat(o),onClick:i,style:{height:"64px",backgroundImage:"url(".concat(s,")"),backgroundSize:"314px 64px",marginTop:"20px"},children:[(0,n.jsxs)("div",{style:{marginLeft:"65px",textAlign:"center"},children:[(0,n.jsx)("div",{style:{fontWeight:"700"},children:t}),(0,n.jsx)("div",{style:{marginTop:"10px"},children:a})]}),(0,n.jsxs)("div",{style:{color:"#f0dc2e",fontSize:"19px",fontWeight:"700",marginRight:"4px"},children:["✧  ",r]})]})},C=(0,c.createContext)(void 0),S=(0,c.createContext)({characters:{},updateCharacters:()=>{}}),k=(0,c.createContext)(void 0),w=(0,c.createContext)({verbose:{},updateVerbose:()=>{}}),LhsSidebar=()=>{let{characters:e,updateCharacters:t}=(0,c.useContext)(S),{sidebarOpen:a,toggleSidebar:r}=(0,c.useContext)(C),{chosenCharacter:s,setChosenCharacter:i}=(0,c.useContext)(k),{verbose:o,updateVerbose:l}=(0,c.useContext)(w),[d,h]=(0,c.useState)(!1),characterInfo=()=>{GetCharacterInfo().then(e=>{t(e)}),GetVerboseInformation().then(e=>{l(e)})};(0,c.useEffect)(()=>{let fetchCharacterInfo=async()=>{let e=await GetCharacterInfo(),a=await GetVerboseInformation();t(e),l(a),h(!0)};d||fetchCharacterInfo()},[o,e,d]);let getEmblem=t=>"http://bungie.net"+e[t].emblemBackgroundPath,getClass=t=>{let a=e[t].classType;return"0"==a?"Titan":"1"==a?"Hunter":"Warlock"},getRace=t=>{let a=e[t].raceType;return"0"==a?"Human":"1"==a?"Awoken":"Exo"};return(0,n.jsxs)("div",{className:"fixed top-0 left-0 z-40 flex h-full w-[330px] flex-none flex-col space-y-2 p-2 duration-1000 sidebar ".concat(a?"":"sidebar-closed"),children:[(0,n.jsx)(LHS_Login,{}),(0,n.jsx)("div",{className:"flex-grow flex-grow-1 overflow-auto",children:Object.keys(e).map((t,a)=>(0,n.jsx)(SidebarImageButton,{text:getClass(t),race:getRace(t),light:e[t].light,image:getEmblem(t),onClick:()=>i(t)},t))}),(0,n.jsx)("div",{onClick:()=>{characterInfo(),h(!1)},children:(0,n.jsx)(LHS_ReloadCharacters,{})}),(0,n.jsx)(LHS_ReloadManifest,{}),(0,n.jsx)(LHS_SettingsButton,{}),(0,n.jsx)(CloseSidebarButton,{onClick:()=>r(!a)})]})},CharacterInventory=()=>{let{chosenCharacter:e}=(0,c.useContext)(k),{characters:t,updateCharacters:a}=(0,c.useContext)(S),{verbose:r}=(0,c.useContext)(w),[s,i]=(0,c.useState)([]),[o,l]=(0,c.useState)([]),[d,h]=(0,c.useState)([]),[p,u]=(0,c.useState)(!0),[m,x]=(0,c.useState)(1);return((0,c.useEffect)(()=>{x(.25);let e=setTimeout(()=>x(1),250);return()=>clearTimeout(e)},[e]),(0,c.useEffect)(()=>{u(!0),console.log(r),r&&r.Response&&r.Response.characterEquipment.data[e]&&r.Response.characterEquipment.data[e].items&&(i(r.Response.characterEquipment.data[e].items),u(!1))},[r,e,t]),(0,c.useEffect)(()=>{let fetchItems=async()=>{if(s.length>0){let e=s.map(e=>GetItem(e.itemHash)),t=await Promise.all(e);l(t)}};fetchItems()},[s]),p)?(0,n.jsx)("div",{style:{paddingLeft:"45px",paddingTop:"30px",fontWeight:"700"},children:"Select a character"}):(0,n.jsx)("div",{className:"",style:{paddingLeft:"45px",paddingTop:"30px",fontWeight:"700",opacity:m,transition:"opacity 0.25s ease-out"},children:o.length>0?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{className:"gear-icon",src:"https://bungie.net".concat(o[0].displayProperties.icon)})}),(0,n.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 60px)",gridGap:"2px",marginLeft:"14px"},children:Array(9).fill(0).map((e,t)=>(0,n.jsx)("img",{className:"gear-icon",src:"https://bungie.net".concat(o[0].displayProperties.icon)},t))})]}),(0,n.jsx)("img",{className:"gear-icon",src:"https://bungie.net".concat(o[1].displayProperties.icon)}),(0,n.jsx)("img",{className:"gear-icon",src:"https://bungie.net".concat(o[2].displayProperties.icon)}),(0,n.jsx)("img",{className:"gear-icon",src:"https://bungie.net".concat(o[3].displayProperties.icon)}),(0,n.jsx)("img",{className:"gear-icon",src:"https://bungie.net".concat(o[4].displayProperties.icon)}),(0,n.jsx)("img",{className:"gear-icon",src:"https://bungie.net".concat(o[5].displayProperties.icon)}),(0,n.jsx)("img",{className:"gear-icon",src:"https://bungie.net".concat(o[6].displayProperties.icon)}),(0,n.jsx)("img",{className:"gear-icon",src:"https://bungie.net".concat(o[7].displayProperties.icon)})]}):""})};var Main_Page=()=>{let{sidebarOpen:e}=(0,c.useContext)(C);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"",style:{backgroundColor:"#adaca6",height:"calc(100vh - 50px)"},children:(0,n.jsx)("div",{className:"transistion-all duration-1000 ".concat(e?"pushed":""),style:{maxWidth:"100vh"},children:(0,n.jsx)(CharacterInventory,{})})})})},Navbar_Navbar=()=>{let{sidebarOpen:e}=(0,c.useContext)(C),{characters:t}=(0,c.useContext)(S),{chosenCharacter:a}=(0,c.useContext)(k),[r,s]=(0,c.useState)(!1);return(0,n.jsx)("div",{className:"top-0 z-20 navbar",children:(0,n.jsxs)("div",{className:"transition-all duration-1000 ".concat(e?"pushed":""),style:{color:"white",fontSize:"17px",marginLeft:"10px",marginTop:"13px"},children:[(0,n.jsx)("div",{style:{fontWeight:"700"},children:"Lime Companion"}),""===a?"":(0,n.jsxs)("div",{style:{fontWeight:"700",marginLeft:"10px",marginTop:"0px",fontSize:"17px",color:"#406da8"},children:[1===t[a].classType&&"Hunter",0===t[a].classType&&"Titan",2===t[a].classType&&"Warlock"]})]})})},home=()=>{let[e,t]=(0,c.useState)(!0),[a,r]=(0,c.useState)([]),[s,i]=(0,c.useState)(""),[o,l]=(0,c.useState)([]);return(0,c.useEffect)(()=>{let fetchCharacters=async()=>{let e=await GetCharacterInfo();r(e)};fetchCharacters()},[]),(0,c.useEffect)(()=>{let fetchVerbose=async()=>{let e=await GetVerboseInformation();l(e)};fetchVerbose()},[]),(0,n.jsx)("div",{children:(0,n.jsx)(C.Provider,{value:{sidebarOpen:e,toggleSidebar:()=>t(!e)},children:(0,n.jsx)(S.Provider,{value:{characters:a,updateCharacters:r},children:(0,n.jsx)(k.Provider,{value:{chosenCharacter:s,setChosenCharacter:i},children:(0,n.jsxs)(w.Provider,{value:{verbose:o,updateVerbose:l},children:[(0,n.jsx)(LhsSidebar,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)(Navbar_Navbar,{}),(0,n.jsx)(Main_Page,{})]})]})})})})})};function Home(){return(0,n.jsxs)("main",{className:"".concat(s().className),children:[(0,n.jsx)(o(),{children:(0,n.jsx)("title",{children:"Lime Companion"})}),(0,n.jsx)(home,{})]})}},9044:function(e){e.exports={style:{fontFamily:"'__Inter_bda381', '__Inter_Fallback_bda381'",fontStyle:"normal"},className:"__className_bda381"}},9008:function(e,t,a){e.exports=a(4605)},2703:function(e,t,a){"use strict";var n=a(414);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,a,r,s,i){if(i!==n){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},5697:function(e,t,a){e.exports=a(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);