/*! For license information please see component---src-templates-post-js-d7dcfc11758498b1f5f2.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[851],{9047:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":[9548,548]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},2417:function(e,t,n){"use strict";n.d(t,{H:function(){return B},b:function(){return ve},c:function(){return ne},g:function(){return te},h:function(){return I},p:function(){return k},r:function(){return be}});var r=n(5671),o=n(9466);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=n(9611);var u=n(1002);function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function l(e,t,n){return l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,a.Z)(o,n.prototype),o},l.apply(null,arguments)}function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,a.Z)(r,e)},s(e)}var f=n(5861),$=n(2982);var h=n(181);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(s){l=!0,o=s}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||(0,h.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=n(4687),m=n.n(p);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===(0,u.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}(this,n)}}var y,g,b=!1,w="undefined"!=typeof window?window:{},E=w.document||{head:{}},x={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},k=function(e){return Promise.resolve(e)},L=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),S=function(e,t,n,r){n&&n.map((function(n){var r=d(n,3),o=r[0],i=r[1],a=r[2],u=R(e,o),c=j(t,a),l=N(o);x.ael(u,i,c,l),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return x.rel(u,i,c,l)}))}))},j=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){xe(r)}}},R=function(e,t){return 4&t?E:8&t?w:e},N=function(e){return 0!=(2&e)},O="http://www.w3.org/1999/xlink",P=new WeakMap,_=function(e,t,n){var r=Se.get(e);L&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Se.set(e,r)},T=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),i=function(e,t,n,r){var o=M(t),i=Se.get(o);if(e=11===e.nodeType?e:E,i)if("string"==typeof i){e=e.head||e;var a,u=P.get(e);u||P.set(e,u=new Set),u.has(o)||((a=E.createElement("style")).innerHTML=i,e.insertBefore(a,e.querySelector("link")),u&&u.add(o))}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=[].concat((0,$.Z)(e.adoptedStyleSheets),[i]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),o()},M=function(e,t){return"sc-"+e.$tagName$},C={},Z=function(e){return"object"===(e=typeof e)||"function"===e},I=function(e,t){for(var n=null,r=null,o=!1,i=!1,a=[],u=arguments.length,c=new Array(u>2?u-2:0),l=2;l<u;l++)c[l-2]=arguments[l];if(function t(r){for(var u=0;u<r.length;u++)n=r[u],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!Z(n))&&(n=String(n)),o&&i?a[a.length-1].$text$+=n:a.push(o?A(null,n):n),i=o)}(c),t){t.key&&(r=t.key);var s=t.className||t.class;s&&(t.class="object"!=typeof s?s:Object.keys(s).filter((function(e){return s[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,a,H);var f=A(e,null);return f.$attrs$=t,a.length>0&&(f.$children$=a),f.$key$=r,f},A=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},B={},H={forEach:function(e,t){return e.map(U).forEach(t)},map:function(e,t){return e.map(U).map(t).map(F)}},U=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},F=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),I.apply(void 0,[e.vtag,t].concat((0,$.Z)(e.vchildren||[])))}var n=A(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},q=function(e,t,n,r,o,i){if(n!==r){var a=Ee(e,t),u=t.toLowerCase();if("class"===t){var c=e.classList,l=G(n),s=G(r);c.remove.apply(c,(0,$.Z)(l.filter((function(e){return e&&!s.includes(e)})))),c.add.apply(c,(0,$.Z)(s.filter((function(e){return e&&!l.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var h in r)n&&r[h]===n[h]||(h.includes("-")?e.style.setProperty(h,r[h]):e.style[h]=r[h])}else if("key"===t);else if("ref"===t)r&&r(e);else if(a||"o"!==t[0]||"n"!==t[1]){var d=Z(r);if((a||d&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var p=null==r?"":r;"list"===t?a=!1:null!=n&&e[t]==p||(e[t]=p)}}catch(v){}var m=!1;u!==(u=u.replace(/^xlink\:?/,""))&&(t=u,m=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(m?e.removeAttributeNS(O,t):e.removeAttribute(t)):(!a||4&i||o)&&!d&&(r=!0===r?"":r,m?e.setAttributeNS(O,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Ee(w,u)?u.slice(2):u[2]+t.slice(3),n&&x.rel(e,t,n,!1),r&&x.ael(e,t,r,!1)}},z=/\s/,G=function(e){return e?e.split(z):[]},D=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||C,a=t.$attrs$||C;for(r in i)r in a||q(o,r,i[r],void 0,n,t.$flags$);for(r in a)q(o,r,i[r],a[r],n,t.$flags$)},V=function e(t,n,r,o){var i,a,u=n.$children$[r],c=0;if(null!==u.$text$)i=u.$elm$=E.createTextNode(u.$text$);else if(i=u.$elm$=E.createElement(u.$tag$),D(null,u,false),null!=y&&i["s-si"]!==y&&i.classList.add(i["s-si"]=y),u.$children$)for(c=0;c<u.$children$.length;++c)(a=e(t,u,c))&&i.appendChild(a);return i},W=function(e,t,n,r,o,i){var a,u=e;for(u.shadowRoot&&u.tagName===g&&(u=u.shadowRoot);o<=i;++o)r[o]&&(a=V(null,n,o))&&(r[o].$elm$=a,u.insertBefore(a,t))},Y=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,X(r),o.remove())},J=function(e,t,n,r){for(var o,i,a=0,u=0,c=0,l=0,s=t.length-1,f=t[0],$=t[s],h=r.length-1,d=r[0],p=r[h];a<=s&&u<=h;)if(null==f)f=t[++a];else if(null==$)$=t[--s];else if(null==d)d=r[++u];else if(null==p)p=r[--h];else if(K(f,d))Q(f,d),f=t[++a],d=r[++u];else if(K($,p))Q($,p),$=t[--s],p=r[--h];else if(K(f,p))Q(f,p),e.insertBefore(f.$elm$,$.$elm$.nextSibling),f=t[++a],p=r[--h];else if(K($,d))Q($,d),e.insertBefore($.$elm$,f.$elm$),$=t[--s],d=r[++u];else{for(c=-1,l=a;l<=s;++l)if(t[l]&&null!==t[l].$key$&&t[l].$key$===d.$key$){c=l;break}c>=0?((i=t[c]).$tag$!==d.$tag$?o=V(t&&t[u],n,c):(Q(i,d),t[c]=void 0,o=i.$elm$),d=r[++u]):(o=V(t&&t[u],n,u),d=r[++u]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}a>s?W(e,null==r[h+1]?null:r[h+1].$elm$,n,r,u,h):u>h&&Y(t,a,s)},K=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},Q=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,i=t.$tag$,a=t.$text$;null===a?("slot"===i||D(e,t,false),null!==r&&null!==o?J(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),W(n,null,t,o,0,o.length-1)):null!==r&&Y(r,0,r.length-1)):e.$text$!==a&&(n.data=a)},X=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},ee=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,i=e.$vnode$||A(null,null),a=(n=t)&&n.$tag$===B?t:I(null,null,t);g=r.tagName,o.$attrsToReflect$&&(a.$attrs$=a.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=d(e,2),n=t[0],o=t[1];return a.$attrs$[o]=r[n]}))),a.$tag$=null,a.$flags$|=4,e.$vnode$=a,a.$elm$=i.$elm$=r.shadowRoot||r,y=r["s-sc"],Q(i,a)},te=function(e){return ge(e).$hostElement$},ne=function(e,t,n){var r=te(e);return{emit:function(e){return re(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},re=function(e,t,n){var r=x.ce(t,n);return e.dispatchEvent(r),r},oe=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},ie=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){oe(e,e.$ancestorComponent$);return Te((function(){return ae(e,t)}))}e.$flags$|=512},ae=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=d(e,2),n=t[0],r=t[1];return fe(o,n,r)})),e.$queuedListeners$=null),n=fe(o,"componentWillLoad")),r(),$e(n,(function(){return ue(e,o,t)}))},ue=function(){var e=(0,f.Z)(m().mark((function e(t,n,r){var o,i,a,u,c,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,i=function(){},a=o["s-rc"],r&&T(t),t.$cmpMeta$.$tagName$,u=function(){},ce(t,n),a&&(a.map((function(e){return e()})),o["s-rc"]=void 0),u(),i(),c=o["s-p"],l=function(){return le(t)},0===c.length?l():(Promise.all(c).then(l),t.$flags$|=4,c.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),ce=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,ee(e,t)}catch(r){xe(r,e.$hostElement$)}return null},le=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?(fe(r,"componentDidUpdate"),n()):(e.$flags$|=64,he(t),fe(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||se()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&_e((function(){return ie(e,!1)})),e.$flags$&=-517},se=function(e){he(E.documentElement),_e((function(){return re(w,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},fe=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){xe(r)}},$e=function(e,t){return e&&e.then?e.then(t):t()},he=function(e){return e.classList.add("hydrated")},de=function(e,t,n,r){var o,i,a=ge(e),u=a.$hostElement$,c=a.$instanceValues$.get(t),l=a.$flags$,s=a.$lazyInstance$;if(o=n,i=r.$members$[t][0],n=null==o||Z(o)?o:4&i?"false"!==o&&(""===o||!!o):1&i?String(o):o,!(8&l&&void 0!==c||n===c)&&(a.$instanceValues$.set(t,n),s)){if(r.$watchers$&&128&l){var f=r.$watchers$[t];f&&f.map((function(e){try{s[e](n,c,t)}catch(r){xe(r,u)}}))}2==(18&l)&&ie(a,!1)}},pe=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=d(e,2),i=r[0],a=d(r[1],1)[0];31&a||2&n&&32&a?Object.defineProperty(o,i,{get:function(){return e=i,ge(this).$instanceValues$.get(e);var e},set:function(e){de(this,i,e,t)},configurable:!0,enumerable:!0}):1&n&&64&a&&Object.defineProperty(o,i,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=ge(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[i].apply(e,t)}))}})})),1&n){var i=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;x.jmp((function(){var t=i.get(e);if(r.hasOwnProperty(t))n=r[t],delete r[t];else if(o.hasOwnProperty(t)&&"number"==typeof r[t]&&r[t]==n)return;r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=d(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=d(e,2),r=n[0],o=n[1],a=o[1]||r;return i.set(a,r),512&o[0]&&t.$attrsToReflect$.push([r,a]),a}))}}return e},me=function(){var e=(0,f.Z)(m().mark((function e(t,n,r,o,i){var a,u,c,l,s,f,$;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(i=Le(r)).then){e.next=9;break}return a=function(){},e.next=7,i;case 7:i=e.sent,a();case 9:i.isProxied||(r.$watchers$=i.watchers,pe(i,r,2),i.isProxied=!0),r.$tagName$,u=function(){},n.$flags$|=8;try{new i(n)}catch(t){xe(t)}n.$flags$&=-9,n.$flags$|=128,u(),i.style&&(c=i.style,l=M(r),Se.has(l)||(r.$tagName$,s=function(){},_(l,c,!!(1&r.$flags$)),s()));case 17:f=n.$ancestorComponent$,$=function(){return ie(n,!0)},f&&f["s-rc"]?f["s-rc"].push($):$();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}(),ve=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=function(){},c=[],l=n.exclude||[],f=w.customElements,$=E.head,h=$.querySelector("meta[charset]"),p=E.createElement("style"),m=[],y=!0;Object.assign(x,n),x.$resourcesUrl$=new URL(n.resourcesUrl||"./",E.baseURI).href,e.map((function(e){e[1].map((function(n){var u={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};u.$members$=n[2],u.$listeners$=n[3],u.$attrsToReflect$=[],u.$watchers$={};var $=u.$tagName$,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}(c,e);var n=v(c);function c(e){var t;return(0,r.Z)(this,c),e=i(t=n.call(this,e)),we(e,u),1&u.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(c,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),y?m.push(this):x.jmp((function(){return function(e){if(0==(1&x.$flags$)){var t=ge(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)S(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){oe(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=d(t,2),r=n[0];if(31&d(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),me(e,t,n)}r()}}(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;x.jmp((function(){return function(e){if(0==(1&x.$flags$)){var t=ge(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}}(e)}))}},{key:"componentOnReady",value:function(){return ge(this).$onReadyPromise$}}]),c}(s(HTMLElement));u.$lazyBundleId$=e[0],l.includes($)||f.get($)||(c.push($),f.define($,pe(h,u,1)))}))})),p.innerHTML=c+"{visibility:hidden}.hydrated{visibility:inherit}",p.setAttribute("data-styles",""),$.insertBefore(p,h?h.nextSibling:$.firstChild),y=!1,m.length?m.map((function(e){return e.connectedCallback()})):x.jmp((function(){return t=setTimeout(se,30)})),u()},ye=new WeakMap,ge=function(e){return ye.get(e)},be=function(e,t){return ye.set(t.$lazyInstance$=e,t)},we=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],S(e,n,t.$listeners$),ye.set(e,n)},Ee=function(e,t){return t in e},xe=function(e,t){return(0,console.error)(e,t)},ke=new Map,Le=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,a=ke.get(i);return a?a[o]:n(9047)("./".concat(i,".entry.js")).then((function(e){return ke.set(i,e),e[o]}),xe)},Se=new Map,je=[],Re=[],Ne=function(e,t){return function(n){e.push(n),b||(b=!0,t&&4&x.$flags$?_e(Pe):x.raf(Pe))}},Oe=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){xe(n)}e.length=0},Pe=function e(){Oe(je),Oe(Re),(b=je.length>0)&&x.raf(e)},_e=function(e){return k().then(e)},Te=Ne(Re,!0)},3086:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294),o=n(1082),i="header-module--row--3cc44",a=function(e){return r.createElement(o.rU,{className:"header-module--link--8ce94",to:e.to},e.text)},u=function(e){return r.createElement(o.rU,{to:e.to},r.createElement("div",{className:"header-module--button--31197"},e.text))},c=function(e){var t="",n="";return"twitter"===e.site?(t="header-module--button-twitter--6bc47",n="https://twitter.com/"+e.username):"linkedin"===e.site?(t="header-module--button-linkedin--6c28d",n="https://www.linkedin.com/in/"+e.username):"github"===e.site&&(t="header-module--button-github--f7d0c",n="https://www.github.com/"+e.username),r.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.createElement("div",{className:t},e.children," "))},l=function(){return r.createElement(o.i1,{query:"3159585216",render:function(e){return r.createElement("header",{className:"header-module--container--8b59b"},r.createElement("div",{className:i},r.createElement(u,{to:"/",text:e.site.siteMetadata.title}),r.createElement(c,{site:"github",username:"jakeryu"}),r.createElement(c,{site:"linkedin",username:"jakeryu"}),r.createElement(c,{site:"twitter",username:"jakeryu"})),r.createElement("div",{className:i},r.createElement(a,{to:"/",text:"ARTICLES"}),r.createElement(a,{to:"/about",text:"ABOUT"})))}})},s=function(e){var t=e.children;return r.createElement("footer",{className:"footer-module--container--e4696"},r.createElement("div",{className:"footer-module--footer--675c6"},t))},f=function(e){var t=e.children;return r.createElement("div",{className:"layout-module--container--46809"},r.createElement(l,null),r.createElement("div",{className:"layout-module--content--1704e"},t),r.createElement(s,null,"My new Gatsby Blog 2019"))}},1449:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),o=function(e){return r.createElement("section",{className:"title-module--container--9830f"},r.createElement("h1",{className:"title-module--title--71b50"},e.text),r.createElement("div",{className:"title-module--subtitle--0d166"},e.subtitle))}},9788:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7294),o=n(3086),i=n(1449),a=n(2417),u=function(e,t){return"undefined"==typeof window?Promise.resolve():(0,a.p)().then((function(){return(0,a.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],t)}))};!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();var c=function(e){var t=e.data;u();var n=t.markdownRemark;return r.createElement(o.Z,null,r.createElement("div",{className:"post-module--container--7b4d6"},r.createElement("div",{style:{width:"100%",height:"640px",backgroundColor:"#fafafa",backgroundImage:"Url(https://picsum.photos/seed/"+n.frontmatter.keywords+"/960/640)",backgroundSize:"cover",backgroundRepeat:"no-repeat",marginBottom:"30px"}}),r.createElement(i.Z,{text:n.frontmatter.title}),r.createElement("div",{className:"post-module--content--b6718",dangerouslySetInnerHTML:{__html:n.html}})))}},7061:function(e,t,n){var r=n(8698).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(P){f=function(e,t,n){return e[t]=n}}function $(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),u=new R(r||[]);return a(i,"_invoke",{value:k(e,n,u)}),i}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=$;var d={};function p(){}function m(){}function v(){}var y={};f(y,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(N([])));b&&b!==n&&i.call(b,c)&&(y=b);var w=v.prototype=p.prototype=Object.create(y);function E(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,a,u,c){var l=h(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,u,c)}),(function(e){n("throw",e,u,c)})):t.resolve(f).then((function(e){s.value=e,u(s)}),(function(e){return n("throw",e,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}})}function k(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=L(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function N(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:m,configurable:!0}),m.displayName=f(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,f(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},E(x.prototype),f(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x($(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(w),f(w,s,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=N,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4687:function(e,t,n){var r=n(7061)();e.exports=r;try{regeneratorRuntime=r}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},5861:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,c,"next",e)}function c(e){r(a,o,i,u,c,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return o}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},9466:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(1002);function o(e){var t=function(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==(0,r.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},1002:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-templates-post-js-d7dcfc11758498b1f5f2.js.map