(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7456)}])},7456:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return T}});var t=r(5893),i=r(7294),o=r(2293),a=r(7357),s=r(3666),c=r(1496),l=r(2734),u=r(155),d=r(5861),m=r(9821),f=r(8274);function h(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var p=(0,c.ZP)(o.Z,{shouldForwardProp:function(n){return"open"!==n}})((function(n){var e=n.theme,r=n.open;return function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){h(n,e,r[e])}))}return n}({zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},r&&{marginLeft:m.R,width:"calc(100% - ".concat(m.R,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})})})),g=(0,c.ZP)(a.Z)((function(n){return{display:"flex","& .pad-left":{marginLeft:"1rem"},"& .main-grid":{flexGrow:1,padding:n.theme.spacing(2),marginTop:"4em",backgroundColor:"darkgray"}}})),x=function(n){(0,l.Z)();return(0,t.jsxs)(g,{children:[(0,t.jsx)(p,{position:"fixed",children:(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(s.Z,{children:(0,t.jsx)(f.Z,{color:"secondary",fontSize:"large"})}),(0,t.jsx)(d.Z,{variant:"h4",noWrap:!0,color:"white",className:"pad-left",children:m.v.title})]})}),(0,t.jsx)(a.Z,{component:"main",className:"main-grid",children:n.children})]})},v=r(821),j=function(n){return fetch(n).then((function(n){return n.json()}))},y=r(1416),Z=r(8151),b=r(9602),w=r(6870),_=r(2023),k=r(6242),N=r(4267),P=r(3965),S=r(4945);function O(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=[],t=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(t=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);t=!0);}catch(c){i=!0,o=c}finally{try{t||null==s.return||s.return()}finally{if(i)throw o}}return r}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=(0,c.ZP)("div")((function(){return{display:"inline-flex",padding:"0.1rem",marginRight:"1em"}})),C=(0,c.ZP)(k.Z)((function(n){var e=n.theme;return{transition:"transform 0.15s ease-in-out","&:hover":{transform:"scale3d(1.05, 1.10, 1)"},"& .margin-bottom":{marginBottom:"1em"},"& .on-hover:hover":{color:e.palette.primary.main},"& .like-icon":{cursor:"pointer",color:e.palette.secondary.main},"& .like-icon:active":{color:e.palette.error.main,transform:"scale(1.5)"}}})),L=function(n){var e=n.item,r=O(i.useState(!1),2),o=r[0],s=r[1],c=(0,i.useState)(new Audio(e.music_file_path))[0],l=function(){return s(!o)};return(0,i.useEffect)((function(){o?c.play():c.pause()}),[o]),(0,i.useEffect)((function(){return c.addEventListener("ended",(function(){return s(!1)})),function(){c.removeEventListener("ended",(function(){return s(!1)}))}}),[]),(0,t.jsxs)(C,{sx:{display:"flex",justifyContent:"space-evenly"},children:[(0,t.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",margin:"2rem"},children:[(0,t.jsxs)(N.Z,{sx:{flex:"1 0 auto"},children:[(0,t.jsx)(d.Z,{variant:"h5",className:"on-hover",children:e.name}),(0,t.jsx)(d.Z,{variant:"subtitle1",color:"primary.light",className:"on-hover",children:e.artist_name})]}),(0,t.jsx)(a.Z,{className:"margin-bottom",children:(0,t.jsxs)("audio",{controls:!0,children:[(0,t.jsx)("source",{src:e.music_file_path,type:e.music_file_mimetype}),"Your browser does not support the audio element."]})}),(0,t.jsxs)(_.Z,{children:[(0,t.jsxs)(E,{onClick:function(){return function(n){var e=n.replace(/\s+/g,"");console.log(e),fetch("https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8",{method:"POST",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(n){return n.json()})).then((function(n){console.log(n),alert(JSON.stringify(n,null,2))})).catch((function(n){return console.log("error")}))}(e.id)},children:[(0,t.jsx)(w.Z,{fontSize:"small",className:"like-icon"}),(0,t.jsxs)(d.Z,{variant:"body2",sx:{marginLeft:"1em"},color:"primary.light",children:[(0,t.jsx)("strong",{children:e.likes})," Likes"]})]}),(0,t.jsxs)(E,{children:[(0,t.jsx)(Z.Z,{color:"disabled",fontSize:"small"}),(0,t.jsxs)(d.Z,{variant:"body2",color:"text.disabled",sx:{marginLeft:"1em"},children:[(0,t.jsx)("strong",{children:e.faves})," Favourites"]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{onClick:l,children:o?"Pause":"Play"})})]})]}),(0,t.jsxs)("div",{className:"outer-div",children:[(0,t.jsx)(P.Z,{component:"img",sx:{height:300,width:300},image:e.cover_image_path,alt:e.name,className:"cover-image"}),o?(0,t.jsx)(S.Z,{className:"hover-img",color:"secondary",onClick:l,sx:{fontSize:200,cursor:"pointer"}}):(0,t.jsx)(b.Z,{className:"hover-img",color:"secondary",onClick:l,sx:{fontSize:200,cursor:"pointer"}})]})]},e.id)},z=function(n){var e=n.items;(0,l.Z)();return(0,t.jsx)(a.Z,{children:(0,t.jsx)(y.Z,{sx:{display:"grid",gridTemplateColumns:{sm:"1fr",md:"1fr 1fr"},gridGap:"1em"},children:null===e||void 0===e?void 0:e.map((function(n){return(0,t.jsx)(L,{item:n},n.id)}))})})},T=function(){var n=function(){var n=(0,v.ZP)("https://api-stg.jam-community.com/song/trending",j),e=n.data,r=n.error;return{data:e,isLoading:!r&&!e,error:r}}(),e=n.data;n.isLoading,n.error;return(0,t.jsx)(x,{children:e&&(0,t.jsx)(z,{items:e})})}}},function(n){n.O(0,[74,330,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);