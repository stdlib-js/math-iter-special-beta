// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBeta=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[w]=n:delete r[w],e}:function(r){return s.call(r)},j=Boolean.prototype.toString;var A=b();function g(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function _(r){return p(r)||g(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",g);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var T=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),I=T.document&&T.document.childNodes,F=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};function B(r){return null!==r&&"object"==typeof r}function G(r){var t,n,e,o;if(("Object"===(n=h(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return B(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(B,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(B));var H="function"==typeof y||"object"==typeof F||"function"==typeof I?function(r){return G(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?G(r).toLowerCase():t};function L(r){return"function"===H(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!m(r,"constructor")&&m(t,"constructor")&&L(t.constructor)&&"[object Function]"===h(t.constructor)&&m(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!m(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(m(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n,e){var o,u,i,f,a,c,y,p,v;for(f=2,u=[0,0],o=[],i=[],v=0;v<f;v++)if(o.push(arguments[v]),M(arguments[v]))i.push(1);else{if(!k(arguments[v]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+v+"`. Value: `"+arguments[v]+"`.");i.push(0)}if(!L(n))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+n+"`.");if(c={invalid:NaN},arguments.length>3&&(p=Z(c,e)))throw p;if(l(a={},"next",b),l(a,"return",s),X){for(v=0;v<f;v++)if(i[v]&&!L(o[v][X])){y=!0;break}y||l(a,X,d)}return y=!1,a;function b(){var r,t,e;if(y)return{done:!0};for(e=0;e<f;e++)if(i[e]){if((t=o[e].next()).done)return y=!0,t;"number"==typeof t.value?u[e]=t.value:r=!0}else u[e]=o[e];return r?{value:c.invalid,done:!1}:{value:n(u[0],u[1]),done:!1}}function s(r){return y=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var r,t;for(r=[],t=0;t<f;t++)i[t]?r.push(o[t][X]()):r.push(o[t]);return r.push(n,c),$.apply(null,r)}}function rr(r){return r!=r}var tr="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var er,or="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===h(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=er,ir="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var ar,cr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr([1,3.14,-3.14,NaN]),n=t,r=(ir&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var lr=ar,yr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var vr,br="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,256,257]),n=t,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===h(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?br:function(){throw new Error("not implemented")};var sr=vr,dr="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var wr,hr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof mr)return!1;try{t=new mr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(dr&&n instanceof Uint16Array||"[object Uint16Array]"===h(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var jr,Ar={uint16:wr,uint8:sr};(jr=new Ar.uint16(1))[0]=4660;var gr=52===new Ar.uint8(jr.buffer)[0],_r=!0===gr?1:0,Or=new lr(1),Ur=new ur(Or.buffer);function Sr(r){return Or[0]=r,Ur[_r]}var Er=!0===gr?1:0,Nr=new lr(1),Tr=new ur(Nr.buffer);function Ir(r,t){return Nr[0]=r,Tr[Er]=t>>>0,Nr[0]}var Fr=Number.POSITIVE_INFINITY,Pr=W.NEGATIVE_INFINITY,Vr=1023;var xr=.6931471803691238,Br=1.9082149292705877e-10;var Gr=Math.sqrt;function Hr(r){return Math.abs(r)}var Lr=Math.floor,Mr=Math.ceil;function kr(r){return r<0?Mr(r):Lr(r)}var Wr,Cr;function Yr(r){return r===Fr||r===Pr}!0===gr?(Wr=1,Cr=0):(Wr=0,Cr=1);var qr,Rr,Xr={HIGH:Wr,LOW:Cr},zr=new lr(1),Dr=new ur(zr.buffer),Jr=Xr.HIGH,Kr=Xr.LOW;function Qr(r,t){return zr[0]=t,r[0]=Dr[Jr],r[1]=Dr[Kr],r}function Zr(r,t){return 1===arguments.length?Qr([0,0],r):Qr(r,t)}!0===gr?(qr=1,Rr=0):(qr=0,Rr=1);var $r={HIGH:qr,LOW:Rr},rt=new lr(1),tt=new ur(rt.buffer),nt=$r.HIGH,et=$r.LOW;function ot(r,t){return tt[nt]=r,tt[et]=t,rt[0]}var ut=[0,0];function it(r,t){var n,e;return Zr(ut,r),n=ut[0],n&=2147483647,e=Sr(t),ot(n|=e&=2147483648,ut[1])}function ft(r,t){return rr(t)||Yr(t)?(r[0]=t,r[1]=0,r):0!==t&&Hr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var at=[0,0],ct=[0,0];function lt(r,t){var n,e;return 0===t||0===r||rr(r)||Yr(r)?r:(function(r,t){1===arguments.length?ft([0,0],r):ft(r,t)}(at,r),t+=at[1],t+=function(r){var t=Sr(r);return(t=(2146435072&t)>>>20)-Vr|0}(r=at[0]),t<-1074?it(0,r):t>1023?r<0?Pr:Fr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Zr(ct,r),n=ct[0],n&=2148532223,e*ot(n|=t+Vr<<20,ct[1])))}var yt=1.4426950408889634,pt=1/(1<<28);function vt(r){var t;return rr(r)||r===Fr?r:r===Pr?0:r>709.782712893384?Fr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<pt?1+r:function(r,t,n){var e,o,u,i;return lt(1-(t-(e=r-t)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=kr(r<0?yt*r-.5:yt*r+.5)),1.9082149292705877e-10*t,t)}function bt(r){return Lr(r)===r}function st(r){return bt(r/2)}function dt(r){return st(r>0?r-1:r+1)}var mt=!0===gr?0:1,wt=new lr(1),ht=new ur(wt.buffer);function jt(r,t){return wt[0]=r,ht[mt]=t>>>0,wt[0]}function At(r){return 0|r}var gt=1048576,_t=[1,1.5],Ot=[0,.5849624872207642],Ut=[0,1.350039202129749e-8];var St=2147483647,Et=1048575,Nt=1048576;var Tt=2147483647,It=1083179008,Ft=1e300,Pt=1e-300,Vt=[0,0],xt=[0,0];function Bt(r,t){var n,e,o,u,i,f,a,c,l,y,p,v,b,s;if(rr(r)||rr(t))return NaN;if(Zr(Vt,t),i=Vt[0],0===Vt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Gr(r);if(-.5===t)return 1/Gr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Yr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Hr(r)<1==(t===Fr)?0:Fr}(r,t)}if(Zr(Vt,r),u=Vt[0],0===Vt[1]){if(0===u)return function(r,t){return t===Pr?Fr:t===Fr?0:t>0?dt(t)?r:0:dt(t)?it(Fr,r):Fr}(r,t);if(1===r)return 1;if(-1===r&&dt(t))return-1;if(Yr(r))return r===Pr?Bt(-0,-t):t<0?0:Fr}if(r<0&&!1===bt(t))return(r-r)/(r-r);if(o=Hr(r),n=u&Tt|0,e=i&Tt|0,a=i>>>31|0,f=(f=u>>>31|0)&&dt(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Sr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*Ft*Ft:f*Pt*Pt;if(n>1072693248)return 0===a?f*Ft*Ft:f*Pt*Pt;p=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=jt(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(xt,o)}else p=function(r,t,n){var e,o,u,i,f,a,c,l,y,p,v,b,s,d,m,w,h,j,A,g,_;return j=0,n<gt&&(j-=53,n=Sr(t*=9007199254740992)),j+=(n>>20)-Vr|0,n=1072693248|(A=1048575&n|0),A<=235662?g=0:A<767610?g=1:(g=0,j+=1,n-=gt),i=jt(o=(w=(t=Ir(t,n))-(c=_t[g]))*(h=1/(t+c)),0),e=524288+(n>>1|536870912),a=Ir(0,e+=g<<18),m=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=jt(a=3+(u=i*i)+(m+=(f=h*(w-i*a-i*(t-(a-c))))*(i+o)),0),s=(v=-7.028461650952758e-9*(y=jt(y=(w=i*a)+(h=f*a+(m-(a-3-u))*o),0))+.9617966939259756*(h-(y-w))+Ut[g])-((b=jt(b=(p=.9617967009544373*y)+v+(l=Ot[g])+(d=j),0))-d-l-p),r[0]=b,r[1]=s,r}(xt,o,n);if(y=(t-(c=jt(t,0)))*p[0]+t*p[1],l=c*p[0],Zr(Vt,v=y+l),b=At(Vt[0]),s=At(Vt[1]),b>=It){if(0!=(b-It|s))return f*Ft*Ft;if(y+8008566259537294e-32>v-l)return f*Ft*Ft}else if((b&Tt)>=1083231232){if(0!=(b-3230714880|s))return f*Pt*Pt;if(y<=v-l)return f*Pt*Pt}return v=function(r,t,n){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&St|0)>>20)-Vr|0,c=0,l>1071644672&&(o=Ir(0,((c=r+(Nt>>y+1)>>>0)&~(Et>>(y=((c&St)>>20)-Vr|0)))>>>0),c=(c&Et|Nt)>>20-y>>>0,r<0&&(c=-c),t-=o),r=At(r=Sr(a=1-((a=(u=.6931471824645996*(o=jt(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?lt(a,c):Ir(a,r)}(b,l,y),f*v}var Gt=2220446049250313e-31;function Ht(r){var t,n;return 0===r?1/0:((r<0?-r:r)<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(t=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),t/n)}var Lt=10.900511;function Mt(r,t){var n,e,o,u,i,f,a;return rr(r)||rr(t)||r<0||t<0?NaN:1===t?1/r:1===r?1/t:(a=r+t)<Gt?(i=a/r,i/=t):a===r&&t<Gt?1/t:a===t&&r<Gt?1/r:(r<t&&(f=t,t=r,r=f),e=r+Lt-.5,o=t+Lt-.5,u=a+Lt-.5,i=Ht(r)*(Ht(t)/Ht(a)),Hr(t*(n=r-.5-t))<100*u&&r>100?i*=vt(n*function(r){var t,n,e,o,u,i,f,a,c,l;if(r<-1||rr(r))return NaN;if(-1===r)return Pr;if(r===Fr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=Sr(c=1+r))>>20)-Vr)>0?1-(c-r):r-(c-1),u/=c):(l=((n=Sr(c=r))>>20)-Vr,u=0),(n&=1048575)<434334?c=Ir(c,1072693248|n):(l+=1,c=Ir(c,1071644672|n),n=1048576-n>>2),o=c-1),t=.5*o*o,0===n?0===o?l*xr+(u+=l*Br):l*xr-((a=t*(1-.6666666666666666*o))-(l*Br+u)-o):(a=(f=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?o-(t-i*(t+a)):l*xr-(t-(i*(t+a)+(l*Br+u))-o))}(-t/u)):i*=Bt(e/u,n),i*=Bt(u>1e10?e/u*(o/u):e*o/(u*u),t),i*=Gr(2.718281828459045/o))}return function(r,t){return $(r,t,Mt)}}));
//# sourceMappingURL=index.js.map
