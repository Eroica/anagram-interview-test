/* Riot WIP, @license MIT */
const t=new Map,e=Symbol("riot-component"),n=new Set,r="is",s="mount",o="update",i="unmount",a="shouldUpdate",u="onBeforeMount",c="onMounted",l="onBeforeUpdate",h="onUpdated",p="onBeforeUnmount",d="onUnmounted",m="props",f="state",b="slots",g="root",v=Symbol("pure"),y=Symbol("is_updating"),x=Symbol("parent"),O=Symbol("attributes"),j=Symbol("template"),w=0,A=2,N=3,E={ATTRIBUTE:w,EVENT:1,TEXT:A,VALUE:N};
/* Riot WIP, @license MIT */function T(t){return t.replace(/-(\w)/g,((t,e)=>e.toUpperCase()))}
/* Riot WIP, @license MIT */function C(t,e){throw new Error(t,{cause:e})}function M(t){const e=new Map,n=n=>(e.has(n)||e.set(n,t.call(this,n)))&&e.get(n);return n.cache=e,n}function S(t){return t.reduce(((t,e)=>{const{value:n,type:r}=e;switch(!0){case!e.name&&r===w:return Object.assign({},t,n);case r===N:t.value=e.value;break;default:t[T(e.name)]=e.value}return t}),{})}
/* Riot WIP, @license MIT */function I(t,e){return typeof t===e}function k(t){const e=t.ownerSVGElement;return!!e||null===e}function D(t){return"template"===t.tagName.toLowerCase()}function L(t){return I(t,"function")}function U(t){return!B(t)&&t.constructor===Object}function B(t){return null==t}
/* Riot WIP, @license MIT */function P(){return this}function V(t){return L(t)?t.prototype&&t.prototype.constructor?new t:t():t}
/* Riot v7.1.0, @license MIT */const W=Object.freeze({[s]:P,[o]:P,[i]:P}),$=Object.assign({},W,{clone:P,createDOM:P});
/* Riot v7.1.0, @license MIT */function z(t){for(;t.firstChild;)t.removeChild(t.firstChild)}const F=t=>t.remove(),H=(t,e)=>e&&e.parentNode&&e.parentNode.insertBefore(t,e),_={EACH:0,IF:1,SIMPLE:2,TAG:3,SLOT:4};
/* Riot WIP, @license MIT */
function K(t,e,n,r){return void 0===r&&(r={}),Object.defineProperty(t,e,Object.assign({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function R(t,e,n){return Object.entries(e).forEach((e=>{let[r,s]=e;K(t,r,s,n)})),t}function q(t,e){return Object.entries(e).forEach((e=>{let[n,r]=e;t[n]||(t[n]=r)})),t}
/* Riot WIP, @license MIT */const G=Symbol(),X=Symbol();function Y(t){const e=t.dom.cloneNode(!0),{head:n,tail:r}=function(){const t=document.createTextNode(""),e=document.createTextNode("");return t[G]=!0,e[X]=!0,{head:t,tail:e}}();return{avoidDOMInjection:!0,fragment:e,head:n,tail:r,children:[n,...Array.from(e.childNodes),r]}}const Z=Symbol("unmount"),J={nodes:[],mount(t,e){return this.update(t,e)},update(t,e){const{placeholder:n,nodes:r,childrenMap:s}=this,o=t===Z?null:this.evaluate(t),i=o?Array.from(o):[],{newChildrenMap:a,batches:u,futureNodes:c}=function(t,e,n,r){const{condition:s,template:o,childrenMap:i,itemName:a,getKey:u,indexName:c,root:l,isTemplateTag:h}=r,p=new Map,d=[],m=[];return t.forEach(((t,r)=>{const f=function(t,e){let{itemName:n,indexName:r,index:s,item:o}=e;K(t,n,o),r&&K(t,r,s);return t}(Object.create(e),{itemName:a,indexName:c,index:r,item:t}),b=u?u(f):r,g=i.get(b),v=[];if(function(t,e){return!!t&&!t(e)}(s,f))return;const y=!g,x=g?g.template:o.clone(),O=x.el||l.cloneNode(),j=h&&y?Y(x):x.meta;y?d.push((()=>x.mount(O,f,n,j))):d.push((()=>x.update(f,n))),h?v.push(...j.children):v.push(O),i.delete(b),m.push(...v),p.set(b,{nodes:v,template:x,context:f,index:r})})),{newChildrenMap:p,batches:d,futureNodes:m}}(i,t,e,this);return((t,e,n,r)=>{const s=e.length;let o=t.length,i=s,a=0,u=0,c=null;for(;a<o||u<i;)if(o===a){const t=i<s?u?n(e[u-1],-0).nextSibling:n(e[i-u],0):r;for(;u<i;)H(n(e[u++],1),t)}else if(i===u)for(;a<o;)c&&c.has(t[a])||F(n(t[a],-1)),a++;else if(t[a]===e[u])a++,u++;else if(t[o-1]===e[i-1])o--,i--;else if(t[a]===e[i-1]&&e[u]===t[o-1]){const r=n(t[--o],-1).nextSibling;H(n(e[u++],1),n(t[a++],-1).nextSibling),H(n(e[--i],1),r),t[o]=e[i]}else{if(!c){c=new Map;let t=u;for(;t<i;)c.set(e[t],t++)}if(c.has(t[a])){const r=c.get(t[a]);if(u<r&&r<i){let s=a,p=1;for(;++s<o&&s<i&&c.get(t[s])===r+p;)p++;if(p>r-u){const s=n(t[a],0);for(;u<r;)H(n(e[u++],1),s)}else l=n(e[u++],1),(h=n(t[a++],-1))&&h.parentNode&&h.parentNode.replaceChild(l,h)}else a++}else F(n(t[a++],-1))}var l,h;
/* Riot WIP, @license MIT */})(r,c,function(t,e){return(n,r)=>{if(r<0){const n=t[t.length-1];if(n){const{template:r,nodes:s,context:o}=n;s.pop(),s.length||(t.pop(),r.unmount(o,e,null))}}return n}}(Array.from(s.values()),e),n),u.forEach((t=>t())),this.childrenMap=a,this.nodes=c,this},unmount(t,e){return this.update(Z,e),this}};const Q={mount(t,e){return this.update(t,e)},update(t,e){const n=!!this.evaluate(t),r=!this.value&&n,s=this.value&&!n,o=()=>{const n=this.node.cloneNode();H(n,this.placeholder),this.template=this.template.clone(),this.template.mount(n,t,e)};switch(!0){case r:o();break;case s:this.unmount(t);break;default:n&&this.template.update(t,e)}return this.value=n,this},unmount(t,e){return this.template.unmount(t,e,!0),this}};const tt="undefined"==typeof Element?{}:Element.prototype,et=M((t=>tt.hasOwnProperty(t)));function nt(t,e,n,r){let{name:s}=e;if(!s)return r&&function(t,e,n){const r=e?Object.keys(e):[];Object.keys(n).filter((t=>!r.includes(t))).forEach((e=>t.removeAttribute(e)))}(t,n,r),void(n&&function(t,e){Object.entries(e).forEach((e=>{let[n,r]=e;return nt(t,{name:n},r)}))}(t,n));!et(s)&&(function(t){return I(t,"boolean")}(n)||U(n)||L(n))&&(t[s]=n),!function(t){return!t&&0!==t}(n)?function(t){return!0===t||["string","number"].includes(typeof t)}(n)&&t.setAttribute(s,function(t,e){return!0===e?t:e}(s,n)):t.removeAttribute(s)}const rt=/^on/,st={handleEvent(t){this[t.type](t)}},ot=new WeakMap;function it(t){return B(t)?"":t}const at=(t,e)=>{const n=t.childNodes[e];if(n.nodeType===Node.COMMENT_NODE){const e=document.createTextNode("");return t.replaceChild(e,n),e}return n};const ut={[w]:nt,1:function(t,e,n){let{name:r}=e;const s=r.replace(rt,""),o=ot.get(t)||(t=>{const e=Object.create(st);return ot.set(t,e),e})(t),[i,a]=(t=>Array.isArray(t)?t:[t,!1])(n),u=o[s],c=i&&!u;u&&!i&&t.removeEventListener(s,o),c&&t.addEventListener(s,o,a),o[s]=i},[A]:function(t,e,n){t.data=it(n)},[N]:function(t,e,n){t.value=it(n)}},ct={mount(t){return this.value=this.evaluate(t),lt(this,this.value),this},update(t){const e=this.evaluate(t);return this.value!==e&&(lt(this,e),this.value=e),this},unmount(){return 1===this.type&&lt(this,null),this}};function lt(t,e){return ut[t.type](t.node,t,e,t.value)}function ht(t,e){return Object.assign({},ct,e,{node:e.type===A?at(t,e.childNodeIndex):t})}const pt=(t,e)=>t[x]||e,dt={attributes:[],getTemplateScope(t,e){return function(t,e,n){if(!t||!t.length)return n;const r=t.map((t=>Object.assign({},t,{value:t.evaluate(e)})));return Object.assign(Object.create(n||null),S(r))}(this.attributes,t,e)},mount(t,e){const n=!!t.slots&&t.slots.find((t=>{let{id:e}=t;return e===this.name})),{parentNode:r}=this.node,s=pt(t,e);return this.template=n&&Ot(n.html,n.bindings).createDOM(r),this.template&&(z(this.node),this.template.mount(this.node,this.getTemplateScope(t,s),s),this.template.children=Array.from(this.node.childNodes)),mt(this.node),F(this.node),this},update(t,e){if(this.template){const n=pt(t,e);this.template.update(this.getTemplateScope(t,n),n)}return this},unmount(t,e,n){return this.template&&this.template.unmount(this.getTemplateScope(t,e),null,n),this}};function mt(t){const e=t&&t.firstChild;e&&(H(e,t),mt(t))}function ft(t){return t.reduce(((t,e)=>{let{bindings:n}=e;return t.concat(n)}),[])}const bt={mount(t){return this.update(t)},update(t,e){const n=this.evaluate(t);return n&&n===this.name?this.tag.update(t):(this.unmount(t,e,!0),this.name=n,this.tag=function(t,e,n){return void 0===e&&(e=[]),void 0===n&&(n=[]),t?t({slots:e,attributes:n}):Ot(function(t){return t.reduce(((t,e)=>t+e.html),"")}(e),[...ft(e),{expressions:n.map((t=>Object.assign({type:w},t)))}])}(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,t)),this},unmount(t,e,n){return this.tag&&this.tag.unmount(n),this}};const gt={1:function(t,e){let{evaluate:n,template:r}=e;const s=document.createTextNode("");return H(s,t),F(t),Object.assign({},Q,{node:t,evaluate:n,placeholder:s,template:r.createDOM(t)})},2:function(t,e){let{expressions:n}=e;return Object.assign({},(r=n.map((e=>ht(t,e))),["mount","update","unmount"].reduce(((t,e)=>Object.assign({},t,{[e]:t=>r.map((n=>n[e](t)))&&s})),{})));var r,s},0:function(t,e){let{evaluate:n,condition:r,itemName:s,indexName:o,getKey:i,template:a}=e;const u=document.createTextNode(""),c=t.cloneNode();return H(u,t),F(t),Object.assign({},J,{childrenMap:new Map,node:t,root:c,condition:r,evaluate:n,isTemplateTag:D(c),template:a.createDOM(t),getKey:i,indexName:o,itemName:s,placeholder:u})},3:function(t,e){let{evaluate:n,getComponent:r,slots:s,attributes:o}=e;return Object.assign({},bt,{node:t,evaluate:n,slots:s,attributes:o,getComponent:r})},4:function(t,e){let{name:n,attributes:r}=e;return Object.assign({},dt,{attributes:r,node:t,name:n})}};function vt(t,e){return t.map((t=>t.type===A?Object.assign({},t,{childNodeIndex:t.childNodeIndex+e}):t))}function yt(t,e){return k(t)?function(t,e){return e.ownerDocument.importNode((new window.DOMParser).parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${t}</svg>`,"application/xml").documentElement,!0)}(e,t):function(t,e){const n=D(e)?e:document.createElement("template");return n.innerHTML=t,n.content}(e,t)}const xt={createDOM(t){return this.dom=this.dom||function(t,e){return e&&("string"==typeof e?yt(t,e):e)}(t,this.html)||document.createDocumentFragment(),this},mount(t,e,n,r){void 0===r&&(r={}),t||C("Please provide DOM node to mount properly your template"),this.el&&this.unmount(e);const{fragment:s,children:o,avoidDOMInjection:i}=r,{parentNode:a}=o?o[0]:t,u=D(t),c=u?function(t,e,n){const r=Array.from(t.childNodes);return Math.max(r.indexOf(e),r.indexOf(n.head)+1,0)}(a,t,r):null;this.createDOM(t);const l=s||this.dom.cloneNode(!0);return this.el=u?a:t,this.children=u?o||Array.from(l.childNodes):null,!i&&l&&function(t,e){switch(!0){case k(t):!function(t,e){for(;t.firstChild;)e.appendChild(t.firstChild)}(e,t);break;case D(t):t.parentNode.replaceChild(e,t);break;default:t.appendChild(e)}}(t,l),this.bindings=this.bindingsData.map((t=>function(t,e,n){const{selector:r,type:s,redundantAttribute:o,expressions:i}=e,a=r?t.querySelector(r):t;o&&a.removeAttribute(o);const u=i||[];return(gt[s]||gt[2])(a,Object.assign({},e,{expressions:n&&!r?vt(u,n):u}))}(this.el,t,c))),this.bindings.forEach((t=>t.mount(e,n))),this.meta=r,this},update(t,e){return this.bindings.forEach((n=>n.update(t,e))),this},unmount(t,e,n){void 0===n&&(n=!1);const r=this.el;if(!r)return this;switch(this.bindings.forEach((r=>r.unmount(t,e,n))),!0){case r[v]||null===n:break;case Array.isArray(this.children):!function(t){for(let e=0;e<t.length;e++)F(t[e])}(this.children);break;case!n:z(r);break;case!!n:F(r)}return this.el=null,this},clone(){return Object.assign({},this,{meta:{},el:null})}};function Ot(t,e){return void 0===e&&(e=[]),Object.assign({},xt,{html:t,bindingsData:e})}
/* Riot v7.1.0, @license MIT */
/* Riot v7.1.0, @license MIT */
const jt=(t,n)=>t[e]=n
/* Riot v7.1.0, @license MIT */;function wt(t){return[s,o,i].reduce(((e,n)=>(e[n]=t(n),e)),{})}
/* Riot v7.1.0, @license MIT */
/* Riot WIP, @license MIT */
function At(t){return Array.isArray(t)?t:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&"number"==typeof t.length?Array.from(t):[t]}
/* Riot WIP, @license MIT */function Nt(t,e){return At("string"==typeof t?(e||document).querySelectorAll(t):t)}
/* Riot v7.1.0, @license MIT */const Et=Object.freeze({$(t){return Nt(t,this.root)[0]},$$(t){return Nt(t,this.root)}}),Tt=Object.freeze({[a]:P,[u]:P,[c]:P,[l]:P,[h]:P,[p]:P,[d]:P}),Ct=t=>1===t.length?t[0]:t;
/* Riot v7.1.0, @license MIT */function Mt(t,e,n){const r="object"==typeof e?e:{[e]:n},s=Object.keys(r);return At(t).forEach((t=>{s.forEach((e=>t.setAttribute(e,r[e])))})),t}function St(t,e){return function(t,e,n){const r="string"==typeof e?[e]:e;return Ct(At(t).map((t=>Ct(r.map((e=>t[n](e)))))))}(t,e,"getAttribute")}
/* Riot v7.1.0, @license MIT */const It=new Map,kt=()=>Dt||(Mt(Dt=Nt("style[riot]")[0]||document.createElement("style"),"type","text/css"),Dt.parentNode||document.head.appendChild(Dt),Dt);var Dt;const Lt={CSS_BY_NAME:It,add(t,e){return It.has(t)||(It.set(t,e),this.inject()),this},inject(){return kt().innerHTML=[...It.values()].join("\n"),this},remove(t){return It.has(t)&&(It.delete(t),this.inject()),this}};
/* Riot WIP, @license MIT */function Ut(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return(r=[...n,...r]).length<t.length?Ut(t,...r):t(...r)}}
/* Riot v7.1.0, @license MIT */
/* Riot v7.1.0, @license MIT */
function Bt(t,e){(function(t){return St(t,r)||t.tagName.toLowerCase()})(t)!==e&&Mt(t,r,e)}
/* Riot v7.1.0, @license MIT */function Pt(t,e){return Object.assign({},t,V(e))}
/* Riot v7.1.0, @license MIT */function Vt(t,e){return void 0===e&&(e={}),Object.assign({},
/* Riot WIP, @license MIT */
function(t){return Array.from(t.attributes).reduce(((t,e)=>(t[T(e.name)]=e.value,t)),{})}(t),V(e))}
/* Riot v7.1.0, @license MIT */
/* Riot v7.1.0, @license MIT */
function Wt(t,e){let{slots:r,attributes:s,props:o}=e;return i=
/* Riot v7.1.0, @license MIT */
function(t){return[...n].reduce(((t,e)=>e(t)||t),t)}(R(U(t)?Object.create(t):t,{mount(e,n,i){return void 0===n&&(n={}),K(e,v,!1),this[x]=i,this[O]=function(t,e){void 0===e&&(e=[]);const n=e.map((e=>ht(t,e))),r={};return Object.assign(r,Object.assign({expressions:n},wt((t=>e=>(n.forEach((n=>n[t](e))),r)))))}(e,s).mount(i),K(this,m,Object.freeze(Object.assign({},Vt(e,o),S(this[O].expressions)))),this[f]=Pt(this[f],n),this[j]=this.template.createDOM(e).clone(),jt(e,this),t.name&&Bt(e,t.name),K(this,g,e),K(this,b,r),this[u](this[m],this[f]),this[j].mount(e,this,i),this[c](this[m],this[f]),this},update(t,e){void 0===t&&(t={}),e&&(this[x]=e,this[O].update(e));const n=S(this[O].expressions);if(!1!==this[a](n,this[m]))return K(this,m,Object.freeze(Object.assign({},this[m],n))),this[f]=Pt(this[f],t),this[l](this[m],this[f]),this[y]||(this[y]=!0,this[j].update(this,this[x])),this[h](this[m],this[f]),this[y]=!1,this},unmount(t){return this[p](this[m],this[f]),this[O].unmount(),this[j].unmount(this,this[x],null===t?null:!t),this[d](this[m],this[f]),this}})),Object.keys(t).filter((e=>L(t[e]))).forEach((t=>{i[t]=i[t].bind(i)})),i;var i}
/* Riot v7.1.0, @license MIT */function $t(t){let{css:e,template:n,componentAPI:r,name:s}=t;return e&&s&&Lt.add(s,e),Ut(Wt)(R(q(r,Object.assign({},Tt,{[m]:{},[f]:{}})),Object.assign({[b]:null,[g]:null},Et,{name:s,css:e,template:n})))}
/* Riot v7.1.0, @license MIT */const zt=e=>{const n=(void 0===(r=e.exports?e.exports.components:{})&&(r={}),Object.entries(V(r)).reduce(((t,e)=>{let[n,r]=e;
/* Riot WIP, @license MIT */
var s;return t[(s=n,s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())]=Ht(r),t}),{}));var r;return r=>r===e.name?Ft(e):n[r]||t.get(r)},Ft=M(Ht);function Ht(t){const{css:e,template:n,exports:r,name:o}=t,i=n?function(t,e,n){return t(Ot,E,_,n)}(n,0,zt(t)):$;return t=>{let{slots:a,attributes:u,props:c}=t;if(r&&r[v])return function(t,e){let{slots:n,attributes:r,props:o,css:i,template:a}=e;a&&C("Pure components can not have html"),i&&C("Pure components do not have css");const u=q(t({slots:n,attributes:r,props:o}),W);return wt((t=>function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(t===s){const[t]=n;K(t,v,!0),jt(t,u)}return u[t](...n),u}))}(r,{slots:a,attributes:u,props:c,css:e,template:n});const l=V(r)||{},h=$t({css:e,template:i,componentAPI:l,name:o})({slots:a,attributes:u,props:c});return{mount:(t,e,n)=>h.mount(t,n,e),update:(t,e)=>h.update(e,t),unmount:t=>h.unmount(t)}}}
/* Riot WIP, @license MIT */function _t(t,e,n){if(t.length!==e.length)return!1;const r=new Intl.Collator;return 0===t.split("").sort(r.compare).join("").localeCompare(e.split("").sort(r.compare).join(""),{},{sensitivity:n?"base":"case"})}var Kt={css:'app,[is="app"]{ max-width: 600px; margin: 0 auto; } app .form > *,[is="app"] .form > *{ display: block; } app .form > * + *,[is="app"] .form > * + *,app .form + *,[is="app"] .form + *{ margin-top: 1em; }',exports:{onBeforeMount(t,e){this.state={isCaseInsensitive:!0,word1:"Word #1",word2:"Word #2",isAnagram:_t("word #1","Word #2",!0)}},onSetCase(t){this.update({isCaseInsensitive:t.target.checked,isAnagram:_t(this.state.word1,this.state.word2,t.target.checked)})},onInputWord1(t){this.update({word1:t.target.value,isAnagram:_t(t.target.value,this.state.word2,this.state.isCaseInsensitive)})},onInputWord2(t){this.update({word2:t.target.value,isAnagram:_t(this.state.word1,t.target.value,this.state.isCaseInsensitive)})}},template:(t,e,n,r)=>t('<article><h1>Anagram tester</h1><p>This form checks whether for 2 given words, one of them is an anagram of the other.</p><p>For this test, an anagram is only valid if and only if it was created by permutation, i.e. both words must have the same amount of letters.</p><form expr0="expr0" class="form"><label><input expr1="expr1" type="checkbox"/> Check words case-insensitively</label><input expr2="expr2"/><input expr3="expr3"/></form><aside><p expr4="expr4"></p><p expr5="expr5"></p></aside></article>',[{redundantAttribute:"expr0",selector:"[expr0]",expressions:[{type:e.EVENT,name:"onsubmit",evaluate:t=>t.checkIsAnagram}]},{redundantAttribute:"expr1",selector:"[expr1]",expressions:[{type:e.ATTRIBUTE,name:"checked",evaluate:t=>t.state.isCaseInsensitive},{type:e.EVENT,name:"oninput",evaluate:t=>t.onSetCase}]},{redundantAttribute:"expr2",selector:"[expr2]",expressions:[{type:e.EVENT,name:"oninput",evaluate:t=>t.onInputWord1},{type:e.VALUE,evaluate:t=>t.state.word1}]},{redundantAttribute:"expr3",selector:"[expr3]",expressions:[{type:e.EVENT,name:"oninput",evaluate:t=>t.onInputWord2},{type:e.VALUE,evaluate:t=>t.state.word2}]},{type:n.IF,evaluate:t=>t.state.isAnagram,redundantAttribute:"expr4",selector:"[expr4]",template:t("These 2 words are anagrams of one another!",[])},{type:n.IF,evaluate:t=>!t.state.isAnagram,redundantAttribute:"expr5",selector:"[expr5]",template:t("These 2 words AREN’T anagrams of one another!",[])}]),name:"app"};
/* Riot v7.1.0, @license MIT */
var Rt;(Rt=Kt,function(t,e,n){let{slots:r,attributes:s,parentScope:o}=void 0===n?{}:n;return function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(((t,e)=>function(){return t(e(...arguments))}))}((e=>e.mount(t,o)),(t=>t({props:e,slots:r,attributes:s})),Ht)(Rt)})(document.getElementById("App"));
