import{r as i,n as K}from"./components-Ep370hT9.js";import{b as Ue,r as be}from"./image-Ctv1T852.js";import{s as Ae,S as ve,P as Re,f as Ee,ac as $,a5 as Te,a6 as q,W as Q,z as Ve,ad as ee,M as Y,O as Le,ae as Pe,j as te,C as re,r as N,af as Ce}from"./three.module-BUNYpaGn.js";import{k as me,b as _e,c as Ge,n as ze}from"./heading-DJdNTOqn.js";import{r as Oe,c as Fe,a as je,t as ke,b as ne,m as Be}from"./throttle-CWUW5Plf.js";import{V as Ie,c as We,i as Ne,S as He,H as Xe,v as H,a as Ke,b as Ye,G as Ze,M as ae}from"./route-YLe8-LzR.js";import{X as Je,Y as $e,Z as qe,u as Qe,_ as et,J as tt,Q as rt,F as de,$ as nt,y as at,a0 as st,o as ot,w as it,a1 as ut,W as se}from"./use-spring-BE8CLnYq.js";import"./sfc-dark-BuqSpEWS.js";import"./meta-SKfl2jaX.js";import"./config-AjS9vFOl.js";import"./decoder-text-BKuAWDoF.js";import"./visually-hidden-CZ75wm05.js";import"./useScrollToHash-0ZPofNVK.js";import"./divider-BMbd88Tc.js";import"./useWindowSize-DjtojTbb.js";function ct(e,t,r){var n;if(typeof e=="string"){let s=document;t&&(Je(!!t.current),s=t.current),r?((n=r[e])!==null&&n!==void 0||(r[e]=s.querySelectorAll(e)),e=r[e]):e=s.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}function lt(e,t=100,r){const n=r({...e,keyframes:[0,t]}),s=Math.min($e(n),qe);return{type:"keyframes",ease:g=>n.next(s*g).value/t,duration:Qe(s)}}function J(e){return typeof e=="object"&&!Array.isArray(e)}function pe(e,t,r,n){return typeof e=="string"&&J(t)?ct(e,r,n):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function oe(e,t,r,n){var s;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?r:(s=n.get(t))!==null&&s!==void 0?s:e}const ft=(e,t,r)=>{const n=t-e;return((r-e)%n+n)%n+e};function vt(e,t){return et(e)?e[ft(0,e.length,t)]:e}function mt(e,t,r){for(let n=0;n<e.length;n++){const s=e[n];s.at>t&&s.at<r&&(rt(e,s),n--)}}function dt(e,t,r,n,s,g){mt(e,s,g);for(let v=0;v<t.length;v++)e.push({value:t[v],at:tt(s,g,n[v]),easing:vt(r,v)})}function pt(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const gt="easeInOut";function yt(e,{defaultTransition:t={},...r}={},n,s){const g=t.duration||.3,v=new Map,w=new Map,T={},E=new Map;let P=0,l=0,b=0;for(let y=0;y<e.length;y++){const x=e[y];if(typeof x=="string"){E.set(x,l);continue}else if(!Array.isArray(x)){E.set(x.name,oe(l,x.at,P,E));continue}let[o,a,f={}]=x;f.at!==void 0&&(l=oe(l,f.at,P,E));let m=0;const M=(D,u,h,c=0,U=0)=>{const d=ht(D),{delay:p=0,times:V=nt(d),type:F="keyframes",...W}=u;let{ease:C=t.ease||"easeOut",duration:A}=u;const j=typeof p=="function"?p(c,U):p,_=d.length,S=at(F)?F:s==null?void 0:s[F];if(_<=2&&S){let z=100;if(_===2&&Dt(d)){const B=d[1]-d[0];z=Math.abs(B)}const O={...W};A!==void 0&&(O.duration=it(A));const k=lt(O,z,S);C=k.ease,A=k.duration}A??(A=g);const R=l+j,L=R+A;V.length===1&&V[0]===0&&(V[1]=1);const G=V.length-d.length;G>0&&st(V,G),d.length===1&&d.unshift(null),dt(h,d,C,V,R,L),m=Math.max(j+A,m),b=Math.max(L,b)};if(de(o)){const D=ie(o,w);M(a,f,ue("default",D))}else{const D=pe(o,a,n,T),u=D.length;for(let h=0;h<u;h++){a=a,f=f;const c=D[h],U=ie(c,w);for(const d in a)M(a[d],xt(f,d),ue(d,U),h,u)}}P=l,l+=m}return w.forEach((y,x)=>{for(const o in y){const a=y[o];a.sort(pt);const f=[],m=[],M=[];for(let u=0;u<a.length;u++){const{at:h,value:c,easing:U}=a[u];f.push(c),m.push(ot(0,b,h)),M.push(U||"easeOut")}m[0]!==0&&(m.unshift(0),f.unshift(f[0]),M.unshift(gt)),m[m.length-1]!==1&&(m.push(1),f.push(null)),v.has(x)||v.set(x,{keyframes:{},transition:{}});const D=v.get(x);D.keyframes[o]=f,D.transition[o]={...t,duration:b,ease:M,times:m,...r}}}),v}function ie(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function ue(e,t){return t[e]||(t[e]=[]),t[e]}function ht(e){return Array.isArray(e)?e:[e]}function xt(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const St=e=>typeof e=="number",Dt=e=>e.every(St);function wt(e,t){return e in t}class Mt extends Ie{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,r){if(wt(r,t)){const n=t[r];if(typeof n=="string"||typeof n=="number")return n}}getBaseTargetFromProps(){}removeValueFromRenderState(t,r){delete r.output[t]}measureInstanceViewportBox(){return We()}build(t,r){Object.assign(t.output,r)}renderInstance(t,{output:r}){Object.assign(t,r)}sortInstanceNodePosition(){return 0}}function Ut(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=Ne(e)?new He(t):new Xe(t);r.mount(e),H.set(e,r)}function bt(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new Mt(t);r.mount(e),H.set(e,r)}function At(e,t){return de(e)||typeof e=="number"||typeof e=="string"&&!J(t)}function ge(e,t,r,n){const s=[];if(At(e,t))s.push(Ke(e,J(t)&&t.default||t,r&&(r.default||r)));else{const g=pe(e,t,n),v=g.length;for(let w=0;w<v;w++){const T=g[w],E=T instanceof Element?Ut:bt;H.has(T)||E(T);const P=H.get(T),l={...r};"delay"in l&&typeof l.delay=="function"&&(l.delay=l.delay(w,v)),s.push(...Ye(P,{...t,transition:l},{}))}}return s}function Rt(e,t,r){const n=[];return yt(e,t,r,{spring:ut}).forEach(({keyframes:g,transition:v},w)=>{n.push(...ge(w,g,v))}),n}function Et(e){return Array.isArray(e)&&Array.isArray(e[0])}function Tt(e){function t(r,n,s){let g=[];Et(r)?g=Rt(r,n,e):g=ge(r,n,s,e);const v=new Ze(g);return e&&e.animations.push(v),v}return t}const Z=Tt(),Vt={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},Lt={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},Pt="_model_fphsv_2",Ct="_canvas_fphsv_11",_t="_noise_fphsv_1",ce={model:Pt,canvas:Ct,noise:_t},le={Frame:"Frame",Logo:"Logo",Screen:"Screen"},fe={stiffness:40,damping:20,mass:1.4,restSpeed:.001},$t=({models:e,show:t=!0,showDelay:r=0,cameraPosition:n={x:0,y:0,z:8},style:s,className:g,onLoad:v,alt:w,...T})=>{const[E,P]=i.useState(!1),l=i.useRef(),b=i.useRef(),y=i.useRef(),x=i.useRef(),o=i.useRef(),a=i.useRef(),f=i.useRef(),m=i.useRef(),M=i.useRef(),D=i.useRef(),u=i.useRef(),h=i.useRef(),c=i.useRef(),U=i.useRef(),d=i.useRef(),p=i.useRef(),V=i.useRef(),F=Ue(l,!1,{threshold:.2}),W=me(),C=se(0,fe),A=se(0,fe);i.useEffect(()=>{const{clientWidth:S,clientHeight:R}=l.current;a.current=new Ae({canvas:b.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),a.current.setPixelRatio(2),a.current.setSize(S,R),a.current.outputColorSpace=ve,y.current=new Re(36,S/R,.1,100),y.current.position.set(n.x,n.y,n.z),o.current=new Ee,x.current=new $,o.current.add(x.current);const L=new Te(16777215,1.2),G=new q(16777215,1.1),z=new q(16777215,.8);z.position.set(-6,2,2),G.position.set(.5,0,.866),d.current=[L,G,z],d.current.forEach(I=>o.current.add(I)),f.current=new $,o.current.add(f.current),f.current.position.set(0,0,-.8),f.current.rotateX(Math.PI/2);const O=512,k=8,B=8,ye=1.5,he=.8,xe=3;m.current=new Q(O,O),m.current.texture.generateMipmaps=!1,M.current=new Q(O,O),M.current.texture.generateMipmaps=!1;const X=new Ve(k,B).rotateX(Math.PI/2),Se=new ee({map:m.current.texture,opacity:he,transparent:!0});U.current=new Y(X,Se),U.current.scale.y=-1,f.current.add(U.current),p.current=new Y(X),p.current.visible=!1,f.current.add(p.current);const De=new ee({color:16777215,opacity:0,transparent:!0});V.current=new Y(X,De),V.current.rotateX(Math.PI),V.current.position.y-=1e-5,f.current.add(V.current),D.current=new Le(-k/2,k/2,B/2,-B/2,0,ye),D.current.rotation.x=Math.PI/2,f.current.add(D.current),u.current=new Pe,u.current.userData.darkness={value:xe},u.current.onBeforeCompile=I=>{I.uniforms.darkness=u.current.userData.darkness,I.fragmentShader=`
        uniform float darkness;
        ${I.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},u.current.depthTest=!1,u.current.depthWrite=!1,h.current=new te(Vt),h.current.depthTest=!1,c.current=new te(Lt),c.current.depthTest=!1;const we=C.on("change",_),Me=A.on("change",_);return()=>{m.current.dispose(),M.current.dispose(),Oe(d.current),Fe(o.current),je(a.current),we(),Me()}},[]);const j=i.useCallback(S=>{p.current.visible=!0,p.current.material=h.current,p.current.material.uniforms.tDiffuse.value=m.current.texture,h.current.uniforms.h.value=S*(1/256),a.current.setRenderTarget(M.current),a.current.render(p.current,D.current),p.current.material=c.current,p.current.material.uniforms.tDiffuse.value=M.current.texture,c.current.uniforms.v.value=S*(1/256),a.current.setRenderTarget(m.current),a.current.render(p.current,D.current),p.current.visible=!1},[]),_=i.useCallback(()=>{const R=o.current.background;o.current.background=null,o.current.overrideMaterial=u.current,a.current.setRenderTarget(m.current),a.current.render(o.current,D.current),o.current.overrideMaterial=null,j(5),j(5*.4),a.current.setRenderTarget(null),o.current.background=R,x.current.rotation.x=C.get(),x.current.rotation.y=A.get(),a.current.render(o.current,y.current)},[j,C,A]);return i.useEffect(()=>{const S=ke(R=>{const{innerWidth:L,innerHeight:G}=window,z={x:(R.clientX-L/2)/L,y:(R.clientY-G/2)/G};A.set(z.x/2),C.set(z.y/2)},100);return F&&!W&&window.addEventListener("mousemove",S),()=>{window.removeEventListener("mousemove",S)}},[F,W,C,A]),i.useEffect(()=>{const S=()=>{if(!l.current)return;const{clientWidth:R,clientHeight:L}=l.current;a.current.setSize(R,L),y.current.aspect=R/L,y.current.updateProjectionMatrix(),_()};return window.addEventListener("resize",S),S(),()=>{window.removeEventListener("resize",S)}},[_]),K.jsxs("div",{className:_e(ce.model,g),"data-loaded":E,style:Ge({delay:ze(r)},s),ref:l,role:"img","aria-label":w,...T,children:[K.jsx("canvas",{className:ce.canvas,ref:b}),e.map((S,R)=>K.jsx(Gt,{renderer:a,modelGroup:x,show:t,showDelay:r,renderFrame:_,index:R,setLoaded:P,onLoad:v,model:S},JSON.stringify(S.position)))]})},Gt=({renderer:e,model:t,modelGroup:r,renderFrame:n,index:s,showDelay:g,setLoaded:v,onLoad:w,show:T})=>{const[E,P]=i.useState(),l=me(),b=i.createRef();i.useEffect(()=>{const y=async(o,a)=>{o.colorSpace=ve,o.flipY=!1,o.anisotropy=e.current.capabilities.getMaxAnisotropy(),o.generateMipmaps=!1,await e.current.initTexture(o),a.material.color=new re(16777215),a.material.transparent=!0,a.material.map=o};P({start:async()=>{const{texture:o,position:a,url:f}=t;let m,M;const[D,u]=await Promise.all([await ne.loadAsync(o.placeholder),await Be.loadAsync(f)]);r.current.add(u.scene),u.scene.traverse(async c=>{c.material&&(c.material.color=new re(2039845)),c.name===le.Screen&&(b.current=c.clone(),b.current.material=c.material.clone(),c.parent.add(b.current),b.current.material.opacity=1,b.current.position.z+=.001,y(D,b.current),m=async()=>{const U=await be(o),d=await ne.loadAsync(U);await y(d,c),Z(1,0,{onUpdate:p=>{b.current.material.opacity=p,n()}})})});const h=new N(a.x,a.y,a.z);return l&&u.scene.position.set(...h.toArray()),t.animation===ae.SpringUp&&(M=()=>{const c=new N(h.x,h.y-1,h.z);u.scene.position.set(...c.toArray()),Z(c.y,h.y,{type:"spring",delay:(300*s+g)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:U=>{u.scene.position.y=U,n()}})}),t.animation===ae.LaptopOpen&&(M=()=>{const c=u.scene.children.find(p=>p.name===le.Frame),U=new N(Ce.degToRad(90),0,0),d=new N(0,0,0);return u.scene.position.set(...h.toArray()),c.rotation.set(...U.toArray()),Z(U.x,d.x,{type:"spring",delay:(300*s+g+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:p=>{c.rotation.x=p,n()}})}),{loadFullResTexture:m,playAnimation:M}}})},[]),i.useEffect(()=>{if(!E||!T)return;let y;const x=async()=>{const{loadFullResTexture:o,playAnimation:a}=await E.start();v(!0),w==null||w(),l||(y=a()),await o(),l&&n()};return i.startTransition(()=>{x()}),()=>{y==null||y.stop()}},[E,T])};export{$t as Model};
