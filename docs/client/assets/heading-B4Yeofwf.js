import{r as o,n as l,a1 as F}from"./components-yolBKbWE.js";const Be={desktop:2080,laptop:1680,tablet:1040,mobile:696,mobileS:400},G=e=>`${e}px`,s=e=>`${e/16}rem`,Pe=e=>Number(e.replace("ms","")),O=e=>`${e}ms`;function U(e,t={}){let n={};const a=Object.keys(e);for(const c of a){let i=e[c];typeof i=="number"&&c==="delay"&&(i=O(i)),typeof i=="number"&&c!=="opacity"&&(i=G(i)),typeof i=="number"&&c==="opacity"&&(i=`${i*100}%`),n[`--${c}`]=i}return{...n,...t}}function M(...e){return e.filter(Boolean).join(" ")}const E={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"Gotham, var(--systemFontStack)",monoFontStack:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",japaneseFontStack:"IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:s(140),fontSizeH1:s(100),fontSizeH2:s(58),fontSizeH3:s(38),fontSizeH4:s(28),fontSizeH5:s(24),fontSizeBodyXL:s(22),fontSizeBodyL:s(20),fontSizeBodyM:s(18),fontSizeBodyS:s(16),fontSizeBodyXS:s(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},A={fontSizeH0:s(120),fontSizeH1:s(80)},D={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:s(100),fontSizeH1:s(70),fontSizeH2:s(50),fontSizeH3:s(36),fontSizeH4:s(26),fontSizeH5:s(22)},K={fontSizeH0:s(80),fontSizeH1:s(60),fontSizeH2:s(48),fontSizeH3:s(32),fontSizeH4:s(24),fontSizeH5:s(20)},q={spaceOuter:"24px",fontSizeH0:s(56),fontSizeH1:s(40),fontSizeH2:s(34),fontSizeH3:s(28),fontSizeH4:s(22),fontSizeH5:s(18),fontSizeBodyL:s(17),fontSizeBodyM:s(16),fontSizeBodyS:s(14)},Q={spaceOuter:"16px",fontSizeH0:s(42),fontSizeH1:s(38),fontSizeH2:s(28),fontSizeH3:s(24),fontSizeH4:s(20)},V={background:"oklch(17.76% 0 0)",backgroundLight:"oklch(21.78% 0 0)",primary:"oklch(63.86% 0.193 278.77)",accent:"oklch(63.86% 0.193 278.77)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},J={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(63.86% 0.193 278.77)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},Ie={base:E,desktop:A,laptop:D,tablet:K,mobile:q,mobileS:Q},Ne={dark:V,light:J},Y="_icon_1tdl1_2",Z="_noise_1tdl1_1",ee={icon:Y,noise:Z},te="/assets/icons-BPG4n_I3.svg",$=o.forwardRef(({icon:e,className:t,size:n,...a},c)=>l.jsx("svg",{"aria-hidden":!0,ref:c,className:M(ee.icon,t),width:n||24,height:n||24,...a,children:l.jsx("use",{href:`${te}#${e}`})})),ne="_text_13dm1_2",oe="_noise_13dm1_1",se={text:ne,noise:oe},ae=({children:e,size:t="m",as:n="span",align:a="auto",weight:c="auto",secondary:i,className:u,...r})=>l.jsx(n,{className:M(se.text,u),"data-align":a,"data-size":t,"data-weight":c,"data-secondary":i,...r,children:e}),B=o.createContext(null);function ie(){const e=o.useContext(B);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:a}=e,c=o.useId();o.useEffect(()=>a(c),[]);const i=o.useCallback(()=>n&&n(c),[c,n]);return!t&&n?[!1,i]:[!0]}const re=o.createContext({}),ce=o.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),P=typeof window<"u",ue=P?o.useLayoutEffect:o.useEffect;function I(e){const t=o.useRef(null);return t.current===null&&(t.current=e()),t.current}const j={current:null},N={current:!1};function le(){if(N.current=!0,!!P)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>j.current=e.matches;e.addListener(t),t()}else j.current=!1}class de extends o.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function fe({children:e,isPresent:t}){const n=o.useId(),a=o.useRef(null),c=o.useRef({width:0,height:0,top:0,left:0}),{nonce:i}=o.useContext(ce);return o.useInsertionEffect(()=>{const{width:u,height:r,top:f,left:g}=c.current;if(t||!a.current||!u||!r)return;a.current.dataset.motionPopId=n;const p=document.createElement("style");return i&&(p.nonce=i),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${r}px !important;
            top: ${f}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[t]),l.jsx(de,{isPresent:t,childRef:a,sizeRef:c,children:o.cloneElement(e,{ref:a})})}const pe=({children:e,initial:t,isPresent:n,onExitComplete:a,custom:c,presenceAffectsLayout:i,mode:u})=>{const r=I(me),f=o.useId(),g=o.useCallback(m=>{r.set(m,!0);for(const x of r.values())if(!x)return;a&&a()},[r,a]),p=o.useMemo(()=>({id:f,initial:t,isPresent:n,custom:c,onExitComplete:g,register:m=>(r.set(m,!1),()=>r.delete(m))}),i?[Math.random(),g]:[n,g]);return o.useMemo(()=>{r.forEach((m,x)=>r.set(x,!1))},[n]),o.useEffect(()=>{!n&&!r.size&&a&&a()},[n]),u==="popLayout"&&(e=l.jsx(fe,{isPresent:n,children:e})),l.jsx(B.Provider,{value:p,children:e})};function me(){return new Map}const L=e=>e.key||"";function T(e){const t=[];return o.Children.forEach(e,n=>{o.isValidElement(n)&&t.push(n)}),t}const xe=({children:e,exitBeforeEnter:t,custom:n,initial:a=!0,onExitComplete:c,presenceAffectsLayout:i=!0,mode:u="sync"})=>{const r=o.useMemo(()=>T(e),[e]),f=r.map(L),g=o.useRef(!0),p=o.useRef(r),m=I(()=>new Map),[x,k]=o.useState(r),[h,b]=o.useState(r);ue(()=>{g.current=!1,p.current=r;for(let S=0;S<h.length;S++){const d=L(h[S]);f.includes(d)?m.delete(d):m.get(d)!==!0&&m.set(d,!1)}},[h,f.length,f.join("-")]);const y=[];if(r!==x){let S=[...r];for(let d=0;d<h.length;d++){const z=h[d],H=L(z);f.includes(H)||(S.splice(d,0,z),y.push(z))}u==="wait"&&y.length&&(S=y),b(T(S)),k(r);return}const{forceRender:C}=o.useContext(re);return l.jsx(l.Fragment,{children:h.map(S=>{const d=L(S),z=r===h||f.includes(d),H=()=>{if(m.has(d))m.set(d,!0);else return;let _=!0;m.forEach(X=>{X||(_=!1)}),_&&(C==null||C(),b(p.current),c&&c())};return l.jsx(pe,{isPresent:z,initial:!g.current||a?void 0:!1,custom:z?void 0:n,presenceAffectsLayout:i,mode:u,onExitComplete:z?void 0:H,children:S},d)})})};function he(){!N.current&&le();const[e]=o.useState(j.current);return e}const Se="_loader_1o1zt_2",ge="_text_1o1zt_17",ze="_span_1o1zt_43",ye="_loaderSpan_1o1zt_1",_e="_noise_1o1zt_1",R={loader:Se,text:ge,span:ze,loaderSpan:ye,noise:_e},ke=o.forwardRef(({className:e,style:t,width:n=32,height:a=4,text:c="Loading...",center:i,...u},r)=>he()?l.jsx(ae,{className:M(R.text,e),weight:"medium",...u,children:c}):l.jsx("div",{ref:r,className:M(R.loader,e),"data-center":i,style:U({width:n,height:a},t),...u,children:l.jsx("div",{className:R.span})})),be=({children:e,in:t,unmount:n,initial:a=!0,...c})=>{const i=o.useRef(),u=o.useRef();return o.useEffect(()=>{clearTimeout(t?u.current:i.current)},[t]),l.jsx(xe,{children:(t||!n)&&l.jsx(Ce,{enterTimeout:i,exitTimeout:u,in:t,initial:a,...c,children:e})})},Ce=({children:e,timeout:t=0,enterTimeout:n,exitTimeout:a,onEnter:c,onEntered:i,onExit:u,onExited:r,initial:f,nodeRef:g,in:p})=>{const[m,x]=o.useState(f?"exited":"entered"),[k,h]=ie(),[b,y]=o.useState(!f),C=typeof t=="object",S=o.useRef(null),d=g||S,z=b&&p?k:!1;return o.useEffect(()=>{var _;if(b||!p)return;const H=C?t.enter:t;clearTimeout(n.current),clearTimeout(a.current),y(!0),x("entering"),c==null||c(),(_=d.current)==null||_.offsetHeight,n.current=setTimeout(()=>{x("entered"),i==null||i()},H)},[c,i,t,m,p]),o.useEffect(()=>{var _;if(k&&p)return;const H=C?t.exit:t;clearTimeout(n.current),clearTimeout(a.current),x("exiting"),u==null||u(),(_=d.current)==null||_.offsetHeight,a.current=setTimeout(()=>{x("exited"),h==null||h(),r==null||r()},H)},[k,u,h,t,r,p]),e({visible:z,status:m,nodeRef:d})},He="_button_1l2e3_2",Me="_text_1l2e3_132",ve="_loader_1l2e3_145",Le="_icon_1l2e3_158",Re="_noise_1l2e3_1",v={button:He,text:Me,loader:ve,icon:Le,noise:Re};function W(e){return e==null?void 0:e.includes("://")}const We=o.forwardRef(({href:e,...t},n)=>W(e)||!e?l.jsx(w,{href:e,ref:n,...t}):l.jsx(w,{unstable_viewTransition:!0,as:F,prefetch:"intent",to:e,ref:n,...t})),w=o.forwardRef(({className:e,as:t,secondary:n,loading:a,loadingText:c="loading",icon:i,iconEnd:u,iconHoverShift:r,iconOnly:f,children:g,rel:p,target:m,href:x,disabled:k,...h},b)=>{const y=W(x),S=t||(x?"a":"button");return l.jsxs(S,{className:M(v.button,e),"data-loading":a,"data-icon-only":f,"data-secondary":n,"data-icon":i,href:x,rel:p||y?"noopener noreferrer":void 0,target:m||y?"_blank":void 0,disabled:k,ref:b,...h,children:[!!i&&l.jsx($,{className:v.icon,"data-start":!f,"data-shift":r,icon:i}),!!g&&l.jsx("span",{className:v.text,children:g}),!!u&&l.jsx($,{className:v.icon,"data-end":!f,"data-shift":r,icon:u}),l.jsx(be,{unmount:!0,in:a,children:({visible:d,nodeRef:z})=>l.jsx(ke,{ref:z,className:v.loader,size:32,text:c,"data-visible":d})})]})}),je="_heading_e2qtd_2",$e="_noise_e2qtd_1",Te={heading:je,noise:$e},Xe=({children:e,level:t=1,as:n,align:a="auto",weight:c="medium",className:i,...u})=>{const r=Math.min(Math.max(t,0),5),f=n||`h${Math.max(r,1)}`;return l.jsx(o.Fragment,{children:l.jsx(f,{className:M(Te.heading,i),"data-align":a,"data-weight":c,"data-level":r,...u,children:e})})};export{xe as A,We as B,Xe as H,$ as I,re as L,ce as M,B as P,be as T,Pe as a,M as b,U as c,ae as d,ue as e,I as f,le as g,N as h,P as i,ke as j,he as k,Ne as l,Be as m,O as n,G as o,j as p,Ie as t,ie as u};
