import{g as v,d as f,o as u,c as d,r as b,L as R,l as c,F as G,D as X,t as Z,k as p,N as $,X as E,n as L,M as P,h as g,O as J,a1 as _,a2 as I,j as T,x as j,a3 as Q,a4 as W,a5 as Y,e as q,H as U,b as B,a6 as ee,w as te,T as se,s as A,a7 as ae,a8 as ne,a9 as le,aa as oe,ab as ce,ac as ie,ad as ue,ae as re,af as de,ag as pe,V as fe,u as ve,y as me,ah as he,ai as Le,aj as Ce,ak as ge}from"./chunks/framework.c0647dac.js";import{t as be}from"./chunks/theme.7628f043.js";const x=(e,t)=>{if(e.install=s=>{for(const a of[e,...Object.values(t??{})])s.component(a.name,a)},t)for(const[s,a]of Object.entries(t))e[s]=a;return e},we=e=>{const{disabled:t}=e;return{_props:v(()=>({ariaDisabled:t,disabled:t}))}},ye=f({name:"qf-button"}),xe=f({...ye,props:{type:{},disabled:{type:Boolean}},setup(e){const t=e,{_props:s}=we(t);return(a,n)=>(u(),d("button",R(c(s),{class:["qf-button",[a.type?`qf-button--${a.type}`:"",{"qf-button--disabled":a.disabled}]]}),[b(a.$slots,"default")],16))}}),Me=x(xe),$e=(e,t)=>({activeIndex:v(()=>e.activeKey?e.data.findIndex(s=>s.value===e.activeKey):0),handleUpdate:s=>{t("update:activeKey",s)}}),Ve=["onClick"],ke=f({name:"qf-tabs"}),Ze=f({...ke,props:{data:{},activeKey:{},width:{}},emits:["update:activeKey"],setup(e,{emit:t}){const s=e,a=t,{activeIndex:n,handleUpdate:l}=$e(s,a);return(o,m)=>(u(),d("div",{class:"qf-tabs",style:$({width:o.width+"px"})},[(u(!0),d(G,null,X(o.data,(i,h)=>(u(),d("div",{onClick:w=>c(l)(i.value),class:"qf-tabs_item",key:h},Z(i.label),9,Ve))),128)),p("div",{class:"qf-tabs__select",style:$({transform:`translateX(${o.width/o.data.length*c(n)}px)`,width:`${o.width/o.data.length}px`})},null,4)],4))}}),_e=x(Ze),O="rowContext",qe=e=>{const{justify:t,align:s}=e,a=v(()=>e.gutter??0);E(O,{gutter:a});const n=v(()=>{const o={};return e.gutter&&(o.marginRight=o.marginLeft=`-${a.value/2}px`),o}),l=v(()=>["qf-row",t!=="start"?`qf-rows--justify-${t}`:"",s?`qf-rows-align-${s}`:""]);return{style:n,classList:l}},He=f({name:"qf-row"}),Fe=f({...He,props:{gutter:{},justify:{default:"start"},align:{}},setup(e){const t=e,{style:s,classList:a}=qe(t);return(n,l)=>(u(),d("div",{class:L(c(a)),style:$(c(s))},[b(n.$slots,"default")],6))}}),Be=x(Fe),Ae=e=>{const{span:t,offset:s}=e,{gutter:a}=P(O,{gutter:v(()=>0)}),n=v(()=>{const o={};return a.value&&(o.paddingLeft=o.paddingRight=`${a.value/2}px`),o}),l=v(()=>["qf-col",`qf-col-${t}`,`qf-col--offset-${s}`]);return{style:n,classList:l}},Te=f({name:"qf-col"}),je=f({...Te,props:{span:{default:24},offset:{default:0}},setup(e){const t=e,{style:s,classList:a}=Ae(t);return(n,l)=>(u(),d("div",{style:$(c(s)),class:L(c(a))},[b(n.$slots,"default")],6))}}),De=x(je),S="checkboxContext",Re=(e,t)=>{const s=P(S,void 0),a=v(()=>s!==void 0),n=g(!1),l=v({get(){var i;return a.value?(i=s==null?void 0:s.modelValue)==null?void 0:i.value:e.modelValue??n.value},set(i){a.value?s==null||s.changeHandler(e.label):(t("update:modelValue",i),n.value=i)}}),o=v(()=>e.disabled),m=v(()=>a.value&&Array.isArray(l.value)?l.value.includes(e.label):l.value);return{classList:v(()=>["qf-checkbox",e.disabled?"qf-checkbox--disabled":"",m.value?"qf-checkbox--checked":""]),handleUpdate:async()=>{o.value||(l.value=!l.value,await J(),t("change",l.value))},model:l}},Ee=p("span",{class:"qf-checkbox__inner"},null,-1),Pe=f({name:"qf-checkbox"}),Ie=f({...Pe,props:{label:{},modelValue:{type:Boolean,default:void 0},disabled:{type:Boolean}},emits:["change","update:modelValue"],setup(e,{emit:t}){const s=e,a=t,{classList:n,handleUpdate:l,model:o}=Re(s,a);return(m,i)=>(u(),d("div",{class:L(c(n)),onClick:i[0]||(i[0]=(...h)=>c(l)&&c(l)(...h))},[Ee,b(m.$slots,"default")],2))}}),Ue=(e,t,s)=>(E(S,{modelValue:s,changeHandler:a=>{const n=s.value,l=n.findIndex(o=>o===a);l===-1?n.push(a):n.splice(l,1),s.value=n,t("change",s.value)}}),{classList:v(()=>["qf-checkbox-group"])}),Oe=f({name:"qf-checkbox-group"}),Se=f({...Oe,props:_({modelValue:{}},{modelValue:{default(){return[]}},modelModifiers:{}}),emits:_(["change","update:modelvalue"],["update:modelValue"]),setup(e,{emit:t}){const s=e,a=t,n=I(e,"modelValue"),{classList:l}=Ue(s,a,n);return(o,m)=>(u(),d("div",{class:L(c(l))},[b(o.$slots,"default")],2))}}),ze=x(Ie,{CheckboxGroup:Se}),Ne=(e,t,s)=>{const{disabled:a,closable:n}=e,l=g(""),o=g(!1);T(()=>{l.value=t.value}),j(l,i=>{t.value=i,s("change",i)});const m=v(()=>["qf-input",a?"qf-input--disabled":"",o.value?"qf-input--focus":""]);return{selfModel:l,classList:m,onClose:()=>{l.value=""},onFocus:()=>{o.value=!0,s("focus")},onBlur:()=>{o.value=!1,s("blur")},closable:n,disabled:a}},Ke=p("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 32 32",fill:"#ddd"},[p("path",{d:"M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z"})],-1),Ge=[Ke],Xe=f({name:"qf-input"}),Je=f({...Xe,props:_({modelValue:{},disabled:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},placeholder:{}},{modelValue:{default:""},modelModifiers:{}}),emits:_(["focus","blur","change"],["update:modelValue"]),setup(e,{emit:t}){const s=I(e,"modelValue"),a=e,n=t,{selfModel:l,onFocus:o,onBlur:m,closable:i,classList:h,onClose:w}=Ne(a,s,n);return(M,r)=>(u(),d("div",{class:L(c(h))},[b(M.$slots,"prefix"),Q(p("input",R(a,{"onUpdate:modelValue":r[0]||(r[0]=C=>Y(l)?l.value=C:null),onFocus:r[1]||(r[1]=(...C)=>c(o)&&c(o)(...C)),onBlur:r[2]||(r[2]=(...C)=>c(m)&&c(m)(...C)),type:"text",class:"qf-input__inner"}),null,16),[[W,c(l)]]),c(i)?(u(),d("i",{key:0,class:"qf-input__close",onClick:r[3]||(r[3]=(...C)=>c(w)&&c(w)(...C))},Ge)):q("",!0),b(M.$slots,"suffix")],2))}}),Qe=x(Je),D=[Me,_e,De,Be,ze,Qe],We={install:e=>{for(const t in D)e.use(D[t])}},H=(e,t)=>{const s=e.__vccOpts||e;for(const[a,n]of t)s[a]=n;return s},Ye={},et={t:"1661231422733",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3259",width:"20",height:"20"},tt=p("path",{d:"M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z","p-id":"3260"},null,-1),st=[tt];function at(e,t){return u(),d("svg",et,st)}const nt=H(Ye,[["render",at]]),lt={},ot={t:"1661231449868",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3541",width:"20",height:"20"},ct=p("path",{d:"M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z","p-id":"3542"},null,-1),it=[ct];function ut(e,t){return u(),d("svg",ot,it)}const rt=H(lt,[["render",ut]]),dt={},pt={viewBox:"0 0 544 560",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ft=p("path",{d:"M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z",fill:"currentColor"},null,-1),vt=[ft];function mt(e,t){return u(),d("svg",pt,vt)}const ht=H(dt,[["render",mt]]),V="vitepress-demo-preview",k=(e,t,s,a)=>{let n=t===""?`${e}`:`${e}-${t}`;return s&&(n+=`__${s}`),a&&(n+=`--${a}`),n},z=(e="")=>({b:()=>k(V,e),e:(t="")=>k(V,e,t),m:(t="")=>k(V,e,"",t),bem:(t,s,a)=>k(V,t,s,a)}),Lt=()=>{const e=g(!0);return{isCodeFold:e,setCodeFold:t=>{e.value=t}}},Ct=()=>({copyContent:g(""),clickCopy:async e=>{await navigator.clipboard.writeText(e)}}),gt={},bt={width:"20",height:"20",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},wt=p("path",{d:"M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z",fill:"currentColor",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),yt=p("path",{d:"M17 24L22 29L32 19",fill:"currentColor",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),xt=[wt,yt];function Mt(e,t){return u(),d("svg",bt,xt)}const $t=H(gt,[["render",Mt]]),Vt=f({__name:"message-notice",props:{content:{default:"复制成功！"},close:null},setup(e,{expose:t}){const s=e,a=z(),n=g(!1),l=h=>{n.value=h},o=g(-999),m=h=>{o.value=h};j(n,h=>{h===!0&&setTimeout(()=>{n.value=!1},3e3)});const i=()=>{s.close()};return t({setVisible:l,setTopHeight:m}),(h,w)=>(u(),B(se,{name:"slide-fade",onAfterLeave:i},{default:te(()=>[n.value?(u(),d("div",{key:0,class:L([c(a).bem("message-notice","container")]),style:$({top:o.value+"px"})},[U($t),p("span",null,Z(e.content),1)],6)):q("",!0)]),_:1}))}}),F=[],kt={open:()=>{const e=document.createElement("div"),t=ee(Vt,{content:"复制成功！",close:()=>{document.body.removeChild(e),F.pop(),t.unmount()}}),s=t.mount(e);document.body.appendChild(e);const a=F.length,n=a===0?10:(a+1)*10+a*42;s.setTopHeight(n),s.setVisible(!0),F.push(s)}},Zt=["innerHTML"],_t=f({__name:"NaiveUI",props:{code:null,showCode:null,title:{default:"默认标题"},description:{default:"描述内容"}},setup(e){const t=e,s=z(),{isCodeFold:a,setCodeFold:n}=Lt(),{clickCopy:l}=Ct(),o=g(decodeURIComponent(t.code)),m=g(decodeURIComponent(t.showCode)),i=g(null),h=()=>{l(o.value),kt.open()},w=v(()=>{var r;return i.value?(r=i.value)==null?void 0:r.clientHeight:0}),M=r=>{a.value?i.value.style.height="0px":i.value.style.height=`${r}px`};return T(()=>{const r=w.value;M(r)}),j(a,()=>{const r=w.value;M(r)}),(r,C)=>(u(),d("div",{class:L([c(s).e("naive-ui__container")])},[p("section",{class:L([c(s).bem("name_handle")])},[t.title?(u(),d("div",{key:0,class:L([c(s).bem("component","name")])},Z(e.title),3)):q("",!0),p("div",{class:L([c(s).bem("description","btns")])},[U(ht,{onClick:h}),c(a)?(u(),B(nt,{key:1,onClick:C[1]||(C[1]=K=>c(n)(!1))})):(u(),B(rt,{key:0,onClick:C[0]||(C[0]=K=>c(n)(!0))}))],2)],2),t.description?(u(),d("section",{key:0,class:L([c(s).bem("description")])},[p("span",null,Z(e.description),1)],2)):q("",!0),p("section",{class:L([c(s).bem("preview")])},[b(r.$slots,"default")],2),p("section",{class:L([c(s).bem("source")]),ref_key:"sourceCodeArea",ref:i},[p("div",{innerHTML:m.value,class:"language-vue"},null,8,Zt)],2)],2))}});const qt={...be,enhanceApp:async e=>{e.app.component("demo-preview",_t),e.app.use(We)}};function N(e){if(e.extends){const t=N(e.extends);return{...t,...e,async enhanceApp(s){t.enhanceApp&&await t.enhanceApp(s),e.enhanceApp&&await e.enhanceApp(s)}}}return e}const y=N(qt),Ht=f({name:"VitePressApp",setup(){const{site:e}=ve();return T(()=>{me(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),he(),Le(),Ce(),y.setup&&y.setup(),()=>ge(y.Layout)}});async function Ft(){const e=At(),t=Bt();t.provide(ne,e);const s=le(e.route);return t.provide(oe,s),t.component("Content",ce),t.component("ClientOnly",ie),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),y.enhanceApp&&await y.enhanceApp({app:t,router:e,siteData:ue}),{app:t,router:e,data:s}}function Bt(){return re(Ht)}function At(){let e=A,t;return de(s=>{let a=pe(s),n=null;return a&&(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),n=fe(()=>import(a),[])),A&&(e=!1),n},y.NotFound)}A&&Ft().then(({app:e,router:t,data:s})=>{t.go().then(()=>{ae(t.route,s.site),e.mount("#app")})});export{Ft as createApp};
