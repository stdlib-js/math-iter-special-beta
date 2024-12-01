// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,h,"$1e"),t=s.call(t,b,"e"),t=s.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,v,"e-0$1"),r.alternate&&(t=s.call(t,y,"$1."),t=s.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,n,t,o,a,f,c,l,s,p,v,y,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(t=r[l],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(a)?String(t.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=w(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(U(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function I(r){var e,n;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return O.apply(null,e)}var T,F=Object.prototype,k=F.toString,N=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(P.call(r,e)||G.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,n.get),a&&V&&V.call(r,e,n.set),r};var L=T;function $(r,e,n){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function H(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&R.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=W()?function(r){var e,n,t;if(null==r)return B.call(r);n=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return B.call(r)}return t=B.call(r),e?r[Y]=n:delete r[Y],t}:function(r){return B.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,nr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},tr="object"==typeof nr?nr:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,ur=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(fr,"REGEXP",cr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var e,n,t,i;if(("Object"===(n=q(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=cr.exec(t.toString()))return e[1]}return sr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!lr(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(sr));var vr="function"==typeof C||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function yr(r){return"function"===vr(r)}function gr(r){return"number"==typeof r}var dr=Number,br=dr.prototype.toString;var hr=W();function wr(r){return"object"==typeof r&&(r instanceof dr||(hr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function mr(r){return gr(r)||wr(r)}$(mr,"isPrimitive",gr),$(mr,"isObject",wr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=yr(Object.getPrototypeOf)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Or=Ar;var Sr=Object.prototype;function Ur(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(e=function(r){return null==r?null:(r=_r(r),Or(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&yr(e.constructor)&&"[object Function]"===q(e.constructor)&&Z(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===Sr||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function xr(r,e,n,t){var i,o,a,u,f,c,l,s,p,v;for(2,o=[0,0],i=[],a=[],s=0;s<2;s++)if(i.push(arguments[s]),v=void 0,v=typeof(p=arguments[s]),null===p||"object"!==v&&"function"!==v||!yr(p.next)){if(!gr(arguments[s]))throw new TypeError(I("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",s,arguments[s]));a.push(0)}else a.push(1);if(!yr(n))throw new TypeError(I("invalid argument. Third argument must be a function. Value: `%s`.",n));if(f={invalid:NaN},arguments.length>3&&(l=function(r,e){return Ur(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",e))}(f,t),l))throw l;if($(u={},"next",(function(){var r,e,t;if(c)return{done:!0};for(t=0;t<2;t++)if(a[t]){if((e=i[t].next()).done)return c=!0,e;"number"==typeof e.value?o[t]=e.value:r=!0}else o[t]=i[t];if(r)return{value:f.invalid,done:!1};return{value:n(o[0],o[1]),done:!1}})),$(u,"return",(function(r){if(c=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr){for(s=0;s<2;s++)if(a[s]&&!yr(i[s][jr])){c=!0;break}c||$(u,jr,(function(){var r,e;for(r=[],e=0;e<2;e++)a[e]?r.push(i[e][jr]()):r.push(i[e]);return r.push(n,f),xr.apply(null,r)}))}return c=!1,u}function Ir(r){return r!=r}var Tr="function"==typeof Uint32Array;var Fr="function"==typeof Uint32Array?Uint32Array:null;var kr,Nr="function"==typeof Uint32Array?Uint32Array:void 0;kr=function(){var r,e,n;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Tr&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Vr=kr,Pr="function"==typeof Float64Array;var Gr="function"==typeof Float64Array?Float64Array:null;var Lr,$r="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,e,n;if("function"!=typeof Gr)return!1;try{e=new Gr([1,3.14,-3.14,NaN]),n=e,r=(Pr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr=Lr,Hr="function"==typeof Uint8Array;var Mr="function"==typeof Uint8Array?Uint8Array:null;var Wr,Br="function"==typeof Uint8Array?Uint8Array:void 0;Wr=function(){var r,e,n;if("function"!=typeof Mr)return!1;try{e=new Mr(e=[1,3.14,-3.14,256,257]),n=e,r=(Hr&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr=Wr,Zr="function"==typeof Uint16Array;var Xr="function"==typeof Uint16Array?Uint16Array:null;var Yr,qr="function"==typeof Uint16Array?Uint16Array:void 0;Yr=function(){var r,e,n;if("function"!=typeof Xr)return!1;try{e=new Xr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Zr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr,Dr={uint16:Yr,uint8:Rr};(zr=new Dr.uint16(1))[0]=4660;var Jr=52===new Dr.uint8(zr.buffer)[0],Kr=!0===Jr?1:0,Qr=new Cr(1),re=new Vr(Qr.buffer);function ee(r){return Qr[0]=r,re[Kr]}var ne=!0===Jr?1:0,te=new Cr(1),ie=new Vr(te.buffer);function oe(r,e){return te[0]=r,ie[ne]=e>>>0,te[0]}var ae=Number.POSITIVE_INFINITY,ue=dr.NEGATIVE_INFINITY,fe=1023;var ce=.6931471803691238,le=1.9082149292705877e-10,se=.41421356237309503,pe=-.2928932188134525,ve=1.862645149230957e-9,ye=5551115123125783e-32,ge=9007199254740992,de=.6666666666666666;var be=Math.sqrt;function he(r){return Math.abs(r)}var we=Math.floor,me=Math.ceil;function je(r){return r<0?me(r):we(r)}var Ae=1023,_e=-1023,Ee=-1074;function Oe(r){return r===ae||r===ue}var Se,Ue,xe=2147483648,Ie=2147483647;!0===Jr?(Se=1,Ue=0):(Se=0,Ue=1);var Te,Fe,ke={HIGH:Se,LOW:Ue},Ne=new Cr(1),Ve=new Vr(Ne.buffer),Pe=ke.HIGH,Ge=ke.LOW;function Le(r,e,n,t){return Ne[0]=r,e[t]=Ve[Pe],e[t+n]=Ve[Ge],e}function $e(r){return Le(r,[0,0],1,0)}$($e,"assign",Le),!0===Jr?(Te=1,Fe=0):(Te=0,Fe=1);var Ce={HIGH:Te,LOW:Fe},He=new Cr(1),Me=new Vr(He.buffer),We=Ce.HIGH,Be=Ce.LOW;function Re(r,e){return Me[We]=r,Me[Be]=e,He[0]}var Ze=[0,0];function Xe(r,e){var n,t;return $e.assign(r,Ze,1,0),n=Ze[0],n&=Ie,t=ee(e),Re(n|=t&=xe,Ze[1])}var Ye=22250738585072014e-324,qe=4503599627370496;function ze(r,e,n,t){return Ir(r)||Oe(r)?(e[t]=r,e[t+n]=0,e):0!==r&&he(r)<Ye?(e[t]=r*qe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}$((function(r){return ze(r,[0,0],1,0)}),"assign",ze);var De=2146435072;var Je=2220446049250313e-31,Ke=2148532223,Qe=[0,0],rn=[0,0];function en(r,e){var n,t;return 0===e||0===r||Ir(r)||Oe(r)?r:(ze(r,Qe,1,0),r=Qe[0],e+=Qe[1],e+=function(r){var e=ee(r);return(e=(e&De)>>>20)-fe|0}(r),e<Ee?Xe(0,r):e>Ae?r<0?ue:ae:(e<=_e?(e+=52,t=Je):t=1,$e.assign(r,rn,1,0),n=rn[0],n&=Ke,t*Re(n|=e+fe<<20,rn[1])))}var nn=.6931471803691238,tn=1.9082149292705877e-10,on=1.4426950408889634,an=709.782712893384,un=-745.1332191019411,fn=1/(1<<28),cn=-fn;function ln(r){var e;return Ir(r)||r===ae?r:r===ue?0:r>an?ae:r<un?0:r>cn&&r<fn?1+r:function(r,e,n){var t,i,o,a;return en(1-(e-(t=r-e)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(e=je(r<0?on*r-.5:on*r+.5))*nn,e*tn,e)}function sn(r){return we(r)===r}function pn(r){return sn(r/2)}function vn(r){return pn(r>0?r-1:r+1)}var yn=!0===Jr?0:1,gn=new Cr(1),dn=new Vr(gn.buffer);function bn(r,e){return gn[0]=r,dn[yn]=e>>>0,gn[0]}function hn(r){return 0|r}var wn=1072693247,mn=1e300,jn=1e-300;var An=1048575,_n=1048576,En=1072693248,On=536870912,Sn=524288,Un=20,xn=9007199254740992,In=.9617966939259756,Tn=.9617967009544373,Fn=-7.028461650952758e-9,kn=[1,1.5],Nn=[0,.5849624872207642],Vn=[0,1.350039202129749e-8];var Pn=1.4426950408889634,Gn=1.4426950216293335,Ln=1.9259629911266175e-8;var $n=.6931471805599453,Cn=1048575;var Hn=1048576,Mn=1071644672,Wn=20,Bn=.6931471824645996,Rn=-1.904654299957768e-9;var Zn=1072693247,Xn=1105199104,Yn=1139802112,qn=1083179008,zn=1072693248,Dn=1083231232,Jn=3230714880,Kn=31,Qn=1e300,rt=1e-300,et=8008566259537294e-32,nt=[0,0],tt=[0,0];function it(r,e){var n,t,i,o,a,u,f,c,l,s,p,v,y,g;if(Ir(r)||Ir(e))return NaN;if($e.assign(e,nt,1,0),a=nt[0],0===nt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return be(r);if(-.5===e)return 1/be(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Oe(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:he(r)<1==(e===ae)?0:ae}(r,e)}if($e.assign(r,nt,1,0),o=nt[0],0===nt[1]){if(0===o)return function(r,e){return e===ue?ae:e===ae?0:e>0?vn(e)?r:0:vn(e)?Xe(ae,r):ae}(r,e);if(1===r)return 1;if(-1===r&&vn(e))return-1;if(Oe(r))return r===ue?it(-0,-e):e<0?0:ae}if(r<0&&!1===sn(e))return(r-r)/(r-r);if(i=he(r),n=o&Ie|0,t=a&Ie|0,f=a>>>Kn|0,u=(u=o>>>Kn|0)&&vn(e)?-1:1,t>Xn){if(t>Yn)return function(r,e){return(ee(r)&Ie)<=wn?e<0?mn*mn:jn*jn:e>0?mn*mn:jn*jn}(r,e);if(n<Zn)return 1===f?u*Qn*Qn:u*rt*rt;if(n>zn)return 0===f?u*Qn*Qn:u*rt*rt;p=function(r,e){var n,t,i,o,a,u,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Ln-o*Pn)-((t=bn(t=(a=Gn*i)+u,0))-a),r[0]=t,r[1]=n,r}(tt,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,l,s,p,v,y,g,d,b,h,w,m,j,A,_;return m=0,n<_n&&(m-=53,n=ee(e*=xn)),m+=(n>>Un)-fe|0,n=(j=n&An|0)|En|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=_n),a=bn(i=(h=(e=oe(e,n))-(c=kn[A]))*(w=1/(e+c)),0),t=(n>>1|On)+Sn,f=oe(0,t+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=bn(f=3+(o=a*a)+(b+=(u=w*(h-a*f-a*(e-(f-c))))*(a+i)),0),s=bn(s=(h=a*f)+(w=u*f+(b-(f-3-o))*i),0),p=Tn*s,g=(v=Fn*s+(w-(s-h))*In+Vn[A])-((y=bn(y=p+v+(l=Nn[A])+(d=m),0))-d-l-p),r[0]=y,r[1]=g,r}(tt,i,n);if(v=(s=(e-(c=bn(e,0)))*p[0]+e*p[1])+(l=c*p[0]),$e.assign(v,nt,1,0),y=hn(nt[0]),g=hn(nt[1]),y>=qn){if(0!=(y-qn|g))return u*Qn*Qn;if(s+et>v-l)return u*Qn*Qn}else if((y&Ie)>=Dn){if(0!=(y-Jn|g))return u*rt*rt;if(s<=v-l)return u*rt*rt}return v=function(r,e,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&Ie|0)>>Wn)-fe|0,c=0,l>Mn&&(i=oe(0,((c=r+(Hn>>s+1)>>>0)&~(Cn>>(s=((c&Ie)>>Wn)-fe|0)))>>>0),c=(c&Cn|Hn)>>Wn-s>>>0,r<0&&(c=-c),e-=i),r=hn(r=ee(f=1-((f=(o=(i=bn(i=n+e,0))*Bn)+(a=(n-(i-e))*$n+i*Rn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<Wn>>>0)>>Wn<=0?en(f,c):oe(f,r)}(y,l,s),u*v}var ot=2.718281828459045,at=2220446049250313e-31;function ut(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var ft=10.900511;function ct(r,e){var n,t,i,o,a,u,f;return Ir(r)||Ir(e)||r<0||e<0?NaN:1===e?1/r:1===r?1/e:(f=r+e)<at?(a=f/r,a/=e):f===r&&e<at?1/e:f===e&&r<at?1/r:(r<e&&(u=e,e=r,r=u),t=r+ft-.5,i=e+ft-.5,o=f+ft-.5,a=ut(r)*(ut(e)/ut(f)),he(e*(n=r-.5-e))<100*o&&r>100?a*=ln(n*function(r){var e,n,t,i,o,a,u,f,c,l;if(r<-1||Ir(r))return NaN;if(-1===r)return ue;if(r===ae)return r;if(0===r)return r;if(l=1,(t=r<0?-r:r)<se){if(t<ve)return t<ye?r:r-r*r*.5;r>pe&&(l=0,i=r,n=1)}return 0!==l&&(t<ge?(o=(l=((n=ee(c=1+r))>>20)-fe)>0?1-(c-r):r-(c-1),o/=c):(l=((n=ee(c=r))>>20)-fe,o=0),(n&=1048575)<434334?c=oe(c,1072693248|n):(l+=1,c=oe(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?l*ce+(o+=l*le):l*ce-((f=e*(1-de*i))-(l*le+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(e-a*(e+f)):l*ce-(e-(a*(e+f)+(l*le+o))-i))}(-e/o)):a*=it(t/o,n),a*=it(o>1e10?t/o*(i/o):t*i/(o*o),e),a*=be(ot/i))}function lt(r,e){return xr(r,e,ct)}export{lt as default};
//# sourceMappingURL=mod.js.map
