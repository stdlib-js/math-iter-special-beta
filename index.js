// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBeta=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,h,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+j(e):j(e)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function x(r){var n,t,e,o,a,c,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(e=r[s]))c+=e;else{if(n=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,t,e,i;for(t=[],i=0,e=T.exec(r);e;)(n=r.slice(i,T.lastIndex-e[0].length)).length&&t.push(n),t.push(U(e)),i=T.lastIndex,e=T.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function F(r){return"string"==typeof r}function N(r){var n,t,e;if(!F(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=I(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return x.apply(null,t)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,n)||C.call(r,n)?(e=r.__proto__,r.__proto__=V,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,n,t.get),a&&L&&L.call(r,n,t.set),r};var B=k;function H(r,n,t){B(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=/./;function W(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,n){return null!=r&&Y.call(r,n)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=Z()?function(r){var n,t,e;if(null==r)return X.call(r);t=r[D],n=q(r,D);try{r[D]=void 0}catch(n){return X.call(r)}return e=X.call(r),n?r[D]=t:delete r[D],e}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function nr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return W(r)||nr(r)}function er(){return new Function("return this;")()}H(tr,"isPrimitive",W),H(tr,"isObject",nr);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!W(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ur)return ur;if(ir)return ir;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=fr.document&&fr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;H(sr,"REGEXP",pr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function vr(r){return null!==r&&"object"==typeof r}function gr(r){var n,t,e,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=pr.exec(e.toString()))return n[1]}return vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}H(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(vr));var dr="function"==typeof M||"object"==typeof lr||"function"==typeof cr?function(r){return gr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?gr(r).toLowerCase():n};function br(r){return"function"===dr(r)}function hr(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&br(r.next)}function wr(r){return"number"==typeof r}var mr=Number,jr=mr.prototype.toString;var Ar=Z();function _r(r){return"object"==typeof r&&(r instanceof mr||(Ar?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return wr(r)||_r(r)}H(Er,"isPrimitive",wr),H(Er,"isObject",_r);var Or="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var Sr,xr=Object,Tr=Object.getPrototypeOf;Sr=br(Object.getPrototypeOf)?Tr:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=Sr;var Ir=Object.prototype;function Fr(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(n=function(r){return null==r?null:(r=xr(r),Ur(r))}(r),!n||!q(r,"constructor")&&q(n,"constructor")&&br(n.constructor)&&"[object Function]"===J(n.constructor)&&q(n,"isPrototypeOf")&&br(n.isPrototypeOf)&&(n===Ir||function(r){var n;for(n in r)if(!q(r,n))return!1;return!0}(r)))}function Nr(r,n){return Fr(n)?(q(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",n))}function kr(r,n,t,e){var i,o,a,u,f,c,l,s,p;for(u=2,o=[0,0],i=[],a=[],p=0;p<u;p++)if(i.push(arguments[p]),hr(arguments[p]))a.push(1);else{if(!wr(arguments[p]))throw new TypeError(N("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",p,arguments[p]));a.push(0)}if(!br(t))throw new TypeError(N("invalid argument. Third argument must be a function. Value: `%s`.",t));if(c={invalid:NaN},arguments.length>3&&(s=Nr(c,e)))throw s;if(H(f={},"next",y),H(f,"return",v),Or){for(p=0;p<u;p++)if(a[p]&&!br(i[p][Or])){l=!0;break}l||H(f,Or,g)}return l=!1,f;function y(){var r,n,e;if(l)return{done:!0};for(e=0;e<u;e++)if(a[e]){if((n=i[e].next()).done)return l=!0,n;"number"==typeof n.value?o[e]=n.value:r=!0}else o[e]=i[e];return r?{value:c.invalid,done:!1}:{value:t(o[0],o[1]),done:!1}}function v(r){return l=!0,arguments.length?{value:r,done:!0}:{done:!0}}function g(){var r,n;for(r=[],n=0;n<u;n++)a[n]?r.push(i[n][Or]()):r.push(i[n]);return r.push(t,c),kr.apply(null,r)}}function Vr(r){return r!=r}var Pr="function"==typeof Uint32Array;var Gr="function"==typeof Uint32Array?Uint32Array:null;var Lr,$r="function"==typeof Uint32Array?Uint32Array:void 0;Lr=function(){var r,n,t;if("function"!=typeof Gr)return!1;try{n=new Gr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Pr&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr=Lr,Br="function"==typeof Float64Array;var Hr="function"==typeof Float64Array?Float64Array:null;var Mr,Wr="function"==typeof Float64Array?Float64Array:void 0;Mr=function(){var r,n,t;if("function"!=typeof Hr)return!1;try{n=new Hr([1,3.14,-3.14,NaN]),t=n,r=(Br&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Rr=Mr,Zr="function"==typeof Uint8Array;var Xr="function"==typeof Uint8Array?Uint8Array:null;var Yr,qr="function"==typeof Uint8Array?Uint8Array:void 0;Yr=function(){var r,n,t;if("function"!=typeof Xr)return!1;try{n=new Xr(n=[1,3.14,-3.14,256,257]),t=n,r=(Zr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr=Yr,Dr="function"==typeof Uint16Array;var Jr="function"==typeof Uint16Array?Uint16Array:null;var Kr,Qr="function"==typeof Uint16Array?Uint16Array:void 0;Kr=function(){var r,n,t;if("function"!=typeof Jr)return!1;try{n=new Jr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Dr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rn,nn={uint16:Kr,uint8:zr};(rn=new nn.uint16(1))[0]=4660;var tn=52===new nn.uint8(rn.buffer)[0],en=!0===tn?1:0,on=new Rr(1),an=new Cr(on.buffer);function un(r){return on[0]=r,an[en]}var fn=!0===tn?1:0,cn=new Rr(1),ln=new Cr(cn.buffer);function sn(r,n){return cn[0]=r,ln[fn]=n>>>0,cn[0]}var pn=Number.POSITIVE_INFINITY,yn=mr.NEGATIVE_INFINITY,vn=1023;var gn=.6931471803691238,dn=1.9082149292705877e-10;var bn=Math.sqrt;function hn(r){return Math.abs(r)}var wn=Math.floor,mn=Math.ceil;function jn(r){return r<0?mn(r):wn(r)}function An(r){return r===pn||r===yn}var _n,En,On=2147483647;!0===tn?(_n=1,En=0):(_n=0,En=1);var Sn,xn,Tn={HIGH:_n,LOW:En},Un=new Rr(1),In=new Cr(Un.buffer),Fn=Tn.HIGH,Nn=Tn.LOW;function kn(r,n,t,e){return Un[0]=r,n[e]=In[Fn],n[e+t]=In[Nn],n}function Vn(r){return kn(r,[0,0],1,0)}H(Vn,"assign",kn),!0===tn?(Sn=1,xn=0):(Sn=0,xn=1);var Pn={HIGH:Sn,LOW:xn},Gn=new Rr(1),Ln=new Cr(Gn.buffer),$n=Pn.HIGH,Cn=Pn.LOW;function Bn(r,n){return Ln[$n]=r,Ln[Cn]=n,Gn[0]}var Hn=[0,0];function Mn(r,n){var t,e;return Vn.assign(r,Hn,1,0),t=Hn[0],t&=On,e=un(n),Bn(t|=e&=2147483648,Hn[1])}function Wn(r,n,t,e){return Vr(r)||An(r)?(n[e]=r,n[e+t]=0,n):0!==r&&hn(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}H((function(r){return Wn(r,[0,0],1,0)}),"assign",Wn);var Rn=[0,0],Zn=[0,0];function Xn(r,n){var t,e;return 0===n||0===r||Vr(r)||An(r)?r:(Wn(r,Rn,1,0),n+=Rn[1],n+=function(r){var n=un(r);return(n=(2146435072&n)>>>20)-vn|0}(r=Rn[0]),n<-1074?Mn(0,r):n>1023?r<0?yn:pn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Vn.assign(r,Zn,1,0),t=Zn[0],t&=2148532223,e*Bn(t|=n+vn<<20,Zn[1])))}var Yn=1.4426950408889634,qn=1/(1<<28);function zn(r){var n;return Vr(r)||r===pn?r:r===yn?0:r>709.782712893384?pn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<qn?1+r:function(r,n,t){var e,i,o,a;return Xn(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=jn(r<0?Yn*r-.5:Yn*r+.5)),1.9082149292705877e-10*n,n)}function Dn(r){return wn(r)===r}function Jn(r){return Dn(r/2)}function Kn(r){return Jn(r>0?r-1:r+1)}var Qn=!0===tn?0:1,rt=new Rr(1),nt=new Cr(rt.buffer);function tt(r,n){return rt[0]=r,nt[Qn]=n>>>0,rt[0]}function et(r){return 0|r}var it=1048576,ot=[1,1.5],at=[0,.5849624872207642],ut=[0,1.350039202129749e-8];var ft=1048575;var ct=1048576;var lt=1083179008,st=1e300,pt=1e-300,yt=[0,0],vt=[0,0];function gt(r,n){var t,e,i,o,a,u,f,c,l,s,p,y,v,g;if(Vr(r)||Vr(n))return NaN;if(Vn.assign(n,yt,1,0),a=yt[0],0===yt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return bn(r);if(-.5===n)return 1/bn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(An(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:hn(r)<1==(n===pn)?0:pn}(r,n)}if(Vn.assign(r,yt,1,0),o=yt[0],0===yt[1]){if(0===o)return function(r,n){return n===yn?pn:n===pn?0:n>0?Kn(n)?r:0:Kn(n)?Mn(pn,r):pn}(r,n);if(1===r)return 1;if(-1===r&&Kn(n))return-1;if(An(r))return r===yn?gt(-0,-n):n<0?0:pn}if(r<0&&!1===Dn(n))return(r-r)/(r-r);if(i=hn(r),t=o&On|0,e=a&On|0,f=a>>>31|0,u=(u=o>>>31|0)&&Kn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(un(r)&On)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*st*st:u*pt*pt;if(t>1072693248)return 0===f?u*st*st:u*pt*pt;p=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=tt(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(vt,i)}else p=function(r,n,t){var e,i,o,a,u,f,c,l,s,p,y,v,g,d,b,h,w,m,j,A,_;return m=0,t<it&&(m-=53,t=un(n*=9007199254740992)),m+=(t>>20)-vn|0,t=1072693248|(j=1048575&t|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,t-=it),a=tt(i=(h=(n=sn(n,t))-(c=ot[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=sn(0,e+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=tt(f=3+(o=a*a)+(b+=(u=w*(h-a*f-a*(n-(f-c))))*(a+i)),0),g=(y=-7.028461650952758e-9*(s=tt(s=(h=a*f)+(w=u*f+(b-(f-3-o))*i),0))+.9617966939259756*(w-(s-h))+ut[A])-((v=tt(v=(p=.9617967009544373*s)+y+(l=at[A])+(d=m),0))-d-l-p),r[0]=v,r[1]=g,r}(vt,i,t);if(y=(s=(n-(c=tt(n,0)))*p[0]+n*p[1])+(l=c*p[0]),Vn.assign(y,yt,1,0),v=et(yt[0]),g=et(yt[1]),v>=lt){if(0!=(v-lt|g))return u*st*st;if(s+8008566259537294e-32>y-l)return u*st*st}else if((v&On)>=1083231232){if(0!=(v-3230714880|g))return u*pt*pt;if(s<=y-l)return u*pt*pt}return y=function(r,n,t){var e,i,o,a,u,f,c,l,s,p;return s=((l=r&On|0)>>20)-vn|0,c=0,l>1071644672&&(i=sn(0,((c=r+(ct>>s+1)>>>0)&~(ft>>(s=((c&On)>>20)-vn|0)))>>>0),c=(c&ft|ct)>>20-s>>>0,r<0&&(c=-c),n-=i),r=et(r=un(f=1-((f=(o=.6931471824645996*(i=tt(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Xn(f,c):sn(f,r)}(v,l,s),u*y}var dt=2220446049250313e-31;function bt(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var ht=10.900511;function wt(r,n){var t,e,i,o,a,u,f;return Vr(r)||Vr(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(f=r+n)<dt?(a=f/r,a/=n):f===r&&n<dt?1/n:f===n&&r<dt?1/r:(r<n&&(u=n,n=r,r=u),e=r+ht-.5,i=n+ht-.5,o=f+ht-.5,a=bt(r)*(bt(n)/bt(f)),hn(n*(t=r-.5-n))<100*o&&r>100?a*=zn(t*function(r){var n,t,e,i,o,a,u,f,c,l;if(r<-1||Vr(r))return NaN;if(-1===r)return yn;if(r===pn)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,i=r,t=1)}return 0!==l&&(e<9007199254740992?(o=(l=((t=un(c=1+r))>>20)-vn)>0?1-(c-r):r-(c-1),o/=c):(l=((t=un(c=r))>>20)-vn,o=0),(t&=1048575)<434334?c=sn(c,1072693248|t):(l+=1,c=sn(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?l*gn+(o+=l*dn):l*gn-((f=n*(1-.6666666666666666*i))-(l*dn+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(n-a*(n+f)):l*gn-(n-(a*(n+f)+(l*dn+o))-i))}(-n/o)):a*=gt(e/o,t),a*=gt(o>1e10?e/o*(i/o):e*i/(o*o),n),a*=bn(2.718281828459045/i))}return function(r,n){return kr(r,n,wt)}}));
//# sourceMappingURL=index.js.map
