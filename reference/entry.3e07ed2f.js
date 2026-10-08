var H1=Object.defineProperty;var j1=(t,e,n)=>e in t?H1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Re=(t,e,n)=>(j1(t,typeof e!="symbol"?e+"":e,n),n);function Wc(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Qo(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ke(r)?$1(r):Qo(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ke(t))return t;if(Ve(t))return t}}const W1=/;(?![^(]*\))/g,G1=/:([^]+)/,q1=/\/\*.*?\*\//gs;function $1(t){const e={};return t.replace(q1,"").split(W1).forEach(n=>{if(n){const r=n.split(G1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zo(t){let e="";if(Ke(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Zo(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function UR(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ke(e)&&(t.class=Zo(e)),n&&(t.style=Qo(n)),t}const X1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y1=Wc(X1);function Sm(t){return!!t||t===""}function K1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Gi(t[r],e[r]);return n}function Gi(t,e){if(t===e)return!0;let n=Qu(t),r=Qu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ys(t),r=ys(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?K1(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Gi(t[o],e[o]))return!1}}return String(t)===String(e)}function Gc(t,e){return t.findIndex(n=>Gi(n,e))}const BR=t=>Ke(t)?t:t==null?"":ie(t)||Ve(t)&&(t.toString===Tm||!ye(t.toString))?JSON.stringify(t,Pm,2):String(t),Pm=(t,e)=>e&&e.__v_isRef?Pm(t,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Vr(e)?{[`Set(${e.size})`]:[...e.values()]}:Ve(e)&&!ie(e)&&!Em(e)?String(e):e,He={},pr=[],on=()=>{},Q1=()=>!1,Z1=/^on[^a-z]/,Ds=t=>Z1.test(t),qc=t=>t.startsWith("onUpdate:"),dt=Object.assign,$c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},J1=Object.prototype.hasOwnProperty,Ae=(t,e)=>J1.call(t,e),ie=Array.isArray,mr=t=>Hr(t)==="[object Map]",Vr=t=>Hr(t)==="[object Set]",Qu=t=>Hr(t)==="[object Date]",eb=t=>Hr(t)==="[object RegExp]",ye=t=>typeof t=="function",Ke=t=>typeof t=="string",ys=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Xc=t=>Ve(t)&&ye(t.then)&&ye(t.catch),Tm=Object.prototype.toString,Hr=t=>Tm.call(t),tb=t=>Hr(t).slice(8,-1),Em=t=>Hr(t)==="[object Object]",Yc=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,os=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nb=/-(\w)/g,wn=Jo(t=>t.replace(nb,(e,n)=>n?n.toUpperCase():"")),ib=/\B([A-Z])/g,Yi=Jo(t=>t.replace(ib,"-$1").toLowerCase()),ea=Jo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ra=Jo(t=>t?`on${ea(t)}`:""),xs=(t,e)=>!Object.is(t,e),gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},So=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Po=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Cm=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let Zu;const rb=()=>Zu||(Zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let kt;class Am{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ta(t){return new Am(t)}function sb(t,e=kt){e&&e.active&&e.effects.push(t)}function zm(){return kt}function ob(t){kt&&kt.cleanups.push(t)}const Kc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rm=t=>(t.w&di)>0,Om=t=>(t.n&di)>0,ab=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=di},lb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Rm(i)&&!Om(i)?i.delete(t):e[n++]=i,i.w&=~di,i.n&=~di}e.length=n}},To=new WeakMap;let es=0,di=1;const Ol=30;let rn;const Ui=Symbol(""),Ml=Symbol("");class Qc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sb(this,r)}run(){if(!this.active)return this.fn();let e=rn,n=oi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rn,rn=this,oi=!0,di=1<<++es,es<=Ol?ab(this):Ju(this),this.fn()}finally{es<=Ol&&lb(this),di=1<<--es,rn=this.parent,oi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rn===this?this.deferStop=!0:this.active&&(Ju(this),this.onStop&&this.onStop(),this.active=!1)}}function Ju(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let oi=!0;const Mm=[];function jr(){Mm.push(oi),oi=!1}function Wr(){const t=Mm.pop();oi=t===void 0?!0:t}function Mt(t,e,n){if(oi&&rn){let r=To.get(t);r||To.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Kc()),Fm(i)}}function Fm(t,e){let n=!1;es<=Ol?Om(t)||(t.n|=di,n=!Rm(t)):n=!t.has(rn),n&&(t.add(rn),rn.deps.push(t))}function Nn(t,e,n,r,i,s){const o=To.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ie(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ie(t)?Yc(n)&&a.push(o.get("length")):(a.push(o.get(Ui)),mr(t)&&a.push(o.get(Ml)));break;case"delete":ie(t)||(a.push(o.get(Ui)),mr(t)&&a.push(o.get(Ml)));break;case"set":mr(t)&&a.push(o.get(Ui));break}if(a.length===1)a[0]&&Fl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Fl(Kc(l))}}function Fl(t,e){const n=ie(t)?t:[...t];for(const r of n)r.computed&&ef(r);for(const r of n)r.computed||ef(r)}function ef(t,e){(t!==rn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function cb(t,e){var n;return(n=To.get(t))===null||n===void 0?void 0:n.get(e)}const ub=Wc("__proto__,__v_isRef,__isVue"),km=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ys)),fb=Zc(),hb=Zc(!1,!0),db=Zc(!0),tf=pb();function pb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ce(this);for(let s=0,o=this.length;s<o;s++)Mt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Ce)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jr();const r=Ce(this)[e].apply(this,n);return Wr(),r}}),t}function mb(t){const e=Ce(this);return Mt(e,"has",t),e.hasOwnProperty(t)}function Zc(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?Ob:Um:e?Nm:Dm).get(r))return r;const o=ie(r);if(!t){if(o&&Ae(tf,i))return Reflect.get(tf,i,s);if(i==="hasOwnProperty")return mb}const a=Reflect.get(r,i,s);return(ys(i)?km.has(i):ub(i))||(t||Mt(r,"get",i),e)?a:De(a)?o&&Yc(i)?a:a.value:Ve(a)?t?Bm(a):cn(a):a}}const gb=Lm(),vb=Lm(!0);function Lm(t=!1){return function(n,r,i,s){let o=n[r];if(Pr(o)&&De(o)&&!De(i))return!1;if(!t&&(!Eo(i)&&!Pr(i)&&(o=Ce(o),i=Ce(i)),!ie(n)&&De(o)&&!De(i)))return o.value=i,!0;const a=ie(n)&&Yc(r)?Number(r)<n.length:Ae(n,r),l=Reflect.set(n,r,i,s);return n===Ce(s)&&(a?xs(i,o)&&Nn(n,"set",r,i):Nn(n,"add",r,i)),l}}function bb(t,e){const n=Ae(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Nn(t,"delete",e,void 0),r}function _b(t,e){const n=Reflect.has(t,e);return(!ys(e)||!km.has(e))&&Mt(t,"has",e),n}function yb(t){return Mt(t,"iterate",ie(t)?"length":Ui),Reflect.ownKeys(t)}const Im={get:fb,set:gb,deleteProperty:bb,has:_b,ownKeys:yb},xb={get:db,set(t,e){return!0},deleteProperty(t,e){return!0}},wb=dt({},Im,{get:hb,set:vb}),Jc=t=>t,na=t=>Reflect.getPrototypeOf(t);function Ks(t,e,n=!1,r=!1){t=t.__v_raw;const i=Ce(t),s=Ce(e);n||(e!==s&&Mt(i,"get",e),Mt(i,"get",s));const{has:o}=na(i),a=r?Jc:n?nu:ws;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Qs(t,e=!1){const n=this.__v_raw,r=Ce(n),i=Ce(t);return e||(t!==i&&Mt(r,"has",t),Mt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Zs(t,e=!1){return t=t.__v_raw,!e&&Mt(Ce(t),"iterate",Ui),Reflect.get(t,"size",t)}function nf(t){t=Ce(t);const e=Ce(this);return na(e).has.call(e,t)||(e.add(t),Nn(e,"add",t,t)),this}function rf(t,e){e=Ce(e);const n=Ce(this),{has:r,get:i}=na(n);let s=r.call(n,t);s||(t=Ce(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?xs(e,o)&&Nn(n,"set",t,e):Nn(n,"add",t,e),this}function sf(t){const e=Ce(this),{has:n,get:r}=na(e);let i=n.call(e,t);i||(t=Ce(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Nn(e,"delete",t,void 0),s}function of(){const t=Ce(this),e=t.size!==0,n=t.clear();return e&&Nn(t,"clear",void 0,void 0),n}function Js(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Ce(o),l=e?Jc:t?nu:ws;return!t&&Mt(a,"iterate",Ui),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function eo(t,e,n){return function(...r){const i=this.__v_raw,s=Ce(i),o=mr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Jc:e?nu:ws;return!e&&Mt(s,"iterate",l?Ml:Ui),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Wn(t){return function(...e){return t==="delete"?!1:this}}function Sb(){const t={get(s){return Ks(this,s)},get size(){return Zs(this)},has:Qs,add:nf,set:rf,delete:sf,clear:of,forEach:Js(!1,!1)},e={get(s){return Ks(this,s,!1,!0)},get size(){return Zs(this)},has:Qs,add:nf,set:rf,delete:sf,clear:of,forEach:Js(!1,!0)},n={get(s){return Ks(this,s,!0)},get size(){return Zs(this,!0)},has(s){return Qs.call(this,s,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Js(!0,!1)},r={get(s){return Ks(this,s,!0,!0)},get size(){return Zs(this,!0)},has(s){return Qs.call(this,s,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=eo(s,!1,!1),n[s]=eo(s,!0,!1),e[s]=eo(s,!1,!0),r[s]=eo(s,!0,!0)}),[t,n,e,r]}const[Pb,Tb,Eb,Cb]=Sb();function eu(t,e){const n=e?t?Cb:Eb:t?Tb:Pb;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Ae(n,i)&&i in r?n:r,i,s)}const Ab={get:eu(!1,!1)},zb={get:eu(!1,!0)},Rb={get:eu(!0,!1)},Dm=new WeakMap,Nm=new WeakMap,Um=new WeakMap,Ob=new WeakMap;function Mb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fb(t){return t.__v_skip||!Object.isExtensible(t)?0:Mb(tb(t))}function cn(t){return Pr(t)?t:tu(t,!1,Im,Ab,Dm)}function kb(t){return tu(t,!1,wb,zb,Nm)}function Bm(t){return tu(t,!0,xb,Rb,Um)}function tu(t,e,n,r,i){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Fb(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ai(t){return Pr(t)?ai(t.__v_raw):!!(t&&t.__v_isReactive)}function Pr(t){return!!(t&&t.__v_isReadonly)}function Eo(t){return!!(t&&t.__v_isShallow)}function Vm(t){return ai(t)||Pr(t)}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Tr(t){return So(t,"__v_skip",!0),t}const ws=t=>Ve(t)?cn(t):t,nu=t=>Ve(t)?Bm(t):t;function Hm(t){oi&&rn&&(t=Ce(t),Fm(t.dep||(t.dep=Kc())))}function jm(t,e){t=Ce(t);const n=t.dep;n&&Fl(n)}function De(t){return!!(t&&t.__v_isRef===!0)}function et(t){return Wm(t,!1)}function kl(t){return Wm(t,!0)}function Wm(t,e){return De(t)?t:new Lb(t,e)}class Lb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ce(e),this._value=n?e:ws(e)}get value(){return Hm(this),this._value}set value(e){const n=this.__v_isShallow||Eo(e)||Pr(e);e=n?e:Ce(e),xs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ws(e),jm(this))}}function ut(t){return De(t)?t.value:t}const Ib={get:(t,e,n)=>ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Gm(t){return ai(t)?t:new Proxy(t,Ib)}function Db(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=iu(t,n);return e}class Nb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return cb(Ce(this._object),this._key)}}function iu(t,e,n){const r=t[e];return De(r)?r:new Nb(t,e,n)}var qm;class Ub{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[qm]=!1,this._dirty=!0,this.effect=new Qc(e,()=>{this._dirty||(this._dirty=!0,jm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Ce(this);return Hm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}qm="__v_isReadonly";function Bb(t,e,n=!1){let r,i;const s=ye(t);return s?(r=t,i=on):(r=t.get,i=t.set),new Ub(r,i,s||!i,n)}function li(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Gr(s,e,n)}return i}function Qt(t,e,n,r){if(ye(t)){const s=li(t,e,n,r);return s&&Xc(s)&&s.catch(o=>{Gr(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Qt(t[s],e,n,r));return i}function Gr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[t,o,a]);return}}Vb(t,n,i,r)}function Vb(t,e,n,r=!0){console.error(t)}let Ss=!1,Ll=!1;const gt=[];let vn=0;const vr=[];let zn=null,Li=0;const $m=Promise.resolve();let ru=null;function Ki(t){const e=ru||$m;return t?e.then(this?t.bind(this):t):e}function Hb(t){let e=vn+1,n=gt.length;for(;e<n;){const r=e+n>>>1;Ps(gt[r])<t?e=r+1:n=r}return e}function ia(t){(!gt.length||!gt.includes(t,Ss&&t.allowRecurse?vn+1:vn))&&(t.id==null?gt.push(t):gt.splice(Hb(t.id),0,t),Xm())}function Xm(){!Ss&&!Ll&&(Ll=!0,ru=$m.then(Km))}function jb(t){const e=gt.indexOf(t);e>vn&&gt.splice(e,1)}function Ym(t){ie(t)?vr.push(...t):(!zn||!zn.includes(t,t.allowRecurse?Li+1:Li))&&vr.push(t),Xm()}function af(t,e=Ss?vn+1:0){for(;e<gt.length;e++){const n=gt[e];n&&n.pre&&(gt.splice(e,1),e--,n())}}function Co(t){if(vr.length){const e=[...new Set(vr)];if(vr.length=0,zn){zn.push(...e);return}for(zn=e,zn.sort((n,r)=>Ps(n)-Ps(r)),Li=0;Li<zn.length;Li++)zn[Li]();zn=null,Li=0}}const Ps=t=>t.id==null?1/0:t.id,Wb=(t,e)=>{const n=Ps(t)-Ps(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Km(t){Ll=!1,Ss=!0,gt.sort(Wb);const e=on;try{for(vn=0;vn<gt.length;vn++){const n=gt[vn];n&&n.active!==!1&&li(n,null,14)}}finally{vn=0,gt.length=0,Co(),Ss=!1,ru=null,(gt.length||vr.length)&&Km()}}function Gb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||He;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||He;f&&(i=n.map(d=>Ke(d)?d.trim():d)),h&&(i=n.map(Po))}let a,l=r[a=Ra(e)]||r[a=Ra(wn(e))];!l&&s&&(l=r[a=Ra(Yi(e))]),l&&Qt(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qt(c,t,6,i)}}function Qm(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ye(t)){const l=c=>{const u=Qm(c,e,!0);u&&(a=!0,dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ve(t)&&r.set(t,null),null):(ie(s)?s.forEach(l=>o[l]=null):dt(o,s),Ve(t)&&r.set(t,o),o)}function ra(t,e){return!t||!Ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Yi(e))||Ae(t,e))}let ft=null,Zm=null;function Ao(t){const e=ft;return ft=t,Zm=t&&t.type.__scopeId||null,e}function su(t,e=ft,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&bf(-1);const s=Ao(e);let o;try{o=t(...i)}finally{Ao(s),r._d&&bf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Oa(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:m}=t;let g,x;const b=Ao(t);try{if(n.shapeFlag&4){const v=i||r;g=qt(u.call(v,v,h,s,d,f,p)),x=l}else{const v=e;g=qt(v.length>1?v(s,{attrs:l,slots:a,emit:c}):v(s,null)),x=e.props?l:$b(l)}}catch(v){cs.length=0,Gr(v,t,1),g=Ge(wt)}let _=g;if(x&&m!==!1){const v=Object.keys(x),{shapeFlag:y}=_;v.length&&y&7&&(o&&v.some(qc)&&(x=Xb(x,o)),_=Un(_,x))}return n.dirs&&(_=Un(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),g=_,Ao(b),g}function qb(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Cr(r)){if(r.type!==wt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const $b=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ds(n))&&((e||(e={}))[n]=t[n]);return e},Xb=(t,e)=>{const n={};for(const r in t)(!qc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yb(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?lf(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!ra(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?lf(r,o,c):!0:!!o;return!1}function lf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ra(n,s))return!0}return!1}function ou({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Jm=t=>t.__isSuspense,Kb={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,s,o,a,l,c){t==null?Qb(e,n,r,i,s,o,a,l,c):Zb(t,e,n,r,i,o,a,l,c)},hydrate:Jb,create:au,normalize:e_},eg=Kb;function Ts(t,e){const n=t.props&&t.props[e];ye(n)&&n()}function Qb(t,e,n,r,i,s,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=au(t,i,r,e,h,n,s,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,r,f,s,o),f.deps>0?(Ts(t,"onPending"),Ts(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,s,o),br(f,t.ssFallback)):f.resolve()}function Zb(t,e,n,r,i,s,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:g,isHydrating:x}=h;if(m)h.pendingBranch=f,sn(f,m)?(l(m,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():g&&(l(p,d,n,r,i,null,s,o,a),br(h,d))):(h.pendingId++,x?(h.isHydrating=!1,h.activeBranch=m):c(m,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),g?(l(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():(l(p,d,n,r,i,null,s,o,a),br(h,d))):p&&sn(f,p)?(l(p,f,n,r,i,h,s,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&sn(f,p))l(p,f,n,r,i,h,s,o,a),br(h,f);else if(Ts(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:b,pendingId:_}=h;b>0?setTimeout(()=>{h.pendingId===_&&h.fallback(d)},b):b===0&&h.fallback(d)}}function au(t,e,n,r,i,s,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:m,remove:g}}=c,x=t.props?Cm(t.props.timeout):void 0,b={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:i,anchor:s,deps:0,pendingId:0,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(_=!1){const{vnode:v,activeBranch:y,pendingBranch:w,pendingId:P,effects:T,parentComponent:R,container:k}=b;if(b.isHydrating)b.isHydrating=!1;else if(!_){const z=y&&w.transition&&w.transition.mode==="out-in";z&&(y.transition.afterLeave=()=>{P===b.pendingId&&f(w,k,S,0)});let{anchor:S}=b;y&&(S=p(y),d(y,R,b,!0)),z||f(w,k,S,0)}br(b,w),b.pendingBranch=null,b.isInFallback=!1;let D=b.parent,M=!1;for(;D;){if(D.pendingBranch){D.effects.push(...T),M=!0;break}D=D.parent}M||Ym(T),b.effects=[],Ts(v,"onResolve")},fallback(_){if(!b.pendingBranch)return;const{vnode:v,activeBranch:y,parentComponent:w,container:P,isSVG:T}=b;Ts(v,"onFallback");const R=p(y),k=()=>{!b.isInFallback||(h(null,_,P,R,w,null,T,a,l),br(b,_))},D=_.transition&&_.transition.mode==="out-in";D&&(y.transition.afterLeave=k),b.isInFallback=!0,d(y,w,null,!0),D||k()},move(_,v,y){b.activeBranch&&f(b.activeBranch,_,v,y),b.container=_},next(){return b.activeBranch&&p(b.activeBranch)},registerDep(_,v){const y=!!b.pendingBranch;y&&b.deps++;const w=_.vnode.el;_.asyncDep.catch(P=>{Gr(P,_,0)}).then(P=>{if(_.isUnmounted||b.isUnmounted||b.pendingId!==_.suspenseId)return;_.asyncResolved=!0;const{vnode:T}=_;Vl(_,P,!1),w&&(T.el=w);const R=!w&&_.subTree.el;v(_,T,m(w||_.subTree.el),w?null:p(_.subTree),b,o,l),R&&g(R),ou(_,T.el),y&&--b.deps===0&&b.resolve()})},unmount(_,v){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,n,_,v),b.pendingBranch&&d(b.pendingBranch,n,_,v)}};return b}function Jb(t,e,n,r,i,s,o,a,l){const c=e.suspense=au(e,r,n,t.parentNode,document.createElement("div"),null,i,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(),u}function e_(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=cf(r?n.default:n),t.ssFallback=r?cf(n.fallback):Ge(wt)}function cf(t){let e;if(ye(t)){const n=Er&&t._c;n&&(t._d=!1,Vi()),t=t(),n&&(t._d=!0,e=$t,xg())}return ie(t)&&(t=qb(t)),t=qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function tg(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):Ym(t)}function br(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,i=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=i,ou(r,i))}function _r(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function ht(t,e,n=!1){const r=Qe||ft;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ye(e)?e.call(r.proxy):e}}function t_(t,e){return lu(t,null,e)}const to={};function an(t,e,n){return lu(t,e,n)}function lu(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=He){const a=zm()===(Qe==null?void 0:Qe.scope)?Qe:null;let l,c=!1,u=!1;if(De(t)?(l=()=>t.value,c=Eo(t)):ai(t)?(l=()=>t,r=!0):ie(t)?(u=!0,c=t.some(_=>ai(_)||Eo(_)),l=()=>t.map(_=>{if(De(_))return _.value;if(ai(_))return Di(_);if(ye(_))return li(_,a,2)})):ye(t)?e?l=()=>li(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Qt(t,a,3,[f])}:l=on,e&&r){const _=l;l=()=>Di(_())}let h,f=_=>{h=x.onStop=()=>{li(_,a,4)}},d;if(Ar)if(f=on,e?n&&Qt(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const _=W_();d=_.__watcherHandles||(_.__watcherHandles=[])}else return on;let p=u?new Array(t.length).fill(to):to;const m=()=>{if(!!x.active)if(e){const _=x.run();(r||c||(u?_.some((v,y)=>xs(v,p[y])):xs(_,p)))&&(h&&h(),Qt(e,a,3,[_,p===to?void 0:u&&p[0]===to?[]:p,f]),p=_)}else x.run()};m.allowRecurse=!!e;let g;i==="sync"?g=m:i==="post"?g=()=>lt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),g=()=>ia(m));const x=new Qc(l,g);e?n?m():p=x.run():i==="post"?lt(x.run.bind(x),a&&a.suspense):x.run();const b=()=>{x.stop(),a&&a.scope&&$c(a.scope.effects,x)};return d&&d.push(b),b}function n_(t,e,n){const r=this.proxy,i=Ke(t)?t.includes(".")?ng(r,t):()=>r[t]:t.bind(r,r);let s;ye(e)?s=e:(s=e.handler,n=e);const o=Qe;pi(this);const a=lu(i,s.bind(r),n);return o?pi(o):ci(),a}function ng(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Di(t,e){if(!Ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),De(t))Di(t.value,e);else if(ie(t))for(let n=0;n<t.length;n++)Di(t[n],e);else if(Vr(t)||mr(t))t.forEach(n=>{Di(n,e)});else if(Em(t))for(const n in t)Di(t[n],e);return t}function i_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Us(()=>{t.isMounted=!0}),Bs(()=>{t.isUnmounting=!0}),t}const Ht=[Function,Array],r_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ht,onEnter:Ht,onAfterEnter:Ht,onEnterCancelled:Ht,onBeforeLeave:Ht,onLeave:Ht,onAfterLeave:Ht,onLeaveCancelled:Ht,onBeforeAppear:Ht,onAppear:Ht,onAfterAppear:Ht,onAppearCancelled:Ht},setup(t,{slots:e}){const n=nn(),r=i_();let i;return()=>{const s=e.default&&sg(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==wt){o=m;break}}const a=Ce(t),{mode:l}=a;if(r.isLeaving)return Ma(o);const c=uf(o);if(!c)return Ma(o);const u=Il(c,a,r,n);zo(c,u);const h=n.subTree,f=h&&uf(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();i===void 0?i=m:m!==i&&(i=m,d=!0)}if(f&&f.type!==wt&&(!sn(c,f)||d)){const m=Il(f,a,r,n);if(zo(f,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ma(o);l==="in-out"&&c.type!==wt&&(m.delayLeave=(g,x,b)=>{const _=rg(r,f);_[String(f.key)]=f,g._leaveCb=()=>{x(),g._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},ig=r_;function rg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Il(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:x,onAppearCancelled:b}=e,_=String(t.key),v=rg(n,t),y=(T,R)=>{T&&Qt(T,r,9,R)},w=(T,R)=>{const k=R[1];y(T,R),ie(T)?T.every(D=>D.length<=1)&&k():T.length<=1&&k()},P={mode:s,persisted:o,beforeEnter(T){let R=a;if(!n.isMounted)if(i)R=m||a;else return;T._leaveCb&&T._leaveCb(!0);const k=v[_];k&&sn(t,k)&&k.el._leaveCb&&k.el._leaveCb(),y(R,[T])},enter(T){let R=l,k=c,D=u;if(!n.isMounted)if(i)R=g||l,k=x||c,D=b||u;else return;let M=!1;const z=T._enterCb=S=>{M||(M=!0,S?y(D,[T]):y(k,[T]),P.delayedLeave&&P.delayedLeave(),T._enterCb=void 0)};R?w(R,[T,z]):z()},leave(T,R){const k=String(t.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return R();y(h,[T]);let D=!1;const M=T._leaveCb=z=>{D||(D=!0,R(),z?y(p,[T]):y(d,[T]),T._leaveCb=void 0,v[k]===t&&delete v[k])};v[k]=t,f?w(f,[T,M]):M()},clone(T){return Il(T,e,n,r)}};return P}function Ma(t){if(Ns(t))return t=Un(t),t.children=null,t}function uf(t){return Ns(t)?t.children?t.children[0]:void 0:t}function zo(t,e){t.shapeFlag&6&&t.component?zo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sg(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===mt?(o.patchFlag&128&&i++,r=r.concat(sg(o.children,e,a))):(e||o.type!==wt)&&r.push(a!=null?Un(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function tn(t){return ye(t)?{setup:t,name:t.name}:t}const Bi=t=>!!t.type.__asyncLoader;function s_(t){ye(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((m,g)=>{a(p,()=>m(h()),()=>g(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return tn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Qe;if(c)return()=>Fa(c,d);const p=b=>{l=null,Gr(b,d,13,!r)};if(o&&d.suspense||Ar)return f().then(b=>()=>Fa(b,d)).catch(b=>(p(b),()=>r?Ge(r,{error:b}):null));const m=et(!1),g=et(),x=et(!!i);return i&&setTimeout(()=>{x.value=!1},i),s!=null&&setTimeout(()=>{if(!m.value&&!g.value){const b=new Error(`Async component timed out after ${s}ms.`);p(b),g.value=b}},s),f().then(()=>{m.value=!0,d.parent&&Ns(d.parent.vnode)&&ia(d.parent.update)}).catch(b=>{p(b),g.value=b}),()=>{if(m.value&&c)return Fa(c,d);if(g.value&&r)return Ge(r,{error:g.value});if(n&&!x.value)return Ge(n)}}})}function Fa(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=Ge(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Ns=t=>t.type.__isKeepAlive,o_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=nn(),r=n.ctx;if(!r.renderer)return()=>{const b=e.default&&e.default();return b&&b.length===1?b[0]:b};const i=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(b,_,v,y,w)=>{const P=b.component;c(b,_,v,0,a),l(P.vnode,b,_,v,P,a,y,b.slotScopeIds,w),lt(()=>{P.isDeactivated=!1,P.a&&gr(P.a);const T=b.props&&b.props.onVnodeMounted;T&&Ct(T,P.parent,b)},a)},r.deactivate=b=>{const _=b.component;c(b,f,null,1,a),lt(()=>{_.da&&gr(_.da);const v=b.props&&b.props.onVnodeUnmounted;v&&Ct(v,_.parent,b),_.isDeactivated=!0},a)};function d(b){ka(b),u(b,n,a,!0)}function p(b){i.forEach((_,v)=>{const y=Hl(_.type);y&&(!b||!b(y))&&m(v)})}function m(b){const _=i.get(b);!o||!sn(_,o)?d(_):o&&ka(o),i.delete(b),s.delete(b)}an(()=>[t.include,t.exclude],([b,_])=>{b&&p(v=>ts(b,v)),_&&p(v=>!ts(_,v))},{flush:"post",deep:!0});let g=null;const x=()=>{g!=null&&i.set(g,La(n.subTree))};return Us(x),ag(x),Bs(()=>{i.forEach(b=>{const{subTree:_,suspense:v}=n,y=La(_);if(b.type===y.type&&b.key===y.key){ka(y);const w=y.component.da;w&&lt(w,v);return}d(b)})}),()=>{if(g=null,!e.default)return null;const b=e.default(),_=b[0];if(b.length>1)return o=null,b;if(!Cr(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let v=La(_);const y=v.type,w=Hl(Bi(v)?v.type.__asyncResolved||{}:y),{include:P,exclude:T,max:R}=t;if(P&&(!w||!ts(P,w))||T&&w&&ts(T,w))return o=v,_;const k=v.key==null?y:v.key,D=i.get(k);return v.el&&(v=Un(v),_.shapeFlag&128&&(_.ssContent=v)),g=k,D?(v.el=D.el,v.component=D.component,v.transition&&zo(v,v.transition),v.shapeFlag|=512,s.delete(k),s.add(k)):(s.add(k),R&&s.size>parseInt(R,10)&&m(s.values().next().value)),v.shapeFlag|=256,o=v,Jm(_.type)?_:v}}},a_=o_;function ts(t,e){return ie(t)?t.some(n=>ts(n,e)):Ke(t)?t.split(",").includes(e):eb(t)?t.test(e):!1}function cu(t,e){og(t,"a",e)}function uu(t,e){og(t,"da",e)}function og(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(sa(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ns(i.parent.vnode)&&l_(r,e,n,i),i=i.parent}}function l_(t,e,n,r){const i=sa(e,t,r,!0);oa(()=>{$c(r[e],i)},n)}function ka(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function La(t){return t.shapeFlag&128?t.ssContent:t}function sa(t,e,n=Qe,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jr(),pi(n);const a=Qt(e,n,t,o);return ci(),Wr(),a});return r?i.unshift(s):i.push(s),s}}const Hn=t=>(e,n=Qe)=>(!Ar||t==="sp")&&sa(t,(...r)=>e(...r),n),c_=Hn("bm"),Us=Hn("m"),u_=Hn("bu"),ag=Hn("u"),Bs=Hn("bum"),oa=Hn("um"),f_=Hn("sp"),h_=Hn("rtg"),d_=Hn("rtc");function lg(t,e=Qe){sa("ec",t,e)}function VR(t,e){const n=ft;if(n===null)return t;const r=la(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=He]=e[s];o&&(ye(o)&&(o={mounted:o,updated:o}),o.deep&&Di(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function mn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(jr(),Qt(l,n,8,[t.el,a,t,e]),Wr())}}const fu="components";function p_(t,e){return ug(fu,t,!0,e)||t}const cg=Symbol();function HR(t){return Ke(t)?ug(fu,t,!1)||t:t||cg}function ug(t,e,n=!0,r=!1){const i=ft||Qe;if(i){const s=i.type;if(t===fu){const a=Hl(s,!1);if(a&&(a===e||a===wn(e)||a===ea(wn(e))))return s}const o=ff(i[t]||s[t],e)||ff(i.appContext[t],e);return!o&&r?s:o}}function ff(t,e){return t&&(t[e]||t[wn(e)]||t[ea(wn(e))])}function jR(t,e,n,r){let i;const s=n&&n[r];if(ie(t)||Ke(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ve(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function WR(t,e,n={},r,i){if(ft.isCE||ft.parent&&Bi(ft.parent)&&ft.parent.isCE)return e!=="default"&&(n.name=e),Ge("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Vi();const o=s&&fg(s(n)),a=yr(mt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function fg(t){return t.some(e=>Cr(e)?!(e.type===wt||e.type===mt&&!fg(e.children)):!0)?t:null}const Dl=t=>t?Eg(t)?la(t)||t.proxy:Dl(t.parent):null,as=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dl(t.parent),$root:t=>Dl(t.root),$emit:t=>t.emit,$options:t=>hu(t),$forceUpdate:t=>t.f||(t.f=()=>ia(t.update)),$nextTick:t=>t.n||(t.n=Ki.bind(t.proxy)),$watch:t=>n_.bind(t)}),Ia=(t,e)=>t!==He&&!t.__isScriptSetup&&Ae(t,e),m_={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Ia(r,e))return o[e]=1,r[e];if(i!==He&&Ae(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ae(c,e))return o[e]=3,s[e];if(n!==He&&Ae(n,e))return o[e]=4,n[e];Nl&&(o[e]=0)}}const u=as[e];let h,f;if(u)return e==="$attrs"&&Mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==He&&Ae(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ae(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Ia(i,e)?(i[e]=n,!0):r!==He&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==He&&Ae(t,o)||Ia(e,o)||(a=s[0])&&Ae(a,o)||Ae(r,o)||Ae(as,o)||Ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nl=!0;function g_(t){const e=hu(t),n=t.proxy,r=t.ctx;Nl=!1,e.beforeCreate&&hf(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:m,deactivated:g,beforeDestroy:x,beforeUnmount:b,destroyed:_,unmounted:v,render:y,renderTracked:w,renderTriggered:P,errorCaptured:T,serverPrefetch:R,expose:k,inheritAttrs:D,components:M,directives:z,filters:S}=e;if(c&&v_(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const B in o){const $=o[B];ye($)&&(r[B]=$.bind(n))}if(i){const B=i.call(n,n);Ve(B)&&(t.data=cn(B))}if(Nl=!0,s)for(const B in s){const $=s[B],ne=ye($)?$.bind(n,n):ye($.get)?$.get.bind(n,n):on,pe=!ye($)&&ye($.set)?$.set.bind(n):on,ge=Me({get:ne,set:pe});Object.defineProperty(r,B,{enumerable:!0,configurable:!0,get:()=>ge.value,set:ve=>ge.value=ve})}if(a)for(const B in a)hg(a[B],r,n,B);if(l){const B=ye(l)?l.call(n):l;Reflect.ownKeys(B).forEach($=>{_r($,B[$])})}u&&hf(u,t,"c");function I(B,$){ie($)?$.forEach(ne=>B(ne.bind(n))):$&&B($.bind(n))}if(I(c_,h),I(Us,f),I(u_,d),I(ag,p),I(cu,m),I(uu,g),I(lg,T),I(d_,w),I(h_,P),I(Bs,b),I(oa,v),I(f_,R),ie(k))if(k.length){const B=t.exposed||(t.exposed={});k.forEach($=>{Object.defineProperty(B,$,{get:()=>n[$],set:ne=>n[$]=ne})})}else t.exposed||(t.exposed={});y&&t.render===on&&(t.render=y),D!=null&&(t.inheritAttrs=D),M&&(t.components=M),z&&(t.directives=z)}function v_(t,e,n=on,r=!1){ie(t)&&(t=Ul(t));for(const i in t){const s=t[i];let o;Ve(s)?"default"in s?o=ht(s.from||i,s.default,!0):o=ht(s.from||i):o=ht(s),De(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function hf(t,e,n){Qt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hg(t,e,n,r){const i=r.includes(".")?ng(n,r):()=>n[r];if(Ke(t)){const s=e[t];ye(s)&&an(i,s)}else if(ye(t))an(i,t.bind(n));else if(Ve(t))if(ie(t))t.forEach(s=>hg(s,e,n,r));else{const s=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(s)&&an(i,s,t)}}function hu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Ro(l,c,o,!0)),Ro(l,e,o)),Ve(e)&&s.set(e,l),l}function Ro(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ro(t,s,n,!0),i&&i.forEach(o=>Ro(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=b_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const b_={data:df,props:Fi,emits:Fi,methods:Fi,computed:Fi,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Fi,directives:Fi,watch:y_,provide:df,inject:__};function df(t,e){return e?t?function(){return dt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function __(t,e){return Fi(Ul(t),Ul(e))}function Ul(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fi(t,e){return t?dt(dt(Object.create(null),t),e):e}function y_(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function x_(t,e,n,r=!1){const i={},s={};So(s,aa,1),t.propsDefaults=Object.create(null),dg(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:kb(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function w_(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Ce(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ra(t.emitsOptions,f))continue;const d=e[f];if(l)if(Ae(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const p=wn(f);i[p]=Bl(l,a,p,d,t,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{dg(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!Ae(e,h)&&((u=Yi(h))===h||!Ae(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Bl(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Ae(e,h)&&!0)&&(delete s[h],c=!0)}c&&Nn(t,"set","$attrs")}function dg(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(os(l))continue;const c=e[l];let u;i&&Ae(i,u=wn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ra(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Ce(n),c=a||He;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Bl(i,l,h,c[h],t,!Ae(c,h))}}return o}function Bl(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Ae(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ye(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(pi(i),r=c[n]=l.call(null,e),ci())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Yi(n))&&(r=!0))}return r}function pg(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ye(t)){const u=h=>{l=!0;const[f,d]=pg(h,e,!0);dt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ve(t)&&r.set(t,pr),pr;if(ie(s))for(let u=0;u<s.length;u++){const h=wn(s[u]);pf(h)&&(o[h]=He)}else if(s)for(const u in s){const h=wn(u);if(pf(h)){const f=s[u],d=o[h]=ie(f)||ye(f)?{type:f}:Object.assign({},f);if(d){const p=vf(Boolean,d.type),m=vf(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||Ae(d,"default"))&&a.push(h)}}}const c=[o,a];return Ve(t)&&r.set(t,c),c}function pf(t){return t[0]!=="$"}function mf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function gf(t,e){return mf(t)===mf(e)}function vf(t,e){return ie(e)?e.findIndex(n=>gf(n,t)):ye(e)&&gf(e,t)?0:-1}const mg=t=>t[0]==="_"||t==="$stable",du=t=>ie(t)?t.map(qt):[qt(t)],S_=(t,e,n)=>{if(e._n)return e;const r=su((...i)=>du(e(...i)),n);return r._c=!1,r},gg=(t,e,n)=>{const r=t._ctx;for(const i in t){if(mg(i))continue;const s=t[i];if(ye(s))e[i]=S_(i,s,r);else if(s!=null){const o=du(s);e[i]=()=>o}}},vg=(t,e)=>{const n=du(e);t.slots.default=()=>n},P_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ce(e),So(e,"_",n)):gg(e,t.slots={})}else t.slots={},e&&vg(t,e);So(t.slots,aa,1)},T_=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=He;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(dt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,gg(e,i)),o=e}else e&&(vg(t,e),o={default:1});if(s)for(const a in i)!mg(a)&&!(a in o)&&delete i[a]};function bg(){return{app:null,config:{isNativeTag:Q1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let E_=0;function C_(t,e){return function(r,i=null){ye(r)||(r=Object.assign({},r)),i!=null&&!Ve(i)&&(i=null);const s=bg(),o=new Set;let a=!1;const l=s.app={_uid:E_++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:mu,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ye(c.install)?(o.add(c),c.install(l,...u)):ye(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Ge(r,i);return f.appContext=s,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,la(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Oo(t,e,n,r,i=!1){if(ie(t)){t.forEach((f,d)=>Oo(f,e&&(ie(e)?e[d]:e),n,r,i));return}if(Bi(r)&&!i)return;const s=r.shapeFlag&4?la(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===He?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ke(c)?(u[c]=null,Ae(h,c)&&(h[c]=null)):De(c)&&(c.value=null)),ye(l))li(l,a,12,[o,u]);else{const f=Ke(l),d=De(l);if(f||d){const p=()=>{if(t.f){const m=f?Ae(h,l)?h[l]:u[l]:l.value;i?ie(m)&&$c(m,s):ie(m)?m.includes(s)||m.push(s):f?(u[l]=[s],Ae(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Ae(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,lt(p,n)):p()}}}let Gn=!1;const no=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",io=t=>t.nodeType===8;function A_(t){const{mt:e,p:n,o:{patchProp:r,createText:i,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(x,b)=>{if(!b.hasChildNodes()){n(null,x,b),Co(),b._vnode=x;return}Gn=!1,h(b.firstChild,x,null,null,null),Co(),b._vnode=x,Gn&&console.error("Hydration completed but contains mismatches.")},h=(x,b,_,v,y,w=!1)=>{const P=io(x)&&x.data==="[",T=()=>m(x,b,_,v,y,P),{type:R,ref:k,shapeFlag:D,patchFlag:M}=b;let z=x.nodeType;b.el=x,M===-2&&(w=!1,b.dynamicChildren=null);let S=null;switch(R){case qi:z!==3?b.children===""?(l(b.el=i(""),o(x),x),S=x):S=T():(x.data!==b.children&&(Gn=!0,x.data=b.children),S=s(x));break;case wt:z!==8||P?S=T():S=s(x);break;case ls:if(P&&(x=s(x),z=x.nodeType),z===1||z===3){S=x;const A=!b.children.length;for(let I=0;I<b.staticCount;I++)A&&(b.children+=S.nodeType===1?S.outerHTML:S.data),I===b.staticCount-1&&(b.anchor=S),S=s(S);return P?s(S):S}else T();break;case mt:P?S=p(x,b,_,v,y,w):S=T();break;default:if(D&1)z!==1||b.type.toLowerCase()!==x.tagName.toLowerCase()?S=T():S=f(x,b,_,v,y,w);else if(D&6){b.slotScopeIds=y;const A=o(x);if(e(b,A,null,_,v,no(A),w),S=P?g(x):s(x),S&&io(S)&&S.data==="teleport end"&&(S=s(S)),Bi(b)){let I;P?(I=Ge(mt),I.anchor=S?S.previousSibling:A.lastChild):I=x.nodeType===3?Tg(""):Ge("div"),I.el=x,b.component.subTree=I}}else D&64?z!==8?S=T():S=b.type.hydrate(x,b,_,v,y,w,t,d):D&128&&(S=b.type.hydrate(x,b,_,v,no(o(x)),y,w,t,h))}return k!=null&&Oo(k,null,v,b),S},f=(x,b,_,v,y,w)=>{w=w||!!b.dynamicChildren;const{type:P,props:T,patchFlag:R,shapeFlag:k,dirs:D}=b,M=P==="input"&&D||P==="option";if(M||R!==-1){if(D&&mn(b,null,_,"created"),T)if(M||!w||R&48)for(const S in T)(M&&S.endsWith("value")||Ds(S)&&!os(S))&&r(x,S,null,T[S],!1,void 0,_);else T.onClick&&r(x,"onClick",null,T.onClick,!1,void 0,_);let z;if((z=T&&T.onVnodeBeforeMount)&&Ct(z,_,b),D&&mn(b,null,_,"beforeMount"),((z=T&&T.onVnodeMounted)||D)&&tg(()=>{z&&Ct(z,_,b),D&&mn(b,null,_,"mounted")},v),k&16&&!(T&&(T.innerHTML||T.textContent))){let S=d(x.firstChild,b,x,_,v,y,w);for(;S;){Gn=!0;const A=S;S=S.nextSibling,a(A)}}else k&8&&x.textContent!==b.children&&(Gn=!0,x.textContent=b.children)}return x.nextSibling},d=(x,b,_,v,y,w,P)=>{P=P||!!b.dynamicChildren;const T=b.children,R=T.length;for(let k=0;k<R;k++){const D=P?T[k]:T[k]=qt(T[k]);if(x)x=h(x,D,v,y,w,P);else{if(D.type===qi&&!D.children)continue;Gn=!0,n(null,D,_,null,v,y,no(_),w)}}return x},p=(x,b,_,v,y,w)=>{const{slotScopeIds:P}=b;P&&(y=y?y.concat(P):P);const T=o(x),R=d(s(x),b,T,_,v,y,w);return R&&io(R)&&R.data==="]"?s(b.anchor=R):(Gn=!0,l(b.anchor=c("]"),T,R),R)},m=(x,b,_,v,y,w)=>{if(Gn=!0,b.el=null,w){const R=g(x);for(;;){const k=s(x);if(k&&k!==R)a(k);else break}}const P=s(x),T=o(x);return a(x),n(null,b,T,P,_,v,no(T),y),P},g=x=>{let b=0;for(;x;)if(x=s(x),x&&io(x)&&(x.data==="["&&b++,x.data==="]")){if(b===0)return s(x);b--}return x};return[u,h]}const lt=tg;function z_(t){return _g(t)}function R_(t){return _g(t,A_)}function _g(t,e){const n=rb();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=on,insertStaticContent:p}=t,m=(E,O,U,V=null,j=null,K=null,Z=!1,Y=null,X=!!O.dynamicChildren)=>{if(E===O)return;E&&!sn(E,O)&&(V=W(E),ve(E,j,K,!0),E=null),O.patchFlag===-2&&(X=!1,O.dynamicChildren=null);const{type:H,ref:L,shapeFlag:F}=O;switch(H){case qi:g(E,O,U,V);break;case wt:x(E,O,U,V);break;case ls:E==null&&b(O,U,V,Z);break;case mt:M(E,O,U,V,j,K,Z,Y,X);break;default:F&1?y(E,O,U,V,j,K,Z,Y,X):F&6?z(E,O,U,V,j,K,Z,Y,X):(F&64||F&128)&&H.process(E,O,U,V,j,K,Z,Y,X,se)}L!=null&&j&&Oo(L,E&&E.ref,K,O||E,!O)},g=(E,O,U,V)=>{if(E==null)r(O.el=a(O.children),U,V);else{const j=O.el=E.el;O.children!==E.children&&c(j,O.children)}},x=(E,O,U,V)=>{E==null?r(O.el=l(O.children||""),U,V):O.el=E.el},b=(E,O,U,V)=>{[E.el,E.anchor]=p(E.children,O,U,V,E.el,E.anchor)},_=({el:E,anchor:O},U,V)=>{let j;for(;E&&E!==O;)j=f(E),r(E,U,V),E=j;r(O,U,V)},v=({el:E,anchor:O})=>{let U;for(;E&&E!==O;)U=f(E),i(E),E=U;i(O)},y=(E,O,U,V,j,K,Z,Y,X)=>{Z=Z||O.type==="svg",E==null?w(O,U,V,j,K,Z,Y,X):R(E,O,j,K,Z,Y,X)},w=(E,O,U,V,j,K,Z,Y)=>{let X,H;const{type:L,props:F,shapeFlag:q,transition:G,dirs:te}=E;if(X=E.el=o(E.type,K,F&&F.is,F),q&8?u(X,E.children):q&16&&T(E.children,X,null,V,j,K&&L!=="foreignObject",Z,Y),te&&mn(E,null,V,"created"),P(X,E,E.scopeId,Z,V),F){for(const _e in F)_e!=="value"&&!os(_e)&&s(X,_e,null,F[_e],K,E.children,V,j,Q);"value"in F&&s(X,"value",null,F.value),(H=F.onVnodeBeforeMount)&&Ct(H,V,E)}te&&mn(E,null,V,"beforeMount");const ee=(!j||j&&!j.pendingBranch)&&G&&!G.persisted;ee&&G.beforeEnter(X),r(X,O,U),((H=F&&F.onVnodeMounted)||ee||te)&&lt(()=>{H&&Ct(H,V,E),ee&&G.enter(X),te&&mn(E,null,V,"mounted")},j)},P=(E,O,U,V,j)=>{if(U&&d(E,U),V)for(let K=0;K<V.length;K++)d(E,V[K]);if(j){let K=j.subTree;if(O===K){const Z=j.vnode;P(E,Z,Z.scopeId,Z.slotScopeIds,j.parent)}}},T=(E,O,U,V,j,K,Z,Y,X=0)=>{for(let H=X;H<E.length;H++){const L=E[H]=Y?Qn(E[H]):qt(E[H]);m(null,L,O,U,V,j,K,Z,Y)}},R=(E,O,U,V,j,K,Z)=>{const Y=O.el=E.el;let{patchFlag:X,dynamicChildren:H,dirs:L}=O;X|=E.patchFlag&16;const F=E.props||He,q=O.props||He;let G;U&&Pi(U,!1),(G=q.onVnodeBeforeUpdate)&&Ct(G,U,O,E),L&&mn(O,E,U,"beforeUpdate"),U&&Pi(U,!0);const te=j&&O.type!=="foreignObject";if(H?k(E.dynamicChildren,H,Y,U,V,te,K):Z||$(E,O,Y,null,U,V,te,K,!1),X>0){if(X&16)D(Y,O,F,q,U,V,j);else if(X&2&&F.class!==q.class&&s(Y,"class",null,q.class,j),X&4&&s(Y,"style",F.style,q.style,j),X&8){const ee=O.dynamicProps;for(let _e=0;_e<ee.length;_e++){const re=ee[_e],qe=F[re],$e=q[re];($e!==qe||re==="value")&&s(Y,re,qe,$e,j,E.children,U,V,Q)}}X&1&&E.children!==O.children&&u(Y,O.children)}else!Z&&H==null&&D(Y,O,F,q,U,V,j);((G=q.onVnodeUpdated)||L)&&lt(()=>{G&&Ct(G,U,O,E),L&&mn(O,E,U,"updated")},V)},k=(E,O,U,V,j,K,Z)=>{for(let Y=0;Y<O.length;Y++){const X=E[Y],H=O[Y],L=X.el&&(X.type===mt||!sn(X,H)||X.shapeFlag&70)?h(X.el):U;m(X,H,L,null,V,j,K,Z,!0)}},D=(E,O,U,V,j,K,Z)=>{if(U!==V){if(U!==He)for(const Y in U)!os(Y)&&!(Y in V)&&s(E,Y,U[Y],null,Z,O.children,j,K,Q);for(const Y in V){if(os(Y))continue;const X=V[Y],H=U[Y];X!==H&&Y!=="value"&&s(E,Y,H,X,Z,O.children,j,K,Q)}"value"in V&&s(E,"value",U.value,V.value)}},M=(E,O,U,V,j,K,Z,Y,X)=>{const H=O.el=E?E.el:a(""),L=O.anchor=E?E.anchor:a("");let{patchFlag:F,dynamicChildren:q,slotScopeIds:G}=O;G&&(Y=Y?Y.concat(G):G),E==null?(r(H,U,V),r(L,U,V),T(O.children,U,L,j,K,Z,Y,X)):F>0&&F&64&&q&&E.dynamicChildren?(k(E.dynamicChildren,q,U,j,K,Z,Y),(O.key!=null||j&&O===j.subTree)&&yg(E,O,!0)):$(E,O,U,L,j,K,Z,Y,X)},z=(E,O,U,V,j,K,Z,Y,X)=>{O.slotScopeIds=Y,E==null?O.shapeFlag&512?j.ctx.activate(O,U,V,Z,X):S(O,U,V,j,K,Z,X):A(E,O,X)},S=(E,O,U,V,j,K,Z)=>{const Y=E.component=N_(E,V,j);if(Ns(E)&&(Y.ctx.renderer=se),U_(Y),Y.asyncDep){if(j&&j.registerDep(Y,I),!E.el){const X=Y.subTree=Ge(wt);x(null,X,O,U)}return}I(Y,E,O,U,j,K,Z)},A=(E,O,U)=>{const V=O.component=E.component;if(Yb(E,O,U))if(V.asyncDep&&!V.asyncResolved){B(V,O,U);return}else V.next=O,jb(V.update),V.update();else O.el=E.el,V.vnode=O},I=(E,O,U,V,j,K,Z)=>{const Y=()=>{if(E.isMounted){let{next:L,bu:F,u:q,parent:G,vnode:te}=E,ee=L,_e;Pi(E,!1),L?(L.el=te.el,B(E,L,Z)):L=te,F&&gr(F),(_e=L.props&&L.props.onVnodeBeforeUpdate)&&Ct(_e,G,L,te),Pi(E,!0);const re=Oa(E),qe=E.subTree;E.subTree=re,m(qe,re,h(qe.el),W(qe),E,j,K),L.el=re.el,ee===null&&ou(E,re.el),q&&lt(q,j),(_e=L.props&&L.props.onVnodeUpdated)&&lt(()=>Ct(_e,G,L,te),j)}else{let L;const{el:F,props:q}=O,{bm:G,m:te,parent:ee}=E,_e=Bi(O);if(Pi(E,!1),G&&gr(G),!_e&&(L=q&&q.onVnodeBeforeMount)&&Ct(L,ee,O),Pi(E,!0),F&&me){const re=()=>{E.subTree=Oa(E),me(F,E.subTree,E,j,null)};_e?O.type.__asyncLoader().then(()=>!E.isUnmounted&&re()):re()}else{const re=E.subTree=Oa(E);m(null,re,U,V,E,j,K),O.el=re.el}if(te&&lt(te,j),!_e&&(L=q&&q.onVnodeMounted)){const re=O;lt(()=>Ct(L,ee,re),j)}(O.shapeFlag&256||ee&&Bi(ee.vnode)&&ee.vnode.shapeFlag&256)&&E.a&&lt(E.a,j),E.isMounted=!0,O=U=V=null}},X=E.effect=new Qc(Y,()=>ia(H),E.scope),H=E.update=()=>X.run();H.id=E.uid,Pi(E,!0),H()},B=(E,O,U)=>{O.component=E;const V=E.vnode.props;E.vnode=O,E.next=null,w_(E,O.props,V,U),T_(E,O.children,U),jr(),af(),Wr()},$=(E,O,U,V,j,K,Z,Y,X=!1)=>{const H=E&&E.children,L=E?E.shapeFlag:0,F=O.children,{patchFlag:q,shapeFlag:G}=O;if(q>0){if(q&128){pe(H,F,U,V,j,K,Z,Y,X);return}else if(q&256){ne(H,F,U,V,j,K,Z,Y,X);return}}G&8?(L&16&&Q(H,j,K),F!==H&&u(U,F)):L&16?G&16?pe(H,F,U,V,j,K,Z,Y,X):Q(H,j,K,!0):(L&8&&u(U,""),G&16&&T(F,U,V,j,K,Z,Y,X))},ne=(E,O,U,V,j,K,Z,Y,X)=>{E=E||pr,O=O||pr;const H=E.length,L=O.length,F=Math.min(H,L);let q;for(q=0;q<F;q++){const G=O[q]=X?Qn(O[q]):qt(O[q]);m(E[q],G,U,null,j,K,Z,Y,X)}H>L?Q(E,j,K,!0,!1,F):T(O,U,V,j,K,Z,Y,X,F)},pe=(E,O,U,V,j,K,Z,Y,X)=>{let H=0;const L=O.length;let F=E.length-1,q=L-1;for(;H<=F&&H<=q;){const G=E[H],te=O[H]=X?Qn(O[H]):qt(O[H]);if(sn(G,te))m(G,te,U,null,j,K,Z,Y,X);else break;H++}for(;H<=F&&H<=q;){const G=E[F],te=O[q]=X?Qn(O[q]):qt(O[q]);if(sn(G,te))m(G,te,U,null,j,K,Z,Y,X);else break;F--,q--}if(H>F){if(H<=q){const G=q+1,te=G<L?O[G].el:V;for(;H<=q;)m(null,O[H]=X?Qn(O[H]):qt(O[H]),U,te,j,K,Z,Y,X),H++}}else if(H>q)for(;H<=F;)ve(E[H],j,K,!0),H++;else{const G=H,te=H,ee=new Map;for(H=te;H<=q;H++){const Ft=O[H]=X?Qn(O[H]):qt(O[H]);Ft.key!=null&&ee.set(Ft.key,H)}let _e,re=0;const qe=q-te+1;let $e=!1,fn=0;const Tt=new Array(qe);for(H=0;H<qe;H++)Tt[H]=0;for(H=G;H<=F;H++){const Ft=E[H];if(re>=qe){ve(Ft,j,K,!0);continue}let hn;if(Ft.key!=null)hn=ee.get(Ft.key);else for(_e=te;_e<=q;_e++)if(Tt[_e-te]===0&&sn(Ft,O[_e])){hn=_e;break}hn===void 0?ve(Ft,j,K,!0):(Tt[hn-te]=H+1,hn>=fn?fn=hn:$e=!0,m(Ft,O[hn],U,null,j,K,Z,Y,X),re++)}const Si=$e?O_(Tt):pr;for(_e=Si.length-1,H=qe-1;H>=0;H--){const Ft=te+H,hn=O[Ft],Ku=Ft+1<L?O[Ft+1].el:V;Tt[H]===0?m(null,hn,U,Ku,j,K,Z,Y,X):$e&&(_e<0||H!==Si[_e]?ge(hn,U,Ku,2):_e--)}}},ge=(E,O,U,V,j=null)=>{const{el:K,type:Z,transition:Y,children:X,shapeFlag:H}=E;if(H&6){ge(E.component.subTree,O,U,V);return}if(H&128){E.suspense.move(O,U,V);return}if(H&64){Z.move(E,O,U,se);return}if(Z===mt){r(K,O,U);for(let F=0;F<X.length;F++)ge(X[F],O,U,V);r(E.anchor,O,U);return}if(Z===ls){_(E,O,U);return}if(V!==2&&H&1&&Y)if(V===0)Y.beforeEnter(K),r(K,O,U),lt(()=>Y.enter(K),j);else{const{leave:F,delayLeave:q,afterLeave:G}=Y,te=()=>r(K,O,U),ee=()=>{F(K,()=>{te(),G&&G()})};q?q(K,te,ee):ee()}else r(K,O,U)},ve=(E,O,U,V=!1,j=!1)=>{const{type:K,props:Z,ref:Y,children:X,dynamicChildren:H,shapeFlag:L,patchFlag:F,dirs:q}=E;if(Y!=null&&Oo(Y,null,U,E,!0),L&256){O.ctx.deactivate(E);return}const G=L&1&&q,te=!Bi(E);let ee;if(te&&(ee=Z&&Z.onVnodeBeforeUnmount)&&Ct(ee,O,E),L&6)N(E.component,U,V);else{if(L&128){E.suspense.unmount(U,V);return}G&&mn(E,null,O,"beforeUnmount"),L&64?E.type.remove(E,O,U,j,se,V):H&&(K!==mt||F>0&&F&64)?Q(H,O,U,!1,!0):(K===mt&&F&384||!j&&L&16)&&Q(X,O,U),V&&ze(E)}(te&&(ee=Z&&Z.onVnodeUnmounted)||G)&&lt(()=>{ee&&Ct(ee,O,E),G&&mn(E,null,O,"unmounted")},U)},ze=E=>{const{type:O,el:U,anchor:V,transition:j}=E;if(O===mt){Ee(U,V);return}if(O===ls){v(E);return}const K=()=>{i(U),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:Z,delayLeave:Y}=j,X=()=>Z(U,K);Y?Y(E.el,K,X):X()}else K()},Ee=(E,O)=>{let U;for(;E!==O;)U=f(E),i(E),E=U;i(O)},N=(E,O,U)=>{const{bum:V,scope:j,update:K,subTree:Z,um:Y}=E;V&&gr(V),j.stop(),K&&(K.active=!1,ve(Z,E,O,U)),Y&&lt(Y,O),lt(()=>{E.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Q=(E,O,U,V=!1,j=!1,K=0)=>{for(let Z=K;Z<E.length;Z++)ve(E[Z],O,U,V,j)},W=E=>E.shapeFlag&6?W(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),J=(E,O,U)=>{E==null?O._vnode&&ve(O._vnode,null,null,!0):m(O._vnode||null,E,O,null,null,null,U),af(),Co(),O._vnode=E},se={p:m,um:ve,m:ge,r:ze,mt:S,mc:T,pc:$,pbc:k,n:W,o:t};let Se,me;return e&&([Se,me]=e(se)),{render:J,hydrate:Se,createApp:C_(J,Se)}}function Pi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yg(t,e,n=!1){const r=t.children,i=e.children;if(ie(r)&&ie(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Qn(i[s]),a.el=o.el),n||yg(o,a)),a.type===qi&&(a.el=o.el)}}function O_(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const M_=t=>t.__isTeleport,mt=Symbol(void 0),qi=Symbol(void 0),wt=Symbol(void 0),ls=Symbol(void 0),cs=[];let $t=null;function Vi(t=!1){cs.push($t=t?null:[])}function xg(){cs.pop(),$t=cs[cs.length-1]||null}let Er=1;function bf(t){Er+=t}function wg(t){return t.dynamicChildren=Er>0?$t||pr:null,xg(),Er>0&&$t&&$t.push(t),t}function GR(t,e,n,r,i,s){return wg(Pg(t,e,n,r,i,s,!0))}function yr(t,e,n,r,i){return wg(Ge(t,e,n,r,i,!0))}function Cr(t){return t?t.__v_isVNode===!0:!1}function sn(t,e){return t.type===e.type&&t.key===e.key}const aa="__vInternal",Sg=({key:t})=>t!=null?t:null,vo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ke(t)||De(t)||ye(t)?{i:ft,r:t,k:e,f:!!n}:t:null;function Pg(t,e=null,n=null,r=0,i=null,s=t===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sg(e),ref:e&&vo(e),scopeId:Zm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ft};return a?(pu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),Er>0&&!o&&$t&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$t.push(l),l}const Ge=F_;function F_(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===cg)&&(t=wt),Cr(t)){const a=Un(t,e,!0);return n&&pu(a,n),Er>0&&!s&&$t&&(a.shapeFlag&6?$t[$t.indexOf(t)]=a:$t.push(a)),a.patchFlag|=-2,a}if(H_(t)&&(t=t.__vccOpts),e){e=k_(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=Zo(a)),Ve(l)&&(Vm(l)&&!ie(l)&&(l=dt({},l)),e.style=Qo(l))}const o=Ke(t)?1:Jm(t)?128:M_(t)?64:Ve(t)?4:ye(t)?2:0;return Pg(t,e,n,r,i,o,s,!0)}function k_(t){return t?Vm(t)||aa in t?dt({},t):t:null}function Un(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?L_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sg(a),ref:e&&e.ref?n&&i?ie(i)?i.concat(vo(e)):[i,vo(e)]:vo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Un(t.ssContent),ssFallback:t.ssFallback&&Un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Tg(t=" ",e=0){return Ge(qi,null,t,e)}function qR(t,e){const n=Ge(ls,null,t);return n.staticCount=e,n}function $R(t="",e=!1){return e?(Vi(),yr(wt,null,t)):Ge(wt,null,t)}function qt(t){return t==null||typeof t=="boolean"?Ge(wt):ie(t)?Ge(mt,null,t.slice()):typeof t=="object"?Qn(t):Ge(qi,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Un(t)}function pu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),pu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(aa in e)?e._ctx=ft:i===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[Tg(e)]):n=8);t.children=e,t.shapeFlag|=n}function L_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Zo([e.class,r.class]));else if(i==="style")e.style=Qo([e.style,r.style]);else if(Ds(i)){const s=e[i],o=r[i];o&&s!==o&&!(ie(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ct(t,e,n,r=null){Qt(t,e,7,[n,r])}const I_=bg();let D_=0;function N_(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||I_,s={uid:D_++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Am(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pg(r,i),emitsOptions:Qm(r,i),emit:null,emitted:null,propsDefaults:He,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gb.bind(null,s),t.ce&&t.ce(s),s}let Qe=null;const nn=()=>Qe||ft,pi=t=>{Qe=t,t.scope.on()},ci=()=>{Qe&&Qe.scope.off(),Qe=null};function Eg(t){return t.vnode.shapeFlag&4}let Ar=!1;function U_(t,e=!1){Ar=e;const{props:n,children:r}=t.vnode,i=Eg(t);x_(t,n,i,e),P_(t,r);const s=i?B_(t,e):void 0;return Ar=!1,s}function B_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Tr(new Proxy(t.ctx,m_));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Ag(t):null;pi(t),jr();const s=li(r,t,0,[t.props,i]);if(Wr(),ci(),Xc(s)){if(s.then(ci,ci),e)return s.then(o=>{Vl(t,o,e)}).catch(o=>{Gr(o,t,0)});t.asyncDep=s}else Vl(t,s,e)}else Cg(t,e)}function Vl(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Gm(e)),Cg(t,n)}let _f;function Cg(t,e,n){const r=t.type;if(!t.render){if(!e&&_f&&!r.render){const i=r.template||hu(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=dt(dt({isCustomElement:s,delimiters:a},o),l);r.render=_f(i,c)}}t.render=r.render||on}pi(t),jr(),g_(t),Wr(),ci()}function V_(t){return new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}})}function Ag(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=V_(t))},slots:t.slots,emit:t.emit,expose:e}}function la(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gm(Tr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in as)return as[n](t)},has(e,n){return n in e||n in as}}))}function Hl(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function H_(t){return ye(t)&&"__vccOpts"in t}const Me=(t,e)=>Bb(t,e,Ar);function XR(){return zg().slots}function YR(){return zg().attrs}function zg(){const t=nn();return t.setupContext||(t.setupContext=Ag(t))}function KR(t){const e=nn();let n=t();return ci(),Xc(n)&&(n=n.catch(r=>{throw pi(e),r})),[n,()=>pi(e)]}function St(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!ie(e)?Cr(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cr(n)&&(n=[n]),Ge(t,e,n))}const j_=Symbol(""),W_=()=>ht(j_),mu="3.2.47",G_="http://www.w3.org/2000/svg",Ii=typeof document<"u"?document:null,yf=Ii&&Ii.createElement("template"),q_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Ii.createElementNS(G_,t):Ii.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ii.createTextNode(t),createComment:t=>Ii.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ii.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{yf.innerHTML=r?`<svg>${t}</svg>`:t;const a=yf.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function $_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function X_(t,e,n){const r=t.style,i=Ke(n);if(n&&!i){if(e&&!Ke(e))for(const s in e)n[s]==null&&jl(r,s,"");for(const s in n)jl(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const xf=/\s*!important$/;function jl(t,e,n){if(ie(n))n.forEach(r=>jl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Y_(t,e);xf.test(n)?t.setProperty(Yi(r),n.replace(xf,""),"important"):t[r]=n}}const wf=["Webkit","Moz","ms"],Da={};function Y_(t,e){const n=Da[e];if(n)return n;let r=wn(e);if(r!=="filter"&&r in t)return Da[e]=r;r=ea(r);for(let i=0;i<wf.length;i++){const s=wf[i]+r;if(s in t)return Da[e]=s}return e}const Sf="http://www.w3.org/1999/xlink";function K_(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sf,e.slice(6,e.length)):t.setAttributeNS(Sf,e,n);else{const s=Y1(e);n==null||s&&!Sm(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Q_(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sm(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Mn(t,e,n,r){t.addEventListener(e,n,r)}function Z_(t,e,n,r){t.removeEventListener(e,n,r)}function J_(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=ey(e);if(r){const c=s[e]=iy(r,i);Mn(t,a,c,l)}else o&&(Z_(t,a,o,l),s[e]=void 0)}}const Pf=/(?:Once|Passive|Capture)$/;function ey(t){let e;if(Pf.test(t)){e={};let r;for(;r=t.match(Pf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yi(t.slice(2)),e]}let Na=0;const ty=Promise.resolve(),ny=()=>Na||(ty.then(()=>Na=0),Na=Date.now());function iy(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(ry(r,n.value),e,5,[r])};return n.value=t,n.attached=ny(),n}function ry(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Tf=/^on[a-z]/,sy=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?$_(t,r,i):e==="style"?X_(t,n,r):Ds(e)?qc(e)||J_(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):oy(t,e,r,i))?Q_(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),K_(t,e,r,i))};function oy(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Tf.test(e)&&ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Tf.test(e)&&Ke(n)?!1:e in t}const qn="transition",$r="animation",ca=(t,{slots:e})=>St(ig,ay(t),e);ca.displayName="Transition";const Rg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ca.props=dt({},ig.props,Rg);const Ti=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ef=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function ay(t){const e={};for(const M in t)M in Rg||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=ly(i),m=p&&p[0],g=p&&p[1],{onBeforeEnter:x,onEnter:b,onEnterCancelled:_,onLeave:v,onLeaveCancelled:y,onBeforeAppear:w=x,onAppear:P=b,onAppearCancelled:T=_}=e,R=(M,z,S)=>{Ei(M,z?u:a),Ei(M,z?c:o),S&&S()},k=(M,z)=>{M._isLeaving=!1,Ei(M,h),Ei(M,d),Ei(M,f),z&&z()},D=M=>(z,S)=>{const A=M?P:b,I=()=>R(z,M,S);Ti(A,[z,I]),Cf(()=>{Ei(z,M?l:s),$n(z,M?u:a),Ef(A)||Af(z,r,m,I)})};return dt(e,{onBeforeEnter(M){Ti(x,[M]),$n(M,s),$n(M,o)},onBeforeAppear(M){Ti(w,[M]),$n(M,l),$n(M,c)},onEnter:D(!1),onAppear:D(!0),onLeave(M,z){M._isLeaving=!0;const S=()=>k(M,z);$n(M,h),fy(),$n(M,f),Cf(()=>{!M._isLeaving||(Ei(M,h),$n(M,d),Ef(v)||Af(M,r,g,S))}),Ti(v,[M,S])},onEnterCancelled(M){R(M,!1),Ti(_,[M])},onAppearCancelled(M){R(M,!0),Ti(T,[M])},onLeaveCancelled(M){k(M),Ti(y,[M])}})}function ly(t){if(t==null)return null;if(Ve(t))return[Ua(t.enter),Ua(t.leave)];{const e=Ua(t);return[e,e]}}function Ua(t){return Cm(t)}function $n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ei(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Cf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let cy=0;function Af(t,e,n,r){const i=t._endId=++cy,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=uy(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),s()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function uy(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${qn}Delay`),s=r(`${qn}Duration`),o=zf(i,s),a=r(`${$r}Delay`),l=r(`${$r}Duration`),c=zf(a,l);let u=null,h=0,f=0;e===qn?o>0&&(u=qn,h=o,f=s.length):e===$r?c>0&&(u=$r,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?qn:$r:null,f=u?u===qn?s.length:l.length:0);const d=u===qn&&/\b(transform|all)(,|$)/.test(r(`${qn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function zf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Rf(n)+Rf(t[r])))}function Rf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function fy(){return document.body.offsetHeight}const mi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>gr(e,n):e};function hy(t){t.target.composing=!0}function Of(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mf={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=mi(i);const s=r||i.props&&i.props.type==="number";Mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Po(a)),t._assign(a)}),n&&Mn(t,"change",()=>{t.value=t.value.trim()}),e||(Mn(t,"compositionstart",hy),Mn(t,"compositionend",Of),Mn(t,"change",Of))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=mi(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Po(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},dy={deep:!0,created(t,e,n){t._assign=mi(n),Mn(t,"change",()=>{const r=t._modelValue,i=zr(t),s=t.checked,o=t._assign;if(ie(r)){const a=Gc(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Vr(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(Og(t,s))})},mounted:Ff,beforeUpdate(t,e,n){t._assign=mi(n),Ff(t,e,n)}};function Ff(t,{value:e,oldValue:n},r){t._modelValue=e,ie(e)?t.checked=Gc(e,r.props.value)>-1:Vr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Gi(e,Og(t,!0)))}const py={created(t,{value:e},n){t.checked=Gi(e,n.props.value),t._assign=mi(n),Mn(t,"change",()=>{t._assign(zr(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=mi(r),e!==n&&(t.checked=Gi(e,r.props.value))}},my={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Vr(e);Mn(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Po(zr(o)):zr(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=mi(r)},mounted(t,{value:e}){kf(t,e)},beforeUpdate(t,e,n){t._assign=mi(n)},updated(t,{value:e}){kf(t,e)}};function kf(t,e){const n=t.multiple;if(!(n&&!ie(e)&&!Vr(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=zr(s);if(n)ie(e)?s.selected=Gc(e,o)>-1:s.selected=e.has(o);else if(Gi(zr(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function zr(t){return"_value"in t?t._value:t.value}function Og(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const QR={created(t,e,n){ro(t,e,n,null,"created")},mounted(t,e,n){ro(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ro(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ro(t,e,n,r,"updated")}};function gy(t,e){switch(t){case"SELECT":return my;case"TEXTAREA":return Mf;default:switch(e){case"checkbox":return dy;case"radio":return py;default:return Mf}}}function ro(t,e,n,r,i){const o=gy(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,r)}const vy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ZR=(t,e)=>n=>{if(!("key"in n))return;const r=Yi(n.key);if(e.some(i=>i===r||vy[i]===r))return t(n)},JR={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Xr(t,!0),r.enter(t)):r.leave(t,()=>{Xr(t,!1)}):Xr(t,e))},beforeUnmount(t,{value:e}){Xr(t,e)}};function Xr(t,e){t.style.display=e?t._vod:"none"}const Mg=dt({patchProp:sy},q_);let us,Lf=!1;function by(){return us||(us=z_(Mg))}function _y(){return us=Lf?us:R_(Mg),Lf=!0,us}const yy=(...t)=>{const e=by().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Fg(r);if(!i)return;const s=e._component;!ye(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},xy=(...t)=>{const e=_y().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Fg(r);if(i)return n(i,!0,i instanceof SVGElement)},e};function Fg(t){return Ke(t)?document.querySelector(t):t}const wy=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Sy=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Py=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Ty(t,e){if(t!=="__proto__"&&!(t==="constructor"&&e&&typeof e=="object"&&"prototype"in e))return e}function Ey(t,e={}){if(typeof t!="string")return t;const n=t.toLowerCase().trim();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!Py.test(t)){if(e.strict)throw new SyntaxError("Invalid JSON");return t}try{return wy.test(t)||Sy.test(t)?JSON.parse(t,Ty):JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}}const Cy=/#/g,Ay=/&/g,zy=/=/g,kg=/\+/g,Ry=/%5e/gi,Oy=/%60/gi,My=/%7c/gi,Fy=/%20/gi;function ky(t){return encodeURI(""+t).replace(My,"|")}function Wl(t){return ky(typeof t=="string"?t:JSON.stringify(t)).replace(kg,"%2B").replace(Fy,"+").replace(Cy,"%23").replace(Ay,"%26").replace(Oy,"`").replace(Ry,"^")}function Ba(t){return Wl(t).replace(zy,"%3D")}function Lg(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function Ly(t){return Lg(t.replace(kg," "))}function Iy(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const i=Lg(r[1]);if(i==="__proto__"||i==="constructor")continue;const s=Ly(r[2]||"");typeof e[i]<"u"?Array.isArray(e[i])?e[i].push(s):e[i]=[e[i],s]:e[i]=s}return e}function Dy(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ba(t)}=${Wl(n)}`).join("&"):`${Ba(t)}=${Wl(e)}`:Ba(t)}function Ny(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>Dy(e,t[e])).join("&")}const Uy=/^\w{2,}:([/\\]{1,2})/,By=/^\w{2,}:([/\\]{2})?/,Vy=/^([/\\]\s*){2,}[^/\\]/;function Vs(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?Uy.test(t):By.test(t)||(e.acceptRelative?Vy.test(t):!1)}const Hy=/\/$|\/\?/;function Gl(t="",e=!1){return e?Hy.test(t):t.endsWith("/")}function Ig(t="",e=!1){if(!e)return(Gl(t)?t.slice(0,-1):t)||"/";if(!Gl(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function jy(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Gl(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function Wy(t=""){return t.startsWith("/")}function Gy(t=""){return(Wy(t)?t.slice(1):t)||"/"}function qy(t,e){if(Dg(e)||Vs(t))return t;const n=Ig(e);return t.startsWith(n)?t:Hs(n,t)}function If(t,e){if(Dg(e))return t;const n=Ig(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function $y(t,e){const n=ua(t),r={...Iy(n.search),...e};return n.search=Ny(r),Yy(n)}function Dg(t){return!t||t==="/"}function Xy(t){return t&&t!=="/"}function Hs(t,...e){let n=t||"";for(const r of e.filter(i=>Xy(i)))n=n?jy(n)+Gy(r):r;return n}function ua(t="",e){if(!Vs(t,{acceptRelative:!0}))return e?ua(e+t):Df(t);const[n="",r,i=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",o=""]=(i.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:l,hash:c}=Df(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:s,pathname:a,search:l,hash:c}}function Df(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function Yy(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class Ky extends Error{constructor(){super(...arguments),this.name="FetchError"}}function Qy(t,e,n){let r="";e&&(r=e.message),t&&n?r=`${r} (${n.status} ${n.statusText} (${t.toString()}))`:t&&(r=`${r} (${t.toString()})`);const i=new Ky(r);return Object.defineProperty(i,"request",{get(){return t}}),Object.defineProperty(i,"response",{get(){return n}}),Object.defineProperty(i,"data",{get(){return n&&n._data}}),Object.defineProperty(i,"status",{get(){return n&&n.status}}),Object.defineProperty(i,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(i,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(i,"statusMessage",{get(){return n&&n.statusText}}),i}const Zy=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Nf(t="GET"){return Zy.has(t.toUpperCase())}function Jy(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const ex=new Set(["image/svg","application/xml","application/xhtml","application/html"]),tx=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function nx(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return tx.test(e)?"json":ex.has(e)||e.startsWith("text/")?"text":"blob"}const ix=new Set([408,409,425,429,500,502,503,504]);function Ng(t){const{fetch:e,Headers:n}=t;function r(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){let c;typeof o.options.retry=="number"?c=o.options.retry:c=Nf(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(c>0&&ix.has(u))return i(o.request,{...o.options,retry:c-1})}const l=Qy(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,i),l}const i=async function(a,l={}){const c={request:a,options:{...t.defaults,...l},response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=qy(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=$y(c.request,{...c.options.params,...c.options.query})),c.options.body&&Nf(c.options.method)&&Jy(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json"))),c.response=await e(c.request,c.options).catch(async h=>(c.error=h,c.options.onRequestError&&await c.options.onRequestError(c),r(c)));const u=(c.options.parseResponse?"json":c.options.responseType)||nx(c.response.headers.get("content-type")||"");if(u==="json"){const h=await c.response.text(),f=c.options.parseResponse||Ey;c.response._data=f(h)}else u==="stream"?c.response._data=c.response.body:c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),r(c)):c.response},s=function(a,l){return i(a,l).then(c=>c._data)};return s.raw=i,s.native=e,s.create=(o={})=>Ng({...t,defaults:{...t.defaults,...o}}),s}const Ug=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),rx=Ug.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),sx=Ug.Headers,ox=Ng({fetch:rx,Headers:sx}),ax=ox,lx=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Mo=lx().app,cx=()=>Mo.baseURL,ux=()=>Mo.buildAssetsDir,fx=(...t)=>Hs(Bg(),ux(),...t),Bg=(...t)=>{const e=Mo.cdnURL||Mo.baseURL;return t.length?Hs(e,...t):e};globalThis.__buildAssetsURL=fx,globalThis.__publicAssetsURL=Bg;function ql(t,e={},n){for(const r in t){const i=t[r],s=n?`${n}:${r}`:r;typeof i=="object"&&i!==null?ql(i,e,s):typeof i=="function"&&(e[s]=i)}return e}function hx(t,e){return t.reduce((n,r)=>n.then(()=>r.apply(void 0,e)),Promise.resolve())}function dx(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}function Va(t,e){for(const n of t)n(e)}class px{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const i=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!r.allowDeprecated){let o=s.message;o||(o=`${i} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,i=(...s)=>(typeof r=="function"&&r(),r=void 0,i=void 0,n(...s));return r=this.hook(e,i),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];this._hooks[e]=void 0;for(const i of r)this.hook(e,i)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=ql(e),r=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of r.splice(0,r.length))i()}}removeHooks(e){const n=ql(e);for(const r in n)this.removeHook(r,n[r])}callHook(e,...n){return this.callHookWith(hx,e,...n)}callHookParallel(e,...n){return this.callHookWith(dx,e,...n)}callHookWith(e,n,...r){const i=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Va(this._before,i);const s=e(this._hooks[n]||[],r);return s instanceof Promise?s.finally(()=>{this._after&&i&&Va(this._after,i)}):(this._after&&i&&Va(this._after,i),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}function Vg(){return new px}function mx(){let t,e=!1;const n=r=>{if(t&&t!==r)throw new Error("Context conflict")};return{use:()=>{if(t===void 0)throw new Error("Context is not available");return t},tryUse:()=>t,set:(r,i)=>{i||n(r),t=r,e=!0},unset:()=>{t=void 0,e=!1},call:(r,i)=>{n(r),t=r;try{return i()}finally{e||(t=void 0)}},async callAsync(r,i){t=r;const s=()=>{t=r},o=()=>t===r?s:void 0;$l.add(o);try{const a=i();return e||(t=void 0),await a}finally{$l.delete(o)}}}}function gx(){const t={};return{get(e){return t[e]||(t[e]=mx()),t[e],t[e]}}}const Fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Uf="__unctx__",vx=Fo[Uf]||(Fo[Uf]=gx()),bx=t=>vx.get(t),Bf="__unctx_async_handlers__",$l=Fo[Bf]||(Fo[Bf]=new Set);function cr(t){const e=[];for(const i of $l){const s=i();s&&e.push(s)}const n=()=>{for(const i of e)i()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(i=>{throw n(),i})),[r,n]}const Hg=bx("nuxt-app"),_x="__nuxt_plugin";function yx(t){let e=0;const n={provide:void 0,globalName:"nuxt",payload:cn({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...t};n.hooks=Vg(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,o)=>{const a="$"+s;so(n,a,o),so(n.vueApp.config.globalProperties,a,o)},so(n.vueApp,"$nuxt",n),so(n.vueApp.config.globalProperties,"$nuxt",n);const r=cn(n.payload.config),i=new Proxy(r,{get(s,o){var a;return o==="public"?s.public:(a=s[o])!=null?a:s.public[o]},set(s,o,a){return o==="public"||o==="app"?!1:(s[o]=a,s.public[o]=a,!0)}});return n.provide("config",i),n}async function xx(t,e){if(typeof e!="function")return;const{provide:n}=await Zn(t,e,[t])||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}async function wx(t,e){for(const n of e)await xx(t,n)}function Sx(t){return t.map(n=>typeof n!="function"?null:n.length>1?r=>n(r,r.provide):n).filter(Boolean)}function En(t){return t[_x]=!0,t}function Zn(t,e,n){const r=()=>n?e(...n):e();return Hg.set(t),r()}function pt(){const t=Hg.tryUse();if(!t){const e=nn();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return t}function jg(){return pt().$config}function so(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function Ha(t){return t!==null&&typeof t=="object"}function Xl(t,e,n=".",r){if(!Ha(e))return Xl(t,{},n,r);const i=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(r&&r(i,s,o,n)||(Array.isArray(o)&&Array.isArray(i[s])?i[s]=[...o,...i[s]]:Ha(o)&&Ha(i[s])?i[s]=Xl(o,i[s],(n?`${n}.`:"")+s.toString(),r):i[s]=o))}return i}function Wg(t){return(...e)=>e.reduce((n,r)=>Xl(n,r,"",t),{})}const Px=Wg(),Tx=Wg((t,e,n)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0});class Yl extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const e={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(e.statusMessage=this.statusMessage),this.data!==void 0&&(e.data=this.data),e}}Yl.__h3_error__=!0;function Kl(t){var n;if(typeof t=="string")return new Yl(t);if(Ex(t))return t;const e=new Yl((n=t.message)!=null?n:t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}return t.data&&(e.data=t.data),t.statusCode?e.statusCode=t.statusCode:t.status&&(e.statusCode=t.status),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Ex(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const fa=()=>iu(pt().payload,"error"),ns=t=>{const e=Gg(t);try{pt().callHook("app:error",e);const r=fa();r.value=r.value||e}catch{throw e}return e},Cx=async(t={})=>{const e=pt(),n=fa();e.callHook("app:error:cleared",t),t.redirect&&await e.$router.replace(t.redirect),n.value=null},Ax=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Gg=t=>{const e=Kl(t);return e.__nuxt_error=!0,e};function qg(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const i="$s"+n,s=pt(),o=iu(s.payload.state,i);if(o.value===void 0&&r){const a=r();if(De(a))return s.payload.state[i]=a,a;o.value=a}return o}const js=()=>{var t;return(t=pt())==null?void 0:t.$router},gu=()=>nn()?ht("_route",pt()._route):pt()._route,$g=t=>t,zx=(t,e,n={})=>{const r=pt();n.global||typeof t=="function"?r._middleware.global.push(typeof t=="function"?t:e):r._middleware.named[t]=e},Rx=()=>{try{if(pt()._processingMiddleware)return!0}catch{return!0}return!1},Ql=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",r=Vs(n,!0);if(r&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(r&&ua(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!r&&Rx())return t;const i=js();return r?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)};async function Xg(t,e=js()){if(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(t))return;e._routePreloaded.add(t);const n=e._preloadPromises=e._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>Xg(t,e));const r=e.resolve(t).matched.map(i=>{var s;return(s=i.components)==null?void 0:s.default}).filter(i=>typeof i=="function");for(const i of r){const s=Promise.resolve(i()).catch(()=>{}).finally(()=>n.splice(n.indexOf(s)));n.push(s)}await Promise.all(n)}const Ox="modulepreload",Mx=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},Vf={},we=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Mx(s,r),s in Vf)return;Vf[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Ox,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function Hf(t,e={}){const n=Fx(t,e),r=pt(),i=r._payloadCache=r._payloadCache||{};return i[t]||(i[t]=kx(n).then(s=>s||(delete i[t],null))),i[t]}function Fx(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost")throw new Error("Payload URL cannot contain host: "+t);const r=e.hash||(e.fresh?Date.now():"");return Hs(jg().app.baseURL,n.pathname,r?`_payload.${r}.js`:"_payload.js")}async function kx(t){const e=await we(()=>import(t),[],import.meta.url).catch(n=>{console.warn("[nuxt] Cannot load payload ",t,n)});return(e==null?void 0:e.default)||null}function Lx(){return!!pt().payload.prerenderedAt}const Ix=(...t)=>t.find(e=>e!==void 0),Dx="noopener noreferrer",Nx=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),Ux=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});function Bx(t){const e=t.componentName||"NuxtLink";return tn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:r}){const i=js(),s=Me(()=>n.to||n.href||""),o=Me(()=>n.external||n.target&&n.target!=="_self"?!0:typeof s.value=="object"?!1:s.value===""||Vs(s.value,!0)),a=et(!1),l=et(null);if(n.prefetch!==!1&&n.noPrefetch!==!0&&typeof s.value=="string"&&n.target!=="_blank"&&!Hx()){const u=pt(),h=Vx();let f,d=null;Us(()=>{f=Nx(()=>{var p;(p=l==null?void 0:l.value)!=null&&p.tagName&&(d=h.observe(l.value,async()=>{d==null||d(),d=null,await Promise.all([u.hooks.callHook("link:prefetch",s.value).catch(()=>{}),!o.value&&Xg(s.value,i).catch(()=>{})]),a.value=!0}))})}),Bs(()=>{f&&Ux(f),d==null||d(),d=null})}return()=>{var d,p,m;if(!o.value)return St(p_("RouterLink"),{ref:g=>{l.value=g==null?void 0:g.$el},to:s.value,...a.value&&!n.custom?{class:n.prefetchedClass||t.prefetchedClass}:{},activeClass:n.activeClass||t.activeClass,exactActiveClass:n.exactActiveClass||t.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue,custom:n.custom},r.default);const c=typeof s.value=="object"?(p=(d=i.resolve(s.value))==null?void 0:d.href)!=null?p:null:s.value||null,u=n.target||null,h=n.noRel?null:Ix(n.rel,t.externalRelAttribute,c?Dx:"")||null,f=()=>Ql(c,{replace:n.replace});return n.custom?r.default?r.default({href:c,navigate:f,route:i.resolve(c),rel:h,target:u,isExternal:o.value,isActive:!1,isExactActive:!1}):null:St("a",{ref:l,href:c,rel:h,target:u},(m=r.default)==null?void 0:m.call(r))}}})}const eO=Bx({componentName:"NuxtLink"});function Vx(){const t=pt();if(t._observer)return t._observer;let e=null;const n=new Map,r=(s,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),n.set(s,o),e.observe(s),()=>{n.delete(s),e.unobserve(s),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}function Hx(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const jx={};Tx(jx);const Wx=!1,Gx=!0;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Yg;const Ws=t=>Yg=t,Kg=Symbol();function Zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var fs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fs||(fs={}));function qx(){const t=ta(!0),e=t.run(()=>et({}));let n=[],r=[];const i=Tr({install(s){Ws(i),i._a=s,s.provide(Kg,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!Wx?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Qg=()=>{};function jf(t,e,n,r=Qg){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&zm()&&ob(i),i}function nr(t,...e){t.slice().forEach(n=>{n(...e)})}function Jl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Zl(i)&&Zl(r)&&t.hasOwnProperty(n)&&!De(r)&&!ai(r)?t[n]=Jl(i,r):t[n]=r}return t}const $x=Symbol();function Xx(t){return!Zl(t)||!t.hasOwnProperty($x)}const{assign:Jn}=Object;function Yx(t){return!!(De(t)&&t.effect)}function Kx(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Db(n.state.value[t]);return Jn(u,s,Object.keys(o||{}).reduce((h,f)=>(h[f]=Tr(Me(()=>{Ws(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=Zg(t,c,e,n,r,!0),l.$reset=function(){const h=i?i():{};this.$patch(f=>{Jn(f,h)})},l}function Zg(t,e,n={},r,i,s){let o;const a=Jn({actions:{}},n),l={deep:!0};let c,u,h=Tr([]),f=Tr([]),d;const p=r.state.value[t];!s&&!p&&(r.state.value[t]={}),et({});let m;function g(P){let T;c=u=!1,typeof P=="function"?(P(r.state.value[t]),T={type:fs.patchFunction,storeId:t,events:d}):(Jl(r.state.value[t],P),T={type:fs.patchObject,payload:P,storeId:t,events:d});const R=m=Symbol();Ki().then(()=>{m===R&&(c=!0)}),u=!0,nr(h,T,r.state.value[t])}const x=Qg;function b(){o.stop(),h=[],f=[],r._s.delete(t)}function _(P,T){return function(){Ws(r);const R=Array.from(arguments),k=[],D=[];function M(A){k.push(A)}function z(A){D.push(A)}nr(f,{args:R,name:P,store:y,after:M,onError:z});let S;try{S=T.apply(this&&this.$id===t?this:y,R)}catch(A){throw nr(D,A),A}return S instanceof Promise?S.then(A=>(nr(k,A),A)).catch(A=>(nr(D,A),Promise.reject(A))):(nr(k,S),S)}}const v={_p:r,$id:t,$onAction:jf.bind(null,f),$patch:g,$reset:x,$subscribe(P,T={}){const R=jf(h,P,T.detached,()=>k()),k=o.run(()=>an(()=>r.state.value[t],D=>{(T.flush==="sync"?u:c)&&P({storeId:t,type:fs.direct,events:d},D)},Jn({},l,T)));return R},$dispose:b},y=cn(v);r._s.set(t,y);const w=r._e.run(()=>(o=ta(),o.run(()=>e())));for(const P in w){const T=w[P];if(De(T)&&!Yx(T)||ai(T))s||(p&&Xx(T)&&(De(T)?T.value=p[P]:Jl(T,p[P])),r.state.value[t][P]=T);else if(typeof T=="function"){const R=_(P,T);w[P]=R,a.actions[P]=T}}return Jn(y,w),Jn(Ce(y),w),Object.defineProperty(y,"$state",{get:()=>r.state.value[t],set:P=>{g(T=>{Jn(T,P)})}}),r._p.forEach(P=>{Jn(y,o.run(()=>P({store:y,app:r._a,pinia:r,options:a})))}),p&&s&&n.hydrate&&n.hydrate(y.$state,p),c=!0,u=!0,y}function Jg(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=nn();return a=a||c&&ht(Kg,null),a&&Ws(a),a=Yg,a._s.has(r)||(s?Zg(r,e,i,a):Kx(r,i,a)),a._s.get(r)}return o.$id=r,o}const Qx=En(t=>{const e=qx();return t.vueApp.use(e),Ws(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),ja={},Zx=En(t=>{for(const e in ja)t.vueApp.component(e,ja[e]),t.vueApp.component("Lazy"+e,ja[e])});function Jx(t){return Array.isArray(t)?t:[t]}const ew=["title","script","style","noscript"],vu=["base","meta","link","style","script","noscript"],tw=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],nw=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],iw=["tagPosition","tagPriority","tagDuplicateStrategy"];function e0(t,e){const{props:n,tag:r}=t;if(nw.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];r==="meta"&&i.push("name","property","http-equiv");for(const s of i)if(typeof n[s]<"u"){const o=String(n[s]);return e&&!e(o)?!1:`${r}:${s}:${o}`}return!1}const rw=t=>{t=t||{};const e=t.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){e.forEach(i=>{n.props[i]&&(n.key=n.props[i],delete n.props[i])});const r=n.key?`${n.tag}:${n.key}`:e0(n);r&&(n._d=r)},"tags:resolve":function(n){const r={};n.tags.forEach(i=>{let s=i._d||i._p;const o=r[s];if(o){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&(i.tag==="htmlAttrs"||i.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const c=o.props;["class","style"].forEach(u=>{i.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),i.props[u]=`${c[u]} ${i.props[u]}`)}),r[s].props={...c,...i.props};return}else i._e===o._e&&(s=i._d=`${s}:${i._p}`);const l=Object.keys(i.props).length;if((l===0||l===1&&typeof i.props["data-h-key"]<"u")&&!i.children){delete r[s];return}}r[s]=i}),n.tags=Object.values(r)}}}};function t0(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}const oo=(t,e)=>{const{tag:n,$el:r}=t;!r||(Object.entries(n.props).forEach(([i,s])=>{s=String(s);const o=`attr:${i}`;if(i==="class"){if(!s)return;for(const a of s.split(" ")){const l=`${o}:${a}`;e&&e(t,l,()=>r.classList.remove(a)),r.classList.contains(a)||r.classList.add(a)}return}e&&!i.startsWith("data-h-")&&e(t,o,()=>r.removeAttribute(i)),r.getAttribute(i)!==s&&r.setAttribute(i,s)}),ew.includes(n.tag)&&r.innerHTML!==(n.children||"")&&(r.innerHTML=n.children||""))};async function n0(t,e={}){var h,f;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=e.document||window.document,i=t._popSideEffectQueue();t.headEntries().map(d=>d._sde).forEach(d=>{Object.entries(d).forEach(([p,m])=>{i[p]=m})});const s=async d=>{const p=t.headEntries().find(g=>g._i===d._e),m={renderId:d._d||t0(JSON.stringify({...d,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:d,entry:p,staleSideEffects:i};return await t.hooks.callHook("dom:beforeRenderTag",m),m},o=[],a={body:[],head:[]},l=(d,p,m)=>{p=`${d.renderId}:${p}`,d.entry&&(d.entry._sde[p]=m),delete i[p]},c=d=>{t._elMap[d.renderId]=d.$el,o.push(d),l(d,"el",()=>{var p;(p=d.$el)==null||p.remove(),delete t._elMap[d.renderId]})};for(const d of await t.resolveTags()){const p=await s(d);if(!p.shouldRender)continue;const{tag:m}=p;if(m.tag==="title"){r.title=m.children||"",o.push(p);continue}if(m.tag==="htmlAttrs"||m.tag==="bodyAttrs"){p.$el=r[m.tag==="htmlAttrs"?"documentElement":"body"],oo(p,l),o.push(p);continue}if(p.$el=t._elMap[p.renderId],!p.$el&&m._hash&&(p.$el=r.querySelector(`${(h=m.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${m.tag}[data-h-${m._hash}]`)),p.$el){p.tag._d&&oo(p),c(p);continue}p.$el=r.createElement(m.tag),oo(p),a[(f=m.tagPosition)!=null&&f.startsWith("body")?"body":"head"].push(p)}const u={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(a).forEach(([d,p])=>{var g;if(!p.length)return;const m=(g=r==null?void 0:r[d])==null?void 0:g.children;if(!!m){for(const x of[...m].reverse()){const b=x.tagName.toLowerCase();if(!vu.includes(b))continue;const _=e0({tag:b,props:x.getAttributeNames().reduce((y,w)=>({...y,[w]:x.getAttribute(w)}),{})}),v=p.findIndex(y=>{var w;return y&&(y.tag._d===_||((w=x.isEqualNode)==null?void 0:w.call(x,y.$el)))});if(v!==-1){const y=p[v];y.$el=x,oo(y),c(y),delete p[v]}}p.forEach(x=>{const b=x.tag.tagPosition||"head";u[b]=u[b]||r.createDocumentFragment(),u[b].appendChild(x.$el),c(x)})}}),u.head&&r.head.appendChild(u.head),u.bodyOpen&&r.body.insertBefore(u.bodyOpen,r.body.firstChild),u.bodyClose&&r.body.appendChild(u.bodyClose);for(const d of o)await t.hooks.callHook("dom:renderTag",d);Object.values(i).forEach(d=>d())}let Wa=null;async function i0(t,e={}){function n(){return Wa=null,n0(t,e)}const r=e.delayFn||(i=>setTimeout(i,10));return Wa=Wa||new Promise(i=>r(()=>i(n())))}const sw=t=>({hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),i0(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}}),Wf={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Gf(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in Wf?Wf[e]:10}const ow=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function aw(){return{hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(i=>i._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of ow)for(const i of t.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(n))){const s=e(i.tagPriority.replace(n,""));typeof s<"u"&&(i._p=s+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Gf(n)-Gf(r))}}}}const qf=(t,e)=>t==null?e||null:typeof t=="function"?t(e):t.replace("%s",e!=null?e:""),lw=()=>({hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(i=>i.tag==="titleTemplate");const r=e.findIndex(i=>i.tag==="title");if(r!==-1&&n!==-1){const i=qf(e[n].children,e[r].children);i!==null?e[r].children=i||e[r].children:delete e[r]}else if(n!==-1){const i=qf(e[n].children);i!==null&&(e[n].children=i,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}),cw=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),uw=typeof window<"u",fw=()=>({hooks:{"tag:normalise":t=>{var i,s;const{tag:e,entry:n}=t,r=typeof e.props._dynamic<"u";!vu.includes(e.tag)||!e.key||(e._hash=t0(JSON.stringify({tag:e.tag,key:e.key})),!(uw||((s=(i=s0())==null?void 0:i.resolvedOptions)==null?void 0:s.document))&&(n._m==="server"||r)&&(e.props[`data-h-${e._hash}`]=""))},"tags:resolve":t=>{t.tags=t.tags.map(e=>(delete e.props._dynamic,e))}}}),$f=["script","link","bodyAttrs"],hw=()=>{const t=(e,n)=>{const r={},i={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?i[o]=a:r[o]=a});let s;return e==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof i.onload<"u"&&(s=r.src,delete r.src),{props:r,eventHandlers:i,delayedSrc:s}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!$f.includes(n.tag)||!Object.entries(n.props).find(([r,i])=>r.startsWith("on")&&typeof i=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!$f.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([s,o])=>s.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:r,delayedSrc:i}=t("dom",e.tag);!Object.keys(r).length||(e.tag.props=n,e.tag._eventHandlers=r,e.tag._delayedSrc=i)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const r=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([i,s])=>{const o=`${e.tag._d||e.tag._p}:${i}`,a=i.slice(2).toLowerCase(),l=`data-h-${a}`;if(delete e.staleSideEffects[o],n.hasAttribute(l))return;const c=s;n.setAttribute(l,""),r.addEventListener(a,c),e.entry&&(e.entry._sde[o]=()=>{r.removeEventListener(a,c),n.removeAttribute(l)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}};let r0;const dw=t=>r0=t,s0=()=>r0;async function pw(t,e){const n={tag:t,props:{}};return t==="title"||t==="titleTemplate"?(n.children=e instanceof Promise?await e:e,n):(n.props=await mw({...e}),["children","innerHtml","innerHTML"].forEach(r=>{typeof n.props[r]<"u"&&(n.children=n.props[r],typeof n.children=="object"&&(n.children=JSON.stringify(n.children)),delete n.props[r])}),Object.keys(n.props).filter(r=>iw.includes(r)).forEach(r=>{n[r]=n.props[r],delete n.props[r]}),typeof n.props.class=="object"&&!Array.isArray(n.props.class)&&(n.props.class=Object.keys(n.props.class).filter(r=>n.props.class[r])),Array.isArray(n.props.class)&&(n.props.class=n.props.class.join(" ")),n.props.content&&Array.isArray(n.props.content)?n.props.content.map((r,i)=>{const s={...n,props:{...n.props}};return s.props.content=r,s.key=`${n.props.name||n.props.property}:${i}`,s}):n)}async function mw(t){for(const e of Object.keys(t))t[e]instanceof Promise&&(t[e]=await t[e]),String(t[e])==="true"?t[e]="":String(t[e])==="false"&&delete t[e];return t}const gw=10;async function vw(t){const e=[];return Object.entries(t.resolvedInput||t.input).filter(([n,r])=>typeof r<"u"&&tw.includes(n)).forEach(([n,r])=>{const i=Jx(r);e.push(...i.map(s=>pw(n,s)).flat())}),(await Promise.all(e)).flat().map((n,r)=>(n._e=t._i,n._p=(t._i<<gw)+r,n))}const bw=()=>[rw(),aw(),lw(),fw(),hw(),cw()],_w=(t={})=>[sw({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function yw(t={}){const e=xw({...t,plugins:[..._w(t),...(t==null?void 0:t.plugins)||[]]});return dw(e),e}function xw(t={}){let e=[],n={},r=0;const i=Vg();t!=null&&t.hooks&&i.addHooks(t.hooks),t.plugins=[...bw(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&i.addHooks(a.hooks));const s=()=>i.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return i},use(a){a.hooks&&i.addHooks(a.hooks)},push(a,l){const c={_i:r++,input:a,_sde:{}};return l!=null&&l.mode&&(c._m=l==null?void 0:l.mode),e.push(c),s(),{dispose(){e=e.filter(u=>u._i!==c._i?!0:(n={...n,...u._sde||{}},u._sde={},s(),!1))},patch(u){e=e.map(h=>(h._i===c._i&&(c.input=h.input=u,s()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await i.callHook("entries:resolve",a);for(const l of a.entries)for(const c of await vw(l)){const u={tag:c,entry:l};await i.callHook("tag:normalise",u),a.tags.push(u.tag)}return await i.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...n};return n={},a}};return o.hooks.callHook("init",o),o}const ww=["useHead","useTagTitle","useTagBase","useTagMeta","useTagMetaFlat","useSeoMeta","useTagLink","useTagScript","useTagStyle","useTagNoscript","useHtmlAttrs","useBodyAttrs","useTitleTemplate","useServerHead","useServerTagTitle","useServerTagBase","useServerTagMeta","useServerTagMetaFlat","useServerTagLink","useServerTagScript","useServerTagStyle","useServerTagNoscript","useServerHtmlAttrs","useServerBodyAttrs","useServerTitleTemplate"];function Sw(t){return typeof t=="function"?t():ut(t)}function ko(t,e=""){if(t instanceof Promise)return t;const n=Sw(t);if(!t||!n)return n;if(Array.isArray(n))return n.map(r=>ko(r,e));if(typeof n=="object"){let r=!1;const i=Object.fromEntries(Object.entries(n).map(([s,o])=>s==="titleTemplate"||s.startsWith("on")?[s,ut(o)]:((typeof o=="function"||De(o))&&(r=!0),[s,ko(o,s)])));return r&&vu.includes(String(e))&&(i._dynamic=!0),i}return n}const Pw=mu.startsWith("3"),Tw=typeof window<"u",o0="usehead";function bu(){return nn()&&ht(o0)||s0()}function Ew(t={}){const e=yw({...t,domDelayFn:r=>setTimeout(()=>Ki(()=>r()),10),plugins:[Cw(),...(t==null?void 0:t.plugins)||[]]}),n={install(r){Pw&&(r.config.globalProperties.$unhead=e,r.provide(o0,e))}};return e.install=n.install,e}const Cw=()=>({hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=ko(e.input)}}});function Aw(t,e={}){const n=bu(),r=et(!1),i=et({});t_(()=>{i.value=r.value?{}:ko(t)});const s=n.push(i.value,e);return an(i,a=>{s.patch(a)}),nn()&&(Bs(()=>{s.dispose()}),uu(()=>{r.value=!0}),cu(()=>{r.value=!1})),s}function zw(t,e={}){return bu().push(t,e)}function a0(t,e={}){var r;const n=bu();if(n){const i=Tw||!!((r=n.resolvedOptions)!=null&&r.document);return e.mode==="server"&&i||e.mode==="client"&&!i?void 0:i?Aw(t,e):zw(t,e)}}const Rw=["injectHead"];[...Rw,...ww];function Ow(t){const e=Ew(),n={unhead:e,install(r){mu.startsWith("3")&&(r.config.globalProperties.$head=e,r.provide("usehead",e))},use(r){e.use(r)},resolveTags(){return e.resolveTags()},headEntries(){return e.headEntries()},headTags(){return e.resolveTags()},push(r,i){return e.push(r,i)},addEntry(r,i){return e.push(r,i)},addHeadObjs(r,i){return e.push(r,i)},addReactiveEntry(r,i){const s=a0(r,i);return typeof s<"u"?s.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,i){i?n0(e,{document:r}):i0(e,{delayFn:s=>setTimeout(()=>s(),50),document:r})},internalHooks:e.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return e.addHeadObjs=n.addHeadObjs,e.updateDOM=n.updateDOM,e.hooks.hook("dom:beforeRender",r=>{for(const i of n.hooks["before:dom"])i()===!1&&(r.shouldRender=!1)}),t&&n.addHeadObjs(t),n}const ec={name:"page",mode:"out-in"},Mw={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"},{name:"description",content:"This experience leverages artificial intelligence to define your unique aura and deliver personalised content"},{property:"og:url",content:"https://preparetopioneer.com/"},{property:"og:type",content:"website"},{property:"og:title",content:"DEPT Pioneering"},{property:"og:description",content:"This experience leverages artificial intelligence to define your unique aura and deliver personalised content"},{property:"og:image",content:"https://preparetopioneer.com/assets/images/share_amethyst.png"},{name:"twitter:card",content:"summary_large_image"},{property:"twitter:domain",content:"preparetopioneer.com"},{property:"twitter:url",content:"https://preparetopioneer.com/"},{name:"twitter:title",content:"DEPT Pioneering"},{name:"twitter:description",content:"This experience leverages artificial intelligence to define your unique aura and deliver personalised content"},{name:"twitter:image",content:"https://preparetopioneer.com/assets/images/share_amethyst.png"}],link:[],style:[],script:[{hid:"gtmHead",innerHTML:`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NL86FCL');`}],noscript:[],title:"DEPT Pioneering"},Fw=!1,kw=!1,Lw="__nuxt",Iw=En(t=>{const e=Ow();e.push(Mw),t.vueApp.use(e);{let n=!0;const r=()=>{n=!1,e.internalHooks.callHook("entries:updated",e.unhead)};e.internalHooks.hook("dom:beforeRender",i=>{i.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",r),t.hooks.hook("app:mounted",r)}t._useHead=a0});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const lr=typeof window<"u";function Dw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Le=Object.assign;function Ga(t,e){const n={};for(const r in e){const i=e[r];n[r]=un(i)?i.map(t):t(i)}return n}const hs=()=>{},un=Array.isArray,Nw=/\/$/,Uw=t=>t.replace(Nw,"");function qa(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=jw(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Bw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Vw(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Rr(e.matched[r],n.matched[i])&&l0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function l0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Hw(t[n],e[n]))return!1;return!0}function Hw(t,e){return un(t)?Yf(t,e):un(e)?Yf(e,t):t===e}function Yf(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Es;(function(t){t.pop="pop",t.push="push"})(Es||(Es={}));var ds;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ds||(ds={}));function Ww(t){if(!t)if(lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Uw(t)}const Gw=/^[^#]+#/;function qw(t,e){return t.replace(Gw,"#")+e}function $w(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ha=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=$w(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Kf(t,e){return(history.state?history.state.position-e:-1)+t}const tc=new Map;function Yw(t,e){tc.set(t,e)}function Kw(t){const e=tc.get(t);return tc.delete(t),e}let Qw=()=>location.protocol+"//"+location.host;function c0(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Xf(l,"")}return Xf(n,t)+r+i}function Zw(t,e,n,r){let i=[],s=[],o=null;const a=({state:f})=>{const d=c0(t,location),p=n.value,m=e.value;let g=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}g=m?f.position-m.position:0}else r(d);i.forEach(x=>{x(n.value,p,{delta:g,type:Es.pop,direction:g?g>0?ds.forward:ds.back:ds.unknown})})};function l(){o=n.value}function c(f){i.push(f);const d=()=>{const p=i.indexOf(f);p>-1&&i.splice(p,1)};return s.push(d),d}function u(){const{history:f}=window;!f.state||f.replaceState(Le({},f.state,{scroll:ha()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Qf(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?ha():null}}function Jw(t){const{history:e,location:n}=window,r={value:c0(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Qw()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Le({},e.state,Qf(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=Le({},i.value,e.state,{forward:l,scroll:ha()});s(u.current,u,!0);const h=Le({},Qf(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function u0(t){t=Ww(t);const e=Jw(t),n=Zw(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Le({location:"",base:t,go:r,createHref:qw.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function e2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),u0(t)}function t2(t){return typeof t=="string"||t&&typeof t=="object"}function f0(t){return typeof t=="string"||typeof t=="symbol"}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},h0=Symbol("");var Zf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zf||(Zf={}));function Or(t,e){return Le(new Error,{type:t,[h0]:!0},e)}function Cn(t,e){return t instanceof Error&&h0 in t&&(e==null||!!(t.type&e))}const Jf="[^/]+?",n2={sensitive:!1,strict:!1,start:!0,end:!0},i2=/[.+*?^${}()[\]/\\]/g;function r2(t,e){const n=Le({},n2,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(i2,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:m,optional:g,regexp:x}=f;s.push({name:p,repeatable:m,optional:g});const b=x||Jf;if(b!==Jf){d+=10;try{new RegExp(`(${b})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${p}" (${b}): `+v.message)}}let _=m?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(_=g&&c.length<2?`(?:/${_})`:"/"+_),g&&(_+="?"),i+=_,d+=20,g&&(d+=-8),m&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=s[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:g}=d,x=p in c?c[p]:"";if(un(x)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const b=un(x)?x.join("/"):x;if(!b)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function s2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function o2(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=s2(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(eh(r))return 1;if(eh(i))return-1}return i.length-r.length}function eh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const a2={type:0,value:""},l2=/[a-zA-Z0-9_]/;function c2(t){if(!t)return[[]];if(t==="/")return[[a2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:l2.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function u2(t,e,n){const r=r2(c2(t.path),n),i=Le(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function f2(t,e){const n=[],r=new Map;e=ih({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,f){const d=!f,p=h2(u);p.aliasOf=f&&f.record;const m=ih(e,u),g=[p];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of _)g.push(Le({},p,{components:f?f.record.components:p.components,path:v,aliasOf:f?f.record:p}))}let x,b;for(const _ of g){const{path:v}=_;if(h&&v[0]!=="/"){const y=h.record.path,w=y[y.length-1]==="/"?"":"/";_.path=h.record.path+(v&&w+v)}if(x=u2(_,h,m),f?f.alias.push(x):(b=b||x,b!==x&&b.alias.push(x),d&&u.name&&!nh(x)&&o(u.name)),p.children){const y=p.children;for(let w=0;w<y.length;w++)s(y[w],x,f&&f.children[w])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return b?()=>{o(b)}:hs}function o(u){if(f0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&o2(u,n[h])>=0&&(u.record.path!==n[h].record.path||!d0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!nh(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},p,m;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Or(1,{location:u});m=f.record.name,d=Le(th(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&th(u.params,f.keys.map(b=>b.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(b=>b.re.test(p)),f&&(d=f.parse(p),m=f.record.name);else{if(f=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!f)throw Or(1,{location:u,currentLocation:h});m=f.record.name,d=Le({},h.params,u.params),p=f.stringify(d)}const g=[];let x=f;for(;x;)g.unshift(x.record),x=x.parent;return{name:m,path:p,params:d,matched:g,meta:p2(g)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function th(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function h2(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:d2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function d2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function nh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function p2(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function ih(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function d0(t,e){return e.children.some(n=>n===t||d0(t,n))}const p0=/#/g,m2=/&/g,g2=/\//g,v2=/=/g,b2=/\?/g,m0=/\+/g,_2=/%5B/g,y2=/%5D/g,g0=/%5E/g,x2=/%60/g,v0=/%7B/g,w2=/%7C/g,b0=/%7D/g,S2=/%20/g;function _u(t){return encodeURI(""+t).replace(w2,"|").replace(_2,"[").replace(y2,"]")}function P2(t){return _u(t).replace(v0,"{").replace(b0,"}").replace(g0,"^")}function nc(t){return _u(t).replace(m0,"%2B").replace(S2,"+").replace(p0,"%23").replace(m2,"%26").replace(x2,"`").replace(v0,"{").replace(b0,"}").replace(g0,"^")}function T2(t){return nc(t).replace(v2,"%3D")}function E2(t){return _u(t).replace(p0,"%23").replace(b2,"%3F")}function C2(t){return t==null?"":E2(t).replace(g2,"%2F")}function Lo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function A2(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(m0," "),o=s.indexOf("="),a=Lo(o<0?s:s.slice(0,o)),l=o<0?null:Lo(s.slice(o+1));if(a in e){let c=e[a];un(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function rh(t){let e="";for(let n in t){const r=t[n];if(n=T2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(s=>s&&nc(s)):[r&&nc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function z2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const _0=Symbol(""),sh=Symbol(""),da=Symbol(""),yu=Symbol(""),ic=Symbol("");function Yr(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function R2(t,e,n){const r=()=>{t[e].delete(n)};oa(r),uu(r),cu(()=>{t[e].add(n)}),t[e].add(n)}function tO(t){const e=ht(_0,{}).value;!e||R2(e,"leaveGuards",t)}function ei(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Or(4,{from:n,to:e})):h instanceof Error?a(h):t2(h)?a(Or(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function $a(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(O2(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ei(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Dw(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ei(f,n,r,s,o)()}))}}return i}function O2(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oh(t){const e=ht(da),n=ht(yu),r=Me(()=>e.resolve(ut(t.to))),i=Me(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Rr.bind(null,u));if(f>-1)return f;const d=ah(l[c-2]);return c>1&&ah(u)===d&&h[h.length-1].path!==d?h.findIndex(Rr.bind(null,l[c-2])):f}),s=Me(()=>i.value>-1&&L2(n.params,r.value.params)),o=Me(()=>i.value>-1&&i.value===n.matched.length-1&&l0(n.params,r.value.params));function a(l={}){return k2(l)?e[ut(t.replace)?"replace":"push"](ut(t.to)).catch(hs):Promise.resolve()}return{route:r,href:Me(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const M2=tn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oh,setup(t,{slots:e}){const n=cn(oh(t)),{options:r}=ht(da),i=Me(()=>({[lh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[lh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:St("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),F2=M2;function k2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function L2(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!un(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function ah(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lh=(t,e,n)=>t!=null?t:e!=null?e:n,I2=tn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ht(ic),i=Me(()=>t.route||r.value),s=ht(sh,0),o=Me(()=>{let c=ut(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Me(()=>i.value.matched[o.value]);_r(sh,Me(()=>o.value+1)),_r(_0,a),_r(ic,i);const l=et();return an(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Rr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return ch(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=St(f,Le({},p,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return ch(n.default,{Component:g,route:c})||g}}});function ch(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const y0=I2;function D2(t){const e=f2(t.routes,t),n=t.parseQuery||A2,r=t.stringifyQuery||rh,i=t.history,s=Yr(),o=Yr(),a=Yr(),l=kl(Xn);let c=Xn;lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ga.bind(null,N=>""+N),h=Ga.bind(null,C2),f=Ga.bind(null,Lo);function d(N,Q){let W,J;return f0(N)?(W=e.getRecordMatcher(N),J=Q):J=N,e.addRoute(J,W)}function p(N){const Q=e.getRecordMatcher(N);Q&&e.removeRoute(Q)}function m(){return e.getRoutes().map(N=>N.record)}function g(N){return!!e.getRecordMatcher(N)}function x(N,Q){if(Q=Le({},Q||l.value),typeof N=="string"){const E=qa(n,N,Q.path),O=e.resolve({path:E.path},Q),U=i.createHref(E.fullPath);return Le(E,O,{params:f(O.params),hash:Lo(E.hash),redirectedFrom:void 0,href:U})}let W;if("path"in N)W=Le({},N,{path:qa(n,N.path,Q.path).path});else{const E=Le({},N.params);for(const O in E)E[O]==null&&delete E[O];W=Le({},N,{params:h(N.params)}),Q.params=h(Q.params)}const J=e.resolve(W,Q),se=N.hash||"";J.params=u(f(J.params));const Se=Bw(r,Le({},N,{hash:P2(se),path:J.path})),me=i.createHref(Se);return Le({fullPath:Se,hash:se,query:r===rh?z2(N.query):N.query||{}},J,{redirectedFrom:void 0,href:me})}function b(N){return typeof N=="string"?qa(n,N,l.value.path):Le({},N)}function _(N,Q){if(c!==N)return Or(8,{from:Q,to:N})}function v(N){return P(N)}function y(N){return v(Le(b(N),{replace:!0}))}function w(N){const Q=N.matched[N.matched.length-1];if(Q&&Q.redirect){const{redirect:W}=Q;let J=typeof W=="function"?W(N):W;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=b(J):{path:J},J.params={}),Le({query:N.query,hash:N.hash,params:"path"in J?{}:N.params},J)}}function P(N,Q){const W=c=x(N),J=l.value,se=N.state,Se=N.force,me=N.replace===!0,E=w(W);if(E)return P(Le(b(E),{state:typeof E=="object"?Le({},se,E.state):se,force:Se,replace:me}),Q||W);const O=W;O.redirectedFrom=Q;let U;return!Se&&Vw(r,J,W)&&(U=Or(16,{to:O,from:J}),pe(J,J,!0,!1)),(U?Promise.resolve(U):R(O,J)).catch(V=>Cn(V)?Cn(V,2)?V:ne(V):B(V,O,J)).then(V=>{if(V){if(Cn(V,2))return P(Le({replace:me},b(V.to),{state:typeof V.to=="object"?Le({},se,V.to.state):se,force:Se}),Q||O)}else V=D(O,J,!0,me,se);return k(O,J,V),V})}function T(N,Q){const W=_(N,Q);return W?Promise.reject(W):Promise.resolve()}function R(N,Q){let W;const[J,se,Se]=N2(N,Q);W=$a(J.reverse(),"beforeRouteLeave",N,Q);for(const E of J)E.leaveGuards.forEach(O=>{W.push(ei(O,N,Q))});const me=T.bind(null,N,Q);return W.push(me),ir(W).then(()=>{W=[];for(const E of s.list())W.push(ei(E,N,Q));return W.push(me),ir(W)}).then(()=>{W=$a(se,"beforeRouteUpdate",N,Q);for(const E of se)E.updateGuards.forEach(O=>{W.push(ei(O,N,Q))});return W.push(me),ir(W)}).then(()=>{W=[];for(const E of N.matched)if(E.beforeEnter&&!Q.matched.includes(E))if(un(E.beforeEnter))for(const O of E.beforeEnter)W.push(ei(O,N,Q));else W.push(ei(E.beforeEnter,N,Q));return W.push(me),ir(W)}).then(()=>(N.matched.forEach(E=>E.enterCallbacks={}),W=$a(Se,"beforeRouteEnter",N,Q),W.push(me),ir(W))).then(()=>{W=[];for(const E of o.list())W.push(ei(E,N,Q));return W.push(me),ir(W)}).catch(E=>Cn(E,8)?E:Promise.reject(E))}function k(N,Q,W){for(const J of a.list())J(N,Q,W)}function D(N,Q,W,J,se){const Se=_(N,Q);if(Se)return Se;const me=Q===Xn,E=lr?history.state:{};W&&(J||me?i.replace(N.fullPath,Le({scroll:me&&E&&E.scroll},se)):i.push(N.fullPath,se)),l.value=N,pe(N,Q,W,me),ne()}let M;function z(){M||(M=i.listen((N,Q,W)=>{if(!Ee.listening)return;const J=x(N),se=w(J);if(se){P(Le(se,{replace:!0}),J).catch(hs);return}c=J;const Se=l.value;lr&&Yw(Kf(Se.fullPath,W.delta),ha()),R(J,Se).catch(me=>Cn(me,12)?me:Cn(me,2)?(P(me.to,J).then(E=>{Cn(E,20)&&!W.delta&&W.type===Es.pop&&i.go(-1,!1)}).catch(hs),Promise.reject()):(W.delta&&i.go(-W.delta,!1),B(me,J,Se))).then(me=>{me=me||D(J,Se,!1),me&&(W.delta&&!Cn(me,8)?i.go(-W.delta,!1):W.type===Es.pop&&Cn(me,20)&&i.go(-1,!1)),k(J,Se,me)}).catch(hs)}))}let S=Yr(),A=Yr(),I;function B(N,Q,W){ne(N);const J=A.list();return J.length?J.forEach(se=>se(N,Q,W)):console.error(N),Promise.reject(N)}function $(){return I&&l.value!==Xn?Promise.resolve():new Promise((N,Q)=>{S.add([N,Q])})}function ne(N){return I||(I=!N,z(),S.list().forEach(([Q,W])=>N?W(N):Q()),S.reset()),N}function pe(N,Q,W,J){const{scrollBehavior:se}=t;if(!lr||!se)return Promise.resolve();const Se=!W&&Kw(Kf(N.fullPath,0))||(J||!W)&&history.state&&history.state.scroll||null;return Ki().then(()=>se(N,Q,Se)).then(me=>me&&Xw(me)).catch(me=>B(me,N,Q))}const ge=N=>i.go(N);let ve;const ze=new Set,Ee={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:g,getRoutes:m,resolve:x,options:t,push:v,replace:y,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:A.add,isReady:$,install(N){const Q=this;N.component("RouterLink",F2),N.component("RouterView",y0),N.config.globalProperties.$router=Q,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(l)}),lr&&!ve&&l.value===Xn&&(ve=!0,v(i.location).catch(se=>{}));const W={};for(const se in Xn)W[se]=Me(()=>l.value[se]);N.provide(da,Q),N.provide(yu,cn(W)),N.provide(ic,l);const J=N.unmount;ze.add(N),N.unmount=function(){ze.delete(N),ze.size<1&&(c=Xn,M&&M(),M=null,l.value=Xn,ve=!1,I=!1),J()}}};return Ee}function ir(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function N2(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Rr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Rr(c,l))||i.push(l))}return[n,r,i]}function U2(){return ht(da)}function x0(){return ht(yu)}const oe={},Sn=Jg({id:"maestroStore",state:()=>({showUI:!1,pageTransition:!0,theme:null,showPopupCookie:!0,showLoader:!0,showMenu:!1,eventMode:!1,soundEnabled:!0})}),ae={pageTransition:{name:"page-experience",mode:"out-in",onLeave:()=>{const t=Sn();t.pageTransition=!1},onEnter:()=>{const t=Sn();t.pageTransition=!0,t.theme="amethyst"}}},le={layout:"gui"},ce={pageTransition:{name:"page",mode:"out-in",onLeave:()=>{const t=Sn();t.pageTransition=!1},onEnter:()=>{const t=Sn();t.pageTransition=!0,t.theme="amethyst"}}},ue={pageTransition:{name:"page",mode:"out-in",onLeave:()=>{const t=Sn();t.pageTransition=!1},onEnter:()=>{const t=Sn();t.pageTransition=!0}}},fe={},he={pageTransition:{name:"page-topic",mode:"out-in",onLeave:()=>{const t=Sn();t.pageTransition=!1},onEnter:()=>{const t=Sn();t.pageTransition=!0}}},de={pageTransition:{name:"page",mode:"out-in",onLeave:()=>{const t=Sn();t.pageTransition=!1},onEnter:()=>{const t=Sn();t.pageTransition=!0,t.theme="amethyst"}}};var dp,pp,mp,gp,vp,bp,_p,yp,xp,wp,Sp,Pp,Tp,Ep,Cp,Ap,zp,Rp,Op,Mp,Fp,kp,Lp,Ip,Dp,Np,Up,Bp,Vp,Hp,jp,Wp,Gp,qp,$p,Xp,Yp,Kp,Qp,Zp,Jp,em,tm,nm,im,rm,sm,om,am,lm,cm,um,fm,hm,dm,pm,mm,gm,vm,bm,_m,ym,xm,wm;const uh=[{name:(dp=oe==null?void 0:oe.name)!=null?dp:"chat-workbench___en-GB",path:(pp=oe==null?void 0:oe.path)!=null?pp:"/en-GB/chat-workbench",file:"/opt/buildhome/repo/pages/chat-workbench.vue",children:[],meta:oe,alias:(oe==null?void 0:oe.alias)||[],redirect:(oe==null?void 0:oe.redirect)||void 0,component:()=>we(()=>import("./chat-workbench.a0052d33.js"),["./chat-workbench.a0052d33.js","./composables.6b3d1766.js","./useLogic.3fa0afca.js","./CardQRCode.825a73e1.js","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardQRCode.a65ca334.css","./chat-workbench.4906df8a.css"],import.meta.url).then(t=>t.default||t)},{name:(mp=oe==null?void 0:oe.name)!=null?mp:"chat-workbench___en-DE",path:(gp=oe==null?void 0:oe.path)!=null?gp:"/en-DE/chat-workbench",file:"/opt/buildhome/repo/pages/chat-workbench.vue",children:[],meta:oe,alias:(oe==null?void 0:oe.alias)||[],redirect:(oe==null?void 0:oe.redirect)||void 0,component:()=>we(()=>import("./chat-workbench.a0052d33.js"),["./chat-workbench.a0052d33.js","./composables.6b3d1766.js","./useLogic.3fa0afca.js","./CardQRCode.825a73e1.js","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardQRCode.a65ca334.css","./chat-workbench.4906df8a.css"],import.meta.url).then(t=>t.default||t)},{name:(vp=oe==null?void 0:oe.name)!=null?vp:"chat-workbench",path:(bp=oe==null?void 0:oe.path)!=null?bp:"/chat-workbench",file:"/opt/buildhome/repo/pages/chat-workbench.vue",children:[],meta:oe,alias:(oe==null?void 0:oe.alias)||[],redirect:(oe==null?void 0:oe.redirect)||void 0,component:()=>we(()=>import("./chat-workbench.a0052d33.js"),["./chat-workbench.a0052d33.js","./composables.6b3d1766.js","./useLogic.3fa0afca.js","./CardQRCode.825a73e1.js","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardQRCode.a65ca334.css","./chat-workbench.4906df8a.css"],import.meta.url).then(t=>t.default||t)},{name:(_p=oe==null?void 0:oe.name)!=null?_p:"chat-workbench___en-US",path:(yp=oe==null?void 0:oe.path)!=null?yp:"/en-US/chat-workbench",file:"/opt/buildhome/repo/pages/chat-workbench.vue",children:[],meta:oe,alias:(oe==null?void 0:oe.alias)||[],redirect:(oe==null?void 0:oe.redirect)||void 0,component:()=>we(()=>import("./chat-workbench.a0052d33.js"),["./chat-workbench.a0052d33.js","./composables.6b3d1766.js","./useLogic.3fa0afca.js","./CardQRCode.825a73e1.js","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardQRCode.a65ca334.css","./chat-workbench.4906df8a.css"],import.meta.url).then(t=>t.default||t)},{name:(xp=ae==null?void 0:ae.name)!=null?xp:"experience___en-GB",path:(wp=ae==null?void 0:ae.path)!=null?wp:"/en-GB/experience",file:"/opt/buildhome/repo/pages/experience.vue",children:[],meta:ae,alias:(ae==null?void 0:ae.alias)||[],redirect:(ae==null?void 0:ae.redirect)||void 0,component:()=>we(()=>import("./experience.08bf69e4.js"),["./experience.08bf69e4.js","./ButtonPrimary.2d46e3d0.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./index.8b06f502.js","./useLogic.3fa0afca.js","./howler.4f5ca63d.js","./Card.350804a3.js","./Card.989848e6.css","./composables.6b3d1766.js","./FormInput.7b6d6974.js","./FormInput.40029048.css","./experience.5cdb2687.css"],import.meta.url).then(t=>t.default||t)},{name:(Sp=ae==null?void 0:ae.name)!=null?Sp:"experience___en-DE",path:(Pp=ae==null?void 0:ae.path)!=null?Pp:"/en-DE/experience",file:"/opt/buildhome/repo/pages/experience.vue",children:[],meta:ae,alias:(ae==null?void 0:ae.alias)||[],redirect:(ae==null?void 0:ae.redirect)||void 0,component:()=>we(()=>import("./experience.08bf69e4.js"),["./experience.08bf69e4.js","./ButtonPrimary.2d46e3d0.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./index.8b06f502.js","./useLogic.3fa0afca.js","./howler.4f5ca63d.js","./Card.350804a3.js","./Card.989848e6.css","./composables.6b3d1766.js","./FormInput.7b6d6974.js","./FormInput.40029048.css","./experience.5cdb2687.css"],import.meta.url).then(t=>t.default||t)},{name:(Tp=ae==null?void 0:ae.name)!=null?Tp:"experience",path:(Ep=ae==null?void 0:ae.path)!=null?Ep:"/experience",file:"/opt/buildhome/repo/pages/experience.vue",children:[],meta:ae,alias:(ae==null?void 0:ae.alias)||[],redirect:(ae==null?void 0:ae.redirect)||void 0,component:()=>we(()=>import("./experience.08bf69e4.js"),["./experience.08bf69e4.js","./ButtonPrimary.2d46e3d0.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./index.8b06f502.js","./useLogic.3fa0afca.js","./howler.4f5ca63d.js","./Card.350804a3.js","./Card.989848e6.css","./composables.6b3d1766.js","./FormInput.7b6d6974.js","./FormInput.40029048.css","./experience.5cdb2687.css"],import.meta.url).then(t=>t.default||t)},{name:(Cp=ae==null?void 0:ae.name)!=null?Cp:"experience___en-US",path:(Ap=ae==null?void 0:ae.path)!=null?Ap:"/en-US/experience",file:"/opt/buildhome/repo/pages/experience.vue",children:[],meta:ae,alias:(ae==null?void 0:ae.alias)||[],redirect:(ae==null?void 0:ae.redirect)||void 0,component:()=>we(()=>import("./experience.08bf69e4.js"),["./experience.08bf69e4.js","./ButtonPrimary.2d46e3d0.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./index.8b06f502.js","./useLogic.3fa0afca.js","./howler.4f5ca63d.js","./Card.350804a3.js","./Card.989848e6.css","./composables.6b3d1766.js","./FormInput.7b6d6974.js","./FormInput.40029048.css","./experience.5cdb2687.css"],import.meta.url).then(t=>t.default||t)},{name:(zp=le==null?void 0:le.name)!=null?zp:"gui___en-GB",path:(Rp=le==null?void 0:le.path)!=null?Rp:"/en-GB/gui",file:"/opt/buildhome/repo/pages/gui.vue",children:[],meta:le,alias:(le==null?void 0:le.alias)||[],redirect:(le==null?void 0:le.redirect)||void 0,component:()=>we(()=>import("./gui.e0d54292.js"),["./gui.e0d54292.js","./composables.6b3d1766.js","./gui.888840fc.css"],import.meta.url).then(t=>t.default||t)},{name:(Op=le==null?void 0:le.name)!=null?Op:"gui___en-DE",path:(Mp=le==null?void 0:le.path)!=null?Mp:"/en-DE/gui",file:"/opt/buildhome/repo/pages/gui.vue",children:[],meta:le,alias:(le==null?void 0:le.alias)||[],redirect:(le==null?void 0:le.redirect)||void 0,component:()=>we(()=>import("./gui.e0d54292.js"),["./gui.e0d54292.js","./composables.6b3d1766.js","./gui.888840fc.css"],import.meta.url).then(t=>t.default||t)},{name:(Fp=le==null?void 0:le.name)!=null?Fp:"gui",path:(kp=le==null?void 0:le.path)!=null?kp:"/gui",file:"/opt/buildhome/repo/pages/gui.vue",children:[],meta:le,alias:(le==null?void 0:le.alias)||[],redirect:(le==null?void 0:le.redirect)||void 0,component:()=>we(()=>import("./gui.e0d54292.js"),["./gui.e0d54292.js","./composables.6b3d1766.js","./gui.888840fc.css"],import.meta.url).then(t=>t.default||t)},{name:(Lp=le==null?void 0:le.name)!=null?Lp:"gui___en-US",path:(Ip=le==null?void 0:le.path)!=null?Ip:"/en-US/gui",file:"/opt/buildhome/repo/pages/gui.vue",children:[],meta:le,alias:(le==null?void 0:le.alias)||[],redirect:(le==null?void 0:le.redirect)||void 0,component:()=>we(()=>import("./gui.e0d54292.js"),["./gui.e0d54292.js","./composables.6b3d1766.js","./gui.888840fc.css"],import.meta.url).then(t=>t.default||t)},{name:(Dp=ce==null?void 0:ce.name)!=null?Dp:"index___en-GB",path:(Np=ce==null?void 0:ce.path)!=null?Np:"/en-GB",file:"/opt/buildhome/repo/pages/index.vue",children:[],meta:ce,alias:(ce==null?void 0:ce.alias)||[],redirect:(ce==null?void 0:ce.redirect)||void 0,component:()=>we(()=>import("./index.7499490c.js"),["./index.7499490c.js","./ButtonPrimary.2d46e3d0.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./composables.6b3d1766.js","./index.8b06f502.js","./index.70e01fd3.css"],import.meta.url).then(t=>t.default||t)},{name:(Up=ce==null?void 0:ce.name)!=null?Up:"index___en-DE",path:(Bp=ce==null?void 0:ce.path)!=null?Bp:"/en-DE",file:"/opt/buildhome/repo/pages/index.vue",children:[],meta:ce,alias:(ce==null?void 0:ce.alias)||[],redirect:(ce==null?void 0:ce.redirect)||void 0,component:()=>we(()=>import("./index.7499490c.js"),["./index.7499490c.js","./ButtonPrimary.2d46e3d0.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./composables.6b3d1766.js","./index.8b06f502.js","./index.70e01fd3.css"],import.meta.url).then(t=>t.default||t)},{name:(Vp=ce==null?void 0:ce.name)!=null?Vp:"index",path:(Hp=ce==null?void 0:ce.path)!=null?Hp:"/",file:"/opt/buildhome/repo/pages/index.vue",children:[],meta:ce,alias:(ce==null?void 0:ce.alias)||[],redirect:(ce==null?void 0:ce.redirect)||void 0,component:()=>we(()=>import("./index.7499490c.js"),["./index.7499490c.js","./ButtonPrimary.2d46e3d0.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./composables.6b3d1766.js","./index.8b06f502.js","./index.70e01fd3.css"],import.meta.url).then(t=>t.default||t)},{name:(jp=ce==null?void 0:ce.name)!=null?jp:"index___en-US",path:(Wp=ce==null?void 0:ce.path)!=null?Wp:"/en-US",file:"/opt/buildhome/repo/pages/index.vue",children:[],meta:ce,alias:(ce==null?void 0:ce.alias)||[],redirect:(ce==null?void 0:ce.redirect)||void 0,component:()=>we(()=>import("./index.7499490c.js"),["./index.7499490c.js","./ButtonPrimary.2d46e3d0.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./composables.6b3d1766.js","./index.8b06f502.js","./index.70e01fd3.css"],import.meta.url).then(t=>t.default||t)},{name:(Gp=ue==null?void 0:ue.name)!=null?Gp:"results___en-GB",path:(qp=ue==null?void 0:ue.path)!=null?qp:"/en-GB/results",file:"/opt/buildhome/repo/pages/results.vue",children:[],meta:ue,alias:(ue==null?void 0:ue.alias)||[],redirect:(ue==null?void 0:ue.redirect)||void 0,component:()=>we(()=>import("./results.034bca33.js"),["./results.034bca33.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./Share.6d1341f7.js","./useLogic.3fa0afca.js","./Share.555e2a58.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./composables.6b3d1766.js","./CardQRCode.825a73e1.js","./CardQRCode.a65ca334.css","./results.82237bcc.css"],import.meta.url).then(t=>t.default||t)},{name:($p=ue==null?void 0:ue.name)!=null?$p:"results___en-DE",path:(Xp=ue==null?void 0:ue.path)!=null?Xp:"/en-DE/results",file:"/opt/buildhome/repo/pages/results.vue",children:[],meta:ue,alias:(ue==null?void 0:ue.alias)||[],redirect:(ue==null?void 0:ue.redirect)||void 0,component:()=>we(()=>import("./results.034bca33.js"),["./results.034bca33.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./Share.6d1341f7.js","./useLogic.3fa0afca.js","./Share.555e2a58.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./composables.6b3d1766.js","./CardQRCode.825a73e1.js","./CardQRCode.a65ca334.css","./results.82237bcc.css"],import.meta.url).then(t=>t.default||t)},{name:(Yp=ue==null?void 0:ue.name)!=null?Yp:"results",path:(Kp=ue==null?void 0:ue.path)!=null?Kp:"/results",file:"/opt/buildhome/repo/pages/results.vue",children:[],meta:ue,alias:(ue==null?void 0:ue.alias)||[],redirect:(ue==null?void 0:ue.redirect)||void 0,component:()=>we(()=>import("./results.034bca33.js"),["./results.034bca33.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./Share.6d1341f7.js","./useLogic.3fa0afca.js","./Share.555e2a58.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./composables.6b3d1766.js","./CardQRCode.825a73e1.js","./CardQRCode.a65ca334.css","./results.82237bcc.css"],import.meta.url).then(t=>t.default||t)},{name:(Qp=ue==null?void 0:ue.name)!=null?Qp:"results___en-US",path:(Zp=ue==null?void 0:ue.path)!=null?Zp:"/en-US/results",file:"/opt/buildhome/repo/pages/results.vue",children:[],meta:ue,alias:(ue==null?void 0:ue.alias)||[],redirect:(ue==null?void 0:ue.redirect)||void 0,component:()=>we(()=>import("./results.034bca33.js"),["./results.034bca33.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./Share.6d1341f7.js","./useLogic.3fa0afca.js","./Share.555e2a58.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./composables.6b3d1766.js","./CardQRCode.825a73e1.js","./CardQRCode.a65ca334.css","./results.82237bcc.css"],import.meta.url).then(t=>t.default||t)},{name:(Jp=fe==null?void 0:fe.name)!=null?Jp:"styleguide___en-GB",path:(em=fe==null?void 0:fe.path)!=null?em:"/en-GB/styleguide",file:"/opt/buildhome/repo/pages/styleguide.vue",children:[],meta:fe,alias:(fe==null?void 0:fe.alias)||[],redirect:(fe==null?void 0:fe.redirect)||void 0,component:()=>we(()=>import("./styleguide.08a342c8.js"),["./styleguide.08a342c8.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./ButtonPrimary.2d46e3d0.js","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./CardStream.c755cd27.js","./Card.350804a3.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./SoundToggle.3a5868ba.js","./howler.4f5ca63d.js","./SoundToggle.00c27478.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./FormInput.7b6d6974.js","./FormInput.40029048.css","./composables.6b3d1766.js","./CardQRCode.825a73e1.js","./CardQRCode.a65ca334.css","./styleguide.596780fe.css"],import.meta.url).then(t=>t.default||t)},{name:(tm=fe==null?void 0:fe.name)!=null?tm:"styleguide___en-DE",path:(nm=fe==null?void 0:fe.path)!=null?nm:"/en-DE/styleguide",file:"/opt/buildhome/repo/pages/styleguide.vue",children:[],meta:fe,alias:(fe==null?void 0:fe.alias)||[],redirect:(fe==null?void 0:fe.redirect)||void 0,component:()=>we(()=>import("./styleguide.08a342c8.js"),["./styleguide.08a342c8.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./ButtonPrimary.2d46e3d0.js","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./CardStream.c755cd27.js","./Card.350804a3.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./SoundToggle.3a5868ba.js","./howler.4f5ca63d.js","./SoundToggle.00c27478.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./FormInput.7b6d6974.js","./FormInput.40029048.css","./composables.6b3d1766.js","./CardQRCode.825a73e1.js","./CardQRCode.a65ca334.css","./styleguide.596780fe.css"],import.meta.url).then(t=>t.default||t)},{name:(im=fe==null?void 0:fe.name)!=null?im:"styleguide",path:(rm=fe==null?void 0:fe.path)!=null?rm:"/styleguide",file:"/opt/buildhome/repo/pages/styleguide.vue",children:[],meta:fe,alias:(fe==null?void 0:fe.alias)||[],redirect:(fe==null?void 0:fe.redirect)||void 0,component:()=>we(()=>import("./styleguide.08a342c8.js"),["./styleguide.08a342c8.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./ButtonPrimary.2d46e3d0.js","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./CardStream.c755cd27.js","./Card.350804a3.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./SoundToggle.3a5868ba.js","./howler.4f5ca63d.js","./SoundToggle.00c27478.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./FormInput.7b6d6974.js","./FormInput.40029048.css","./composables.6b3d1766.js","./CardQRCode.825a73e1.js","./CardQRCode.a65ca334.css","./styleguide.596780fe.css"],import.meta.url).then(t=>t.default||t)},{name:(sm=fe==null?void 0:fe.name)!=null?sm:"styleguide___en-US",path:(om=fe==null?void 0:fe.path)!=null?om:"/en-US/styleguide",file:"/opt/buildhome/repo/pages/styleguide.vue",children:[],meta:fe,alias:(fe==null?void 0:fe.alias)||[],redirect:(fe==null?void 0:fe.redirect)||void 0,component:()=>we(()=>import("./styleguide.08a342c8.js"),["./styleguide.08a342c8.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./ButtonPrimary.2d46e3d0.js","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./CardStream.c755cd27.js","./Card.350804a3.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./SoundToggle.3a5868ba.js","./howler.4f5ca63d.js","./SoundToggle.00c27478.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./FormInput.7b6d6974.js","./FormInput.40029048.css","./composables.6b3d1766.js","./CardQRCode.825a73e1.js","./CardQRCode.a65ca334.css","./styleguide.596780fe.css"],import.meta.url).then(t=>t.default||t)},{name:(am=he==null?void 0:he.name)!=null?am:"topics-slug___en-GB",path:(lm=he==null?void 0:he.path)!=null?lm:"/en-GB/topics/:slug",file:"/opt/buildhome/repo/pages/topics/[slug].vue",children:[],meta:he,alias:(he==null?void 0:he.alias)||[],redirect:(he==null?void 0:he.redirect)||void 0,component:()=>we(()=>import("./_slug_.24e97edf.js"),["./_slug_.24e97edf.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./composables.6b3d1766.js","./_slug_.694f452b.css"],import.meta.url).then(t=>t.default||t)},{name:(cm=he==null?void 0:he.name)!=null?cm:"topics-slug___en-DE",path:(um=he==null?void 0:he.path)!=null?um:"/en-DE/topics/:slug",file:"/opt/buildhome/repo/pages/topics/[slug].vue",children:[],meta:he,alias:(he==null?void 0:he.alias)||[],redirect:(he==null?void 0:he.redirect)||void 0,component:()=>we(()=>import("./_slug_.24e97edf.js"),["./_slug_.24e97edf.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./composables.6b3d1766.js","./_slug_.694f452b.css"],import.meta.url).then(t=>t.default||t)},{name:(fm=he==null?void 0:he.name)!=null?fm:"topics-slug",path:(hm=he==null?void 0:he.path)!=null?hm:"/topics/:slug",file:"/opt/buildhome/repo/pages/topics/[slug].vue",children:[],meta:he,alias:(he==null?void 0:he.alias)||[],redirect:(he==null?void 0:he.redirect)||void 0,component:()=>we(()=>import("./_slug_.24e97edf.js"),["./_slug_.24e97edf.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./composables.6b3d1766.js","./_slug_.694f452b.css"],import.meta.url).then(t=>t.default||t)},{name:(dm=he==null?void 0:he.name)!=null?dm:"topics-slug___en-US",path:(pm=he==null?void 0:he.path)!=null?pm:"/en-US/topics/:slug",file:"/opt/buildhome/repo/pages/topics/[slug].vue",children:[],meta:he,alias:(he==null?void 0:he.alias)||[],redirect:(he==null?void 0:he.redirect)||void 0,component:()=>we(()=>import("./_slug_.24e97edf.js"),["./_slug_.24e97edf.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./InfoText.162bb093.js","./InfoText.a0a3f871.css","./composables.6b3d1766.js","./_slug_.694f452b.css"],import.meta.url).then(t=>t.default||t)},{name:(mm=de==null?void 0:de.name)!=null?mm:"topics___en-GB",path:(gm=de==null?void 0:de.path)!=null?gm:"/en-GB/topics",file:"/opt/buildhome/repo/pages/topics/index.vue",children:[],meta:de,alias:(de==null?void 0:de.alias)||[],redirect:(de==null?void 0:de.redirect)||void 0,component:()=>we(()=>import("./index.e9b209bb.js"),["./index.e9b209bb.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./composables.6b3d1766.js","./index.0b87559a.css"],import.meta.url).then(t=>t.default||t)},{name:(vm=de==null?void 0:de.name)!=null?vm:"topics___en-DE",path:(bm=de==null?void 0:de.path)!=null?bm:"/en-DE/topics",file:"/opt/buildhome/repo/pages/topics/index.vue",children:[],meta:de,alias:(de==null?void 0:de.alias)||[],redirect:(de==null?void 0:de.redirect)||void 0,component:()=>we(()=>import("./index.e9b209bb.js"),["./index.e9b209bb.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./composables.6b3d1766.js","./index.0b87559a.css"],import.meta.url).then(t=>t.default||t)},{name:(_m=de==null?void 0:de.name)!=null?_m:"topics",path:(ym=de==null?void 0:de.path)!=null?ym:"/topics",file:"/opt/buildhome/repo/pages/topics/index.vue",children:[],meta:de,alias:(de==null?void 0:de.alias)||[],redirect:(de==null?void 0:de.redirect)||void 0,component:()=>we(()=>import("./index.e9b209bb.js"),["./index.e9b209bb.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./composables.6b3d1766.js","./index.0b87559a.css"],import.meta.url).then(t=>t.default||t)},{name:(xm=de==null?void 0:de.name)!=null?xm:"topics___en-US",path:(wm=de==null?void 0:de.path)!=null?wm:"/en-US/topics",file:"/opt/buildhome/repo/pages/topics/index.vue",children:[],meta:de,alias:(de==null?void 0:de.alias)||[],redirect:(de==null?void 0:de.redirect)||void 0,component:()=>we(()=>import("./index.e9b209bb.js"),["./index.e9b209bb.js","./CardStream.c755cd27.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./Card.350804a3.js","./CallToAction.a96c55e9.js","./Card.989848e6.css","./CardStream.0039a0d8.css","./useContent.32e80701.js","./index.8b06f502.js","./useContent.2c974801.css","./composables.6b3d1766.js","./index.0b87559a.css"],import.meta.url).then(t=>t.default||t)}],B2={scrollBehavior(t,e,n){const r=pt();let i=n||void 0;if(!i&&e&&t&&t.meta.scrollToTop!==!1&&V2(e,t)&&(i={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:fh(t.hash)}}const s=a=>{var l;return!!((l=a.meta.pageTransition)!=null?l:ec)},o=s(e)&&s(t)?"page:transition:finish":"page:finish";return new Promise(a=>{r.hooks.hookOnce(o,async()=>{await Ki(),t.hash&&(i={el:t.hash,top:fh(t.hash)}),a(i)})})}};function fh(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function V2(t,e){const n=t.matched[0]===e.matched[0];return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const H2={},An={...H2,...B2},j2=$g(async t=>{var i;let e,n;if(!((i=t.meta)!=null&&i.validate))return;const r=([e,n]=cr(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);return typeof r=="boolean"?r:Gg(r)}),W2=[j2],Xa={};function G2(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){const a=i.includes(t.slice(s))?t.slice(s).length:1;let l=i.slice(a);return l[0]!=="/"&&(l="/"+l),If(l,"")}return If(n,t)+r+i}const q2=En(async t=>{var p,m,g,x;let e,n,r=jg().app.baseURL;An.hashMode&&!r.includes("#")&&(r+="#");const i=(m=(p=An.history)==null?void 0:p.call(An,r))!=null?m:An.hashMode?e2(r):u0(r),s=(x=(g=An.routes)==null?void 0:g.call(An,uh))!=null?x:uh,o=G2(r,window.location),a=D2({...An,history:i,routes:s});t.vueApp.use(a);const l=kl(a.currentRoute.value);a.afterEach((b,_)=>{l.value=_}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const c=kl(a.resolve(o)),u=()=>{c.value=a.currentRoute.value};t.hook("page:finish",u),a.afterEach((b,_)=>{var v,y,w,P;((y=(v=b.matched[0])==null?void 0:v.components)==null?void 0:y.default)===((P=(w=_.matched[0])==null?void 0:w.components)==null?void 0:P.default)&&u()});const h={};for(const b in c.value)h[b]=Me(()=>c.value[b]);t._route=cn(h),t._middleware=t._middleware||{global:[],named:{}};const f=fa();try{[e,n]=cr(()=>a.isReady()),await e,n()}catch(b){Zn(t,ns,[b])}const d=qg("_layout");return a.beforeEach(async(b,_)=>{var y,w;b.meta=cn(b.meta),t.isHydrating&&(b.meta.layout=(y=d.value)!=null?y:b.meta.layout),t._processingMiddleware=!0;const v=new Set([...W2,...t._middleware.global]);for(const P of b.matched){const T=P.meta.middleware;if(!!T)if(Array.isArray(T))for(const R of T)v.add(R);else v.add(T)}for(const P of v){const T=typeof P=="string"?t._middleware.named[P]||await((w=Xa[P])==null?void 0:w.call(Xa).then(k=>k.default||k)):P;if(!T)throw new Error(`Unknown route middleware: '${P}'.`);const R=await Zn(t,T,[b,_]);if(!t.payload.serverRendered&&t.isHydrating&&(R===!1||R instanceof Error)){const k=R||Kl({statusCode:404,statusMessage:`Page Not Found: ${o}`});return await Zn(t,ns,[k]),!1}if(R||R===!1)return R}}),a.afterEach(async b=>{delete t._processingMiddleware,!t.isHydrating&&f.value&&await Zn(t,Cx),b.matched.length===0&&Zn(t,ns,[Kl({statusCode:404,fatal:!1,statusMessage:`Page not found: ${b.fullPath}`})])}),t.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(b){Zn(t,ns,[b])}}),{provide:{router:a}}}),$2=En(()=>{});var Io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nO(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C={exports:{}},Fe={};/*!
  * shared v9.3.0-beta.11
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(Fe,"__esModule",{value:!0});const X2=typeof window<"u";let Y2,K2;const Q2=/\{([0-9a-zA-Z]+)\}/g;function Z2(t,...e){return e.length===1&&xu(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(Q2,(n,r)=>e.hasOwnProperty(r)?e[r]:"")}const J2=(t,e=!1)=>e?Symbol.for(t):Symbol(t),eS=(t,e,n)=>w0({l:t,k:e,s:n}),w0=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),tS=t=>typeof t=="number"&&isFinite(t),nS=t=>pa(t)==="[object Date]",iS=t=>pa(t)==="[object RegExp]",rS=t=>Su(t)&&Object.keys(t).length===0;function sS(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const oS=Object.assign;let hh;const aS=()=>hh||(hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof Io<"u"?Io:{});function lS(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const cS=Object.prototype.hasOwnProperty;function uS(t,e){return cS.call(t,e)}const S0=Array.isArray,rc=t=>typeof t=="function",fS=t=>typeof t=="string",hS=t=>typeof t=="boolean",dS=t=>typeof t=="symbol",xu=t=>t!==null&&typeof t=="object",pS=t=>xu(t)&&rc(t.then)&&rc(t.catch),wu=Object.prototype.toString,pa=t=>wu.call(t),Su=t=>pa(t)==="[object Object]",mS=t=>t==null?"":S0(t)||Su(t)&&t.toString===wu?JSON.stringify(t,null,2):String(t),dh=2;function gS(t,e=0,n=t.length){const r=t.split(/\r?\n/);let i=0;const s=[];for(let o=0;o<r.length;o++)if(i+=r[o].length+1,i>=e){for(let a=o-dh;a<=o+dh||n>i;a++){if(a<0||a>=r.length)continue;const l=a+1;s.push(`${l}${" ".repeat(3-String(l).length)}|  ${r[a]}`);const c=r[a].length;if(a===o){const u=e-(i-c)+1,h=Math.max(1,n>i?c-u:n-e);s.push("   |  "+" ".repeat(u)+"^".repeat(h))}else if(a>o){if(n>i){const u=Math.max(Math.min(n-i,c),1);s.push("   |  "+"^".repeat(u))}i+=c+1}}break}return s.join(`
`)}function vS(){const t=new Map;return{events:t,on(n,r){const i=t.get(n);i&&i.push(r)||t.set(n,[r])},off(n,r){const i=t.get(n);i&&i.splice(i.indexOf(r)>>>0,1)},emit(n,r){(t.get(n)||[]).slice().map(i=>i(r)),(t.get("*")||[]).slice().map(i=>i(n,r))}}}Fe.assign=oS;Fe.createEmitter=vS;Fe.escapeHtml=lS;Fe.format=Z2;Fe.friendlyJSONstringify=w0;Fe.generateCodeFrame=gS;Fe.generateFormatCacheKey=eS;Fe.getGlobalThis=aS;Fe.hasOwn=uS;Fe.inBrowser=X2;Fe.isArray=S0;Fe.isBoolean=hS;Fe.isDate=nS;Fe.isEmptyObject=rS;Fe.isFunction=rc;Fe.isNumber=tS;Fe.isObject=xu;Fe.isPlainObject=Su;Fe.isPromise=pS;Fe.isRegExp=iS;Fe.isString=fS;Fe.isSymbol=dS;Fe.makeSymbol=J2;Fe.mark=Y2;Fe.measure=K2;Fe.objectToString=wu;Fe.toDisplayString=mS;Fe.toTypeString=pa;Fe.warn=sS;(function(t){t.exports=Fe})(C);/*!
  * message-compiler v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const P0={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function T0(t,e,n={}){const{domain:r,messages:i,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=r,a}/*!
  * devtools-if v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const E0={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const yi=[];yi[0]={w:[0],i:[3,0],["["]:[4],o:[7]};yi[1]={w:[1],["."]:[2],["["]:[4],o:[7]};yi[2]={w:[2],i:[3,0],[0]:[3,0]};yi[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};yi[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};yi[5]={["'"]:[4,0],o:8,l:[5,0]};yi[6]={['"']:[4,0],o:8,l:[6,0]};const bS=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function _S(t){return bS.test(t)}function yS(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function xS(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function wS(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:_S(e)?yS(e):"*"+e}function SS(t){const e=[];let n=-1,r=0,i=0,s,o,a,l,c,u,h;const f=[];f[0]=()=>{o===void 0?o=a:o+=a},f[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},f[2]=()=>{f[0](),i++},f[3]=()=>{if(i>0)i--,r=4,f[0]();else{if(i=0,o===void 0||(o=wS(o),o===!1))return!1;f[1]()}};function d(){const p=t[n+1];if(r===5&&p==="'"||r===6&&p==='"')return n++,a="\\"+p,f[0](),!0}for(;r!==null;)if(n++,s=t[n],!(s==="\\"&&d())){if(l=xS(s),h=yi[r],c=h[l]||h.l||8,c===8||(r=c[0],c[1]!==void 0&&(u=f[c[1]],u&&(a=s,u()===!1))))return;if(r===7)return e}}const ph=new Map;function PS(t,e){return C.exports.isObject(t)?t[e]:null}function TS(t,e){if(!C.exports.isObject(t))return null;let n=ph.get(e);if(n||(n=SS(e),n&&ph.set(e,n)),!n)return null;const r=n.length;let i=t,s=0;for(;s<r;){const o=i[n[s]];if(o===void 0)return null;i=o,s++}return i}const ES=t=>t,CS=t=>"",AS="text",zS=t=>t.length===0?"":t.join(""),RS=C.exports.toDisplayString;function mh(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function OS(t){const e=C.exports.isNumber(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(C.exports.isNumber(t.named.count)||C.exports.isNumber(t.named.n))?C.exports.isNumber(t.named.count)?t.named.count:C.exports.isNumber(t.named.n)?t.named.n:e:e}function MS(t,e){e.count||(e.count=t),e.n||(e.n=t)}function FS(t={}){const e=t.locale,n=OS(t),r=C.exports.isObject(t.pluralRules)&&C.exports.isString(e)&&C.exports.isFunction(t.pluralRules[e])?t.pluralRules[e]:mh,i=C.exports.isObject(t.pluralRules)&&C.exports.isString(e)&&C.exports.isFunction(t.pluralRules[e])?mh:void 0,s=x=>x[r(n,x.length,i)],o=t.list||[],a=x=>o[x],l=t.named||{};C.exports.isNumber(t.pluralIndex)&&MS(n,l);const c=x=>l[x];function u(x){const b=C.exports.isFunction(t.messages)?t.messages(x):C.exports.isObject(t.messages)?t.messages[x]:!1;return b||(t.parent?t.parent.message(x):CS)}const h=x=>t.modifiers?t.modifiers[x]:ES,f=C.exports.isPlainObject(t.processor)&&C.exports.isFunction(t.processor.normalize)?t.processor.normalize:zS,d=C.exports.isPlainObject(t.processor)&&C.exports.isFunction(t.processor.interpolate)?t.processor.interpolate:RS,p=C.exports.isPlainObject(t.processor)&&C.exports.isString(t.processor.type)?t.processor.type:AS,g={list:a,named:c,plural:s,linked:(x,...b)=>{const[_,v]=b;let y="text",w="";b.length===1?C.exports.isObject(_)?(w=_.modifier||w,y=_.type||y):C.exports.isString(_)&&(w=_||w):b.length===2&&(C.exports.isString(_)&&(w=_||w),C.exports.isString(v)&&(y=v||y));let P=u(x)(g);return y==="vnode"&&C.exports.isArray(P)&&w&&(P=P[0]),w?h(w)(P,y):P},message:u,type:p,interpolate:d,normalize:f};return g}let Cs=null;function kS(t){Cs=t}function LS(t,e,n){Cs&&Cs.emit(E0.I18nInit,{timestamp:Date.now(),i18n:t,version:e,meta:n})}const IS=DS(E0.FunctionTranslate);function DS(t){return e=>Cs&&Cs.emit(t,e)}const NS={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function US(t,e,n){return[...new Set([n,...C.exports.isArray(e)?e:C.exports.isObject(e)?Object.keys(e):C.exports.isString(e)?[e]:[n]])]}function C0(t,e,n){const r=C.exports.isString(n)?n:Pu,i=t;i.__localeChainCache||(i.__localeChainCache=new Map);let s=i.__localeChainCache.get(r);if(!s){s=[];let o=[n];for(;C.exports.isArray(o);)o=gh(s,o,e);const a=C.exports.isArray(e)||!C.exports.isPlainObject(e)?e:e.default?e.default:null;o=C.exports.isString(a)?[a]:a,C.exports.isArray(o)&&gh(s,o,!1),i.__localeChainCache.set(r,s)}return s}function gh(t,e,n){let r=!0;for(let i=0;i<e.length&&C.exports.isBoolean(r);i++){const s=e[i];C.exports.isString(s)&&(r=BS(t,e[i],n))}return r}function BS(t,e,n){let r;const i=e.split("-");do{const s=i.join("-");r=VS(t,s,n),i.splice(-1,1)}while(i.length&&r===!0);return r}function VS(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const i=e.replace(/!/g,"");t.push(i),(C.exports.isArray(n)||C.exports.isPlainObject(n))&&n[i]&&(r=n[i])}return r}const HS="9.3.0-beta.16",ma=-1,Pu="en-US",vh="",bh=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function jS(){return{upper:(t,e)=>e==="text"&&C.exports.isString(t)?t.toUpperCase():e==="vnode"&&C.exports.isObject(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&C.exports.isString(t)?t.toLowerCase():e==="vnode"&&C.exports.isObject(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&C.exports.isString(t)?bh(t):e==="vnode"&&C.exports.isObject(t)&&"__v_isVNode"in t?bh(t.children):t}}let WS,A0;function GS(t){A0=t}let z0;function qS(t){z0=t}let R0=null;const _h=t=>{R0=t},$S=()=>R0;let O0=null;const yh=t=>{O0=t},XS=()=>O0;let xh=0;function YS(t={}){const e=C.exports.isString(t.version)?t.version:HS,n=C.exports.isString(t.locale)?t.locale:Pu,r=C.exports.isArray(t.fallbackLocale)||C.exports.isPlainObject(t.fallbackLocale)||C.exports.isString(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:n,i=C.exports.isPlainObject(t.messages)?t.messages:{[n]:{}},s=C.exports.isPlainObject(t.datetimeFormats)?t.datetimeFormats:{[n]:{}},o=C.exports.isPlainObject(t.numberFormats)?t.numberFormats:{[n]:{}},a=C.exports.assign({},t.modifiers||{},jS()),l=t.pluralRules||{},c=C.exports.isFunction(t.missing)?t.missing:null,u=C.exports.isBoolean(t.missingWarn)||C.exports.isRegExp(t.missingWarn)?t.missingWarn:!0,h=C.exports.isBoolean(t.fallbackWarn)||C.exports.isRegExp(t.fallbackWarn)?t.fallbackWarn:!0,f=!!t.fallbackFormat,d=!!t.unresolving,p=C.exports.isFunction(t.postTranslation)?t.postTranslation:null,m=C.exports.isPlainObject(t.processor)?t.processor:null,g=C.exports.isBoolean(t.warnHtmlMessage)?t.warnHtmlMessage:!0,x=!!t.escapeParameter,b=C.exports.isFunction(t.messageCompiler)?t.messageCompiler:WS,_=C.exports.isFunction(t.messageResolver)?t.messageResolver:A0||PS,v=C.exports.isFunction(t.localeFallbacker)?t.localeFallbacker:z0||US,y=C.exports.isObject(t.fallbackContext)?t.fallbackContext:void 0,w=C.exports.isFunction(t.onWarn)?t.onWarn:C.exports.warn,P=t,T=C.exports.isObject(P.__datetimeFormatters)?P.__datetimeFormatters:new Map,R=C.exports.isObject(P.__numberFormatters)?P.__numberFormatters:new Map,k=C.exports.isObject(P.__meta)?P.__meta:{};xh++;const D={version:e,cid:xh,locale:n,fallbackLocale:r,messages:i,modifiers:a,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:h,fallbackFormat:f,unresolving:d,postTranslation:p,processor:m,warnHtmlMessage:g,escapeParameter:x,messageCompiler:b,messageResolver:_,localeFallbacker:v,fallbackContext:y,onWarn:w,__meta:k};return D.datetimeFormats=s,D.numberFormats=o,D.__datetimeFormatters=T,D.__numberFormatters=R,__INTLIFY_PROD_DEVTOOLS__&&LS(D,e,k),D}function Tu(t,e,n,r,i){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,i);return C.exports.isString(a)?a:e}else return e}function Kr(t,e,n){const r=t;r.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}let M0=P0.__EXTEND_POINT__;const Ya=()=>++M0,ur={INVALID_ARGUMENT:M0,INVALID_DATE_ARGUMENT:Ya(),INVALID_ISO_DATE_ARGUMENT:Ya(),__EXTEND_POINT__:Ya()};function fr(t){return T0(t,null,void 0)}const wh=()=>"",gn=t=>C.exports.isFunction(t);function Sh(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:i,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=sc(...e),u=C.exports.isBoolean(c.missingWarn)?c.missingWarn:t.missingWarn,h=C.exports.isBoolean(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,f=C.exports.isBoolean(c.escapeParameter)?c.escapeParameter:t.escapeParameter,d=!!c.resolvedMessage,p=C.exports.isString(c.default)||C.exports.isBoolean(c.default)?C.exports.isBoolean(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:"",m=n||p!=="",g=C.exports.isString(c.locale)?c.locale:t.locale;f&&KS(c);let[x,b,_]=d?[l,g,a[g]||{}]:F0(t,l,g,o,h,u),v=x,y=l;if(!d&&!(C.exports.isString(v)||gn(v))&&m&&(v=p,y=v),!d&&(!(C.exports.isString(v)||gn(v))||!C.exports.isString(b)))return i?ma:l;let w=!1;const P=()=>{w=!0},T=gn(v)?v:k0(t,l,b,v,y,P);if(w)return v;const R=JS(t,b,_,c),k=FS(R),D=QS(t,T,k),M=r?r(D,l):D;if(__INTLIFY_PROD_DEVTOOLS__){const z={timestamp:Date.now(),key:C.exports.isString(l)?l:gn(v)?v.key:"",locale:b||(gn(v)?v.locale:""),format:C.exports.isString(v)?v:gn(v)?v.source:"",message:M};z.meta=C.exports.assign({},t.__meta,$S()||{}),IS(z)}return M}function KS(t){C.exports.isArray(t.list)?t.list=t.list.map(e=>C.exports.isString(e)?C.exports.escapeHtml(e):e):C.exports.isObject(t.named)&&Object.keys(t.named).forEach(e=>{C.exports.isString(t.named[e])&&(t.named[e]=C.exports.escapeHtml(t.named[e]))})}function F0(t,e,n,r,i,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,r,n);let h={},f,d=null;const p="translate";for(let m=0;m<u.length&&(f=u[m],h=o[f]||{},(d=l(h,e))===null&&(d=h[e]),!(C.exports.isString(d)||C.exports.isFunction(d)));m++){const g=Tu(t,e,f,s,p);g!==e&&(d=g)}return[d,f,h]}function k0(t,e,n,r,i,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(gn(r)){const c=r;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>r;return c.locale=n,c.key=e,c}const l=o(r,ZS(t,n,i,r,a,s));return l.locale=n,l.key=e,l.source=r,l}function QS(t,e,n){return e(n)}function sc(...t){const[e,n,r]=t,i={};if(!C.exports.isString(e)&&!C.exports.isNumber(e)&&!gn(e))throw fr(ur.INVALID_ARGUMENT);const s=C.exports.isNumber(e)?String(e):(gn(e),e);return C.exports.isNumber(n)?i.plural=n:C.exports.isString(n)?i.default=n:C.exports.isPlainObject(n)&&!C.exports.isEmptyObject(n)?i.named=n:C.exports.isArray(n)&&(i.list=n),C.exports.isNumber(r)?i.plural=r:C.exports.isString(r)?i.default=r:C.exports.isPlainObject(r)&&C.exports.assign(i,r),[s,i]}function ZS(t,e,n,r,i,s){return{warnHtmlMessage:i,onError:o=>{throw s&&s(o),o},onCacheKey:o=>C.exports.generateFormatCacheKey(e,n,o)}}function JS(t,e,n,r){const{modifiers:i,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,f={locale:e,modifiers:i,pluralRules:s,messages:d=>{let p=o(n,d);if(p==null&&u){const[,,m]=F0(u,d,e,a,l,c);p=o(m,d)}if(C.exports.isString(p)){let m=!1;const x=k0(t,d,e,p,d,()=>{m=!0});return m?wh:x}else return gn(p)?p:wh}};return t.processor&&(f.processor=t.processor),r.list&&(f.list=r.list),r.named&&(f.named=r.named),C.exports.isNumber(r.plural)&&(f.pluralIndex=r.plural),f}function Ph(t,...e){const{datetimeFormats:n,unresolving:r,fallbackLocale:i,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,h]=oc(...e),f=C.exports.isBoolean(u.missingWarn)?u.missingWarn:t.missingWarn;C.exports.isBoolean(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const d=!!u.part,p=C.exports.isString(u.locale)?u.locale:t.locale,m=o(t,i,p);if(!C.exports.isString(l)||l==="")return new Intl.DateTimeFormat(p,h).format(c);let g={},x,b=null;const _="datetime format";for(let w=0;w<m.length&&(x=m[w],g=n[x]||{},b=g[l],!C.exports.isPlainObject(b));w++)Tu(t,l,x,f,_);if(!C.exports.isPlainObject(b)||!C.exports.isString(x))return r?ma:l;let v=`${x}__${l}`;C.exports.isEmptyObject(h)||(v=`${v}__${JSON.stringify(h)}`);let y=a.get(v);return y||(y=new Intl.DateTimeFormat(x,C.exports.assign({},b,h)),a.set(v,y)),d?y.formatToParts(c):y.format(c)}const L0=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function oc(...t){const[e,n,r,i]=t,s={};let o={},a;if(C.exports.isString(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw fr(ur.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw fr(ur.INVALID_ISO_DATE_ARGUMENT)}}else if(C.exports.isDate(e)){if(isNaN(e.getTime()))throw fr(ur.INVALID_DATE_ARGUMENT);a=e}else if(C.exports.isNumber(e))a=e;else throw fr(ur.INVALID_ARGUMENT);return C.exports.isString(n)?s.key=n:C.exports.isPlainObject(n)&&Object.keys(n).forEach(l=>{L0.includes(l)?o[l]=n[l]:s[l]=n[l]}),C.exports.isString(r)?s.locale=r:C.exports.isPlainObject(r)&&(o=r),C.exports.isPlainObject(i)&&(o=i),[s.key||"",a,s,o]}function Th(t,e,n){const r=t;for(const i in n){const s=`${e}__${i}`;!r.__datetimeFormatters.has(s)||r.__datetimeFormatters.delete(s)}}function Eh(t,...e){const{numberFormats:n,unresolving:r,fallbackLocale:i,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,h]=ac(...e),f=C.exports.isBoolean(u.missingWarn)?u.missingWarn:t.missingWarn;C.exports.isBoolean(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const d=!!u.part,p=C.exports.isString(u.locale)?u.locale:t.locale,m=o(t,i,p);if(!C.exports.isString(l)||l==="")return new Intl.NumberFormat(p,h).format(c);let g={},x,b=null;const _="number format";for(let w=0;w<m.length&&(x=m[w],g=n[x]||{},b=g[l],!C.exports.isPlainObject(b));w++)Tu(t,l,x,f,_);if(!C.exports.isPlainObject(b)||!C.exports.isString(x))return r?ma:l;let v=`${x}__${l}`;C.exports.isEmptyObject(h)||(v=`${v}__${JSON.stringify(h)}`);let y=a.get(v);return y||(y=new Intl.NumberFormat(x,C.exports.assign({},b,h)),a.set(v,y)),d?y.formatToParts(c):y.format(c)}const I0=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function ac(...t){const[e,n,r,i]=t,s={};let o={};if(!C.exports.isNumber(e))throw fr(ur.INVALID_ARGUMENT);const a=e;return C.exports.isString(n)?s.key=n:C.exports.isPlainObject(n)&&Object.keys(n).forEach(l=>{I0.includes(l)?o[l]=n[l]:s[l]=n[l]}),C.exports.isString(r)?s.locale=r:C.exports.isPlainObject(r)&&(o=r),C.exports.isPlainObject(i)&&(o=i),[s.key||"",a,s,o]}function Ch(t,e,n){const r=t;for(const i in n){const s=`${e}__${i}`;!r.__numberFormatters.has(s)||r.__numberFormatters.delete(s)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(C.exports.getGlobalThis().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.3.0-beta.16
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const eP="9.3.0-beta.16";function tP(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(C.exports.getGlobalThis().__INTLIFY_PROD_DEVTOOLS__=!1)}NS.__EXTEND_POINT__;let D0=P0.__EXTEND_POINT__;const Et=()=>++D0,Ut={UNEXPECTED_RETURN_TYPE:D0,INVALID_ARGUMENT:Et(),MUST_BE_CALL_SETUP_TOP:Et(),NOT_INSLALLED:Et(),NOT_AVAILABLE_IN_LEGACY_MODE:Et(),REQUIRED_VALUE:Et(),INVALID_VALUE:Et(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Et(),NOT_INSLALLED_WITH_PROVIDE:Et(),UNEXPECTED_ERROR:Et(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Et(),BRIDGE_SUPPORT_VUE_2_ONLY:Et(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Et(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Et(),__EXTEND_POINT__:Et()};function Jt(t,...e){return T0(t,null,void 0)}const lc=C.exports.makeSymbol("__translateVNode"),cc=C.exports.makeSymbol("__datetimeParts"),uc=C.exports.makeSymbol("__numberParts"),nP=C.exports.makeSymbol("__setPluralRules");C.exports.makeSymbol("__intlifyMeta");const iP=C.exports.makeSymbol("__injectWithOption");function fc(t){if(!C.exports.isObject(t))return t;for(const e in t)if(!!C.exports.hasOwn(t,e))if(!e.includes("."))C.exports.isObject(t[e])&&fc(t[e]);else{const n=e.split("."),r=n.length-1;let i=t;for(let s=0;s<r;s++)n[s]in i||(i[n[s]]={}),i=i[n[s]];i[n[r]]=t[e],delete t[e],C.exports.isObject(i[n[r]])&&fc(i[n[r]])}return t}function N0(t,e){const{messages:n,__i18n:r,messageResolver:i,flatJson:s}=e,o=C.exports.isPlainObject(n)?n:C.exports.isArray(r)?{}:{[t]:{}};if(C.exports.isArray(r)&&r.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||{},ps(c,o[l])):ps(c,o)}else C.exports.isString(a)&&ps(JSON.parse(a),o)}),i==null&&s)for(const a in o)C.exports.hasOwn(o,a)&&fc(o[a]);return o}const ao=t=>!C.exports.isObject(t)||C.exports.isArray(t);function ps(t,e){if(ao(t)||ao(e))throw Jt(Ut.INVALID_VALUE);for(const n in t)C.exports.hasOwn(t,n)&&(ao(t[n])||ao(e[n])?e[n]=t[n]:ps(t[n],e[n]))}function U0(t){return t.type}function rP(t,e,n){let r=C.exports.isObject(e.messages)?e.messages:{};"__i18nGlobal"in n&&(r=N0(globalThis.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const i=Object.keys(r);i.length&&i.forEach(s=>{t.mergeLocaleMessage(s,r[s])});{if(C.exports.isObject(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(C.exports.isObject(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Ah(t){return Ge(qi,null,t,0)}const zh="__INTLIFY_META__";let Rh=0;function Oh(t){return(e,n,r,i)=>t(n,r,nn()||void 0,i)}const sP=()=>{const t=nn();let e=null;return t&&(e=U0(t)[zh])?{[zh]:e}:null};function B0(t={},e){const{__root:n}=t,r=n===void 0;let i=C.exports.isBoolean(t.inheritLocale)?t.inheritLocale:!0;const s=et(n&&i?n.locale.value:C.exports.isString(t.locale)?t.locale:Pu),o=et(n&&i?n.fallbackLocale.value:C.exports.isString(t.fallbackLocale)||C.exports.isArray(t.fallbackLocale)||C.exports.isPlainObject(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s.value),a=et(N0(s.value,t)),l=et(C.exports.isPlainObject(t.datetimeFormats)?t.datetimeFormats:{[s.value]:{}}),c=et(C.exports.isPlainObject(t.numberFormats)?t.numberFormats:{[s.value]:{}});let u=n?n.missingWarn:C.exports.isBoolean(t.missingWarn)||C.exports.isRegExp(t.missingWarn)?t.missingWarn:!0,h=n?n.fallbackWarn:C.exports.isBoolean(t.fallbackWarn)||C.exports.isRegExp(t.fallbackWarn)?t.fallbackWarn:!0,f=n?n.fallbackRoot:C.exports.isBoolean(t.fallbackRoot)?t.fallbackRoot:!0,d=!!t.fallbackFormat,p=C.exports.isFunction(t.missing)?t.missing:null,m=C.exports.isFunction(t.missing)?Oh(t.missing):null,g=C.exports.isFunction(t.postTranslation)?t.postTranslation:null,x=n?n.warnHtmlMessage:C.exports.isBoolean(t.warnHtmlMessage)?t.warnHtmlMessage:!0,b=!!t.escapeParameter;const _=n?n.modifiers:C.exports.isPlainObject(t.modifiers)?t.modifiers:{};let v=t.pluralRules||n&&n.pluralRules,y;y=(()=>{r&&yh(null);const L={version:eP,locale:s.value,fallbackLocale:o.value,messages:a.value,modifiers:_,pluralRules:v,missing:m===null?void 0:m,missingWarn:u,fallbackWarn:h,fallbackFormat:d,unresolving:!0,postTranslation:g===null?void 0:g,warnHtmlMessage:x,escapeParameter:b,messageResolver:t.messageResolver,__meta:{framework:"vue"}};L.datetimeFormats=l.value,L.numberFormats=c.value,L.__datetimeFormatters=C.exports.isPlainObject(y)?y.__datetimeFormatters:void 0,L.__numberFormatters=C.exports.isPlainObject(y)?y.__numberFormatters:void 0;const F=YS(L);return r&&yh(F),F})(),Kr(y,s.value,o.value);function P(){return[s.value,o.value,a.value,l.value,c.value]}const T=Me({get:()=>s.value,set:L=>{s.value=L,y.locale=s.value}}),R=Me({get:()=>o.value,set:L=>{o.value=L,y.fallbackLocale=o.value,Kr(y,s.value,L)}}),k=Me(()=>a.value),D=Me(()=>l.value),M=Me(()=>c.value);function z(){return C.exports.isFunction(g)?g:null}function S(L){g=L,y.postTranslation=L}function A(){return p}function I(L){L!==null&&(m=Oh(L)),p=L,y.missing=m}const B=(L,F,q,G,te,ee)=>{P();let _e;if(__INTLIFY_PROD_DEVTOOLS__)try{_h(sP()),r||(y.fallbackContext=n?XS():void 0),_e=L(y)}finally{_h(null),r||(y.fallbackContext=void 0)}else _e=L(y);if(C.exports.isNumber(_e)&&_e===ma){const[re,qe]=F();return n&&f?G(n):te(re)}else{if(ee(_e))return _e;throw Jt(Ut.UNEXPECTED_RETURN_TYPE)}};function $(...L){return B(F=>Reflect.apply(Sh,null,[F,...L]),()=>sc(...L),"translate",F=>Reflect.apply(F.t,F,[...L]),F=>F,F=>C.exports.isString(F))}function ne(...L){const[F,q,G]=L;if(G&&!C.exports.isObject(G))throw Jt(Ut.INVALID_ARGUMENT);return $(F,q,C.exports.assign({resolvedMessage:!0},G||{}))}function pe(...L){return B(F=>Reflect.apply(Ph,null,[F,...L]),()=>oc(...L),"datetime format",F=>Reflect.apply(F.d,F,[...L]),()=>vh,F=>C.exports.isString(F))}function ge(...L){return B(F=>Reflect.apply(Eh,null,[F,...L]),()=>ac(...L),"number format",F=>Reflect.apply(F.n,F,[...L]),()=>vh,F=>C.exports.isString(F))}function ve(L){return L.map(F=>C.exports.isString(F)||C.exports.isNumber(F)||C.exports.isBoolean(F)?Ah(String(F)):F)}const Ee={normalize:ve,interpolate:L=>L,type:"vnode"};function N(...L){return B(F=>{let q;const G=F;try{G.processor=Ee,q=Reflect.apply(Sh,null,[G,...L])}finally{G.processor=null}return q},()=>sc(...L),"translate",F=>F[lc](...L),F=>[Ah(F)],F=>C.exports.isArray(F))}function Q(...L){return B(F=>Reflect.apply(Eh,null,[F,...L]),()=>ac(...L),"number format",F=>F[uc](...L),()=>[],F=>C.exports.isString(F)||C.exports.isArray(F))}function W(...L){return B(F=>Reflect.apply(Ph,null,[F,...L]),()=>oc(...L),"datetime format",F=>F[cc](...L),()=>[],F=>C.exports.isString(F)||C.exports.isArray(F))}function J(L){v=L,y.pluralRules=v}function se(L,F){const q=C.exports.isString(F)?F:s.value,G=E(q);return y.messageResolver(G,L)!==null}function Se(L){let F=null;const q=C0(y,o.value,s.value);for(let G=0;G<q.length;G++){const te=a.value[q[G]]||{},ee=y.messageResolver(te,L);if(ee!=null){F=ee;break}}return F}function me(L){const F=Se(L);return F!=null?F:n?n.tm(L)||{}:{}}function E(L){return a.value[L]||{}}function O(L,F){a.value[L]=F,y.messages=a.value}function U(L,F){a.value[L]=a.value[L]||{},ps(F,a.value[L]),y.messages=a.value}function V(L){return l.value[L]||{}}function j(L,F){l.value[L]=F,y.datetimeFormats=l.value,Th(y,L,F)}function K(L,F){l.value[L]=C.exports.assign(l.value[L]||{},F),y.datetimeFormats=l.value,Th(y,L,F)}function Z(L){return c.value[L]||{}}function Y(L,F){c.value[L]=F,y.numberFormats=c.value,Ch(y,L,F)}function X(L,F){c.value[L]=C.exports.assign(c.value[L]||{},F),y.numberFormats=c.value,Ch(y,L,F)}Rh++,n&&C.exports.inBrowser&&(an(n.locale,L=>{i&&(s.value=L,y.locale=L,Kr(y,s.value,o.value))}),an(n.fallbackLocale,L=>{i&&(o.value=L,y.fallbackLocale=L,Kr(y,s.value,o.value))}));const H={id:Rh,locale:T,fallbackLocale:R,get inheritLocale(){return i},set inheritLocale(L){i=L,L&&n&&(s.value=n.locale.value,o.value=n.fallbackLocale.value,Kr(y,s.value,o.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:k,get modifiers(){return _},get pluralRules(){return v||{}},get isGlobal(){return r},get missingWarn(){return u},set missingWarn(L){u=L,y.missingWarn=u},get fallbackWarn(){return h},set fallbackWarn(L){h=L,y.fallbackWarn=h},get fallbackRoot(){return f},set fallbackRoot(L){f=L},get fallbackFormat(){return d},set fallbackFormat(L){d=L,y.fallbackFormat=d},get warnHtmlMessage(){return x},set warnHtmlMessage(L){x=L,y.warnHtmlMessage=L},get escapeParameter(){return b},set escapeParameter(L){b=L,y.escapeParameter=L},t:$,getLocaleMessage:E,setLocaleMessage:O,mergeLocaleMessage:U,getPostTranslationHandler:z,setPostTranslationHandler:S,getMissingHandler:A,setMissingHandler:I,[nP]:J};return H.datetimeFormats=D,H.numberFormats=M,H.rt=ne,H.te=se,H.tm=me,H.d=pe,H.n=ge,H.getDateTimeFormat=V,H.setDateTimeFormat=j,H.mergeDateTimeFormat=K,H.getNumberFormat=Z,H.setNumberFormat=Y,H.mergeNumberFormat=X,H[iP]=t.__injectWithOption,H[lc]=N,H[cc]=W,H[uc]=Q,H}const Eu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function oP({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,i)=>[...r,...i.type===mt?i.children:[i]],[]):e.reduce((n,r)=>{const i=t[r];return i&&(n[r]=i()),n},{})}function V0(t){return mt}const aP=tn({name:"i18n-t",props:C.exports.assign({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>C.exports.isNumber(t)||!isNaN(t)}},Eu),setup(t,e){const{slots:n,attrs:r}=e,i=t.i18n||ga({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(h=>h!=="_"),o={};t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=C.exports.isString(t.plural)?+t.plural:t.plural);const a=oP(e,s),l=i[lc](t.keypath,a,o),c=C.exports.assign({},r),u=C.exports.isString(t.tag)||C.exports.isObject(t.tag)?t.tag:V0();return St(u,c,l)}}}),Mh=aP;function lP(t){return C.exports.isArray(t)&&!C.exports.isString(t[0])}function H0(t,e,n,r){const{slots:i,attrs:s}=e;return()=>{const o={part:!0};let a={};t.locale&&(o.locale=t.locale),C.exports.isString(t.format)?o.key=t.format:C.exports.isObject(t.format)&&(C.exports.isString(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((f,d)=>n.includes(d)?C.exports.assign({},f,{[d]:t.format[d]}):f,{}));const l=r(t.value,o,a);let c=[o.key];C.exports.isArray(l)?c=l.map((f,d)=>{const p=i[f.type],m=p?p({[f.type]:f.value,index:d,parts:l}):[f.value];return lP(m)&&(m[0].key=`${f.type}-${d}`),m}):C.exports.isString(l)&&(c=[l]);const u=C.exports.assign({},s),h=C.exports.isString(t.tag)||C.exports.isObject(t.tag)?t.tag:V0();return St(h,u,c)}}const cP=tn({name:"i18n-n",props:C.exports.assign({value:{type:Number,required:!0},format:{type:[String,Object]}},Eu),setup(t,e){const n=t.i18n||ga({useScope:"parent",__useComponent:!0});return H0(t,e,I0,(...r)=>n[uc](...r))}}),Fh=cP,uP=tn({name:"i18n-d",props:C.exports.assign({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Eu),setup(t,e){const n=t.i18n||ga({useScope:"parent",__useComponent:!0});return H0(t,e,L0,(...r)=>n[cc](...r))}}),kh=uP;function fP(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function hP(t){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw Jt(Ut.UNEXPECTED_ERROR);const u=fP(t,a.$),h=Lh(c);return[Reflect.apply(u.t,u,[...Ih(h)]),u]};return{created:(o,a)=>{const[l,c]=e(a);C.exports.inBrowser&&t.global===c&&(o.__i18nWatcher=an(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{C.exports.inBrowser&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=Lh(a);o.textContent=Reflect.apply(l.t,l,[...Ih(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Lh(t){if(C.exports.isString(t))return{path:t};if(C.exports.isPlainObject(t)){if(!("path"in t))throw Jt(Ut.REQUIRED_VALUE,"path");return t}else throw Jt(Ut.INVALID_VALUE)}function Ih(t){const{path:e,locale:n,args:r,choice:i,plural:s}=t,o={},a=r||{};return C.exports.isString(n)&&(o.locale=n),C.exports.isNumber(i)&&(o.plural=i),C.exports.isNumber(s)&&(o.plural=s),[e,a,o]}function dP(t,e,...n){const r=C.exports.isPlainObject(n[0])?n[0]:{},i=!!r.useI18nComponentName;(C.exports.isBoolean(r.globalInstall)?r.globalInstall:!0)&&(t.component(i?"i18n":Mh.name,Mh),t.component(Fh.name,Fh),t.component(kh.name,kh)),t.directive("t",hP(e))}const pP=C.exports.makeSymbol("global-vue-i18n");function mP(t={},e){const n=C.exports.isBoolean(t.globalInjection)?t.globalInjection:!0,r=!0,i=new Map,[s,o]=gP(t),a=C.exports.makeSymbol("");function l(h){return i.get(h)||null}function c(h,f){i.set(h,f)}function u(h){i.delete(h)}{const h={get mode(){return"composition"},get allowComposition(){return r},async install(f,...d){if(f.__VUE_I18N_SYMBOL__=a,f.provide(f.__VUE_I18N_SYMBOL__,h),C.exports.isPlainObject(d[0])){const m=d[0];h.__composerExtend=m.__composerExtend,h.__vueI18nExtend=m.__vueI18nExtend}n&&PP(f,h.global),dP(f,h,...d);const p=f.unmount;f.unmount=()=>{h.dispose(),p()}},get global(){return o},dispose(){s.stop()},__instances:i,__getInstance:l,__setInstance:c,__deleteInstance:u};return h}}function ga(t={}){const e=nn();if(e==null)throw Jt(Ut.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Jt(Ut.NOT_INSLALLED);const n=vP(e),r=_P(n),i=U0(e),s=bP(t,i);if(s==="global")return rP(r,t,i),r;if(s==="parent"){let l=yP(n,e,t.__useComponent);return l==null&&(l=r),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=C.exports.assign({},t);"__i18n"in i&&(l.__i18n=i.__i18n),r&&(l.__root=r),a=B0(l),o.__composerExtend&&o.__composerExtend(a),xP(o,e),o.__setInstance(e,a)}return a}function gP(t,e,n){const r=ta();{const i=r.run(()=>B0(t));if(i==null)throw Jt(Ut.UNEXPECTED_ERROR);return[r,i]}}function vP(t){{const e=ht(t.isCE?pP:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Jt(t.isCE?Ut.NOT_INSLALLED_WITH_PROVIDE:Ut.UNEXPECTED_ERROR);return e}}function bP(t,e){return C.exports.isEmptyObject(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function _P(t){return t.mode==="composition"?t.global:t.global.__composer}function yP(t,e,n=!1){let r=null;const i=e.root;let s=e.parent;for(;s!=null;){const o=t;if(t.mode==="composition"&&(r=o.__getInstance(s)),r!=null||i===s)break;s=s.parent}return r}function xP(t,e,n){Us(()=>{},e),oa(()=>{t.__deleteInstance(e)},e)}const wP=["locale","fallbackLocale","availableLocales"],SP=["t","rt","d","n","tm","te"];function PP(t,e){const n=Object.create(null);wP.forEach(r=>{const i=Object.getOwnPropertyDescriptor(e,r);if(!i)throw Jt(Ut.UNEXPECTED_ERROR);const s=De(i.value)?{get(){return i.value.value},set(o){i.value.value=o}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,r,s)}),t.config.globalProperties.$i18n=n,SP.forEach(r=>{const i=Object.getOwnPropertyDescriptor(e,r);if(!i||!i.value)throw Jt(Ut.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,i)})}GS(TS);qS(C0);tP();if(__INTLIFY_PROD_DEVTOOLS__){const t=C.exports.getGlobalThis();t.__INTLIFY__=!0,kS(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const j0={PREFIX:"prefix",PREFIX_EXCEPT_DEFAULT:"prefix_except_default",PREFIX_AND_DEFAULT:"prefix_and_default",NO_PREFIX:"no_prefix"},TP="",EP=j0.PREFIX_EXCEPT_DEFAULT,CP=!1,AP="___",zP="default",RP="ltr",OP="",W0="";/*!
  * shared v9.3.0-beta.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const MP=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",FP=t=>MP?Symbol(t):t,va=Object.assign,G0=Array.isArray,hc=t=>typeof t=="function",Mr=t=>typeof t=="string",kP=t=>typeof t=="boolean",LP=t=>typeof t=="symbol",Cu=t=>t!==null&&typeof t=="object",IP=/\/$|\/\?/;function dc(t="",e=!1){return e?IP.test(t):t.endsWith("/")}function DP(t="",e=!1){if(!e)return(dc(t)?t.slice(0,-1):t)||"/";if(!dc(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function NP(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(dc(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}const UP=typeof window<"u";function q0(t,e){typeof console<"u"&&(console.warn("[vue-i18n-routing] "+t),e&&console.warn(e.stack))}function BP(t){t=t||[];const e=[];for(const n of t)Mr(n)?e.push({code:n}):e.push(n);return e}function Qi(t){return t!=null&&"global"in t&&"mode"in t}function qr(t){return t!=null&&!("__composer"in t)&&De(t.locale)}function gi(t){return t!=null&&"__composer"in t}function Gs(t){return t!=null&&!("__composer"in t)&&!De(t.locale)}function ba(t){return t!=null&&("__VUE_I18N_BRIDGE__"in t||"_sync"in t)}function As(t){return Qi(t)?qr(t.global)?t.global:t.global.__composer:gi(t)?t.__composer:t}function _a(t){const e=Qi(t)?t.global:t;return qr(e)?e.locale.value:(Gs(e)||gi(e)||ba(e),e.locale)}function VP(t){const e=Qi(t)?t.global:t;return qr(e)?e.locales.value:(Gs(e)||gi(e)||ba(e),e.locales)}function HP(t){const e=Qi(t)?t.global:t;return qr(e)?e.localeCodes.value:(Gs(e)||gi(e)||ba(e),e.localeCodes)}function $0(t,e){const n=Qi(t)?t.global:t;if(qr(n))n.locale.value=e;else if(Gs(n)||gi(n)||ba(n))n.locale=e;else throw new Error("TODO:")}function X0(t){return Mr(t)?t:LP(t)?t.toString():"(null)"}function Dh(t,e,{defaultLocale:n,strategy:r,routesNameSeparator:i,defaultLocaleRouteNameSuffix:s}){let o=X0(t)+(r==="no_prefix"?"":i+e);return e===n&&r==="prefix_and_default"&&(o+=i+s),o}function Nh(t,e){return hc(t)?t(e):t}function jP(t,e){const n=[];for(const[r,i]of e.entries()){const s=t.find(o=>o.iso.toLowerCase()===i.toLowerCase());if(s){n.push({code:s.code,score:1-r/e.length});break}}for(const[r,i]of e.entries()){const s=i.split("-")[0].toLowerCase(),o=t.find(a=>a.iso.split("-")[0].toLowerCase()===s);if(o){n.push({code:o.code,score:.999-r/e.length});break}}return n}const WP=jP;function GP(t,e){return t.score===e.score?e.code.length-t.code.length:e.score-t.score}const qP=GP;function $P(t,e,{matcher:n=WP,comparer:r=qP}={}){const i=[];for(const o of t){const{code:a}=o,l=o.iso||a;i.push({code:a,iso:l})}const s=n(i,e);return s.length>1&&s.sort(r),s.length?s[0].code:""}function Ci(t){return function(){return Reflect.apply(t,{getRouteBaseName:this.getRouteBaseName,localePath:this.localePath,localeRoute:this.localeRoute,localeLocation:this.localeLocation,resolveRoute:this.resolveRoute,switchLocalePath:this.switchLocalePath,localeHead:this.localeHead,i18n:this.$i18n,route:this.$route,router:this.$router},arguments)}}function XP(t,{locales:e=[],localeCodes:n=[],baseUrl:r=OP,hooks:i={},context:s={}}={}){const o=ta(),a=t.install;return t.install=(l,...c)=>{const u=QP(c[0])?va({},c[0]):{inject:!0};u.inject==null&&(u.inject=!0);const h=u.__composerExtend;if(u.__composerExtend=m=>{const g=As(t);m.locales=Me(()=>g.locales.value),m.localeCodes=Me(()=>g.localeCodes.value),m.baseUrl=Me(()=>g.baseUrl.value),hc(h)&&Reflect.apply(h,u,[m])},gi(t.global)){const m=u.__vueI18nExtend;u.__vueI18nExtend=g=>{Uh(g,i.onExtendVueI18n),hc(m)&&Reflect.apply(m,u,[g])}}c[0]=u,Reflect.apply(a,t,[l,...c]);const f=As(t);o.run(()=>YP(f,{locales:e,localeCodes:n,baseUrl:r,hooks:i,context:s})),gi(t.global)&&Uh(t.global,i.onExtendVueI18n);const d=l,p=t.mode==="composition"?d.config.globalProperties.$i18n:null;if(p&&KP(p,f,i.onExtendExportedGlobal),u.inject&&l.mixin({methods:{resolveRoute:Ci(ya),localePath:Ci(Au),localeRoute:Ci(zu),localeLocation:Ci(sT),switchLocalePath:Ci(zs),getRouteBaseName:Ci(Fr),localeHead:Ci(Z0)}}),d.unmount){const m=d.unmount;d.unmount=()=>{o.stop(),m()}}},o}function YP(t,e){const{locales:n,localeCodes:r,baseUrl:i,context:s}=e,o=et(n),a=et(r),l=et("");t.locales=Me(()=>o.value),t.localeCodes=Me(()=>a.value),t.baseUrl=Me(()=>l.value),UP?an(t.locale,()=>{l.value=Nh(i,s)},{immediate:!0}):l.value=Nh(i,s),e.hooks&&e.hooks.onExtendComposer&&e.hooks.onExtendComposer(t)}function KP(t,e,n){const r=[{locales:{get(){return e.locales.value}},localeCodes:{get(){return e.localeCodes.value}},baseUrl:{get(){return e.baseUrl.value}}}];n&&r.push(n(e));for(const i of r)for(const[s,o]of Object.entries(i))Object.defineProperty(t,s,o)}function Uh(t,e){const n=As(t),r=[{locales:{get(){return n.locales.value}},localeCodes:{get(){return n.localeCodes.value}},baseUrl:{get(){return n.baseUrl.value}}}];e&&r.push(e(n));for(const i of r)for(const[s,o]of Object.entries(i))Object.defineProperty(t,s,o)}function QP(t){return Cu(t)&&("inject"in t||"__composerExtend"in t||"__vueI18nExtend"in t)&&kP(t.inject)}const pc=FP("vue-i18n-routing-gor");function ZP(t,e){t[pc]?q0("already registered global options"):t[pc]=e}function JP(t){var e;return(e=t[pc])!=null?e:{}}function Y0(t){return new RegExp(`^/(${t.join("|")})(?:/|$)`,"i")}function eT(t,e,n){const r=`(${t.join("|")})`,i=`(?:${e}${n})?`,s=new RegExp(`${e}${r}${i}$`,"i"),o=Y0(t);return l=>{if(Cu(l)){if(l.name){const u=(Mr(l.name)?l.name:l.name.toString()).match(s);if(u&&u.length>1)return u[1]}else if(l.path){const c=l.path.match(o);if(c&&c.length>1)return c[1]}}else if(Mr(l)){const c=l.match(o);if(c&&c.length>1)return c[1]}return""}}function qs(t,e,{defaultLocale:n=TP,defaultDirection:r=RP,defaultLocaleRouteNameSuffix:i=zP,routesNameSeparator:s=AP,strategy:o=EP,trailingSlash:a=CP,localeCodes:l=[],prefixable:c=K0,switchLocalePathIntercepter:u=Q0,dynamicRouteParamsKey:h=W0}={}){const f=JP(t);return{defaultLocale:e.defaultLocale||f.defaultLocale||n,defaultDirection:e.defaultDirection||f.defaultDirection||r,defaultLocaleRouteNameSuffix:e.defaultLocaleRouteNameSuffix||f.defaultLocaleRouteNameSuffix||i,routesNameSeparator:e.routesNameSeparator||f.routesNameSeparator||s,strategy:e.strategy||f.strategy||o,trailingSlash:e.trailingSlash||f.trailingSlash||a,localeCodes:e.localeCodes||f.localeCodes||l,prefixable:e.prefixable||f.prefixable||c,switchLocalePathIntercepter:e.switchLocalePathIntercepter||f.switchLocalePathIntercepter||u,dynamicRouteParamsKey:e.dynamicRouteParamsKey||f.dynamicRouteParamsKey||h}}function tT(t,e){return[t.slice(0,e),t.slice(e)]}function nT(t,e,n,r){if(n==="prefix"){if(G0(e.matched)&&e.matched.length>0)return e.matched[0];const[i,s]=tT(e.path,1),o=`${i}${r}${s===""?s:`/${s}`}`,a=t.options.routes.find(l=>l.path===o);if(a==null)return e;{const l=va({},a);return l.path=o,t.resolve(l)}}else return t.resolve(e)}const iT=new Set(["prefix_and_default","prefix_except_default"]);function rT(t){const{currentLocale:e,defaultLocale:n,strategy:r}=t;return!(e===n&&iT.has(r))&&r!=="no_prefix"}const K0=rT;function Fr(t){const e=this.router,{routesNameSeparator:n}=qs(e,this),r=t!=null?De(t)?ut(t):t:this.route;return r==null||!r.name?void 0:X0(r.name).split(n)[0]}function Au(t,e){const n=ya.call(this,t,e);return n==null?"":n.redirectedFrom||n.fullPath}function zu(t,e){const n=ya.call(this,t,e);return n==null?void 0:n}function sT(t,e){const n=ya.call(this,t,e);return n==null?void 0:n}function ya(t,e){const n=this.router,r=this.i18n,i=e||_a(r),{routesNameSeparator:s,defaultLocale:o,defaultLocaleRouteNameSuffix:a,strategy:l,trailingSlash:c,prefixable:u}=qs(n,this);let h=t;Mr(t)&&(h[0]==="/"?h={path:t}:h={name:t});let f=va({},h);if(f.path&&!f.name){let d=null;try{d=nT(n,f,l,i)}catch{}const p=d,m=Fr.call(this,p);Mr(m)?(f={name:Dh(m,i,{defaultLocale:o,strategy:l,routesNameSeparator:s,defaultLocaleRouteNameSuffix:a}),params:p.params,query:p.query,hash:p.hash},f.state=p.state):(u({currentLocale:i,defaultLocale:o,strategy:l})&&(f.path=`/${i}${f.path}`),f.path=c?NP(f.path,!0):DP(f.path,!0))}else!f.name&&!f.path&&(f.name=Fr.call(this,this.route)),f.name=Dh(f.name,i,{defaultLocale:o,strategy:l,routesNameSeparator:s,defaultLocaleRouteNameSuffix:a});try{const d=n.resolve(f);return(Gx?d.name:d.route.name)?d:n.resolve(t)}catch(d){if(d.type===1)return null}}const Q0=t=>t;function oT(t,e){const n={};if(e===W0)return n;const r=t.meta;return De(r)?r.value[e]||n:r[e]||n}function zs(t){const e=this.route,n=Fr.call(this,e);if(!n)return"";const{switchLocalePathIntercepter:r,dynamicRouteParamsKey:i}=qs(this.router,this),{params:s,...o}=e,a=oT(e,i)[t]||{},l={name:n,params:{...s,...a}},c=va({},o,l);let u=Au.call(this,c,t);return u=r(u,t),u}function Z0({addDirAttribute:t=!1,addSeoAttributes:e=!1,identifierAttribute:n="hid"}={}){const r=this.router,i=this.i18n,{defaultDirection:s}=qs(r,this),o={htmlAttrs:{},link:[],meta:[]};if(i.locales==null||i.baseUrl==null)return o;const a=_a(i),l=VP(i),c=BP(l).find(f=>f.code===a)||{code:a},u=c.iso,h=c.dir||s;return t&&(o.htmlAttrs.dir=h),e&&a&&i.locales&&(u&&(o.htmlAttrs.lang=u),aT.call(this,l,ut(i.baseUrl),o.link,n),lT.call(this,ut(i.baseUrl),o.link,n,e),cT(c,u,o.meta,n),uT(l,u,o.meta,n)),o}function aT(t,e,n,r){const i=this.router,{defaultLocale:s,strategy:o}=qs(i,this);if(o===j0.NO_PREFIX)return;const a=new Map;for(const l of t){const c=l.iso;if(!c){q0("Locale ISO code is required to generate alternate link");continue}const[u,h]=c.split("-");u&&h&&(l.isCatchallLocale||!a.has(u))&&a.set(u,l),a.set(c,l)}for(const[l,c]of a.entries()){const u=zs.call(this,c.code);u&&n.push({[r]:`i18n-alt-${l}`,rel:"alternate",href:mc(u,e),hreflang:l})}if(s){const l=zs.call(this,s);l&&n.push({[r]:"i18n-xd",rel:"alternate",href:mc(l,e),hreflang:"x-default"})}}function lT(t,e,n,r){const i=this.route,s=zu.call(this,{...i,name:Fr.call(this,i)});if(s){let o=mc(s.path,t);const a=Cu(r)&&r.canonicalQueries||[];if(a.length){const l=s.query,c=new URLSearchParams;for(const h of a)if(h in l){const f=l[h];G0(f)?f.forEach(d=>c.append(h,d||"")):c.append(h,f||"")}const u=c.toString();u&&(o=`${o}?${u}`)}e.push({[n]:"i18n-can",rel:"canonical",href:o})}}function cT(t,e,n,r){!(t&&e)||n.push({[r]:"i18n-og",property:"og:locale",content:J0(e)})}function uT(t,e,n,r){const i=t.filter(s=>{const o=s.iso;return o&&o!==e});if(i.length){const s=i.map(o=>({[r]:`i18n-og-alt-${o.iso}`,property:"og:locale:alternate",content:J0(o.iso)}));n.push(...s)}}function J0(t){return(t||"").replace(/-/g,"_")}function mc(t,e){return t.match(/^https?:\/\//)?t:e+t}function fT(t,e){const{router:n,route:r,i18n:i,defaultLocale:s,strategy:o,defaultLocaleRouteNameSuffix:a,trailingSlash:l,routesNameSeparator:c}=t;return function(...u){return Reflect.apply(e,{router:n,route:r,i18n:i,defaultLocale:s,strategy:o,defaultLocaleRouteNameSuffix:a,trailingSlash:l,routesNameSeparator:c},u)}}function hT({router:t=U2(),route:e=x0(),i18n:n=ga(),defaultLocale:r=void 0,defaultLocaleRouteNameSuffix:i=void 0,routesNameSeparator:s=void 0,strategy:o=void 0,trailingSlash:a=void 0}={}){return fT({router:t,route:e,i18n:n,defaultLocale:r,defaultLocaleRouteNameSuffix:i,routesNameSeparator:s,strategy:o,trailingSlash:a},zs)}const Ai=["en-GB","en-DE","en-US"],dT={},pT=Object({"en-GB":[],"en-DE":[],"en-US":[]}),mT=async t=>{const e=Object({}),n=async r=>Object({legacy:!1,locale:"en-US",fallbackLocale:"en-US",messages:Object({"en-GB":{general:{back:i=>{const{normalize:s}=i;return s(["Back"])},sound:i=>{const{normalize:s}=i;return s(["Sound"])},on:i=>{const{normalize:s}=i;return s(["On"])},off:i=>{const{normalize:s}=i;return s(["Off"])},press:i=>{const{normalize:s}=i;return s(["Press"])},enter:i=>{const{normalize:s}=i;return s(["Enter"])},loading:i=>{const{normalize:s}=i;return s(["Loading"])},about:i=>{const{normalize:s}=i;return s(["This experience leverages artificial intelligence to define your unique aura and deliver personalised content"])}},header:{subtitle:i=>{const{normalize:s}=i;return s(["Pioneers at heart"])},share_my_aura:i=>{const{normalize:s}=i;return s(["Share my aura"])},introduction:i=>{const{normalize:s}=i;return s(["Introduction"])},explore_topics:i=>{const{normalize:s}=i;return s(["Explore topics"])},create_your_future:i=>{const{normalize:s}=i;return s(["Build your profile"])},generate_another:i=>{const{normalize:s}=i;return s(["Generate another"])},menu:i=>{const{normalize:s}=i;return s(["Menu"])},close_menu:i=>{const{normalize:s}=i;return s(["Close"])}},cards:{written_by:i=>{const{normalize:s}=i;return s(["Written by"])},created_by:i=>{const{normalize:s}=i;return s(["Created by"])},curated_by:i=>{const{normalize:s}=i;return s(["Curated by"])},sourced_by:i=>{const{normalize:s}=i;return s(["Source:"])},article:i=>{const{normalize:s}=i;return s(["Article"])},case:i=>{const{normalize:s}=i;return s(["Case study"])},trend:i=>{const{normalize:s}=i;return s(["Trend"])},gated:i=>{const{normalize:s}=i;return s(["Gated"])},QR_code:{title:i=>{const{normalize:s}=i;return s(["SCAN THE QR CODE"])},scan:i=>{const{normalize:s}=i;return s(["Get your personalised results"])}},aura:{color:i=>{const{normalize:s}=i;return s(["Colour"])},cta:i=>{const{normalize:s}=i;return s(["Explore my topics"])},seed:i=>{const{normalize:s}=i;return s(["Seed"])},your_personal_aura:i=>{const{normalize:s}=i;return s(["Your personal aura is"])}}},homepage:{welcome:i=>{const{normalize:s}=i;return s(["Welcome"])},intro:i=>{const{normalize:s}=i;return s(["Take a trip to future frontiers and generate your unique profile, complete with artwork and a curation of personalised content"])}},topics:{explore:i=>{const{normalize:s}=i;return s(["Explore"])},topics:i=>{const{normalize:s}=i;return s(["Topics"])},copy:i=>{const{normalize:s}=i;return s(["Whether you\u2019re here for optimisation, augmentation, personalisation or just good vibrations. Pick your pioneering topic."])},content:i=>{const{normalize:s}=i;return s(["Content"])}},experience:{progress:i=>{const{normalize:s}=i;return s(["Progress"])},exit_text:i=>{const{normalize:s,interpolate:o,named:a}=i;return s(["Leaving so soon, ",o(a("user")),"? We're just about to get to the good bit."])},exit_stay:i=>{const{normalize:s}=i;return s(["Continue"])},exit_end:i=>{const{normalize:s}=i;return s(["End chat"])}},results:{title:i=>{const{normalize:s}=i;return s(["Magic Maker"])},share_email:i=>{const{normalize:s}=i;return s(["Receive your unique curation by email"])},share_email_consent:i=>{const{normalize:s}=i;return s(["Receive your unique curation by email. <br /> By emailing your results, you agree to receiving marketing communciations. You can unsubscribe at any time."])},shared_email:i=>{const{normalize:s}=i;return s(["Your curation has been sent to your email address"])},result:i=>{const{normalize:s}=i;return s([`We've reached our destination, firstName. I sense you\u2019re a adjective noun.

You prefer ttPoolA and you're more of a ttPoolB. 

I've accompanied countless others on their journeys, and although each one is an individual, I can't help but notice some similarities. From this experience, I sense you may have an interest in topicA, topicB and topicC. 

Being a pioneer is all about leveraging your personal strengths, passions and interests. So here's a bespoke selection of articles, trends and work I've curated just for you, to help you unlock your pioneering power.`])},curated_by_you:i=>{const{normalize:s}=i;return s(["Curated by you"])},adjectives:{thoughtful:i=>{const{normalize:s}=i;return s(["Thoughtful"])},intrepid:i=>{const{normalize:s}=i;return s(["Intrepid"])},pioneering:i=>{const{normalize:s}=i;return s(["Pioneering"])},grounded:i=>{const{normalize:s}=i;return s(["Grounded"])},spontaneous:i=>{const{normalize:s}=i;return s(["Spontaneous"])},patient:i=>{const{normalize:s}=i;return s(["Patient"])}},nouns:{analyst:i=>{const{normalize:s}=i;return s(["Analyst"])},luminary:i=>{const{normalize:s}=i;return s(["Luminary"])},magnate:i=>{const{normalize:s}=i;return s(["Magnate"])},icon:i=>{const{normalize:s}=i;return s(["Icon"])},pragmatist:i=>{const{normalize:s}=i;return s(["Pragmatist"])},virtuoso:i=>{const{normalize:s}=i;return s(["Virtuoso"])}}},cookie:{title:i=>{const{normalize:s}=i;return s(["Personalise your experience"])},copy:i=>{const{normalize:s,interpolate:o,named:a}=i;return s(["We use functional cookies to make the website work properly, analytical cookies to measure your behaviour and marketing cookies for ads and content personalisation. We collect data on how you use our website to make our website easier to use, but also to tailor or personalise communication in advertisements, on our website or apps. Data collected through marketing cookies is also shared with third parties. By clicking accept you agree to this. More information? Read our ",o(a("cookie_policy")),"."])},cookie_policy:i=>{const{normalize:s}=i;return s(["cookie policy"])},cookie_policy_link:i=>{const{normalize:s}=i;return s(["https://www.deptagency.com/en-gb/cookies/"])},accept_all:i=>{const{normalize:s}=i;return s(["Accept all"])},deny:i=>{const{normalize:s}=i;return s(["deny"])},close:i=>{const{normalize:s}=i;return s(["Close popup"])}},marketing:{title:i=>{const{normalize:s}=i;return s(["Stay in the loop!"])},subtitle:i=>{const{normalize:s}=i;return s(["New friend of DEPT\xAE?"])},copy:i=>{const{normalize:s}=i;return s(["Yes! Keep me up-to-date with interesting articles and events."])},button:i=>{const{normalize:s}=i;return s(["Opt-in to marketing"])}},userProfile:{"dipping a toe":i=>{const{normalize:s}=i;return s(["dipping a toe"])},"diving in":i=>{const{normalize:s}=i;return s(["diving in deep"])},espresso:i=>{const{normalize:s}=i;return s(["a Espresso shot"])},coldbrew:i=>{const{normalize:s}=i;return s(["cold brew"])},url:i=>{const{normalize:s}=i;return s(["meeting in the metaverse"])},irl:i=>{const{normalize:s}=i;return s(["rendezvousing in real life"])},fame:i=>{const{normalize:s}=i;return s(["clout-chaser"])},fortune:i=>{const{normalize:s}=i;return s(["money-maker"])},cloud:i=>{const{normalize:s}=i;return s(["being in the clouds"])},details:i=>{const{normalize:s}=i;return s(["drilling into details"])},tortoise:i=>{const{normalize:s}=i;return s(["taking your time"])},hare:i=>{const{normalize:s}=i;return s(["working at lightspeed"])},mathematician:i=>{const{normalize:s}=i;return s(["numbercruncher"])},artist:i=>{const{normalize:s}=i;return s(["aesthete"])},dipperOrDiverA:i=>{const{normalize:s}=i;return s(["dipping a toe to diving in deep"])},dipperOrDiverB:i=>{const{normalize:s}=i;return s(["diving in deep to dipping a toe"])},urlOrIrlA:i=>{const{normalize:s}=i;return s(["rendezvousing in real life to meeting in the metaverse"])},urlOrIrlB:i=>{const{normalize:s}=i;return s(["rendezvousing in real life to meeting in the metaverse"])},fameOrFortuneA:i=>{const{normalize:s}=i;return s(["clout-chaser than a money-maker"])},fameOrFortuneB:i=>{const{normalize:s}=i;return s(["money-maker than a clout-chaser"])},cloudOrDetailsA:i=>{const{normalize:s}=i;return s(["pragmatist than a dreamer"])},cloudOrDetailsB:i=>{const{normalize:s}=i;return s(["dreamer than a pragmatist"])},mathematicianOrArtistA:i=>{const{normalize:s}=i;return s(["numbercruncher than an aesthete"])},mathematicianOrArtistB:i=>{const{normalize:s}=i;return s(["aesthete than a numbercruncher"])},tortoiseOrHareA:i=>{const{normalize:s}=i;return s(["taking your time to working at lightspeed"])},tortoiseOrHareB:i=>{const{normalize:s}=i;return s(["working at lightspeed to taking your time"])},"ai-ml":i=>{const{normalize:s}=i;return s(["AI and ML"])},"ar-vr":i=>{const{normalize:s}=i;return s(["AR and VR"])},automation:i=>{const{normalize:s}=i;return s(["automation"])},advertising:i=>{const{normalize:s}=i;return s(["advertising"])},branding:i=>{const{normalize:s}=i;return s(["branding and design"])},commerce:i=>{const{normalize:s}=i;return s(["commerce"])},creativity:i=>{const{normalize:s}=i;return s(["creativity"])},data:i=>{const{normalize:s}=i;return s(["data"])},"digital-transformation":i=>{const{normalize:s}=i;return s(["digital transformation"])},experience:i=>{const{normalize:s}=i;return s(["experience"])},"growth-marketing":i=>{const{normalize:s}=i;return s(["growth marketing"])},marketplaces:i=>{const{normalize:s}=i;return s(["marketplaces"])},media:i=>{const{normalize:s}=i;return s(["media strategy"])},metaverse:i=>{const{normalize:s}=i;return s(["the metaverse"])},loyalty:i=>{const{normalize:s}=i;return s(["loyalty"])},"search-innovation":i=>{const{normalize:s}=i;return s(["search innovation"])},social:i=>{const{normalize:s}=i;return s(["social media"])},strategy:i=>{const{normalize:s}=i;return s(["strategy"])},"tech-engineering":i=>{const{normalize:s}=i;return s(["technology and engineering"])},web3:i=>{const{normalize:s}=i;return s(["Web3"])}}},"en-US":{general:{back:i=>{const{normalize:s}=i;return s(["Back"])},sound:i=>{const{normalize:s}=i;return s(["Sound"])},on:i=>{const{normalize:s}=i;return s(["On"])},off:i=>{const{normalize:s}=i;return s(["Off"])},press:i=>{const{normalize:s}=i;return s(["Press"])},enter:i=>{const{normalize:s}=i;return s(["Enter"])},loading:i=>{const{normalize:s}=i;return s(["Loading"])},about:i=>{const{normalize:s}=i;return s(["This experience leverages artificial intelligence to define your unique aura and deliver personalized content"])}},header:{subtitle:i=>{const{normalize:s}=i;return s(["Pioneers at heart"])},share_my_aura:i=>{const{normalize:s}=i;return s(["Share my aura"])},introduction:i=>{const{normalize:s}=i;return s(["Introduction"])},explore_topics:i=>{const{normalize:s}=i;return s(["Explore topics"])},create_your_future:i=>{const{normalize:s}=i;return s(["Build your profile"])},generate_another:i=>{const{normalize:s}=i;return s(["Generate another"])},menu:i=>{const{normalize:s}=i;return s(["Menu"])},close_menu:i=>{const{normalize:s}=i;return s(["Close"])}},cards:{written_by:i=>{const{normalize:s}=i;return s(["Written by"])},created_by:i=>{const{normalize:s}=i;return s(["Created by"])},curated_by:i=>{const{normalize:s}=i;return s(["Curated by"])},sourced_by:i=>{const{normalize:s}=i;return s(["Source:"])},article:i=>{const{normalize:s}=i;return s(["Article"])},case:i=>{const{normalize:s}=i;return s(["Case study"])},trend:i=>{const{normalize:s}=i;return s(["Trend"])},gated:i=>{const{normalize:s}=i;return s(["Gated"])},QR_code:{title:i=>{const{normalize:s}=i;return s(["SCAN THE QR CODE"])},scan:i=>{const{normalize:s}=i;return s(["Get your personalized results"])}},aura:{color:i=>{const{normalize:s}=i;return s(["Color"])},cta:i=>{const{normalize:s}=i;return s(["Explore my topics"])},seed:i=>{const{normalize:s}=i;return s(["Seed"])},your_personal_aura:i=>{const{normalize:s}=i;return s(["Your personal aura is"])}}},homepage:{welcome:i=>{const{normalize:s}=i;return s(["Welcome"])},intro:i=>{const{normalize:s}=i;return s(["Let's take a trip to future frontiers to define your pioneer persona, including a curation of personalized content to help you unlock your pioneering power."])}},topics:{explore:i=>{const{normalize:s}=i;return s(["Explore"])},topics:i=>{const{normalize:s}=i;return s(["Topics"])},copy:i=>{const{normalize:s}=i;return s(["Whether you\u2019re here for optimization, augmentation, personalization or just good vibrations. Pick your pioneering topic."])},content:i=>{const{normalize:s}=i;return s(["Content"])}},experience:{progress:i=>{const{normalize:s}=i;return s(["Progress"])},exit_text:i=>{const{normalize:s,interpolate:o,named:a}=i;return s(["Leaving so soon, ",o(a("user")),"? We're just about to get to the good bit."])},exit_stay:i=>{const{normalize:s}=i;return s(["Continue"])},exit_end:i=>{const{normalize:s}=i;return s(["End chat"])}},results:{title:i=>{const{normalize:s}=i;return s(["Magic Maker"])},share_email:i=>{const{normalize:s}=i;return s(["Receive your unique curation by email"])},share_email_consent:i=>{const{normalize:s}=i;return s(["Receive your unique curation by email. <br /> By emailing your results, you agree to receiving marketing communciations. You can unsubscribe at any time."])},shared_email:i=>{const{normalize:s}=i;return s(["Your curation has been sent to your email address"])},result:i=>{const{normalize:s}=i;return s([`We've reached our destination, firstName. I sense you\u2019re a adjective noun.

You prefer ttPoolA and you're more of a ttPoolB. 

I've accompanied countless others on their journeys, and although each one is an individual, I can't help but notice some similarities. From this experience, I sense you may have an interest in topicA, topicB and topicC. 

Being a pioneer is all about leveraging your personal strengths, passions and interests. So here's a bespoke selection of articles, trends and work I've curated just for you, to help you unlock your pioneering power.`])},curated_by_you:i=>{const{normalize:s}=i;return s(["Curated by you"])},adjectives:{thoughtful:i=>{const{normalize:s}=i;return s(["Thoughtful"])},intrepid:i=>{const{normalize:s}=i;return s(["Intrepid"])},pioneering:i=>{const{normalize:s}=i;return s(["Pioneering"])},grounded:i=>{const{normalize:s}=i;return s(["Grounded"])},spontaneous:i=>{const{normalize:s}=i;return s(["Spontaneous"])},patient:i=>{const{normalize:s}=i;return s(["Patient"])}},nouns:{analyst:i=>{const{normalize:s}=i;return s(["Analyst"])},luminary:i=>{const{normalize:s}=i;return s(["Visionary"])},magnate:i=>{const{normalize:s}=i;return s(["Leader"])},icon:i=>{const{normalize:s}=i;return s(["Icon"])},pragmatist:i=>{const{normalize:s}=i;return s(["Pragmatist"])},virtuoso:i=>{const{normalize:s}=i;return s(["Virtuoso"])}}},cookie:{title:i=>{const{normalize:s}=i;return s(["Personalize your experience"])},copy:i=>{const{normalize:s,interpolate:o,named:a}=i;return s(["We use functional cookies to make the website work properly, analytical cookies to measure your behavior and marketing cookies for ads and content personalization. We collect data on how you use our website to make our website easier to use, but also to tailor or personalize communication in advertisements, on our website or apps. Data collected through marketing cookies is also shared with third parties. By clicking accept you agree to this. More information? Read our ",o(a("cookie_policy")),"."])},cookie_policy:i=>{const{normalize:s}=i;return s(["cookie policy"])},cookie_policy_link:i=>{const{normalize:s}=i;return s(["https://www.deptagency.com/en-gb/cookies/"])},accept_all:i=>{const{normalize:s}=i;return s(["Accept all"])},deny:i=>{const{normalize:s}=i;return s(["deny"])},close:i=>{const{normalize:s}=i;return s(["Close popup"])}},marketing:{title:i=>{const{normalize:s}=i;return s(["Stay in the loop!"])},subtitle:i=>{const{normalize:s}=i;return s(["New friend of DEPT\xAE?"])},copy:i=>{const{normalize:s}=i;return s(["Yes! Keep me up-to-date with interesting articles and events."])},button:i=>{const{normalize:s}=i;return s(["Opt-in to marketing"])}},userProfile:{"dipping a toe":i=>{const{normalize:s}=i;return s(["dipping a toe"])},"diving in":i=>{const{normalize:s}=i;return s(["diving in deep"])},espresso:i=>{const{normalize:s}=i;return s(["a Espresso shot"])},coldbrew:i=>{const{normalize:s}=i;return s(["cold brew"])},url:i=>{const{normalize:s}=i;return s(["meeting in the metaverse"])},irl:i=>{const{normalize:s}=i;return s(["rendezvousing in real life"])},fame:i=>{const{normalize:s}=i;return s(["clout-chaser"])},fortune:i=>{const{normalize:s}=i;return s(["money-maker"])},cloud:i=>{const{normalize:s}=i;return s(["being in the clouds"])},details:i=>{const{normalize:s}=i;return s(["drilling into details"])},tortoise:i=>{const{normalize:s}=i;return s(["taking your time"])},hare:i=>{const{normalize:s}=i;return s(["working at lightspeed"])},mathematician:i=>{const{normalize:s}=i;return s(["numbercruncher"])},artist:i=>{const{normalize:s}=i;return s(["aesthete"])},dipperOrDiverA:i=>{const{normalize:s}=i;return s(["dipping a toe to diving in deep"])},dipperOrDiverB:i=>{const{normalize:s}=i;return s(["diving in deep to dipping a toe"])},urlOrIrlA:i=>{const{normalize:s}=i;return s(["rendezvousing in real life to meeting in the metaverse"])},urlOrIrlB:i=>{const{normalize:s}=i;return s(["rendezvousing in real life to meeting in the metaverse"])},fameOrFortuneA:i=>{const{normalize:s}=i;return s(["clout-chaser than a money-maker"])},fameOrFortuneB:i=>{const{normalize:s}=i;return s(["money-maker than a clout-chaser"])},cloudOrDetailsA:i=>{const{normalize:s}=i;return s(["pragmatist than a dreamer"])},cloudOrDetailsB:i=>{const{normalize:s}=i;return s(["dreamer than a pragmatist"])},mathematicianOrArtistA:i=>{const{normalize:s}=i;return s(["numbercruncher than an aesthete"])},mathematicianOrArtistB:i=>{const{normalize:s}=i;return s(["aesthete than a numbercruncher"])},tortoiseOrHareA:i=>{const{normalize:s}=i;return s(["taking your time to working at lightspeed"])},tortoiseOrHareB:i=>{const{normalize:s}=i;return s(["working at lightspeed to taking your time"])},"ai-ml":i=>{const{normalize:s}=i;return s(["AI and ML"])},"ar-vr":i=>{const{normalize:s}=i;return s(["AR and VR"])},automation:i=>{const{normalize:s}=i;return s(["automation"])},advertising:i=>{const{normalize:s}=i;return s(["advertising"])},branding:i=>{const{normalize:s}=i;return s(["branding and design"])},commerce:i=>{const{normalize:s}=i;return s(["commerce"])},creativity:i=>{const{normalize:s}=i;return s(["creativity"])},data:i=>{const{normalize:s}=i;return s(["data"])},"digital-transformation":i=>{const{normalize:s}=i;return s(["digital transformation"])},experience:i=>{const{normalize:s}=i;return s(["experience"])},"growth-marketing":i=>{const{normalize:s}=i;return s(["growth marketing"])},marketplaces:i=>{const{normalize:s}=i;return s(["marketplaces"])},media:i=>{const{normalize:s}=i;return s(["media strategy"])},metaverse:i=>{const{normalize:s}=i;return s(["the metaverse"])},loyalty:i=>{const{normalize:s}=i;return s(["loyalty"])},"search-innovation":i=>{const{normalize:s}=i;return s(["search innovation"])},social:i=>{const{normalize:s}=i;return s(["social media"])},strategy:i=>{const{normalize:s}=i;return s(["strategy"])},"tech-engineering":i=>{const{normalize:s}=i;return s(["technology and engineering"])},web3:i=>{const{normalize:s}=i;return s(["Web3"])}}},"en-DE":{general:{back:i=>{const{normalize:s}=i;return s(["Back"])},sound:i=>{const{normalize:s}=i;return s(["Sound"])},on:i=>{const{normalize:s}=i;return s(["On"])},off:i=>{const{normalize:s}=i;return s(["Off"])},press:i=>{const{normalize:s}=i;return s(["Press"])},enter:i=>{const{normalize:s}=i;return s(["Enter"])},loading:i=>{const{normalize:s}=i;return s(["Loading"])},about:i=>{const{normalize:s}=i;return s(["This experience leverages artificial intelligence to define your unique aura and deliver personalized content"])}},header:{subtitle:i=>{const{normalize:s}=i;return s(["Pioneers at heart"])},share_my_aura:i=>{const{normalize:s}=i;return s(["Share my aura"])},introduction:i=>{const{normalize:s}=i;return s(["Introduction"])},explore_topics:i=>{const{normalize:s}=i;return s(["Explore topics"])},create_your_future:i=>{const{normalize:s}=i;return s(["Build your profile"])},generate_another:i=>{const{normalize:s}=i;return s(["Generate another"])},menu:i=>{const{normalize:s}=i;return s(["Menu"])},close_menu:i=>{const{normalize:s}=i;return s(["Close"])}},cards:{written_by:i=>{const{normalize:s}=i;return s(["Written by"])},created_by:i=>{const{normalize:s}=i;return s(["Created by"])},curated_by:i=>{const{normalize:s}=i;return s(["Curated by"])},sourced_by:i=>{const{normalize:s}=i;return s(["Source:"])},article:i=>{const{normalize:s}=i;return s(["Article"])},case:i=>{const{normalize:s}=i;return s(["Case study"])},trend:i=>{const{normalize:s}=i;return s(["Trend"])},gated:i=>{const{normalize:s}=i;return s(["Gated"])},QR_code:{title:i=>{const{normalize:s}=i;return s(["SCAN THE QR CODE"])},scan:i=>{const{normalize:s}=i;return s(["Get your personalized results"])}},aura:{color:i=>{const{normalize:s}=i;return s(["Color"])},cta:i=>{const{normalize:s}=i;return s(["Explore my topics"])},seed:i=>{const{normalize:s}=i;return s(["Seed"])},your_personal_aura:i=>{const{normalize:s}=i;return s(["Your personal aura is"])}}},homepage:{welcome:i=>{const{normalize:s}=i;return s(["Welcome"])},intro:i=>{const{normalize:s}=i;return s(["Let's take a trip to future frontiers to define your pioneer persona, including a curation of personalized content to help you unlock your pioneering power."])}},topics:{explore:i=>{const{normalize:s}=i;return s(["Explore"])},topics:i=>{const{normalize:s}=i;return s(["Topics"])},copy:i=>{const{normalize:s}=i;return s(["Whether you\u2019re here for optimization, augmentation, personalization or just good vibrations. Pick your pioneering topic."])},content:i=>{const{normalize:s}=i;return s(["Content"])}},experience:{progress:i=>{const{normalize:s}=i;return s(["Progress"])},exit_text:i=>{const{normalize:s,interpolate:o,named:a}=i;return s(["Leaving so soon, ",o(a("user")),"? We're just about to get to the good bit."])},exit_stay:i=>{const{normalize:s}=i;return s(["Continue"])},exit_end:i=>{const{normalize:s}=i;return s(["End chat"])}},results:{title:i=>{const{normalize:s}=i;return s(["Magic Maker"])},share_email:i=>{const{normalize:s}=i;return s(["Receive your unique curation by email"])},share_email_consent:i=>{const{normalize:s}=i;return s(["Receive your unique curation by email. <br /> By emailing your results, you agree to receiving marketing communciations. You can unsubscribe at any time."])},shared_email:i=>{const{normalize:s}=i;return s(["Your curation has been sent to your email address"])},result:i=>{const{normalize:s}=i;return s([`We've reached our destination, firstName. I sense you\u2019re a adjective noun.

You prefer ttPoolA and you're more of a ttPoolB. 

I've accompanied countless others on their journeys, and although each one is an individual, I can't help but notice some similarities. From this experience, I sense you may have an interest in topicA, topicB and topicC. 

Being a pioneer is all about leveraging your personal strengths, passions and interests. So here's a bespoke selection of articles, trends and work I've curated just for you, to help you unlock your pioneering power.`])},curated_by_you:i=>{const{normalize:s}=i;return s(["Curated by you"])},adjectives:{thoughtful:i=>{const{normalize:s}=i;return s(["Thoughtful"])},intrepid:i=>{const{normalize:s}=i;return s(["Intrepid"])},pioneering:i=>{const{normalize:s}=i;return s(["Pioneering"])},grounded:i=>{const{normalize:s}=i;return s(["Grounded"])},spontaneous:i=>{const{normalize:s}=i;return s(["Spontaneous"])},patient:i=>{const{normalize:s}=i;return s(["Patient"])}},nouns:{analyst:i=>{const{normalize:s}=i;return s(["Analyst"])},luminary:i=>{const{normalize:s}=i;return s(["Visionary"])},magnate:i=>{const{normalize:s}=i;return s(["Leader"])},icon:i=>{const{normalize:s}=i;return s(["Icon"])},pragmatist:i=>{const{normalize:s}=i;return s(["Pragmatist"])},virtuoso:i=>{const{normalize:s}=i;return s(["Virtuoso"])}}},cookie:{title:i=>{const{normalize:s}=i;return s(["Personalize your experience"])},copy:i=>{const{normalize:s,interpolate:o,named:a}=i;return s(["We use functional cookies to make the website work properly, analytical cookies to measure your behavior and marketing cookies for ads and content personalization. We collect data on how you use our website to make our website easier to use, but also to tailor or personalize communication in advertisements, on our website or apps. Data collected through marketing cookies is also shared with third parties. By clicking accept you agree to this. More information? Read our ",o(a("cookie_policy")),"."])},cookie_policy:i=>{const{normalize:s}=i;return s(["cookie policy"])},cookie_policy_link:i=>{const{normalize:s}=i;return s(["https://www.deptagency.com/en-gb/cookies/"])},accept_all:i=>{const{normalize:s}=i;return s(["Accept all"])},deny:i=>{const{normalize:s}=i;return s(["deny"])},close:i=>{const{normalize:s}=i;return s(["Close popup"])}},marketing:{title:i=>{const{normalize:s}=i;return s(["Stay in the loop!"])},subtitle:i=>{const{normalize:s}=i;return s(["New friend of DEPT\xAE?"])},copy:i=>{const{normalize:s}=i;return s(["Yes! Keep me up-to-date with interesting articles and events."])},button:i=>{const{normalize:s}=i;return s(["Opt-in to marketing"])}},userProfile:{"dipping a toe":i=>{const{normalize:s}=i;return s(["dipping a toe"])},"diving in":i=>{const{normalize:s}=i;return s(["diving in deep"])},espresso:i=>{const{normalize:s}=i;return s(["a Espresso shot"])},coldbrew:i=>{const{normalize:s}=i;return s(["cold brew"])},url:i=>{const{normalize:s}=i;return s(["meeting in the metaverse"])},irl:i=>{const{normalize:s}=i;return s(["rendezvousing in real life"])},fame:i=>{const{normalize:s}=i;return s(["clout-chaser"])},fortune:i=>{const{normalize:s}=i;return s(["money-maker"])},cloud:i=>{const{normalize:s}=i;return s(["being in the clouds"])},details:i=>{const{normalize:s}=i;return s(["drilling into details"])},tortoise:i=>{const{normalize:s}=i;return s(["taking your time"])},hare:i=>{const{normalize:s}=i;return s(["working at lightspeed"])},mathematician:i=>{const{normalize:s}=i;return s(["numbercruncher"])},artist:i=>{const{normalize:s}=i;return s(["aesthete"])},dipperOrDiverA:i=>{const{normalize:s}=i;return s(["dipping a toe to diving in deep"])},dipperOrDiverB:i=>{const{normalize:s}=i;return s(["diving in deep to dipping a toe"])},urlOrIrlA:i=>{const{normalize:s}=i;return s(["rendezvousing in real life to meeting in the metaverse"])},urlOrIrlB:i=>{const{normalize:s}=i;return s(["rendezvousing in real life to meeting in the metaverse"])},fameOrFortuneA:i=>{const{normalize:s}=i;return s(["clout-chaser than a money-maker"])},fameOrFortuneB:i=>{const{normalize:s}=i;return s(["money-maker than a clout-chaser"])},cloudOrDetailsA:i=>{const{normalize:s}=i;return s(["pragmatist than a dreamer"])},cloudOrDetailsB:i=>{const{normalize:s}=i;return s(["dreamer than a pragmatist"])},mathematicianOrArtistA:i=>{const{normalize:s}=i;return s(["numbercruncher than an aesthete"])},mathematicianOrArtistB:i=>{const{normalize:s}=i;return s(["aesthete than a numbercruncher"])},tortoiseOrHareA:i=>{const{normalize:s}=i;return s(["taking your time to working at lightspeed"])},tortoiseOrHareB:i=>{const{normalize:s}=i;return s(["working at lightspeed to taking your time"])},"ai-ml":i=>{const{normalize:s}=i;return s(["AI and ML"])},"ar-vr":i=>{const{normalize:s}=i;return s(["AR and VR"])},automation:i=>{const{normalize:s}=i;return s(["automation"])},advertising:i=>{const{normalize:s}=i;return s(["advertising"])},branding:i=>{const{normalize:s}=i;return s(["branding and design"])},commerce:i=>{const{normalize:s}=i;return s(["commerce"])},creativity:i=>{const{normalize:s}=i;return s(["creativity"])},data:i=>{const{normalize:s}=i;return s(["data"])},"digital-transformation":i=>{const{normalize:s}=i;return s(["digital transformation"])},experience:i=>{const{normalize:s}=i;return s(["experience"])},"growth-marketing":i=>{const{normalize:s}=i;return s(["growth marketing"])},marketplaces:i=>{const{normalize:s}=i;return s(["marketplaces"])},media:i=>{const{normalize:s}=i;return s(["media strategy"])},metaverse:i=>{const{normalize:s}=i;return s(["the metaverse"])},loyalty:i=>{const{normalize:s}=i;return s(["loyalty"])},"search-innovation":i=>{const{normalize:s}=i;return s(["search innovation"])},social:i=>{const{normalize:s}=i;return s(["social media"])},strategy:i=>{const{normalize:s}=i;return s(["strategy"])},"tech-engineering":i=>{const{normalize:s}=i;return s(["technology and engineering"])},web3:i=>{const{normalize:s}=i;return s(["Web3"])}}}})});return e.vueI18n=await n(),e.locales=["en-GB","en-DE","en-US"],e.defaultLocale="en-US",e.defaultDirection="ltr",e.routesNameSeparator="___",e.trailingSlash=!1,e.defaultLocaleRouteNameSuffix="default",e.strategy="prefix",e.lazy=!1,e.langDir=null,e.rootRedirect=null,e.detectBrowserLanguage=Object({alwaysRedirect:!1,cookieCrossOrigin:!1,cookieDomain:null,cookieKey:"i18n_redirected",cookieSecure:!1,fallbackLocale:"",redirectOn:"root",useCookie:!0}),e.differentDomains=!1,e.baseUrl="",e.dynamicRouteParams=!1,e.customRoutes="page",e.pages=Object({}),e.skipSettingLocaleOnNavigate=!1,e.onBeforeLanguageSwitch=()=>"",e.onLanguageSwitched=()=>null,e.types=void 0,e.debug=!1,e},It=Object({vueI18n:void 0,locales:[],defaultLocale:"",defaultDirection:"ltr",routesNameSeparator:"___",trailingSlash:!1,defaultLocaleRouteNameSuffix:"default",strategy:"prefix_except_default",lazy:!1,langDir:null,rootRedirect:null,detectBrowserLanguage:Object({alwaysRedirect:!1,cookieCrossOrigin:!1,cookieDomain:null,cookieKey:"i18n_redirected",cookieSecure:!1,fallbackLocale:"",redirectOn:"root",useCookie:!0}),differentDomains:!1,baseUrl:"",dynamicRouteParams:!1,customRoutes:"page",pages:Object({}),skipSettingLocaleOnNavigate:!1,onBeforeLanguageSwitch:()=>"",onLanguageSwitched:()=>null,types:void 0,debug:!1}),bo=Object({__normalizedLocales:[Object({code:"en-GB",iso:"en-GB"}),Object({code:"en-DE",iso:"en-DE"}),Object({code:"en-US",iso:"en-US"})]}),ev="@nuxtjs/i18n";/*! js-cookie v3.0.1 | MIT */function lo(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var gT={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function gc(t,e){function n(i,s,o){if(!(typeof document>"u")){o=lo({},e,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var l in o)!o[l]||(a+="; "+l,o[l]!==!0&&(a+="="+o[l].split(";")[0]));return document.cookie=i+"="+t.write(s,i)+a}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var s=document.cookie?document.cookie.split("; "):[],o={},a=0;a<s.length;a++){var l=s[a].split("="),c=l.slice(1).join("=");try{var u=decodeURIComponent(l[0]);if(o[u]=t.read(c,u),i===u)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:r,remove:function(i,s){n(i,"",lo({},s,{expires:-1}))},withAttributes:function(i){return gc(this.converter,lo({},this.attributes,i))},withConverter:function(i){return gc(lo({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var tv=gc(gT,{path:"/"});function Do(t){return ev+" "+t}function vT(t){return t!=null&&("__VUE_I18N_BRIDGE__"in t||"_sync"in t)}function $s(t,e,...n){const r=Qi(t)?t.global:t,[i,s]=[r,r[e]];return Reflect.apply(s,i,[...n])}function bT(t,e){const n=Qi(t)?t.global:t;return qr(n)?n[e].value:(Gs(n)||gi(n)||vT(n),n[e])}function Bh(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function _T(t,e){return function(){return Reflect.apply(e,{i18n:t.$i18n,getRouteBaseName:t.$getRouteBaseName,localePath:t.$localePath,localeRoute:t.$localeRoute,switchLocalePath:t.$switchLocalePath,localeHead:t.$localeHead,route:t.$router.currentRoute.value,router:t.$router,store:void 0},arguments)}}function nv(t,e){for(const n in t)C.exports.isObject(t[n])?(C.exports.isObject(e[n])||(e[n]={}),nv(t[n],e[n])):e[n]=t[n]}async function vc(t,e){let n=null;try{const r=await e().then(i=>i.default||i);C.exports.isFunction(r)?console.error(Do("Not support executable file (e.g. js, cjs, mjs)")):n=r}catch(r){console.error(Do("Failed locale loading: "+r.message))}return n}const Ka=[],rr=new Map;async function No(t,e,n){if(Ka.includes(e))console.warn(Do("Could not find "+e+" locale code in localeMessages"));else{const r=dT[e];if(r!=null){if(r.length===1){const{key:i,load:s}=r[0];let o=null;rr.has(i)?o=rr.get(i):(o=await vc(t,s),o!=null&&rr.set(i,o)),o!=null&&(n(e,o),Ka.push(e))}else if(r.length>1){const i={};for(const{key:s,load:o}of r){let a=null;rr.has(s)?a=rr.get(s):(a=await vc(t,o),a!=null&&rr.set(s,a)),a!=null&&nv(a,i)}n(e,i),Ka.push(e)}}}}const Vh=[];async function yT(t,e,n){if(!Vh.includes(e)){const r=pT[e]||[];for(const i of r){const s=await vc(t,i);s!=null&&(n(e,s),Vh.push(e))}}}function iv(t,e){let n;return navigator.languages&&(n=$P(t.__normalizedLocales,navigator.languages)),n}function Ru(t,{useCookie:e=It.detectBrowserLanguage.useCookie,cookieKey:n=It.detectBrowserLanguage.cookieKey,localeCodes:r=[]}={}){if(e){let i;if(i=tv.get(n),i&&r.includes(i))return i}}function xT(t,e,{useCookie:n=It.detectBrowserLanguage.useCookie,cookieKey:r=It.detectBrowserLanguage.cookieKey,cookieDomain:i=It.detectBrowserLanguage.cookieDomain,cookieSecure:s=It.detectBrowserLanguage.cookieSecure,cookieCrossOrigin:o=It.detectBrowserLanguage.cookieCrossOrigin}={}){if(!n)return;const a=new Date,l={expires:new Date(a.setDate(a.getDate()+365)),path:"/",sameSite:o?"none":"lax",secure:o||s};i&&(l.domain=i),tv.set(r,t,l)}const rv={locale:"",stat:!1,reason:"unknown",from:"unknown"};function sv(t,e,n,r,i=[],s="",o){const{strategy:a}=n;if(a==="no_prefix"&&o==="ssg_ignore")return{locale:"",stat:!0,reason:"detect_ignore_on_ssg"};const{redirectOn:l,alwaysRedirect:c,useCookie:u,fallbackLocale:h}=n.detectBrowserLanguage,f=C.exports.isString(t)?t:t.path;if(a!=="no_prefix"){if(l==="root"){if(f!=="/")return{locale:"",stat:!1,reason:"not_redirect_on_root"}}else if(l==="no prefix"&&!c&&f.match(Y0(i)))return{locale:"",stat:!1,reason:"not_redirect_on_no_prefix"}}let d="unknown",p,m;u&&(m=p=Ru(e,{...n.detectBrowserLanguage,localeCodes:i}),d="cookie"),m||(m=iv(r),d="navigator_or_header");const g=m||h;!m&&h&&(d="fallback");const x=s||n.vueI18n.locale;if(g&&(!u||c||!p)){if(a==="no_prefix")return{locale:g,stat:!0,from:d};if(g!==x)return{locale:g,stat:!0,from:d};if(c&&f==="/")return{locale:g,stat:!0,from:d}}return o==="ssg_setup"&&g?{locale:g,stat:!0,from:d}:{locale:"",stat:!1,reason:"not_found_match"}}function wT(){let t;return t=window.location.host,t}function ST(t){let e=wT()||"";if(e){const n=t.find(r=>r.domain===e);if(n)return n.code;e=""}return e}function ov(t,e,n){const r=e.find(i=>i.code===t);if(r&&r.domain){if(Vs(r.domain))return r.domain;let i;return i=window.location.protocol.split(":")[0],i+"://"+r.domain}console.warn(Do("Could not find domain name for locale "+t))}function PT(t,e){return $s(t,"setLocale",e)}function TT(t,e){return $s(t,"setLocaleCookie",e)}function av(t,e,n){return $s(t,"mergeLocaleMessage",e,n)}function ET(t,e,n,r,i){return $s(t,"onBeforeLanguageSwitch",e,n,r,i)}function CT(t,e,n){return $s(t,"onLanguageSwitched",e,n)}function lv(t,e){let n=[];if(C.exports.isArray(t))n=t;else if(C.exports.isObject(t)){const r=[...e,"default"];for(const i of r)t[i]&&(n=[...n,...t[i].filter(Boolean)])}else C.exports.isString(t)&&e.every(r=>r!==t)&&n.push(t);return n}async function AT(t,e,n){const{defaultLocale:r,initialLocale:i,localeCodes:s,fallbackLocale:o,langDir:a,lazy:l}=n,c=(u,h)=>{const f=e[u]||{};e[u]={...f,...h}};if(a){if(l&&o){const h=lv(o,[r,i]);await Promise.all(h.map(f=>No(t,f,c)))}const u=l?[...new Set().add(r).add(i)]:s;await Promise.all(u.map(h=>No(t,h,c)))}return e}async function cv(t,e,n){await yT(t,n,(r,i)=>av(e,r,i))}async function Hh(t,e,n,{useCookie:r=It.detectBrowserLanguage.useCookie,skipSettingLocaleOnNavigate:i=It.skipSettingLocaleOnNavigate,differentDomains:s=It.differentDomains,initial:o=!1,lazy:a=!1,langDir:l=null}={}){let c=!1;const u=_a(n);if(!t)return[c,u];if(!o&&s)return[c,u];if(u===t)return[c,u];const h=ET(n,u,t,o,e),f=HP(n);if(h&&f&&f.includes(h)){if(h===u)return[c,u];t=h}if(l){const d=bT(n,"fallbackLocale");if(a){const p=(m,g)=>av(n,m,g);if(d){const m=lv(d,[t]);await Promise.all(m.map(g=>No(e,g,p)))}await No(e,t,p)}}return await cv(e,n,t),i?[c,u]:(r&&TT(n,t),$0(n,t),CT(n,u,t),c=!0,[c,u])}function jh(t,e,n,r,i,s,o=[],a="normal"){const{strategy:l,defaultLocale:c,differentDomains:u}=r,h=C.exports.isFunction(i)?i():i,{locale:f,stat:d,reason:p,from:m}=r.detectBrowserLanguage?sv(t,e,r,bo,o,h,a):rv;if(p==="detect_ignore_on_ssg")return h;let g=f;return g||(u?g=ST(s):l!=="no_prefix"?g=n(t):r.detectBrowserLanguage||(g=h)),!g&&r.detectBrowserLanguage&&r.detectBrowserLanguage.useCookie&&(g=Ru(e,{...r.detectBrowserLanguage,localeCodes:o})),g||(g=c||""),g}function Wh(t,e,n,r,i){const{strategy:s,defaultLocale:o,differentDomains:a}=i;let l="";if(!a&&s!=="no_prefix"&&(r(t)!==n||s==="prefix_and_default"&&n===o)){const{fullPath:c}=t,u=decodeURI(c),h=e.$switchLocalePath(n)||e.$localePath(c,n);C.exports.isString(h)&&h&&h!==c&&h!==u&&!h.startsWith("//")&&(l=h)}{const u=hT({i18n:As(e.$i18n),route:t,router:e.$router})(n);C.exports.isString(u)&&(l=u)}return l}function zT(t){return C.exports.isObject(t)&&"path"in t&&"statusCode"in t}const RT=()=>qg(ev+":redirect",()=>"");async function Gh(t,{status:e=302,rootRedirect:n=It.rootRedirect,differentDomains:r=It.differentDomains,skipSettingLocaleOnNavigate:i=It.skipSettingLocaleOnNavigate}={}){const{i18n:s,locale:o,route:a}=t;let{redirectPath:l}=t;if(a.path==="/"&&n)return C.exports.isString(n)?l=n:zT(n)&&(l="/"+n.path,e=n.statusCode),Ql(l,{redirectCode:e});if(i){s.__pendingLocale=o,s.__pendingLocalePromise=new Promise(c=>{s.__resolvePendingLocalePromise=c});return}if(r){const c=RT();c.value!==l&&(c.value="",window.location.assign(l))}else if(l)return Ql(l,{redirectCode:e})}function OT(t,e){Bh(t,"$i18n",e.global);for(const n of[["getRouteBaseName",Fr],["localePath",Au],["localeRoute",zu],["switchLocalePath",zs],["localeHead",Z0]])Bh(t,"$"+n[0],_T(t,n[1]))}function MT(t){return e=>K0(e)&&!t}function FT(t,e,n){return(r,i)=>{if(t){const s=ov(i,e);return s?Hs(s,r):r}else return Q0(r)}}function kT(t,e){return n=>{if(C.exports.isFunction(t))return t(n);const{differentDomains:r,localeCodeLoader:i,normalizedLocales:s}=e,o=C.exports.isFunction(i)?i():i;if(r&&o){const a=ov(o,s,e.nuxt);if(a)return a}return t}}const LT=En(async t=>{var z;let e,n;const r=js(),i=gu(),{vueApp:s}=t,o=t,a=([e,n]=cr(()=>mT()),e=await e,n(),e),l=a.detectBrowserLanguage&&a.detectBrowserLanguage.useCookie,{__normalizedLocales:c}=bo,{defaultLocale:u,differentDomains:h,skipSettingLocaleOnNavigate:f,lazy:d,langDir:p,routesNameSeparator:m,defaultLocaleRouteNameSuffix:g,strategy:x,rootRedirect:b}=a;a.baseUrl=kT(a.baseUrl,{differentDomains:h,nuxt:o,localeCodeLoader:u,normalizedLocales:c});const _=eT(Ai,m,g),v=a.vueI18n;v.messages=v.messages||{},v.fallbackLocale=(z=v.fallbackLocale)!=null?z:!1,ZP(r,{...a,dynamicRouteParamsKey:"nuxtI18n",switchLocalePathIntercepter:FT(h,c),prefixable:MT(h)});const y=S=>S||v.locale||"en-US";let w=jh(i,t.ssrContext,_,a,y(u),c,Ai,x==="no_prefix"?"ssg_ignore":"normal");v.messages=([e,n]=cr(()=>AT(o,v.messages,{...a,initialLocale:w,fallbackLocale:v.fallbackLocale,localeCodes:Ai})),e=await e,n(),e),w=y(w);const P=mP({...v,locale:w});let T=!0;const R=S=>w!==S&&T;let k=!0;const D=()=>k;D()&&x==="no_prefix"&&t.hook("app:mounted",async()=>{const{locale:S,stat:A,reason:I,from:B}=a.detectBrowserLanguage?sv(i,o,a,bo,Ai,w,"ssg_setup"):rv;PT(P,S),k=!1}),XP(P,{locales:a.locales,localeCodes:Ai,baseUrl:a.baseUrl,context:o,hooks:{onExtendComposer(S){S.strategy=x,S.localeProperties=Me(()=>c.find(A=>A.code===S.locale.value)||{code:S.locale.value}),S.setLocale=async A=>{const I=R(A),[B]=await Hh(A,o,P,{useCookie:l,differentDomains:h,initial:I,skipSettingLocaleOnNavigate:f,lazy:d,langDir:p});B&&I&&(T=!1);const $=Wh(i,o,A,_,a);Gh({i18n:P,redirectPath:$,locale:A,route:i},{differentDomains:h,skipSettingLocaleOnNavigate:f,rootRedirect:b})},S.differentDomains=h,S.getBrowserLocale=()=>iv(bo,t.ssrContext),S.getLocaleCookie=()=>Ru(t.ssrContext,{...a.detectBrowserLanguage,localeCodes:Ai}),S.setLocaleCookie=A=>xT(A,t.ssrContext,a.detectBrowserLanguage||void 0),S.onBeforeLanguageSwitch=a.onBeforeLanguageSwitch,S.onLanguageSwitched=a.onLanguageSwitched,S.finalizePendingLocaleChange=async()=>{!P.__pendingLocale||($0(P,P.__pendingLocale),P.__resolvePendingLocalePromise&&await P.__resolvePendingLocalePromise(),P.__pendingLocale=void 0)},S.waitForPendingLocaleChange=async()=>{P.__pendingLocale&&P.__pendingLocalePromise&&await P.__pendingLocalePromise}},onExtendExportedGlobal(S){return{strategy:{get(){return S.strategy}},localeProperties:{get(){return S.localeProperties.value}},setLocale:{get(){return async A=>Reflect.apply(S.setLocale,S,[A])}},differentDomains:{get(){return S.differentDomains}},getBrowserLocale:{get(){return()=>Reflect.apply(S.getBrowserLocale,S,[])}},getLocaleCookie:{get(){return()=>Reflect.apply(S.getLocaleCookie,S,[])}},setLocaleCookie:{get(){return A=>Reflect.apply(S.setLocaleCookie,S,[A])}},onBeforeLanguageSwitch:{get(){return(A,I,B,$)=>Reflect.apply(S.onBeforeLanguageSwitch,S,[A,I,B,$])}},onLanguageSwitched:{get(){return(A,I)=>Reflect.apply(S.onLanguageSwitched,S,[A,I])}},finalizePendingLocaleChange:{get(){return()=>Reflect.apply(S.finalizePendingLocaleChange,S,[])}},waitForPendingLocaleChange:{get(){return()=>Reflect.apply(S.waitForPendingLocaleChange,S,[])}}}},onExtendVueI18n(S){return{strategy:{get(){return S.strategy}},localeProperties:{get(){return S.localeProperties.value}},setLocale:{get(){return async A=>Reflect.apply(S.setLocale,S,[A])}},differentDomains:{get(){return S.differentDomains}},getBrowserLocale:{get(){return()=>Reflect.apply(S.getBrowserLocale,S,[])}},getLocaleCookie:{get(){return()=>Reflect.apply(S.getLocaleCookie,S,[])}},setLocaleCookie:{get(){return A=>Reflect.apply(S.setLocaleCookie,S,[A])}},onBeforeLanguageSwitch:{get(){return(A,I,B,$)=>Reflect.apply(S.onBeforeLanguageSwitch,S,[A,I,B,$])}},onLanguageSwitched:{get(){return(A,I)=>Reflect.apply(S.onLanguageSwitched,S,[A,I])}},finalizePendingLocaleChange:{get(){return()=>Reflect.apply(S.finalizePendingLocaleChange,S,[])}},waitForPendingLocaleChange:{get(){return()=>Reflect.apply(S.waitForPendingLocaleChange,S,[])}}}}}});const M={__composerExtend:S=>{const A=As(P);S.strategy=A.strategy,S.localeProperties=Me(()=>A.localeProperties.value),S.setLocale=A.setLocale,S.differentDomains=A.differentDomains,S.getBrowserLocale=A.getBrowserLocale,S.getLocaleCookie=A.getLocaleCookie,S.setLocaleCookie=A.setLocaleCookie,S.onBeforeLanguageSwitch=A.onBeforeLanguageSwitch,S.onLanguageSwitched=A.onLanguageSwitched,S.finalizePendingLocaleChange=A.finalizePendingLocaleChange,S.waitForPendingLocaleChange=A.waitForPendingLocaleChange}};s.use(P,M),OT(o,P),[e,n]=cr(()=>cv(o,P,w)),await e,n(),zx("locale-changing",$g(async(S,A)=>{let I,B;const $=jh(S,t.ssrContext,_,a,()=>_a(P)||y(u),c,Ai,D()&&x==="no_prefix"?"ssg_ignore":"normal"),ne=R($),[pe]=([I,B]=cr(()=>Hh($,o,P,{useCookie:l,differentDomains:h,initial:ne,skipSettingLocaleOnNavigate:f,lazy:d,langDir:p})),I=await I,B(),I);pe&&ne&&(T=!1);const ge=Wh(S,o,$,_,a);Gh({i18n:P,redirectPath:ge,locale:$,route:S},{differentDomains:h,skipSettingLocaleOnNavigate:f,rootRedirect:b})}),{global:!0})}),IT=En(t=>{!Lx()||(t.hooks.hook("link:prefetch",e=>{if(!ua(e).protocol)return Hf(e)}),js().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Hf(e.path);!r||Object.assign(t.static.data,r.data)}))}),DT=En(()=>{const t=()=>{document.documentElement.setAttribute("style",`--real-height: ${window.innerHeight}px`)};window.addEventListener("resize",t),t()}),NT=En(()=>{if(navigator.userAgent.toLowerCase().includes("chrome")){const t=[`
 %c Made with \u2665 by Dogstudio %c %c %c http://www.dogstudio.co/ %c %c 
`,"color: #fff; background: #e43333; padding:5px 0;","background: #131419; padding:5px 0;","background: #131419; padding:5px 0;","color: #fff; background: #1c1c1c; padding:5px 0;","background: #fff; padding:5px 0;","color: #e43333; background: #fff; padding:5px 0;"];window.console.log.apply(console,t)}else window.console&&window.console.log("Made with love \u2665 Dogstudio - http://www.dogstudio.co/")});var bc={exports:{}},uv={exports:{}},UT=void 0,fv=function(t){return t!==UT&&t!==null},BT=fv,VT={object:!0,function:!0,undefined:!0},HT=function(t){return BT(t)?hasOwnProperty.call(VT,typeof t):!1},jT=HT,WT=function(t){if(!jT(t))return!1;try{return t.constructor?t.constructor.prototype===t:!1}catch{return!1}},GT=WT,qT=function(t){if(typeof t!="function"||!hasOwnProperty.call(t,"length"))return!1;try{if(typeof t.length!="number"||typeof t.call!="function"||typeof t.apply!="function")return!1}catch{return!1}return!GT(t)},$T=qT,XT=/^\s*class[\s{/}]/,YT=Function.prototype.toString,KT=function(t){return!(!$T(t)||XT.test(YT.call(t)))},QT=function(){var t=Object.assign,e;return typeof t!="function"?!1:(e={foo:"raz"},t(e,{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")},Qa,qh;function ZT(){return qh||(qh=1,Qa=function(){try{return Object.keys("primitive"),!0}catch{return!1}}),Qa}var JT=function(){},e3=JT(),Ou=function(t){return t!==e3&&t!==null},Za,$h;function t3(){if($h)return Za;$h=1;var t=Ou,e=Object.keys;return Za=function(n){return e(t(n)?Object(n):n)},Za}var Ja,Xh;function n3(){return Xh||(Xh=1,Ja=ZT()()?Object.keys:t3()),Ja}var el,Yh;function i3(){if(Yh)return el;Yh=1;var t=Ou;return el=function(e){if(!t(e))throw new TypeError("Cannot use null or undefined");return e},el}var tl,Kh;function r3(){if(Kh)return tl;Kh=1;var t=n3(),e=i3(),n=Math.max;return tl=function(r,i){var s,o,a=n(arguments.length,2),l;for(r=Object(e(r)),l=function(c){try{r[c]=i[c]}catch(u){s||(s=u)}},o=1;o<a;++o)i=arguments[o],t(i).forEach(l);if(s!==void 0)throw s;return r},tl}var s3=QT()?Object.assign:r3(),o3=Ou,a3=Array.prototype.forEach,l3=Object.create,c3=function(t,e){var n;for(n in t)e[n]=t[n]},u3=function(t){var e=l3(null);return a3.call(arguments,function(n){!o3(n)||c3(Object(n),e)}),e},nl="razdwatrzy",f3=function(){return typeof nl.contains!="function"?!1:nl.contains("dwa")===!0&&nl.contains("foo")===!1},il,Qh;function h3(){if(Qh)return il;Qh=1;var t=String.prototype.indexOf;return il=function(e){return t.call(this,e,arguments[1])>-1},il}var d3=f3()?String.prototype.contains:h3(),_o=fv,Zh=KT,hv=s3,dv=u3,ms=d3,p3=uv.exports=function(t,e){var n,r,i,s,o;return arguments.length<2||typeof t!="string"?(s=e,e=t,t=null):s=arguments[2],_o(t)?(n=ms.call(t,"c"),r=ms.call(t,"e"),i=ms.call(t,"w")):(n=i=!0,r=!1),o={value:e,configurable:n,enumerable:r,writable:i},s?hv(dv(s),o):o};p3.gs=function(t,e,n){var r,i,s,o;return typeof t!="string"?(s=n,n=e,e=t,t=null):s=arguments[3],_o(e)?Zh(e)?_o(n)?Zh(n)||(s=n,n=void 0):n=void 0:(s=e,e=n=void 0):e=void 0,_o(t)?(r=ms.call(t,"c"),i=ms.call(t,"e")):(r=!0,i=!1),o={get:e,set:n,configurable:r,enumerable:i},s?hv(dv(s),o):o};var m3=function(t){if(typeof t!="function")throw new TypeError(t+" is not a function");return t};(function(t,e){var n=uv.exports,r=m3,i=Function.prototype.apply,s=Function.prototype.call,o=Object.create,a=Object.defineProperty,l=Object.defineProperties,c=Object.prototype.hasOwnProperty,u={configurable:!0,enumerable:!1,writable:!0},h,f,d,p,m,g,x;h=function(b,_){var v;return r(_),c.call(this,"__ee__")?v=this.__ee__:(v=u.value=o(null),a(this,"__ee__",u),u.value=null),v[b]?typeof v[b]=="object"?v[b].push(_):v[b]=[v[b],_]:v[b]=_,this},f=function(b,_){var v,y;return r(_),y=this,h.call(this,b,v=function(){d.call(y,b,v),i.call(_,this,arguments)}),v.__eeOnceListener__=_,this},d=function(b,_){var v,y,w,P;if(r(_),!c.call(this,"__ee__"))return this;if(v=this.__ee__,!v[b])return this;if(y=v[b],typeof y=="object")for(P=0;w=y[P];++P)(w===_||w.__eeOnceListener__===_)&&(y.length===2?v[b]=y[P?0:1]:y.splice(P,1));else(y===_||y.__eeOnceListener__===_)&&delete v[b];return this},p=function(b){var _,v,y,w,P;if(!!c.call(this,"__ee__")&&(w=this.__ee__[b],!!w))if(typeof w=="object"){for(v=arguments.length,P=new Array(v-1),_=1;_<v;++_)P[_-1]=arguments[_];for(w=w.slice(),_=0;y=w[_];++_)i.call(y,this,P)}else switch(arguments.length){case 1:s.call(w,this);break;case 2:s.call(w,this,arguments[1]);break;case 3:s.call(w,this,arguments[1],arguments[2]);break;default:for(v=arguments.length,P=new Array(v-1),_=1;_<v;++_)P[_-1]=arguments[_];i.call(w,this,P)}},m={on:h,once:f,off:d,emit:p},g={on:n(h),once:n(f),off:n(d),emit:n(p)},x=l({},g),t.exports=e=function(b){return b==null?o(x):l(Object(b),g)},e.methods=m})(bc,bc.exports);const Xs=bc.exports;function g3(t,e){return t[0]=e[0],t[1]=e[1],t}function v3(t,e,n){return t[0]=e,t[1]=n,t}function Jh(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function ed(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function b3(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}function _3(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}function rl(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function y3(t,e){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r)}function x3(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}function td(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n)}function w3(t){var e=t[0],n=t[1];return e*e+n*n}function S3(t,e){return t[0]=-e[0],t[1]=-e[1],t}function P3(t,e){return t[0]=1/e[0],t[1]=1/e[1],t}function T3(t,e){var n=e[0],r=e[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t}function E3(t,e){return t[0]*e[0]+t[1]*e[1]}function nd(t,e){return t[0]*e[1]-t[1]*e[0]}function C3(t,e,n,r){var i=e[0],s=e[1];return t[0]=i+r*(n[0]-i),t[1]=s+r*(n[1]-s),t}function A3(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[3]*i+n[6],t[1]=n[1]*r+n[4]*i+n[7],t}function z3(t,e,n){let r=e[0],i=e[1];return t[0]=n[0]*r+n[4]*i+n[12],t[1]=n[1]*r+n[5]*i+n[13],t}function R3(t,e){return t[0]===e[0]&&t[1]===e[1]}class Zi extends Array{constructor(e=0,n=e){return super(e,n),this}get x(){return this[0]}get y(){return this[1]}set x(e){this[0]=e}set y(e){this[1]=e}set(e,n=e){return e.length?this.copy(e):(v3(this,e,n),this)}copy(e){return g3(this,e),this}add(e,n){return n?Jh(this,e,n):Jh(this,this,e),this}sub(e,n){return n?ed(this,e,n):ed(this,this,e),this}multiply(e){return e.length?b3(this,this,e):rl(this,this,e),this}divide(e){return e.length?_3(this,this,e):rl(this,this,1/e),this}inverse(e=this){return P3(this,e),this}len(){return td(this)}distance(e){return e?y3(this,e):td(this)}squaredLen(){return this.squaredDistance()}squaredDistance(e){return e?x3(this,e):w3(this)}negate(e=this){return S3(this,e),this}cross(e,n){return n?nd(e,n):nd(this,e)}scale(e){return rl(this,this,e),this}normalize(){return T3(this,this),this}dot(e){return E3(this,e)}equals(e){return R3(this,e)}applyMatrix3(e){return A3(this,this,e),this}applyMatrix4(e){return z3(this,this,e),this}lerp(e,n){return C3(this,this,e,n),this}clone(){return new Zi(this[0],this[1])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e}}function id(t){let e=t[0],n=t[1],r=t[2];return Math.sqrt(e*e+n*n+r*r)}function _c(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function O3(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t}function rd(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function sd(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function M3(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function F3(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function sl(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function k3(t,e){let n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(n*n+r*r+i*i)}function L3(t,e){let n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i}function od(t){let e=t[0],n=t[1],r=t[2];return e*e+n*n+r*r}function I3(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function D3(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function yc(t,e){let n=e[0],r=e[1],i=e[2],s=n*n+r*r+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function pv(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ad(t,e,n){let r=e[0],i=e[1],s=e[2],o=n[0],a=n[1],l=n[2];return t[0]=i*l-s*a,t[1]=s*o-r*l,t[2]=r*a-i*o,t}function N3(t,e,n,r){let i=e[0],s=e[1],o=e[2];return t[0]=i+r*(n[0]-i),t[1]=s+r*(n[1]-s),t[2]=o+r*(n[2]-o),t}function U3(t,e,n){let r=e[0],i=e[1],s=e[2],o=n[3]*r+n[7]*i+n[11]*s+n[15];return o=o||1,t[0]=(n[0]*r+n[4]*i+n[8]*s+n[12])/o,t[1]=(n[1]*r+n[5]*i+n[9]*s+n[13])/o,t[2]=(n[2]*r+n[6]*i+n[10]*s+n[14])/o,t}function B3(t,e,n){let r=e[0],i=e[1],s=e[2],o=n[3]*r+n[7]*i+n[11]*s+n[15];return o=o||1,t[0]=(n[0]*r+n[4]*i+n[8]*s)/o,t[1]=(n[1]*r+n[5]*i+n[9]*s)/o,t[2]=(n[2]*r+n[6]*i+n[10]*s)/o,t}function V3(t,e,n){let r=e[0],i=e[1],s=e[2],o=n[0],a=n[1],l=n[2],c=n[3],u=a*s-l*i,h=l*r-o*s,f=o*i-a*r,d=a*f-l*h,p=l*u-o*f,m=o*h-a*u,g=c*2;return u*=g,h*=g,f*=g,d*=2,p*=2,m*=2,t[0]=r+u+d,t[1]=i+h+p,t[2]=s+f+m,t}const H3=function(){const t=[0,0,0],e=[0,0,0];return function(n,r){_c(t,n),_c(e,r),yc(t,t),yc(e,e);let i=pv(t,e);return i>1?0:i<-1?Math.PI:Math.acos(i)}}();function j3(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class be extends Array{constructor(e=0,n=e,r=e){return super(e,n,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,r=e){return e.length?this.copy(e):(O3(this,e,n,r),this)}copy(e){return _c(this,e),this}add(e,n){return n?rd(this,e,n):rd(this,this,e),this}sub(e,n){return n?sd(this,e,n):sd(this,this,e),this}multiply(e){return e.length?M3(this,this,e):sl(this,this,e),this}divide(e){return e.length?F3(this,this,e):sl(this,this,1/e),this}inverse(e=this){return D3(this,e),this}len(){return id(this)}distance(e){return e?k3(this,e):id(this)}squaredLen(){return od(this)}squaredDistance(e){return e?L3(this,e):od(this)}negate(e=this){return I3(this,e),this}cross(e,n){return n?ad(this,e,n):ad(this,this,e),this}scale(e){return sl(this,this,e),this}normalize(){return yc(this,this),this}dot(e){return pv(this,e)}equals(e){return j3(this,e)}applyMatrix4(e){return U3(this,this,e),this}scaleRotateMatrix4(e){return B3(this,this,e),this}applyQuaternion(e){return V3(this,this,e),this}angle(e){return H3(this,e)}lerp(e,n){return N3(this,this,e,n),this}clone(){return new be(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],r=this[1],i=this[2];return this[0]=e[0]*n+e[4]*r+e[8]*i,this[1]=e[1]*n+e[5]*r+e[9]*i,this[2]=e[2]*n+e[6]*r+e[10]*i,this.normalize()}}const ol=new be;let W3=1;class G3{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:r=150,dpr:i=1,alpha:s=!1,depth:o=!0,stencil:a=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:u=!1,powerPreference:h="default",autoClear:f=!0,webgl:d=2}={}){const p={alpha:s,depth:o,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h};this.dpr=i,this.alpha=s,this.color=!0,this.depth=o,this.stencil=a,this.premultipliedAlpha=c,this.autoClear=f,this.id=W3++,this.drawCalls=0,this.vpOffset=new Zi,this.vpOverwriteSize=null,d===2&&(this.gl=e.getContext("webgl2",p)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",p)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=null,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LESS,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.gl.viewport(this.vpOffset.x,this.vpOffset.y,e,n))}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,r,i){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===i||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=i,r!==void 0?this.gl.blendFuncSeparate(e,n,r,i):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,r){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][r].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortManual(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:r,sort:i}){let s=[];if(n&&r&&n.updateFrustum(),e.traverse(o=>{if(!o.visible)return!0;!o.draw||!o.forceRenderOrder&&r&&o.frustumCulled&&n&&!n.frustumIntersectsMesh(o)||s.push(o)}),i){const o=[],a=[],l=[],c=[],u=[];s.forEach(h=>{h.program.transparent?h.forceRenderOrder?h.renderOrder<0?c.push(h):u.push(h):h.program.depthTest?a.push(h):l.push(h):o.push(h),h.zDepth=0,!(h.renderOrder!==0||!h.program.depthTest||!n)&&(h.worldMatrix.getTranslation(ol),ol.applyMatrix4(n.projectionViewMatrix),h.zDepth=ol.z)}),o.sort(this.sortOpaque),a.sort(this.sortTransparent),c.sort(this.sortManual),u.sort(this.sortManual),l.sort(this.sortUI),s=c.concat(o,a,l,u)}return s}render({scene:e,camera:n,target:r=null,flip:i=!1,post:s=null,update:o=!0,sort:a=!0,frustumCull:l=!0,clear:c}){r===null&&s===null&&this.vpOverwriteSize===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):s!==null?(this.setViewport(s.rt.width,s.rt.height),this.bindFramebuffer({target:this.gl.FRAMEBUFFER,buffer:s.rt.fb})):this.vpOverwriteSize!==null?(this.bindFramebuffer(),this.setViewport(this.vpOverwriteSize[0],this.vpOverwriteSize[1])):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(c||this.autoClear&&c!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),o&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(i),this.getRenderList({scene:e,camera:n,frustumCull:l,sort:a}).forEach(h=>{h.draw({camera:n}),this.drawCalls++}),i&&(n.isFliped=!1),s!==null&&this.bindFramebuffer({target:this.gl.FRAMEBUFFER,buffer:r})}}const ld=new Uint8Array(4);function cd(t){return(t&t-1)===0}let q3=1;class xt{constructor(e,{image:n,target:r=e.TEXTURE_2D,type:i=e.UNSIGNED_BYTE,format:s=e.RGBA,internalFormat:o=s,rt:a=null,depth:l=!1,pass:c=null,wrapS:u=e.CLAMP_TO_EDGE,wrapT:h=e.CLAMP_TO_EDGE,generateMipmaps:f=!0,minFilter:d=f?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:p=e.LINEAR,premultiplyAlpha:m=!1,unpackAlignment:g=4,flipY:x=r==e.TEXTURE_2D,anisotropy:b=0,level:_=0,width:v,height:y=v}={}){this.gl=e,this.id=q3++,this.image=n,this.target=r,this.type=i,this.format=s,this.rt=a,this.depth=l,this.pass=c,this.internalFormat=o,this.minFilter=d,this.magFilter=p,this.wrapS=u,this.wrapT=h,this.generateMipmaps=f,this.premultiplyAlpha=m,this.unpackAlignment=g,this.flipY=x,this.anisotropy=Math.min(b,this.gl.renderer.parameters.maxAnisotropy),this.level=_,this.width=v,this.height=y,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.rt!==null?this.depth?this.gl.bindTexture(this.target,this.rt.getDepthTexture()):this.gl.bindTexture(this.target,this.rt.getTexture()):this.pass!==null?this.gl.bindTexture(this.target,this.pass.getTexture()):this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id}update(e=0){const n=!(this.image===this.store.image&&!this.needsUpdate);if((n||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!n){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,this.level,this.internalFormat,this.format,this.type,this.image[r]);else if(ArrayBuffer.isView(this.image))this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let r=0;r<this.image.length;r++)this.gl.compressedTexImage2D(this.target,r,this.internalFormat,this.image[r].width,this.image[r].height,0,this.image[r].data);else this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!cd(this.image.width)||!cd(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,ld);else this.width?this.rt===null&&this.pass===null&&this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.rt===null&&this.pass===null&&this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,ld);this.store.image=this.image}}}let al,ll=0;class $3{constructor(e){al||(al=this.getSupportedFormat()),this.onMessage=this.onMessage.bind(this),this.queue=new Map,this.initWorker(e)}getSupportedFormat(){const e=document.createElement("canvas").getContext("webgl");return e.getExtension("WEBGL_compressed_texture_etc")?"etc2":e.getExtension("WEBGL_compressed_texture_astc")?"astc":e.getExtension("EXT_texture_compression_bptc")?"bptc":e.getExtension("WEBGL_compressed_texture_s3tc")?"s3tc":e.getExtension("WEBGL_compressed_texture_etc1")?"etc1":!!e.getExtension("WEBGL_compressed_texture_pvrtc")||!!e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc")?"pvrtc":"none"}initWorker(e){this.worker=new Worker(e),this.worker.onmessage=this.onMessage}onMessage({data:e}){const{id:n,error:r,image:i}=e;if(r){console.log(r,n);return}const s=this.queue.get(n);this.queue.delete(n),i.isBasis=!0,s(i)}parseTexture(e){ll++,this.worker.postMessage({id:ll,buffer:e,supportedFormat:al});let n;const r=new Promise(i=>n=i);return this.queue.set(ll,n),r}}class X3{constructor(e){this.gl=e,this.textures={},this.currentUnit=0,this.isCompressedSupport=!1;const n={astcSupported:!!e.renderer.getExtension("WEBGL_compressed_texture_astc"),etc1Supported:!!e.renderer.getExtension("WEBGL_compressed_texture_etc1"),etc2Supported:!!e.renderer.getExtension("WEBGL_compressed_texture_etc"),dxtSupported:!!e.renderer.getExtension("WEBGL_compressed_texture_s3tc"),bptcSupported:!!e.renderer.getExtension("EXT_texture_compression_bptc"),pvrtcSupported:!!e.renderer.getExtension("WEBGL_compressed_texture_pvrtc")||!!e.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc")};for(const[r,i]of Object.entries(n))i&&(this.isCompressedSupport=!0);this.basisManager=new $3("/vendors/basis/BasisWorker.js")}load(e,n,r){let i=r.indexOf("compressed")>-1,s=r.indexOf("transparent")>-1,o=r.filter(h=>{if(h.indexOf("lodTarget")!==-1)return!0})[0];o=o!==void 0?o.replace("lodTarget=",""):null;let a=o!==null,l=e.replace(/^.*[\\\/]/,""),c=e.replace(l,""),u=e;if(a&&(u=`${c}${o}/${l}${s?".png":".jpg"}`),i&&this.isCompressedSupport)return a?u=`${c}${o}/${l}.ktx2`:u=`${c}${l.replace(/\.[^/.]+$/,"")}.ktx2`,this.textures[n]={options:r},new Promise(f=>{fetch(u).then(d=>{d.arrayBuffer().then(p=>{this.basisManager.parseTexture(p).then(m=>{const g=this.initCompressedTexture(m,r);this.textures[n].texture=g,this.textures[n].unit=this.currentUnit,g.update(),this.currentUnit++,f(g)})})})});{let h=new Image;h.crossOrigin="anonymous";const f=new Promise(d=>{h.onload=()=>{let p=this.initTexture(h,r);this.textures[n].texture=p,this.textures[n].unit=this.currentUnit,this.currentUnit++,d(p)}});return h.src=u,this.textures[n]={img:h,options:r},f}}initCompressedTexture(e,n){const r=this.gl,i=new xt(r,{generateMipmaps:n.indexOf("mipmap")>-1,internalFormat:e.internalFormat});return i.image=e,i.flipY=n.indexOf("flipY")>-1,i.wrapS=n.indexOf("mirror")>-1?r.MIRRORED_REPEAT:r.CLAMP_TO_EDGE,i.wrapT=n.indexOf("mirror")>-1?r.MIRRORED_REPEAT:r.CLAMP_TO_EDGE,i.wrapS=n.indexOf("repeat")>-1?r.REPEAT:i.wrapS,i.wrapT=n.indexOf("repeat")>-1?r.REPEAT:i.wrapT,i.wrapS=n.indexOf("clamp")>-1?r.CLAMP_TO_EDGE:i.wrapS,i.wrapT=n.indexOf("clamp")>-1?r.CLAMP_TO_EDGE:i.wrapT,i.minFilter=n.indexOf("nearest")>-1?r.NEAREST:i.minFilter,i.magFilter=n.indexOf("nearest")>-1?r.NEAREST:i.magFilter,i.needsUpdate=!0,i}initTexture(e,n){const r=this.gl,i=new xt(r,{generateMipmaps:n.indexOf("mipmap")>-1,flipY:n.indexOf("flipY")>-1});return i.image=e,i.flipY=n.indexOf("flipY")>-1,i.wrapS=n.indexOf("mirror")>-1?r.MIRRORED_REPEAT:r.CLAMP_TO_EDGE,i.wrapT=n.indexOf("mirror")>-1?r.MIRRORED_REPEAT:r.CLAMP_TO_EDGE,i.wrapS=n.indexOf("repeat")>-1?r.REPEAT:i.wrapS,i.wrapT=n.indexOf("repeat")>-1?r.REPEAT:i.wrapT,i.wrapS=n.indexOf("clamp")>-1?r.CLAMP_TO_EDGE:i.wrapS,i.wrapT=n.indexOf("clamp")>-1?r.CLAMP_TO_EDGE:i.wrapT,i.minFilter=n.indexOf("nearest")>-1?r.NEAREST:i.minFilter,i.magFilter=n.indexOf("nearest")>-1?r.NEAREST:i.magFilter,i}get(e){if(this.textures[e])return this.textures[e]}getTexture(e){if(this.textures[e])return this.textures[e].texture}getImage(e){return this.textures[e]?this.textures[e].img:null}isTextureRegistered(e){return!!this.textures[e]}}Date.now=Date.now||function(){return new Date().getTime()};if(typeof window<"u"&&("performance"in window||(window.performance={}),!("now"in window.performance))){var ud=Date.now();performance.timing&&performance.timing.navigationStart&&(ud=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-ud}}class Y3{constructor(){this.funcs={},this.lastPass={},this.framerates={},this.nextFramePendingFuncs=[],this.nextFrameFuncs=[],this.postFrameFuncs=[],this.dt=1/0,this.timeElapsed=0,this.frame=0,this.dictonary=[],this.last=performance.now(),this.initTime=performance.now(),this.onBefore=function(){},this.onAfter=function(){},typeof window<"u"&&(this.init(),this.isIOS=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform))}subscribe(e,n,r=null){if(this.funcs[e]){console.warn("RAF - A listener with this id already exists.");return}this.dictonary.push(e),this.funcs[e]=n,this.lastPass[e]=Date.now(),r!==null?this.framerates[e]=1/r:this.framerates[e]=r}unsubscribe(e){this.funcs[e]&&(this.dictonary.splice(this.dictonary.indexOf(e),1),delete this.funcs[e])}init(){window.addEventListener("focus",()=>{this.last=performance.now()}),this.update=this.update.bind(this),this.update()}nextFrame(e){this.nextFramePendingFuncs.push(e)}postFrame(e){this.postFrameFuncs.push(e)}update(){for(requestAnimationFrame(this.update),this.onBefore(),this.frame++,this.dt=performance.now()-this.last,this.timeElapsed+=this.dt;this.nextFrameFuncs.length>0;)this.nextFrameFuncs.splice(0,1)[0]();for(;this.nextFramePendingFuncs.length>0;)this.nextFrameFuncs.push(this.nextFramePendingFuncs.splice(0,1)[0]);let e=Date.now();for(let n=0;n<this.dictonary.length;n++)this.framerates[this.dictonary[n]]!==null&&e-this.lastPass[this.dictonary[n]]<this.framerates[this.dictonary[n]]*1e3||typeof this.funcs[this.dictonary[n]]=="function"&&(this.lastPass[this.dictonary[n]]=e,this.funcs[this.dictonary[n]]());for(;this.postFrameFuncs.length>0;)this.postFrameFuncs.splice(0,1)[0]();this.onAfter(),this.last=performance.now()}}const Pn=new Y3,K3={_SplinesEditorData:{camera:{name:"camera",points:[[0,0,0],[0,15,10],[15,15,-10],[0,15,-20]]},lookat:{name:"lookat",points:[[0,0,0],[0,15,10],[15,15,-10],[0,15,-20]]}}},Q3=null;let fd,hd,co;class Z3{constructor(){Re(this,"removeSpecificKey",(e,n="")=>{e[n]!==void 0&&delete e[n];for(let r in e)e[r]!==null&&typeof e[r]=="object"&&e[r].nodeType!==1&&this.removeSpecificKey(e[r],n)});this.active=this.queryDebug(),this.tweakpaneIsLoaded=!1,this.guiIsReady=!1,this.bladesQueue=[],this.configs={},this.inputs={},this.savedConfigs={},this.folders={},this._emitter={},Xs(this._emitter),this.on=this._emitter.on.bind(this._emitter),this.active&&this.lazyloadTweakpaneThenInit()}lazyloadTweakpaneThenInit(){const e=we(()=>import("./tweakpane.95688764.js").then(i=>i.t),[],import.meta.url),n=we(()=>import("./tweakpane-plugin-essentials.0bb003d9.js").then(i=>i.t),[],import.meta.url),r=we(()=>import("./tweakpane-image-plugin.ae119bf8.js").then(i=>i.t),[],import.meta.url);Promise.all([e,n,r]).then(i=>{co=i[0].Pane,fd=i[1],hd=i[2],this.tweakpaneIsLoaded=!0,this.init();for(let s=0;s<this.bladesQueue.length;s++){const o=this.bladesQueue[s];this.addBladeConfigActive(o.config,o.id,o.tabId)}this.bladesQueue=[],this._emitter.emit("gui-lazyloaded"),this.guiIsReady=!0})}init(){this.pane=new co({title:"Debug UI",expanded:!0}),this.pane.hidden=!this.active||this.queryDebug("demo"),this.scenePane=new co({title:"Scene Controller",expanded:!0}),this.scenePane.hidden=!this.active,this.scenePane.containerElem_.style.right="auto",this.scenePane.containerElem_.style.left="8px",this.scenePane.containerElem_.style.maxWidth="360px";const e=new URLSearchParams(window.location.search);this.scenePane.addBlade({view:"list",label:"Scene to load",options:[{text:"main",value:"main"}],value:e.has("scene")?e.get("scene"):"main"}).on("change",r=>{e.set("scene",r.value),window.location.href="/?"+e.toString()}),this.pane.registerPlugin(fd),this.pane.registerPlugin(hd),this.fpsGraph=this.pane.addBlade({view:"fpsgraph",label:"FPS",lineCount:2}),Pn.onBefore=this.fpsGraph.begin.bind(this.fpsGraph),Pn.onAfter=this.fpsGraph.end.bind(this.fpsGraph),this.tab=this.pane.addTab({pages:[{title:"General"},{title:"Elements"},{title:"Colors"}]}),document.head.insertAdjacentHTML("beforeend",`<style>
    :root {
      --tp-base-background-color: hsla(0, 0%, 10%, 1);
      --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);
      --tp-button-background-color: hsla(0, 0%, 80%, 1);
      --tp-button-background-color-active: hsla(0, 0%, 100%, 1);
      --tp-button-background-color-focus: hsla(0, 0%, 95%, 1);
      --tp-button-background-color-hover: hsla(0, 0%, 85%, 1);
      --tp-button-foreground-color: hsla(0, 0%, 0%, 0.8);
      --tp-container-background-color: hsla(0, 0%, 0%, 0.3);
      --tp-container-background-color-active: hsla(0, 0%, 0%, 0.6);
      --tp-container-background-color-focus: hsla(0, 0%, 0%, 0.5);
      --tp-container-background-color-hover: hsla(0, 0%, 0%, 0.4);
      --tp-container-foreground-color: hsla(0, 0%, 100%, 0.5);
      --tp-groove-foreground-color: hsla(0, 0%, 0%, 0.2);
      --tp-input-background-color: hsla(0, 0%, 0%, 0.3);
      --tp-input-background-color-active: hsla(0, 0%, 0%, 0.6);
      --tp-input-background-color-focus: hsla(0, 0%, 0%, 0.5);
      --tp-input-background-color-hover: hsla(0, 0%, 0%, 0.4);
      --tp-input-foreground-color: hsla(0, 0%, 100%, 0.5);
      --tp-label-foreground-color: hsla(0, 0%, 100%, 0.5);
      --tp-monitor-background-color: hsla(0, 0%, 0%, 0.3);
      --tp-monitor-foreground-color: hsla(0, 0%, 100%, 0.3);
    }
    .tp-dfwv {
      width: 500px !important;
      z-index: 100;
      max-height: calc(100vh - 8px);
      overflow-y: auto;
    }
    </style>`),this.pane.containerElem_.addEventListener("mouseover",()=>{this._emitter.emit("prevent")}),this.pane.containerElem_.addEventListener("mouseleave",()=>{this._emitter.emit("unprevent")}),this.scenePane.containerElem_.addEventListener("mouseover",()=>{this._emitter.emit("prevent")}),this.scenePane.containerElem_.addEventListener("mouseleave",()=>{this._emitter.emit("unprevent")})}queryDebug(e="dev"){let n=window.location.href;e=e.replace(/[[]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),i=r.exec(n);return i?decodeURIComponent(i[2].replace(/\+/g," "))==="true":!1}queryDebugValue(e="dev"){let n=window.location.href;e=e.replace(/[[]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),i=r.exec(n);return i?decodeURIComponent(i[2].replace(/\+/g," ")):!1}initNetwork(){this.networkIsOnline=!1,this.networkInputs={},this.networkParams={status:"\u{1F534} offline",name:localStorage.getItem("firebase-gui-name")||"","config-list":[]},this.networkPane=new co({title:"Network",expanded:!0}),this.networkPane.hidden=!this.active||this.queryDebug("demo"),this.networkPane.containerElem_.style.right="auto",this.networkPane.containerElem_.style.left="8px",this.networkPane.containerElem_.style.top="auto",this.networkPane.containerElem_.style.bottom="8px",this.networkPane.containerElem_.style.maxWidth="400px",this.networkPane.addMonitor(this.networkParams,"status",{multiline:!1,lineCount:1}),this.networkPane.addSeparator(),this.networkInputs.list=this.networkPane.addBlade({view:"list",label:"presets",options:this.networkParams["config-list"],value:"none"}),this.networkPane.addSeparator(),this.networkInputs.sync=this.networkPane.addButton({title:"Sync"}),this.networkInputs.dump=this.networkPane.addButton({title:"Dump"}),this.networkPane.addSeparator(),this.networkInputs.name=this.networkPane.addInput(this.networkParams,"name"),this.networkInputs.save=this.networkPane.addButton({title:"Save"}),this.firebase=initializeApp(Q3),this.initNetworkEvents(),this.updateNetworkStatus()}dump(){this.removeSpecificKey(this.configs,"_gsap"),console.log(this.configs),console.log(JSON.stringify(this.configs))}initNetworkEvents(){this.networkInputs.name.on("change",e=>{localStorage.setItem("firebase-gui-name",e.value)}),this.networkInputs.dump.on("click",()=>{this._emitter.emit("beforeSave"),this.dump()}),this.networkInputs.save.on("click",()=>{if(this._emitter.emit("beforeSave"),this.networkParams.name==""){alert("Please fill a name in Network GUI");return}this.removeSpecificKey(this.configs,"_gsap");for(const r in this.configs)if(Object.hasOwnProperty.call(this.configs,r)){const i=this.configs[r];if(this.configs[r]){const s=this.configs[r];for(const o in i)if(Object.hasOwnProperty.call(i,o)&&(i[o],s[o])){const a=s[o];a.type=="input-image"&&(a.value="placeholder")}}}const e=`${this.networkParams.name}___${new Date().toUTCString().replaceAll(",","").replaceAll(" ","-")}`;console.log("saving",e);const n=getDatabase();console.log(this.configs),set(et(n),this.configs).then(()=>{this.refreshNetwork()})}),this.networkInputs.sync.on("click",()=>{this.refreshNetwork()})}refreshNetwork(){const e=getDatabase(),n=et(e);onValue(n,r=>{const i=r.val();this.savedConfigs=i,this.networkParams["config-list"].length=0,this.networkParams["config-list"].push({text:"current",value:null});for(const s in i)Object.hasOwnProperty.call(i,s)&&this.networkParams["config-list"].push({text:s,value:s});this.networkInputs.list.dispose(),this.networkInputs.list=this.networkPane.addBlade({view:"list",label:"presets",index:1,options:this.networkParams["config-list"],value:"none"}),this.networkInputs.list.on("change",s=>{this.applyConfig(s.value)}),setTimeout(()=>{this.networkPane.refresh()},200)})}updateNetworkStatus(){const e=getDatabase(),n=et(e);onValue(n,r=>{r.val()===!0?(this.networkIsOnline=!0,console.log("GUI connected"),this.refreshNetwork(),this.networkParams.status="\u{1F7E2} online"):(this.networkIsOnline=!1,console.log("GUI not connected")),this.networkInputs.sync.disabled=!this.networkIsOnline,this.networkInputs.dump.disabled=!this.networkIsOnline,this.networkInputs.save.disabled=!this.networkIsOnline,this.networkPane.refresh()})}applyConfig(e){for(const n in this.savedConfigs[e])if(Object.hasOwnProperty.call(this.savedConfigs[e],n)){const r=this.savedConfigs[e][n];if(this.configs[n]){const i=this.configs[n];for(const s in r)if(Object.hasOwnProperty.call(r,s)){const o=r[s];if(i[s]){const a=i[s];a.value=o.value}}}}this.pane.refresh(),this._emitter.emit("updateConfig")}applyConfigFile(e){for(const n in e)if(Object.hasOwnProperty.call(e,n)){const r=e[n];if(this.configs[n]){const i=this.configs[n];for(const s in r)if(Object.hasOwnProperty.call(r,s)){const o=r[s];if(i[s]){const a=i[s];a.value=o.value}}}}e._SplinesEditorData&&(this.configs._SplinesEditorData=e._SplinesEditorData),this.pane&&this.pane.refresh()}onLoaded(){this.applyConfigFile(K3),this.pane&&this.pane.refresh()}addConfig(){}addBladeScene(e,n){return this.addBlade(e,n,"scene")}addBlade(e,n,r=0){return this.active?this.tweakpaneIsLoaded?this.addBladeConfigActive(e,n,r):(this.bladesQueue.push({config:e,id:n,tabId:r}),null):(this.addBladeConfigInactive(e,n,r),null)}addBladeConfigActive(e,n,r=0){const i=r==="scene"?this.scenePane:this.tab.pages[r];this.folders[n]=i.addFolder({title:n,expanded:r==="scene"});let s={};this.inputs[n]={};for(const a in e)if(Object.hasOwnProperty.call(e,a)){const l=e[a];if(l.type=="input-image"){const c=this.folders[n].addInput(l,"value",{view:"input-image",imageFit:"contain",label:a});this.inputs[n][a]=c}else l.type=="bool"?this.folders[n].addInput(l,"value",{label:a}):l.view==="cubicbezier"?this.folders[n].addBlade(l):(this.configs[n]=e,s[a]=this.folders[n].addInput(l,"value",Object.assign(l.params,{label:a})))}const o=this.folders[`${n}`];return o.params=s,o}addBladeConfigInactive(e,n){for(const r in e)Object.hasOwnProperty.call(e,r)&&(this.configs[n]=e)}getGui(e){return this.folders[`${e}`]}addTextureUpload(e,n={}){const i={...{maps:["albedoMap","normalTexture","ORMTexture","metallicRoughnessTexture","alphaTexture","emissiveTexture","occlusionTexture"],callback:null,textureOptions:["repeat"]},...n};e.gui&&(e.gui.textureInputs={});for(let s=0;s<i.maps.length;s++){const o=i.maps[s],a=document.createElement("input");if(a.type="file",a.classList.add("input-file"),e.gui){const l=e.gui.addButton({title:o,label:"Upload texture",index:1});l.on("click",()=>{a.click()}),e.gui.textureInputs[o]=l}else{console.warn("entity.gui is undefined, cannot add texture upload button",i);return}a.addEventListener("change",l=>{const c=a.files[0],u=new Image;u.onload=()=>{let h;if(e.scene.textureLoader)h=e.scene.textureLoader.initTexture(u,i.textureOptions);else{console.warn("entity.scene.textureLoader is undefined, cannot create texture from image",i);return}let f=null;o==="albedoMap"&&(f="uBaseColorSampler"),o==="ORMTexture"&&(f="uOcclusionRoughnessMetallicSampler"),o==="metallicRoughnessTexture"&&(f="uMetallicRoughnessSampler"),o==="normalTexture"&&(f="uNormalSampler"),o==="emissiveTexture"&&(f="uEmissiveSampler"),o==="occlusionTexture"&&(f="uOcclusionSampler"),o==="alphaTexture"&&(f="uAlphaMapSampler"),o==="texture"&&(f="uTexture"),f&&e.program.uniforms[f]?(e.program.uniforms[f].value=h,e.program.uniforms[f].value.needsUpdate=!0):console.warn("no uniform matching that title:",o," - uniforms:",e.program.uniforms),i.callback&&i.callback(h),URL.revokeObjectURL(u.src)},c&&(u.src=URL.createObjectURL(c))})}}}const xe=new Z3;var J3=1e-6,Pt=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function mv(){var t=new Pt(9);return Pt!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function $i(){var t=new Pt(16);return Pt!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function eE(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function tE(t,e){if(t===e){var n=e[1],r=e[2],i=e[3],s=e[6],o=e[7],a=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=n,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=s,t[11]=e[14],t[12]=i,t[13]=o,t[14]=a}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}function nE(t,e){var n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],m=e[13],g=e[14],x=e[15],b=n*a-r*o,_=n*l-i*o,v=n*c-s*o,y=r*l-i*a,w=r*c-s*a,P=i*c-s*l,T=u*m-h*p,R=u*g-f*p,k=u*x-d*p,D=h*g-f*m,M=h*x-d*m,z=f*x-d*g,S=b*z-_*M+v*D+y*k-w*R+P*T;return S?(S=1/S,t[0]=(a*z-l*M+c*D)*S,t[1]=(i*M-r*z-s*D)*S,t[2]=(m*P-g*w+x*y)*S,t[3]=(f*w-h*P-d*y)*S,t[4]=(l*k-o*z-c*R)*S,t[5]=(n*z-i*k+s*R)*S,t[6]=(g*v-p*P-x*_)*S,t[7]=(u*P-f*v+d*_)*S,t[8]=(o*M-a*k+c*T)*S,t[9]=(r*k-n*M-s*T)*S,t[10]=(p*w-m*v+x*b)*S,t[11]=(h*v-u*w-d*b)*S,t[12]=(a*R-o*D-l*T)*S,t[13]=(n*D-r*R+i*T)*S,t[14]=(m*_-p*y-g*b)*S,t[15]=(u*y-h*_+f*b)*S,t):null}function gv(t,e,n){var r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],m=e[12],g=e[13],x=e[14],b=e[15],_=n[0],v=n[1],y=n[2],w=n[3];return t[0]=_*r+v*a+y*h+w*m,t[1]=_*i+v*l+y*f+w*g,t[2]=_*s+v*c+y*d+w*x,t[3]=_*o+v*u+y*p+w*b,_=n[4],v=n[5],y=n[6],w=n[7],t[4]=_*r+v*a+y*h+w*m,t[5]=_*i+v*l+y*f+w*g,t[6]=_*s+v*c+y*d+w*x,t[7]=_*o+v*u+y*p+w*b,_=n[8],v=n[9],y=n[10],w=n[11],t[8]=_*r+v*a+y*h+w*m,t[9]=_*i+v*l+y*f+w*g,t[10]=_*s+v*c+y*d+w*x,t[11]=_*o+v*u+y*p+w*b,_=n[12],v=n[13],y=n[14],w=n[15],t[12]=_*r+v*a+y*h+w*m,t[13]=_*i+v*l+y*f+w*g,t[14]=_*s+v*c+y*d+w*x,t[15]=_*o+v*u+y*p+w*b,t}function uo(t,e,n,r){var i=e[0],s=e[1],o=e[2],a=e[3],l=i+i,c=s+s,u=o+o,h=i*l,f=i*c,d=i*u,p=s*c,m=s*u,g=o*u,x=a*l,b=a*c,_=a*u,v=r[0],y=r[1],w=r[2];return t[0]=(1-(p+g))*v,t[1]=(f+_)*v,t[2]=(d-b)*v,t[3]=0,t[4]=(f-_)*y,t[5]=(1-(h+g))*y,t[6]=(m+x)*y,t[7]=0,t[8]=(d+b)*w,t[9]=(m-x)*w,t[10]=(1-(h+p))*w,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}var dd=gv;function tt(){var t=new Pt(3);return Pt!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function Fn(t){var e=new Pt(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function xc(t){var e=t[0],n=t[1],r=t[2];return Math.hypot(e,n,r)}function We(t,e,n){var r=new Pt(3);return r[0]=t,r[1]=e,r[2]=n,r}function iE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Ln(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function wc(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function rE(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function yn(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function ui(t,e){var n=e[0],r=e[1],i=e[2],s=n*n+r*r+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function sE(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function In(t,e,n){var r=e[0],i=e[1],s=e[2],o=n[0],a=n[1],l=n[2];return t[0]=i*l-s*a,t[1]=s*o-r*l,t[2]=r*a-i*o,t}function Mu(t,e,n,r){var i=e[0],s=e[1],o=e[2];return t[0]=i+r*(n[0]-i),t[1]=s+r*(n[1]-s),t[2]=o+r*(n[2]-o),t}function cl(t){return t[0]=0,t[1]=0,t[2]=0,t}var bn=wc,pd=rE,oE=xc;(function(){var t=tt();return function(e,n,r,i,s,o){var a,l;for(n||(n=3),r||(r=0),i?l=Math.min(i*n+r,e.length):l=e.length,a=r;a<l;a+=n)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],s(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}})();function aE(){var t=new Pt(4);return Pt!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function lE(t,e){var n=e[0],r=e[1],i=e[2],s=e[3],o=n*n+r*r+i*i+s*s;return o>0&&(o=1/Math.sqrt(o)),t[0]=n*o,t[1]=r*o,t[2]=i*o,t[3]=s*o,t}(function(){var t=aE();return function(e,n,r,i,s,o){var a,l;for(n||(n=4),r||(r=0),i?l=Math.min(i*n+r,e.length):l=e.length,a=r;a<l;a+=n)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],t[3]=e[a+3],s(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2],e[a+3]=t[3];return e}})();function Rs(){var t=new Pt(4);return Pt!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function cE(t,e,n){n=n*.5;var r=Math.sin(n);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(n),t}function md(t,e,n){n*=.5;var r=e[0],i=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=r*l+o*a,t[1]=i*l+s*a,t[2]=s*l-i*a,t[3]=o*l-r*a,t}function gd(t,e,n){n*=.5;var r=e[0],i=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=r*l-s*a,t[1]=i*l+o*a,t[2]=s*l+r*a,t[3]=o*l-i*a,t}function vd(t,e,n){n*=.5;var r=e[0],i=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=r*l+i*a,t[1]=i*l-r*a,t[2]=s*l+o*a,t[3]=o*l-s*a,t}function ul(t,e,n,r){var i=e[0],s=e[1],o=e[2],a=e[3],l=n[0],c=n[1],u=n[2],h=n[3],f,d,p,m,g;return d=i*l+s*c+o*u+a*h,d<0&&(d=-d,l=-l,c=-c,u=-u,h=-h),1-d>J3?(f=Math.acos(d),p=Math.sin(f),m=Math.sin((1-r)*f)/p,g=Math.sin(r*f)/p):(m=1-r,g=r),t[0]=m*i+g*l,t[1]=m*s+g*c,t[2]=m*o+g*u,t[3]=m*a+g*h,t}function vv(t,e){var n=e[0]+e[4]+e[8],r;if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{var i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);var s=(i+1)%3,o=(i+2)%3;r=Math.sqrt(e[i*3+i]-e[s*3+s]-e[o*3+o]+1),t[i]=.5*r,r=.5/r,t[3]=(e[s*3+o]-e[o*3+s])*r,t[s]=(e[s*3+i]+e[i*3+s])*r,t[o]=(e[o*3+i]+e[i*3+o])*r}return t}var bv=lE;(function(){var t=tt(),e=We(1,0,0),n=We(0,1,0);return function(r,i,s){var o=sE(i,s);return o<-.999999?(In(t,e,i),oE(t)<1e-6&&In(t,n,i),ui(t,t),cE(r,t,Math.PI),r):o>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(In(t,i,s),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=1+o,bv(r,r))}})();(function(){var t=Rs(),e=Rs();return function(n,r,i,s,o,a){return ul(t,r,o,a),ul(e,i,s,a),ul(n,t,e,2*a*(1-a)),n}})();(function(){var t=mv();return function(e,n,r,i){return t[0]=r[0],t[3]=r[1],t[6]=r[2],t[1]=i[0],t[4]=i[1],t[7]=i[2],t[2]=-n[0],t[5]=-n[1],t[8]=-n[2],bv(e,vv(e,t))}})();function xa(){var t=new Pt(2);return Pt!=Float32Array&&(t[0]=0,t[1]=0),t}function zi(t,e){var n=new Pt(2);return n[0]=t,n[1]=e,n}function uE(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function fE(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function hE(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}var dE=fE;(function(){var t=xa();return function(e,n,r,i,s,o){var a,l;for(n||(n=2),r||(r=0),i?l=Math.min(i*n+r,e.length):l=e.length,a=r;a<l;a+=n)t[0]=e[a],t[1]=e[a+1],s(t,t,o),e[a]=t[0],e[a+1]=t[1];return e}})();const wa=mv(),fo=new Float32Array(wa.buffer,0*4,3),pE=new Float32Array(wa.buffer,3*4,3),sr=new Float32Array(wa.buffer,6*4,3),mE=We(0,1,0),fl=Rs(),Yn=tt();class Sa{constructor(e=!1){return this.parent=null,this.children=[],this.position=We(0,0,0),this.positionDamped=We(0,0,0),this.scale=We(1,1,1),this.rotation=We(0,0,0),this.rotationDamped=We(0,0,0),this.quaternion=Rs(),this.matrix=$i(),this.lmatrix=$i(),this.damped=!1,this.dampedRot=!1,this.damping=.03,this.rotDamping=.03,this.lookAtNode=null,this.needUpdate=!0,this.forceUpdate=!1,this.manualRot=!1,this.isCamera=e,Pn.nextFrame(()=>{this.getMatrix()}),this}setPosition(e,n,r){this.needUpdate=!0,this.position[0]=e,this.position[1]=n,this.position[2]=r}setRotation(e,n,r){this.needUpdate=!0,this.rotation[0]=e,this.rotation[1]=n,this.rotation[2]=r}setScale(e){this.needUpdate=!0,this.scale[0]=e,this.scale[1]=e,this.scale[2]=e}activateDamping(e){this.positionDamped=Fn(this.position),this.damped=!0,this.damping=e,this.needUpdate=!0,this.getMatrix()}registerNodeToLookAt(e){this.lookAtNode=e,this.needUpdate=!0}lookAt(e){this.damped?wc(sr,this.positionDamped,e):wc(sr,this.position,e),ui(sr,sr),In(fo,mE,sr),ui(fo,fo),In(pE,sr,fo),vv(fl,wa),this.damped?uo(this.matrix,fl,this.positionDamped,this.scale):uo(this.matrix,fl,this.position,this.scale),this.parent!==null&&dd(this.matrix,this.parent.getMatrix(),this.matrix),this.needUpdate=!1}getMatrix(){return!this.forceUpdate&&!this.needUpdate&&!this.damped&&this.lookAtNode==null?this.matrix:(eE(this.matrix),this.manualRot==!1&&(this.quaternion=Rs(),this.dampedRot?(bn(Yn,this.rotation,this.rotationDamped),yn(Yn,Yn,this.rotDamping),Ln(this.rotationDamped,this.rotationDamped,Yn),gd(this.quaternion,this.quaternion,this.rotationDamped[1]),md(this.quaternion,this.quaternion,this.rotationDamped[0]),vd(this.quaternion,this.quaternion,this.rotationDamped[2])):(gd(this.quaternion,this.quaternion,this.rotation[1]),md(this.quaternion,this.quaternion,this.rotation[0]),vd(this.quaternion,this.quaternion,this.rotation[2]))),this.damped?(bn(Yn,this.position,this.positionDamped),yn(Yn,Yn,this.damping),Ln(this.positionDamped,this.positionDamped,Yn),uo(this.matrix,this.quaternion,this.positionDamped,this.scale)):uo(this.matrix,this.quaternion,this.position,this.scale),this.parent!==null&&dd(this.matrix,this.parent.getMatrix(),this.matrix),this.lookAtNode!==null&&(this.lookAtNode.getMatrix(),this.lookAtNode.damped?this.lookAt(this.lookAtNode.positionDamped):this.lookAt(this.lookAtNode.position),Pn.postFrame(()=>{this.needUpdate=!0})),this.needUpdate=!1,this.matrix)}getChildByName(e){for(let n=0;n<this.children.length;n++){const r=this.children[n];if(r.name&&r.name===e)return r}}addChildNode(e){this.children.push(e),e.parent=this}fromPositionRotationScale(e,n,r){return this.position=Fn(e),this.scale=Fn(r),this.rotation=Fn(n),this}}const gE=window.navigator.userAgent;navigator.userAgent.indexOf("Firefox")>-1;!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0;/constructor/i.test(window.HTMLElement)||function(t){return t.toString()==="[object SafariRemoteNotification]"}(!window.safari||typeof safari<"u"&&safari.pushNotification);window.chrome&&(window.chrome.webstore||window.chrome.runtime);const Uo=typeof window.orientation<"u"||navigator.userAgent.indexOf("IEMobile")!==-1,vE=gE.match(/(iPad)/)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,vi=!Uo&&!vE;function bE(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}bE();const _E=(t,e)=>{let n,r=0;return(...i)=>{clearTimeout(n);const s=performance.now();s-r>e?t(...i):n=setTimeout(()=>t(...i),e),r=s}};class _v{constructor(e,n){this.dpr=n.dpr,this.width=e.offsetWidth*this.dpr,this.height=e.offsetHeight*this.dpr,this.container=e,this.isMobile=Uo,this.active=!1,this.time=0,this.dt=0,this.passes=[],n!==null?(this.manager=n,this.canvas=this.manager.canvas,this.gl=this.manager.gl):this.catchContext(),this.inTransition=!1,this.root=new Sa,this._emitter={},Xs(this._emitter),this.on=this._emitter.on.bind(this._emitter),this.debouncedResize=_E(this.onResize.bind(this),30),window.addEventListener("resize",this.debouncedResize)}getNode(e){for(let n=0;n<this.nodes.length;n++)if(this.nodes[n].name==e)return this.nodes[n]}getMesh(e){for(let n=0;n<this.meshes.length;n++)if(this.meshes[n].name==e)return this.meshes[n]}getMeshes(e){let n=[];for(let r=0;r<this.meshes.length;r++)this.meshes[r].name==e&&n.push(this.meshes[r]);return n}getParentInNodeTree(e,n){for(const r in e)if(Object.hasOwnProperty.call(e,r)){const i=e[r];if(i.childrenIds.indexOf(n)>-1)return i.transform}}catchContext(){if(this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.maxWidth=this.container.offsetWidth+"px",this.canvas.style.maxHeight=this.container.offsetHeight+"px",this.container.appendChild(this.canvas),this.gl=this.canvas.getContext("webgl",{}),this.gl===void 0)return;let e=this.gl.getExtension("OES_vertex_array_object");e&&(this.gl.createVertexArray=function(){return e.createVertexArrayOES()},this.gl.deleteVertexArray=function(n){e.deleteVertexArrayOES(n)},this.gl.bindVertexArray=function(n){e.bindVertexArrayOES(n)},this.gl.isVertexArray=function(n){return e.isVertexArrayOES(n)}),this.gl.getExtension("OES_standard_derivatives"),this.gl.getExtension("EXT_shader_texture_lod"),this.gl.getExtension("OES_texture_float"),this.gl.getExtension("OES_texture_float_linear"),this.gl.getExtension("OES_texture_half_float"),this.gl.getExtension("OES_texture_half_float_linear"),this.gl.getExtension("EXT_color_buffer_half_float")}resize(){for(let e=0;e<this.passes.length;e++)this.passes[e].onResize()}onResize(){this.inTransition&&this.isMobile||(this.width=this.container.offsetWidth*this.dpr,this.height=this.container.offsetHeight*this.dpr,this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.maxWidth=this.container.offsetWidth+"px",this.canvas.style.maxHeight=this.container.offsetHeight+"px",this.gl.viewport(0,0,this.width,this.height),this.resize&&this.resize())}}const ni={main:{test:{url:"/glxp/UV_Grid.ktx2",options:["compressed"]},testPng:{url:"/glxp/UV_Grid.png",options:["repeat"]},brdfLUT:{url:"/glxp/brdfLUT.png",options:["clamp"]},flakes:{url:"/glxp/flake-map.ktx2",options:["compressed","repeat"]},chat_face:{url:"/glxp/textures/face/tex-chat-woman-5.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},chat_face_depth:{url:"/glxp/textures/face/tex-chat-woman-depth-2.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_ethicist_albedo:{url:"/glxp/textures/archetypes/Ethicist_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_ethicist_depth:{url:"/glxp/textures/archetypes/Ethicist_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_creative_albedo:{url:"/glxp/textures/archetypes/Creative_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_creative_depth:{url:"/glxp/textures/archetypes/Creative_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_marketer_albedo:{url:"/glxp/textures/archetypes/Marketer_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_marketer_depth:{url:"/glxp/textures/archetypes/Marketer_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_optimist_albedo:{url:"/glxp/textures/archetypes/Optimist_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_optimist_depth:{url:"/glxp/textures/archetypes/Optimist_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_engineer_albedo:{url:"/glxp/textures/archetypes/Engineer_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_engineer_depth:{url:"/glxp/textures/archetypes/Engineer_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_executive_albedo:{url:"/glxp/textures/archetypes/Executive_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_executive_depth:{url:"/glxp/textures/archetypes/Executive_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_pioneer_albedo:{url:"/glxp/textures/archetypes/Pioneer_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_pioneer_depth:{url:"/glxp/textures/archetypes/Pioneer_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_writer_albedo:{url:"/glxp/textures/archetypes/Writer_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_writer_depth:{url:"/glxp/textures/archetypes/Writer_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_producer_albedo:{url:"/glxp/textures/archetypes/Producer_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_producer_depth:{url:"/glxp/textures/archetypes/Producer_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_protopian_albedo:{url:"/glxp/textures/archetypes/Protopian_Albedo.png",options:["clamp","flipY","compressed","lodTarget=1024"]},arch_protopian_depth:{url:"/glxp/textures/archetypes/Protopian_Depth.jpg",options:["clamp","flipY","compressed","lodTarget=1024"]},Matcap_001:{url:"/glxp/textures/Matcap_002.jpg",options:["repeat"]},Matcap_002:{url:"/glxp/textures/Matcap_004.jpg",options:["repeat"]},Matcap_003:{url:"/glxp/textures/Matcap_005.jpg",options:["repeat"]},Matcap_Blue:{url:"/glxp/textures/Blue.png",options:["repeat"]},Matcap_Emerald:{url:"/glxp/textures/Emerald.png",options:["repeat"]},Matcap_Gold:{url:"/glxp/textures/Gold.png",options:["repeat"]},Matcap_Purple:{url:"/glxp/textures/Purple.png",options:["repeat"]},noise_blue:{url:"/glxp/textures/blue-noise-opti.png",options:["repeat"]}},fonts:{SofiaProBlack:{spritesheet:{url:"/glxp/fonts/SofiaProBlack.json"},sdf:{url:"/glxp/fonts/SofiaProBlack.png",options:["flipY"]}}},audio:{},videos:{video_face_idle:"/glxp/videos/face-idle-depth.mp4"},materials:{Exemple:{albedoColor:"#ffffff",albedoMap:"foo",metallicRoughnessTexture:"foo",emissiveTexture:"foo",emissiveFactor:"#FFFFFF",emissiveColor:"#ff2613",emissivePower:2.5,occlusionTexture:"foo",normalTexture:"foo",ORMTexture:"foo",IBL:1,NormalScale:1,MetalicFactor:1e-5,RoughnessFactor:1,OcclusionFactor:1},Default:{albedoMap:"Head_BaseColor",IBL:1.5,MetalicFactor:.5,RoughnessFactor:3}}};var Sc={exports:{}};(function(t,e){(function(n,r){var i="1.0.33",s="",o="?",a="function",l="undefined",c="object",u="string",h="major",f="model",d="name",p="type",m="vendor",g="version",x="architecture",b="console",_="mobile",v="tablet",y="smarttv",w="wearable",P="embedded",T=350,R="Amazon",k="Apple",D="ASUS",M="BlackBerry",z="Browser",S="Chrome",A="Edge",I="Firefox",B="Google",$="Huawei",ne="LG",pe="Microsoft",ge="Motorola",ve="Opera",ze="Samsung",Ee="Sharp",N="Sony",Q="Xiaomi",W="Zebra",J="Facebook",se=function(F,q){var G={};for(var te in F)q[te]&&q[te].length%2===0?G[te]=q[te].concat(F[te]):G[te]=F[te];return G},Se=function(F){for(var q={},G=0;G<F.length;G++)q[F[G].toUpperCase()]=F[G];return q},me=function(F,q){return typeof F===u?E(q).indexOf(E(F))!==-1:!1},E=function(F){return F.toLowerCase()},O=function(F){return typeof F===u?F.replace(/[^\d\.]/g,s).split(".")[0]:r},U=function(F,q){if(typeof F===u)return F=F.replace(/^\s\s*/,s),typeof q===l?F:F.substring(0,T)},V=function(F,q){for(var G=0,te,ee,_e,re,qe,$e;G<q.length&&!qe;){var fn=q[G],Tt=q[G+1];for(te=ee=0;te<fn.length&&!qe;)if(qe=fn[te++].exec(F),qe)for(_e=0;_e<Tt.length;_e++)$e=qe[++ee],re=Tt[_e],typeof re===c&&re.length>0?re.length===2?typeof re[1]==a?this[re[0]]=re[1].call(this,$e):this[re[0]]=re[1]:re.length===3?typeof re[1]===a&&!(re[1].exec&&re[1].test)?this[re[0]]=$e?re[1].call(this,$e,re[2]):r:this[re[0]]=$e?$e.replace(re[1],re[2]):r:re.length===4&&(this[re[0]]=$e?re[3].call(this,$e.replace(re[1],re[2])):r):this[re]=$e||r;G+=2}},j=function(F,q){for(var G in q)if(typeof q[G]===c&&q[G].length>0){for(var te=0;te<q[G].length;te++)if(me(q[G][te],F))return G===o?r:G}else if(me(q[G],F))return G===o?r:G;return F},K={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[g,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[g,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,g],[/opios[\/ ]+([\w\.]+)/i],[g,[d,ve+" Mini"]],[/\bopr\/([\w\.]+)/i],[g,[d,ve]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[d,g],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[g,[d,"UC"+z]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[g,[d,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[g,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[g,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[g,[d,"IE"]],[/yabrowser\/([\w\.]+)/i],[g,[d,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+z],g],[/\bfocus\/([\w\.]+)/i],[g,[d,I+" Focus"]],[/\bopt\/([\w\.]+)/i],[g,[d,ve+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[g,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[g,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[g,[d,ve+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[g,[d,"MIUI "+z]],[/fxios\/([-\w\.]+)/i],[g,[d,I]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 "+z]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 "+z],g],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],g],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[d,g],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,J],g],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[d,g],[/\bgsa\/([\w\.]+) .*safari\//i],[g,[d,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[g,[d,S+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,S+" WebView"],g],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[g,[d,"Android "+z]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,g],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[g,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[g,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[g,j,K]],[/(webkit|khtml)\/([\w\.]+)/i],[d,g],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],g],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[g,[d,I+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[d,g],[/(cobalt)\/([\w\.]+)/i],[d,[g,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[x,"amd64"]],[/(ia32(?=;))/i],[[x,E]],[/((?:i[346]|x)86)[;\)]/i],[[x,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[x,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[x,"armhf"]],[/windows (ce|mobile); ppc;/i],[[x,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[x,/ower/,s,E]],[/(sun4\w)[;\)]/i],[[x,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[x,E]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[f,[m,ze],[p,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[f,[m,ze],[p,_]],[/\((ip(?:hone|od)[\w ]*);/i],[f,[m,k],[p,_]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[f,[m,k],[p,v]],[/(macintosh);/i],[f,[m,k]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[f,[m,$],[p,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[f,[m,$],[p,_]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[f,/_/g," "],[m,Q],[p,_]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[f,/_/g," "],[m,Q],[p,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[f,[m,"OPPO"],[p,_]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[f,[m,"Vivo"],[p,_]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[f,[m,"Realme"],[p,_]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[f,[m,ge],[p,_]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[f,[m,ge],[p,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[f,[m,ne],[p,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[f,[m,ne],[p,_]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[f,[m,"Lenovo"],[p,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[f,/_/g," "],[m,"Nokia"],[p,_]],[/(pixel c)\b/i],[f,[m,B],[p,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[f,[m,B],[p,_]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[f,[m,N],[p,_]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[f,"Xperia Tablet"],[m,N],[p,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[f,[m,"OnePlus"],[p,_]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[f,[m,R],[p,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[f,/(.+)/g,"Fire Phone $1"],[m,R],[p,_]],[/(playbook);[-\w\),; ]+(rim)/i],[f,m,[p,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[f,[m,M],[p,_]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[f,[m,D],[p,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[f,[m,D],[p,_]],[/(nexus 9)/i],[f,[m,"HTC"],[p,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[f,/_/g," "],[p,_]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[f,[m,"Acer"],[p,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[f,[m,"Meizu"],[p,_]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[f,[m,Ee],[p,_]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,f,[p,_]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,f,[p,v]],[/(surface duo)/i],[f,[m,pe],[p,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[f,[m,"Fairphone"],[p,_]],[/(u304aa)/i],[f,[m,"AT&T"],[p,_]],[/\bsie-(\w*)/i],[f,[m,"Siemens"],[p,_]],[/\b(rct\w+) b/i],[f,[m,"RCA"],[p,v]],[/\b(venue[\d ]{2,7}) b/i],[f,[m,"Dell"],[p,v]],[/\b(q(?:mv|ta)\w+) b/i],[f,[m,"Verizon"],[p,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[f,[m,"Barnes & Noble"],[p,v]],[/\b(tm\d{3}\w+) b/i],[f,[m,"NuVision"],[p,v]],[/\b(k88) b/i],[f,[m,"ZTE"],[p,v]],[/\b(nx\d{3}j) b/i],[f,[m,"ZTE"],[p,_]],[/\b(gen\d{3}) b.+49h/i],[f,[m,"Swiss"],[p,_]],[/\b(zur\d{3}) b/i],[f,[m,"Swiss"],[p,v]],[/\b((zeki)?tb.*\b) b/i],[f,[m,"Zeki"],[p,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],f,[p,v]],[/\b(ns-?\w{0,9}) b/i],[f,[m,"Insignia"],[p,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[f,[m,"NextBook"],[p,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],f,[p,_]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],f,[p,_]],[/\b(ph-1) /i],[f,[m,"Essential"],[p,_]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[f,[m,"Envizen"],[p,v]],[/\b(trio[-\w\. ]+) b/i],[f,[m,"MachSpeed"],[p,v]],[/\btu_(1491) b/i],[f,[m,"Rotor"],[p,v]],[/(shield[\w ]+) b/i],[f,[m,"Nvidia"],[p,v]],[/(sprint) (\w+)/i],[m,f,[p,_]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[m,pe],[p,_]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[f,[m,W],[p,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[f,[m,W],[p,_]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,f,[p,b]],[/droid.+; (shield) bui/i],[f,[m,"Nvidia"],[p,b]],[/(playstation [345portablevi]+)/i],[f,[m,N],[p,b]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[f,[m,pe],[p,b]],[/smart-tv.+(samsung)/i],[m,[p,y]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[m,ze],[p,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,ne],[p,y]],[/(apple) ?tv/i],[m,[f,k+" TV"],[p,y]],[/crkey/i],[[f,S+"cast"],[m,B],[p,y]],[/droid.+aft(\w)( bui|\))/i],[f,[m,R],[p,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[f,[m,Ee],[p,y]],[/(bravia[\w ]+)( bui|\))/i],[f,[m,N],[p,y]],[/(mitv-\w{5}) bui/i],[f,[m,Q],[p,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[m,U],[f,U],[p,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[p,y]],[/((pebble))app/i],[m,f,[p,w]],[/droid.+; (glass) \d/i],[f,[m,B],[p,w]],[/droid.+; (wt63?0{2,3})\)/i],[f,[m,W],[p,w]],[/(quest( 2)?)/i],[f,[m,J],[p,w]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[p,P]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[f,[p,_]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[f,[p,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[p,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[p,_]],[/(android[-\w\. ]{0,9});.+buil/i],[f,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[g,[d,A+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[g,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[d,g],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[g,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,g],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[d,[g,j,Z]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[d,"Windows"],[g,j,Z]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[g,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,"Mac OS"],[g,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[g,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,g],[/\(bb(10);/i],[g,[d,M]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[g,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[g,[d,I+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[g,[d,"webOS"]],[/crkey\/([\d\.]+)/i],[g,[d,S+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[d,"Chromium OS"],g],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,g],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],g],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[d,g]]},X=function(F,q){if(typeof F===c&&(q=F,F=r),!(this instanceof X))return new X(F,q).getResult();var G=F||(typeof n!==l&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:s),te=q?se(Y,q):Y;return this.getBrowser=function(){var ee={};return ee[d]=r,ee[g]=r,V.call(ee,G,te.browser),ee.major=O(ee.version),ee},this.getCPU=function(){var ee={};return ee[x]=r,V.call(ee,G,te.cpu),ee},this.getDevice=function(){var ee={};return ee[m]=r,ee[f]=r,ee[p]=r,V.call(ee,G,te.device),ee},this.getEngine=function(){var ee={};return ee[d]=r,ee[g]=r,V.call(ee,G,te.engine),ee},this.getOS=function(){var ee={};return ee[d]=r,ee[g]=r,V.call(ee,G,te.os),ee},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return G},this.setUA=function(ee){return G=typeof ee===u&&ee.length>T?U(ee,T):ee,this},this.setUA(G),this};X.VERSION=i,X.BROWSER=Se([d,g,h]),X.CPU=Se([x]),X.DEVICE=Se([f,m,p,b,_,y,v,w,P]),X.ENGINE=X.OS=Se([d,g]),t.exports&&(e=t.exports=X),e.UAParser=X;var H=typeof n!==l&&(n.jQuery||n.Zepto);if(H&&!H.ua){var L=new X;H.ua=L.getResult(),H.ua.get=function(){return L.getUA()},H.ua.set=function(F){L.setUA(F);var q=L.getResult();for(var G in q)H.ua[G]=q[G]}}})(typeof window=="object"?window:Io)})(Sc,Sc.exports);const yE=Sc.exports,iO=!1,rO={XXXS:0,S:375,M:768,L:1200,XL:1400,XXL:1600,XXXL:1920},or={"tech-engineering":{seed:"93100bb3-580d-4dea-a299-6ec860452c92",previewImage:"/assets/images/previews/Render_Seed_93100bb3-580d-4dea-a299-6ec860452c92-fs8.png",colorScheme:"sapphire"},growth:{seed:"9cec083c-4200-426a-95be-273d62c48a66",previewImage:"/assets/images/previews/Render_Seed_9cec083c-4200-426a-95be-273d62c48a66-fs8.png",colorScheme:"amber"},"web3-blockchain":{seed:"3bac65df-6c99-4230-8aae-c7eaa5349789",previewImage:"/assets/images/previews/Render_Seed_3bac65df-6c99-4230-8aae-c7eaa5349789-fs8.png",colorScheme:"emerald"},experience:{seed:"734fc0a3-572b-43a0-a888-84577e3608c8",previewImage:"/assets/images/previews/Render_Seed_734fc0a3-572b-43a0-a888-84577e3608c8-fs8.png",colorScheme:"ruby"},social:{seed:"5c127a64-12a2-46a5-9a5e-2bec9899da85",previewImage:"/assets/images/previews/Render_Seed_5c127a64-12a2-46a5-9a5e-2bec9899da85-fs8.png",colorScheme:"amethyst"},marketplaces:{seed:"6329c1db-4550-447c-96da-4f8c27eb5463",previewImage:"/assets/images/previews/Render_Seed_6329c1db-4550-447c-96da-4f8c27eb5463-fs8.png",colorScheme:"gold"},"brand-advertising":{seed:"5296e7f8-7cb5-453c-96fb-462f4e09a8b4",previewImage:"/assets/images/previews/Render_Seed_5296e7f8-7cb5-453c-96fb-462f4e09a8b4-fs8.png",colorScheme:"amber"},data:{seed:"7c46cf81-7210-4f2a-9414-8ee1fc3aaab5",previewImage:"/assets/images/previews/Render_Seed_7c46cf81-7210-4f2a-9414-8ee1fc3aaab5-fs8.png",colorScheme:"sapphire"},metaverse:{seed:"697cfb7a-c6ae-467e-a4e0-aa56c28ab749",previewImage:"/assets/images/previews/Render_Seed_697cfb7a-c6ae-467e-a4e0-aa56c28ab749-fs8.png",colorScheme:"ruby"},loyalty:{seed:"bdcd1432-bdb5-4584-a7af-9965016cfde0",previewImage:"/assets/images/previews/Render_Seed_bdcd1432-bdb5-4584-a7af-9965016cfde0-fs8.png",colorScheme:"gold"},arvr:{seed:"e8a6ce3f-c72b-499b-ac7f-2d126b304bbc",previewImage:"/assets/images/previews/Render_Seed_e8a6ce3f-c72b-499b-ac7f-2d126b304bbc-fs8.png",colorScheme:"amethyst"},strategy:{seed:"865599fb-e0cc-40fc-a61c-ca74f3efc471",previewImage:"/assets/images/previews/Render_Seed_865599fb-e0cc-40fc-a61c-ca74f3efc471-fs8.png",colorScheme:"emerald"},automation:{seed:"94c39dcd-aef0-40e0-b9d9-8e902e9af267",previewImage:"/assets/images/previews/Render_Seed_94c39dcd-aef0-40e0-b9d9-8e902e9af267-fs8.png",colorScheme:"amber"},aiml:{seed:"c6031c91-911f-4385-b992-2f084ddcb0aa",previewImage:"/assets/images/previews/Render_Seed_c6031c91-911f-4385-b992-2f084ddcb0aa-fs8.png",colorScheme:"sapphire"},creativity:{seed:"3653cb39-7705-432f-b3f4-072fd72b5cec",previewImage:"/assets/images/previews/Render_Seed_3653cb39-7705-432f-b3f4-072fd72b5cec-fs8.png",colorScheme:"sapphire"},"branding-design":{seed:"3488a4d6-85a8-461b-afd2-68d5ce25f129",previewImage:"/assets/images/previews/Render_Seed_3488a4d6-85a8-461b-afd2-68d5ce25f129-fs8.png",colorScheme:"gold"},"digital-transformation":{seed:"4fd26168-d70d-4214-b5d2-62469214ee1b",previewImage:"/assets/images/previews/Render_Seed_4fd26168-d70d-4214-b5d2-62469214ee1b-fs8.png",colorScheme:"emerald"},media:{seed:"99724711-3ca3-4b94-bdf4-09bac6c2924d",previewImage:"/assets/images/previews/Render_Seed_99724711-3ca3-4b94-bdf4-09bac6c2924d-fs8.png",colorScheme:"ruby"},commerce:{seed:"709a0d42-40e3-4eb2-b22f-a529fc0f1965",previewImage:"/assets/images/previews/Render_Seed_709a0d42-40e3-4eb2-b22f-a529fc0f1965-fs8.png",colorScheme:"amethyst"},"search-innovation":{seed:"89cdf2a7-380e-4339-9741-b5527d6fc6d4",previewImage:"/assets/images/previews/Render_Seed_89cdf2a7-380e-4339-9741-b5527d6fc6d4.png",colorScheme:"ruby"}},Oe={amethyst:{label:"Amethyst",backgroundColor1:"#000000",backgroundColor2:"#000000",backgroundColor3:"#3b008f",backgroundColor4:"#2c012b",particlesFlowColor1:"#ff00d0",particlesFlowColor2:"#0084ff",spiritColor0:"#fa00ff",spiritColor1:"#4d21eb",spiritMatCap:"Matcap_003",faceColor0:"#9200ff",faceColor1:"#8800ff",faceColorSpeech:"#2cadc5",dustColor0:"#ed703f",dustColor1:"#ffffff"},sapphire:{label:"Sapphire",backgroundColor1:"#002849",backgroundColor2:"#04182c",backgroundColor3:"#102735",backgroundColor4:"#0d293b",particlesFlowColor1:"#0ea7ff",particlesFlowColor2:"#01b5ef",spiritColor0:"#00c8ff",spiritColor1:"#319f6e",spiritMatCap:"Matcap_Blue",faceColor0:"#0937ff",faceColor1:"#31ccff",faceColorSpeech:"#37b6ff",dustColor0:"#218aff",dustColor1:"#ffffff"},ruby:{label:"Ruby",backgroundColor1:"#490029",backgroundColor2:"#24042c",backgroundColor3:"#311035",backgroundColor4:"#330d3b",particlesFlowColor1:"#ff0e79",particlesFlowColor2:"#ef0191",spiritColor0:"#ff00e3",spiritColor1:"#9f3159",spiritMatCap:"Matcap_Purple",faceColor0:"#7f1158",faceColor1:"#ff314a",faceColorSpeech:"#ffc881",dustColor0:"#ff21d5",dustColor1:"#ffffff"},emerald:{label:"Emerald",backgroundColor1:"#004937",backgroundColor2:"#042a2c",backgroundColor3:"#103335",backgroundColor4:"#0d3b32",particlesFlowColor1:"#5cd7ff",particlesFlowColor2:"#7fffff",spiritColor0:"#00dfff",spiritColor1:"#104e72",spiritMatCap:"Matcap_Emerald",faceColor0:"#116d7f",faceColor1:"#2effbb",faceColorSpeech:"#37ff2c",dustColor0:"#21ffa5",dustColor1:"#ffffff"},amber:{label:"Amber",backgroundColor1:"#220600",backgroundColor2:"#2c0c04",backgroundColor3:"#351010",backgroundColor4:"#3b0d0d",particlesFlowColor1:"#ff5c5c",particlesFlowColor2:"#ff7f7f",spiritColor0:"#ff3e00",spiritColor1:"#956741",spiritMatCap:"Matcap_Gold",faceColor0:"#7f1111",faceColor1:"#ff8b2e",faceColorSpeech:"#ef0b0b",dustColor0:"#e84814",dustColor1:"#ffffff"},gold:{label:"Gold",backgroundColor1:"#221200",backgroundColor2:"#2c1e04",backgroundColor3:"#352211",backgroundColor4:"#3c2f0e",particlesFlowColor1:"#a86a4d",particlesFlowColor2:"#92773e",spiritColor0:"#bf8f25",spiritColor1:"#dbd3a4",spiritMatCap:"Matcap_Gold",faceColor0:"#422c09",faceColor1:"#ffc151",faceColorSpeech:"#f8ff8d",dustColor0:"#21ffa5",dustColor1:"#ffffff"}},Pc={engineer:{label:"The Engineer",albedoId:"arch_engineer_albedo",depthId:"arch_engineer_depth"},producer:{label:"The Producer",albedoId:"arch_producer_albedo",depthId:"arch_producer_depth"},writer:{label:"The Writer",albedoId:"arch_writer_albedo",depthId:"arch_writer_depth"},executive:{label:"The Executive",albedoId:"arch_executive_albedo",depthId:"arch_executive_depth"},ethicist:{label:"The Ethicist",albedoId:"arch_ethicist_albedo",depthId:"arch_ethicist_depth"},creative:{label:"The Creative",albedoId:"arch_creative_albedo",depthId:"arch_creative_depth"},marketer:{label:"The Marketer",albedoId:"arch_marketer_albedo",depthId:"arch_marketer_depth"},pioneer:{label:"The Pioneer",albedoId:"arch_pioneer_albedo",depthId:"arch_pioneer_depth"},optimist:{label:"The Optimist",albedoId:"arch_optimist_albedo",depthId:"arch_optimist_depth"},protopian:{label:"The Protopian",albedoId:"arch_protopian_albedo",depthId:"arch_protopian_depth"}},Pa=new yE;Pa.setUA(navigator.userAgent);Pa.getOS();const yv=Pa.getDevice();Pa.getBrowser();yv.type;yv.type;function ho(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var xv={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function(){function n(r,i,s){function o(c,u){if(!i[c]){if(!r[c]){var h=typeof ho=="function"&&ho;if(!u&&h)return h(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var d=i[c]={exports:{}};r[c][0].call(d.exports,function(p){var m=r[c][1][p];return o(m||p)},d,d.exports,n,r,i,s)}return i[c].exports}for(var a=typeof ho=="function"&&ho,l=0;l<s.length;l++)o(s[l]);return o}return n}()({1:[function(n,r,i){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var s=n("fs"),o=n("path"),a=n("./utils"),l=!1,c=n("../package.json").version,u="<",h=">",f="%",d="locals",p="ejs",m="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",g=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],x=g.concat("cache"),b=/^\uFEFF/,_=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;i.cache=a.cache,i.fileLoader=s.readFileSync,i.localsName=d,i.promiseImpl=new Function("return this;")().Promise,i.resolveInclude=function(z,S,A){var I=o.dirname,B=o.extname,$=o.resolve,ne=$(A?S:I(S),z),pe=B(z);return pe||(ne+=".ejs"),ne};function v(z,S){var A;if(S.some(function(I){return A=i.resolveInclude(z,I,!0),s.existsSync(A)}))return A}function y(z,S){var A,I,B=S.views,$=/^[A-Za-z]+:\\|^\//.exec(z);if($&&$.length)z=z.replace(/^\/*/,""),Array.isArray(S.root)?A=v(z,S.root):A=i.resolveInclude(z,S.root||"/",!0);else if(S.filename&&(I=i.resolveInclude(z,S.filename),s.existsSync(I)&&(A=I)),!A&&Array.isArray(B)&&(A=v(z,B)),!A&&typeof S.includer!="function")throw new Error('Could not find the include file "'+S.escapeFunction(z)+'"');return A}function w(z,S){var A,I=z.filename,B=arguments.length>1;if(z.cache){if(!I)throw new Error("cache option requires a filename");if(A=i.cache.get(I),A)return A;B||(S=T(I).toString().replace(b,""))}else if(!B){if(!I)throw new Error("Internal EJS error: no file name or template provided");S=T(I).toString().replace(b,"")}return A=i.compile(S,z),z.cache&&i.cache.set(I,A),A}function P(z,S,A){var I;if(A){try{I=w(z)(S)}catch(B){return A(B)}A(null,I)}else{if(typeof i.promiseImpl=="function")return new i.promiseImpl(function(B,$){try{I=w(z)(S),B(I)}catch(ne){$(ne)}});throw new Error("Please provide a callback function")}}function T(z){return i.fileLoader(z)}function R(z,S){var A=a.shallowCopy(a.createNullProtoObjWherePossible(),S);if(A.filename=y(z,A),typeof S.includer=="function"){var I=S.includer(z,A.filename);if(I&&(I.filename&&(A.filename=I.filename),I.template))return w(A,I.template)}return w(A)}function k(z,S,A,I,B){var $=S.split(`
`),ne=Math.max(I-3,0),pe=Math.min($.length,I+3),ge=B(A),ve=$.slice(ne,pe).map(function(ze,Ee){var N=Ee+ne+1;return(N==I?" >> ":"    ")+N+"| "+ze}).join(`
`);throw z.path=ge,z.message=(ge||"ejs")+":"+I+`
`+ve+`

`+z.message,z}function D(z){return z.replace(/;(\s*$)/,"$1")}i.compile=function(S,A){var I;return A&&A.scope&&(l||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),l=!0),A.context||(A.context=A.scope),delete A.scope),I=new M(S,A),I.compile()},i.render=function(z,S,A){var I=S||a.createNullProtoObjWherePossible(),B=A||a.createNullProtoObjWherePossible();return arguments.length==2&&a.shallowCopyFromList(B,I,g),w(B,z)(I)},i.renderFile=function(){var z=Array.prototype.slice.call(arguments),S=z.shift(),A,I={filename:S},B,$;return typeof arguments[arguments.length-1]=="function"&&(A=z.pop()),z.length?(B=z.shift(),z.length?a.shallowCopy(I,z.pop()):(B.settings&&(B.settings.views&&(I.views=B.settings.views),B.settings["view cache"]&&(I.cache=!0),$=B.settings["view options"],$&&a.shallowCopy(I,$)),a.shallowCopyFromList(I,B,x)),I.filename=S):B=a.createNullProtoObjWherePossible(),P(I,B,A)},i.Template=M,i.clearCache=function(){i.cache.reset()};function M(z,S){S=S||a.createNullProtoObjWherePossible();var A=a.createNullProtoObjWherePossible();this.templateText=z,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",A.client=S.client||!1,A.escapeFunction=S.escape||S.escapeFunction||a.escapeXML,A.compileDebug=S.compileDebug!==!1,A.debug=!!S.debug,A.filename=S.filename,A.openDelimiter=S.openDelimiter||i.openDelimiter||u,A.closeDelimiter=S.closeDelimiter||i.closeDelimiter||h,A.delimiter=S.delimiter||i.delimiter||f,A.strict=S.strict||!1,A.context=S.context,A.cache=S.cache||!1,A.rmWhitespace=S.rmWhitespace,A.root=S.root,A.includer=S.includer,A.outputFunctionName=S.outputFunctionName,A.localsName=S.localsName||i.localsName||d,A.views=S.views,A.async=S.async,A.destructuredLocals=S.destructuredLocals,A.legacyInclude=typeof S.legacyInclude<"u"?!!S.legacyInclude:!0,A.strict?A._with=!1:A._with=typeof S._with<"u"?S._with:!0,this.opts=A,this.regex=this.createRegex()}M.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},M.prototype={createRegex:function(){var z=m,S=a.escapeRegExpChars(this.opts.delimiter),A=a.escapeRegExpChars(this.opts.openDelimiter),I=a.escapeRegExpChars(this.opts.closeDelimiter);return z=z.replace(/%/g,S).replace(/</g,A).replace(/>/g,I),new RegExp(z)},compile:function(){var z,S,A=this.opts,I="",B="",$=A.escapeFunction,ne,pe=A.filename?JSON.stringify(A.filename):"undefined";if(!this.source){if(this.generateSource(),I+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,A.outputFunctionName){if(!_.test(A.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");I+="  var "+A.outputFunctionName+` = __append;
`}if(A.localsName&&!_.test(A.localsName))throw new Error("localsName is not a valid JS identifier.");if(A.destructuredLocals&&A.destructuredLocals.length){for(var ge="  var __locals = ("+A.localsName+` || {}),
`,ve=0;ve<A.destructuredLocals.length;ve++){var ze=A.destructuredLocals[ve];if(!_.test(ze))throw new Error("destructuredLocals["+ve+"] is not a valid JS identifier.");ve>0&&(ge+=`,
  `),ge+=ze+" = __locals."+ze}I+=ge+`;
`}A._with!==!1&&(I+="  with ("+A.localsName+` || {}) {
`,B+=`  }
`),B+=`  return __output;
`,this.source=I+this.source+B}A.compileDebug?z=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+pe+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:z=this.source,A.client&&(z="escapeFn = escapeFn || "+$.toString()+`;
`+z,A.compileDebug&&(z="rethrow = rethrow || "+k.toString()+`;
`+z)),A.strict&&(z=`"use strict";
`+z),A.debug&&console.log(z),A.compileDebug&&A.filename&&(z=z+`
//# sourceURL=`+pe+`
`);try{if(A.async)try{ne=new Function("return (async function(){}).constructor;")()}catch(W){throw W instanceof SyntaxError?new Error("This environment does not support async/await"):W}else ne=Function;S=new ne(A.localsName+", escapeFn, include, rethrow",z)}catch(W){throw W instanceof SyntaxError&&(A.filename&&(W.message+=" in "+A.filename),W.message+=` while compiling ejs

`,W.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,W.message+="https://github.com/RyanZim/EJS-Lint",A.async||(W.message+=`
`,W.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),W}var Ee=A.client?S:function(J){var se=function(Se,me){var E=a.shallowCopy(a.createNullProtoObjWherePossible(),J);return me&&(E=a.shallowCopy(E,me)),R(Se,A)(E)};return S.apply(A.context,[J||a.createNullProtoObjWherePossible(),$,se,k])};if(A.filename&&typeof Object.defineProperty=="function"){var N=A.filename,Q=o.basename(N,o.extname(N));try{Object.defineProperty(Ee,"name",{value:Q,writable:!1,enumerable:!1,configurable:!0})}catch{}}return Ee},generateSource:function(){var z=this.opts;z.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var S=this,A=this.parseTemplateText(),I=this.opts.delimiter,B=this.opts.openDelimiter,$=this.opts.closeDelimiter;A&&A.length&&A.forEach(function(ne,pe){var ge;if(ne.indexOf(B+I)===0&&ne.indexOf(B+I+I)!==0&&(ge=A[pe+2],!(ge==I+$||ge=="-"+I+$||ge=="_"+I+$)))throw new Error('Could not find matching close tag for "'+ne+'".');S.scanLine(ne)})},parseTemplateText:function(){for(var z=this.templateText,S=this.regex,A=S.exec(z),I=[],B;A;)B=A.index,B!==0&&(I.push(z.substring(0,B)),z=z.slice(B)),I.push(A[0]),z=z.slice(A[0].length),A=S.exec(z);return z&&I.push(z),I},_addOutput:function(z){if(this.truncate&&(z=z.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!z)return z;z=z.replace(/\\/g,"\\\\"),z=z.replace(/\n/g,"\\n"),z=z.replace(/\r/g,"\\r"),z=z.replace(/"/g,'\\"'),this.source+='    ; __append("'+z+`")
`},scanLine:function(z){var S=this,A=this.opts.delimiter,I=this.opts.openDelimiter,B=this.opts.closeDelimiter,$=0;switch($=z.split(`
`).length-1,z){case I+A:case I+A+"_":this.mode=M.modes.EVAL;break;case I+A+"=":this.mode=M.modes.ESCAPED;break;case I+A+"-":this.mode=M.modes.RAW;break;case I+A+"#":this.mode=M.modes.COMMENT;break;case I+A+A:this.mode=M.modes.LITERAL,this.source+='    ; __append("'+z.replace(I+A+A,I+A)+`")
`;break;case A+A+B:this.mode=M.modes.LITERAL,this.source+='    ; __append("'+z.replace(A+A+B,A+B)+`")
`;break;case A+B:case"-"+A+B:case"_"+A+B:this.mode==M.modes.LITERAL&&this._addOutput(z),this.mode=null,this.truncate=z.indexOf("-")===0||z.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case M.modes.EVAL:case M.modes.ESCAPED:case M.modes.RAW:z.lastIndexOf("//")>z.lastIndexOf(`
`)&&(z+=`
`)}switch(this.mode){case M.modes.EVAL:this.source+="    ; "+z+`
`;break;case M.modes.ESCAPED:this.source+="    ; __append(escapeFn("+D(z)+`))
`;break;case M.modes.RAW:this.source+="    ; __append("+D(z)+`)
`;break;case M.modes.COMMENT:break;case M.modes.LITERAL:this._addOutput(z);break}}else this._addOutput(z)}S.opts.compileDebug&&$&&(this.currentLine+=$,this.source+="    ; __line = "+this.currentLine+`
`)}},i.escapeXML=a.escapeXML,i.__express=i.renderFile,i.VERSION=c,i.name=p,typeof window<"u"&&(window.ejs=i)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(n,r,i){var s=/[|\\{}()[\]^$+*?.]/g,o=Object.prototype.hasOwnProperty,a=function(f,d){return o.apply(f,[d])};i.escapeRegExpChars=function(f){return f?String(f).replace(s,"\\$&"):""};var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(f){return l[f]||f}var h=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;i.escapeXML=function(f){return f==null?"":String(f).replace(c,u)},i.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+h},i.shallowCopy=function(f,d){if(d=d||{},f!=null)for(var p in d)!a(d,p)||p==="__proto__"||p==="constructor"||(f[p]=d[p]);return f},i.shallowCopyFromList=function(f,d,p){if(p=p||[],d=d||{},f!=null)for(var m=0;m<p.length;m++){var g=p[m];if(typeof d[g]<"u"){if(!a(d,g)||g==="__proto__"||g==="constructor")continue;f[g]=d[g]}}return f},i.cache={_data:{},set:function(f,d){this._data[f]=d},get:function(f){return this._data[f]},remove:function(f){delete this._data[f]},reset:function(){this._data={}}},i.hyphenToCamel=function(f){return f.replace(/-[a-z]/g,function(d){return d[1].toUpperCase()})},i.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}()},{}],3:[function(n,r,i){},{}],4:[function(n,r,i){(function(s){function o(u,h){for(var f=0,d=u.length-1;d>=0;d--){var p=u[d];p==="."?u.splice(d,1):p===".."?(u.splice(d,1),f++):f&&(u.splice(d,1),f--)}if(h)for(;f--;f)u.unshift("..");return u}i.resolve=function(){for(var u="",h=!1,f=arguments.length-1;f>=-1&&!h;f--){var d=f>=0?arguments[f]:s.cwd();if(typeof d!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!d)continue;u=d+"/"+u,h=d.charAt(0)==="/"}return u=o(l(u.split("/"),function(p){return!!p}),!h).join("/"),(h?"/":"")+u||"."},i.normalize=function(u){var h=i.isAbsolute(u),f=c(u,-1)==="/";return u=o(l(u.split("/"),function(d){return!!d}),!h).join("/"),!u&&!h&&(u="."),u&&f&&(u+="/"),(h?"/":"")+u},i.isAbsolute=function(u){return u.charAt(0)==="/"},i.join=function(){var u=Array.prototype.slice.call(arguments,0);return i.normalize(l(u,function(h,f){if(typeof h!="string")throw new TypeError("Arguments to path.join must be strings");return h}).join("/"))},i.relative=function(u,h){u=i.resolve(u).substr(1),h=i.resolve(h).substr(1);function f(_){for(var v=0;v<_.length&&_[v]==="";v++);for(var y=_.length-1;y>=0&&_[y]==="";y--);return v>y?[]:_.slice(v,y-v+1)}for(var d=f(u.split("/")),p=f(h.split("/")),m=Math.min(d.length,p.length),g=m,x=0;x<m;x++)if(d[x]!==p[x]){g=x;break}for(var b=[],x=g;x<d.length;x++)b.push("..");return b=b.concat(p.slice(g)),b.join("/")},i.sep="/",i.delimiter=":",i.dirname=function(u){if(typeof u!="string"&&(u=u+""),u.length===0)return".";for(var h=u.charCodeAt(0),f=h===47,d=-1,p=!0,m=u.length-1;m>=1;--m)if(h=u.charCodeAt(m),h===47){if(!p){d=m;break}}else p=!1;return d===-1?f?"/":".":f&&d===1?"/":u.slice(0,d)};function a(u){typeof u!="string"&&(u=u+"");var h=0,f=-1,d=!0,p;for(p=u.length-1;p>=0;--p)if(u.charCodeAt(p)===47){if(!d){h=p+1;break}}else f===-1&&(d=!1,f=p+1);return f===-1?"":u.slice(h,f)}i.basename=function(u,h){var f=a(u);return h&&f.substr(-1*h.length)===h&&(f=f.substr(0,f.length-h.length)),f},i.extname=function(u){typeof u!="string"&&(u=u+"");for(var h=-1,f=0,d=-1,p=!0,m=0,g=u.length-1;g>=0;--g){var x=u.charCodeAt(g);if(x===47){if(!p){f=g+1;break}continue}d===-1&&(p=!1,d=g+1),x===46?h===-1?h=g:m!==1&&(m=1):h!==-1&&(m=-1)}return h===-1||d===-1||m===0||m===1&&h===d-1&&h===f+1?"":u.slice(h,d)};function l(u,h){if(u.filter)return u.filter(h);for(var f=[],d=0;d<u.length;d++)h(u[d],d,u)&&f.push(u[d]);return f}var c="ab".substr(-1)==="b"?function(u,h,f){return u.substr(h,f)}:function(u,h,f){return h<0&&(h=u.length+h),u.substr(h,f)}}).call(this,n("_process"))},{_process:5}],5:[function(n,r,i){var s=r.exports={},o,a;function l(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=l}catch{o=l}try{typeof clearTimeout=="function"?a=clearTimeout:a=c}catch{a=c}})();function u(v){if(o===setTimeout)return setTimeout(v,0);if((o===l||!o)&&setTimeout)return o=setTimeout,setTimeout(v,0);try{return o(v,0)}catch{try{return o.call(null,v,0)}catch{return o.call(this,v,0)}}}function h(v){if(a===clearTimeout)return clearTimeout(v);if((a===c||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(v);try{return a(v)}catch{try{return a.call(null,v)}catch{return a.call(this,v)}}}var f=[],d=!1,p,m=-1;function g(){!d||!p||(d=!1,p.length?f=p.concat(f):m=-1,f.length&&x())}function x(){if(!d){var v=u(g);d=!0;for(var y=f.length;y;){for(p=f,f=[];++m<y;)p&&p[m].run();m=-1,y=f.length}p=null,d=!1,h(v)}}s.nextTick=function(v){var y=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)y[w-1]=arguments[w];f.push(new b(v,y)),f.length===1&&!d&&u(x)};function b(v,y){this.fun=v,this.array=y}b.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={};function _(){}s.on=_,s.addListener=_,s.once=_,s.off=_,s.removeListener=_,s.removeAllListeners=_,s.emit=_,s.prependListener=_,s.prependOnceListener=_,s.listeners=function(v){return[]},s.binding=function(v){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(v){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},{}],6:[function(n,r,i){r.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.7",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.7","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha"}}},{}]},{},[1])(1)})})(xv);const hl=xv.exports;var xE=`<% if (vert) { %>
  
    precision highp float; 

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;
    uniform float uTime;

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;

    #ifdef HAS_SHEEN
        varying vec3 vNormal;
    #endif

    void main(){
        vUv = uv;
        vPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;

        #ifdef HAS_SHEEN
            vec3 n = normal;
            vNormal = normalize(vec3(modelMatrix * vec4(n, 0.0)));
        #endif

        gl_PointSize = 2.;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        
    }

<% } %>

<% if (frag) { %>

    precision highp float; 

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;
    #ifdef HAS_SHEEN
        varying vec3 vNormal;
    #endif

    uniform float uTime;
    uniform float uAlpha;

    #ifdef HAS_COLOR_CORRECTION
        uniform float uTintOpacity;
        uniform float uExposure;
        uniform float uContrast;
        uniform float uSaturation;
        uniform vec3 uTint;
    #endif

    uniform bool isCameraFliped;

    #ifdef HAS_COLORMAP
        uniform sampler2D uTexture;
        uniform float uTextureScale;
    #else 
        uniform vec3 uColor;
    #endif
    #ifdef HAS_ALPHAMAP
        uniform sampler2D uAlphaTexture;
    #endif
    #ifdef HAS_FOG
        const float LOG2 = 1.442695;
        uniform vec3 uFogColor;
        
        uniform float uFogNear;
        uniform float uFogFar;
    #endif
    #ifdef HAS_SHEEN
        uniform float uSheenDepth;
        uniform float uSheenOpacity;
        uniform vec3 uSheenColor;
        uniform vec3 uCamera;
    #endif

    #ifdef HAS_COLOR_CORRECTION
        <%= commons.colorCorrection %>
    #endif

    #ifdef HAS_SHEEN
        vec3 getNormal()
        {
            return normalize(vNormal);
        }
    #endif

    void main() { 
        if(isCameraFliped && vPos.y < 0.01){ discard; }
        vec4 t;
        #ifdef HAS_COLORMAP
            t = texture2D( uTexture, vUv * uTextureScale );
        #else 
            t = vec4(uColor, 1.);
        #endif
        #ifdef HAS_ALPHAMAP
            t.a *= texture2D( uAlphaTexture, vUv * uTextureScale ).r * max(uExposure, 1.);
        #endif
        #ifdef HAS_FOG
            float fogDistance = length(vWorldPosition);
            
            float fogAmount = smoothstep(uFogNear, uFogFar, fogDistance);
            fogAmount = clamp(fogAmount, 0., 1.);
            t.rgb = mix(t.rgb, uFogColor, fogAmount);
        #endif

        #ifdef HAS_SHEEN
            vec3 n = getNormal();
            vec3 v = normalize(uCamera - vPos.xyz); 
            float fresnelFactor = abs(dot(v, n));
            float sheen = pow(1.0 - fresnelFactor, uSheenDepth);
            t.rgb = mix(t.rgb, uSheenColor, sheen * uSheenOpacity);
        #endif
        
        #ifdef HAS_COLOR_CORRECTION
            
            t.rgb = czm_saturation(t.rgb, uSaturation);
            t.rgb = contrast(t.rgb, uContrast);
            t.rgb = exposure(t.rgb, uExposure);
            t.rgb = mix(t.rgb, uTint, uTintOpacity);
        #endif

        t.a *= uAlpha;
        gl_FragColor = vec4(t);

        
        
        
    } 
        
<% } %>`,wE=`<% if (vert) { %>

   precision highp float;

    attribute vec3 position;
    attribute vec2 uv;

    varying vec2 vUv;

    void main(void) {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
    }

<% } %>

<% if (frag) { %>

    precision highp float;

    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uNoise;
    varying vec2 vUv;

    uniform vec2 uRez;
    uniform vec2 uMouse;
    uniform float uTime;
    uniform float uHueShift;
    uniform float uVignette;
    uniform float uNoiseOpacity;
    uniform float uLineOpacity;
    uniform float uChromaticAberations;
    uniform float uGamma;
    uniform float uExposure;
    uniform float uBloomOpacity;
    uniform float uContrast;
    uniform float uKonami;
    uniform float uVignetteStrength;

    <%= commons.allBlendModes %>
    <%= commons.colorCorrection %>

    float random (in vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {

        vec2 uv = vUv;
        vec4 color;

        float maxDistort = uChromaticAberations * .1;
        float scalar = 1.0 * maxDistort;
        vec4 colourScalar = vec4(700.0, 560.0, 490.0, 1.0);	
        colourScalar /= max(max(colourScalar.x, colourScalar.y), colourScalar.z);
        colourScalar /= 100.;
        colourScalar *= scalar;

        color.r += texture2D(uTexture, uv + colourScalar.r).r;
        color.g += texture2D(uTexture, uv + -colourScalar.g).g;
        color.b += texture2D(uTexture, uv + colourScalar.b).b;

        vec4 bloom = texture2D(uBloom, uv);
        vec2 vgnUv = vUv;
        vgnUv *= (1.0 - vgnUv.yx);
        float vig = vgnUv.x*vgnUv.y * 15.0;
        vig = pow(vig, uVignette);

        vec2 gUv = vUv;
        

        vec2 nUv = vUv;
        nUv.x *= uRez.x/uRez.y;
        nUv.y += mod(uTime * 46.54687, 1.);
        nUv.x -= mod(uTime * 12.68655, 1.);
        color.rgb = blendScreen_21_19(color.rgb, bloom.rgb, uBloomOpacity);

        
        color.rgb = blendOverlay_9_12(color.rgb, vec3(random(vUv + mod(uTime, 1.))), uNoiseOpacity);
        color.rgb = linearToneMapping(color.rgb, uGamma);
        color.rgb = contrast(color.rgb, uContrast);
        color.rgb = exposure(color.rgb, uExposure);
        color.rgb = mix(color.rgb, color.rgb * vig, uVignetteStrength);

        
        color.rgb *= (1. - uLineOpacity) + (uLineOpacity) * sin(60.0 * (uTime * .5) + uv.y * uRez.y * .75);

        color.a = 1.;        
        
        
        

        
        gl_FragColor = color;

        
    }

<% } %>`,SE=`<% if (vert) { %>
    precision highp float;
    attribute vec3 aPos;
    attribute vec2 aUvs;
    varying vec2 vUv;
    void main(void) {
        vUv = aUvs;
        gl_Position = vec4(aPos, 1.0);
    }
<% } %>

<% if (passes.pass_1) { %>
    precision highp float;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    uniform vec2 uRez;
    uniform vec2 uDir;
    uniform vec3 uTint;
    uniform float uPower;
    uniform float uIsFirstPass;
    uniform float uThresold;
    uniform float uSimilarity;
    uniform float uDebug;
    uniform float uOverdrive;

    <%= commons.blur %>
    void main() {
        vec4 color = blur5(uTexture, vUv, uRez, uDir * uPower);
        gl_FragColor = vec4(color.rgb * color.a, color.a);
        if(uIsFirstPass > 0.5){
            float brightness = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
            float highlights = smoothstep(uThresold, uThresold+uSimilarity, brightness);
            gl_FragColor = vec4((color.rgb * (1. + uOverdrive)) * vec3(highlights) * uTint, 1.);
        }
    }
<% } %>

<% if (frag) { %>
    precision highp float;
    uniform sampler2D uBlur;
    varying vec2 vUv;
    uniform vec2 uRez;

 <%if (defines["COLOR_CORRECTION"] >= 1) { %>
    uniform float uShift;
    uniform float uBrightness;
    uniform float uContrast;

    <%= commons.colorCorrection %>
<% } %>

    void main() {
        
        vec4 blur = texture2D( uBlur, vUv);
        gl_FragColor = blur;

        <%if (defines["TRANSPARENT"] >= 1) { %>
            
            float a = smoothstep(1., 0.2, blur.z);
            a = pow(a, 2.);
            blur.z = 0.;
            gl_FragColor = vec4(blur.rgb, a);
        <% } %>

        <%if (defines["COLOR_CORRECTION"] >= 1) { %>
            vec3 color = hueShift(gl_FragColor.rgb, uShift);
            vec3 colorContrasted = (color) * uContrast;
            vec3 bright = colorContrasted + vec3(uBrightness);
            gl_FragColor.rgb = bright;
        <% } %>

    }
<% } %>`,PE=`<% if (vert) { %>
    needES300
    precision highp float;

    in vec3 position;
    #ifdef HAS_NORMALS
        in vec3 normal;
    #endif
    #ifdef HAS_POSEMORPHS
        in vec3 position1;
        in vec3 normal1;
        uniform float uActivePoseMix;
    #endif
    #ifdef HAS_TANGENTS
        in vec3 tangents;
    #endif
    #ifdef HAS_UV
        in vec2 uv;
    #endif

    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 normalMatrix;
    uniform mat4 projectionMatrix;

    uniform float uTime;

    out vec3 vPosition;
    out vec3 vWorldPosition;
    out vec2 vUv;

    #ifdef HAS_NORMALS
        #ifdef HAS_TANGENTS
            out mat3 vTBN;
        #else
            out vec3 vNormal;
        #endif
    #endif

    void main(){
        vec3 p = position;
        
        #ifdef HAS_POSEMORPHS
            p = mix(position, position1, uActivePoseMix);
            n = mix(normal, normal1, uActivePoseMix);
        #endif

        vec4 pos = modelMatrix * vec4(p, 1.0);
        vPosition = vec3(pos.xyz) / pos.w;
        vWorldPosition = (modelViewMatrix * vec4(p, 1.0)).xyz;

        #ifdef HAS_NORMALS
            vec3 n = normal;

            #ifdef HAS_TANGENTS
                vec3 normalW = normalize(vec3(normalMatrix * vec4(n, 0.0)));
                vec3 tangentW = normalize(vec3(modelMatrix * vec4(tangents.xyz, 0.0)));
                vec3 bitangentW = cross(normalW, tangentW) * tangents.w;
                vTBN = mat3(tangentW, bitangentW, normalW);
            #else 
                vNormal = normalize(vec3(modelMatrix * vec4(n, 0.0)));
            #endif
        #endif

        #ifdef HAS_UV
            vUv = uv;
        #else
            vUv = vec2(0.,0.);
        #endif

        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);

    }

<% } %>

<% if (frag) { %>
    
    precision highp float; 

    uniform vec3 uLightDirection;
    uniform vec3 uLightColor;
    uniform float uUvScale;

    #ifdef USE_IBL
        uniform sampler2D uDiffuseEnvSampler;
        uniform sampler2D uSpecularEnvSampler;
        uniform sampler2D uBrdfLUT;
    #endif

    #ifdef HAS_BASECOLORMAP
        uniform sampler2D uBaseColorSampler;
    #endif
    #ifdef HAS_ALPHAMAP
        uniform sampler2D uAlphaMapSampler;
    #endif
    #ifdef HAS_SHEEN
        uniform float uSheenDepth;
        uniform float uSheenOpacity;
        uniform vec3 uSheenColor;
    #endif

    #ifdef HAS_NORMALMAP
        uniform sampler2D uNormalSampler;
        uniform float uNormalScale;
    #endif

    #ifdef HAS_EMISSIVEMAP
        uniform sampler2D uEmissiveSampler;
        uniform vec3 uEmissiveFactor;
    #endif
    #ifdef HAS_EMISSIVECOLOR
        uniform vec3 uEmissiveColor;
        uniform float uEmissivePower;
    #endif
    
    #ifdef HAS_METALROUGHNESSMAP
        uniform sampler2D uMetallicRoughnessSampler;
    #endif

    #ifdef HAS_ORM_MAP
        uniform sampler2D uOcclusionRoughnessMetallicSampler;
        uniform float uOcclusionStrength;
    #endif

    #ifdef HAS_OCCLUSIONMAP
        uniform sampler2D uOcclusionSampler;
        uniform float uOcclusionStrength;
    #endif

    #ifdef HAS_FOG
        const float LOG2 = 1.442695;
        uniform vec3 uFogColor;
        
        uniform float uFogNear;
        uniform float uFogFar;
    #endif

    
    #ifdef HAS_COLOR_CORRECTION
        uniform float uTintOpacity;
        uniform float uExposure;
        uniform float uContrast;
        uniform float uSaturation;
        uniform vec3 uTint;

        <%= commons.colorCorrection %>
    #endif

    uniform vec2 uMetallicRoughnessValues;
    uniform vec4 uBaseColorFactor;
    uniform vec3 uCamera;

    
    uniform vec4 uScaleDiffBaseMR;
    uniform vec4 uScaleFGDSpec;
    uniform vec4 uScaleIBLAmbient;

    in vec2 vUv;
    in vec3 vPosition;
    in vec3 vWorldPosition;

    out vec4 outColor;

    #ifdef HAS_NORMALS
        #ifdef HAS_TANGENTS
            in mat3 vTBN;
        #else
            in vec3 vNormal;
        #endif
    #endif

    struct PBRInfo
    {
        float NdotL;                  
        float NdotV;                  
        float NdotH;                  
        float LdotH;                  
        float VdotH;                  
        float perceptualRoughness;    
        float metalness;              
        vec3 reflectance0;            
        vec3 reflectance90;           
        float alphaRoughness;         
        vec3 diffuseColor;            
        vec3 specularColor;           
    };

    const float M_PI = 3.141592653589793;
    const float c_MinRoughness = 0.04;
    const vec2 invAtan = vec2(0.1591, 0.3183);

    vec4 SRGBtoLINEAR(vec4 srgbIn)
    {
        #ifdef MANUAL_SRGB
            #ifdef SRGB_FAST_APPROXIMATION
                vec3 linOut = pow(srgbIn.xyz,vec3(2.2));
            #else 
                vec3 bLess = step(vec3(0.04045),srgbIn.xyz);
                vec3 linOut = mix( srgbIn.xyz/vec3(12.92), pow((srgbIn.xyz+vec3(0.055))/vec3(1.055),vec3(2.4)), bLess );
            #endif 
                return vec4(linOut,srgbIn.w);;
        #else 
            return srgbIn;
        #endif 
    }

    vec3 getNormal()
    {
        
        #ifndef HAS_TANGENTS
            vec3 pos_dx = dFdx(vPosition);
            vec3 pos_dy = dFdy(vPosition);
            vec3 tex_dx = dFdx(vec3(vUv, 0.0));
            vec3 tex_dy = dFdy(vec3(vUv, 0.0));
            vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);

        #ifdef HAS_NORMALS
            vec3 ng = normalize(vNormal);
        #else
            vec3 ng = cross(pos_dx, pos_dy);
        #endif

            t = normalize(t - ng * dot(ng, t));
            vec3 b = normalize(cross(ng, t));
            mat3 tbn = mat3(t, b, ng);
        #else 
            mat3 tbn = vTBN;
        #endif

        #ifdef HAS_NORMALMAP
            vec3 n = texture(uNormalSampler, vUv * uUvScale).rgb;
            n = normalize(tbn * ((2.0 * n - 1.0) * vec3(uNormalScale, uNormalScale, 1.0)));
        #else
            
            vec3 n = normalize(tbn[2].xyz);
        #endif

        return n;
    }

    vec2 SampleSphericalMap(vec3 direction)
    {
        vec2 uv = vec2(atan(direction.z, direction.x), asin(direction.y));
        uv *= invAtan;
        uv += 0.5;
        uv.y = 1. - uv.y;
        return uv;
    }

    
    
    #ifdef USE_IBL
        vec3 getIBLContribution(PBRInfo pbrInputs, vec3 n, vec3 reflection)
        {
            float mipCount = 9.0; 
            float lod = (pbrInputs.perceptualRoughness * mipCount);
            
            vec3 brdf = SRGBtoLINEAR(texture(uBrdfLUT, vec2(pbrInputs.NdotV, 1.0 - pbrInputs.perceptualRoughness), lod)).rgb;
            vec3 diffuseLight = SRGBtoLINEAR(texture(uDiffuseEnvSampler, SampleSphericalMap(n), lod)).rgb;

            vec3 specularLight = SRGBtoLINEAR(texture(uSpecularEnvSampler, SampleSphericalMap(reflection), lod)).rgb;

            vec3 diffuse = diffuseLight * pbrInputs.diffuseColor;
            vec3 specular = specularLight * (pbrInputs.specularColor * brdf.x + brdf.y);

            
            diffuse *= uScaleIBLAmbient.x;
            specular *= uScaleIBLAmbient.y;

            return diffuse + specular;
        }
    #endif

    
    
    vec3 diffuse(PBRInfo pbrInputs)
    {
        return pbrInputs.diffuseColor / M_PI;
    }

    
    vec3 specularReflection(PBRInfo pbrInputs)
    {
        return pbrInputs.reflectance0 + (pbrInputs.reflectance90 - pbrInputs.reflectance0) * pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);
    }

    
    
    float geometricOcclusion(PBRInfo pbrInputs)
    {
        float NdotL = pbrInputs.NdotL;
        float NdotV = pbrInputs.NdotV;
        float r = pbrInputs.alphaRoughness;

        float attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
        float attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
        return attenuationL * attenuationV;
    }

    
    
    
    float microfacetDistribution(PBRInfo pbrInputs)
    {
        float roughnessSq = pbrInputs.alphaRoughness * pbrInputs.alphaRoughness;
        float f = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;
        return roughnessSq / (M_PI * f * f);
    }

    void main() {   

        
        
        
        float perceptualRoughness = uMetallicRoughnessValues.y;
        float metallic = uMetallicRoughnessValues.x;

        #ifdef HAS_METALROUGHNESSMAP
            
            
            vec4 mrSample = texture(uMetallicRoughnessSampler, vUv * uUvScale);
            perceptualRoughness = mrSample.g * perceptualRoughness;
            metallic = mrSample.b * metallic;
        #endif

        #ifdef HAS_ORM_MAP
            
            
            
            vec4 mrSample = texture(uOcclusionRoughnessMetallicSampler, vUv * uUvScale);
            perceptualRoughness = mrSample.g * perceptualRoughness;
            metallic = mrSample.b * metallic;
            float ao = mrSample.r;
        #endif

        perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
        metallic = clamp(metallic, 0.0, 1.0);
        
        
        float alphaRoughness = perceptualRoughness * perceptualRoughness;

        
        #ifdef HAS_BASECOLORMAP
            vec4 baseColor = SRGBtoLINEAR(texture(uBaseColorSampler, vUv * uUvScale)) * uBaseColorFactor;
        #else
            vec4 baseColor = uBaseColorFactor;
        #endif
        #ifdef HAS_ALPHAMAP
            baseColor.a *= texture(uAlphaMapSampler, vUv * uUvScale).r;
        #endif

        vec3 f0 = vec3(0.04);
        vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);
        diffuseColor *= 1.0 - metallic;
        vec3 specularColor = mix(f0, baseColor.rgb, metallic);

        
        float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);

        
        
        float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
        vec3 specularEnvironmentR0 = specularColor.rgb;
        vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;

        vec3 n = getNormal();                             
        vec3 v = normalize(uCamera - vPosition);          
        vec3 l = normalize(uLightDirection);              
        vec3 h = normalize(l+v);                          
        vec3 reflection = -normalize(reflect(v, n));

        #ifdef HAS_SHEEN
            float fresnelFactor = abs(dot(v, n));
            float sheen = pow(1.0 - fresnelFactor, uSheenDepth);
        #endif

        float NdotL = clamp(dot(n, l), 0.001, 1.0);
        float NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);
        float NdotH = clamp(dot(n, h), 0.0, 1.0);
        float LdotH = clamp(dot(l, h), 0.0, 1.0);
        float VdotH = clamp(dot(v, h), 0.0, 1.0);

        PBRInfo pbrInputs = PBRInfo(
            NdotL,
            NdotV,
            NdotH,
            LdotH,
            VdotH,
            perceptualRoughness,
            metallic,
            specularEnvironmentR0,
            specularEnvironmentR90,
            alphaRoughness,
            diffuseColor,
            specularColor
        );

        
        vec3 F = specularReflection(pbrInputs);
        float G = geometricOcclusion(pbrInputs);
        float D = microfacetDistribution(pbrInputs);

        
        vec3 diffuseContrib = (1.0 - F) * diffuse(pbrInputs);
        vec3 specContrib = F * G * D / (4.0 * NdotL * NdotV);
        
        vec3 color = NdotL * uLightColor * (diffuseContrib + specContrib);

        
        #ifdef USE_IBL
            color += getIBLContribution(pbrInputs, n, reflection);
        #endif

        
        #ifdef HAS_OCCLUSIONMAP
            float ao = texture(uOcclusionSampler, vUv * uUvScale).r;
            color = mix(color, color * ao, uOcclusionStrength);
        #endif

        
        #ifdef HAS_ORM_MAP
            color = mix(color, color * ao, uOcclusionStrength);
        #endif

        #ifdef HAS_EMISSIVEMAP
            vec3 emissive = SRGBtoLINEAR(texture(uEmissiveSampler, vUv * uUvScale)).rgb * uEmissiveFactor;
            color += emissive;
        #endif

        
        
        color = mix(color, F, uScaleFGDSpec.x);
        #ifdef HAS_SHEEN
            color = mix(color, uSheenColor, sheen * uSheenOpacity);
        #endif
        color = mix(color, vec3(G), uScaleFGDSpec.y);
        color = mix(color, vec3(D), uScaleFGDSpec.z);
        color = mix(color, specContrib, uScaleFGDSpec.w);

        color = mix(color, diffuseContrib, uScaleDiffBaseMR.x);
        color = mix(color, baseColor.rgb, uScaleDiffBaseMR.y);
        color = mix(color, vec3(metallic), uScaleDiffBaseMR.z);
        color = mix(color, vec3(perceptualRoughness), uScaleDiffBaseMR.w);

        
        #ifdef HAS_COLOR_CORRECTION
            color.rgb = czm_saturation(color.rgb, uSaturation);
            color.rgb = contrast(color.rgb, uContrast);
            color.rgb = exposure(color.rgb, uExposure);
            color.rgb = mix(color.rgb, uTint, uTintOpacity);
        #endif

        #ifdef HAS_FOG
            float fogDistance = length(vWorldPosition);
            
            float fogAmount = smoothstep(uFogNear, uFogFar, fogDistance);
            fogAmount = clamp(fogAmount, 0., 1.);
            color = mix(color, uFogColor, fogAmount);
        #endif

        #ifdef IS_WEBGL_1
            gl_FragColor = vec4(pow(color,vec3(1.0/2.2)), baseColor.a);
            #ifdef HAS_EMISSIVECOLOR
                gl_FragColor.rgb = mix(gl_FragColor.rgb, uEmissiveColor * uEmissivePower, min(uEmissivePower, 1.));
            #endif
        #else
            outColor = vec4(pow(color,vec3(1.0/2.2)), baseColor.a);
            #ifdef HAS_EMISSIVECOLOR
                outColor.rgb = mix(outColor.rgb, uEmissiveColor * uEmissivePower, min(uEmissivePower, 1.));
            #endif
        #endif

        
        
        
        
        
        
        
        
    } 
        
<% } %>`,TE=`<% if (vert) { %>
  
    precision highp float; 

    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 modelMatrix;
    uniform mat4 projectionMatrix;
    uniform float uTime;

    varying vec2 vUv;
    varying vec4 vPos;

    void main(){
        vec4 wPos = modelMatrix * vec4(position, 1.0);
        vPos = wPos;
        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }

<% } %>

<% if (frag) { %>

    precision highp float; 

    varying vec2 vUv;
    varying vec4 vPos;

    uniform mat4 projectionMatrix;
    uniform mat4 viewMatrix;

    uniform float uReflectionScale;
    uniform float uReflectionSize;
    uniform float uReflectionOpacity;
    uniform float uCircleRadius;
    uniform float uFeather;
    uniform float uScrollSpeed;

    uniform vec3 uColor;

    uniform sampler2D uTexture;
    uniform sampler2D uNoiseTexture;
    uniform float uTime;

    float blendScreen(float base, float blend) {
        return 1.0-((1.0-base)*(1.0-blend));
    }

    vec3 blendScreen(vec3 base, vec3 blend) {
        return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
    }

    vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
        return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
    }

    void main() { 

        vec4 clipSpace = projectionMatrix * (viewMatrix * vPos);
        vec3 ndc = clipSpace.xyz / clipSpace.w;
        vec2 ssUv = (ndc.xy * .5 + .5);

        vec2 uv = vUv;
        uv -= vec2(0.5);
        float dist = sqrt(dot(uv, uv)) * 2.;

        float dr = uCircleRadius;
        float alpha = smoothstep(dr+uFeather, dr-uFeather, dist);

        vec2 fUv = (vUv + vec2(0., uTime * uScrollSpeed)) * uReflectionSize;
        vec2 d = ((texture2D( uNoiseTexture, fUv ).xy));
        vec4 t = texture2D( uTexture, ssUv + (d * uReflectionScale) );

        vec3 color = uColor;
        color.xyz = blendScreen(color, t.xyz * uReflectionOpacity, 1.);
        color -= (d.x + d.y) * .05;

        gl_FragColor = vec4(color, alpha); 
        
        
    } 
        
<% } %>`,EE=`<% if (vert) { %>
  
    precision highp float; 

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;
    uniform float uTime;

    uniform float uHeight;
    uniform float uWidth;

    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vPositionW;
    varying vec3 vNormalW;

    void main(){
        vUv = uv;
        vPosition = position;
        vec3 pos = position;
        pos.xz *= 1. + (-pos.y + 1.);
        pos.xz *= uWidth;
        pos.y *= uHeight;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

        vPositionW = vec3( modelViewMatrix * vec4( pos, 1.0 ) );
        vNormalW = normalize( vec3(modelViewMatrix * vec4( normal, 0.0 )) );

    }

<% } %>

<% if (frag) { %>

    precision highp float; 

    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vPositionW;
    varying vec3 vNormalW;

    uniform float uTime;
    uniform vec2 uScale;
    uniform vec3 uColor;
    uniform vec3 uCamera;
    uniform float uFade;
    uniform float uOpacity;

    const float M_PI = 3.141592653589793;

    <%= commons.noise %>

    void main() { 

        vec3 pos = vPosition;
        pos.xz *= uScale.x;
        pos.y = 1./uScale.x;

        vec2 uv = vUv;
        uv.x *= uScale.x;
        float t = uTime;

        float noise = snoise(vec4(pos, t));
        
        vec3 color = uColor;
        float alpha = noise;
        float fade = pow(sin(uv.y*M_PI), 1.+uFade);

        vec3 viewDirectionW = normalize(uCamera - vPositionW);
	    float fresnelTerm = dot(viewDirectionW, -vNormalW);
	    fresnelTerm = clamp(fresnelTerm, 0., 1.);

        alpha *= fresnelTerm;
        alpha *= fade;
        alpha *= uOpacity;

        gl_FragColor = vec4(color * alpha, alpha); 

    } 
        
<% } %>`,bd=`<% if (vert) { %>
  
    precision highp float; 

    attribute vec3 position;
    attribute vec2 uv;
    uniform float uTime;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec2 vUv;

    void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }

<% } %>

<% if (frag) { %>

    precision highp float; 

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform vec2 uRez;
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uFrames;
    uniform float uFrame;
    uniform float uCollums;
    uniform float uRows;

    void main() { 

        vec2 uv = vUv;
        float f = max(uFrame - 1., 0.);
        uv.x += mod(f, uCollums);
        uv.y -= floor(uRows * (f/uFrames)) + 1.;
        uv.y /= uRows;
        uv.x /= uCollums;    
        gl_FragColor = texture2D( uTexture, uv ); 

    } 
        
<% } %>`,CE=`<% if (vert) { %>
    needES300
    precision highp float; 

    in vec3 position;
    in vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 modelMatrix;
    uniform mat4 projectionMatrix;
    uniform float uTime;

    #ifdef HAS_SHADOW
        uniform mat4 shadowViewMatrix;
        uniform mat4 shadowProjectionMatrix;
        out vec4 vLightNDC;
        const mat4 depthScaleMatrix = mat4( 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0.5, 0.5, 0.5, 1 );
    #endif

    out vec2 vUv;

    void main(){
        vUv = uv;

        
        #ifdef HAS_SHADOW
            vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);
        #endif

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }

<% } %>

<% if (frag) { %>
    needES300
    precision highp float; 

    in vec2 vUv;
    out vec4 outColor;

    #ifdef HAS_SHADOW
        uniform sampler2D tShadow;
        in vec4 vLightNDC;
    #endif

    const float division = 50.;

    void main() { 
        vec2 uv = vUv.xy * division;
        vec2 grid = abs(fract(uv - 0.5) - 0.5) / fwidth(uv);
        float line = min(grid.x, grid.y);

        vec2 circleUv = vUv -.5;
        float dist = sqrt(dot(circleUv, circleUv));
        float t = pow(smoothstep(.6, .1, dist), 1.5);

        #ifdef IS_WEBGL_1
            gl_FragColor = vec4(1.0 - min(line, 1.0)) * .2 * t;
            gl_FragColor.rgb = gl_FragColor.rgb;
            gl_FragColor.a = t;
        #else
            outColor = vec4(1.0 - min(line, 1.0)) * .2 * t;
            outColor.rgb = outColor.rgb;
            outColor.a = t;
        #endif

        #ifdef HAS_SHADOW

            vec3 lightPos = vLightNDC.xyz / vLightNDC.w;
            float bias = 0.0025;
            float depth = lightPos.z - bias;
            float occluder = texture(tShadow, lightPos.xy).r;
            float bounds = (step(0., lightPos.x) - step(1., lightPos.x)) * (step(0., lightPos.y) - step(1., lightPos.y));
            
            float shadow = mix(0.2, 1.0, step(depth, occluder));

            #ifdef IS_WEBGL_1
                gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * shadow, bounds);
            #else
                outColor.rgb = mix(outColor.rgb, outColor.rgb * shadow, bounds);
            #endif

            
            
            
            
            
        #endif

    } 
        
<% } %>`,AE=`<% if (vert) { %>

    precision highp float;

    
    
    
    
    
    
    
    
    
    
    
    

    vec3 mod289(vec3 x)
    {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x)
    {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x)
    {
    return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r)
    {
    return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    
    float pnoise(vec3 P, vec3 rep)
    {
    vec3 Pi0 = mod(floor(P), rep); 
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
    }

    
    
    
    #define M_PI 3.1415926535897932384626433832795

    attribute vec3 position;
    attribute vec4 seeds;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    uniform vec3  uColor;
    uniform vec3  uVolumeCorner;
    uniform vec3  uVolumeSize;
    uniform vec3  uOffset;
    uniform float uPixelRatio;
    uniform float uTime;
    uniform float uTimeScale;
    uniform float speed;
    uniform float uNoiseIntensity;
    uniform float uNoiseFrequency;
    uniform float uFadeDistance;
    uniform float uParticleScale;
    uniform float uParticleOpacity;

    varying vec4  vColor;
    varying vec4  vSeeds;

    uniform float uSize;

    mat4 rotationMatrix(vec3 axis, float angle) {
        axis = normalize(axis);
        float s = sin(angle);
        float c = cos(angle);
        float oc = 1.0 - c;
        
        return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                    0.0,                                0.0,                                0.0,                                1.0);
    }

    vec3 rotate(vec3 v, vec3 axis, float angle) {
        mat4 m = rotationMatrix(axis, angle);
        return (m * vec4(v, 1.0)).xyz;
    }

    void main(void) {

        vSeeds = seeds;

        
        vec3 newPosition  = position;
        vec3 displacement = vec3(
            pnoise(uNoiseFrequency * position + vec3(0., uTime * uTimeScale, 0.), vec3(101.0)) * uNoiseIntensity,
            pnoise(uNoiseFrequency * position + vec3(0., uTime * uTimeScale, 0.), vec3(202.0)) * uNoiseIntensity,
            pnoise(uNoiseFrequency * position + vec3(0., uTime * uTimeScale, 0.), vec3(303.0)) * uNoiseIntensity
        );
        newPosition += displacement;

        
        newPosition += uOffset;

        newPosition.x = mod(mod(newPosition.x, uVolumeSize.x) + uVolumeSize.y, uVolumeSize.x) + uVolumeCorner.x;
        newPosition.y = mod(mod(newPosition.y, uVolumeSize.y) + uVolumeSize.y, uVolumeSize.y) + uVolumeCorner.y;
        newPosition.z = mod(mod(newPosition.z, uVolumeSize.z) + uVolumeSize.z, uVolumeSize.z) + uVolumeCorner.z;

        
        float alphaFade = 1.0;
        vec3 distanceToLimits;
        distanceToLimits.y = min(clamp(abs(newPosition.y - uVolumeCorner.y),0.0,uFadeDistance),clamp(abs(newPosition.y - (uVolumeCorner.y + uVolumeSize.y)),0.0,uFadeDistance));
        distanceToLimits.x = min(clamp(abs(newPosition.x - uVolumeCorner.x),0.0,uFadeDistance),clamp(abs(newPosition.x - (uVolumeCorner.x + uVolumeSize.x)),0.0,uFadeDistance));
        distanceToLimits.z = min(clamp(abs(newPosition.z - uVolumeCorner.z),0.0,uFadeDistance),clamp(abs(newPosition.z - (uVolumeCorner.z + uVolumeSize.z)),0.0,uFadeDistance));
        alphaFade = min(min(distanceToLimits.x,distanceToLimits.y),distanceToLimits.z)/uFadeDistance;

        vec4 viewSpace  = modelViewMatrix * vec4(newPosition, 1.0);
        float dist = length(viewSpace);
        vColor = vec4(uColor, alphaFade * uParticleOpacity);

        gl_Position = projectionMatrix * viewSpace;
        gl_PointSize = uPixelRatio * uParticleScale;
        gl_PointSize = gl_PointSize / length(dist);

    }

<% } %>

<% if (frag) { %>

    precision highp float;

    varying vec4  vColor;
    varying vec4  vSeeds;

    uniform float uTime;
    uniform float uAlpha;
    uniform vec3 uColor1;

    const float border_size = 0.01;
    const float disc_radius = 0.1;
    const float border_size1 = 0.6;
    const float disc_radius1 = 0.1;

    void main() {
        vec2 uv = gl_PointCoord.xy;
        uv -= vec2(0.5);
        float dist = sqrt(dot(uv, uv));

        float dr = disc_radius * vSeeds.x;
        float t = smoothstep(dr+border_size, dr-border_size, dist);
        float t1 = smoothstep(disc_radius1+border_size1, disc_radius1-border_size1, dist);
        
        vec3 color = mix(vColor.xyz, uColor1, vSeeds.z);
        float a = vColor.a * (t+t1) * uAlpha;
        a *= .3 + ((sin(((uTime * 1.) + vSeeds.w) * 6.28) + 1.) * .5) * .7;
        a *= .6 + ((sin(((uTime * 2.) + vSeeds.z) * 6.28) + 1.) * .5) * .5;
        color += a;

        gl_FragColor = vec4(color, a);
        
    }

<% } %>`,zE=`<% if (vert) { %>
    needES300
    precision highp float;
    precision highp sampler3D;

    #define M_PI 3.1415926535897932384626433832795

    in vec3 aPos;
    in vec3 aInitialPos;
    in vec3 aPlanePos;
    in vec3 aPlaneNormal;
    in vec2 aPlaneUvs;
    in vec4 aSeed;
    in float aTime;

    uniform mat4 uPMatrix;
    uniform mat4 uMMatrix;
    uniform mat4 uVMatrix;
    uniform mat4 uNMatrix;

    uniform vec3  uParticlesColor;
    uniform vec3  uOffset;
    uniform vec3  uCamera;
    uniform vec3  uHoverPoint;
    uniform vec3  uWind;
    uniform vec3  uSpiritDirection;
    uniform float uDeltaTime;
    uniform float uLifeSpan;
    uniform float uLifeSpanVariation;
    uniform float uParticleScale;
    uniform float uVoxelSize;
    uniform float uRibonScale;
    uniform float uRibonScaleVariation;
    uniform float uTime;
    uniform float uPixelRatio;
    uniform float uNoiseFrequency;
    uniform float uTimeScale;
    uniform float uNoiseIntensity;
    uniform float uExplosion;
    uniform float uLoadingState;

    uniform sampler3D uVoxels;

    out vec4 vSeed;
    out vec3 vPositiions;
    out vec3 vPosition;
    out vec3 vDir;
    out vec3 vPeye;
    out vec2 vUv;
    out vec3 vWorldPosition;
    out float vDepth;

    out float vTime;
    out float vAlpha;

    vec2 rotate(vec2 v, float a) {
        float s = sin(a);
        float c = cos(a);
        mat2 m = mat2(c, -s, s, c);
        return m * v;
    }

    vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r){
        return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    
    float pnoise(vec3 P, vec3 rep)
    {
        vec3 Pi0 = mod(floor(P), rep); 
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); 
        vec3 Pf1 = Pf0 - vec3(1.0); 
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
    }

    mat3 calcLookAtMatrix(vec3 origin, vec3 target, float roll) {
        vec3 rr = vec3(sin(roll), cos(roll), 0.0);
        vec3 ww = normalize(target - origin);
        vec3 uu = normalize(cross(ww, rr));
        vec3 vv = normalize(cross(uu, ww));
        
        return mat3(uu, vv, ww);
    }

    void main()
    {

        aPlanePos;
        aPlaneUvs;
        aPlaneNormal;

        vec3 planeSize = vec3(uRibonScale + aSeed.y * uRibonScaleVariation, 1., -.1);
        float voxelSize = uVoxelSize;

        vUv = aPlaneUvs;
        vec3 newPosition  = aPos;

        
        vec3 offset = uSpiritDirection;

        vec3 resetPos = aInitialPos;

        float time = aTime + uDeltaTime - (aPlanePos.z * (.1 + (aSeed.y * 1.5)));
        

        vec3 samplingPos = aPos;
        vec3 vst = (samplingPos * .5) + .5;
        vst -= vec3(.5);
        vst *= 1./voxelSize;
        vst += vec3(.5);

        vec3 wind = texture(uVoxels, vst).rgb * 10. * uDeltaTime;
        

        wind *= step(vec3(0.), vst);
        wind *= 1. - step(vec3(1.), vst);

        
        newPosition += wind * clamp(time, 0., 1.);

        
        vec3 dir = (newPosition - aPos) * 100.;
        vDir = normalize(dir);

        
        newPosition += offset;

        vPeye = normalize(newPosition - vec3(uCamera));
        vPeye = mat3(uVMatrix) * vPeye;

        float t = uTime * .3;
        vec3 displacement = vec3(
            pnoise(uNoiseFrequency * newPosition + vec3(uWind.x * t, 0., 0.), vec3(50.0)) * uNoiseIntensity,
            pnoise(uNoiseFrequency * newPosition + vec3(0., uWind.y * t, 0.), vec3(33.0)) * uNoiseIntensity,
            pnoise(uNoiseFrequency * newPosition + vec3(0., 0., uWind.z * t), vec3(87.0)) * uNoiseIntensity
        );
        newPosition += displacement;

        float t1 = uTime * .1;
        vec3 disparition = vec3(
            pnoise((uNoiseFrequency * 10.) * resetPos + vec3(uWind.x * t1, 0., 0.), vec3(404.0)) * uNoiseIntensity * 5.,
            pnoise((uNoiseFrequency * 10.) * resetPos + vec3(0., uWind.y * t1, 0.), vec3(606.0)) * uNoiseIntensity * 5.,
            pnoise((uNoiseFrequency * 10.) * resetPos + vec3(0., 0., uWind.z * t1), vec3(505.0)) * uNoiseIntensity * 5.
        );
        newPosition += disparition * smoothstep(0., .3, uExplosion) * 2.;
        

        vec2 rotation = rotate(normalize(newPosition.xy), M_PI * .49);
        newPosition.xy += rotation * .03 * smoothstep(.3, 2., length(newPosition.xy)) * uLoadingState;
        newPosition.xz += rotation * .01 * smoothstep(.3, 2., length(newPosition.xy)) * uLoadingState;

        float hdist = length(newPosition - uHoverPoint);
        hdist = smoothstep(.85, 0.3, hdist);
        newPosition += (newPosition - uHoverPoint) * hdist;

        
        

        mat3 lookAtMatrix = calcLookAtMatrix(newPosition, newPosition + dir, 6.28 * aSeed.x);

        vec3 planePos = aPlanePos * planeSize;
        vec3 pos = (newPosition) + lookAtMatrix * planePos;

        pos += resetPos * uExplosion * .1;
        vec4 mvPosition = uVMatrix * uMMatrix * vec4(pos, 1.0);

        vec4 outPos = uMMatrix * vec4(pos, 1.0);
        vWorldPosition = mvPosition.xyz;
        vPosition = vec3(outPos.xyz) / outPos.w;

        
        

        gl_Position = uPMatrix * mvPosition;

        vDepth = -(uVMatrix * uMMatrix * vec4(pos, 1.0)).z;

        float dist = length(mvPosition);
        gl_PointSize = (uParticleScale * uPixelRatio) + pow(vSeed.y, 3.) * uRibonScaleVariation;
        gl_PointSize = gl_PointSize / length(dist);

        
        
        vSeed = aSeed;

        if ((aTime/(uLifeSpan * (1. - (vSeed.z * uLifeSpanVariation)))) > 1.){
            vTime = 0.;
            vPositiions = resetPos;
        } else {
            vTime = aTime + uDeltaTime;
            vPositiions = newPosition;
        }

    }

<% } %>

<% if (frag) { %>
    needES300
    precision highp float;

    uniform vec3 uParticleColor0;
    uniform vec3 uParticleColor1;
    uniform vec3 uTransitionColor0;
    uniform vec3 uTransitionColor1;
    uniform float uTransitionColorProgress;
    uniform float uLifeSpan;

    uniform vec4 uBaseColorFactor;
    uniform vec3 uCamera;

    uniform float uLifeSpanVariation;
    uniform float uParticleOpacity;
    uniform float uDepthFar;
    uniform float uDepthNear;
    uniform float uDepthEnabled;
    uniform float uExplosion;
    uniform float uTime;
    uniform float uColorOffset;
    uniform float uFaceOpacity;
    uniform sampler2D uTexture;

    in vec4 vSeed;
    in vec3 vVelocity;
    in vec3 vPosition;
    in vec3 vWorldPosition;
    in vec3 vDir;
    in vec2 vUv;
    in vec3 vPeye;
    in float vAlpha;
    in float vTime;
    in float vDepth;

    out vec4 outColor;

    const float border_size = 0.01;
    const float disc_radius = .5;

    vec3 hueShift( vec3 color, float hueAdjust ){

        const vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);
        const vec3  kRGBToI      = vec3 (0.596, -0.275, -0.321);
        const vec3  kRGBToQ      = vec3 (0.212, -0.523, 0.311);

        const vec3  kYIQToR     = vec3 (1.0, 0.956, 0.621);
        const vec3  kYIQToG     = vec3 (1.0, -0.272, -0.647);
        const vec3  kYIQToB     = vec3 (1.0, -1.107, 1.704);

        float   YPrime  = dot (color, kRGBToYPrime);
        float   I       = dot (color, kRGBToI);
        float   Q       = dot (color, kRGBToQ);
        float   hue     = atan (Q, I);
        float   chroma  = sqrt (I * I + Q * Q);

        hue += hueAdjust;

        Q = chroma * sin (hue);
        I = chroma * cos (hue);

        vec3    yIQ   = vec3 (YPrime, I, Q);

        return vec3( dot (yIQ, kYIQToR), dot (yIQ, kYIQToG), dot (yIQ, kYIQToB) );

    }

    vec2 matcap(vec3 eye, vec3 normal) {
        vec3 reflected = reflect(eye, normal);
        float m = 2.8284271247461903 * sqrt( reflected.z+1.0 );
        return reflected.xy / m + 0.5;
    }

    float lambert(vec3 N, vec3 L) {
        vec3 nrmN = normalize(N);
        vec3 nrmL = normalize(L);
        float result = dot(nrmN, nrmL);
        return max(result, 0.0);
    }

    void main()
    {
        float p = (vTime/(uLifeSpan * (1. - (vSeed.z * uLifeSpanVariation))));
        float a = smoothstep(.1, .3, p) - smoothstep(.7, .95, p);
        a *= uParticleOpacity;
        
        

        vec3 baseColorGradient = mix(
            uParticleColor0, 
            uParticleColor1, 
        vUv.y);

        vec3 baseColorGradient2 = mix(
            uTransitionColor0, 
            uTransitionColor1, 
        vUv.y);

        
        
        
        baseColorGradient = mix(baseColorGradient, baseColorGradient2, step(smoothstep(0., 2.75, length(vPosition)), uTransitionColorProgress));

        vec2 uv = gl_PointCoord.xy;
        uv -= vec2(0.5);
        float dist = sqrt(dot(uv, uv));

        float dr = disc_radius;
        float t = smoothstep(dr+border_size, dr-border_size, dist);

        if(t <= 0.01){ discard; }
        if(uParticleOpacity <= 0.01){ discard; }
        
        vec4 m = texture( uTexture, matcap(vPeye, vDir));
        vec3 finalColor = m.rgb * baseColorGradient;

        float l = lambert(normalize(vWorldPosition), vec3(10., 10., 0.));
        finalColor += l;

        
        finalColor = hueShift(finalColor, uColorOffset * vSeed.x);
        a -= smoothstep(5., 2., length(vPosition.xy)) * uFaceOpacity * .15; 
        
        outColor = vec4(finalColor, a * t); 
        

    }
        
<% } %>`,RE=`<% if (vert) { %>
    needES300
    precision highp float;
    precision highp sampler3D;

    #define M_PI 3.1415926535897932384626433832795

    in vec3 aPos;
    in vec3 aInitialPos;
    in vec3 aVelocity;
    in vec3 aPlanePos;
    in vec3 aPlaneNormal;
    in vec2 aPlaneUvs;
    in vec4 aSeed;
    in float aTime;

    uniform mat4 uPMatrix;
    uniform mat4 uMMatrix;
    uniform mat4 uVMatrix;
    uniform mat4 uNMatrix;

    uniform vec3  uParticlesColor;
    uniform vec3  uOffset;
    uniform float uDeltaTime;
    uniform float uLifeSpan;
    uniform float uLifeSpanVariation;
    uniform float uParticleScale;
    uniform float uVoxelSize;
    uniform float uRibonScale;
    uniform float uRibonScaleVariation;
    
    uniform sampler2D uTextureFaceDepth;

    uniform sampler3D uVoxels;

    out vec4 vSeed;
    out vec3 vPositiions;
    out vec3 vNormal;
    out vec3 vVelocity;
    out vec3 vPosition;
    out vec2 vUv;
    out vec3 vWorldPosition;

    out vec3 vVst;
    out vec3 vInitVst;

    out float vTime;
    out float vTimeAbs;
    out float vAlpha;

    mat3 calcLookAtMatrix(vec3 origin, vec3 target, float roll) {
        vec3 rr = vec3(sin(roll), cos(roll), 0.0);
        vec3 ww = normalize(target - origin);
        vec3 uu = normalize(cross(ww, rr));
        vec3 vv = normalize(cross(uu, ww));
        
        return mat3(uu, vv, ww);
    }

    void main()
    {

        aVelocity;
        aPlanePos;
        aPlaneUvs;
        aPlaneNormal;

        vec3 planeSize = vec3(uRibonScale + aSeed.y * uRibonScaleVariation, 1., -.1);
        float voxelSize = uVoxelSize;

        vUv = aPlaneUvs;
        vec3 newPosition  = aPos;

        float time = aTime + uDeltaTime - (aPlanePos.z * (.1 + (aSeed.y * 1.5)));
        

        vec3 vst = (aPos * .5) + .5;
        vst -= vec3(.5);
        vst *= 1./voxelSize;
        vst += vec3(.5);

        vec3 initVst = (aInitialPos * .5) + .5;
        initVst -= vec3(.5);
        initVst *= 1./voxelSize;
        initVst += vec3(.5);

        
        float windIntensity = 1.;
        vec3 wind = texture(uVoxels, vst).rgb * windIntensity * uDeltaTime;
        

        wind *= step(vec3(0.), vst);
        wind *= 1. - step(vec3(1.), vst);

        
        newPosition += wind * clamp(time, 0., 1.);

        vec3 incidence = aPos - wind;
        vec3 dir = (newPosition - aPos) * 100.;

        
        mat3 lookAtMatrix = calcLookAtMatrix(newPosition, newPosition + dir, 6.28 * aSeed.x);

        
        vec3 planePos = aPlanePos * planeSize;
        vec3 pos = newPosition + lookAtMatrix * planePos;
        vec4 mvPosition = uVMatrix * uMMatrix * vec4(pos, 1.0);

        vec4 outPos = uMMatrix * vec4(pos, 1.0);
        vWorldPosition = mvPosition.xyz;
        vPosition = vec3(outPos.xyz) / outPos.w;

        
        
        
        
        

        vVst = vst;
        vInitVst = initVst;

        vec2 faceTexCoord = initVst.xy;
        vec3 faceTexDepth = texture(uTextureFaceDepth, faceTexCoord).rgb;
        

        
        vec3 normal = lookAtMatrix * aPlaneNormal;
        vNormal = normalize(vec3(uNMatrix * vec4(normal, 0.0)));

        gl_Position = uPMatrix * mvPosition;

        
        float dist = length(mvPosition);
        
        gl_PointSize = uParticleScale;
        gl_PointSize = gl_PointSize / length(dist);

        
        
        vSeed = aSeed;
        vTimeAbs = time;

        if ((aTime/(uLifeSpan * (1. - (vSeed.z * uLifeSpanVariation)))) > 1.){
            vTime = 0.;
            vPositiions = aInitialPos;
            vVelocity = vec3(0.);
        } else {
            vTime = aTime + uDeltaTime;
            vPositiions = newPosition;
            vVelocity = newPosition - aPos;
        }

    }

<% } %>

<% if (frag) { %>
    needES300
    precision highp float;

    uniform sampler2D uTexture;
    uniform sampler2D uTextureFace;
    uniform sampler2D uTextureFaceDepth;

    uniform vec3 uParticleColor0;
    uniform vec3 uParticleColor1;
    uniform float uLifeSpan;

    
    uniform vec3 uFaceMonoColor;
    uniform float uSpeechFactor;
    uniform float uTimeAbs;

    uniform vec4 uBaseColorFactor;
    uniform vec3 uCamera;

    uniform float uLifeSpanVariation;
    uniform float uParticleOpacity;

    in vec4 vSeed;
    in vec3 vVelocity;
    in vec3 vNormal;
    in vec3 vPosition;
    in vec2 vUv;
    in vec3 vVst;
    in vec3 vInitVst;
    in float vAlpha;
    in float vTime;
    in vec3 vWorldPosition;

    out vec4 outColor;

    const float LOG2 = 1.442695;

    const float border_size = 0.01;
    const float disc_radius = .5;

    void main()
    {
        float p = (vTime/(uLifeSpan * (1. - (vSeed.z * uLifeSpanVariation))));
        float a = smoothstep(.1, .25, p) - smoothstep(.7, .75, p);
        a *= uParticleOpacity;

        vec3 baseColorGradient = mix(
            uParticleColor0, 
            uParticleColor1, 
        vUv.y);
        baseColorGradient += (vSeed.y - .5) * .1;

        vec2 uv = gl_PointCoord.xy;
        uv -= vec2(0.5);
        float dist = sqrt(dot(uv, uv));

        float dr = disc_radius;
        float t = smoothstep(dr+border_size, dr-border_size, dist);

        vec4 baseColor = vec4(baseColorGradient, a * t);
        
        baseColor.rgb += pow((1.-dist), 3.) * .5;

        if (baseColor.a < .1) { discard; }

        
        
        
        
        
        vec2 faceTexCoord = (1.0 - vInitVst.xy);

        vec3 faceTexColor = texture(uTextureFace, faceTexCoord).rgb;
        vec3 faceMonoColor = vec3(length(faceTexColor) * uFaceMonoColor);

        
        float distanceCenter = distance(faceTexCoord, vec2(0.5));
        float distanceFactor = 1.0 - distanceCenter * 2.0;

        float waveFrequency = 5.;
        float waveSpeed = 5.;
        float waveFactor = cos(distanceFactor * waveFrequency + uTimeAbs * waveSpeed) * 0.5 + 0.5;

        float speechFactor = 0.5 + uSpeechFactor * 0.5 * waveFactor;
        baseColor.rgb = mix(faceMonoColor, faceTexColor, speechFactor);

        
        float faceOpacity = length(faceTexColor) * 0.75 + speechFactor * 0.25;
        baseColor.a *= faceOpacity;

        
        

        outColor = vec4(baseColor.rgb, baseColor.a);

        
        
        

        
    }
        
<% } %>`,OE=`<% if (vert) { %>
  
    precision highp float; 

    attribute vec3 position;
    attribute vec2 uv;

    varying vec2 vUv;
    varying vec4 vPosition;

    void main(){
        vUv = uv;
        gl_Position = vec4(position, 1.0);
        vPosition = vec4(position, 1.0);
        gl_Position.z = 1.;
    }

<% } %>

<% if (frag) { %>

    precision highp float; 

    varying vec2 vUv;
    varying vec4 vPosition;

    uniform float uTime;
    uniform float uAlpha;
    uniform vec2 uRez;

    uniform sampler2D uTextureNoise;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;

    #define S(a,b,t) smoothstep(a,b,t)

    mat2 Rot(float a)
    {
        float s = sin(a);
        float c = cos(a);
        return mat2(c, -s, s, c);
    }

    
    
    vec2 hash( vec2 p )
    {
        p = vec2( dot(p,vec2(2127.1,81.17)), dot(p,vec2(1269.5,283.37)) );
        return fract(sin(p)*43758.5453);
    }

    float noise( in vec2 p )
    {
        vec2 i = floor( p );
        vec2 f = fract( p );
        
        vec2 u = f*f*(3.0-2.0*f);

        float n = mix( mix( dot( -1.0+2.0*hash( i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ), 
                            dot( -1.0+2.0*hash( i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                    mix( dot( -1.0+2.0*hash( i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ), 
                            dot( -1.0+2.0*hash( i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
        return 0.5 + 0.5*n;
    }

    void main() { 

        vec2 uv = vUv;
        float ratio = uRez.x / uRez.y;
        
        vec2 tuv = uv;
        tuv -= .5;

        
        float degree = noise(vec2(uTime*.1, tuv.x*tuv.y));
        tuv.y *= 1./ratio;
        tuv *= Rot(radians((degree-.5)*720.+180.));
        tuv.y *= ratio;

        
        float frequency = 5.;
        float amplitude = 30.;
        float speed = uTime * 2.;
        tuv.x += sin(tuv.y*frequency+speed)/amplitude;
        tuv.y += sin(tuv.x*frequency*1.5+speed)/(amplitude*.5);

        
        vec3 layer1 = mix(uColor1, uColor2, S(-.3, .2, (tuv*Rot(radians(-5.))).x));
        vec3 layer2 = mix(uColor3, uColor4, S(-.3, .2, (tuv*Rot(radians(-5.))).x));

        
        float ditherIntensity = 0.15;

        vec2 noiseUv = vUv;
        
        noiseUv *= 2.0;
        noiseUv.x *= ratio;

        vec4 noiseBlue = texture2D(uTextureNoise, noiseUv);
        float ditherFactor = (1.0 - ditherIntensity) + smoothstep(0.4, 0.6, noiseBlue.r) * ditherIntensity;
        
        
        vec3 finalComp = mix(layer1, layer2, S(.5, -.3, tuv.y) * ditherFactor);
        finalComp *= uAlpha;
        vec3 col = finalComp;

        
        
        gl_FragColor = vec4(col, 1.0);

    } 
        
<% } %>`,ME=`<% if (vert) { %>
  
    precision highp float; 

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;
    uniform float uTime;

    uniform float uNoiseFrequency;
    uniform float uNoiseIntensity;
    uniform float uParticlesSize;
    uniform float uBokeh;
    uniform float uFocus;
    uniform float uFocusRange;

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;
    varying float vDepth;
    varying float vNoise;

    vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r){
        return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    
    float pnoise(vec3 P, vec3 rep)
    {
        vec3 Pi0 = mod(floor(P), rep); 
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); 
        vec3 Pf1 = Pf0 - vec3(1.0); 
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
    }

    void main(){
        vUv = uv;

        vec3 displacement = vec3(
            0.,
            0.,
            pnoise(uNoiseFrequency * position - vec3(uTime, uTime * .1, 0.), vec3(202.0)) * uNoiseIntensity +
            pnoise(uNoiseFrequency * 4. * position - vec3(uTime * 2., uTime * .1, 0.), vec3(50.0)) * uNoiseIntensity * .2
        );
        vec3 p = position + displacement;

        vNoise = pnoise(uNoiseFrequency * (position * 4.) - vec3(uTime * 4., uTime * .1, 0.), vec3(303.0)) * uNoiseIntensity;
        vNoise = (vNoise + 1.) * .5;
        vPos = modelMatrix * vec4(p, 1.0);
        vWorldPosition = (modelViewMatrix * vec4(p, 1.0)).xyz;

        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);

        float fogDistance =  -(modelViewMatrix * vec4(p, 1.0)).z;
        float fogAmount = 1. - (smoothstep(uFocus - uFocusRange, uFocus, fogDistance) - smoothstep(uFocus, uFocus + uFocusRange, fogDistance));
        fogAmount = pow(fogAmount, 1.);
        vDepth = fogAmount;

        gl_PointSize = uParticlesSize + (uBokeh * fogAmount);

    }

<% } %>

<% if (frag) { %>

    precision highp float; 

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;
    varying float vDepth;
    varying float vNoise;

    uniform float uTime;
    uniform float uAlpha;
    uniform vec3 uColor1;
    uniform vec3 uColor2;

    const float border_size = 0.01;
    const float disc_radius = 0.1;
    const float border_size1 = 0.1;
    const float disc_radius1 = 0.3;

    void main() { 

        vec2 uv = gl_PointCoord.xy;
        uv -= vec2(0.5);
        float dist = sqrt(dot(uv, uv));

        float dr = disc_radius * (.2 + vNoise * .8);
        float dr1 = disc_radius1 * (.2 + vNoise * .8);
        float t = smoothstep(dr+border_size, dr-border_size, dist);
        float t1 = smoothstep(dr1+border_size1, dr1-border_size1, dist);
       
        vec4 color = vec4(mix(uColor1, uColor2, vUv.x), (t + t1*.05));
        

        color.a *= .3 + ((sin(((uTime * 1.) + mod(length(vUv) * 19970237., 1.)) * 6.28) + 1.) * .5) * .7;
        color.a *= .6 + ((sin(((uTime * 2.) + mod(length(vUv * 103.) * 70209361., 1.)) * 6.28) + 1.) * .5) * .5;
        color.a *= uAlpha;

        color.rgb *= color.a;
        gl_FragColor = color;
        
        
        
        
    } 
        
<% } %>`,FE=`<% if (vert) { %>
  
    precision highp float; 

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;

    #define M_PI 3.1415926535897932384626433832795

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;

    uniform float uTime;
    uniform float uTimeWaves;
    uniform sampler2D uTextureDepth;
    uniform vec2 uTextureOffsets;
    uniform float uNoiseFrequency;
    uniform float uNoiseIntensity;
    uniform float uParticlesSize;
    uniform float uParticlesDensity;
    uniform float uDepthIntensity;
    uniform float uBokeh;
    uniform float uFocus;
    uniform float uFocusRange;
    uniform float uSpeechFactor;
    uniform float uSpeechDepthIntensity;
    uniform vec2 uWavesOrigin;
    uniform float uWavesFrequency;
    uniform float uWavesSpeed;

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;
    varying float vDepth;
    varying float vNoise;
    varying float vWave;

    vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r){
        return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    
    float pnoise(vec3 P, vec3 rep) {
        vec3 Pi0 = mod(floor(P), rep); 
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); 
        vec3 Pf1 = Pf0 - vec3(1.0); 
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
    }

    void main(){
        vUv = uv;

        
        
        
        
        
        

        
        
        float gridOffsetFactor = cos(uv.y * uParticlesDensity);
        vec3 gridDisplacement = vec3(gridOffsetFactor * (1.0 / uParticlesDensity) * 4.0, 0. ,0.);

        
        float distanceCenter = distance(vUv, uWavesOrigin);
        float distanceCenterX = distance(vUv.x, 0.5);

        float distanceCenterFactor = 1.0 - distanceCenter * 2.0;
        float distanceCenterXFactor = 1.0 - distanceCenterX * 2.0;
        float distanceMixedFactor = mix(distanceCenterFactor, distanceCenterXFactor, 0.25);

        float waveFactor = abs(tan(sin(distanceMixedFactor * uWavesFrequency + uTimeWaves * uWavesSpeed)));
        vWave = mix(1., waveFactor, uSpeechFactor);
        
        waveFactor = 0.5 + waveFactor * 0.5;
        waveFactor *= 0.5 + uSpeechFactor * 0.5;

        
        float noiseFactor = pnoise(uNoiseFrequency * position - vec3(uTime, uTime * 0.1, uTime * 0.1), vec3(202.0));
        
        vec3 displacement = vec3(0.0, 0.0, (noiseFactor * 0.5 + 0.25) * uNoiseIntensity);
        
        displacement *= -1.0;
        displacement *= waveFactor;

        
        float distanceFromCenter = distance(vUv, vec2(0.5)) * 2.0;
        displacement *= 0.1 + smoothstep(0.45, 0.8, distanceFromCenter) * 0.9;
        
        
        vec4 colorDepth = texture2D(uTextureDepth, vUv + uTextureOffsets);
        float depthFactor = colorDepth.r;
        displacement.z += depthFactor * uDepthIntensity;
        displacement.z += uSpeechFactor * (0.5 + depthFactor * 0.5) * uSpeechDepthIntensity;

        
        vec3 displacedPos = position + gridDisplacement + displacement;
        vec4 displacedPos4 = vec4(displacedPos, 1.0);

        vNoise = pnoise(uNoiseFrequency * (position * 10.) - vec3(uTime * 4., uTime * .1, 0.), vec3(303.0)) * uNoiseIntensity;
        vNoise = (vNoise + 1.) * .5;

        vPos = modelMatrix * displacedPos4;

        vWorldPosition = (modelViewMatrix * displacedPos4).xyz;

        gl_Position = projectionMatrix * modelViewMatrix * displacedPos4;

        float fogDistance =  -(modelViewMatrix * displacedPos4).z;
        float fogAmount = 1. - (smoothstep(uFocus - uFocusRange, uFocus, fogDistance) - smoothstep(uFocus, uFocus + uFocusRange, fogDistance));
        fogAmount = pow(fogAmount, 1.);
        vDepth = fogAmount;

        gl_PointSize = uParticlesSize + (uBokeh * fogAmount);

    }

<% } %>

<% if (frag) { %>

    precision highp float; 

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;
    varying float vDepth;
    varying float vNoise;
    varying float vWave;

    uniform float uTime;
    uniform float uAlpha;
    uniform sampler2D uTexture;
    uniform sampler2D uTextureDepth;
    uniform vec2 uTextureOffsets;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColorSpeech;
    uniform float uSpeechFactor;
    uniform float uParticlesDensity;
    uniform float uWaveShineIntensity;

    const float border_size = 0.01;
    const float disc_radius = 0.05;
    const float border_size1 = 0.05;
    const float disc_radius1 = 0.15;

    float random (in vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() { 
        
        vec2 uv = gl_PointCoord.xy;
        uv -= vec2(0.5);

        float dist = sqrt(dot(uv, uv));

        
        float noiseSizeReduction = 0.25 + 0.25 * (1.0 - vWave);
        float dr = disc_radius * ((1.0 - noiseSizeReduction) + vNoise * noiseSizeReduction);
        float dr1 = disc_radius1 * ((1.0 - noiseSizeReduction) + vNoise * noiseSizeReduction);
        float t = smoothstep(dr+border_size, dr-border_size, dist);
        float t1 = smoothstep(dr1+border_size1, dr1-border_size1, dist);
        float dotMask = t + t1 * 0.1;
       
        
        vec4 colorDepth = texture2D(uTextureDepth, vUv );
        vec4 colorTex = texture2D(uTexture, vUv + uTextureOffsets * colorDepth.r);

        #ifdef HAS_VIDEO_TEXTURE
        
        float texDepthFactor = (length(colorTex.rgb) * length(colorTex.rgb)) * (0.35 + length(colorDepth.rgb) * length(colorDepth.rgb) * 0.65);
        #else
        
        float texDepthFactor = (0.15 + length(colorTex.rgb) * 0.85) * (0.75 + length(colorDepth.rgb) * 0.25);
        #endif

        vec4 color = vec4(mix(uColor1, uColor2, texDepthFactor), 1.0);

        
        float speechSparkles = vNoise;
        color = mix(color, vec4(uColorSpeech, 1.0), uSpeechFactor * texDepthFactor * vWave * speechSparkles);

        
        color.a = dotMask;
        color.a *= length(colorTex.rgb);

        float distanceFromCenter = distance(vUv, vec2(0.5)) * 2.0;
        color.a *= 1.0 - smoothstep(0.4, 0.8, distanceFromCenter);

        
        
        

        
        color.a *= 0.8 + vWave * 0.2;
        color.a *= uAlpha;

        
        float waveShine = 1.0 + vWave * uWaveShineIntensity;
        color.rgb *= color.a * waveShine;

        
        
        
        
        gl_FragColor = color;
    } 
        
<% } %>`,kE=`<% if (vert) { %>
  
    precision highp float; 

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;

    #define M_PI 3.1415926535897932384626433832795

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;

    uniform float uTime;
    uniform float uTimeWaves;
    uniform sampler2D uTextureDepthAlpha;
    uniform sampler2D uTextureDepthBeta;
    uniform vec2 uTextureOffsets;
    uniform float uTransition;
    uniform float uNoiseFrequency;
    uniform float uNoiseIntensity;
    uniform float uParticlesSize;
    uniform float uParticlesDensity;
    uniform float uDepthIntensity;
    uniform float uBokeh;
    uniform float uFocus;
    uniform float uFocusRange;
    uniform vec2 uWavesOrigin;
    uniform float uWavesFrequency;
    uniform float uWavesSpeed;

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;
    varying float vDepth;
    varying float vNoise;
    varying float vWave;
    varying float vTransitionFactor;

    vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r){
        return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    
    float pnoise(vec3 P, vec3 rep) {
        vec3 Pi0 = mod(floor(P), rep); 
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); 
        vec3 Pf1 = Pf0 - vec3(1.0); 
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
    }

    void main(){
        vUv = uv;

        
        
        float gridOffsetFactor = cos(uv.y * uParticlesDensity * M_PI);
        vec3 gridDisplacement = vec3(gridOffsetFactor * (1.0 / uParticlesDensity) * 1.0, 0. ,0.);

        
        float distanceCenter = distance(vUv, uWavesOrigin);
        float distanceCenterX = distance(vUv.x, 0.5);

        float distanceCenterFactor = 1.0 - distanceCenter * 2.0;
        float distanceCenterXFactor = 1.0 - distanceCenterX * 2.0;
        float distanceMixedFactor = mix(distanceCenterFactor, distanceCenterXFactor, 0.0);

        float waveFactor = abs(tan(sin(distanceMixedFactor * uWavesFrequency + uTimeWaves * uWavesSpeed)));
        vWave = waveFactor;
        waveFactor = 0.5 + waveFactor * 0.5;

        
        float noiseFactor = pnoise(uNoiseFrequency * position - vec3(uTime, uTime * 0.1, uTime * 0.1), vec3(202.0));
        vec3 displacement = vec3(0.0, 0.0, (noiseFactor * 0.5 + 0.25) * uNoiseIntensity);
        displacement *= -1.0;
        displacement *= waveFactor;

        
        float distanceFromCenter = distance(vUv, vec2(0.5)) * 2.0;
        displacement *= 0.35 + smoothstep(0.3, 0.7, distanceFromCenter) * 0.65;
        
        
        vec4 colorDepthAlpha = texture2D(uTextureDepthAlpha, vUv);
        vec4 colorDepthBeta = texture2D(uTextureDepthBeta, vUv );

        float transitionMax = uTransition * 1.5;
        vTransitionFactor = 1.0 - smoothstep(transitionMax - 0.2, transitionMax + 0.2, distance(vUv, vec2(0.5)) * 2.0);
        vTransitionFactor = mix(vTransitionFactor, uTransition, 0.75);

        vec4 colorDepth = mix(colorDepthAlpha, colorDepthBeta, vTransitionFactor);

        float depthFactor = colorDepth.r;
        displacement.z += depthFactor * uDepthIntensity;

        
        vec3 displacedPos = position + gridDisplacement + displacement;
        vec4 displacedPos4 = vec4(displacedPos, 1.0);

        vNoise = pnoise(uNoiseFrequency * (position * 10.) - vec3(uTime * 4., uTime * .1, 0.), vec3(303.0)) * uNoiseIntensity;
        vNoise = (vNoise + 1.) * .5;

        vPos = modelMatrix * displacedPos4;

        vWorldPosition = (modelViewMatrix * displacedPos4).xyz;

        
        gl_Position = projectionMatrix * modelViewMatrix * displacedPos4;

        float fogDistance =  -(modelViewMatrix * displacedPos4).z;
        float fogAmount = 1. - (smoothstep(uFocus - uFocusRange, uFocus, fogDistance) - smoothstep(uFocus, uFocus + uFocusRange, fogDistance));
        fogAmount = pow(fogAmount, 1.);
        vDepth = fogAmount;

        gl_PointSize = uParticlesSize + (uBokeh * fogAmount);

    }

<% } %>

<% if (frag) { %>

    precision highp float; 

    varying vec2 vUv;
    varying vec4 vPos;
    varying vec3 vWorldPosition;
    varying float vDepth;
    varying float vNoise;
    varying float vWave;
    varying float vTransitionFactor;

    uniform float uTime;
    uniform float uAlpha;
    uniform sampler2D uTextureAlpha;
    uniform sampler2D uTextureDepthAlpha;
    uniform sampler2D uTextureBeta;
    uniform sampler2D uTextureDepthBeta;
    uniform float uTransition;
    uniform vec2 uTextureOffsets;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uWaveShineIntensity;

    const float border_size = 0.01;
    const float disc_radius = 0.05;
    const float border_size1 = 0.05;
    const float disc_radius1 = 0.15;

    float random (in vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() { 
        vec2 uv = gl_PointCoord.xy;
        uv -= vec2(0.5);
        
        float dist = sqrt(dot(uv, uv));

        
        float noiseSizeReduction = 0.25 + 0.25 * (1.0 - vWave * 0.75);
        float dr = disc_radius * ((1.0 - noiseSizeReduction) + vNoise * noiseSizeReduction);
        float dr1 = disc_radius1 * ((1.0 - noiseSizeReduction) + vNoise * noiseSizeReduction);
        float t = smoothstep(dr+border_size, dr-border_size, dist);
        float t1 = smoothstep(dr1+border_size1, dr1-border_size1, dist);
        float dotMask = t + t1 * 0.1;
       
        
        vec4 colorDepthAlpha = texture2D(uTextureDepthAlpha, vUv );
        vec4 colorTexAlpha = texture2D(uTextureAlpha, vUv + uTextureOffsets * colorDepthAlpha.r);
        vec4 colorDepthBeta = texture2D(uTextureDepthBeta, vUv );
        vec4 colorTexBeta = texture2D(uTextureBeta, vUv + uTextureOffsets * colorDepthBeta.r);

        
        vec4 colorDepth = mix(colorDepthAlpha, colorDepthBeta, vTransitionFactor);
        vec4 colorTex = mix(colorTexAlpha, colorTexBeta, vTransitionFactor);

        
        float texDepthFactor = (0.35 + length(colorTex.rgb) * 0.65);

        vec3 accentColor = mix(colorTex.rgb, uColor2, 0.5);
        vec4 color = vec4(mix(uColor1, accentColor, texDepthFactor), 1.0);

        
        color.a = dotMask;
        color.a *= length(colorTex.rgb);

        
        
        

        
        
        color.a *= uAlpha;

        float waveShine = 1.0 + tan(vWave) * smoothstep(0.4, 1.0, length(colorTex.rgb)) * uWaveShineIntensity;
        
        color.rgb *= color.a * waveShine;

        
        
        
        
        gl_FragColor = color;
    } 
        
<% } %>`,LE=`<% if (vert) { %>
    needES300
    precision highp float;
    precision highp sampler3D;

    #define M_PI 3.1415926535897932384626433832795

    in vec3 aPos;
    in vec3 aInitialPos;
    in vec3 aVelocity;
    in vec3 aPlanePos;
    in vec3 aPlaneNormal;
    in vec2 aPlaneUvs;
    in vec4 aSeed;
    in float aTime;

    uniform mat4 uPMatrix;
    uniform mat4 uMMatrix;
    uniform mat4 uVMatrix;
    uniform mat4 uNMatrix;

    uniform vec3  uParticlesColor;
    uniform vec3  uOffset;
    uniform float uDeltaTime;
    uniform float uLifeSpan;
    uniform float uLifeSpanVariation;
    uniform float uParticleScale;
    uniform float uVoxelSize;
    uniform float uRibonScale;
    uniform float uRibonScaleVariation;

    uniform sampler3D uVoxels;

    out vec4 vSeed;
    out vec3 vPositiions;
    out vec3 vNormal;
    out vec3 vVelocity;
    out vec3 vPosition;
    out vec2 vUv;
    out vec3 vWorldPosition;

    out float vTime;
    out float vAlpha;

    mat3 calcLookAtMatrix(vec3 origin, vec3 target, float roll) {
        vec3 rr = vec3(sin(roll), cos(roll), 0.0);
        vec3 ww = normalize(target - origin);
        vec3 uu = normalize(cross(ww, rr));
        vec3 vv = normalize(cross(uu, ww));
        
        return mat3(uu, vv, ww);
    }

    void main()
    {

        aVelocity;
        aPlanePos;
        aPlaneUvs;
        aPlaneNormal;

        vec3 planeSize = vec3(uRibonScale + aSeed.y * uRibonScaleVariation, 1., -.1);
        float voxelSize = uVoxelSize;

        vUv = aPlaneUvs;
        vec3 newPosition  = aPos;

        float time = aTime + uDeltaTime - (aPlanePos.z * (.1 + (aSeed.y * 1.5)));
        

        vec3 vst = (aPos * .5) + .5;
        vst -= vec3(.5);
        vst *= 1./voxelSize;
        vst += vec3(.5);

        vec3 wind = texture(uVoxels, vst).rgb * 10. * uDeltaTime;
        vAlpha = smoothstep(0.006, .001, length(wind));

        wind *= step(vec3(0.), vst);
        wind *= 1. - step(vec3(1.), vst);

        
        newPosition += wind * clamp(time, 0., 1.);

        vec3 incidence = aPos - wind;
        vec3 dir = (newPosition - aPos) * 100.;
        
        

        
        mat3 lookAtMatrix = calcLookAtMatrix(newPosition, newPosition + dir, 6.28 * aSeed.x);

        vec3 planePos = aPlanePos * planeSize;
        vec3 pos = newPosition + lookAtMatrix * planePos;
        vec4 mvPosition = uVMatrix * uMMatrix * vec4(pos, 1.0);

        vec4 outPos = uMMatrix * vec4(pos, 1.0);
        vWorldPosition = mvPosition.xyz;
        vPosition = vec3(outPos.xyz) / outPos.w;

        vec3 normal = lookAtMatrix * aPlaneNormal;
        vNormal = normalize(vec3(uNMatrix * vec4(normal, 0.0)));

        gl_Position = uPMatrix * mvPosition;
        gl_PointSize = uParticleScale;

        
        
        vSeed = aSeed;

        if ((aTime/(uLifeSpan * (1. - (vSeed.z * uLifeSpanVariation)))) > 1.){
            vTime = 0.;
            vPositiions = aInitialPos;
            vVelocity = vec3(0.);
        } else {
            vTime = aTime + uDeltaTime;
            vPositiions = newPosition;
            vVelocity = newPosition - aPos;
        }

    }

<% } %>

<% if (frag) { %>
    needES300
    precision highp float;

    uniform vec3 uParticleColor0;
    uniform vec3 uParticleColor1;
    uniform float uLifeSpan;

    uniform vec4 uBaseColorFactor;
    uniform vec3 uCamera;

    uniform float uLifeSpanVariation;
    uniform float uParticleOpacity;

    in vec4 vSeed;
    in vec3 vVelocity;
    in vec3 vNormal;
    in vec3 vPosition;
    in vec2 vUv;
    in float vAlpha;
    in float vTime;
    in vec3 vWorldPosition;

    out vec4 outColor;

    const float LOG2 = 1.442695;
    uniform vec3 uFogColor;
    uniform float uFogNear;
    uniform float uFogFar;

    vec3 hueShift(vec3 color, float dhue) {
        float s = sin(dhue);
        float c = cos(dhue);
        return (color * c) + (color * s) * mat3(
            vec3(0.167444, 0.329213, -0.496657),
            vec3(-0.327948, 0.035669, 0.292279),
            vec3(1.250268, -1.047561, -0.202707)
        ) + dot(vec3(0.299, 0.587, 0.114), color) * (1.0 - c);
    }

    void main()
    {
        float p = (vTime/(uLifeSpan * (1. - (vSeed.z * uLifeSpanVariation))));
        float a = smoothstep(.1, .25, p) - smoothstep(.75, 1., p);
        a *= uParticleOpacity;

        vec3 baseColorGradient = mix(
            uParticleColor0, 
            uParticleColor1, 
        vUv.y);
        baseColorGradient += (vSeed.y - .5) * .1;

        vec4 baseColor = vec4(baseColorGradient, a);
        baseColor.rgb = hueShift(baseColor.rgb, vSeed.y * 3.14);

        float fogDistance = length(vWorldPosition);
        float fogAmount = smoothstep(uFogNear, uFogFar, fogDistance);
        fogAmount = clamp(fogAmount, 0., 1.);

        outColor = vec4(mix(baseColor.rgb, uFogColor, fogAmount), baseColor.a);
        outColor = vec4(1., 1., 1., 1.);

        
    }
        
<% } %>`,IE=`<% if (vert) { %>
  
    precision highp float; 

    attribute vec3 position;
    attribute vec2 uv;

    varying vec2 vUv;
    varying vec4 vPosition;

    void main(){
        vUv = uv;
        gl_Position = vec4(position, 1.0);
        vPosition = vec4(position, 1.0);
        
    }

<% } %>

<% if (frag) { %>

    precision highp float; 

    varying vec2 vUv;
    varying vec4 vPosition;

    uniform float uTime;
    uniform float uAlpha;
    uniform vec2 uRez;

    uniform sampler2D uDepth;
    uniform sampler2D uColor;

    const float uFar = 200.;
    const float uNear = -200.;
    const float uStrength = 3.;

    const float M_PI = 3.141592653589793;

    
    int samples = 8; 
    float radius = 5.0; 

    float aoclamp = 0.125; 
    bool noise = true; 
    float noiseamount = 0.0002; 

    float diffarea = 0.3; 
    float gdisplace = 0.4; 

    bool mist = false; 
    float miststart = 0.0; 

    bool onlyAO = false; 
    float lumInfluence = 0.7; 

    vec2 rand(vec2 coord) 
    {
        float width = uRez.x;
        float height = uRez.y;

        float noiseX = ((fract(1.0-coord.s*(width/2.0))*0.25)+(fract(coord.t*(height/2.0))*0.75))*2.0-1.0;
        float noiseY = ((fract(1.0-coord.s*(width/2.0))*0.75)+(fract(coord.t*(height/2.0))*0.25))*2.0-1.0;

        if (noise)
        {
            noiseX = clamp(fract(sin(dot(coord ,vec2(12.9898,78.233))) * 43758.5453),0.0,1.0)*2.0-1.0;
            noiseY = clamp(fract(sin(dot(coord ,vec2(12.9898,78.233)*2.0)) * 43758.5453),0.0,1.0)*2.0-1.0;
        }
        return vec2(noiseX,noiseY)*noiseamount;
    }

    float doMist()
    {
        float mistend = uFar; 
        float zdepth = texture2D(uDepth,vUv.xy).x;
        
        return zdepth;
        
    }

    float readDepth(vec2 coord)
    {
        if (vUv.x<0.0||vUv.y<0.0) return 1.0;
        else {
            float z_b = texture2D(uDepth, coord ).x;
            float z_n = 2.0 * z_b - 1.0;
            return z_n;
            
        }
    }

    int compareDepthsFar(float depth1, float depth2) {
        float garea = 2.0; 
        float diff = (depth1 - depth2)*100.0; 
        
        if (diff<gdisplace)
        {
            return 0;
        } else {
            return 1;
        }
    }

    float compareDepths(float depth1, float depth2)
    {
        float garea = 2.0; 
        float diff = (depth1 - depth2)*100.0; 
        
        if (diff<gdisplace)
        {
            garea = diffarea;
        }

        float gauss = pow(2.7182,-2.0*(diff-gdisplace)*(diff-gdisplace)/(garea*garea));
        return gauss;
    }

    float calAO(float depth,float dw, float dh)
    {
        float dd = (1.0-depth)*radius;

        float temp = 0.0;
        float temp2 = 0.0;
        float coordw = vUv.x + dw*dd;
        float coordh = vUv.y + dh*dd;
        float coordw2 = vUv.x - dw*dd;
        float coordh2 = vUv.y - dh*dd;

        vec2 coord = vec2(coordw , coordh);
        vec2 coord2 = vec2(coordw2, coordh2);

        float cd = readDepth(coord);
        int far = compareDepthsFar(depth, cd);
        temp = compareDepths(depth, cd);
        
        if (far > 0)
        {
            temp2 = compareDepths(readDepth(coord2),depth);
            temp += (1.0-temp)*temp2;
        }

        return temp;
    }

    void main() { 

        vec2 uv = vUv;
        float ratio = uRez.x / uRez.y;

        float width = uRez.x;
        float height = uRez.y;

        float dept = texture2D(uColor, uv).r;
        vec4 t = texture2D(uColor, uv);

        
        vec2 noise = rand(vUv);
        float _depth = readDepth(vUv);

        float w = (1.0 / width)/clamp(_depth,aoclamp,1.0)+(noise.x*(1.0-noise.x));
        float h = (1.0 / height)/clamp(_depth,aoclamp,1.0)+(noise.y*(1.0-noise.y));

        float pw = 0.0;
        float ph = 0.0;

        float ao = 0.0;

        float dl = M_PI * (3.0 - sqrt(5.0));
        float dz = 1.0 / float(samples);
        float l = 0.0;
        float z = 1.0 - dz/2.0;

        for (int i = 0; i < 64; i++)
        {
            if (i > samples) break;
            float r = sqrt(1.0 - z);

            pw = cos(l) * r;
            ph = sin(l) * r;
            ao += calAO(_depth,pw*w,ph*h);
            z = z - dz;
            l = l + dl;
        }

        ao /= float(samples);
        ao *= uStrength;
        ao = 1.0-ao;

        if (mist)
        {
            ao = mix(ao, 1.0, doMist());
        }

        vec3 color = t.rgb;
        
        
        
        
        
        vec3 final = color * ao;

        
        gl_FragColor = vec4(final, t.a);
        

    } 
        
<% } %>`,DE=`<% if (vert) { %>
    needES300
    precision highp float; 

    in vec3 position;
    in vec2 uv;
    in float charsId;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;

    out vec2 vUv;
    out vec4 vPos;

    void main(){
        vUv = uv;
        charsId;
        vPos = modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }

<% } %>

<% if (frag) { %>
    
    precision highp float; 

    in vec2 vUv;
    in vec4 vPos;

    uniform bool isCameraFliped;

    uniform sampler2D tMap;
    uniform vec3 uColor;
    uniform float uAlpha;

    out vec4 outColor;

    void main() { 
        if(isCameraFliped && vPos.y < 0.01){ discard; }

        vec3 tex = texture(tMap, vUv).rgb;

        float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
        float d = fwidth(signedDist);
        float alpha = smoothstep(-d, d, signedDist);

        if (alpha < 0.01) discard;

        #ifdef IS_WEBGL_1
            gl_FragColor.rgb = uColor;
            gl_FragColor.a = alpha * uAlpha;
        #else
            outColor.rgb = uColor;
            outColor.a = alpha * uAlpha;
        #endif

    } 
        
<% } %>`,NE=`<% if (vert) { %>
    needES300
    precision highp float; 

    in vec3 position;
    in vec3 center;
    in vec2 uv;
    in float charsId;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;
    uniform float uProgress;
    uniform float uMaxIds;
    uniform vec2 uAnimationDirrection;

    out vec2 vUv;
    out vec4 vPos;
    out float vAlpha;

    const float stagger = .15;

    <%= commons.easing %>

    void main(){
        vUv = uv;
        
        vec3 pos = position;

        float inProgress = smoothstep(-1., 0., (1. - uProgress) - 1.);
        float outProgress = smoothstep(1., 0., (1. - uProgress) - 1.);
        float cp = charsId/uMaxIds;
        float lpi = smoothstep(0. + (cp * stagger), 1. + (cp * stagger), (1. - inProgress) * (1. + stagger));
        float lpo = smoothstep(0. - (cp * stagger), 1. - (cp * stagger), (1. - outProgress) * (1. + stagger) - stagger);
        pos = mix(pos, center, quarticOut(lpo));
        pos.yz -= uAnimationDirrection * .5 * quarticIn(lpi);
        pos.yz += uAnimationDirrection * quarticOut(lpo);
        vAlpha = (1. - quarticInOut(lpi)) * (1. - quarticOut(lpo));

        vPos = modelMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }

<% } %>

<% if (frag) { %>
    
    precision highp float; 

    in vec2 vUv;
    in vec4 vPos;
    in float vAlpha;

    uniform bool isCameraFliped;

    uniform sampler2D tMap;
    uniform vec3 uColor;
    uniform float uAlpha;

    out vec4 outColor;

    void main() { 
        if(isCameraFliped && vPos.y < 0.01){ discard; }

        vec3 tex = texture(tMap, vUv).rgb;

        float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
        float d = fwidth(signedDist);
        float alpha = smoothstep(-d, d, signedDist);

        if (alpha < 0.01) discard;

        #ifdef IS_WEBGL_1
            gl_FragColor.rgb = uColor;
            gl_FragColor.a = alpha * uAlpha * vAlpha;
        #else
            outColor.rgb = uColor;
            outColor.a = alpha * uAlpha * vAlpha;
        #endif

    } 
        
<% } %>`,UE=`vec3 blendNormal(vec3 normal){
    vec3 blending = abs(normal);
    blending = normalize(max(blending, 0.00001));
    blending /= vec3(blending.x + blending.y + blending.z);
    return blending;
}

vec3 triplanarMapping (sampler2D texture, vec3 normal, vec3 position) {
    vec3 normalBlend = blendNormal(normal);
    vec3 xColor = texture2D(texture, position.yz).rgb;
    vec3 yColor = texture2D(texture, position.xz).rgb;
    vec3 zColor = texture2D(texture, position.xy).rgb;
    return (xColor * normalBlend.x + yColor * normalBlend.y + zColor * normalBlend.z);
}`,BE=`float blendColorBurn(float base, float blend) {
    return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
    return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}`,VE=`mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
    mat4 m = rotationMatrix(axis, angle);
    return (m * vec4(v, 1.0)).xyz;
}`,HE=`vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}`,jE=`float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}`,WE=`vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3333333333333333) * direction;
  color += texture2D(image, uv) * 0.29411764705882354;
  color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
  color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
  return color; 
}`,GE=`precision highp float;

vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3333333333333333) * direction;
  color += texture2D(image, uv) * 0.29411764705882354;
  color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
  color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
  return color;
}

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

uniform sampler2D tMap;
uniform vec2 u_direction;
uniform vec2 u_resolution;
varying vec2 vUv;
void main() {
  
  
  gl_FragColor = blur5(tMap, vUv, u_resolution, u_direction);
}`,qE=`precision highp float;

uniform sampler2D tMap;
uniform sampler2D t_bloom;
uniform vec2 u_resolution;
uniform float u_bloomStrength;

varying vec2 vUv;

void main() {
  vec4 color = texture2D(tMap, vUv) + texture2D(t_bloom, vUv) * u_bloomStrength;
  
  gl_FragColor = color;
}`,$E=`precision highp float;

uniform sampler2D tMap;
uniform float u_threshold;

varying vec2 vUv;

void main() {
  vec4 tex = texture2D(tMap, vUv);
  vec4 bright = tex * step(u_threshold, length(tex.rgb) / 1.73205);
  
  gl_FragColor = bright;
}`,XE=`vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}

vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 1.0/7.0; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}

vec4 grad4(float j, vec4 ip){
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
}

float snoise(vec4 v){
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 

  vec4 i  = floor(v + dot(v, C.yyyy) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );

  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  i = mod(i, 289.0); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}`,YE=`float blendColorDodge_14_0(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge_14_0(vec3 base, vec3 blend) {
	return vec3(blendColorDodge_14_0(base.r,blend.r),blendColorDodge_14_0(base.g,blend.g),blendColorDodge_14_0(base.b,blend.b));
}

vec3 blendColorDodge_14_0(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge_14_0(base, blend) * opacity + base * (1.0 - opacity));
}

float blendColorBurn_15_1(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn_15_1(vec3 base, vec3 blend) {
	return vec3(blendColorBurn_15_1(base.r,blend.r),blendColorBurn_15_1(base.g,blend.g),blendColorBurn_15_1(base.b,blend.b));
}

vec3 blendColorBurn_15_1(vec3 base, vec3 blend, float opacity) {
	return (blendColorBurn_15_1(base, blend) * opacity + base * (1.0 - opacity));
}

float blendVividLight_3_2(float base, float blend) {
	return (blend<0.5)?blendColorBurn_15_1(base,(2.0*blend)):blendColorDodge_14_0(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight_3_2(vec3 base, vec3 blend) {
	return vec3(blendVividLight_3_2(base.r,blend.r),blendVividLight_3_2(base.g,blend.g),blendVividLight_3_2(base.b,blend.b));
}

vec3 blendVividLight_3_2(vec3 base, vec3 blend, float opacity) {
	return (blendVividLight_3_2(base, blend) * opacity + base * (1.0 - opacity));
}

float blendHardMix_2_3(float base, float blend) {
	return (blendVividLight_3_2(base,blend)<0.5)?0.0:1.0;
}

vec3 blendHardMix_2_3(vec3 base, vec3 blend) {
	return vec3(blendHardMix_2_3(base.r,blend.r),blendHardMix_2_3(base.g,blend.g),blendHardMix_2_3(base.b,blend.b));
}

vec3 blendHardMix_2_3(vec3 base, vec3 blend, float opacity) {
	return (blendHardMix_2_3(base, blend) * opacity + base * (1.0 - opacity));
}

float blendLinearDodge_12_4(float base, float blend) {
	
	return min(base+blend,1.0);
}

vec3 blendLinearDodge_12_4(vec3 base, vec3 blend) {
	
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge_12_4(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge_12_4(base, blend) * opacity + base * (1.0 - opacity));
}

float blendLinearBurn_13_5(float base, float blend) {
	
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend) {
	
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn_13_5(base, blend) * opacity + base * (1.0 - opacity));
}

float blendLinearLight_4_6(float base, float blend) {
	return blend<0.5?blendLinearBurn_13_5(base,(2.0*blend)):blendLinearDodge_12_4(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight_4_6(vec3 base, vec3 blend) {
	return vec3(blendLinearLight_4_6(base.r,blend.r),blendLinearLight_4_6(base.g,blend.g),blendLinearLight_4_6(base.b,blend.b));
}

vec3 blendLinearLight_4_6(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight_4_6(base, blend) * opacity + base * (1.0 - opacity));
}

float blendLighten_16_7(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten_16_7(vec3 base, vec3 blend) {
	return vec3(blendLighten_16_7(base.r,blend.r),blendLighten_16_7(base.g,blend.g),blendLighten_16_7(base.b,blend.b));
}

vec3 blendLighten_16_7(vec3 base, vec3 blend, float opacity) {
	return (blendLighten_16_7(base, blend) * opacity + base * (1.0 - opacity));
}

float blendDarken_17_8(float base, float blend) {
	return min(blend,base);
}

vec3 blendDarken_17_8(vec3 base, vec3 blend) {
	return vec3(blendDarken_17_8(base.r,blend.r),blendDarken_17_8(base.g,blend.g),blendDarken_17_8(base.b,blend.b));
}

vec3 blendDarken_17_8(vec3 base, vec3 blend, float opacity) {
	return (blendDarken_17_8(base, blend) * opacity + base * (1.0 - opacity));
}

float blendPinLight_5_9(float base, float blend) {
	return (blend<0.5)?blendDarken_17_8(base,(2.0*blend)):blendLighten_16_7(base,(2.0*(blend-0.5)));
}

vec3 blendPinLight_5_9(vec3 base, vec3 blend) {
	return vec3(blendPinLight_5_9(base.r,blend.r),blendPinLight_5_9(base.g,blend.g),blendPinLight_5_9(base.b,blend.b));
}

vec3 blendPinLight_5_9(vec3 base, vec3 blend, float opacity) {
	return (blendPinLight_5_9(base, blend) * opacity + base * (1.0 - opacity));
}

float blendReflect_18_10(float base, float blend) {
	return (blend==1.0)?blend:min(base*base/(1.0-blend),1.0);
}

vec3 blendReflect_18_10(vec3 base, vec3 blend) {
	return vec3(blendReflect_18_10(base.r,blend.r),blendReflect_18_10(base.g,blend.g),blendReflect_18_10(base.b,blend.b));
}

vec3 blendReflect_18_10(vec3 base, vec3 blend, float opacity) {
	return (blendReflect_18_10(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendGlow_6_11(vec3 base, vec3 blend) {
	return blendReflect_18_10(blend,base);
}

vec3 blendGlow_6_11(vec3 base, vec3 blend, float opacity) {
	return (blendGlow_6_11(base, blend) * opacity + base * (1.0 - opacity));
}

float blendOverlay_9_12(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay_9_12(vec3 base, vec3 blend) {
	return vec3(blendOverlay_9_12(base.r,blend.r),blendOverlay_9_12(base.g,blend.g),blendOverlay_9_12(base.b,blend.b));
}

vec3 blendOverlay_9_12(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay_9_12(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendHardLight_7_13(vec3 base, vec3 blend) {
	return blendOverlay_9_12(blend,base);
}

vec3 blendHardLight_7_13(vec3 base, vec3 blend, float opacity) {
	return (blendHardLight_7_13(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendPhoenix_8_14(vec3 base, vec3 blend) {
	return min(base,blend)-max(base,blend)+vec3(1.0);
}

vec3 blendPhoenix_8_14(vec3 base, vec3 blend, float opacity) {
	return (blendPhoenix_8_14(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendNormal_10_15(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal_10_15(vec3 base, vec3 blend, float opacity) {
	return (blendNormal_10_15(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendNegation_11_16(vec3 base, vec3 blend) {
	return vec3(1.0)-abs(vec3(1.0)-base-blend);
}

vec3 blendNegation_11_16(vec3 base, vec3 blend, float opacity) {
	return (blendNegation_11_16(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendMultiply_19_17(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply_19_17(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply_19_17(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendAverage_20_18(vec3 base, vec3 blend) {
	return (base+blend)/2.0;
}

vec3 blendAverage_20_18(vec3 base, vec3 blend, float opacity) {
	return (blendAverage_20_18(base, blend) * opacity + base * (1.0 - opacity));
}

float blendScreen_21_19(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen_21_19(vec3 base, vec3 blend) {
	return vec3(blendScreen_21_19(base.r,blend.r),blendScreen_21_19(base.g,blend.g),blendScreen_21_19(base.b,blend.b));
}

vec3 blendScreen_21_19(vec3 base, vec3 blend, float opacity) {
	return (blendScreen_21_19(base, blend) * opacity + base * (1.0 - opacity));
}

float blendSoftLight_22_20(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight_22_20(vec3 base, vec3 blend) {
	return vec3(blendSoftLight_22_20(base.r,blend.r),blendSoftLight_22_20(base.g,blend.g),blendSoftLight_22_20(base.b,blend.b));
}

vec3 blendSoftLight_22_20(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight_22_20(base, blend) * opacity + base * (1.0 - opacity));
}

float blendSubtract_23_21(float base, float blend) {
	return max(base+blend-1.0,0.0);
}

vec3 blendSubtract_23_21(vec3 base, vec3 blend) {
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendSubtract_23_21(vec3 base, vec3 blend, float opacity) {
	return (blendSubtract_23_21(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendExclusion_24_22(vec3 base, vec3 blend) {
	return base+blend-2.0*base*blend;
}

vec3 blendExclusion_24_22(vec3 base, vec3 blend, float opacity) {
	return (blendExclusion_24_22(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendDifference_25_23(vec3 base, vec3 blend) {
	return abs(base-blend);
}

vec3 blendDifference_25_23(vec3 base, vec3 blend, float opacity) {
	return (blendDifference_25_23(base, blend) * opacity + base * (1.0 - opacity));
}

float blendAdd_26_24(float base, float blend) {
	return min(base+blend,1.0);
}

vec3 blendAdd_26_24(vec3 base, vec3 blend) {
	return min(base+blend,vec3(1.0));
}

vec3 blendAdd_26_24(vec3 base, vec3 blend, float opacity) {
	return (blendAdd_26_24(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendMode_1_25( int mode, vec3 base, vec3 blend ){
	if( mode == 1 ){
		return blendAdd_26_24( base, blend );
	}else
	if( mode == 2 ){
		return blendAverage_20_18( base, blend );
	}else
	if( mode == 3 ){
		return blendColorBurn_15_1( base, blend );
	}else
	if( mode == 4 ){
		return blendColorDodge_14_0( base, blend );
	}else
	if( mode == 5 ){
		return blendDarken_17_8( base, blend );
	}else
	if( mode == 6 ){
		return blendDifference_25_23( base, blend );
	}else
	if( mode == 7 ){
		return blendExclusion_24_22( base, blend );
	}else
	if( mode == 8 ){
		return blendGlow_6_11( base, blend );
	}else
	if( mode == 9 ){
		return blendHardLight_7_13( base, blend );
	}else
	if( mode == 10 ){
		return blendHardMix_2_3( base, blend );
	}else
	if( mode == 11 ){
		return blendLighten_16_7( base, blend );
	}else
	if( mode == 12 ){
		return blendLinearBurn_13_5( base, blend );
	}else
	if( mode == 13 ){
		return blendLinearDodge_12_4( base, blend );
	}else
	if( mode == 14 ){
		return blendLinearLight_4_6( base, blend );
	}else
	if( mode == 15 ){
		return blendMultiply_19_17( base, blend );
	}else
	if( mode == 16 ){
		return blendNegation_11_16( base, blend );
	}else
	if( mode == 17 ){
		return blendNormal_10_15( base, blend );
	}else
	if( mode == 18 ){
		return blendOverlay_9_12( base, blend );
	}else
	if( mode == 19 ){
		return blendPhoenix_8_14( base, blend );
	}else
	if( mode == 20 ){
		return blendPinLight_5_9( base, blend );
	}else
	if( mode == 21 ){
		return blendReflect_18_10( base, blend );
	}else
	if( mode == 22 ){
		return blendScreen_21_19( base, blend );
	}else
	if( mode == 23 ){
		return blendSoftLight_22_20( base, blend );
	}else
	if( mode == 24 ){
		return blendSubtract_23_21( base, blend );
	}else
	if( mode == 25 ){
		return blendVividLight_3_2( base, blend );
	}
}

vec3 blendMode_1_25( int mode, vec3 base, vec3 blend, float opacity ){
	if( mode == 1 ){
		return blendAdd_26_24( base, blend, opacity );
	}else
	if( mode == 2 ){
		return blendAverage_20_18( base, blend, opacity );
	}else
	if( mode == 3 ){
		return blendColorBurn_15_1( base, blend, opacity );
	}else
	if( mode == 4 ){
		return blendColorDodge_14_0( base, blend, opacity );
	}else
	if( mode == 5 ){
		return blendDarken_17_8( base, blend, opacity );
	}else
	if( mode == 6 ){
		return blendDifference_25_23( base, blend, opacity );
	}else
	if( mode == 7 ){
		return blendExclusion_24_22( base, blend, opacity );
	}else
	if( mode == 8 ){
		return blendGlow_6_11( base, blend, opacity );
	}else
	if( mode == 9 ){
		return blendHardLight_7_13( base, blend, opacity );
	}else
	if( mode == 10 ){
		return blendHardMix_2_3( base, blend, opacity );
	}else
	if( mode == 11 ){
		return blendLighten_16_7( base, blend, opacity );
	}else
	if( mode == 12 ){
		return blendLinearBurn_13_5( base, blend, opacity );
	}else
	if( mode == 13 ){
		return blendLinearDodge_12_4( base, blend, opacity );
	}else
	if( mode == 14 ){
		return blendLinearLight_4_6( base, blend, opacity );
	}else
	if( mode == 15 ){
		return blendMultiply_19_17( base, blend, opacity );
	}else
	if( mode == 16 ){
		return blendNegation_11_16( base, blend, opacity );
	}else
	if( mode == 17 ){
		return blendNormal_10_15( base, blend, opacity );
	}else
	if( mode == 18 ){
		return blendOverlay_9_12( base, blend, opacity );
	}else
	if( mode == 19 ){
		return blendPhoenix_8_14( base, blend, opacity );
	}else
	if( mode == 20 ){
		return blendPinLight_5_9( base, blend, opacity );
	}else
	if( mode == 21 ){
		return blendReflect_18_10( base, blend, opacity );
	}else
	if( mode == 22 ){
		return blendScreen_21_19( base, blend, opacity );
	}else
	if( mode == 23 ){
		return blendSoftLight_22_20( base, blend, opacity );
	}else
	if( mode == 24 ){
		return blendSubtract_23_21( base, blend, opacity );
	}else
	if( mode == 25 ){
		return blendVividLight_3_2( base, blend, opacity );
	}
}`,KE=`vec3 contrast(vec3 color, float value) {
    return clamp(0.5 + (1.0 + value) * (color - 0.5), vec3(0.), vec3(1.));
}
vec3 exposure(vec3 color, float value) {
    return (1.0 + value) * color;
}
vec3 czm_saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}
vec3 linearToneMapping(vec3 color, float gamma) {
    float exposure = 1.;
    color = clamp(exposure * color, 0., 1.);
    color = pow(color, vec3(1. / gamma));
    return color;
}`;const Zt={unlit:xE,standard:PE,spritesheet:bd,post:wE,ground:TE,postBlur:SE,rays:EE,spritesheet:bd,grid:CE,ribons:LE,fairyDust:AE,particles:zE,background:OE,particlesFlow:ME,particlesFaceFeedback:RE,particlesFacePlane:FE,particlesArchetypes:kE,"particles-compositing":IE,MSDFUnlit:DE,MSDFUnlitAnimated:NE,commons:{triplanar:UE,colorBurn:BE,rotation:VE,blur:WE,noise:XE,blurPost:GE,composite:qE,bright:$E,allBlendModes:YE,normalBlending:HE,screenBlending:jE,colorCorrection:KE}};class jn{constructor(e,n=1,r={},i=!1,s=!1){this.string=e,this.defines=r;let o=function(f){let d="";for(let p in f)d+="#define "+p+" "+f[p]+`
`;return d},a={},l=hl.render(this.string,{frag:!0,vert:!1,passes:a,commons:Zt.commons,defines:r}),c=hl.render(this.string,{frag:!1,vert:!0,passes:a,commons:Zt.commons,defines:r});Hc.gl;let u="";l=l.replaceAll("&lt;","<"),l=l.replaceAll("&gt;",">"),c=c.replaceAll("&lt;","<"),c=c.replaceAll("&gt;",">"),e.includes("needES300")&&(e=e.replaceAll("needES300",""),l=l.replaceAll("needES300",""),c=c.replaceAll("needES300",""),Hc.renderer.isWebgl2?u+=`#version 300 es
`:(this.defines.IS_WEBGL_1=1,u+=`#extension GL_OES_standard_derivatives : enable
`,c=c.replaceAll("texture(","texture2D("),c=c.replaceAll("in ","attribute "),c=c.replaceAll("out ","varying "),l=l.replaceAll("texture(","texture2D("),l=l.replaceAll("in ","varying "),l=l.replaceAll("out ","// ")));let h=o(this.defines);if(n>1){this.passes=[];for(let f=0;f<n-1;f++){a["pass_"+(f+1)]=!0;let d=hl.render(this.string,{frag:!1,vert:!1,passes:a,commons:Zt.commons,defines:r});d=d.replaceAll("&lt;","<"),d=d.replaceAll("&gt;",">"),this.passes.push(u+h+d),a["pass_"+(f+1)]=!1}}this.frag=u+h+l,this.vert=u+h+c,this.attributesCount=i,this.uniformsCount=s}}const _d=new be;let QE=1,ZE=1,yd=!1;class Ta{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=QE++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in n)this.addAttribute(r,n[r])}addAttribute(e,n){if(this.attributes[e]=n,n.id=ZE++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.buffer||(n.buffer=this.gl.createBuffer(),this.updateAttribute(n)),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),this.gl.bufferData(e.target,e.data,this.gl.STATIC_DRAW),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:r,type:i})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const s=this.attributes[r];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let o=1;i===35674&&(o=2),i===35675&&(o=3),i===35676&&(o=4);const a=s.size/o,l=o===1?0:o*o*o,c=o===1?0:o*o;for(let u=0;u<o;u++)this.gl.vertexAttribPointer(n+u,a,s.type,s.normalized,s.stride+l,s.offset+u*c),this.gl.enableVertexAttribArray(n+u),this.gl.renderer.vertexAttribDivisor(n+u,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((r,{name:i})=>{const s=this.attributes[i];s.needsUpdate&&this.updateAttribute(s)}),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!yd)return console.warn("No position buffer data found to compute bounds"),yd=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,r=e.offset||0,i=e.stride||e.size;this.bounds||(this.bounds={min:new be,max:new be,center:new be,scale:new be,radius:1/0});const s=this.bounds.min,o=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;s.set(1/0),o.set(-1/0);for(let c=r,u=n.length;c<u;c+=i){const h=n[c],f=n[c+1],d=n[c+2];s.x=Math.min(h,s.x),s.y=Math.min(f,s.y),s.z=Math.min(d,s.z),o.x=Math.max(h,o.x),o.y=Math.max(f,o.y),o.z=Math.max(d,o.z)}l.sub(o,s),a.add(s,o).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,r=e.offset||0,i=e.stride||e.size;this.bounds||this.computeBoundingBox(e);let s=0;for(let o=r,a=n.length;o<a;o+=i)_d.fromArray(n,o),s=Math.max(s,this.bounds.center.squaredDistance(_d));this.bounds.radius=Math.sqrt(s)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}class xi extends Ta{constructor(e,{width:n=1,height:r=1,widthSegments:i=1,heightSegments:s=1,attributes:o={}}={}){const a=i,l=s,c=(a+1)*(l+1),u=a*l*6,h=new Float32Array(c*3),f=new Float32Array(c*3),d=new Float32Array(c*2),p=u>65536?new Uint32Array(u):new Uint16Array(u);xi.buildPlane(h,f,d,p,n,r,0,a,l),Object.assign(o,{position:{size:3,data:h},normal:{size:3,data:f},uv:{size:2,data:d},index:{data:p}}),super(e,o)}static buildPlane(e,n,r,i,s,o,a,l,c,u=0,h=1,f=2,d=1,p=-1,m=0,g=0){const x=m,b=s/l,_=o/c;for(let v=0;v<=c;v++){let y=v*_-o/2;for(let w=0;w<=l;w++,m++){let P=w*b-s/2;if(e[m*3+u]=P*d,e[m*3+h]=y*p,e[m*3+f]=a/2,n[m*3+u]=0,n[m*3+h]=0,n[m*3+f]=a>=0?1:-1,r[m*2]=w/l,r[m*2+1]=1-v/c,v===c||w===l)continue;let T=x+w+v*(l+1),R=x+w+(v+1)*(l+1),k=x+w+(v+1)*(l+1)+1,D=x+w+v*(l+1)+1;i[g*6]=T,i[g*6+1]=R,i[g*6+2]=D,i[g*6+3]=R,i[g*6+4]=k,i[g*6+5]=D,g++}}}}let JE=1;const xd={};class Ji{constructor(e,{vertex:n,fragment:r,uniforms:i={},uniformsCount:s=!1,calcAttributesCount:o=!1,debugShader:a=!0,transparent:l=!1,cullFace:c=e.BACK,frontFace:u=e.CCW,depthTest:h=!0,depthWrite:f=!0,depthFunc:d=e.LESS}={}){Re(this,"calcAttributesCount",e=>{const r=/#version 300 es/.test(e);let i=0;const s=new RegExp(`${r?"in":"attribute"} ([^\\s]+) ([^\\s]+)`,"g");for(const o of e.matchAll(s)){const a=o[2].replace(";",""),l=new RegExp(`(?:^|\\W)${a}(?:$|\\W)`,"g"),c=e.match(l);if(!c){console.error("Attribute name not found in vertex shader",a);continue}c.length>1&&i++}return i});e.canvas||console.error("gl not passed as fist argument to Program"),this.gl=e,this.uniforms=i,this.id=JE++,n||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=l,this.cullFace=c,this.frontFace=u,this.depthTest=h,this.depthWrite=f,this.depthFunc=d,this.blendFunc={},this.blendEquation={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA));const p=e.createShader(e.VERTEX_SHADER);e.shaderSource(p,n),e.compileShader(p),a&&e.getShaderInfoLog(p)!==""&&console.warn(`${e.getShaderInfoLog(p)}
Vertex Shader
${wd(n)}`);const m=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(m,r),e.compileShader(m),a&&e.getShaderInfoLog(m)!==""&&console.warn(`${e.getShaderInfoLog(m)}
Fragment Shader
${wd(r)}`),this.program=e.createProgram(),e.attachShader(this.program,p),e.attachShader(this.program,m),e.linkProgram(this.program),a&&!e.getProgramParameter(this.program,e.LINK_STATUS))return console.warn(e.getProgramInfoLog(this.program));e.deleteShader(p),e.deleteShader(m),this.uniformLocations=new Map;let g=s||e.getProgramParameter(this.program,e.ACTIVE_UNIFORMS);for(let _=0;_<g;_++){let v=e.getActiveUniform(this.program,_);this.uniformLocations.set(v,e.getUniformLocation(this.program,v.name));const y=v.name.match(/(\w+)/g);v.uniformName=y[0],y.length===3?(v.isStructArray=!0,v.structIndex=Number(y[1]),v.structProperty=y[2]):y.length===2&&isNaN(Number(y[1]))&&(v.isStruct=!0,v.structProperty=y[1])}this.attributeLocations=new Map;const x=[],b=o?this.calcAttributesCount(n):e.getProgramParameter(this.program,e.ACTIVE_ATTRIBUTES);for(let _=0;_<b;_++){const v=e.getActiveAttrib(this.program,_),y=e.getAttribLocation(this.program,v.name);x[y]=v.name,this.attributeLocations.set(v,y)}this.attributeOrder=x.join("")}setBlendFunc(e,n,r,i){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=i,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.currentProgram,this.id,this.gl.useProgram(this.program),this.gl.renderer.currentProgram=this.id,this.uniformLocations.forEach((r,i)=>{let s=i.uniformName,o=this.uniforms[s];if(i.isStruct&&(o=o[i.structProperty],s+=`.${i.structProperty}`),i.isStructArray&&(o=o[i.structIndex][i.structProperty],s+=`[${i.structIndex}].${i.structProperty}`),!o)return Sd(`Active uniform ${s} has not been supplied`);if(o&&o.value===void 0)return Sd(`${s} uniform is missing a value parameter`);if(o.value.texture)return n=n+1,o.value.update(n),dl(this.gl,i.type,r,n);if(o.value.length&&o.value[0].texture){const a=[];return o.value.forEach(l=>{n=n+1,l.update(n),a.push(n)}),dl(this.gl,i.type,r,a)}dl(this.gl,i.type,r,o.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function dl(t,e,n,r){r=r.length?eC(r):r;const i=t.renderer.state.uniformLocations.get(n);if(r.length)if(i===void 0||i.length!==r.length)t.renderer.state.uniformLocations.set(n,r.slice(0));else{if(tC(i,r))return;i.set?i.set(r):nC(i,r),t.renderer.state.uniformLocations.set(n,i)}else{if(i===r)return;t.renderer.state.uniformLocations.set(n,r)}switch(e){case 5126:return r.length?t.uniform1fv(n,r):t.uniform1f(n,r);case 35664:return t.uniform2fv(n,r);case 35665:return t.uniform3fv(n,r);case 35666:return t.uniform4fv(n,r);case 35670:case 5124:case 35678:case 35680:return r.length?t.uniform1iv(n,r):t.uniform1i(n,r);case 35671:case 35667:return t.uniform2iv(n,r);case 35672:case 35668:return t.uniform3iv(n,r);case 35673:case 35669:return t.uniform4iv(n,r);case 35674:return t.uniformMatrix2fv(n,!1,r);case 35675:return t.uniformMatrix3fv(n,!1,r);case 35676:return t.uniformMatrix4fv(n,!1,r)}}function wd(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function eC(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const r=e*n;let i=xd[r];i||(xd[r]=i=new Float32Array(r));for(let s=0;s<e;s++)i.set(t[s],s*n);return i}function tC(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function nC(t,e){for(let n=0,r=t.length;n<r;n++)t[n]=e[n]}let pl=0;function Sd(t){pl>100||(console.warn(t),pl++,pl>100&&console.warn("More than 100 program warnings - stopping logs."))}function iC(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function rC(t,e,n,r,i){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t}function sC(t,e){let n=e[0],r=e[1],i=e[2],s=e[3],o=n*n+r*r+i*i+s*s;return o>0&&(o=1/Math.sqrt(o)),t[0]=n*o,t[1]=r*o,t[2]=i*o,t[3]=s*o,t}function oC(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function aC(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function lC(t,e,n){n=n*.5;let r=Math.sin(n);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(n),t}function Pd(t,e,n){let r=e[0],i=e[1],s=e[2],o=e[3],a=n[0],l=n[1],c=n[2],u=n[3];return t[0]=r*u+o*a+i*c-s*l,t[1]=i*u+o*l+s*a-r*c,t[2]=s*u+o*c+r*l-i*a,t[3]=o*u-r*a-i*l-s*c,t}function cC(t,e,n){n*=.5;let r=e[0],i=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=r*l+o*a,t[1]=i*l+s*a,t[2]=s*l-i*a,t[3]=o*l-r*a,t}function uC(t,e,n){n*=.5;let r=e[0],i=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=r*l-s*a,t[1]=i*l+o*a,t[2]=s*l+r*a,t[3]=o*l-i*a,t}function fC(t,e,n){n*=.5;let r=e[0],i=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=r*l+i*a,t[1]=i*l-r*a,t[2]=s*l+o*a,t[3]=o*l-s*a,t}function hC(t,e,n,r){let i=e[0],s=e[1],o=e[2],a=e[3],l=n[0],c=n[1],u=n[2],h=n[3],f,d,p,m,g;return d=i*l+s*c+o*u+a*h,d<0&&(d=-d,l=-l,c=-c,u=-u,h=-h),1-d>1e-6?(f=Math.acos(d),p=Math.sin(f),m=Math.sin((1-r)*f)/p,g=Math.sin(r*f)/p):(m=1-r,g=r),t[0]=m*i+g*l,t[1]=m*s+g*c,t[2]=m*o+g*u,t[3]=m*a+g*h,t}function dC(t,e){let n=e[0],r=e[1],i=e[2],s=e[3],o=n*n+r*r+i*i+s*s,a=o?1/o:0;return t[0]=-n*a,t[1]=-r*a,t[2]=-i*a,t[3]=s*a,t}function pC(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function mC(t,e){let n=e[0]+e[4]+e[8],r;if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);let s=(i+1)%3,o=(i+2)%3;r=Math.sqrt(e[i*3+i]-e[s*3+s]-e[o*3+o]+1),t[i]=.5*r,r=.5/r,t[3]=(e[s*3+o]-e[o*3+s])*r,t[s]=(e[s*3+i]+e[i*3+s])*r,t[o]=(e[o*3+i]+e[i*3+o])*r}return t}function gC(t,e,n="YXZ"){let r=Math.sin(e[0]*.5),i=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),o=Math.cos(e[1]*.5),a=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=r*o*l+i*s*a,t[1]=i*s*l-r*o*a,t[2]=i*o*a+r*s*l,t[3]=i*o*l-r*s*a):n==="YXZ"?(t[0]=r*o*l+i*s*a,t[1]=i*s*l-r*o*a,t[2]=i*o*a-r*s*l,t[3]=i*o*l+r*s*a):n==="ZXY"?(t[0]=r*o*l-i*s*a,t[1]=i*s*l+r*o*a,t[2]=i*o*a+r*s*l,t[3]=i*o*l-r*s*a):n==="ZYX"?(t[0]=r*o*l-i*s*a,t[1]=i*s*l+r*o*a,t[2]=i*o*a-r*s*l,t[3]=i*o*l+r*s*a):n==="YZX"?(t[0]=r*o*l+i*s*a,t[1]=i*s*l+r*o*a,t[2]=i*o*a-r*s*l,t[3]=i*o*l-r*s*a):n==="XZY"&&(t[0]=r*o*l-i*s*a,t[1]=i*s*l-r*o*a,t[2]=i*o*a+r*s*l,t[3]=i*o*l+r*s*a),t}const vC=iC,bC=rC,_C=oC,yC=sC;class xC extends Array{constructor(e=0,n=0,r=0,i=1){return super(e,n,r,i),this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this[0]=e,this.onChange()}set y(e){this[1]=e,this.onChange()}set z(e){this[2]=e,this.onChange()}set w(e){this[3]=e,this.onChange()}identity(){return aC(this),this.onChange(),this}set(e,n,r,i){return e.length?this.copy(e):(bC(this,e,n,r,i),this.onChange(),this)}rotateX(e){return cC(this,this,e),this.onChange(),this}rotateY(e){return uC(this,this,e),this.onChange(),this}rotateZ(e){return fC(this,this,e),this.onChange(),this}inverse(e=this){return dC(this,e),this.onChange(),this}conjugate(e=this){return pC(this,e),this.onChange(),this}copy(e){return vC(this,e),this.onChange(),this}normalize(e=this){return yC(this,e),this.onChange(),this}multiply(e,n){return n?Pd(this,e,n):Pd(this,this,e),this.onChange(),this}dot(e){return _C(this,e)}fromMatrix3(e){return mC(this,e),this.onChange(),this}fromEuler(e){return gC(this,e,e.order),this}fromAxisAngle(e,n){return lC(this,e,n),this}slerp(e,n){return hC(this,this,e,n),this}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const wC=1e-6;function SC(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function PC(t,e,n,r,i,s,o,a,l,c,u,h,f,d,p,m,g){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=s,t[5]=o,t[6]=a,t[7]=l,t[8]=c,t[9]=u,t[10]=h,t[11]=f,t[12]=d,t[13]=p,t[14]=m,t[15]=g,t}function TC(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function EC(t,e){let n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],m=e[13],g=e[14],x=e[15],b=n*a-r*o,_=n*l-i*o,v=n*c-s*o,y=r*l-i*a,w=r*c-s*a,P=i*c-s*l,T=u*m-h*p,R=u*g-f*p,k=u*x-d*p,D=h*g-f*m,M=h*x-d*m,z=f*x-d*g,S=b*z-_*M+v*D+y*k-w*R+P*T;return S?(S=1/S,t[0]=(a*z-l*M+c*D)*S,t[1]=(i*M-r*z-s*D)*S,t[2]=(m*P-g*w+x*y)*S,t[3]=(f*w-h*P-d*y)*S,t[4]=(l*k-o*z-c*R)*S,t[5]=(n*z-i*k+s*R)*S,t[6]=(g*v-p*P-x*_)*S,t[7]=(u*P-f*v+d*_)*S,t[8]=(o*M-a*k+c*T)*S,t[9]=(r*k-n*M-s*T)*S,t[10]=(p*w-m*v+x*b)*S,t[11]=(h*v-u*w-d*b)*S,t[12]=(a*R-o*D-l*T)*S,t[13]=(n*D-r*R+i*T)*S,t[14]=(m*_-p*y-g*b)*S,t[15]=(u*y-h*_+f*b)*S,t):null}function CC(t){let e=t[0],n=t[1],r=t[2],i=t[3],s=t[4],o=t[5],a=t[6],l=t[7],c=t[8],u=t[9],h=t[10],f=t[11],d=t[12],p=t[13],m=t[14],g=t[15],x=e*o-n*s,b=e*a-r*s,_=e*l-i*s,v=n*a-r*o,y=n*l-i*o,w=r*l-i*a,P=c*p-u*d,T=c*m-h*d,R=c*g-f*d,k=u*m-h*p,D=u*g-f*p,M=h*g-f*m;return x*M-b*D+_*k+v*R-y*T+w*P}function Td(t,e,n){let r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],m=e[12],g=e[13],x=e[14],b=e[15],_=n[0],v=n[1],y=n[2],w=n[3];return t[0]=_*r+v*a+y*h+w*m,t[1]=_*i+v*l+y*f+w*g,t[2]=_*s+v*c+y*d+w*x,t[3]=_*o+v*u+y*p+w*b,_=n[4],v=n[5],y=n[6],w=n[7],t[4]=_*r+v*a+y*h+w*m,t[5]=_*i+v*l+y*f+w*g,t[6]=_*s+v*c+y*d+w*x,t[7]=_*o+v*u+y*p+w*b,_=n[8],v=n[9],y=n[10],w=n[11],t[8]=_*r+v*a+y*h+w*m,t[9]=_*i+v*l+y*f+w*g,t[10]=_*s+v*c+y*d+w*x,t[11]=_*o+v*u+y*p+w*b,_=n[12],v=n[13],y=n[14],w=n[15],t[12]=_*r+v*a+y*h+w*m,t[13]=_*i+v*l+y*f+w*g,t[14]=_*s+v*c+y*d+w*x,t[15]=_*o+v*u+y*p+w*b,t}function AC(t,e,n){let r=n[0],i=n[1],s=n[2],o,a,l,c,u,h,f,d,p,m,g,x;return e===t?(t[12]=e[0]*r+e[4]*i+e[8]*s+e[12],t[13]=e[1]*r+e[5]*i+e[9]*s+e[13],t[14]=e[2]*r+e[6]*i+e[10]*s+e[14],t[15]=e[3]*r+e[7]*i+e[11]*s+e[15]):(o=e[0],a=e[1],l=e[2],c=e[3],u=e[4],h=e[5],f=e[6],d=e[7],p=e[8],m=e[9],g=e[10],x=e[11],t[0]=o,t[1]=a,t[2]=l,t[3]=c,t[4]=u,t[5]=h,t[6]=f,t[7]=d,t[8]=p,t[9]=m,t[10]=g,t[11]=x,t[12]=o*r+u*i+p*s+e[12],t[13]=a*r+h*i+m*s+e[13],t[14]=l*r+f*i+g*s+e[14],t[15]=c*r+d*i+x*s+e[15]),t}function zC(t,e,n){let r=n[0],i=n[1],s=n[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function RC(t,e,n,r){let i=r[0],s=r[1],o=r[2],a=Math.hypot(i,s,o),l,c,u,h,f,d,p,m,g,x,b,_,v,y,w,P,T,R,k,D,M,z,S,A;return Math.abs(a)<wC?null:(a=1/a,i*=a,s*=a,o*=a,l=Math.sin(n),c=Math.cos(n),u=1-c,h=e[0],f=e[1],d=e[2],p=e[3],m=e[4],g=e[5],x=e[6],b=e[7],_=e[8],v=e[9],y=e[10],w=e[11],P=i*i*u+c,T=s*i*u+o*l,R=o*i*u-s*l,k=i*s*u-o*l,D=s*s*u+c,M=o*s*u+i*l,z=i*o*u+s*l,S=s*o*u-i*l,A=o*o*u+c,t[0]=h*P+m*T+_*R,t[1]=f*P+g*T+v*R,t[2]=d*P+x*T+y*R,t[3]=p*P+b*T+w*R,t[4]=h*k+m*D+_*M,t[5]=f*k+g*D+v*M,t[6]=d*k+x*D+y*M,t[7]=p*k+b*D+w*M,t[8]=h*z+m*S+_*A,t[9]=f*z+g*S+v*A,t[10]=d*z+x*S+y*A,t[11]=p*z+b*S+w*A,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function OC(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function wv(t,e){let n=e[0],r=e[1],i=e[2],s=e[4],o=e[5],a=e[6],l=e[8],c=e[9],u=e[10];return t[0]=Math.hypot(n,r,i),t[1]=Math.hypot(s,o,a),t[2]=Math.hypot(l,c,u),t}function MC(t){let e=t[0],n=t[1],r=t[2],i=t[4],s=t[5],o=t[6],a=t[8],l=t[9],c=t[10];const u=e*e+n*n+r*r,h=i*i+s*s+o*o,f=a*a+l*l+c*c;return Math.sqrt(Math.max(u,h,f))}const FC=function(){const t=[0,0,0];return function(e,n){let r=t;wv(r,n);let i=1/r[0],s=1/r[1],o=1/r[2],a=n[0]*i,l=n[1]*s,c=n[2]*o,u=n[4]*i,h=n[5]*s,f=n[6]*o,d=n[8]*i,p=n[9]*s,m=n[10]*o,g=a+h+m,x=0;return g>0?(x=Math.sqrt(g+1)*2,e[3]=.25*x,e[0]=(f-p)/x,e[1]=(d-c)/x,e[2]=(l-u)/x):a>h&&a>m?(x=Math.sqrt(1+a-h-m)*2,e[3]=(f-p)/x,e[0]=.25*x,e[1]=(l+u)/x,e[2]=(d+c)/x):h>m?(x=Math.sqrt(1+h-a-m)*2,e[3]=(d-c)/x,e[0]=(l+u)/x,e[1]=.25*x,e[2]=(f+p)/x):(x=Math.sqrt(1+m-a-h)*2,e[3]=(l-u)/x,e[0]=(d+c)/x,e[1]=(f+p)/x,e[2]=.25*x),e}}();function kC(t,e,n,r){let i=e[0],s=e[1],o=e[2],a=e[3],l=i+i,c=s+s,u=o+o,h=i*l,f=i*c,d=i*u,p=s*c,m=s*u,g=o*u,x=a*l,b=a*c,_=a*u,v=r[0],y=r[1],w=r[2];return t[0]=(1-(p+g))*v,t[1]=(f+_)*v,t[2]=(d-b)*v,t[3]=0,t[4]=(f-_)*y,t[5]=(1-(h+g))*y,t[6]=(m+x)*y,t[7]=0,t[8]=(d+b)*w,t[9]=(m-x)*w,t[10]=(1-(h+p))*w,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function LC(t,e){let n=e[0],r=e[1],i=e[2],s=e[3],o=n+n,a=r+r,l=i+i,c=n*o,u=r*o,h=r*a,f=i*o,d=i*a,p=i*l,m=s*o,g=s*a,x=s*l;return t[0]=1-h-p,t[1]=u+x,t[2]=f-g,t[3]=0,t[4]=u-x,t[5]=1-c-p,t[6]=d+m,t[7]=0,t[8]=f+g,t[9]=d-m,t[10]=1-c-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function IC(t,e,n,r,i){let s=1/Math.tan(e/2),o=1/(r-i);return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(i+r)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*i*r*o,t[15]=0,t}function DC(t,e,n,r,i,s,o){let a=1/(e-n),l=1/(r-i),c=1/(s-o);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*a,t[13]=(i+r)*l,t[14]=(o+s)*c,t[15]=1,t}function NC(t,e,n,r){let i=e[0],s=e[1],o=e[2],a=r[0],l=r[1],c=r[2],u=i-n[0],h=s-n[1],f=o-n[2],d=u*u+h*h+f*f;d===0?f=1:(d=1/Math.sqrt(d),u*=d,h*=d,f*=d);let p=l*f-c*h,m=c*u-a*f,g=a*h-l*u;return d=p*p+m*m+g*g,d===0&&(c?a+=1e-6:l?c+=1e-6:l+=1e-6,p=l*f-c*h,m=c*u-a*f,g=a*h-l*u,d=p*p+m*m+g*g),d=1/Math.sqrt(d),p*=d,m*=d,g*=d,t[0]=p,t[1]=m,t[2]=g,t[3]=0,t[4]=h*g-f*m,t[5]=f*p-u*g,t[6]=u*m-h*p,t[7]=0,t[8]=u,t[9]=h,t[10]=f,t[11]=0,t[12]=i,t[13]=s,t[14]=o,t[15]=1,t}class Dn extends Array{constructor(e=1,n=0,r=0,i=0,s=0,o=1,a=0,l=0,c=0,u=0,h=1,f=0,d=0,p=0,m=0,g=1){return super(e,n,r,i,s,o,a,l,c,u,h,f,d,p,m,g),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,r,i,s,o,a,l,c,u,h,f,d,p,m,g){return e.length?this.copy(e):(PC(this,e,n,r,i,s,o,a,l,c,u,h,f,d,p,m,g),this)}translate(e,n=this){return AC(this,n,e),this}rotate(e,n,r=this){return RC(this,r,e,n),this}scale(e,n=this){return zC(this,n,typeof e=="number"?[e,e,e]:e),this}multiply(e,n){return n?Td(this,e,n):Td(this,this,e),this}identity(){return TC(this),this}copy(e){return SC(this,e),this}fromPerspective({fov:e,aspect:n,near:r,far:i}={}){return IC(this,e,n,r,i),this}fromOrthogonal({left:e,right:n,bottom:r,top:i,near:s,far:o}){return DC(this,e,n,r,i,s,o),this}fromQuaternion(e){return LC(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return EC(this,e),this}compose(e,n,r){return kC(this,e,n,r),this}getRotation(e){return FC(e,this),this}getTranslation(e){return OC(e,this),this}getScaling(e){return wv(e,this),this}getMaxScaleOnAxis(){return MC(this)}lookAt(e,n,r){return NC(this,e,n,r),this}determinant(){return CC(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function UC(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const Ed=new Dn;class BC extends Array{constructor(e=0,n=e,r=e,i="YXZ"){return super(e,n,r),this.order=i,this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e,this.onChange()}set y(e){this[1]=e,this.onChange()}set z(e){this[2]=e,this.onChange()}set(e,n=e,r=e){return e.length?this.copy(e):(this[0]=e,this[1]=n,this[2]=r,this.onChange(),this)}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.onChange(),this}reorder(e){return this.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return UC(this,e,n),this}fromQuaternion(e,n=this.order){return Ed.fromQuaternion(e),this.fromRotationMatrix(Ed,n)}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}}class Ea{constructor({scale:e=1}={}){this.parent=null,this.children=[],this.visible=!0,this.castable=!0,this.matrix=new Dn,this.worldMatrix=new Dn,this.matrixAutoUpdate=!0,this.position=new be,this.worldPosition=new be,this.quaternion=new xC,this.scale=new be(e,e,e),this.rotation=new BC,this.up=new be(0,1,0),this.rotation.onChange=()=>this.quaternion.fromEuler(this.rotation),this.quaternion.onChange=()=>this.rotation.fromQuaternion(this.quaternion)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0,this.worldMatrix.getTranslation(this.worldPosition));for(let n=0,r=this.children.length;n<r;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,r=this.children.length;n<r;n++)this.children[n].traverse(e)}decompose(){this.matrix.getTranslation(this.position),this.matrix.getRotation(this.quaternion),this.matrix.getScaling(this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion),this.rotation.fromQuaternion(this.quaternion)}lookAtWorld(e,n=!1){const r=[this.worldMatrix[12],this.worldMatrix[13],this.worldMatrix[14]];n?this.matrix.lookAt(r,e,this.up):this.matrix.lookAt(e,r,this.up),this.matrix.getRotation(this.quaternion),this.rotation.fromQuaternion(this.quaternion)}}function VC(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function HC(t,e){let n=e[0],r=e[1],i=e[2],s=e[3],o=n+n,a=r+r,l=i+i,c=n*o,u=r*o,h=r*a,f=i*o,d=i*a,p=i*l,m=s*o,g=s*a,x=s*l;return t[0]=1-h-p,t[3]=u-x,t[6]=f+g,t[1]=u+x,t[4]=1-c-p,t[7]=d-m,t[2]=f-g,t[5]=d+m,t[8]=1-c-h,t}function jC(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function WC(t,e,n,r,i,s,o,a,l,c){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=s,t[5]=o,t[6]=a,t[7]=l,t[8]=c,t}function GC(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function qC(t,e){let n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=-u*s+a*l,d=c*s-o*l,p=n*h+r*f+i*d;return p?(p=1/p,t[0]=h*p,t[1]=(-u*r+i*c)*p,t[2]=(a*r-i*o)*p,t[3]=f*p,t[4]=(u*n-i*l)*p,t[5]=(-a*n+i*s)*p,t[6]=d*p,t[7]=(-c*n+r*l)*p,t[8]=(o*n-r*s)*p,t):null}function Cd(t,e,n){let r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=n[0],d=n[1],p=n[2],m=n[3],g=n[4],x=n[5],b=n[6],_=n[7],v=n[8];return t[0]=f*r+d*o+p*c,t[1]=f*i+d*a+p*u,t[2]=f*s+d*l+p*h,t[3]=m*r+g*o+x*c,t[4]=m*i+g*a+x*u,t[5]=m*s+g*l+x*h,t[6]=b*r+_*o+v*c,t[7]=b*i+_*a+v*u,t[8]=b*s+_*l+v*h,t}function $C(t,e,n){let r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=n[0],d=n[1];return t[0]=r,t[1]=i,t[2]=s,t[3]=o,t[4]=a,t[5]=l,t[6]=f*r+d*o+c,t[7]=f*i+d*a+u,t[8]=f*s+d*l+h,t}function XC(t,e,n){let r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=Math.sin(n),d=Math.cos(n);return t[0]=d*r+f*o,t[1]=d*i+f*a,t[2]=d*s+f*l,t[3]=d*o-f*r,t[4]=d*a-f*i,t[5]=d*l-f*s,t[6]=c,t[7]=u,t[8]=h,t}function YC(t,e,n){let r=n[0],i=n[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function KC(t,e){let n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],m=e[13],g=e[14],x=e[15],b=n*a-r*o,_=n*l-i*o,v=n*c-s*o,y=r*l-i*a,w=r*c-s*a,P=i*c-s*l,T=u*m-h*p,R=u*g-f*p,k=u*x-d*p,D=h*g-f*m,M=h*x-d*m,z=f*x-d*g,S=b*z-_*M+v*D+y*k-w*R+P*T;return S?(S=1/S,t[0]=(a*z-l*M+c*D)*S,t[1]=(l*k-o*z-c*R)*S,t[2]=(o*M-a*k+c*T)*S,t[3]=(i*M-r*z-s*D)*S,t[4]=(n*z-i*k+s*R)*S,t[5]=(r*k-n*M-s*T)*S,t[6]=(m*P-g*w+x*y)*S,t[7]=(g*v-p*P-x*_)*S,t[8]=(p*w-m*v+x*b)*S,t):null}class QC extends Array{constructor(e=1,n=0,r=0,i=0,s=1,o=0,a=0,l=0,c=1){return super(e,n,r,i,s,o,a,l,c),this}set(e,n,r,i,s,o,a,l,c){return e.length?this.copy(e):(WC(this,e,n,r,i,s,o,a,l,c),this)}translate(e,n=this){return $C(this,n,e),this}rotate(e,n=this){return XC(this,n,e),this}scale(e,n=this){return YC(this,n,e),this}multiply(e,n){return n?Cd(this,e,n):Cd(this,this,e),this}identity(){return GC(this),this}copy(e){return jC(this,e),this}fromMatrix4(e){return VC(this,e),this}fromQuaternion(e){return HC(this,e),this}fromBasis(e,n,r){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],r[0],r[1],r[2]),this}inverse(e=this){return qC(this,e),this}getNormalMatrix(e){return KC(this,e),this}}let ZC=0;class er extends Ea{constructor(e,{geometry:n,program:r,mode:i=e.TRIANGLES,frustumCulled:s=!0,renderOrder:o=0,forceRenderOrder:a=!1,transform:l=null}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=ZC++,l!==null&&(this.position.copy(l.position),this.scale.copy(l.scale),this.rotation.copy(l.rotation),l.parent&&this.setParent(l.parent)),this.geometry=n,this.program=r,this.mode=i,this.frustumCulled=s,this.renderOrder=o,a?this.forceRenderOrder=!0:this.forceRenderOrder=this.renderOrder!==0&&typeof this.renderOrder=="number",this.modelViewMatrix=new Dn,this.normalMatrix=new QC,this.isCameraFliped=!1,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=!1;e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null},isCameraFliped:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.program.uniforms.isCameraFliped.value=e.isFliped,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix,n=e.isFliped);let r=this.program.cullFace&&this.worldMatrix.determinant()<0||n;this.program.use({flipFaces:r}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}}class Sv{constructor(e,n,{parent:r=null,scale:i=1,blendFunc:s={src:e.gl.SRC_ALPHA,dst:e.gl.ONE_MINUS_SRC_ALPHA},transparent:o=!1,depthTest:a=!0,depthWrite:l=!0,renderOrder:c=0,alpha:u=1,hasShadow:h=!1,name:f="PlaneEntity",textureId:d=null,textureScale:p=1}={}){this.gl=e.gl,this.scene=e,this.parent=r||e.root,this.scale=i,this.transparent=o,this.blendFunc=s,this.depthTest=a,this.depthWrite=l,this.textureId=d,this.textureScale=p,this.renderOrder=c,this.hasShadow=h,this.name=f,this.defines={},this.hasShadow&&(this.defines.HAS_SHADOW=1),this.textureId&&(this.defines.HAS_COLORMAP=1),this.shader=new jn(Zt[n],1,this.defines),this.texture=new xt(this.gl),this.alpha=u,this.color=We(0,0,0),this.init()}init(){this.geometry=new xi(this.gl),this.uniforms={uTexture:{value:this.texture},uTime:{value:this.scene.time},uAlpha:{value:this.alpha},uColor:{value:this.color},uRez:{value:[this.scene.width,this.scene.height]}},this.textureId&&Object.assign(this.uniforms,{uTextureScale:{value:this.textureScale}}),this.program=new Ji(this.gl,{vertex:this.shader.vert,fragment:this.shader.frag,debugShader:xe.active,depthTest:this.depthTest,depthWrite:this.depthWrite,transparent:this.transparent,uniforms:this.uniforms}),this.program.cullFace=!1,this.program.setBlendFunc(this.blendFunc.src,this.blendFunc.dst),this.mesh=new er(this.gl,{geometry:this.geometry,program:this.program,renderOrder:this.renderOrder}),this.mesh.scale.set(this.scale,this.scale,this.scale),this.mesh.name=this.name,this.mesh.setParent(this.parent)}onLoaded(){this.textureId&&(this.texture=this.scene.textureLoader.getTexture(this.textureId),this.texture.needsUpdate=!0,this.program.uniforms.uTexture.value=this.texture)}preRender(){this.program.uniforms.uTime.value=this.scene.time,this.program.uniforms.uAlpha.value=this.alpha,this.program.uniforms.uColor.value=this.color,this.program.uniforms.uRez.value=[this.scene.width,this.scene.height]}dispose(){this.mesh.setParent(null),this.geometry.remove(),this.program.remove()}}const Ad={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function zd(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function JC(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function Rd(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?zd(t):Ad[t.toLowerCase()]?zd(Ad[t.toLowerCase()]):(console.warn("Color format not recognised",t),[0,0,0]):JC(t)}const it=t=>{if(/^rgb/.test(t)){const e=t.replace(/^rgba?\(|\s+|\)$/g,"").split(",");let n=`#${((1<<24)+(parseInt(e[0],10)<<16)+(parseInt(e[1],10)<<8)+parseInt(e[2],10)).toString(16).slice(1)}`;if(e[4]){const i=(Math.round(255)+65536).toString(16).substr(-2).toUpperCase();n+=i}return n}return t};function ml(t){var e=t.toString(16);return e.length==1?"0"+e:e}function eA(t,e,n){return"#"+ml(t)+ml(e)+ml(n)}class ke extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...Rd(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}getHex(){return eA(Math.round(this[0]*255),Math.round(this[1]*255),Math.round(this[2]*255))}getRGBA(){return[this[0],this[1],this[2],1]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(Rd(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class Pv{constructor(e,{volumeCorner:n=new be(-5,-5,-5),volumeSize:r=new be(10,10,10),wind:i=new be(0,0,0),count:s=1e3,gravity:o=3,color:a="#fbb13e",color1:l="#FF0000",timeScale:c=1,name:u="Fairy Dust",meshId:h=0,noiseIntensity:f=1,noiseFrenquency:d=.1,fadeDistance:p=2,particleOpacity:m=.75,offsetX:g=0,offsetY:x=0,offsetZ:b=0,particleScale:_=10,alpha:v=1,parent:y=!1}={}){this.gl=e.gl,this.scene=e,this.transparent=!0,this.depthTest=!0,this.depthWrite=!1,this.shader=new jn(Zt.fairyDust),this.count=s,this.offset=new be,this.wind=i,this.volumeCorner=n,this.volumeSize=r,this.gravity=o,this.timeScale=c,this.color=a,this.color1=l,this.name=u,this.meshId=h,this.alpha=v,this.offsetX=g,this.offsetY=x,this.offsetZ=b,this.time=0,this.noiseIntensity=f,this.noiseFrenquency=d,this.fadeDistance=p,this.particleOpacity=m,this.particleScale=_,this.pixelRatio=this.scene.dpr,this.parent=y||e.root,this.initConfig(),this.createParticles(),this.init()}initConfig(){this.config={"Overwrite Colors":{value:!1,type:"bool"},count:{value:1e3,params:{min:1,max:1e3,step:1}},color:{value:this.scene.colors.dustColor0,params:{}},color1:{value:this.scene.colors.dustColor1,params:{}},wind_X:{value:0,params:{min:-30,max:30,step:.1}},wind_Y:{value:0,params:{min:-30,max:30,step:.1}},wind_Z:{value:0,params:{min:-30,max:30,step:.1}},TimeScale:{value:.5,params:{min:0,max:2,step:.01}},Gravity:{value:1,params:{min:-100,max:100,step:.1}},FadeDistance:{value:1,params:{min:0,max:1e3,step:1}},NoiseIntensity:{value:.1,params:{min:0,max:150,step:.1}},NoiseFrenquency:{value:30,params:{min:0,max:2,step:.01}},ParticleOpacity:{value:1,params:{min:0,max:1,step:.01}},ParticleScale:{value:20,params:{min:0,max:1e3,step:1}}}}createParticles(){this.count=this.config.count.value;let e=[],n=[];for(;this.count--;)e.push(Math.random()*this.volumeSize[0]-this.volumeSize[0]/2),e.push(Math.random()*this.volumeSize[1]-this.volumeSize[1]/2),e.push(Math.random()*this.volumeSize[2]-this.volumeSize[2]/2),n.push(Math.random()),n.push(Math.random()),n.push(Math.random()),n.push(Math.random());this.vertices=new Float32Array(e),this.seeds=new Float32Array(n)}init(){const e={position:{size:3,data:this.vertices},seeds:{size:4,data:this.seeds}};this.geometry=new Ta(this.gl,e),this.program=new Ji(this.gl,{vertex:this.shader.vert,fragment:this.shader.frag,depthTest:this.depthTest,depthWrite:this.depthWrite,transparent:this.transparent,uniforms:{uTime:{value:this.scene.time},uVolumeCorner:{value:this.volumeCorner},uVolumeSize:{value:this.volumeSize},uOffset:{value:this.offset},uColor:{value:new ke(this.color)},uColor1:{value:new ke(this.color1)},uPixelRatio:{value:this.pixelRatio},uAlpha:{value:this.alpha},uNoiseIntensity:{value:this.noiseIntensity},uNoiseFrequency:{value:this.noiseFrenquency},uTimeScale:{value:this.timeScale},uParticleOpacity:{value:this.particleOpacity},uFadeDistance:{value:this.fadeDistance},uParticleScale:{value:this.particleScale}}}),this.program.cullFace=!1,this.mesh=new er(this.gl,{geometry:this.geometry,program:this.program,mode:this.gl.POINTS}),this.mesh.position.z=this.offsetZ,this.mesh.setParent(this.parent)}initGui(){xe.addBlade(this.config,`${this.scene.name} - ${this.name}`,1)}onLoaded(){this.initGui()}preRender(){this.config["Overwrite Colors"].value?(this.program.uniforms.uColor.value=new ke(this.config.color.value),this.program.uniforms.uColor1.value=new ke(this.config.color1.value)):(this.program.uniforms.uColor.value=new ke(this.scene.colors.dustColor0),this.program.uniforms.uColor1.value=new ke(this.scene.colors.dustColor1)),this.wind[0]=this.config.wind_X.value,this.wind[1]=this.config.wind_Y.value,this.wind[2]=this.config.wind_Z.value,this.timeScale=this.config.TimeScale.value,this.gravity=this.config.Gravity.value,this.fadeDistance=this.config.FadeDistance.value,this.noiseIntensity=this.config.NoiseIntensity.value,this.noiseFrenquency=this.config.NoiseFrenquency.value,this.time+=this.scene.dt/1e3,this.offset[0]=this.wind[0]*this.time*this.timeScale,this.offset[1]=(this.wind[1]+this.gravity)*this.time*this.timeScale,this.offset[2]=this.wind[2]*this.time*this.timeScale,this.program.uniforms.uTime.value=this.scene.time,this.program.uniforms.uFadeDistance.value=this.fadeDistance,this.program.uniforms.uNoiseIntensity.value=this.noiseIntensity,this.program.uniforms.uNoiseFrequency.value=this.noiseFrenquency,this.program.uniforms.uTimeScale.value=this.timeScale,this.program.uniforms.uOffset.value=this.offset,this.program.uniforms.uParticleOpacity.value=this.config.ParticleOpacity.value,this.program.uniforms.uParticleScale.value=this.config.ParticleScale.value}}function Bo(t,e,n){return Math.min(n,Math.max(e,t))}const at=[];for(var Qr=0;Qr<256;Qr++)at[Qr]=(Qr<16?"0":"")+Qr.toString(16);function Vo(){var t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return at[t&255]+at[t>>8&255]+at[t>>16&255]+at[t>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[n&63|128]+at[n>>8&255]+"-"+at[n>>16&255]+at[n>>24&255]+at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]}function tA(t){let e=0;for(let r=0;r<t.length;r++)e=e+t[r];const n=e/t.length;return n!==1/0?n:0}const po=xa();class nA{constructor(e){this.cursor=zi(0,0),this.lastCursor=zi(0,0),this.velocity=zi(0,0),this.dampedCursor=zi(.5,.5),this.target=e||window,this.wheelVelocity=zi(0,0),this.wheel=zi(0,0),this.lastWheel=zi(0,0),this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight,this.isDown=!1,this.wheelDir=null,this.wheelConfigBy=.07,this.wheelSpeed=.35,this.isWheelLock=!1,this.normalizeWheel=0,this.current=0,this.maxWheel=3750,this.emitter={},this.preventDamping=!1,Xs(this.emitter),this.on=this.emitter.on.bind(this.emitter),this.off=this.emitter.off.bind(this.emitter),Pn.subscribe("mouse",()=>{this.update()}),this.config={damping:{value:.03,params:{min:0,max:.05,step:.001}}},this.initEvents(),window.__debugMouse=this}initEvents(){Uo?(this.target.addEventListener("touchstart",e=>{this.onDown(e.touches[0])}),this.target.addEventListener("touchend",e=>{this.onUp(e.touches[0])}),this.target.addEventListener("touchmove",e=>{this.onMouve(e.touches[0])})):(this.target.addEventListener("mousedown",e=>{this.onDown(e)}),this.target.addEventListener("mousemove",e=>{this.onMouve(e)}),this.target.addEventListener("mouseup",e=>{this.onUp(e)}),this.target.addEventListener("wheel",e=>{this.onWheel(e)},{passive:!1})),this.target.addEventListener("click",()=>{this.emitter.emit("click")}),this.target.addEventListener("resize",()=>{this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight})}onDown(e){this.cursor[0]=(e.clientX/this.screenWidth-.5)*2,this.cursor[1]=(e.clientY/this.screenHeight-.5)*2,this.lastCursor[0]=this.cursor[0],this.lastCursor[1]=this.cursor[1],this.isDown=!0,this.emitter.emit("down",this)}onUp(e){this.isDown=!1,this.emitter.emit("up",this)}onWheel(e){this.isWheelLock||(this.lastWheel[0]=this.wheel[0],this.lastWheel[1]=this.wheel[1],this.wheel[0]=e.deltaX,this.wheel[1]=e.deltaY,this.wheelDir=e.deltaY<0?"up":"down",this.current+=e.deltaY*this.wheelConfigBy*this.wheelSpeed,this.current=Bo(this.current,0,this.maxWheel),this.normalizeWheel=this.current/this.maxWheel,this.emitter.emit("wheel",this))}onMouve(e){if(this.cursor[0]=(e.clientX/this.screenWidth-.5)*2,this.cursor[1]=(e.clientY/this.screenHeight-.5)*2,this.emitter.emit("mouve",this),this.isDown&&this.emitter.emit("drag",this),!this.isWheelLock&&Uo){let n=(this.cursor[1]-this.lastCursor[1])*-.01;this.normalizeWheel=Bo(n+this.normalizeWheel,0,1)}}update(){this.velocity[0]=this.cursor[0]-this.lastCursor[0],this.velocity[1]=this.cursor[1]-this.lastCursor[1],this.wheelVelocity[0]=this.wheel[0]-this.lastWheel[0],this.wheelVelocity[1]=this.wheel[1]-this.lastWheel[1],this.lastCursor[0]=this.cursor[0],this.lastCursor[1]=this.cursor[1],this.preventDamping||(dE(po,this.cursor,this.dampedCursor),hE(po,po,this.config.damping.value),uE(this.dampedCursor,this.dampedCursor,po))}}const je=new nA,iA=new Dn,rA=new be,sA=new be;class oA extends Ea{constructor(e,{near:n=.1,far:r=100,fov:i=45,aspect:s=1,left:o,right:a,bottom:l,top:c,zoom:u=1}={}){super(),Object.assign(this,{near:n,far:r,fov:i,aspect:s,left:o,right:a,bottom:l,top:c,zoom:u}),this.projectionMatrix=new Dn,this.viewMatrix=new Dn,this.projectionViewMatrix=new Dn,this.worldPosition=new be,this.isFliped=!1,this.type=o||a?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:e=this.near,far:n=this.far,fov:r=this.fov,aspect:i=this.aspect}={}){return Object.assign(this,{near:e,far:n,fov:r,aspect:i}),this.projectionMatrix.fromPerspective({fov:r*(Math.PI/180),aspect:i,near:e,far:n}),this.type="perspective",this}orthographic({near:e=this.near,far:n=this.far,left:r=this.left,right:i=this.right,bottom:s=this.bottom,top:o=this.top,zoom:a=this.zoom}={}){return Object.assign(this,{near:e,far:n,left:r,right:i,bottom:s,top:o,zoom:a}),r/=a,i/=a,s/=a,o/=a,this.projectionMatrix.fromOrthogonal({left:r,right:i,bottom:s,top:o,near:e,far:n}),this.type="orthographic",this}updateMatrixWorld(e=!1){return super.updateMatrixWorld(),e&&(this.worldMatrix[1]*=-1,this.worldMatrix[5]*=-1,this.worldMatrix[9]*=-1,this.worldMatrix[13]*=-1),this.isFliped=e,this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}lookAt(e){return super.lookAt(e,!0),this}project(e){return e.applyMatrix4(this.viewMatrix),e.applyMatrix4(this.projectionMatrix),this}unproject(e){return e.applyMatrix4(iA.inverse(this.projectionMatrix)),e.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new be,new be,new be,new be,new be,new be]);const e=this.projectionViewMatrix;this.frustum[0].set(e[3]-e[0],e[7]-e[4],e[11]-e[8]).constant=e[15]-e[12],this.frustum[1].set(e[3]+e[0],e[7]+e[4],e[11]+e[8]).constant=e[15]+e[12],this.frustum[2].set(e[3]+e[1],e[7]+e[5],e[11]+e[9]).constant=e[15]+e[13],this.frustum[3].set(e[3]-e[1],e[7]-e[5],e[11]-e[9]).constant=e[15]-e[13],this.frustum[4].set(e[3]-e[2],e[7]-e[6],e[11]-e[10]).constant=e[15]-e[14],this.frustum[5].set(e[3]+e[2],e[7]+e[6],e[11]+e[10]).constant=e[15]+e[14];for(let n=0;n<6;n++){const r=1/this.frustum[n].distance();this.frustum[n].multiply(r),this.frustum[n].constant*=r}}frustumIntersectsMesh(e){if(!e.geometry.attributes.position||((!e.geometry.bounds||e.geometry.bounds.radius===1/0)&&e.geometry.computeBoundingSphere(),!e.geometry.bounds))return!0;const n=rA;n.copy(e.geometry.bounds.center),n.applyMatrix4(e.worldMatrix);const r=e.geometry.bounds.radius*e.worldMatrix.getMaxScaleOnAxis();return this.frustumIntersectsSphere(n,r)}frustumIntersectsSphere(e,n){const r=sA;for(let i=0;i<6;i++){const s=this.frustum[i];if(r.copy(s).dot(e)+s.constant<-n)return!1}return!0}}const aA=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],lA=[0,1,2,0,2,3],cA=[0,1,0,0,1,0,1,1];$i();class Tv{constructor(e,{parent:n=null,blendFunc:r={},transparent:i=!1,depthTest:s=!1,depthWrite:o=!1,alpha:a=1,name:l="Background"}={}){this.gl=e.gl,this.scene=e,this.transparent=i,this.blendFunc=r,this.depthTest=s,this.depthWrite=o,this.name=l,this.parent=n||e.root,this.viewDirProjInverse=$i(),this.shader=new jn(Zt.background),this.texture=new xt(this.gl),this.alpha=a,this.time=0,this.speed=0,this.pageOffset=0,this.config={"Overwrite Colors":{value:!1,type:"bool"},Color1:{value:this.scene.colors.backgroundColor1,params:{}},Color2:{value:this.scene.colors.backgroundColor2,params:{}},Color3:{value:this.scene.colors.backgroundColor3,params:{}},Color4:{value:this.scene.colors.backgroundColor4,params:{}},Opacity:{value:1,params:{min:0,max:1,step:.01}}},this.init()}init(){this.geometry=new xi(this.gl);const e={position:{size:3,data:new Float32Array(aA)},uv:{size:2,data:new Float32Array(cA)},index:{data:new Uint16Array(lA)}};this.geometry=new Ta(this.gl,e),this.program=new Ji(this.gl,{vertex:this.shader.vert,fragment:this.shader.frag,depthTest:this.depthTest,depthWrite:this.depthWrite,transparent:this.transparent,uniforms:{uTextureNoise:{value:this.texture},uTime:{value:this.scene.time},uViewDirProjInverse:{value:this.viewDirProjInverse},uRez:{value:[this.scene.width,this.scene.height]},uMouse:{value:je.cursor},uColor1:{value:[0,0,0]},uColor2:{value:[0,0,0]},uColor3:{value:[0,0,0]},uColor4:{value:[0,0,0]},uAlpha:this.config.Opacity}}),this.program.cullFace=!1,this.mesh=new er(this.gl,{geometry:this.geometry,program:this.program,renderOrder:-1}),this.mesh.name=this.name,this.mesh.setParent(this.parent)}initGui(){xe.addBlade(this.config,`${this.scene.name} - ${this.name}`,1)}onLoaded(){this.texture=this.scene.textureLoader.getTexture("noise_blue"),this.texture.needsUpdate=!0,this.program.uniforms.uTextureNoise.value=this.texture,this.initGui()}preRender(){this.speed+=((window.pageYOffset-this.pageOffset)*.2-this.speed)*.05,this.pageOffset=window.pageYOffset,this.time+=this.scene.dt/1e3*(1+this.speed),this.program.uniforms.uTime.value=this.time,this.program.uniforms.uRez.value=[this.scene.width,this.scene.height],this.program.uniforms.uMouse.value=je.cursor,this.config["Overwrite Colors"].value?(this.program.uniforms.uColor1.value=new ke(this.config.Color1.value),this.program.uniforms.uColor2.value=new ke(this.config.Color2.value),this.program.uniforms.uColor3.value=new ke(this.config.Color3.value),this.program.uniforms.uColor4.value=new ke(this.config.Color4.value)):(this.program.uniforms.uColor1.value=new ke(this.scene.colors.backgroundColor1),this.program.uniforms.uColor2.value=new ke(this.scene.colors.backgroundColor2),this.program.uniforms.uColor3.value=new ke(this.scene.colors.backgroundColor3),this.program.uniforms.uColor4.value=new ke(this.scene.colors.backgroundColor4))}dispose(){this.mesh.setParent(null),this.geometry.remove(),this.program.remove()}}class Ev{constructor(e,{parent:n=null,scale:r=1,blendFunc:i={src:e.gl.ONE,dst:e.gl.ONE_MINUS_SRC_ALPHA},transparent:s=!0,depthTest:o=!1,depthWrite:a=!1,renderOrder:l=0,alpha:c=1,hasShadow:u=!1,name:h="ParticlesFlow"}={}){this.gl=e.gl,this.scene=e,this.parent=n||e.root,this.scale=r,this.transparent=s,this.blendFunc=i,this.depthTest=o,this.depthWrite=a,this.renderOrder=l,this.hasShadow=u,this.name=h,this.pageOffset=0,this.speed=0,this.timeScale=1,this.time=0,this.defines={},this.shader=new jn(Zt.particlesFlow,1,this.defines),this.texture=new xt(this.gl),this.alpha=c,this.config={"Overwrite Colors":{value:!1,type:"bool"},Color1:{value:this.scene.colors.spiritColor0,params:{}},Color2:{value:this.scene.colors.spiritColor1,params:{}},Opacity:{value:.2,params:{min:0,max:1,step:.01}},NoiseIntensity:{value:2.34,params:{min:0,max:5,step:.01}},NoiseFrequency:{value:.18,params:{min:0,max:2,step:.01}},ParticlesSize:{value:12,params:{min:0,max:30,step:1}},Bokeh:{value:17,params:{min:0,max:100,step:1}},Focus:{value:10,params:{min:0,max:25,step:.01}},FocusRange:{value:15,params:{min:0,max:20,step:.1}}},this.init()}init(){this.geometry=new xi(this.gl,{width:20,height:7.5,widthSegments:100,heightSegments:30}),this.uniforms={uTime:{value:this.scene.time},uColor:{value:this.color},uRez:{value:[this.scene.width,this.scene.height]},uColor1:{value:[0,0,0]},uColor2:{value:[0,0,0]},uAlpha:this.config.Opacity,uNoiseIntensity:this.config.NoiseIntensity,uNoiseFrequency:this.config.NoiseFrequency,uParticlesSize:this.config.ParticlesSize,uBokeh:this.config.Bokeh,uFocus:this.config.Focus,uFocusRange:this.config.FocusRange},this.program=new Ji(this.gl,{vertex:this.shader.vert,fragment:this.shader.frag,debugShader:xe.active,depthTest:this.depthTest,depthWrite:this.depthWrite,transparent:this.transparent,uniforms:this.uniforms}),this.program.cullFace=!1,this.program.setBlendFunc(this.blendFunc.src,this.blendFunc.dst),this.mesh=new er(this.gl,{geometry:this.geometry,program:this.program,renderOrder:this.renderOrder,forceRenderOrder:!0,mode:this.gl.POINTS}),this.mesh.scale.set(this.scale,this.scale,this.scale),this.mesh.name=this.name,this.mesh.setParent(this.parent)}initGui(){xe.addBlade(this.config,`${this.scene.name} - ${this.name}`,1)}onLoaded(){this.initGui()}preRender(){this.speed+=((window.pageYOffset-this.pageOffset)*.4-this.speed)*.05,this.pageOffset=window.pageYOffset,this.time+=this.scene.dt/1e3*(this.timeScale+this.speed)*.15,this.program.uniforms.uTime.value=this.time,this.program.uniforms.uRez.value=[this.scene.width,this.scene.height],this.program.uniforms.uColor1.value=new ke(this.config.Color1.value),this.program.uniforms.uColor2.value=new ke(this.config.Color2.value),this.config["Overwrite Colors"].value?(this.program.uniforms.uColor1.value=new ke(this.config.Color1.value),this.program.uniforms.uColor2.value=new ke(this.config.Color2.value)):(this.program.uniforms.uColor1.value=new ke(this.scene.colors.particlesFlowColor1),this.program.uniforms.uColor2.value=new ke(this.scene.colors.particlesFlowColor2))}dispose(){this.mesh.setParent(null),this.geometry.remove(),this.program.remove()}}function Rn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Cv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kr={duration:.5,overwrite:!1,delay:0},Fu,bt,nt,Xt=1e8,Be=1/Xt,Tc=Math.PI*2,uA=Tc/4,fA=0,Av=Math.sqrt,hA=Math.cos,dA=Math.sin,st=function(e){return typeof e=="string"},Ze=function(e){return typeof e=="function"},Bn=function(e){return typeof e=="number"},ku=function(e){return typeof e>"u"},Tn=function(e){return typeof e=="object"},zt=function(e){return e!==!1},zv=function(){return typeof window<"u"},mo=function(e){return Ze(e)||st(e)},Rv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_t=Array.isArray,Ec=/(?:-?\.?\d|\.)+/gi,Ov=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mv=/[+-]=-?[.\d]+/,Fv=/[^,'"\[\]\s]+/gi,pA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,Wt,Cc,Lu,Bt={},Ho={},kv,Lv=function(e){return(Ho=Xi(e,Bt))&&Vt},Iu=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},jo=function(e,n){return!n&&console.warn(e)},Iv=function(e,n){return e&&(Bt[e]=n)&&Ho&&(Ho[e]=n)||Bt},Os=function(){return 0},mA={suppressEvents:!0,isStart:!0,kill:!1},yo={suppressEvents:!0,kill:!1},gA={suppressEvents:!0},Du={},fi=[],Ac={},Dv,Lt={},vl={},Od=30,xo=[],Nu="",Uu=function(e){var n=e[0],r,i;if(Tn(n)||Ze(n)||(e=[e]),!(r=(n._gsap||{}).harness)){for(i=xo.length;i--&&!xo[i].targetTest(n););r=xo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new s1(e[i],r)))||e.splice(i,1);return e},Hi=function(e){return e._gsap||Uu(Yt(e))[0]._gsap},Nv=function(e,n,r){return(r=e[n])&&Ze(r)?e[n]():ku(r)&&e.getAttribute&&e.getAttribute(n)||r},Rt=function(e,n){return(e=e.split(",")).forEach(n)||e},Je=function(e){return Math.round(e*1e5)/1e5||0},ct=function(e){return Math.round(e*1e7)/1e7||0},xr=function(e,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},vA=function(e,n){for(var r=n.length,i=0;e.indexOf(n[i])<0&&++i<r;);return i<r},Wo=function(){var e=fi.length,n=fi.slice(0),r,i;for(Ac={},fi.length=0,r=0;r<e;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Uv=function(e,n,r,i){fi.length&&!bt&&Wo(),e.render(n,r,i||bt&&n<0&&(e._initted||e._startAt)),fi.length&&!bt&&Wo()},Bv=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(Fv).length<2?n:st(e)?e.trim():e},Vv=function(e){return e},en=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},bA=function(e){return function(n,r){for(var i in r)i in n||i==="duration"&&e||i==="ease"||(n[i]=r[i])}},Xi=function(e,n){for(var r in n)e[r]=n[r];return e},Md=function t(e,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=Tn(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},Go=function(e,n){var r={},i;for(i in e)i in n||(r[i]=e[i]);return r},gs=function(e){var n=e.parent||Xe,r=e.keyframes?bA(_t(e.keyframes)):en;if(zt(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},_A=function(e,n){for(var r=e.length,i=r===n.length;i&&r--&&e[r]===n[r];);return r<0},Hv=function(e,n,r,i,s){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=n[s];o&&o[s]>a;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=e[r],e[r]=n),n._next?n._next._prev=n:e[i]=n,n._prev=o,n.parent=n._dp=e,n},Ca=function(e,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var s=n._prev,o=n._next;s?s._next=o:e[r]===n&&(e[r]=o),o?o._prev=s:e[i]===n&&(e[i]=s),n._next=n._prev=n.parent=null},bi=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ji=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},yA=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},zc=function(e,n,r,i){return e._startAt&&(bt?e._startAt.revert(yo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,i))},xA=function t(e){return!e||e._ts&&t(e.parent)},Fd=function(e){return e._repeat?Lr(e._tTime,e=e.duration()+e._rDelay)*e:0},Lr=function(e,n){var r=Math.floor(e/=n);return e&&r===e?r-1:r},qo=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Aa=function(e){return e._end=ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Be)||0))},za=function(e,n){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=ct(r._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Aa(e),r._dirty||ji(r,e)),e},jv=function(e,n){var r;if((n._time||n._initted&&!n._dur)&&(r=qo(e.rawTime(),n),(!n._dur||Ys(0,n.totalDuration(),r)-n._tTime>Be)&&n.render(r,!0)),ji(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-Be}},_n=function(e,n,r,i){return n.parent&&bi(n),n._start=ct((Bn(r)?r:r||e!==Xe?jt(e,r,n):e._time)+n._delay),n._end=ct(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Hv(e,n,"_first","_last",e._sort?"_start":0),Rc(n)||(e._recent=n),i||jv(e,n),e._ts<0&&za(e,e._tTime),e},Wv=function(e,n){return(Bt.ScrollTrigger||Iu("scrollTrigger",n))&&Bt.ScrollTrigger.create(n,e)},Gv=function(e,n,r,i,s){if(Vu(e,n,s),!e._initted)return 1;if(!r&&e._pt&&!bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Dv!==Dt.frame)return fi.push(e),e._lazy=[s,i],1},wA=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Rc=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},SA=function(e,n,r,i){var s=e.ratio,o=n<0||!n&&(!e._start&&wA(e)&&!(!e._initted&&Rc(e))||(e._ts<0||e._dp._ts<0)&&!Rc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ys(0,e._tDur,n),u=Lr(l,a),e._yoyo&&u&1&&(o=1-o),u!==Lr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||bt||i||e._zTime===Be||!n&&e._zTime){if(!e._initted&&Gv(e,n,i,r,l))return;for(h=e._zTime,e._zTime=n||(r?Be:0),r||(r=n&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;n<0&&zc(e,n,r,!0),e._onUpdate&&!r&&Kt(e,"onUpdate"),l&&e._repeat&&!r&&e.parent&&Kt(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===o&&(o&&bi(e,1),!r&&!bt&&(Kt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},PA=function(e,n,r){var i;if(r>n)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},Ir=function(e,n,r,i){var s=e._repeat,o=ct(n)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&za(e,e._tTime=e._tDur*a),e.parent&&Aa(e),r||ji(e.parent,e),e},kd=function(e){return e instanceof At?ji(e):Ir(e,e._dur)},TA={_start:0,endTime:Os,totalDuration:Os},jt=function t(e,n,r){var i=e.labels,s=e._recent||TA,o=e.duration()>=Xt?s.endTime(!1):e._dur,a,l,c;return st(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),c=n.substr(-1)==="%",a=n.indexOf("="),l==="<"||l===">"?(a>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(a<0?s:r).totalDuration()/100:1)):a<0?(n in i||(i[n]=o),i[n]):(l=parseFloat(n.charAt(a-1)+n.substr(a+1)),c&&r&&(l=l/100*(_t(r)?r[0]:r).totalDuration()),a>1?t(e,n.substr(0,a-1),r)+l:o+l)):n==null?o:+n},vs=function(e,n,r){var i=Bn(n[1]),s=(i?2:1)+(e<2?0:1),o=n[s],a,l;if(i&&(o.duration=n[1]),o.parent=r,e){for(a=o,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=zt(l.vars.inherit)&&l.parent;o.immediateRender=zt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=n[s-1]}return new rt(n[0],o,n[s+1])},wi=function(e,n){return e||e===0?n(e):n},Ys=function(e,n,r){return r<e?e:r>n?n:r},vt=function(e,n){return!st(e)||!(n=pA.exec(e))?"":n[1]},EA=function(e,n,r){return wi(r,function(i){return Ys(e,n,i)})},Oc=[].slice,qv=function(e,n){return e&&Tn(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Tn(e[0]))&&!e.nodeType&&e!==Wt},CA=function(e,n,r){return r===void 0&&(r=[]),e.forEach(function(i){var s;return st(i)&&!n||qv(i,1)?(s=r).push.apply(s,Yt(i)):r.push(i)})||r},Yt=function(e,n,r){return nt&&!n&&nt.selector?nt.selector(e):st(e)&&!r&&(Cc||!Dr())?Oc.call((n||Lu).querySelectorAll(e),0):_t(e)?CA(e,r):qv(e)?Oc.call(e,0):e?[e]:[]},Mc=function(e){return e=Yt(e)[0]||jo("Invalid scope")||{},function(n){var r=e.current||e.nativeElement||e;return Yt(n,r.querySelectorAll?r:r===e?jo("Invalid scope")||Lu.createElement("div"):e)}},$v=function(e){return e.sort(function(){return .5-Math.random()})},Xv=function(e){if(Ze(e))return e;var n=Tn(e)?e:{each:e},r=Wi(n.ease),i=n.from||0,s=parseFloat(n.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=n.axis,u=i,h=i;return st(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,p){var m=(p||n).length,g=o[m],x,b,_,v,y,w,P,T,R;if(!g){if(R=n.grid==="auto"?0:(n.grid||[1,Xt])[1],!R){for(P=-Xt;P<(P=p[R++].getBoundingClientRect().left)&&R<m;);R--}for(g=o[m]=[],x=l?Math.min(R,m)*u-.5:i%R,b=R===Xt?0:l?m*h/R-.5:i/R|0,P=0,T=Xt,w=0;w<m;w++)_=w%R-x,v=b-(w/R|0),g[w]=y=c?Math.abs(c==="y"?v:_):Av(_*_+v*v),y>P&&(P=y),y<T&&(T=y);i==="random"&&$v(g),g.max=P-T,g.min=T,g.v=m=(parseFloat(n.amount)||parseFloat(n.each)*(R>m?m-1:c?c==="y"?m/R:R:Math.max(R,m/R))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=vt(n.amount||n.each)||0,r=r&&m<0?n1(r):r}return m=(g[f]-g.min)/g.max||0,ct(g.b+(r?r(m):m)*g.v)+g.u}},Fc=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=ct(Math.round(parseFloat(r)/e)*e*n);return(i-i%1)/n+(Bn(r)?0:vt(r))}},Yv=function(e,n){var r=_t(e),i,s;return!r&&Tn(e)&&(i=r=e.radius||Xt,e.values?(e=Yt(e.values),(s=!Bn(e[0]))&&(i*=i)):e=Fc(e.increment)),wi(n,r?Ze(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Xt,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Bn(o)?u:u+vt(o)}:Fc(e))},Kv=function(e,n,r,i){return wi(_t(e)?!n:r===!0?!!(r=0):!i,function(){return _t(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(n-e+r*.99))/r)*r*i)/i})},AA=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(i){return n.reduce(function(s,o){return o(s)},i)}},zA=function(e,n){return function(r){return e(parseFloat(r))+(n||vt(r))}},RA=function(e,n,r){return Zv(e,n,0,1,r)},Qv=function(e,n,r){return wi(r,function(i){return e[~~n(i)]})},OA=function t(e,n,r){var i=n-e;return _t(e)?Qv(e,t(0,e.length),n):wi(r,function(s){return(i+(s-e)%i)%i+e})},MA=function t(e,n,r){var i=n-e,s=i*2;return _t(e)?Qv(e,t(0,e.length-1),n):wi(r,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ms=function(e){for(var n=0,r="",i,s,o,a;~(i=e.indexOf("random(",n));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Fv:Ec),r+=e.substr(n,i-n)+Kv(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),n=o+1;return r+e.substr(n,e.length-n)},Zv=function(e,n,r,i,s){var o=n-e,a=i-r;return wi(s,function(l){return r+((l-e)/o*a||0)})},FA=function t(e,n,r,i){var s=isNaN(e+n)?0:function(d){return(1-d)*e+d*n};if(!s){var o=st(e),a={},l,c,u,h,f;if(r===!0&&(i=1)&&(r=null),o)e={p:e},n={p:n};else if(_t(e)&&!_t(n)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(t(e[c-1],e[c]));h--,s=function(p){p*=h;var m=Math.min(f,~~p);return u[m](p-m)},r=n}else i||(e=Xi(_t(e)?[]:{},e));if(!u){for(l in n)Bu.call(a,e,l,"get",n[l]);s=function(p){return Wu(p,a)||(o?e.p:e)}}}return wi(r,s)},Ld=function(e,n,r){var i=e.labels,s=Xt,o,a,l;for(o in i)a=i[o]-n,a<0==!!r&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Kt=function(e,n,r){var i=e.vars,s=i[n],o=nt,a=e._ctx,l,c,u;if(!!s)return l=i[n+"Params"],c=i.callbackScope||e,r&&fi.length&&Wo(),a&&(nt=a),u=l?s.apply(c,l):s.call(c),nt=o,u},is=function(e){return bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bt),e.progress()<1&&Kt(e,"onInterrupt"),e},dr,kA=function(e){e=!e.name&&e.default||e;var n=e.name,r=Ze(e),i=n&&!r&&e.init?function(){this._props=[]}:e,s={init:Os,render:Wu,add:Bu,kill:KA,modifier:YA,rawVars:0},o={targetTest:0,get:0,getSetter:ju,aliases:{},register:0};if(Dr(),e!==i){if(Lt[n])return;en(i,en(Go(e,s),o)),Xi(i.prototype,Xi(s,Go(e,o))),Lt[i.prop=n]=i,e.targetTest&&(xo.push(i),Du[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Iv(n,i),e.register&&e.register(Vt,i,Ot)},Ue=255,rs={aqua:[0,Ue,Ue],lime:[0,Ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ue],navy:[0,0,128],white:[Ue,Ue,Ue],olive:[128,128,0],yellow:[Ue,Ue,0],orange:[Ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ue,0,0],pink:[Ue,192,203],cyan:[0,Ue,Ue],transparent:[Ue,Ue,Ue,0]},bl=function(e,n,r){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(r-n)*e*6:e<.5?r:e*3<2?n+(r-n)*(2/3-e)*6:n)*Ue+.5|0},Jv=function(e,n,r){var i=e?Bn(e)?[e>>16,e>>8&Ue,e&Ue]:0:rs.black,s,o,a,l,c,u,h,f,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),rs[e])i=rs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ue,i&Ue,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ue,e&Ue]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Ec),!n)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=bl(l+1/3,s,o),i[1]=bl(l,s,o),i[2]=bl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Ov),r&&i.length<4&&(i[3]=1),i}else i=e.match(Ec)||rs.transparent;i=i.map(Number)}return n&&!p&&(s=i[0]/Ue,o=i[1]/Ue,a=i[2]/Ue,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),r&&i.length<4&&(i[3]=1),i},e1=function(e){var n=[],r=[],i=-1;return e.split(hi).forEach(function(s){var o=s.match(hr)||[];n.push.apply(n,o),r.push(i+=o.length+1)}),n.c=r,n},Id=function(e,n,r){var i="",s=(e+i).match(hi),o=n?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Jv(f,n,1))&&o+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),r&&(u=e1(e),l=r.c,l.join(i)!==u.c.join(i)))for(c=e.replace(hi,"1").split(hr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:r).shift());if(!c)for(c=e.split(hi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},hi=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in rs)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),LA=/hsl[a]?\(/,t1=function(e){var n=e.join(" "),r;if(hi.lastIndex=0,hi.test(n))return r=LA.test(n),e[1]=Id(e[1],r),e[0]=Id(e[0],r,e1(e[1])),!0},Fs,Dt=function(){var t=Date.now,e=500,n=33,r=t(),i=r,s=1e3/240,o=s,a=[],l,c,u,h,f,d,p=function m(g){var x=t()-i,b=g===!0,_,v,y,w;if(x>e&&(r+=x-n),i+=x,y=i-r,_=y-o,(_>0||b)&&(w=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,o+=_+(_>=s?4:s-_),v=1),b||(l=c(m)),v)for(d=0;d<a.length;d++)a[d](y,f,w,g)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){kv&&(!Cc&&zv()&&(Wt=Cc=window,Lu=Wt.document||{},Bt.gsap=Vt,(Wt.gsapVersions||(Wt.gsapVersions=[])).push(Vt.version),Lv(Ho||Wt.GreenSockGlobals||!Wt.gsap&&Wt||{}),u=Wt.requestAnimationFrame),l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Fs=1,p(2))},sleep:function(){(u?Wt.cancelAnimationFrame:clearTimeout)(l),Fs=0,c=Os},lagSmoothing:function(g,x){e=g||1/0,n=Math.min(x||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,x,b){var _=x?function(v,y,w,P){g(v,y,w,P),h.remove(_)}:g;return h.remove(g),a[b?"unshift":"push"](_),Dr(),_},remove:function(g,x){~(x=a.indexOf(g))&&a.splice(x,1)&&d>=x&&d--},_listeners:a},h}(),Dr=function(){return!Fs&&Dt.wake()},Te={},IA=/^[\d.\-M][\d.\-,\s]/,DA=/["']/g,NA=function(e){for(var n={},r=e.substr(1,e.length-3).split(":"),i=r[0],s=1,o=r.length,a,l,c;s<o;s++)l=r[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),n[i]=isNaN(c)?c.replace(DA,"").trim():+c,i=l.substr(a+1).trim();return n},UA=function(e){var n=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",n);return e.substring(n,~i&&i<r?e.indexOf(")",r+1):r)},BA=function(e){var n=(e+"").split("("),r=Te[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[NA(n[1])]:UA(e).split(",").map(Bv)):Te._CE&&IA.test(e)?Te._CE("",e):r},n1=function(e){return function(n){return 1-e(1-n)}},i1=function t(e,n){for(var r=e._first,i;r;)r instanceof At?t(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?t(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},Wi=function(e,n){return e&&(Ze(e)?e:Te[e]||BA(e))||n},tr=function(e,n,r,i){r===void 0&&(r=function(l){return 1-n(1-l)}),i===void 0&&(i=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:r,easeInOut:i},o;return Rt(e,function(a){Te[a]=Bt[a]=s,Te[o=a.toLowerCase()]=r;for(var l in s)Te[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Te[a+"."+l]=s[l]}),s},r1=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},_l=function t(e,n,r){var i=n>=1?n:1,s=(r||(e?.3:.45))/(n<1?n:1),o=s/Tc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*dA((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:r1(a);return s=Tc/s,l.config=function(c,u){return t(e,c,u)},l},yl=function t(e,n){n===void 0&&(n=1.70158);var r=function(o){return o?--o*o*((n+1)*o+n)+1:0},i=e==="out"?r:e==="in"?function(s){return 1-r(1-s)}:r1(r);return i.config=function(s){return t(e,s)},i};Rt("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;tr(t+",Power"+(n-1),e?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});Te.Linear.easeNone=Te.none=Te.Linear.easeIn;tr("Elastic",_l("in"),_l("out"),_l());(function(t,e){var n=1/e,r=2*n,i=2.5*n,s=function(a){return a<n?t*a*a:a<r?t*Math.pow(a-1.5/e,2)+.75:a<i?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};tr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);tr("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});tr("Circ",function(t){return-(Av(1-t*t)-1)});tr("Sine",function(t){return t===1?1:-hA(t*uA)+1});tr("Back",yl("in"),yl("out"),yl());Te.SteppedEase=Te.steps=Bt.SteppedEase={config:function(e,n){e===void 0&&(e=1);var r=1/e,i=e+(n?0:1),s=n?1:0,o=1-Be;return function(a){return((i*Ys(0,o,a)|0)+s)*r}}};kr.ease=Te["quad.out"];Rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Nu+=t+","+t+"Params,"});var s1=function(e,n){this.id=fA++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:Nv,this.set=n?n.getSetter:ju},Nr=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Ir(this,+n.duration,1,1),this.data=n.data,nt&&(this._ctx=nt,nt.data.push(this)),Fs||Dt.wake()}var e=t.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,Ir(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(Dr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(za(this,r),!s._dp||s.parent||jv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&_n(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Be||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Uv(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Fd(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Fd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(r,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*s,i):this._repeat?Lr(this._tTime,s)+1:1},e.timeScale=function(r){if(!arguments.length)return this._rts===-Be?0:this._rts;if(this._rts===r)return this;var i=this.parent&&this._ts?qo(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-Be?0:this._rts,this.totalTime(Ys(-this._delay,this._tDur,i),!0),Aa(this),yA(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Be&&(this._tTime-=Be)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_n(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(zt(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qo(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=gA);var i=bt;return bt=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),bt=i,this},e.globalTime=function(r){for(var i=this,s=arguments.length?r:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(r):s},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,kd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,kd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(jt(this,r),zt(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,zt(i))},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-Be:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Be,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,s;return!!(!r||this._ts&&this._initted&&r.isActive()&&(s=r.rawTime(!0))>=i&&s<this.endTime(!0)-Be)},e.eventCallback=function(r,i,s){var o=this.vars;return arguments.length>1?(i?(o[r]=i,s&&(o[r+"Params"]=s),r==="onUpdate"&&(this._onUpdate=i)):delete o[r],this):o[r]},e.then=function(r){var i=this;return new Promise(function(s){var o=Ze(r)?r:Vv,a=function(){var c=i.then;i.then=null,Ze(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){is(this)},t}();en(Nr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Be,_prom:0,_ps:!1,_rts:1});var At=function(t){Cv(e,t);function e(r,i){var s;return r===void 0&&(r={}),s=t.call(this,r)||this,s.labels={},s.smoothChildTiming=!!r.smoothChildTiming,s.autoRemoveChildren=!!r.autoRemoveChildren,s._sort=zt(r.sortChildren),Xe&&_n(r.parent||Xe,Rn(s),i),r.reversed&&s.reverse(),r.paused&&s.paused(!0),r.scrollTrigger&&Wv(Rn(s),r.scrollTrigger),s}var n=e.prototype;return n.to=function(i,s,o){return vs(0,arguments,this),this},n.from=function(i,s,o){return vs(1,arguments,this),this},n.fromTo=function(i,s,o,a){return vs(2,arguments,this),this},n.set=function(i,s,o){return s.duration=0,s.parent=this,gs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rt(i,s,jt(this,o),1),this},n.call=function(i,s,o){return _n(this,rt.delayedCall(0,i,s),o)},n.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new rt(i,o,jt(this,l)),this},n.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,gs(o).immediateRender=zt(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},n.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,gs(a).immediateRender=zt(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},n.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ct(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,m,g,x,b,_,v,y,w,P;if(this!==Xe&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,_=this._ts,x=!_,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=ct(u%g),u===l?(m=this._repeat,f=c):(m=~~(u/g),m&&m===u/g&&(f=c,m--),f>c&&(f=c)),y=Lr(this._tTime,g),!a&&this._tTime&&y!==m&&(y=m),w&&m&1&&(f=c-f,P=1),m!==y&&!this._lock){var T=w&&y&1,R=T===(w&&m&1);if(m<y&&(T=!T),a=T?0:c,this._lock=1,this.render(a||(P?0:ct(m*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kt(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,a=T?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;i1(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=PA(this,ct(a),ct(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&(Kt(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!x){b=0,p&&(u+=this._zTime=-Be);break}}d=p}else{d=this._last;for(var k=i<0?i:f;d;){if(p=d._prev,(d._act||k<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(k-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(k-d._start)*d._ts,s,o||bt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!x){b=0,p&&(u+=this._zTime=k?-Be:Be);break}}d=p}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-Be)._zTime=f>=a?1:-1,this._ts))return this._start=v,Aa(this),this.render(i,s,o);this._onUpdate&&!s&&Kt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&bi(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Kt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,s){var o=this;if(Bn(s)||(s=jt(this,s,i)),!(i instanceof Nr)){if(_t(i))return i.forEach(function(a){return o.add(a,s)}),this;if(st(i))return this.addLabel(i,s);if(Ze(i))i=rt.delayedCall(0,i);else return this}return this!==i?_n(this,i,s):this},n.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Xt);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof rt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},n.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},n.remove=function(i){return st(i)?this.removeLabel(i):Ze(i)?this.killTweensOf(i):(Ca(this,i),i===this._recent&&(this._recent=this._last),ji(this))},n.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(Dt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},n.addLabel=function(i,s){return this.labels[i]=jt(this,s),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,s,o){var a=rt.delayedCall(0,s||Os,o);return a.data="isPause",this._hasPause=1,_n(this,a,jt(this,i))},n.removePause=function(i){var s=this._first;for(i=jt(this,i);s;)s._start===i&&s.data==="isPause"&&bi(s),s=s._next},n.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ii!==a[l]&&a[l].kill(i,s);return this},n.getTweensOf=function(i,s){for(var o=[],a=Yt(i),l=this._first,c=Bn(s),u;l;)l instanceof rt?vA(l._targets,a)&&(c?(!ii||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},n.tweenTo=function(i,s){s=s||{};var o=this,a=jt(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,p=rt.to(o,en({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Be,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&Ir(p,g,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},s));return f?p.render(0):p},n.tweenFromTo=function(i,s,o){return this.tweenTo(s,en({startAt:{time:jt(this,i)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),Ld(this,jt(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),Ld(this,jt(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Be)},n.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ji(this)},n.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return t.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ji(this)},n.totalDuration=function(i){var s=0,o=this,a=o._last,l=Xt,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_n(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ir(o,o===Xe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Xe._ts&&(Uv(Xe,qo(i,Xe)),Dv=Dt.frame),Dt.frame>=Od){Od+=Nt.autoSleep||120;var s=Xe._first;if((!s||!s._ts)&&Nt.autoSleep&&Dt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Dt.sleep()}}},e}(Nr);en(At.prototype,{_lock:0,_hasPause:0,_forcing:0});var VA=function(e,n,r,i,s,o,a){var l=new Ot(this._pt,e,n,0,1,f1,null,s),c=0,u=0,h,f,d,p,m,g,x,b;for(l.b=r,l.e=i,r+="",i+="",(x=~i.indexOf("random("))&&(i=Ms(i)),o&&(b=[r,i],o(b,e,n),r=b[0],i=b[1]),f=r.match(gl)||[];h=gl.exec(i);)p=h[0],m=i.substring(c,h.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:p.charAt(1)==="="?xr(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=gl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Mv.test(i)||x)&&(l.e=0),this._pt=l,l},Bu=function(e,n,r,i,s,o,a,l,c,u){Ze(i)&&(i=i(s||0,e,o));var h=e[n],f=r!=="get"?r:Ze(h)?c?e[n.indexOf("set")||!Ze(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():h,d=Ze(h)?c?qA:c1:Hu,p;if(st(i)&&(~i.indexOf("random(")&&(i=Ms(i)),i.charAt(1)==="="&&(p=xr(f,i)+(vt(f)||0),(p||p===0)&&(i=p))),!u||f!==i||kc)return!isNaN(f*i)&&i!==""?(p=new Ot(this._pt,e,n,+f||0,i-(f||0),typeof h=="boolean"?XA:u1,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!h&&!(n in e)&&Iu(n,i),VA.call(this,e,n,f,i,d,l||Nt.stringFilter,c))},HA=function(e,n,r,i,s){if(Ze(e)&&(e=bs(e,s,n,r,i)),!Tn(e)||e.style&&e.nodeType||_t(e)||Rv(e))return st(e)?bs(e,s,n,r,i):e;var o={},a;for(a in e)o[a]=bs(e[a],s,n,r,i);return o},o1=function(e,n,r,i,s,o){var a,l,c,u;if(Lt[e]&&(a=new Lt[e]).init(s,a.rawVars?n[e]:HA(n[e],i,s,o,r),r,i,o)!==!1&&(r._pt=l=new Ot(r._pt,s,e,0,1,a.render,a,0,a.priority),r!==dr))for(c=r._ptLookup[r._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ii,kc,Vu=function t(e,n,r){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,p=i.keyframes,m=i.autoRevert,g=e._dur,x=e._startAt,b=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:b,y=e._overwrite==="auto"&&!Fu,w=e.timeline,P,T,R,k,D,M,z,S,A,I,B,$,ne;if(w&&(!p||!s)&&(s="none"),e._ease=Wi(s,kr.ease),e._yEase=d?n1(Wi(d===!0?s:d,kr.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!i.runBackwards,!w||p&&!i.stagger){if(S=b[0]?Hi(b[0]).harness:0,$=S&&i[S.prop],P=Go(i,Du),x&&(x._zTime<0&&x.progress(1),n<0&&f&&a&&!m?x.render(-1,!0):x.revert(f&&g?yo:mA),x._lazy=0),o){if(bi(e._startAt=rt.set(b,en({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!x&&zt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(bt||!a&&!m)&&e._startAt.revert(yo),a&&g&&n<=0&&r<=0){n&&(e._zTime=n);return}}else if(f&&g&&!x){if(n&&(a=!1),R=en({overwrite:!1,data:"isFromStart",lazy:a&&!x&&zt(l),immediateRender:a,stagger:0,parent:_},P),$&&(R[S.prop]=$),bi(e._startAt=rt.set(b,R)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(bt?e._startAt.revert(yo):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,Be,Be);else if(!n)return}for(e._pt=e._ptCache=0,l=g&&zt(l)||l&&!g,T=0;T<b.length;T++){if(D=b[T],z=D._gsap||Uu(b)[T]._gsap,e._ptLookup[T]=I={},Ac[z.id]&&fi.length&&Wo(),B=v===b?T:v.indexOf(D),S&&(A=new S).init(D,$||P,e,B,v)!==!1&&(e._pt=k=new Ot(e._pt,D,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(pe){I[pe]=k}),A.priority&&(M=1)),!S||$)for(R in P)Lt[R]&&(A=o1(R,P,e,B,D,v))?A.priority&&(M=1):I[R]=k=Bu.call(e,D,R,"get",P[R],B,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(D,e._op[T]),y&&e._pt&&(ii=e,Xe.killTweensOf(D,I,e.globalTime(n)),ne=!e.parent,ii=0),e._pt&&l&&(Ac[z.id]=1)}M&&h1(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ne,p&&n<=0&&w.render(Xt,!0,!0)},jA=function(e,n,r,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,u,h,f;if(!l)for(l=e._ptCache[n]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return kc=1,e.vars[n]="+=0",Vu(e,a),kc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=r-c.s,u.e&&(u.e=Je(r)+vt(u.e)),u.b&&(u.b=c.s+vt(u.b))},WA=function(e,n){var r=e[0]?Hi(e[0]).harness:0,i=r&&r.aliases,s,o,a,l;if(!i)return n;s=Xi({},n);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},GA=function(e,n,r,i){var s=n.ease||i||"power1.inOut",o,a;if(_t(n))a=r[e]||(r[e]=[]),n.forEach(function(l,c){return a.push({t:c/(n.length-1)*100,v:l,e:s})});else for(o in n)a=r[o]||(r[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:n[o],e:s})},bs=function(e,n,r,i,s){return Ze(e)?e.call(n,r,i,s):st(e)&&~e.indexOf("random(")?Ms(e):e},a1=Nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",l1={};Rt(a1+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return l1[t]=1});var rt=function(t){Cv(e,t);function e(r,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=t.call(this,o?i:gs(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,m=l.defaults,g=l.scrollTrigger,x=l.yoyoEase,b=i.parent||Xe,_=(_t(r)||Rv(r)?Bn(r[0]):"length"in i)?[r]:Yt(r),v,y,w,P,T,R,k,D;if(a._targets=_.length?Uu(_):jo("GSAP target "+r+" not found. https://greensock.com",!Nt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||mo(c)||mo(u)){if(i=a.vars,v=a.timeline=new At({data:"nested",defaults:m||{},targets:b&&b.data==="nested"?b.vars.targets:_}),v.kill(),v.parent=v._dp=Rn(a),v._start=0,f||mo(c)||mo(u)){if(P=_.length,k=f&&Xv(f),Tn(f))for(T in f)~a1.indexOf(T)&&(D||(D={}),D[T]=f[T]);for(y=0;y<P;y++)w=Go(i,l1),w.stagger=0,x&&(w.yoyoEase=x),D&&Xi(w,D),R=_[y],w.duration=+bs(c,Rn(a),y,R,_),w.delay=(+bs(u,Rn(a),y,R,_)||0)-a._delay,!f&&P===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(R,w,k?k(y,R,_):0),v._ease=Te.none;v.duration()?c=u=0:a.timeline=0}else if(p){gs(en(v.vars.defaults,{ease:"none"})),v._ease=Wi(p.ease||i.ease||"none");var M=0,z,S,A;if(_t(p))p.forEach(function(I){return v.to(_,I,">")}),v.duration();else{w={};for(T in p)T==="ease"||T==="easeEach"||GA(T,p[T],w,p.easeEach);for(T in w)for(z=w[T].sort(function(I,B){return I.t-B.t}),M=0,y=0;y<z.length;y++)S=z[y],A={ease:S.e,duration:(S.t-(y?z[y-1].t:0))/100*c},A[T]=S.v,v.to(_,A,M),M+=A.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Fu&&(ii=Rn(a),Xe.killTweensOf(_),ii=0),_n(b,Rn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!p&&a._start===ct(b._time)&&zt(h)&&xA(Rn(a))&&b.data!=="nested")&&(a._tTime=-Be,a.render(Math.max(0,-u)||0)),g&&Wv(Rn(a),g),a}var n=e.prototype;return n.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Be&&!u?l:i<Be?0:i,f,d,p,m,g,x,b,_,v;if(!c)SA(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,_=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,s,o);if(f=ct(h%m),h===l?(p=this._repeat,f=c):(p=~~(h/m),p&&p===h/m&&(f=c,p--),f>c&&(f=c)),x=this._yoyo&&p&1,x&&(v=this._yEase,f=c-f),g=Lr(this._tTime,m),f===a&&!o&&this._initted)return this._tTime=h,this;p!==g&&(_&&this._yEase&&i1(_,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=o=1,this.render(ct(m*p),!0).invalidate()._lock=0))}if(!this._initted){if(Gv(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&(Kt(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;_&&_.render(i<0?i:!f&&x?-Be:_._dur*_._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&zc(this,i,s,o),Kt(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&Kt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&zc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&bi(this,1),!s&&!(u&&!a)&&(h||a||x)&&(Kt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},n.resetTo=function(i,s,o,a){Fs||Dt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Vu(this,l),c=this._ease(l/this._dur),jA(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(za(this,0),this.parent||Hv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?is(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ii&&ii.vars.overwrite!==!0)._first||is(this),this.parent&&o!==this.timeline.totalDuration()&&Ir(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Yt(i):a,c=this._ptLookup,u=this._pt,h,f,d,p,m,g,x;if((!s||s==="all")&&_A(a,l))return s==="all"&&(this._pt=0),is(this);for(h=this._op=this._op||[],s!=="all"&&(st(s)&&(m={},Rt(s,function(b){return m[b]=1}),s=m),s=WA(a,s)),x=a.length;x--;)if(~l.indexOf(a[x])){f=c[x],s==="all"?(h[x]=s,p=f,d={}):(d=h[x]=h[x]||{},p=s);for(m in p)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Ca(this,g,"_pt"),delete f[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&u&&is(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return vs(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return vs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Xe.killTweensOf(i,s,o)},e}(Nr);en(rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rt("staggerTo,staggerFrom,staggerFromTo",function(t){rt[t]=function(){var e=new At,n=Oc.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var Hu=function(e,n,r){return e[n]=r},c1=function(e,n,r){return e[n](r)},qA=function(e,n,r,i){return e[n](i.fp,r)},$A=function(e,n,r){return e.setAttribute(n,r)},ju=function(e,n){return Ze(e[n])?c1:ku(e[n])&&e.setAttribute?$A:Hu},u1=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},XA=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},f1=function(e,n){var r=n._pt,i="";if(!e&&n.b)i=n.b;else if(e===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},Wu=function(e,n){for(var r=n._pt;r;)r.r(e,r.d),r=r._next},YA=function(e,n,r,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,n,r),s=o},KA=function(e){for(var n=this._pt,r,i;n;)i=n._next,n.p===e&&!n.op||n.op===e?Ca(this,n,"_pt"):n.dep||(r=1),n=i;return!r},QA=function(e,n,r,i){i.mSet(e,n,i.m.call(i.tween,r,i.mt),i)},h1=function(e){for(var n=e._pt,r,i,s,o;n;){for(r=n._next,i=s;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:o)?n._prev._next=n:s=n,(n._next=i)?i._prev=n:o=n,n=r}e._pt=s},Ot=function(){function t(n,r,i,s,o,a,l,c,u){this.t=r,this.s=s,this.c=o,this.p=i,this.r=a||u1,this.d=l||this,this.set=c||Hu,this.pr=u||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(r,i,s){this.mSet=this.mSet||this.set,this.set=QA,this.m=r,this.mt=s,this.tween=i},t}();Rt(Nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return Du[t]=1});Bt.TweenMax=Bt.TweenLite=rt;Bt.TimelineLite=Bt.TimelineMax=At;Xe=new At({sortChildren:!1,defaults:kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nt.stringFilter=t1;var Ur=[],wo={},ZA=[],Dd=0,xl=function(e){return(wo[e]||ZA).map(function(n){return n()})},Lc=function(){var e=Date.now(),n=[];e-Dd>2&&(xl("matchMediaInit"),Ur.forEach(function(r){var i=r.queries,s=r.conditions,o,a,l,c;for(a in i)o=Wt.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(r.revert(),l&&n.push(r))}),xl("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r)}),Dd=e,xl("matchMedia"))},d1=function(){function t(n,r){this.selector=r&&Mc(r),this.data=[],this._r=[],this.isReverted=!1,n&&this.add(n)}var e=t.prototype;return e.add=function(r,i,s){Ze(r)&&(s=i,i=r,r=Ze);var o=this,a=function(){var c=nt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Mc(s)),nt=o,h=i.apply(o,arguments),Ze(h)&&o._r.push(h),nt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,r===Ze?a(o):r?o[r]=a:a},e.ignore=function(r){var i=nt;nt=null,r(this),nt=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof t?r.push.apply(r,i.getTweens()):i instanceof rt&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var s=this;if(r){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(r)}),this.data.forEach(function(l){return!(l instanceof Nr)&&l.revert&&l.revert(r)}),this._r.forEach(function(l){return l(r,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=Ur.indexOf(this);~a&&Ur.splice(a,1)}},e.revert=function(r){this.kill(r||{})},t}(),JA=function(){function t(n){this.contexts=[],this.scope=n}var e=t.prototype;return e.add=function(r,i,s){Tn(r)||(r={matches:r});var o=new d1(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=r;for(c in r)c==="all"?u=1:(l=Wt.matchMedia(r[c]),l&&(Ur.indexOf(o)<0&&Ur.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lc):l.addEventListener("change",Lc)));return u&&i(o),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},t}(),$o={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(i){return kA(i)})},timeline:function(e){return new At(e)},getTweensOf:function(e,n){return Xe.getTweensOf(e,n)},getProperty:function(e,n,r,i){st(e)&&(e=Yt(e)[0]);var s=Hi(e||{}).get,o=r?Vv:Bv;return r==="native"&&(r=""),e&&(n?o((Lt[n]&&Lt[n].get||s)(e,n,r,i)):function(a,l,c){return o((Lt[a]&&Lt[a].get||s)(e,a,l,c))})},quickSetter:function(e,n,r){if(e=Yt(e),e.length>1){var i=e.map(function(u){return Vt.quickSetter(u,n,r)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Lt[n],a=Hi(e),l=a.harness&&(a.harness.aliases||{})[n]||n,c=o?function(u){var h=new o;dr._pt=0,h.init(e,r?u+r:u,dr,0,[e]),h.render(1,h),dr._pt&&Wu(1,dr)}:a.set(e,l);return o?c:function(u){return c(e,l,r?u+r:u,a,1)}},quickTo:function(e,n,r){var i,s=Vt.to(e,Xi((i={},i[n]="+=0.1",i.paused=!0,i),r||{})),o=function(l,c,u){return s.resetTo(n,l,c,u)};return o.tween=s,o},isTweening:function(e){return Xe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wi(e.ease,kr.ease)),Md(kr,e||{})},config:function(e){return Md(Nt,e||{})},registerEffect:function(e){var n=e.name,r=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Lt[a]&&!Bt[a]&&jo(n+" effect requires "+a+" plugin.")}),vl[n]=function(a,l,c){return r(Yt(a),en(l||{},s),c)},o&&(At.prototype[n]=function(a,l,c){return this.add(vl[n](a,Tn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){Te[e]=Wi(n)},parseEase:function(e,n){return arguments.length?Wi(e,n):Te},getById:function(e){return Xe.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var r=new At(e),i,s;for(r.smoothChildTiming=zt(e.smoothChildTiming),Xe.remove(r),r._dp=0,r._time=r._tTime=Xe._time,i=Xe._first;i;)s=i._next,(n||!(!i._dur&&i instanceof rt&&i.vars.onComplete===i._targets[0]))&&_n(r,i,i._start-i._delay),i=s;return _n(Xe,r,0),r},context:function(e,n){return e?new d1(e,n):nt},matchMedia:function(e){return new JA(e)},matchMediaRefresh:function(){return Ur.forEach(function(e){var n=e.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&e.revert()})||Lc()},addEventListener:function(e,n){var r=wo[e]||(wo[e]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(e,n){var r=wo[e],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:OA,wrapYoyo:MA,distribute:Xv,random:Kv,snap:Yv,normalize:RA,getUnit:vt,clamp:EA,splitColor:Jv,toArray:Yt,selector:Mc,mapRange:Zv,pipe:AA,unitize:zA,interpolate:FA,shuffle:$v},install:Lv,effects:vl,ticker:Dt,updateRoot:At.updateRoot,plugins:Lt,globalTimeline:Xe,core:{PropTween:Ot,globals:Iv,Tween:rt,Timeline:At,Animation:Nr,getCache:Hi,_removeLinkedListItem:Ca,reverting:function(){return bt},context:function(e){return e&&nt&&(nt.data.push(e),e._ctx=nt),nt},suppressOverwrites:function(e){return Fu=e}}};Rt("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return $o[t]=rt[t]});Dt.add(At.updateRoot);dr=$o.to({},{duration:0});var ez=function(e,n){for(var r=e._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},tz=function(e,n){var r=e._targets,i,s,o;for(i in n)for(s=r.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=ez(o,i)),o&&o.modifier&&o.modifier(n[i],e,r[s],i))},wl=function(e,n){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(st(s)&&(l={},Rt(s,function(u){return l[u]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}tz(a,s)}}}},Vt=$o.registerPlugin({name:"attr",init:function(e,n,r,i,s){var o,a,l;this.tween=r;for(o in n)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",n[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,n){for(var r=n._pt;r;)bt?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,n){for(var r=n.length;r--;)this.add(e,r,e[r]||0,n[r],0,0,0,0,0,1)}},wl("roundProps",Fc),wl("modifiers"),wl("snap",Yv))||$o;rt.version=At.version=Vt.version="3.11.4";kv=1;zv()&&Dr();Te.Power0;Te.Power1;Te.Power2;Te.Power3;Te.Power4;Te.Linear;Te.Quad;Te.Cubic;Te.Quart;Te.Quint;Te.Strong;Te.Elastic;Te.Back;Te.SteppedEase;Te.Bounce;Te.Sine;Te.Expo;Te.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nd,ri,wr,Gu,Ni,Ud,qu,nz=function(){return typeof window<"u"},Vn={},ki=180/Math.PI,Sr=Math.PI/180,ar=Math.atan2,Bd=1e8,$u=/([A-Z])/g,iz=/(left|right|width|margin|padding|x)/i,rz=/[\s,\(]\S/,kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ic=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},sz=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},oz=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},az=function(e,n){var r=n.s+n.c*e;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},p1=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},m1=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},lz=function(e,n,r){return e.style[n]=r},cz=function(e,n,r){return e.style.setProperty(n,r)},uz=function(e,n,r){return e._gsap[n]=r},fz=function(e,n,r){return e._gsap.scaleX=e._gsap.scaleY=r},hz=function(e,n,r,i,s){var o=e._gsap;o.scaleX=o.scaleY=r,o.renderTransform(s,o)},dz=function(e,n,r,i,s){var o=e._gsap;o[n]=r,o.renderTransform(s,o)},Ye="transform",ln=Ye+"Origin",pz=function(e,n){var r=this,i=this.target,s=i.style;if(e in Vn){if(this.tfm=this.tfm||{},e!=="transform"&&(e=kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return r.tfm[o]=On(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:On(i,e)),this.props.indexOf(Ye)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ln,n,"")),e=Ye}(s||n)&&this.props.push(e,n,s[e])},g1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},mz=function(){var e=this.props,n=this.target,r=n.style,i=n._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?n[e[s]]=e[s+2]:e[s+2]?r[e[s]]=e[s+2]:r.removeProperty(e[s].replace($u,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=qu(),s&&!s.isStart&&!r[Ye]&&(g1(r),i.uncache=1)}},v1=function(e,n){var r={target:e,props:[],revert:mz,save:pz};return n&&n.split(",").forEach(function(i){return r.save(i)}),r},b1,Dc=function(e,n){var r=ri.createElementNS?ri.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ri.createElement(e);return r.style?r:ri.createElement(e)},xn=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace($u,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,Br(n)||n,1)||""},Vd="O,Moz,ms,Ms,Webkit".split(","),Br=function(e,n,r){var i=n||Ni,s=i.style,o=5;if(e in s&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Vd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Vd[o]:"")+e},Nc=function(){nz()&&window.document&&(Nd=window,ri=Nd.document,wr=ri.documentElement,Ni=Dc("div")||{style:{}},Dc("div"),Ye=Br(Ye),ln=Ye+"Origin",Ni.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",b1=!!Br("perspective"),qu=Vt.core.reverting,Gu=1)},Sl=function t(e){var n=Dc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(wr.appendChild(n),n.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(o=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),wr.removeChild(n),this.style.cssText=s,o},Hd=function(e,n){for(var r=n.length;r--;)if(e.hasAttribute(n[r]))return e.getAttribute(n[r])},_1=function(e){var n;try{n=e.getBBox()}catch{n=Sl.call(e,!0)}return n&&(n.width||n.height)||e.getBBox===Sl||(n=Sl.call(e,!0)),n&&!n.width&&!n.x&&!n.y?{x:+Hd(e,["x","cx","x1"])||0,y:+Hd(e,["y","cy","y1"])||0,width:0,height:0}:n},y1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_1(e))},ks=function(e,n){if(n){var r=e.style;n in Vn&&n!==ln&&(n=Ye),r.removeProperty?((n.substr(0,2)==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(n.replace($u,"-$1").toLowerCase())):r.removeAttribute(n)}},si=function(e,n,r,i,s,o){var a=new Ot(e._pt,n,r,0,1,o?m1:p1);return e._pt=a,a.b=i,a.e=s,e._props.push(r),a},jd={deg:1,rad:1,turn:1},gz={grid:1,flex:1},_i=function t(e,n,r,i){var s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",a=Ni.style,l=iz.test(n),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",p,m,g,x;return i===o||!s||jd[i]||jd[o]?s:(o!=="px"&&!f&&(s=t(e,n,r,"px")),x=e.getCTM&&y1(e),(d||o==="%")&&(Vn[n]||~n.indexOf("adius"))?(p=x?e.getBBox()[l?"width":"height"]:e[u],Je(d?s/p*h:s/100*p)):(a[l?"width":"height"]=h+(f?o:i),m=~n.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===ri||!m.appendChild)&&(m=ri.body),g=m._gsap,g&&d&&g.width&&l&&g.time===Dt.time&&!g.uncache?Je(s/g.width*h):((d||o==="%")&&!gz[xn(m,"display")]&&(a.position=xn(e,"position")),m===e&&(a.position="static"),m.appendChild(Ni),p=Ni[u],m.removeChild(Ni),a.position="absolute",l&&d&&(g=Hi(m),g.time=Dt.time,g.width=m[u]),Je(f?p*s/h:p&&s?h/p*s:0))))},On=function(e,n,r,i){var s;return Gu||Nc(),n in kn&&n!=="transform"&&(n=kn[n],~n.indexOf(",")&&(n=n.split(",")[0])),Vn[n]&&n!=="transform"?(s=Is(e,i),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Yo(xn(e,ln))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xo[n]&&Xo[n](e,n,r)||xn(e,n)||Nv(e,n)||(n==="opacity"?1:0))),r&&!~(s+"").trim().indexOf(" ")?_i(e,n,s,r)+r:s},vz=function(e,n,r,i){if(!r||r==="none"){var s=Br(n,e,1),o=s&&xn(e,s,1);o&&o!==r?(n=s,r=o):n==="borderColor"&&(r=xn(e,"borderTopColor"))}var a=new Ot(this._pt,e.style,n,0,1,f1),l=0,c=0,u,h,f,d,p,m,g,x,b,_,v,y;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(e.style[n]=i,i=xn(e,n)||i,e.style[n]=r),u=[r,i],t1(u),r=u[0],i=u[1],f=r.match(hr)||[],y=i.match(hr)||[],y.length){for(;h=hr.exec(i);)g=h[0],b=i.substring(l,h.index),p?p=(p+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(p=1),g!==(m=f[c++]||"")&&(d=parseFloat(m)||0,v=m.substr((d+"").length),g.charAt(1)==="="&&(g=xr(d,g)+v),x=parseFloat(g),_=g.substr((x+"").length),l=hr.lastIndex-_.length,_||(_=_||Nt.units[n]||v,l===i.length&&(i+=_,a.e+=_)),v!==_&&(d=_i(e,n,m,_)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:d,c:x-d,m:p&&p<4||n==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=n==="display"&&i==="none"?m1:p1;return Mv.test(i)&&(a.e=0),this._pt=a,a},Wd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bz=function(e){var n=e.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),n[0]=Wd[r]||r,n[1]=Wd[i]||i,n.join(" ")},_z=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,s=n.u,o=r._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Vn[a]&&(l=1,a=a==="transformOrigin"?ln:Ye),ks(r,a);l&&(ks(r,Ye),o&&(o.svg&&r.removeAttribute("transform"),Is(r,1),o.uncache=1,g1(i)))}},Xo={clearProps:function(e,n,r,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Ot(e._pt,n,r,0,0,_z);return o.u=i,o.pr=-10,o.tween=s,e._props.push(r),1}}},Ls=[1,0,0,1,0,0],x1={},w1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gd=function(e){var n=xn(e,Ye);return w1(n)?Ls:n.substr(7).match(Ov).map(Je)},Xu=function(e,n){var r=e._gsap||Hi(e),i=e.style,s=Gd(e),o,a,l,c;return r.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ls:s):(s===Ls&&!e.offsetParent&&e!==wr&&!r.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,wr.appendChild(e)),s=Gd(e),l?i.display=l:ks(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):wr.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Uc=function(e,n,r,i,s,o){var a=e._gsap,l=s||Xu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],m=l[2],g=l[3],x=l[4],b=l[5],_=n.split(" "),v=parseFloat(_[0])||0,y=parseFloat(_[1])||0,w,P,T,R;r?l!==Ls&&(P=d*g-p*m)&&(T=v*(g/P)+y*(-m/P)+(m*b-g*x)/P,R=v*(-p/P)+y*(d/P)-(d*b-p*x)/P,v=T,y=R):(w=_1(e),v=w.x+(~_[0].indexOf("%")?v/100*w.width:v),y=w.y+(~(_[1]||_[0]).indexOf("%")?y/100*w.height:y)),i||i!==!1&&a.smooth?(x=v-c,b=y-u,a.xOffset=h+(x*d+b*m)-x,a.yOffset=f+(x*p+b*g)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=y,a.smooth=!!i,a.origin=n,a.originIsAbsolute=!!r,e.style[ln]="0px 0px",o&&(si(o,a,"xOrigin",c,v),si(o,a,"yOrigin",u,y),si(o,a,"xOffset",h,a.xOffset),si(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},Is=function(e,n){var r=e._gsap||new s1(e);if("x"in r&&!n&&!r.uncache)return r;var i=e.style,s=r.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=xn(e,ln)||"0",u,h,f,d,p,m,g,x,b,_,v,y,w,P,T,R,k,D,M,z,S,A,I,B,$,ne,pe,ge,ve,ze,Ee,N;return u=h=f=m=g=x=b=_=v=0,d=p=1,r.svg=!!(e.getCTM&&y1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ye]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ye]!=="none"?l[Ye]:"")),i.scale=i.rotate=i.translate="none"),P=Xu(e,r.svg),r.svg&&(r.uncache?($=e.getBBox(),c=r.xOrigin-$.x+"px "+(r.yOrigin-$.y)+"px",B=""):B=!n&&e.getAttribute("data-svg-origin"),Uc(e,B||c,!!B||r.originIsAbsolute,r.smooth!==!1,P)),y=r.xOrigin||0,w=r.yOrigin||0,P!==Ls&&(D=P[0],M=P[1],z=P[2],S=P[3],u=A=P[4],h=I=P[5],P.length===6?(d=Math.sqrt(D*D+M*M),p=Math.sqrt(S*S+z*z),m=D||M?ar(M,D)*ki:0,b=z||S?ar(z,S)*ki+m:0,b&&(p*=Math.abs(Math.cos(b*Sr))),r.svg&&(u-=y-(y*D+w*z),h-=w-(y*M+w*S))):(N=P[6],ze=P[7],pe=P[8],ge=P[9],ve=P[10],Ee=P[11],u=P[12],h=P[13],f=P[14],T=ar(N,ve),g=T*ki,T&&(R=Math.cos(-T),k=Math.sin(-T),B=A*R+pe*k,$=I*R+ge*k,ne=N*R+ve*k,pe=A*-k+pe*R,ge=I*-k+ge*R,ve=N*-k+ve*R,Ee=ze*-k+Ee*R,A=B,I=$,N=ne),T=ar(-z,ve),x=T*ki,T&&(R=Math.cos(-T),k=Math.sin(-T),B=D*R-pe*k,$=M*R-ge*k,ne=z*R-ve*k,Ee=S*k+Ee*R,D=B,M=$,z=ne),T=ar(M,D),m=T*ki,T&&(R=Math.cos(T),k=Math.sin(T),B=D*R+M*k,$=A*R+I*k,M=M*R-D*k,I=I*R-A*k,D=B,A=$),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,x=180-x),d=Je(Math.sqrt(D*D+M*M+z*z)),p=Je(Math.sqrt(I*I+N*N)),T=ar(A,I),b=Math.abs(T)>2e-4?T*ki:0,v=Ee?1/(Ee<0?-Ee:Ee):0),r.svg&&(B=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!w1(xn(e,Ye)),B&&e.setAttribute("transform",B))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,b+=b<=0?180:-180)),n=n||r.uncache,r.x=u-((r.xPercent=u&&(!n&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=h-((r.yPercent=h&&(!n&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=f+o,r.scaleX=Je(d),r.scaleY=Je(p),r.rotation=Je(m)+a,r.rotationX=Je(g)+a,r.rotationY=Je(x)+a,r.skewX=b+a,r.skewY=_+a,r.transformPerspective=v+o,(r.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ln]=Yo(c)),r.xOffset=r.yOffset=0,r.force3D=Nt.force3D,r.renderTransform=r.svg?xz:b1?S1:yz,r.uncache=0,r},Yo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pl=function(e,n,r){var i=vt(n);return Je(parseFloat(n)+parseFloat(_i(e,"x",r+"px",i)))+i},yz=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,S1(e,n)},Ri="0deg",Zr="0px",Oi=") ",S1=function(e,n){var r=n||this,i=r.xPercent,s=r.yPercent,o=r.x,a=r.y,l=r.z,c=r.rotation,u=r.rotationY,h=r.rotationX,f=r.skewX,d=r.skewY,p=r.scaleX,m=r.scaleY,g=r.transformPerspective,x=r.force3D,b=r.target,_=r.zOrigin,v="",y=x==="auto"&&e&&e!==1||x===!0;if(_&&(h!==Ri||u!==Ri)){var w=parseFloat(u)*Sr,P=Math.sin(w),T=Math.cos(w),R;w=parseFloat(h)*Sr,R=Math.cos(w),o=Pl(b,o,P*R*-_),a=Pl(b,a,-Math.sin(w)*-_),l=Pl(b,l,T*R*-_+_)}g!==Zr&&(v+="perspective("+g+Oi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(y||o!==Zr||a!==Zr||l!==Zr)&&(v+=l!==Zr||y?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Oi),c!==Ri&&(v+="rotate("+c+Oi),u!==Ri&&(v+="rotateY("+u+Oi),h!==Ri&&(v+="rotateX("+h+Oi),(f!==Ri||d!==Ri)&&(v+="skew("+f+", "+d+Oi),(p!==1||m!==1)&&(v+="scale("+p+", "+m+Oi),b.style[Ye]=v||"translate(0, 0)"},xz=function(e,n){var r=n||this,i=r.xPercent,s=r.yPercent,o=r.x,a=r.y,l=r.rotation,c=r.skewX,u=r.skewY,h=r.scaleX,f=r.scaleY,d=r.target,p=r.xOrigin,m=r.yOrigin,g=r.xOffset,x=r.yOffset,b=r.forceCSS,_=parseFloat(o),v=parseFloat(a),y,w,P,T,R;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Sr,c*=Sr,y=Math.cos(l)*h,w=Math.sin(l)*h,P=Math.sin(l-c)*-f,T=Math.cos(l-c)*f,c&&(u*=Sr,R=Math.tan(c-u),R=Math.sqrt(1+R*R),P*=R,T*=R,u&&(R=Math.tan(u),R=Math.sqrt(1+R*R),y*=R,w*=R)),y=Je(y),w=Je(w),P=Je(P),T=Je(T)):(y=h,T=f,w=P=0),(_&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(_=_i(d,"x",o,"px"),v=_i(d,"y",a,"px")),(p||m||g||x)&&(_=Je(_+p-(p*y+m*P)+g),v=Je(v+m-(p*w+m*T)+x)),(i||s)&&(R=d.getBBox(),_=Je(_+i/100*R.width),v=Je(v+s/100*R.height)),R="matrix("+y+","+w+","+P+","+T+","+_+","+v+")",d.setAttribute("transform",R),b&&(d.style[Ye]=R)},wz=function(e,n,r,i,s){var o=360,a=st(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ki:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Bd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Bd)%o-~~(c/o)*o)),e._pt=f=new Ot(e._pt,n,r,i,c,sz),f.e=u,f.u="deg",e._props.push(r),f},qd=function(e,n){for(var r in n)e[r]=n[r];return e},Sz=function(e,n,r){var i=qd({},r._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=r.style,a,l,c,u,h,f,d,p;i.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),o[Ye]=n,a=Is(r,1),ks(r,Ye),r.setAttribute("transform",c)):(c=getComputedStyle(r)[Ye],o[Ye]=n,a=Is(r,1),o[Ye]=c);for(l in Vn)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=vt(c),p=vt(u),h=d!==p?_i(r,l,c,p):parseFloat(c),f=parseFloat(u),e._pt=new Ot(e._pt,a,l,h,f-h,Ic),e._pt.u=p||0,e._props.push(l));qd(a,i)};Rt("padding,margin,Width,Radius",function(t,e){var n="Top",r="Right",i="Bottom",s="Left",o=(e<3?[n,r,i,s]:[n+s,n+r,i+r,i+s]).map(function(a){return e<2?t+a:"border"+a+t});Xo[e>1?"border"+t:t]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(p){return On(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(p,m){return d[p]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,d,h)}});var P1={name:"css",register:Nc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,r,i,s){var o=this._props,a=e.style,l=r.vars.startAt,c,u,h,f,d,p,m,g,x,b,_,v,y,w,P,T;Gu||Nc(),this.styles=this.styles||v1(e),T=this.styles.props,this.tween=r;for(m in n)if(m!=="autoRound"&&(u=n[m],!(Lt[m]&&o1(m,n,r,i,e,s)))){if(d=typeof u,p=Xo[m],d==="function"&&(u=u.call(r,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ms(u)),p)p(this,e,m,u,r)&&(P=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",hi.lastIndex=0,hi.test(c)||(g=vt(c),x=vt(u)),x?g!==x&&(c=_i(e,m,c,x)+x):g&&(u+=g),this.add(a,"setProperty",c,u,i,s,0,0,m),o.push(m),T.push(m,0,a[m]);else if(d!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(r,i,e,s):l[m],st(c)&&~c.indexOf("random(")&&(c=Ms(c)),vt(c+"")||(c+=Nt.units[m]||vt(On(e,m))||""),(c+"").charAt(1)==="="&&(c=On(e,m))):c=On(e,m),f=parseFloat(c),b=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),m in kn&&(m==="autoAlpha"&&(f===1&&On(e,"visibility")==="hidden"&&h&&(f=0),T.push("visibility",0,a.visibility),si(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=kn[m],~m.indexOf(",")&&(m=m.split(",")[0]))),_=m in Vn,_){if(this.styles.save(m),v||(y=e._gsap,y.renderTransform&&!n.parseTransform||Is(e,n.parseTransform),w=n.smoothOrigin!==!1&&y.smooth,v=this._pt=new Ot(this._pt,a,Ye,0,1,y.renderTransform,y,0,-1),v.dep=1),m==="scale")this._pt=new Ot(this._pt,y,"scaleY",y.scaleY,(b?xr(y.scaleY,b+h):h)-y.scaleY||0,Ic),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){T.push(ln,0,a[ln]),u=bz(u),y.svg?Uc(e,u,0,w,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==y.zOrigin&&si(this,y,"zOrigin",y.zOrigin,x),si(this,a,m,Yo(c),Yo(u)));continue}else if(m==="svgOrigin"){Uc(e,u,1,w,0,this);continue}else if(m in x1){wz(this,y,m,f,b?xr(f,b+u):u);continue}else if(m==="smoothOrigin"){si(this,y,"smooth",y.smooth,u);continue}else if(m==="force3D"){y[m]=u;continue}else if(m==="transform"){Sz(this,u,e);continue}}else m in a||(m=Br(m)||m);if(_||(h||h===0)&&(f||f===0)&&!rz.test(u)&&m in a)g=(c+"").substr((f+"").length),h||(h=0),x=vt(u)||(m in Nt.units?Nt.units[m]:g),g!==x&&(f=_i(e,m,c,x)),this._pt=new Ot(this._pt,_?y:a,m,f,(b?xr(f,b+h):h)-f,!_&&(x==="px"||m==="zIndex")&&n.autoRound!==!1?az:Ic),this._pt.u=x||0,g!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=oz);else if(m in a)vz.call(this,e,m,c,b?b+u:u);else if(m in e)this.add(e,m,c||e[m],b?b+u:u,i,s);else if(m!=="parseTransform"){Iu(m,u);continue}_||(m in a?T.push(m,0,a[m]):T.push(m,1,c||e[m])),o.push(m)}}P&&h1(this)},render:function(e,n){if(n.tween._time||!qu())for(var r=n._pt;r;)r.r(e,r.d),r=r._next;else n.styles.revert()},get:On,aliases:kn,getSetter:function(e,n,r){var i=kn[n];return i&&i.indexOf(",")<0&&(n=i),n in Vn&&n!==ln&&(e._gsap.x||On(e,"x"))?r&&Ud===r?n==="scale"?fz:uz:(Ud=r||{})&&(n==="scale"?hz:dz):e.style&&!ku(e.style[n])?lz:~n.indexOf("-")?cz:ju(e,n)},core:{_removeProperty:ks,_getMatrix:Xu}};Vt.utils.checkPrefix=Br;Vt.core.getStyleSaver=v1;(function(t,e,n,r){var i=Rt(t+","+e+","+n,function(s){Vn[s]=1});Rt(e,function(s){Nt.units[s]="deg",x1[s]=1}),kn[i[13]]=t+","+e,Rt(r,function(s){var o=s.split(":");kn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Nt.units[t]="px"});Vt.registerPlugin(P1);var Ie=Vt.registerPlugin(P1)||Vt;Ie.core.Tween;class Pz{constructor(){this._emitter={},Xs(this._emitter),this.on=this._emitter.on.bind(this._emitter),this.off=this._emitter.off.bind(this._emitter),this.emit=this._emitter.emit.bind(this._emitter)}}const Pe=new Pz;class T1{constructor(){this.MAX_VERTICES=256,this.MAX_VERTICES_MASK=this.MAX_VERTICES-1,this.amplitude=1,this.scale=1,this.r=[];for(var e=0;e<this.MAX_VERTICES;++e)this.r.push(Math.random())}getVal(e){var n=e*this.scale,r=Math.floor(n),i=n-r,s=i*i*(3-2*i),o=r%this.MAX_VERTICES_MASK,a=(o+1)%this.MAX_VERTICES_MASK,l=this.lerp(this.r[o],this.r[a],s);return l*this.amplitude}lerp(e,n,r){return e*(1-r)+n*r}}class Tz{constructor(e,{parent:n=null,scale:r=1,blendFunc:i={src:e.gl.ONE,dst:e.gl.ONE_MINUS_SRC_ALPHA},transparent:s=!0,depthTest:o=!1,depthWrite:a=!1,renderOrder:l=1,alpha:c=1,hasShadow:u=!1,name:h="ParticlesFace"}={}){this.gl=e.gl,this.scene=e,this.parent=n||e.root,this.scale=r,this.transparent=s,this.blendFunc=i,this.depthTest=o,this.depthWrite=a,this.renderOrder=l,this.hasShadow=u,this.name=h,this.noise=new T1,this.timeScale=.25,this.time=0,this.timeWaves=0,this.speechFactor=0,this.depthInfluence=1,this.opacity=1,this.animZ=0,this.animNoiseMultiplier=1,this.mousePanOffsets=[.3,.25],this.textureOffsets=xa(),this.pan={current:tt(),target:tt(),ease:.02},this.defines={},this.shader=new jn(Zt.particlesFacePlane,1,this.defines),this.texture=new xt(this.gl),this.textureDepth=new xt(this.gl),this.videoTexture=new xt(this.gl,{generateMipmaps:!1,width:1024,height:1024}),this.video=null,this.alpha=c,this.config={Color1:{value:this.scene.colors.faceColor0,params:{}},Color2:{value:this.scene.colors.faceColor1,params:{}},ColorSpeech:{value:this.scene.colors.faceColorSpeech,params:{}},Opacity:{value:.45,params:{min:0,max:1,step:.01}},NoiseIntensity:{value:3.25,params:{min:0,max:10,step:.01}},NoiseFrequency:{value:6.75,params:{min:0,max:10,step:.01}},ParticlesSize:{value:20,params:{min:0,max:30,step:1}},DepthIntensity:{value:2.5,params:{min:-6,max:6,step:.01}},SpeechFactor:{value:0,params:{min:0,max:1,step:.01}},SpeechDepthIntensity:{value:.12,params:{min:0,max:2,step:.01}},WavesOrigin:{value:{x:.5,y:.43},params:{x:{min:0,max:1,step:.01},y:{min:0,max:1,step:.01}}},WavesFrequency:{value:10,params:{min:.1,max:30,step:.01}},WavesSpeed:{value:5,params:{min:.1,max:30,step:.01}},WaveShineIntensity:{value:1,params:{min:0,max:1,step:.01}},Bokeh:{value:0,params:{min:0,max:100,step:1}},Focus:{value:7,params:{min:0,max:25,step:.01}},FocusRange:{value:20,params:{min:0,max:20,step:.1}}},this.init(),this.addEvents()}init(){this.defines.HAS_VIDEO_TEXTURE=xe.queryDebug("face-video")?1:0;let e=6.25,n=160;if(this.particlesSizeMultiplier=1,vi)switch(this.particlesSizeMultiplier=1.25,window.tier.tier){case 1:n=150;break;case 2:n=150;break;case 3:n=160,window.innerWidth>2e3&&(n=200,this.particlesSizeMultiplier=1.75);break}else e=5,n=140;const r=.5;this.particlesSizeMultiplier*=1-(2-this.scene.dpr)*r,this.geometry=new xi(this.gl,{width:e,height:e,widthSegments:n,heightSegments:n}),this.uniforms={uTime:{value:this.scene.time},uTimeWaves:{value:this.scene.time},uColor:{value:this.color},uRez:{value:[this.scene.width,this.scene.height]},uTexture:{value:this.texture},uTextureDepth:{value:this.texture},uTextureOffsets:{value:this.textureOffsets},uColor1:{value:[0,0,0]},uColor2:{value:[0,0,0]},uColorSpeech:{value:[0,0,0]},uAlpha:{value:this.config.Opacity.value*this.opacity},uNoiseIntensity:{value:this.config.NoiseIntensity},uNoiseFrequency:this.config.NoiseFrequency,uParticlesSize:{value:this.config.ParticlesSize.value*this.particlesSizeMultiplier},uParticlesDensity:{value:n},uDepthIntensity:{value:this.config.DepthIntensity},uBokeh:this.config.Bokeh,uFocus:this.config.Focus,uFocusRange:this.config.FocusRange,uSpeechFactor:{value:this.speechFactor},uSpeechDepthIntensity:this.config.SpeechDepthIntensity,uWavesOrigin:{value:[this.config.WavesOrigin.value.x,this.config.WavesOrigin.value.y]},uWavesFrequency:this.config.WavesFrequency,uWavesSpeed:this.config.WavesSpeed,uWaveShineIntensity:this.config.WaveShineIntensity},this.program=new Ji(this.gl,{vertex:this.shader.vert,fragment:this.shader.frag,debugShader:xe.active,depthTest:this.depthTest,depthWrite:this.depthWrite,transparent:this.transparent,uniforms:this.uniforms}),this.program.setBlendFunc(this.blendFunc.src,this.blendFunc.dst),this.mesh=new er(this.gl,{geometry:this.geometry,program:this.program,renderOrder:this.renderOrder,forceRenderOrder:!0,mode:this.gl.POINTS}),this.mesh.scale.set(this.scale,this.scale,this.scale),this.mesh.name=this.name,this.mesh.setParent(this.parent)}initGui(){xe.addBlade(this.config,`${this.scene.name} - ${this.name}`,1)}addEvents(){this.bindedHandleShow=this.handleShow.bind(this),this.bindedHandleHide=this.handleHide.bind(this),this.bindedHandleSpeechEnable=this.handleSpeechEnable.bind(this),this.bindedHandleSpeechDisable=this.handleSpeechDisable.bind(this),this.bindedHandleFadeEnable=this.handleFadeEnable.bind(this),this.bindedHandleFadeDisable=this.handleFadeDisable.bind(this),Pe.on("webgl_experience_face_show",this.bindedHandleShow),Pe.on("webgl_experience_face_hide",this.bindedHandleHide),Pe.on("webgl_experience_face_speech_enable",this.bindedHandleSpeechEnable),Pe.on("webgl_experience_face_speech_disable",this.bindedHandleSpeechDisable),Pe.on("webgl_experience_face_fade_enable",this.bindedHandleFadeEnable),Pe.on("webgl_experience_face_fade_disable",this.bindedHandleFadeDisable)}removeEvents(){Pe.off("webgl_experience_face_show",this.bindedHandleShow),Pe.off("webgl_experience_face_hide",this.bindedHandleHide),Pe.off("webgl_experience_face_speech_enable",this.bindedHandleSpeechEnable),Pe.off("webgl_experience_face_speech_disable",this.bindedHandleSpeechDisable),Pe.off("webgl_experience_face_fade_enable",this.bindedHandleFadeEnable),Pe.off("webgl_experience_face_fade_disable",this.bindedHandleFadeDisable)}onLoaded(){this.texture&&(this.texture=this.scene.textureLoader.getTexture("chat_face"),this.texture.needsUpdate=!0,this.program.uniforms.uTexture.value=this.texture),this.textureDepth&&(this.textureDepth=this.scene.textureLoader.getTexture("chat_face_depth"),this.texture.needsUpdate=!0,this.program.uniforms.uTextureDepth.value=this.textureDepth),this.defines.HAS_VIDEO_TEXTURE&&(this.video=document.createElement("video"),this.video.src="/glxp/videos/face-idle-depth.mp4",this.video.loop=!0,this.video.muted=!0,this.video.load(),this.video.play(),this.videoTexture.image||(this.videoTexture.image=this.video),this.videoTexture.needsUpdate=!0),this.initGui()}handleShow(e=!0){if(this.tlVisibility&&this.tlVisibility.kill(),!e){this.opacity=1,this.depthInfluence=1,this.animZ=0,this.animNoiseMultiplier=1,this.scene.spirits.default&&(this.scene.spirits.default.faceOpacity=.2);return}this.tlVisibility=Ie.timeline(),this.tlVisibility.to(this,{opacity:1,duration:.75,ease:"power3.in"},0),this.tlVisibility.to(this,{depthInfluence:1,duration:1.25,ease:"power3.out"},.25),this.tlVisibility.fromTo(this,{animZ:-.5},{animZ:0,duration:1,ease:"power3.out"},.25),this.tlVisibility.to(this,{animNoiseMultiplier:.75,duration:1.5,ease:"power3.out"},.25),this.scene.spirits.default&&this.tlVisibility.to(this.scene.spirits.default,{faceOpacity:.9,duration:1,ease:"power2.inOut"},0)}handleHide(e=!0){if(this.tlVisibility&&this.tlVisibility.kill(),!e){this.opacity=0,this.depthInfluence=0,this.animZ=-.5,this.animNoiseMultiplier=10,this.scene.spirits.default&&(this.scene.spirits.default.faceOpacity=1);return}this.tlVisibility=Ie.timeline(),this.tlVisibility.to(this,{opacity:0,duration:1.2,ease:"power2.inOut"},0),this.tlVisibility.to(this,{depthInfluence:0,duration:1.2,ease:"power2.inOut"},0),this.tlVisibility.to(this,{animZ:1,duration:2,ease:"power2.in"},0),this.tlVisibility.to(this,{animNoiseMultiplier:5,duration:1,ease:"power2.in"},.2),this.scene.spirits.default&&this.tlVisibility.to(this.scene.spirits.default,{faceOpacity:1,duration:1,ease:"power2.inOut"},0)}handleSpeechEnable(){this.tlSpeech&&this.tlSpeech.kill(),this.tlSpeech=Ie.timeline(),this.tlSpeech.to(this.config.SpeechFactor,{value:1,duration:.25,ease:"power2.out"},0)}handleSpeechDisable(){this.tlSpeech&&this.tlSpeech.kill(),this.tlSpeech=Ie.timeline(),this.tlSpeech.to(this.config.SpeechFactor,{value:0,duration:1,ease:"power2.in"},0)}handleFadeEnable(){this.tlVisibility&&this.tlVisibility.kill(),this.tlVisibility=Ie.timeline(),this.tlVisibility.to(this,{opacity:.35,duration:.75,ease:"power2.inOut"},0)}handleFadeDisable(){this.tlVisibility&&this.tlVisibility.kill(),this.tlVisibility=Ie.timeline(),this.tlVisibility.to(this,{opacity:1,duration:.75,ease:"power2.inOut"},0)}dispose(){this.mesh.setParent(null),this.geometry.remove(),this.program.remove(),this.removeEvents(),this.tlVisibility&&this.tlVisibility.kill(),this.tlSpeech&&this.tlSpeech.kill()}preRender(){this.time+=this.scene.dt/1e3*this.timeScale,this.defines.HAS_VIDEO_TEXTURE&&this.video&&this.video.currentTime>0&&this.video.readyState>=this.video.HAVE_ENOUGH_DATA&&(this.videoTexture.image||(this.videoTexture.image=this.video),this.videoTexture.needsUpdate=!0,this.program.uniforms.uTexture.value=this.videoTexture,this.program.uniforms.uTextureDepth.value=this.videoTexture),this.mesh.position.z=this.animZ,vi&&(this.pan.target[0]=je.cursor[0]*this.mousePanOffsets[0],this.pan.target[1]=je.cursor[1]*this.mousePanOffsets[1],Mu(this.pan.current,this.pan.current,this.pan.target,this.pan.ease),this.textureOffsets[0]=this.pan.current[0]*-.2,this.textureOffsets[1]=this.pan.current[1]*.2,this.mesh.rotation.set(this.pan.current[1],this.pan.current[0],0)),this.speechFactor=this.config.SpeechFactor.value*(.3+this.noise.getVal(this.time*50)*.7),this.timeWaves+=this.scene.dt/1e3*(this.timeScale+this.speechFactor*1.5),this.program.uniforms.uTime.value=this.time,this.program.uniforms.uTimeWaves.value=this.timeWaves,this.program.uniforms.uAlpha.value=this.config.Opacity.value*this.opacity,this.program.uniforms.uRez.value=[this.scene.width,this.scene.height],this.program.uniforms.uSpeechFactor.value=this.speechFactor,this.program.uniforms.uDepthIntensity.value=this.config.DepthIntensity.value*this.depthInfluence,this.program.uniforms.uNoiseIntensity.value=this.config.NoiseIntensity.value*this.animNoiseMultiplier,this.program.uniforms.uParticlesSize.value=this.config.ParticlesSize.value*this.particlesSizeMultiplier,this.program.uniforms.uColor1.value=new ke(this.config.Color1.value),this.program.uniforms.uColor2.value=new ke(this.config.Color2.value),this.program.uniforms.uColorSpeech.value=new ke(this.config.ColorSpeech.value),this.program.uniforms.uWavesOrigin.value=[this.config.WavesOrigin.value.x,this.config.WavesOrigin.value.y]}}class E1{constructor(e){this.scene=e,this.gl=e.gl,this.uniforms={},this.hasNormal=!0,this.onlyVertices=!1,this.customAttributes=[],this.node=new Sa,this.defines={},this.buffersOptions={},this.isHidden=!1}initProgram(e,n,r=[]){let i=this.gl,s=i.createShader(i.VERTEX_SHADER);i.shaderSource(s,e),i.compileShader(s);let o=i.createShader(i.FRAGMENT_SHADER);if(i.shaderSource(o,n),i.compileShader(o),!i.getShaderParameter(s,i.COMPILE_STATUS))return console.error("error vert",this,i.getShaderInfoLog(s)),null;if(!i.getShaderParameter(o,i.COMPILE_STATUS))return console.error("error frag",this,i.getShaderInfoLog(o)),null;let a=i.createProgram();i.attachShader(a,s),i.attachShader(a,o),i.isWebgl2&&i.transformFeedbackVaryings(a,r,i.SEPARATE_ATTRIBS),i.linkProgram(a),i.getProgramParameter(a,i.LINK_STATUS)||console.error("Could not initialise shaders",i.getProgramInfoLog(a)),i.useProgram(a),a.vertexPositionAttribute=i.getAttribLocation(a,"aPos"),this.onlyVertices||(a.vertexUvAttribute=i.getAttribLocation(a,"aUvs")),this.hasNormal&&(a.vertexNormalAttribute=i.getAttribLocation(a,"aNormal")),this.customAttributes.forEach(c=>{a[`${c.name}Attribute`]=i.getAttribLocation(a,c.attributeName)}),this.vertShader=s,this.fragSahder=o,this.program=a;const l=i.getProgramParameter(a,i.ACTIVE_ATTRIBUTES);for(let c=0;c<l;++c){const u=i.getActiveAttrib(a,c);i.getAttribLocation(a,u.name)}}initVao(){let e=this.gl,n=this.buffersOptions;this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.vertexPositionBuffer),e.vertexAttribPointer(this.program.vertexPositionAttribute,3,e.FLOAT,!1,n.vertices?n.vertices.byteStride:0,n.vertices?n.vertices.byteOffset:0),e.enableVertexAttribArray(this.program.vertexPositionAttribute),this.onlyVertices||(e.bindBuffer(e.ARRAY_BUFFER,this.uvsBuffer),e.vertexAttribPointer(this.program.vertexUvAttribute,2,e.FLOAT,!1,n.uvs?n.uvs.byteStride:0,n.uvs?n.uvs.byteOffset:0),e.enableVertexAttribArray(this.program.vertexUvAttribute)),this.hasNormal&&(e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.vertexAttribPointer(this.program.vertexNormalAttribute,3,e.FLOAT,!1,n.normals?n.normals.byteStride:0,n.normals?n.normals.byteOffset:0),e.enableVertexAttribArray(this.program.vertexNormalAttribute));for(let r=0;r<this.customAttributes.length;r++){const i=this.customAttributes[r];e.bindBuffer(e.ARRAY_BUFFER,i.buffer),e.vertexAttribPointer(this.program[i.name+"Attribute"],i.dimensions,e.FLOAT,!1,0,0),e.enableVertexAttribArray(this.program[i.name+"Attribute"])}this.onlyVertices||e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indicesBuffer),e.bindVertexArray(null)}initBuffer(e){let n=this.gl;e.options&&(this.buffersOptions=e.options);let r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e.vertices),n.STATIC_DRAW);let i=n.createBuffer();this.hasNormal&&(n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e.normal),n.STATIC_DRAW));let s=n.createBuffer(),o=n.createBuffer();this.onlyVertices||(n.bindBuffer(n.ARRAY_BUFFER,s),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e.uvs),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,o),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array(e.indices),n.STATIC_DRAW)),this.customAttributes.forEach(a=>{a.buffer=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,a.buffer),n.bufferData(n.ARRAY_BUFFER,new Float32Array(a.data),n.STATIC_DRAW)}),this.vertexPositionBuffer=r,this.uvsBuffer=s,this.hasNormal&&(this.normalBuffer=i),this.indicesBuffer=o}initMatrix(){this.createUniform("uPMatrix","mat4"),this.createUniform("uVMatrix","mat4"),this.createUniform("uMMatrix","mat4")}bindMatrixUniforms(e){this.bindUniform("uPMatrix",e.projectionMatrix),this.bindUniform("uVMatrix",e.viewMatrix),this.bindUniform("uMMatrix",this.node.getMatrix())}createUniform(e,n="float1"){return this.program[e+"Uniform"]=this.gl.getUniformLocation(this.program,e),this.uniforms[e+"Uniform"]={name:e,type:n,uniform:this.program[e+"Uniform"]},this.program[e+"Uniform"]}createAttribute(e,n,r,i){this.customAttributes.push({name:e,attributeName:n,dimensions:r,buffer:null,data:i})}bindUniform(e,n){let r=this.gl;this.uniforms[e+"Uniform"].type==="texture"&&r.uniform1i(this.program[e+"Uniform"],n),this.uniforms[e+"Uniform"].type==="textureCube"?r.uniform1i(this.program[e+"Uniform"],n):this.uniforms[e+"Uniform"].type==="float1"?r.uniform1f(this.program[e+"Uniform"],n):this.uniforms[e+"Uniform"].type==="float2"?r.uniform2fv(this.program[e+"Uniform"],n):this.uniforms[e+"Uniform"].type==="float3"?r.uniform3fv(this.program[e+"Uniform"],n):this.uniforms[e+"Uniform"].type==="float4"?r.uniform4fv(this.program[e+"Uniform"],n):this.uniforms[e+"Uniform"].type==="mat4"?r.uniformMatrix4fv(this.program[e+"Uniform"],!1,n):this.uniforms[e+"Uniform"].type==="[mat4]"&&r.uniformMatrix4fv(this.program[e+"Uniform"],!1,n)}checkVisibility(){return this.isHidden}}class $d{constructor(e,n,r,i="vec3"){this.scene=e,this.gl=e.gl,this.data=n,this.size=r,this.format=i,this.createTexture()}createTexture(){let e=this.gl,n=e.createTexture();e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_3D,n),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);var r=this.size;let i=e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_S,i),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_T,i),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_BASE_LEVEL,0),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAX_LEVEL,1),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage3D(e.TEXTURE_3D,0,e.RGB32F,r,r,r,0,e.RGB,e.FLOAT,this.data),this.texture=n}getTexture(){return this.texture}}var Ez=.5*(Math.sqrt(3)-1),Jr=(3-Math.sqrt(3))/6,Cz=1/3,dn=1/6,Az=(Math.sqrt(5)-1)/4,ot=(5-Math.sqrt(5))/20;function Yu(t){var e;typeof t=="function"?e=t:t?e=zz(t):e=Math.random,this.p=C1(e),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var n=0;n<512;n++)this.perm[n]=this.p[n&255],this.permMod12[n]=this.perm[n]%12}Yu.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(t,e){var n=this.permMod12,r=this.perm,i=this.grad3,s=0,o=0,a=0,l=(t+e)*Ez,c=Math.floor(t+l),u=Math.floor(e+l),h=(c+u)*Jr,f=c-h,d=u-h,p=t-f,m=e-d,g,x;p>m?(g=1,x=0):(g=0,x=1);var b=p-g+Jr,_=m-x+Jr,v=p-1+2*Jr,y=m-1+2*Jr,w=c&255,P=u&255,T=.5-p*p-m*m;if(T>=0){var R=n[w+r[P]]*3;T*=T,s=T*T*(i[R]*p+i[R+1]*m)}var k=.5-b*b-_*_;if(k>=0){var D=n[w+g+r[P+x]]*3;k*=k,o=k*k*(i[D]*b+i[D+1]*_)}var M=.5-v*v-y*y;if(M>=0){var z=n[w+1+r[P+1]]*3;M*=M,a=M*M*(i[z]*v+i[z+1]*y)}return 70*(s+o+a)},noise3D:function(t,e,n){var r=this.permMod12,i=this.perm,s=this.grad3,o,a,l,c,u=(t+e+n)*Cz,h=Math.floor(t+u),f=Math.floor(e+u),d=Math.floor(n+u),p=(h+f+d)*dn,m=h-p,g=f-p,x=d-p,b=t-m,_=e-g,v=n-x,y,w,P,T,R,k;b>=_?_>=v?(y=1,w=0,P=0,T=1,R=1,k=0):b>=v?(y=1,w=0,P=0,T=1,R=0,k=1):(y=0,w=0,P=1,T=1,R=0,k=1):_<v?(y=0,w=0,P=1,T=0,R=1,k=1):b<v?(y=0,w=1,P=0,T=0,R=1,k=1):(y=0,w=1,P=0,T=1,R=1,k=0);var D=b-y+dn,M=_-w+dn,z=v-P+dn,S=b-T+2*dn,A=_-R+2*dn,I=v-k+2*dn,B=b-1+3*dn,$=_-1+3*dn,ne=v-1+3*dn,pe=h&255,ge=f&255,ve=d&255,ze=.6-b*b-_*_-v*v;if(ze<0)o=0;else{var Ee=r[pe+i[ge+i[ve]]]*3;ze*=ze,o=ze*ze*(s[Ee]*b+s[Ee+1]*_+s[Ee+2]*v)}var N=.6-D*D-M*M-z*z;if(N<0)a=0;else{var Q=r[pe+y+i[ge+w+i[ve+P]]]*3;N*=N,a=N*N*(s[Q]*D+s[Q+1]*M+s[Q+2]*z)}var W=.6-S*S-A*A-I*I;if(W<0)l=0;else{var J=r[pe+T+i[ge+R+i[ve+k]]]*3;W*=W,l=W*W*(s[J]*S+s[J+1]*A+s[J+2]*I)}var se=.6-B*B-$*$-ne*ne;if(se<0)c=0;else{var Se=r[pe+1+i[ge+1+i[ve+1]]]*3;se*=se,c=se*se*(s[Se]*B+s[Se+1]*$+s[Se+2]*ne)}return 32*(o+a+l+c)},noise4D:function(t,e,n,r){var i=this.perm,s=this.grad4,o,a,l,c,u,h=(t+e+n+r)*Az,f=Math.floor(t+h),d=Math.floor(e+h),p=Math.floor(n+h),m=Math.floor(r+h),g=(f+d+p+m)*ot,x=f-g,b=d-g,_=p-g,v=m-g,y=t-x,w=e-b,P=n-_,T=r-v,R=0,k=0,D=0,M=0;y>w?R++:k++,y>P?R++:D++,y>T?R++:M++,w>P?k++:D++,w>T?k++:M++,P>T?D++:M++;var z,S,A,I,B,$,ne,pe,ge,ve,ze,Ee;z=R>=3?1:0,S=k>=3?1:0,A=D>=3?1:0,I=M>=3?1:0,B=R>=2?1:0,$=k>=2?1:0,ne=D>=2?1:0,pe=M>=2?1:0,ge=R>=1?1:0,ve=k>=1?1:0,ze=D>=1?1:0,Ee=M>=1?1:0;var N=y-z+ot,Q=w-S+ot,W=P-A+ot,J=T-I+ot,se=y-B+2*ot,Se=w-$+2*ot,me=P-ne+2*ot,E=T-pe+2*ot,O=y-ge+3*ot,U=w-ve+3*ot,V=P-ze+3*ot,j=T-Ee+3*ot,K=y-1+4*ot,Z=w-1+4*ot,Y=P-1+4*ot,X=T-1+4*ot,H=f&255,L=d&255,F=p&255,q=m&255,G=.6-y*y-w*w-P*P-T*T;if(G<0)o=0;else{var te=i[H+i[L+i[F+i[q]]]]%32*4;G*=G,o=G*G*(s[te]*y+s[te+1]*w+s[te+2]*P+s[te+3]*T)}var ee=.6-N*N-Q*Q-W*W-J*J;if(ee<0)a=0;else{var _e=i[H+z+i[L+S+i[F+A+i[q+I]]]]%32*4;ee*=ee,a=ee*ee*(s[_e]*N+s[_e+1]*Q+s[_e+2]*W+s[_e+3]*J)}var re=.6-se*se-Se*Se-me*me-E*E;if(re<0)l=0;else{var qe=i[H+B+i[L+$+i[F+ne+i[q+pe]]]]%32*4;re*=re,l=re*re*(s[qe]*se+s[qe+1]*Se+s[qe+2]*me+s[qe+3]*E)}var $e=.6-O*O-U*U-V*V-j*j;if($e<0)c=0;else{var fn=i[H+ge+i[L+ve+i[F+ze+i[q+Ee]]]]%32*4;$e*=$e,c=$e*$e*(s[fn]*O+s[fn+1]*U+s[fn+2]*V+s[fn+3]*j)}var Tt=.6-K*K-Z*Z-Y*Y-X*X;if(Tt<0)u=0;else{var Si=i[H+1+i[L+1+i[F+1+i[q+1]]]]%32*4;Tt*=Tt,u=Tt*Tt*(s[Si]*K+s[Si+1]*Z+s[Si+2]*Y+s[Si+3]*X)}return 27*(o+a+l+c+u)}};function C1(t){var e,n=new Uint8Array(256);for(e=0;e<256;e++)n[e]=e;for(e=0;e<255;e++){var r=e+~~(t()*(256-e)),i=n[e];n[e]=n[r],n[r]=i}return n}Yu._buildPermutationTable=C1;function zz(){var t=0,e=0,n=0,r=1,i=Rz();t=i(" "),e=i(" "),n=i(" ");for(var s=0;s<arguments.length;s++)t-=i(arguments[s]),t<0&&(t+=1),e-=i(arguments[s]),e<0&&(e+=1),n-=i(arguments[s]),n<0&&(n+=1);return i=null,function(){var o=2091639*t+r*23283064365386963e-26;return t=e,e=n,n=o-(r=o|0)}}function Rz(){var t=4022871197;return function(e){e=e.toString();for(var n=0;n<e.length;n++){t+=e.charCodeAt(n);var r=.02519603282416938*t;t=r>>>0,r-=t,r*=t,t=r>>>0,r-=t,t+=r*4294967296}return(t>>>0)*23283064365386963e-26}}var A1={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Io,function(){return n.importState=function(i){var s=new n;return s.importState(i),s},n;function n(){return function(i){var s=0,o=0,a=0,l=1;i.length==0&&(i=[+new Date]);var c=r();s=c(" "),o=c(" "),a=c(" ");for(var u=0;u<i.length;u++)s-=c(i[u]),s<0&&(s+=1),o-=c(i[u]),o<0&&(o+=1),a-=c(i[u]),a<0&&(a+=1);c=null;var h=function(){var f=2091639*s+l*23283064365386963e-26;return s=o,o=a,a=f-(l=f|0)};return h.next=h,h.uint32=function(){return h()*4294967296},h.fract53=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.version="Alea 0.9",h.args=i,h.exportState=function(){return[s,o,a,l]},h.importState=function(f){s=+f[0]||0,o=+f[1]||0,a=+f[2]||0,l=+f[3]||0},h}(Array.prototype.slice.call(arguments))}function r(){var i=4022871197,s=function(o){o=o.toString();for(var a=0;a<o.length;a++){i+=o.charCodeAt(a);var l=.02519603282416938*i;i=l>>>0,l-=i,l*=i,i=l>>>0,l-=i,i+=l*4294967296}return(i>>>0)*23283064365386963e-26};return s.version="Mash 0.9",s}})})(A1);const z1=A1.exports;let Xd=null,Tl=null;const R1={genSeed(t){Tl=t||Math.random(),Xd=new z1(Tl),this.count=0},getSeed(){return Tl},getNext(t=0,e=1){return this.count++,Xd()*(e-t)+t}},_s=Jg({id:"userStore",state:()=>({marketingOptIn:!1,firstname:"",email:"",company:"",dipperOrDiver:"",urlOrIrl:"",color:"amethyst",fameOrFortune:"",cloudOrDetails:"",archetype:"",tortoiseOrHare:"",mathematicianOrArtist:"",seed:"",profile:"",qrCode:"",result:null,questionnaireDone:!1})}),O1={isWide:!1},ti={particleCount:{default:{min:52e3,max:52500},wide:{min:1e4,max:8e4},questionId:"cloudOrDetails",answerParams:{cloud:{min:2e4,max:4e4},details:{min:5e4,max:9e4}}},particleScale:{default:{min:18,max:19},wide:{min:10,max:50},questionId:"fameOrFortune",answerParams:{fame:{min:30,max:50},fortune:{min:15,max:20}}},noiseFieldScale:{default:{min:.8,max:.9},wide:{min:.5,max:5},questionId:"mathematicianOrArtist",answerParams:{mathematician:{min:2,max:4},artist:{min:.75,max:1.2}}},turbulenceScale:{default:{min:.001,max:.002},wide:{min:0,max:.02},questionId:"tortoiseOrHare",answerParams:{hare:{min:.01,max:.015},tortoise:{min:0,max:.005}}},spawnerSize:{default:{min:1,max:1.1},wide:{min:.2,max:1.7},questionId:"dipperOrDiver",answerParams:{dipper:{min:.3,max:.6},diver:{min:1.2,max:1.5}}},speed:{default:{min:.9,max:.92},wide:{min:.1,max:2},questionId:"urlOrIrl",answerParams:{url:{min:.75,max:1.5},irl:{min:.25,max:.5}}}};function ss(t){O1.isWide=t}function pn(t){const e=_s();let n=ti[t].questionId;return O1.isWide?ti[t].wide:e[n]&&e[n].length>0&&ti[t].answerParams[e[n]]?ti[t].answerParams[e[n]]:ti[t].default}function Oz(t){for(const e in ti)if(Object.hasOwnProperty.call(ti,e)){if(ti[e].questionId==t)return e}else return}const Mi=tt();class Mz{constructor(e,n){this.scene=e,this.random=n,this.texSize=16,this.voxelSize=3,this.fieldFuncName="noiseField",this.fieldVortexParams=[this.random.getNext(10,30),this.random.getNext(10,30)],this.fieldScale=1+Math.pow(this.random.getNext(),3)*5,this.fieldPower=this.random.getNext(.5,3),this.fieldConvolutions=this.random.getNext(3,12),this.noise=new Yu(this.random.getSeed()),this.initTexture()}smoothstep(e,n,r){const i=Math.max(0,Math.min(1,(r-e)/(n-e)));return i*i*(3-2*i)}snoiseVec3(e){const n=this.noise.noise3D(e[0],e[1],e[2]),r=this.noise.noise3D(e[1]-19.1,e[2]+33.4,e[0]+47.2),i=this.noise.noise3D(e[2]+74.2,e[0]-124.5,e[1]+99.4);return[n,r,i]}noiseField(e){const n=tt(),r=.1,i=We(r,0,0),s=We(0,r,0),o=We(0,0,r);bn(n,e,i);const a=this.snoiseVec3(n);Ln(n,e,i);const l=this.snoiseVec3(n);bn(n,e,s);const c=this.snoiseVec3(n);Ln(n,e,s);const u=this.snoiseVec3(n);bn(n,e,o);const h=this.snoiseVec3(n);Ln(n,e,o);const f=this.snoiseVec3(n),d=u[2]-c[2]-f[1]+h[1],p=f[0]-h[0]-l[2]+a[2],m=l[1]-a[1]-u[0]+c[0],g=1/(2*r);return iE(n,[d,p,m]),yn(n,n,g),ui(n,n),Fn(n)}burst(e){const n=tt();bn(n,e,[0,0,0]);const r=xc(n),i=.05+(Math.cos(r*this.fieldConvolutions*Math.PI)+1)/2*this.fieldPower;return ui(n,n),yn(n,n,i),Fn(n)}vortex(e){const n=this.burst(e);let r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=Math.atan2(e[1],e[0]),s=Math.acos(e[2]/r);s+=Math.PI/2*Math.sin(e[1]*this.fieldVortexParams[0]),i+=Math.PI/2*this.fieldVortexParams[1];const o=We(Math.sin(s)*Math.sin(i),Math.sin(s)*Math.cos(i),Math.cos(s));return In(o,n,o),Fn(o)}gravitation(e){const n=this.burst(e);let r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=Math.atan2(e[1],e[0]),s=Math.acos(e[2]/r);const o=We(Math.sin(s)*Math.sin(i),Math.sin(s)*Math.cos(i),Math.cos(s));return In(o,n,o),Fn(o)}matrix(e){const n=We(0,Math.sin(e[0]*this.fieldVortexParams[0])+Math.sin(e[2]*this.fieldVortexParams[1]),0);return Fn(n)}dispose(){this.scene.gl.deleteTexture(this.texture.texture),this.texture=null}initTexture(){let e=[],n=R1.getNext(pn("noiseFieldScale").min,pn("noiseFieldScale").max);if(this.fieldFuncName!=="sdf"){for(let r=0;r<this.texSize;r++)for(let i=0;i<this.texSize;i++)for(let s=0;s<this.texSize;s++){let o=(r/this.texSize-.5)*2,a=(i/this.texSize-.5)*2,l=(s/this.texSize-.5)*2;bn(Mi,[0,0,0],[o,a,l]);const c=xc(Mi);ui(Mi,Mi);let u=tt(),h=We(o*n,a*n,l*n);u=this[this.fieldFuncName](h),yn(u,u,.1),yn(Mi,Mi,.1),Mu(u,u,Mi,this.smoothstep(.75,1,c)),e.push(u[2]),e.push(u[1]),e.push(u[0])}this.texture=new $d(this.scene,new Float32Array(e),this.texSize)}else this.texture=new $d(this.scene,this.scene.voxelData0,25)}}class Yd{constructor(e=1,n=1){this.parameters={height:e,heightSegments:n};const r=Math.floor(n),i=r+1,s=e/r,o=[],a=[];for(let l=0;l<i;l++){const c=l*s;o.push(0,0,c),a.push(0),a.push(1-l/r)}this.vertices=o,this.uvs=a}}const go=$i();tt();class Fz{constructor(e){this.seed=e||Math.random(),this.prng=new z1(this.seed)}getSeed(){return this.seed}getNext(e=0,n=1){return this.prng()*(n-e)+e}}const El=(t,e)=>We((e.getNext()-.5)*2*t,(e.getNext()-.5)*2*t,(e.getNext()-.5)*2*t),Kd=(t,e)=>{const n=e.getNext(),r=e.getNext()*2*Math.PI,i=Math.acos(2*n-1),s=e.getNext()*t;return We(s*Math.sin(i)*Math.cos(r),s*Math.sin(i)*Math.sin(r),s*Math.cos(i))},Qd=[El,El,El,Kd,Kd];class Ko extends E1{constructor(e,{seed:n=Math.random(),colors:r=null,renderOrder:i=0,autoPlay:s=!1,name:o="",params:a=void 0,secondary:l=!1,needPerfCheck:c=!1}={}){super(e),this.gl=e.gl,this.scene=e,this.renderOrder=i,this.params=a,this.secondary=l,this.node=new Sa,this.localTime=0,this.node.scale[0]=1,this.node.scale[1]=1,this.node.scale[2]=1,this.random=new Fz(n),this._seed=n,this.isDrawing=!1,this.needPerfCheck=c;let u=1;if(vi)switch(window.tier.tier){case 1:u=.7;break;case 2:u=.8;break;case 3:u=1;break}else u=.1;this.particlesTimeScale=this.random.getNext(pn("speed").min,pn("speed").max),this.particlesLifeSpan=this.currentSceneId=="home"||this.currentSceneId=="experience"?this.random.getNext(2,4):this.random.getNext(5,8),this.particlesLifeSpanVariation=.5,this.particlesScale=Math.round(this.random.getNext(pn("particleScale",this.params).min,pn("particleScale",this.params).max)),this.particlesScaleVariation=this.random.getNext(0,5),this.particlesNoiseFrequency=.4,this.particlesNoiseIntensity=.015,this.particlesWind=[this.random.getNext(),this.random.getNext(),this.random.getNext()],this.colorOffset=0,this.hasNormal=!1,this.onlyVertices=!0,this.scene.transformFeedbackStruggle&&(u=.1,this.particlesScale*=3),this.count=Math.round(this.random.getNext(pn("particleCount",this.params).min,pn("particleCount",this.params).max)),this.count=Math.round(this.count*u),this.secondary&&(this.count=Math.round(this.count/400)),this.opacity=0,this.faceOpacity=1,this.explosionProgress=0,this.timeScaleOffset=0,this.hoverPoint=void 0,this.colors=r,this.name=o,this.isLoadingState=!1,this.isLoadingStateProgress=0,this.transitionColor0="#000000",this.transitionColor1="#000000",this.transitionColorProgress=0,this.normalMatrix=$i(),this.particlesColor=We(1,1,1),this.vertices=this.createParticles(),this.spiritPositionTarget=tt(),this.spiritPosition=tt(),this.spiritDirection=tt(),this.spiritFreedom=0,this.defines.USE_IBL=1,this.defines.MANUAL_SRGB=1,this.defines.HAS_NORMALS=1,this.defines.HAS_UV=1,this.dying=!1,this.secondary?this.vectorField=this.scene.spirits[this.name.replace("_secondary","")].vectorField:this.vectorField=new Mz(this.scene,this.random),this.localState={uniforms:{}},this.createAttribute("aSeed","aSeed",4,this.seeds),this.createAttribute("aInitialPos","aInitialPos",3,this.vertices),this.createAttribute("aTime","aTime",1,this.time),this.createAttribute("aPlanePos","aPlanePos",3,this.planeVertices),this.createAttribute("aPlaneUvs","aPlaneUvs",2,this.planeUvs),this.initBuffer({vertices:this.vertices}),this.config={Count:{value:this.count,params:{step:1}},color0:{value:this.colors.spiritColor0,params:{}},color1:{value:this.colors.spiritColor1,params:{}},Matcap:{value:this.colors.spiritMatCap,params:{options:{default:"Matcap_001",intro:"Matcap_003",funky:"Matcap_002"}}},Opacity:{value:.35,params:{min:0,max:1,step:.01}},TimeScale:{value:this.particlesTimeScale,params:{min:.3,max:5,step:.01}},LifeSpan:{value:this.particlesLifeSpan,params:{min:2,max:10,step:.1}},LifeSpanVariation:{value:this.particlesLifeSpanVariation,params:{min:.2,max:.6,step:.01}},ParticlesScale:{value:this.particlesScale,params:{min:5,max:40,step:1}},ParticlesScaleVariation:{value:this.particlesScaleVariation,params:{min:0,max:30,step:1}},ParticlesScaleVariation:{value:this.particlesScaleVariation,params:{min:0,max:30,step:1}},NoiseFrenquency:{value:this.particlesNoiseFrequency,params:{min:.1,max:3,step:.01}},NoiseIntensity:{value:this.particlesNoiseIntensity,params:{min:0,max:.2,step:.001}}},this.secondary&&(this.config.color0.value="#ffffff",this.config.color1.value="#00ffff"),xe.active&&(this.gui=xe.addBlade(this.config,"Spirit - "+this.name,1),xe.addTextureUpload(this,{maps:["matcap"],callback:h=>{this.texture=this.initTexture(h.image,["flipY","repeat"])}})),this.maxTextureIndex=0,this.shader=new jn(Zt.particles,1,this.defines),this.initProgram(this.shader.vert,this.shader.frag,["vPositiions","vTime"]),this.initMatrix(),this.createUniforms(),this.texture=this.initTexture(this.scene.textureLoader.getTexture(this.config.Matcap.value).image,["flipY","repeat"]),s&&this.handleShow()}initTexture(e,n){let r=this.gl,i=r.createTexture();r.bindTexture(r.TEXTURE_2D,i),n.indexOf("flipY")>-1?r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0):r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e);const s=e.width,o=e.height;let a=r.CLAMP_TO_EDGE;return s===o&&s&&(s&s-1)===0&&(a=r.REPEAT),n.indexOf("mirror")>-1&&(a=r.MIRRORED_REPEAT),n.indexOf("repeat")>-1&&(a=r.REPEAT),n.indexOf("clamp")>-1&&(a=r.CLAMP_TO_EDGE),n.indexOf("mipmap")>-1&&r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,a),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,a),n.indexOf("mipmap")>-1?r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR):r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),i}createParticles(){let e=this.count;this.seeds=[],this.vel=[],this.time=[],this.planeVertices=[],this.planeUvs=[],this.planeNormals=[];let n=[],r=this.random.getNext(pn("spawnerSize").min,pn("spawnerSize").max),i=Qd[Math.floor(this.random.getNext(0,Qd.length))];for(;e--;){let s;this.secondary||this.scene.transformFeedbackStruggle?s=new Yd(1,1):s=new Yd(1,2+Math.round(this.random.getNext()*3));let o=this.random.getNext(),a=this.random.getNext(),l=this.random.getNext(),c=this.random.getNext();const u=i(r,this.random);let h=u[0],f=u[1],d=u[2];for(let p=0;p<s.vertices.length/3;p++)this.planeVertices.push(s.vertices[p*3+0]),this.planeVertices.push(s.vertices[p*3+1]),this.planeVertices.push(s.vertices[p*3+2]),this.planeUvs.push(s.uvs[p*2+0]),this.planeUvs.push(s.uvs[p*2+1]),n.push(h),n.push(f),n.push(d),this.seeds.push(o),this.seeds.push(a),this.seeds.push(l),this.seeds.push(c),this.vel.push(0),this.vel.push(0),this.vel.push(0),this.time.push(0)}return n}initBuffer(e){let n=this.gl;e.options&&(this.buffersOptions=e.options);let r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e.vertices),n.STATIC_DRAW),this.vertexPositionBuffer=r;let i=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e.vertices),n.DYNAMIC_DRAW),this.transformBufferIN=i;let s=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,s),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e.vertices),n.DYNAMIC_DRAW),this.transformBufferOUT=s;let o=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(this.time),n.DYNAMIC_DRAW),this.transformTimeBufferIN=o;let a=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,a),n.bufferData(n.ARRAY_BUFFER,new Float32Array(this.time),n.DYNAMIC_DRAW),this.transformTimeBufferOUT=a,this.customAttributes.forEach(l=>{l.buffer=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,l.buffer),n.bufferData(n.ARRAY_BUFFER,new Float32Array(l.data),n.STATIC_DRAW)}),this.transformFeedback=n.createTransformFeedback()}createUniforms(){this.createUniform("uNMatrix","mat4"),this.createUniform("uTexture","texture"),this.createUniform("uVoxels","texture"),this.createUniform("uParticleColor0","float3"),this.createUniform("uParticleColor1","float3"),this.createUniform("uTransitionColor0","float3"),this.createUniform("uTransitionColor1","float3"),this.createUniform("uFogColor","float3"),this.createUniform("uCamera","float3"),this.createUniform("uHoverPoint","float3"),this.createUniform("uWind","float3"),this.createUniform("uSpiritDirection","float3"),this.createUniform("uPixelRatio"),this.createUniform("uTime"),this.createUniform("uParticleOpacity"),this.createUniform("uParticleScale"),this.createUniform("uDeltaTime"),this.createUniform("uLifeSpan"),this.createUniform("uLifeSpanVariation"),this.createUniform("uVoxelSize"),this.createUniform("uRibonScale"),this.createUniform("uRibonScaleVariation"),this.createUniform("uNoiseFrequency"),this.createUniform("uTimeScale"),this.createUniform("uNoiseIntensity"),this.createUniform("uExplosion"),this.createUniform("uTransitionColorProgress"),this.createUniform("uColorOffset"),this.createUniform("uFaceOpacity"),this.createUniform("uLoadingState");for(const e in this.localState.uniforms)Object.hasOwnProperty.call(this.localState.uniforms,e)&&this.createUniform(e,this.localState.uniforms[e].type)}applyState(){let e=this.gl;this.scene.applyDefaultState(),e.disable(e.CULL_FACE),e.depthMask(!1),e.disable(e.DEPTH_TEST)}addEvents(){this.bindedHandleShow=this.handleShow.bind(this),this.bindedHandleHide=this.handleHide.bind(this),this.bindedHandleConfigChange=this.handleConfigChange.bind(this),GlobalEmitter.on("webgl_spirit_show",this.bindedHandleShow),GlobalEmitter.on("webgl_spirit_hide",this.bindedHandleHide),GlobalEmitter.on("webgl_spirit_config",this.bindedHandleConfigChange)}removeEvents(){GlobalEmitter.off("webgl_spirit_show",this.bindedHandleShow),GlobalEmitter.off("webgl_spirit_hide",this.bindedHandleHide),GlobalEmitter.off("webgl_spirit_config",this.bindedHandleConfigChange)}handleShow(e=!1,n=!0){if(!this.dying){if(this.gsapAnim&&this.gsapAnim.kill(),this.renderOrder=1,!n){this.opacity=1,this.explosionProgress=0,this.timeScaleOffset=0;return}this.gsapAnim=Ie.fromTo(this,{opacity:0,explosionProgress:e?.5:0},{opacity:1,explosionProgress:0,ease:"power2.out",duration:4,delay:e?2:0})}}handleHide(e=!0,n=2){if(this.dying)return;let r;const i=new Promise(s=>{r=s});if(this.gsapAnim&&this.gsapAnim.kill(),this.renderOrder=0,!e){this.opacity=0,this.explosionProgress=.25,this.timeScaleOffset=.5,this.isDying=!0;return}return this.gsapAnim=Ie.fromTo(this,{explosionProgress:0,timeScaleOffset:0,opacity:1},{explosionProgress:.25,timeScaleOffset:.5,opacity:0,ease:"sine.out",onComplete:()=>{r()},duration:n}),i}handleIdle(e=!0){let n;const r=new Promise(i=>{n=i});return Ie.to(this,{spiritFreedom:e?1:0,duration:1,ease:"sine.inOut",onComplete:()=>{n()}}),r}setColor(e){this.tlColor&&(this.tlColor.progress(1),this.tlColor.kill()),this.colors=Oe[e],this.transitionColor0=this.colors.spiritColor0,this.transitionColor1=this.colors.spiritColor1,this.tlColor=Ie.timeline(),this.tlColor.fromTo(this,{transitionColorProgress:0},{transitionColorProgress:1,duration:1.25,ease:"power3.inOut",onStart:()=>{this.texture=this.initTexture(this.scene.textureLoader.getTexture(this.colors.spiritMatCap).image,["flipY","repeat"])},onComplete:()=>{this.config.color0.value=this.colors.spiritColor0,this.config.color1.value=this.colors.spiritColor1,this.transitionColorProgress=0,this.transitionColor0="#000000",this.transitionColor1="#000000"}},0),this.tlColor.to(this,{timeScaleOffset:1,ease:"power3.inOut",duration:1,yoyo:!0,repeat:1},0)}handleConfigChange(){}preRender(){this.time+=this.scene.dt/1e3*.5,gv(go,this.scene.camera.viewMatrix,this.node.getMatrix()),nE(go,go),tE(this.normalMatrix,go),this.particlesTimeScale=this.config.TimeScale.value,this.particlesLifeSpan=this.config.LifeSpan.value,this.particlesLifeSpanVariation=this.config.LifeSpanVariation.value,this.particlesScale=this.config.ParticlesScale.value,this.particlesScaleVariation=this.config.ParticlesScaleVariation.value,this.particlesNoiseFrequency=this.config.NoiseFrenquency.value,this.particlesNoiseIntensity=this.config.NoiseIntensity.value}render({feedback:e=!0,depthPass:n=!1,post:r=null}={}){if(this.needPerfCheck&&this.isDrawing)return;this.isLoadingStateProgress+=((this.isLoadingState?1:0)-this.isLoadingStateProgress)*.03,this.spiritPositionTarget[0]=Math.cos(this.scene.time*.3)*2*this.spiritFreedom,this.spiritPositionTarget[1]=Math.sin(this.scene.time*.6)*1*this.spiritFreedom,this.localTime+=this.scene.dt/1e3,bn(this.spiritDirection,this.spiritPositionTarget,this.spiritPosition),yn(this.spiritDirection,this.spiritDirection,.01),Ln(this.spiritPosition,this.spiritPosition,this.spiritDirection),r!==null&&(this.scene.renderer.bindFramebuffer({target:this.gl.FRAMEBUFFER,buffer:r.rt.fb}),this.scene.renderer.setViewport(r.rt.width,r.rt.height)),this.preRender();let i=this.gl;i.useProgram(this.program),this.gl.renderer.currentProgram="ribons",this.gl.renderer.currentGeometry="ribons",i.bindVertexArray(null),this.buffersOptions,e&&i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,this.transformFeedback),i.bindBuffer(i.ARRAY_BUFFER,this.transformBufferIN),i.vertexAttribPointer(this.program.vertexPositionAttribute,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(this.program.vertexPositionAttribute);for(let s=0;s<this.customAttributes.length;s++){const o=this.customAttributes[s];i.bindBuffer(i.ARRAY_BUFFER,o.buffer),i.vertexAttribPointer(this.program[o.name+"Attribute"],o.dimensions,i.FLOAT,!1,0,0),i.enableVertexAttribArray(this.program[o.name+"Attribute"])}i.bindBuffer(i.ARRAY_BUFFER,this.transformTimeBufferIN),i.vertexAttribPointer(this.program.aTimeAttribute,1,i.FLOAT,!1,0,0),i.enableVertexAttribArray(this.program.aTimeAttribute),this.applyState(),this.bindMatrixUniforms(this.scene.camera),this.bindUniform("uNMatrix",this.normalMatrix),this.bindUniform("uCamera",this.scene.camera.position),this.bindUniform("uParticleColor0",new ke(this.config.color0.value)),this.bindUniform("uParticleColor1",new ke(this.config.color1.value)),this.bindUniform("uTransitionColor0",new ke(this.transitionColor0)),this.bindUniform("uTransitionColor1",new ke(this.transitionColor1)),this.bindUniform("uTransitionColorProgress",this.transitionColorProgress),this.bindUniform("uTime",this.localTime),this.bindUniform("uDeltaTime",this.scene.dt/1e3*(this.particlesTimeScale+this.timeScaleOffset)),this.bindUniform("uParticleOpacity",this.opacity*this.config.Opacity.value*this.faceOpacity),this.bindUniform("uParticleScale",this.particlesScale),this.bindUniform("uPixelRatio",this.scene.dpr),this.bindUniform("uLifeSpan",this.particlesLifeSpan),this.bindUniform("uVoxelSize",this.vectorField.voxelSize),this.bindUniform("uLifeSpanVariation",this.particlesLifeSpanVariation),this.bindUniform("uRibonScale",this.particlesScale),this.bindUniform("uRibonScaleVariation",this.particlesScaleVariation),this.bindUniform("uHoverPoint",this.hoverPoint?this.hoverPoint:[100,0,-100]),this.bindUniform("uNoiseFrequency",this.particlesNoiseFrequency),this.bindUniform("uNoiseIntensity",this.particlesNoiseIntensity*this.spiritFreedom),this.bindUniform("uTimeScale",this.particlesTimeScale+this.timeScaleOffset),this.bindUniform("uWind",this.particlesWind),this.bindUniform("uExplosion",this.explosionProgress),this.bindUniform("uSpiritDirection",this.spiritDirection),this.bindUniform("uFaceOpacity",this.scene.particlesFace?this.scene.particlesFace.opacity:1),this.bindUniform("uLoadingState",this.isLoadingStateProgress),this.bindUniform("uVoxels",0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_3D,this.vectorField.texture.getTexture()),this.bindUniform("uTexture",1),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,this.texture);for(const s in this.localState.uniforms)Object.hasOwnProperty.call(this.localState.uniforms,s)&&(this.localState.uniforms[s].type=="texture"||this.bindUniform(s,this.localState.uniforms[s].vals));if(e&&(i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,this.transformBufferOUT),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,1,this.transformTimeBufferOUT),i.vertexAttribDivisor(0,0),i.vertexAttribDivisor(1,0),i.beginTransformFeedback(i.POINTS)),this.isDrawing=!0,i.drawArrays(i.POINTS,0,this.vertices.length/3),this.needPerfCheck){let s=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0),o=performance.now();this.drawCheckInterval=setInterval(()=>{var a=i.clientWaitSync(s,0,0);if(a==i.CONDITION_SATISFIED){i.deleteSync(s),this.isDrawing=!1,this.needPerfCheck=!1;let l=performance.now()-o;this.scene._emitter.emit("spirit-render-time-perfcheck",l),clearInterval(this.drawCheckInterval)}},.01)}if(e){i.endTransformFeedback(),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,null),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,1,null);let s;s=this.transformBufferIN,this.transformBufferIN=this.transformBufferOUT,this.transformBufferOUT=s,s=this.transformTimeBufferIN,this.transformTimeBufferIN=this.transformTimeBufferOUT,this.transformTimeBufferOUT=s}i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),i.disableVertexAttribArray(this.program.disableVertexAttribArray),i.disableVertexAttribArray(this.program.aTimeAttribute);for(let s=0;s<this.customAttributes.length;s++){const o=this.customAttributes[s];i.disableVertexAttribArray(this.program[o.name+"Attribute"])}i.useProgram(null),i.bindVertexArray(null),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_3D,null),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,null)}dispose(){let e=this.gl;xe.active&&xe.tab.pages[1].remove(this.gui),e.deleteBuffer(this.transformBufferIN),e.deleteBuffer(this.transformBufferOUT),e.deleteBuffer(this.transformTimeBufferIN),e.deleteBuffer(this.transformTimeBufferOUT);for(let n=0;n<this.customAttributes.length;n++){const r=this.customAttributes[n];e.deleteBuffer(r.buffer)}e.deleteShader(this.vertShader),e.deleteShader(this.fragSahder),e.deleteProgram(this.program),e.deleteTransformFeedback(this.transformFeedback),e.deleteTexture(this.texture),this.vectorField.dispose(),this.vectorField=null}}class Bc{constructor(e,n=1,r="rgb",i=null,s=!1,o="linear",a=!1,l=null){this.scene=e,this.gl=e.gl,this.pixelRatio=n,this.format=r,this.size=i,this.depth=s,this.filter=o,this.transparent=a,this.depthTexture=null,this.previousFrameBuffer=null,this.preventResize=!1,this.data=l,i===null?(this.width=this.scene.width*this.pixelRatio,this.height=this.scene.height*this.pixelRatio):(this.width=i,this.height=i),this.createTexture(),s&&this.createDepthTexture(),this.createFB(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),window.addEventListener("resize",this.onResize.bind(this))}createTexture(){let e=this.gl;this.targetTexture=this.gl.createTexture(),e.bindTexture(e.TEXTURE_2D,this.targetTexture);let n=0,r=e.RGBA,i=0,s=e.RGBA,o=e.UNSIGNED_BYTE;this.format==="float"&&(o=vi?e.FLOAT:e.HALF_FLOAT||e.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES,r=e.renderer.isWebgl2?o===e.FLOAT?e.RGBA32F:e.RGBA16F:e.RGBA);let a=this.data;e.texImage2D(e.TEXTURE_2D,n,r,this.width,this.height,i,s,o,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),this.filter=="nearest"&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)),e.bindTexture(e.TEXTURE_2D,null)}createDepthTexture(){let e=this.scene.gl;this.depthTexture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.depthTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),this.filter=="nearest"&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.renderer.isWebgl2?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT,this.width,this.height,0,e.DEPTH_COMPONENT,e.UNSIGNED_INT,null),e.bindTexture(e.TEXTURE_2D,null)}onResize(){if(this.preventResize)return;let e=this.gl;this.size===null?(this.width=this.scene.width*this.pixelRatio,this.height=this.scene.height*this.pixelRatio):(this.width=this.size,this.height=this.size),e.deleteTexture(this.targetTexture),this.depth&&e.deleteTexture(this.depthTexture),e.deleteFramebuffer(this.fb),this.createTexture(),this.depth&&this.createDepthTexture(),this.createFB(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}createFB(){let e=this.gl;this.fb=e.createFramebuffer(),this.fb.width=this.width,this.fb.height=this.height,e.bindFramebuffer(e.FRAMEBUFFER,this.fb);const n=0,r=e.COLOR_ATTACHMENT0;e.framebufferTexture2D(e.FRAMEBUFFER,r,e.TEXTURE_2D,this.targetTexture,n);const i=e.createRenderbuffer();e.bindRenderbuffer(e.RENDERBUFFER,i),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,this.width,this.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,i),this.depth&&e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,this.depthTexture,0)}clear(){let e=this.gl;this.transparent?(e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)):(e.clearColor(this.scene.clearColor[0],this.scene.clearColor[1],this.scene.clearColor[2],this.scene.clearColor[3]),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT))}preRender(){let e=this.gl;this.previousFrameBuffer=this.scene.activeFrameBuffer!==void 0?this.scene.activeFrameBuffer:null,this.scene.activeFrameBuffer=this.fb,e.bindFramebuffer(e.FRAMEBUFFER,this.scene.activeFrameBuffer),e.viewport(0,0,this.width,this.height),this.clear()}postRender(){let e=this.gl;this.scene.activeFrameBuffer=this.previousFrameBuffer,e.bindFramebuffer(e.FRAMEBUFFER,this.scene.activeFrameBuffer),e.viewport(0,0,this.scene.width,this.scene.height)}bind(){let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.targetTexture)}bindDepth(){let e=this.gl;this.depth&&e.bindTexture(e.TEXTURE_2D,this.depthTexture)}getTexture(){return this.targetTexture}getDepthTexture(){return this.depthTexture}}$i();const kz=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Cl=[0,1,2,0,2,3],Lz=[0,1,0,0,1,0,1,1];class M1 extends E1{constructor(e,n,r){super(e),this.hasNormal=!1,this.parent=n,this.rtScale=.3,this.power=0,this.id=r,this.transparent=!0,this.direction=[0,0],this.threshold=0,this.color=We(1,1,1),this.blurPass=[[4,-1],[-1,4],[1,0],[0,1]];var i=new jn(Zt.postBlur,2,{TRANSPARENT:this.transparent?1:0});this.initProgram(i.vert,i.passes[0]),this.initBuffer({vertices:kz,uvs:Lz,indices:Cl}),this.initVao(),this.createUniforms(),this.activeRt=0,this.disabledRt=1,this.rts=[new Bc(this.scene,this.rtScale,"rgba",null,!0,"linear",this.transparent),new Bc(this.scene,this.rtScale,"rgba",null,!0,"linear",this.transparent)],this.config={BloomTint:{value:"#ffffff",params:{}},Threshold:{value:.1,params:{min:0,max:1.25,step:.01}},Blur:{value:.5,params:{min:0,max:1,step:.01}},Overdrive:{value:.33,params:{min:0,max:1,step:.01}},Similarity:{value:.15,params:{min:0,max:.2,step:.001}}},xe.addBlade(this.config,`Bloom - ${this.scene.name||"Unknown"}`,0)}createUniforms(){this.createUniform("uTexture","texture"),this.createUniform("uRez","float2"),this.createUniform("uDir","float2"),this.createUniform("uTint","float3"),this.createUniform("uPower"),this.createUniform("uIsFirstPass"),this.createUniform("uThresold"),this.createUniform("uSimilarity"),this.createUniform("uOverdrive")}applyState(){let e=this.gl;this.scene.applyDefaultState(),e.disable(e.DEPTH_TEST),e.depthMask(!1)}preRender(){this.rts[this.disabledRt].preRender()}postRender(){this.rts[this.disabledRt].postRender(),this.activeRt=this.activeRt===1?0:1,this.disabledRt=this.disabledRt===1?0:1}clear(){this.rts[this.activeRt].clear(),this.rts[this.disabledRt].clear()}bind(){this.rts[this.activeRt].bind()}getTexture(){return this.rts[this.activeRt].getTexture()}render(){let e=this.gl;e.useProgram(this.program),e.bindVertexArray(this.vao),this.applyState(),this.preRender(),this.power=this.config.Blur.value,this.color=new ke(this.config.BloomTint.value),this.threshold=this.config.Threshold.value,this.bindUniform("uRez",[this.scene.width,this.scene.height]),this.direction=this.blurPass[0],this.bindUniform("uDir",[this.direction[0]*this.scene.dpr,this.direction[1]*this.scene.dpr]),e.activeTexture(e.TEXTURE0),this.parent.rt.bind(),this.bindUniform("uTexture",0),this.bindUniform("uPower",this.power),this.bindUniform("uIsFirstPass",1),this.bindUniform("uTint",this.color),this.bindUniform("uThresold",this.threshold),this.bindUniform("uSimilarity",this.config.Similarity.value),this.bindUniform("uOverdrive",this.config.Overdrive.value),e.drawElements(e.TRIANGLES,Cl.length,e.UNSIGNED_SHORT,0),this.postRender();for(let n=1;n<this.blurPass.length;n++)this.preRender(),this.direction=this.blurPass[n],this.bindUniform("uDir",[this.direction[0]*this.scene.dpr,this.direction[1]*this.scene.dpr]),e.activeTexture(e.TEXTURE0),this.rts[this.activeRt].bind(),this.bindUniform("uTexture",0),this.bindUniform("uIsFirstPass",0),e.drawElements(e.TRIANGLES,Cl.length,e.UNSIGNED_SHORT,0),this.postRender();e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null)}}const Iz=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Dz=[0,1,2,0,2,3],Nz=[0,1,0,0,1,0,1,1];class F1{constructor(e,{blendFunc:n={},transparent:r=!1,depthTest:i=!1,depthWrite:s=!1,renderOrder:o=0,alpha:a=1}={}){this.gl=e.gl,this.scene=e,this.rt=new Bc(this.scene,1,"rgb",null,!0),this.transparent=r,this.blendFunc=n,this.depthTest=i,this.depthWrite=s,this.textureId=null,this.renderOrder=o,this.shader=new jn(Zt.post),this.texture=new xt(this.gl,{rt:this.rt,width:this.rt.width,height:this.rt.height}),this.bloomTexture=new xt(this.gl),this.alpha=a,this.perfBloomFactor=1,this.config={BloomOpacity:{value:.5,params:{min:0,max:1,step:.01}},NoiseOpacity:{value:.25,params:{min:0,max:1,step:.01}},LineOpacity:{value:.1,params:{min:0,max:1,step:.01}},Gamma:{value:1.1,params:{min:0,max:2,step:.01}},Exposure:{value:0,params:{min:-2,max:2,step:.01}},Contrast:{value:0,params:{min:-1,max:1,step:.01}},Vignette:{value:.5,params:{min:0,max:1,step:.01}},ChromaticAberations:{value:.25,params:{min:0,max:1,step:.01}},VignetteStrength:{value:.5,params:{min:0,max:1,step:.01}}},xe.addBlade(this.config,`Post Processing - ${this.scene.name||"Unknown"}`,0),this.init()}init(){this.geometry=new xi(this.gl);const e={position:{size:3,data:new Float32Array(Iz)},uv:{size:2,data:new Float32Array(Nz)},index:{data:new Uint16Array(Dz)}};this.geometry=new Ta(this.gl,e),this.program=new Ji(this.gl,{vertex:this.shader.vert,fragment:this.shader.frag,depthTest:this.depthTest,depthWrite:this.depthWrite,transparent:this.transparent,uniforms:{uTexture:{value:this.texture},uBloom:{value:this.bloomTexture},uTime:{value:this.scene.time},uRez:{value:[this.scene.width,this.scene.height]},uMouse:{value:je.cursor},uVignette:this.config.Vignette,uVignetteStrength:this.config.VignetteStrength,uNoiseOpacity:this.config.NoiseOpacity,uChromaticAberations:this.config.ChromaticAberations,uGamma:this.config.Gamma,uBloomOpacity:this.config.BloomOpacity,uLineOpacity:this.config.LineOpacity,uExposure:this.config.Exposure,uContrast:this.config.Contrast}}),this.program.cullFace=!1,this.mesh=new er(this.gl,{geometry:this.geometry,program:this.program,renderOrder:this.renderOrder})}onLoaded(){this.bloomTexture=new xt(this.gl,{rt:this.scene.bloomPass.rts[0],width:this.scene.bloomPass.rts[0].width,height:this.scene.bloomPass.rts[0].height}),this.program.uniforms.uBloom.value=this.bloomTexture}preRender(){this.rt.preRender()}postRender(){this.rt.postRender()}render({target:e=null}={}){this.program.uniforms.uTime.value=this.scene.time,this.program.uniforms.uRez.value=[this.scene.width,this.scene.height],this.program.uniforms.uMouse.value=je.cursor,this.program.uniforms.uBloomOpacity.value=this.config.BloomOpacity.value*this.perfBloomFactor,this.texture.needsUpdate=!0,e?this.scene.renderer.render({scene:this.mesh,clear:!0,frustumCull:!1,sort:!1,target:e}):this.scene.renderer.render({scene:this.mesh,clear:!0,frustumCull:!1,sort:!1})}dispose(){this.mesh.setParent(null),this.geometry.remove(),this.program.remove()}}function k1(t){this.json=t,this.promise=new Promise((n,r)=>{this.resolve=n});var e=this;return this.load().then(function(n){e.data=n,e.init()}),this.getPromise()}k1.prototype={init:function(){this.data=new Float32Array(this.data),this.resolve(this.data)},getPromise:function(){return this.promise},load:function(){return new Promise((e,n)=>{var r=new XMLHttpRequest;r.open("GET",this.json,!0),r.responseType="json",r.onload=function(i){e(r.response)},r.send()})}};const L1={CONFIG_0:{IBLDiffuseFactor:{value:1,params:{min:0,max:2,step:.01}},IBLSpecularFactor:{value:1,params:{min:0,max:2,step:.01}},Environment:{value:"env_autoshop",params:{options:{default:"env_default",autoshop:"env_autoshop",papermill:"env_papermill",night_sky:"env_night_sky",coffe_shop:"env_coffe_shop",studio:"env_studio"}}},EnvironmentDiffuse:{value:"env_diffuse",params:{options:{default:"env_diffuse"}}},lightColor:{value:"#d84621",params:{}},lightPosition:{value:{x:-15,y:10,z:-5},params:{x:{step:1},y:{step:1},z:{step:1}}},emissiveColor:{value:"#000000",params:{}},FogColor:{value:"#000000",params:{}},FogNear:{value:3.5,params:{min:0,max:50,step:.01}},FogFar:{value:6,params:{min:0,max:50,step:.01}},lightPower:{value:5,params:{min:0,max:10,step:.01}},Alpha:{value:1,params:{min:0,max:1,step:.01}},Debug:{value:"disabled",params:{options:{disabled:"disabled",baseColor:"baseColor",metallic:"metallic",roughness:"roughness",specRef:"specRef",geomOcc:"geomOcc",mcrfctDist:"mcrfctDist",spec:"spec",mathDiff:"mathDiff"}}},OverwriteEnvIBL:{value:!1,type:"bool"},EnvIBL:{value:"placeholder",type:"input-image",input:null}}};xe.addBlade(L1.CONFIG_0,"PBR_CONFIG",0);const Uz=new Zi,Bz=new Zi,Vz=new Zi,Zd=new be,Jd=new be,ep=new be,Hz=new be,jz=new be,Wz=new be,tp=new be,Al=new be,np=new be,ip=new be,Gz=new be,rp=new Dn;class I1{constructor(){this.origin=new be,this.direction=new be}castMouse(e,n=[0,0]){if(e.type==="orthographic"){const{left:r,right:i,bottom:s,top:o,zoom:a}=e,l=r/a+(i-r)/a*(n[0]*.5+.5),c=s/a+(o-s)/a*(n[1]*.5+.5);this.origin.set(l,c,0),this.origin.applyMatrix4(e.worldMatrix),this.direction.x=-e.worldMatrix[8],this.direction.y=-e.worldMatrix[9],this.direction.z=-e.worldMatrix[10]}else e.worldMatrix.getTranslation(this.origin),this.direction.set(n[0],n[1],.5),e.unproject(this.direction),this.direction.sub(this.origin).normalize()}intersectBounds(e,{maxDistance:n,output:r=[]}={}){Array.isArray(e)||(e=[e]);const i=rp,s=Zd,o=Jd,a=r;return a.length=0,e.forEach(l=>{if(!l.castable)return;(!l.geometry.bounds||l.geometry.bounds.radius===1/0)&&l.geometry.computeBoundingSphere();const c=l.geometry.bounds;i.inverse(l.worldMatrix);let u;if(n&&(o.copy(this.direction).scaleRotateMatrix4(i),u=n*o.len()),s.copy(this.origin).applyMatrix4(i),o.copy(this.direction).transformDirection(i),n&&s.distance(c.center)-c.radius>u)return;let h=0;if(l.geometry.raycast==="sphere"){if(s.distance(c.center)>c.radius&&(h=this.intersectSphere(c,s,o),!h))return}else if((s.x<c.min.x||s.x>c.max.x||s.y<c.min.y||s.y>c.max.y||s.z<c.min.z||s.z>c.max.z)&&(h=this.intersectBox(c,s,o),!h))return;n&&h>u||(l.hit||(l.hit={localPoint:new be,point:new be}),l.hit.localPoint.copy(o).multiply(h).add(s),l.hit.point.copy(l.hit.localPoint).applyMatrix4(l.worldMatrix),l.hit.distance=l.hit.point.distance(this.origin),a.push(l))}),a.sort((l,c)=>l.hit.distance-c.hit.distance),a}intersectMeshes(e,{cullFace:n=!0,maxDistance:r,includeUV:i=!0,includeNormal:s=!0,output:o=[]}={}){const a=this.intersectBounds(e,{maxDistance:r,output:o});if(!a.length)return a;const l=rp,c=Zd,u=Jd,h=ep,f=Hz,d=jz,p=Wz,m=tp,g=Al,x=Uz,b=Bz,_=Vz;for(let v=a.length-1;v>=0;v--){const y=a[v];l.inverse(y.worldMatrix);let w;r&&(u.copy(this.direction).scaleRotateMatrix4(l),w=r*u.len()),c.copy(this.origin).applyMatrix4(l),u.copy(this.direction).transformDirection(l);let P=0,T,R,k;const D=y.geometry,M=D.attributes,z=M.index,S=Math.max(0,D.drawRange.start),A=Math.min(z?z.count:M.position.count,D.drawRange.start+D.drawRange.count);for(let I=S;I<A;I+=3){const B=z?z.data[I]:I,$=z?z.data[I+1]:I+1,ne=z?z.data[I+2]:I+2;h.fromArray(M.position.data,B*3),f.fromArray(M.position.data,$*3),d.fromArray(M.position.data,ne*3);const pe=this.intersectTriangle(h,f,d,n,c,u,m);!pe||r&&pe>w||(!P||pe<P)&&(P=pe,T=B,R=$,k=ne,p.copy(m))}P||a.splice(v,1),y.hit.localPoint.copy(u).multiply(P).add(c),y.hit.point.copy(y.hit.localPoint).applyMatrix4(y.worldMatrix),y.hit.distance=y.hit.point.distance(this.origin),y.hit.faceNormal||(y.hit.localFaceNormal=new be,y.hit.faceNormal=new be,y.hit.uv=new Zi,y.hit.localNormal=new be,y.hit.normal=new be),y.hit.localFaceNormal.copy(p),y.hit.faceNormal.copy(y.hit.localFaceNormal).transformDirection(y.worldMatrix),(i||s)&&(h.fromArray(M.position.data,T*3),f.fromArray(M.position.data,R*3),d.fromArray(M.position.data,k*3),this.getBarycoord(y.hit.localPoint,h,f,d,g)),i&&M.uv&&(x.fromArray(M.uv.data,T*2),b.fromArray(M.uv.data,R*2),_.fromArray(M.uv.data,k*2),y.hit.uv.set(x.x*g.x+b.x*g.y+_.x*g.z,x.y*g.x+b.y*g.y+_.y*g.z)),s&&M.normal&&(h.fromArray(M.normal.data,T*3),f.fromArray(M.normal.data,R*3),d.fromArray(M.normal.data,k*3),y.hit.localNormal.set(h.x*g.x+f.x*g.y+d.x*g.z,h.y*g.x+f.y*g.y+d.y*g.z,h.z*g.x+f.z*g.y+d.z*g.z),y.hit.normal.copy(y.hit.localNormal).transformDirection(y.worldMatrix))}return a.sort((v,y)=>v.hit.distance-y.hit.distance),a}intersectSphere(e,n=this.origin,r=this.direction){const i=ep;i.sub(e.center,n);const s=i.dot(r),o=i.dot(i)-s*s,a=e.radius*e.radius;if(o>a)return 0;const l=Math.sqrt(a-o),c=s-l,u=s+l;return c<0&&u<0?0:c<0?u:c}intersectBox(e,n=this.origin,r=this.direction){let i,s,o,a,l,c;const u=1/r.x,h=1/r.y,f=1/r.z,d=e.min,p=e.max;return i=((u>=0?d.x:p.x)-n.x)*u,s=((u>=0?p.x:d.x)-n.x)*u,o=((h>=0?d.y:p.y)-n.y)*h,a=((h>=0?p.y:d.y)-n.y)*h,i>a||o>s||(o>i&&(i=o),a<s&&(s=a),l=((f>=0?d.z:p.z)-n.z)*f,c=((f>=0?p.z:d.z)-n.z)*f,i>c||l>s)||(l>i&&(i=l),c<s&&(s=c),s<0)?0:i>=0?i:s}intersectTriangle(e,n,r,i=!0,s=this.origin,o=this.direction,a=tp){const l=Al,c=np,u=ip;l.sub(n,e),c.sub(r,e),a.cross(l,c);let h=o.dot(a);if(!h)return 0;let f;if(h>0){if(i)return 0;f=1}else f=-1,h=-h;u.sub(s,e);let d=f*o.dot(c.cross(u,c));if(d<0)return 0;let p=f*o.dot(l.cross(u));if(p<0||d+p>h)return 0;let m=-f*u.dot(a);return m<0?0:m/h}getBarycoord(e,n,r,i,s=Al){const o=np,a=ip,l=Gz;o.sub(i,n),a.sub(r,n),l.sub(e,n);const c=o.dot(o),u=o.dot(a),h=o.dot(l),f=a.dot(a),d=a.dot(l),p=c*f-u*u;if(p===0)return s.set(-2,-1,-1);const m=1/p,g=(f*h-u*d)*m,x=(c*d-u*h)*m;return s.set(1-g-x,x,g)}}const Kn=tt(),sp=tt(),qz=We(0,1,0);class $z{constructor(e,n,{pan:r=!0,startDistance:i=10,minDistance:s=1e-4,maxDistance:o=1/0,applyTransform:a=!0,startAngleX:l=Math.PI,startAngleY:c=-Math.PI/2,angleLimitY:u=[-Math.PI+.1,-.1],dragVelocity:h=5,target:f=[0,0,0]}={}){this.scene=e,this.camera=n,this.node=new Sa,this.offset=We(c,l,0),this.offsetTarget=We(c,l,0),this.radiusTarget=i,this.radius=i,this.target=We(f[0],f[1],f[2]),this.targetCopy=new be,this.canPan=r,this.dragVelocity=h,this.angleLimitY=u,this.pan=tt(),this.altPressed=!1,this.prevent=!1,this.applyTransform=a,this.canZoom=!0,this.canRotate=!0,this.cameraDir=tt(),this.cameraUp=tt(),this.cameraRight=tt(),this.config={camera_damping:{value:.2,range:[.001,.1]}},je.on("wheel",()=>{!this.canZoom||(this.prevent||(je.wheelDir=="up"?this.radiusTarget+=.1:this.radiusTarget-=.1),this.radiusTarget=Math.max(Math.min(this.radiusTarget,o),s))}),this.canPan&&(window.addEventListener("keydown",d=>{d.key=="Alt"&&(this.altPressed=!0)}),window.addEventListener("keyup",d=>{d.key=="Alt"&&(this.altPressed=!1)})),xe.on("prevent",()=>{this.prevent=!0}),xe.on("unprevent",()=>{this.prevent=!1}),xe.addConfig(this.config,"Orbit")}update(){this.prevent||(this.altPressed?je.isDown&&(cl(this.cameraDir),cl(this.cameraRight),cl(this.cameraUp),this.pan[0]=je.velocity[0]*-10,this.pan[1]=je.velocity[1]*(this.scene.width/this.scene.height)*5,bn(this.cameraDir,this.node.position,this.target),ui(this.cameraDir,this.cameraDir),In(this.cameraRight,qz,this.cameraDir),ui(this.cameraRight,this.cameraRight),In(this.cameraUp,this.cameraDir,this.cameraRight),yn(Kn,this.cameraRight,this.pan[0]),yn(sp,this.cameraUp,this.pan[1]),Ln(Kn,Kn,sp),Ln(this.target,this.target,Kn)):je.isDown&&this.canRotate&&(this.offsetTarget[1]+=je.velocity[0]*this.dragVelocity,this.offsetTarget[0]+=je.velocity[1]*(this.scene.width/this.scene.height)*this.dragVelocity)),this.offsetTarget[0]=Math.min(Math.max(this.offsetTarget[0],this.angleLimitY[0]),this.angleLimitY[1]),bn(Kn,this.offsetTarget,this.offset),yn(Kn,Kn,this.config.camera_damping.value),Ln(this.offset,this.offset,Kn);let e=this.radiusTarget-this.radius;e*=this.config.camera_damping.value,this.radius+=e;let n=this.radius;this.node.position[0]=n*-Math.sin(this.offset[0])*Math.sin(this.offset[1])+this.target[0],this.node.position[1]=n*Math.cos(this.offset[0])+this.target[1],this.node.position[2]=n*Math.sin(this.offset[0])*Math.cos(this.offset[1])+this.target[2],this.applyTransform&&(this.camera.position.set(this.node.position[0],this.node.position[1],this.node.position[2]),this.targetCopy.set(this.target[0],this.target[1],this.target[2]),this.camera.lookAt(this.targetCopy))}}class D1{constructor(e,n){this.width=n.width,this.height=n.height,this.scene=n.scene,this.debug=n.debug,this.gl=e,this.toGo=new be(0,0,8),this.toLook=new be(0,0,0),this.lastWheel=0,this.catmulls={},this.introProgress=0,this.mouse=[0,0],this.camera=new oA(this.gl,{near:.01,far:1e5,fov:40,aspect:this.width/this.height}),this.debug&&(this.debugMode=!0,this.orbit=new $z(this.scene,this.camera,{startAngleX:0,startAngleY:-Math.PI/2,startDistance:10,minDistance:3.5,maxDistance:20,target:[0,.25,0]}),this.initDebugEvents()),window.__cameraManager=this}resize(e,n){this.camera.perspective({aspect:e/n})}initDebugEvents(){xe.active&&xe.pane&&(xe.pane.containerElem_.addEventListener("mouseover",()=>{this.preventUpdateOrbit=!0}),xe.pane.containerElem_.addEventListener("mouseleave",()=>{this.preventUpdateOrbit=!1}))}preRender(){this.update(),this.orbit&&(this.orbit.enabled=!this.preventUpdateOrbit,this.orbit.update())}enablePan(){Ie.to(this,{introProgress:1,duration:2})}goToRevealState(){Ie.to(this.toGo,{x:0,y:0,z:10,duration:2,ease:"power3.inOut"})}initIntroTl(){this.tl=Ie.timeline({paused:!0}),this.scene.spirits.default&&this.tl.fromTo(this.scene.spirits.default,{opacity:0},{opacity:1,duration:3,ease:"power1.out"},"0"),this.tl.add(()=>{this.enablePan()},"3"),this.tl.fromTo(this.toGo,{x:0,y:0,z:-1},{x:0,y:0,z:8,duration:5,ease:"power1.inOut"},"0"),this.tl.fromTo(this.toLook,{x:0,y:0,z:-10},{x:0,y:0,z:0,duration:5,ease:"power2.inOut"},"0")}enableTopicPosition(){let e={x:0,y:0,z:12},n={x:0,y:-1.7,z:-1};vi&&(e={x:0,y:.5,z:8},n={x:-2.5,y:-.5,z:-1}),Ie.killTweensOf(this.toGo),Ie.killTweensOf(this.toLook),Ie.to(this.toGo,{...e,duration:2.5,ease:"power2.inOut"}),Ie.to(this.toLook,{...n,duration:2.5,ease:"power2.inOut"})}disableTopicPosition(){Ie.killTweensOf(this.toGo),Ie.killTweensOf(this.toLook),Ie.to(this.toGo,{x:0,y:0,z:8,duration:2.5,ease:"power2.inOut"}),Ie.to(this.toLook,{x:0,y:0,z:0,duration:2.5,ease:"power2.inOut"})}playIntroTl(){this.tl.play()}setIntroComplete(){this.tl.progress(1)}update(){this.debugMode&&(this.scene.progressTarget=this.scene.time*.01%1,this.scene.progress=this.scene.progressTarget),pd(this.camera.position,this.toGo,this.scene.root.scale);const e=this.scene.width/this.scene.height;this.camera.position.x+=je.dampedCursor[0]*e*this.introProgress*.3,this.camera.position.y+=je.dampedCursor[1]*this.introProgress*.3,pd(this.toLook,this.toLook,this.scene.root.scale),this.camera.lookAt(this.toLook)}}const Vc=[];Object.keys(Oe).forEach(t=>{Vc.push({id:t,title:Oe[t].label,value:t})});const N1=[];Object.keys(Pc).forEach(t=>{N1.push({id:t,title:Pc[t].label,value:t})});const Xz=[{id:0,type:"chat",content:{title:"Hello, human",size:"l",audio:"/assets/audios/c_hello.mp3"}},{id:1,type:"chat",content:{title:"We're about to go on a journey of digital self discovery, we hope you're <span class='last'>prepare</span>d <span class='last'>to pioneer</span>.",size:"s",custom:!0,audio:"/assets/audios/c_journey.mp3"}},{id:2,type:"question",store:"firstname",content:{prompt:[{role:"system",content:"You are a futuristic AI entity. Answer Briefly but personal, do not ask questions. UK english is preferred for spelling"},{role:"user",content:"Greet me in the tone of a mysterious robot, my name is: {answer}"}],title:"But first, let's get acquainted.",size:"s",audio:"/assets/audios/c_firstname.mp3",placeholder:"Enter your full name"}},{id:3,type:"question",store:"email",content:{title:"What's your email address?",size:"s",audio:"/assets/audios/c_email.mp3",field:"email",placeholder:"Enter your email address"}},{id:4,type:"thisOrThat",content:{title:"I sense that you work at {company}, {user}. Is that correct?",size:"s",cards:[{id:1,title:"Yes",value:"yes"},{id:2,title:"No",value:"no"}]}},{id:5,type:"question",store:"company",content:{prompt:[{role:"system",content:"You are a futuristic AI entity. Answer Briefly but personal, do not ask questions. You are allowed to have opinions. UK english is preferred for spelling."},{role:"user",content:"Begin by complementing me for my position at {answer} and very briefly explain the business {company} in max 20 words.?"}],title:"I'm obviously not as clever as I look. I can't figure out where you work from your email. Please tell me?",size:"s",audio:"/assets/audios/c_company_2.mp3",placeholder:"Enter your workplace"}},{id:6,type:"chat",content:{title:"Let's get some quick fire insights into your personality and pioneering spirit.",size:"s",audio:"/assets/audios/c_begin.mp3"}},{id:7,type:"thisOrThat",store:"dipperOrDiver",content:{title:"Which best describes you?",size:"s",audio:"/assets/audios/c_toe_dipper_deep_diver.mp3",cards:[{id:1,title:"Toe dipper",value:"dipping a toe"},{id:2,title:"Deep diver",value:"diving in"}]}},{id:8,type:"thisOrThat",store:"urlOrIrl",content:{title:"Are you more of a URL or IRL person?",size:"s",audio:"/assets/audios/c_url_irl.mp3",cards:[{id:1,title:"Meet me in <br /> the metaverse",value:"url"},{id:2,title:"In person, please",value:"irl"}]}},{id:9,type:"chat",content:{title:"Colour says a lot about a person. Pick the shade that speaks to you most.",size:"s",audio:"/assets/audios/c_color.mp3"}},{id:10,type:"wheel",store:"color",content:{prompt:[{role:"system",content:"You are a futuristic AI entity. Answer Briefly but personal, do not ask questions. You are allowed to have opinions. UK english is preferred for spelling"},{role:"user",content:"Tell me about the personality of this color: {answer} in max 20 words. You are free to speculate."}],type:"card-color",cards:[...Vc,...Vc]}},{id:11,type:"thisOrThat",store:"fameOrFortune",content:{title:"What drives you? Fame or fortune?",size:"s",audio:"/assets/audios/c_fame_fortune.mp3",cards:[{id:1,title:"Billions of likes",value:"fame"},{id:2,title:"Billions in the bank",value:"fortune"}]}},{id:12,type:"thisOrThat",store:"cloudOrDetails",content:{title:"Are you typically in the clouds, or the weeds?",size:"s",audio:"/assets/audios/c_clouds_weeds.mp3",cards:[{id:1,title:"BRB, dreaming",value:"cloud"},{id:2,title:"Deep in details",value:"details"}]}},{id:13,type:"chat",content:{title:"I'm sensing you're quite the pioneer. But out of interest, which archetype do you best identify with?",size:"s",audio:"/assets/audios/c_archetype.mp3"}},{id:14,type:"wheel",store:"archetype",content:{type:"card-color",cards:N1}},{id:15,type:"thisOrThat",store:"tortoiseOrHare",content:{title:"If life's a race, which are you?",size:"s",audio:"/assets/audios/c_tortoise_hare.mp3",cards:[{id:1,title:"The tortoise",value:"tortoise"},{id:2,title:"The hare",value:"hare"}]}},{id:16,type:"thisOrThat",store:"mathematicianOrArtist",content:{title:"Finally... let's talk dream dinner guest?",size:"s",audio:"/assets/audios/c_mathematician_artist.mp3",cards:[{id:1,title:"Pythagoras",value:"mathematician"},{id:2,title:"Picasso",value:"artist"}]}},{id:17,type:"chat",content:{title:"I'm generating your unique pioneering aura.",size:"s",audio:"/assets/audios/c_end.mp3"}},{id:18,type:"aura",content:{}}];let op;class U1{constructor(e){this.scene=e,this.debugMeshes=[],this.needsToSaveImage=!1}onLoaded(){xe.active&&window.location.href.includes("gui")&&(this.initSaveMode(),this.lazyloadTweakpaneThenInit())}lazyloadTweakpaneThenInit(){const e=we(()=>import("./tweakpane.95688764.js").then(i=>i.t),[],import.meta.url),n=we(()=>import("./tweakpane-plugin-essentials.0bb003d9.js").then(i=>i.t),[],import.meta.url),r=we(()=>import("./tweakpane-image-plugin.ae119bf8.js").then(i=>i.t),[],import.meta.url);Promise.all([e,n,r]).then(i=>{op=i[0].Pane,i[1],i[2],this.tweakpaneIsLoaded=!0,this.initGUIMode()})}initGUIMode(){this.guiPane=new op({title:"GUI Question Controller",expanded:!0}),this.guiPane.containerElem_.style.right="auto",this.guiPane.containerElem_.style.top="auto",this.guiPane.containerElem_.style.left="8px",this.guiPane.containerElem_.style.bottom="8px",this.guiPane.containerElem_.style.maxWidth="480px";const e=Xz.filter(i=>i.type=="thisOrThat"&&i.store);for(let i=0;i<e.length;i++){const s=e[i];let o={default:"default"},a="default";s.content.cards.forEach(u=>{o[u.title]=u.value});let l={};l[`${s.store}`]=a,l.Parameter=Oz(s.store),this.guiPane.addInput(l,"Parameter");let c=this.guiPane.addInput(l,`${s.store}`,{options:o,label:s.placeholder});this.guiPane.addSeparator(),c.on("change",u=>{const h=_s();h[s.store]=u.value})}this.guiPane.addSeparator(),this.guiPane.addButton({title:"Hide Spirit"}).on("click",()=>{this.scene.killSpirit()}),this.guiPane.addSeparator(),this.guiPane.addButton({title:"Regenerate"}).on("click",()=>{this.scene.generateSpirit()})}initSaveMode(){let e=xe.addBladeScene({},"COLOR SCHEME"),n={};for(const c in Oe)Object.hasOwnProperty.call(Oe,c)&&(n[c]=c);e.addInput({"Color scheme GLOBAL":"amethyst"},"Color scheme GLOBAL",{options:n}).on("change",c=>{for(const h in this.scene.spirits)Object.hasOwnProperty.call(this.scene.spirits,h)&&this.scene.spirits[h].setColor(c.value);let u=this.scene.spirits.default.random.getSeed();this.scene.changeBackgroundColorTo(c.value),this.scene.generateSpirit({seed:u,colorId:c.value})}),e.addInput({"Color scheme SPIRIT":"amethyst"},"Color scheme SPIRIT",{options:n}).on("change",c=>{for(const u in this.scene.spirits)Object.hasOwnProperty.call(this.scene.spirits,u)&&this.scene.spirits[u].setColor(c.value)}),e.addInput({"Color scheme BACKGROUND":"amethyst"},"Color scheme BACKGROUND",{options:n}).on("change",c=>{this.scene.changeBackgroundColorTo(c.value)});let o=xe.addBladeScene({},"SAVE OUTPUT");const a={seed:this.scene.spirits.default.random.getSeed()};o.addInput(a,"seed"),this.scene.backgroundSettings={background:!0},o.addInput(this.scene.backgroundSettings,"background"),o.addSeparator(),o.addButton({title:"Save Image & Config"}).on("click",()=>{this.needsToSaveImage=!0})}render(){}postRender(){if(this.needsToSaveImage){this.needsToSaveImage=!1;const e=document.createElement("a");e.setAttribute("download",`Render_Seed_${this.scene.spirits.default.random.getSeed()}.png`),e.setAttribute("href",this.scene.gl.canvas.toDataURL("image/png").replace("image/png","image/octet-stream")),e.click();let n=this.scene.spirits.default.config,r={};for(const a in n)Object.hasOwnProperty.call(n,a)&&(r[a]=n[a].value);let i=`{"Seed": "${this.scene.spirits.default.random.getSeed()}","Colors":${this.scene.currentColorPallette}, "Config": ${JSON.stringify(r)}}`;const s=document.createElement("a"),o=new Blob([i],{type:"text/plain"});s.href=URL.createObjectURL(o),s.download=`Render_Settings_${this.scene.spirits.default.random.getSeed()}.json`,s.click()}}}class Yz extends _v{constructor(e,n=null){super(e,n),this.name="Main Scene",this.manager=n,this.renderer=n.renderer,this.time=0,this.dt=0,this.drawcalls=0,this.timescale=1,this.forceAllDraw=!0,this.root=new Ea,this.activeQuestionsParams=null,this.debugManager=new U1(this),this.initCameras(),this.initColors(),this.clearColor=this.manager.clearColor,this.loaded=!1,this.active=!1,this.textureLoader=this.manager.textureLoader,this.meshes=[],this.castable=[],this.spirits={},this.root.scale.set(1,1,1),this.config={Pause:{value:!1,type:"bool"},time_scale:{value:1,params:{min:0,max:3,step:.01}}},xe.addBlade(this.config,`Global Settings - ${this.name||"Unknown"}`),this.PBRConfigs=L1.CONFIG_0}initCameras(){this.cameraManager=new D1(this.gl,{width:this.width,height:this.height,scene:this,debug:xe.queryDebug("orbit")}),this.camera=this.cameraManager.camera,xe.queryDebug("orbit")||(this.raycast=new I1(this.gl))}initColors(){this.colors=Oe.amethyst,this.currentColorPallette="amethyst",this.spiritSettings=null}changeBackgroundColorTo(e,n=2,r=0){this.currentColorPallette=e,Ie.to(this.colors,{backgroundColor1:Oe[e].backgroundColor1,backgroundColor2:Oe[e].backgroundColor2,backgroundColor3:Oe[e].backgroundColor3,backgroundColor4:Oe[e].backgroundColor4,particlesFlowColor1:Oe[e].particlesFlowColor1,particlesFlowColor2:Oe[e].particlesFlowColor2,dustColor0:Oe[e].dustColor0,dustColor1:Oe[e].dustColor1,duration:n,ease:"power2.inOut",delay:r,onUpdate:i=>{this.colors.backgroundColor1=it(this.colors.backgroundColor1),this.colors.backgroundColor2=it(this.colors.backgroundColor2),this.colors.backgroundColor3=it(this.colors.backgroundColor3),this.colors.backgroundColor4=it(this.colors.backgroundColor4),this.colors.particlesFlowColor1=it(this.colors.particlesFlowColor1),this.colors.particlesFlowColor2=it(this.colors.particlesFlowColor2),this.colors.dustColor0=it(this.colors.dustColor0),this.colors.dustColor1=it(this.colors.dustColor1)}}),Ie.to(this.particlesFlow,{timeScale:5,duration:1,ease:"power2.in",yoyo:!0,repeat:1})}killSpirit(e="default"){this.spirits[e]&&(this.spirits[e].handleHide(!0,1).then(()=>{this.spirits[e].dispose(),delete this.spirits[e]}),this.spirits[e].dying=!0)}generateSpirit({id:e="default",colorId:n=void 0,seed:r=void 0}={}){if(this.spirits[e]&&this.spirits[e].dying)return;const i=new Promise(s=>{});return this.spirits[e]?(this.killSpirit(e),this.regenTimeout&&clearTimeout(this.regenTimeout),this.regenTimeout=setTimeout(()=>{this.spirits[e]=new Ko(this,{seed:r||Vo(),colors:Oe[n||this.currentColorPallette],name:e,autoPlay:!0})},2e3)):this.spirits[e]=new Ko(this,{seed:r||Vo(),colors:Oe[n||this.currentColorPallette],name:e,autoPlay:!0}),i}playIntro(){}postFirstDraw(){}activate(){return new Promise(e=>{this.active=!0,this.activationResolve=e,this.postFirstDraw()})}onLoaded(){this.active=!0,ss(!0),this.generateSpirit({});let e=new Sv(this,"unlit",{scale:10,name:"Raycast Plane"});e.mesh.visible=!1,this.castable.push(e.mesh),this.meshes.push(e);let n=new Pv(this,{meshId:1});this.meshes.push(n),this.background=new Tv(this),this.meshes.push(this.background),this.particlesFlow=new Ev(this),this.particlesFlow.mesh.rotation.x=Math.PI/2+.15,this.meshes.push(this.particlesFlow);for(let r=0;r<this.meshes.length;r++)this.meshes[r].onLoaded();this.bloomPass=new M1(this,this.post),this.post.onLoaded(),xe.onLoaded(),this.debugManager.onLoaded(),this._emitter.emit("loaded"),Pe.emit("webgl_loaded"),xe.queryDebug("intro")?(this.cameraManager.initIntroTl(),this.cameraManager.playIntroTl()):this.cameraManager.introProgress=1}async load(){let e=[];this.post=new F1(this);for(const r in ni.main)if(ni.main.hasOwnProperty(r)){const i=ni.main[r].url;e.push(this.textureLoader.load(i,r,ni.main[r].options))}Promise.all(e).then(()=>{this.onLoaded()});let n=0;for(let r=0;r<e.length;r++)e[r].then(()=>{n++;const i=Math.round(n/e.length*100);this._emitter.emit("progress",i),Pe.emit("webgl_loading_progress",{progress:i})})}applyDefaultState(){let e=this.gl;e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND),e.enable(e.DEPTH_TEST),e.depthMask(!0)}resize(){this.cameraManager.resize(this.width,this.height)}preRender(){var e;if(this.timescale=this.config.time_scale.value,this.raycast){this.hits=[],this.castable.forEach(n=>n.isHit=!1),this.raycast.castMouse(this.cameraManager.camera,[je.dampedCursor[0],-je.dampedCursor[1]]),this.hits=this.raycast.intersectBounds(this.castable),this.hits.forEach(n=>n.isHit=!0);for(const n in this.spirits)Object.hasOwnProperty.call(this.spirits,n)&&(this.spirits[n].hoverPoint=(e=this.hits[0])==null?void 0:e.hit.point)}for(let n=0;n<this.meshes.length;n++)this.meshes[n].preRender();this.cameraManager.preRender()}render(){if(!this.active)return;let e=this.gl;this.time+=Pn.dt/1e3*this.timescale,this.dt=Pn.dt,this.preRender(),e.viewport(0,0,this.width,this.height),this.camera.perspective({aspect:this.width/this.height}),this.renderer.setViewport(this.width,this.height),xe.active&&!this.backgroundSettings.background||this.renderer.render({scene:this.root,camera:this.camera,clear:!0,frustumCull:!1,sort:!0,post:this.post});for(const n in this.spirits)Object.hasOwnProperty.call(this.spirits,n)&&this.spirits[n].render({post:xe.active&&!this.backgroundSettings.background?null:this.post,feedback:!0,depthPass:!1});xe.active&&!this.backgroundSettings.background||(this.bloomPass.render(),this.post.render()),this.debugManager.render(),this.postRender()}postRender(){this.gl.viewport(0,0,this.width,this.height),this.drawcalls++,this.forceAllDraw&&this.drawcalls>40&&(this.forceAllDraw=!1,this.activationResolve()),this.debugManager.postRender()}}class Kz{constructor(e,{parent:n=null,scale:r=1,blendFunc:i={src:e.gl.ONE,dst:e.gl.ONE_MINUS_SRC_ALPHA},transparent:s=!0,depthTest:o=!1,depthWrite:a=!1,renderOrder:l=1,alpha:c=1,hasShadow:u=!1,name:h="ParticlesArchetypes"}={}){this.gl=e.gl,this.scene=e,this.parent=n||e.root,this.scale=r,this.transparent=s,this.blendFunc=i,this.depthTest=o,this.depthWrite=a,this.renderOrder=l,this.hasShadow=u,this.name=h,this.noise=new T1,this.timeScale=.25,this.time=0,this.timeWaves=0,this.transitionFactor=0,this.depthInfluence=1,this.opacity=1,this.animZ=0,this.animNoiseMultiplier=1,this.mousePanOffsets=[.3,.25],this.textureOffsets=xa(),this.pan={current:tt(),target:tt(),ease:.02},this.defines={},this.shader=new jn(Zt.particlesArchetypes,1,this.defines),this.textureAlpha=new xt(this.gl),this.textureAlphaDepth=new xt(this.gl),this.textureBeta=new xt(this.gl),this.textureBetaDepth=new xt(this.gl),this.currentTextureKey=0,this.alpha=c,this.config={Color1:{value:this.scene.colors.faceColor0,params:{}},Color2:{value:this.scene.colors.faceColor1,params:{}},Opacity:{value:1,params:{min:0,max:1,step:.01}},NoiseIntensity:{value:.45,params:{min:0,max:10,step:.01}},NoiseFrequency:{value:2.75,params:{min:0,max:10,step:.01}},ParticlesSize:{value:11,params:{min:0,max:30,step:1}},DepthIntensity:{value:3.25,params:{min:-6,max:6,step:.01}},WavesOrigin:{value:{x:1,y:1},params:{x:{min:0,max:1,step:.01},y:{min:0,max:1,step:.01}}},WavesFrequency:{value:3.7,params:{min:.1,max:30,step:.01}},WavesSpeed:{value:5.6,params:{min:.1,max:30,step:.01}},WaveShineIntensity:{value:1,params:{min:0,max:1,step:.01}},Bokeh:{value:25,params:{min:0,max:100,step:1}},Focus:{value:7.5,params:{min:0,max:25,step:.01}},FocusRange:{value:11.5,params:{min:0,max:20,step:.1}}},this.init(),this.addEvents()}init(){let e=4.25,n=160;if(vi)switch(window.tier.tier){case 1:n=160;break;case 2:n=180;break;case 3:n=200;break}else e=2.75,n=130;this.geometry=new xi(this.gl,{width:e,height:e,widthSegments:n,heightSegments:n}),this.uniforms={uTime:{value:this.scene.time},uTimeWaves:{value:this.scene.time},uRez:{value:[this.scene.width,this.scene.height]},uTextureAlpha:{value:this.textureAlpha},uTextureDepthAlpha:{value:this.textureAlphaDepth},uTextureBeta:{value:this.textureBeta},uTextureDepthBeta:{value:this.textureBetaDepth},uTextureOffsets:{value:this.textureOffsets},uColor1:{value:[0,0,0]},uColor2:{value:[0,0,0]},uAlpha:{value:this.config.Opacity.value*this.opacity},uTransition:{value:0},uNoiseIntensity:this.config.NoiseIntensity,uNoiseFrequency:this.config.NoiseFrequency,uParticlesSize:this.config.ParticlesSize,uParticlesDensity:{value:n},uDepthIntensity:{value:this.config.DepthIntensity},uBokeh:this.config.Bokeh,uFocus:this.config.Focus,uFocusRange:this.config.FocusRange,uWavesOrigin:{value:[this.config.WavesOrigin.value.x,this.config.WavesOrigin.value.y]},uWavesFrequency:this.config.WavesFrequency,uWavesSpeed:this.config.WavesSpeed,uWaveShineIntensity:this.config.WaveShineIntensity},this.program=new Ji(this.gl,{vertex:this.shader.vert,fragment:this.shader.frag,debugShader:xe.active,depthTest:this.depthTest,depthWrite:this.depthWrite,transparent:this.transparent,uniforms:this.uniforms}),this.program.setBlendFunc(this.blendFunc.src,this.blendFunc.dst),this.mesh=new er(this.gl,{geometry:this.geometry,program:this.program,renderOrder:this.renderOrder,forceRenderOrder:!0,mode:this.gl.POINTS}),this.mesh.scale.set(this.scale,this.scale,this.scale),this.mesh.name=this.name,this.mesh.setParent(this.parent)}initTextures(){this.textures=Object.assign({},Pc),Object.keys(this.textures).forEach((e,n)=>{this.textures[e].albedo=this.scene.textureLoader.getTexture(this.textures[e].albedoId),this.textures[e].depth=this.scene.textureLoader.getTexture(this.textures[e].depthId)}),this.setAlphaToKey("engineer"),this.setBetaToKey("engineer")}initGui(){xe.addBlade(this.config,`${this.scene.name} - ${this.name}`,1)}setAlphaToKey(e){this.textureAlpha=this.textures[e].albedo,this.textureAlpha.needsUpdate=!0,this.program.uniforms.uTextureAlpha.value=this.textureAlpha,this.textureAlphaDepth=this.textures[e].depth,this.textureAlphaDepth.needsUpdate=!0,this.program.uniforms.uTextureDepthAlpha.value=this.textureAlphaDepth,this.currentTextureKey=e}setBetaToKey(e){this.textureBeta=this.textures[e].albedo,this.textureBeta.needsUpdate=!0,this.program.uniforms.uTextureBeta.value=this.textureBeta,this.textureBetaDepth=this.textures[e].depth,this.textureBetaDepth.needsUpdate=!0,this.program.uniforms.uTextureDepthBeta.value=this.textureBetaDepth}animateToKey(e){this.killAnimTl(),this.setBetaToKey(e),this.tl=Ie.timeline(),this.tl.to(this,{transitionFactor:1,duration:1.5,ease:"power2.inOut"},0),this.tl.call(()=>{this.setAlphaToKey(e),this.transitionFactor=0},null)}addEvents(){this.bindedHandleShow=this.handleShow.bind(this),this.bindedHandleHide=this.handleHide.bind(this),this.bindedHandleSet=this.handleSet.bind(this),Pe.on("webgl_experience_archetypes_show",this.bindedHandleShow),Pe.on("webgl_experience_archetypes_hide",this.bindedHandleHide),Pe.on("webgl_experience_archetypes_set",this.bindedHandleSet)}removeEvents(){Pe.off("webgl_experience_archetypes_show",this.bindedHandleShow),Pe.off("webgl_experience_archetypes_hide",this.bindedHandleHide),Pe.off("webgl_experience_archetypes_set",this.bindedHandleSet)}onLoaded(){this.initTextures(),this.initGui()}handleShow(e=!0){if(this.killAnimTl(),!e){this.opacity=1,this.depthInfluence=1,this.animZ=0,this.animNoiseMultiplier=1,this.scene.spirits.default&&(this.scene.spirits.default.faceOpacity=.5);return}this.tlVisibility=Ie.timeline(),this.tlVisibility.to(this,{opacity:1,duration:1,ease:"power2.out"},0),this.tlVisibility.to(this,{depthInfluence:1,duration:1,ease:"power2.out"},0),this.tlVisibility.to(this,{animZ:0,duration:1,ease:"power2.out"},0),this.tlVisibility.to(this,{animNoiseMultiplier:1,duration:.5,ease:"power2.out"},0),this.scene.spirits.default&&this.tlVisibility.to(this.scene.spirits.default,{faceOpacity:.1,duration:1,ease:"power2.out"},0)}handleHide(e=!0){if(this.killAnimTl(),!e){this.opacity=0,this.depthInfluence=1.5,this.animZ=-.25,this.animNoiseMultiplier=2,this.scene.spirits.default&&(this.scene.spirits.default.faceOpacity=1);return}this.tlVisibility=Ie.timeline(),this.tlVisibility.to(this,{opacity:0,duration:.5,ease:"power2.in"},0),this.tlVisibility.to(this,{depthInfluence:1.4,duration:.5,ease:"power2.in"},0),this.tlVisibility.to(this,{animZ:-.25,duration:.5,ease:"power2.in"},0),this.tlVisibility.to(this,{animNoiseMultiplier:2,duration:.5,ease:"power2.in"},0),this.scene.spirits.default&&this.tlVisibility.to(this.scene.spirits.default,{faceOpacity:1,duration:1,ease:"power2.out"},0)}handleSet({key:e}){this.animateToKey(e)}killAnimTl(){this.tl&&(this.tl.progress(1),this.tl.kill())}dispose(){this.mesh.setParent(null),this.geometry.remove(),this.program.remove(),this.removeEvents()}preRender(){this.time+=this.scene.dt/1e3*this.timeScale,this.mesh.position.z=this.animZ,vi&&(this.pan.target[0]=je.cursor[0]*this.mousePanOffsets[0],this.pan.target[1]=je.cursor[1]*this.mousePanOffsets[1],Mu(this.pan.current,this.pan.current,this.pan.target,this.pan.ease),this.textureOffsets[0]=this.pan.current[0]*-.2,this.textureOffsets[1]=this.pan.current[1]*.2,this.mesh.rotation.set(this.pan.current[1],this.pan.current[0],0)),this.timeWaves+=this.scene.dt/1e3*this.timeScale,this.program.uniforms.uTime.value=this.time,this.program.uniforms.uTimeWaves.value=this.timeWaves,this.program.uniforms.uAlpha.value=this.config.Opacity.value*this.opacity,this.program.uniforms.uRez.value=[this.scene.width,this.scene.height],this.program.uniforms.uDepthIntensity.value=this.config.DepthIntensity.value*this.depthInfluence,this.program.uniforms.uTransition.value=this.transitionFactor,this.program.uniforms.uColor1.value=new ke(this.config.Color1.value),this.program.uniforms.uColor2.value=new ke(this.config.Color2.value),this.program.uniforms.uWavesOrigin.value=[this.config.WavesOrigin.value.x,this.config.WavesOrigin.value.y]}}function Ne(t=0){return new Promise(function(e){setTimeout(e,t)})}class Qz extends _v{constructor(e,n=null){super(e,n),this.name="Events",this.manager=n,this.renderer=n.renderer,this.textureLoader=this.manager.textureLoader,this.time=0,this.dt=0,this.drawcalls=0,this.progress=0,this.progressDelta=0,this.progressTarget=1e-5,this.timescale=1,this.forceAllDraw=!0,this.hasBloom=!0,this.clearColor=this.manager.clearColor,this.loaded=!1,this.active=!1,this.isFirstRoute=!0,this.transformFeedbackStruggle=!1,this.root=new Ea,this.root.scale.set(1,1,1),this.meshes=[],this.castable=[],this.spirits={},R1.genSeed("f98c0fa8-4f8d-4ae8-8480-2f3d09f55cfe"),this.debugManager=new U1(this),this.config={Pause:{value:!1,type:"bool"},time_scale:{value:1.5,params:{min:0,max:3,step:.01}},debug:{value:0,params:{min:0,max:.1,step:1e-4}},scroll_damping:{value:.05,params:{min:0,max:1,step:.01}},scroll_speed:{value:5,params:{min:0,max:10,step:.1}}},xe.addBlade(this.config,`Global Settings - ${this.name||"Unknown"}`),this.initCameras(),this.initRaycasting(),this.initColors(),this.initParticlesFlow(),this.initParticlesFace(),this.initParticlesArchetypes(),this.initDust(),this.initBackground()}initCameras(){this.cameraManager=new D1(this.gl,{width:this.width,height:this.height,scene:this,debug:!1}),this.cameraManager.initIntroTl(),this.camera=this.cameraManager.camera}initRaycasting(){this.raycast=new I1(this.gl),this.raycastPlane=new Sv(this,"unlit",{scale:10,name:"Raycast Plane"}),this.raycastPlane.mesh.visible=!1,this.castable.push(this.raycastPlane.mesh),this.meshes.push(this.raycastPlane)}initColors(){this.colors={...Oe.amethyst},this.currentColorPalette="amethyst",this.spiritSettings=null}initParticlesFace(){this.particlesFace=new Tz(this),this.meshes.push(this.particlesFace)}initParticlesArchetypes(){this.particlesArchetypes=new Kz(this),this.meshes.push(this.particlesArchetypes)}initParticlesFlow(){this.particlesFlow=new Ev(this),this.particlesFlow.mesh.rotation.x=Math.PI*.5+.15,this.meshes.push(this.particlesFlow)}initDust(){this.dust=new Pv(this,{meshId:1}),this.meshes.push(this.dust)}initBackground(){this.background=new Tv(this),this.meshes.push(this.background)}generateSpirit({id:e="default",colorId:n=void 0,seed:r=void 0,needPerfCheck:i=!1}={}){or[this.activeSlug]&&(r=or[this.activeSlug].seed);let s;const o=new Promise(a=>{s=a});if(this.spirits[e])this.killSpirit(e),this.regenTimeout&&clearTimeout(this.regenTimeout),this.regenTimeout=setTimeout(()=>{const a=r||Vo();this.spirits[e]=new Ko(this,{seed:a,colors:Oe[n||this.currentColorPalette],name:e+"_secondary",autoPlay:!0,needPerfCheck:i}),setTimeout(()=>{s()},2e3)},1500);else{const a=r||Vo();this.spirits[e]=new Ko(this,{seed:a,colors:Oe[n||this.currentColorPalette],name:e,autoPlay:!0,needPerfCheck:i}),setTimeout(()=>{s()},2e3)}return o}killSpirit({id:e="default",isAnimated:n=!0}={}){this.spirits[e]&&(n?(this.spirits[e].handleHide(n,n?1:0).then(()=>{this.spirits[e].dispose(),delete this.spirits[e]}),this.spirits[e].dying=!0):(this.spirits[e].dispose(),delete this.spirits[e]))}activate(){return new Promise(e=>{this.active=!0,this.activationResolve=e,this.postFirstDraw(),this.addEvents()})}async load(){let e=[];this.post=new F1(this);for(const r in ni.main)if(ni.main.hasOwnProperty(r)){const i=ni.main[r].url;e.push(this.textureLoader.load(i,r,ni.main[r].options))}e.push(new k1("/glxp/sdf/velocity.vel").then(r=>{this.voxelData0=r})),Promise.all(e).then(()=>{this.onLoaded()});let n=0;for(let r=0;r<e.length;r++)e[r].then(()=>{n++;const i=Math.round(n/e.length*100);this._emitter.emit("progress",i),Pe.emit("webgl_loading_progress",{progress:i})})}reset(){}setProgress(e){this.progressTarget=e}playIntro(){this.cameraManager.playIntroTl()}setIntroComplete(){this.cameraManager.setIntroComplete()}hideAll(e=!0){this.activeQuestion=void 0,this.particlesFace.handleHide(e),this.particlesArchetypes.handleHide(e)}animateColorsTo(e,n=2,r=0){this.tlColors&&this.tlColors.kill(),e in Oe?this.currentColorPalette=e:(this.currentColorPalette="amethyst",console.warn(`${e} not found in color palette list, defaulting to 'amethyst'`));for(const i in this.spirits)Object.hasOwnProperty.call(this.spirits,i)&&this.spirits[i].setColor(this.currentColorPalette);this.tlColors=Ie.to(this.colors,{backgroundColor1:Oe[this.currentColorPalette].backgroundColor1,backgroundColor2:Oe[this.currentColorPalette].backgroundColor2,backgroundColor3:Oe[this.currentColorPalette].backgroundColor3,backgroundColor4:Oe[this.currentColorPalette].backgroundColor4,particlesFlowColor1:Oe[this.currentColorPalette].particlesFlowColor1,particlesFlowColor2:Oe[this.currentColorPalette].particlesFlowColor2,dustColor0:Oe[this.currentColorPalette].dustColor0,dustColor1:Oe[this.currentColorPalette].dustColor1,faceColor0:Oe[this.currentColorPalette].faceColor0,faceColor1:Oe[this.currentColorPalette].faceColor1,faceColorSpeech:Oe[this.currentColorPalette].faceColorSpeech,duration:n,ease:"power2.inOut",delay:r,onUpdate:i=>{this.colors.backgroundColor1=it(this.colors.backgroundColor1),this.colors.backgroundColor2=it(this.colors.backgroundColor2),this.colors.backgroundColor3=it(this.colors.backgroundColor3),this.colors.backgroundColor4=it(this.colors.backgroundColor4),this.colors.particlesFlowColor1=it(this.colors.particlesFlowColor1),this.colors.particlesFlowColor2=it(this.colors.particlesFlowColor2),this.colors.dustColor0=it(this.colors.dustColor0),this.colors.dustColor1=it(this.colors.dustColor1),this.colors.faceColor0=it(this.colors.faceColor0),this.colors.faceColor1=it(this.colors.faceColor1),this.colors.faceColorSpeech=it(this.colors.faceColorSpeech),this.updateComponentsColor()}})}applyDefaultState(){let e=this.gl;e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND),e.enable(e.DEPTH_TEST),e.depthMask(!0)}updateComponentsColor(){this.particlesFace.config.Color1.value=this.colors.faceColor0,this.particlesFace.config.Color2.value=this.colors.faceColor1,this.particlesFace.config.ColorSpeech.value=this.colors.faceColorSpeech,this.particlesArchetypes.config.Color1.value=this.colors.faceColor0,this.particlesArchetypes.config.Color2.value=this.colors.faceColor1}addEvents(){this.bindedHandleSetScene=this.handleSetScene.bind(this),this.bindedHandleIntroAnimate=this.handleIntroAnimate.bind(this),this.bindedHandleChangeColorSet=this.handleChangeColorSet.bind(this),this.bindedHandleStepTrigger=this.handleStepTrigger.bind(this),this.bindedHandleQuestionTrigger=this.handleQuestionTrigger.bind(this),this.bindedHandleQuestionAnswered=this.handleQuestionAnswered.bind(this),this.bindedHandleGptLoadingStart=this.handleGptLoadingStart.bind(this),this.bindedHandleGptLoadingComplete=this.handleGptLoadingComplete.bind(this),Pe.on("webgl_set_scene",this.bindedHandleSetScene),Pe.on("webgl_intro_animate_enter",this.bindedHandleIntroAnimate),Pe.on("webgl_color_set",this.bindedHandleChangeColorSet),Pe.on("webgl_experience_step_trigger",this.bindedHandleStepTrigger),Pe.on("webgl_experience_question_trigger",this.bindedHandleQuestionTrigger),Pe.on("webgl_experience_question_answered",this.bindedHandleQuestionAnswered),Pe.on("gpt3_loading_start",this.bindedHandleGptLoadingStart),Pe.on("gpt3_loading_complete",this.bindedHandleGptLoadingComplete),this.on("spirit-render-time-perfcheck",e=>{e>200&&(this.transformFeedbackStruggle=!0,this.killSpirit({isAnimated:!1}),this.generateSpirit(),this.currentSceneId=="home"&&setTimeout(()=>{var n;(n=this.spirits.default)==null||n.handleIdle(!0)},4e3))})}removeEvents(){Pe.off("webgl_home_switch_subscene",this.bindedHandleSetScene),Pe.off("webgl_intro_animate_enter",this.bindedHandleIntroAnimate),Pe.off("webgl_color_set",this.bindedHandleChangeColorSet),Pe.off("webgl_experience_step_trigger",this.bindedHandleStepTrigger),Pe.off("webgl_experience_question_trigger",this.bindedHandleQuestionTrigger),Pe.off("webgl_experience_question_answered",this.bindedHandleQuestionAnswered),Pe.off("gpt3_loading_start",this.bindedHandleGptLoadingStart),Pe.off("gpt3_loading_complete",this.bindedHandleGptLoadingComplete)}onLoaded(){this.active=!0,this._emitter.emit("loaded"),Pe.emit("webgl_loaded");for(let e=0;e<this.meshes.length;e++)this.meshes[e].onLoaded();this.bloomPass=new M1(this,this.post),this.post.onLoaded(),xe.onLoaded(),this.debugManager.onLoaded(),this.hideAll(!1)}postFirstDraw(){}resize(){this.cameraManager.resize(this.width,this.height)}async handleSetScene({sceneId:e,slug:n}){this.activeSlug=n,this.isFirstRoute?(await this.handleSetSceneFirst({sceneId:e}),this.isFirstRoute=!1):await this.handleSetSceneSubsequent({sceneId:e}),this.currentSceneId=e}async handleSetSceneFirst({sceneId:e}){var n,r;switch(ss(!1),e){case"home":this.animateColorsTo("amethyst",0),this.generateSpirit({needPerfCheck:!0}),this.spirits.default.isLoadingState=!0,this.particlesFace.handleHide(!1),this.particlesArchetypes.handleHide(!1),this.playIntro(),await Ne(4e3),(n=this.spirits.default)==null||n.handleIdle(!0),await Ne(1e3),this.spirits.default.isLoadingState=!1;break;case"topics":this.playIntro(),this.cameraManager.enablePan(),this.animateColorsTo("amethyst",0),this.particlesFace.handleHide(!1),this.particlesArchetypes.handleHide(!1);break;case"topic":this.particlesFace.handleHide(!1),this.particlesArchetypes.handleHide(!1),ss(!0),this.cameraManager.enablePan(),this.cameraManager.enableTopicPosition(),or[this.activeSlug]&&this.animateColorsTo(or[this.activeSlug].colorScheme,1.5),await Ne(500),this.generateSpirit({needPerfCheck:!0});break;case"experience":this.setIntroComplete(),this.cameraManager.enablePan(),this.animateColorsTo("amethyst",0),this.particlesArchetypes.handleHide(!1),this.generateSpirit({needPerfCheck:!0}),await Ne(100),this.particlesFace.handleShow(),await Ne(1e3),(r=this.spirits.default)==null||r.handleIdle(!0);break;case"result":this.setIntroComplete();const i=_s();this.particlesFace.handleHide(!1),this.particlesArchetypes.handleHide(!1),this.cameraManager.enablePan(),this.cameraManager.enableTopicPosition(),await Ne(100),this.animateColorsTo(i.color,0),await Ne(1500),this.generateSpirit({seed:i.seed,needPerfCheck:!0});break;case"archetypes":this.animateColorsTo("amethyst",0),this.particlesFace.handleHide(!1),this.particlesArchetypes.handleShow(!1);break}}async handleSetSceneSubsequent({sceneId:e}){if(this.currentSceneId!==e){switch(this.hideAll(),ss(!1),this.currentSceneId){case"topic":this.cameraManager.disableTopicPosition(),await Ne(300);break;case"experience":await Ne(100);break;case"result":this.cameraManager.disableTopicPosition(),await Ne(300);break;default:await Ne(300);break}switch(e){case"home":this.generateSpirit(),this.spirits.default.handleIdle(!0),await Ne(500),this.animateColorsTo("amethyst");break;case"topics":this.killSpirit({isAnimated:!0}),await Ne(750),this.animateColorsTo("amethyst");break;case"topic":ss(!0),or[this.activeSlug]&&this.animateColorsTo(or[this.activeSlug].colorScheme),this.cameraManager.enableTopicPosition(),await Ne(500),this.generateSpirit();break;case"experience":this.animateColorsTo("amethyst"),this.particlesFace.handleShow();break;case"result":const n=_s();this.particlesFace.handleHide(),this.particlesArchetypes.handleHide(),await Ne(100),this.cameraManager.enablePan(),this.cameraManager.enableTopicPosition(),this.animateColorsTo(n.color,0),n.seed!==this.spirits.default._seed&&this.generateSpirit({seed:n.seed});break}}}async handleQuestionTrigger(e){switch(this.activeQuestion=e,e){case"firstname":await Ne(1750),this.particlesFace.handleHide(),this.particlesArchetypes.handleHide();break;case"email":await Ne(2e3),this.particlesFace.handleHide();break;case"dipperOrDiver":await Ne(1e3),this.particlesFace.handleHide();break;case"urlOrIrl":await Ne(500),this.particlesFace.handleHide();break;case"fameOrFortune":await Ne(500),this.particlesFace.handleHide();break;case"cloudOrDetails":await Ne(1e3),this.particlesFace.handleHide();break;case"tortoiseOrHare":await Ne(1500),this.particlesFace.handleHide();break;case"mathematicianOrArtist":await Ne(1e3),this.particlesFace.handleHide();break;case"company":await Ne(3e3),this.particlesFace.handleHide();break;case"aura":this.cameraManager.goToRevealState();const n=_s();this.animateColorsTo(n.color),await Ne(400),this.particlesFace.handleHide(),this.generateSpirit({seed:n.seed});break;case"color":this.particlesFace.handleHide();break;case"archetype":this.particlesFace.handleHide(),await Ne(2e3),this.particlesArchetypes.handleShow();break}}async handleQuestionAnswered(e){switch(e){case"firstname":this.particlesFace.handleShow();break;case"email":this.particlesFace.handleShow();break;case"dipperOrDiver":break;case"urlOrIrl":this.particlesFace.handleShow();break;case"company":this.particlesFace.handleShow();break;case"fameOrFortune":break;case"cloudOrDetails":this.particlesFace.handleShow();break;case"tortoiseOrHare":break;case"mathematicianOrArtist":this.particlesFace.handleShow(),this.killSpirit();break;case"color":await Ne(1e3),this.particlesFace.handleShow();break;case"archetype":this.particlesArchetypes.handleHide();break}}handleIntroAnimate(){this.playIntro()}handleChangeColorSet({color:e}){this.animateColorsTo(e)}handleStepTrigger(){}handleGptLoadingStart(){this.spirits.default&&(this.spirits.default.isLoadingState=!0)}handleGptLoadingComplete(){this.spirits.default&&(this.spirits.default.isLoadingState=!1)}preRender(){var n;let e;if(e=this.progressTarget-this.progress,this.progressDelta=e,e*=this.config.scroll_damping.value,this.timescale=this.config.time_scale.value,this.progress+=e,vi){this.hits=[],this.castable.forEach(r=>r.isHit=!1),this.raycast.castMouse(this.cameraManager.camera,[je.dampedCursor[0],-je.dampedCursor[1]]),this.hits=this.raycast.intersectBounds(this.castable),this.hits.forEach(r=>r.isHit=!0);for(const r in this.spirits)Object.hasOwnProperty.call(this.spirits,r)&&(je.cursor[0]==0&&je.cursor[1]==0?this.spirits[r].hoverPoint=void 0:this.spirits[r].hoverPoint=(n=this.hits[0])==null?void 0:n.hit.point)}for(let r=0;r<this.meshes.length;r++)this.meshes[r].preRender();this.cameraManager.preRender()}render(){if(!this.active)return;let e=this.gl;this.time+=Pn.dt/1e3,this.dt=Pn.dt,this.preRender(),e.viewport(0,0,this.width,this.height),this.camera.perspective({aspect:this.width/this.height}),this.renderer.setViewport(this.width,this.height),this.renderer.render({scene:this.root,camera:this.camera,clear:!0,frustumCull:!0,sort:!0,post:this.post});for(const n in this.spirits)Object.hasOwnProperty.call(this.spirits,n)&&this.spirits[n].render({post:this.post,feedback:!0,depthPass:!1});this.hasBloom&&this.bloomPass.render(),this.post.render(),this.debugManager.render(),this.postRender()}postRender(){this.gl.viewport(0,0,this.width,this.height),this.drawcalls++,this.forceAllDraw&&this.drawcalls>40&&(this.forceAllDraw=!1,this.activationResolve())}}class Zz{constructor(){Re(this,"active",!1);Re(this,"averageFPS",0);Re(this,"fps",0);Re(this,"arrayFPS",[]);Re(this,"rafId",null);Re(this,"previousTime",null);Re(this,"deltaTime",null);Re(this,"count",30);Re(this,"setOnAverageCallback",e=>{this.onAverageCallback=e});Re(this,"onRaf",e=>{this.deltaTime=e-this.previousTime,this.fps=1e3/this.deltaTime,this.previousTime=e,this.rafId=requestAnimationFrame(this.onRaf)});Re(this,"update",()=>{!this.active||(this.arrayFPS.length<this.count?this.arrayFPS.push(this.fps):(this.averageFPS=tA(this.arrayFPS),this.arrayFPS=[],this.onAverageCallback&&this.onAverageCallback(this.averageFPS)))});Re(this,"setActive",e=>{this.active=e});this.init()}init(){this.onRaf(0)}}function Jz(t){const e=new Map,n={set(i,s,o){const a=i[s];i[s]=o;for(const l of e.get(s)||[])l(o,a);return!0}},r={onChange:(i,s)=>(e.has(i)||e.set(i,[]),e.get(i).push(s),()=>{const o=e.get(i),a=o.indexOf(s);o.splice(a,1),o.length===0&&e.delete(i)}),...t};return new Proxy(r,n)}class eR{constructor(e,n){Re(this,"webglManager");Re(this,"thresholds",{minimal:0,low:0,normal:0});Re(this,"active",!0);Re(this,"state",Jz({renderQuality:"normal"}));Re(this,"windowIsBlurred",!1);Re(this,"perfCheckHistory",[]);Re(this,"enableLogs",!0);Re(this,"init",()=>{this.setEvents()});Re(this,"setEvents",()=>{window.addEventListener("blur",()=>{this.windowIsBlurred=!0}),window.addEventListener("visibilitychange",e=>{document.visibilityState==="visible"?this.windowIsBlurred=!1:this.windowIsBlurred=!0}),window.addEventListener("focus",()=>{this.windowIsBlurred=!1}),this.state.onChange("renderQuality",this.onRenderQualityChange)});Re(this,"onRenderQualityChange",e=>{switch(this.enableLogs&&console.warn(`Set WebGL to ${e} quality`),e){case"normal":this.webglManager.dpr=Bo(window.devicePixelRatio,1,2);break;case"low":this.disableBloom();break;case"minimal":this.webglManager.dpr=1,this.disableBloom(),this.setActive(!1);break}this.webglManager.resize(),this.webglManager._emitter.emit("resize")});Re(this,"setDebugEvents",()=>{this.enableLogs&&console.log("set debug events"),window.addEventListener("keydown",e=>{e.code==="Space"&&(this.active=!this.active);const n=e.code==="ArrowDown",r=e.code==="ArrowUp";n?this.downgradeQuality():r&&this.upgradeQuality()})});Re(this,"onPerfCheck",({fps:e})=>{!this.active||document.hidden||this.windowIsBlurred||(e>this.thresholds.minimal&&e<=this.thresholds.low?this.state.renderQuality="low":e<=this.thresholds.minimal&&(this.state.renderQuality="minimal"))});Re(this,"upgradeQuality",()=>{this.state.renderQuality=="low"?this.state.renderQuality="normal":this.state.renderQuality=="minimal"&&(this.state.renderQuality="low")});Re(this,"downgradeQuality",()=>{this.state.renderQuality=="normal"?this.state.renderQuality="low":this.state.renderQuality=="low"&&(this.state.renderQuality="minimal")});Re(this,"handlePerfHistory",()=>{if(this.perfCheckHistory.push(this.state.renderQuality),this.perfCheckHistory.length===4){const e=[...new Set(this.perfCheckHistory)];if(e.length===2){const n=this.perfCheckHistory.filter(i=>i===e[0]).length,r=this.perfCheckHistory.filter(i=>i===e[1]).length;n===r&&(this.enableLogs&&console.warn("perf changes are too repetitive and frequent, disabling perf check"),this.setActive(!1))}this.perfCheckHistory=[]}});Re(this,"setActive",e=>{this.active=e});this.webglManager=e,this.thresholds=n,this.init()}activate(){this.enableLogs&&console.log("call activate perf check");for(const e of Object.values(this.webglManager.scenes))e.scene?(this.webglManager.forceAllDraw||this.webglManager.drawcalls<40)&&console.error("attempted to launch PerformanceManager on first frames"):console.error("attempted to launch PerformanceManager when scenes weren't constructed yet");this.enableLogs&&console.log("activate perf check"),this.active=!0}enableBloom(){for(const{scene:e}of Object.values(this.webglManager.scenes))if(e.subscenes)for(const n of e.subscenes)n.bloomPass&&(n.hasBloom=!0,n.post&&(n.post.perfBloomFactor=1));else e.bloomPass&&(e.hasBloom=!0,e.post&&(e.post.perfBloomFactor=1))}disableBloom(){for(const{scene:e}of Object.values(this.webglManager.scenes))if(e.subscenes)for(const n of e.subscenes)n.bloomPass&&(n.hasBloom=!1,n.bloomPass.clear(),n.post&&(n.post.perfBloomFactor=0));else e.bloomPass&&(e.hasBloom=!1,e.bloomPass.clear(),e.post&&(e.post.perfBloomFactor=0))}}const tR=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function ap(t){return t=t.toLowerCase().replace(/.*angle ?\((.+)\)(?: on vulkan [0-9.]+)?$/i,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1"),t}const nR=16384,iR=4,rR=35044,lp=34962,sR=5121,oR=5126,aR=6408,lR=35632,cR=35633,B1=typeof window>"u",Gt=(()=>{if(B1)return;const{userAgent:t,platform:e,maxTouchPoints:n}=window.navigator,r=/(iphone|ipod|ipad)/i.test(t),i=e==="iPad"||e==="MacIntel"&&n>0&&!window.MSStream,s=/android/i.test(t);return{isIpad:i,isMobile:s||r||i,isSafari12:/Version\/12.+Safari/.test(t)}})();function uR(t,e,n){if(!n)return[e];const r=fR(t),i="801621810",s="8016218135",o="80162181161",a=Gt!=null&&Gt.isIpad?[["a7",o,12],["a8",s,15],["a8x",s,15],["a9",s,15],["a9x",s,15],["a10",s,15],["a10x",s,15],["a12",i,15],["a12x",i,15],["a12z",i,15],["a14",i,15],["m1",i,15]]:[["a7",o,12],["a8",s,12],["a9",s,15],["a10",s,15],["a11",i,15],["a12",i,15],["a13",i,15],["a14",i,15]];let l;return r==="80162181255"?l=a.filter(([,,u])=>u>=14):(l=a.filter(([,u])=>u===r),l.length||(l=a)),l.map(([u])=>`apple ${u} gpu`)}function fR(t){const e=`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `,n=`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `,r=t.createShader(cR),i=t.createShader(lR),s=t.createProgram();if(!(i&&r&&s))return;t.shaderSource(r,e),t.shaderSource(i,n),t.compileShader(r),t.compileShader(i),t.attachShader(s,r),t.attachShader(s,i),t.linkProgram(s),t.detachShader(s,r),t.detachShader(s,i),t.deleteShader(r),t.deleteShader(i),t.useProgram(s);const o=t.createBuffer();t.bindBuffer(lp,o),t.bufferData(lp,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),rR);const a=t.getAttribLocation(s,"aPosition");t.vertexAttribPointer(a,3,oR,!1,0,0),t.enableVertexAttribArray(a),t.clearColor(1,1,1,1),t.clear(nR),t.viewport(0,0,1,1),t.drawArrays(iR,0,3);const l=new Uint8Array(4);return t.readPixels(0,0,1,1,aR,sR,l),t.deleteProgram(s),t.deleteBuffer(o),l.join("")}function hR(t,e,n){return e==="apple gpu"?uR(t,e,n):[e]}class cp extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}function dR(t){var e;t=t.replace(/\([^)]+\)/,"");const n=t.match(/\d+/)||t.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(e=n==null?void 0:n.join("").replace(/\W|amd/g,""))!==null&&e!==void 0?e:""}const zl=[],up=[];function pR(t,e){if(t===e)return 0;const n=t;t.length>e.length&&(t=e,e=n);let r=t.length,i=e.length;for(;r>0&&t.charCodeAt(~-r)===e.charCodeAt(~-i);)r--,i--;let s=0;for(;s<r&&t.charCodeAt(s)===e.charCodeAt(s);)s++;if(r-=s,i-=s,r===0)return i;let o,a=0,l,c,u=0,h=0;for(;u<r;)up[u]=t.charCodeAt(s+u),zl[u]=++u;for(;h<i;)for(o=e.charCodeAt(s+h),l=h++,a=h,u=0;u<r;u++)c=o===up[u]?l:l+1,l=zl[u],a=zl[u]=l>a?c>a?a+1:c:c>l?l+1:c;return a}function mR(t){return t.split(/[.,()\[\]/\s]/g).sort().filter((e,n,r)=>n===0||e!==r[n-1]).join(" ")}function gR(t,e=!1){const n={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:e,powerPreference:"high-performance",stencil:!1};t&&delete n.powerPreference;const r=window.document.createElement("canvas"),i=r.getContext("webgl",n)||r.getContext("experimental-webgl",n);return i!=null?i:void 0}function vR(t){return t!=null}var Rl=globalThis&&globalThis.__awaiter||function(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{c(r.next(u))}catch(h){o(h)}}function l(u){try{c(r.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):i(u.value).then(a,l)}c((r=r.apply(t,e||[])).next())})};const bR="5.0.14",_R=({mobileTiers:t=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:n={},glContext:r,failIfMajorPerformanceCaveat:i=!1,benchmarksURL:s=`https://unpkg.com/detect-gpu@${bR}/dist/benchmarks`}={})=>Rl(void 0,void 0,void 0,function*(){const o={};if(B1)return{tier:0,type:"SSR"};const{isIpad:a=!!(Gt!=null&&Gt.isIpad),isMobile:l=!!(Gt!=null&&Gt.isMobile),screenSize:c=window.screen,loadBenchmarks:u=P=>Rl(void 0,void 0,void 0,function*(){const T=yield fetch(`${s}/${P}`).then(k=>k.json());if(parseInt(T.shift().split(".")[0],10)<4)throw new cp("Detect GPU benchmark data is out of date. Please update to version 4x");return T})}=n;let{renderer:h}=n;const f=P=>{const T=l?["adreno","apple","mali-t","mali","nvidia","powervr","samsung"]:["intel","apple","amd","radeon","nvidia","geforce"];for(const R of T)if(P.includes(R))return R};function d(P){var T;return Rl(this,void 0,void 0,function*(){const R=f(P);if(!R)return;const k=`${l?"m":"d"}-${R}${a?"-ipad":""}.json`,D=o[k]=(T=o[k])!==null&&T!==void 0?T:u(k);let M;try{M=yield D}catch(N){if(N instanceof cp)throw N;return}const z=dR(P);let S=M.filter(([,N])=>N===z);S.length||(S=M.filter(([N])=>N.includes(P)));const A=S.length;if(A===0)return;const I=mR(P);let[B,,,,$]=A>1?S.map(N=>[N,pR(I,N[2])]).sort(([,N],[,Q])=>N-Q)[0][0]:S[0],ne=Number.MAX_VALUE,pe;const{devicePixelRatio:ge}=window,ve=c.width*ge*c.height*ge;for(const N of $){const[Q,W]=N,J=Q*W,se=Math.abs(ve-J);se<ne&&(ne=se,pe=N)}if(!pe)return;const[,,ze,Ee]=pe;return[ne,ze,B,Ee]})}const p=(P,T,R,k,D)=>({device:D,fps:k,gpu:R,isMobile:l,tier:P,type:T});let m,g="";if(h)h=ap(h),m=[h];else{const P=r||gR(Gt==null?void 0:Gt.isSafari12,i);if(!P)return p(0,"WEBGL_UNSUPPORTED");const T=P.getExtension("WEBGL_debug_renderer_info");if(T&&(h=P.getParameter(T.UNMASKED_RENDERER_WEBGL)),!h)return p(1,"FALLBACK");g=h,h=ap(h),m=hR(P,h,l)}const x=(yield Promise.all(m.map(d))).filter(vR).sort(([P=Number.MAX_VALUE,T],[R=Number.MAX_VALUE,k])=>P===R?T-k:P-R);if(!x.length){const P=tR.find(T=>h.includes(T));return P?p(0,"BLOCKLISTED",P):p(1,"FALLBACK",`${h} (${g})`)}const[,b,_,v]=x[0];if(b===-1)return p(0,"BLOCKLISTED",_,b,v);const y=l?t:e;let w=0;for(let P=0;P<y.length;P++)b>=y[P]&&(w=P);return p(w,"BENCHMARK",_,b,v)});class yR{constructor(){this.scenes={},this.initialized=!1,this.clearColor=[0,0,0,0],this._emitter={},Xs(this._emitter),this.on=this._emitter.on.bind(this._emitter),this.framerateManager=new Zz,this.performanceManager=new eR(this,{minimal:40,low:50,normal:60}),window.GLXP=this}async init(e){this.dpr=Bo(window.devicePixelRatio,1,2),xe.queryDebugValue("dpr")&&(this.dpr=parseFloat(xe.queryDebugValue("dpr"))),this.width=e.offsetWidth*this.dpr,this.height=e.offsetHeight*this.dpr,this.container=e,this.catchContext(),this.textureLoader=new X3(this.gl),this.initialized=!0;const n=await this.getTier();return this.adaptToTier(n),this.tier=n,window.tier=n,this.initScenes(),window.addEventListener("resize",()=>{this.resize()}),Pe.on("webgl_loaded",()=>{this.resize(),this._emitter.emit("resize"),xe.active&&xe.pane.refresh()}),this}initScenes(){this.addScene("main",Yz),this.addScene("events",Qz)}addScene(e,n){this.scenes[e]={scene:new n(this.container,this),active:!1,callbackCanvas:null}}registerCallbackCanvas(e,n){this.scenes[e].callbackCanvas=n}getScene(e){return this.scenes[e].scene}loadScene(e){if(this.scenes[e].scene.loaded===!1)return new Promise((r,i)=>{this.scenes[e].scene.load(),this.scenes[e].scene.on("loaded",()=>{this.scenes[e].scene.onResize(),r()})})}activate(e){this.scenes[e].active=!0;const n=this.scenes[e].scene.activate();return n.then(()=>{this.framerateManager.setActive(!0),this.framerateManager.setOnAverageCallback(r=>{}),xe.active&&this.performanceManager.setDebugEvents()}),n}desactivate(e){this.scenes[e].active=!1,this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.colorMask(!0,!0,!0,!0)}resize(){this.width=this.container.offsetWidth*this.dpr,this.height=this.container.offsetHeight*this.dpr,this.canvas.style.minWidth=`${this.container.offsetWidth}px`,this.canvas.style.minHeight=`${this.container.offsetHeight}px`,this.renderer.setSize(this.width,this.height)}catchContext(){if(this.renderer=new G3({antialias:!1,alpha:!0,powerPreference:"high-performance",webgl:2}),this.gl=this.renderer.gl,this.renderer.isWebgl2)this.gl.isWebgl2=!0;else{let e=this.gl.getExtension("OES_vertex_array_object");e&&(this.gl.createVertexArray=function(){return e.createVertexArrayOES()},this.gl.deleteVertexArray=function(n){e.deleteVertexArrayOES(n)},this.gl.bindVertexArray=function(n){e.bindVertexArrayOES(n)},this.gl.isVertexArray=function(n){return e.isVertexArrayOES(n)}),this.gl.getExtension("OES_standard_derivatives"),this.gl.getExtension("EXT_shader_texture_lod"),this.gl.getExtension("OES_texture_float"),this.gl.getExtension("OES_texture_float_linear"),this.gl.getExtension("OES_texture_half_float"),this.gl.getExtension("OES_texture_half_float_linear"),this.gl.getExtension("EXT_color_buffer_half_float")}this.canvas=this.gl.canvas,this.container.appendChild(this.gl.canvas),this.renderer.setSize(this.width,this.height)}async getTier(){return await _R({glContext:this.gl,benchmarksURL:"/glxp/benchmarks"})}adaptToTier(e){const n={low:50,normal:60};e.type!=="BENCHMARK"?this.performanceManager.state.renderQuality="low":e.fps<n.normal?this.performanceManager.state.renderQuality="low":e.fps<n.low&&(this.performanceManager.state.renderQuality="minimal")}render(){let e=this.gl;e.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.colorMask(!0,!0,!0,!0),this.renderer.drawCalls=0,this.framerateManager.update();for(const n in this.scenes)if(this.scenes.hasOwnProperty(n)){const r=this.scenes[n];r.active===!0&&r.scene.render()}}}const Hc=new yR,xR=En(function(t){t.provide("webglManager",Hc),t.provide("raf",Pn)}),wR=[Qx,Zx,Iw,q2,$2,LT,IT,DT,NT,xR],SR=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),PR=(t,e)=>{var i;const n=e.route.matched.find(s=>{var o;return((o=s.components)==null?void 0:o.default)===e.Component.type}),r=(i=t!=null?t:n==null?void 0:n.meta.key)!=null?i:n&&SR(e.route,n);return typeof r=="function"?r(e.route):r},TR=(t,e)=>({default:()=>t?St(a_,t===!0?{}:t,e):e}),ER=tn({setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}}),jc=(t,e,n)=>({default:()=>e?St(t,e===!0?{}:e,n):St(ER,{},n)}),CR=tn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=pt();return()=>St(y0,{name:t.name,route:t.route,...e},{default:r=>{var l,c,u,h;if(!r.Component)return;const i=PR(t.pageKey,r),s=n.deferHydration(),o=!!((c=(l=t.transition)!=null?l:r.route.meta.pageTransition)!=null?c:ec),a=o&&zR([t.transition,r.route.meta.pageTransition,ec,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean));return jc(ca,o&&a,TR((h=(u=t.keepalive)!=null?u:r.route.meta.keepalive)!=null?h:kw,St(eg,{onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{Ki(()=>n.callHook("page:finish",r.Component).finally(s))}},{default:()=>St(RR,{key:i,routeProps:r,pageKey:i,hasTransition:o})}))).default()}})}});function AR(t){return Array.isArray(t)?t:t?[t]:[]}function zR(t){const e=t.map(n=>({...n,onAfterLeave:AR(n.onAfterLeave)}));return Px(...e)}const RR=tn({props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,r={};for(const i in t.routeProps.route)r[i]=Me(()=>e===t.pageKey?t.routeProps.route[i]:n[i]);return _r("_route",cn(r)),()=>St(t.routeProps.Component)}}),V1={default:()=>we(()=>import("./default.e7d114d3.js"),["./default.e7d114d3.js","./SoundToggle.3a5868ba.js","./ButtonPrimary.2d46e3d0.js","./index.9b54dd4e.js","./index.7ffa2c0d.css","./CallToAction.a96c55e9.js","./ButtonPrimary.7578e41a.css","./howler.4f5ca63d.js","./SoundToggle.00c27478.css","./Share.6d1341f7.js","./useLogic.3fa0afca.js","./Share.555e2a58.css","./language.326e33cf.js","./language.5ae9f5c1.css","./default.c5152140.css"],import.meta.url).then(t=>t.default||t),gui:()=>we(()=>import("./gui.26909887.js"),["./gui.26909887.js","./language.326e33cf.js","./language.5ae9f5c1.css","./gui.c4767cc2.css"],import.meta.url).then(t=>t.default||t)},OR=tn({props:{name:String},async setup(t,e){const n=await V1[t.name]().then(r=>r.default||r);return()=>St(n,{},e.slots)}}),MR=tn({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=ht("_route"),r=n===gu()?x0():n,i=Me(()=>{var s,o;return(o=(s=ut(t.name))!=null?s:r.meta.layout)!=null?o:"default"});return()=>{var a;const s=i.value&&i.value in V1,o=(a=r.meta.layoutTransition)!=null?a:Fw;return jc(ca,s&&o,{default:()=>jc(OR,s&&{key:i.value,name:i.value,hasTransition:void 0},e.slots).default()}).default()}}}),FR=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},kR={};function LR(t,e){const n=CR,r=MR;return Vi(),yr(r,null,{default:su(()=>[Ge(n)]),_:1})}const IR=FR(kR,[["render",LR]]),fp={__name:"nuxt-root",setup(t){const e=s_(()=>we(()=>import("./error-component.cba1d32a.js"),["./error-component.cba1d32a.js","./composables.6b3d1766.js","./error-component.78e5cd46.css"],import.meta.url).then(s=>s.default||s)),n=pt(),r=n.deferHydration();_r("_route",gu()),n.hooks.callHookWith(s=>s.map(o=>o()),"vue:setup");const i=fa();return lg((s,o,a)=>{n.hooks.callHook("vue:error",s,o,a).catch(l=>console.error("[nuxt] Error in `vue:error` hook",l)),Ax(s)&&(s.fatal||s.unhandled)&&Zn(n,ns,[s])}),(s,o)=>(Vi(),yr(eg,{onResolve:ut(r)},{default:su(()=>[ut(i)?(Vi(),yr(ut(e),{key:0,error:ut(i)},null,8,["error"])):(Vi(),yr(ut(IR),{key:1}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=ax.create({baseURL:cx()}));let hp;const DR=Sx(wR);hp=async function(){var i;const n=Boolean((i=window.__NUXT__)==null?void 0:i.serverRendered)?xy(fp):yy(fp),r=yx({vueApp:n});try{await wx(r,DR)}catch(s){await r.callHook("app:error",s),r.payload.error=r.payload.error||s}try{await r.hooks.callHook("app:created",n),await r.hooks.callHook("app:beforeMount",n),n.mount("#"+Lw),await r.hooks.callHook("app:mounted",n),await Ki()}catch(s){await r.callHook("app:error",s),r.payload.error=r.payload.error||s}},hp().catch(t=>{console.error("Error while mounting app:",t)});export{we as $,su as A,Sn as B,WR as C,HR as D,YR as E,mt as F,Pe as G,L_ as H,UR as I,JR as J,Tg as K,Ie as L,Io as M,KR as N,Bs as O,FR as P,Xz as Q,qR as R,c_ as S,Oe as T,oa as U,tO as V,an as W,XR as X,ZR as Y,s_ as Z,eO as _,Pg as a,ca as a0,rO as a1,t_ as a2,k_ as a3,jg as a4,Jg as a5,or as a6,dy as a7,gu as a8,nO as a9,p_ as aa,x0 as ab,Gg as ac,iO as ad,U2 as ae,Hc as af,Pn as ag,_s as b,GR as c,ut as d,$R as e,jR as f,Ge as g,py as h,De as i,js as j,ga as k,cn as l,Me as m,Zo as n,Vi as o,Vo as p,tn as q,et as r,ag as s,BR as t,pt as u,QR as v,VR as w,St as x,Us as y,yr as z};
