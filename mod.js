// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,n){return null!=r&&d.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var n,t,e;if(null==r)return s.call(r);t=r[m],n=w(r,m);try{r[m]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[m]=t:delete r[m],e}:function(r){return s.call(r)},h=Boolean.prototype.toString;var A=b();function g(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||g(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",g);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var I=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),T=I.document&&I.document.childNodes,F=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",V);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function H(r){return null!==r&&"object"==typeof r}function x(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=V.exec(e.toString()))return n[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!G(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof F||"function"==typeof T?function(r){return x(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?x(r).toLowerCase():n};function L(r){return"function"===B(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!w(r,"constructor")&&w(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&w(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!w(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(w(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t,e){var o,u,i,f,a,c,y,v,p;for(f=2,u=[0,0],o=[],i=[],p=0;p<f;p++)if(o.push(arguments[p]),M(arguments[p]))i.push(1);else{if(!k(arguments[p]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+p+"`. Value: `"+arguments[p]+"`.");i.push(0)}if(!L(t))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+t+"`.");if(c={invalid:NaN},arguments.length>3&&(v=Z(c,e)))throw v;if(l(a={},"next",b),l(a,"return",s),X){for(p=0;p<f;p++)if(i[p]&&!L(o[p][X])){y=!0;break}y||l(a,X,d)}return y=!1,a;function b(){var r,n,e;if(y)return{done:!0};for(e=0;e<f;e++)if(i[e]){if((n=o[e].next()).done)return y=!0,n;"number"==typeof n.value?u[e]=n.value:r=!0}else u[e]=o[e];return r?{value:c.invalid,done:!1}:{value:t(u[0],u[1]),done:!1}}function s(r){return y=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var r,n;for(r=[],n=0;n<f;n++)i[n]?r.push(o[n][X]()):r.push(o[n]);return r.push(t,c),$.apply(null,r)}}function rr(r){return r!=r}var nr="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var er,or="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,n,t;if("function"!=typeof tr)return!1;try{n=new tr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(nr&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=er,ir="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var ar,cr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,n,t;if("function"!=typeof fr)return!1;try{n=new fr([1,3.14,-3.14,NaN]),t=n,r=(ir&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var lr=ar,yr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var pr,br="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,n,t;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,256,257]),t=n,r=(yr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?br:function(){throw new Error("not implemented")};var sr=pr,dr="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null;var mr,jr="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,n,t;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(dr&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var hr,Ar={uint16:mr,uint8:sr};(hr=new Ar.uint16(1))[0]=4660;var gr=52===new Ar.uint8(hr.buffer)[0],_r=!0===gr?1:0,Or=new lr(1),Ur=new ur(Or.buffer);function Sr(r){return Or[0]=r,Ur[_r]}var Er=!0===gr?1:0,Nr=new lr(1),Ir=new ur(Nr.buffer);function Tr(r,n){return Nr[0]=r,Ir[Er]=n>>>0,Nr[0]}var Fr=Number.POSITIVE_INFINITY,Pr=W.NEGATIVE_INFINITY;var Vr=.6931471803691238,Gr=1.9082149292705877e-10;var Hr=Math.sqrt;function xr(r){return Math.abs(r)}var Br=Math.floor,Lr=Math.ceil;function Mr(r){return r<0?Lr(r):Br(r)}var kr,Wr;function Cr(r){return r===Fr||r===Pr}!0===gr?(kr=1,Wr=0):(kr=0,Wr=1);var Yr,qr,Rr={HIGH:kr,LOW:Wr},Xr=new lr(1),zr=new ur(Xr.buffer),Dr=Rr.HIGH,Jr=Rr.LOW;function Kr(r,n){return Xr[0]=n,r[0]=zr[Dr],r[1]=zr[Jr],r}function Qr(r,n){return 1===arguments.length?Kr([0,0],r):Kr(r,n)}!0===gr?(Yr=1,qr=0):(Yr=0,qr=1);var Zr={HIGH:Yr,LOW:qr},$r=new lr(1),rn=new ur($r.buffer),nn=Zr.HIGH,tn=Zr.LOW;function en(r,n){return rn[nn]=r,rn[tn]=n,$r[0]}var on=[0,0];function un(r,n){var t,e;return Qr(on,r),t=on[0],t&=2147483647,e=Sr(n),en(t|=e&=2147483648,on[1])}function fn(r,n,t,e){return rr(r)||Cr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&xr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return fn(r,[0,0],1,0)}),"assign",fn);var an=[0,0],cn=[0,0];function ln(r,n){var t,e;return 0===n||0===r||rr(r)||Cr(r)?r:(fn(r,an,1,0),n+=an[1],n+=function(r){var n=Sr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=an[0]),n<-1074?un(0,r):n>1023?r<0?Pr:Fr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Qr(cn,r),t=cn[0],t&=2148532223,e*en(t|=n+1023<<20,cn[1])))}function yn(r){var n;return rr(r)||r===Fr?r:r===Pr?0:r>709.782712893384?Fr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return ln(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=Mr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function vn(r){return Br(r)===r}function pn(r){return vn(r/2)}function bn(r){return pn(r>0?r-1:r+1)}var sn=!0===gr?0:1,dn=new lr(1),wn=new ur(dn.buffer);function mn(r,n){return dn[0]=r,wn[sn]=n>>>0,dn[0]}function jn(r){return 0|r}var hn=[1,1.5],An=[0,.5849624872207642],gn=[0,1.350039202129749e-8];var _n=1e300,On=1e-300,Un=[0,0],Sn=[0,0];function En(r,n){var t,e,o,u,i,f,a,c,l,y,v,p,b,s;if(rr(r)||rr(n))return NaN;if(Qr(Un,n),i=Un[0],0===Un[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Hr(r);if(-.5===n)return 1/Hr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Cr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:xr(r)<1==(n===Fr)?0:Fr}(r,n)}if(Qr(Un,r),u=Un[0],0===Un[1]){if(0===u)return function(r,n){return n===Pr?Fr:n===Fr?0:n>0?bn(n)?r:0:bn(n)?un(Fr,r):Fr}(r,n);if(1===r)return 1;if(-1===r&&bn(n))return-1;if(Cr(r))return r===Pr?En(-0,-n):n<0?0:Fr}if(r<0&&!1===vn(n))return(r-r)/(r-r);if(o=xr(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&bn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Sr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*_n*_n:f*On*On;if(t>1072693248)return 0===a?f*_n*_n:f*On*On;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=mn(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Sn,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,b,s,d,w,m,j,h,A,g,_;return h=0,t<1048576&&(h-=53,t=Sr(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?g=0:A<767610?g=1:(g=0,h+=1,t-=1048576),i=mn(o=(m=(n=Tr(n,t))-(c=hn[g]))*(j=1/(n+c)),0),e=524288+(t>>1|536870912),a=Tr(0,e+=g<<18),w=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=mn(a=3+(u=i*i)+(w+=(f=j*(m-i*a-i*(n-(a-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(y=mn(y=(m=i*a)+(j=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(j-(y-m))+gn[g])-((b=mn(b=(v=.9617967009544373*y)+p+(l=An[g])+(d=h),0))-d-l-v),r[0]=b,r[1]=s,r}(Sn,o,t);if(y=(n-(c=mn(n,0)))*v[0]+n*v[1],l=c*v[0],Qr(Un,p=y+l),b=jn(Un[0]),s=jn(Un[1]),b>=1083179008){if(0!=(b-1083179008|s))return f*_n*_n;if(y+8008566259537294e-32>p-l)return f*_n*_n}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|s))return f*On*On;if(y<=p-l)return f*On*On}return p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=Tr(0,e)),r=jn(r=Sr(c=1-((c=(i=.6931471824645996*(u=mn(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?ln(c,l):Tr(c,r)}(b,l,y),f*p}function Nn(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var In=10.900511;function Tn(r,n){var t,e,o,u,i,f,a;return rr(r)||rr(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(a=r+n)<2220446049250313e-31?(i=a/r,i/=n):a===r&&n<2220446049250313e-31?1/n:a===n&&r<2220446049250313e-31?1/r:(r<n&&(f=n,n=r,r=f),e=r+In-.5,o=n+In-.5,u=a+In-.5,i=Nn(r)*(Nn(n)/Nn(a)),xr(n*(t=r-.5-n))<100*u&&r>100?i*=yn(t*function(r){var n,t,e,o,u,i,f,a,c,l;if(r<-1||rr(r))return NaN;if(-1===r)return Pr;if(r===Fr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,t=1)}return 0!==l&&(e<9007199254740992?(u=(l=((t=Sr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(l=((t=Sr(c=r))>>20)-1023,u=0),(t&=1048575)<434334?c=Tr(c,1072693248|t):(l+=1,c=Tr(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?l*Vr+(u+=l*Gr):l*Vr-((a=n*(1-.6666666666666666*o))-(l*Gr+u)-o):(a=(f=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?o-(n-i*(n+a)):l*Vr-(n-(i*(n+a)+(l*Gr+u))-o))}(-n/u)):i*=En(e/u,t),i*=En(u>1e10?e/u*(o/u):e*o/(u*u),n),i*=Hr(2.718281828459045/o))}function Fn(r,n){return $(r,n,Tn)}export{Fn as default};
//# sourceMappingURL=mod.js.map
