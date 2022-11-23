(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function Ca(t,s){const n=Object.create(null),a=t.split(",");for(let l=0;l<a.length;l++)n[a[l]]=!0;return s?l=>!!n[l.toLowerCase()]:l=>!!n[l]}function st(t){if(ne(t)){const s={};for(let n=0;n<t.length;n++){const a=t[n],l=Ne(a)?Xp(a):st(a);if(l)for(const r in l)s[r]=l[r]}return s}else{if(Ne(t))return t;if(Re(t))return t}}const Qp=/;(?![^(]*\))/g,Jp=/:([^]+)/,Yp=/\/\*.*?\*\//gs;function Xp(t){const s={};return t.replace(Yp,"").split(Qp).forEach(n=>{if(n){const a=n.split(Jp);a.length>1&&(s[a[0].trim()]=a[1].trim())}}),s}function Ge(t){let s="";if(Ne(t))s=t;else if(ne(t))for(let n=0;n<t.length;n++){const a=Ge(t[n]);a&&(s+=a+" ")}else if(Re(t))for(const n in t)t[n]&&(s+=n+" ");return s.trim()}function ae(t){if(!t)return null;let{class:s,style:n}=t;return s&&!Ne(s)&&(t.class=Ge(s)),n&&(t.style=st(n)),t}const em="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",tm=Ca(em),sm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nm=Ca(sm);function gc(t){return!!t||t===""}const _t=t=>Ne(t)?t:t==null?"":ne(t)||Re(t)&&(t.toString===bc||!ce(t.toString))?JSON.stringify(t,vc,2):String(t),vc=(t,s)=>s&&s.__v_isRef?vc(t,s.value):Fs(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((n,[a,l])=>(n[`${a} =>`]=l,n),{})}:yc(s)?{[`Set(${s.size})`]:[...s.values()]}:Re(s)&&!ne(s)&&!wc(s)?String(s):s,Oe={},Ds=[],St=()=>{},am=()=>!1,lm=/^on[^a-z]/,La=t=>lm.test(t),dr=t=>t.startsWith("onUpdate:"),nt=Object.assign,fr=(t,s)=>{const n=t.indexOf(s);n>-1&&t.splice(n,1)},rm=Object.prototype.hasOwnProperty,ye=(t,s)=>rm.call(t,s),ne=Array.isArray,Fs=t=>Ga(t)==="[object Map]",yc=t=>Ga(t)==="[object Set]",ce=t=>typeof t=="function",Ne=t=>typeof t=="string",gr=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",_c=t=>Re(t)&&ce(t.then)&&ce(t.catch),bc=Object.prototype.toString,Ga=t=>bc.call(t),om=t=>Ga(t).slice(8,-1),wc=t=>Ga(t)==="[object Object]",vr=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ia=Ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ra=t=>{const s=Object.create(null);return n=>s[n]||(s[n]=t(n))},im=/-(\w)/g,Nt=Ra(t=>t.replace(im,(s,n)=>n?n.toUpperCase():"")),cm=/\B([A-Z])/g,Ss=Ra(t=>t.replace(cm,"-$1").toLowerCase()),Za=Ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xa=Ra(t=>t?`on${Za(t)}`:""),Pn=(t,s)=>!Object.is(t,s),js=(t,s)=>{for(let n=0;n<t.length;n++)t[n](s)},va=(t,s,n)=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,value:n})},ya=t=>{const s=parseFloat(t);return isNaN(s)?t:s};let uo;const um=()=>uo||(uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class xc{constructor(s=!1){this.detached=s,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ut,!s&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(s){if(this.active){const n=ut;try{return ut=this,s()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(s){if(this.active){let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!s){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this.active=!1}}}function pm(t){return new xc(t)}function mm(t,s=ut){s&&s.active&&s.effects.push(t)}function $c(){return ut}function kc(t){ut&&ut.cleanups.push(t)}const yr=t=>{const s=new Set(t);return s.w=0,s.n=0,s},Ac=t=>(t.w&cs)>0,Mc=t=>(t.n&cs)>0,hm=({deps:t})=>{if(t.length)for(let s=0;s<t.length;s++)t[s].w|=cs},dm=t=>{const{deps:s}=t;if(s.length){let n=0;for(let a=0;a<s.length;a++){const l=s[a];Ac(l)&&!Mc(l)?l.delete(t):s[n++]=l,l.w&=~cs,l.n&=~cs}s.length=n}},Sl=new WeakMap;let fn=0,cs=1;const Tl=30;let kt;const xs=Symbol(""),El=Symbol("");class _r{constructor(s,n=null,a){this.fn=s,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mm(this,a)}run(){if(!this.active)return this.fn();let s=kt,n=ns;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=kt,kt=this,ns=!0,cs=1<<++fn,fn<=Tl?hm(this):po(this),this.fn()}finally{fn<=Tl&&dm(this),cs=1<<--fn,kt=this.parent,ns=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(po(this),this.onStop&&this.onStop(),this.active=!1)}}function po(t){const{deps:s}=t;if(s.length){for(let n=0;n<s.length;n++)s[n].delete(t);s.length=0}}let ns=!0;const Sc=[];function en(){Sc.push(ns),ns=!1}function tn(){const t=Sc.pop();ns=t===void 0?!0:t}function ft(t,s,n){if(ns&&kt){let a=Sl.get(t);a||Sl.set(t,a=new Map);let l=a.get(n);l||a.set(n,l=yr()),Tc(l)}}function Tc(t,s){let n=!1;fn<=Tl?Mc(t)||(t.n|=cs,n=!Ac(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function Bt(t,s,n,a,l,r){const o=Sl.get(t);if(!o)return;let i=[];if(s==="clear")i=[...o.values()];else if(n==="length"&&ne(t)){const c=ya(a);o.forEach((u,p)=>{(p==="length"||p>=c)&&i.push(u)})}else switch(n!==void 0&&i.push(o.get(n)),s){case"add":ne(t)?vr(n)&&i.push(o.get("length")):(i.push(o.get(xs)),Fs(t)&&i.push(o.get(El)));break;case"delete":ne(t)||(i.push(o.get(xs)),Fs(t)&&i.push(o.get(El)));break;case"set":Fs(t)&&i.push(o.get(xs));break}if(i.length===1)i[0]&&Pl(i[0]);else{const c=[];for(const u of i)u&&c.push(...u);Pl(yr(c))}}function Pl(t,s){const n=ne(t)?t:[...t];for(const a of n)a.computed&&mo(a);for(const a of n)a.computed||mo(a)}function mo(t,s){(t!==kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const fm=Ca("__proto__,__v_isRef,__isVue"),Ec=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gr)),gm=br(),vm=br(!1,!0),ym=br(!0),ho=_m();function _m(){const t={};return["includes","indexOf","lastIndexOf"].forEach(s=>{t[s]=function(...n){const a=be(this);for(let r=0,o=this.length;r<o;r++)ft(a,"get",r+"");const l=a[s](...n);return l===-1||l===!1?a[s](...n.map(be)):l}}),["push","pop","shift","unshift","splice"].forEach(s=>{t[s]=function(...n){en();const a=be(this)[s].apply(this,n);return tn(),a}}),t}function br(t=!1,s=!1){return function(a,l,r){if(l==="__v_isReactive")return!t;if(l==="__v_isReadonly")return t;if(l==="__v_isShallow")return s;if(l==="__v_raw"&&r===(t?s?Gm:Lc:s?Cc:Oc).get(a))return a;const o=ne(a);if(!t&&o&&ye(ho,l))return Reflect.get(ho,l,r);const i=Reflect.get(a,l,r);return(gr(l)?Ec.has(l):fm(l))||(t||ft(a,"get",l),s)?i:Me(i)?o&&vr(l)?i:i.value:Re(i)?t?ys(i):Ce(i):i}}const bm=Pc(),wm=Pc(!0);function Pc(t=!1){return function(n,a,l,r){let o=n[a];if(Ks(o)&&Me(o)&&!Me(l))return!1;if(!t&&(!_a(l)&&!Ks(l)&&(o=be(o),l=be(l)),!ne(n)&&Me(o)&&!Me(l)))return o.value=l,!0;const i=ne(n)&&vr(a)?Number(a)<n.length:ye(n,a),c=Reflect.set(n,a,l,r);return n===be(r)&&(i?Pn(l,o)&&Bt(n,"set",a,l):Bt(n,"add",a,l)),c}}function xm(t,s){const n=ye(t,s);t[s];const a=Reflect.deleteProperty(t,s);return a&&n&&Bt(t,"delete",s,void 0),a}function $m(t,s){const n=Reflect.has(t,s);return(!gr(s)||!Ec.has(s))&&ft(t,"has",s),n}function km(t){return ft(t,"iterate",ne(t)?"length":xs),Reflect.ownKeys(t)}const zc={get:gm,set:bm,deleteProperty:xm,has:$m,ownKeys:km},Am={get:ym,set(t,s){return!0},deleteProperty(t,s){return!0}},Mm=nt({},zc,{get:vm,set:wm}),wr=t=>t,Na=t=>Reflect.getPrototypeOf(t);function Jn(t,s,n=!1,a=!1){t=t.__v_raw;const l=be(t),r=be(s);n||(s!==r&&ft(l,"get",s),ft(l,"get",r));const{has:o}=Na(l),i=a?wr:n?kr:zn;if(o.call(l,s))return i(t.get(s));if(o.call(l,r))return i(t.get(r));t!==l&&t.get(s)}function Yn(t,s=!1){const n=this.__v_raw,a=be(n),l=be(t);return s||(t!==l&&ft(a,"has",t),ft(a,"has",l)),t===l?n.has(t):n.has(t)||n.has(l)}function Xn(t,s=!1){return t=t.__v_raw,!s&&ft(be(t),"iterate",xs),Reflect.get(t,"size",t)}function fo(t){t=be(t);const s=be(this);return Na(s).has.call(s,t)||(s.add(t),Bt(s,"add",t,t)),this}function go(t,s){s=be(s);const n=be(this),{has:a,get:l}=Na(n);let r=a.call(n,t);r||(t=be(t),r=a.call(n,t));const o=l.call(n,t);return n.set(t,s),r?Pn(s,o)&&Bt(n,"set",t,s):Bt(n,"add",t,s),this}function vo(t){const s=be(this),{has:n,get:a}=Na(s);let l=n.call(s,t);l||(t=be(t),l=n.call(s,t)),a&&a.call(s,t);const r=s.delete(t);return l&&Bt(s,"delete",t,void 0),r}function yo(){const t=be(this),s=t.size!==0,n=t.clear();return s&&Bt(t,"clear",void 0,void 0),n}function ea(t,s){return function(a,l){const r=this,o=r.__v_raw,i=be(o),c=s?wr:t?kr:zn;return!t&&ft(i,"iterate",xs),o.forEach((u,p)=>a.call(l,c(u),c(p),r))}}function ta(t,s,n){return function(...a){const l=this.__v_raw,r=be(l),o=Fs(r),i=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=l[t](...a),p=n?wr:s?kr:zn;return!s&&ft(r,"iterate",c?El:xs),{next(){const{value:m,done:h}=u.next();return h?{value:m,done:h}:{value:i?[p(m[0]),p(m[1])]:p(m),done:h}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...s){return t==="delete"?!1:this}}function Sm(){const t={get(r){return Jn(this,r)},get size(){return Xn(this)},has:Yn,add:fo,set:go,delete:vo,clear:yo,forEach:ea(!1,!1)},s={get(r){return Jn(this,r,!1,!0)},get size(){return Xn(this)},has:Yn,add:fo,set:go,delete:vo,clear:yo,forEach:ea(!1,!0)},n={get(r){return Jn(this,r,!0)},get size(){return Xn(this,!0)},has(r){return Yn.call(this,r,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:ea(!0,!1)},a={get(r){return Jn(this,r,!0,!0)},get size(){return Xn(this,!0)},has(r){return Yn.call(this,r,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:ea(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ta(r,!1,!1),n[r]=ta(r,!0,!1),s[r]=ta(r,!1,!0),a[r]=ta(r,!0,!0)}),[t,n,s,a]}const[Tm,Em,Pm,zm]=Sm();function xr(t,s){const n=s?t?zm:Pm:t?Em:Tm;return(a,l,r)=>l==="__v_isReactive"?!t:l==="__v_isReadonly"?t:l==="__v_raw"?a:Reflect.get(ye(n,l)&&l in a?n:a,l,r)}const Om={get:xr(!1,!1)},Cm={get:xr(!1,!0)},Lm={get:xr(!0,!1)},Oc=new WeakMap,Cc=new WeakMap,Lc=new WeakMap,Gm=new WeakMap;function Rm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zm(t){return t.__v_skip||!Object.isExtensible(t)?0:Rm(om(t))}function Ce(t){return Ks(t)?t:$r(t,!1,zc,Om,Oc)}function Nm(t){return $r(t,!1,Mm,Cm,Cc)}function ys(t){return $r(t,!0,Am,Lm,Lc)}function $r(t,s,n,a,l){if(!Re(t)||t.__v_raw&&!(s&&t.__v_isReactive))return t;const r=l.get(t);if(r)return r;const o=Zm(t);if(o===0)return t;const i=new Proxy(t,o===2?a:n);return l.set(t,i),i}function qs(t){return Ks(t)?qs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ks(t){return!!(t&&t.__v_isReadonly)}function _a(t){return!!(t&&t.__v_isShallow)}function Gc(t){return qs(t)||Ks(t)}function be(t){const s=t&&t.__v_raw;return s?be(s):t}function Ia(t){return va(t,"__v_skip",!0),t}const zn=t=>Re(t)?Ce(t):t,kr=t=>Re(t)?ys(t):t;function Ar(t){ns&&kt&&(t=be(t),Tc(t.dep||(t.dep=yr())))}function Mr(t,s){t=be(t),t.dep&&Pl(t.dep)}function Me(t){return!!(t&&t.__v_isRef===!0)}function K(t){return Rc(t,!1)}function It(t){return Rc(t,!0)}function Rc(t,s){return Me(t)?t:new Im(t,s)}class Im{constructor(s,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?s:be(s),this._value=n?s:zn(s)}get value(){return Ar(this),this._value}set value(s){const n=this.__v_isShallow||_a(s)||Ks(s);s=n?s:be(s),Pn(s,this._rawValue)&&(this._rawValue=s,this._value=n?s:zn(s),Mr(this))}}function b(t){return Me(t)?t.value:t}const Dm={get:(t,s,n)=>b(Reflect.get(t,s,n)),set:(t,s,n,a)=>{const l=t[s];return Me(l)&&!Me(n)?(l.value=n,!0):Reflect.set(t,s,n,a)}};function Zc(t){return qs(t)?t:new Proxy(t,Dm)}class Fm{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:a}=s(()=>Ar(this),()=>Mr(this));this._get=n,this._set=a}get value(){return this._get()}set value(s){this._set(s)}}function Nc(t){return new Fm(t)}function jm(t){const s=ne(t)?new Array(t.length):{};for(const n in t)s[n]=Hm(t,n);return s}class qm{constructor(s,n,a){this._object=s,this._key=n,this._defaultValue=a,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}}function Hm(t,s,n){const a=t[s];return Me(a)?a:new qm(t,s,n)}var Ic;class Vm{constructor(s,n,a,l){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ic]=!1,this._dirty=!0,this.effect=new _r(s,()=>{this._dirty||(this._dirty=!0,Mr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=a}get value(){const s=be(this);return Ar(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}Ic="__v_isReadonly";function Bm(t,s,n=!1){let a,l;const r=ce(t);return r?(a=t,l=St):(a=t.get,l=t.set),new Vm(a,l,r||!l,n)}function as(t,s,n,a){let l;try{l=a?t(...a):t()}catch(r){Da(r,s,n)}return l}function Tt(t,s,n,a){if(ce(t)){const r=as(t,s,n,a);return r&&_c(r)&&r.catch(o=>{Da(o,s,n)}),r}const l=[];for(let r=0;r<t.length;r++)l.push(Tt(t[r],s,n,a));return l}function Da(t,s,n,a=!0){const l=s?s.vnode:null;if(s){let r=s.parent;const o=s.proxy,i=n;for(;r;){const u=r.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](t,o,i)===!1)return}r=r.parent}const c=s.appContext.config.errorHandler;if(c){as(c,null,10,[t,o,i]);return}}Um(t,n,l,a)}function Um(t,s,n,a=!0){console.error(t)}let On=!1,zl=!1;const We=[];let Lt=0;const Hs=[];let qt=null,gs=0;const Dc=Promise.resolve();let Sr=null;function Qe(t){const s=Sr||Dc;return t?s.then(this?t.bind(this):t):s}function Km(t){let s=Lt+1,n=We.length;for(;s<n;){const a=s+n>>>1;Cn(We[a])<t?s=a+1:n=a}return s}function Tr(t){(!We.length||!We.includes(t,On&&t.allowRecurse?Lt+1:Lt))&&(t.id==null?We.push(t):We.splice(Km(t.id),0,t),Fc())}function Fc(){!On&&!zl&&(zl=!0,Sr=Dc.then(qc))}function Wm(t){const s=We.indexOf(t);s>Lt&&We.splice(s,1)}function Qm(t){ne(t)?Hs.push(...t):(!qt||!qt.includes(t,t.allowRecurse?gs+1:gs))&&Hs.push(t),Fc()}function _o(t,s=On?Lt+1:0){for(;s<We.length;s++){const n=We[s];n&&n.pre&&(We.splice(s,1),s--,n())}}function jc(t){if(Hs.length){const s=[...new Set(Hs)];if(Hs.length=0,qt){qt.push(...s);return}for(qt=s,qt.sort((n,a)=>Cn(n)-Cn(a)),gs=0;gs<qt.length;gs++)qt[gs]();qt=null,gs=0}}const Cn=t=>t.id==null?1/0:t.id,Jm=(t,s)=>{const n=Cn(t)-Cn(s);if(n===0){if(t.pre&&!s.pre)return-1;if(s.pre&&!t.pre)return 1}return n};function qc(t){zl=!1,On=!0,We.sort(Jm);const s=St;try{for(Lt=0;Lt<We.length;Lt++){const n=We[Lt];n&&n.active!==!1&&as(n,null,14)}}finally{Lt=0,We.length=0,jc(),On=!1,Sr=null,(We.length||Hs.length)&&qc()}}function Ym(t,s,...n){if(t.isUnmounted)return;const a=t.vnode.props||Oe;let l=n;const r=s.startsWith("update:"),o=r&&s.slice(7);if(o&&o in a){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=a[p]||Oe;h&&(l=n.map(g=>Ne(g)?g.trim():g)),m&&(l=n.map(ya))}let i,c=a[i=Xa(s)]||a[i=Xa(Nt(s))];!c&&r&&(c=a[i=Xa(Ss(s))]),c&&Tt(c,t,6,l);const u=a[i+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Tt(u,t,6,l)}}function Hc(t,s,n=!1){const a=s.emitsCache,l=a.get(t);if(l!==void 0)return l;const r=t.emits;let o={},i=!1;if(!ce(t)){const c=u=>{const p=Hc(u,s,!0);p&&(i=!0,nt(o,p))};!n&&s.mixins.length&&s.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!i?(Re(t)&&a.set(t,null),null):(ne(r)?r.forEach(c=>o[c]=null):nt(o,r),Re(t)&&a.set(t,o),o)}function Fa(t,s){return!t||!La(s)?!1:(s=s.slice(2).replace(/Once$/,""),ye(t,s[0].toLowerCase()+s.slice(1))||ye(t,Ss(s))||ye(t,s))}let Ke=null,ja=null;function ba(t){const s=Ke;return Ke=t,ja=t&&t.type.__scopeId||null,s}function t5(t){ja=t}function s5(){ja=null}function S(t,s=Ke,n){if(!s||t._n)return t;const a=(...l)=>{a._d&&Eo(-1);const r=ba(s);let o;try{o=t(...l)}finally{ba(r),a._d&&Eo(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function el(t){const{type:s,vnode:n,proxy:a,withProxy:l,props:r,propsOptions:[o],slots:i,attrs:c,emit:u,render:p,renderCache:m,data:h,setupState:g,ctx:f,inheritAttrs:_}=t;let x,$;const A=ba(t);try{if(n.shapeFlag&4){const T=l||a;x=Ct(p.call(T,T,m,r,g,h,f)),$=c}else{const T=s;x=Ct(T.length>1?T(r,{attrs:c,slots:i,emit:u}):T(r,null)),$=s.props?c:Xm(c)}}catch(T){bn.length=0,Da(T,t,1),x=O(us)}let w=x;if($&&_!==!1){const T=Object.keys($),{shapeFlag:Z}=w;T.length&&Z&7&&(o&&T.some(dr)&&($=eh($,o)),w=As(w,$))}return n.dirs&&(w=As(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),x=w,ba(A),x}const Xm=t=>{let s;for(const n in t)(n==="class"||n==="style"||La(n))&&((s||(s={}))[n]=t[n]);return s},eh=(t,s)=>{const n={};for(const a in t)(!dr(a)||!(a.slice(9)in s))&&(n[a]=t[a]);return n};function th(t,s,n){const{props:a,children:l,component:r}=t,{props:o,children:i,patchFlag:c}=s,u=r.emitsOptions;if(s.dirs||s.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return a?bo(a,o,u):!!o;if(c&8){const p=s.dynamicProps;for(let m=0;m<p.length;m++){const h=p[m];if(o[h]!==a[h]&&!Fa(u,h))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:a===o?!1:a?o?bo(a,o,u):!0:!!o;return!1}function bo(t,s,n){const a=Object.keys(s);if(a.length!==Object.keys(t).length)return!0;for(let l=0;l<a.length;l++){const r=a[l];if(s[r]!==t[r]&&!Fa(n,r))return!0}return!1}function sh({vnode:t,parent:s},n){for(;s&&s.subTree===t;)(t=s.vnode).el=n,s=s.parent}const Vc=t=>t.__isSuspense;function nh(t,s){s&&s.pendingBranch?ne(t)?s.effects.push(...t):s.effects.push(t):Qm(t)}function mt(t,s){if(Be){let n=Be.provides;const a=Be.parent&&Be.parent.provides;a===n&&(n=Be.provides=Object.create(a)),n[t]=s}}function R(t,s,n=!1){const a=Be||Ke;if(a){const l=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(l&&t in l)return l[t];if(arguments.length>1)return n&&ce(s)?s.call(a.proxy):s}}function qn(t,s){return Er(t,null,s)}const sa={};function he(t,s,n){return Er(t,s,n)}function Er(t,s,{immediate:n,deep:a,flush:l,onTrack:r,onTrigger:o}=Oe){const i=Be;let c,u=!1,p=!1;if(Me(t)?(c=()=>t.value,u=_a(t)):qs(t)?(c=()=>t,a=!0):ne(t)?(p=!0,u=t.some(w=>qs(w)||_a(w)),c=()=>t.map(w=>{if(Me(w))return w.value;if(qs(w))return _s(w);if(ce(w))return as(w,i,2)})):ce(t)?s?c=()=>as(t,i,2):c=()=>{if(!(i&&i.isUnmounted))return m&&m(),Tt(t,i,3,[h])}:c=St,s&&a){const w=c;c=()=>_s(w())}let m,h=w=>{m=$.onStop=()=>{as(w,i,4)}},g;if(Gn)if(h=St,s?n&&Tt(s,i,3,[c(),p?[]:void 0,h]):c(),l==="sync"){const w=Wh();g=w.__watcherHandles||(w.__watcherHandles=[])}else return St;let f=p?new Array(t.length).fill(sa):sa;const _=()=>{if(!!$.active)if(s){const w=$.run();(a||u||(p?w.some((T,Z)=>Pn(T,f[Z])):Pn(w,f)))&&(m&&m(),Tt(s,i,3,[w,f===sa?void 0:p&&f[0]===sa?[]:f,h]),f=w)}else $.run()};_.allowRecurse=!!s;let x;l==="sync"?x=_:l==="post"?x=()=>Ue(_,i&&i.suspense):(_.pre=!0,i&&(_.id=i.uid),x=()=>Tr(_));const $=new _r(c,x);s?n?_():f=$.run():l==="post"?Ue($.run.bind($),i&&i.suspense):$.run();const A=()=>{$.stop(),i&&i.scope&&fr(i.scope.effects,$)};return g&&g.push(A),A}function ah(t,s,n){const a=this.proxy,l=Ne(t)?t.includes(".")?Bc(a,t):()=>a[t]:t.bind(a,a);let r;ce(s)?r=s:(r=s.handler,n=s);const o=Be;Qs(this);const i=Er(l,r.bind(a),n);return o?Qs(o):$s(),i}function Bc(t,s){const n=s.split(".");return()=>{let a=t;for(let l=0;l<n.length&&a;l++)a=a[n[l]];return a}}function _s(t,s){if(!Re(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),Me(t))_s(t.value,s);else if(ne(t))for(let n=0;n<t.length;n++)_s(t[n],s);else if(yc(t)||Fs(t))t.forEach(n=>{_s(n,s)});else if(wc(t))for(const n in t)_s(t[n],s);return t}function Uc(t,s){t.shapeFlag&6&&t.component?Uc(t.component.subTree,s):t.shapeFlag&128?(t.ssContent.transition=s.clone(t.ssContent),t.ssFallback.transition=s.clone(t.ssFallback)):t.transition=s}function we(t){return ce(t)?{setup:t,name:t.name}:t}const Vs=t=>!!t.type.__asyncLoader,Kc=t=>t.type.__isKeepAlive,lh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:s}){const n=sn(),a=n.ctx;if(!a.renderer)return()=>{const A=s.default&&s.default();return A&&A.length===1?A[0]:A};const l=new Map,r=new Set;let o=null;const i=n.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:m}}}=a,h=m("div");a.activate=(A,w,T,Z,G)=>{const I=A.component;u(A,w,T,0,i),c(I.vnode,A,w,T,I,i,Z,A.slotScopeIds,G),Ue(()=>{I.isDeactivated=!1,I.a&&js(I.a);const J=A.props&&A.props.onVnodeMounted;J&&vt(J,I.parent,A)},i)},a.deactivate=A=>{const w=A.component;u(A,h,null,1,i),Ue(()=>{w.da&&js(w.da);const T=A.props&&A.props.onVnodeUnmounted;T&&vt(T,w.parent,A),w.isDeactivated=!0},i)};function g(A){tl(A),p(A,n,i,!0)}function f(A){l.forEach((w,T)=>{const Z=Nl(w.type);Z&&(!A||!A(Z))&&_(T)})}function _(A){const w=l.get(A);!o||w.type!==o.type?g(w):o&&tl(o),l.delete(A),r.delete(A)}he(()=>[t.include,t.exclude],([A,w])=>{A&&f(T=>gn(A,T)),w&&f(T=>!gn(w,T))},{flush:"post",deep:!0});let x=null;const $=()=>{x!=null&&l.set(x,sl(n.subTree))};return Hn($),Pr($),Ha(()=>{l.forEach(A=>{const{subTree:w,suspense:T}=n,Z=sl(w);if(A.type===Z.type){tl(Z);const G=Z.component.da;G&&Ue(G,T);return}g(A)})}),()=>{if(x=null,!s.default)return null;const A=s.default(),w=A[0];if(A.length>1)return o=null,A;if(!Ws(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let T=sl(w);const Z=T.type,G=Nl(Vs(T)?T.type.__asyncResolved||{}:Z),{include:I,exclude:J,max:re}=t;if(I&&(!G||!gn(I,G))||J&&G&&gn(J,G))return o=T,w;const me=T.key==null?Z:T.key,ve=l.get(me);return T.el&&(T=As(T),w.shapeFlag&128&&(w.ssContent=T)),x=me,ve?(T.el=ve.el,T.component=ve.component,T.transition&&Uc(T,T.transition),T.shapeFlag|=512,r.delete(me),r.add(me)):(r.add(me),re&&r.size>parseInt(re,10)&&_(r.values().next().value)),T.shapeFlag|=256,o=T,Vc(w.type)?w:T}}},Wc=lh;function gn(t,s){return ne(t)?t.some(n=>gn(n,s)):Ne(t)?t.split(",").includes(s):t.test?t.test(s):!1}function rh(t,s){Qc(t,"a",s)}function oh(t,s){Qc(t,"da",s)}function Qc(t,s,n=Be){const a=t.__wdc||(t.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return t()});if(qa(s,a,n),n){let l=n.parent;for(;l&&l.parent;)Kc(l.parent.vnode)&&ih(a,s,n,l),l=l.parent}}function ih(t,s,n,a){const l=qa(s,t,a,!0);zr(()=>{fr(a[s],l)},n)}function tl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function sl(t){return t.shapeFlag&128?t.ssContent:t}function qa(t,s,n=Be,a=!1){if(n){const l=n[t]||(n[t]=[]),r=s.__weh||(s.__weh=(...o)=>{if(n.isUnmounted)return;en(),Qs(n);const i=Tt(s,n,t,o);return $s(),tn(),i});return a?l.unshift(r):l.push(r),r}}const Wt=t=>(s,n=Be)=>(!Gn||t==="sp")&&qa(t,(...a)=>s(...a),n),ch=Wt("bm"),Hn=Wt("m"),uh=Wt("bu"),Pr=Wt("u"),Ha=Wt("bum"),zr=Wt("um"),ph=Wt("sp"),mh=Wt("rtg"),hh=Wt("rtc");function dh(t,s=Be){qa("ec",t,s)}function Or(t,s){const n=Ke;if(n===null)return t;const a=Ua(n)||n.proxy,l=t.dirs||(t.dirs=[]);for(let r=0;r<s.length;r++){let[o,i,c,u=Oe]=s[r];o&&(ce(o)&&(o={mounted:o,updated:o}),o.deep&&_s(i),l.push({dir:o,instance:a,value:i,oldValue:void 0,arg:c,modifiers:u}))}return t}function ps(t,s,n,a){const l=t.dirs,r=s&&s.dirs;for(let o=0;o<l.length;o++){const i=l[o];r&&(i.oldValue=r[o].value);let c=i.dir[a];c&&(en(),Tt(c,n,8,[t.el,i,t,s]),tn())}}const Jc="components";function Le(t,s){return gh(Jc,t,!0,s)||t}const fh=Symbol();function gh(t,s,n=!0,a=!1){const l=Ke||Be;if(l){const r=l.type;if(t===Jc){const i=Nl(r,!1);if(i&&(i===s||i===Nt(s)||i===Za(Nt(s))))return r}const o=wo(l[t]||r[t],s)||wo(l.appContext[t],s);return!o&&a?r:o}}function wo(t,s){return t&&(t[s]||t[Nt(s)]||t[Za(Nt(s))])}function Vn(t,s,n,a){let l;const r=n&&n[a];if(ne(t)||Ne(t)){l=new Array(t.length);for(let o=0,i=t.length;o<i;o++)l[o]=s(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){l=new Array(t);for(let o=0;o<t;o++)l[o]=s(o+1,o,void 0,r&&r[o])}else if(Re(t))if(t[Symbol.iterator])l=Array.from(t,(o,i)=>s(o,i,void 0,r&&r[i]));else{const o=Object.keys(t);l=new Array(o.length);for(let i=0,c=o.length;i<c;i++){const u=o[i];l[i]=s(t[u],u,i,r&&r[i])}}else l=[];return n&&(n[a]=l),l}function Dt(t,s,n={},a,l){if(Ke.isCE||Ke.parent&&Vs(Ke.parent)&&Ke.parent.isCE)return s!=="default"&&(n.name=s),O("slot",n,a&&a());let r=t[s];r&&r._c&&(r._d=!1),k();const o=r&&Yc(r(n)),i=H(Ae,{key:n.key||o&&o.key||`_${s}`},o||(a?a():[]),o&&t._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Yc(t){return t.some(s=>Ws(s)?!(s.type===us||s.type===Ae&&!Yc(s.children)):!0)?t:null}const Ol=t=>t?cu(t)?Ua(t)||t.proxy:Ol(t.parent):null,yn=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ol(t.parent),$root:t=>Ol(t.root),$emit:t=>t.emit,$options:t=>Cr(t),$forceUpdate:t=>t.f||(t.f=()=>Tr(t.update)),$nextTick:t=>t.n||(t.n=Qe.bind(t.proxy)),$watch:t=>ah.bind(t)}),nl=(t,s)=>t!==Oe&&!t.__isScriptSetup&&ye(t,s),vh={get({_:t},s){const{ctx:n,setupState:a,data:l,props:r,accessCache:o,type:i,appContext:c}=t;let u;if(s[0]!=="$"){const g=o[s];if(g!==void 0)switch(g){case 1:return a[s];case 2:return l[s];case 4:return n[s];case 3:return r[s]}else{if(nl(a,s))return o[s]=1,a[s];if(l!==Oe&&ye(l,s))return o[s]=2,l[s];if((u=t.propsOptions[0])&&ye(u,s))return o[s]=3,r[s];if(n!==Oe&&ye(n,s))return o[s]=4,n[s];Cl&&(o[s]=0)}}const p=yn[s];let m,h;if(p)return s==="$attrs"&&ft(t,"get",s),p(t);if((m=i.__cssModules)&&(m=m[s]))return m;if(n!==Oe&&ye(n,s))return o[s]=4,n[s];if(h=c.config.globalProperties,ye(h,s))return h[s]},set({_:t},s,n){const{data:a,setupState:l,ctx:r}=t;return nl(l,s)?(l[s]=n,!0):a!==Oe&&ye(a,s)?(a[s]=n,!0):ye(t.props,s)||s[0]==="$"&&s.slice(1)in t?!1:(r[s]=n,!0)},has({_:{data:t,setupState:s,accessCache:n,ctx:a,appContext:l,propsOptions:r}},o){let i;return!!n[o]||t!==Oe&&ye(t,o)||nl(s,o)||(i=r[0])&&ye(i,o)||ye(a,o)||ye(yn,o)||ye(l.config.globalProperties,o)},defineProperty(t,s,n){return n.get!=null?t._.accessCache[s]=0:ye(n,"value")&&this.set(t,s,n.value,null),Reflect.defineProperty(t,s,n)}};let Cl=!0;function yh(t){const s=Cr(t),n=t.proxy,a=t.ctx;Cl=!1,s.beforeCreate&&xo(s.beforeCreate,t,"bc");const{data:l,computed:r,methods:o,watch:i,provide:c,inject:u,created:p,beforeMount:m,mounted:h,beforeUpdate:g,updated:f,activated:_,deactivated:x,beforeDestroy:$,beforeUnmount:A,destroyed:w,unmounted:T,render:Z,renderTracked:G,renderTriggered:I,errorCaptured:J,serverPrefetch:re,expose:me,inheritAttrs:ve,components:Ve,directives:je,filters:Ze}=s;if(u&&_h(u,a,null,t.appContext.config.unwrapInjectedRef),o)for(const W in o){const te=o[W];ce(te)&&(a[W]=te.bind(n))}if(l){const W=l.call(n,n);Re(W)&&(t.data=Ce(W))}if(Cl=!0,r)for(const W in r){const te=r[W],de=ce(te)?te.bind(n,n):ce(te.get)?te.get.bind(n,n):St,$e=!ce(te)&&ce(te.set)?te.set.bind(n):St,Ye=P({get:de,set:$e});Object.defineProperty(a,W,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ie=>Ye.value=Ie})}if(i)for(const W in i)Xc(i[W],a,n,W);if(c){const W=ce(c)?c.call(n):c;Reflect.ownKeys(W).forEach(te=>{mt(te,W[te])})}p&&xo(p,t,"c");function ze(W,te){ne(te)?te.forEach(de=>W(de.bind(n))):te&&W(te.bind(n))}if(ze(ch,m),ze(Hn,h),ze(uh,g),ze(Pr,f),ze(rh,_),ze(oh,x),ze(dh,J),ze(hh,G),ze(mh,I),ze(Ha,A),ze(zr,T),ze(ph,re),ne(me))if(me.length){const W=t.exposed||(t.exposed={});me.forEach(te=>{Object.defineProperty(W,te,{get:()=>n[te],set:de=>n[te]=de})})}else t.exposed||(t.exposed={});Z&&t.render===St&&(t.render=Z),ve!=null&&(t.inheritAttrs=ve),Ve&&(t.components=Ve),je&&(t.directives=je)}function _h(t,s,n=St,a=!1){ne(t)&&(t=Ll(t));for(const l in t){const r=t[l];let o;Re(r)?"default"in r?o=R(r.from||l,r.default,!0):o=R(r.from||l):o=R(r),Me(o)&&a?Object.defineProperty(s,l,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):s[l]=o}}function xo(t,s,n){Tt(ne(t)?t.map(a=>a.bind(s.proxy)):t.bind(s.proxy),s,n)}function Xc(t,s,n,a){const l=a.includes(".")?Bc(n,a):()=>n[a];if(Ne(t)){const r=s[t];ce(r)&&he(l,r)}else if(ce(t))he(l,t.bind(n));else if(Re(t))if(ne(t))t.forEach(r=>Xc(r,s,n,a));else{const r=ce(t.handler)?t.handler.bind(n):s[t.handler];ce(r)&&he(l,r,t)}}function Cr(t){const s=t.type,{mixins:n,extends:a}=s,{mixins:l,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,i=r.get(s);let c;return i?c=i:!l.length&&!n&&!a?c=s:(c={},l.length&&l.forEach(u=>wa(c,u,o,!0)),wa(c,s,o)),Re(s)&&r.set(s,c),c}function wa(t,s,n,a=!1){const{mixins:l,extends:r}=s;r&&wa(t,r,n,!0),l&&l.forEach(o=>wa(t,o,n,!0));for(const o in s)if(!(a&&o==="expose")){const i=bh[o]||n&&n[o];t[o]=i?i(t[o],s[o]):s[o]}return t}const bh={data:$o,props:fs,emits:fs,methods:fs,computed:fs,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:fs,directives:fs,watch:xh,provide:$o,inject:wh};function $o(t,s){return s?t?function(){return nt(ce(t)?t.call(this,this):t,ce(s)?s.call(this,this):s)}:s:t}function wh(t,s){return fs(Ll(t),Ll(s))}function Ll(t){if(ne(t)){const s={};for(let n=0;n<t.length;n++)s[t[n]]=t[n];return s}return t}function Xe(t,s){return t?[...new Set([].concat(t,s))]:s}function fs(t,s){return t?nt(nt(Object.create(null),t),s):s}function xh(t,s){if(!t)return s;if(!s)return t;const n=nt(Object.create(null),t);for(const a in s)n[a]=Xe(t[a],s[a]);return n}function $h(t,s,n,a=!1){const l={},r={};va(r,Ba,1),t.propsDefaults=Object.create(null),eu(t,s,l,r);for(const o in t.propsOptions[0])o in l||(l[o]=void 0);n?t.props=a?l:Nm(l):t.type.props?t.props=l:t.props=r,t.attrs=r}function kh(t,s,n,a){const{props:l,attrs:r,vnode:{patchFlag:o}}=t,i=be(l),[c]=t.propsOptions;let u=!1;if((a||o>0)&&!(o&16)){if(o&8){const p=t.vnode.dynamicProps;for(let m=0;m<p.length;m++){let h=p[m];if(Fa(t.emitsOptions,h))continue;const g=s[h];if(c)if(ye(r,h))g!==r[h]&&(r[h]=g,u=!0);else{const f=Nt(h);l[f]=Gl(c,i,f,g,t,!1)}else g!==r[h]&&(r[h]=g,u=!0)}}}else{eu(t,s,l,r)&&(u=!0);let p;for(const m in i)(!s||!ye(s,m)&&((p=Ss(m))===m||!ye(s,p)))&&(c?n&&(n[m]!==void 0||n[p]!==void 0)&&(l[m]=Gl(c,i,m,void 0,t,!0)):delete l[m]);if(r!==i)for(const m in r)(!s||!ye(s,m)&&!0)&&(delete r[m],u=!0)}u&&Bt(t,"set","$attrs")}function eu(t,s,n,a){const[l,r]=t.propsOptions;let o=!1,i;if(s)for(let c in s){if(ia(c))continue;const u=s[c];let p;l&&ye(l,p=Nt(c))?!r||!r.includes(p)?n[p]=u:(i||(i={}))[p]=u:Fa(t.emitsOptions,c)||(!(c in a)||u!==a[c])&&(a[c]=u,o=!0)}if(r){const c=be(n),u=i||Oe;for(let p=0;p<r.length;p++){const m=r[p];n[m]=Gl(l,c,m,u[m],t,!ye(u,m))}}return o}function Gl(t,s,n,a,l,r){const o=t[n];if(o!=null){const i=ye(o,"default");if(i&&a===void 0){const c=o.default;if(o.type!==Function&&ce(c)){const{propsDefaults:u}=l;n in u?a=u[n]:(Qs(l),a=u[n]=c.call(null,s),$s())}else a=c}o[0]&&(r&&!i?a=!1:o[1]&&(a===""||a===Ss(n))&&(a=!0))}return a}function tu(t,s,n=!1){const a=s.propsCache,l=a.get(t);if(l)return l;const r=t.props,o={},i=[];let c=!1;if(!ce(t)){const p=m=>{c=!0;const[h,g]=tu(m,s,!0);nt(o,h),g&&i.push(...g)};!n&&s.mixins.length&&s.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!r&&!c)return Re(t)&&a.set(t,Ds),Ds;if(ne(r))for(let p=0;p<r.length;p++){const m=Nt(r[p]);ko(m)&&(o[m]=Oe)}else if(r)for(const p in r){const m=Nt(p);if(ko(m)){const h=r[p],g=o[m]=ne(h)||ce(h)?{type:h}:Object.assign({},h);if(g){const f=So(Boolean,g.type),_=So(String,g.type);g[0]=f>-1,g[1]=_<0||f<_,(f>-1||ye(g,"default"))&&i.push(m)}}}const u=[o,i];return Re(t)&&a.set(t,u),u}function ko(t){return t[0]!=="$"}function Ao(t){const s=t&&t.toString().match(/^\s*function (\w+)/);return s?s[1]:t===null?"null":""}function Mo(t,s){return Ao(t)===Ao(s)}function So(t,s){return ne(s)?s.findIndex(n=>Mo(n,t)):ce(s)&&Mo(s,t)?0:-1}const su=t=>t[0]==="_"||t==="$stable",Lr=t=>ne(t)?t.map(Ct):[Ct(t)],Ah=(t,s,n)=>{if(s._n)return s;const a=S((...l)=>Lr(s(...l)),n);return a._c=!1,a},nu=(t,s,n)=>{const a=t._ctx;for(const l in t){if(su(l))continue;const r=t[l];if(ce(r))s[l]=Ah(l,r,a);else if(r!=null){const o=Lr(r);s[l]=()=>o}}},au=(t,s)=>{const n=Lr(s);t.slots.default=()=>n},Mh=(t,s)=>{if(t.vnode.shapeFlag&32){const n=s._;n?(t.slots=be(s),va(s,"_",n)):nu(s,t.slots={})}else t.slots={},s&&au(t,s);va(t.slots,Ba,1)},Sh=(t,s,n)=>{const{vnode:a,slots:l}=t;let r=!0,o=Oe;if(a.shapeFlag&32){const i=s._;i?n&&i===1?r=!1:(nt(l,s),!n&&i===1&&delete l._):(r=!s.$stable,nu(s,l)),o=s}else s&&(au(t,s),o={default:1});if(r)for(const i in l)!su(i)&&!(i in o)&&delete l[i]};function lu(){return{app:null,config:{isNativeTag:am,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Th=0;function Eh(t,s){return function(a,l=null){ce(a)||(a=Object.assign({},a)),l!=null&&!Re(l)&&(l=null);const r=lu(),o=new Set;let i=!1;const c=r.app={_uid:Th++,_component:a,_props:l,_container:null,_context:r,_instance:null,version:Qh,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(c,...p)):ce(u)&&(o.add(u),u(c,...p))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,p){return p?(r.components[u]=p,c):r.components[u]},directive(u,p){return p?(r.directives[u]=p,c):r.directives[u]},mount(u,p,m){if(!i){const h=O(a,l);return h.appContext=r,p&&s?s(h,u):t(h,u,m),i=!0,c._container=u,u.__vue_app__=c,Ua(h.component)||h.component.proxy}},unmount(){i&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,p){return r.provides[u]=p,c}};return c}}function Rl(t,s,n,a,l=!1){if(ne(t)){t.forEach((h,g)=>Rl(h,s&&(ne(s)?s[g]:s),n,a,l));return}if(Vs(a)&&!l)return;const r=a.shapeFlag&4?Ua(a.component)||a.component.proxy:a.el,o=l?null:r,{i,r:c}=t,u=s&&s.r,p=i.refs===Oe?i.refs={}:i.refs,m=i.setupState;if(u!=null&&u!==c&&(Ne(u)?(p[u]=null,ye(m,u)&&(m[u]=null)):Me(u)&&(u.value=null)),ce(c))as(c,i,12,[o,p]);else{const h=Ne(c),g=Me(c);if(h||g){const f=()=>{if(t.f){const _=h?ye(m,c)?m[c]:p[c]:c.value;l?ne(_)&&fr(_,r):ne(_)?_.includes(r)||_.push(r):h?(p[c]=[r],ye(m,c)&&(m[c]=p[c])):(c.value=[r],t.k&&(p[t.k]=c.value))}else h?(p[c]=o,ye(m,c)&&(m[c]=o)):g&&(c.value=o,t.k&&(p[t.k]=o))};o?(f.id=-1,Ue(f,n)):f()}}}const Ue=nh;function Ph(t){return zh(t)}function zh(t,s){const n=um();n.__VUE__=!0;const{insert:a,remove:l,patchProp:r,createElement:o,createText:i,createComment:c,setText:u,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=St,insertStaticContent:f}=t,_=(v,y,M,E=null,C=null,D=null,U=!1,N=null,F=!!y.dynamicChildren)=>{if(v===y)return;v&&!rn(v,y)&&(E=q(v),Ie(v,C,D,!0),v=null),y.patchFlag===-2&&(F=!1,y.dynamicChildren=null);const{type:L,ref:X,shapeFlag:Q}=y;switch(L){case Va:x(v,y,M,E);break;case us:$(v,y,M,E);break;case al:v==null&&A(y,M,E,U);break;case Ae:Ve(v,y,M,E,C,D,U,N,F);break;default:Q&1?Z(v,y,M,E,C,D,U,N,F):Q&6?je(v,y,M,E,C,D,U,N,F):(Q&64||Q&128)&&L.process(v,y,M,E,C,D,U,N,F,fe)}X!=null&&C&&Rl(X,v&&v.ref,D,y||v,!y)},x=(v,y,M,E)=>{if(v==null)a(y.el=i(y.children),M,E);else{const C=y.el=v.el;y.children!==v.children&&u(C,y.children)}},$=(v,y,M,E)=>{v==null?a(y.el=c(y.children||""),M,E):y.el=v.el},A=(v,y,M,E)=>{[v.el,v.anchor]=f(v.children,y,M,E,v.el,v.anchor)},w=({el:v,anchor:y},M,E)=>{let C;for(;v&&v!==y;)C=h(v),a(v,M,E),v=C;a(y,M,E)},T=({el:v,anchor:y})=>{let M;for(;v&&v!==y;)M=h(v),l(v),v=M;l(y)},Z=(v,y,M,E,C,D,U,N,F)=>{U=U||y.type==="svg",v==null?G(y,M,E,C,D,U,N,F):re(v,y,C,D,U,N,F)},G=(v,y,M,E,C,D,U,N)=>{let F,L;const{type:X,props:Q,shapeFlag:ee,transition:le,dirs:ge}=v;if(F=v.el=o(v.type,D,Q&&Q.is,Q),ee&8?p(F,v.children):ee&16&&J(v.children,F,null,E,C,D&&X!=="foreignObject",U,N),ge&&ps(v,null,E,"created"),Q){for(const Se in Q)Se!=="value"&&!ia(Se)&&r(F,Se,null,Q[Se],D,v.children,E,C,V);"value"in Q&&r(F,"value",null,Q.value),(L=Q.onVnodeBeforeMount)&&vt(L,E,v)}I(F,v,v.scopeId,U,E),ge&&ps(v,null,E,"beforeMount");const Ee=(!C||C&&!C.pendingBranch)&&le&&!le.persisted;Ee&&le.beforeEnter(F),a(F,y,M),((L=Q&&Q.onVnodeMounted)||Ee||ge)&&Ue(()=>{L&&vt(L,E,v),Ee&&le.enter(F),ge&&ps(v,null,E,"mounted")},C)},I=(v,y,M,E,C)=>{if(M&&g(v,M),E)for(let D=0;D<E.length;D++)g(v,E[D]);if(C){let D=C.subTree;if(y===D){const U=C.vnode;I(v,U,U.scopeId,U.slotScopeIds,C.parent)}}},J=(v,y,M,E,C,D,U,N,F=0)=>{for(let L=F;L<v.length;L++){const X=v[L]=N?es(v[L]):Ct(v[L]);_(null,X,y,M,E,C,D,U,N)}},re=(v,y,M,E,C,D,U)=>{const N=y.el=v.el;let{patchFlag:F,dynamicChildren:L,dirs:X}=y;F|=v.patchFlag&16;const Q=v.props||Oe,ee=y.props||Oe;let le;M&&ms(M,!1),(le=ee.onVnodeBeforeUpdate)&&vt(le,M,y,v),X&&ps(y,v,M,"beforeUpdate"),M&&ms(M,!0);const ge=C&&y.type!=="foreignObject";if(L?me(v.dynamicChildren,L,N,M,E,ge,D):U||te(v,y,N,null,M,E,ge,D,!1),F>0){if(F&16)ve(N,y,Q,ee,M,E,C);else if(F&2&&Q.class!==ee.class&&r(N,"class",null,ee.class,C),F&4&&r(N,"style",Q.style,ee.style,C),F&8){const Ee=y.dynamicProps;for(let Se=0;Se<Ee.length;Se++){const De=Ee[Se],wt=Q[De],zs=ee[De];(zs!==wt||De==="value")&&r(N,De,wt,zs,C,v.children,M,E,V)}}F&1&&v.children!==y.children&&p(N,y.children)}else!U&&L==null&&ve(N,y,Q,ee,M,E,C);((le=ee.onVnodeUpdated)||X)&&Ue(()=>{le&&vt(le,M,y,v),X&&ps(y,v,M,"updated")},E)},me=(v,y,M,E,C,D,U)=>{for(let N=0;N<y.length;N++){const F=v[N],L=y[N],X=F.el&&(F.type===Ae||!rn(F,L)||F.shapeFlag&70)?m(F.el):M;_(F,L,X,null,E,C,D,U,!0)}},ve=(v,y,M,E,C,D,U)=>{if(M!==E){if(M!==Oe)for(const N in M)!ia(N)&&!(N in E)&&r(v,N,M[N],null,U,y.children,C,D,V);for(const N in E){if(ia(N))continue;const F=E[N],L=M[N];F!==L&&N!=="value"&&r(v,N,L,F,U,y.children,C,D,V)}"value"in E&&r(v,"value",M.value,E.value)}},Ve=(v,y,M,E,C,D,U,N,F)=>{const L=y.el=v?v.el:i(""),X=y.anchor=v?v.anchor:i("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:le}=y;le&&(N=N?N.concat(le):le),v==null?(a(L,M,E),a(X,M,E),J(y.children,M,X,C,D,U,N,F)):Q>0&&Q&64&&ee&&v.dynamicChildren?(me(v.dynamicChildren,ee,M,C,D,U,N),(y.key!=null||C&&y===C.subTree)&&Gr(v,y,!0)):te(v,y,M,X,C,D,U,N,F)},je=(v,y,M,E,C,D,U,N,F)=>{y.slotScopeIds=N,v==null?y.shapeFlag&512?C.ctx.activate(y,M,E,U,F):Ze(y,M,E,C,D,U,F):Pe(v,y,F)},Ze=(v,y,M,E,C,D,U)=>{const N=v.component=Fh(v,E,C);if(Kc(v)&&(N.ctx.renderer=fe),jh(N),N.asyncDep){if(C&&C.registerDep(N,ze),!v.el){const F=N.subTree=O(us);$(null,F,y,M)}return}ze(N,v,y,M,C,D,U)},Pe=(v,y,M)=>{const E=y.component=v.component;if(th(v,y,M))if(E.asyncDep&&!E.asyncResolved){W(E,y,M);return}else E.next=y,Wm(E.update),E.update();else y.el=v.el,E.vnode=y},ze=(v,y,M,E,C,D,U)=>{const N=()=>{if(v.isMounted){let{next:X,bu:Q,u:ee,parent:le,vnode:ge}=v,Ee=X,Se;ms(v,!1),X?(X.el=ge.el,W(v,X,U)):X=ge,Q&&js(Q),(Se=X.props&&X.props.onVnodeBeforeUpdate)&&vt(Se,le,X,ge),ms(v,!0);const De=el(v),wt=v.subTree;v.subTree=De,_(wt,De,m(wt.el),q(wt),v,C,D),X.el=De.el,Ee===null&&sh(v,De.el),ee&&Ue(ee,C),(Se=X.props&&X.props.onVnodeUpdated)&&Ue(()=>vt(Se,le,X,ge),C)}else{let X;const{el:Q,props:ee}=y,{bm:le,m:ge,parent:Ee}=v,Se=Vs(y);if(ms(v,!1),le&&js(le),!Se&&(X=ee&&ee.onVnodeBeforeMount)&&vt(X,Ee,y),ms(v,!0),Q&&oe){const De=()=>{v.subTree=el(v),oe(Q,v.subTree,v,C,null)};Se?y.type.__asyncLoader().then(()=>!v.isUnmounted&&De()):De()}else{const De=v.subTree=el(v);_(null,De,M,E,v,C,D),y.el=De.el}if(ge&&Ue(ge,C),!Se&&(X=ee&&ee.onVnodeMounted)){const De=y;Ue(()=>vt(X,Ee,De),C)}(y.shapeFlag&256||Ee&&Vs(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&v.a&&Ue(v.a,C),v.isMounted=!0,y=M=E=null}},F=v.effect=new _r(N,()=>Tr(L),v.scope),L=v.update=()=>F.run();L.id=v.uid,ms(v,!0),L()},W=(v,y,M)=>{y.component=v;const E=v.vnode.props;v.vnode=y,v.next=null,kh(v,y.props,E,M),Sh(v,y.children,M),en(),_o(),tn()},te=(v,y,M,E,C,D,U,N,F=!1)=>{const L=v&&v.children,X=v?v.shapeFlag:0,Q=y.children,{patchFlag:ee,shapeFlag:le}=y;if(ee>0){if(ee&128){$e(L,Q,M,E,C,D,U,N,F);return}else if(ee&256){de(L,Q,M,E,C,D,U,N,F);return}}le&8?(X&16&&V(L,C,D),Q!==L&&p(M,Q)):X&16?le&16?$e(L,Q,M,E,C,D,U,N,F):V(L,C,D,!0):(X&8&&p(M,""),le&16&&J(Q,M,E,C,D,U,N,F))},de=(v,y,M,E,C,D,U,N,F)=>{v=v||Ds,y=y||Ds;const L=v.length,X=y.length,Q=Math.min(L,X);let ee;for(ee=0;ee<Q;ee++){const le=y[ee]=F?es(y[ee]):Ct(y[ee]);_(v[ee],le,M,null,C,D,U,N,F)}L>X?V(v,C,D,!0,!1,Q):J(y,M,E,C,D,U,N,F,Q)},$e=(v,y,M,E,C,D,U,N,F)=>{let L=0;const X=y.length;let Q=v.length-1,ee=X-1;for(;L<=Q&&L<=ee;){const le=v[L],ge=y[L]=F?es(y[L]):Ct(y[L]);if(rn(le,ge))_(le,ge,M,null,C,D,U,N,F);else break;L++}for(;L<=Q&&L<=ee;){const le=v[Q],ge=y[ee]=F?es(y[ee]):Ct(y[ee]);if(rn(le,ge))_(le,ge,M,null,C,D,U,N,F);else break;Q--,ee--}if(L>Q){if(L<=ee){const le=ee+1,ge=le<X?y[le].el:E;for(;L<=ee;)_(null,y[L]=F?es(y[L]):Ct(y[L]),M,ge,C,D,U,N,F),L++}}else if(L>ee)for(;L<=Q;)Ie(v[L],C,D,!0),L++;else{const le=L,ge=L,Ee=new Map;for(L=ge;L<=ee;L++){const ot=y[L]=F?es(y[L]):Ct(y[L]);ot.key!=null&&Ee.set(ot.key,L)}let Se,De=0;const wt=ee-ge+1;let zs=!1,oo=0;const ln=new Array(wt);for(L=0;L<wt;L++)ln[L]=0;for(L=le;L<=Q;L++){const ot=v[L];if(De>=wt){Ie(ot,C,D,!0);continue}let Ot;if(ot.key!=null)Ot=Ee.get(ot.key);else for(Se=ge;Se<=ee;Se++)if(ln[Se-ge]===0&&rn(ot,y[Se])){Ot=Se;break}Ot===void 0?Ie(ot,C,D,!0):(ln[Ot-ge]=L+1,Ot>=oo?oo=Ot:zs=!0,_(ot,y[Ot],M,null,C,D,U,N,F),De++)}const io=zs?Oh(ln):Ds;for(Se=io.length-1,L=wt-1;L>=0;L--){const ot=ge+L,Ot=y[ot],co=ot+1<X?y[ot+1].el:E;ln[L]===0?_(null,Ot,M,co,C,D,U,N,F):zs&&(Se<0||L!==io[Se]?Ye(Ot,M,co,2):Se--)}}},Ye=(v,y,M,E,C=null)=>{const{el:D,type:U,transition:N,children:F,shapeFlag:L}=v;if(L&6){Ye(v.component.subTree,y,M,E);return}if(L&128){v.suspense.move(y,M,E);return}if(L&64){U.move(v,y,M,fe);return}if(U===Ae){a(D,y,M);for(let Q=0;Q<F.length;Q++)Ye(F[Q],y,M,E);a(v.anchor,y,M);return}if(U===al){w(v,y,M);return}if(E!==2&&L&1&&N)if(E===0)N.beforeEnter(D),a(D,y,M),Ue(()=>N.enter(D),C);else{const{leave:Q,delayLeave:ee,afterLeave:le}=N,ge=()=>a(D,y,M),Ee=()=>{Q(D,()=>{ge(),le&&le()})};ee?ee(D,ge,Ee):Ee()}else a(D,y,M)},Ie=(v,y,M,E=!1,C=!1)=>{const{type:D,props:U,ref:N,children:F,dynamicChildren:L,shapeFlag:X,patchFlag:Q,dirs:ee}=v;if(N!=null&&Rl(N,null,M,v,!0),X&256){y.ctx.deactivate(v);return}const le=X&1&&ee,ge=!Vs(v);let Ee;if(ge&&(Ee=U&&U.onVnodeBeforeUnmount)&&vt(Ee,y,v),X&6)z(v.component,M,E);else{if(X&128){v.suspense.unmount(M,E);return}le&&ps(v,null,y,"beforeUnmount"),X&64?v.type.remove(v,y,M,C,fe,E):L&&(D!==Ae||Q>0&&Q&64)?V(L,y,M,!1,!0):(D===Ae&&Q&384||!C&&X&16)&&V(F,y,M),E&&Jt(v)}(ge&&(Ee=U&&U.onVnodeUnmounted)||le)&&Ue(()=>{Ee&&vt(Ee,y,v),le&&ps(v,null,y,"unmounted")},M)},Jt=v=>{const{type:y,el:M,anchor:E,transition:C}=v;if(y===Ae){Ps(M,E);return}if(y===al){T(v);return}const D=()=>{l(M),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(v.shapeFlag&1&&C&&!C.persisted){const{leave:U,delayLeave:N}=C,F=()=>U(M,D);N?N(v.el,D,F):F()}else D()},Ps=(v,y)=>{let M;for(;v!==y;)M=h(v),l(v),v=M;l(y)},z=(v,y,M)=>{const{bum:E,scope:C,update:D,subTree:U,um:N}=v;E&&js(E),C.stop(),D&&(D.active=!1,Ie(U,v,y,M)),N&&Ue(N,y),Ue(()=>{v.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},V=(v,y,M,E=!1,C=!1,D=0)=>{for(let U=D;U<v.length;U++)Ie(v[U],y,M,E,C)},q=v=>v.shapeFlag&6?q(v.component.subTree):v.shapeFlag&128?v.suspense.next():h(v.anchor||v.el),Y=(v,y,M)=>{v==null?y._vnode&&Ie(y._vnode,null,null,!0):_(y._vnode||null,v,y,null,null,null,M),_o(),jc(),y._vnode=v},fe={p:_,um:Ie,m:Ye,r:Jt,mt:Ze,mc:J,pc:te,pbc:me,n:q,o:t};let _e,oe;return s&&([_e,oe]=s(fe)),{render:Y,hydrate:_e,createApp:Eh(Y,_e)}}function ms({effect:t,update:s},n){t.allowRecurse=s.allowRecurse=n}function Gr(t,s,n=!1){const a=t.children,l=s.children;if(ne(a)&&ne(l))for(let r=0;r<a.length;r++){const o=a[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=es(l[r]),i.el=o.el),n||Gr(o,i)),i.type===Va&&(i.el=o.el)}}function Oh(t){const s=t.slice(),n=[0];let a,l,r,o,i;const c=t.length;for(a=0;a<c;a++){const u=t[a];if(u!==0){if(l=n[n.length-1],t[l]<u){s[a]=l,n.push(a);continue}for(r=0,o=n.length-1;r<o;)i=r+o>>1,t[n[i]]<u?r=i+1:o=i;u<t[n[r]]&&(r>0&&(s[a]=n[r-1]),n[r]=a)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=s[o];return n}const Ch=t=>t.__isTeleport,_n=t=>t&&(t.disabled||t.disabled===""),To=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Zl=(t,s)=>{const n=t&&t.to;return Ne(n)?s?s(n):null:n},Lh={__isTeleport:!0,process(t,s,n,a,l,r,o,i,c,u){const{mc:p,pc:m,pbc:h,o:{insert:g,querySelector:f,createText:_,createComment:x}}=u,$=_n(s.props);let{shapeFlag:A,children:w,dynamicChildren:T}=s;if(t==null){const Z=s.el=_(""),G=s.anchor=_("");g(Z,n,a),g(G,n,a);const I=s.target=Zl(s.props,f),J=s.targetAnchor=_("");I&&(g(J,I),o=o||To(I));const re=(me,ve)=>{A&16&&p(w,me,ve,l,r,o,i,c)};$?re(n,G):I&&re(I,J)}else{s.el=t.el;const Z=s.anchor=t.anchor,G=s.target=t.target,I=s.targetAnchor=t.targetAnchor,J=_n(t.props),re=J?n:G,me=J?Z:I;if(o=o||To(G),T?(h(t.dynamicChildren,T,re,l,r,o,i),Gr(t,s,!0)):c||m(t,s,re,me,l,r,o,i,!1),$)J||na(s,n,Z,u,1);else if((s.props&&s.props.to)!==(t.props&&t.props.to)){const ve=s.target=Zl(s.props,f);ve&&na(s,ve,null,u,0)}else J&&na(s,G,I,u,1)}ru(s)},remove(t,s,n,a,{um:l,o:{remove:r}},o){const{shapeFlag:i,children:c,anchor:u,targetAnchor:p,target:m,props:h}=t;if(m&&r(p),(o||!_n(h))&&(r(u),i&16))for(let g=0;g<c.length;g++){const f=c[g];l(f,s,n,!0,!!f.dynamicChildren)}},move:na,hydrate:Gh};function na(t,s,n,{o:{insert:a},m:l},r=2){r===0&&a(t.targetAnchor,s,n);const{el:o,anchor:i,shapeFlag:c,children:u,props:p}=t,m=r===2;if(m&&a(o,s,n),(!m||_n(p))&&c&16)for(let h=0;h<u.length;h++)l(u[h],s,n,2);m&&a(i,s,n)}function Gh(t,s,n,a,l,r,{o:{nextSibling:o,parentNode:i,querySelector:c}},u){const p=s.target=Zl(s.props,c);if(p){const m=p._lpa||p.firstChild;if(s.shapeFlag&16)if(_n(s.props))s.anchor=u(o(t),s,i(t),n,a,l,r),s.targetAnchor=m;else{s.anchor=o(t);let h=m;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){s.targetAnchor=h,p._lpa=s.targetAnchor&&o(s.targetAnchor);break}u(m,s,p,n,a,l,r)}ru(s)}return s.anchor&&o(s.anchor)}const Rh=Lh;function ru(t){const s=t.ctx;if(s&&s.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",s.uid),n=n.nextSibling;s.ut()}}const Ae=Symbol(void 0),Va=Symbol(void 0),us=Symbol(void 0),al=Symbol(void 0),bn=[];let At=null;function k(t=!1){bn.push(At=t?null:[])}function Zh(){bn.pop(),At=bn[bn.length-1]||null}let Ln=1;function Eo(t){Ln+=t}function ou(t){return t.dynamicChildren=Ln>0?At||Ds:null,Zh(),Ln>0&&At&&At.push(t),t}function B(t,s,n,a,l,r){return ou(e(t,s,n,a,l,r,!0))}function H(t,s,n,a,l){return ou(O(t,s,n,a,l,!0))}function Ws(t){return t?t.__v_isVNode===!0:!1}function rn(t,s){return t.type===s.type&&t.key===s.key}const Ba="__vInternal",iu=({key:t})=>t!=null?t:null,ca=({ref:t,ref_key:s,ref_for:n})=>t!=null?Ne(t)||Me(t)||ce(t)?{i:Ke,r:t,k:s,f:!!n}:t:null;function e(t,s=null,n=null,a=0,l=null,r=t===Ae?0:1,o=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:s,key:s&&iu(s),ref:s&&ca(s),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Ke};return i?(Rr(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Ln>0&&!o&&At&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&At.push(c),c}const O=Nh;function Nh(t,s=null,n=null,a=0,l=null,r=!1){if((!t||t===fh)&&(t=us),Ws(t)){const i=As(t,s,!0);return n&&Rr(i,n),Ln>0&&!r&&At&&(i.shapeFlag&6?At[At.indexOf(t)]=i:At.push(i)),i.patchFlag|=-2,i}if(Vh(t)&&(t=t.__vccOpts),s){s=se(s);let{class:i,style:c}=s;i&&!Ne(i)&&(s.class=Ge(i)),Re(c)&&(Gc(c)&&!ne(c)&&(c=nt({},c)),s.style=st(c))}const o=Ne(t)?1:Vc(t)?128:Ch(t)?64:Re(t)?4:ce(t)?2:0;return e(t,s,n,a,l,o,r,!0)}function se(t){return t?Gc(t)||Ba in t?nt({},t):t:null}function As(t,s,n=!1){const{props:a,ref:l,patchFlag:r,children:o}=t,i=s?xa(a||{},s):a;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&iu(i),ref:s&&s.ref?n&&l?ne(l)?l.concat(ca(s)):[l,ca(s)]:ca(s):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:s&&t.type!==Ae?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&As(t.ssContent),ssFallback:t.ssFallback&&As(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function d(t=" ",s=0){return O(Va,null,t,s)}function ue(t="",s=!1){return s?(k(),H(us,null,t)):O(us,null,t)}function Ct(t){return t==null||typeof t=="boolean"?O(us):ne(t)?O(Ae,null,t.slice()):typeof t=="object"?es(t):O(Va,null,String(t))}function es(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:As(t)}function Rr(t,s){let n=0;const{shapeFlag:a}=t;if(s==null)s=null;else if(ne(s))n=16;else if(typeof s=="object")if(a&65){const l=s.default;l&&(l._c&&(l._d=!1),Rr(t,l()),l._c&&(l._d=!0));return}else{n=32;const l=s._;!l&&!(Ba in s)?s._ctx=Ke:l===3&&Ke&&(Ke.slots._===1?s._=1:(s._=2,t.patchFlag|=1024))}else ce(s)?(s={default:s,_ctx:Ke},n=32):(s=String(s),a&64?(n=16,s=[d(s)]):n=8);t.children=s,t.shapeFlag|=n}function xa(...t){const s={};for(let n=0;n<t.length;n++){const a=t[n];for(const l in a)if(l==="class")s.class!==a.class&&(s.class=Ge([s.class,a.class]));else if(l==="style")s.style=st([s.style,a.style]);else if(La(l)){const r=s[l],o=a[l];o&&r!==o&&!(ne(r)&&r.includes(o))&&(s[l]=r?[].concat(r,o):o)}else l!==""&&(s[l]=a[l])}return s}function vt(t,s,n,a=null){Tt(t,s,7,[n,a])}const Ih=lu();let Dh=0;function Fh(t,s,n){const a=t.type,l=(s?s.appContext:t.appContext)||Ih,r={uid:Dh++,vnode:t,type:a,parent:s,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new xc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tu(a,l),emitsOptions:Hc(a,l),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:a.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=s?s.root:r,r.emit=Ym.bind(null,r),t.ce&&t.ce(r),r}let Be=null;const sn=()=>Be||Ke,Qs=t=>{Be=t,t.scope.on()},$s=()=>{Be&&Be.scope.off(),Be=null};function cu(t){return t.vnode.shapeFlag&4}let Gn=!1;function jh(t,s=!1){Gn=s;const{props:n,children:a}=t.vnode,l=cu(t);$h(t,n,l,s),Mh(t,a);const r=l?qh(t,s):void 0;return Gn=!1,r}function qh(t,s){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ia(new Proxy(t.ctx,vh));const{setup:a}=n;if(a){const l=t.setupContext=a.length>1?pu(t):null;Qs(t),en();const r=as(a,t,0,[t.props,l]);if(tn(),$s(),_c(r)){if(r.then($s,$s),s)return r.then(o=>{Po(t,o,s)}).catch(o=>{Da(o,t,0)});t.asyncDep=r}else Po(t,r,s)}else uu(t,s)}function Po(t,s,n){ce(s)?t.type.__ssrInlineRender?t.ssrRender=s:t.render=s:Re(s)&&(t.setupState=Zc(s)),uu(t,n)}let zo;function uu(t,s,n){const a=t.type;if(!t.render){if(!s&&zo&&!a.render){const l=a.template||Cr(t).template;if(l){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:i,compilerOptions:c}=a,u=nt(nt({isCustomElement:r,delimiters:i},o),c);a.render=zo(l,u)}}t.render=a.render||St}Qs(t),en(),yh(t),tn(),$s()}function Hh(t){return new Proxy(t.attrs,{get(s,n){return ft(t,"get","$attrs"),s[n]}})}function pu(t){const s=a=>{t.exposed=a||{}};let n;return{get attrs(){return n||(n=Hh(t))},slots:t.slots,emit:t.emit,expose:s}}function Ua(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zc(Ia(t.exposed)),{get(s,n){if(n in s)return s[n];if(n in yn)return yn[n](t)},has(s,n){return n in s||n in yn}}))}function Nl(t,s=!0){return ce(t)?t.displayName||t.name:t.name||s&&t.__name}function Vh(t){return ce(t)&&"__vccOpts"in t}const P=(t,s)=>Bm(t,s,Gn);function Bh(){return Uh().slots}function Uh(){const t=sn();return t.setupContext||(t.setupContext=pu(t))}function rt(t,s,n){const a=arguments.length;return a===2?Re(s)&&!ne(s)?Ws(s)?O(t,null,[s]):O(t,s):O(t,null,s):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&Ws(n)&&(n=[n]),O(t,s,n))}const Kh=Symbol(""),Wh=()=>R(Kh),Qh="3.2.45",Jh="http://www.w3.org/2000/svg",vs=typeof document<"u"?document:null,Oo=vs&&vs.createElement("template"),Yh={insert:(t,s,n)=>{s.insertBefore(t,n||null)},remove:t=>{const s=t.parentNode;s&&s.removeChild(t)},createElement:(t,s,n,a)=>{const l=s?vs.createElementNS(Jh,t):vs.createElement(t,n?{is:n}:void 0);return t==="select"&&a&&a.multiple!=null&&l.setAttribute("multiple",a.multiple),l},createText:t=>vs.createTextNode(t),createComment:t=>vs.createComment(t),setText:(t,s)=>{t.nodeValue=s},setElementText:(t,s)=>{t.textContent=s},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vs.querySelector(t),setScopeId(t,s){t.setAttribute(s,"")},insertStaticContent(t,s,n,a,l,r){const o=n?n.previousSibling:s.lastChild;if(l&&(l===r||l.nextSibling))for(;s.insertBefore(l.cloneNode(!0),n),!(l===r||!(l=l.nextSibling)););else{Oo.innerHTML=a?`<svg>${t}</svg>`:t;const i=Oo.content;if(a){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}s.insertBefore(i,n)}return[o?o.nextSibling:s.firstChild,n?n.previousSibling:s.lastChild]}};function Xh(t,s,n){const a=t._vtc;a&&(s=(s?[s,...a]:[...a]).join(" ")),s==null?t.removeAttribute("class"):n?t.setAttribute("class",s):t.className=s}function ed(t,s,n){const a=t.style,l=Ne(n);if(n&&!l){for(const r in n)Il(a,r,n[r]);if(s&&!Ne(s))for(const r in s)n[r]==null&&Il(a,r,"")}else{const r=a.display;l?s!==n&&(a.cssText=n):s&&t.removeAttribute("style"),"_vod"in t&&(a.display=r)}}const Co=/\s*!important$/;function Il(t,s,n){if(ne(n))n.forEach(a=>Il(t,s,a));else if(n==null&&(n=""),s.startsWith("--"))t.setProperty(s,n);else{const a=td(t,s);Co.test(n)?t.setProperty(Ss(a),n.replace(Co,""),"important"):t[a]=n}}const Lo=["Webkit","Moz","ms"],ll={};function td(t,s){const n=ll[s];if(n)return n;let a=Nt(s);if(a!=="filter"&&a in t)return ll[s]=a;a=Za(a);for(let l=0;l<Lo.length;l++){const r=Lo[l]+a;if(r in t)return ll[s]=r}return s}const Go="http://www.w3.org/1999/xlink";function sd(t,s,n,a,l){if(a&&s.startsWith("xlink:"))n==null?t.removeAttributeNS(Go,s.slice(6,s.length)):t.setAttributeNS(Go,s,n);else{const r=nm(s);n==null||r&&!gc(n)?t.removeAttribute(s):t.setAttribute(s,r?"":n)}}function nd(t,s,n,a,l,r,o){if(s==="innerHTML"||s==="textContent"){a&&o(a,l,r),t[s]=n==null?"":n;return}if(s==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(s);return}let i=!1;if(n===""||n==null){const c=typeof t[s];c==="boolean"?n=gc(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{t[s]=n}catch{}i&&t.removeAttribute(s)}function Gs(t,s,n,a){t.addEventListener(s,n,a)}function ad(t,s,n,a){t.removeEventListener(s,n,a)}function ld(t,s,n,a,l=null){const r=t._vei||(t._vei={}),o=r[s];if(a&&o)o.value=a;else{const[i,c]=rd(s);if(a){const u=r[s]=cd(a,l);Gs(t,i,u,c)}else o&&(ad(t,i,o,c),r[s]=void 0)}}const Ro=/(?:Once|Passive|Capture)$/;function rd(t){let s;if(Ro.test(t)){s={};let a;for(;a=t.match(Ro);)t=t.slice(0,t.length-a[0].length),s[a[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ss(t.slice(2)),s]}let rl=0;const od=Promise.resolve(),id=()=>rl||(od.then(()=>rl=0),rl=Date.now());function cd(t,s){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;Tt(ud(a,n.value),s,5,[a])};return n.value=t,n.attached=id(),n}function ud(t,s){if(ne(s)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},s.map(a=>l=>!l._stopped&&a&&a(l))}else return s}const Zo=/^on[a-z]/,pd=(t,s,n,a,l=!1,r,o,i,c)=>{s==="class"?Xh(t,a,l):s==="style"?ed(t,n,a):La(s)?dr(s)||ld(t,s,n,a,o):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):md(t,s,a,l))?nd(t,s,a,r,o,i,c):(s==="true-value"?t._trueValue=a:s==="false-value"&&(t._falseValue=a),sd(t,s,a,l))};function md(t,s,n,a){return a?!!(s==="innerHTML"||s==="textContent"||s in t&&Zo.test(s)&&ce(n)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&t.tagName==="INPUT"||s==="type"&&t.tagName==="TEXTAREA"||Zo.test(s)&&Ne(n)?!1:s in t}const No=t=>{const s=t.props["onUpdate:modelValue"]||!1;return ne(s)?n=>js(s,n):s};function hd(t){t.target.composing=!0}function Io(t){const s=t.target;s.composing&&(s.composing=!1,s.dispatchEvent(new Event("input")))}const dd={created(t,{modifiers:{lazy:s,trim:n,number:a}},l){t._assign=No(l);const r=a||l.props&&l.props.type==="number";Gs(t,s?"change":"input",o=>{if(o.target.composing)return;let i=t.value;n&&(i=i.trim()),r&&(i=ya(i)),t._assign(i)}),n&&Gs(t,"change",()=>{t.value=t.value.trim()}),s||(Gs(t,"compositionstart",hd),Gs(t,"compositionend",Io),Gs(t,"change",Io))},mounted(t,{value:s}){t.value=s==null?"":s},beforeUpdate(t,{value:s,modifiers:{lazy:n,trim:a,number:l}},r){if(t._assign=No(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||a&&t.value.trim()===s||(l||t.type==="number")&&ya(t.value)===s))return;const o=s==null?"":s;t.value!==o&&(t.value=o)}},fd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Do=(t,s)=>n=>{if(!("key"in n))return;const a=Ss(n.key);if(s.some(l=>l===a||fd[l]===a))return t(n)},mu={beforeMount(t,{value:s},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&s?n.beforeEnter(t):on(t,s)},mounted(t,{value:s},{transition:n}){n&&s&&n.enter(t)},updated(t,{value:s,oldValue:n},{transition:a}){!s!=!n&&(a?s?(a.beforeEnter(t),on(t,!0),a.enter(t)):a.leave(t,()=>{on(t,!1)}):on(t,s))},beforeUnmount(t,{value:s}){on(t,s)}};function on(t,s){t.style.display=s?t._vod:"none"}const gd=nt({patchProp:pd},Yh);let Fo;function vd(){return Fo||(Fo=Ph(gd))}const yd=(...t)=>{const s=vd().createApp(...t),{mount:n}=s;return s.mount=a=>{const l=_d(a);if(!l)return;const r=s._component;!ce(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const o=n(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),o},s};function _d(t){return Ne(t)?document.querySelector(t):t}var jo;const Ut=typeof window<"u",bd=t=>typeof t<"u",wd=Object.prototype.toString,$a=t=>typeof t=="function",xd=t=>typeof t=="number",hu=t=>typeof t=="string",Dl=t=>wd.call(t)==="[object Object]",Fl=()=>+Date.now(),wn=()=>{};Ut&&((jo=window==null?void 0:window.navigator)==null?void 0:jo.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function lt(t){return typeof t=="function"?t():b(t)}function $d(t,s){function n(...a){t(()=>s.apply(this,a),{fn:s,thisArg:this,args:a})}return n}const du=t=>t();function kd(t=du){const s=K(!0);function n(){s.value=!1}function a(){s.value=!0}return{isActive:s,pause:n,resume:a,eventFilter:(...r)=>{s.value&&t(...r)}}}function Ad(t){return t}function Md(t,s){var n;if(typeof t=="number")return t+s;const a=((n=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",l=t.slice(a.length),r=parseFloat(a)+s;return Number.isNaN(r)?t:r+l}function Sd(t,s){let n,a,l;const r=K(!0),o=()=>{r.value=!0,l()};he(t,o,{flush:"sync"});const i=$a(s)?s:s.get,c=$a(s)?void 0:s.set,u=Nc((p,m)=>(a=p,l=m,{get(){return r.value&&(n=i(),r.value=!1),a(),n},set(h){c==null||c(h)}}));return Object.isExtensible(u)&&(u.trigger=o),u}function Kt(t){return $c()?(kc(t),!0):!1}function Td(t){if(!Me(t))return Ce(t);const s=new Proxy({},{get(n,a,l){return b(Reflect.get(t.value,a,l))},set(n,a,l){return Me(t.value[a])&&!Me(l)?t.value[a].value=l:t.value[a]=l,!0},deleteProperty(n,a){return Reflect.deleteProperty(t.value,a)},has(n,a){return Reflect.has(t.value,a)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ce(s)}function fu(t){return typeof t=="function"?P(t):K(t)}var Ed=Object.defineProperty,Pd=Object.defineProperties,zd=Object.getOwnPropertyDescriptors,qo=Object.getOwnPropertySymbols,Od=Object.prototype.hasOwnProperty,Cd=Object.prototype.propertyIsEnumerable,Ho=(t,s,n)=>s in t?Ed(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Ld=(t,s)=>{for(var n in s||(s={}))Od.call(s,n)&&Ho(t,n,s[n]);if(qo)for(var n of qo(s))Cd.call(s,n)&&Ho(t,n,s[n]);return t},Gd=(t,s)=>Pd(t,zd(s));function Rd(t){if(!Me(t))return jm(t);const s=Array.isArray(t.value)?new Array(t.value.length):{};for(const n in t.value)s[n]=Nc(()=>({get(){return t.value[n]},set(a){if(Array.isArray(t.value)){const l=[...t.value];l[n]=a,t.value=l}else{const l=Gd(Ld({},t.value),{[n]:a});Object.setPrototypeOf(l,t.value),t.value=l}}}));return s}function Zr(t,s=!0){sn()?Hn(t):s?t():Qe(t)}function Zd(t){sn()&&zr(t)}function Nd(t,s=1e3,n={}){const{immediate:a=!0,immediateCallback:l=!1}=n;let r=null;const o=K(!1);function i(){r&&(clearInterval(r),r=null)}function c(){o.value=!1,i()}function u(){b(s)<=0||(o.value=!0,l&&t(),i(),r=setInterval(t,lt(s)))}if(a&&Ut&&u(),Me(s)){const p=he(s,()=>{o.value&&Ut&&u()});Kt(p)}return Kt(c),{isActive:o,pause:c,resume:u}}function gu(t=!1,s={}){const{truthyValue:n=!0,falsyValue:a=!1}=s,l=Me(t),r=K(t);function o(i){if(arguments.length)return r.value=i,r.value;{const c=lt(n);return r.value=r.value===c?lt(a):c,r.value}}return l?o:[r,o]}var Vo=Object.getOwnPropertySymbols,Id=Object.prototype.hasOwnProperty,Dd=Object.prototype.propertyIsEnumerable,Fd=(t,s)=>{var n={};for(var a in t)Id.call(t,a)&&s.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&Vo)for(var a of Vo(t))s.indexOf(a)<0&&Dd.call(t,a)&&(n[a]=t[a]);return n};function jd(t,s,n={}){const a=n,{eventFilter:l=du}=a,r=Fd(a,["eventFilter"]);return he(t,$d(l,s),r)}var qd=Object.defineProperty,Hd=Object.defineProperties,Vd=Object.getOwnPropertyDescriptors,ka=Object.getOwnPropertySymbols,vu=Object.prototype.hasOwnProperty,yu=Object.prototype.propertyIsEnumerable,Bo=(t,s,n)=>s in t?qd(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Bd=(t,s)=>{for(var n in s||(s={}))vu.call(s,n)&&Bo(t,n,s[n]);if(ka)for(var n of ka(s))yu.call(s,n)&&Bo(t,n,s[n]);return t},Ud=(t,s)=>Hd(t,Vd(s)),Kd=(t,s)=>{var n={};for(var a in t)vu.call(t,a)&&s.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&ka)for(var a of ka(t))s.indexOf(a)<0&&yu.call(t,a)&&(n[a]=t[a]);return n};function Wd(t,s,n={}){const a=n,{eventFilter:l}=a,r=Kd(a,["eventFilter"]),{eventFilter:o,pause:i,resume:c,isActive:u}=kd(l);return{stop:jd(t,s,Ud(Bd({},r),{eventFilter:o})),pause:i,resume:c,isActive:u}}var _u="usehead",Uo="head:count",ol="data-head-attrs",bu="data-meta-body",Qd=(t,s)=>{const n=a=>{if(a.props.renderPriority)return a.props.renderPriority;switch(a.tag){case"base":return-1;case"meta":return a.props.charset?-2:a.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return n(t)-n(s)},Jd=t=>{if(!["meta","base","script","link","title"].includes(t.tag))return!1;const{props:s,tag:n}=t;if(n==="base"||n==="title")return n;if(n==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const a=["key","id","name","property","http-equiv"];for(const l of a){let r;if(typeof s.getAttribute=="function"&&s.hasAttribute(l)?r=s.getAttribute(l):r=s[l],r!==void 0)return`${n}-${l}-${r}`}return!1};function jl(t){const s=lt(t);return!t||!s?s:Array.isArray(s)?s.map(jl):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([n,a])=>n==="titleTemplate"?[n,b(a)]:[n,jl(a)])):s}function Yd(t){return{...t,input:jl(t.input)}}function Ko(t,s){if(t instanceof HTMLElement&&s instanceof HTMLElement){const n=s.getAttribute("nonce");if(n&&!t.getAttribute("nonce")){const a=s.cloneNode(!0);return a.setAttribute("nonce",""),a.nonce=n,n===t.nonce&&t.isEqualNode(a)}}return t.isEqualNode(s)}var Wo=(t,s)=>{const n=t.getAttribute(ol);if(n)for(const l of n.split(","))l in s||t.removeAttribute(l);const a=[];for(const l in s){const r=s[l];r!=null&&(r===!1?t.removeAttribute(l):t.setAttribute(l,r),a.push(l))}a.length?t.setAttribute(ol,a.join(",")):t.removeAttribute(ol)},Xd=(t,s,n)=>{const a=n.createElement(t);for(const l of Object.keys(s))if(l==="body"&&s.body===!0)a.setAttribute(bu,"true");else{const r=s[l];if(l==="renderPriority"||l==="key"||r===!1)continue;l==="children"||l==="textContent"?a.textContent=r:l==="innerHTML"?a.innerHTML=r:a.setAttribute(l,r)}return a},ef=(t=window.document,s,n)=>{var a,l;const r=t.head,o=t.body;let i=r.querySelector(`meta[name="${Uo}"]`);const c=o.querySelectorAll(`[${bu}]`),u=i?Number(i.getAttribute("content")):0,p=[],m=[];if(c)for(let g=0;g<c.length;g++)c[g]&&((a=c[g].tagName)==null?void 0:a.toLowerCase())===s&&m.push(c[g]);if(i)for(let g=0,f=i.previousElementSibling;g<u;g++,f=(f==null?void 0:f.previousElementSibling)||null)((l=f==null?void 0:f.tagName)==null?void 0:l.toLowerCase())===s&&p.push(f);else i=t.createElement("meta"),i.setAttribute("name",Uo),i.setAttribute("content","0"),r.append(i);let h=n.map(g=>{var f;return{element:Xd(g.tag,g.props,t),body:(f=g.props.body)!=null?f:!1}});h=h.filter(g=>{for(let f=0;f<p.length;f++){const _=p[f];if(Ko(_,g.element))return p.splice(f,1),!1}for(let f=0;f<m.length;f++){const _=m[f];if(Ko(_,g.element))return m.splice(f,1),!1}return!0}),m.forEach(g=>{var f;return(f=g.parentNode)==null?void 0:f.removeChild(g)}),p.forEach(g=>{var f;return(f=g.parentNode)==null?void 0:f.removeChild(g)}),h.forEach(g=>{g.body===!0?o.insertAdjacentElement("beforeend",g.element):r.insertBefore(g.element,i)}),i.setAttribute("content",`${u-p.length+h.filter(g=>!g.body).length}`)},tf=({domCtx:t,document:s,previousTags:n})=>{s||(s=window.document),t.title!==void 0&&(s.title=t.title),Wo(s.documentElement,t.htmlAttrs),Wo(s.body,t.bodyAttrs);const a=new Set([...Object.keys(t.actualTags),...n]);for(const l of a)ef(s,l,t.actualTags[l]||[]);n.clear(),Object.keys(t.actualTags).forEach(l=>n.add(l))},sf=()=>{const t=R(_u);if(!t)throw new Error("You may forget to apply app.use(head)");return t},nf=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],af=(t,s)=>t==null?"":typeof t=="function"?t(s):t.replace("%s",s!=null?s:""),lf=t=>{const s=[],n=Object.keys(t),a=l=>(l.hid&&(l.key=l.hid,delete l.hid),l.vmid&&(l.key=l.vmid,delete l.vmid),l);for(const l of n)if(t[l]!=null)switch(l){case"title":s.push({tag:l,props:{textContent:t[l]}});break;case"titleTemplate":break;case"base":s.push({tag:l,props:{key:"default",...t[l]}});break;default:if(nf.includes(l)){const r=t[l];Array.isArray(r)?r.forEach(o=>{const i=a(o);s.push({tag:l,props:i})}):r&&s.push({tag:l,props:a(r)})}break}return s},rf=t=>{let s=[];const n=new Set;let a=0;const l=[],r=[];t&&s.push({input:t});let o=null,i;const c={install(u){u.config.globalProperties.$head=c,u.provide(_u,c)},hookBeforeDomUpdate:l,hookTagsResolved:r,get headTags(){const u=[],p={},m=s.map(Yd),h=m.map(f=>f.input.titleTemplate).reverse().find(f=>f!=null);m.forEach((f,_)=>{lf(f.input).forEach(($,A)=>{var w;if($._position=_*1e4+A,$._options&&delete $._options,f.options&&($._options=f.options),h&&$.tag==="title"&&($.props.textContent=af(h,$.props.textContent)),!((w=$._options)!=null&&w.raw)){for(const Z in $.props)Z.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",$),delete $.props[Z]);$.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",$),delete $.props.innerHTML)}const T=Jd($);T?p[T]=$:u.push($)})}),u.push(...Object.values(p));const g=u.sort((f,_)=>f._position-_._position);return c.hookTagsResolved.forEach(f=>f(g)),g},addHeadObjs(u,p){const m={input:u,options:p,id:a++};return s.push(m),()=>{s=s.filter(h=>h.id!==m.id)}},removeHeadObjs(u){s=s.filter(p=>p.input!==u)},updateDOM:(u,p)=>{i={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const h of c.headTags.sort(Qd)){if(h.tag==="title"){i.title=h.props.textContent;continue}if(h.tag==="htmlAttrs"||h.tag==="bodyAttrs"){Object.assign(i[h.tag],h.props);continue}i.actualTags[h.tag]=i.actualTags[h.tag]||[],i.actualTags[h.tag].push(h)}const m=()=>{o=null;for(const h in c.hookBeforeDomUpdate)if(c.hookBeforeDomUpdate[h](i.actualTags)===!1)return;tf({domCtx:i,document:u,previousTags:n})};if(p){m();return}o=o||Qe(()=>m())}};return c},of=typeof window<"u",cf=(t,s={})=>{const n=sf(),a=n.addHeadObjs(t,s);of&&(qn(()=>{n.updateDOM()}),Ha(()=>{a(),n.updateDOM()}))},uf=t=>{cf(t)};const ua=Symbol("v-click-clicks"),Rs=Symbol("v-click-clicks-elements"),ql=Symbol("v-click-clicks-order-map"),pa=Symbol("v-click-clicks-disabled"),wu=Symbol("slidev-slide-scale"),j=Symbol("slidev-slidev-context"),pf=Symbol("slidev-route"),mf=Symbol("slidev-slide-context"),Os="slidev-vclick-target",il="slidev-vclick-hidden",hf="slidev-vclick-fade",cl="slidev-vclick-hidden-explicitly",cn="slidev-vclick-current",aa="slidev-vclick-prior";function Qo(t,s){if(!t)return!1;const n=t.indexOf(s);return n>=0?(t.splice(n,1),!0):!1}function df(t){return t!=null}function ff(t,s){return Object.fromEntries(Object.entries(t).map(([n,a])=>s(n,a)).filter(df))}const vn={theme:"academic",title:"From AlphaGo to MuZero",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{paginationX:"r",paginationY:"t"},fonts:{sans:['"Montserrat"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Roboto Slab"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Roboto Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Montserrat","Roboto Slab","Roboto Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",hightlighter:"prism",coverDate:""},xe=vn;var dc;const ls=(dc=xe.aspectRatio)!=null?dc:16/9;var fc;const rs=(fc=xe.canvasWidth)!=null?fc:980,Nr=Math.ceil(rs/ls),xu=P(()=>ff(xe.themeConfig||{},(t,s)=>[`--slidev-theme-${t}`,s]));function bt(t,s,n){Object.defineProperty(t,s,{value:n,writable:!0,enumerable:!1})}const Ts=Ce({page:0,clicks:0});let gf=[],vf=[];bt(Ts,"$syncUp",!0);bt(Ts,"$syncDown",!0);bt(Ts,"$paused",!1);bt(Ts,"$onSet",t=>gf.push(t));bt(Ts,"$onPatch",t=>vf.push(t));bt(Ts,"$patch",async()=>!1);function $u(t,s,n=!1){const a=[];let l=!1,r=!1,o,i;const c=Ce(s);function u(g){a.push(g)}function p(g,f){clearTimeout(o),l=!0,c[g]=f,o=setTimeout(()=>l=!1,0)}function m(g){l||(clearTimeout(i),r=!0,Object.entries(g).forEach(([f,_])=>{c[f]=_}),i=setTimeout(()=>r=!1,0))}function h(g){let f;n?n&&window.addEventListener("storage",x=>{x&&x.key===g&&x.newValue&&m(JSON.parse(x.newValue))}):(f=new BroadcastChannel(g),f.addEventListener("message",x=>m(x.data)));function _(){!n&&f&&!r?f.postMessage(be(c)):n&&!r&&window.localStorage.setItem(g,JSON.stringify(c)),l||a.forEach(x=>x(c))}if(he(c,_,{deep:!0}),n){const x=window.localStorage.getItem(g);x&&m(JSON.parse(x))}}return{init:h,onPatch:u,patch:p,state:c}}const{init:yf,onPatch:_f,patch:Jo,state:ul}=$u(Ts,{page:1,clicks:0}),Es=Ce({});let bf=[],wf=[];bt(Es,"$syncUp",!0);bt(Es,"$syncDown",!0);bt(Es,"$paused",!1);bt(Es,"$onSet",t=>bf.push(t));bt(Es,"$onPatch",t=>wf.push(t));bt(Es,"$patch",async()=>!1);const{init:xf,onPatch:$f,patch:ku,state:Aa}=$u(Es,{},!1),kf="modulepreload",Af=function(t){return"/"+t},Yo={},Ms=function(s,n,a){if(!n||n.length===0)return s();const l=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Af(r),r in Yo)return;Yo[r]=!0;const o=r.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(!!a)for(let p=l.length-1;p>=0;p--){const m=l[p];if(m.href===r&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":kf,o||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),o)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())};function Mt(t){var s;const n=lt(t);return(s=n==null?void 0:n.$el)!=null?s:n}const Je=Ut?window:void 0,Au=Ut?window.document:void 0;function pe(...t){let s,n,a,l;if(hu(t[0])||Array.isArray(t[0])?([n,a,l]=t,s=Je):[s,n,a,l]=t,!s)return wn;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const r=[],o=()=>{r.forEach(p=>p()),r.length=0},i=(p,m,h)=>(p.addEventListener(m,h,l),()=>p.removeEventListener(m,h,l)),c=he(()=>Mt(s),p=>{o(),p&&r.push(...n.flatMap(m=>a.map(h=>i(p,m,h))))},{immediate:!0,flush:"post"}),u=()=>{c(),o()};return Kt(u),u}function Mf(t,s,n={}){const{window:a=Je,ignore:l,capture:r=!0,detectIframe:o=!1}=n;if(!a)return;const i=K(!0);let c;const u=g=>{a.clearTimeout(c);const f=Mt(t);!f||f===g.target||g.composedPath().includes(f)||!i.value||s(g)},p=g=>l&&l.some(f=>{const _=Mt(f);return _&&(g.target===_||g.composedPath().includes(_))}),m=[pe(a,"click",u,{passive:!0,capture:r}),pe(a,"pointerdown",g=>{const f=Mt(t);i.value=!!f&&!g.composedPath().includes(f)&&!p(g)},{passive:!0}),pe(a,"pointerup",g=>{if(g.button===0){const f=g.composedPath();g.composedPath=()=>f,c=a.setTimeout(()=>u(g),50)}},{passive:!0}),o&&pe(a,"blur",g=>{var f;const _=Mt(t);((f=a.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(_!=null&&_.contains(a.document.activeElement))&&s(g)})].filter(Boolean);return()=>m.forEach(g=>g())}const Sf=t=>typeof t=="function"?t:typeof t=="string"?s=>s.key===t:Array.isArray(t)?s=>t.includes(s.key):()=>!0;function Tf(...t){let s,n,a={};t.length===3?(s=t[0],n=t[1],a=t[2]):t.length===2?typeof t[1]=="object"?(s=!0,n=t[0],a=t[1]):(s=t[0],n=t[1]):(s=!0,n=t[0]);const{target:l=Je,eventName:r="keydown",passive:o=!1}=a,i=Sf(s);return pe(l,r,u=>{i(u)&&n(u)},o)}function Ef(t={}){const{window:s=Je}=t,n=Sd(()=>null,()=>s==null?void 0:s.document.activeElement);return s&&(pe(s,"blur",n.trigger,!0),pe(s,"focus",n.trigger,!0)),n}function Ka(t,s=!1){const n=K(),a=()=>n.value=Boolean(t());return a(),Zr(a,s),n}function Zs(t,s={}){const{window:n=Je}=s,a=Ka(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let l;const r=K(!1),o=()=>{!l||("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{!a.value||(o(),l=n.matchMedia(fu(t).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return qn(i),Kt(()=>o()),r}const Pf={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var zf=Object.defineProperty,Xo=Object.getOwnPropertySymbols,Of=Object.prototype.hasOwnProperty,Cf=Object.prototype.propertyIsEnumerable,ei=(t,s,n)=>s in t?zf(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Lf=(t,s)=>{for(var n in s||(s={}))Of.call(s,n)&&ei(t,n,s[n]);if(Xo)for(var n of Xo(s))Cf.call(s,n)&&ei(t,n,s[n]);return t};function Gf(t,s={}){function n(i,c){let u=t[i];return c!=null&&(u=Md(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:a=Je}=s;function l(i){return a?a.matchMedia(i).matches:!1}const r=i=>Zs(`(min-width: ${n(i)})`,s),o=Object.keys(t).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Lf({greater(i){return Zs(`(min-width: ${n(i,.1)})`,s)},greaterOrEqual:r,smaller(i){return Zs(`(max-width: ${n(i,-.1)})`,s)},smallerOrEqual(i){return Zs(`(max-width: ${n(i)})`,s)},between(i,c){return Zs(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`,s)},isGreater(i){return l(`(min-width: ${n(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${n(i)})`)},isSmaller(i){return l(`(max-width: ${n(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${n(i)})`)},isInBetween(i,c){return l(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`)}},o)}function Rf(t){return JSON.parse(JSON.stringify(t))}const Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vl="__vueuse_ssr_handlers__";Hl[Vl]=Hl[Vl]||{};const Zf=Hl[Vl];function Nf(t,s){return Zf[t]||s}function If(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var Df=Object.defineProperty,ti=Object.getOwnPropertySymbols,Ff=Object.prototype.hasOwnProperty,jf=Object.prototype.propertyIsEnumerable,si=(t,s,n)=>s in t?Df(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,ni=(t,s)=>{for(var n in s||(s={}))Ff.call(s,n)&&si(t,n,s[n]);if(ti)for(var n of ti(s))jf.call(s,n)&&si(t,n,s[n]);return t};const qf={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function zt(t,s,n,a={}){var l;const{flush:r="pre",deep:o=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:m=Je,eventFilter:h,onError:g=I=>{console.error(I)}}=a,f=(p?It:K)(s);if(!n)try{n=Nf("getDefaultStorage",()=>{var I;return(I=Je)==null?void 0:I.localStorage})()}catch(I){g(I)}if(!n)return f;const _=lt(s),x=If(_),$=(l=a.serializer)!=null?l:qf[x],{pause:A,resume:w}=Wd(f,()=>T(f.value),{flush:r,deep:o,eventFilter:h});return m&&i&&pe(m,"storage",G),G(),f;function T(I){try{I==null?n.removeItem(t):n.setItem(t,$.write(I))}catch(J){g(J)}}function Z(I){A();try{const J=I?I.newValue:n.getItem(t);if(J==null)return c&&_!==null&&n.setItem(t,$.write(_)),_;if(!I&&u){const re=$.read(J);return $a(u)?u(re,_):x==="object"&&!Array.isArray(re)?ni(ni({},_),re):re}else return typeof J!="string"?J:$.read(J)}catch(J){g(J)}finally{w()}}function G(I){if(!(I&&I.storageArea!==n)){if(I&&I.key===null){f.value=_;return}I&&I.key!==t||(f.value=Z(I))}}}function Hf(t){return Zs("(prefers-color-scheme: dark)",t)}var Vf=Object.defineProperty,Bf=Object.defineProperties,Uf=Object.getOwnPropertyDescriptors,ai=Object.getOwnPropertySymbols,Kf=Object.prototype.hasOwnProperty,Wf=Object.prototype.propertyIsEnumerable,li=(t,s,n)=>s in t?Vf(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Qf=(t,s)=>{for(var n in s||(s={}))Kf.call(s,n)&&li(t,n,s[n]);if(ai)for(var n of ai(s))Wf.call(s,n)&&li(t,n,s[n]);return t},Jf=(t,s)=>Bf(t,Uf(s));function n5(t,s={}){var n,a,l;const r=(n=s.draggingElement)!=null?n:Je,o=(a=s.handle)!=null?a:t,i=K((l=lt(s.initialValue))!=null?l:{x:0,y:0}),c=K(),u=f=>s.pointerTypes?s.pointerTypes.includes(f.pointerType):!0,p=f=>{lt(s.preventDefault)&&f.preventDefault(),lt(s.stopPropagation)&&f.stopPropagation()},m=f=>{var _;if(!u(f)||lt(s.exact)&&f.target!==lt(t))return;const x=lt(t).getBoundingClientRect(),$={x:f.pageX-x.left,y:f.pageY-x.top};((_=s.onStart)==null?void 0:_.call(s,$,f))!==!1&&(c.value=$,p(f))},h=f=>{var _;!u(f)||!c.value||(i.value={x:f.pageX-c.value.x,y:f.pageY-c.value.y},(_=s.onMove)==null||_.call(s,i.value,f),p(f))},g=f=>{var _;!u(f)||!c.value||(c.value=void 0,(_=s.onEnd)==null||_.call(s,i.value,f),p(f))};return Ut&&(pe(o,"pointerdown",m,!0),pe(r,"pointermove",h,!0),pe(r,"pointerup",g,!0)),Jf(Qf({},Rd(i)),{position:i,isDragging:P(()=>!!c.value),style:P(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var ri=Object.getOwnPropertySymbols,Yf=Object.prototype.hasOwnProperty,Xf=Object.prototype.propertyIsEnumerable,eg=(t,s)=>{var n={};for(var a in t)Yf.call(t,a)&&s.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&ri)for(var a of ri(t))s.indexOf(a)<0&&Xf.call(t,a)&&(n[a]=t[a]);return n};function tg(t,s,n={}){const a=n,{window:l=Je}=a,r=eg(a,["window"]);let o;const i=Ka(()=>l&&"ResizeObserver"in l),c=()=>{o&&(o.disconnect(),o=void 0)},u=he(()=>Mt(t),m=>{c(),i.value&&l&&m&&(o=new ResizeObserver(s),o.observe(m,r))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return Kt(p),{isSupported:i,stop:p}}function sg(t,s={}){const{immediate:n=!0,window:a=Je}=s,l=K(!1);let r=null;function o(){!l.value||!a||(t(),r=a.requestAnimationFrame(o))}function i(){!l.value&&a&&(l.value=!0,o())}function c(){l.value=!1,r!=null&&a&&(a.cancelAnimationFrame(r),r=null)}return n&&i(),Kt(c),{isActive:l,pause:c,resume:i}}function ng(t,s={width:0,height:0},n={}){const{box:a="content-box"}=n,l=K(s.width),r=K(s.height);return tg(t,([o])=>{const i=a==="border-box"?o.borderBoxSize:a==="content-box"?o.contentBoxSize:o.devicePixelContentBoxSize;i?(l.value=i.reduce((c,{inlineSize:u})=>c+u,0),r.value=i.reduce((c,{blockSize:u})=>c+u,0)):(l.value=o.contentRect.width,r.value=o.contentRect.height)},n),he(()=>Mt(t),o=>{l.value=o?s.width:0,r.value=o?s.height:0}),{width:l,height:r}}const oi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function ag(t,s={}){const{document:n=Au,autoExit:a=!1}=s,l=t||(n==null?void 0:n.querySelector("html")),r=K(!1);let o=oi[0];const i=Ka(()=>{if(n){for(const _ of oi)if(_[1]in n)return o=_,!0}else return!1;return!1}),[c,u,p,,m]=o;async function h(){!i.value||(n!=null&&n[p]&&await n[u](),r.value=!1)}async function g(){if(!i.value)return;await h();const _=Mt(l);_&&(await _[c](),r.value=!0)}async function f(){r.value?await h():await g()}return n&&pe(n,m,()=>{r.value=!!(n!=null&&n[p])},!1),a&&Kt(h),{isSupported:i,isFullscreen:r,enter:g,exit:h,toggle:f}}function lg(t,s,n={}){const{root:a,rootMargin:l="0px",threshold:r=.1,window:o=Je}=n,i=Ka(()=>o&&"IntersectionObserver"in o);let c=wn;const u=i.value?he(()=>({el:Mt(t),root:Mt(a)}),({el:m,root:h})=>{if(c(),!m)return;const g=new IntersectionObserver(s,{root:h,rootMargin:l,threshold:r});g.observe(m),c=()=>{g.disconnect(),c=wn}},{immediate:!0,flush:"post"}):wn,p=()=>{c(),u()};return Kt(p),{isSupported:i,stop:p}}const rg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function og(t={}){const{reactive:s=!1,target:n=Je,aliasMap:a=rg,passive:l=!0,onEventFired:r=wn}=t,o=Ce(new Set),i={toJSON(){return{}},current:o},c=s?Ce(i):i,u=new Set,p=new Set;function m(_,x){_ in c&&(s?c[_]=x:c[_].value=x)}function h(){for(const _ of p)m(_,!1)}function g(_,x){var $,A;const w=($=_.key)==null?void 0:$.toLowerCase(),Z=[(A=_.code)==null?void 0:A.toLowerCase(),w].filter(Boolean);w&&(x?o.add(w):o.delete(w));for(const G of Z)p.add(G),m(G,x);w==="meta"&&!x?(u.forEach(G=>{o.delete(G),m(G,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&x&&[...o,...Z].forEach(G=>u.add(G))}pe(n,"keydown",_=>(g(_,!0),r(_)),{passive:l}),pe(n,"keyup",_=>(g(_,!1),r(_)),{passive:l}),pe("blur",h,{passive:!0}),pe("focus",h,{passive:!0});const f=new Proxy(c,{get(_,x,$){if(typeof x!="string")return Reflect.get(_,x,$);if(x=x.toLowerCase(),x in a&&(x=a[x]),!(x in c))if(/[+_-]/.test(x)){const w=x.split(/[+_-]/g).map(T=>T.trim());c[x]=P(()=>w.every(T=>b(f[T])))}else c[x]=K(!1);const A=Reflect.get(_,x,$);return s?b(A):A}});return f}function a5(t={}){const{type:s="page",touch:n=!0,resetOnTouchEnds:a=!1,initialValue:l={x:0,y:0},window:r=Je,eventFilter:o}=t,i=K(l.x),c=K(l.y),u=K(null),p=_=>{s==="page"?(i.value=_.pageX,c.value=_.pageY):s==="client"&&(i.value=_.clientX,c.value=_.clientY),u.value="mouse"},m=()=>{i.value=l.x,c.value=l.y},h=_=>{if(_.touches.length>0){const x=_.touches[0];s==="page"?(i.value=x.pageX,c.value=x.pageY):s==="client"&&(i.value=x.clientX,c.value=x.clientY),u.value="touch"}},g=_=>o===void 0?p(_):o(()=>p(_),{}),f=_=>o===void 0?h(_):o(()=>h(_),{});return r&&(pe(r,"mousemove",g,{passive:!0}),pe(r,"dragover",g,{passive:!0}),n&&(pe(r,"touchstart",f,{passive:!0}),pe(r,"touchmove",f,{passive:!0}),a&&pe(r,"touchend",m,{passive:!0}))),{x:i,y:c,sourceType:u}}var Vt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Vt||(Vt={}));function ig(t,s={}){const n=fu(t),{threshold:a=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:o}=s,i=Ce({x:0,y:0}),c=(G,I)=>{i.x=G,i.y=I},u=Ce({x:0,y:0}),p=(G,I)=>{u.x=G,u.y=I},m=P(()=>i.x-u.x),h=P(()=>i.y-u.y),{max:g,abs:f}=Math,_=P(()=>g(f(m.value),f(h.value))>=a),x=K(!1),$=K(!1),A=P(()=>_.value?f(m.value)>f(h.value)?m.value>0?Vt.LEFT:Vt.RIGHT:h.value>0?Vt.UP:Vt.DOWN:Vt.NONE),w=G=>{var I,J,re;const me=G.buttons===0,ve=G.buttons===1;return(re=(J=(I=s.pointerTypes)==null?void 0:I.includes(G.pointerType))!=null?J:me||ve)!=null?re:!0},T=[pe(t,"pointerdown",G=>{var I,J;if(!w(G))return;$.value=!0,(J=(I=n.value)==null?void 0:I.style)==null||J.setProperty("touch-action","none");const re=G.target;re==null||re.setPointerCapture(G.pointerId);const{clientX:me,clientY:ve}=G;c(me,ve),p(me,ve),o==null||o(G)}),pe(t,"pointermove",G=>{if(!w(G)||!$.value)return;const{clientX:I,clientY:J}=G;p(I,J),!x.value&&_.value&&(x.value=!0),x.value&&(l==null||l(G))}),pe(t,"pointerup",G=>{var I,J;!w(G)||(x.value&&(r==null||r(G,A.value)),$.value=!1,x.value=!1,(J=(I=n.value)==null?void 0:I.style)==null||J.setProperty("touch-action","initial"))})],Z=()=>T.forEach(G=>G());return{isSwiping:ys(x),direction:ys(A),posStart:ys(i),posEnd:ys(u),distanceX:m,distanceY:h,stop:Z}}let cg=0;function l5(t,s={}){const n=K(!1),{document:a=Au,immediate:l=!0,manual:r=!1,id:o=`vueuse_styletag_${++cg}`}=s,i=K(t);let c=()=>{};const u=()=>{if(!a)return;const m=a.getElementById(o)||a.createElement("style");m.type="text/css",m.id=o,s.media&&(m.media=s.media),a.head.appendChild(m),!n.value&&(c=he(i,h=>{m.innerText=h},{immediate:!0}),n.value=!0)},p=()=>{!a||!n.value||(c(),a.head.removeChild(a.getElementById(o)),n.value=!1)};return l&&!r&&Zr(u),r||Kt(p),{id:o,css:i,unload:p,load:u,isLoaded:ys(n)}}var ug=Object.defineProperty,ii=Object.getOwnPropertySymbols,pg=Object.prototype.hasOwnProperty,mg=Object.prototype.propertyIsEnumerable,ci=(t,s,n)=>s in t?ug(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,hg=(t,s)=>{for(var n in s||(s={}))pg.call(s,n)&&ci(t,n,s[n]);if(ii)for(var n of ii(s))mg.call(s,n)&&ci(t,n,s[n]);return t};function r5(t={}){const{controls:s=!1,offset:n=0,immediate:a=!0,interval:l="requestAnimationFrame",callback:r}=t,o=K(Fl()+n),i=()=>o.value=Fl()+n,c=r?()=>{i(),r(o.value)}:i,u=l==="requestAnimationFrame"?sg(c,{immediate:a}):Nd(c,l,{immediate:a});return s?hg({timestamp:o},u):o}var dg=Object.defineProperty,ui=Object.getOwnPropertySymbols,fg=Object.prototype.hasOwnProperty,gg=Object.prototype.propertyIsEnumerable,pi=(t,s,n)=>s in t?dg(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,vg=(t,s)=>{for(var n in s||(s={}))fg.call(s,n)&&pi(t,n,s[n]);if(ui)for(var n of ui(s))gg.call(s,n)&&pi(t,n,s[n]);return t};const yg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};vg({linear:Ad},yg);function Rt(t,s,n,a={}){var l,r,o;const{clone:i=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:m}=a,h=sn(),g=n||(h==null?void 0:h.emit)||((l=h==null?void 0:h.$emit)==null?void 0:l.bind(h))||((o=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:o.bind(h==null?void 0:h.proxy));let f=u;s||(s="modelValue"),f=u||f||`update:${s.toString()}`;const _=$=>i?$a(i)?i($):Rf($):$,x=()=>bd(t[s])?_(t[s]):m;if(c){const $=x(),A=K($);return he(()=>t[s],w=>A.value=_(w)),he(A,w=>{(w!==t[s]||p)&&g(f,w)},{deep:p}),A}else return P({get(){return x()},set($){g(f,$)}})}function o5({window:t=Je}={}){if(!t)return K(!1);const s=K(t.document.hasFocus());return pe(t,"blur",()=>{s.value=!1}),pe(t,"focus",()=>{s.value=!0}),s}function _g(t={}){const{window:s=Je,initialWidth:n=1/0,initialHeight:a=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=t,o=K(n),i=K(a),c=()=>{s&&(r?(o.value=s.innerWidth,i.value=s.innerHeight):(o.value=s.document.documentElement.clientWidth,i.value=s.document.documentElement.clientHeight))};return c(),Zr(c),pe("resize",c,{passive:!0}),l&&pe("orientationchange",c,{passive:!0}),{width:o,height:i}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ns=typeof window<"u";function bg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function pl(t,s){const n={};for(const a in s){const l=s[a];n[a]=Pt(l)?l.map(t):t(l)}return n}const xn=()=>{},Pt=Array.isArray,wg=/\/$/,xg=t=>t.replace(wg,"");function ml(t,s,n="/"){let a,l={},r="",o="";const i=s.indexOf("#");let c=s.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(a=s.slice(0,c),r=s.slice(c+1,i>-1?i:s.length),l=t(r)),i>-1&&(a=a||s.slice(0,i),o=s.slice(i,s.length)),a=Mg(a!=null?a:s,n),{fullPath:a+(r&&"?")+r+o,path:a,query:l,hash:o}}function $g(t,s){const n=s.query?t(s.query):"";return s.path+(n&&"?")+n+(s.hash||"")}function mi(t,s){return!s||!t.toLowerCase().startsWith(s.toLowerCase())?t:t.slice(s.length)||"/"}function kg(t,s,n){const a=s.matched.length-1,l=n.matched.length-1;return a>-1&&a===l&&Js(s.matched[a],n.matched[l])&&Mu(s.params,n.params)&&t(s.query)===t(n.query)&&s.hash===n.hash}function Js(t,s){return(t.aliasOf||t)===(s.aliasOf||s)}function Mu(t,s){if(Object.keys(t).length!==Object.keys(s).length)return!1;for(const n in t)if(!Ag(t[n],s[n]))return!1;return!0}function Ag(t,s){return Pt(t)?hi(t,s):Pt(s)?hi(s,t):t===s}function hi(t,s){return Pt(s)?t.length===s.length&&t.every((n,a)=>n===s[a]):t.length===1&&t[0]===s}function Mg(t,s){if(t.startsWith("/"))return t;if(!t)return s;const n=s.split("/"),a=t.split("/");let l=n.length-1,r,o;for(r=0;r<a.length;r++)if(o=a[r],o!==".")if(o==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+a.slice(r-(r===a.length?1:0)).join("/")}var Rn;(function(t){t.pop="pop",t.push="push"})(Rn||(Rn={}));var $n;(function(t){t.back="back",t.forward="forward",t.unknown=""})($n||($n={}));function Sg(t){if(!t)if(Ns){const s=document.querySelector("base");t=s&&s.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xg(t)}const Tg=/^[^#]+#/;function Eg(t,s){return t.replace(Tg,"#")+s}function Pg(t,s){const n=document.documentElement.getBoundingClientRect(),a=t.getBoundingClientRect();return{behavior:s.behavior,left:a.left-n.left-(s.left||0),top:a.top-n.top-(s.top||0)}}const Wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function zg(t){let s;if("el"in t){const n=t.el,a=typeof n=="string"&&n.startsWith("#"),l=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;s=Pg(l,t)}else s=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function di(t,s){return(history.state?history.state.position-s:-1)+t}const Bl=new Map;function Og(t,s){Bl.set(t,s)}function Cg(t){const s=Bl.get(t);return Bl.delete(t),s}let Lg=()=>location.protocol+"//"+location.host;function Su(t,s){const{pathname:n,search:a,hash:l}=s,r=t.indexOf("#");if(r>-1){let i=l.includes(t.slice(r))?t.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),mi(c,"")}return mi(n,t)+a+l}function Gg(t,s,n,a){let l=[],r=[],o=null;const i=({state:h})=>{const g=Su(t,location),f=n.value,_=s.value;let x=0;if(h){if(n.value=g,s.value=h,o&&o===f){o=null;return}x=_?h.position-_.position:0}else a(g);l.forEach($=>{$(n.value,f,{delta:x,type:Rn.pop,direction:x?x>0?$n.forward:$n.back:$n.unknown})})};function c(){o=n.value}function u(h){l.push(h);const g=()=>{const f=l.indexOf(h);f>-1&&l.splice(f,1)};return r.push(g),g}function p(){const{history:h}=window;!h.state||h.replaceState(ke({},h.state,{scroll:Wa()}),"")}function m(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:m}}function fi(t,s,n,a=!1,l=!1){return{back:t,current:s,forward:n,replaced:a,position:window.history.length,scroll:l?Wa():null}}function Rg(t){const{history:s,location:n}=window,a={value:Su(t,n)},l={value:s.state};l.value||r(a.value,{back:null,current:a.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function r(c,u,p){const m=t.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+c:Lg()+t+c;try{s[p?"replaceState":"pushState"](u,"",h),l.value=u}catch(g){console.error(g),n[p?"replace":"assign"](h)}}function o(c,u){const p=ke({},s.state,fi(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,p,!0),a.value=c}function i(c,u){const p=ke({},l.value,s.state,{forward:c,scroll:Wa()});r(p.current,p,!0);const m=ke({},fi(a.value,c,null),{position:p.position+1},u);r(c,m,!1),a.value=c}return{location:a,state:l,push:i,replace:o}}function Zg(t){t=Sg(t);const s=Rg(t),n=Gg(t,s.state,s.location,s.replace);function a(r,o=!0){o||n.pauseListeners(),history.go(r)}const l=ke({location:"",base:t,go:a,createHref:Eg.bind(null,t)},s,n);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>s.state.value}),l}function Ng(t){return typeof t=="string"||t&&typeof t=="object"}function Tu(t){return typeof t=="string"||typeof t=="symbol"}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Eu=Symbol("");var gi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gi||(gi={}));function Ys(t,s){return ke(new Error,{type:t,[Eu]:!0},s)}function Ft(t,s){return t instanceof Error&&Eu in t&&(s==null||!!(t.type&s))}const vi="[^/]+?",Ig={sensitive:!1,strict:!1,start:!0,end:!0},Dg=/[.+*?^${}()[\]/\\]/g;function Fg(t,s){const n=ke({},Ig,s),a=[];let l=n.start?"^":"";const r=[];for(const u of t){const p=u.length?[]:[90];n.strict&&!u.length&&(l+="/");for(let m=0;m<u.length;m++){const h=u[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(l+="/"),l+=h.value.replace(Dg,"\\$&"),g+=40;else if(h.type===1){const{value:f,repeatable:_,optional:x,regexp:$}=h;r.push({name:f,repeatable:_,optional:x});const A=$||vi;if(A!==vi){g+=10;try{new RegExp(`(${A})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${f}" (${A}): `+T.message)}}let w=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;m||(w=x&&u.length<2?`(?:/${w})`:"/"+w),x&&(w+="?"),l+=w,g+=20,x&&(g+=-8),_&&(g+=-20),A===".*"&&(g+=-50)}p.push(g)}a.push(p)}if(n.strict&&n.end){const u=a.length-1;a[u][a[u].length-1]+=.7000000000000001}n.strict||(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");const o=new RegExp(l,n.sensitive?"":"i");function i(u){const p=u.match(o),m={};if(!p)return null;for(let h=1;h<p.length;h++){const g=p[h]||"",f=r[h-1];m[f.name]=g&&f.repeatable?g.split("/"):g}return m}function c(u){let p="",m=!1;for(const h of t){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const g of h)if(g.type===0)p+=g.value;else if(g.type===1){const{value:f,repeatable:_,optional:x}=g,$=f in u?u[f]:"";if(Pt($)&&!_)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const A=Pt($)?$.join("/"):$;if(!A)if(x)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${f}"`);p+=A}}return p||"/"}return{re:o,score:a,keys:r,parse:i,stringify:c}}function jg(t,s){let n=0;for(;n<t.length&&n<s.length;){const a=s[n]-t[n];if(a)return a;n++}return t.length<s.length?t.length===1&&t[0]===40+40?-1:1:t.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function qg(t,s){let n=0;const a=t.score,l=s.score;for(;n<a.length&&n<l.length;){const r=jg(a[n],l[n]);if(r)return r;n++}if(Math.abs(l.length-a.length)===1){if(yi(a))return 1;if(yi(l))return-1}return l.length-a.length}function yi(t){const s=t[t.length-1];return t.length>0&&s[s.length-1]<0}const Hg={type:0,value:""},Vg=/[a-zA-Z0-9_]/;function Bg(t){if(!t)return[[]];if(t==="/")return[[Hg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function s(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,a=n;const l=[];let r;function o(){r&&l.push(r),r=[]}let i=0,c,u="",p="";function m(){!u||(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&s(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):s("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;i<t.length;){if(c=t[i++],c==="\\"&&n!==2){a=n,n=4;continue}switch(n){case 0:c==="/"?(u&&m(),o()):c===":"?(m(),n=1):h();break;case 4:h(),n=a;break;case 1:c==="("?n=2:Vg.test(c)?h():(m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:s("Unknown state");break}}return n===2&&s(`Unfinished custom RegExp for param "${u}"`),m(),o(),l}function Ug(t,s,n){const a=Fg(Bg(t.path),n),l=ke(a,{record:t,parent:s,children:[],alias:[]});return s&&!l.record.aliasOf==!s.record.aliasOf&&s.children.push(l),l}function Kg(t,s){const n=[],a=new Map;s=wi({strict:!1,end:!0,sensitive:!1},s);function l(p){return a.get(p)}function r(p,m,h){const g=!h,f=Wg(p);f.aliasOf=h&&h.record;const _=wi(s,p),x=[f];if("alias"in p){const w=typeof p.alias=="string"?[p.alias]:p.alias;for(const T of w)x.push(ke({},f,{components:h?h.record.components:f.components,path:T,aliasOf:h?h.record:f}))}let $,A;for(const w of x){const{path:T}=w;if(m&&T[0]!=="/"){const Z=m.record.path,G=Z[Z.length-1]==="/"?"":"/";w.path=m.record.path+(T&&G+T)}if($=Ug(w,m,_),h?h.alias.push($):(A=A||$,A!==$&&A.alias.push($),g&&p.name&&!bi($)&&o(p.name)),f.children){const Z=f.children;for(let G=0;G<Z.length;G++)r(Z[G],$,h&&h.children[G])}h=h||$,($.record.components&&Object.keys($.record.components).length||$.record.name||$.record.redirect)&&c($)}return A?()=>{o(A)}:xn}function o(p){if(Tu(p)){const m=a.get(p);m&&(a.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&a.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function i(){return n}function c(p){let m=0;for(;m<n.length&&qg(p,n[m])>=0&&(p.record.path!==n[m].record.path||!Pu(p,n[m]));)m++;n.splice(m,0,p),p.record.name&&!bi(p)&&a.set(p.record.name,p)}function u(p,m){let h,g={},f,_;if("name"in p&&p.name){if(h=a.get(p.name),!h)throw Ys(1,{location:p});_=h.record.name,g=ke(_i(m.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),p.params&&_i(p.params,h.keys.map(A=>A.name))),f=h.stringify(g)}else if("path"in p)f=p.path,h=n.find(A=>A.re.test(f)),h&&(g=h.parse(f),_=h.record.name);else{if(h=m.name?a.get(m.name):n.find(A=>A.re.test(m.path)),!h)throw Ys(1,{location:p,currentLocation:m});_=h.record.name,g=ke({},m.params,p.params),f=h.stringify(g)}const x=[];let $=h;for(;$;)x.unshift($.record),$=$.parent;return{name:_,path:f,params:g,matched:x,meta:Jg(x)}}return t.forEach(p=>r(p)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:i,getRecordMatcher:l}}function _i(t,s){const n={};for(const a of s)a in t&&(n[a]=t[a]);return n}function Wg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Qg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Qg(t){const s={},n=t.props||!1;if("component"in t)s.default=n;else for(const a in t.components)s[a]=typeof n=="boolean"?n:n[a];return s}function bi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Jg(t){return t.reduce((s,n)=>ke(s,n.meta),{})}function wi(t,s){const n={};for(const a in t)n[a]=a in s?s[a]:t[a];return n}function Pu(t,s){return s.children.some(n=>n===t||Pu(t,n))}const zu=/#/g,Yg=/&/g,Xg=/\//g,e0=/=/g,t0=/\?/g,Ou=/\+/g,s0=/%5B/g,n0=/%5D/g,Cu=/%5E/g,a0=/%60/g,Lu=/%7B/g,l0=/%7C/g,Gu=/%7D/g,r0=/%20/g;function Ir(t){return encodeURI(""+t).replace(l0,"|").replace(s0,"[").replace(n0,"]")}function o0(t){return Ir(t).replace(Lu,"{").replace(Gu,"}").replace(Cu,"^")}function Ul(t){return Ir(t).replace(Ou,"%2B").replace(r0,"+").replace(zu,"%23").replace(Yg,"%26").replace(a0,"`").replace(Lu,"{").replace(Gu,"}").replace(Cu,"^")}function i0(t){return Ul(t).replace(e0,"%3D")}function c0(t){return Ir(t).replace(zu,"%23").replace(t0,"%3F")}function u0(t){return t==null?"":c0(t).replace(Xg,"%2F")}function Ma(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function p0(t){const s={};if(t===""||t==="?")return s;const a=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<a.length;++l){const r=a[l].replace(Ou," "),o=r.indexOf("="),i=Ma(o<0?r:r.slice(0,o)),c=o<0?null:Ma(r.slice(o+1));if(i in s){let u=s[i];Pt(u)||(u=s[i]=[u]),u.push(c)}else s[i]=c}return s}function xi(t){let s="";for(let n in t){const a=t[n];if(n=i0(n),a==null){a!==void 0&&(s+=(s.length?"&":"")+n);continue}(Pt(a)?a.map(r=>r&&Ul(r)):[a&&Ul(a)]).forEach(r=>{r!==void 0&&(s+=(s.length?"&":"")+n,r!=null&&(s+="="+r))})}return s}function m0(t){const s={};for(const n in t){const a=t[n];a!==void 0&&(s[n]=Pt(a)?a.map(l=>l==null?null:""+l):a==null?a:""+a)}return s}const h0=Symbol(""),$i=Symbol(""),Dr=Symbol(""),Ru=Symbol(""),Kl=Symbol("");function un(){let t=[];function s(a){return t.push(a),()=>{const l=t.indexOf(a);l>-1&&t.splice(l,1)}}function n(){t=[]}return{add:s,list:()=>t,reset:n}}function ts(t,s,n,a,l){const r=a&&(a.enterCallbacks[l]=a.enterCallbacks[l]||[]);return()=>new Promise((o,i)=>{const c=m=>{m===!1?i(Ys(4,{from:n,to:s})):m instanceof Error?i(m):Ng(m)?i(Ys(2,{from:s,to:m})):(r&&a.enterCallbacks[l]===r&&typeof m=="function"&&r.push(m),o())},u=t.call(a&&a.instances[l],s,n,c);let p=Promise.resolve(u);t.length<3&&(p=p.then(c)),p.catch(m=>i(m))})}function hl(t,s,n,a){const l=[];for(const r of t)for(const o in r.components){let i=r.components[o];if(!(s!=="beforeRouteEnter"&&!r.instances[o]))if(d0(i)){const u=(i.__vccOpts||i)[s];u&&l.push(ts(u,n,a,r,o))}else{let c=i();l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const p=bg(u)?u.default:u;r.components[o]=p;const h=(p.__vccOpts||p)[s];return h&&ts(h,n,a,r,o)()}))}}return l}function d0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ki(t){const s=R(Dr),n=R(Ru),a=P(()=>s.resolve(b(t.to))),l=P(()=>{const{matched:c}=a.value,{length:u}=c,p=c[u-1],m=n.matched;if(!p||!m.length)return-1;const h=m.findIndex(Js.bind(null,p));if(h>-1)return h;const g=Ai(c[u-2]);return u>1&&Ai(p)===g&&m[m.length-1].path!==g?m.findIndex(Js.bind(null,c[u-2])):h}),r=P(()=>l.value>-1&&y0(n.params,a.value.params)),o=P(()=>l.value>-1&&l.value===n.matched.length-1&&Mu(n.params,a.value.params));function i(c={}){return v0(c)?s[b(t.replace)?"replace":"push"](b(t.to)).catch(xn):Promise.resolve()}return{route:a,href:P(()=>a.value.href),isActive:r,isExactActive:o,navigate:i}}const f0=we({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ki,setup(t,{slots:s}){const n=Ce(ki(t)),{options:a}=R(Dr),l=P(()=>({[Mi(t.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Mi(t.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=s.default&&s.default(n);return t.custom?r:rt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},r)}}}),g0=f0;function v0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const s=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return t.preventDefault&&t.preventDefault(),!0}}function y0(t,s){for(const n in s){const a=s[n],l=t[n];if(typeof a=="string"){if(a!==l)return!1}else if(!Pt(l)||l.length!==a.length||a.some((r,o)=>r!==l[o]))return!1}return!0}function Ai(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mi=(t,s,n)=>t!=null?t:s!=null?s:n,_0=we({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:s,slots:n}){const a=R(Kl),l=P(()=>t.route||a.value),r=R($i,0),o=P(()=>{let u=b(r);const{matched:p}=l.value;let m;for(;(m=p[u])&&!m.components;)u++;return u}),i=P(()=>l.value.matched[o.value]);mt($i,P(()=>o.value+1)),mt(h0,i),mt(Kl,l);const c=K();return he(()=>[c.value,i.value,t.name],([u,p,m],[h,g,f])=>{p&&(p.instances[m]=u,g&&g!==p&&u&&u===h&&(p.leaveGuards.size||(p.leaveGuards=g.leaveGuards),p.updateGuards.size||(p.updateGuards=g.updateGuards))),u&&p&&(!g||!Js(p,g)||!h)&&(p.enterCallbacks[m]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=l.value,p=t.name,m=i.value,h=m&&m.components[p];if(!h)return Si(n.default,{Component:h,route:u});const g=m.props[p],f=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=rt(h,ke({},f,s,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(m.instances[p]=null)},ref:c}));return Si(n.default,{Component:x,route:u})||x}}});function Si(t,s){if(!t)return null;const n=t(s);return n.length===1?n[0]:n}const b0=_0;function w0(t){const s=Kg(t.routes,t),n=t.parseQuery||p0,a=t.stringifyQuery||xi,l=t.history,r=un(),o=un(),i=un(),c=It(Xt);let u=Xt;Ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=pl.bind(null,z=>""+z),m=pl.bind(null,u0),h=pl.bind(null,Ma);function g(z,V){let q,Y;return Tu(z)?(q=s.getRecordMatcher(z),Y=V):Y=z,s.addRoute(Y,q)}function f(z){const V=s.getRecordMatcher(z);V&&s.removeRoute(V)}function _(){return s.getRoutes().map(z=>z.record)}function x(z){return!!s.getRecordMatcher(z)}function $(z,V){if(V=ke({},V||c.value),typeof z=="string"){const v=ml(n,z,V.path),y=s.resolve({path:v.path},V),M=l.createHref(v.fullPath);return ke(v,y,{params:h(y.params),hash:Ma(v.hash),redirectedFrom:void 0,href:M})}let q;if("path"in z)q=ke({},z,{path:ml(n,z.path,V.path).path});else{const v=ke({},z.params);for(const y in v)v[y]==null&&delete v[y];q=ke({},z,{params:m(z.params)}),V.params=m(V.params)}const Y=s.resolve(q,V),fe=z.hash||"";Y.params=p(h(Y.params));const _e=$g(a,ke({},z,{hash:o0(fe),path:Y.path})),oe=l.createHref(_e);return ke({fullPath:_e,hash:fe,query:a===xi?m0(z.query):z.query||{}},Y,{redirectedFrom:void 0,href:oe})}function A(z){return typeof z=="string"?ml(n,z,c.value.path):ke({},z)}function w(z,V){if(u!==z)return Ys(8,{from:V,to:z})}function T(z){return I(z)}function Z(z){return T(ke(A(z),{replace:!0}))}function G(z){const V=z.matched[z.matched.length-1];if(V&&V.redirect){const{redirect:q}=V;let Y=typeof q=="function"?q(z):q;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=A(Y):{path:Y},Y.params={}),ke({query:z.query,hash:z.hash,params:"path"in Y?{}:z.params},Y)}}function I(z,V){const q=u=$(z),Y=c.value,fe=z.state,_e=z.force,oe=z.replace===!0,v=G(q);if(v)return I(ke(A(v),{state:typeof v=="object"?ke({},fe,v.state):fe,force:_e,replace:oe}),V||q);const y=q;y.redirectedFrom=V;let M;return!_e&&kg(a,Y,q)&&(M=Ys(16,{to:y,from:Y}),$e(Y,Y,!0,!1)),(M?Promise.resolve(M):re(y,Y)).catch(E=>Ft(E)?Ft(E,2)?E:de(E):W(E,y,Y)).then(E=>{if(E){if(Ft(E,2))return I(ke({replace:oe},A(E.to),{state:typeof E.to=="object"?ke({},fe,E.to.state):fe,force:_e}),V||y)}else E=ve(y,Y,!0,oe,fe);return me(y,Y,E),E})}function J(z,V){const q=w(z,V);return q?Promise.reject(q):Promise.resolve()}function re(z,V){let q;const[Y,fe,_e]=x0(z,V);q=hl(Y.reverse(),"beforeRouteLeave",z,V);for(const v of Y)v.leaveGuards.forEach(y=>{q.push(ts(y,z,V))});const oe=J.bind(null,z,V);return q.push(oe),Cs(q).then(()=>{q=[];for(const v of r.list())q.push(ts(v,z,V));return q.push(oe),Cs(q)}).then(()=>{q=hl(fe,"beforeRouteUpdate",z,V);for(const v of fe)v.updateGuards.forEach(y=>{q.push(ts(y,z,V))});return q.push(oe),Cs(q)}).then(()=>{q=[];for(const v of z.matched)if(v.beforeEnter&&!V.matched.includes(v))if(Pt(v.beforeEnter))for(const y of v.beforeEnter)q.push(ts(y,z,V));else q.push(ts(v.beforeEnter,z,V));return q.push(oe),Cs(q)}).then(()=>(z.matched.forEach(v=>v.enterCallbacks={}),q=hl(_e,"beforeRouteEnter",z,V),q.push(oe),Cs(q))).then(()=>{q=[];for(const v of o.list())q.push(ts(v,z,V));return q.push(oe),Cs(q)}).catch(v=>Ft(v,8)?v:Promise.reject(v))}function me(z,V,q){for(const Y of i.list())Y(z,V,q)}function ve(z,V,q,Y,fe){const _e=w(z,V);if(_e)return _e;const oe=V===Xt,v=Ns?history.state:{};q&&(Y||oe?l.replace(z.fullPath,ke({scroll:oe&&v&&v.scroll},fe)):l.push(z.fullPath,fe)),c.value=z,$e(z,V,q,oe),de()}let Ve;function je(){Ve||(Ve=l.listen((z,V,q)=>{if(!Ps.listening)return;const Y=$(z),fe=G(Y);if(fe){I(ke(fe,{replace:!0}),Y).catch(xn);return}u=Y;const _e=c.value;Ns&&Og(di(_e.fullPath,q.delta),Wa()),re(Y,_e).catch(oe=>Ft(oe,12)?oe:Ft(oe,2)?(I(oe.to,Y).then(v=>{Ft(v,20)&&!q.delta&&q.type===Rn.pop&&l.go(-1,!1)}).catch(xn),Promise.reject()):(q.delta&&l.go(-q.delta,!1),W(oe,Y,_e))).then(oe=>{oe=oe||ve(Y,_e,!1),oe&&(q.delta&&!Ft(oe,8)?l.go(-q.delta,!1):q.type===Rn.pop&&Ft(oe,20)&&l.go(-1,!1)),me(Y,_e,oe)}).catch(xn)}))}let Ze=un(),Pe=un(),ze;function W(z,V,q){de(z);const Y=Pe.list();return Y.length?Y.forEach(fe=>fe(z,V,q)):console.error(z),Promise.reject(z)}function te(){return ze&&c.value!==Xt?Promise.resolve():new Promise((z,V)=>{Ze.add([z,V])})}function de(z){return ze||(ze=!z,je(),Ze.list().forEach(([V,q])=>z?q(z):V()),Ze.reset()),z}function $e(z,V,q,Y){const{scrollBehavior:fe}=t;if(!Ns||!fe)return Promise.resolve();const _e=!q&&Cg(di(z.fullPath,0))||(Y||!q)&&history.state&&history.state.scroll||null;return Qe().then(()=>fe(z,V,_e)).then(oe=>oe&&zg(oe)).catch(oe=>W(oe,z,V))}const Ye=z=>l.go(z);let Ie;const Jt=new Set,Ps={currentRoute:c,listening:!0,addRoute:g,removeRoute:f,hasRoute:x,getRoutes:_,resolve:$,options:t,push:T,replace:Z,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:Pe.add,isReady:te,install(z){const V=this;z.component("RouterLink",g0),z.component("RouterView",b0),z.config.globalProperties.$router=V,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>b(c)}),Ns&&!Ie&&c.value===Xt&&(Ie=!0,T(l.location).catch(fe=>{}));const q={};for(const fe in Xt)q[fe]=P(()=>c.value[fe]);z.provide(Dr,V),z.provide(Ru,Ce(q)),z.provide(Kl,c);const Y=z.unmount;Jt.add(z),z.unmount=function(){Jt.delete(z),Jt.size<1&&(u=Xt,Ve&&Ve(),Ve=null,c.value=Xt,Ie=!1,ze=!1),Y()}}};return Ps}function Cs(t){return t.reduce((s,n)=>s.then(()=>n()),Promise.resolve())}function x0(t,s){const n=[],a=[],l=[],r=Math.max(s.matched.length,t.matched.length);for(let o=0;o<r;o++){const i=s.matched[o];i&&(t.matched.find(u=>Js(u,i))?a.push(i):n.push(i));const c=t.matched[o];c&&(s.matched.find(u=>Js(u,c))||l.push(c))}return[n,a,l]}const dl=K(!1),kn=K(!1),Is=K(!1),$0=K(!0),Wl=Gf({xs:460,...Pf}),ks=_g(),Zu=og(),k0=P(()=>ks.height.value-ks.width.value/ls>180),Nu=ag(Ut?document.body:null),Bs=Ef(),A0=P(()=>{var t,s;return["INPUT","TEXTAREA"].includes(((t=Bs.value)==null?void 0:t.tagName)||"")||((s=Bs.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),M0=P(()=>{var t;return["BUTTON","A"].includes(((t=Bs.value)==null?void 0:t.tagName)||"")});zt("slidev-camera","default");zt("slidev-mic","default");const ma=zt("slidev-scale",0),et=zt("slidev-show-overview",!1),fl=zt("slidev-presenter-cursor",!0),Ti=zt("slidev-show-editor",!1);zt("slidev-editor-width",Ut?window.innerWidth*.4:100);const Iu=gu(et);function Ei(t,s,n,a=l=>l){return t*a(.5-s*(.5-n))}function S0(t){return[-t[0],-t[1]]}function $t(t,s){return[t[0]+s[0],t[1]+s[1]]}function yt(t,s){return[t[0]-s[0],t[1]-s[1]]}function xt(t,s){return[t[0]*s,t[1]*s]}function T0(t,s){return[t[0]/s,t[1]/s]}function pn(t){return[t[1],-t[0]]}function Pi(t,s){return t[0]*s[0]+t[1]*s[1]}function E0(t,s){return t[0]===s[0]&&t[1]===s[1]}function P0(t){return Math.hypot(t[0],t[1])}function z0(t){return t[0]*t[0]+t[1]*t[1]}function zi(t,s){return z0(yt(t,s))}function Du(t){return T0(t,P0(t))}function O0(t,s){return Math.hypot(t[1]-s[1],t[0]-s[0])}function mn(t,s,n){let a=Math.sin(n),l=Math.cos(n),r=t[0]-s[0],o=t[1]-s[1],i=r*l-o*a,c=r*a+o*l;return[i+s[0],c+s[1]]}function Ql(t,s,n){return $t(t,xt(yt(s,t),n))}function Oi(t,s,n){return $t(t,xt(s,n))}var{min:Ls,PI:C0}=Math,Ci=.275,hn=C0+1e-4;function L0(t,s={}){let{size:n=16,smoothing:a=.5,thinning:l=.5,simulatePressure:r=!0,easing:o=W=>W,start:i={},end:c={},last:u=!1}=s,{cap:p=!0,easing:m=W=>W*(2-W)}=i,{cap:h=!0,easing:g=W=>--W*W*W+1}=c;if(t.length===0||n<=0)return[];let f=t[t.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(n,f):i.taper,x=c.taper===!1?0:c.taper===!0?Math.max(n,f):c.taper,$=Math.pow(n*a,2),A=[],w=[],T=t.slice(0,10).reduce((W,te)=>{let de=te.pressure;if(r){let $e=Ls(1,te.distance/n),Ye=Ls(1,1-$e);de=Ls(1,W+(Ye-W)*($e*Ci))}return(W+de)/2},t[0].pressure),Z=Ei(n,l,t[t.length-1].pressure,o),G,I=t[0].vector,J=t[0].point,re=J,me=J,ve=re,Ve=!1;for(let W=0;W<t.length;W++){let{pressure:te}=t[W],{point:de,vector:$e,distance:Ye,runningLength:Ie}=t[W];if(W<t.length-1&&f-Ie<3)continue;if(l){if(r){let _e=Ls(1,Ye/n),oe=Ls(1,1-_e);te=Ls(1,T+(oe-T)*(_e*Ci))}Z=Ei(n,l,te,o)}else Z=n/2;G===void 0&&(G=Z);let Jt=Ie<_?m(Ie/_):1,Ps=f-Ie<x?g((f-Ie)/x):1;Z=Math.max(.01,Z*Math.min(Jt,Ps));let z=(W<t.length-1?t[W+1]:t[W]).vector,V=W<t.length-1?Pi($e,z):1,q=Pi($e,I)<0&&!Ve,Y=V!==null&&V<0;if(q||Y){let _e=xt(pn(I),Z);for(let oe=1/13,v=0;v<=1;v+=oe)me=mn(yt(de,_e),de,hn*v),A.push(me),ve=mn($t(de,_e),de,hn*-v),w.push(ve);J=me,re=ve,Y&&(Ve=!0);continue}if(Ve=!1,W===t.length-1){let _e=xt(pn($e),Z);A.push(yt(de,_e)),w.push($t(de,_e));continue}let fe=xt(pn(Ql(z,$e,V)),Z);me=yt(de,fe),(W<=1||zi(J,me)>$)&&(A.push(me),J=me),ve=$t(de,fe),(W<=1||zi(re,ve)>$)&&(w.push(ve),re=ve),T=te,I=$e}let je=t[0].point.slice(0,2),Ze=t.length>1?t[t.length-1].point.slice(0,2):$t(t[0].point,[1,1]),Pe=[],ze=[];if(t.length===1){if(!(_||x)||u){let W=Oi(je,Du(pn(yt(je,Ze))),-(G||Z)),te=[];for(let de=1/13,$e=de;$e<=1;$e+=de)te.push(mn(W,je,hn*2*$e));return te}}else{if(!(_||x&&t.length===1))if(p)for(let te=1/13,de=te;de<=1;de+=te){let $e=mn(w[0],je,hn*de);Pe.push($e)}else{let te=yt(A[0],w[0]),de=xt(te,.5),$e=xt(te,.51);Pe.push(yt(je,de),yt(je,$e),$t(je,$e),$t(je,de))}let W=pn(S0(t[t.length-1].vector));if(x||_&&t.length===1)ze.push(Ze);else if(h){let te=Oi(Ze,W,Z);for(let de=1/29,$e=de;$e<1;$e+=de)ze.push(mn(te,Ze,hn*3*$e))}else ze.push($t(Ze,xt(W,Z)),$t(Ze,xt(W,Z*.99)),yt(Ze,xt(W,Z*.99)),yt(Ze,xt(W,Z)))}return A.concat(ze,w.reverse(),Pe)}function G0(t,s={}){var n;let{streamline:a=.5,size:l=16,last:r=!1}=s;if(t.length===0)return[];let o=.15+(1-a)*.85,i=Array.isArray(t[0])?t:t.map(({x:g,y:f,pressure:_=.5})=>[g,f,_]);if(i.length===2){let g=i[1];i=i.slice(0,-1);for(let f=1;f<5;f++)i.push(Ql(i[0],g,f/4))}i.length===1&&(i=[...i,[...$t(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,m=c[0],h=i.length-1;for(let g=1;g<i.length;g++){let f=r&&g===h?i[g].slice(0,2):Ql(m.point,i[g],o);if(E0(m.point,f))continue;let _=O0(f,m.point);if(p+=_,g<h&&!u){if(p<l)continue;u=!0}m={point:f,pressure:i[g][2]>=0?i[g][2]:.5,vector:Du(yt(m.point,f)),distance:_,runningLength:p},c.push(m)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function R0(t,s={}){return L0(G0(t,s),s)}var Z0=()=>({events:{},emit(t,...s){let n=this.events[t]||[];for(let a=0,l=n.length;a<l;a++)n[a](...s)},on(t,s){var n;return(n=this.events[t])!=null&&n.push(s)||(this.events[t]=[s]),()=>{var a;this.events[t]=(a=this.events[t])==null?void 0:a.filter(l=>s!==l)}}});function Sa(t,s){return t-s}function N0(t){return t<0?-1:1}function Ta(t){return[Math.abs(t),N0(t)]}function Fu(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var I0=2,Ht=I0,nn=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var l;var s;const n=this.drauu.el,a=(l=this.drauu.options.coordinateScale)!=null?l:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-r.left)*a,y:(t.pageY-r.top)*a,pressure:t.pressure}}else{const r=this.drauu.svgPoint;r.x=t.clientX,r.y=t.clientY;const o=r.matrixTransform((s=n.getScreenCTM())==null?void 0:s.inverse());return{x:o.x*a,y:o.y*a,pressure:t.pressure}}}createElement(t,s){var l;const n=document.createElementNS("http://www.w3.org/2000/svg",t),a=s?{...this.brush,...s}:this.brush;return n.setAttribute("fill",(l=a.fill)!=null?l:"transparent"),n.setAttribute("stroke",a.color),n.setAttribute("stroke-width",a.size.toString()),n.setAttribute("stroke-linecap","round"),a.dasharray&&n.setAttribute("stroke-dasharray",a.dasharray),n}attr(t,s){this.el.setAttribute(t,typeof s=="string"?s:s.toFixed(Ht))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},D0=class extends nn{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const s=R0(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!s.length)return"";const n=s.reduce((a,[l,r],o,i)=>{const[c,u]=i[(o+1)%i.length];return a.push(l,r,(l+c)/2,(r+u)/2),a},["M",...s[0],"Q"]);return n.push("Z"),n.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},F0=class extends nn{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[s,n]=Ta(t.x-this.start.x),[a,l]=Ta(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,a);s=r,a=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",a);else{const[r,o]=[this.start.x,this.start.x+s*n].sort(Sa),[i,c]=[this.start.y,this.start.y+a*l].sort(Sa);this.attr("cx",(r+o)/2),this.attr("cy",(i+c)/2),this.attr("rx",(o-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function ju(t,s){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",s),a.setAttribute("id",t),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(l),n.appendChild(a),n}var j0=class extends nn{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const s=Fu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(ju(s,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${s})`),n}return this.el}onMove(t){if(!this.el)return!1;let{x:s,y:n}=t;if(this.shiftPressed){const a=t.x-this.start.x,l=t.y-this.start.y;if(l!==0){let r=a/l;r=Math.round(r),Math.abs(r)<=1?(s=this.start.x+l*r,n=this.start.y+l):(s=this.start.x+a,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-n),this.attr("x2",s),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",n)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},q0=class extends nn{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[s,n]=Ta(t.x-this.start.x),[a,l]=Ta(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,a);s=r,a=r}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-a),this.attr("width",s*2),this.attr("height",a*2);else{const[r,o]=[this.start.x,this.start.x+s*n].sort(Sa),[i,c]=[this.start.y,this.start.y+a*l].sort(Sa);this.attr("x",r),this.attr("y",i),this.attr("width",o-r),this.attr("height",c-i)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function H0(t,s){const n=t.x-s.x,a=t.y-s.y;return n*n+a*a}function V0(t,s,n){let a=s.x,l=s.y,r=n.x-a,o=n.y-l;if(r!==0||o!==0){const i=((t.x-a)*r+(t.y-l)*o)/(r*r+o*o);i>1?(a=n.x,l=n.y):i>0&&(a+=r*i,l+=o*i)}return r=t.x-a,o=t.y-l,r*r+o*o}function B0(t,s){let n=t[0];const a=[n];let l;for(let r=1,o=t.length;r<o;r++)l=t[r],H0(l,n)>s&&(a.push(l),n=l);return n!==l&&l&&a.push(l),a}function Jl(t,s,n,a,l){let r=a,o=0;for(let i=s+1;i<n;i++){const c=V0(t[i],t[s],t[n]);c>r&&(o=i,r=c)}r>a&&(o-s>1&&Jl(t,s,o,a,l),l.push(t[o]),n-o>1&&Jl(t,o,n,a,l))}function U0(t,s){const n=t.length-1,a=[t[0]];return Jl(t,0,n,s,a),a.push(t[n]),a}function Li(t,s,n=!1){if(t.length<=2)return t;const a=s!==void 0?s*s:1;return t=n?t:B0(t,a),t=U0(t,a),t}var K0=class extends nn{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=Fu();const s=ju(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=Li(this.points,1,!0),this.count=0),this.attr("d",Ri(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",Ri(Li(this.points,1,!0))),!t.getTotalLength()))}};function W0(t,s){const n=s.x-t.x,a=s.y-t.y;return{length:Math.sqrt(n**2+a**2),angle:Math.atan2(a,n)}}function Gi(t,s,n,a){const l=s||t,r=n||t,o=.2,i=W0(l,r),c=i.angle+(a?Math.PI:0),u=i.length*o,p=t.x+Math.cos(c)*u,m=t.y+Math.sin(c)*u;return{x:p,y:m}}function Q0(t,s,n){const a=Gi(n[s-1],n[s-2],t),l=Gi(t,n[s-1],n[s+1],!0);return`C ${a.x.toFixed(Ht)},${a.y.toFixed(Ht)} ${l.x.toFixed(Ht)},${l.y.toFixed(Ht)} ${t.x.toFixed(Ht)},${t.y.toFixed(Ht)}`}function Ri(t){return t.reduce((s,n,a,l)=>a===0?`M ${n.x.toFixed(Ht)},${n.y.toFixed(Ht)}`:`${s} ${Q0(n,a,l)}`,"")}var J0=class extends nn{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const s=(n,a)=>{if(n&&n.length)for(let l=0;l<n.length;l++){const r=n[l];if(r.getTotalLength){const o=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(o*i/this.pathSubFactor),u=r.getPointAtLength(o*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:a||r})}}else r.children&&s(r.children,r)}};t&&s(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const n=this.pathFragments[s],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,a)&&(n.element.remove(),t.push(s))}return t.length&&(this.pathFragments=this.pathFragments.filter((s,n)=>!t.includes(n))),t.length>0}lineLineIntersect(t,s){const n=t.x1,a=t.x2,l=s.x1,r=s.x2,o=t.y1,i=t.y2,c=s.y1,u=s.y2,p=(n-a)*(c-u)-(o-i)*(l-r),m=(n*i-o*a)*(l-r)-(n-a)*(l*u-c*r),h=(n*i-o*a)*(c-u)-(o-i)*(l*u-c*r),g=(f,_,x)=>f>=_&&f<=x?!0:f>=x&&f<=_;if(p===0)return!1;{const f={x:m/p,y:h/p};return g(f.x,n,a)&&g(f.y,o,i)&&g(f.x,l,r)&&g(f.y,c,u)}}};function Y0(t){return{draw:new K0(t),stylus:new D0(t),line:new j0(t),rectangle:new q0(t),ellipse:new F0(t),eraseLine:new J0(t)}}var X0=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Z0(),this._models=Y0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(s)||this.el,a=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",o,!1),window.addEventListener("keyup",o,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",o,!1),window.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,s){return this._emitter.on(t,s)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){!this.acceptsInput(t)||(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const s=this.model._eventUp(t);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function ev(t){return new X0(t)}const Yl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Zt=zt("slidev-drawing-enabled",!1),i5=zt("slidev-drawing-pinned",!1),tv=K(!1),sv=K(!1),nv=K(!1),Zn=K(!1),bs=Td(zt("slidev-drawing-brush",{color:Yl[0],size:4,mode:"stylus"})),Zi=K("stylus"),qu=P(()=>xe.drawings.syncAll||Gt.value);let Nn=!1;const dn=P({get(){return Zi.value},set(t){Zi.value=t,t==="arrow"?(bs.mode="line",bs.arrowEnd=!0):(bs.mode=t,bs.arrowEnd=!1)}}),av=Ce({brush:bs,acceptsInputTypes:P(()=>Zt.value?void 0:["pen"]),coordinateTransform:!1}),tt=Ia(ev(av));function lv(){tt.clear(),qu.value&&ku(Fe.value,"")}function Hu(){var t;sv.value=tt.canRedo(),tv.value=tt.canUndo(),nv.value=!!((t=tt.el)!=null&&t.children.length)}function rv(t){Nn=!0;const s=Aa[t||Fe.value];s!=null?tt.load(s):tt.clear(),Nn=!1}tt.on("changed",()=>{if(Hu(),!Nn){const t=tt.dump(),s=Fe.value;(Aa[s]||"")!==t&&qu.value&&ku(s,tt.dump())}});$f(t=>{Nn=!0,t[Fe.value]!=null&&tt.load(t[Fe.value]||""),Nn=!1,Hu()});Qe(()=>{he(Fe,()=>{!tt.mounted||rv()},{immediate:!0})});tt.on("start",()=>Zn.value=!0);tt.on("end",()=>Zn.value=!1);window.addEventListener("keydown",t=>{if(!Zt.value)return;const s=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let n=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?tt.redo():tt.undo():t.code==="Escape"?Zt.value=!1:t.code==="KeyL"&&s?dn.value="line":t.code==="KeyA"&&s?dn.value="arrow":t.code==="KeyS"&&s?dn.value="stylus":t.code==="KeyR"&&s?dn.value="rectangle":t.code==="KeyE"&&s?dn.value="ellipse":t.code==="KeyC"&&s?lv():t.code.startsWith("Digit")&&s&&+t.code[5]<=Yl.length?bs.color=Yl[+t.code[5]-1]:n=!1,n&&(t.preventDefault(),t.stopPropagation())},!1);function qe(...t){return P(()=>t.every(s=>lt(s)))}function ct(t){return P(()=>!lt(t))}const Ni=Hf(),gl=zt("slidev-color-schema","auto"),Xl=P(()=>xe.colorSchema!=="auto"),Fr=P({get(){return Xl.value?xe.colorSchema==="dark":gl.value==="auto"?Ni.value:gl.value==="dark"},set(t){Xl.value||(gl.value=t===Ni.value?"auto":t?"dark":"light")}}),Vu=gu(Fr);Ut&&he(Fr,t=>{const s=document.querySelector("html");s.classList.toggle("dark",t),s.classList.toggle("light",!t)},{immediate:!0});const ha=K(1),da=P(()=>He.length-1),ht=K(0),jr=K(0);function ov(){ht.value>ha.value&&(ht.value-=1)}function iv(){ht.value<da.value&&(ht.value+=1)}function cv(){if(ht.value>ha.value){let t=ht.value-jr.value;t<ha.value&&(t=ha.value),ht.value=t}}function uv(){if(ht.value<da.value){let t=ht.value+jr.value;t>da.value&&(t=da.value),ht.value=t}}function pv(){const{escape:t,space:s,shift:n,left:a,right:l,up:r,down:o,enter:i,d:c,g:u,o:p}=Zu;let m=[{name:"next_space",key:qe(s,ct(n)),fn:os,autoRepeat:!0},{name:"prev_space",key:qe(s,n),fn:is,autoRepeat:!0},{name:"next_right",key:qe(l,ct(n),ct(et)),fn:os,autoRepeat:!0},{name:"prev_left",key:qe(a,ct(n),ct(et)),fn:is,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:os,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:is,autoRepeat:!0},{name:"next_down",key:qe(o,ct(et)),fn:In,autoRepeat:!0},{name:"prev_up",key:qe(r,ct(et)),fn:()=>Dn(!1),autoRepeat:!0},{name:"next_shift",key:qe(l,n),fn:In,autoRepeat:!0},{name:"prev_shift",key:qe(a,n),fn:()=>Dn(!1),autoRepeat:!0},{name:"toggle_dark",key:qe(c,ct(Zt)),fn:Vu},{name:"toggle_overview",key:qe(p,ct(Zt)),fn:Iu},{name:"hide_overview",key:qe(t,ct(Zt)),fn:()=>et.value=!1},{name:"goto",key:qe(u,ct(Zt)),fn:()=>Is.value=!Is.value},{name:"next_overview",key:qe(l,et),fn:iv},{name:"prev_overview",key:qe(a,et),fn:ov},{name:"up_overview",key:qe(r,et),fn:cv},{name:"down_overview",key:qe(o,et),fn:uv},{name:"goto_from_overview",key:qe(i,et),fn:()=>{Xs(ht.value),et.value=!1}}];const h=new Set(m.map(f=>f.name));if(m.filter(f=>f.name&&h.has(f.name)).length===0){const f=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(f),console.warn(f)}return m}const Bu=qe(ct(A0),ct(M0),$0);function mv(t,s,n=!1){typeof t=="string"&&(t=Zu[t]);const a=qe(t,Bu);let l=0,r;const o=()=>{if(clearTimeout(r),!a.value){l=0;return}n&&(r=setTimeout(o,Math.max(1e3-l*250,150)),l++),s()};return he(a,o,{flush:"sync"})}function hv(t,s){return Tf(t,n=>{!Bu.value||n.repeat||s()})}function dv(){const t=pv();new Map(t.map(n=>[n.key,n])).forEach(n=>{n.fn&&mv(n.key,n.fn,n.autoRepeat)}),hv("f",()=>Nu.toggle())}const fv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gv=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),vv=[gv];function yv(t,s){return k(),B("svg",fv,vv)}const _v={name:"carbon-close",render:yv};function qr(t){var n,a;const s=(a=(n=t==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:a.no;return s!=null?`slidev-page-${s}`:""}const Uu=we({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const s=t;R(j);const n=K(),a=ng(n),l=P(()=>s.width?s.width:a.width.value),r=P(()=>s.width?s.width/ls:a.height.value);s.width&&qn(()=>{n.value&&(n.value.style.width=`${l.value}px`,n.value.style.height=`${r.value}px`)});const o=P(()=>l.value/r.value),i=P(()=>s.scale?s.scale:o.value<ls?l.value/rs:r.value*ls/rs),c=P(()=>({height:`${Nr}px`,width:`${rs}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=P(()=>({"select-none":!xe.selectable,"slidev-code-line-numbers":xe.lineNumbers}));return mt(wu,i),(p,m)=>(k(),B("div",{id:"slide-container",ref_key:"root",ref:n,class:Ge(b(u))},[e("div",{id:"slide-content",style:st(b(c))},[Dt(p.$slots,"default")],4),Dt(p.$slots,"controls")],2))}});const Hr=we({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:s}){const n=Rt(t,"clicks",s),a=Rt(t,"clicksElements",s),l=Rt(t,"clicksDisabled",s),r=Rt(t,"clicksOrderMap",s);a.value.length=0,mt(pf,t.route),mt(mf,t.context),mt(ua,n),mt(pa,l),mt(Rs,a),mt(ql,r)},render(){var t,s;return this.$props.is?rt(this.$props.is):(s=(t=this.$slots)==null?void 0:t.default)==null?void 0:s.call(t)}}),bv=["innerHTML"],wv=we({__name:"DrawingPreview",props:{page:null},setup(t){return R(j),(s,n)=>b(Aa)[t.page]?(k(),B("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Aa)[t.page]},null,8,bv)):ue("v-if",!0)}}),xv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},$v=["onClick"],kv=we({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(t,{emit:s}){const n=t;R(j);const a=Rt(n,"modelValue",s);function l(){a.value=!1}function r(g){Xs(g),l()}function o(g){return g===ht.value}const i=Wl.smaller("xs"),c=Wl.smaller("sm"),u=4*16*2,p=2*16,m=P(()=>i.value?ks.width.value-u:c.value?(ks.width.value-u-p)/2:300),h=P(()=>Math.floor((ks.width.value-u)/(m.value+p)));return qn(()=>{ht.value=Fe.value,jr.value=h.value}),(g,f)=>{const _=_v;return k(),B(Ae,null,[Or(e("div",xv,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:st(`grid-template-columns: repeat(auto-fit,minmax(${b(m)}px,1fr))`)},[(k(!0),B(Ae,null,Vn(b(He).slice(0,-1),(x,$)=>(k(),B("div",{key:x.path,class:"relative"},[e("div",{class:Ge(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":o($+1)}]),onClick:A=>r(+x.path)},[(k(),H(Uu,{key:x.path,width:b(m),"clicks-disabled":!0,class:"pointer-events-none"},{default:S(()=>[O(b(Hr),{is:x==null?void 0:x.component,"clicks-disabled":!0,class:Ge(b(qr)(x)),route:x,context:"overview"},null,8,["is","class","route"]),O(wv,{page:+x.path},null,8,["page"])]),_:2},1032,["width"]))],10,$v),e("div",{class:"absolute top-0 opacity-50",style:st(`left: ${b(m)+5}px`)},_t($+1),5)]))),128))],4)],512),[[mu,b(a)]]),b(a)?(k(),B("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[O(_)])):ue("v-if",!0)],64)}}});const Av="/assets/logo.b72bde5d.png",Mv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Sv=we({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:s}){const n=t;R(j);const a=Rt(n,"modelValue",s);function l(){a.value=!1}return(r,o)=>(k(),H(Wc,null,[b(a)?(k(),B("div",Mv,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=i=>l())}),e("div",{class:Ge(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[Dt(r.$slots,"default")],2)])):ue("v-if",!0)],1024))}}),Tv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Ev=["innerHTML"],Pv=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Av,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),d("dev ")])])],-1),zv=we({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:s}){const n=t;R(j);const a=Rt(n,"modelValue",s),l=P(()=>typeof xe.info=="string");return(r,o)=>(k(),H(Sv,{modelValue:b(a),"onUpdate:modelValue":o[0]||(o[0]=i=>Me(a)?a.value=i:null),class:"px-6 py-4"},{default:S(()=>[e("div",Tv,[b(l)?(k(),B("div",{key:0,class:"mb-4",innerHTML:b(xe).info},null,8,Ev)):ue("v-if",!0),Pv])]),_:1},8,["modelValue"]))}});const Ov=["disabled","onKeydown"],Cv=we({__name:"Goto",setup(t){R(j);const s=K(),n=K(""),a=P(()=>{if(n.value.startsWith("/"))return!!He.find(o=>o.path===n.value.substring(1));{const o=+n.value;return!isNaN(o)&&o>0&&o<=ap.value}});function l(){a.value&&(n.value.startsWith("/")?Xs(n.value.substring(1)):Xs(+n.value)),r()}function r(){Is.value=!1}return he(Is,async o=>{var i,c;o?(await Qe(),n.value="",(i=s.value)==null||i.focus()):(c=s.value)==null||c.blur()}),he(n,o=>{o.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(o,i)=>(k(),B("div",{id:"slidev-goto-dialog",class:Ge(["fixed right-5 bg-main transform transition-all",b(Is)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Or(e("input",{ref_key:"input",ref:s,"onUpdate:modelValue":i[0]||(i[0]=c=>n.value=c),type:"text",disabled:!b(Is),class:Ge(["outline-none bg-transparent",{"text-red-400":!b(a)&&n.value}]),placeholder:"Goto...",onKeydown:[Do(l,["enter"]),Do(r,["escape"])],onBlur:r},null,42,Ov),[[dd,n.value]])],2))}}),Lv=we({__name:"Controls",setup(t){R(j);const s=It(),n=It();return(a,l)=>(k(),B(Ae,null,[O(kv,{modelValue:b(et),"onUpdate:modelValue":l[0]||(l[0]=r=>Me(et)?et.value=r:null)},null,8,["modelValue"]),O(Cv),b(s)?(k(),H(b(s),{key:0})):ue("v-if",!0),b(n)?(k(),H(b(n),{key:1,modelValue:b(dl),"onUpdate:modelValue":l[1]||(l[1]=r=>Me(dl)?dl.value=r:null)},null,8,["modelValue"])):ue("v-if",!0),b(xe).info?(k(),H(zv,{key:2,modelValue:b(kn),"onUpdate:modelValue":l[2]||(l[2]=r=>Me(kn)?kn.value=r:null)},null,8,["modelValue"])):ue("v-if",!0)],64))}}),Gv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rv=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Zv=[Rv];function Nv(t,s){return k(),B("svg",Gv,Zv)}const Iv={name:"carbon-settings-adjust",render:Nv},Dv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fv=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),jv=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),qv=[Fv,jv];function Hv(t,s){return k(),B("svg",Dv,qv)}const Vv={name:"carbon-information",render:Hv},Bv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uv=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Kv=[Uv];function Wv(t,s){return k(),B("svg",Bv,Kv)}const Qv={name:"carbon-download",render:Wv},Jv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yv=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Xv=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),e1=[Yv,Xv];function t1(t,s){return k(),B("svg",Jv,e1)}const s1={name:"carbon-user-speaker",render:t1},n1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a1=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),l1=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),r1=[a1,l1];function o1(t,s){return k(),B("svg",n1,r1)}const i1={name:"carbon-presentation-file",render:o1},c1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u1=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),p1=[u1];function m1(t,s){return k(),B("svg",c1,p1)}const h1={name:"carbon-pen",render:m1},d1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},f1=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),g1=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),v1=[f1,g1];function y1(t,s){return k(),B("svg",d1,v1)}const _1={name:"ph-cursor-duotone",render:y1},b1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},w1=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),x1=[w1];function $1(t,s){return k(),B("svg",b1,x1)}const Ku={name:"ph-cursor-fill",render:$1},k1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A1=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),M1=[A1];function S1(t,s){return k(),B("svg",k1,M1)}const T1={name:"carbon-sun",render:S1},E1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P1=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),z1=[P1];function O1(t,s){return k(),B("svg",E1,z1)}const C1={name:"carbon-moon",render:O1},L1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G1=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),R1=[G1];function Z1(t,s){return k(),B("svg",L1,R1)}const N1={name:"carbon-apps",render:Z1},I1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D1=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),F1=[D1];function j1(t,s){return k(),B("svg",I1,F1)}const q1={name:"carbon-arrow-right",render:j1},H1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V1=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),B1=[V1];function U1(t,s){return k(),B("svg",H1,B1)}const K1={name:"carbon-arrow-left",render:U1},W1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q1=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),J1=[Q1];function Y1(t,s){return k(),B("svg",W1,J1)}const X1={name:"carbon-maximize",render:Y1},ey={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ty=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),sy=[ty];function ny(t,s){return k(),B("svg",ey,sy)}const ay={name:"carbon-minimize",render:ny},ly={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ry=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),oy=[ry];function iy(t,s){return k(),B("svg",ly,oy)}const cy={name:"carbon-checkmark",render:iy},uy={class:"select-list"},py={class:"title"},my={class:"items"},hy=["onClick"],dy=we({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:s}){const n=t;R(j);const a=Rt(n,"modelValue",s,{passive:!0});return(l,r)=>{const o=cy;return k(),B("div",uy,[e("div",py,_t(t.title),1),e("div",my,[(k(!0),B(Ae,null,Vn(t.items,i=>(k(),B("div",{key:i.value,class:Ge(["item",{active:b(a)===i.value}]),onClick:()=>{var c;a.value=i.value,(c=i.onClick)==null||c.call(i)}},[O(o,{class:Ge(["text-green-500",{"opacity-0":b(a)!==i.value}])},null,8,["class"]),d(" "+_t(i.display||i.value),1)],10,hy))),128))])])}}});const Wu=(t,s)=>{const n=t.__vccOpts||t;for(const[a,l]of s)n[a]=l;return n},fy=Wu(dy,[["__scopeId","data-v-7dd0eaca"]]),gy={class:"text-sm"},vy=we({__name:"Settings",setup(t){R(j);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,a)=>(k(),B("div",gy,[O(fy,{modelValue:b(ma),"onUpdate:modelValue":a[0]||(a[0]=l=>Me(ma)?ma.value=l:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),yy={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},_y=we({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:s}){const n=t;R(j);const a=Rt(n,"modelValue",s,{passive:!0}),l=K();return Mf(l,()=>{a.value=!1}),(r,o)=>(k(),B("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Ge({disabled:t.disabled}),onClick:o[0]||(o[0]=i=>a.value=!b(a))},[Dt(r.$slots,"button",{class:Ge({disabled:t.disabled})})],2),(k(),H(Wc,null,[b(a)?(k(),B("div",yy,[Dt(r.$slots,"menu")])):ue("v-if",!0)],1024))],512))}}),by={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},la={__name:"VerticalDivider",setup(t){return R(j),(s,n)=>(k(),B("div",by))}},wy={render(){return[]}},xy={class:"icon-btn"},$y={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},ky={class:"my-auto"},Ay={class:"opacity-50"},My=we({__name:"NavControls",props:{persist:{default:!1}},setup(t){const s=t;R(j);const n=Wl.smaller("md"),{isFullscreen:a,toggle:l}=Nu,r=P(()=>er.value?`?password=${er.value}`:""),o=P(()=>`/presenter/${Fe.value}${r.value}`),i=P(()=>`/${Fe.value}${r.value}`),c=K(),u=()=>{c.value&&Bs.value&&c.value.contains(Bs.value)&&Bs.value.blur()},p=P(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=It(),h=It();return Ms(()=>import("./DrawingControls.db83ae2b.js"),["assets/DrawingControls.db83ae2b.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.aef59224.js"]).then(g=>h.value=g.default),(g,f)=>{const _=ay,x=X1,$=K1,A=q1,w=N1,T=C1,Z=T1,G=Ku,I=_1,J=h1,re=i1,me=Le("RouterLink"),ve=s1,Ve=Qv,je=Vv,Ze=Iv;return k(),B("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:Ge(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(p)]),onMouseleave:u},[b(jt)?ue("v-if",!0):(k(),B("button",{key:0,class:"icon-btn",onClick:f[0]||(f[0]=(...Pe)=>b(l)&&b(l)(...Pe))},[b(a)?(k(),H(_,{key:0})):(k(),H(x,{key:1}))])),e("button",{class:Ge(["icon-btn",{disabled:!b(T3)}]),onClick:f[1]||(f[1]=(...Pe)=>b(is)&&b(is)(...Pe))},[O($)],2),e("button",{class:Ge(["icon-btn",{disabled:!b(S3)}]),title:"Next",onClick:f[2]||(f[2]=(...Pe)=>b(os)&&b(os)(...Pe))},[O(A)],2),b(jt)?ue("v-if",!0):(k(),B("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:f[3]||(f[3]=Pe=>b(Iu)())},[O(w)])),b(Xl)?ue("v-if",!0):(k(),B("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:f[4]||(f[4]=Pe=>b(Vu)())},[b(Fr)?(k(),H(T,{key:0})):(k(),H(Z,{key:1}))])),O(la),b(jt)?ue("v-if",!0):(k(),B(Ae,{key:3},[!b(Gt)&&!b(n)&&b(m)?(k(),B(Ae,{key:0},[O(b(m)),O(la)],64)):ue("v-if",!0),b(Gt)?(k(),B("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:f[5]||(f[5]=Pe=>fl.value=!b(fl))},[b(fl)?(k(),H(G,{key:0})):(k(),H(I,{key:1,class:"opacity-50"}))])):ue("v-if",!0)],64)),!b(xe).drawings.presenterOnly&&!b(jt)?(k(),B(Ae,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:f[6]||(f[6]=Pe=>Zt.value=!b(Zt))},[O(J),b(Zt)?(k(),B("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:st({background:b(bs).color})},null,4)):ue("v-if",!0)]),O(la)],64)):ue("v-if",!0),b(jt)?ue("v-if",!0):(k(),B(Ae,{key:5},[b(Gt)?(k(),H(me,{key:0,to:b(i),class:"icon-btn",title:"Play Mode"},{default:S(()=>[O(re)]),_:1},8,["to"])):ue("v-if",!0),b(k3)?(k(),H(me,{key:1,to:b(o),class:"icon-btn",title:"Presenter Mode"},{default:S(()=>[O(ve)]),_:1},8,["to"])):ue("v-if",!0),ue("v-if",!0)],64)),(k(),B(Ae,{key:6},[b(xe).download?(k(),B("button",{key:0,class:"icon-btn",onClick:f[8]||(f[8]=(...Pe)=>b(tr)&&b(tr)(...Pe))},[O(Ve)])):ue("v-if",!0)],64)),!b(Gt)&&b(xe).info&&!b(jt)?(k(),B("button",{key:7,class:"icon-btn",onClick:f[9]||(f[9]=Pe=>kn.value=!b(kn))},[O(je)])):ue("v-if",!0),!b(Gt)&&!b(jt)?(k(),H(_y,{key:8},{button:S(()=>[e("button",xy,[O(Ze)])]),menu:S(()=>[O(vy)]),_:1})):ue("v-if",!0),b(jt)?ue("v-if",!0):(k(),H(la,{key:9})),e("div",$y,[e("div",ky,[d(_t(b(Fe))+" ",1),e("span",Ay,"/ "+_t(b(ap)),1)])]),O(b(wy))],34)],512)}}}),Sy={__name:"SlidesTotal",setup(t){const s=R(j);return(n,a)=>(k(),B("span",null,_t(b(s).nav.total),1))}},Ty={__name:"SlideCurrentNo",setup(t){const s=R(j);return(n,a)=>(k(),B("span",null,_t(b(s).nav.currentPage),1))}},Ey=we({__name:"Pagination",props:{classNames:{type:[Array,String]},x:{default:"r",type:String,validator:t=>t==="l"||t==="r"},y:{default:"t",type:String,validator:t=>t==="b"||t==="t"}},setup(t){const{classNames:s,x:n,y:a}=t;R(j);const l=P(()=>[...s?Array.isArray(s)?s:[s]:[],n==="l"&&"left-0",n==="r"&&"right-0",a==="t"&&"top-0",a==="b"&&"bottom-0"]);return(r,o)=>{const i=Ty,c=Sy;return k(),B("div",{class:Ge(["fixed p-2 text-xs",b(l)])},[O(i),d(" / "),O(c)],2)}}}),Py={__name:"global-top",setup(t){const s=R(j);return(n,a)=>{var r;const l=Ey;return!((r=b(s).themeConfigs.paginationPagesDisabled)!=null&&r.includes(b(s).nav.currentPage))&&(b(s).themeConfigs.paginationX||b(s).themeConfigs.paginationY)?(k(),H(l,{key:0,x:b(s).themeConfigs.paginationX,y:b(s).themeConfigs.paginationY},null,8,["x","y"])):ue("v-if",!0)}}},Qu={render(){return[rt(Py)]}},Ju={render(){return[]}},zy={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Oy=we({__name:"PresenterMouse",setup(t){return R(j),(s,n)=>{const a=Ku;return b(ul).cursor?(k(),B("div",zy,[O(a,{class:"absolute",style:st({left:`${b(ul).cursor.x}%`,top:`${b(ul).cursor.y}%`})},null,8,["style"])])):ue("v-if",!0)}}}),Cy=we({__name:"SlidesShow",props:{context:null},setup(t){R(j),he(pt,()=>{var n,a;((n=pt.value)==null?void 0:n.meta)&&pt.value.meta.preload!==!1&&(pt.value.meta.__preloaded=!0),((a=vl.value)==null?void 0:a.meta)&&vl.value.meta.preload!==!1&&(vl.value.meta.__preloaded=!0)},{immediate:!0});const s=It();return Ms(()=>import("./DrawingLayer.6e542d47.js"),[]).then(n=>s.value=n.default),(n,a)=>(k(),B(Ae,null,[ue(" Global Bottom "),O(b(Ju)),ue(" Slides "),(k(!0),B(Ae,null,Vn(b(He),l=>{var r,o;return k(),B(Ae,{key:l.path},[((r=l.meta)==null?void 0:r.__preloaded)||l===b(pt)?Or((k(),H(b(Hr),{key:0,is:l==null?void 0:l.component,clicks:l===b(pt)?b(Et):0,"clicks-elements":((o=l.meta)==null?void 0:o.__clicksElements)||[],"clicks-disabled":!1,class:Ge(b(qr)(l)),route:l,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[mu,l===b(pt)]]):ue("v-if",!0)],64)}),128)),ue(" Global Top "),O(b(Qu)),b(s)?(k(),H(b(s),{key:0})):ue("v-if",!0),b(Gt)?ue("v-if",!0):(k(),H(Oy,{key:1}))],64))}}),Ly=we({__name:"Play",setup(t){R(j),dv();const s=K();function n(r){var o;Ti.value||((o=r.target)==null?void 0:o.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?os():is())}z3(s);const a=P(()=>k0.value||Ti.value);It();const l=It();return Ms(()=>import("./DrawingControls.db83ae2b.js"),["assets/DrawingControls.db83ae2b.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.aef59224.js"]).then(r=>l.value=r.default),(r,o)=>(k(),B(Ae,null,[e("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:st(b(xu))},[O(Uu,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:b(Vr)?b(ks).width.value:void 0,scale:b(ma),onPointerdown:n},{default:S(()=>[O(Cy,{context:"slide"})]),controls:S(()=>[e("div",{class:Ge(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(a)?"opacity-100 right-0":"opacity-0 p-2",b(Zn)?"pointer-events-none":""]])},[O(My,{class:"m-auto",persist:b(a)},null,8,["persist"])],2),!b(xe).drawings.presenterOnly&&!b(jt)&&b(l)?(k(),H(b(l),{key:0,class:"ml-0"})):ue("v-if",!0)]),_:1},8,["style","width","scale"]),ue("v-if",!0)],4),O(Lv)],64))}});function Yu(t){const s=P(()=>t.value.path),n=P(()=>He.length-1),a=P(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),l=P(()=>Qa(a.value)),r=P(()=>He.find(h=>h.path===`${a.value}`)),o=P(()=>{var h,g,f;return(f=(g=(h=r.value)==null?void 0:h.meta)==null?void 0:g.slide)==null?void 0:f.id}),i=P(()=>{var h,g;return((g=(h=r.value)==null?void 0:h.meta)==null?void 0:g.layout)||(a.value===1?"cover":"default")}),c=P(()=>He.find(h=>h.path===`${Math.min(He.length,a.value+1)}`)),u=P(()=>He.filter(h=>{var g,f;return(f=(g=h.meta)==null?void 0:g.slide)==null?void 0:f.title}).reduce((h,g)=>(Br(h,g),h),[])),p=P(()=>Ur(u.value,r.value)),m=P(()=>Kr(p.value));return{route:t,path:s,total:n,currentPage:a,currentPath:l,currentRoute:r,currentSlideId:o,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:m}}function Xu(t,s,n){const a=K(0);Qe(()=>{dt.afterEach(async()=>{await Qe(),a.value+=1})});const l=P(()=>{var c,u;return a.value,((u=(c=s.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=P(()=>{var c,u,p;return+((p=(u=(c=s.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?p:l.value.length)}),o=P(()=>n.value<He.length-1||t.value<r.value),i=P(()=>n.value>1||t.value>0);return{clicks:t,clicksElements:l,clicksTotal:r,hasNext:o,hasPrev:i}}const Gy=["id"],Ii=we({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(t,{emit:s}){const n=t,a=Rt(n,"clicksElements",s),l=P(()=>({height:`${Nr}px`,width:`${rs}px`})),r=It();Ms(()=>import("./DrawingPreview.687a9318.js"),[]).then(u=>r.value=u.default);const o=P(()=>n.clicks),i=Xu(o,n.nav.currentRoute,n.nav.currentPage),c=P(()=>`${n.route.path.toString().padStart(3,"0")}-${(o.value+1).toString().padStart(2,"0")}`);return mt(j,Ce({nav:{...n.nav,...i},configs:xe,themeConfigs:P(()=>xe.themeConfig)})),(u,p)=>{var m;return k(),B("div",{id:b(c),class:"slide-container",style:st(b(l))},[O(b(Ju)),O(b(Hr),{is:(m=t.route)==null?void 0:m.component,"clicks-elements":b(a),"onUpdate:clicks-elements":p[0]||(p[0]=h=>Me(a)?a.value=h:null),clicks:b(o),"clicks-disabled":!1,class:Ge(b(qr)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),b(r)?(k(),H(b(r),{key:0,page:+t.route.path},null,8,["page"])):ue("v-if",!0),O(b(Qu))],12,Gy)}}}),Ry=we({__name:"PrintSlide",props:{route:null},setup(t){var r;const s=t;R(j);const n=Ce(((r=s.route.meta)==null?void 0:r.__clicksElements)||[]),a=P(()=>s.route),l=Yu(a);return(o,i)=>(k(),B(Ae,null,[O(Ii,{"clicks-elements":n,"onUpdate:clicks-elements":i[0]||(i[0]=c=>n=c),clicks:0,nav:b(l),route:b(a)},null,8,["clicks-elements","nav","route"]),b(An)?ue("v-if",!0):(k(!0),B(Ae,{key:0},Vn(n.length,c=>(k(),H(Ii,{key:c,clicks:c,nav:b(l),route:b(a)},null,8,["clicks","nav","route"]))),128))],64))}}),Zy={id:"print-content"},Ny=we({__name:"PrintContainer",props:{width:null},setup(t){const s=t;R(j);const n=P(()=>s.width),a=P(()=>s.width/ls),l=P(()=>n.value/a.value),r=P(()=>l.value<ls?n.value/rs:a.value*ls/rs),o=He.slice(0,-1),i=P(()=>({"select-none":!xe.selectable,"slidev-code-line-numbers":xe.lineNumbers}));return mt(wu,r),(c,u)=>(k(),B("div",{id:"print-container",class:Ge(b(i))},[e("div",Zy,[(k(!0),B(Ae,null,Vn(b(o),p=>(k(),H(Ry,{key:p.path,route:p},null,8,["route"]))),128))]),Dt(c.$slots,"controls")],2))}});const Iy=we({__name:"Print",setup(t){R(j);function s(n,{slots:a}){if(a.default)return rt("style",a.default())}return qn(()=>{Vr?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,a)=>(k(),B(Ae,null,[O(s,null,{default:S(()=>[d(" @page { size: "+_t(b(rs))+"px "+_t(b(Nr))+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:st(b(xu))},[O(Ny,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:b(ks).width.value},null,8,["style","width"])],4)],64))}});const Dy={class:"slidev-layout end"},Fy={__name:"end",setup(t){return R(j),(s,n)=>(k(),B("div",Dy," END "))}},jy=Wu(Fy,[["__scopeId","data-v-ab32435f"]]),qy={key:0},Hy=["href"],Vy=we({__name:"TextWithOptionalLink",props:{link:null,text:null},setup(t){return R(j),(s,n)=>t.link?(k(),B("a",{key:1,href:t.link,rel:"noreferrer",target:"_blank"},_t(t.text),9,Hy)):(k(),B("span",qy,_t(t.text),1))}});function Di(t){return t.startsWith("/")?"/"+t.slice(1):t}function By(t,s=!1){const n=t&&["#","rgb","hsl"].some(l=>t.indexOf(l)===0),a={background:n?t:void 0,backgroundImage:n?void 0:t?s?`linear-gradient(#0009, #0009), url(${Di(t)})`:`url("${Di(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const Uy={class:"my-auto w-full"},Ky={key:0,class:"absolute bottom-12"},Wy={key:0},Qy={key:1,class:"bottom-0 fixed font-extralight mb-1 mr-2 right-0 text-xs"},Bn=we({__name:"cover",props:{coverAuthor:null,coverAuthorUrl:null,coverBackgroundUrl:null,coverBackgroundSource:null,coverBackgroundSourceUrl:null,coverDate:{default:new Date().toLocaleDateString()}},setup(t){const{coverBackgroundUrl:s}=t;R(j);const n=P(()=>By(s,!0));return(a,l)=>{const r=Vy;return k(),B("div",{class:"slidev-layout cover",style:st(b(n))},[e("div",Uy,[Dt(a.$slots,"default")]),t.coverAuthor||t.coverDate?(k(),B("div",Ky,[O(r,{link:t.coverAuthorUrl,text:t.coverAuthor},null,8,["link","text"]),t.coverDate?(k(),B("span",Wy,_t(t.coverAuthor&&t.coverDate?`, ${t.coverDate}`:t.coverDate),1)):ue("v-if",!0)])):ue("v-if",!0),t.coverBackgroundSource?(k(),B("div",Qy,[O(r,{link:t.coverBackgroundSourceUrl,text:t.coverBackgroundSource},null,8,["link","text"])])):ue("v-if",!0)],4)}}}),Jy=e("h1",null,"From AlphaGo to MuZero",-1),Yy=e("h2",null,"An Introduction to Deepmind\u2019s boardgame AI",-1),Xy=e("br",null,null,-1),e_=e("p",null,"Jia-peng Dai",-1),t_={__name:"1",setup(t){const s={theme:"academic",coverDate:""};return R(j),(n,a)=>{const l=Le("font");return k(),H(Bn,ae(se(s)),{default:S(()=>[Jy,Yy,Xy,e_,O(l,{class:"text-sm"},{default:S(()=>[d("2022/11")]),_:1})]),_:1},16)}}},s_="/[0.Overall]-01.AlphaGo_to_MuZero.jpg",n_={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},gt=we({__name:"two-cols",props:{class:{type:String}},setup(t){const s=t;return R(j),(n,a)=>(k(),B("div",n_,[e("div",{class:Ge(["col-left",s.class])},[Dt(n.$slots,"default")],2),e("div",{class:Ge(["col-right",s.class])},[Dt(n.$slots,"right")],2)]))}}),a_=e("h1",null,"Contents",-1),l_=e("ol",null,[e("li",null,[e("p",null,"AlphaGo (2016)")]),e("li",null,[e("p",null,"AlphaGo Zero (2017)")]),e("li",null,[e("p",null,"AlphaZero (2018)")]),e("li",null,[e("p",null,"MuZero (2020)")])],-1),r_=e("img",{src:s_,class:"h-110 mx-auto"},null,-1),o_={__name:"2",setup(t){const s={layout:"two-cols",srcSequence:"./pages/contents.md"};return R(j),(n,a)=>(k(),H(gt,ae(se(s)),{right:S(l=>[r_]),default:S(()=>[a_,l_]),_:1},16))}},i_="/[1.AlphaGo]-01.title.png",c_=e("h1",null,"1. AlphaGo (2016)",-1),u_=e("br",null,null,-1),p_=e("img",{src:i_,class:"shadow-lg mx-auto w-220"},null,-1),m_=e("p",{class:"text-sm"},[e("p",null,[e("a",{href:"https://www.deepmind.com/publications/mastering-the-game-of-go-with-deep-neural-networks-tree-search",target:"_blank",rel:"noopener"},"Homepage"),d(" & "),e("a",{href:"https://mnomqrns7c.feishu.cn/file/boxcnUhiHrgvGlFlraNwpoJMCVq",target:"_blank",rel:"noopener"},"Online PDF")])],-1),h_={__name:"3",setup(t){const s={layout:"cover",coverDate:"",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>(k(),H(Bn,ae(se(s)),{default:S(()=>[c_,u_,p_,m_]),_:1},16))}},d_="/[1.AlphaGo]-02.Tree_search_in_go.jpg",f_=e("h1",null,"Tree search in Go",-1),g_=e("br",null,null,-1),v_=e("li",null,[e("p",null,"There are theoretically 361! possible situations in a single game. The key to the problem is to reduce the complexity (e.g. Alpha-Beta Pruning, MCTS).")],-1),y_=e("p",null,[e("br"),e("br")],-1),__=e("img",{src:d_,class:"mx-auto h-75"},null,-1),b_={__name:"4",setup(t){const s={layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(gt,ae(se(s)),{right:S(r=>[y_,__]),default:S(()=>[f_,g_,e("ul",null,[e("li",null,[e("p",null,[d("Go is a zero-sum game played turn-by-turn on a 19x19 board. The searching process in Go could be perfectly described as a "),O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("tree search")]),_:1}),d(" algorithm.")]),ue(` - Nodes represent states; Edges represent actions go from one state to another. 
  - The goal is to find the best path to follow in order to win the game.  `)]),v_])]),_:1},16)}}},ep="/[1.AlphaGo]-03-0.Overall_training_process.png",w_={class:"slidev-layout default"},Te={__name:"default",setup(t){return R(j),(s,n)=>(k(),B("div",w_,[Dt(s.$slots,"default")]))}},x_=e("h1",null,"Training pipeline in AlphaGo",-1),$_=e("img",{src:ep,class:"h-90 mx-auto"},null,-1),k_=e("p",{class:"text-sm text-center"}," Two-stage training pipeline ",-1),A_={__name:"5",setup(t){const s={srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[x_,$_,k_]),_:1},16))}},M_="/[1.AlphaGo]-03-1.SL_training_process.png",S_=e("h2",null,"Phase 1: Supervised Learning",-1),T_=e("br",null,null,-1),E_=e("li",null,[e("p",null,[d("Learn from "),e("u",null,"human expert positions data"),d(" to predict the distribution of human expert moves (Classification).")])],-1),P_=e("br",null,null,-1),z_=e("img",{src:M_,class:"mx-auto h-95"},null,-1),O_=e("p",{class:"text-xs text-center"}," Supervised learning process ",-1),C_={__name:"6",setup(t){const s={layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(gt,ae(se(s)),{right:S(r=>[P_,z_,O_]),default:S(()=>[S_,T_,e("ul",null,[e("li",null,[e("p",null,[d("Train 2 policy networks: "),O(l,{class:"text-red-600"},{default:S(()=>[d("Rollout policy")]),_:1}),d(" & "),O(l,{class:"text-red-600"},{default:S(()=>[d("SL policy network")]),_:1}),d(".")])]),E_,e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("SL policy network")]),_:1}),d(": larger, more accurate but slower. Used in RL stage.")]),e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Rollout policy")]),_:1}),d(": smaller, faster but less accurate. Using smaller pattern features. Used in MCTS.")])])]),_:1},16)}}},L_="/[1.AlphaGo]-03-2.RL_training_process.png",G_=e("h2",null,"Phase 2: Reinforcement Learning",-1),R_=e("br",null,null,-1),Z_=e("p",null,[d("Using "),e("strong",null,"Policy Iteration"),d(":")],-1),N_=e("br",null,null,-1),I_=e("img",{src:L_,class:"mx-auto h-95"},null,-1),D_=e("p",{class:"text-xs text-center"}," Reinforcement learning process ",-1),F_={__name:"7",setup(t){const s={layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(gt,ae(se(s)),{right:S(r=>[N_,I_,D_]),default:S(()=>[G_,R_,Z_,e("ol",null,[e("li",null,[e("p",null,[d("Policy improvement ("),O(l,{class:"text-red-600"},{default:S(()=>[d("Policy network")]),_:1}),d(");")])]),e("li",null,[e("p",null,[d("Policy evaluation ("),O(l,{class:"text-red-600"},{default:S(()=>[d("Value network")]),_:1}),d(").")])])])]),_:1},16)}}},tp="/[1.AlphaGo]-04.model_architecture.png",j_=e("h2",null,"Phase 2: Reinforcement Learning",-1),q_=e("br",null,null,-1),H_=e("li",null,[e("p",null,[e("strong",null,"Self-play"),d(": play games between current policy network and a "),e("u",null,"randomly selected previous iteration"),d(" of the policy network. Stabilize training by preventing overfitting to the current policy.")])],-1),V_=e("li",null,[e("p",null,[d("Every 500 iterations, add the current parameters "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"\u03C1")]),e("annotation",{encoding:"application/x-tex"},"\\rho")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal"},"\u03C1")])])]),d(" to the opponent pool.")])],-1),B_=e("br",null,null,-1),U_=e("img",{src:tp,class:"mx-auto h-95"},null,-1),K_=e("p",{class:"text-xs text-center"}," Network Architecture ",-1),W_={__name:"8",setup(t){const s={layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(gt,ae(se(s)),{right:S(r=>[B_,U_,K_]),default:S(()=>[j_,q_,O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Policy network")]),_:1}),d(": "),e("ul",null,[e("li",null,[e("p",null,[d("initialized as the "),O(l,{class:"text-red-600"},{default:S(()=>[d("SL policy network")]),_:1}),d(". The output is the action distribution according to the board state.")])]),H_,V_])]),_:1},16)}}},Q_=e("h2",null,"Phase 2: Reinforcement Learning",-1),J_=e("br",null,null,-1),Y_=e("p",{class:"break"},null,-1),X_=e("ul",null,[e("li",null,[d("estimate a "),e("u",null,"value function"),d(),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msup",null,[e("mi",null,"v"),e("mi",null,"p")]),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"v^p(s)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.6644em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"p")])])])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},")")])])]),d(" that predicts the outcome "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"z"),e("mo",null,"="),e("mo",null,"\xB1"),e("mn",null,"1")]),e("annotation",{encoding:"application/x-tex"},"z=\\pm1")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"\xB1"),e("span",{class:"mord"},"1")])])]),d(" from positions of games played by using policy "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"p")]),e("annotation",{encoding:"application/x-tex"},"p")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal"},"p")])])]),d(" for both players (Regression).")])],-1),eb=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("msup",null,[e("mi",null,"v"),e("mi",null,"p")]),e("mo",null,"="),e("mi",{mathvariant:"double-struck"},"E"),e("mo",{stretchy:"false"},"["),e("msub",null,[e("mi",null,"z"),e("mi",null,"t")]),e("mi",{mathvariant:"normal"},"\u2223"),e("msub",null,[e("mi",null,"s"),e("mi",null,"t")]),e("mo",null,"="),e("mi",null,"s"),e("mo",{separator:"true"},","),e("msub",null,[e("mi",null,"a"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"\u2026"),e("mi",null,"T")])]),e("mo",null,"\u223C"),e("mi",null,"p"),e("mo",{stretchy:"false"},"]")]),e("annotation",{encoding:"application/x-tex"},"v^p = \\mathbb{E}[z_t |s_t=s, a_{t\\dots T}\\sim p] ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7144em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.7144em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"p")])])])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathbb"},"E"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mord"},"\u2223"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"a"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3283em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"minner mtight"},"\u2026"),e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"T")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"\u223C"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mclose"},"]")])])])])],-1),tb=e("ul",null,[e("li",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"z"),e("mi",null,"t")]),e("mo",null,"="),e("mo",null,"\xB1"),e("mn",null,"1")]),e("annotation",{encoding:"application/x-tex"},"z_t=\\pm1")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"\xB1"),e("span",{class:"mord"},"1")])])]),d(" is the "),e("u",null,"terminal reward"),d(" at the end of the game from the perspective of the current player at time step "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"t")]),e("annotation",{encoding:"application/x-tex"},"t")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6151em"}}),e("span",{class:"mord mathnormal"},"t")])])]),d(". "),e("u",null,"Estimated by the MCTS"),d(".")])],-1),sb=e("br",null,null,-1),nb=e("img",{src:tp,class:"mx-auto h-95"},null,-1),ab=e("p",{class:"text-xs text-center"}," Network Architecture ",-1),lb={__name:"9",setup(t){const s={layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(gt,ae(se(s)),{right:S(r=>[sb,nb,ab]),default:S(()=>[Q_,J_,O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Value network")]),_:1}),d(":"),Y_,X_,eb,tb]),_:1},16)}}},rb="/[1.AlphaGo]-05.input_feature.png",ob=e("h1",null,"Neural Network Architecture",-1),ib=e("ul",null,[e("li",null,"13-layer CNN"),e("li",null,"input feature/state size: 19x19x48"),e("li",null,[d("The rules of Go are "),e("u",null,"invariant under rotation and reflection"),d(". AlphaGo exploits this symmetrics by passing a mini-batch of all 8 positions into the policy network or value network and computed in parallel.")])],-1),cb=e("br",null,null,-1),ub=e("img",{src:rb,class:"border h-65 mx-auto"},null,-1),pb={__name:"10",setup(t){const s={srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[ob,ib,cb,ub]),_:1},16))}},mb="/[1.AlphaGo]-06-0.MCTS.png",hb=e("br",null,null,-1),db=e("li",null,[e("p",null,"MCTS is used to simulate potential actions to the best results without traversing every node in the search tree.")],-1),fb=e("br",null,null,-1),gb=e("img",{src:mb,class:"border h-60 mx-auto"},null,-1),vb={__name:"11",setup(t){const s={srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[e("h1",null,[d("Monte Carlo tree search ("),O(l,{class:"text-red-600"},{default:S(()=>[d("MCTS")]),_:1}),d(") in AlphaGo")]),hb,e("ul",null,[e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Monte Carlo method")]),_:1}),d(": uses random sampling to estimate the expected outcomes for deterministic problems.")]),db]),fb,gb]),_:1},16)}}},yb="/[1.AlphaGo]-06-1.MCTS_selection.png",_b=e("h2",null,"Step 1: Selection",-1),bb=e("br",null,null,-1),wb=e("p",null,[d("Each simulation starts from the root node to the "),e("u",null,"leaf node"),d(" (unvisited, non-terminal node).")],-1),xb=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"a"),e("mi",null,"t")]),e("mo",null,"="),e("munder",null,[e("mrow",null,[e("mi",{mathvariant:"normal"},"arg\u2009max"),e("mo",null,"\u2061")]),e("mi",null,"a")]),e("mo",{stretchy:"false"},"("),e("mi",null,"Q"),e("mo",{stretchy:"false"},"("),e("msub",null,[e("mi",null,"s"),e("mi",null,"t")]),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")"),e("mo",null,"+"),e("mi",null,"u"),e("mo",{stretchy:"false"},"("),e("msub",null,[e("mi",null,"s"),e("mi",null,"t")]),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"a_t = \\argmax_a (Q(s_t,a) + u(s_t, a)) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"a"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.6444em","vertical-align":"-0.8944em"}}),e("span",{class:"mop op-limits"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4306em"}},[e("span",{style:{top:"-2.2056em","margin-left":"0em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"a")])]),e("span",{style:{top:"-3em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",null,[e("span",{class:"mop"},[e("span",{class:"mord mathrm",style:{"margin-right":"0.01389em"}},"arg"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathrm"},"max")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8944em"}},[e("span")])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"u"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},"))")])])])])],-1),$b=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"u"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")"),e("mo",null,"\u221D"),e("mfrac",null,[e("mrow",null,[e("mi",null,"P"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")")]),e("mrow",null,[e("mn",null,"1"),e("mo",null,"+"),e("mi",null,"N"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")")])])]),e("annotation",{encoding:"application/x-tex"},"u(s,a) \\propto \\frac{P(s,a)}{1+N(s,a)} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"u"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"\u221D"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"2.363em","vertical-align":"-0.936em"}}),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.427em"}},[e("span",{style:{top:"-2.314em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord"},"1"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")")])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.936em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})])])])])])],-1),kb=e("br",null,null,-1),Ab=e("img",{src:yb,class:"mx-auto h-95"},null,-1),Mb=e("p",{class:"text-xs text-center"}," MCTS selection ",-1),Sb={__name:"12",setup(t){const s={layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>(k(),H(gt,ae(se(s)),{right:S(l=>[kb,Ab,Mb]),default:S(()=>[_b,bb,wb,xb,$b]),_:1},16))}},Tb="/[1.AlphaGo]-06-2.MCTS_expansion.png",Eb=e("h2",null,"Step 2: Expansion",-1),Pb=e("br",null,null,-1),zb=e("p",null,"When visiting to a leaf node, add new node to the search tree.",-1),Ob=e("p",null,"Store the prior probability of the node.",-1),Cb=e("br",null,null,-1),Lb=e("img",{src:Tb,class:"mx-auto h-95"},null,-1),Gb=e("p",{class:"text-xs text-center"}," MCTS expansion ",-1),Rb={__name:"13",setup(t){const s={layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>(k(),H(gt,ae(se(s)),{right:S(l=>[Cb,Lb,Gb]),default:S(()=>[Eb,Pb,zb,Ob]),_:1},16))}},Zb="/[1.AlphaGo]-06-3.MCTS_evaluation.png",Nb=e("h2",null,"Step 3: Evaluation",-1),Ib=e("br",null,null,-1),Db=e("p",null,"The leaf node is evaluated in two ways:",-1),Fb=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"v"),e("mi",null,"\u03B8")]),e("mo",{stretchy:"false"},"("),e("msub",null,[e("mi",null,"s"),e("mi",null,"L")]),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"v_\\theta(s_L)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3361em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"\u03B8")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3283em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"L")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mclose"},")")])])],-1),jb=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"z"),e("mi",null,"L")]),e("mo",null,"="),e("mo",null,"\xB1"),e("mn",null,"1")]),e("annotation",{encoding:"application/x-tex"},"z_L=\\pm1")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3283em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"L")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"\xB1"),e("span",{class:"mord"},"1")])])],-1),qb=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"p"),e("mi",null,"\u03C0")])]),e("annotation",{encoding:"application/x-tex"},"p_\\pi")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"p"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.1514em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"\u03C0")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])],-1),Hb=e("br",null,null,-1),Vb=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"V"),e("mo",{stretchy:"false"},"("),e("msub",null,[e("mi",null,"s"),e("mi",null,"L")]),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("mo",{stretchy:"false"},"("),e("mn",null,"1"),e("mo",null,"\u2212"),e("mi",null,"\u03BB"),e("mo",{stretchy:"false"},")"),e("msub",null,[e("mi",null,"v"),e("mi",null,"\u03B8")]),e("mo",{stretchy:"false"},"("),e("msub",null,[e("mi",null,"s"),e("mi",null,"L")]),e("mo",{stretchy:"false"},")"),e("mo",null,"+"),e("mi",null,"\u03BB"),e("msub",null,[e("mi",null,"z"),e("mi",null,"L")])]),e("annotation",{encoding:"application/x-tex"},"V(s_L) = (1-\\lambda)v_\\theta (s_L) + \\lambda z_L ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3283em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"L")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"1"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"\u03BB"),e("span",{class:"mclose"},")"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3361em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"\u03B8")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3283em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"L")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),e("span",{class:"mord mathnormal"},"\u03BB"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3283em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"L")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])])])],-1),Bb=e("br",null,null,-1),Ub=e("img",{src:Zb,class:"mx-auto h-95"},null,-1),Kb=e("p",{class:"text-xs text-center"}," MCTS evaluation ",-1),Wb={__name:"14",setup(t){const s={layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(gt,ae(se(s)),{right:S(r=>[Bb,Ub,Kb]),default:S(()=>[Nb,Ib,Db,e("ol",null,[e("li",null,[e("p",null,[d("by the "),O(l,{class:"text-red-600"},{default:S(()=>[d("Value network")]),_:1}),d(),Fb])]),e("li",null,[e("p",null,[d("by the outcome "),jb,d(" of a random rollout until terminal step using the "),O(l,{class:"text-red-600"},{default:S(()=>[d("fast rollout policy")]),_:1}),d(),qb,d(".")])])]),Hb,Vb]),_:1},16)}}},Qb="/[1.AlphaGo]-06-4.MCTS_backup.png",Jb=e("h2",null,"Step 4: Backup",-1),Yb=e("p",null,"At the end of simulation, the action values and visit counts of all traversed edges are updated.",-1),Xb=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"N"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("munderover",null,[e("mo",null,"\u2211"),e("mrow",null,[e("mi",null,"i"),e("mo",null,"="),e("mn",null,"1")]),e("mi",null,"N")]),e("mn",null,"1"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{separator:"true"},","),e("mi",null,"i"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"N(s,a) = \\sum_{i=1}^N 1(s,a,i) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"3.106em","vertical-align":"-1.2777em"}}),e("span",{class:"mop op-limits"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.8283em"}},[e("span",{style:{top:"-1.8723em","margin-left":"0em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"i"),e("span",{class:"mrel mtight"},"="),e("span",{class:"mord mtight"},"1")])])]),e("span",{style:{top:"-3.05em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",null,[e("span",{class:"mop op-symbol large-op"},"\u2211")])]),e("span",{style:{top:"-4.3em","margin-left":"0em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.2777em"}},[e("span")])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"i"),e("span",{class:"mclose"},")")])])])])],-1),ew=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"Q"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("mfrac",null,[e("mn",null,"1"),e("mrow",null,[e("mi",null,"N"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")")])]),e("munderover",null,[e("mo",null,"\u2211"),e("mrow",null,[e("mi",null,"i"),e("mo",null,"="),e("mn",null,"1")]),e("mi",null,"N")]),e("mn",null,"1"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{separator:"true"},","),e("mi",null,"i"),e("mo",{stretchy:"false"},")"),e("mi",null,"V"),e("mo",{stretchy:"false"},"("),e("msubsup",null,[e("mi",null,"s"),e("mi",null,"L"),e("mi",null,"i")]),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"3.106em","vertical-align":"-1.2777em"}}),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.3214em"}},[e("span",{style:{top:"-2.314em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")")])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord"},"1")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.936em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mop op-limits"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.8283em"}},[e("span",{style:{top:"-1.8723em","margin-left":"0em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"i"),e("span",{class:"mrel mtight"},"="),e("span",{class:"mord mtight"},"1")])])]),e("span",{style:{top:"-3.05em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",null,[e("span",{class:"mop op-symbol large-op"},"\u2211")])]),e("span",{style:{top:"-4.3em","margin-left":"0em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.2777em"}},[e("span")])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"i"),e("span",{class:"mclose"},")"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8747em"}},[e("span",{style:{top:"-2.453em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"L")])]),e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"i")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.247em"}},[e("span")])])])])]),e("span",{class:"mclose"},")")])])])])],-1),tw=e("br",null,null,-1),sw=e("img",{src:Qb,class:"mx-auto h-95"},null,-1),nw=e("p",{class:"text-xs text-center"}," MCTS backup ",-1),aw={__name:"15",setup(t){const s={layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>(k(),H(gt,ae(se(s)),{right:S(l=>[tw,sw,nw]),default:S(()=>[Jb,Yb,Xb,ew]),_:1},16))}},lw=e("h1",null,"Training target",-1),rw=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"a")]),e("annotation",{encoding:"application/x-tex"},"a")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal"},"a")])])],-1),ow=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"s")]),e("annotation",{encoding:"application/x-tex"},"s")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal"},"s")])])],-1),iw=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",{mathvariant:"normal"},"\u0394"),e("mi",null,"\u03C3"),e("mo",null,"\u221D"),e("mfrac",null,[e("mrow",null,[e("mi",{mathvariant:"normal"},"\u2202"),e("mi",null,"log"),e("mo",null,"\u2061"),e("msub",null,[e("mi",null,"P"),e("mi",null,"\u03C3")]),e("mo",{stretchy:"false"},"("),e("mi",null,"a"),e("mi",{mathvariant:"normal"},"\u2223"),e("mi",null,"s"),e("mo",{stretchy:"false"},")")]),e("mrow",null,[e("mi",{mathvariant:"normal"},"\u2202"),e("mi",null,"\u03C3")])])]),e("annotation",{encoding:"application/x-tex"},"\\Delta \\sigma \\propto \\frac{\\partial \\log P_{\\sigma}(a|s)}{\\partial \\sigma} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord"},"\u0394"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C3"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"\u221D"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"2.113em","vertical-align":"-0.686em"}}),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.427em"}},[e("span",{style:{top:"-2.314em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C3")])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mop"},[d("lo"),e("span",{style:{"margin-right":"0.01389em"}},"g")]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.1514em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"\u03C3")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mord"},"\u2223"),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},")")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.686em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})])])])])])],-1),cw=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",{mathvariant:"normal"},"\u0394"),e("mi",null,"\u03C1"),e("mo",null,"\u221D"),e("mfrac",null,[e("mrow",null,[e("mi",{mathvariant:"normal"},"\u2202"),e("mi",null,"log"),e("mo",null,"\u2061"),e("msub",null,[e("mi",null,"P"),e("mi",null,"\u03C1")]),e("mo",{stretchy:"false"},"("),e("mi",null,"a"),e("mi",{mathvariant:"normal"},"\u2223"),e("mi",null,"s"),e("mo",{stretchy:"false"},")")]),e("mrow",null,[e("mi",{mathvariant:"normal"},"\u2202"),e("mi",null,"\u03C1")])]),e("msub",null,[e("mi",null,"z"),e("mi",null,"t")])]),e("annotation",{encoding:"application/x-tex"},"\\Delta \\rho \\propto \\frac{\\partial \\log P_{\\rho}(a|s)}{\\partial \\rho} z_t ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},"\u0394"),e("span",{class:"mord mathnormal"},"\u03C1"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"\u221D"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"2.3074em","vertical-align":"-0.8804em"}}),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.427em"}},[e("span",{style:{top:"-2.314em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),e("span",{class:"mord mathnormal"},"\u03C1")])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mop"},[d("lo"),e("span",{style:{"margin-right":"0.01389em"}},"g")]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.1514em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"\u03C1")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2861em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mord"},"\u2223"),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},")")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8804em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})]),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])])])],-1),uw=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"v"),e("mi",null,"\u03B8")]),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"v_\\theta(s)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3361em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"\u03B8")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},")")])])],-1),pw=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"z")]),e("annotation",{encoding:"application/x-tex"},"z")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z")])])],-1),mw=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",{mathvariant:"normal"},"\u0394"),e("mi",null,"\u03B8"),e("mo",null,"\u221D"),e("mfrac",null,[e("mrow",null,[e("mi",{mathvariant:"normal"},"\u2202"),e("msub",null,[e("mi",null,"v"),e("mi",null,"\u03B8")]),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{stretchy:"false"},")")]),e("mrow",null,[e("mi",{mathvariant:"normal"},"\u2202"),e("mi",null,"\u03B8")])]),e("mo",{stretchy:"false"},"("),e("mi",null,"z"),e("mo",null,"\u2212"),e("msub",null,[e("mi",null,"v"),e("mi",null,"\u03B8")]),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{stretchy:"false"},")"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"\\Delta \\theta \\propto \\frac{\\partial v_\\theta(s)}{\\partial \\theta} (z - v_\\theta(s)) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord"},"\u0394"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"\u03B8"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"\u221D"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"2.113em","vertical-align":"-0.686em"}}),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.427em"}},[e("span",{style:{top:"-2.314em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"\u03B8")])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3361em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"\u03B8")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},")")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.686em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3361em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"\u03B8")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},"))")])])])])],-1),hw=e("div",{class:"group"},[e("a",{href:"#",class:"top-10 right-15 absolute group-hover:font-semibold"},"networks"),e("img",{src:ep,class:"h-70 invisible group-hover:visible top-15 right-18 absolute border-2"})],-1),dw={__name:"16",setup(t){const s={srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[lw,e("ul",null,[e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Rollout policy network")]),_:1}),d(" & "),O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("SL policy network")]),_:1}),d(": maximize the likelihood of the human move "),rw,d(" selected in state "),ow,d(".")])]),iw,e("ul",null,[e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("RL policy network")]),_:1}),d(": maximize the expected outcome of the selected move.")])]),cw,e("ul",null,[e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Value network")]),_:1}),d(": minimize the mean squared error (MSE) between the predicted value "),uw,d(", and the corresponding outcome "),pw,d(".")])]),mw,hw]),_:1},16)}}},fw="/[1.AlphaGo]-07.results.png",gw=e("h1",null,"Results",-1),vw=e("br",null,null,-1),yw=e("img",{src:fw,class:"h-80 mx-auto"},null,-1),_w=e("p",{class:"text-xs text-center"},[d(" AlphaGo won "),e("b",null,"Fan Hui"),d(", the winner of 2013, 2014 and 2015 European Go championships, "),e("u",null,"by 5:0"),d(" in a formal five-game match over 5-9 October 2015. ")],-1),bw={__name:"17",setup(t){const s={srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[gw,vw,yw,_w]),_:1},16))}},ww="/[1.AlphaGo]-08.computing_expenses.png",xw=e("h1",null,"Computing Expenses",-1),$w=e("ul",null,[e("li",null,[e("strong",null,"Rollout policy"),d(" (MCTS): approximately 1,000 simulations per second per CPU thread on an empty board.")]),e("li",null,[e("strong",null,"SL policy classification"),d(": around 3 weeks for 340 million training steps, using 50 GPUs.")]),e("li",null,[e("strong",null,"RL policy network"),d(": trained for 10,000 mini-batches of 128 games, using 50 GPUs, for one day.")]),e("li",null,[e("strong",null,"Value network"),d(": trained for 50 million mini-batches of 32 positions, using 50 GPUs, for one week.")])],-1),kw=e("br",null,null,-1),Aw=e("img",{src:ww,class:"border h-65 mx-auto"},null,-1),Mw={__name:"18",setup(t){const s={srcSequence:"./pages/1. AlphaGo.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[xw,$w,kw,Aw]),_:1},16))}},Sw="/[2.AlphaGo_Zero]-01.title.png",Tw=e("h1",null,"2. AlphaGo Zero (2017)",-1),Ew=e("br",null,null,-1),Pw=e("img",{src:Sw,class:"shadow-lg mx-auto w-220"},null,-1),zw=e("p",{class:"text-sm"},[e("p",null,[e("a",{href:"https://www.deepmind.com/blog/alphago-zero-starting-from-scratch",target:"_blank",rel:"noopener"},"Homepage"),d(" & "),e("a",{href:"https://mnomqrns7c.feishu.cn/file/boxcnRiLn3v6dKkklJ8yzO8uinc",target:"_blank",rel:"noopener"},"Online PDF")])],-1),Ow={__name:"19",setup(t){const s={layout:"cover",coverDate:"",srcSequence:"./pages/2. AlphaGo Zero.md"};return R(j),(n,a)=>(k(),H(Bn,ae(se(s)),{default:S(()=>[Tw,Ew,Pw,zw]),_:1},16))}},Cw=e("h1",null,"How does it differ from AlphaGo?",-1),Lw={__name:"20",setup(t){const s={srcSequence:"./pages/2. AlphaGo Zero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[Cw,e("ol",null,[e("li",null,[e("p",null,[d("AlphaGo Zero is "),O(l,{class:"text-red-600"},{default:S(()=>[d("trained solely by self-play")]),_:1}),d(", without any supervision or use of human data.")])]),e("li",null,[e("p",null,[d("AlphaGo Zero "),O(l,{class:"text-red-600"},{default:S(()=>[d("only uses the black and white stones")]),_:1}),d(" from the Go board as its input.")])]),e("li",null,[e("p",null,[d("AlphaGo Zero uses a "),O(l,{class:"text-red-600"},{default:S(()=>[d("single neural network")]),_:1}),d(", rather than separate policy and value networks.")])]),e("li",null,[e("p",null,[d("AlphaGo Zero "),O(l,{class:"text-red-600"},{default:S(()=>[d("does not use \u201Crollouts\u201D")]),_:1}),d(" to evaluate positions and sample moves. Instead, it uses a simpler tree search that relies upon this single neural network.")])])])]),_:1},16)}}},sp="/[2.AlphaGo_Zero]-02-0.self-play.png",Gw=e("h1",null,"Self-play training pipeline",-1),Rw={class:"text-sm"},Zw=e("u",null,"below a resignation threshold",-1),Nw=e("u",null,"exceeds a maximum length",-1),Iw=e("li",null,[e("p",null,[d("After each iteration of training, the performance of the new player was measured against the best player; if the new player "),e("u",null,"won by a margin of 55%"),d(", then it replaced the best player")])],-1),Dw=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"z"),e("mi",null,"t")]),e("mo",null,"="),e("mo",null,"\xB1"),e("mn",null,"1")]),e("annotation",{encoding:"application/x-tex"},"z_t = \\pm1 ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"\xB1"),e("span",{class:"mord"},"1")])])])])],-1),Fw=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mo",{stretchy:"false"},"("),e("mi",{mathvariant:"bold"},"p"),e("mo",{separator:"true"},","),e("mi",null,"v"),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("msub",null,[e("mi",null,"f"),e("mi",null,"\u03B8")]),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"(\\mathbf{p}, v) = f_\\theta(s) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathbf"},"p"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3361em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"\u03B8")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},")")])])])])],-1),jw=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"l"),e("mo",null,"="),e("mo",{stretchy:"false"},"("),e("mi",null,"z"),e("mo",null,"\u2212"),e("mi",null,"v"),e("msup",null,[e("mo",{stretchy:"false"},")"),e("mn",null,"2")]),e("mo",null,"\u2212"),e("msup",null,[e("mi",{mathvariant:"bold"},"\u03C0"),e("mi",null,"T")]),e("mi",null,"log"),e("mo",null,"\u2061"),e("mi",{mathvariant:"bold"},"p"),e("mo",null,"+"),e("mi",null,"c"),e("mi",{mathvariant:"normal"},"\u2223"),e("mi",{mathvariant:"normal"},"\u2223"),e("mi",null,"\u03B8"),e("mi",{mathvariant:"normal"},"\u2223"),e("msup",null,[e("mi",{mathvariant:"normal"},"\u2223"),e("mn",null,"2")])]),e("annotation",{encoding:"application/x-tex"},"l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2 ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"mclose"},[e("span",{class:"mclose"},")"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8641em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.0858em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C0"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8913em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"T")])])])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mop"},[d("lo"),e("span",{style:{"margin-right":"0.01389em"}},"g")]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathbf"},"p"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"c"),e("span",{class:"mord"},"\u2223\u2223"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"\u03B8"),e("span",{class:"mord"},"\u2223"),e("span",{class:"mord"},[e("span",{class:"mord"},"\u2223"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8641em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])])])])])])])])])])],-1),qw=e("br",null,null,-1),Hw=e("img",{src:sp,class:"mx-auto h-90"},null,-1),Vw=e("p",{class:"text-xs text-center"}," Self-training pipeline ",-1),Bw={__name:"21",setup(t){const s={layout:"two-cols",srcSequence:"./pages/2. AlphaGo Zero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(gt,ae(se(s)),{right:S(r=>[qw,Hw,Vw]),default:S(()=>[Gw,e("div",Rw,[e("ul",null,[e("li",null,[e("p",null,[d("A game terminates "),O(l,{class:"text-red-600"},{default:S(()=>[d("when both players pass")]),_:1}),d(", when the search value drops "),Zw,d(" or when the game "),Nw,d(".")])]),Iw]),Dw,Fw,jw])]),_:1},16)}}},Uw="/[2.AlphaGo_Zero]-03.MCTS.png",Kw=e("h1",null,"MCTS in AlphaGo Zero",-1),Ww=e("u",null,"Without random rollouts",-1),Qw=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"V"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"V(s)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},")")])])],-1),Jw=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"s")]),e("annotation",{encoding:"application/x-tex"},"s")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal"},"s")])])],-1),Yw=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mo",{stretchy:"false"},"("),e("mi",null,"P"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mo",null,"\u22C5"),e("mo",{stretchy:"false"},")"),e("mo",{separator:"true"},","),e("mi",null,"V"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{stretchy:"false"},")"),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("msub",null,[e("mi",null,"f"),e("mi",null,"\u03B8")]),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"(P(s,\\cdot), V(s)) = f_\\theta(s) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"\u22C5"),e("span",{class:"mclose"},")"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},"))"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3361em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"\u03B8")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},")")])])])])],-1),Xw=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"\u03C0")]),e("annotation",{encoding:"application/x-tex"},"\\pi")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C0")])])],-1),ex=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msup",null,[e("mi",null,"N"),e("mrow",null,[e("mn",null,"1"),e("mi",{mathvariant:"normal"},"/"),e("mi",null,"\u03C4")])])]),e("annotation",{encoding:"application/x-tex"},"N^{1/\\tau}")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.888em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.888em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"1/"),e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.1132em"}},"\u03C4")])])])])])])])])])])],-1),tx=e("ul",null,[e("li",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"N")]),e("annotation",{encoding:"application/x-tex"},"N")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])])]),d(": the "),e("u",null,"visit count"),d(" of each move from the root state.")]),e("li",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"\u03C4")]),e("annotation",{encoding:"application/x-tex"},"\\tau")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.1132em"}},"\u03C4")])])]),d(": temperature param that controls the level of exploration. ("),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"\u03C4"),e("mo",null,"="),e("mn",null,"0")]),e("annotation",{encoding:"application/x-tex"},"\\tau=0")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.1132em"}},"\u03C4"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"0")])])]),d(": "),e("u",null,"greedy search"),d("; "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"\u03C4"),e("mo",null,"\u2192"),e("mi",{mathvariant:"normal"},"\u221E")]),e("annotation",{encoding:"application/x-tex"},"\\tau \\rightarrow \\infty")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.1132em"}},"\u03C4"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"\u2192"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord"},"\u221E")])])]),d(": "),e("u",null,"uniform sample"),d(")")])],-1),sx=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"\u03C0"),e("mo",{stretchy:"false"},"("),e("mi",null,"a"),e("mi",{mathvariant:"normal"},"\u2223"),e("msub",null,[e("mi",null,"s"),e("mn",null,"0")]),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("mfrac",null,[e("mrow",null,[e("mi",null,"N"),e("mo",{stretchy:"false"},"("),e("msub",null,[e("mi",null,"s"),e("mn",null,"0")]),e("mo",{separator:"true"},","),e("mi",null,"a"),e("msup",null,[e("mo",{stretchy:"false"},")"),e("mrow",null,[e("mn",null,"1"),e("mi",{mathvariant:"normal"},"/"),e("mi",null,"\u03C4")])])]),e("mrow",null,[e("munder",null,[e("mo",null,"\u2211"),e("mi",null,"b")]),e("mi",null,"N"),e("mo",{stretchy:"false"},"("),e("msub",null,[e("mi",null,"s"),e("mn",null,"0")]),e("mo",{separator:"true"},","),e("mi",null,"b"),e("msup",null,[e("mo",{stretchy:"false"},")"),e("mrow",null,[e("mn",null,"1"),e("mi",{mathvariant:"normal"},"/"),e("mi",null,"\u03C4")])])])])]),e("annotation",{encoding:"application/x-tex"},"\\pi(a|s_0) = \\frac{N(s_0,a)^{1/\\tau}}{\\sum_b N(s_0,b)^{1/\\tau}} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C0"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mord"},"\u2223"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"0")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"2.5687em","vertical-align":"-1.0037em"}}),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.565em"}},[e("span",{style:{top:"-2.296em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mop"},[e("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.1864em"}},[e("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"b")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2997em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"0")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"b"),e("span",{class:"mclose"},[e("span",{class:"mclose"},")"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.814em"}},[e("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"1/"),e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.1132em"}},"\u03C4")])])])])])])])])])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"0")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},[e("span",{class:"mclose"},")"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.888em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"1/"),e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.1132em"}},"\u03C4")])])])])])])])])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.0037em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})])])])])])],-1),nx=e("ul",null,[e("li",null,[d("the child node corresponding to the played action "),e("u",null,"becomes the new root node"),d("; retain the subtree below this child, "),e("u",null,"discard the remainder"),d(".")])],-1),ax=e("div",{class:"group"},[e("a",{href:"#",class:"top-10 right-20 absolute group-hover:font-semibold"},"MTCS"),e("img",{src:Uw,class:"h-60 invisible group-hover:visible top-15 right-18 absolute border-2"})],-1),lx={__name:"22",setup(t){const s={srcSequence:"./pages/2. AlphaGo Zero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[Kw,e("p",null,[d("Basically the same as AlphaGo. Sightly different in "),O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("evaluate")]),_:1}),d(" and "),O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("play")]),_:1}),d(" phase.")]),e("ul",null,[e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Evaluate")]),_:1}),d(": "),Ww,d(" as in AlphaGo, the action value "),Qw,d(" of the node "),Jw,d(" are fully evaluated by the neural network.")])]),Yw,e("ul",null,[e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Play")]),_:1}),d(": Once the search is complete, search probabilities "),Xw,d(" are returned, proportional to "),ex,d("."),tx])]),sx,nx,ax]),_:1},16)}}},rx=e("h1",null,"Network Architecture",-1),ox=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"\u2192")]),e("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.3669em"}}),e("span",{class:"mrel"},"\u2192")])])],-1),ix=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"\u2192")]),e("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.3669em"}}),e("span",{class:"mrel"},"\u2192")])])],-1),cx=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"\u2192")]),e("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.3669em"}}),e("span",{class:"mrel"},"\u2192")])])],-1),ux=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"\u2192")]),e("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.3669em"}}),e("span",{class:"mrel"},"\u2192")])])],-1),px=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"\u2192")]),e("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.3669em"}}),e("span",{class:"mrel"},"\u2192")])])],-1),mx=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"\u2192")]),e("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.3669em"}}),e("span",{class:"mrel"},"\u2192")])])],-1),hx=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"\u2192")]),e("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.3669em"}}),e("span",{class:"mrel"},"\u2192")])])],-1),dx=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"\u2192")]),e("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.3669em"}}),e("span",{class:"mrel"},"\u2192")])])],-1),fx=e("li",null,[e("p",null,[d("Two output heads for computing the "),e("u",null,"policy"),d(" and "),e("u",null,"value"),d(".")])],-1),gx=e("li",null,[e("p",null,[d("Feature size: "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mn",null,"19"),e("mo",null,"\xD7"),e("mn",null,"19"),e("mo",null,"\xD7"),e("mn",null,"17")]),e("annotation",{encoding:"application/x-tex"},"19 \\times 19 \\times 17")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"19"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\xD7"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"19"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\xD7"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"17")])])]),d(" (8 stone history x 2 player existence + 1 color), "),e("u",null,"no hand-crafted features"),d(" as in AlphaGo.")])],-1),vx=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"s"),e("mi",null,"t")]),e("mo",null,"="),e("mo",{stretchy:"false"},"["),e("msub",null,[e("mi",null,"X"),e("mi",null,"t")]),e("mo",{separator:"true"},","),e("msub",null,[e("mi",null,"Y"),e("mi",null,"t")]),e("mo",{separator:"true"},","),e("msub",null,[e("mi",null,"X"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"\u2212"),e("mn",null,"1")])]),e("mo",{separator:"true"},","),e("msub",null,[e("mi",null,"Y"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"\u2212"),e("mn",null,"1")])]),e("mo",{separator:"true"},","),e("mo",null,"\u2026"),e("mo",{separator:"true"},","),e("msub",null,[e("mi",null,"X"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"\u2212"),e("mn",null,"7")])]),e("mo",{separator:"true"},","),e("msub",null,[e("mi",null,"Y"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"\u2212"),e("mn",null,"7")])]),e("mo",{separator:"true"},","),e("mi",null,"C"),e("mo",{stretchy:"false"},"]")]),e("annotation",{encoding:"application/x-tex"},"s_t = [X_t, Y_t, X_{t-1}, Y_{t-1}, \\dots, X_{t-7}, Y_{t-7}, C] ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"["),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0785em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0785em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"\u2212"),e("span",{class:"mord mtight"},"1")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"\u2212"),e("span",{class:"mord mtight"},"1")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"minner"},"\u2026"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0785em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"\u2212"),e("span",{class:"mord mtight"},"7")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"\u2212"),e("span",{class:"mord mtight"},"7")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])]),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),e("span",{class:"mclose"},"]")])])])])],-1),yx=e("ul",null,[e("li",null,[d("Similar to AlphaGo, AlphaGo Zero also augments the training dataset by "),e("u",null,"sampling random rotations or reflections"),d(" of the positions during MCTS.")])],-1),_x={__name:"23",setup(t){const s={srcSequence:"./pages/2. AlphaGo Zero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[rx,e("ul",null,[e("li",null,[e("p",null,[d("1 "),O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("convolutional")]),_:1}),d(" block followed by 19 or 39 "),O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("residual")]),_:1}),d(" block.")]),e("ul",null,[e("li",null,[O(l,{class:"text-red-600"},{default:S(()=>[d("Conv block")]),_:1}),d(": conv "),ox,d(" BN "),ix,d(" relu")]),e("li",null,[O(l,{class:"text-red-600"},{default:S(()=>[d("Res block")]),_:1}),d(": conv "),cx,d(" BN "),ux,d(" relu "),px,d(" conv "),mx,d(" BN "),hx,d(" skip-connect "),dx,d(" relu")])])]),fx,gx]),vx,yx]),_:1},16)}}},bx="/[2.AlphaGo_Zero]-04.performance.png",wx=e("h1",null,"Results",-1),xx=e("h3",null,"Performance of AlphaGo Zero",-1),$x=e("br",null,null,-1),kx=e("img",{src:bx,class:"h-75 mx-auto"},null,-1),Ax=e("p",{class:"text-xs text-center"},[d(" AlphaGo Zero used a single machine with 4 tensor processing units (TPUs), whereas AlphaGo Lee was distributed over many machines and used 48 TPUs. AlphaGo Zero defeated AlphaGo Lee "),e("u",null,"by 100 games to 0"),d(". ")],-1),Mx={__name:"24",setup(t){const s={srcSequence:"./pages/2. AlphaGo Zero.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[wx,xx,$x,kx,Ax]),_:1},16))}},Sx="/[2.AlphaGo_Zero]-05.architecture_comparison.png",Tx=e("h1",null,"Results",-1),Ex=e("h3",null,"Network Architecture comparison",-1),Px=e("br",null,null,-1),zx=e("img",{src:Sx,class:"h-75 mx-auto"},null,-1),Ox=e("br",null,null,-1),Cx={class:"text-sm"},Lx={__name:"25",setup(t){const s={srcSequence:"./pages/2. AlphaGo Zero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[Tx,Ex,Px,zx,Ox,e("div",Cx,[e("ul",null,[e("li",null,[O(l,{class:"text-red-600"},{default:S(()=>[d("sep")]),_:1}),d(" / "),O(l,{class:"text-red-600"},{default:S(()=>[d("dual")]),_:1}),d(": seperate/combined policy and value networks.")]),e("li",null,[O(l,{class:"text-red-600"},{default:S(()=>[d("dual-res")]),_:1}),d(" and "),O(l,{class:"text-red-600"},{default:S(()=>[d("sep-conv")]),_:1}),d(" correspond to the networks used in AlphaGo Zero and AlphaGo Lee, respectively.")])])])]),_:1},16)}}},Gx="/[2.AlphaGo_Zero]-06.learned_knowledge.png",Rx=e("h1",null,"Results",-1),Zx=e("h3",null,"Go knowledge learned by AlphaGo Zero",-1),Nx=e("br",null,null,-1),Ix=e("div",{class:"text-sm"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"a"),d(": Five human "),e("em",null,"joseki"),d(" (common corner sequences) discovered during AlphaGo Zero training.")])]),e("li",null,[e("p",null,[e("strong",null,"b"),d(": Five "),e("em",null,"joseki"),d(" favoured at different stages of self-\xADplay training.")])]),e("li",null,[e("p",null,[e("strong",null,"c"),d(": The first 80 moves of three self\xADplay games that were played at different stages of training.")])])])],-1),Dx=e("p",{class:"break"},null,-1),Fx=e("img",{src:Gx,class:"h-100 mx-auto"},null,-1),jx={__name:"26",setup(t){const s={layout:"two-cols",srcSequence:"./pages/2. AlphaGo Zero.md"};return R(j),(n,a)=>(k(),H(gt,ae(se(s)),{right:S(l=>[Dx,Fx]),default:S(()=>[Rx,Zx,Nx,Ix]),_:1},16))}},qx="/[3.AlphaZero]-01.title.png",Hx=e("h1",null,"3. AlphaZero (2018)",-1),Vx=e("br",null,null,-1),Bx=e("img",{src:qx,class:"shadow-lg mx-auto w-160"},null,-1),Ux=e("p",{class:"text-sm"},[e("p",null,[e("a",{href:"https://www.deepmind.com/open-source/alphazero-resources",target:"_blank",rel:"noopener"},"Homepage"),d(" & "),e("a",{href:"https://mnomqrns7c.feishu.cn/file/boxcnwFu97mp1IVNBtqzD4EMsUe",target:"_blank",rel:"noopener"},"Online PDF")])],-1),Kx={__name:"27",setup(t){const s={layout:"cover",coverDate:"",srcSequence:"./pages/3. AlphaZero.md"};return R(j),(n,a)=>(k(),H(Bn,ae(se(s)),{default:S(()=>[Hx,Vx,Bx,Ux]),_:1},16))}},Wx=e("h1",null,"How does it extend AlphaGo Zero?",-1),Qx=e("p",null,"A more generic version of the AlphaGo Zero that accommodates, without special casing, a broader class of game rules.",-1),Jx=e("li",null,[e("p",null,"Use the same algorithm, network architecture and hyperparameters for chess and shogi, as well as Go.")],-1),Yx=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"z"),e("mo",null,"="),e("mo",{stretchy:"false"},"{"),e("mn",null,"0"),e("mo",{separator:"true"},","),e("mo",null,"\xB1"),e("mn",null,"1"),e("mo",{stretchy:"false"},"}")]),e("annotation",{encoding:"application/x-tex"},"z=\\{0,\\pm1\\}")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"{"),e("span",{class:"mord"},"0"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"\xB1"),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"}")])])],-1),Xx=e("u",null,"-1 for loss, 0 for draw, 1 for win",-1),e2=e("li",null,[e("p",null,[d("To accommodate a broader class of games, AlphaZero "),e("u",null,"does not assume symmetry"),d(". AlphaZero does not augment the training data and does not transform the board position during MCTS.")])],-1),t2=e("li",null,[e("p",null,[d("AlphaZero always generate self-play games "),e("u",null,"with the newest player"),d(" of last iteration, instead of the best player from all previous iterations as in AlphaGo Zero.")])],-1),s2={__name:"28",setup(t){const s={srcSequence:"./pages/3. AlphaZero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[Wx,Qx,e("ul",null,[Jx,e("li",null,[e("p",null,[d("Go games have a binary win or loss outcome, whereas both chess and shogi may end in drawn outcomes. The game outcome is "),O(l,{class:"text-red-600"},{default:S(()=>[Yx]),_:1}),d(": "),Xx,d(".")])]),e2,t2])]),_:1},16)}}},n2="/[3.AlphaZero]-02.feature_representation.png",a2=e("h1",null,"State Representation",-1),l2=e("p",null,[d("feature size: "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"N"),e("mo",null,"\xD7"),e("mi",null,"N"),e("mo",null,"\xD7"),e("mo",{stretchy:"false"},"("),e("mi",null,"M"),e("mi",null,"T"),e("mo",null,"+"),e("mi",null,"L"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"N \\times N \\times (MT + L)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\xD7"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\xD7"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"MT"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"L"),e("span",{class:"mclose"},")")])])]),d(":")],-1),r2=e("li",null,[e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"N"),e("mo",null,"\xD7"),e("mi",null,"N")]),e("annotation",{encoding:"application/x-tex"},"N \\times N")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\xD7"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])])]),d(" represents the board size.")])],-1),o2=e("li",null,[e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"T")]),e("annotation",{encoding:"application/x-tex"},"T")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T")])])]),d(" represents the board positions history at time steps "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",{stretchy:"false"},"["),e("mi",null,"t"),e("mo",null,"\u2212"),e("mi",null,"T"),e("mo",null,"+"),e("mn",null,"1"),e("mo",{separator:"true"},","),e("mo",null,"\u2026"),e("mo",{separator:"true"},","),e("mi",null,"t"),e("mo",{stretchy:"false"},"]")]),e("annotation",{encoding:"application/x-tex"},"[t-T+1, \\dots, t]")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"["),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"minner"},"\u2026"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},"]")])])]),d(".")])],-1),i2=e("li",null,[e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"M")]),e("annotation",{encoding:"application/x-tex"},"M")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"M")])])]),d(" represents the presence of player\u2019s pieces.")])],-1),c2=e("li",null,[e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"L")]),e("annotation",{encoding:"application/x-tex"},"L")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal"},"L")])])]),d(" denotes the player\u2019s color, the move number and other states of special rules.")])],-1),u2=e("u",null,"setting their probabilities to zero",-1),p2=e("u",null,"re-normalising",-1),m2=e("div",{class:"group"},[e("a",{href:"#",class:"top-10 right-20 absolute group-hover:font-semibold"},"Representation"),e("img",{src:n2,class:"h-90 invisible group-hover:visible top-15 right-18 absolute border-2"})],-1),h2={__name:"29",setup(t){const s={srcSequence:"./pages/3. AlphaZero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[a2,l2,e("ul",null,[r2,o2,i2,c2,e("li",null,[e("p",null,[d("Illegal moves are "),O(l,{class:"text-red-600"},{default:S(()=>[d("masked out")]),_:1}),d(" by "),u2,d(", and "),p2,d(" the probabilities over the remaining set of legal moves.")])])]),m2]),_:1},16)}}},d2=e("h1",null,"Method overwiew",-1),f2=e("br",null,null,-1),g2=e("p",null,[d("The self-play training process and the neural network architecture (1 Conv block + 19 Res block) are basically "),e("u",null,"the same as AlphaGo Zero"),d(".")],-1),v2=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"z"),e("mi",null,"t")]),e("mo",null,"="),e("mo",null,"\xB1"),e("mn",null,"1"),e("mo",{separator:"true"},","),e("mn",null,"0")]),e("annotation",{encoding:"application/x-tex"},"z_t = \\pm1, 0 ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},"\xB1"),e("span",{class:"mord"},"1"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"0")])])])])],-1),y2=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mo",{stretchy:"false"},"("),e("mi",{mathvariant:"bold"},"p"),e("mo",{separator:"true"},","),e("mi",null,"v"),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("msub",null,[e("mi",null,"f"),e("mi",null,"\u03B8")]),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"(\\mathbf{p}, v) = f_\\theta(s) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathbf"},"p"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3361em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"\u03B8")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mclose"},")")])])])])],-1),_2=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"l"),e("mo",null,"="),e("mo",{stretchy:"false"},"("),e("mi",null,"z"),e("mo",null,"\u2212"),e("mi",null,"v"),e("msup",null,[e("mo",{stretchy:"false"},")"),e("mn",null,"2")]),e("mo",null,"\u2212"),e("msup",null,[e("mi",{mathvariant:"bold"},"\u03C0"),e("mi",null,"T")]),e("mi",null,"log"),e("mo",null,"\u2061"),e("mi",{mathvariant:"bold"},"p"),e("mo",null,"+"),e("mi",null,"c"),e("mi",{mathvariant:"normal"},"\u2223"),e("mi",{mathvariant:"normal"},"\u2223"),e("mi",null,"\u03B8"),e("mi",{mathvariant:"normal"},"\u2223"),e("msup",null,[e("mi",{mathvariant:"normal"},"\u2223"),e("mn",null,"2")])]),e("annotation",{encoding:"application/x-tex"},"l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2 ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"mclose"},[e("span",{class:"mclose"},")"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8641em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.0858em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C0"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8913em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"T")])])])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mop"},[d("lo"),e("span",{style:{"margin-right":"0.01389em"}},"g")]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathbf"},"p"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"c"),e("span",{class:"mord"},"\u2223\u2223"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"\u03B8"),e("span",{class:"mord"},"\u2223"),e("span",{class:"mord"},[e("span",{class:"mord"},"\u2223"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8641em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])])])])])])])])])])],-1),b2=e("img",{src:sp,class:"h-100 mx-auto"},null,-1),w2=e("p",{class:"text-xs text-center"},[e("p",null,"Self-play training process in AlphaGo Zero.")],-1),x2={__name:"30",setup(t){const s={layout:"two-cols",srcSequence:"./pages/3. AlphaZero.md"};return R(j),(n,a)=>(k(),H(gt,ae(se(s)),{right:S(l=>[b2,w2]),default:S(()=>[d2,f2,g2,v2,y2,_2]),_:1},16))}},$2="/[3.AlphaZero]-03.performance.png",k2=e("h1",null,"Results",-1),A2=e("h3",null,"Performance",-1),M2=e("br",null,null,-1),S2=e("img",{src:$2,class:"h-60 mx-auto"},null,-1),T2=e("div",{class:"text-sm"},[e("p",null,"AlphaZero used a single machine with 4 TPUs (same as AlphaGo Zero). Milestones:"),e("ul",null,[e("li",null,"chess: 4 hours (300,000 steps) against Stockfish;"),e("li",null,"shogi: 2 hours (110,000 steps) against Elmo;"),e("li",null,"Go: 30 hours (74,000 steps) against AlphaGo Lee.")])],-1),E2={__name:"31",setup(t){const s={srcSequence:"./pages/3. AlphaZero.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[k2,A2,M2,S2,T2]),_:1},16))}},P2="/[3.AlphaZero]-04.programs_comparison.jpg",z2=e("h1",null,"Results",-1),O2=e("h3",null,"Comparison with specialized programs",-1),C2=e("br",null,null,-1),L2=e("img",{src:P2,class:"h-90 mx-auto"},null,-1),G2={__name:"32",setup(t){const s={srcSequence:"./pages/3. AlphaZero.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[z2,O2,C2,L2]),_:1},16))}},R2="/[4.MuZero]-01.title.png",Z2=e("h1",null,"4. MuZero (2020)",-1),N2=e("br",null,null,-1),I2=e("img",{src:R2,class:"shadow-lg mx-auto w-220"},null,-1),D2=e("p",{class:"text-sm"},[e("p",null,[e("a",{href:"https://www.deepmind.com/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules",target:"_blank",rel:"noopener"},"Homepage"),d(" & "),e("a",{href:"https://mnomqrns7c.feishu.cn/file/boxcnMst8DYnhuH6fb3t1LXNBpb",target:"_blank",rel:"noopener"},"Online PDF")])],-1),F2={__name:"33",setup(t){const s={layout:"cover",coverDate:"",srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>(k(),H(Bn,ae(se(s)),{default:S(()=>[Z2,N2,I2,D2]),_:1},16))}},j2=e("h1",null,"What\u2019s different?",-1),q2=e("p",null,[d("MuZero extends AlphaZero to a broader set of environments (e.g. Atari2600), including "),e("u",null,"single agent"),d(" domains and "),e("u",null,"non-zero rewards"),d(" at intermediate time steps.")],-1),H2=e("p",null,"No rules were given in advance, MuZero learned the rules by its internal networks.",-1),V2=e("u",null,"a learned dynamics model",-1),B2=e("u",null,"does not perform any masking",-1),U2=e("u",null,"uses the value predicted",-1),K2={__name:"34",setup(t){const s={srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[j2,q2,H2,e("ul",null,[e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("State transitions")]),_:1}),d(": AlphaZero had access to a perfect simulator of the environment\u2019s state-to-state dynamics. In contrast, MuZero employs "),V2,d(" to estimate the simulator.")]),e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Actions available")]),_:1}),d(": AlphaZero used the set of legal actions obtained from the simulator to mask the policy network at interior nodes. MuZero "),B2,d(" within the search tree.")]),e("li",null,[O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("Terminal states")]),_:1}),d(": AlphaZero stopped at the terminal states directly provided by the simulator. MuZero does not give special treatment to terminal states and always "),U2,d(" by the network.")])])]),_:1},16)}}},W2="/[4.MuZero]-02-0.training_process.jpg",Q2=e("h1",null,"Training process",-1),J2=e("img",{src:W2,class:"h-90 mx-auto"},null,-1),Y2=e("p",{class:"text-xs text-center"}," Overall training process of MuZero. ",-1),X2={__name:"35",setup(t){const s={srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[Q2,J2,Y2]),_:1},16))}},e$="/[4.MuZero]-02-1.MCTS.jpg",t$=e("h2",null,"Part 1: MCTS search",-1),s$=e("br",null,null,-1),n$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",{stretchy:"false"},"("),e("mi",null,"Q"),e("mo",{separator:"true"},","),e("mi",null,"N"),e("mo",{separator:"true"},","),e("mi",null,"P"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"(Q, N, P)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),e("span",{class:"mclose"},")")])])],-1),a$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"R"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"R(s,a)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")")])])],-1),l$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"S"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"S(s,a)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")")])])],-1),r$=e("li",null,[e("p",null,[d("The evaluating value is the "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"k")]),e("annotation",{encoding:"application/x-tex"},"k")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),d("-step "),e("u",null,"cumulative discounted reward"),d(":")])],-1),o$=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"V"),e("mo",{stretchy:"false"},"("),e("msub",null,[e("mi",null,"s"),e("mi",null,"t")]),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("munderover",null,[e("mo",null,"\u2211"),e("mrow",null,[e("mi",null,"\u03C4"),e("mo",null,"="),e("mn",null,"0")]),e("mrow",null,[e("mi",null,"k"),e("mo",null,"\u2212"),e("mn",null,"1")])]),e("msup",null,[e("mi",null,"\u03B3"),e("mi",null,"\u03C4")]),e("msub",null,[e("mi",null,"r"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"+"),e("mi",null,"\u03C4")])]),e("mo",null,"+"),e("msup",null,[e("mi",null,"\u03B3"),e("mi",null,"k")]),e("msub",null,[e("mi",null,"v"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"+"),e("mi",null,"k")])])]),e("annotation",{encoding:"application/x-tex"},"V(s_t) = \\sum_{\\tau=0}^{k-1} \\gamma^\\tau r_{t+\\tau} + \\gamma^k v_{t+k} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"3.1032em","vertical-align":"-1.2671em"}}),e("span",{class:"mop op-limits"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.8361em"}},[e("span",{style:{top:"-1.8829em","margin-left":"0em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.1132em"}},"\u03C4"),e("span",{class:"mrel mtight"},"="),e("span",{class:"mord mtight"},"0")])])]),e("span",{style:{top:"-3.05em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",null,[e("span",{class:"mop op-symbol large-op"},"\u2211")])]),e("span",{style:{top:"-4.3em","margin-left":"0em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k"),e("span",{class:"mbin mtight"},"\u2212"),e("span",{class:"mord mtight"},"1")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.2671em"}},[e("span")])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"\u03B3"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.7144em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.1132em"}},"\u03C4")])])])])])])]),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"+"),e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.1132em"}},"\u03C4")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.1074em","vertical-align":"-0.2083em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"\u03B3"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8991em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])])])])])]),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3361em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"+"),e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])])])])])])],-1),i$=e("ul",null,[e("li",null,[d("Because the value above is unbounded, the action-state value "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"Q")]),e("annotation",{encoding:"application/x-tex"},"Q")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal"},"Q")])])]),d(" would be "),e("u",null,"normalized"),d(":")])],-1),c$=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"Q"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("mfrac",null,[e("mn",null,"1"),e("mrow",null,[e("mi",null,"N"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")")])]),e("munderover",null,[e("mo",null,"\u2211"),e("mrow",null,[e("mi",null,"i"),e("mo",null,"="),e("mn",null,"1")]),e("mi",null,"N")]),e("mn",null,"1"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{separator:"true"},","),e("mi",null,"i"),e("mo",{stretchy:"false"},")"),e("mi",null,"V"),e("mo",{stretchy:"false"},"("),e("msubsup",null,[e("mi",null,"s"),e("mi",null,"L"),e("mi",null,"i")]),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"3.106em","vertical-align":"-1.2777em"}}),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.3214em"}},[e("span",{style:{top:"-2.314em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")")])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord"},"1")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.936em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mop op-limits"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.8283em"}},[e("span",{style:{top:"-1.8723em","margin-left":"0em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"i"),e("span",{class:"mrel mtight"},"="),e("span",{class:"mord mtight"},"1")])])]),e("span",{style:{top:"-3.05em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",null,[e("span",{class:"mop op-symbol large-op"},"\u2211")])]),e("span",{style:{top:"-4.3em","margin-left":"0em"}},[e("span",{class:"pstrut",style:{height:"3.05em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.2777em"}},[e("span")])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"i"),e("span",{class:"mclose"},")"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8747em"}},[e("span",{style:{top:"-2.453em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"L")])]),e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"i")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.247em"}},[e("span")])])])])]),e("span",{class:"mclose"},")")])])])])],-1),u$=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mover",{accent:"true"},[e("mi",null,"Q"),e("mo",null,"\u02C9")]),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")"),e("mo",null,"="),e("mfrac",null,[e("mrow",null,[e("mi",null,"Q"),e("mo",{stretchy:"false"},"("),e("mi",null,"s"),e("mo",{separator:"true"},","),e("mi",null,"a"),e("mo",{stretchy:"false"},")"),e("mo",null,"\u2212"),e("mi",null,"min"),e("mo",null,"\u2061"),e("mi",null,"Q")]),e("mrow",null,[e("mi",null,"max"),e("mo",null,"\u2061"),e("mi",null,"Q"),e("mo",null,"\u2212"),e("mi",null,"min"),e("mo",null,"\u2061"),e("mi",null,"Q")])])]),e("annotation",{encoding:"application/x-tex"},"\\bar{Q}(s,a) = \\frac{Q(s,a) - \\min Q}{\\max Q - \\min Q} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.0701em","vertical-align":"-0.25em"}}),e("span",{class:"mord accent"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8201em"}},[e("span",{style:{top:"-3em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord mathnormal"},"Q")]),e("span",{style:{top:"-3.2523em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"accent-body",style:{left:"-0.1667em"}},[e("span",{class:"mord"},"\u02C9")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.1944em"}},[e("span")])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"2.3074em","vertical-align":"-0.8804em"}}),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.427em"}},[e("span",{style:{top:"-2.314em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mop"},"max"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mop"},"min"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"Q")])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mop"},"min"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"Q")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8804em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})])])])])])],-1),p$=e("div",{class:"group"},[e("a",{href:"#",class:"top-10 right-20 absolute group-hover:font-semibold"},"MCTS"),e("img",{src:e$,class:"h-90 invisible group-hover:visible top-15 right-18 absolute border-2"})],-1),m$={__name:"36",setup(t){const s={srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[t$,s$,e("ul",null,[e("li",null,[e("p",null,[d("Aside from "),n$,d(" as before, the edges in MuZero MCTS also store "),O(l,{class:"text-red-600"},{default:S(()=>[d("intermediate reward")]),_:1}),d(),a$,d(" & "),O(l,{class:"text-red-600"},{default:S(()=>[d("state transition")]),_:1}),d(),l$,d(".")])]),r$]),o$,i$,c$,u$,p$]),_:1},16)}}},h$="/[4.MuZero]-02-2.self-play.jpg",d$=e("h2",null,"Part 2: Self-play process",-1),f$=e("br",null,null,-1),g$=e("img",{src:h$,class:"h-50 mx-auto"},null,-1),v$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"u"),e("mi",null,"t")])]),e("annotation",{encoding:"application/x-tex"},"u_t")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"u"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])],-1),y$=e("li",null,[e("p",null,[d("The final outcome "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"z"),e("mi",null,"t")])]),e("annotation",{encoding:"application/x-tex"},"z_t")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])]),d(" is computed as the "),e("u",null,"cumulative discounted reward"),d(":")])],-1),_$=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"z"),e("mi",null,"t")]),e("mo",null,"="),e("msub",null,[e("mi",null,"u"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"+"),e("mn",null,"1")])]),e("mo",null,"+"),e("mi",null,"\u03B3"),e("msub",null,[e("mi",null,"u"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"+"),e("mn",null,"2")])]),e("mo",null,"+"),e("mo",null,"\u22EF"),e("mo",null,"+"),e("msup",null,[e("mi",null,"\u03B3"),e("mrow",null,[e("mi",null,"n"),e("mo",null,"\u2212"),e("mn",null,"1")])]),e("msub",null,[e("mi",null,"u"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"+"),e("mi",null,"n")])]),e("mo",null,"+"),e("msup",null,[e("mi",null,"\u03B3"),e("mi",null,"n")]),e("msub",null,[e("mi",null,"v"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"+"),e("mi",null,"n")])])]),e("annotation",{encoding:"application/x-tex"},"z_t = u_{t+1} + \\gamma u_{t+2} + \\dots + \\gamma^{n-1}u_{t+n} + \\gamma^n v_{t+n} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7917em","vertical-align":"-0.2083em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"u"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"+"),e("span",{class:"mord mtight"},"1")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7917em","vertical-align":"-0.2083em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"\u03B3"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"u"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"+"),e("span",{class:"mord mtight"},"2")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),e("span",{class:"minner"},"\u22EF"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.0724em","vertical-align":"-0.2083em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"\u03B3"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8641em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"n"),e("span",{class:"mbin mtight"},"\u2212"),e("span",{class:"mord mtight"},"1")])])])])])])])]),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"u"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"+"),e("span",{class:"mord mathnormal mtight"},"n")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.9227em","vertical-align":"-0.2083em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"\u03B3"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.7144em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"+"),e("span",{class:"mord mathnormal mtight"},"n")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])])])])])])],-1),b$={__name:"37",setup(t){const s={srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[d$,f$,g$,e("ul",null,[e("li",null,[e("p",null,[d("Self-play process is basically the same, except "),O(l,{class:"text-red-600"},{default:S(()=>[d("intermediate rewards")]),_:1}),d(),v$,d(" are considered.")])]),e("li",null,[e("p",null,[d("The trajectories of self-play would be stored into a "),O(l,{class:"text-red-600 font-bold"},{default:S(()=>[d("replay buffer")]),_:1}),d(" (off-policy RL).")])]),y$]),_$]),_:1},16)}}},w$="/[4.MuZero]-02-3.network_training.jpg",x$=e("h2",null,"Part 3: Network training",-1),$$=e("br",null,null,-1),k$=e("p",null,[d("A trajectory is sampled from the "),e("u",null,"replay buffer"),d(".")],-1),A$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"h")]),e("annotation",{encoding:"application/x-tex"},"h")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord mathnormal"},"h")])])],-1),M$=e("u",null,"the first hidden state",-1),S$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"s"),e("mn",null,"0")])]),e("annotation",{encoding:"application/x-tex"},"s_0")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"0")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])],-1),T$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"g")]),e("annotation",{encoding:"application/x-tex"},"g")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")])])],-1),E$=e("u",null,"subsequent rewards",-1),P$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"r"),e("mi",null,"t")])]),e("annotation",{encoding:"application/x-tex"},"r_t")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])],-1),z$=e("u",null,"states",-1),O$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"s"),e("mi",null,"t")])]),e("annotation",{encoding:"application/x-tex"},"s_t")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])],-1),C$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"s"),e("mrow",null,[e("mi",null,"t"),e("mo",null,"\u2212"),e("mn",null,"1")])])]),e("annotation",{encoding:"application/x-tex"},"s_{t-1}")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6389em","vertical-align":"-0.2083em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"s"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"t"),e("span",{class:"mbin mtight"},"\u2212"),e("span",{class:"mord mtight"},"1")])])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2083em"}},[e("span")])])])])])])])],-1),L$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"a"),e("mi",null,"t")])]),e("annotation",{encoding:"application/x-tex"},"a_t")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"a"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])],-1),G$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"f")]),e("annotation",{encoding:"application/x-tex"},"f")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f")])])],-1),R$=e("u",null,"distribution",-1),Z$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"p"),e("mi",null,"t")])]),e("annotation",{encoding:"application/x-tex"},"p_t")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"p"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])],-1),N$=e("u",null,"value",-1),I$=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"v"),e("mi",null,"t")])]),e("annotation",{encoding:"application/x-tex"},"v_t")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])],-1),D$=e("li",null,"Train the model by minimizing the loss.",-1),F$=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"l"),e("mo",null,"="),e("mo",{stretchy:"false"},"("),e("mi",null,"z"),e("mo",null,"\u2212"),e("mi",null,"v"),e("msup",null,[e("mo",{stretchy:"false"},")"),e("mn",null,"2")]),e("mo",null,"\u2212"),e("msup",null,[e("mi",{mathvariant:"bold"},"\u03C0"),e("mi",null,"t")]),e("mi",null,"log"),e("mo",null,"\u2061"),e("mi",{mathvariant:"bold"},"p"),e("mo",null,"+"),e("mo",{stretchy:"false"},"("),e("mi",null,"u"),e("mo",null,"\u2212"),e("mi",null,"r"),e("msup",null,[e("mo",{stretchy:"false"},")"),e("mn",null,"2")]),e("mo",null,"+"),e("mi",null,"c"),e("mi",{mathvariant:"normal"},"\u2223"),e("mi",{mathvariant:"normal"},"\u2223"),e("mi",null,"\u03B8"),e("mi",{mathvariant:"normal"},"\u2223"),e("msup",null,[e("mi",{mathvariant:"normal"},"\u2223"),e("mn",null,"2")])]),e("annotation",{encoding:"application/x-tex"},"l = (z-v)^2 - \\mathbf{\\pi}^t\\log \\mathbf{p} + (u-r)^2+c||\\theta||^2 ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"mclose"},[e("span",{class:"mclose"},")"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8641em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.038em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C0"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8436em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"t")])])])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mop"},[d("lo"),e("span",{style:{"margin-right":"0.01389em"}},"g")]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathbf"},"p"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"u"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u2212"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),e("span",{class:"mclose"},[e("span",{class:"mclose"},")"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8641em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"c"),e("span",{class:"mord"},"\u2223\u2223"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"\u03B8"),e("span",{class:"mord"},"\u2223"),e("span",{class:"mord"},[e("span",{class:"mord"},"\u2223"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8641em"}},[e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])])])])])])])])])])],-1),j$=e("u",null,"with 16 instead of 20",-1),q$=e("div",{class:"group"},[e("a",{href:"#",class:"top-10 right-20 absolute group-hover:font-semibold"},"training process"),e("img",{src:w$,class:"h-60 invisible group-hover:visible top-15 right-18 absolute border-2"})],-1),H$={__name:"38",setup(t){const s={srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[x$,$$,k$,e("ol",null,[e("li",null,[d("The "),O(l,{class:"text-red-600"},{default:S(()=>[d("representation")]),_:1}),d(" function "),A$,d(" generate "),M$,d(" representation "),S$,d(".")]),e("li",null,[d("The "),O(l,{class:"text-red-600"},{default:S(()=>[d("dynamics")]),_:1}),d(" function "),T$,d(" recursively predicts "),E$,d(),P$,d(" and "),z$,d(),O$,d(" based on the predicted state "),C$,d(" and the real action "),L$,d(".")]),e("li",null,[d("The "),O(l,{class:"text-red-600"},{default:S(()=>[d("prediction")]),_:1}),d(" function "),G$,d(" predicts the "),R$,d(),Z$,d(" and "),N$,d(),I$,d(" for these predicted states.")]),D$]),F$,e("p",null,[d("The network architecture is basically the same as in AlphaZero, but "),j$,d(" residual blocks in "),O(l,{class:"text-red-600"},{default:S(()=>[d("representation")]),_:1}),d(" and "),O(l,{class:"text-red-600"},{default:S(()=>[d("dynamics")]),_:1}),d(" networks.")]),q$]),_:1},16)}}},V$="/[4.MuZero]-03-1.normal_training_loop.jpg",B$="/[4.MuZero]-03-2.reanalyze_training_loop.jpg",U$=e("h1",null,"Reanalyze",-1),K$=e("p",null,[d("MuZero Reanalyze revisits its "),e("u",null,"past time steps"),d(" and re-executes MCTS search "),e("u",null,"using the latest model parameters"),d(", potentially resulting in a better-quality policy than the original search.")],-1),W$=e("br",null,null,-1),Q$=e("div",{class:"grid grid-cols-2"},[e("div",null,[e("img",{src:V$,class:"h-60 mx-auto"}),e("p",{class:"text-xs text-center"},"Normal training loop.")]),e("div",null,[e("img",{src:B$,class:"h-70 mx-auto"}),e("p",{class:"text-xs text-center"},"Reanalyze training loop.")])],-1),J$={__name:"39",setup(t){const s={srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>{const l=Le("font");return k(),H(Te,ae(se(s)),{default:S(()=>[U$,K$,e("ul",null,[e("li",null,[d("This fresh policy is used as the policy target for "),O(l,{class:"text-red-600"},{default:S(()=>[d("80% of updates")]),_:1}),d(" during MuZero training.")])]),W$,Q$]),_:1},16)}}},Y$="/[4.MuZero]-04.performance_against_AlphaZero_and_R2D2.png",X$=e("h1",null,"Results",-1),e3=e("br",null,null,-1),t3=e("img",{src:Y$,class:"h-100 mx-auto"},null,-1),s3={__name:"40",setup(t){const s={srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[X$,e3,t3]),_:1},16))}},n3="/[4.MuZero]-05.evaluations.png",a3=e("h1",null,"Results",-1),l3=e("br",null,null,-1),r3=e("img",{src:n3,class:"h-100 mx-auto"},null,-1),o3={__name:"41",setup(t){const s={srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[a3,l3,r3]),_:1},16))}},i3="/[4.MuZero]-06.Reanalyze_performance.png",c3=e("h1",null,"Results",-1),u3=e("br",null,null,-1),p3=e("img",{src:i3,class:"h-70 mx-auto"},null,-1),m3={__name:"42",setup(t){const s={srcSequence:"./pages/4. MuZero.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[c3,u3,p3]),_:1},16))}},h3={__name:"43",setup(t){const s={};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),null,16))}},d3=e("h1",null,"Resources",-1),f3=e("div",{class:"text-sm"},[e("ul",null,[e("li",null,[e("strong",null,"AlphaGo"),d(" (2016): "),e("em",null,"Silver D, Huang A, Maddison C J, et al. Mastering the game of Go with deep neural networks and tree search[J]. nature, 2016, 529(7587): 484-489."),e("ul",null,[e("li",null,[e("a",{href:"https://www.deepmind.com/publications/mastering-the-game-of-go-with-deep-neural-networks-tree-search",target:"_blank",rel:"noopener"},"Homepage"),d(" & "),e("a",{href:"https://mnomqrns7c.feishu.cn/file/boxcnUhiHrgvGlFlraNwpoJMCVq",target:"_blank",rel:"noopener"},"Online PDF"),d(".")])])]),e("li",null,[e("strong",null,"AlphaGo Zero"),d(" (2017): "),e("em",null,"Silver D, Schrittwieser J, Simonyan K, et al. Mastering the game of go without human knowledge[J]. nature, 2017, 550(7676): 354-359."),e("ul",null,[e("li",null,[e("a",{href:"https://www.deepmind.com/blog/alphago-zero-starting-from-scratch",target:"_blank",rel:"noopener"},"Homepage"),d(" & "),e("a",{href:"https://mnomqrns7c.feishu.cn/file/boxcnRiLn3v6dKkklJ8yzO8uinc",target:"_blank",rel:"noopener"},"Online PDF"),d(".")])])]),e("li",null,[e("strong",null,"AlphaZero"),d(" (2018): "),e("em",null,"Silver D, Hubert T, Schrittwieser J, et al. A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play[J]. Science, 2018, 362(6419): 1140-1144."),e("ul",null,[e("li",null,[e("a",{href:"https://www.deepmind.com/open-source/alphazero-resources",target:"_blank",rel:"noopener"},"Homepage"),d(" & "),e("a",{href:"https://mnomqrns7c.feishu.cn/file/boxcnwFu97mp1IVNBtqzD4EMsUe",target:"_blank",rel:"noopener"},"Online PDF"),d(".")])])]),e("li",null,[e("strong",null,"MuZero"),d(" (2020): "),e("em",null,"Schrittwieser J, Antonoglou I, Hubert T, et al. Mastering atari, go, chess and shogi by planning with a learned model[J]. Nature, 2020, 588(7839): 604-609."),e("ul",null,[e("li",null,[e("a",{href:"https://www.deepmind.com/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules",target:"_blank",rel:"noopener"},"Homepage"),d(" & "),e("a",{href:"https://mnomqrns7c.feishu.cn/file/boxcnMst8DYnhuH6fb3t1LXNBpb",target:"_blank",rel:"noopener"},"Online PDF"),d(".")])])])])],-1),g3={__name:"44",setup(t){const s={srcSequence:"./pages/resources.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[d3,f3]),_:1},16))}},v3=e("h3",null,"Other useful materials",-1),y3=e("ul",null,[e("li",null,[e("p",null,[e("a",{href:"https://www.yanxishe.com/TextTranslation/1475",target:"_blank",rel:"noopener"},"Introduction to Monte Carlo Tree Search: The Game-Changing Algorithm behind DeepMind\u2019s AlphaGo | AI\u7814\u4E60\u793E"),d(".")])]),e("li",null,[e("p",null,[e("a",{href:"https://zhuanlan.zhihu.com/p/423253822",target:"_blank",rel:"noopener"},"\u3010AlphaGo\u7CFB\u5217-1\u3011AlphaGo\u8BE6\u89E3 | \u77E5\u4E4E\u4E13\u680F"),d(".")])]),e("li",null,[e("p",null,[e("a",{href:"https://zhuanlan.zhihu.com/p/32952677",target:"_blank",rel:"noopener"},"AlphaGo Zero \u7B80\u660E\u5DE5\u4F5C\u539F\u7406 | \u77E5\u4E4E\u4E13\u680F"),d(".")])]),e("li",null,[e("p",null,[e("a",{href:"https://zhuanlan.zhihu.com/p/325865136",target:"_blank",rel:"noopener"},"\u6700\u5F3A\u901A\u7528\u68CB\u7C7BAI\uFF0CAlphaZero\u5F3A\u5316\u5B66\u4E60\u7B97\u6CD5\u89E3\u8BFB | \u77E5\u4E4E\u4E13\u680F"),d(".")])]),e("li",null,[e("p",null,[e("a",{href:"https://www.yanxishe.com/TextTranslation/3177",target:"_blank",rel:"noopener"},"\u7EC8\u6781\u7248AlphaGo\uFF0CDeepMind\u65B0\u7B97\u6CD5MuZero\u4F5C\u8005\u89E3\u8BFB | AI\u7814\u4E60\u793E"),d(".")])])],-1),_3={__name:"45",setup(t){const s={srcSequence:"./pages/resources.md"};return R(j),(n,a)=>(k(),H(Te,ae(se(s)),{default:S(()=>[v3,y3]),_:1},16))}},b3=[{path:"1",name:"page-1",component:t_,meta:{theme:"academic",coverDate:"",title:"From AlphaGo to MuZero",slide:{raw:`---
theme: academic
coverDate: ""
---


# From AlphaGo to MuZero
## An Introduction to Deepmind's boardgame AI

<br>

Jia-peng Dai

<font class='text-sm'>2022/11</font>
`,title:"From AlphaGo to MuZero",level:1,content:`# From AlphaGo to MuZero
## An Introduction to Deepmind's boardgame AI

<br>

Jia-peng Dai

<font class='text-sm'>2022/11</font>`,frontmatter:{theme:"academic",coverDate:"",title:"From AlphaGo to MuZero"},index:0,start:0,end:15,notesHTML:"",filepath:"/home/runner/work/sites/sites/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:o_,meta:{layout:"two-cols",title:"Contents",srcSequence:"./pages/contents.md",slide:{raw:null,title:"Contents",level:1,content:`# Contents

1. AlphaGo (2016)

2. AlphaGo Zero (2017)

3. AlphaZero (2018)

4. MuZero (2020)


::right::

<img src='/[0.Overall]-01.AlphaGo_to_MuZero.jpg' class='h-110 mx-auto'>`,frontmatter:{layout:"two-cols",title:"Contents",srcSequence:"./pages/contents.md"},index:1,start:0,end:22,source:{filepath:"/home/runner/work/sites/sites/pages/contents.md",raw:`---
layout: two-cols 
---


# Contents

1. AlphaGo (2016)

2. AlphaGo Zero (2017)

3. AlphaZero (2018)

4. MuZero (2020)


::right::

<img src='/[0.Overall]-01.AlphaGo_to_MuZero.jpg' class='h-110 mx-auto'>


`,title:"Contents",level:1,content:`# Contents

1. AlphaGo (2016)

2. AlphaGo Zero (2017)

3. AlphaZero (2018)

4. MuZero (2020)


::right::

<img src='/[0.Overall]-01.AlphaGo_to_MuZero.jpg' class='h-110 mx-auto'>`,frontmatter:{layout:"two-cols",title:"Contents"},index:0,start:0,end:22},inline:{raw:`---
src: ./pages/contents.md
---
`,content:"",frontmatter:{},index:1,start:15,end:19},filepath:"/home/runner/work/sites/sites/pages/contents.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:h_,meta:{layout:"cover",coverDate:"",title:"1. AlphaGo (2016)",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:null,title:"1. AlphaGo (2016)",level:1,content:`# 1. AlphaGo (2016)

<br>

<img src='/[1.AlphaGo]-01.title.png' class='shadow-lg mx-auto w-220'>

<p class='text-sm'>

[Homepage](https://www.deepmind.com/publications/mastering-the-game-of-go-with-deep-neural-networks-tree-search) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnUhiHrgvGlFlraNwpoJMCVq)

</p>`,frontmatter:{layout:"cover",coverDate:"",title:"1. AlphaGo (2016)",srcSequence:"./pages/1. AlphaGo.md"},index:2,start:0,end:17,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: cover
coverDate: ""
---

# 1. AlphaGo (2016)

<br>

<img src='/[1.AlphaGo]-01.title.png' class='shadow-lg mx-auto w-220'>

<p class='text-sm'>

[Homepage](https://www.deepmind.com/publications/mastering-the-game-of-go-with-deep-neural-networks-tree-search) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnUhiHrgvGlFlraNwpoJMCVq)

</p>
`,title:"1. AlphaGo (2016)",level:1,content:`# 1. AlphaGo (2016)

<br>

<img src='/[1.AlphaGo]-01.title.png' class='shadow-lg mx-auto w-220'>

<p class='text-sm'>

[Homepage](https://www.deepmind.com/publications/mastering-the-game-of-go-with-deep-neural-networks-tree-search) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnUhiHrgvGlFlraNwpoJMCVq)

</p>`,frontmatter:{layout:"cover",coverDate:"",title:"1. AlphaGo (2016)"},index:0,start:0,end:17},inline:{raw:`---
src: ./pages/1. AlphaGo.md
---
`,content:"",frontmatter:{},index:2,start:19,end:23},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:b_,meta:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`---
layout: two-cols
---
# Tree search in Go

<br>

- Go is a zero-sum game played turn-by-turn on a 19x19 board. The searching process in Go could be perfectly described as a <font class='text-red-600 font-bold'>tree search</font> algorithm.
    <!-- - Nodes represent states; Edges represent actions go from one state to another. 
    - The goal is to find the best path to follow in order to win the game.  -->

- There are theoretically 361! possible situations in a single game. The key to the problem is to reduce the complexity (e.g. Alpha-Beta Pruning, MCTS).

::right::

<br><br>

<img src='/[1.AlphaGo]-02.Tree_search_in_go.jpg' class='mx-auto h-75'>

`,title:"Tree search in Go",level:1,content:`# Tree search in Go

<br>

- Go is a zero-sum game played turn-by-turn on a 19x19 board. The searching process in Go could be perfectly described as a <font class='text-red-600 font-bold'>tree search</font> algorithm.
    <!-- - Nodes represent states; Edges represent actions go from one state to another. 
    - The goal is to find the best path to follow in order to win the game.  -->

- There are theoretically 361! possible situations in a single game. The key to the problem is to reduce the complexity (e.g. Alpha-Beta Pruning, MCTS).

::right::

<br><br>

<img src='/[1.AlphaGo]-02.Tree_search_in_go.jpg' class='mx-auto h-75'>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"},index:3,start:17,end:37,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: two-cols
---
# Tree search in Go

<br>

- Go is a zero-sum game played turn-by-turn on a 19x19 board. The searching process in Go could be perfectly described as a <font class='text-red-600 font-bold'>tree search</font> algorithm.
    <!-- - Nodes represent states; Edges represent actions go from one state to another. 
    - The goal is to find the best path to follow in order to win the game.  -->

- There are theoretically 361! possible situations in a single game. The key to the problem is to reduce the complexity (e.g. Alpha-Beta Pruning, MCTS).

::right::

<br><br>

<img src='/[1.AlphaGo]-02.Tree_search_in_go.jpg' class='mx-auto h-75'>

`,title:"Tree search in Go",level:1,content:`# Tree search in Go

<br>

- Go is a zero-sum game played turn-by-turn on a 19x19 board. The searching process in Go could be perfectly described as a <font class='text-red-600 font-bold'>tree search</font> algorithm.
    <!-- - Nodes represent states; Edges represent actions go from one state to another. 
    - The goal is to find the best path to follow in order to win the game.  -->

- There are theoretically 361! possible situations in a single game. The key to the problem is to reduce the complexity (e.g. Alpha-Beta Pruning, MCTS).

::right::

<br><br>

<img src='/[1.AlphaGo]-02.Tree_search_in_go.jpg' class='mx-auto h-75'>`,frontmatter:{layout:"two-cols"},index:1,start:17,end:37},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:A_,meta:{srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`
# Training pipeline in AlphaGo

<img src='/[1.AlphaGo]-03-0.Overall_training_process.png' class='h-90 mx-auto'>

<p class='text-sm text-center'>
    Two-stage training pipeline
</p>

`,title:"Training pipeline in AlphaGo",level:1,content:`# Training pipeline in AlphaGo

<img src='/[1.AlphaGo]-03-0.Overall_training_process.png' class='h-90 mx-auto'>

<p class='text-sm text-center'>
    Two-stage training pipeline
</p>`,frontmatter:{srcSequence:"./pages/1. AlphaGo.md"},index:4,start:38,end:48,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`
# Training pipeline in AlphaGo

<img src='/[1.AlphaGo]-03-0.Overall_training_process.png' class='h-90 mx-auto'>

<p class='text-sm text-center'>
    Two-stage training pipeline
</p>

`,title:"Training pipeline in AlphaGo",level:1,content:`# Training pipeline in AlphaGo

<img src='/[1.AlphaGo]-03-0.Overall_training_process.png' class='h-90 mx-auto'>

<p class='text-sm text-center'>
    Two-stage training pipeline
</p>`,frontmatter:{},index:2,start:38,end:48},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:C_,meta:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`---
layout: two-cols
---

## Phase 1: Supervised Learning

<br>

- Train 2 policy networks: <font class='text-red-600'>Rollout policy</font> & <font class='text-red-600'>SL policy network</font>. 

- Learn from <u>human expert positions data</u> to predict the distribution of human expert moves (Classification).

- <font class='text-red-600 font-bold'>SL policy network</font>: larger, more accurate but slower. Used in RL stage.

- <font class='text-red-600 font-bold'>Rollout policy</font>: smaller, faster but less accurate. Using smaller pattern features. Used in MCTS.


::right::

<br>

<img src='/[1.AlphaGo]-03-1.SL_training_process.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Supervised learning process
</p>

`,title:"Phase 1: Supervised Learning",level:2,content:`## Phase 1: Supervised Learning

<br>

- Train 2 policy networks: <font class='text-red-600'>Rollout policy</font> & <font class='text-red-600'>SL policy network</font>. 

- Learn from <u>human expert positions data</u> to predict the distribution of human expert moves (Classification).

- <font class='text-red-600 font-bold'>SL policy network</font>: larger, more accurate but slower. Used in RL stage.

- <font class='text-red-600 font-bold'>Rollout policy</font>: smaller, faster but less accurate. Using smaller pattern features. Used in MCTS.


::right::

<br>

<img src='/[1.AlphaGo]-03-1.SL_training_process.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Supervised learning process
</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"},index:5,start:48,end:76,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: two-cols
---

## Phase 1: Supervised Learning

<br>

- Train 2 policy networks: <font class='text-red-600'>Rollout policy</font> & <font class='text-red-600'>SL policy network</font>. 

- Learn from <u>human expert positions data</u> to predict the distribution of human expert moves (Classification).

- <font class='text-red-600 font-bold'>SL policy network</font>: larger, more accurate but slower. Used in RL stage.

- <font class='text-red-600 font-bold'>Rollout policy</font>: smaller, faster but less accurate. Using smaller pattern features. Used in MCTS.


::right::

<br>

<img src='/[1.AlphaGo]-03-1.SL_training_process.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Supervised learning process
</p>

`,title:"Phase 1: Supervised Learning",level:2,content:`## Phase 1: Supervised Learning

<br>

- Train 2 policy networks: <font class='text-red-600'>Rollout policy</font> & <font class='text-red-600'>SL policy network</font>. 

- Learn from <u>human expert positions data</u> to predict the distribution of human expert moves (Classification).

- <font class='text-red-600 font-bold'>SL policy network</font>: larger, more accurate but slower. Used in RL stage.

- <font class='text-red-600 font-bold'>Rollout policy</font>: smaller, faster but less accurate. Using smaller pattern features. Used in MCTS.


::right::

<br>

<img src='/[1.AlphaGo]-03-1.SL_training_process.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Supervised learning process
</p>`,frontmatter:{layout:"two-cols"},index:3,start:48,end:76},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:F_,meta:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`---
layout: two-cols
---

## Phase 2: Reinforcement Learning

<br>

Using **Policy Iteration**:

1. Policy improvement (<font class='text-red-600'>Policy network</font>);

2. Policy evaluation (<font class='text-red-600'>Value network</font>).


::right::

<br>

<img src='/[1.AlphaGo]-03-2.RL_training_process.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Reinforcement learning process
</p>
`,title:"Phase 2: Reinforcement Learning",level:2,content:`## Phase 2: Reinforcement Learning

<br>

Using **Policy Iteration**:

1. Policy improvement (<font class='text-red-600'>Policy network</font>);

2. Policy evaluation (<font class='text-red-600'>Value network</font>).


::right::

<br>

<img src='/[1.AlphaGo]-03-2.RL_training_process.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Reinforcement learning process
</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"},index:6,start:76,end:101,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: two-cols
---

## Phase 2: Reinforcement Learning

<br>

Using **Policy Iteration**:

1. Policy improvement (<font class='text-red-600'>Policy network</font>);

2. Policy evaluation (<font class='text-red-600'>Value network</font>).


::right::

<br>

<img src='/[1.AlphaGo]-03-2.RL_training_process.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Reinforcement learning process
</p>
`,title:"Phase 2: Reinforcement Learning",level:2,content:`## Phase 2: Reinforcement Learning

<br>

Using **Policy Iteration**:

1. Policy improvement (<font class='text-red-600'>Policy network</font>);

2. Policy evaluation (<font class='text-red-600'>Value network</font>).


::right::

<br>

<img src='/[1.AlphaGo]-03-2.RL_training_process.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Reinforcement learning process
</p>`,frontmatter:{layout:"two-cols"},index:4,start:76,end:101},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:W_,meta:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`---
layout: two-cols
---

## Phase 2: Reinforcement Learning

<br>

<font class='text-red-600 font-bold'>Policy network</font>: 

- initialized as the <font class='text-red-600'>SL policy network</font>. The output is the action distribution according to the board state. 

- **Self-play**: play games between current policy network and a <u>randomly selected previous iteration</u> of the policy network. Stabilize training by preventing overfitting to the current policy.

- Every 500 iterations, add the current parameters $\\rho$ to the opponent pool.


::right::

<br>

<img src='/[1.AlphaGo]-04.model_architecture.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Network Architecture
</p>

`,title:"Phase 2: Reinforcement Learning",level:2,content:`## Phase 2: Reinforcement Learning

<br>

<font class='text-red-600 font-bold'>Policy network</font>: 

- initialized as the <font class='text-red-600'>SL policy network</font>. The output is the action distribution according to the board state. 

- **Self-play**: play games between current policy network and a <u>randomly selected previous iteration</u> of the policy network. Stabilize training by preventing overfitting to the current policy.

- Every 500 iterations, add the current parameters $\\rho$ to the opponent pool.


::right::

<br>

<img src='/[1.AlphaGo]-04.model_architecture.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Network Architecture
</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"},index:7,start:101,end:129,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: two-cols
---

## Phase 2: Reinforcement Learning

<br>

<font class='text-red-600 font-bold'>Policy network</font>: 

- initialized as the <font class='text-red-600'>SL policy network</font>. The output is the action distribution according to the board state. 

- **Self-play**: play games between current policy network and a <u>randomly selected previous iteration</u> of the policy network. Stabilize training by preventing overfitting to the current policy.

- Every 500 iterations, add the current parameters $\\rho$ to the opponent pool.


::right::

<br>

<img src='/[1.AlphaGo]-04.model_architecture.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Network Architecture
</p>

`,title:"Phase 2: Reinforcement Learning",level:2,content:`## Phase 2: Reinforcement Learning

<br>

<font class='text-red-600 font-bold'>Policy network</font>: 

- initialized as the <font class='text-red-600'>SL policy network</font>. The output is the action distribution according to the board state. 

- **Self-play**: play games between current policy network and a <u>randomly selected previous iteration</u> of the policy network. Stabilize training by preventing overfitting to the current policy.

- Every 500 iterations, add the current parameters $\\rho$ to the opponent pool.


::right::

<br>

<img src='/[1.AlphaGo]-04.model_architecture.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Network Architecture
</p>`,frontmatter:{layout:"two-cols"},index:5,start:101,end:129},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:lb,meta:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`---
layout: two-cols
---

## Phase 2: Reinforcement Learning

<br>

<font class='text-red-600 font-bold'>Value network</font>:

<p class='break'></p>

- estimate a <u>value function</u> $v^p(s)$ that predicts the outcome $z=\\pm1$ from positions of games played by using policy $p$ for both players (Regression).

$$v^p = \\mathbb{E}[z_t |s_t=s, a_{t\\dots T}\\sim p]$$

- $z_t=\\pm1$ is the <u>terminal reward</u> at the end of the game from the perspective of the current player at time step $t$. <u>Estimated by the MCTS</u>.


::right::

<br>

<img src='/[1.AlphaGo]-04.model_architecture.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Network Architecture
</p>

`,title:"Phase 2: Reinforcement Learning",level:2,content:`## Phase 2: Reinforcement Learning

<br>

<font class='text-red-600 font-bold'>Value network</font>:

<p class='break'></p>

- estimate a <u>value function</u> $v^p(s)$ that predicts the outcome $z=\\pm1$ from positions of games played by using policy $p$ for both players (Regression).

$$v^p = \\mathbb{E}[z_t |s_t=s, a_{t\\dots T}\\sim p]$$

- $z_t=\\pm1$ is the <u>terminal reward</u> at the end of the game from the perspective of the current player at time step $t$. <u>Estimated by the MCTS</u>.


::right::

<br>

<img src='/[1.AlphaGo]-04.model_architecture.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Network Architecture
</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"},index:8,start:129,end:159,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: two-cols
---

## Phase 2: Reinforcement Learning

<br>

<font class='text-red-600 font-bold'>Value network</font>:

<p class='break'></p>

- estimate a <u>value function</u> $v^p(s)$ that predicts the outcome $z=\\pm1$ from positions of games played by using policy $p$ for both players (Regression).

$$v^p = \\mathbb{E}[z_t |s_t=s, a_{t\\dots T}\\sim p]$$

- $z_t=\\pm1$ is the <u>terminal reward</u> at the end of the game from the perspective of the current player at time step $t$. <u>Estimated by the MCTS</u>.


::right::

<br>

<img src='/[1.AlphaGo]-04.model_architecture.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Network Architecture
</p>

`,title:"Phase 2: Reinforcement Learning",level:2,content:`## Phase 2: Reinforcement Learning

<br>

<font class='text-red-600 font-bold'>Value network</font>:

<p class='break'></p>

- estimate a <u>value function</u> $v^p(s)$ that predicts the outcome $z=\\pm1$ from positions of games played by using policy $p$ for both players (Regression).

$$v^p = \\mathbb{E}[z_t |s_t=s, a_{t\\dots T}\\sim p]$$

- $z_t=\\pm1$ is the <u>terminal reward</u> at the end of the game from the perspective of the current player at time step $t$. <u>Estimated by the MCTS</u>.


::right::

<br>

<img src='/[1.AlphaGo]-04.model_architecture.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    Network Architecture
</p>`,frontmatter:{layout:"two-cols"},index:6,start:129,end:159},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:pb,meta:{srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`
# Neural Network Architecture

- 13-layer CNN 
- input feature/state size: 19x19x48
- The rules of Go are <u>invariant under rotation and reflection</u>. AlphaGo exploits this symmetrics by passing a mini-batch of all 8 positions into the policy network or value network and computed
in parallel.

<br>

<img src="/[1.AlphaGo]-05.input_feature.png" class="border h-65 mx-auto">

`,title:"Neural Network Architecture",level:1,content:`# Neural Network Architecture

- 13-layer CNN 
- input feature/state size: 19x19x48
- The rules of Go are <u>invariant under rotation and reflection</u>. AlphaGo exploits this symmetrics by passing a mini-batch of all 8 positions into the policy network or value network and computed
in parallel.

<br>

<img src="/[1.AlphaGo]-05.input_feature.png" class="border h-65 mx-auto">`,frontmatter:{srcSequence:"./pages/1. AlphaGo.md"},index:9,start:160,end:173,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`
# Neural Network Architecture

- 13-layer CNN 
- input feature/state size: 19x19x48
- The rules of Go are <u>invariant under rotation and reflection</u>. AlphaGo exploits this symmetrics by passing a mini-batch of all 8 positions into the policy network or value network and computed
in parallel.

<br>

<img src="/[1.AlphaGo]-05.input_feature.png" class="border h-65 mx-auto">

`,title:"Neural Network Architecture",level:1,content:`# Neural Network Architecture

- 13-layer CNN 
- input feature/state size: 19x19x48
- The rules of Go are <u>invariant under rotation and reflection</u>. AlphaGo exploits this symmetrics by passing a mini-batch of all 8 positions into the policy network or value network and computed
in parallel.

<br>

<img src="/[1.AlphaGo]-05.input_feature.png" class="border h-65 mx-auto">`,frontmatter:{},index:7,start:160,end:173},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:vb,meta:{srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`
# Monte Carlo tree search (<font class='text-red-600'>MCTS</font>) in AlphaGo

<br>

- <font class='text-red-600 font-bold'>Monte Carlo method</font>: uses random sampling to estimate the expected outcomes for deterministic problems.

- MCTS is used to simulate potential actions to the best results without traversing every node in the search tree.

<br>

<img src="/[1.AlphaGo]-06-0.MCTS.png" class="border h-60 mx-auto">
`,title:"Monte Carlo tree search (<font class='text-red-600'>MCTS</font>) in AlphaGo",level:1,content:`# Monte Carlo tree search (<font class='text-red-600'>MCTS</font>) in AlphaGo

<br>

- <font class='text-red-600 font-bold'>Monte Carlo method</font>: uses random sampling to estimate the expected outcomes for deterministic problems.

- MCTS is used to simulate potential actions to the best results without traversing every node in the search tree.

<br>

<img src="/[1.AlphaGo]-06-0.MCTS.png" class="border h-60 mx-auto">`,frontmatter:{srcSequence:"./pages/1. AlphaGo.md"},index:10,start:174,end:187,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`
# Monte Carlo tree search (<font class='text-red-600'>MCTS</font>) in AlphaGo

<br>

- <font class='text-red-600 font-bold'>Monte Carlo method</font>: uses random sampling to estimate the expected outcomes for deterministic problems.

- MCTS is used to simulate potential actions to the best results without traversing every node in the search tree.

<br>

<img src="/[1.AlphaGo]-06-0.MCTS.png" class="border h-60 mx-auto">
`,title:"Monte Carlo tree search (<font class='text-red-600'>MCTS</font>) in AlphaGo",level:1,content:`# Monte Carlo tree search (<font class='text-red-600'>MCTS</font>) in AlphaGo

<br>

- <font class='text-red-600 font-bold'>Monte Carlo method</font>: uses random sampling to estimate the expected outcomes for deterministic problems.

- MCTS is used to simulate potential actions to the best results without traversing every node in the search tree.

<br>

<img src="/[1.AlphaGo]-06-0.MCTS.png" class="border h-60 mx-auto">`,frontmatter:{},index:8,start:174,end:187},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Sb,meta:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`---
layout: two-cols
---

## Step 1: Selection

<br>

Each simulation starts from the root node to the <u>leaf node</u> (unvisited, non-terminal node).

$$a_t = \\argmax_a (Q(s_t,a) + u(s_t, a))$$

$$u(s,a) \\propto \\frac{P(s,a)}{1+N(s,a)}$$


::right::

<br>

<img src='/[1.AlphaGo]-06-1.MCTS_selection.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS selection
</p>

`,title:"Step 1: Selection",level:2,content:`## Step 1: Selection

<br>

Each simulation starts from the root node to the <u>leaf node</u> (unvisited, non-terminal node).

$$a_t = \\argmax_a (Q(s_t,a) + u(s_t, a))$$

$$u(s,a) \\propto \\frac{P(s,a)}{1+N(s,a)}$$


::right::

<br>

<img src='/[1.AlphaGo]-06-1.MCTS_selection.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS selection
</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"},index:11,start:187,end:213,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: two-cols
---

## Step 1: Selection

<br>

Each simulation starts from the root node to the <u>leaf node</u> (unvisited, non-terminal node).

$$a_t = \\argmax_a (Q(s_t,a) + u(s_t, a))$$

$$u(s,a) \\propto \\frac{P(s,a)}{1+N(s,a)}$$


::right::

<br>

<img src='/[1.AlphaGo]-06-1.MCTS_selection.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS selection
</p>

`,title:"Step 1: Selection",level:2,content:`## Step 1: Selection

<br>

Each simulation starts from the root node to the <u>leaf node</u> (unvisited, non-terminal node).

$$a_t = \\argmax_a (Q(s_t,a) + u(s_t, a))$$

$$u(s,a) \\propto \\frac{P(s,a)}{1+N(s,a)}$$


::right::

<br>

<img src='/[1.AlphaGo]-06-1.MCTS_selection.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS selection
</p>`,frontmatter:{layout:"two-cols"},index:9,start:187,end:213},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Rb,meta:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`---
layout: two-cols
---

## Step 2: Expansion

<br>

When visiting to a leaf node, add new node to the search tree. 

Store the prior probability of the node.


::right::

<br>

<img src='/[1.AlphaGo]-06-2.MCTS_expansion.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS expansion
</p>

`,title:"Step 2: Expansion",level:2,content:`## Step 2: Expansion

<br>

When visiting to a leaf node, add new node to the search tree. 

Store the prior probability of the node.


::right::

<br>

<img src='/[1.AlphaGo]-06-2.MCTS_expansion.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS expansion
</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"},index:12,start:213,end:237,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: two-cols
---

## Step 2: Expansion

<br>

When visiting to a leaf node, add new node to the search tree. 

Store the prior probability of the node.


::right::

<br>

<img src='/[1.AlphaGo]-06-2.MCTS_expansion.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS expansion
</p>

`,title:"Step 2: Expansion",level:2,content:`## Step 2: Expansion

<br>

When visiting to a leaf node, add new node to the search tree. 

Store the prior probability of the node.


::right::

<br>

<img src='/[1.AlphaGo]-06-2.MCTS_expansion.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS expansion
</p>`,frontmatter:{layout:"two-cols"},index:10,start:213,end:237},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Wb,meta:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`---
layout: two-cols
---

## Step 3: Evaluation

<br>

The leaf node is evaluated in two ways:

1. by the <font class='text-red-600'>Value network</font> $v_\\theta(s_L)$

2. by the outcome $z_L=\\pm1$ of a random rollout until terminal step using the <font class='text-red-600'>fast rollout policy</font> $p_\\pi$.

<br>

$$V(s_L) = (1-\\lambda)v_\\theta (s_L) + \\lambda z_L$$


::right::

<br>

<img src='/[1.AlphaGo]-06-3.MCTS_evaluation.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS evaluation
</p>

`,title:"Step 3: Evaluation",level:2,content:`## Step 3: Evaluation

<br>

The leaf node is evaluated in two ways:

1. by the <font class='text-red-600'>Value network</font> $v_\\theta(s_L)$

2. by the outcome $z_L=\\pm1$ of a random rollout until terminal step using the <font class='text-red-600'>fast rollout policy</font> $p_\\pi$.

<br>

$$V(s_L) = (1-\\lambda)v_\\theta (s_L) + \\lambda z_L$$


::right::

<br>

<img src='/[1.AlphaGo]-06-3.MCTS_evaluation.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS evaluation
</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"},index:13,start:237,end:267,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: two-cols
---

## Step 3: Evaluation

<br>

The leaf node is evaluated in two ways:

1. by the <font class='text-red-600'>Value network</font> $v_\\theta(s_L)$

2. by the outcome $z_L=\\pm1$ of a random rollout until terminal step using the <font class='text-red-600'>fast rollout policy</font> $p_\\pi$.

<br>

$$V(s_L) = (1-\\lambda)v_\\theta (s_L) + \\lambda z_L$$


::right::

<br>

<img src='/[1.AlphaGo]-06-3.MCTS_evaluation.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS evaluation
</p>

`,title:"Step 3: Evaluation",level:2,content:`## Step 3: Evaluation

<br>

The leaf node is evaluated in two ways:

1. by the <font class='text-red-600'>Value network</font> $v_\\theta(s_L)$

2. by the outcome $z_L=\\pm1$ of a random rollout until terminal step using the <font class='text-red-600'>fast rollout policy</font> $p_\\pi$.

<br>

$$V(s_L) = (1-\\lambda)v_\\theta (s_L) + \\lambda z_L$$


::right::

<br>

<img src='/[1.AlphaGo]-06-3.MCTS_evaluation.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS evaluation
</p>`,frontmatter:{layout:"two-cols"},index:11,start:237,end:267},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:aw,meta:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`---
layout: two-cols
---

## Step 4: Backup

At the end of simulation, the action values and visit counts of all traversed edges are updated.

$$N(s,a) = \\sum_{i=1}^N 1(s,a,i)$$

$$Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i)$$


::right::

<br>

<img src='/[1.AlphaGo]-06-4.MCTS_backup.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS backup
</p>

`,title:"Step 4: Backup",level:2,content:`## Step 4: Backup

At the end of simulation, the action values and visit counts of all traversed edges are updated.

$$N(s,a) = \\sum_{i=1}^N 1(s,a,i)$$

$$Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i)$$


::right::

<br>

<img src='/[1.AlphaGo]-06-4.MCTS_backup.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS backup
</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/1. AlphaGo.md"},index:14,start:267,end:291,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`---
layout: two-cols
---

## Step 4: Backup

At the end of simulation, the action values and visit counts of all traversed edges are updated.

$$N(s,a) = \\sum_{i=1}^N 1(s,a,i)$$

$$Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i)$$


::right::

<br>

<img src='/[1.AlphaGo]-06-4.MCTS_backup.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS backup
</p>

`,title:"Step 4: Backup",level:2,content:`## Step 4: Backup

At the end of simulation, the action values and visit counts of all traversed edges are updated.

$$N(s,a) = \\sum_{i=1}^N 1(s,a,i)$$

$$Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i)$$


::right::

<br>

<img src='/[1.AlphaGo]-06-4.MCTS_backup.png' class='mx-auto h-95'>

<p class='text-xs text-center'>
    MCTS backup
</p>`,frontmatter:{layout:"two-cols"},index:12,start:267,end:291},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:dw,meta:{srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`
# Training target


- <font class='text-red-600 font-bold'>Rollout policy network</font> & <font class='text-red-600 font-bold'>SL policy network</font>: maximize the likelihood of the human move $a$ selected in state $s$.

$$\\Delta \\sigma \\propto \\frac{\\partial \\log P_{\\sigma}(a|s)}{\\partial \\sigma}$$

- <font class='text-red-600 font-bold'>RL policy network</font>: maximize the expected outcome of the selected move.

$$\\Delta \\rho \\propto \\frac{\\partial \\log P_{\\rho}(a|s)}{\\partial \\rho} z_t$$

- <font class='text-red-600 font-bold'>Value network</font>: minimize the mean squared error (MSE) between the predicted value $v_\\theta(s)$, and the corresponding outcome $z$.

$$\\Delta \\theta \\propto \\frac{\\partial v_\\theta(s)}{\\partial \\theta} (z - v_\\theta(s))$$



<div class='group'>
    <a href='#' class='top-10 right-15 absolute group-hover:font-semibold'>networks</a>
    <img src='/[1.AlphaGo]-03-0.Overall_training_process.png' class='h-70 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"Training target",level:1,content:`# Training target


- <font class='text-red-600 font-bold'>Rollout policy network</font> & <font class='text-red-600 font-bold'>SL policy network</font>: maximize the likelihood of the human move $a$ selected in state $s$.

$$\\Delta \\sigma \\propto \\frac{\\partial \\log P_{\\sigma}(a|s)}{\\partial \\sigma}$$

- <font class='text-red-600 font-bold'>RL policy network</font>: maximize the expected outcome of the selected move.

$$\\Delta \\rho \\propto \\frac{\\partial \\log P_{\\rho}(a|s)}{\\partial \\rho} z_t$$

- <font class='text-red-600 font-bold'>Value network</font>: minimize the mean squared error (MSE) between the predicted value $v_\\theta(s)$, and the corresponding outcome $z$.

$$\\Delta \\theta \\propto \\frac{\\partial v_\\theta(s)}{\\partial \\theta} (z - v_\\theta(s))$$



<div class='group'>
    <a href='#' class='top-10 right-15 absolute group-hover:font-semibold'>networks</a>
    <img src='/[1.AlphaGo]-03-0.Overall_training_process.png' class='h-70 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{srcSequence:"./pages/1. AlphaGo.md"},index:15,start:292,end:316,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`
# Training target


- <font class='text-red-600 font-bold'>Rollout policy network</font> & <font class='text-red-600 font-bold'>SL policy network</font>: maximize the likelihood of the human move $a$ selected in state $s$.

$$\\Delta \\sigma \\propto \\frac{\\partial \\log P_{\\sigma}(a|s)}{\\partial \\sigma}$$

- <font class='text-red-600 font-bold'>RL policy network</font>: maximize the expected outcome of the selected move.

$$\\Delta \\rho \\propto \\frac{\\partial \\log P_{\\rho}(a|s)}{\\partial \\rho} z_t$$

- <font class='text-red-600 font-bold'>Value network</font>: minimize the mean squared error (MSE) between the predicted value $v_\\theta(s)$, and the corresponding outcome $z$.

$$\\Delta \\theta \\propto \\frac{\\partial v_\\theta(s)}{\\partial \\theta} (z - v_\\theta(s))$$



<div class='group'>
    <a href='#' class='top-10 right-15 absolute group-hover:font-semibold'>networks</a>
    <img src='/[1.AlphaGo]-03-0.Overall_training_process.png' class='h-70 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"Training target",level:1,content:`# Training target


- <font class='text-red-600 font-bold'>Rollout policy network</font> & <font class='text-red-600 font-bold'>SL policy network</font>: maximize the likelihood of the human move $a$ selected in state $s$.

$$\\Delta \\sigma \\propto \\frac{\\partial \\log P_{\\sigma}(a|s)}{\\partial \\sigma}$$

- <font class='text-red-600 font-bold'>RL policy network</font>: maximize the expected outcome of the selected move.

$$\\Delta \\rho \\propto \\frac{\\partial \\log P_{\\rho}(a|s)}{\\partial \\rho} z_t$$

- <font class='text-red-600 font-bold'>Value network</font>: minimize the mean squared error (MSE) between the predicted value $v_\\theta(s)$, and the corresponding outcome $z$.

$$\\Delta \\theta \\propto \\frac{\\partial v_\\theta(s)}{\\partial \\theta} (z - v_\\theta(s))$$



<div class='group'>
    <a href='#' class='top-10 right-15 absolute group-hover:font-semibold'>networks</a>
    <img src='/[1.AlphaGo]-03-0.Overall_training_process.png' class='h-70 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{},index:13,start:292,end:316},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:bw,meta:{srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`
# Results

<br>

<img src='/[1.AlphaGo]-07.results.png' class='h-80 mx-auto'>

<p class='text-xs text-center'>
AlphaGo won <b>Fan Hui</b>, the winner of 2013, 2014 and 2015
European Go championships, <u>by 5:0</u> in a formal five-game match over 5-9 October 2015.
</p>

`,title:"Results",level:1,content:`# Results

<br>

<img src='/[1.AlphaGo]-07.results.png' class='h-80 mx-auto'>

<p class='text-xs text-center'>
AlphaGo won <b>Fan Hui</b>, the winner of 2013, 2014 and 2015
European Go championships, <u>by 5:0</u> in a formal five-game match over 5-9 October 2015.
</p>`,frontmatter:{srcSequence:"./pages/1. AlphaGo.md"},index:16,start:317,end:330,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`
# Results

<br>

<img src='/[1.AlphaGo]-07.results.png' class='h-80 mx-auto'>

<p class='text-xs text-center'>
AlphaGo won <b>Fan Hui</b>, the winner of 2013, 2014 and 2015
European Go championships, <u>by 5:0</u> in a formal five-game match over 5-9 October 2015.
</p>

`,title:"Results",level:1,content:`# Results

<br>

<img src='/[1.AlphaGo]-07.results.png' class='h-80 mx-auto'>

<p class='text-xs text-center'>
AlphaGo won <b>Fan Hui</b>, the winner of 2013, 2014 and 2015
European Go championships, <u>by 5:0</u> in a formal five-game match over 5-9 October 2015.
</p>`,frontmatter:{},index:14,start:317,end:330},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Mw,meta:{srcSequence:"./pages/1. AlphaGo.md",slide:{raw:`
# Computing Expenses

- **Rollout policy** (MCTS): approximately 1,000 simulations per second per CPU thread on an empty board.
- **SL policy classification**: around 3 weeks for 340 million training steps, using 50 GPUs. 
- **RL policy network**: trained for 10,000 mini-batches of 128 games, using 50 GPUs, for one day.
- **Value network**: trained for 50 million mini-batches of 32 positions, using 50 GPUs, for one week.

<br>

<img src='/[1.AlphaGo]-08.computing_expenses.png' class='border h-65 mx-auto'>

`,title:"Computing Expenses",level:1,content:`# Computing Expenses

- **Rollout policy** (MCTS): approximately 1,000 simulations per second per CPU thread on an empty board.
- **SL policy classification**: around 3 weeks for 340 million training steps, using 50 GPUs. 
- **RL policy network**: trained for 10,000 mini-batches of 128 games, using 50 GPUs, for one day.
- **Value network**: trained for 50 million mini-batches of 32 positions, using 50 GPUs, for one week.

<br>

<img src='/[1.AlphaGo]-08.computing_expenses.png' class='border h-65 mx-auto'>`,frontmatter:{srcSequence:"./pages/1. AlphaGo.md"},index:17,start:331,end:344,source:{filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",raw:`
# Computing Expenses

- **Rollout policy** (MCTS): approximately 1,000 simulations per second per CPU thread on an empty board.
- **SL policy classification**: around 3 weeks for 340 million training steps, using 50 GPUs. 
- **RL policy network**: trained for 10,000 mini-batches of 128 games, using 50 GPUs, for one day.
- **Value network**: trained for 50 million mini-batches of 32 positions, using 50 GPUs, for one week.

<br>

<img src='/[1.AlphaGo]-08.computing_expenses.png' class='border h-65 mx-auto'>

`,title:"Computing Expenses",level:1,content:`# Computing Expenses

- **Rollout policy** (MCTS): approximately 1,000 simulations per second per CPU thread on an empty board.
- **SL policy classification**: around 3 weeks for 340 million training steps, using 50 GPUs. 
- **RL policy network**: trained for 10,000 mini-batches of 128 games, using 50 GPUs, for one day.
- **Value network**: trained for 50 million mini-batches of 32 positions, using 50 GPUs, for one week.

<br>

<img src='/[1.AlphaGo]-08.computing_expenses.png' class='border h-65 mx-auto'>`,frontmatter:{},index:15,start:331,end:344},filepath:"/home/runner/work/sites/sites/pages/1. AlphaGo.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Ow,meta:{layout:"cover",coverDate:"",title:"2. AlphaGo Zero (2017)",srcSequence:"./pages/2. AlphaGo Zero.md",slide:{raw:null,title:"2. AlphaGo Zero (2017)",level:1,content:`# 2. AlphaGo Zero (2017)

<br>

<img src='/[2.AlphaGo_Zero]-01.title.png' class='shadow-lg mx-auto w-220'>


<p class='text-sm'>

[Homepage](https://www.deepmind.com/blog/alphago-zero-starting-from-scratch) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnRiLn3v6dKkklJ8yzO8uinc)

</p>`,frontmatter:{layout:"cover",coverDate:"",title:"2. AlphaGo Zero (2017)",srcSequence:"./pages/2. AlphaGo Zero.md"},index:18,start:0,end:18,source:{filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",raw:`---
layout: cover
coverDate: ""
---

# 2. AlphaGo Zero (2017)

<br>

<img src='/[2.AlphaGo_Zero]-01.title.png' class='shadow-lg mx-auto w-220'>


<p class='text-sm'>

[Homepage](https://www.deepmind.com/blog/alphago-zero-starting-from-scratch) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnRiLn3v6dKkklJ8yzO8uinc)

</p>
`,title:"2. AlphaGo Zero (2017)",level:1,content:`# 2. AlphaGo Zero (2017)

<br>

<img src='/[2.AlphaGo_Zero]-01.title.png' class='shadow-lg mx-auto w-220'>


<p class='text-sm'>

[Homepage](https://www.deepmind.com/blog/alphago-zero-starting-from-scratch) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnRiLn3v6dKkklJ8yzO8uinc)

</p>`,frontmatter:{layout:"cover",coverDate:"",title:"2. AlphaGo Zero (2017)"},index:0,start:0,end:18},inline:{raw:`---
src: ./pages/2. AlphaGo Zero.md
---
`,content:"",frontmatter:{},index:3,start:23,end:27},filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Lw,meta:{srcSequence:"./pages/2. AlphaGo Zero.md",slide:{raw:`
# How does it differ from AlphaGo?

1. AlphaGo Zero is <font class='text-red-600'>trained solely by self-play</font>, without any supervision or use of human data.

2. AlphaGo Zero <font class='text-red-600'>only uses the black and white stones</font> from the Go board as its input.

3. AlphaGo Zero uses a <font class='text-red-600'>single neural network</font>, rather than separate policy and value networks.

4. AlphaGo Zero <font class='text-red-600'>does not use \u201Crollouts\u201D</font> to evaluate positions and sample moves. Instead, it uses a simpler tree search that relies upon this single neural network.

`,title:"How does it differ from AlphaGo?",level:1,content:`# How does it differ from AlphaGo?

1. AlphaGo Zero is <font class='text-red-600'>trained solely by self-play</font>, without any supervision or use of human data.

2. AlphaGo Zero <font class='text-red-600'>only uses the black and white stones</font> from the Go board as its input.

3. AlphaGo Zero uses a <font class='text-red-600'>single neural network</font>, rather than separate policy and value networks.

4. AlphaGo Zero <font class='text-red-600'>does not use \u201Crollouts\u201D</font> to evaluate positions and sample moves. Instead, it uses a simpler tree search that relies upon this single neural network.`,frontmatter:{srcSequence:"./pages/2. AlphaGo Zero.md"},index:19,start:19,end:31,source:{filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",raw:`
# How does it differ from AlphaGo?

1. AlphaGo Zero is <font class='text-red-600'>trained solely by self-play</font>, without any supervision or use of human data.

2. AlphaGo Zero <font class='text-red-600'>only uses the black and white stones</font> from the Go board as its input.

3. AlphaGo Zero uses a <font class='text-red-600'>single neural network</font>, rather than separate policy and value networks.

4. AlphaGo Zero <font class='text-red-600'>does not use \u201Crollouts\u201D</font> to evaluate positions and sample moves. Instead, it uses a simpler tree search that relies upon this single neural network.

`,title:"How does it differ from AlphaGo?",level:1,content:`# How does it differ from AlphaGo?

1. AlphaGo Zero is <font class='text-red-600'>trained solely by self-play</font>, without any supervision or use of human data.

2. AlphaGo Zero <font class='text-red-600'>only uses the black and white stones</font> from the Go board as its input.

3. AlphaGo Zero uses a <font class='text-red-600'>single neural network</font>, rather than separate policy and value networks.

4. AlphaGo Zero <font class='text-red-600'>does not use \u201Crollouts\u201D</font> to evaluate positions and sample moves. Instead, it uses a simpler tree search that relies upon this single neural network.`,frontmatter:{},index:1,start:19,end:31},filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Bw,meta:{layout:"two-cols",srcSequence:"./pages/2. AlphaGo Zero.md",slide:{raw:`---
layout: two-cols
---

# Self-play training pipeline

<div class='text-sm'>

- A game terminates <font class='text-red-600'>when both players pass</font>, when the search value drops <u>below a resignation threshold</u> or when the game <u>exceeds a maximum length</u>.

- After each iteration of training, the performance of the new player was measured against the best player; if the new player <u>won by a margin of 55%</u>, then it replaced the best player

$$z_t = \\pm1$$
$$(\\mathbf{p}, v) = f_\\theta(s)$$
$$l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2$$

</div>

::right::

<br>

<img src='/[2.AlphaGo_Zero]-02-0.self-play.png' class='mx-auto h-90'>

<p class='text-xs text-center'>
    Self-training pipeline
</p>
`,title:"Self-play training pipeline",level:1,content:`# Self-play training pipeline

<div class='text-sm'>

- A game terminates <font class='text-red-600'>when both players pass</font>, when the search value drops <u>below a resignation threshold</u> or when the game <u>exceeds a maximum length</u>.

- After each iteration of training, the performance of the new player was measured against the best player; if the new player <u>won by a margin of 55%</u>, then it replaced the best player

$$z_t = \\pm1$$
$$(\\mathbf{p}, v) = f_\\theta(s)$$
$$l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2$$

</div>

::right::

<br>

<img src='/[2.AlphaGo_Zero]-02-0.self-play.png' class='mx-auto h-90'>

<p class='text-xs text-center'>
    Self-training pipeline
</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/2. AlphaGo Zero.md"},index:20,start:31,end:59,source:{filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",raw:`---
layout: two-cols
---

# Self-play training pipeline

<div class='text-sm'>

- A game terminates <font class='text-red-600'>when both players pass</font>, when the search value drops <u>below a resignation threshold</u> or when the game <u>exceeds a maximum length</u>.

- After each iteration of training, the performance of the new player was measured against the best player; if the new player <u>won by a margin of 55%</u>, then it replaced the best player

$$z_t = \\pm1$$
$$(\\mathbf{p}, v) = f_\\theta(s)$$
$$l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2$$

</div>

::right::

<br>

<img src='/[2.AlphaGo_Zero]-02-0.self-play.png' class='mx-auto h-90'>

<p class='text-xs text-center'>
    Self-training pipeline
</p>
`,title:"Self-play training pipeline",level:1,content:`# Self-play training pipeline

<div class='text-sm'>

- A game terminates <font class='text-red-600'>when both players pass</font>, when the search value drops <u>below a resignation threshold</u> or when the game <u>exceeds a maximum length</u>.

- After each iteration of training, the performance of the new player was measured against the best player; if the new player <u>won by a margin of 55%</u>, then it replaced the best player

$$z_t = \\pm1$$
$$(\\mathbf{p}, v) = f_\\theta(s)$$
$$l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2$$

</div>

::right::

<br>

<img src='/[2.AlphaGo_Zero]-02-0.self-play.png' class='mx-auto h-90'>

<p class='text-xs text-center'>
    Self-training pipeline
</p>`,frontmatter:{layout:"two-cols"},index:2,start:31,end:59},filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:lx,meta:{srcSequence:"./pages/2. AlphaGo Zero.md",slide:{raw:`
# MCTS in AlphaGo Zero

Basically the same as AlphaGo. Sightly different in <font class='text-red-600 font-bold'>evaluate</font> and <font class='text-red-600 font-bold'>play</font> phase.

- <font class='text-red-600 font-bold'>Evaluate</font>: <u>Without random rollouts</u> as in AlphaGo, the action value $V(s)$ of the node $s$ are fully evaluated by the neural network.
$$(P(s,\\cdot), V(s)) = f_\\theta(s)$$

- <font class='text-red-600 font-bold'>Play</font>: Once the search is complete, search probabilities $\\pi$ are returned, proportional to $N^{1/\\tau}$.
    - $N$: the <u>visit count</u> of each move from the root state.
    - $\\tau$: temperature param that controls the level of exploration. ($\\tau=0$: <u>greedy search</u>; $\\tau \\rightarrow \\infty$: <u>uniform sample</u>)

$$\\pi(a|s_0) = \\frac{N(s_0,a)^{1/\\tau}}{\\sum_b N(s_0,b)^{1/\\tau}}$$

- the child node corresponding to the played action <u>becomes the new root node</u>; retain the subtree below this child, <u>discard the remainder</u>.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>MTCS</a>
    <img src='/[2.AlphaGo_Zero]-03.MCTS.png' class='h-60 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"MCTS in AlphaGo Zero",level:1,content:`# MCTS in AlphaGo Zero

Basically the same as AlphaGo. Sightly different in <font class='text-red-600 font-bold'>evaluate</font> and <font class='text-red-600 font-bold'>play</font> phase.

- <font class='text-red-600 font-bold'>Evaluate</font>: <u>Without random rollouts</u> as in AlphaGo, the action value $V(s)$ of the node $s$ are fully evaluated by the neural network.
$$(P(s,\\cdot), V(s)) = f_\\theta(s)$$

- <font class='text-red-600 font-bold'>Play</font>: Once the search is complete, search probabilities $\\pi$ are returned, proportional to $N^{1/\\tau}$.
    - $N$: the <u>visit count</u> of each move from the root state.
    - $\\tau$: temperature param that controls the level of exploration. ($\\tau=0$: <u>greedy search</u>; $\\tau \\rightarrow \\infty$: <u>uniform sample</u>)

$$\\pi(a|s_0) = \\frac{N(s_0,a)^{1/\\tau}}{\\sum_b N(s_0,b)^{1/\\tau}}$$

- the child node corresponding to the played action <u>becomes the new root node</u>; retain the subtree below this child, <u>discard the remainder</u>.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>MTCS</a>
    <img src='/[2.AlphaGo_Zero]-03.MCTS.png' class='h-60 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{srcSequence:"./pages/2. AlphaGo Zero.md"},index:21,start:60,end:83,source:{filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",raw:`
# MCTS in AlphaGo Zero

Basically the same as AlphaGo. Sightly different in <font class='text-red-600 font-bold'>evaluate</font> and <font class='text-red-600 font-bold'>play</font> phase.

- <font class='text-red-600 font-bold'>Evaluate</font>: <u>Without random rollouts</u> as in AlphaGo, the action value $V(s)$ of the node $s$ are fully evaluated by the neural network.
$$(P(s,\\cdot), V(s)) = f_\\theta(s)$$

- <font class='text-red-600 font-bold'>Play</font>: Once the search is complete, search probabilities $\\pi$ are returned, proportional to $N^{1/\\tau}$.
    - $N$: the <u>visit count</u> of each move from the root state.
    - $\\tau$: temperature param that controls the level of exploration. ($\\tau=0$: <u>greedy search</u>; $\\tau \\rightarrow \\infty$: <u>uniform sample</u>)

$$\\pi(a|s_0) = \\frac{N(s_0,a)^{1/\\tau}}{\\sum_b N(s_0,b)^{1/\\tau}}$$

- the child node corresponding to the played action <u>becomes the new root node</u>; retain the subtree below this child, <u>discard the remainder</u>.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>MTCS</a>
    <img src='/[2.AlphaGo_Zero]-03.MCTS.png' class='h-60 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"MCTS in AlphaGo Zero",level:1,content:`# MCTS in AlphaGo Zero

Basically the same as AlphaGo. Sightly different in <font class='text-red-600 font-bold'>evaluate</font> and <font class='text-red-600 font-bold'>play</font> phase.

- <font class='text-red-600 font-bold'>Evaluate</font>: <u>Without random rollouts</u> as in AlphaGo, the action value $V(s)$ of the node $s$ are fully evaluated by the neural network.
$$(P(s,\\cdot), V(s)) = f_\\theta(s)$$

- <font class='text-red-600 font-bold'>Play</font>: Once the search is complete, search probabilities $\\pi$ are returned, proportional to $N^{1/\\tau}$.
    - $N$: the <u>visit count</u> of each move from the root state.
    - $\\tau$: temperature param that controls the level of exploration. ($\\tau=0$: <u>greedy search</u>; $\\tau \\rightarrow \\infty$: <u>uniform sample</u>)

$$\\pi(a|s_0) = \\frac{N(s_0,a)^{1/\\tau}}{\\sum_b N(s_0,b)^{1/\\tau}}$$

- the child node corresponding to the played action <u>becomes the new root node</u>; retain the subtree below this child, <u>discard the remainder</u>.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>MTCS</a>
    <img src='/[2.AlphaGo_Zero]-03.MCTS.png' class='h-60 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{},index:3,start:60,end:83},filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:_x,meta:{srcSequence:"./pages/2. AlphaGo Zero.md",slide:{raw:`
# Network Architecture

- 1 <font class='text-red-600 font-bold'>convolutional</font> block followed by 19 or 39 <font class='text-red-600 font-bold'>residual</font> block.
    - <font class='text-red-600'>Conv block</font>: conv $\\rightarrow$ BN $\\rightarrow$ relu
    - <font class='text-red-600'>Res block</font>: conv $\\rightarrow$ BN $\\rightarrow$ relu $\\rightarrow$ conv $\\rightarrow$ BN $\\rightarrow$ skip-connect $\\rightarrow$ relu

- Two output heads for computing the <u>policy</u> and <u>value</u>.

- Feature size: $19 \\times 19 \\times 17$ (8 stone history x 2 player existence + 1 color), <u>no hand-crafted features</u> as in AlphaGo.

$$s_t = [X_t, Y_t, X_{t-1}, Y_{t-1}, \\dots, X_{t-7}, Y_{t-7}, C]$$

- Similar to AlphaGo, AlphaGo Zero also augments the training dataset by <u>sampling random rotations or reflections</u> of the positions during MCTS.
`,title:"Network Architecture",level:1,content:`# Network Architecture

- 1 <font class='text-red-600 font-bold'>convolutional</font> block followed by 19 or 39 <font class='text-red-600 font-bold'>residual</font> block.
    - <font class='text-red-600'>Conv block</font>: conv $\\rightarrow$ BN $\\rightarrow$ relu
    - <font class='text-red-600'>Res block</font>: conv $\\rightarrow$ BN $\\rightarrow$ relu $\\rightarrow$ conv $\\rightarrow$ BN $\\rightarrow$ skip-connect $\\rightarrow$ relu

- Two output heads for computing the <u>policy</u> and <u>value</u>.

- Feature size: $19 \\times 19 \\times 17$ (8 stone history x 2 player existence + 1 color), <u>no hand-crafted features</u> as in AlphaGo.

$$s_t = [X_t, Y_t, X_{t-1}, Y_{t-1}, \\dots, X_{t-7}, Y_{t-7}, C]$$

- Similar to AlphaGo, AlphaGo Zero also augments the training dataset by <u>sampling random rotations or reflections</u> of the positions during MCTS.`,frontmatter:{srcSequence:"./pages/2. AlphaGo Zero.md"},index:22,start:84,end:99,source:{filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",raw:`
# Network Architecture

- 1 <font class='text-red-600 font-bold'>convolutional</font> block followed by 19 or 39 <font class='text-red-600 font-bold'>residual</font> block.
    - <font class='text-red-600'>Conv block</font>: conv $\\rightarrow$ BN $\\rightarrow$ relu
    - <font class='text-red-600'>Res block</font>: conv $\\rightarrow$ BN $\\rightarrow$ relu $\\rightarrow$ conv $\\rightarrow$ BN $\\rightarrow$ skip-connect $\\rightarrow$ relu

- Two output heads for computing the <u>policy</u> and <u>value</u>.

- Feature size: $19 \\times 19 \\times 17$ (8 stone history x 2 player existence + 1 color), <u>no hand-crafted features</u> as in AlphaGo.

$$s_t = [X_t, Y_t, X_{t-1}, Y_{t-1}, \\dots, X_{t-7}, Y_{t-7}, C]$$

- Similar to AlphaGo, AlphaGo Zero also augments the training dataset by <u>sampling random rotations or reflections</u> of the positions during MCTS.
`,title:"Network Architecture",level:1,content:`# Network Architecture

- 1 <font class='text-red-600 font-bold'>convolutional</font> block followed by 19 or 39 <font class='text-red-600 font-bold'>residual</font> block.
    - <font class='text-red-600'>Conv block</font>: conv $\\rightarrow$ BN $\\rightarrow$ relu
    - <font class='text-red-600'>Res block</font>: conv $\\rightarrow$ BN $\\rightarrow$ relu $\\rightarrow$ conv $\\rightarrow$ BN $\\rightarrow$ skip-connect $\\rightarrow$ relu

- Two output heads for computing the <u>policy</u> and <u>value</u>.

- Feature size: $19 \\times 19 \\times 17$ (8 stone history x 2 player existence + 1 color), <u>no hand-crafted features</u> as in AlphaGo.

$$s_t = [X_t, Y_t, X_{t-1}, Y_{t-1}, \\dots, X_{t-7}, Y_{t-7}, C]$$

- Similar to AlphaGo, AlphaGo Zero also augments the training dataset by <u>sampling random rotations or reflections</u> of the positions during MCTS.`,frontmatter:{},index:4,start:84,end:99},filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Mx,meta:{srcSequence:"./pages/2. AlphaGo Zero.md",slide:{raw:`
# Results

### Performance of AlphaGo Zero

<br>

<img src='/[2.AlphaGo_Zero]-04.performance.png' class='h-75 mx-auto'>

<p class='text-xs text-center'>
AlphaGo Zero used a single machine with 4 tensor processing units (TPUs), whereas AlphaGo Lee was distributed over many machines and used 48 TPUs. AlphaGo Zero defeated AlphaGo Lee <u>by 100 games to 0</u>.
</p>

`,title:"Results",level:1,content:`# Results

### Performance of AlphaGo Zero

<br>

<img src='/[2.AlphaGo_Zero]-04.performance.png' class='h-75 mx-auto'>

<p class='text-xs text-center'>
AlphaGo Zero used a single machine with 4 tensor processing units (TPUs), whereas AlphaGo Lee was distributed over many machines and used 48 TPUs. AlphaGo Zero defeated AlphaGo Lee <u>by 100 games to 0</u>.
</p>`,frontmatter:{srcSequence:"./pages/2. AlphaGo Zero.md"},index:23,start:100,end:114,source:{filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",raw:`
# Results

### Performance of AlphaGo Zero

<br>

<img src='/[2.AlphaGo_Zero]-04.performance.png' class='h-75 mx-auto'>

<p class='text-xs text-center'>
AlphaGo Zero used a single machine with 4 tensor processing units (TPUs), whereas AlphaGo Lee was distributed over many machines and used 48 TPUs. AlphaGo Zero defeated AlphaGo Lee <u>by 100 games to 0</u>.
</p>

`,title:"Results",level:1,content:`# Results

### Performance of AlphaGo Zero

<br>

<img src='/[2.AlphaGo_Zero]-04.performance.png' class='h-75 mx-auto'>

<p class='text-xs text-center'>
AlphaGo Zero used a single machine with 4 tensor processing units (TPUs), whereas AlphaGo Lee was distributed over many machines and used 48 TPUs. AlphaGo Zero defeated AlphaGo Lee <u>by 100 games to 0</u>.
</p>`,frontmatter:{},index:5,start:100,end:114},filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Lx,meta:{srcSequence:"./pages/2. AlphaGo Zero.md",slide:{raw:`
# Results

### Network Architecture comparison

<br>

<img src='/[2.AlphaGo_Zero]-05.architecture_comparison.png' class='h-75 mx-auto'>

<br>

<div class='text-sm'>

- <font class='text-red-600'>sep</font> / <font class='text-red-600'>dual</font>: seperate/combined policy and value networks.
- <font class='text-red-600'>dual-res</font> and <font class='text-red-600'>sep-conv</font> correspond to the networks used in AlphaGo Zero and AlphaGo Lee, respectively.

</div>

`,title:"Results",level:1,content:`# Results

### Network Architecture comparison

<br>

<img src='/[2.AlphaGo_Zero]-05.architecture_comparison.png' class='h-75 mx-auto'>

<br>

<div class='text-sm'>

- <font class='text-red-600'>sep</font> / <font class='text-red-600'>dual</font>: seperate/combined policy and value networks.
- <font class='text-red-600'>dual-res</font> and <font class='text-red-600'>sep-conv</font> correspond to the networks used in AlphaGo Zero and AlphaGo Lee, respectively.

</div>`,frontmatter:{srcSequence:"./pages/2. AlphaGo Zero.md"},index:24,start:115,end:134,source:{filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",raw:`
# Results

### Network Architecture comparison

<br>

<img src='/[2.AlphaGo_Zero]-05.architecture_comparison.png' class='h-75 mx-auto'>

<br>

<div class='text-sm'>

- <font class='text-red-600'>sep</font> / <font class='text-red-600'>dual</font>: seperate/combined policy and value networks.
- <font class='text-red-600'>dual-res</font> and <font class='text-red-600'>sep-conv</font> correspond to the networks used in AlphaGo Zero and AlphaGo Lee, respectively.

</div>

`,title:"Results",level:1,content:`# Results

### Network Architecture comparison

<br>

<img src='/[2.AlphaGo_Zero]-05.architecture_comparison.png' class='h-75 mx-auto'>

<br>

<div class='text-sm'>

- <font class='text-red-600'>sep</font> / <font class='text-red-600'>dual</font>: seperate/combined policy and value networks.
- <font class='text-red-600'>dual-res</font> and <font class='text-red-600'>sep-conv</font> correspond to the networks used in AlphaGo Zero and AlphaGo Lee, respectively.

</div>`,frontmatter:{},index:6,start:115,end:134},filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:jx,meta:{layout:"two-cols",srcSequence:"./pages/2. AlphaGo Zero.md",slide:{raw:`---
layout: two-cols
---

# Results

### Go knowledge learned by AlphaGo Zero

<br>



<div class='text-sm'>

- **a**: Five human *joseki* (common corner sequences) discovered during AlphaGo Zero training.

- **b**: Five *joseki* favoured at different stages of self-\xADplay training. 

- **c**: The first 80 moves of three self\xADplay games that were played at different stages of training.

</div>

::right::

<p class='break'></p>

<img src='/[2.AlphaGo_Zero]-06.learned_knowledge.png' class='h-100 mx-auto'>


`,title:"Results",level:1,content:`# Results

### Go knowledge learned by AlphaGo Zero

<br>



<div class='text-sm'>

- **a**: Five human *joseki* (common corner sequences) discovered during AlphaGo Zero training.

- **b**: Five *joseki* favoured at different stages of self-\xADplay training. 

- **c**: The first 80 moves of three self\xADplay games that were played at different stages of training.

</div>

::right::

<p class='break'></p>

<img src='/[2.AlphaGo_Zero]-06.learned_knowledge.png' class='h-100 mx-auto'>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/2. AlphaGo Zero.md"},index:25,start:134,end:164,source:{filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",raw:`---
layout: two-cols
---

# Results

### Go knowledge learned by AlphaGo Zero

<br>



<div class='text-sm'>

- **a**: Five human *joseki* (common corner sequences) discovered during AlphaGo Zero training.

- **b**: Five *joseki* favoured at different stages of self-\xADplay training. 

- **c**: The first 80 moves of three self\xADplay games that were played at different stages of training.

</div>

::right::

<p class='break'></p>

<img src='/[2.AlphaGo_Zero]-06.learned_knowledge.png' class='h-100 mx-auto'>


`,title:"Results",level:1,content:`# Results

### Go knowledge learned by AlphaGo Zero

<br>



<div class='text-sm'>

- **a**: Five human *joseki* (common corner sequences) discovered during AlphaGo Zero training.

- **b**: Five *joseki* favoured at different stages of self-\xADplay training. 

- **c**: The first 80 moves of three self\xADplay games that were played at different stages of training.

</div>

::right::

<p class='break'></p>

<img src='/[2.AlphaGo_Zero]-06.learned_knowledge.png' class='h-100 mx-auto'>`,frontmatter:{layout:"two-cols"},index:7,start:134,end:164},filepath:"/home/runner/work/sites/sites/pages/2. AlphaGo Zero.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Kx,meta:{layout:"cover",coverDate:"",title:"3. AlphaZero (2018)",srcSequence:"./pages/3. AlphaZero.md",slide:{raw:null,title:"3. AlphaZero (2018)",level:1,content:`# 3. AlphaZero (2018)

<br>

<img src='/[3.AlphaZero]-01.title.png' class='shadow-lg mx-auto w-160'>


<p class='text-sm'>

[Homepage](https://www.deepmind.com/open-source/alphazero-resources) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnwFu97mp1IVNBtqzD4EMsUe)

</p>`,frontmatter:{layout:"cover",coverDate:"",title:"3. AlphaZero (2018)",srcSequence:"./pages/3. AlphaZero.md"},index:26,start:0,end:18,source:{filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",raw:`---
layout: cover
coverDate: ""
---

# 3. AlphaZero (2018)

<br>

<img src='/[3.AlphaZero]-01.title.png' class='shadow-lg mx-auto w-160'>


<p class='text-sm'>

[Homepage](https://www.deepmind.com/open-source/alphazero-resources) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnwFu97mp1IVNBtqzD4EMsUe)

</p>
`,title:"3. AlphaZero (2018)",level:1,content:`# 3. AlphaZero (2018)

<br>

<img src='/[3.AlphaZero]-01.title.png' class='shadow-lg mx-auto w-160'>


<p class='text-sm'>

[Homepage](https://www.deepmind.com/open-source/alphazero-resources) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnwFu97mp1IVNBtqzD4EMsUe)

</p>`,frontmatter:{layout:"cover",coverDate:"",title:"3. AlphaZero (2018)"},index:0,start:0,end:18},inline:{raw:`---
src: ./pages/3. AlphaZero.md
---
`,content:"",frontmatter:{},index:4,start:27,end:31},filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:s2,meta:{srcSequence:"./pages/3. AlphaZero.md",slide:{raw:`
# How does it extend AlphaGo Zero?

A more generic version of the AlphaGo Zero that accommodates, without special casing, a broader class of game rules.

- Use the same algorithm, network architecture and hyperparameters for chess and shogi, as well as Go.

- Go games have a binary win or loss outcome, whereas both chess and shogi may end in drawn outcomes. The game outcome is <font class='text-red-600'> $z=\\{0,\\pm1\\}$ </font>: <u>-1 for loss, 0 for draw, 1 for win</u>.

- To accommodate a broader class of games, AlphaZero <u>does not assume symmetry</u>. AlphaZero does not augment the training data and does not transform the board position during MCTS.

- AlphaZero always generate self-play games <u>with the newest player</u> of last iteration, instead of the best player from all previous iterations as in AlphaGo Zero.

`,title:"How does it extend AlphaGo Zero?",level:1,content:`# How does it extend AlphaGo Zero?

A more generic version of the AlphaGo Zero that accommodates, without special casing, a broader class of game rules.

- Use the same algorithm, network architecture and hyperparameters for chess and shogi, as well as Go.

- Go games have a binary win or loss outcome, whereas both chess and shogi may end in drawn outcomes. The game outcome is <font class='text-red-600'> $z=\\{0,\\pm1\\}$ </font>: <u>-1 for loss, 0 for draw, 1 for win</u>.

- To accommodate a broader class of games, AlphaZero <u>does not assume symmetry</u>. AlphaZero does not augment the training data and does not transform the board position during MCTS.

- AlphaZero always generate self-play games <u>with the newest player</u> of last iteration, instead of the best player from all previous iterations as in AlphaGo Zero.`,frontmatter:{srcSequence:"./pages/3. AlphaZero.md"},index:27,start:19,end:33,source:{filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",raw:`
# How does it extend AlphaGo Zero?

A more generic version of the AlphaGo Zero that accommodates, without special casing, a broader class of game rules.

- Use the same algorithm, network architecture and hyperparameters for chess and shogi, as well as Go.

- Go games have a binary win or loss outcome, whereas both chess and shogi may end in drawn outcomes. The game outcome is <font class='text-red-600'> $z=\\{0,\\pm1\\}$ </font>: <u>-1 for loss, 0 for draw, 1 for win</u>.

- To accommodate a broader class of games, AlphaZero <u>does not assume symmetry</u>. AlphaZero does not augment the training data and does not transform the board position during MCTS.

- AlphaZero always generate self-play games <u>with the newest player</u> of last iteration, instead of the best player from all previous iterations as in AlphaGo Zero.

`,title:"How does it extend AlphaGo Zero?",level:1,content:`# How does it extend AlphaGo Zero?

A more generic version of the AlphaGo Zero that accommodates, without special casing, a broader class of game rules.

- Use the same algorithm, network architecture and hyperparameters for chess and shogi, as well as Go.

- Go games have a binary win or loss outcome, whereas both chess and shogi may end in drawn outcomes. The game outcome is <font class='text-red-600'> $z=\\{0,\\pm1\\}$ </font>: <u>-1 for loss, 0 for draw, 1 for win</u>.

- To accommodate a broader class of games, AlphaZero <u>does not assume symmetry</u>. AlphaZero does not augment the training data and does not transform the board position during MCTS.

- AlphaZero always generate self-play games <u>with the newest player</u> of last iteration, instead of the best player from all previous iterations as in AlphaGo Zero.`,frontmatter:{},index:1,start:19,end:33},filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:h2,meta:{srcSequence:"./pages/3. AlphaZero.md",slide:{raw:`
# State Representation

feature size: $N \\times N \\times (MT + L)$:

- $N \\times N$ represents the board size.

- $T$ represents the board positions history at time steps $[t-T+1, \\dots, t]$.

- $M$ represents the presence of player's pieces.

- $L$ denotes the player's color, the move number and other states of special rules.

- Illegal moves are <font class='text-red-600'>masked out</font> by <u>setting their probabilities to zero</u>, and <u>re-normalising</u> the probabilities over the remaining set of legal moves.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>Representation</a>
    <img src='/[3.AlphaZero]-02.feature_representation.png' class='h-90 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"State Representation",level:1,content:`# State Representation

feature size: $N \\times N \\times (MT + L)$:

- $N \\times N$ represents the board size.

- $T$ represents the board positions history at time steps $[t-T+1, \\dots, t]$.

- $M$ represents the presence of player's pieces.

- $L$ denotes the player's color, the move number and other states of special rules.

- Illegal moves are <font class='text-red-600'>masked out</font> by <u>setting their probabilities to zero</u>, and <u>re-normalising</u> the probabilities over the remaining set of legal moves.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>Representation</a>
    <img src='/[3.AlphaZero]-02.feature_representation.png' class='h-90 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{srcSequence:"./pages/3. AlphaZero.md"},index:28,start:34,end:56,source:{filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",raw:`
# State Representation

feature size: $N \\times N \\times (MT + L)$:

- $N \\times N$ represents the board size.

- $T$ represents the board positions history at time steps $[t-T+1, \\dots, t]$.

- $M$ represents the presence of player's pieces.

- $L$ denotes the player's color, the move number and other states of special rules.

- Illegal moves are <font class='text-red-600'>masked out</font> by <u>setting their probabilities to zero</u>, and <u>re-normalising</u> the probabilities over the remaining set of legal moves.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>Representation</a>
    <img src='/[3.AlphaZero]-02.feature_representation.png' class='h-90 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"State Representation",level:1,content:`# State Representation

feature size: $N \\times N \\times (MT + L)$:

- $N \\times N$ represents the board size.

- $T$ represents the board positions history at time steps $[t-T+1, \\dots, t]$.

- $M$ represents the presence of player's pieces.

- $L$ denotes the player's color, the move number and other states of special rules.

- Illegal moves are <font class='text-red-600'>masked out</font> by <u>setting their probabilities to zero</u>, and <u>re-normalising</u> the probabilities over the remaining set of legal moves.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>Representation</a>
    <img src='/[3.AlphaZero]-02.feature_representation.png' class='h-90 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{},index:2,start:34,end:56},filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:x2,meta:{layout:"two-cols",srcSequence:"./pages/3. AlphaZero.md",slide:{raw:`---
layout: two-cols 
---

# Method overwiew

<br>

The self-play training process and the neural network architecture (1 Conv block + 19 Res block) are basically <u>the same as AlphaGo Zero</u>.

$$z_t = \\pm1, 0$$

$$(\\mathbf{p}, v) = f_\\theta(s)$$

$$l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2$$


::right::


<img src='/[2.AlphaGo_Zero]-02-0.self-play.png' class='h-100 mx-auto'>


<p class='text-xs text-center'>

Self-play training process in AlphaGo Zero.

</p>

`,title:"Method overwiew",level:1,content:`# Method overwiew

<br>

The self-play training process and the neural network architecture (1 Conv block + 19 Res block) are basically <u>the same as AlphaGo Zero</u>.

$$z_t = \\pm1, 0$$

$$(\\mathbf{p}, v) = f_\\theta(s)$$

$$l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2$$


::right::


<img src='/[2.AlphaGo_Zero]-02-0.self-play.png' class='h-100 mx-auto'>


<p class='text-xs text-center'>

Self-play training process in AlphaGo Zero.

</p>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/3. AlphaZero.md"},index:29,start:56,end:86,source:{filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",raw:`---
layout: two-cols 
---

# Method overwiew

<br>

The self-play training process and the neural network architecture (1 Conv block + 19 Res block) are basically <u>the same as AlphaGo Zero</u>.

$$z_t = \\pm1, 0$$

$$(\\mathbf{p}, v) = f_\\theta(s)$$

$$l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2$$


::right::


<img src='/[2.AlphaGo_Zero]-02-0.self-play.png' class='h-100 mx-auto'>


<p class='text-xs text-center'>

Self-play training process in AlphaGo Zero.

</p>

`,title:"Method overwiew",level:1,content:`# Method overwiew

<br>

The self-play training process and the neural network architecture (1 Conv block + 19 Res block) are basically <u>the same as AlphaGo Zero</u>.

$$z_t = \\pm1, 0$$

$$(\\mathbf{p}, v) = f_\\theta(s)$$

$$l = (z-v)^2 - \\mathbf{\\pi}^T\\log \\mathbf{p} + c||\\theta||^2$$


::right::


<img src='/[2.AlphaGo_Zero]-02-0.self-play.png' class='h-100 mx-auto'>


<p class='text-xs text-center'>

Self-play training process in AlphaGo Zero.

</p>`,frontmatter:{layout:"two-cols"},index:3,start:56,end:86},filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:E2,meta:{srcSequence:"./pages/3. AlphaZero.md",slide:{raw:`
# Results

### Performance

<br>

<img src='/[3.AlphaZero]-03.performance.png' class='h-60 mx-auto'>

<div class='text-sm'>

AlphaZero used a single machine with 4 TPUs (same as AlphaGo Zero). Milestones:
- chess: 4 hours (300,000 steps) against Stockfish;
- shogi: 2 hours (110,000 steps) against Elmo;
- Go: 30 hours (74,000 steps) against AlphaGo Lee.

</div>

`,title:"Results",level:1,content:`# Results

### Performance

<br>

<img src='/[3.AlphaZero]-03.performance.png' class='h-60 mx-auto'>

<div class='text-sm'>

AlphaZero used a single machine with 4 TPUs (same as AlphaGo Zero). Milestones:
- chess: 4 hours (300,000 steps) against Stockfish;
- shogi: 2 hours (110,000 steps) against Elmo;
- Go: 30 hours (74,000 steps) against AlphaGo Lee.

</div>`,frontmatter:{srcSequence:"./pages/3. AlphaZero.md"},index:30,start:87,end:106,source:{filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",raw:`
# Results

### Performance

<br>

<img src='/[3.AlphaZero]-03.performance.png' class='h-60 mx-auto'>

<div class='text-sm'>

AlphaZero used a single machine with 4 TPUs (same as AlphaGo Zero). Milestones:
- chess: 4 hours (300,000 steps) against Stockfish;
- shogi: 2 hours (110,000 steps) against Elmo;
- Go: 30 hours (74,000 steps) against AlphaGo Lee.

</div>

`,title:"Results",level:1,content:`# Results

### Performance

<br>

<img src='/[3.AlphaZero]-03.performance.png' class='h-60 mx-auto'>

<div class='text-sm'>

AlphaZero used a single machine with 4 TPUs (same as AlphaGo Zero). Milestones:
- chess: 4 hours (300,000 steps) against Stockfish;
- shogi: 2 hours (110,000 steps) against Elmo;
- Go: 30 hours (74,000 steps) against AlphaGo Lee.

</div>`,frontmatter:{},index:4,start:87,end:106},filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:G2,meta:{srcSequence:"./pages/3. AlphaZero.md",slide:{raw:`
# Results

### Comparison with specialized programs

<br>

<img src='/[3.AlphaZero]-04.programs_comparison.jpg' class='h-90 mx-auto'>

`,title:"Results",level:1,content:`# Results

### Comparison with specialized programs

<br>

<img src='/[3.AlphaZero]-04.programs_comparison.jpg' class='h-90 mx-auto'>`,frontmatter:{srcSequence:"./pages/3. AlphaZero.md"},index:31,start:107,end:117,source:{filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",raw:`
# Results

### Comparison with specialized programs

<br>

<img src='/[3.AlphaZero]-04.programs_comparison.jpg' class='h-90 mx-auto'>

`,title:"Results",level:1,content:`# Results

### Comparison with specialized programs

<br>

<img src='/[3.AlphaZero]-04.programs_comparison.jpg' class='h-90 mx-auto'>`,frontmatter:{},index:5,start:107,end:117},filepath:"/home/runner/work/sites/sites/pages/3. AlphaZero.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:F2,meta:{layout:"cover",coverDate:"",title:"4. MuZero (2020)",srcSequence:"./pages/4. MuZero.md",slide:{raw:null,title:"4. MuZero (2020)",level:1,content:`# 4. MuZero (2020)

<br>

<img src='/[4.MuZero]-01.title.png' class='shadow-lg mx-auto w-220'>


<p class='text-sm'>

[Homepage](https://www.deepmind.com/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnMst8DYnhuH6fb3t1LXNBpb)

</p>`,frontmatter:{layout:"cover",coverDate:"",title:"4. MuZero (2020)",srcSequence:"./pages/4. MuZero.md"},index:32,start:0,end:18,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`---
layout: cover
coverDate: ""
---

# 4. MuZero (2020)

<br>

<img src='/[4.MuZero]-01.title.png' class='shadow-lg mx-auto w-220'>


<p class='text-sm'>

[Homepage](https://www.deepmind.com/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnMst8DYnhuH6fb3t1LXNBpb)

</p>
`,title:"4. MuZero (2020)",level:1,content:`# 4. MuZero (2020)

<br>

<img src='/[4.MuZero]-01.title.png' class='shadow-lg mx-auto w-220'>


<p class='text-sm'>

[Homepage](https://www.deepmind.com/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnMst8DYnhuH6fb3t1LXNBpb)

</p>`,frontmatter:{layout:"cover",coverDate:"",title:"4. MuZero (2020)"},index:0,start:0,end:18},inline:{raw:`---
src: ./pages/4. MuZero.md
---
`,content:"",frontmatter:{},index:5,start:31,end:35},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:K2,meta:{srcSequence:"./pages/4. MuZero.md",slide:{raw:`
# What's different?

MuZero extends AlphaZero to a broader set of environments (e.g. Atari2600), including <u>single agent</u> domains and <u>non-zero rewards</u> at intermediate time steps.

No rules were given in advance, MuZero learned the rules by its internal networks.

- <font class='text-red-600 font-bold'>State transitions</font>: AlphaZero had access to a perfect simulator of the environment\u2019s state-to-state dynamics. In contrast, MuZero employs <u>a learned dynamics model</u> to estimate the simulator.

- <font class='text-red-600 font-bold'>Actions available</font>: AlphaZero used the set of legal actions obtained from the simulator to mask the policy network at interior nodes. MuZero <u>does not perform any masking</u> within the search tree.

- <font class='text-red-600 font-bold'>Terminal states</font>: AlphaZero stopped at the terminal states directly provided by the simulator. MuZero does not give special treatment to terminal states and always <u>uses the value predicted</u> by the network.

`,title:"What's different?",level:1,content:`# What's different?

MuZero extends AlphaZero to a broader set of environments (e.g. Atari2600), including <u>single agent</u> domains and <u>non-zero rewards</u> at intermediate time steps.

No rules were given in advance, MuZero learned the rules by its internal networks.

- <font class='text-red-600 font-bold'>State transitions</font>: AlphaZero had access to a perfect simulator of the environment\u2019s state-to-state dynamics. In contrast, MuZero employs <u>a learned dynamics model</u> to estimate the simulator.

- <font class='text-red-600 font-bold'>Actions available</font>: AlphaZero used the set of legal actions obtained from the simulator to mask the policy network at interior nodes. MuZero <u>does not perform any masking</u> within the search tree.

- <font class='text-red-600 font-bold'>Terminal states</font>: AlphaZero stopped at the terminal states directly provided by the simulator. MuZero does not give special treatment to terminal states and always <u>uses the value predicted</u> by the network.`,frontmatter:{srcSequence:"./pages/4. MuZero.md"},index:33,start:19,end:33,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`
# What's different?

MuZero extends AlphaZero to a broader set of environments (e.g. Atari2600), including <u>single agent</u> domains and <u>non-zero rewards</u> at intermediate time steps.

No rules were given in advance, MuZero learned the rules by its internal networks.

- <font class='text-red-600 font-bold'>State transitions</font>: AlphaZero had access to a perfect simulator of the environment\u2019s state-to-state dynamics. In contrast, MuZero employs <u>a learned dynamics model</u> to estimate the simulator.

- <font class='text-red-600 font-bold'>Actions available</font>: AlphaZero used the set of legal actions obtained from the simulator to mask the policy network at interior nodes. MuZero <u>does not perform any masking</u> within the search tree.

- <font class='text-red-600 font-bold'>Terminal states</font>: AlphaZero stopped at the terminal states directly provided by the simulator. MuZero does not give special treatment to terminal states and always <u>uses the value predicted</u> by the network.

`,title:"What's different?",level:1,content:`# What's different?

MuZero extends AlphaZero to a broader set of environments (e.g. Atari2600), including <u>single agent</u> domains and <u>non-zero rewards</u> at intermediate time steps.

No rules were given in advance, MuZero learned the rules by its internal networks.

- <font class='text-red-600 font-bold'>State transitions</font>: AlphaZero had access to a perfect simulator of the environment\u2019s state-to-state dynamics. In contrast, MuZero employs <u>a learned dynamics model</u> to estimate the simulator.

- <font class='text-red-600 font-bold'>Actions available</font>: AlphaZero used the set of legal actions obtained from the simulator to mask the policy network at interior nodes. MuZero <u>does not perform any masking</u> within the search tree.

- <font class='text-red-600 font-bold'>Terminal states</font>: AlphaZero stopped at the terminal states directly provided by the simulator. MuZero does not give special treatment to terminal states and always <u>uses the value predicted</u> by the network.`,frontmatter:{},index:1,start:19,end:33},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:X2,meta:{srcSequence:"./pages/4. MuZero.md",slide:{raw:`
# Training process

<img src='/[4.MuZero]-02-0.training_process.jpg' class='h-90 mx-auto'>

<p class='text-xs text-center'>
Overall training process of MuZero.
</p>

`,title:"Training process",level:1,content:`# Training process

<img src='/[4.MuZero]-02-0.training_process.jpg' class='h-90 mx-auto'>

<p class='text-xs text-center'>
Overall training process of MuZero.
</p>`,frontmatter:{srcSequence:"./pages/4. MuZero.md"},index:34,start:34,end:44,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`
# Training process

<img src='/[4.MuZero]-02-0.training_process.jpg' class='h-90 mx-auto'>

<p class='text-xs text-center'>
Overall training process of MuZero.
</p>

`,title:"Training process",level:1,content:`# Training process

<img src='/[4.MuZero]-02-0.training_process.jpg' class='h-90 mx-auto'>

<p class='text-xs text-center'>
Overall training process of MuZero.
</p>`,frontmatter:{},index:2,start:34,end:44},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:m$,meta:{srcSequence:"./pages/4. MuZero.md",slide:{raw:`
## Part 1: MCTS search

<br>

- Aside from $(Q, N, P)$ as before, the edges in MuZero MCTS also store <font class='text-red-600'>intermediate reward</font> $R(s,a)$ & <font class='text-red-600'>state transition</font> $S(s,a)$.

- The evaluating value is the $k$-step <u>cumulative discounted reward</u>:

$$V(s_t) = \\sum_{\\tau=0}^{k-1} \\gamma^\\tau r_{t+\\tau} + \\gamma^k v_{t+k}$$

- Because the value above is unbounded, the action-state value $Q$ would be <u>normalized</u>:

$$Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i)$$
$$\\bar{Q}(s,a) = \\frac{Q(s,a) - \\min Q}{\\max Q - \\min Q}$$


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>MCTS</a>
    <img src='/[4.MuZero]-02-1.MCTS.jpg' class='h-90 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"Part 1: MCTS search",level:2,content:`## Part 1: MCTS search

<br>

- Aside from $(Q, N, P)$ as before, the edges in MuZero MCTS also store <font class='text-red-600'>intermediate reward</font> $R(s,a)$ & <font class='text-red-600'>state transition</font> $S(s,a)$.

- The evaluating value is the $k$-step <u>cumulative discounted reward</u>:

$$V(s_t) = \\sum_{\\tau=0}^{k-1} \\gamma^\\tau r_{t+\\tau} + \\gamma^k v_{t+k}$$

- Because the value above is unbounded, the action-state value $Q$ would be <u>normalized</u>:

$$Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i)$$
$$\\bar{Q}(s,a) = \\frac{Q(s,a) - \\min Q}{\\max Q - \\min Q}$$


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>MCTS</a>
    <img src='/[4.MuZero]-02-1.MCTS.jpg' class='h-90 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{srcSequence:"./pages/4. MuZero.md"},index:35,start:45,end:68,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`
## Part 1: MCTS search

<br>

- Aside from $(Q, N, P)$ as before, the edges in MuZero MCTS also store <font class='text-red-600'>intermediate reward</font> $R(s,a)$ & <font class='text-red-600'>state transition</font> $S(s,a)$.

- The evaluating value is the $k$-step <u>cumulative discounted reward</u>:

$$V(s_t) = \\sum_{\\tau=0}^{k-1} \\gamma^\\tau r_{t+\\tau} + \\gamma^k v_{t+k}$$

- Because the value above is unbounded, the action-state value $Q$ would be <u>normalized</u>:

$$Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i)$$
$$\\bar{Q}(s,a) = \\frac{Q(s,a) - \\min Q}{\\max Q - \\min Q}$$


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>MCTS</a>
    <img src='/[4.MuZero]-02-1.MCTS.jpg' class='h-90 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"Part 1: MCTS search",level:2,content:`## Part 1: MCTS search

<br>

- Aside from $(Q, N, P)$ as before, the edges in MuZero MCTS also store <font class='text-red-600'>intermediate reward</font> $R(s,a)$ & <font class='text-red-600'>state transition</font> $S(s,a)$.

- The evaluating value is the $k$-step <u>cumulative discounted reward</u>:

$$V(s_t) = \\sum_{\\tau=0}^{k-1} \\gamma^\\tau r_{t+\\tau} + \\gamma^k v_{t+k}$$

- Because the value above is unbounded, the action-state value $Q$ would be <u>normalized</u>:

$$Q(s,a) = \\frac{1}{N(s,a)} \\sum_{i=1}^N 1(s,a,i) V(s_L^i)$$
$$\\bar{Q}(s,a) = \\frac{Q(s,a) - \\min Q}{\\max Q - \\min Q}$$


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>MCTS</a>
    <img src='/[4.MuZero]-02-1.MCTS.jpg' class='h-90 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{},index:3,start:45,end:68},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:b$,meta:{srcSequence:"./pages/4. MuZero.md",slide:{raw:`
## Part 2: Self-play process

<br>

<img src='/[4.MuZero]-02-2.self-play.jpg' class='h-50 mx-auto'>

- Self-play process is basically the same, except <font class='text-red-600'>intermediate rewards</font> $u_t$ are considered.

- The trajectories of self-play would be stored into a <font class='text-red-600 font-bold'>replay buffer</font> (off-policy RL).

- The final outcome $z_t$ is computed as the <u>cumulative discounted reward</u>:

$$z_t = u_{t+1} + \\gamma u_{t+2} + \\dots + \\gamma^{n-1}u_{t+n} + \\gamma^n v_{t+n}$$

`,title:"Part 2: Self-play process",level:2,content:`## Part 2: Self-play process

<br>

<img src='/[4.MuZero]-02-2.self-play.jpg' class='h-50 mx-auto'>

- Self-play process is basically the same, except <font class='text-red-600'>intermediate rewards</font> $u_t$ are considered.

- The trajectories of self-play would be stored into a <font class='text-red-600 font-bold'>replay buffer</font> (off-policy RL).

- The final outcome $z_t$ is computed as the <u>cumulative discounted reward</u>:

$$z_t = u_{t+1} + \\gamma u_{t+2} + \\dots + \\gamma^{n-1}u_{t+n} + \\gamma^n v_{t+n}$$`,frontmatter:{srcSequence:"./pages/4. MuZero.md"},index:36,start:69,end:85,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`
## Part 2: Self-play process

<br>

<img src='/[4.MuZero]-02-2.self-play.jpg' class='h-50 mx-auto'>

- Self-play process is basically the same, except <font class='text-red-600'>intermediate rewards</font> $u_t$ are considered.

- The trajectories of self-play would be stored into a <font class='text-red-600 font-bold'>replay buffer</font> (off-policy RL).

- The final outcome $z_t$ is computed as the <u>cumulative discounted reward</u>:

$$z_t = u_{t+1} + \\gamma u_{t+2} + \\dots + \\gamma^{n-1}u_{t+n} + \\gamma^n v_{t+n}$$

`,title:"Part 2: Self-play process",level:2,content:`## Part 2: Self-play process

<br>

<img src='/[4.MuZero]-02-2.self-play.jpg' class='h-50 mx-auto'>

- Self-play process is basically the same, except <font class='text-red-600'>intermediate rewards</font> $u_t$ are considered.

- The trajectories of self-play would be stored into a <font class='text-red-600 font-bold'>replay buffer</font> (off-policy RL).

- The final outcome $z_t$ is computed as the <u>cumulative discounted reward</u>:

$$z_t = u_{t+1} + \\gamma u_{t+2} + \\dots + \\gamma^{n-1}u_{t+n} + \\gamma^n v_{t+n}$$`,frontmatter:{},index:4,start:69,end:85},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:H$,meta:{srcSequence:"./pages/4. MuZero.md",slide:{raw:`
## Part 3: Network training

<br>

A trajectory is sampled from the <u>replay buffer</u>. 
1. The <font class='text-red-600'>representation</font> function $h$ generate <u>the first hidden state</u> representation $s_0$.
2. The <font class='text-red-600'>dynamics</font> function $g$ recursively predicts <u>subsequent rewards</u> $r_t$ and <u>states</u> $s_t$ based on the predicted state $s_{t-1}$ and the real action $a_t$. 
3. The <font class='text-red-600'>prediction</font> function $f$ predicts the <u>distribution</u> $p_t$ and <u>value</u> $v_t$ for these predicted states.
4. Train the model by minimizing the loss.

$$l = (z-v)^2 - \\mathbf{\\pi}^t\\log \\mathbf{p} + (u-r)^2+c||\\theta||^2$$


The network architecture is basically the same as in AlphaZero, but <u>with 16 instead of 20</u> residual blocks in <font class='text-red-600'>representation</font> and <font class='text-red-600'>dynamics</font> networks.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>training process</a>
    <img src='/[4.MuZero]-02-3.network_training.jpg' class='h-60 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"Part 3: Network training",level:2,content:`## Part 3: Network training

<br>

A trajectory is sampled from the <u>replay buffer</u>. 
1. The <font class='text-red-600'>representation</font> function $h$ generate <u>the first hidden state</u> representation $s_0$.
2. The <font class='text-red-600'>dynamics</font> function $g$ recursively predicts <u>subsequent rewards</u> $r_t$ and <u>states</u> $s_t$ based on the predicted state $s_{t-1}$ and the real action $a_t$. 
3. The <font class='text-red-600'>prediction</font> function $f$ predicts the <u>distribution</u> $p_t$ and <u>value</u> $v_t$ for these predicted states.
4. Train the model by minimizing the loss.

$$l = (z-v)^2 - \\mathbf{\\pi}^t\\log \\mathbf{p} + (u-r)^2+c||\\theta||^2$$


The network architecture is basically the same as in AlphaZero, but <u>with 16 instead of 20</u> residual blocks in <font class='text-red-600'>representation</font> and <font class='text-red-600'>dynamics</font> networks.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>training process</a>
    <img src='/[4.MuZero]-02-3.network_training.jpg' class='h-60 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{srcSequence:"./pages/4. MuZero.md"},index:37,start:86,end:109,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`
## Part 3: Network training

<br>

A trajectory is sampled from the <u>replay buffer</u>. 
1. The <font class='text-red-600'>representation</font> function $h$ generate <u>the first hidden state</u> representation $s_0$.
2. The <font class='text-red-600'>dynamics</font> function $g$ recursively predicts <u>subsequent rewards</u> $r_t$ and <u>states</u> $s_t$ based on the predicted state $s_{t-1}$ and the real action $a_t$. 
3. The <font class='text-red-600'>prediction</font> function $f$ predicts the <u>distribution</u> $p_t$ and <u>value</u> $v_t$ for these predicted states.
4. Train the model by minimizing the loss.

$$l = (z-v)^2 - \\mathbf{\\pi}^t\\log \\mathbf{p} + (u-r)^2+c||\\theta||^2$$


The network architecture is basically the same as in AlphaZero, but <u>with 16 instead of 20</u> residual blocks in <font class='text-red-600'>representation</font> and <font class='text-red-600'>dynamics</font> networks.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>training process</a>
    <img src='/[4.MuZero]-02-3.network_training.jpg' class='h-60 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>

`,title:"Part 3: Network training",level:2,content:`## Part 3: Network training

<br>

A trajectory is sampled from the <u>replay buffer</u>. 
1. The <font class='text-red-600'>representation</font> function $h$ generate <u>the first hidden state</u> representation $s_0$.
2. The <font class='text-red-600'>dynamics</font> function $g$ recursively predicts <u>subsequent rewards</u> $r_t$ and <u>states</u> $s_t$ based on the predicted state $s_{t-1}$ and the real action $a_t$. 
3. The <font class='text-red-600'>prediction</font> function $f$ predicts the <u>distribution</u> $p_t$ and <u>value</u> $v_t$ for these predicted states.
4. Train the model by minimizing the loss.

$$l = (z-v)^2 - \\mathbf{\\pi}^t\\log \\mathbf{p} + (u-r)^2+c||\\theta||^2$$


The network architecture is basically the same as in AlphaZero, but <u>with 16 instead of 20</u> residual blocks in <font class='text-red-600'>representation</font> and <font class='text-red-600'>dynamics</font> networks.


<div class='group'>
    <a href='#' class='top-10 right-20 absolute group-hover:font-semibold'>training process</a>
    <img src='/[4.MuZero]-02-3.network_training.jpg' class='h-60 invisible group-hover:visible top-15 right-18 absolute border-2'>
</div>`,frontmatter:{},index:5,start:86,end:109},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:J$,meta:{srcSequence:"./pages/4. MuZero.md",slide:{raw:`
# Reanalyze

MuZero Reanalyze revisits its <u>past time steps</u> and re-executes MCTS search <u>using the latest model parameters</u>, potentially resulting in a better-quality policy than the original search.

- This fresh policy is used as the policy target for <font class='text-red-600'>80% of updates</font> during MuZero training. 

<br>

<div class='grid grid-cols-2'>
    <div>
        <img src='/[4.MuZero]-03-1.normal_training_loop.jpg' class='h-60 mx-auto'>
        <p class='text-xs text-center'>Normal training loop.</p>      
    </div>
    <div>
        <img src='/[4.MuZero]-03-2.reanalyze_training_loop.jpg' class='h-70 mx-auto'>
        <p class='text-xs text-center'>Reanalyze training loop.</p>    
    </div>
</div>

`,title:"Reanalyze",level:1,content:`# Reanalyze

MuZero Reanalyze revisits its <u>past time steps</u> and re-executes MCTS search <u>using the latest model parameters</u>, potentially resulting in a better-quality policy than the original search.

- This fresh policy is used as the policy target for <font class='text-red-600'>80% of updates</font> during MuZero training. 

<br>

<div class='grid grid-cols-2'>
    <div>
        <img src='/[4.MuZero]-03-1.normal_training_loop.jpg' class='h-60 mx-auto'>
        <p class='text-xs text-center'>Normal training loop.</p>      
    </div>
    <div>
        <img src='/[4.MuZero]-03-2.reanalyze_training_loop.jpg' class='h-70 mx-auto'>
        <p class='text-xs text-center'>Reanalyze training loop.</p>    
    </div>
</div>`,frontmatter:{srcSequence:"./pages/4. MuZero.md"},index:38,start:110,end:131,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`
# Reanalyze

MuZero Reanalyze revisits its <u>past time steps</u> and re-executes MCTS search <u>using the latest model parameters</u>, potentially resulting in a better-quality policy than the original search.

- This fresh policy is used as the policy target for <font class='text-red-600'>80% of updates</font> during MuZero training. 

<br>

<div class='grid grid-cols-2'>
    <div>
        <img src='/[4.MuZero]-03-1.normal_training_loop.jpg' class='h-60 mx-auto'>
        <p class='text-xs text-center'>Normal training loop.</p>      
    </div>
    <div>
        <img src='/[4.MuZero]-03-2.reanalyze_training_loop.jpg' class='h-70 mx-auto'>
        <p class='text-xs text-center'>Reanalyze training loop.</p>    
    </div>
</div>

`,title:"Reanalyze",level:1,content:`# Reanalyze

MuZero Reanalyze revisits its <u>past time steps</u> and re-executes MCTS search <u>using the latest model parameters</u>, potentially resulting in a better-quality policy than the original search.

- This fresh policy is used as the policy target for <font class='text-red-600'>80% of updates</font> during MuZero training. 

<br>

<div class='grid grid-cols-2'>
    <div>
        <img src='/[4.MuZero]-03-1.normal_training_loop.jpg' class='h-60 mx-auto'>
        <p class='text-xs text-center'>Normal training loop.</p>      
    </div>
    <div>
        <img src='/[4.MuZero]-03-2.reanalyze_training_loop.jpg' class='h-70 mx-auto'>
        <p class='text-xs text-center'>Reanalyze training loop.</p>    
    </div>
</div>`,frontmatter:{},index:6,start:110,end:131},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:s3,meta:{srcSequence:"./pages/4. MuZero.md",slide:{raw:`
# Results

<br>

<img src='/[4.MuZero]-04.performance_against_AlphaZero_and_R2D2.png' class='h-100 mx-auto'>
`,title:"Results",level:1,content:`# Results

<br>

<img src='/[4.MuZero]-04.performance_against_AlphaZero_and_R2D2.png' class='h-100 mx-auto'>`,frontmatter:{srcSequence:"./pages/4. MuZero.md"},index:39,start:132,end:139,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`
# Results

<br>

<img src='/[4.MuZero]-04.performance_against_AlphaZero_and_R2D2.png' class='h-100 mx-auto'>
`,title:"Results",level:1,content:`# Results

<br>

<img src='/[4.MuZero]-04.performance_against_AlphaZero_and_R2D2.png' class='h-100 mx-auto'>`,frontmatter:{},index:7,start:132,end:139},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:o3,meta:{srcSequence:"./pages/4. MuZero.md",slide:{raw:`
# Results

<br>

<img src='/[4.MuZero]-05.evaluations.png' class='h-100 mx-auto'>
`,title:"Results",level:1,content:`# Results

<br>

<img src='/[4.MuZero]-05.evaluations.png' class='h-100 mx-auto'>`,frontmatter:{srcSequence:"./pages/4. MuZero.md"},index:40,start:140,end:147,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`
# Results

<br>

<img src='/[4.MuZero]-05.evaluations.png' class='h-100 mx-auto'>
`,title:"Results",level:1,content:`# Results

<br>

<img src='/[4.MuZero]-05.evaluations.png' class='h-100 mx-auto'>`,frontmatter:{},index:8,start:140,end:147},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:m3,meta:{srcSequence:"./pages/4. MuZero.md",slide:{raw:`
# Results

<br>

<img src='/[4.MuZero]-06.Reanalyze_performance.png' class='h-70 mx-auto'>

`,title:"Results",level:1,content:`# Results

<br>

<img src='/[4.MuZero]-06.Reanalyze_performance.png' class='h-70 mx-auto'>`,frontmatter:{srcSequence:"./pages/4. MuZero.md"},index:41,start:148,end:156,source:{filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",raw:`
# Results

<br>

<img src='/[4.MuZero]-06.Reanalyze_performance.png' class='h-70 mx-auto'>

`,title:"Results",level:1,content:`# Results

<br>

<img src='/[4.MuZero]-06.Reanalyze_performance.png' class='h-70 mx-auto'>`,frontmatter:{},index:9,start:148,end:156},filepath:"/home/runner/work/sites/sites/pages/4. MuZero.md",notesHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:h3,meta:{slide:{raw:"",content:"",frontmatter:{},index:42,start:36,end:37,notesHTML:"",filepath:"/home/runner/work/sites/sites/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:g3,meta:{title:"Resources",srcSequence:"./pages/resources.md",slide:{raw:null,title:"Resources",level:1,content:`# Resources

<div class='text-sm'>

- **AlphaGo** (2016): *Silver D, Huang A, Maddison C J, et al. Mastering the game of Go with deep neural networks and tree search[J]. nature, 2016, 529(7587): 484-489.* 
    - [Homepage](https://www.deepmind.com/publications/mastering-the-game-of-go-with-deep-neural-networks-tree-search) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnUhiHrgvGlFlraNwpoJMCVq).
- **AlphaGo Zero** (2017): *Silver D, Schrittwieser J, Simonyan K, et al. Mastering the game of go without human knowledge[J]. nature, 2017, 550(7676): 354-359.*
    - [Homepage](https://www.deepmind.com/blog/alphago-zero-starting-from-scratch) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnRiLn3v6dKkklJ8yzO8uinc).
- **AlphaZero** (2018): *Silver D, Hubert T, Schrittwieser J, et al. A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play[J]. Science, 2018, 362(6419): 1140-1144.*
    - [Homepage](https://www.deepmind.com/open-source/alphazero-resources) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnwFu97mp1IVNBtqzD4EMsUe).
- **MuZero** (2020): *Schrittwieser J, Antonoglou I, Hubert T, et al. Mastering atari, go, chess and shogi by planning with a learned model[J]. Nature, 2020, 588(7839): 604-609.*
    - [Homepage](https://www.deepmind.com/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnMst8DYnhuH6fb3t1LXNBpb).

</div>`,frontmatter:{title:"Resources",srcSequence:"./pages/resources.md"},index:43,start:0,end:15,source:{filepath:"/home/runner/work/sites/sites/pages/resources.md",raw:`# Resources

<div class='text-sm'>

- **AlphaGo** (2016): *Silver D, Huang A, Maddison C J, et al. Mastering the game of Go with deep neural networks and tree search[J]. nature, 2016, 529(7587): 484-489.* 
    - [Homepage](https://www.deepmind.com/publications/mastering-the-game-of-go-with-deep-neural-networks-tree-search) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnUhiHrgvGlFlraNwpoJMCVq).
- **AlphaGo Zero** (2017): *Silver D, Schrittwieser J, Simonyan K, et al. Mastering the game of go without human knowledge[J]. nature, 2017, 550(7676): 354-359.*
    - [Homepage](https://www.deepmind.com/blog/alphago-zero-starting-from-scratch) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnRiLn3v6dKkklJ8yzO8uinc).
- **AlphaZero** (2018): *Silver D, Hubert T, Schrittwieser J, et al. A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play[J]. Science, 2018, 362(6419): 1140-1144.*
    - [Homepage](https://www.deepmind.com/open-source/alphazero-resources) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnwFu97mp1IVNBtqzD4EMsUe).
- **MuZero** (2020): *Schrittwieser J, Antonoglou I, Hubert T, et al. Mastering atari, go, chess and shogi by planning with a learned model[J]. Nature, 2020, 588(7839): 604-609.*
    - [Homepage](https://www.deepmind.com/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnMst8DYnhuH6fb3t1LXNBpb).

</div>
`,title:"Resources",level:1,content:`# Resources

<div class='text-sm'>

- **AlphaGo** (2016): *Silver D, Huang A, Maddison C J, et al. Mastering the game of Go with deep neural networks and tree search[J]. nature, 2016, 529(7587): 484-489.* 
    - [Homepage](https://www.deepmind.com/publications/mastering-the-game-of-go-with-deep-neural-networks-tree-search) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnUhiHrgvGlFlraNwpoJMCVq).
- **AlphaGo Zero** (2017): *Silver D, Schrittwieser J, Simonyan K, et al. Mastering the game of go without human knowledge[J]. nature, 2017, 550(7676): 354-359.*
    - [Homepage](https://www.deepmind.com/blog/alphago-zero-starting-from-scratch) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnRiLn3v6dKkklJ8yzO8uinc).
- **AlphaZero** (2018): *Silver D, Hubert T, Schrittwieser J, et al. A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play[J]. Science, 2018, 362(6419): 1140-1144.*
    - [Homepage](https://www.deepmind.com/open-source/alphazero-resources) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnwFu97mp1IVNBtqzD4EMsUe).
- **MuZero** (2020): *Schrittwieser J, Antonoglou I, Hubert T, et al. Mastering atari, go, chess and shogi by planning with a learned model[J]. Nature, 2020, 588(7839): 604-609.*
    - [Homepage](https://www.deepmind.com/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules) & [Online PDF](https://mnomqrns7c.feishu.cn/file/boxcnMst8DYnhuH6fb3t1LXNBpb).

</div>`,frontmatter:{title:"Resources"},index:0,start:0,end:15},inline:{raw:`---
src: ./pages/resources.md
---



`,content:"",frontmatter:{},index:7,start:37,end:44},filepath:"/home/runner/work/sites/sites/pages/resources.md",notesHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:_3,meta:{srcSequence:"./pages/resources.md",slide:{raw:`
### Other useful materials


- [Introduction to Monte Carlo Tree Search: The Game-Changing Algorithm behind DeepMind\u2019s AlphaGo | AI\u7814\u4E60\u793E](https://www.yanxishe.com/TextTranslation/1475).

- [\u3010AlphaGo\u7CFB\u5217-1\u3011AlphaGo\u8BE6\u89E3 | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/423253822).

- [AlphaGo Zero \u7B80\u660E\u5DE5\u4F5C\u539F\u7406 | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/32952677).

- [\u6700\u5F3A\u901A\u7528\u68CB\u7C7BAI\uFF0CAlphaZero\u5F3A\u5316\u5B66\u4E60\u7B97\u6CD5\u89E3\u8BFB | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/325865136).

- [\u7EC8\u6781\u7248AlphaGo\uFF0CDeepMind\u65B0\u7B97\u6CD5MuZero\u4F5C\u8005\u89E3\u8BFB | AI\u7814\u4E60\u793E](https://www.yanxishe.com/TextTranslation/3177).


`,title:"Other useful materials",level:3,content:`### Other useful materials


- [Introduction to Monte Carlo Tree Search: The Game-Changing Algorithm behind DeepMind\u2019s AlphaGo | AI\u7814\u4E60\u793E](https://www.yanxishe.com/TextTranslation/1475).

- [\u3010AlphaGo\u7CFB\u5217-1\u3011AlphaGo\u8BE6\u89E3 | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/423253822).

- [AlphaGo Zero \u7B80\u660E\u5DE5\u4F5C\u539F\u7406 | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/32952677).

- [\u6700\u5F3A\u901A\u7528\u68CB\u7C7BAI\uFF0CAlphaZero\u5F3A\u5316\u5B66\u4E60\u7B97\u6CD5\u89E3\u8BFB | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/325865136).

- [\u7EC8\u6781\u7248AlphaGo\uFF0CDeepMind\u65B0\u7B97\u6CD5MuZero\u4F5C\u8005\u89E3\u8BFB | AI\u7814\u4E60\u793E](https://www.yanxishe.com/TextTranslation/3177).`,frontmatter:{srcSequence:"./pages/resources.md"},index:44,start:16,end:32,source:{filepath:"/home/runner/work/sites/sites/pages/resources.md",raw:`
### Other useful materials


- [Introduction to Monte Carlo Tree Search: The Game-Changing Algorithm behind DeepMind\u2019s AlphaGo | AI\u7814\u4E60\u793E](https://www.yanxishe.com/TextTranslation/1475).

- [\u3010AlphaGo\u7CFB\u5217-1\u3011AlphaGo\u8BE6\u89E3 | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/423253822).

- [AlphaGo Zero \u7B80\u660E\u5DE5\u4F5C\u539F\u7406 | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/32952677).

- [\u6700\u5F3A\u901A\u7528\u68CB\u7C7BAI\uFF0CAlphaZero\u5F3A\u5316\u5B66\u4E60\u7B97\u6CD5\u89E3\u8BFB | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/325865136).

- [\u7EC8\u6781\u7248AlphaGo\uFF0CDeepMind\u65B0\u7B97\u6CD5MuZero\u4F5C\u8005\u89E3\u8BFB | AI\u7814\u4E60\u793E](https://www.yanxishe.com/TextTranslation/3177).


`,title:"Other useful materials",level:3,content:`### Other useful materials


- [Introduction to Monte Carlo Tree Search: The Game-Changing Algorithm behind DeepMind\u2019s AlphaGo | AI\u7814\u4E60\u793E](https://www.yanxishe.com/TextTranslation/1475).

- [\u3010AlphaGo\u7CFB\u5217-1\u3011AlphaGo\u8BE6\u89E3 | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/423253822).

- [AlphaGo Zero \u7B80\u660E\u5DE5\u4F5C\u539F\u7406 | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/32952677).

- [\u6700\u5F3A\u901A\u7528\u68CB\u7C7BAI\uFF0CAlphaZero\u5F3A\u5316\u5B66\u4E60\u7B97\u6CD5\u89E3\u8BFB | \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/p/325865136).

- [\u7EC8\u6781\u7248AlphaGo\uFF0CDeepMind\u65B0\u7B97\u6CD5MuZero\u4F5C\u8005\u89E3\u8BFB | AI\u7814\u4E60\u793E](https://www.yanxishe.com/TextTranslation/3177).`,frontmatter:{},index:1,start:16,end:32},filepath:"/home/runner/work/sites/sites/pages/resources.md",notesHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",component:jy,meta:{layout:"end"}}],He=b3,w3=[{name:"play",path:"/",component:Ly,children:[...He]},{name:"print",path:"/print",component:Iy},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>Ms(()=>import("./PresenterPrint.067ebec3.js"),["assets/PresenterPrint.067ebec3.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.cf10830f.js"])},{name:"presenter",path:"/presenter/:no",component:()=>Ms(()=>import("./Presenter.1af334a6.js"),["assets/Presenter.1af334a6.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.cf10830f.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.aef59224.js","assets/Presenter.1ea605f8.css"]),beforeEnter:t=>{if(!vn.remote||vn.remote===t.query.password)return!0;if(vn.remote&&t.query.password===void 0){const s=prompt("Enter password");if(vn.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],dt=w0({history:Zg("/"),routes:w3});function x3(t,s,{mode:n="replace"}={}){return P({get(){const a=dt.currentRoute.value.query[t];return a==null?s!=null?s:null:Array.isArray(a)?a.filter(Boolean):a},set(a){Qe(()=>{dt[b(n)]({query:{...dt.currentRoute.value.query,[t]:a}})})}})}const np=K(0);Qe(()=>{dt.afterEach(async()=>{await Qe(),np.value+=1})});const Qt=P(()=>dt.currentRoute.value),Vr=P(()=>Qt.value.query.print!==void 0),$3=P(()=>Qt.value.query.print==="clicks"),jt=P(()=>Qt.value.query.embedded!==void 0),Gt=P(()=>Qt.value.path.startsWith("/presenter")),An=P(()=>Vr.value&&!$3.value),er=P(()=>Qt.value.query.password),k3=P(()=>!Gt.value&&(!xe.remote||er.value===xe.remote)),Fi=x3("clicks","0"),ap=P(()=>He.length-1),A3=P(()=>Qt.value.path),Fe=P(()=>parseInt(A3.value.split(/\//g).slice(-1)[0])||1);P(()=>Qa(Fe.value));const pt=P(()=>He.find(t=>t.path===`${Fe.value}`));P(()=>{var t,s,n;return(n=(s=(t=pt.value)==null?void 0:t.meta)==null?void 0:s.slide)==null?void 0:n.id});P(()=>{var t,s;return((s=(t=pt.value)==null?void 0:t.meta)==null?void 0:s.layout)||(Fe.value===1?"cover":"default")});const vl=P(()=>He.find(t=>t.path===`${Math.min(He.length,Fe.value+1)}`)),M3=P(()=>{var t,s;return np.value,((s=(t=pt.value)==null?void 0:t.meta)==null?void 0:s.__clicksElements)||[]}),Et=P({get(){if(An.value)return 99999;let t=+(Fi.value||0);return isNaN(t)&&(t=0),t},set(t){Fi.value=t.toString()}}),Ea=P(()=>{var t,s,n;return+((n=(s=(t=pt.value)==null?void 0:t.meta)==null?void 0:s.clicks)!=null?n:M3.value.length)}),S3=P(()=>Fe.value<He.length-1||Et.value<Ea.value),T3=P(()=>Fe.value>1||Et.value>0),E3=P(()=>He.filter(t=>{var s,n;return(n=(s=t.meta)==null?void 0:s.slide)==null?void 0:n.title}).reduce((t,s)=>(Br(t,s),t),[])),P3=P(()=>Ur(E3.value,pt.value));P(()=>Kr(P3.value));function os(){Ea.value<=Et.value?In():Et.value+=1}async function is(){Et.value<=0?await Dn():Et.value-=1}function Qa(t){return Gt.value?`/presenter/${t}`:`/${t}`}function In(){const t=Math.min(He.length,Fe.value+1);return Xs(t)}async function Dn(t=!0){const s=Math.max(1,Fe.value-1);await Xs(s),t&&Ea.value&&dt.replace({query:{...Qt.value.query,clicks:Ea.value}})}function Xs(t,s){return dt.push({path:Qa(t),query:{...Qt.value.query,clicks:s}})}function z3(t){const s=K(0),{direction:n,distanceX:a,distanceY:l}=ig(t,{onSwipeStart(r){r.pointerType==="touch"&&(Zn.value||(s.value=Fl()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!s.value||Zn.value)return;const o=Math.abs(a.value),i=Math.abs(l.value);o/window.innerWidth>.3||o>100?n.value===Vt.LEFT?os():is():(i/window.innerHeight>.4||i>200)&&(n.value===Vt.DOWN?Dn():In())}})}async function tr(){const{saveAs:t}=await Ms(()=>import("./FileSaver.min.7f56e709.js").then(s=>s.F),[]);t(hu(xe.download)?xe.download:xe.exportFilename?`${xe.exportFilename}.pdf`:"/slidev-exported.pdf",`${xe.title}.pdf`)}async function O3(t){var s,n;if(t==null){const a=(n=(s=pt.value)==null?void 0:s.meta)==null?void 0:n.slide;if(!(a!=null&&a.filepath))return!1;t=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function Br(t,s,n=1){var l,r,o,i,c;const a=(r=(l=s.meta)==null?void 0:l.slide)==null?void 0:r.level;a&&a>n&&t.length>0?Br(t[t.length-1].children,s,n+1):t.push({children:[],level:n,path:s.path,hideInToc:Boolean((o=s.meta)==null?void 0:o.hideInToc),title:(c=(i=s.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Ur(t,s,n=!1,a){return t.map(l=>{const r={...l,active:l.path===(s==null?void 0:s.path),hasActiveParent:n};return r.children.length>0&&(r.children=Ur(r.children,s,r.active||r.hasActiveParent,r)),a&&(r.active||r.activeParent)&&(a.activeParent=!0),r})}function Kr(t,s=1){return t.filter(n=>!n.hideInToc).map(n=>({...n,children:Kr(n.children,s+1)}))}function C3(){const t=xe.titleTemplate.replace("%s",xe.title||"Slidev");uf({title:t}),yf(`${t} - shared`),xf(`${t} - drawings`);function s(){Gt.value&&(Jo("page",+Fe.value),Jo("clicks",Et.value))}dt.afterEach(s),he(Et,s),_f(n=>{(+n.page!=+Fe.value||Et.value!==n.clicks)&&dt.replace({path:Qa(n.page),query:{...dt.currentRoute.value.query,clicks:n.clicks||0}})})}const L3=we({__name:"App",setup(t){return R(j),C3(),(s,n)=>{const a=Le("RouterView"),l=Le("StarportCarrier");return k(),B(Ae,null,[O(a),O(l)],64)}}});function yl(t){return t!==null&&typeof t=="object"}function sr(t,s,n=".",a){if(!yl(s))return sr(t,{},n,a);const l=Object.assign({},s);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const o=t[r];o!=null&&(a&&a(l,r,o,n)||(Array.isArray(o)&&Array.isArray(l[r])?l[r]=o.concat(l[r]):yl(o)&&yl(l[r])?l[r]=sr(o,l[r],(n?`${n}.`:"")+r.toString(),a):l[r]=o))}return l}function G3(t){return(...s)=>s.reduce((n,a)=>sr(n,a,"",t),{})}const R3=G3(),lp=1/60*1e3,Z3=typeof performance<"u"?()=>performance.now():()=>Date.now(),rp=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(Z3()),lp);function N3(t){let s=[],n=[],a=0,l=!1,r=!1;const o=new WeakSet,i={schedule:(c,u=!1,p=!1)=>{const m=p&&l,h=m?s:n;return u&&o.add(c),h.indexOf(c)===-1&&(h.push(c),m&&l&&(a=s.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),o.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[s,n]=[n,s],n.length=0,a=s.length,a)for(let u=0;u<a;u++){const p=s[u];p(c),o.has(p)&&(i.schedule(p),t())}l=!1,r&&(r=!1,i.process(c))}};return i}const I3=40;let nr=!0,Fn=!1,ar=!1;const Us={delta:0,timestamp:0},Un=["read","update","preRender","render","postRender"],Ja=Un.reduce((t,s)=>(t[s]=N3(()=>Fn=!0),t),{}),lr=Un.reduce((t,s)=>{const n=Ja[s];return t[s]=(a,l=!1,r=!1)=>(Fn||j3(),n.schedule(a,l,r)),t},{}),D3=Un.reduce((t,s)=>(t[s]=Ja[s].cancel,t),{});Un.reduce((t,s)=>(t[s]=()=>Ja[s].process(Us),t),{});const F3=t=>Ja[t].process(Us),op=t=>{Fn=!1,Us.delta=nr?lp:Math.max(Math.min(t-Us.timestamp,I3),1),Us.timestamp=t,ar=!0,Un.forEach(F3),ar=!1,Fn&&(nr=!1,rp(op))},j3=()=>{Fn=!0,nr=!0,ar||rp(op)},ip=()=>Us;function cp(t,s){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&s.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(t);l<a.length;l++)s.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(t,a[l])&&(n[a[l]]=t[a[l]]);return n}var q3=function(){},ji=function(){};const rr=(t,s,n)=>Math.min(Math.max(n,t),s),_l=.001,H3=.01,qi=10,V3=.05,B3=1;function U3({duration:t=800,bounce:s=.25,velocity:n=0,mass:a=1}){let l,r;q3(t<=qi*1e3);let o=1-s;o=rr(V3,B3,o),t=rr(H3,qi,t/1e3),o<1?(l=u=>{const p=u*o,m=p*t,h=p-n,g=or(u,o),f=Math.exp(-m);return _l-h/g*f},r=u=>{const m=u*o*t,h=m*n+n,g=Math.pow(o,2)*Math.pow(u,2)*t,f=Math.exp(-m),_=or(Math.pow(u,2),o);return(-l(u)+_l>0?-1:1)*((h-g)*f)/_}):(l=u=>{const p=Math.exp(-u*t),m=(u-n)*t+1;return-_l+p*m},r=u=>{const p=Math.exp(-u*t),m=(n-u)*(t*t);return p*m});const i=5/t,c=W3(l,r,i);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(c,2)*a;return{stiffness:u,damping:o*2*Math.sqrt(a*u),duration:t}}}const K3=12;function W3(t,s,n){let a=n;for(let l=1;l<K3;l++)a=a-t(a)/s(a);return a}function or(t,s){return t*Math.sqrt(1-s*s)}const Q3=["duration","bounce"],J3=["stiffness","damping","mass"];function Hi(t,s){return s.some(n=>t[n]!==void 0)}function Y3(t){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!Hi(t,J3)&&Hi(t,Q3)){const n=U3(t);s=Object.assign(Object.assign(Object.assign({},s),n),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function Wr(t){var{from:s=0,to:n=1,restSpeed:a=2,restDelta:l}=t,r=cp(t,["from","to","restSpeed","restDelta"]);const o={done:!1,value:s};let{stiffness:i,damping:c,mass:u,velocity:p,duration:m,isResolvedFromDuration:h}=Y3(r),g=Vi,f=Vi;function _(){const x=p?-(p/1e3):0,$=n-s,A=c/(2*Math.sqrt(i*u)),w=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(n-s)/100,.4)),A<1){const T=or(w,A);g=Z=>{const G=Math.exp(-A*w*Z);return n-G*((x+A*w*$)/T*Math.sin(T*Z)+$*Math.cos(T*Z))},f=Z=>{const G=Math.exp(-A*w*Z);return A*w*G*(Math.sin(T*Z)*(x+A*w*$)/T+$*Math.cos(T*Z))-G*(Math.cos(T*Z)*(x+A*w*$)-T*$*Math.sin(T*Z))}}else if(A===1)g=T=>n-Math.exp(-w*T)*($+(x+w*$)*T);else{const T=w*Math.sqrt(A*A-1);g=Z=>{const G=Math.exp(-A*w*Z),I=Math.min(T*Z,300);return n-G*((x+A*w*$)*Math.sinh(I)+T*$*Math.cosh(I))/T}}}return _(),{next:x=>{const $=g(x);if(h)o.done=x>=m;else{const A=f(x)*1e3,w=Math.abs(A)<=a,T=Math.abs(n-$)<=l;o.done=w&&T}return o.value=o.done?n:$,o},flipTarget:()=>{p=-p,[s,n]=[n,s],_()}}}Wr.needsInterpolation=(t,s)=>typeof t=="string"||typeof s=="string";const Vi=t=>0,up=(t,s,n)=>{const a=s-t;return a===0?1:(n-t)/a},Qr=(t,s,n)=>-n*t+n*s+t,pp=(t,s)=>n=>Math.max(Math.min(n,s),t),Mn=t=>t%1?Number(t.toFixed(5)):t,jn=/(-)?([\d]*\.?[\d])+/g,ir=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,X3=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Kn(t){return typeof t=="string"}const Wn={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Sn=Object.assign(Object.assign({},Wn),{transform:pp(0,1)}),ra=Object.assign(Object.assign({},Wn),{default:1}),Jr=t=>({test:s=>Kn(s)&&s.endsWith(t)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${t}`}),hs=Jr("deg"),Tn=Jr("%"),ie=Jr("px"),Bi=Object.assign(Object.assign({},Tn),{parse:t=>Tn.parse(t)/100,transform:t=>Tn.transform(t*100)}),Yr=(t,s)=>n=>Boolean(Kn(n)&&X3.test(n)&&n.startsWith(t)||s&&Object.prototype.hasOwnProperty.call(n,s)),mp=(t,s,n)=>a=>{if(!Kn(a))return a;const[l,r,o,i]=a.match(jn);return{[t]:parseFloat(l),[s]:parseFloat(r),[n]:parseFloat(o),alpha:i!==void 0?parseFloat(i):1}},ws={test:Yr("hsl","hue"),parse:mp("hue","saturation","lightness"),transform:({hue:t,saturation:s,lightness:n,alpha:a=1})=>"hsla("+Math.round(t)+", "+Tn.transform(Mn(s))+", "+Tn.transform(Mn(n))+", "+Mn(Sn.transform(a))+")"},ek=pp(0,255),bl=Object.assign(Object.assign({},Wn),{transform:t=>Math.round(ek(t))}),ss={test:Yr("rgb","red"),parse:mp("red","green","blue"),transform:({red:t,green:s,blue:n,alpha:a=1})=>"rgba("+bl.transform(t)+", "+bl.transform(s)+", "+bl.transform(n)+", "+Mn(Sn.transform(a))+")"};function tk(t){let s="",n="",a="",l="";return t.length>5?(s=t.substr(1,2),n=t.substr(3,2),a=t.substr(5,2),l=t.substr(7,2)):(s=t.substr(1,1),n=t.substr(2,1),a=t.substr(3,1),l=t.substr(4,1),s+=s,n+=n,a+=a,l+=l),{red:parseInt(s,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:l?parseInt(l,16)/255:1}}const cr={test:Yr("#"),parse:tk,transform:ss.transform},at={test:t=>ss.test(t)||cr.test(t)||ws.test(t),parse:t=>ss.test(t)?ss.parse(t):ws.test(t)?ws.parse(t):cr.parse(t),transform:t=>Kn(t)?t:t.hasOwnProperty("red")?ss.transform(t):ws.transform(t)},hp="${c}",dp="${n}";function sk(t){var s,n,a,l;return isNaN(t)&&Kn(t)&&((n=(s=t.match(jn))===null||s===void 0?void 0:s.length)!==null&&n!==void 0?n:0)+((l=(a=t.match(ir))===null||a===void 0?void 0:a.length)!==null&&l!==void 0?l:0)>0}function fp(t){typeof t=="number"&&(t=`${t}`);const s=[];let n=0;const a=t.match(ir);a&&(n=a.length,t=t.replace(ir,hp),s.push(...a.map(at.parse)));const l=t.match(jn);return l&&(t=t.replace(jn,dp),s.push(...l.map(Wn.parse))),{values:s,numColors:n,tokenised:t}}function gp(t){return fp(t).values}function vp(t){const{values:s,numColors:n,tokenised:a}=fp(t),l=s.length;return r=>{let o=a;for(let i=0;i<l;i++)o=o.replace(i<n?hp:dp,i<n?at.transform(r[i]):Mn(r[i]));return o}}const nk=t=>typeof t=="number"?0:t;function ak(t){const s=gp(t);return vp(t)(s.map(nk))}const Qn={test:sk,parse:gp,createTransformer:vp,getAnimatableNone:ak},lk=new Set(["brightness","contrast","saturate","opacity"]);function rk(t){let[s,n]=t.slice(0,-1).split("(");if(s==="drop-shadow")return t;const[a]=n.match(jn)||[];if(!a)return t;const l=n.replace(a,"");let r=lk.has(s)?1:0;return a!==n&&(r*=100),s+"("+r+l+")"}const ok=/([a-z-]*)\(.*?\)/g,ur=Object.assign(Object.assign({},Qn),{getAnimatableNone:t=>{const s=t.match(ok);return s?s.map(rk).join(" "):t}});function wl(t,s,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(s-t)*6*n:n<1/2?s:n<2/3?t+(s-t)*(2/3-n)*6:t}function Ui({hue:t,saturation:s,lightness:n,alpha:a}){t/=360,s/=100,n/=100;let l=0,r=0,o=0;if(!s)l=r=o=n;else{const i=n<.5?n*(1+s):n+s-n*s,c=2*n-i;l=wl(c,i,t+1/3),r=wl(c,i,t),o=wl(c,i,t-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:a}}const ik=(t,s,n)=>{const a=t*t,l=s*s;return Math.sqrt(Math.max(0,n*(l-a)+a))},ck=[cr,ss,ws],Ki=t=>ck.find(s=>s.test(t)),yp=(t,s)=>{let n=Ki(t),a=Ki(s),l=n.parse(t),r=a.parse(s);n===ws&&(l=Ui(l),n=ss),a===ws&&(r=Ui(r),a=ss);const o=Object.assign({},l);return i=>{for(const c in o)c!=="alpha"&&(o[c]=ik(l[c],r[c],i));return o.alpha=Qr(l.alpha,r.alpha,i),n.transform(o)}},uk=t=>typeof t=="number",pk=(t,s)=>n=>s(t(n)),_p=(...t)=>t.reduce(pk);function bp(t,s){return uk(t)?n=>Qr(t,s,n):at.test(t)?yp(t,s):xp(t,s)}const wp=(t,s)=>{const n=[...t],a=n.length,l=t.map((r,o)=>bp(r,s[o]));return r=>{for(let o=0;o<a;o++)n[o]=l[o](r);return n}},mk=(t,s)=>{const n=Object.assign(Object.assign({},t),s),a={};for(const l in n)t[l]!==void 0&&s[l]!==void 0&&(a[l]=bp(t[l],s[l]));return l=>{for(const r in a)n[r]=a[r](l);return n}};function Wi(t){const s=Qn.parse(t),n=s.length;let a=0,l=0,r=0;for(let o=0;o<n;o++)a||typeof s[o]=="number"?a++:s[o].hue!==void 0?r++:l++;return{parsed:s,numNumbers:a,numRGB:l,numHSL:r}}const xp=(t,s)=>{const n=Qn.createTransformer(s),a=Wi(t),l=Wi(s);return a.numHSL===l.numHSL&&a.numRGB===l.numRGB&&a.numNumbers>=l.numNumbers?_p(wp(a.parsed,l.parsed),n):o=>`${o>0?s:t}`},hk=(t,s)=>n=>Qr(t,s,n);function dk(t){if(typeof t=="number")return hk;if(typeof t=="string")return at.test(t)?yp:xp;if(Array.isArray(t))return wp;if(typeof t=="object")return mk}function fk(t,s,n){const a=[],l=n||dk(t[0]),r=t.length-1;for(let o=0;o<r;o++){let i=l(t[o],t[o+1]);if(s){const c=Array.isArray(s)?s[o]:s;i=_p(c,i)}a.push(i)}return a}function gk([t,s],[n]){return a=>n(up(t,s,a))}function vk(t,s){const n=t.length,a=n-1;return l=>{let r=0,o=!1;if(l<=t[0]?o=!0:l>=t[a]&&(r=a-1,o=!0),!o){let c=1;for(;c<n&&!(t[c]>l||c===a);c++);r=c-1}const i=up(t[r],t[r+1],l);return s[r](i)}}function $p(t,s,{clamp:n=!0,ease:a,mixer:l}={}){const r=t.length;ji(r===s.length),ji(!a||!Array.isArray(a)||a.length===r-1),t[0]>t[r-1]&&(t=[].concat(t),s=[].concat(s),t.reverse(),s.reverse());const o=fk(s,a,l),i=r===2?gk(t,o):vk(t,o);return n?c=>i(rr(t[0],t[r-1],c)):i}const Ya=t=>s=>1-t(1-s),Xr=t=>s=>s<=.5?t(2*s)/2:(2-t(2*(1-s)))/2,yk=t=>s=>Math.pow(s,t),kp=t=>s=>s*s*((t+1)*s-t),_k=t=>{const s=kp(t);return n=>(n*=2)<1?.5*s(n):.5*(2-Math.pow(2,-10*(n-1)))},Ap=1.525,bk=4/11,wk=8/11,xk=9/10,Mp=t=>t,eo=yk(2),$k=Ya(eo),Sp=Xr(eo),Tp=t=>1-Math.sin(Math.acos(t)),Ep=Ya(Tp),kk=Xr(Ep),to=kp(Ap),Ak=Ya(to),Mk=Xr(to),Sk=_k(Ap),Tk=4356/361,Ek=35442/1805,Pk=16061/1805,Pa=t=>{if(t===1||t===0)return t;const s=t*t;return t<bk?7.5625*s:t<wk?9.075*s-9.9*t+3.4:t<xk?Tk*s-Ek*t+Pk:10.8*t*t-20.52*t+10.72},zk=Ya(Pa),Ok=t=>t<.5?.5*(1-Pa(1-t*2)):.5*Pa(t*2-1)+.5;function Ck(t,s){return t.map(()=>s||Sp).splice(0,t.length-1)}function Lk(t){const s=t.length;return t.map((n,a)=>a!==0?a/(s-1):0)}function Gk(t,s){return t.map(n=>n*s)}function fa({from:t=0,to:s=1,ease:n,offset:a,duration:l=300}){const r={done:!1,value:t},o=Array.isArray(s)?s:[t,s],i=Gk(a&&a.length===o.length?a:Lk(o),l);function c(){return $p(i,o,{ease:Array.isArray(n)?n:Ck(o,n)})}let u=c();return{next:p=>(r.value=u(p),r.done=p>=l,r),flipTarget:()=>{o.reverse(),u=c()}}}function Rk({velocity:t=0,from:s=0,power:n=.8,timeConstant:a=350,restDelta:l=.5,modifyTarget:r}){const o={done:!1,value:s};let i=n*t;const c=s+i,u=r===void 0?c:r(c);return u!==c&&(i=u-s),{next:p=>{const m=-i*Math.exp(-p/a);return o.done=!(m>l||m<-l),o.value=o.done?u:u+m,o},flipTarget:()=>{}}}const Qi={keyframes:fa,spring:Wr,decay:Rk};function Zk(t){if(Array.isArray(t.to))return fa;if(Qi[t.type])return Qi[t.type];const s=new Set(Object.keys(t));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?fa:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?Wr:fa}function Pp(t,s,n=0){return t-s-n}function Nk(t,s,n=0,a=!0){return a?Pp(s+-t,s,n):s-(t-s)+n}function Ik(t,s,n,a){return a?t>=s+n:t<=-n}const Dk=t=>{const s=({delta:n})=>t(n);return{start:()=>lr.update(s,!0),stop:()=>D3.update(s)}};function zp(t){var s,n,{from:a,autoplay:l=!0,driver:r=Dk,elapsed:o=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:m,onComplete:h,onRepeat:g,onUpdate:f}=t,_=cp(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:x}=_,$,A=0,w=_.duration,T,Z=!1,G=!0,I;const J=Zk(_);!((n=(s=J).needsInterpolation)===null||n===void 0)&&n.call(s,a,x)&&(I=$p([0,100],[a,x],{clamp:!1}),a=0,x=100);const re=J(Object.assign(Object.assign({},_),{from:a,to:x}));function me(){A++,c==="reverse"?(G=A%2===0,o=Nk(o,w,u,G)):(o=Pp(o,w,u),c==="mirror"&&re.flipTarget()),Z=!1,g&&g()}function ve(){$.stop(),h&&h()}function Ve(Ze){if(G||(Ze=-Ze),o+=Ze,!Z){const Pe=re.next(Math.max(0,o));T=Pe.value,I&&(T=I(T)),Z=G?Pe.done:o<=0}f==null||f(T),Z&&(A===0&&(w!=null||(w=o)),A<i?Ik(o,w,u,G)&&me():ve())}function je(){p==null||p(),$=r(Ve),$.start()}return l&&je(),{stop:()=>{m==null||m(),$.stop()}}}function Op(t,s){return s?t*(1e3/s):0}function Fk({from:t=0,velocity:s=0,min:n,max:a,power:l=.8,timeConstant:r=750,bounceStiffness:o=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:m,onComplete:h,onStop:g}){let f;function _(w){return n!==void 0&&w<n||a!==void 0&&w>a}function x(w){return n===void 0?a:a===void 0||Math.abs(n-w)<Math.abs(a-w)?n:a}function $(w){f==null||f.stop(),f=zp(Object.assign(Object.assign({},w),{driver:p,onUpdate:T=>{var Z;m==null||m(T),(Z=w.onUpdate)===null||Z===void 0||Z.call(w,T)},onComplete:h,onStop:g}))}function A(w){$(Object.assign({type:"spring",stiffness:o,damping:i,restDelta:c},w))}if(_(t))A({from:t,velocity:s,to:x(t)});else{let w=l*s+t;typeof u<"u"&&(w=u(w));const T=x(w),Z=T===n?-1:1;let G,I;const J=re=>{G=I,I=re,s=Op(re-G,ip().delta),(Z===1&&re>T||Z===-1&&re<T)&&A({from:re,to:T,velocity:s})};$({type:"decay",from:t,velocity:s,timeConstant:r,power:l,restDelta:c,modifyTarget:u,onUpdate:_(w)?J:void 0})}return{stop:()=>f==null?void 0:f.stop()}}const Cp=(t,s)=>1-3*s+3*t,Lp=(t,s)=>3*s-6*t,Gp=t=>3*t,za=(t,s,n)=>((Cp(s,n)*t+Lp(s,n))*t+Gp(s))*t,Rp=(t,s,n)=>3*Cp(s,n)*t*t+2*Lp(s,n)*t+Gp(s),jk=1e-7,qk=10;function Hk(t,s,n,a,l){let r,o,i=0;do o=s+(n-s)/2,r=za(o,a,l)-t,r>0?n=o:s=o;while(Math.abs(r)>jk&&++i<qk);return o}const Vk=8,Bk=.001;function Uk(t,s,n,a){for(let l=0;l<Vk;++l){const r=Rp(s,n,a);if(r===0)return s;const o=za(s,n,a)-t;s-=o/r}return s}const ga=11,oa=1/(ga-1);function Kk(t,s,n,a){if(t===s&&n===a)return Mp;const l=new Float32Array(ga);for(let o=0;o<ga;++o)l[o]=za(o*oa,t,n);function r(o){let i=0,c=1;const u=ga-1;for(;c!==u&&l[c]<=o;++c)i+=oa;--c;const p=(o-l[c])/(l[c+1]-l[c]),m=i+p*oa,h=Rp(m,t,n);return h>=Bk?Uk(o,m,t,n):h===0?m:Hk(o,i,i+oa,t,n)}return o=>o===0||o===1?o:za(r(o),s,a)}const xl={};class Wk{constructor(){this.subscriptions=new Set}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,n,a){if(!!this.subscriptions.size)for(const l of this.subscriptions)l(s,n,a)}clear(){this.subscriptions.clear()}}const Ji=t=>!isNaN(parseFloat(t));class Qk{constructor(s){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Wk,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:a,timestamp:l}=ip();this.lastUpdated!==l&&(this.timeDelta=a,this.lastUpdated=l),lr.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>lr.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Ji(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=s,this.canTrackVelocity=Ji(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Op(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(n=>{const{stop:a}=s(n);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Jk(t){return new Qk(t)}const{isArray:Yk}=Array;function Xk(){const t=K({}),s=a=>{const l=r=>{!t.value[r]||(t.value[r].stop(),t.value[r].destroy(),delete t.value[r])};a?Yk(a)?a.forEach(l):l(a):Object.keys(t.value).forEach(l)},n=(a,l,r)=>{if(t.value[a])return t.value[a];const o=Jk(l);return o.onChange(i=>r[a]=i),t.value[a]=o,o};return Zd(s),{motionValues:t,get:n,stop:s}}const e6=t=>Array.isArray(t),ds=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),$l=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),t6=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),kl=()=>({type:"keyframes",ease:"linear",duration:300}),s6=t=>({type:"keyframes",duration:800,values:t}),Yi={default:t6,x:ds,y:ds,z:ds,rotate:ds,rotateX:ds,rotateY:ds,rotateZ:ds,scaleX:$l,scaleY:$l,scale:$l,backgroundColor:kl,color:kl,opacity:kl},Zp=(t,s)=>{let n;return e6(s)?n=s6:n=Yi[t]||Yi.default,{to:s,...n(s)}},Xi={...Wn,transform:Math.round},Np={color:at,backgroundColor:at,outlineColor:at,fill:at,stroke:at,borderColor:at,borderTopColor:at,borderRightColor:at,borderBottomColor:at,borderLeftColor:at,borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,size:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,rotate:hs,rotateX:hs,rotateY:hs,rotateZ:hs,scale:ra,scaleX:ra,scaleY:ra,scaleZ:ra,skew:hs,skewX:hs,skewY:hs,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:Sn,originX:Bi,originY:Bi,originZ:ie,zIndex:Xi,filter:ur,WebkitFilter:ur,fillOpacity:Sn,strokeOpacity:Sn,numOctaves:Xi},so=t=>Np[t],Ip=(t,s)=>s&&typeof t=="number"&&s.transform?s.transform(t):t;function n6(t,s){let n=so(t);return n!==ur&&(n=Qn),n.getAnimatableNone?n.getAnimatableNone(s):void 0}const a6={linear:Mp,easeIn:eo,easeInOut:Sp,easeOut:$k,circIn:Tp,circInOut:kk,circOut:Ep,backIn:to,backInOut:Mk,backOut:Ak,anticipate:Sk,bounceIn:zk,bounceInOut:Ok,bounceOut:Pa},ec=t=>{if(Array.isArray(t)){const[s,n,a,l]=t;return Kk(s,n,a,l)}else if(typeof t=="string")return a6[t];return t},l6=t=>Array.isArray(t)&&typeof t[0]!="number",tc=(t,s)=>t==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&Qn.test(s)&&!s.startsWith("url("));function r6(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function o6({ease:t,times:s,delay:n,...a}){const l={...a};return s&&(l.offset=s),t&&(l.ease=l6(t)?t.map(ec):ec(t)),n&&(l.elapsed=-n),l}function i6(t,s,n){return Array.isArray(s.to)&&(t.duration||(t.duration=800)),r6(s),c6(t)||(t={...t,...Zp(n,s.to)}),{...s,...o6(t)}}function c6({delay:t,repeat:s,repeatType:n,repeatDelay:a,from:l,...r}){return!!Object.keys(r).length}function u6(t,s){return t[s]||t.default||t}function p6(t,s,n,a,l){const r=u6(a,t);let o=r.from===null||r.from===void 0?s.get():r.from;const i=tc(t,n);o==="none"&&i&&typeof n=="string"&&(o=n6(t,n));const c=tc(t,o);function u(m){const h={from:o,to:n,velocity:a.velocity?a.velocity:s.getVelocity(),onUpdate:g=>s.set(g)};return r.type==="inertia"||r.type==="decay"?Fk({...h,...r}):zp({...i6(r,h,t),onUpdate:g=>{h.onUpdate(g),r.onUpdate&&r.onUpdate(g)},onComplete:()=>{a.onComplete&&a.onComplete(),l&&l(),m&&m()}})}function p(m){return s.set(n),a.onComplete&&a.onComplete(),l&&l(),m&&m(),{stop:()=>{}}}return!c||!i||r.type===!1?p:u}function m6(){const{motionValues:t,stop:s,get:n}=Xk();return{motionValues:t,stop:s,push:(l,r,o,i={},c)=>{const u=o[l],p=n(l,u,o);if(i&&i.immediate){p.set(r);return}const m=p6(l,p,r,i,c);p.start(m)}}}function h6(t,s={},{motionValues:n,push:a,stop:l}=m6()){const r=b(s),o=K(!1);he(n,m=>{o.value=Object.values(m).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=m=>{if(!r||!r[m])throw new Error(`The variant ${m} does not exist.`);return r[m]},c=m=>(typeof m=="string"&&(m=i(m)),Promise.all(Object.entries(m).map(([h,g])=>{if(h!=="transition")return new Promise(f=>a(h,g,t,m.transition||Zp(h,m[h]),f))}).filter(Boolean)));return{isAnimating:o,apply:c,set:m=>{const h=Dl(m)?m:i(m);Object.entries(h).forEach(([g,f])=>{g!=="transition"&&a(g,f,t,{immediate:!0})})},leave:async m=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){m();return}await c(h),m()},stop:l}}const no=typeof window<"u",d6=()=>no&&window.onpointerdown===null,f6=()=>no&&window.ontouchstart===null,g6=()=>no&&window.onmousedown===null;function v6({target:t,state:s,variants:n,apply:a}){const l=b(n),r=K(!1),o=K(!1),i=K(!1),c=P(()=>{let p=[];return l&&(l.hovered&&(p=[...p,...Object.keys(l.hovered)]),l.tapped&&(p=[...p,...Object.keys(l.tapped)]),l.focused&&(p=[...p,...Object.keys(l.focused)])),p}),u=P(()=>{const p={};Object.assign(p,s.value),r.value&&l.hovered&&Object.assign(p,l.hovered),o.value&&l.tapped&&Object.assign(p,l.tapped),i.value&&l.focused&&Object.assign(p,l.focused);for(const m in p)c.value.includes(m)||delete p[m];return p});l.hovered&&(pe(t,"mouseenter",()=>r.value=!0),pe(t,"mouseleave",()=>{r.value=!1,o.value=!1}),pe(t,"mouseout",()=>{r.value=!1,o.value=!1})),l.tapped&&(g6()&&(pe(t,"mousedown",()=>o.value=!0),pe(t,"mouseup",()=>o.value=!1)),d6()&&(pe(t,"pointerdown",()=>o.value=!0),pe(t,"pointerup",()=>o.value=!1)),f6()&&(pe(t,"touchstart",()=>o.value=!0),pe(t,"touchend",()=>o.value=!1))),l.focused&&(pe(t,"focus",()=>i.value=!0),pe(t,"blur",()=>i.value=!1)),he(u,a)}function y6({set:t,target:s,apply:n,variants:a,variant:l}){const r=b(a);he(()=>s,()=>{!r||(r.initial&&t("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function _6({state:t,apply:s}){he(t,n=>{n&&s(n)},{immediate:!0})}function b6({target:t,variants:s,variant:n}){const a=b(s);a&&(a.visible||a.visibleOnce)&&lg(t,([{isIntersecting:l}])=>{a.visible?l?n.value="visible":n.value="initial":a.visibleOnce&&(l&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function w6(t,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&y6(t),s.syncVariants&&_6(t),s.visibilityHooks&&b6(t),s.eventListeners&&v6(t)}function Dp(t={}){const s=Ce({...t}),n=K({});return he(s,()=>{const a={};for(const[l,r]of Object.entries(s)){const o=so(l),i=Ip(r,o);a[l]=i}n.value=a},{immediate:!0,deep:!0}),{state:s,style:n}}function ao(t,s){he(()=>Mt(t),n=>{!n||s(n)},{immediate:!0})}const x6={x:"translateX",y:"translateY",z:"translateZ"};function Fp(t={},s=!0){const n=Ce({...t}),a=K("");return he(n,l=>{let r="",o=!1;if(s&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(ie.transform).join(",");r+=`translate3d(${i}) `,o=!0}for(const[i,c]of Object.entries(l)){if(s&&(i==="x"||i==="y"||i==="z"))continue;const u=so(i),p=Ip(c,u);r+=`${x6[i]||i}(${p}) `}s&&!o&&(r+="translateZ(0px) "),a.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:a}}const $6=["","X","Y","Z"],k6=["perspective","translate","scale","rotate","skew"],jp=["transformPerspective","x","y","z"];k6.forEach(t=>{$6.forEach(s=>{const n=t+s;jp.push(n)})});const A6=new Set(jp);function lo(t){return A6.has(t)}const M6=new Set(["originX","originY","originZ"]);function qp(t){return M6.has(t)}function S6(t){const s={},n={};return Object.entries(t).forEach(([a,l])=>{lo(a)||qp(a)?s[a]=l:n[a]=l}),{transform:s,style:n}}function Hp(t){const{transform:s,style:n}=S6(t),{transform:a}=Fp(s),{style:l}=Dp(n);return a.value&&(l.value.transform=a.value),l.value}function T6(t,s){let n,a;const{state:l,style:r}=Dp();return ao(t,o=>{a=o;for(const i of Object.keys(Np))o.style[i]===null||o.style[i]===""||lo(i)||qp(i)||(l[i]=o.style[i]);n&&Object.entries(n).forEach(([i,c])=>o.style[i]=c),s&&s(l)}),he(r,o=>{if(!a){n=o;return}for(const i in o)a.style[i]=o[i]},{immediate:!0}),{style:l}}function E6(t){const s=t.trim().split(/\) |\)/);if(s.length===1)return{};const n=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return s.reduce((a,l)=>{if(!l)return a;const[r,o]=l.split("("),c=o.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...a,[r]:u}},{})}function P6(t,s){Object.entries(E6(s)).forEach(([n,a])=>{const l=["x","y","z"];if(n==="translate3d"){if(a===0){l.forEach(r=>t[r]=0);return}a.forEach((r,o)=>t[l[o]]=r);return}if(a=parseFloat(a),n==="translateX"){t.x=a;return}if(n==="translateY"){t.y=a;return}if(n==="translateZ"){t.z=a;return}t[n]=a})}function z6(t,s){let n,a;const{state:l,transform:r}=Fp();return ao(t,o=>{a=o,o.style.transform&&P6(l,o.style.transform),n&&(o.style.transform=n),s&&s(l)}),he(r,o=>{if(!a){n=o;return}a.style.transform=o},{immediate:!0}),{transform:l}}function O6(t,s){const n=Ce({}),a=o=>Object.entries(o).forEach(([i,c])=>n[i]=c),{style:l}=T6(t,a),{transform:r}=z6(t,a);return he(n,o=>{Object.entries(o).forEach(([i,c])=>{const u=lo(i)?r:l;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),ao(t,()=>s&&a(s)),{motionProperties:n,style:l,transform:r}}function C6(t={}){const s=b(t),n=K();return{state:P(()=>{if(!!n.value)return s[n.value]}),variant:n}}function Vp(t,s={},n){const{motionProperties:a}=O6(t),{variant:l,state:r}=C6(s),o=h6(a,s),i={target:t,variant:l,variants:s,state:r,motionProperties:a,...o};return w6(i,n),i}const L6=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],G6=(t,s)=>{const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};n&&(n.variants&&Dl(n.variants)&&(s.value={...s.value,...n.variants}),L6.forEach(a=>{if(a==="delay"){if(n&&n[a]&&xd(n[a])){const l=n[a];s&&s.value&&(s.value.enter&&(s.value.enter.transition||(s.value.enter.transition={}),s.value.enter.transition={delay:l,...s.value.enter.transition}),s.value.visible&&(s.value.visible.transition||(s.value.visible.transition={}),s.value.visible.transition={delay:l,...s.value.visible.transition}),s.value.visibleOnce&&(s.value.visibleOnce.transition||(s.value.visibleOnce.transition={}),s.value.visibleOnce.transition={delay:l,...s.value.visibleOnce.transition}))}return}a==="visible-once"&&(a="visibleOnce"),n&&n[a]&&Dl(n[a])&&(s.value[a]=n[a])}))},Al=t=>({created:(n,a,l)=>{const r=a.value&&typeof a.value=="string"?a.value:l.key;r&&xl[r]&&xl[r].stop();const o=K(t||{});typeof a.value=="object"&&(o.value=a.value),G6(l,o);const i=Vp(n,o);n.motionInstance=i,r&&(xl[r]=i)},getSSRProps(n,a){let{initial:l}=n.value||a&&(a==null?void 0:a.props)||{};l=b(l);const r=R3((t==null?void 0:t.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:Hp(r)}}}),R6={initial:{opacity:0},enter:{opacity:1}},Z6={initial:{opacity:0},visible:{opacity:1}},N6={initial:{opacity:0},visibleOnce:{opacity:1}},I6={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},D6={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},F6={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},j6={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},q6={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},H6={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},V6={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},B6={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},U6={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},K6={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},W6={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Q6={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},J6={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Y6={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},X6={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},eA={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},tA={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},sA={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},nA={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},aA={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},lA={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},rA={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},oA={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},iA={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},cA={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},uA={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},pA={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},pr={__proto__:null,fade:R6,fadeVisible:Z6,fadeVisibleOnce:N6,pop:I6,popVisible:D6,popVisibleOnce:F6,rollBottom:J6,rollLeft:j6,rollRight:V6,rollTop:K6,rollVisibleBottom:Y6,rollVisibleLeft:q6,rollVisibleRight:B6,rollVisibleTop:W6,rollVisibleOnceBottom:X6,rollVisibleOnceLeft:H6,rollVisibleOnceRight:U6,rollVisibleOnceTop:Q6,slideBottom:cA,slideLeft:eA,slideRight:nA,slideTop:rA,slideVisibleBottom:uA,slideVisibleLeft:tA,slideVisibleRight:aA,slideVisibleTop:oA,slideVisibleOnceBottom:pA,slideVisibleOnceLeft:sA,slideVisibleOnceRight:lA,slideVisibleOnceTop:iA},mA=we({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var i;const s=Bh(),n=Ce({});if(!t.is&&!s.default)return()=>rt("div",{});const a=P(()=>{let c;return t.preset&&(c=pr[t.preset]),c}),l=P(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),r=P(()=>{const c={...l.value,...a.value||{},...t.variants||{}};return t.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(t.delay)),c}),o=P(()=>{if(!t.is)return;let c=t.is;return typeof o.value=="string"&&!tm(c)&&(c=Le(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var m,h,g;(m=u.variants)!=null&&m.enter&&u.apply("enter"),(h=u.variants)!=null&&h.visible&&u.apply("visible"),(g=u.variants)!=null&&g.visibleOnce&&u.apply("visibleOnce")},10)};Pr(()=>Object.entries(n).forEach(([u,p])=>c(p)))}return{slots:s,component:o,motionConfig:r,instances:n}},render({slots:t,motionConfig:s,instances:n,component:a}){var i;const l=Hp(s.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:p})=>{const m=Vp(p,s);n[u]=m},c);if(a){const c=rt(a,void 0,t);return r(c,0),c}return(((i=t.default)==null?void 0:i.call(t))||[]).map((c,u)=>r(c,u))}});function hA(t){const s="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(s.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(a,l=>n.charAt(s.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const dA={install(t,s){if(t.directive("motion",Al()),t.component("Motion",mA),!s||s&&!s.excludePresets)for(const n in pr){const a=pr[n];t.directive(`motion-${hA(n)}`,Al(a))}if(s&&s.directives)for(const n in s.directives){const a=s.directives[n];a.initial,t.directive(`motion-${n}`,Al(a))}}};var sc;const En=typeof window<"u",fA=Object.prototype.toString,gA=t=>fA.call(t)==="[object Object]";En&&((sc=window==null?void 0:window.navigator)==null?void 0:sc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function vA(t){return $c()?(kc(t),!0):!1}function yA(t){var s;const n=b(t);return(s=n==null?void 0:n.$el)!=null?s:n}const _A=En?window:void 0,mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hr="__vueuse_ssr_handlers__";mr[hr]=mr[hr]||{};mr[hr];function bA(t,s={}){const{immediate:n=!0,window:a=_A}=s,l=K(!1);let r=null;function o(){!l.value||!a||(t(),r=a.requestAnimationFrame(o))}function i(){!l.value&&a&&(l.value=!0,o())}function c(){l.value=!1,r!=null&&a&&(a.cancelAnimationFrame(r),r=null)}return n&&i(),vA(c),{isActive:l,pause:c,resume:i}}var nc;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(nc||(nc={}));const ro="vue-starport-injection",Bp="vue-starport-options",wA={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Up={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var xA=Object.defineProperty,Oa=Object.getOwnPropertySymbols,Kp=Object.prototype.hasOwnProperty,Wp=Object.prototype.propertyIsEnumerable,ac=(t,s,n)=>s in t?xA(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,$A=(t,s)=>{for(var n in s||(s={}))Kp.call(s,n)&&ac(t,n,s[n]);if(Oa)for(var n of Oa(s))Wp.call(s,n)&&ac(t,n,s[n]);return t},lc=(t,s)=>{var n={};for(var a in t)Kp.call(t,a)&&s.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&Oa)for(var a of Oa(t))s.indexOf(a)<0&&Wp.call(t,a)&&(n[a]=t[a]);return n};const kA=we({name:"StarportProxy",props:$A({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Up),setup(t,s){const n=R(ro),a=P(()=>n.getInstance(t.port,t.component)),l=K(),r=a.value.generateId(),o=K(!1);return a.value.isVisible||(a.value.land(),o.value=!0),Hn(async()=>{a.value.el||(a.value.el=l.value,await Qe(),o.value=!0,a.value.rect.update())}),Ha(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,o.value=!1,!a.value.options.keepAlive&&(await Qe(),await Qe(),!a.value.el&&n.dispose(a.value.port))}),he(()=>t,async()=>{a.value.props&&await Qe();const i=t,{props:c}=i,u=lc(i,["props"]);a.value.props=c||{},a.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=t,{initialProps:c,mountedProps:u}=i,p=lc(i,["initialProps","mountedProps"]),m=xa(p,(o.value?u:c)||{});return rt("div",xa(m,{id:r,ref:l,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),s.slots.default?rt(s.slots.default):void 0)}}});var AA=Object.defineProperty,MA=Object.defineProperties,SA=Object.getOwnPropertyDescriptors,rc=Object.getOwnPropertySymbols,TA=Object.prototype.hasOwnProperty,EA=Object.prototype.propertyIsEnumerable,oc=(t,s,n)=>s in t?AA(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,PA=(t,s)=>{for(var n in s||(s={}))TA.call(s,n)&&oc(t,n,s[n]);if(rc)for(var n of rc(s))EA.call(s,n)&&oc(t,n,s[n]);return t},zA=(t,s)=>MA(t,SA(s));const OA=we({name:"Starport",inheritAttrs:!0,props:Up,setup(t,s){const n=K(!1);return Hn(()=>{n.value=!0}),()=>{var o,i;const a=(i=(o=s.slots).default)==null?void 0:i.call(o);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const l=a[0];let r=l.type;return(!gA(r)||Ws(r))&&(r={render(){return a}}),rt(kA,zA(PA({},t),{key:t.port,component:Ia(r),props:l.props}))}}});function CA(t){const s=Ce({height:0,width:0,left:0,top:0,update:a,listen:r,pause:o,margin:"0px",padding:"0px"}),n=En?document.documentElement||document.body:void 0;function a(){if(!En)return;const i=yA(t);if(!i)return;const{height:c,width:u,left:p,top:m}=i.getBoundingClientRect(),h=window.getComputedStyle(i),g=h.margin,f=h.padding;Object.assign(s,{height:c,width:u,left:p,top:n.scrollTop+m,margin:g,padding:f})}const l=bA(a,{immediate:!1});function r(){!En||(a(),l.resume())}function o(){l.pause()}return s}let LA=(t,s=21)=>(n=s)=>{let a="",l=n;for(;l--;)a+=t[Math.random()*t.length|0];return a};const ic=LA("abcdefghijklmnopqrstuvwxyz",5);function cc(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function GA(t){var s;return t.name||((s=t.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var RA=Object.defineProperty,uc=Object.getOwnPropertySymbols,ZA=Object.prototype.hasOwnProperty,NA=Object.prototype.propertyIsEnumerable,pc=(t,s,n)=>s in t?RA(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Ml=(t,s)=>{for(var n in s||(s={}))ZA.call(s,n)&&pc(t,n,s[n]);if(uc)for(var n of uc(s))NA.call(s,n)&&pc(t,n,s[n]);return t};function IA(t,s,n={}){const a=GA(s),l=cc(a)||ic(),r=K(),o=K(null),i=K(!1),c=K(!1),u=pm(!0),p=K({}),m=P(()=>Ml(Ml(Ml({},wA),n),p.value)),h=K(0);let g;u.run(()=>{g=CA(r),he(r,async $=>{$&&(c.value=!0),await Qe(),r.value||(c.value=!1)})});const f=cc(t);function _(){return`starport-${l}-${f}-${ic()}`}const x=_();return Ce({el:r,id:x,port:t,props:o,rect:g,scope:u,isLanded:i,isVisible:c,options:m,liftOffTime:h,component:s,componentName:a,componentId:l,generateId:_,setLocalOptions($={}){p.value=JSON.parse(JSON.stringify($))},elRef(){return r},liftOff(){!i.value||(i.value=!1,h.value=Date.now(),g.listen())},land(){i.value||(i.value=!0,g.pause())}})}function DA(t){const s=Ce(new Map);function n(l,r){let o=s.get(l);return o||(o=IA(l,r,t),s.set(l,o)),o.component=r,o}function a(l){var r;(r=s.get(l))==null||r.scope.stop(),s.delete(l)}return{portMap:s,dispose:a,getInstance:n}}var FA=Object.defineProperty,jA=Object.defineProperties,qA=Object.getOwnPropertyDescriptors,mc=Object.getOwnPropertySymbols,HA=Object.prototype.hasOwnProperty,VA=Object.prototype.propertyIsEnumerable,hc=(t,s,n)=>s in t?FA(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,BA=(t,s)=>{for(var n in s||(s={}))HA.call(s,n)&&hc(t,n,s[n]);if(mc)for(var n of mc(s))VA.call(s,n)&&hc(t,n,s[n]);return t},UA=(t,s)=>jA(t,qA(s));const KA=we({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const s=R(ro);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=P(()=>s.getInstance(t.port,t.component)),a=P(()=>{var o;return((o=n.value.el)==null?void 0:o.id)||n.value.id}),l=P(()=>{const o=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-o),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?UA(BA({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),u)}),r={};return()=>{const o=!!(n.value.isLanded&&n.value.el);return rt("div",{style:l.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},rt(Rh,{to:o?`#${a.value}`:"body",disabled:!o},rt(n.value.component,xa(r,n.value.props))))}}}),WA=we({name:"StarportCarrier",setup(t,{slots:s}){const n=DA(R(Bp,{}));return sn().appContext.app.provide(ro,n),()=>{var l;return[(l=s.default)==null?void 0:l.call(s),Array.from(n.portMap.entries()).map(([r,{component:o}])=>rt(KA,{key:r,port:r,component:o}))]}}});function QA(t={}){return{install(s){s.provide(Bp,t),s.component("Starport",OA),s.component("StarportCarrier",WA)}}}function JA(t){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),t.app.use(dA),t.app.use(QA({keepAlive:!0}))}function it(t,s,n){var a,l;return(l=((a=t.instance)==null?void 0:a.$).provides[s])!=null?l:n}function YA(){return{install(t){t.directive("click",{name:"v-click",mounted(s,n){var p,m,h,g;if(An.value||((p=it(n,pa))==null?void 0:p.value))return;const a=it(n,Rs),l=it(n,ua),r=it(n,ql),o=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((m=a==null?void 0:a.value)==null?void 0:m.length)||0,u=i?hf:il;if(a&&!((h=a==null?void 0:a.value)!=null&&h.includes(s))&&a.value.push(s),n.value==null&&(n.value=a==null?void 0:a.value.length),!(r!=null&&r.value.has(n.value)))r==null||r.value.set(n.value,[s]);else if(!((g=r==null?void 0:r.value.get(n.value))!=null&&g.includes(s))){const f=(r==null?void 0:r.value.get(n.value))||[];r==null||r.value.set(n.value,[s].concat(f))}s==null||s.classList.toggle(Os,!0),l&&he(l,()=>{var $;const f=($=l==null?void 0:l.value)!=null?$:0,_=n.value!=null?f>=n.value:f>c;s.classList.contains(cl)||s.classList.toggle(u,!_),o!==!1&&o!==void 0&&s.classList.toggle(u,_),s.classList.toggle(cn,!1);const x=r==null?void 0:r.value.get(f);x==null||x.forEach((A,w)=>{A.classList.toggle(aa,!1),w===x.length-1?A.classList.toggle(cn,!0):A.classList.toggle(aa,!0)}),s.classList.contains(cn)||s.classList.toggle(aa,_)},{immediate:!0})},unmounted(s,n){s==null||s.classList.toggle(Os,!1);const a=it(n,Rs);a!=null&&a.value&&Qo(a.value,s)}}),t.directive("after",{name:"v-after",mounted(s,n){var i,c;if(An.value||((i=it(n,pa))==null?void 0:i.value))return;const a=it(n,Rs),l=it(n,ua),r=it(n,ql),o=a==null?void 0:a.value.length;n.value==null&&(n.value=a==null?void 0:a.value.length),r!=null&&r.value.has(n.value)?(c=r==null?void 0:r.value.get(n.value))==null||c.push(s):r==null||r.value.set(n.value,[s]),s==null||s.classList.toggle(Os,!0),l&&he(l,()=>{var p,m,h;const u=((p=l.value)!=null?p:0)>=((h=(m=n.value)!=null?m:o)!=null?h:0);s.classList.contains(cl)||s.classList.toggle(il,!u),s.classList.toggle(cn,!1),s.classList.contains(cn)||s.classList.toggle(aa,u)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(Os,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(s,n){var o,i,c;if(An.value||((o=it(n,pa))==null?void 0:o.value))return;const a=it(n,Rs),l=it(n,ua),r=((i=a==null?void 0:a.value)==null?void 0:i.length)||0;a&&!((c=a==null?void 0:a.value)!=null&&c.includes(s))&&a.value.push(s),s==null||s.classList.toggle(Os,!0),l&&he(l,()=>{var m;const u=(m=l==null?void 0:l.value)!=null?m:0,p=n.value!=null?u>=n.value:u>r;s.classList.toggle(il,p),s.classList.toggle(cl,p)},{immediate:!0})},unmounted(s,n){s==null||s.classList.toggle(Os,!1);const a=it(n,Rs);a!=null&&a.value&&Qo(a.value,s)}})}}}function XA(t,s){const n=Yu(t),a=Xu(s,n.currentRoute,n.currentPage);return{nav:{...n,...a,downloadPDF:tr,next:os,nextSlide:In,openInEditor:O3,prev:is,prevSlide:Dn},configs:xe,themeConfigs:P(()=>xe.themeConfig)}}function e5(){return{install(t){const s=XA(Qt,Et);t.provide(j,Ce(s))}}}const an=yd(L3);an.use(dt);an.use(rf());an.use(YA());an.use(e5());JA({app:an,router:dt});an.mount("#app");export{Hr as $,dv as A,z3 as B,Hn as C,Ce as D,a5 as E,Ae as F,o5 as G,he as H,S as I,My as J,Fe as K,Cv as L,et as M,Me as N,kv as O,t5 as P,s5 as Q,Et as R,Ea as S,S3 as T,vl as U,ul as V,Zn as W,fl as X,Cy as Y,qr as Z,Uu as _,j as a,Wu as a0,zt as a1,n5 as a2,Dt as a3,Zt as a4,i5 as a5,dn as a6,la as a7,bs as a8,Yl as a9,tv as aa,sv as ab,nv as ac,lv as ad,Or as ae,mu as af,tt as ag,h1 as ah,wu as ai,rv as aj,Ha as ak,wv as al,uf as b,xe as c,we as d,Bm as e,B as f,e as g,b as h,R as i,xu as j,He as k,ap as l,d as m,st as n,k as o,O as p,ue as q,Vn as r,Ge as s,_t as t,l5 as u,K as v,r5 as w,P as x,pt as y,H as z};
