function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function y(){return g("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):m(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function S(t){return w(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function P(t,e,n){t.classList[n?"add":"remove"](e)}function A(t,e=document.body){return Array.from(e.querySelectorAll(t))}let N;function R(t){N=t}function C(){if(!N)throw new Error("Function called outside component initialization");return N}const j=[],z=[],L=[],O=[],k=Promise.resolve();let T=!1;function q(t){L.push(t)}let U=!1;const I=new Set;function B(){if(!U){U=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];R(e),H(e.$$)}for(R(null),j.length=0;z.length;)z.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];I.has(e)||(I.add(e),e())}L.length=0}while(j.length);for(;O.length;)O.pop()();T=!1,U=!1,I.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const J=new Set;let M;function K(){M={r:0,c:[],p:M}}function D(){M.r||o(M.c),M=M.p}function G(t,e){t&&t.i&&(J.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),M.c.push((()=>{J.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function W(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Q(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),q((()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(q)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(j.push(t),T||(T=!0,k.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,s,c,a,i,l=[-1]){const u=N;R(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(h.ctx=s?s(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),p&&tt(e,t)),n})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const t=_(n.target);h.fragment&&h.fragment.l(t),t.forEach(d)}else h.fragment&&h.fragment.c();n.intro&&G(e.$$.fragment),Q(e,n.target,n.anchor),B()}R(u)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=[];function ot(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const st={};function ct(t){let e,n;return{c(){e=m("a"),n=g("←"),this.h()},l(t){e=E(t,"A",{href:!0,class:!0});var r=_(e);n=w(r,"←"),r.forEach(d),this.h()},h(){b(e,"href","/source-sauce"),b(e,"class","back svelte-zrhw7d")},m(t,r){h(t,e,r),f(e,n)},d(t){t&&d(e)}}}function at(t){let e,n,r,o,s,c,i,u,p,y,v,x,P,A,N,R,C,j,z,L=void 0!==t[0]&&ct();const O=t[2].default,k=a(O,t,t[1],null);return{c(){L&&L.c(),e=$(),n=m("header"),r=m("h1"),o=g("Czeched Substance"),s=$(),c=m("main"),k&&k.c(),i=$(),u=m("footer"),p=m("p"),y=g("Made With ♡ in Czechia"),v=$(),x=m("p"),P=g("Proudly Hosted By\n      "),A=m("a"),N=g("@CzechedSubstance"),R=g("\n      on\n      "),C=m("a"),j=g("GitHub Pages"),this.h()},l(t){L&&L.l(t),e=S(t),n=E(t,"HEADER",{class:!0});var a=_(n);r=E(a,"H1",{class:!0});var l=_(r);o=w(l,"Czeched Substance"),l.forEach(d),a.forEach(d),s=S(t),c=E(t,"MAIN",{class:!0});var f=_(c);k&&k.l(f),i=S(f),u=E(f,"FOOTER",{class:!0});var h=_(u);p=E(h,"P",{class:!0});var m=_(p);y=w(m,"Made With ♡ in Czechia"),m.forEach(d),v=S(h),x=E(h,"P",{class:!0});var g=_(x);P=w(g,"Proudly Hosted By\n      "),A=E(g,"A",{href:!0,class:!0});var $=_(A);N=w($,"@CzechedSubstance"),$.forEach(d),R=w(g,"\n      on\n      "),C=E(g,"A",{href:!0,class:!0});var b=_(C);j=w(b,"GitHub Pages"),b.forEach(d),g.forEach(d),h.forEach(d),f.forEach(d),this.h()},h(){b(r,"class","svelte-zrhw7d"),b(n,"class","svelte-zrhw7d"),b(p,"class","svelte-zrhw7d"),b(A,"href","https://github.com/CzechedSubstance"),b(A,"class","svelte-zrhw7d"),b(C,"href","https://pages.github.com/"),b(C,"class","svelte-zrhw7d"),b(x,"class","svelte-zrhw7d"),b(u,"class","svelte-zrhw7d"),b(c,"class","svelte-zrhw7d")},m(t,a){L&&L.m(t,a),h(t,e,a),h(t,n,a),f(n,r),f(r,o),h(t,s,a),h(t,c,a),k&&k.m(c,null),f(c,i),f(c,u),f(u,p),f(p,y),f(u,v),f(u,x),f(x,P),f(x,A),f(A,N),f(x,R),f(x,C),f(C,j),z=!0},p(t,[n]){void 0!==t[0]?L||(L=ct(),L.c(),L.m(e.parentNode,e)):L&&(L.d(1),L=null),k&&k.p&&2&n&&l(k,O,t,t[1],n,null,null)},i(t){z||(G(k,t),z=!0)},o(t){V(k,t),z=!1},d(t){L&&L.d(t),t&&d(e),t&&d(n),t&&d(s),t&&d(c),k&&k.d(t)}}}function it(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class lt extends nt{constructor(t){super(),et(this,t,it,at,c,{segment:0})}}function ut(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=g(r)},l(t){e=E(t,"PRE",{});var o=_(e);n=w(o,r),o.forEach(d)},m(t,r){h(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&d(e)}}}function ft(e){let n,r,o,s,c,a,i,l,u,p=e[1].message+"";document.title=n=e[0];let v=e[2]&&e[1].stack&&ut(e);return{c(){r=$(),o=m("h1"),s=g(e[0]),c=$(),a=m("p"),i=g(p),l=$(),v&&v.c(),u=y(),this.h()},l(t){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),r=S(t),o=E(t,"H1",{class:!0});var n=_(o);s=w(n,e[0]),n.forEach(d),c=S(t),a=E(t,"P",{class:!0});var f=_(a);i=w(f,p),f.forEach(d),l=S(t),v&&v.l(t),u=y(),this.h()},h(){b(o,"class","svelte-jpshsi"),b(a,"class","svelte-jpshsi")},m(t,e){h(t,r,e),h(t,o,e),f(o,s),h(t,c,e),h(t,a,e),f(a,i),h(t,l,e),v&&v.m(t,e),h(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&p!==(p=t[1].message+"")&&x(i,p),t[2]&&t[1].stack?v?v.p(t,e):(v=ut(t),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&d(r),t&&d(o),t&&d(c),t&&d(a),t&&d(l),v&&v.d(t),t&&d(u)}}}function ht(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class dt extends nt{constructor(t){super(),et(this,t,ht,ft,c,{status:0,error:1})}}function pt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Y(n.$$.fragment),r=y()},l(t){n&&X(n.$$.fragment,t),r=y()},m(t,e){n&&Q(n,t,e),h(t,r,e),o=!0},p(t,e){const o=16&e?W(s,[F(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){K();const t=n;V(t.$$.fragment,1,0,(()=>{Z(t,1)})),D()}c?(n=new c(a()),Y(n.$$.fragment),G(n.$$.fragment,1),Q(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&G(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&d(r),n&&Z(n,t)}}}function mt(t){let e,n;return e=new dt({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,r){Q(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function gt(t){let e,n,r,o;const s=[mt,pt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){c[e].m(t,n),h(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(K(),V(c[i],1,1,(()=>{c[i]=null})),D(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),G(n,1),n.m(r.parentNode,r))},i(t){o||(G(n),o=!0)},o(t){V(n),o=!1},d(t){c[e].d(t),t&&d(r)}}}function $t(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[gt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new lt({props:s}),{c(){Y(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,e){Q(n,t,e),r=!0},p(t,[e]){const r=12&e?W(o,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(G(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function yt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,h;return u=l,C().$$.after_update.push(u),f=st,h=r,C().$$.context.set(f,h),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class vt extends nt{constructor(t){super(),et(this,t,yt,$t,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const bt=[],_t=[{js:()=>Promise.all([import("./index.7097d918.js"),__inject_styles(["client-4f2d8a74.css","index-a7fa7faa.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./posts.3625acba.js"),__inject_styles(["client-4f2d8a74.css","posts-a42c8ef6.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./posts.50e3aa0a.js"),__inject_styles(["client-4f2d8a74.css","posts-a42c8ef6.css"])]).then((function(t){return t[0]}))}],Et=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/source-sauce\/posts\/?$/,parts:[null,{i:1}]},{pattern:/^\/posts\/?$/,parts:[{i:2}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function wt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function a(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function St(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let xt,Pt=1;const At="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Nt={};let Rt,Ct;function jt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Rt))return null;let e=t.pathname.slice(Rt.length);if(""===e&&(e="/"),!bt.some((t=>t.test(e))))for(let n=0;n<Et.length;n+=1){const r=Et[n],o=r.pattern.exec(e);if(o){const n=jt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Lt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=St(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=zt(o);if(s){Tt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),At.pushState({id:xt},"",o.href)}}function Ot(){return{x:pageXOffset,y:pageYOffset}}function kt(t){if(Nt[xt]=Ot(),t.state){const e=zt(new URL(location.href));e?Tt(e,t.state.id):location.href=location.href}else Pt=Pt+1,function(t){xt=t}(Pt),At.replaceState({id:xt},"",location.href)}function Tt(t,e,n,r){return wt(this,void 0,void 0,(function*(){const o=!!e;if(o)xt=e;else{const t=Ot();Nt[xt]=t,xt=e=++Pt,Nt[xt]=n?t:{x:0,y:0}}if(yield Ct(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Nt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Nt[xt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function qt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ut,It=null;function Bt(t){const e=St(t.target);e&&"prefetch"===e.rel&&function(t){const e=zt(new URL(t,qt(document)));if(e)It&&t===It.href||(It={href:t,promise:re(e)}),It.promise}(e.href)}function Ht(t){clearTimeout(Ut),Ut=setTimeout((()=>{Bt(t)}),20)}function Jt(t,e={noscroll:!1,replaceState:!1}){const n=zt(new URL(t,qt(document)));return n?(At[e.replaceState?"replaceState":"pushState"]({id:xt},"",t),Tt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Mt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Kt,Dt,Gt,Vt=!1,Wt=[],Ft="{}";const Yt={page:function(t){const e=ot(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:ot(null),session:ot(Mt&&Mt.session)};let Xt,Qt,Zt;function te(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ee(t){return wt(this,void 0,void 0,(function*(){Kt&&Yt.preloading.set(!0);const e=function(t){return It&&It.href===t.href?It.promise:re(t)}(t),n=Dt={},r=yield e,{redirect:o}=r;if(n===Dt)if(o)yield Jt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ne(n,e,te(e,t.page))}}))}function ne(t,e,n){return wt(this,void 0,void 0,(function*(){Yt.page.set(n),Yt.preloading.set(!1),Kt?Kt.$set(e):(e.stores={page:{subscribe:Yt.page.subscribe},preloading:{subscribe:Yt.preloading.subscribe},session:Yt.session},e.level0={props:yield Gt},e.notify=Yt.page.notify,Kt=new vt({target:Zt,props:e,hydrate:!0})),Wt=t,Ft=JSON.stringify(n.query),Vt=!0,Qt=!1}))}function re(t){return wt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Gt){const t=()=>({});Gt=Mt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Xt)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>wt(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==Ft)return!0;const o=Wt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const h=i++;if(!Qt&&!u&&Wt[a]&&Wt[a].part===e.i)return Wt[a];u=!1;const{default:d,preload:p}=yield _t[e.i].js();let m;return m=Vt||!Mt.preloaded[a+1]?p?yield p.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Xt):{}:Mt.preloaded[a+1],s[`level${h}`]={component:d,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var oe,se,ce;Yt.session.subscribe((t=>wt(void 0,void 0,void 0,(function*(){if(Xt=t,!Vt)return;Qt=!0;const e=zt(new URL(location.href)),n=Dt={},{redirect:r,props:o,branch:s}=yield re(e);n===Dt&&(r?yield Jt(r.location,{replaceState:!0}):yield ne(s,o,te(o,e.page)))})))),oe={target:document.querySelector("body")},se=oe.target,Zt=se,ce=Mt.baseUrl,Rt=ce,Ct=ee,"scrollRestoration"in At&&(At.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{At.scrollRestoration="auto"})),addEventListener("load",(()=>{At.scrollRestoration="manual"})),addEventListener("click",Lt),addEventListener("popstate",kt),addEventListener("touchstart",Bt),addEventListener("mousemove",Ht),Mt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Mt;Gt||(Gt=o&&o[0]);const a={error:c,status:s,session:r,level0:{props:Gt},level1:{props:{status:s,error:c},component:dt},segments:o},i=jt(n);ne([],a,{host:t,path:e,query:i,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;At.replaceState({id:Pt},"",e);const n=zt(new URL(location.href));if(n)return Tt(n,Pt,!0,t)}));export{t as A,p as B,nt as S,E as a,_ as b,a as c,d,m as e,b as f,h as g,G as h,et as i,V as j,g as k,v as l,w as m,u as n,x as o,$ as p,Y as q,A as r,c as s,P as t,l as u,S as v,X as w,Q as x,Z as y,f as z};

import __inject_styles from './inject_styles.5607aec6.js';