import{r as c,X as i,aa as u}from"./components-yolBKbWE.js";import{k as m}from"./heading-B4Yeofwf.js";function v(){const e=c.useRef(),t=i(),s=u(),a=m();return c.useCallback((l,o)=>{const n=l.split("#")[1];document.getElementById(n).scrollIntoView({behavior:a?"auto":"smooth"});const r=()=>{clearTimeout(e.current),e.current=setTimeout(()=>{window.removeEventListener("scroll",r),window.location.pathname===t.pathname&&(o==null||o(),s(`${t.pathname}#${n}`,{scroll:!1}))},50)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r),clearTimeout(e.current)}},[s,a,t.pathname])}export{v as u};
