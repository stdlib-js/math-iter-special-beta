// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBeta=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):c.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,o,a,f,c,l,s,p,v,y,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)f+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,v=n.width,y=n.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),f+=n.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){var e,t;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var I,F=Object.prototype,k=F.toString,N=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=I;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function B(r){return"boolean"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return H&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&R.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=M()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return W.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=M();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return B(r)||K(r)}$(Q,"isPrimitive",B),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!B(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=ir.document&&ir.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",fr);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return lr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof or?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e};function vr(r){return"function"===pr(r)}function yr(r){return"number"==typeof r}var gr=Number,dr=gr.prototype.toString;var br=M();function hr(r){return"object"==typeof r&&(r instanceof gr||(br?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function wr(r){return yr(r)||hr(r)}$(wr,"isPrimitive",yr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,_r=Object.getPrototypeOf;jr=vr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var Or=Object.prototype;function Sr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(e=function(r){return null==r?null:(r=Ar(r),Er(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&vr(e.constructor)&&"[object Function]"===q(e.constructor)&&Z(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Or||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function xr(r,e,t,n){var i,o,a,u,f,c,l,s,p,v;for(2,o=[0,0],i=[],a=[],s=0;s<2;s++)if(i.push(arguments[s]),v=void 0,v=typeof(p=arguments[s]),null===p||"object"!==v&&"function"!==v||!vr(p.next)){if(!yr(arguments[s]))throw new TypeError(U("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",s,arguments[s]));a.push(0)}else a.push(1);if(!vr(t))throw new TypeError(U("invalid argument. Third argument must be a function. Value: `%s`.",t));if(f={invalid:NaN},arguments.length>3&&(l=function(r,e){return Sr(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",e))}(f,n),l))throw l;if($(u={},"next",(function(){var r,e,n;if(c)return{done:!0};for(n=0;n<2;n++)if(a[n]){if((e=i[n].next()).done)return c=!0,e;"number"==typeof e.value?o[n]=e.value:r=!0}else o[n]=i[n];if(r)return{value:f.invalid,done:!1};return{value:t(o[0],o[1]),done:!1}})),$(u,"return",(function(r){if(c=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr){for(s=0;s<2;s++)if(a[s]&&!vr(i[s][mr])){c=!0;break}c||$(u,mr,(function(){var r,e;for(r=[],e=0;e<2;e++)a[e]?r.push(i[e][mr]()):r.push(i[e]);return r.push(t,f),xr.apply(null,r)}))}return c=!1,u}function Tr(r){return r!=r}var Ur="function"==typeof Uint32Array;var Ir="function"==typeof Uint32Array?Uint32Array:null;var Fr,kr="function"==typeof Uint32Array?Uint32Array:void 0;Fr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Ur&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Nr=Fr,Vr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var Gr,Lr="function"==typeof Float64Array?Float64Array:void 0;Gr=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr([1,3.14,-3.14,NaN]),t=e,r=(Vr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r=Gr,Cr="function"==typeof Uint8Array;var Br="function"==typeof Uint8Array?Uint8Array:null;var Hr,Mr="function"==typeof Uint8Array?Uint8Array:void 0;Hr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br(e=[1,3.14,-3.14,256,257]),t=e,r=(Cr&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Wr=Hr,Rr="function"==typeof Uint16Array;var Zr="function"==typeof Uint16Array?Uint16Array:null;var Xr,Yr="function"==typeof Uint16Array?Uint16Array:void 0;Xr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Rr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var qr,zr={uint16:Xr,uint8:Wr};(qr=new zr.uint16(1))[0]=4660;var Dr=52===new zr.uint8(qr.buffer)[0],Jr=!0===Dr?1:0,Kr=new $r(1),Qr=new Nr(Kr.buffer);function re(r){return Kr[0]=r,Qr[Jr]}var ee=!0===Dr?1:0,te=new $r(1),ne=new Nr(te.buffer);function ie(r,e){return te[0]=r,ne[ee]=e>>>0,te[0]}var oe=Number.POSITIVE_INFINITY,ae=gr.NEGATIVE_INFINITY,ue=1023;var fe=.6931471803691238,ce=1.9082149292705877e-10,le=.41421356237309503,se=-.2928932188134525,pe=1.862645149230957e-9,ve=5551115123125783e-32,ye=9007199254740992,ge=.6666666666666666;var de=Math.sqrt;function be(r){return Math.abs(r)}var he=Math.floor,we=Math.ceil;function me(r){return r<0?we(r):he(r)}var je=1023,Ae=-1023,_e=-1074;function Ee(r){return r===oe||r===ae}var Oe,Se,xe=2147483648,Te=2147483647;!0===Dr?(Oe=1,Se=0):(Oe=0,Se=1);var Ue,Ie,Fe={HIGH:Oe,LOW:Se},ke=new $r(1),Ne=new Nr(ke.buffer),Ve=Fe.HIGH,Pe=Fe.LOW;function Ge(r,e,t,n){return ke[0]=r,e[n]=Ne[Ve],e[n+t]=Ne[Pe],e}function Le(r){return Ge(r,[0,0],1,0)}$(Le,"assign",Ge),!0===Dr?(Ue=1,Ie=0):(Ue=0,Ie=1);var $e={HIGH:Ue,LOW:Ie},Ce=new $r(1),Be=new Nr(Ce.buffer),He=$e.HIGH,Me=$e.LOW;function We(r,e){return Be[He]=r,Be[Me]=e,Ce[0]}var Re=[0,0];function Ze(r,e){var t,n;return Le.assign(r,Re,1,0),t=Re[0],t&=Te,n=re(e),We(t|=n&=xe,Re[1])}var Xe=22250738585072014e-324,Ye=4503599627370496;function qe(r,e,t,n){return Tr(r)||Ee(r)?(e[n]=r,e[n+t]=0,e):0!==r&&be(r)<Xe?(e[n]=r*Ye,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return qe(r,[0,0],1,0)}),"assign",qe);var ze=2146435072;var De=2220446049250313e-31,Je=2148532223,Ke=[0,0],Qe=[0,0];function rt(r,e){var t,n;return 0===e||0===r||Tr(r)||Ee(r)?r:(qe(r,Ke,1,0),r=Ke[0],e+=Ke[1],e+=function(r){var e=re(r);return(e=(e&ze)>>>20)-ue|0}(r),e<_e?Ze(0,r):e>je?r<0?ae:oe:(e<=Ae?(e+=52,n=De):n=1,Le.assign(r,Qe,1,0),t=Qe[0],t&=Je,n*We(t|=e+ue<<20,Qe[1])))}var et=.6931471803691238,tt=1.9082149292705877e-10,nt=1.4426950408889634,it=709.782712893384,ot=-745.1332191019411,at=1/(1<<28),ut=-at;function ft(r){var e;return Tr(r)||r===oe?r:r===ae?0:r>it?oe:r<ot?0:r>ut&&r<at?1+r:function(r,e,t){var n,i,o,a;return rt(1-(e-(n=r-e)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(e=me(r<0?nt*r-.5:nt*r+.5))*et,e*tt,e)}function ct(r){return he(r)===r}function lt(r){return ct(r/2)}function st(r){return lt(r>0?r-1:r+1)}var pt=!0===Dr?0:1,vt=new $r(1),yt=new Nr(vt.buffer);function gt(r,e){return vt[0]=r,yt[pt]=e>>>0,vt[0]}function dt(r){return 0|r}var bt=1072693247,ht=1e300,wt=1e-300;var mt=1048575,jt=1048576,At=1072693248,_t=536870912,Et=524288,Ot=20,St=9007199254740992,xt=.9617966939259756,Tt=.9617967009544373,Ut=-7.028461650952758e-9,It=[1,1.5],Ft=[0,.5849624872207642],kt=[0,1.350039202129749e-8];var Nt=1.4426950408889634,Vt=1.4426950216293335,Pt=1.9259629911266175e-8;var Gt=.6931471805599453,Lt=1048575;var $t=1048576,Ct=1071644672,Bt=20,Ht=.6931471824645996,Mt=-1.904654299957768e-9;var Wt=1072693247,Rt=1105199104,Zt=1139802112,Xt=1083179008,Yt=1072693248,qt=1083231232,zt=3230714880,Dt=31,Jt=1e300,Kt=1e-300,Qt=8008566259537294e-32,rn=[0,0],en=[0,0];function tn(r,e){var t,n,i,o,a,u,f,c,l,s,p,v,y,g;if(Tr(r)||Tr(e))return NaN;if(Le.assign(e,rn,1,0),a=rn[0],0===rn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return de(r);if(-.5===e)return 1/de(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Ee(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:be(r)<1==(e===oe)?0:oe}(r,e)}if(Le.assign(r,rn,1,0),o=rn[0],0===rn[1]){if(0===o)return function(r,e){return e===ae?oe:e===oe?0:e>0?st(e)?r:0:st(e)?Ze(oe,r):oe}(r,e);if(1===r)return 1;if(-1===r&&st(e))return-1;if(Ee(r))return r===ae?tn(-0,-e):e<0?0:oe}if(r<0&&!1===ct(e))return(r-r)/(r-r);if(i=be(r),t=o&Te|0,n=a&Te|0,f=a>>>Dt|0,u=(u=o>>>Dt|0)&&st(e)?-1:1,n>Rt){if(n>Zt)return function(r,e){return(re(r)&Te)<=bt?e<0?ht*ht:wt*wt:e>0?ht*ht:wt*wt}(r,e);if(t<Wt)return 1===f?u*Jt*Jt:u*Kt*Kt;if(t>Yt)return 0===f?u*Jt*Jt:u*Kt*Kt;p=function(r,e){var t,n,i,o,a,u,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*Pt-o*Nt)-((n=gt(n=(a=Vt*i)+u,0))-a),r[0]=n,r[1]=t,r}(en,i)}else p=function(r,e,t){var n,i,o,a,u,f,c,l,s,p,v,y,g,d,b,h,w,m,j,A,_;return m=0,t<jt&&(m-=53,t=re(e*=St)),m+=(t>>Ot)-ue|0,t=(j=t&mt|0)|At|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,t-=jt),a=gt(i=(h=(e=ie(e,t))-(c=It[A]))*(w=1/(e+c)),0),n=(t>>1|_t)+Et,f=ie(0,n+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=gt(f=3+(o=a*a)+(b+=(u=w*(h-a*f-a*(e-(f-c))))*(a+i)),0),s=gt(s=(h=a*f)+(w=u*f+(b-(f-3-o))*i),0),p=Tt*s,g=(v=Ut*s+(w-(s-h))*xt+kt[A])-((y=gt(y=p+v+(l=Ft[A])+(d=m),0))-d-l-p),r[0]=y,r[1]=g,r}(en,i,t);if(v=(s=(e-(c=gt(e,0)))*p[0]+e*p[1])+(l=c*p[0]),Le.assign(v,rn,1,0),y=dt(rn[0]),g=dt(rn[1]),y>=Xt){if(0!=(y-Xt|g))return u*Jt*Jt;if(s+Qt>v-l)return u*Jt*Jt}else if((y&Te)>=qt){if(0!=(y-zt|g))return u*Kt*Kt;if(s<=v-l)return u*Kt*Kt}return v=function(r,e,t){var n,i,o,a,u,f,c,l,s,p;return s=((l=r&Te|0)>>Bt)-ue|0,c=0,l>Ct&&(i=ie(0,((c=r+($t>>s+1)>>>0)&~(Lt>>(s=((c&Te)>>Bt)-ue|0)))>>>0),c=(c&Lt|$t)>>Bt-s>>>0,r<0&&(c=-c),e-=i),r=dt(r=re(f=1-((f=(o=(i=gt(i=t+e,0))*Ht)+(a=(t-(i-e))*Gt+i*Mt))*(n=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<Bt>>>0)>>Bt<=0?rt(f,c):ie(f,r)}(y,l,s),u*v}var nn=2.718281828459045,on=2220446049250313e-31;function an(r){var e,t;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/t)}var un=10.900511;function fn(r,e){var t,n,i,o,a,u,f;return Tr(r)||Tr(e)||r<0||e<0?NaN:1===e?1/r:1===r?1/e:(f=r+e)<on?(a=f/r,a/=e):f===r&&e<on?1/e:f===e&&r<on?1/r:(r<e&&(u=e,e=r,r=u),n=r+un-.5,i=e+un-.5,o=f+un-.5,a=an(r)*(an(e)/an(f)),be(e*(t=r-.5-e))<100*o&&r>100?a*=ft(t*function(r){var e,t,n,i,o,a,u,f,c,l;if(r<-1||Tr(r))return NaN;if(-1===r)return ae;if(r===oe)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<le){if(n<pe)return n<ve?r:r-r*r*.5;r>se&&(l=0,i=r,t=1)}return 0!==l&&(n<ye?(o=(l=((t=re(c=1+r))>>20)-ue)>0?1-(c-r):r-(c-1),o/=c):(l=((t=re(c=r))>>20)-ue,o=0),(t&=1048575)<434334?c=ie(c,1072693248|t):(l+=1,c=ie(c,1071644672|t),t=1048576-t>>2),i=c-1),e=.5*i*i,0===t?0===i?l*fe+(o+=l*ce):l*fe-((f=e*(1-ge*i))-(l*ce+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(e-a*(e+f)):l*fe-(e-(a*(e+f)+(l*ce+o))-i))}(-e/o)):a*=tn(n/o,t),a*=tn(o>1e10?n/o*(i/o):n*i/(o*o),e),a*=de(nn/i))}return function(r,e){return xr(r,e,fn)}}));
//# sourceMappingURL=index.js.map
