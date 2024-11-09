import{r,n as f}from"./components-yolBKbWE.js";import{b as R,m as N,t as z,l as C,c as P,n as E,k as q,B as Q,I as J}from"./heading-B4Yeofwf.js";const X="/assets/gotham-book-Bnaws0Ef.woff2",Y="/assets/gotham-medium-0VT3RO8I.woff2",Z="/assets/gotham-bold-italic-C_msAlmW.woff2",ee="/assets/gotham-bold-D1kvQ7KV.woff2",te="/assets/gotham-book-italic-Bm2IEtSK.woff2",oe="/assets/gotham-medium-italic-Dok430ou.woff2",se="/assets/ipa-gothic-DimHCOud.woff2",L=r.createContext({}),ke=({theme:e="dark",children:t,className:n,as:s="div",toggleTheme:i,...a})=>{const o=W(),c=!o.theme;return f.jsxs(L.Provider,{value:{theme:e,toggleTheme:i||o.toggleTheme},children:[c&&t,!c&&f.jsx(s,{className:R(n),"data-theme":e,...a,children:t})]})};function W(){return r.useContext(L)}function y(e){return e.replace(/\s\s+/g," ")}function _(e){return y(Object.keys(e).map(t=>`--${t}: ${e[t]};`).join(`

`))}function ae(){return y(Object.keys(N).map(e=>`
        @media (max-width: ${N[e]}px) {
          :root {
            ${_(z[e])}
          }
        }
      `).join(`
`))}const ne=y(`
  @layer theme, base, components, layout;
`),re=y(`
  :root {
    ${_(z.base)}
  }

  ${ae()}

  [data-theme='dark'] {
    ${_(C.dark)}
  }

  [data-theme='light'] {
    ${_(C.light)}
  }
`),ce=y(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${X}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${te}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${Y}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${oe}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${ee}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${Z}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${se}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),$e=y(`
  ${ne}

  @layer theme {
    ${re}
    ${ce}
  }
`);function ie(){const[e,t]=r.useState(!1);return r.useEffect(()=>{t(!0)},[]),e}function le(e,t,n={},s=!0){const[i,a]=r.useState(!1),[o,c]=r.useState(!1);return r.useEffect(()=>{if(!(e!=null&&e.current))return;const l=new IntersectionObserver(([u])=>{const{isIntersecting:m,target:h}=u;a(m),m&&t&&(l.unobserve(h),c(!0))},n);return!o&&s&&l.observe(e.current),()=>l.disconnect()},[e,t,n,o,s]),i}async function fe({src:e,srcSet:t,sizes:n}){return new Promise((s,i)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");let a=new Image;e&&(a.src=e),t&&(a.srcset=t),n&&(a.sizes=n);const o=()=>{a.removeEventListener("load",o);const c=a.currentSrc;a=null,s(c)};a.addEventListener("load",o)}catch(a){i(`Error loading ${t}: ${a}`)}})}async function ue(e=1,t=1){return new Promise(n=>{const s=document.createElement("canvas"),i=s.getContext("2d");s.width=e,s.height=t,i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0,0,e,t),s.toBlob(async a=>{if(!a)throw new Error("Video thumbnail failed to load");const o=URL.createObjectURL(a);s.remove(),n(o)})})}async function me({srcSet:e,sizes:t}){const n=await Promise.all(e.split(", ").map(async o=>{const[c,l]=o.split(" "),u=Number(l.replace("w","")),m=await ue(u);return{src:c,image:m,width:l}})),s=n.map(({image:o,width:c})=>`${o} ${c}`).join(", "),i=await fe({srcSet:s,sizes:t});return n.find(o=>o.image===i).src}const de="_image_4szht_2",he="_container_4szht_42",pe="_elementWrapper_4szht_49",ye="_placeholder_4szht_71",ge="_element_4szht_49",we="_button_4szht_104",ve="_noise_4szht_1",p={image:de,container:he,elementWrapper:pe,placeholder:ye,element:ge,button:we,noise:ve},xe=({className:e,style:t,reveal:n,delay:s=0,raised:i,src:a,srcSet:o,placeholder:c,...l})=>{const[u,m]=r.useState(!1),{theme:h}=W(),g=r.useRef(),w=a||o.split(" ")[0],S=le(g,!D(w)),v=r.useCallback(()=>{m(!0)},[]);return f.jsx("div",{className:R(p.image,e),"data-visible":S||u,"data-reveal":n,"data-raised":i,"data-theme":h,style:P({delay:E(s)},t),ref:g,children:f.jsx(be,{delay:s,onLoad:v,loaded:u,inViewport:S,reveal:n,src:w,srcSet:o,placeholder:c,...l})})},be=({onLoad:e,loaded:t,inViewport:n,srcSet:s,placeholder:i,delay:a,src:o,alt:c,play:l=!0,restartOnPause:u,reveal:m,sizes:h,width:g,height:w,noPauseButton:S,cover:v,...G})=>{const I=q(),[F,U]=r.useState(!0),[T,k]=r.useState(!I),[j,V]=r.useState(),[B,A]=r.useState(!1),O=r.useRef(),d=r.useRef(),b=D(o),M=n,H=ie();r.useEffect(()=>{b&&s?(async()=>{const x=await me({srcSet:s,sizes:h});V(x)})():b&&V(o)},[b,h,o,s]),r.useEffect(()=>{if(!d.current||!j)return;const $=()=>{k(!0),d.current.play()},x=()=>{k(!1),d.current.pause()};l||(x(),u&&(d.current.currentTime=0)),!B&&(n?n&&!I&&l&&$():x())},[n,l,I,u,B,j]);const K=$=>{$.preventDefault(),A(!0),d.current.paused?(k(!0),d.current.play()):(k(!1),d.current.pause())};return f.jsxs("div",{className:p.elementWrapper,"data-reveal":m,"data-visible":n||t,style:P({delay:E(a+1e3)}),children:[b&&H&&f.jsxs(r.Fragment,{children:[f.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:p.element,"data-loaded":t,"data-cover":v,autoPlay:!I,onLoadStart:e,src:j,"aria-label":c,ref:d,...G}),!S&&f.jsxs(Q,{className:p.button,onClick:K,children:[f.jsx(J,{icon:T?"pause":"play"}),T?"Pause":"Play"]})]}),!b&&f.jsx("img",{className:p.element,"data-loaded":t,"data-cover":v,onLoad:e,decoding:"async",src:M?o:void 0,srcSet:M?s:void 0,width:g,height:w,alt:c,sizes:h,...G}),F&&f.jsx("img",{"aria-hidden":!0,className:p.placeholder,"data-loaded":t,"data-cover":v,style:P({delay:E(a)}),ref:O,src:i,width:g,height:w,onTransitionEnd:()=>U(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function D(e){return typeof e=="string"&&e.includes(".mp4")}export{Y as G,xe as I,ke as T,X as a,le as b,me as r,$e as t,W as u};
