(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4750)}])},4750:function(n,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return z},default:function(){return L}});var t=r(5893),i=r(7294),o=r(7357),a=r(1416),s=r(2734),c=r(8151),l=r(9602),u=r(6870),d=r(2023),m=r(6242),f=r(4267),h=r(3965),p=r(1496),x=r(5861),g=r(4945);function v(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=[],t=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(t=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);t=!0);}catch(c){i=!0,o=c}finally{try{t||null==s.return||s.return()}finally{if(i)throw o}}return r}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=(0,p.ZP)("div")((function(){return{display:"inline-flex",padding:"0.1rem",marginRight:"1em"}})),j=(0,p.ZP)(m.Z)((function(n){var e=n.theme;return{transition:"transform 0.15s ease-in-out","&:hover":{transform:"scale3d(1.05, 1.10, 1)"},"& .margin-bottom":{marginBottom:"1em"},"& .on-hover:hover":{color:e.palette.primary.main},"& .like-icon":{cursor:"pointer",color:e.palette.secondary.main},"& .like-icon:active":{color:e.palette.error.main,transform:"scale(1.5)"}}})),Z=function(n){var e=n.item,r=v(i.useState(!1),2),a=r[0],s=r[1],m=(0,i.useRef)(null),p=function(){return s(!a)};return(0,i.useEffect)((function(){return m.current&&m.current.addEventListener("ended",(function(){return s(!1)})),function(){m.current&&m.current.removeEventListener("ended",(function(){return s(!1)}))}}),[]),(0,i.useEffect)((function(){m.current&&(a?m.current.play():m.current.pause())}),[a]),(0,t.jsxs)(j,{sx:{display:"flex",justifyContent:"space-evenly"},children:[(0,t.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",margin:"2rem"},children:[(0,t.jsxs)(f.Z,{sx:{flex:"1 0 auto"},children:[(0,t.jsx)(x.Z,{variant:"h5",className:"on-hover",children:e.name}),(0,t.jsx)(x.Z,{variant:"subtitle1",color:"primary.light",className:"on-hover",children:e.artist_name})]}),(0,t.jsx)(o.Z,{className:"margin-bottom",children:(0,t.jsxs)("audio",{controls:!0,ref:m,children:[(0,t.jsx)("source",{src:e.music_file_path,type:e.music_file_mimetype}),"Your browser does not support the audio element."]})}),(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(y,{onClick:function(){return function(n){var e=n.replace(/\s+/g,"");console.log(e),fetch("https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8",{method:"POST",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(n){return n.json()})).then((function(n){console.log(n),alert(JSON.stringify(n,null,2))})).catch((function(n){return console.log("error")}))}(e.id)},children:[(0,t.jsx)(u.Z,{fontSize:"small",className:"like-icon"}),(0,t.jsxs)(x.Z,{variant:"body2",sx:{marginLeft:"1em"},color:"primary.light",children:[(0,t.jsx)("strong",{children:e.likes})," Likes"]})]}),(0,t.jsxs)(y,{children:[(0,t.jsx)(c.Z,{color:"disabled",fontSize:"small"}),(0,t.jsxs)(x.Z,{variant:"body2",color:"text.disabled",sx:{marginLeft:"1em"},children:[(0,t.jsx)("strong",{children:e.faves})," Favourites"]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{onClick:p,children:a?"Pause":"Play"})})]})]}),(0,t.jsxs)("div",{className:"outer-div",children:[(0,t.jsx)(h.Z,{component:"img",sx:{height:300,width:300},image:e.cover_image_path,alt:e.name,className:"cover-image"}),a?(0,t.jsx)(g.Z,{className:"hover-img",color:"secondary",onClick:p,sx:{fontSize:200,cursor:"pointer"}}):(0,t.jsx)(l.Z,{className:"hover-img",color:"secondary",onClick:p,sx:{fontSize:200,cursor:"pointer"}})]})]},e.id)},b=function(n){var e=n.items;(0,s.Z)();return(0,t.jsx)(o.Z,{children:(0,t.jsx)(a.Z,{sx:{display:"grid",gridTemplateColumns:{sm:"1fr",md:"1fr 1fr"},gridGap:"1em"},children:null===e||void 0===e?void 0:e.map((function(n){return(0,t.jsx)(Z,{item:n},n.id)}))})})},_=r(2293),w=r(3666),k=r(155),N=r(9821),S=r(8274);function P(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var O=(0,p.ZP)(_.Z,{shouldForwardProp:function(n){return"open"!==n}})((function(n){var e=n.theme,r=n.open;return function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){P(n,e,r[e])}))}return n}({zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},r&&{marginLeft:N.R,width:"calc(100% - ".concat(N.R,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})})})),E=(0,p.ZP)(o.Z)((function(n){return{display:"flex","& .pad-left":{marginLeft:"1rem"},"& .main-grid":{flexGrow:1,padding:n.theme.spacing(2),marginTop:"4em",backgroundColor:"darkgray"}}})),C=function(n){(0,s.Z)();return(0,t.jsxs)(E,{children:[(0,t.jsx)(O,{position:"fixed",children:(0,t.jsxs)(k.Z,{children:[(0,t.jsx)(w.Z,{children:(0,t.jsx)(S.Z,{color:"secondary",fontSize:"large"})}),(0,t.jsx)(x.Z,{variant:"h4",noWrap:!0,color:"white",className:"pad-left",children:N.v.title})]})}),(0,t.jsx)(o.Z,{component:"main",className:"main-grid",children:n.children})]})},z=!0,L=function(n){var e=n.data;return(0,t.jsx)(C,{children:e&&(0,t.jsx)(b,{items:e})})}}},function(n){n.O(0,[74,974,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);