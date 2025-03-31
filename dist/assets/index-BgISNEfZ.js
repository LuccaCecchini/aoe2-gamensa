(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function h_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Td={exports:{}},Ma={},Id={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function ET(){if(Eg)return Pe;Eg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,z={};function b(V,K,de){this.props=V,this.context=K,this.refs=z,this.updater=de||O}b.prototype.isReactComponent={},b.prototype.setState=function(V,K){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,K,"setState")},b.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function H(){}H.prototype=b.prototype;function Z(V,K,de){this.props=V,this.context=K,this.refs=z,this.updater=de||O}var G=Z.prototype=new H;G.constructor=Z,L(G,b.prototype),G.isPureReactComponent=!0;var re=Array.isArray,Ie=Object.prototype.hasOwnProperty,ve={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,K,de){var Re,Ce={},De=null,Me=null;if(K!=null)for(Re in K.ref!==void 0&&(Me=K.ref),K.key!==void 0&&(De=""+K.key),K)Ie.call(K,Re)&&!N.hasOwnProperty(Re)&&(Ce[Re]=K[Re]);var Ue=arguments.length-2;if(Ue===1)Ce.children=de;else if(1<Ue){for(var $e=Array(Ue),vt=0;vt<Ue;vt++)$e[vt]=arguments[vt+2];Ce.children=$e}if(V&&V.defaultProps)for(Re in Ue=V.defaultProps,Ue)Ce[Re]===void 0&&(Ce[Re]=Ue[Re]);return{$$typeof:n,type:V,key:De,ref:Me,props:Ce,_owner:ve.current}}function A(V,K){return{$$typeof:n,type:V.type,key:K,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function D(V){var K={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(de){return K[de]})}var M=/\/+/g;function C(V,K){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):K.toString(36)}function nt(V,K,de,Re,Ce){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case n:case e:Me=!0}}if(Me)return Me=V,Ce=Ce(Me),V=Re===""?"."+C(Me,0):Re,re(Ce)?(de="",V!=null&&(de=V.replace(M,"$&/")+"/"),nt(Ce,K,de,"",function(vt){return vt})):Ce!=null&&(k(Ce)&&(Ce=A(Ce,de+(!Ce.key||Me&&Me.key===Ce.key?"":(""+Ce.key).replace(M,"$&/")+"/")+V)),K.push(Ce)),1;if(Me=0,Re=Re===""?".":Re+":",re(V))for(var Ue=0;Ue<V.length;Ue++){De=V[Ue];var $e=Re+C(De,Ue);Me+=nt(De,K,de,$e,Ce)}else if($e=R(V),typeof $e=="function")for(V=$e.call(V),Ue=0;!(De=V.next()).done;)De=De.value,$e=Re+C(De,Ue++),Me+=nt(De,K,de,$e,Ce);else if(De==="object")throw K=String(V),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Me}function Ot(V,K,de){if(V==null)return V;var Re=[],Ce=0;return nt(V,Re,"","",function(De){return K.call(de,De,Ce++)}),Re}function Lt(V){if(V._status===-1){var K=V._result;K=K(),K.then(function(de){(V._status===0||V._status===-1)&&(V._status=1,V._result=de)},function(de){(V._status===0||V._status===-1)&&(V._status=2,V._result=de)}),V._status===-1&&(V._status=0,V._result=K)}if(V._status===1)return V._result.default;throw V._result}var Be={current:null},ne={transition:null},pe={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ne,ReactCurrentOwner:ve};function se(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Ot,forEach:function(V,K,de){Ot(V,function(){K.apply(this,arguments)},de)},count:function(V){var K=0;return Ot(V,function(){K++}),K},toArray:function(V){return Ot(V,function(K){return K})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Pe.Component=b,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=Z,Pe.StrictMode=i,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Pe.act=se,Pe.cloneElement=function(V,K,de){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=L({},V.props),Ce=V.key,De=V.ref,Me=V._owner;if(K!=null){if(K.ref!==void 0&&(De=K.ref,Me=ve.current),K.key!==void 0&&(Ce=""+K.key),V.type&&V.type.defaultProps)var Ue=V.type.defaultProps;for($e in K)Ie.call(K,$e)&&!N.hasOwnProperty($e)&&(Re[$e]=K[$e]===void 0&&Ue!==void 0?Ue[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Re.children=de;else if(1<$e){Ue=Array($e);for(var vt=0;vt<$e;vt++)Ue[vt]=arguments[vt+2];Re.children=Ue}return{$$typeof:n,type:V.type,key:Ce,ref:De,props:Re,_owner:Me}},Pe.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Pe.createElement=I,Pe.createFactory=function(V){var K=I.bind(null,V);return K.type=V,K},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(V){return{$$typeof:f,render:V}},Pe.isValidElement=k,Pe.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Lt}},Pe.memo=function(V,K){return{$$typeof:y,type:V,compare:K===void 0?null:K}},Pe.startTransition=function(V){var K=ne.transition;ne.transition={};try{V()}finally{ne.transition=K}},Pe.unstable_act=se,Pe.useCallback=function(V,K){return Be.current.useCallback(V,K)},Pe.useContext=function(V){return Be.current.useContext(V)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(V){return Be.current.useDeferredValue(V)},Pe.useEffect=function(V,K){return Be.current.useEffect(V,K)},Pe.useId=function(){return Be.current.useId()},Pe.useImperativeHandle=function(V,K,de){return Be.current.useImperativeHandle(V,K,de)},Pe.useInsertionEffect=function(V,K){return Be.current.useInsertionEffect(V,K)},Pe.useLayoutEffect=function(V,K){return Be.current.useLayoutEffect(V,K)},Pe.useMemo=function(V,K){return Be.current.useMemo(V,K)},Pe.useReducer=function(V,K,de){return Be.current.useReducer(V,K,de)},Pe.useRef=function(V){return Be.current.useRef(V)},Pe.useState=function(V){return Be.current.useState(V)},Pe.useSyncExternalStore=function(V,K,de){return Be.current.useSyncExternalStore(V,K,de)},Pe.useTransition=function(){return Be.current.useTransition()},Pe.version="18.3.1",Pe}var wg;function yf(){return wg||(wg=1,Id.exports=ET()),Id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function wT(){if(Tg)return Ma;Tg=1;var n=yf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var E,T={},R=null,O=null;y!==void 0&&(R=""+y),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(O=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(f&&f.defaultProps)for(E in p=f.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:f,key:R,ref:O,props:T,_owner:o.current}}return Ma.Fragment=t,Ma.jsx=h,Ma.jsxs=h,Ma}var Ig;function TT(){return Ig||(Ig=1,Td.exports=wT()),Td.exports}var ce=TT(),W=yf();const IT=h_(W);var Uu={},Sd={exports:{}},tn={},Rd={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function ST(){return Sg||(Sg=1,function(n){function e(ne,pe){var se=ne.length;ne.push(pe);e:for(;0<se;){var V=se-1>>>1,K=ne[V];if(0<o(K,pe))ne[V]=pe,ne[se]=K,se=V;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var pe=ne[0],se=ne.pop();if(se!==pe){ne[0]=se;e:for(var V=0,K=ne.length,de=K>>>1;V<de;){var Re=2*(V+1)-1,Ce=ne[Re],De=Re+1,Me=ne[De];if(0>o(Ce,se))De<K&&0>o(Me,Ce)?(ne[V]=Me,ne[De]=se,V=De):(ne[V]=Ce,ne[Re]=se,V=Re);else if(De<K&&0>o(Me,se))ne[V]=Me,ne[De]=se,V=De;else break e}}return pe}function o(ne,pe){var se=ne.sortIndex-pe.sortIndex;return se!==0?se:ne.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var p=[],y=[],E=1,T=null,R=3,O=!1,L=!1,z=!1,b=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(ne){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=ne)i(y),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(y)}}function re(ne){if(z=!1,G(ne),!L)if(t(p)!==null)L=!0,Lt(Ie);else{var pe=t(y);pe!==null&&Be(re,pe.startTime-ne)}}function Ie(ne,pe){L=!1,z&&(z=!1,H(I),I=-1),O=!0;var se=R;try{for(G(pe),T=t(p);T!==null&&(!(T.expirationTime>pe)||ne&&!D());){var V=T.callback;if(typeof V=="function"){T.callback=null,R=T.priorityLevel;var K=V(T.expirationTime<=pe);pe=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),G(pe)}else i(p);T=t(p)}if(T!==null)var de=!0;else{var Re=t(y);Re!==null&&Be(re,Re.startTime-pe),de=!1}return de}finally{T=null,R=se,O=!1}}var ve=!1,N=null,I=-1,A=5,k=-1;function D(){return!(n.unstable_now()-k<A)}function M(){if(N!==null){var ne=n.unstable_now();k=ne;var pe=!0;try{pe=N(!0,ne)}finally{pe?C():(ve=!1,N=null)}}else ve=!1}var C;if(typeof Z=="function")C=function(){Z(M)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Ot=nt.port2;nt.port1.onmessage=M,C=function(){Ot.postMessage(null)}}else C=function(){b(M,0)};function Lt(ne){N=ne,ve||(ve=!0,C())}function Be(ne,pe){I=b(function(){ne(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){L||O||(L=!0,Lt(Ie))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ne){switch(R){case 1:case 2:case 3:var pe=3;break;default:pe=R}var se=R;R=pe;try{return ne()}finally{R=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,pe){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var se=R;R=ne;try{return pe()}finally{R=se}},n.unstable_scheduleCallback=function(ne,pe,se){var V=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,ne){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=se+K,ne={id:E++,callback:pe,priorityLevel:ne,startTime:se,expirationTime:K,sortIndex:-1},se>V?(ne.sortIndex=se,e(y,ne),t(p)===null&&ne===t(y)&&(z?(H(I),I=-1):z=!0,Be(re,se-V))):(ne.sortIndex=K,e(p,ne),L||O||(L=!0,Lt(Ie))),ne},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ne){var pe=R;return function(){var se=R;R=pe;try{return ne.apply(this,arguments)}finally{R=se}}}}(Ad)),Ad}var Rg;function RT(){return Rg||(Rg=1,Rd.exports=ST()),Rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function AT(){if(Ag)return tn;Ag=1;var n=yf(),e=RT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function R(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function O(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function L(r,s,a,c){if(s===null||typeof s>"u"||O(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,c,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){b[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];b[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){b[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){b[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){b[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){b[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){b[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){b[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){b[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function Z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,Z);b[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,Z);b[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,Z);b[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){b[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),b.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){b[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function G(r,s,a,c){var d=b.hasOwnProperty(s)?b[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(L(s,a,d,c)&&(a=null),c||d===null?R(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),ve=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ne=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,V;function K(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var de=!1;function Re(r,s){if(!r||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var c=B}Reflect.construct(r,[],s)}else{try{s.call()}catch(B){c=B}r.call(s.prototype)}else{try{throw Error()}catch(B){c=B}r()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,S=g.length-1;1<=v&&0<=S&&d[v]!==g[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==g[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==g[S]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=S);break}}}finally{de=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Ce(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case ve:return"Portal";case A:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case nt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ot:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Lt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function hr(r){r._valueTracker||(r._valueTracker=vt(r))}function As(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function $r(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Oi(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Cs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function $o(r,s){s=s.checked,s!=null&&G(r,"checked",s,!1)}function Ho(r,s){$o(r,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ps(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ps(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Il(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ps(r,s,a){(s!=="number"||$r(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var dr=Array.isArray;function fr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Wo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ks(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(dr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Ns(r,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function qo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ht(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ht(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var pr,Ko=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=pr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Hr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vi=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(r){Vi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Li[s]=Li[r]})});function Go(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Li.hasOwnProperty(r)&&Li[r]?(""+s).trim():s+"px"}function Qo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Go(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var Xo=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yo(r,s){if(s){if(Xo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Jo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function xs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ds=null,pn=null,zn=null;function Os(r){if(r=Ta(r)){if(typeof Ds!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Zl(s),Ds(r.stateNode,r.type,s))}}function $n(r){pn?zn?zn.push(r):zn=[r]:pn=r}function Zo(){if(pn){var r=pn,s=zn;if(zn=pn=null,Os(r),s)for(r=0;r<s.length;r++)Os(s[r])}}function Mi(r,s){return r(s)}function ea(){}var mr=!1;function ta(r,s,a){if(mr)return r(s,a);mr=!0;try{return Mi(r,s,a)}finally{mr=!1,(pn!==null||zn!==null)&&(ea(),Zo())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ls=!1;if(f)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Ls=!1}function Ui(r,s,a,c,d,g,v,S,P){var B=Array.prototype.slice.call(arguments,3);try{s.apply(a,B)}catch(X){this.onError(X)}}var Fi=!1,Vs=null,An=!1,na=null,Xc={onError:function(r){Fi=!0,Vs=r}};function bs(r,s,a,c,d,g,v,S,P){Fi=!1,Vs=null,Ui.apply(Xc,arguments)}function Sl(r,s,a,c,d,g,v,S,P){if(bs.apply(this,arguments),Fi){if(Fi){var B=Vs;Fi=!1,Vs=null}else throw Error(t(198));An||(An=!0,na=B)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function ji(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Pn(r){if(Cn(r)!==r)throw Error(t(188))}function Rl(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Pn(d),r;if(g===c)return Pn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=g;break}if(S===c){v=!0,c=d,a=g;break}S=S.sibling}if(!v){for(S=g.child;S;){if(S===a){v=!0,a=g,c=d;break}if(S===c){v=!0,c=g,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ra(r){return r=Rl(r),r!==null?Ms(r):null}function Ms(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ms(r);if(s!==null)return s;r=r.sibling}return null}var Us=e.unstable_scheduleCallback,ia=e.unstable_cancelCallback,Al=e.unstable_shouldYield,Yc=e.unstable_requestPaint,He=e.unstable_now,Cl=e.unstable_getCurrentPriorityLevel,Bi=e.unstable_ImmediatePriority,Wr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,sa=e.unstable_LowPriority,Pl=e.unstable_IdlePriority,zi=null,rn=null;function kl(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(zi,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:xl,oa=Math.log,Nl=Math.LN2;function xl(r){return r>>>=0,r===0?32:31-(oa(r)/Nl|0)|0}var Fs=64,js=4194304;function qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function $i(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=qr(S):(g&=v,g!==0&&(c=qr(g)))}else v=a&~d,v!==0?c=qr(v):g!==0&&(c=qr(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-$t(s),d=1<<a,c|=r[a],s&=~d;return c}function Jc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-$t(g),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Jc(S,s)):P<=s&&(r.expiredLanes|=S),g&=~S}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Hi(){var r=Fs;return Fs<<=1,(Fs&4194240)===0&&(Fs=64),r}function Kr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Gr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-$t(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function Qr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-$t(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var xe=0;function Xr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Dl,Bs,Ol,Ll,Vl,aa=!1,Hn=[],At=null,kn=null,Nn=null,Yr=new Map,gn=new Map,Wn=[],Zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(r,s){switch(r){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Yr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Gt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Ta(s),s!==null&&Bs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function eh(r,s,a,c,d){switch(s){case"focusin":return At=Gt(At,r,s,a,c,d),!0;case"dragenter":return kn=Gt(kn,r,s,a,c,d),!0;case"mouseover":return Nn=Gt(Nn,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return Yr.set(g,Gt(Yr.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,gn.set(g,Gt(gn.get(g)||null,r,s,a,c,d)),!0}return!1}function Ml(r){var s=Qi(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=ji(a),s!==null){r.blockedOn=s,Vl(r.priority,function(){Ol(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=zs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);bi=c,a.target.dispatchEvent(c),bi=null}else return s=Ta(a),s!==null&&Bs(s),r.blockedOn=a,!1;s.shift()}return!0}function Wi(r,s,a){yr(r)&&a.delete(s)}function Ul(){aa=!1,At!==null&&yr(At)&&(At=null),kn!==null&&yr(kn)&&(kn=null),Nn!==null&&yr(Nn)&&(Nn=null),Yr.forEach(Wi),gn.forEach(Wi)}function xn(r,s){r.blockedOn===s&&(r.blockedOn=null,aa||(aa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ul)))}function Dn(r){function s(d){return xn(d,r)}if(0<Hn.length){xn(Hn[0],r);for(var a=1;a<Hn.length;a++){var c=Hn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(At!==null&&xn(At,r),kn!==null&&xn(kn,r),Nn!==null&&xn(Nn,r),Yr.forEach(s),gn.forEach(s),a=0;a<Wn.length;a++)c=Wn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Wn.length&&(a=Wn[0],a.blockedOn===null);)Ml(a),a.blockedOn===null&&Wn.shift()}var _r=re.ReactCurrentBatchConfig,Jr=!0;function Ge(r,s,a,c){var d=xe,g=_r.transition;_r.transition=null;try{xe=1,la(r,s,a,c)}finally{xe=d,_r.transition=g}}function th(r,s,a,c){var d=xe,g=_r.transition;_r.transition=null;try{xe=4,la(r,s,a,c)}finally{xe=d,_r.transition=g}}function la(r,s,a,c){if(Jr){var d=zs(r,s,a,c);if(d===null)dh(r,s,c,qi,a),bl(r,c);else if(eh(d,r,s,a,c))c.stopPropagation();else if(bl(r,c),s&4&&-1<Zc.indexOf(r)){for(;d!==null;){var g=Ta(d);if(g!==null&&Dl(g),g=zs(r,s,a,c),g===null&&dh(r,s,c,qi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else dh(r,s,c,null,a)}}var qi=null;function zs(r,s,a,c){if(qi=null,r=xs(c),r=Qi(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=ji(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return qi=r,null}function ua(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cl()){case Bi:return 1;case Wr:return 4;case mn:case sa:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var on=null,$s=null,Qt=null;function ca(){if(Qt)return Qt;var r,s=$s,a=s.length,c,d="value"in on?on.value:on.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[g-c];c++);return Qt=d.slice(r,1<c?1-c:void 0)}function Hs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function qn(){return!0}function ha(){return!1}function Ct(r){function s(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?qn:ha,this.isPropagationStopped=ha,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Ct(On),Kn=se({},On,{view:0,detail:0}),nh=Ct(Kn),qs,vr,Zr,Ki=se({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Zr&&(Zr&&r.type==="mousemove"?(qs=r.screenX-Zr.screenX,vr=r.screenY-Zr.screenY):vr=qs=0,Zr=r),qs)},movementY:function(r){return"movementY"in r?r.movementY:vr}}),Ks=Ct(Ki),da=se({},Ki,{dataTransfer:0}),Fl=Ct(da),Gs=se({},Kn,{relatedTarget:0}),Qs=Ct(Gs),jl=se({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Er=Ct(jl),Bl=se({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),zl=Ct(Bl),$l=se({},On,{data:0}),fa=Ct($l),Xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Hl[r])?!!s[r]:!1}function Gn(){return Wl}var u=se({},Kn,{key:function(r){if(r.key){var s=Xs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Hs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Ht[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(r){return r.type==="keypress"?Hs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Hs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Ct(u),_=se({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Ct(_),U=se({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn}),$=Ct(U),te=se({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Ct(te),ft=se({},Ki,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Ct(ft),Et=[9,13,27,32],ot=f&&"CompositionEvent"in window,yn=null;f&&"documentMode"in document&&(yn=document.documentMode);var an=f&&"TextEvent"in window&&!yn,Gi=f&&(!ot||yn&&8<yn&&11>=yn),Ys=" ",pp=!1;function mp(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Js=!1;function yw(r,s){switch(r){case"compositionend":return gp(s);case"keypress":return s.which!==32?null:(pp=!0,Ys);case"textInput":return r=s.data,r===Ys&&pp?null:r;default:return null}}function _w(r,s){if(Js)return r==="compositionend"||!ot&&mp(r,s)?(r=ca(),Qt=$s=on=null,Js=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Gi&&s.locale!=="ko"?null:s.data;default:return null}}var vw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!vw[r.type]:s==="textarea"}function _p(r,s,a,c){$n(c),s=Xl(s,"onChange"),0<s.length&&(a=new Ws("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var pa=null,ma=null;function Ew(r){bp(r,0)}function ql(r){var s=ro(r);if(As(s))return r}function ww(r,s){if(r==="change")return s}var vp=!1;if(f){var rh;if(f){var ih="oninput"in document;if(!ih){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),ih=typeof Ep.oninput=="function"}rh=ih}else rh=!1;vp=rh&&(!document.documentMode||9<document.documentMode)}function wp(){pa&&(pa.detachEvent("onpropertychange",Tp),ma=pa=null)}function Tp(r){if(r.propertyName==="value"&&ql(ma)){var s=[];_p(s,ma,r,xs(r)),ta(Ew,s)}}function Tw(r,s,a){r==="focusin"?(wp(),pa=s,ma=a,pa.attachEvent("onpropertychange",Tp)):r==="focusout"&&wp()}function Iw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ql(ma)}function Sw(r,s){if(r==="click")return ql(s)}function Rw(r,s){if(r==="input"||r==="change")return ql(s)}function Aw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ln=typeof Object.is=="function"?Object.is:Aw;function ga(r,s){if(Ln(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(s,d)||!Ln(r[d],s[d]))return!1}return!0}function Ip(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Sp(r,s){var a=Ip(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ip(a)}}function Rp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Rp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Ap(){for(var r=window,s=$r();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=$r(r.document)}return s}function sh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Cw(r){var s=Ap(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Rp(a.ownerDocument.documentElement,a)){if(c!==null&&sh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=Sp(a,g);var v=Sp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Pw=f&&"documentMode"in document&&11>=document.documentMode,Zs=null,oh=null,ya=null,ah=!1;function Cp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ah||Zs==null||Zs!==$r(c)||(c=Zs,"selectionStart"in c&&sh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ya&&ga(ya,c)||(ya=c,c=Xl(oh,"onSelect"),0<c.length&&(s=new Ws("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Zs)))}function Kl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var eo={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},lh={},Pp={};f&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function Gl(r){if(lh[r])return lh[r];if(!eo[r])return r;var s=eo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Pp)return lh[r]=s[a];return r}var kp=Gl("animationend"),Np=Gl("animationiteration"),xp=Gl("animationstart"),Dp=Gl("transitionend"),Op=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(r,s){Op.set(r,s),l(s,[r])}for(var uh=0;uh<Lp.length;uh++){var ch=Lp[uh],kw=ch.toLowerCase(),Nw=ch[0].toUpperCase()+ch.slice(1);ei(kw,"on"+Nw)}ei(kp,"onAnimationEnd"),ei(Np,"onAnimationIteration"),ei(xp,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(Dp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Vp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Sl(c,s,void 0,r),r.currentTarget=null}function bp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,B=S.currentTarget;if(S=S.listener,P!==g&&d.isPropagationStopped())break e;Vp(d,S,B),g=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,B=S.currentTarget,S=S.listener,P!==g&&d.isPropagationStopped())break e;Vp(d,S,B),g=P}}}if(An)throw r=na,An=!1,na=null,r}function qe(r,s){var a=s[_h];a===void 0&&(a=s[_h]=new Set);var c=r+"__bubble";a.has(c)||(Mp(s,r,2,!1),a.add(c))}function hh(r,s,a){var c=0;s&&(c|=4),Mp(a,r,c,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function va(r){if(!r[Ql]){r[Ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(xw.has(a)||hh(a,!1,r),hh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,hh("selectionchange",!1,s))}}function Mp(r,s,a,c){switch(ua(s)){case 1:var d=Ge;break;case 4:d=th;break;default:d=la}a=d.bind(null,s,a,r),d=void 0,!Ls||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function dh(r,s,a,c,d){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Qi(S),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}S=S.parentNode}}c=c.return}ta(function(){var B=g,X=xs(a),J=[];e:{var Q=Op.get(r);if(Q!==void 0){var ie=Ws,le=r;switch(r){case"keypress":if(Hs(a)===0)break e;case"keydown":case"keyup":ie=m;break;case"focusin":le="focus",ie=Qs;break;case"focusout":le="blur",ie=Qs;break;case"beforeblur":case"afterblur":ie=Qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=$;break;case kp:case Np:case xp:ie=Er;break;case Dp:ie=je;break;case"scroll":ie=nh;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=w}var ue=(s&4)!==0,it=!ue&&r==="scroll",F=ue?Q!==null?Q+"Capture":null:Q;ue=[];for(var x=B,j;x!==null;){j=x;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,F!==null&&(ee=rt(x,F),ee!=null&&ue.push(Ea(x,ee,j)))),it)break;x=x.return}0<ue.length&&(Q=new ie(Q,le,null,a,X),J.push({event:Q,listeners:ue}))}}if((s&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",Q&&a!==bi&&(le=a.relatedTarget||a.fromElement)&&(Qi(le)||le[wr]))break e;if((ie||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,ie?(le=a.relatedTarget||a.toElement,ie=B,le=le?Qi(le):null,le!==null&&(it=Cn(le),le!==it||le.tag!==5&&le.tag!==6)&&(le=null)):(ie=null,le=B),ie!==le)){if(ue=Ks,ee="onMouseLeave",F="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(ue=w,ee="onPointerLeave",F="onPointerEnter",x="pointer"),it=ie==null?Q:ro(ie),j=le==null?Q:ro(le),Q=new ue(ee,x+"leave",ie,a,X),Q.target=it,Q.relatedTarget=j,ee=null,Qi(X)===B&&(ue=new ue(F,x+"enter",le,a,X),ue.target=j,ue.relatedTarget=it,ee=ue),it=ee,ie&&le)t:{for(ue=ie,F=le,x=0,j=ue;j;j=to(j))x++;for(j=0,ee=F;ee;ee=to(ee))j++;for(;0<x-j;)ue=to(ue),x--;for(;0<j-x;)F=to(F),j--;for(;x--;){if(ue===F||F!==null&&ue===F.alternate)break t;ue=to(ue),F=to(F)}ue=null}else ue=null;ie!==null&&Up(J,Q,ie,ue,!1),le!==null&&it!==null&&Up(J,it,le,ue,!0)}}e:{if(Q=B?ro(B):window,ie=Q.nodeName&&Q.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Q.type==="file")var he=ww;else if(yp(Q))if(vp)he=Rw;else{he=Iw;var me=Tw}else(ie=Q.nodeName)&&ie.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=Sw);if(he&&(he=he(r,B))){_p(J,he,a,X);break e}me&&me(r,Q,B),r==="focusout"&&(me=Q._wrapperState)&&me.controlled&&Q.type==="number"&&Ps(Q,"number",Q.value)}switch(me=B?ro(B):window,r){case"focusin":(yp(me)||me.contentEditable==="true")&&(Zs=me,oh=B,ya=null);break;case"focusout":ya=oh=Zs=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,Cp(J,a,X);break;case"selectionchange":if(Pw)break;case"keydown":case"keyup":Cp(J,a,X)}var ge;if(ot)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Js?mp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Gi&&a.locale!=="ko"&&(Js||we!=="onCompositionStart"?we==="onCompositionEnd"&&Js&&(ge=ca()):(on=X,$s="value"in on?on.value:on.textContent,Js=!0)),me=Xl(B,we),0<me.length&&(we=new fa(we,r,null,a,X),J.push({event:we,listeners:me}),ge?we.data=ge:(ge=gp(a),ge!==null&&(we.data=ge)))),(ge=an?yw(r,a):_w(r,a))&&(B=Xl(B,"onBeforeInput"),0<B.length&&(X=new fa("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:B}),X.data=ge))}bp(J,s)})}function Ea(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Xl(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=rt(r,a),g!=null&&c.unshift(Ea(r,g,d)),g=rt(r,s),g!=null&&c.push(Ea(r,g,d))),r=r.return}return c}function to(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Up(r,s,a,c,d){for(var g=s._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,B=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&B!==null&&(S=B,d?(P=rt(a,g),P!=null&&v.unshift(Ea(a,P,S))):d||(P=rt(a,g),P!=null&&v.push(Ea(a,P,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var Dw=/\r\n?/g,Ow=/\u0000|\uFFFD/g;function Fp(r){return(typeof r=="string"?r:""+r).replace(Dw,`
`).replace(Ow,"")}function Yl(r,s,a){if(s=Fp(s),Fp(r)!==s&&a)throw Error(t(425))}function Jl(){}var fh=null,ph=null;function mh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,Lw=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,Vw=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(r){return jp.resolve(null).then(r).catch(bw)}:gh;function bw(r){setTimeout(function(){throw r})}function yh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Dn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Dn(s)}function ti(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Bp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var no=Math.random().toString(36).slice(2),Qn="__reactFiber$"+no,wa="__reactProps$"+no,wr="__reactContainer$"+no,_h="__reactEvents$"+no,Mw="__reactListeners$"+no,Uw="__reactHandles$"+no;function Qi(r){var s=r[Qn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[wr]||a[Qn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Bp(r);r!==null;){if(a=r[Qn])return a;r=Bp(r)}return s}r=a,a=r.parentNode}return null}function Ta(r){return r=r[Qn]||r[wr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ro(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Zl(r){return r[wa]||null}var vh=[],io=-1;function ni(r){return{current:r}}function Ke(r){0>io||(r.current=vh[io],vh[io]=null,io--)}function We(r,s){io++,vh[io]=r.current,r.current=s}var ri={},Vt=ni(ri),Xt=ni(!1),Xi=ri;function so(r,s){var a=r.type.contextTypes;if(!a)return ri;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(r){return r=r.childContextTypes,r!=null}function eu(){Ke(Xt),Ke(Vt)}function zp(r,s,a){if(Vt.current!==ri)throw Error(t(168));We(Vt,s),We(Xt,a)}function $p(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return se({},a,c)}function tu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ri,Xi=Vt.current,We(Vt,r),We(Xt,Xt.current),!0}function Hp(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=$p(r,s,Xi),c.__reactInternalMemoizedMergedChildContext=r,Ke(Xt),Ke(Vt),We(Vt,r)):Ke(Xt),We(Xt,a)}var Tr=null,nu=!1,Eh=!1;function Wp(r){Tr===null?Tr=[r]:Tr.push(r)}function Fw(r){nu=!0,Wp(r)}function ii(){if(!Eh&&Tr!==null){Eh=!0;var r=0,s=xe;try{var a=Tr;for(xe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Tr=null,nu=!1}catch(d){throw Tr!==null&&(Tr=Tr.slice(r+1)),Us(Bi,ii),d}finally{xe=s,Eh=!1}}return null}var oo=[],ao=0,ru=null,iu=0,_n=[],vn=0,Yi=null,Ir=1,Sr="";function Ji(r,s){oo[ao++]=iu,oo[ao++]=ru,ru=r,iu=s}function qp(r,s,a){_n[vn++]=Ir,_n[vn++]=Sr,_n[vn++]=Yi,Yi=r;var c=Ir;r=Sr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var g=32-$t(s)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Ir=1<<32-$t(s)+d|a<<d|c,Sr=g+r}else Ir=1<<g|a<<d|c,Sr=r}function wh(r){r.return!==null&&(Ji(r,1),qp(r,1,0))}function Th(r){for(;r===ru;)ru=oo[--ao],oo[ao]=null,iu=oo[--ao],oo[ao]=null;for(;r===Yi;)Yi=_n[--vn],_n[vn]=null,Sr=_n[--vn],_n[vn]=null,Ir=_n[--vn],_n[vn]=null}var ln=null,un=null,Qe=!1,Vn=null;function Kp(r,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Gp(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ti(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Yi!==null?{id:Ir,overflow:Sr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Ih(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Sh(r){if(Qe){var s=un;if(s){var a=s;if(!Gp(r,s)){if(Ih(r))throw Error(t(418));s=ti(a.nextSibling);var c=ln;s&&Gp(r,s)?Kp(c,a):(r.flags=r.flags&-4097|2,Qe=!1,ln=r)}}else{if(Ih(r))throw Error(t(418));r.flags=r.flags&-4097|2,Qe=!1,ln=r}}}function Qp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function su(r){if(r!==ln)return!1;if(!Qe)return Qp(r),Qe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!mh(r.type,r.memoizedProps)),s&&(s=un)){if(Ih(r))throw Xp(),Error(t(418));for(;s;)Kp(r,s),s=ti(s.nextSibling)}if(Qp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ti(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ti(r.stateNode.nextSibling):null;return!0}function Xp(){for(var r=un;r;)r=ti(r.nextSibling)}function lo(){un=ln=null,Qe=!1}function Rh(r){Vn===null?Vn=[r]:Vn.push(r)}var jw=re.ReactCurrentBatchConfig;function Ia(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var S=d.refs;v===null?delete S[g]:S[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Yp(r){var s=r._init;return s(r._payload)}function Jp(r){function s(F,x){if(r){var j=F.deletions;j===null?(F.deletions=[x],F.flags|=16):j.push(x)}}function a(F,x){if(!r)return null;for(;x!==null;)s(F,x),x=x.sibling;return null}function c(F,x){for(F=new Map;x!==null;)x.key!==null?F.set(x.key,x):F.set(x.index,x),x=x.sibling;return F}function d(F,x){return F=di(F,x),F.index=0,F.sibling=null,F}function g(F,x,j){return F.index=j,r?(j=F.alternate,j!==null?(j=j.index,j<x?(F.flags|=2,x):j):(F.flags|=2,x)):(F.flags|=1048576,x)}function v(F){return r&&F.alternate===null&&(F.flags|=2),F}function S(F,x,j,ee){return x===null||x.tag!==6?(x=gd(j,F.mode,ee),x.return=F,x):(x=d(x,j),x.return=F,x)}function P(F,x,j,ee){var he=j.type;return he===N?X(F,x,j.props.children,ee,j.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&Yp(he)===x.type)?(ee=d(x,j.props),ee.ref=Ia(F,x,j),ee.return=F,ee):(ee=Nu(j.type,j.key,j.props,null,F.mode,ee),ee.ref=Ia(F,x,j),ee.return=F,ee)}function B(F,x,j,ee){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=yd(j,F.mode,ee),x.return=F,x):(x=d(x,j.children||[]),x.return=F,x)}function X(F,x,j,ee,he){return x===null||x.tag!==7?(x=os(j,F.mode,ee,he),x.return=F,x):(x=d(x,j),x.return=F,x)}function J(F,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return x=gd(""+x,F.mode,j),x.return=F,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ie:return j=Nu(x.type,x.key,x.props,null,F.mode,j),j.ref=Ia(F,null,x),j.return=F,j;case ve:return x=yd(x,F.mode,j),x.return=F,x;case Lt:var ee=x._init;return J(F,ee(x._payload),j)}if(dr(x)||pe(x))return x=os(x,F.mode,j,null),x.return=F,x;ou(F,x)}return null}function Q(F,x,j,ee){var he=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:S(F,x,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ie:return j.key===he?P(F,x,j,ee):null;case ve:return j.key===he?B(F,x,j,ee):null;case Lt:return he=j._init,Q(F,x,he(j._payload),ee)}if(dr(j)||pe(j))return he!==null?null:X(F,x,j,ee,null);ou(F,j)}return null}function ie(F,x,j,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return F=F.get(j)||null,S(x,F,""+ee,he);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ie:return F=F.get(ee.key===null?j:ee.key)||null,P(x,F,ee,he);case ve:return F=F.get(ee.key===null?j:ee.key)||null,B(x,F,ee,he);case Lt:var me=ee._init;return ie(F,x,j,me(ee._payload),he)}if(dr(ee)||pe(ee))return F=F.get(j)||null,X(x,F,ee,he,null);ou(x,ee)}return null}function le(F,x,j,ee){for(var he=null,me=null,ge=x,we=x=0,It=null;ge!==null&&we<j.length;we++){ge.index>we?(It=ge,ge=null):It=ge.sibling;var be=Q(F,ge,j[we],ee);if(be===null){ge===null&&(ge=It);break}r&&ge&&be.alternate===null&&s(F,ge),x=g(be,x,we),me===null?he=be:me.sibling=be,me=be,ge=It}if(we===j.length)return a(F,ge),Qe&&Ji(F,we),he;if(ge===null){for(;we<j.length;we++)ge=J(F,j[we],ee),ge!==null&&(x=g(ge,x,we),me===null?he=ge:me.sibling=ge,me=ge);return Qe&&Ji(F,we),he}for(ge=c(F,ge);we<j.length;we++)It=ie(ge,F,we,j[we],ee),It!==null&&(r&&It.alternate!==null&&ge.delete(It.key===null?we:It.key),x=g(It,x,we),me===null?he=It:me.sibling=It,me=It);return r&&ge.forEach(function(fi){return s(F,fi)}),Qe&&Ji(F,we),he}function ue(F,x,j,ee){var he=pe(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var me=he=null,ge=x,we=x=0,It=null,be=j.next();ge!==null&&!be.done;we++,be=j.next()){ge.index>we?(It=ge,ge=null):It=ge.sibling;var fi=Q(F,ge,be.value,ee);if(fi===null){ge===null&&(ge=It);break}r&&ge&&fi.alternate===null&&s(F,ge),x=g(fi,x,we),me===null?he=fi:me.sibling=fi,me=fi,ge=It}if(be.done)return a(F,ge),Qe&&Ji(F,we),he;if(ge===null){for(;!be.done;we++,be=j.next())be=J(F,be.value,ee),be!==null&&(x=g(be,x,we),me===null?he=be:me.sibling=be,me=be);return Qe&&Ji(F,we),he}for(ge=c(F,ge);!be.done;we++,be=j.next())be=ie(ge,F,we,be.value,ee),be!==null&&(r&&be.alternate!==null&&ge.delete(be.key===null?we:be.key),x=g(be,x,we),me===null?he=be:me.sibling=be,me=be);return r&&ge.forEach(function(vT){return s(F,vT)}),Qe&&Ji(F,we),he}function it(F,x,j,ee){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ie:e:{for(var he=j.key,me=x;me!==null;){if(me.key===he){if(he=j.type,he===N){if(me.tag===7){a(F,me.sibling),x=d(me,j.props.children),x.return=F,F=x;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&Yp(he)===me.type){a(F,me.sibling),x=d(me,j.props),x.ref=Ia(F,me,j),x.return=F,F=x;break e}a(F,me);break}else s(F,me);me=me.sibling}j.type===N?(x=os(j.props.children,F.mode,ee,j.key),x.return=F,F=x):(ee=Nu(j.type,j.key,j.props,null,F.mode,ee),ee.ref=Ia(F,x,j),ee.return=F,F=ee)}return v(F);case ve:e:{for(me=j.key;x!==null;){if(x.key===me)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){a(F,x.sibling),x=d(x,j.children||[]),x.return=F,F=x;break e}else{a(F,x);break}else s(F,x);x=x.sibling}x=yd(j,F.mode,ee),x.return=F,F=x}return v(F);case Lt:return me=j._init,it(F,x,me(j._payload),ee)}if(dr(j))return le(F,x,j,ee);if(pe(j))return ue(F,x,j,ee);ou(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,x!==null&&x.tag===6?(a(F,x.sibling),x=d(x,j),x.return=F,F=x):(a(F,x),x=gd(j,F.mode,ee),x.return=F,F=x),v(F)):a(F,x)}return it}var uo=Jp(!0),Zp=Jp(!1),au=ni(null),lu=null,co=null,Ah=null;function Ch(){Ah=co=lu=null}function Ph(r){var s=au.current;Ke(au),r._currentValue=s}function kh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function ho(r,s){lu=r,Ah=co=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Jt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(Ah!==r)if(r={context:r,memoizedValue:s,next:null},co===null){if(lu===null)throw Error(t(308));co=r,lu.dependencies={lanes:0,firstContext:r}}else co=co.next=r;return s}var Zi=null;function Nh(r){Zi===null?Zi=[r]:Zi.push(r)}function em(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Nh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Rr(r,c)}function Rr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var si=!1;function xh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ar(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function oi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Rr(r,a)}return d=c.interleaved,d===null?(s.next=s,Nh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Rr(r,a)}function uu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}function nm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function cu(r,s,a,c){var d=r.updateQueue;si=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,B=P.next;P.next=null,v===null?g=B:v.next=B,v=P;var X=r.alternate;X!==null&&(X=X.updateQueue,S=X.lastBaseUpdate,S!==v&&(S===null?X.firstBaseUpdate=B:S.next=B,X.lastBaseUpdate=P))}if(g!==null){var J=d.baseState;v=0,X=B=P=null,S=g;do{var Q=S.lane,ie=S.eventTime;if((c&Q)===Q){X!==null&&(X=X.next={eventTime:ie,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=r,ue=S;switch(Q=s,ie=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){J=le.call(ie,J,Q);break e}J=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,Q=typeof le=="function"?le.call(ie,J,Q):le,Q==null)break e;J=se({},J,Q);break e;case 2:si=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,Q=d.effects,Q===null?d.effects=[S]:Q.push(S))}else ie={eventTime:ie,lane:Q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},X===null?(B=X=ie,P=J):X=X.next=ie,v|=Q;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;Q=S,S=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(X===null&&(P=J),d.baseState=P,d.firstBaseUpdate=B,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);ns|=v,r.lanes=v,r.memoizedState=J}}function rm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Sa={},Xn=ni(Sa),Ra=ni(Sa),Aa=ni(Sa);function es(r){if(r===Sa)throw Error(t(174));return r}function Dh(r,s){switch(We(Aa,s),We(Ra,r),We(Xn,Sa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:dt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=dt(s,r)}Ke(Xn),We(Xn,s)}function fo(){Ke(Xn),Ke(Ra),Ke(Aa)}function im(r){es(Aa.current);var s=es(Xn.current),a=dt(s,r.type);s!==a&&(We(Ra,r),We(Xn,a))}function Oh(r){Ra.current===r&&(Ke(Xn),Ke(Ra))}var Ye=ni(0);function hu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Lh=[];function Vh(){for(var r=0;r<Lh.length;r++)Lh[r]._workInProgressVersionPrimary=null;Lh.length=0}var du=re.ReactCurrentDispatcher,bh=re.ReactCurrentBatchConfig,ts=0,Je=null,pt=null,wt=null,fu=!1,Ca=!1,Pa=0,Bw=0;function bt(){throw Error(t(321))}function Mh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Ln(r[a],s[a]))return!1;return!0}function Uh(r,s,a,c,d,g){if(ts=g,Je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,du.current=r===null||r.memoizedState===null?Ww:qw,r=a(c,d),Ca){g=0;do{if(Ca=!1,Pa=0,25<=g)throw Error(t(301));g+=1,wt=pt=null,s.updateQueue=null,du.current=Kw,r=a(c,d)}while(Ca)}if(du.current=gu,s=pt!==null&&pt.next!==null,ts=0,wt=pt=Je=null,fu=!1,s)throw Error(t(300));return r}function Fh(){var r=Pa!==0;return Pa=0,r}function Yn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Je.memoizedState=wt=r:wt=wt.next=r,wt}function wn(){if(pt===null){var r=Je.alternate;r=r!==null?r.memoizedState:null}else r=pt.next;var s=wt===null?Je.memoizedState:wt.next;if(s!==null)wt=s,pt=r;else{if(r===null)throw Error(t(310));pt=r,r={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},wt===null?Je.memoizedState=wt=r:wt=wt.next=r}return wt}function ka(r,s){return typeof s=="function"?s(r):s}function jh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=pt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var S=v=null,P=null,B=g;do{var X=B.lane;if((ts&X)===X)P!==null&&(P=P.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),c=B.hasEagerState?B.eagerState:r(c,B.action);else{var J={lane:X,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};P===null?(S=P=J,v=c):P=P.next=J,Je.lanes|=X,ns|=X}B=B.next}while(B!==null&&B!==g);P===null?v=c:P.next=S,Ln(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,Je.lanes|=g,ns|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Bh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);Ln(g,s.memoizedState)||(Jt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function sm(){}function om(r,s){var a=Je,c=wn(),d=s(),g=!Ln(c.memoizedState,d);if(g&&(c.memoizedState=d,Jt=!0),c=c.queue,zh(um.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,Na(9,lm.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));(ts&30)!==0||am(a,s,d)}return d}function am(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function lm(r,s,a,c){s.value=a,s.getSnapshot=c,cm(s)&&hm(r)}function um(r,s,a){return a(function(){cm(s)&&hm(r)})}function cm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Ln(r,a)}catch{return!0}}function hm(r){var s=Rr(r,1);s!==null&&Fn(s,r,1,-1)}function dm(r){var s=Yn();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:r},s.queue=r,r=r.dispatch=Hw.bind(null,Je,r),[s.memoizedState,r]}function Na(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function fm(){return wn().memoizedState}function pu(r,s,a,c){var d=Yn();Je.flags|=r,d.memoizedState=Na(1|s,a,void 0,c===void 0?null:c)}function mu(r,s,a,c){var d=wn();c=c===void 0?null:c;var g=void 0;if(pt!==null){var v=pt.memoizedState;if(g=v.destroy,c!==null&&Mh(c,v.deps)){d.memoizedState=Na(s,a,g,c);return}}Je.flags|=r,d.memoizedState=Na(1|s,a,g,c)}function pm(r,s){return pu(8390656,8,r,s)}function zh(r,s){return mu(2048,8,r,s)}function mm(r,s){return mu(4,2,r,s)}function gm(r,s){return mu(4,4,r,s)}function ym(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function _m(r,s,a){return a=a!=null?a.concat([r]):null,mu(4,4,ym.bind(null,s,r),a)}function $h(){}function vm(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Em(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function wm(r,s,a){return(ts&21)===0?(r.baseState&&(r.baseState=!1,Jt=!0),r.memoizedState=a):(Ln(a,s)||(a=Hi(),Je.lanes|=a,ns|=a,r.baseState=!0),s)}function zw(r,s){var a=xe;xe=a!==0&&4>a?a:4,r(!0);var c=bh.transition;bh.transition={};try{r(!1),s()}finally{xe=a,bh.transition=c}}function Tm(){return wn().memoizedState}function $w(r,s,a){var c=ci(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Im(r))Sm(s,a);else if(a=em(r,s,a,c),a!==null){var d=qt();Fn(a,r,c,d),Rm(a,s,c)}}function Hw(r,s,a){var c=ci(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Im(r))Sm(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,S=g(v,a);if(d.hasEagerState=!0,d.eagerState=S,Ln(S,v)){var P=s.interleaved;P===null?(d.next=d,Nh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=em(r,s,d,c),a!==null&&(d=qt(),Fn(a,r,c,d),Rm(a,s,c))}}function Im(r){var s=r.alternate;return r===Je||s!==null&&s===Je}function Sm(r,s){Ca=fu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Rm(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}var gu={readContext:En,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},Ww={readContext:En,useCallback:function(r,s){return Yn().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:pm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,pu(4194308,4,ym.bind(null,s,r),a)},useLayoutEffect:function(r,s){return pu(4194308,4,r,s)},useInsertionEffect:function(r,s){return pu(4,2,r,s)},useMemo:function(r,s){var a=Yn();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=Yn();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=$w.bind(null,Je,r),[c.memoizedState,r]},useRef:function(r){var s=Yn();return r={current:r},s.memoizedState=r},useState:dm,useDebugValue:$h,useDeferredValue:function(r){return Yn().memoizedState=r},useTransition:function(){var r=dm(!1),s=r[0];return r=zw.bind(null,r[1]),Yn().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Je,d=Yn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(ts&30)!==0||am(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,pm(um.bind(null,c,g,r),[r]),c.flags|=2048,Na(9,lm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=Yn(),s=Tt.identifierPrefix;if(Qe){var a=Sr,c=Ir;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Pa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Bw++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},qw={readContext:En,useCallback:vm,useContext:En,useEffect:zh,useImperativeHandle:_m,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:Em,useReducer:jh,useRef:fm,useState:function(){return jh(ka)},useDebugValue:$h,useDeferredValue:function(r){var s=wn();return wm(s,pt.memoizedState,r)},useTransition:function(){var r=jh(ka)[0],s=wn().memoizedState;return[r,s]},useMutableSource:sm,useSyncExternalStore:om,useId:Tm,unstable_isNewReconciler:!1},Kw={readContext:En,useCallback:vm,useContext:En,useEffect:zh,useImperativeHandle:_m,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:Em,useReducer:Bh,useRef:fm,useState:function(){return Bh(ka)},useDebugValue:$h,useDeferredValue:function(r){var s=wn();return pt===null?s.memoizedState=r:wm(s,pt.memoizedState,r)},useTransition:function(){var r=Bh(ka)[0],s=wn().memoizedState;return[r,s]},useMutableSource:sm,useSyncExternalStore:om,useId:Tm,unstable_isNewReconciler:!1};function bn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Hh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var yu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=qt(),d=ci(r),g=Ar(c,d);g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,d),s!==null&&(Fn(s,r,d,c),uu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=qt(),d=ci(r),g=Ar(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,d),s!==null&&(Fn(s,r,d,c),uu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=qt(),c=ci(r),d=Ar(a,c);d.tag=2,s!=null&&(d.callback=s),s=oi(r,d,c),s!==null&&(Fn(s,r,c,a),uu(s,r,c))}};function Am(r,s,a,c,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!ga(a,c)||!ga(d,g):!0}function Cm(r,s,a){var c=!1,d=ri,g=s.contextType;return typeof g=="object"&&g!==null?g=En(g):(d=Yt(s)?Xi:Vt.current,c=s.contextTypes,g=(c=c!=null)?so(r,d):ri),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function Pm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&yu.enqueueReplaceState(s,s.state,null)}function Wh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},xh(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=En(g):(g=Yt(s)?Xi:Vt.current,d.context=so(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Hh(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&yu.enqueueReplaceState(d,d.state,null),cu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function po(r,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function qh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Kh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Gw=typeof WeakMap=="function"?WeakMap:Map;function km(r,s,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Su||(Su=!0,ld=c),Kh(r,s)},a}function Nm(r,s,a){a=Ar(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Kh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Kh(r,s),typeof c!="function"&&(li===null?li=new Set([this]):li.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function xm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new Gw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=lT.bind(null,r,s,a),s.then(r,r))}function Dm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Om(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ar(-1,1),s.tag=2,oi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var Qw=re.ReactCurrentOwner,Jt=!1;function Wt(r,s,a,c){s.child=r===null?Zp(s,null,a,c):uo(s,r.child,a,c)}function Lm(r,s,a,c,d){a=a.render;var g=s.ref;return ho(s,d),c=Uh(r,s,a,c,g,d),a=Fh(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Cr(r,s,d)):(Qe&&a&&wh(s),s.flags|=1,Wt(r,s,c,d),s.child)}function Vm(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!md(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,bm(r,s,g,c,d)):(r=Nu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(v,c)&&r.ref===s.ref)return Cr(r,s,d)}return s.flags|=1,r=di(g,c),r.ref=s.ref,r.return=s,s.child=r}function bm(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(ga(g,c)&&r.ref===s.ref)if(Jt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Jt=!0);else return s.lanes=r.lanes,Cr(r,s,d)}return Gh(r,s,a,c,d)}function Mm(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(go,cn),cn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(go,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(go,cn),cn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,We(go,cn),cn|=c;return Wt(r,s,d,a),s.child}function Um(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Gh(r,s,a,c,d){var g=Yt(a)?Xi:Vt.current;return g=so(s,g),ho(s,d),a=Uh(r,s,a,c,g,d),c=Fh(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Cr(r,s,d)):(Qe&&c&&wh(s),s.flags|=1,Wt(r,s,a,d),s.child)}function Fm(r,s,a,c,d){if(Yt(a)){var g=!0;tu(s)}else g=!1;if(ho(s,d),s.stateNode===null)vu(r,s),Cm(s,a,c),Wh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,B=a.contextType;typeof B=="object"&&B!==null?B=En(B):(B=Yt(a)?Xi:Vt.current,B=so(s,B));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==B)&&Pm(s,v,c,B),si=!1;var Q=s.memoizedState;v.state=Q,cu(s,c,v,d),P=s.memoizedState,S!==c||Q!==P||Xt.current||si?(typeof X=="function"&&(Hh(s,a,X,c),P=s.memoizedState),(S=si||Am(s,a,S,c,Q,P,B))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=B,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,tm(r,s),S=s.memoizedProps,B=s.type===s.elementType?S:bn(s.type,S),v.props=B,J=s.pendingProps,Q=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=En(P):(P=Yt(a)?Xi:Vt.current,P=so(s,P));var ie=a.getDerivedStateFromProps;(X=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==J||Q!==P)&&Pm(s,v,c,P),si=!1,Q=s.memoizedState,v.state=Q,cu(s,c,v,d);var le=s.memoizedState;S!==J||Q!==le||Xt.current||si?(typeof ie=="function"&&(Hh(s,a,ie,c),le=s.memoizedState),(B=si||Am(s,a,B,c,Q,le,P)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=le),v.props=c,v.state=le,v.context=P,c=B):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),c=!1)}return Qh(r,s,a,c,g,d)}function Qh(r,s,a,c,d,g){Um(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Hp(s,a,!1),Cr(r,s,g);c=s.stateNode,Qw.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=uo(s,r.child,null,g),s.child=uo(s,null,S,g)):Wt(r,s,S,g),s.memoizedState=c.state,d&&Hp(s,a,!0),s.child}function jm(r){var s=r.stateNode;s.pendingContext?zp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&zp(r,s.context,!1),Dh(r,s.containerInfo)}function Bm(r,s,a,c,d){return lo(),Rh(d),s.flags|=256,Wt(r,s,a,c),s.child}var Xh={dehydrated:null,treeContext:null,retryLane:0};function Yh(r){return{baseLanes:r,cachePool:null,transitions:null}}function zm(r,s,a){var c=s.pendingProps,d=Ye.current,g=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Ye,d&1),r===null)return Sh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=v):g=xu(v,c,0,null),r=os(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Yh(a),s.memoizedState=Xh,r):Jh(s,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return Xw(r,s,v,c,S,d,a);if(g){g=c.fallback,v=s.mode,d=r.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=di(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?g=di(S,g):(g=os(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?Yh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Xh,c}return g=r.child,r=g.sibling,c=di(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Jh(r,s){return s=xu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function _u(r,s,a,c){return c!==null&&Rh(c),uo(s,r.child,null,a),r=Jh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Xw(r,s,a,c,d,g,v){if(a)return s.flags&256?(s.flags&=-257,c=qh(Error(t(422))),_u(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=xu({mode:"visible",children:c.children},d,0,null),g=os(g,d,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&uo(s,r.child,null,v),s.child.memoizedState=Yh(v),s.memoizedState=Xh,g);if((s.mode&1)===0)return _u(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,g=Error(t(419)),c=qh(g,c,void 0),_u(r,s,v,c)}if(S=(v&r.childLanes)!==0,Jt||S){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Rr(r,d),Fn(c,r,d,-1))}return pd(),c=qh(Error(t(421))),_u(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=uT.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,un=ti(d.nextSibling),ln=s,Qe=!0,Vn=null,r!==null&&(_n[vn++]=Ir,_n[vn++]=Sr,_n[vn++]=Yi,Ir=r.id,Sr=r.overflow,Yi=s),s=Jh(s,c.children),s.flags|=4096,s)}function $m(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),kh(r.return,s,a)}function Zh(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Hm(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Wt(r,s,c.children,a),c=Ye.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&$m(r,a,s);else if(r.tag===19)$m(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Ye,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&hu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Zh(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&hu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Zh(s,!0,a,null,g);break;case"together":Zh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Cr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ns|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=di(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=di(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Yw(r,s,a){switch(s.tag){case 3:jm(s),lo();break;case 5:im(s);break;case 1:Yt(s.type)&&tu(s);break;case 4:Dh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(au,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Ye,Ye.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?zm(r,s,a):(We(Ye,Ye.current&1),r=Cr(r,s,a),r!==null?r.sibling:null);We(Ye,Ye.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return Hm(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ye,Ye.current),c)break;return null;case 22:case 23:return s.lanes=0,Mm(r,s,a)}return Cr(r,s,a)}var Wm,ed,qm,Km;Wm=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ed=function(){},qm=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,es(Xn.current);var g=null;switch(a){case"input":d=Oi(r,d),c=Oi(r,c),g=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":d=Wo(r,d),c=Wo(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Jl)}Yo(a,c);var v;a=null;for(B in d)if(!c.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var S=d[B];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?g||(g=[]):(g=g||[]).push(B,null));for(B in c){var P=c[B];if(S=d!=null?d[B]:void 0,c.hasOwnProperty(B)&&P!==S&&(P!=null||S!=null))if(B==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(B,a)),a=P;else B==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(g=g||[]).push(B,P)):B==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(B,""+P):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(P!=null&&B==="onScroll"&&qe("scroll",r),g||S===P||(g=[])):(g=g||[]).push(B,P))}a&&(g=g||[]).push("style",a);var B=g;(s.updateQueue=B)&&(s.flags|=4)}},Km=function(r,s,a,c){a!==c&&(s.flags|=4)};function xa(r,s){if(!Qe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function Jw(r,s,a){var c=s.pendingProps;switch(Th(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Yt(s.type)&&eu(),Mt(s),null;case 3:return c=s.stateNode,fo(),Ke(Xt),Ke(Vt),Vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(su(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Vn!==null&&(hd(Vn),Vn=null))),ed(r,s),Mt(s),null;case 5:Oh(s);var d=es(Aa.current);if(a=s.type,r!==null&&s.stateNode!=null)qm(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=es(Xn.current),su(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Qn]=s,c[wa]=g,r=(s.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<_a.length;d++)qe(_a[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":Cs(c,g),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},qe("invalid",c);break;case"textarea":ks(c,g),qe("invalid",c)}Yo(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var S=g[v];v==="children"?typeof S=="string"?c.textContent!==S&&(g.suppressHydrationWarning!==!0&&Yl(c.textContent,S,r),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&Yl(c.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&qe("scroll",c)}switch(a){case"input":hr(c),Il(c,g,!0);break;case"textarea":hr(c),qo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Jl)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ht(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[Qn]=s,r[wa]=c,Wm(r,s,!1,!1),s.stateNode=r;e:{switch(v=Jo(a,c),a){case"dialog":qe("cancel",r),qe("close",r),d=c;break;case"iframe":case"object":case"embed":qe("load",r),d=c;break;case"video":case"audio":for(d=0;d<_a.length;d++)qe(_a[d],r);d=c;break;case"source":qe("error",r),d=c;break;case"img":case"image":case"link":qe("error",r),qe("load",r),d=c;break;case"details":qe("toggle",r),d=c;break;case"input":Cs(r,c),d=Oi(r,c),qe("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),qe("invalid",r);break;case"textarea":ks(r,c),d=Wo(r,c),qe("invalid",r);break;default:d=c}Yo(a,d),S=d;for(g in S)if(S.hasOwnProperty(g)){var P=S[g];g==="style"?Qo(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Ko(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Hr(r,P):typeof P=="number"&&Hr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&qe("scroll",r):P!=null&&G(r,g,P,v))}switch(a){case"input":hr(r),Il(r,c,!1);break;case"textarea":hr(r),qo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?fr(r,!!c.multiple,g,!1):c.defaultValue!=null&&fr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)Km(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=es(Aa.current),es(Xn.current),su(s)){if(c=s.stateNode,a=s.memoizedProps,c[Qn]=s,(g=c.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:Yl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Yl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=s,s.stateNode=c}return Mt(s),null;case 13:if(Ke(Ye),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qe&&un!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Xp(),lo(),s.flags|=98560,g=!1;else if(g=su(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Qn]=s}else lo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),g=!1}else Vn!==null&&(hd(Vn),Vn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ye.current&1)!==0?mt===0&&(mt=3):pd())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return fo(),ed(r,s),r===null&&va(s.stateNode.containerInfo),Mt(s),null;case 10:return Ph(s.type._context),Mt(s),null;case 17:return Yt(s.type)&&eu(),Mt(s),null;case 19:if(Ke(Ye),g=s.memoizedState,g===null)return Mt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)xa(g,!1);else{if(mt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=hu(r),v!==null){for(s.flags|=128,xa(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ye,Ye.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>yo&&(s.flags|=128,c=!0,xa(g,!1),s.lanes=4194304)}else{if(!c)if(r=hu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),xa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Qe)return Mt(s),null}else 2*He()-g.renderingStartTime>yo&&a!==1073741824&&(s.flags|=128,c=!0,xa(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=Ye.current,We(Ye,c?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return fd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(cn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Zw(r,s){switch(Th(s),s.tag){case 1:return Yt(s.type)&&eu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return fo(),Ke(Xt),Ke(Vt),Vh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Oh(s),null;case 13:if(Ke(Ye),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));lo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Ye),null;case 4:return fo(),null;case 10:return Ph(s.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var Eu=!1,Ut=!1,eT=typeof WeakSet=="function"?WeakSet:Set,ae=null;function mo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(r,s,c)}else a.current=null}function td(r,s,a){try{a()}catch(c){tt(r,s,c)}}var Gm=!1;function tT(r,s){if(fh=Jr,r=Ap(),sh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,B=0,X=0,J=r,Q=null;t:for(;;){for(var ie;J!==a||d!==0&&J.nodeType!==3||(S=v+d),J!==g||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(ie=J.firstChild)!==null;)Q=J,J=ie;for(;;){if(J===r)break t;if(Q===a&&++B===d&&(S=v),Q===g&&++X===c&&(P=v),(ie=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=ie}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ph={focusedElem:r,selectionRange:a},Jr=!1,ae=s;ae!==null;)if(s=ae,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ae=r;else for(;ae!==null;){s=ae;try{var le=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,it=le.memoizedState,F=s.stateNode,x=F.getSnapshotBeforeUpdate(s.elementType===s.type?ue:bn(s.type,ue),it);F.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){tt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,ae=r;break}ae=s.return}return le=Gm,Gm=!1,le}function Da(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&td(s,a,g)}d=d.next}while(d!==c)}}function wu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function nd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Qm(r){var s=r.alternate;s!==null&&(r.alternate=null,Qm(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Qn],delete s[wa],delete s[_h],delete s[Mw],delete s[Uw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Xm(r){return r.tag===5||r.tag===3||r.tag===4}function Ym(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Xm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function rd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Jl));else if(c!==4&&(r=r.child,r!==null))for(rd(r,s,a),r=r.sibling;r!==null;)rd(r,s,a),r=r.sibling}function id(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(id(r,s,a),r=r.sibling;r!==null;)id(r,s,a),r=r.sibling}var Pt=null,Mn=!1;function ai(r,s,a){for(a=a.child;a!==null;)Jm(r,s,a),a=a.sibling}function Jm(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(zi,a)}catch{}switch(a.tag){case 5:Ut||mo(a,s);case 6:var c=Pt,d=Mn;Pt=null,ai(r,s,a),Pt=c,Mn=d,Pt!==null&&(Mn?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Mn?(r=Pt,a=a.stateNode,r.nodeType===8?yh(r.parentNode,a):r.nodeType===1&&yh(r,a),Dn(r)):yh(Pt,a.stateNode));break;case 4:c=Pt,d=Mn,Pt=a.stateNode.containerInfo,Mn=!0,ai(r,s,a),Pt=c,Mn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&((g&2)!==0||(g&4)!==0)&&td(a,s,v),d=d.next}while(d!==c)}ai(r,s,a);break;case 1:if(!Ut&&(mo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){tt(a,s,S)}ai(r,s,a);break;case 21:ai(r,s,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ai(r,s,a),Ut=c):ai(r,s,a);break;default:ai(r,s,a)}}function Zm(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new eT),s.forEach(function(c){var d=cT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Un(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Mn=!1;break e;case 3:Pt=S.stateNode.containerInfo,Mn=!0;break e;case 4:Pt=S.stateNode.containerInfo,Mn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));Jm(g,v,d),Pt=null,Mn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(B){tt(d,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)eg(s,r),s=s.sibling}function eg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Un(s,r),Jn(r),c&4){try{Da(3,r,r.return),wu(3,r)}catch(ue){tt(r,r.return,ue)}try{Da(5,r,r.return)}catch(ue){tt(r,r.return,ue)}}break;case 1:Un(s,r),Jn(r),c&512&&a!==null&&mo(a,a.return);break;case 5:if(Un(s,r),Jn(r),c&512&&a!==null&&mo(a,a.return),r.flags&32){var d=r.stateNode;try{Hr(d,"")}catch(ue){tt(r,r.return,ue)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&$o(d,g),Jo(S,v);var B=Jo(S,g);for(v=0;v<P.length;v+=2){var X=P[v],J=P[v+1];X==="style"?Qo(d,J):X==="dangerouslySetInnerHTML"?Ko(d,J):X==="children"?Hr(d,J):G(d,X,J,B)}switch(S){case"input":Ho(d,g);break;case"textarea":Ns(d,g);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var ie=g.value;ie!=null?fr(d,!!g.multiple,ie,!1):Q!==!!g.multiple&&(g.defaultValue!=null?fr(d,!!g.multiple,g.defaultValue,!0):fr(d,!!g.multiple,g.multiple?[]:"",!1))}d[wa]=g}catch(ue){tt(r,r.return,ue)}}break;case 6:if(Un(s,r),Jn(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(ue){tt(r,r.return,ue)}}break;case 3:if(Un(s,r),Jn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(s.containerInfo)}catch(ue){tt(r,r.return,ue)}break;case 4:Un(s,r),Jn(r);break;case 13:Un(s,r),Jn(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(ad=He())),c&4&&Zm(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(B=Ut)||X,Un(s,r),Ut=B):Un(s,r),Jn(r),c&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!X&&(r.mode&1)!==0)for(ae=r,X=r.child;X!==null;){for(J=ae=X;ae!==null;){switch(Q=ae,ie=Q.child,Q.tag){case 0:case 11:case 14:case 15:Da(4,Q,Q.return);break;case 1:mo(Q,Q.return);var le=Q.stateNode;if(typeof le.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ue){tt(c,a,ue)}}break;case 5:mo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){rg(J);continue}}ie!==null?(ie.return=Q,ae=ie):rg(J)}X=X.sibling}e:for(X=null,J=r;;){if(J.tag===5){if(X===null){X=J;try{d=J.stateNode,B?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Go("display",v))}catch(ue){tt(r,r.return,ue)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=B?"":J.memoizedProps}catch(ue){tt(r,r.return,ue)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Un(s,r),Jn(r),c&4&&Zm(r);break;case 21:break;default:Un(s,r),Jn(r)}}function Jn(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Hr(d,""),c.flags&=-33);var g=Ym(r);id(r,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Ym(r);rd(r,S,v);break;default:throw Error(t(161))}}catch(P){tt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function nT(r,s,a){ae=r,tg(r)}function tg(r,s,a){for(var c=(r.mode&1)!==0;ae!==null;){var d=ae,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Eu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ut;S=Eu;var B=Ut;if(Eu=v,(Ut=P)&&!B)for(ae=d;ae!==null;)v=ae,P=v.child,v.tag===22&&v.memoizedState!==null?ig(d):P!==null?(P.return=v,ae=P):ig(d);for(;g!==null;)ae=g,tg(g),g=g.sibling;ae=d,Eu=S,Ut=B}ng(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ae=g):ng(r)}}function ng(r){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||wu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:bn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&rm(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}rm(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var X=B.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&Dn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&nd(s)}catch(Q){tt(s,s.return,Q)}}if(s===r){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function rg(r){for(;ae!==null;){var s=ae;if(s===r){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function ig(r){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{wu(4,s)}catch(P){tt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){tt(s,d,P)}}var g=s.return;try{nd(s)}catch(P){tt(s,g,P)}break;case 5:var v=s.return;try{nd(s)}catch(P){tt(s,v,P)}}}catch(P){tt(s,s.return,P)}if(s===r){ae=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break}ae=s.return}}var rT=Math.ceil,Tu=re.ReactCurrentDispatcher,sd=re.ReactCurrentOwner,Tn=re.ReactCurrentBatchConfig,Ve=0,Tt=null,at=null,kt=0,cn=0,go=ni(0),mt=0,Oa=null,ns=0,Iu=0,od=0,La=null,Zt=null,ad=0,yo=1/0,Pr=null,Su=!1,ld=null,li=null,Ru=!1,ui=null,Au=0,Va=0,ud=null,Cu=-1,Pu=0;function qt(){return(Ve&6)!==0?He():Cu!==-1?Cu:Cu=He()}function ci(r){return(r.mode&1)===0?1:(Ve&2)!==0&&kt!==0?kt&-kt:jw.transition!==null?(Pu===0&&(Pu=Hi()),Pu):(r=xe,r!==0||(r=window.event,r=r===void 0?16:ua(r.type)),r)}function Fn(r,s,a,c){if(50<Va)throw Va=0,ud=null,Error(t(185));Gr(r,a,c),((Ve&2)===0||r!==Tt)&&(r===Tt&&((Ve&2)===0&&(Iu|=a),mt===4&&hi(r,kt)),en(r,c),a===1&&Ve===0&&(s.mode&1)===0&&(yo=He()+500,nu&&ii()))}function en(r,s){var a=r.callbackNode;gr(r,s);var c=$i(r,r===Tt?kt:0);if(c===0)a!==null&&ia(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ia(a),s===1)r.tag===0?Fw(og.bind(null,r)):Wp(og.bind(null,r)),Vw(function(){(Ve&6)===0&&ii()}),a=null;else{switch(Xr(c)){case 1:a=Bi;break;case 4:a=Wr;break;case 16:a=mn;break;case 536870912:a=Pl;break;default:a=mn}a=pg(a,sg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function sg(r,s){if(Cu=-1,Pu=0,(Ve&6)!==0)throw Error(t(327));var a=r.callbackNode;if(_o()&&r.callbackNode!==a)return null;var c=$i(r,r===Tt?kt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=ku(r,c);else{s=c;var d=Ve;Ve|=2;var g=lg();(Tt!==r||kt!==s)&&(Pr=null,yo=He()+500,is(r,s));do try{oT();break}catch(S){ag(r,S)}while(!0);Ch(),Tu.current=g,Ve=d,at!==null?s=0:(Tt=null,kt=0,s=mt)}if(s!==0){if(s===2&&(d=sn(r),d!==0&&(c=d,s=cd(r,d))),s===1)throw a=Oa,is(r,0),hi(r,c),en(r,He()),a;if(s===6)hi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!iT(d)&&(s=ku(r,c),s===2&&(g=sn(r),g!==0&&(c=g,s=cd(r,g))),s===1))throw a=Oa,is(r,0),hi(r,c),en(r,He()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ss(r,Zt,Pr);break;case 3:if(hi(r,c),(c&130023424)===c&&(s=ad+500-He(),10<s)){if($i(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){qt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=gh(ss.bind(null,r,Zt,Pr),s);break}ss(r,Zt,Pr);break;case 4:if(hi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-$t(c);g=1<<v,v=s[v],v>d&&(d=v),c&=~g}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*rT(c/1960))-c,10<c){r.timeoutHandle=gh(ss.bind(null,r,Zt,Pr),c);break}ss(r,Zt,Pr);break;case 5:ss(r,Zt,Pr);break;default:throw Error(t(329))}}}return en(r,He()),r.callbackNode===a?sg.bind(null,r):null}function cd(r,s){var a=La;return r.current.memoizedState.isDehydrated&&(is(r,s).flags|=256),r=ku(r,s),r!==2&&(s=Zt,Zt=a,s!==null&&hd(s)),r}function hd(r){Zt===null?Zt=r:Zt.push.apply(Zt,r)}function iT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Ln(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function hi(r,s){for(s&=~od,s&=~Iu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-$t(s),c=1<<a;r[a]=-1,s&=~c}}function og(r){if((Ve&6)!==0)throw Error(t(327));_o();var s=$i(r,0);if((s&1)===0)return en(r,He()),null;var a=ku(r,s);if(r.tag!==0&&a===2){var c=sn(r);c!==0&&(s=c,a=cd(r,c))}if(a===1)throw a=Oa,is(r,0),hi(r,s),en(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ss(r,Zt,Pr),en(r,He()),null}function dd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(yo=He()+500,nu&&ii())}}function rs(r){ui!==null&&ui.tag===0&&(Ve&6)===0&&_o();var s=Ve;Ve|=1;var a=Tn.transition,c=xe;try{if(Tn.transition=null,xe=1,r)return r()}finally{xe=c,Tn.transition=a,Ve=s,(Ve&6)===0&&ii()}}function fd(){cn=go.current,Ke(go)}function is(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Lw(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Th(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:fo(),Ke(Xt),Ke(Vt),Vh();break;case 5:Oh(c);break;case 4:fo();break;case 13:Ke(Ye);break;case 19:Ke(Ye);break;case 10:Ph(c.type._context);break;case 22:case 23:fd()}a=a.return}if(Tt=r,at=r=di(r.current,null),kt=cn=s,mt=0,Oa=null,od=Iu=ns=0,Zt=La=null,Zi!==null){for(s=0;s<Zi.length;s++)if(a=Zi[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}Zi=null}return r}function ag(r,s){do{var a=at;try{if(Ch(),du.current=gu,fu){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}fu=!1}if(ts=0,wt=pt=Je=null,Ca=!1,Pa=0,sd.current=null,a===null||a.return===null){mt=1,Oa=s,at=null;break}e:{var g=r,v=a.return,S=a,P=s;if(s=kt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var B=P,X=S,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var ie=Dm(v);if(ie!==null){ie.flags&=-257,Om(ie,v,S,g,s),ie.mode&1&&xm(g,B,s),s=ie,P=B;var le=s.updateQueue;if(le===null){var ue=new Set;ue.add(P),s.updateQueue=ue}else le.add(P);break e}else{if((s&1)===0){xm(g,B,s),pd();break e}P=Error(t(426))}}else if(Qe&&S.mode&1){var it=Dm(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Om(it,v,S,g,s),Rh(po(P,S));break e}}g=P=po(P,S),mt!==4&&(mt=2),La===null?La=[g]:La.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=km(g,P,s);nm(g,F);break e;case 1:S=P;var x=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(li===null||!li.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=Nm(g,S,s);nm(g,ee);break e}}g=g.return}while(g!==null)}cg(a)}catch(he){s=he,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function lg(){var r=Tu.current;return Tu.current=gu,r===null?gu:r}function pd(){(mt===0||mt===3||mt===2)&&(mt=4),Tt===null||(ns&268435455)===0&&(Iu&268435455)===0||hi(Tt,kt)}function ku(r,s){var a=Ve;Ve|=2;var c=lg();(Tt!==r||kt!==s)&&(Pr=null,is(r,s));do try{sT();break}catch(d){ag(r,d)}while(!0);if(Ch(),Ve=a,Tu.current=c,at!==null)throw Error(t(261));return Tt=null,kt=0,mt}function sT(){for(;at!==null;)ug(at)}function oT(){for(;at!==null&&!Al();)ug(at)}function ug(r){var s=fg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?cg(r):at=s,sd.current=null}function cg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=Jw(a,s,cn),a!==null){at=a;return}}else{if(a=Zw(a,s),a!==null){a.flags&=32767,at=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{mt=6,at=null;return}}if(s=s.sibling,s!==null){at=s;return}at=s=r}while(s!==null);mt===0&&(mt=5)}function ss(r,s,a){var c=xe,d=Tn.transition;try{Tn.transition=null,xe=1,aT(r,s,a,c)}finally{Tn.transition=d,xe=c}return null}function aT(r,s,a,c){do _o();while(ui!==null);if((Ve&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===Tt&&(at=Tt=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ru||(Ru=!0,pg(mn,function(){return _o(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Tn.transition,Tn.transition=null;var v=xe;xe=1;var S=Ve;Ve|=4,sd.current=null,tT(r,a),eg(a,r),Cw(ph),Jr=!!fh,ph=fh=null,r.current=a,nT(a),Yc(),Ve=S,xe=v,Tn.transition=g}else r.current=a;if(Ru&&(Ru=!1,ui=r,Au=d),g=r.pendingLanes,g===0&&(li=null),kl(a.stateNode),en(r,He()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Su)throw Su=!1,r=ld,ld=null,r;return(Au&1)!==0&&r.tag!==0&&_o(),g=r.pendingLanes,(g&1)!==0?r===ud?Va++:(Va=0,ud=r):Va=0,ii(),null}function _o(){if(ui!==null){var r=Xr(Au),s=Tn.transition,a=xe;try{if(Tn.transition=null,xe=16>r?16:r,ui===null)var c=!1;else{if(r=ui,ui=null,Au=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ae=r.current;ae!==null;){var g=ae,v=g.child;if((ae.flags&16)!==0){var S=g.deletions;if(S!==null){for(var P=0;P<S.length;P++){var B=S[P];for(ae=B;ae!==null;){var X=ae;switch(X.tag){case 0:case 11:case 15:Da(8,X,g)}var J=X.child;if(J!==null)J.return=X,ae=J;else for(;ae!==null;){X=ae;var Q=X.sibling,ie=X.return;if(Qm(X),X===B){ae=null;break}if(Q!==null){Q.return=ie,ae=Q;break}ae=ie}}}var le=g.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var it=ue.sibling;ue.sibling=null,ue=it}while(ue!==null)}}ae=g}}if((g.subtreeFlags&2064)!==0&&v!==null)v.return=g,ae=v;else e:for(;ae!==null;){if(g=ae,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Da(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ae=F;break e}ae=g.return}}var x=r.current;for(ae=x;ae!==null;){v=ae;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,ae=j;else e:for(v=x;ae!==null;){if(S=ae,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:wu(9,S)}}catch(he){tt(S,S.return,he)}if(S===v){ae=null;break e}var ee=S.sibling;if(ee!==null){ee.return=S.return,ae=ee;break e}ae=S.return}}if(Ve=d,ii(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(zi,r)}catch{}c=!0}return c}finally{xe=a,Tn.transition=s}}return!1}function hg(r,s,a){s=po(a,s),s=km(r,s,1),r=oi(r,s,1),s=qt(),r!==null&&(Gr(r,1,s),en(r,s))}function tt(r,s,a){if(r.tag===3)hg(r,r,a);else for(;s!==null;){if(s.tag===3){hg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(li===null||!li.has(c))){r=po(a,r),r=Nm(s,r,1),s=oi(s,r,1),r=qt(),s!==null&&(Gr(s,1,r),en(s,r));break}}s=s.return}}function lT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=qt(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(kt&a)===a&&(mt===4||mt===3&&(kt&130023424)===kt&&500>He()-ad?is(r,0):od|=a),en(r,s)}function dg(r,s){s===0&&((r.mode&1)===0?s=1:(s=js,js<<=1,(js&130023424)===0&&(js=4194304)));var a=qt();r=Rr(r,s),r!==null&&(Gr(r,s,a),en(r,a))}function uT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),dg(r,a)}function cT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),dg(r,a)}var fg;fg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)Jt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Jt=!1,Yw(r,s,a);Jt=(r.flags&131072)!==0}else Jt=!1,Qe&&(s.flags&1048576)!==0&&qp(s,iu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;vu(r,s),r=s.pendingProps;var d=so(s,Vt.current);ho(s,a),d=Uh(null,s,c,r,d,a);var g=Fh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(c)?(g=!0,tu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xh(s),d.updater=yu,s.stateNode=d,d._reactInternals=s,Wh(s,c,r,a),s=Qh(null,s,c,!0,g,a)):(s.tag=0,Qe&&g&&wh(s),Wt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(vu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=dT(c),r=bn(c,r),d){case 0:s=Gh(null,s,c,r,a);break e;case 1:s=Fm(null,s,c,r,a);break e;case 11:s=Lm(null,s,c,r,a);break e;case 14:s=Vm(null,s,c,bn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:bn(c,d),Gh(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:bn(c,d),Fm(r,s,c,d,a);case 3:e:{if(jm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,tm(r,s),cu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=po(Error(t(423)),s),s=Bm(r,s,c,a,d);break e}else if(c!==d){d=po(Error(t(424)),s),s=Bm(r,s,c,a,d);break e}else for(un=ti(s.stateNode.containerInfo.firstChild),ln=s,Qe=!0,Vn=null,a=Zp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(lo(),c===d){s=Cr(r,s,a);break e}Wt(r,s,c,a)}s=s.child}return s;case 5:return im(s),r===null&&Sh(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,mh(c,d)?v=null:g!==null&&mh(c,g)&&(s.flags|=32),Um(r,s),Wt(r,s,v,a),s.child;case 6:return r===null&&Sh(s),null;case 13:return zm(r,s,a);case 4:return Dh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=uo(s,null,c,a):Wt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:bn(c,d),Lm(r,s,c,d,a);case 7:return Wt(r,s,s.pendingProps,a),s.child;case 8:return Wt(r,s,s.pendingProps.children,a),s.child;case 12:return Wt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,We(au,c._currentValue),c._currentValue=v,g!==null)if(Ln(g.value,v)){if(g.children===d.children&&!Xt.current){s=Cr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var S=g.dependencies;if(S!==null){v=g.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=Ar(-1,a&-a),P.tag=2;var B=g.updateQueue;if(B!==null){B=B.shared;var X=B.pending;X===null?P.next=P:(P.next=X.next,X.next=P),B.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),kh(g.return,a,s),S.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),kh(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Wt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,ho(s,a),d=En(d),c=c(d),s.flags|=1,Wt(r,s,c,a),s.child;case 14:return c=s.type,d=bn(c,s.pendingProps),d=bn(c.type,d),Vm(r,s,c,d,a);case 15:return bm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:bn(c,d),vu(r,s),s.tag=1,Yt(c)?(r=!0,tu(s)):r=!1,ho(s,a),Cm(s,c,d),Wh(s,c,d,a),Qh(null,s,c,!0,r,a);case 19:return Hm(r,s,a);case 22:return Mm(r,s,a)}throw Error(t(156,s.tag))};function pg(r,s){return Us(r,s)}function hT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,s,a,c){return new hT(r,s,a,c)}function md(r){return r=r.prototype,!(!r||!r.isReactComponent)}function dT(r){if(typeof r=="function")return md(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Ot)return 14}return 2}function di(r,s){var a=r.alternate;return a===null?(a=In(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Nu(r,s,a,c,d,g){var v=2;if(c=r,typeof r=="function")md(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case N:return os(a.children,d,g,s);case I:v=8,d|=8;break;case A:return r=In(12,a,s,d|2),r.elementType=A,r.lanes=g,r;case C:return r=In(13,a,s,d),r.elementType=C,r.lanes=g,r;case nt:return r=In(19,a,s,d),r.elementType=nt,r.lanes=g,r;case Be:return xu(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:v=10;break e;case D:v=9;break e;case M:v=11;break e;case Ot:v=14;break e;case Lt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=In(v,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function os(r,s,a,c){return r=In(7,r,c,s),r.lanes=a,r}function xu(r,s,a,c){return r=In(22,r,c,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function gd(r,s,a){return r=In(6,r,null,s),r.lanes=a,r}function yd(r,s,a){return s=In(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function fT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _d(r,s,a,c,d,g,v,S,P){return r=new fT(r,s,a,S,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=In(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(g),r}function pT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function mg(r){if(!r)return ri;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Yt(a))return $p(r,a,s)}return s}function gg(r,s,a,c,d,g,v,S,P){return r=_d(a,c,!0,r,d,g,v,S,P),r.context=mg(null),a=r.current,c=qt(),d=ci(a),g=Ar(c,d),g.callback=s??null,oi(a,g,d),r.current.lanes=d,Gr(r,d,c),en(r,c),r}function Du(r,s,a,c){var d=s.current,g=qt(),v=ci(d);return a=mg(a),s.context===null?s.context=a:s.pendingContext=a,s=Ar(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=oi(d,s,v),r!==null&&(Fn(r,d,v,g),uu(r,d,v)),v}function Ou(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function yg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function vd(r,s){yg(r,s),(r=r.alternate)&&yg(r,s)}function mT(){return null}var _g=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ed(r){this._internalRoot=r}Lu.prototype.render=Ed.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Du(r,s,null,null)},Lu.prototype.unmount=Ed.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;rs(function(){Du(null,r,null,null)}),s[wr]=null}};function Lu(r){this._internalRoot=r}Lu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ll();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Wn.length&&s!==0&&s<Wn[a].priority;a++);Wn.splice(a,0,r),a===0&&Ml(r)}};function wd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Vu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function vg(){}function gT(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var B=Ou(v);g.call(B)}}var v=gg(s,c,r,0,null,!1,!1,"",vg);return r._reactRootContainer=v,r[wr]=v.current,va(r.nodeType===8?r.parentNode:r),rs(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var B=Ou(P);S.call(B)}}var P=_d(r,0,!1,null,null,!1,!1,"",vg);return r._reactRootContainer=P,r[wr]=P.current,va(r.nodeType===8?r.parentNode:r),rs(function(){Du(s,P,a,c)}),P}function bu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var S=d;d=function(){var P=Ou(v);S.call(P)}}Du(s,v,r,d)}else v=gT(a,s,r,d,c);return Ou(v)}Dl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=qr(s.pendingLanes);a!==0&&(Qr(s,a|1),en(s,He()),(Ve&6)===0&&(yo=He()+500,ii()))}break;case 13:rs(function(){var c=Rr(r,1);if(c!==null){var d=qt();Fn(c,r,1,d)}}),vd(r,1)}},Bs=function(r){if(r.tag===13){var s=Rr(r,134217728);if(s!==null){var a=qt();Fn(s,r,134217728,a)}vd(r,134217728)}},Ol=function(r){if(r.tag===13){var s=ci(r),a=Rr(r,s);if(a!==null){var c=qt();Fn(a,r,s,c)}vd(r,s)}},Ll=function(){return xe},Vl=function(r,s){var a=xe;try{return xe=r,s()}finally{xe=a}},Ds=function(r,s,a){switch(s){case"input":if(Ho(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=Zl(c);if(!d)throw Error(t(90));As(c),Ho(c,d)}}}break;case"textarea":Ns(r,a);break;case"select":s=a.value,s!=null&&fr(r,!!a.multiple,s,!1)}},Mi=dd,ea=rs;var yT={usingClientEntryPoint:!1,Events:[Ta,ro,Zl,$n,Zo,dd]},ba={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_T={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ra(r),r===null?null:r.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||mT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{zi=Mu.inject(_T),rn=Mu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yT,tn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(s))throw Error(t(200));return pT(r,s,null,a)},tn.createRoot=function(r,s){if(!wd(r))throw Error(t(299));var a=!1,c="",d=_g;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=_d(r,1,!1,null,null,a,!1,c,d),r[wr]=s.current,va(r.nodeType===8?r.parentNode:r),new Ed(s)},tn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ra(s),r=r===null?null:r.stateNode,r},tn.flushSync=function(r){return rs(r)},tn.hydrate=function(r,s,a){if(!Vu(s))throw Error(t(200));return bu(null,r,s,!0,a)},tn.hydrateRoot=function(r,s,a){if(!wd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=_g;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=gg(s,null,r,1,a??null,d,!1,g,v),r[wr]=s.current,va(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Lu(s)},tn.render=function(r,s,a){if(!Vu(s))throw Error(t(200));return bu(null,r,s,!1,a)},tn.unmountComponentAtNode=function(r){if(!Vu(r))throw Error(t(40));return r._reactRootContainer?(rs(function(){bu(null,null,r,!1,function(){r._reactRootContainer=null,r[wr]=null})}),!0):!1},tn.unstable_batchedUpdates=dd,tn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Vu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return bu(r,s,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var Cg;function CT(){if(Cg)return Sd.exports;Cg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Sd.exports=AT(),Sd.exports}var Pg;function PT(){if(Pg)return Uu;Pg=1;var n=CT();return Uu.createRoot=n.createRoot,Uu.hydrateRoot=n.hydrateRoot,Uu}var kT=PT();const NT=h_(kT);var Ua={},kg;function xT(){if(kg)return Ua;kg=1,Object.defineProperty(Ua,"__esModule",{value:!0}),Ua.parse=h,Ua.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const R=function(){};return R.prototype=Object.create(null),R})();function h(R,O){const L=new l,z=R.length;if(z<2)return L;const b=(O==null?void 0:O.decode)||E;let H=0;do{const Z=R.indexOf("=",H);if(Z===-1)break;const G=R.indexOf(";",H),re=G===-1?z:G;if(Z>re){H=R.lastIndexOf(";",Z-1)+1;continue}const Ie=f(R,H,Z),ve=p(R,Z,Ie),N=R.slice(Ie,ve);if(L[N]===void 0){let I=f(R,Z+1,re),A=p(R,re,I);const k=b(R.slice(I,A));L[N]=k}H=re+1}while(H<z);return L}function f(R,O,L){do{const z=R.charCodeAt(O);if(z!==32&&z!==9)return O}while(++O<L);return L}function p(R,O,L){for(;O>L;){const z=R.charCodeAt(--O);if(z!==32&&z!==9)return O+1}return L}function y(R,O,L){const z=(L==null?void 0:L.encode)||encodeURIComponent;if(!n.test(R))throw new TypeError(`argument name is invalid: ${R}`);const b=z(O);if(!e.test(b))throw new TypeError(`argument val is invalid: ${O}`);let H=R+"="+b;if(!L)return H;if(L.maxAge!==void 0){if(!Number.isInteger(L.maxAge))throw new TypeError(`option maxAge is invalid: ${L.maxAge}`);H+="; Max-Age="+L.maxAge}if(L.domain){if(!t.test(L.domain))throw new TypeError(`option domain is invalid: ${L.domain}`);H+="; Domain="+L.domain}if(L.path){if(!i.test(L.path))throw new TypeError(`option path is invalid: ${L.path}`);H+="; Path="+L.path}if(L.expires){if(!T(L.expires)||!Number.isFinite(L.expires.valueOf()))throw new TypeError(`option expires is invalid: ${L.expires}`);H+="; Expires="+L.expires.toUTCString()}if(L.httpOnly&&(H+="; HttpOnly"),L.secure&&(H+="; Secure"),L.partitioned&&(H+="; Partitioned"),L.priority)switch(typeof L.priority=="string"?L.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${L.priority}`)}if(L.sameSite)switch(typeof L.sameSite=="string"?L.sameSite.toLowerCase():L.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${L.sameSite}`)}return H}function E(R){if(R.indexOf("%")===-1)return R;try{return decodeURIComponent(R)}catch{return R}}function T(R){return o.call(R)==="[object Date]"}return Ua}xT();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ng="popstate";function DT(n={}){function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return zd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:el(o)}return LT(e,t,null,n)}function Ze(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function or(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OT(){return Math.random().toString(36).substring(2,10)}function xg(n,e){return{usr:n.state,key:n.key,idx:e}}function zd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?bo(e):e,state:t,key:e&&e.key||i||OT()}}function el({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function bo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function LT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f="POP",p=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function T(){f="POP";let b=E(),H=b==null?null:b-y;y=b,p&&p({action:f,location:z.location,delta:H})}function R(b,H){f="PUSH";let Z=zd(z.location,b,H);y=E()+1;let G=xg(Z,y),re=z.createHref(Z);try{h.pushState(G,"",re)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(re)}l&&p&&p({action:f,location:z.location,delta:1})}function O(b,H){f="REPLACE";let Z=zd(z.location,b,H);y=E();let G=xg(Z,y),re=z.createHref(Z);h.replaceState(G,"",re),l&&p&&p({action:f,location:z.location,delta:0})}function L(b){let H=o.location.origin!=="null"?o.location.origin:o.location.href,Z=typeof b=="string"?b:el(b);return Z=Z.replace(/ $/,"%20"),Ze(H,`No window.location.(origin|href) available to create URL for href: ${Z}`),new URL(Z,H)}let z={get action(){return f},get location(){return n(o,h)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Ng,T),p=b,()=>{o.removeEventListener(Ng,T),p=null}},createHref(b){return e(o,b)},createURL:L,encodeLocation(b){let H=L(b);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:R,replace:O,go(b){return h.go(b)}};return z}function d_(n,e,t="/"){return VT(n,e,t,!1)}function VT(n,e,t,i){let o=typeof e=="string"?bo(e):e,l=br(o.pathname||"/",t);if(l==null)return null;let h=f_(n);bT(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=KT(l);f=WT(h[p],y,i)}return f}function f_(n,e=[],t=[],i=""){let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Ze(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Dr([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(Ze(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),f_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:$T(y,l.index),routesMeta:E})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of p_(l.path))o(l,h,p)}),e}function p_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=p_(i.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function bT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:HT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var MT=/^:[\w-]+$/,UT=3,FT=2,jT=1,BT=10,zT=-2,Dg=n=>n==="*";function $T(n,e){let t=n.split("/"),i=t.length;return t.some(Dg)&&(i+=zT),e&&(i+=FT),t.filter(o=>!Dg(o)).reduce((o,l)=>o+(MT.test(l)?UT:l===""?jT:BT),i)}function HT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function WT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=oc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),R=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=oc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Dr([l,T.pathname]),pathnameBase:YT(Dr([l,T.pathnameBase])),route:R}),T.pathnameBase!=="/"&&(l=Dr([l,T.pathnameBase]))}return h}function oc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=qT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:T},R)=>{if(E==="*"){let L=f[R]||"";h=l.slice(0,l.length-L.length).replace(/(.)\/+$/,"$1")}const O=f[R];return T&&!O?y[E]=void 0:y[E]=(O||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function qT(n,e=!1,t=!0){or(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function KT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return or(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function br(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function GT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?bo(n):n;return{pathname:t?t.startsWith("/")?t:QT(t,e):e,search:JT(i),hash:ZT(o)}}function QT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Cd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function XT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function m_(n){let e=XT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function g_(n,e,t,i=!1){let o;typeof n=="string"?o=bo(n):(o={...n},Ze(!o.pathname||!o.pathname.includes("?"),Cd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),Cd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),Cd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),T-=1;o.pathname=R.join("/")}f=T>=0?e[T]:"/"}let p=GT(o,f),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Dr=n=>n.join("/").replace(/\/\/+/g,"/"),YT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),JT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,ZT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function e0(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var y_=["POST","PUT","PATCH","DELETE"];new Set(y_);var t0=["GET",...y_];new Set(t0);var Mo=W.createContext(null);Mo.displayName="DataRouter";var Ac=W.createContext(null);Ac.displayName="DataRouterState";var __=W.createContext({isTransitioning:!1});__.displayName="ViewTransition";var n0=W.createContext(new Map);n0.displayName="Fetchers";var r0=W.createContext(null);r0.displayName="Await";var ur=W.createContext(null);ur.displayName="Navigation";var cl=W.createContext(null);cl.displayName="Location";var Br=W.createContext({outlet:null,matches:[],isDataRoute:!1});Br.displayName="Route";var _f=W.createContext(null);_f.displayName="RouteError";function i0(n,{relative:e}={}){Ze(hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=W.useContext(ur),{hash:o,pathname:l,search:h}=dl(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Dr([t,l])),i.createHref({pathname:f,search:h,hash:o})}function hl(){return W.useContext(cl)!=null}function vs(){return Ze(hl(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(cl).location}var v_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E_(n){W.useContext(ur).static||W.useLayoutEffect(n)}function Cc(){let{isDataRoute:n}=W.useContext(Br);return n?y0():s0()}function s0(){Ze(hl(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Mo),{basename:e,navigator:t}=W.useContext(ur),{matches:i}=W.useContext(Br),{pathname:o}=vs(),l=JSON.stringify(m_(i)),h=W.useRef(!1);return E_(()=>{h.current=!0}),W.useCallback((p,y={})=>{if(or(h.current,v_),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=g_(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Dr([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}W.createContext(null);function dl(n,{relative:e}={}){let{matches:t}=W.useContext(Br),{pathname:i}=vs(),o=JSON.stringify(m_(t));return W.useMemo(()=>g_(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function o0(n,e){return w_(n,e)}function w_(n,e,t,i){var Z;Ze(hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=W.useContext(ur),{matches:h}=W.useContext(Br),f=h[h.length-1],p=f?f.params:{},y=f?f.pathname:"/",E=f?f.pathnameBase:"/",T=f&&f.route;{let G=T&&T.path||"";T_(y,!T||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let R=vs(),O;if(e){let G=typeof e=="string"?bo(e):e;Ze(E==="/"||((Z=G.pathname)==null?void 0:Z.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${G.pathname}" was given in the \`location\` prop.`),O=G}else O=R;let L=O.pathname||"/",z=L;if(E!=="/"){let G=E.replace(/^\//,"").split("/");z="/"+L.replace(/^\//,"").split("/").slice(G.length).join("/")}let b=!l&&t&&t.matches&&t.matches.length>0?t.matches:d_(n,{pathname:z});or(T||b!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),or(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=h0(b&&b.map(G=>Object.assign({},G,{params:Object.assign({},p,G.params),pathname:Dr([E,o.encodeLocation?o.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?E:Dr([E,o.encodeLocation?o.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),h,t,i);return e&&H?W.createElement(cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},H):H}function a0(){let n=g0(),e=e0(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:l},"ErrorBoundary")," or"," ",W.createElement("code",{style:l},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,h)}var l0=W.createElement(a0,null),u0=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(Br.Provider,{value:this.props.routeContext},W.createElement(_f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function c0({routeContext:n,match:e,children:t}){let i=W.useContext(Mo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(Br.Provider,{value:n},t)}function h0(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,f=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=p),y.route.id){let{loaderData:E,errors:T}=t,R=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||R){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,R=!1,O=null,L=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,O=y.route.errorElement||l0,h&&(f<0&&E===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,L=null):f===E&&(R=!0,L=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,E+1)),b=()=>{let H;return T?H=O:R?H=L:y.route.Component?H=W.createElement(y.route.Component,null):y.route.element?H=y.route.element:H=p,W.createElement(c0,{match:y,routeContext:{outlet:p,matches:z,isDataRoute:t!=null},children:H})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?W.createElement(u0,{location:t.location,revalidation:t.revalidation,component:O,error:T,children:b(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):b()},null)}function vf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d0(n){let e=W.useContext(Mo);return Ze(e,vf(n)),e}function f0(n){let e=W.useContext(Ac);return Ze(e,vf(n)),e}function p0(n){let e=W.useContext(Br);return Ze(e,vf(n)),e}function Ef(n){let e=p0(n),t=e.matches[e.matches.length-1];return Ze(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function m0(){return Ef("useRouteId")}function g0(){var i;let n=W.useContext(_f),e=f0("useRouteError"),t=Ef("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function y0(){let{router:n}=d0("useNavigate"),e=Ef("useNavigate"),t=W.useRef(!1);return E_(()=>{t.current=!0}),W.useCallback(async(o,l={})=>{or(t.current,v_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Og={};function T_(n,e,t){!e&&!Og[n]&&(Og[n]=!0,or(!1,t))}W.memo(_0);function _0({routes:n,future:e,state:t}){return w_(n,void 0,t,e)}function Ba(n){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function v0({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Ze(!hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),f=W.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=bo(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:R="default"}=t,O=W.useMemo(()=>{let L=br(p,h);return L==null?null:{location:{pathname:L,search:y,hash:E,state:T,key:R},navigationType:i}},[h,p,y,E,T,R,i]);return or(O!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:W.createElement(ur.Provider,{value:f},W.createElement(cl.Provider,{children:e,value:O}))}function E0({children:n,location:e}){return o0($d(n),e)}function $d(n,e=[]){let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,$d(i.props.children,l));return}Ze(i.type===Ba,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=$d(i.props.children,l)),t.push(h)}),t}var Gu="get",Qu="application/x-www-form-urlencoded";function Pc(n){return n!=null&&typeof n.tagName=="string"}function w0(n){return Pc(n)&&n.tagName.toLowerCase()==="button"}function T0(n){return Pc(n)&&n.tagName.toLowerCase()==="form"}function I0(n){return Pc(n)&&n.tagName.toLowerCase()==="input"}function S0(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function R0(n,e){return n.button===0&&(!e||e==="_self")&&!S0(n)}var Fu=null;function A0(){if(Fu===null)try{new FormData(document.createElement("form"),0),Fu=!1}catch{Fu=!0}return Fu}var C0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pd(n){return n!=null&&!C0.has(n)?(or(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qu}"`),null):n}function P0(n,e){let t,i,o,l,h;if(T0(n)){let f=n.getAttribute("action");i=f?br(f,e):null,t=n.getAttribute("method")||Gu,o=Pd(n.getAttribute("enctype"))||Qu,l=new FormData(n)}else if(w0(n)||I0(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||f.getAttribute("action");if(i=p?br(p,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||Gu,o=Pd(n.getAttribute("formenctype"))||Pd(f.getAttribute("enctype"))||Qu,l=new FormData(f,n),!A0()){let{name:y,type:E,value:T}=n;if(E==="image"){let R=y?`${y}.`:"";l.append(`${R}x`,"0"),l.append(`${R}y`,"0")}else y&&l.append(y,T)}}else{if(Pc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Gu,i=null,o=Qu,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function wf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function k0(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function N0(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function x0(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await k0(l,t);return h.links?h.links():[]}return[]}));return V0(i.flat(1).filter(N0).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Lg(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var T;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let R=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function D0(n,e,{includeHydrateFallback:t}={}){return O0(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function O0(n){return[...new Set(n)]}function L0(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function V0(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(L0(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function b0(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&br(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function I_(){let n=W.useContext(Mo);return wf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function M0(){let n=W.useContext(Ac);return wf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Tf=W.createContext(void 0);Tf.displayName="FrameworkContext";function S_(){let n=W.useContext(Tf);return wf(n,"You must render this element inside a <HydratedRouter> element"),n}function U0(n,e){let t=W.useContext(Tf),[i,o]=W.useState(!1),[l,h]=W.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,R=W.useRef(null);W.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let z=H=>{H.forEach(Z=>{h(Z.isIntersecting)})},b=new IntersectionObserver(z,{threshold:.5});return R.current&&b.observe(R.current),()=>{b.disconnect()}}},[n]),W.useEffect(()=>{if(i){let z=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(z)}}},[i]);let O=()=>{o(!0)},L=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,R,{}]:[l,R,{onFocus:Fa(f,O),onBlur:Fa(p,L),onMouseEnter:Fa(y,O),onMouseLeave:Fa(E,L),onTouchStart:Fa(T,O)}]:[!1,R,{}]}function Fa(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function F0({page:n,...e}){let{router:t}=I_(),i=W.useMemo(()=>d_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?W.createElement(B0,{page:n,matches:i,...e}):null}function j0(n){let{manifest:e,routeModules:t}=S_(),[i,o]=W.useState([]);return W.useEffect(()=>{let l=!1;return x0(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function B0({page:n,matches:e,...t}){let i=vs(),{manifest:o,routeModules:l}=S_(),{basename:h}=I_(),{loaderData:f,matches:p}=M0(),y=W.useMemo(()=>Lg(n,e,p,o,i,"data"),[n,e,p,o,i]),E=W.useMemo(()=>Lg(n,e,p,o,i,"assets"),[n,e,p,o,i]),T=W.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let L=new Set,z=!1;if(e.forEach(H=>{var G;let Z=o.routes[H.route.id];!Z||!Z.hasLoader||(!y.some(re=>re.route.id===H.route.id)&&H.route.id in f&&((G=l[H.route.id])!=null&&G.shouldRevalidate)||Z.hasClientLoader?z=!0:L.add(H.route.id))}),L.size===0)return[];let b=b0(n,h);return z&&L.size>0&&b.searchParams.set("_routes",e.filter(H=>L.has(H.route.id)).map(H=>H.route.id).join(",")),[b.pathname+b.search]},[h,f,i,o,y,e,n,l]),R=W.useMemo(()=>D0(E,o),[E,o]),O=j0(E);return W.createElement(W.Fragment,null,T.map(L=>W.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...t})),R.map(L=>W.createElement("link",{key:L,rel:"modulepreload",href:L,...t})),O.map(({key:L,link:z})=>W.createElement("link",{key:L,...z})))}function z0(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var R_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R_&&(window.__reactRouterVersion="7.4.1")}catch{}function $0({basename:n,children:e,window:t}){let i=W.useRef();i.current==null&&(i.current=DT({window:t,v5Compat:!0}));let o=i.current,[l,h]=W.useState({action:o.action,location:o.location}),f=W.useCallback(p=>{W.startTransition(()=>h(p))},[h]);return W.useLayoutEffect(()=>o.listen(f),[o,f]),W.createElement(v0,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var A_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ls=W.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:E,viewTransition:T,...R},O){let{basename:L}=W.useContext(ur),z=typeof y=="string"&&A_.test(y),b,H=!1;if(typeof y=="string"&&z&&(b=y,R_))try{let A=new URL(window.location.href),k=y.startsWith("//")?new URL(A.protocol+y):new URL(y),D=br(k.pathname,L);k.origin===A.origin&&D!=null?y=D+k.search+k.hash:H=!0}catch{or(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=i0(y,{relative:o}),[G,re,Ie]=U0(i,R),ve=K0(y,{replace:h,state:f,target:p,preventScrollReset:E,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||ve(A)}let I=W.createElement("a",{...R,...Ie,href:b||Z,onClick:H||l?e:N,ref:z0(O,re),target:p,"data-discover":!z&&t==="render"?"true":void 0});return G&&!z?W.createElement(W.Fragment,null,I,W.createElement(F0,{page:Z})):I});ls.displayName="Link";var H0=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:f,children:p,...y},E){let T=dl(h,{relative:y.relative}),R=vs(),O=W.useContext(Ac),{navigator:L,basename:z}=W.useContext(ur),b=O!=null&&J0(T)&&f===!0,H=L.encodeLocation?L.encodeLocation(T).pathname:T.pathname,Z=R.pathname,G=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),G=G?G.toLowerCase():null,H=H.toLowerCase()),G&&z&&(G=br(G,z)||G);const re=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Ie=Z===H||!o&&Z.startsWith(H)&&Z.charAt(re)==="/",ve=G!=null&&(G===H||!o&&G.startsWith(H)&&G.charAt(H.length)==="/"),N={isActive:Ie,isPending:ve,isTransitioning:b},I=Ie?e:void 0,A;typeof i=="function"?A=i(N):A=[i,Ie?"active":null,ve?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return W.createElement(ls,{...y,"aria-current":I,className:A,ref:E,style:k,to:h,viewTransition:f},typeof p=="function"?p(N):p)});H0.displayName="NavLink";var W0=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=Gu,action:f,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...R},O)=>{let L=X0(),z=Y0(f,{relative:y}),b=h.toLowerCase()==="get"?"get":"post",H=typeof f=="string"&&A_.test(f),Z=G=>{if(p&&p(G),G.defaultPrevented)return;G.preventDefault();let re=G.nativeEvent.submitter,Ie=(re==null?void 0:re.getAttribute("formmethod"))||h;L(re||G.currentTarget,{fetcherKey:e,method:Ie,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:T})};return W.createElement("form",{ref:O,method:b,action:z,onSubmit:i?p:Z,...R,"data-discover":!H&&n==="render"?"true":void 0})});W0.displayName="Form";function q0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function C_(n){let e=W.useContext(Mo);return Ze(e,q0(n)),e}function K0(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=Cc(),p=vs(),y=dl(n,{relative:l});return W.useCallback(E=>{if(R0(E,e)){E.preventDefault();let T=t!==void 0?t:el(p)===el(y);f(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,f,y,t,i,e,n,o,l,h])}var G0=0,Q0=()=>`__${String(++G0)}__`;function X0(){let{router:n}=C_("useSubmit"),{basename:e}=W.useContext(ur),t=m0();return W.useCallback(async(i,o={})=>{let{action:l,method:h,encType:f,formData:p,body:y}=P0(i,e);if(o.navigate===!1){let E=o.fetcherKey||Q0();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function Y0(n,{relative:e}={}){let{basename:t}=W.useContext(ur),i=W.useContext(Br);Ze(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...dl(n||".",{relative:e})},h=vs();if(n==null){l.search=h.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(E=>E==="")){f.delete("index"),p.filter(T=>T).forEach(T=>f.append("index",T));let E=f.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Dr([t,l.pathname])),el(l)}function J0(n,e={}){let t=W.useContext(__);Ze(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=C_("useViewTransitionState"),o=dl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=br(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=br(t.nextLocation.pathname,i)||t.nextLocation.pathname;return oc(o.pathname,h)!=null||oc(o.pathname,l)!=null}new TextEncoder;const Z0=()=>{};var Vg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},eI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},k_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let R=(f&15)<<2|y>>6,O=y&63;p||(O=64,h||(R=64)),i.push(t[E],t[T],t[R],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(P_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new tI;const R=l<<2|f>>4;if(i.push(R),y!==64){const O=f<<4&240|y>>2;if(i.push(O),T!==64){const L=y<<6&192|T;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(n){const e=P_(n);return k_.encodeByteArray(e,!0)},ac=function(n){return nI(n).replace(/\./g,"")},N_=function(n){try{return k_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=()=>rI().__FIREBASE_DEFAULTS__,sI=()=>{if(typeof process>"u"||typeof Vg>"u")return;const n=Vg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},oI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&N_(n[1]);return e&&JSON.parse(e)},kc=()=>{try{return Z0()||iI()||sI()||oI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},x_=n=>{var e,t;return(t=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},D_=n=>{const e=x_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},O_=()=>{var n;return(n=kc())===null||n===void 0?void 0:n.config},L_=n=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ac(JSON.stringify(t)),ac(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function uI(){var n;const e=(n=kc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fI(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pI(){return!uI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mI(){try{return typeof indexedDB=="object"}catch{return!1}}function gI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="FirebaseError";class cr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=yI,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?_I(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new cr(o,f,i)}}function _I(n,e){return n.replace(vI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const vI=/\{\$([^}]+)}/g;function EI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hs(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(bg(l)&&bg(h)){if(!hs(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function bg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function $a(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wI(n,e){const t=new TI(n,e);return t.subscribe.bind(t)}class TI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");II(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=kd),o.error===void 0&&(o.error=kd),o.complete===void 0&&(o.complete=kd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function II(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function kd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n){return n&&n._delegate?n._delegate:n}class Ri{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new aI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AI(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(n){return n===as?void 0:n}function AI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new SI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const PI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},kI=ke.INFO,NI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},xI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=NI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class If{constructor(e){this.name=e,this._logLevel=kI,this._logHandler=xI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const DI=(n,e)=>e.some(t=>n instanceof t);let Mg,Ug;function OI(){return Mg||(Mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LI(){return Ug||(Ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b_=new WeakMap,Hd=new WeakMap,M_=new WeakMap,Nd=new WeakMap,Sf=new WeakMap;function VI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(wi(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&b_.set(t,n)}).catch(()=>{}),Sf.set(e,n),e}function bI(n){if(Hd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Hd.set(n,e)}let Wd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||M_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function MI(n){Wd=n(Wd)}function UI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(xd(this),e,...t);return M_.set(i,e.sort?e.sort():[e]),wi(i)}:LI().includes(n)?function(...e){return n.apply(xd(this),e),wi(b_.get(this))}:function(...e){return wi(n.apply(xd(this),e))}}function FI(n){return typeof n=="function"?UI(n):(n instanceof IDBTransaction&&bI(n),DI(n,OI())?new Proxy(n,Wd):n)}function wi(n){if(n instanceof IDBRequest)return VI(n);if(Nd.has(n))return Nd.get(n);const e=FI(n);return e!==n&&(Nd.set(n,e),Sf.set(e,n)),e}const xd=n=>Sf.get(n);function jI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=wi(h);return i&&h.addEventListener("upgradeneeded",p=>{i(wi(h.result),p.oldVersion,p.newVersion,wi(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const BI=["get","getKey","getAll","getAllKeys","count"],zI=["put","add","delete","clear"],Dd=new Map;function Fg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=zI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||BI.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return Dd.set(e,l),l}MI(n=>({...n,get:(e,t,i)=>Fg(e,t)||n.get(e,t,i),has:(e,t)=>!!Fg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(HI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function HI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qd="@firebase/app",jg="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new If("@firebase/app"),WI="@firebase/app-compat",qI="@firebase/analytics-compat",KI="@firebase/analytics",GI="@firebase/app-check-compat",QI="@firebase/app-check",XI="@firebase/auth",YI="@firebase/auth-compat",JI="@firebase/database",ZI="@firebase/data-connect",eS="@firebase/database-compat",tS="@firebase/functions",nS="@firebase/functions-compat",rS="@firebase/installations",iS="@firebase/installations-compat",sS="@firebase/messaging",oS="@firebase/messaging-compat",aS="@firebase/performance",lS="@firebase/performance-compat",uS="@firebase/remote-config",cS="@firebase/remote-config-compat",hS="@firebase/storage",dS="@firebase/storage-compat",fS="@firebase/firestore",pS="@firebase/vertexai",mS="@firebase/firestore-compat",gS="firebase",yS="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="[DEFAULT]",_S={[qd]:"fire-core",[WI]:"fire-core-compat",[KI]:"fire-analytics",[qI]:"fire-analytics-compat",[QI]:"fire-app-check",[GI]:"fire-app-check-compat",[XI]:"fire-auth",[YI]:"fire-auth-compat",[JI]:"fire-rtdb",[ZI]:"fire-data-connect",[eS]:"fire-rtdb-compat",[tS]:"fire-fn",[nS]:"fire-fn-compat",[rS]:"fire-iid",[iS]:"fire-iid-compat",[sS]:"fire-fcm",[oS]:"fire-fcm-compat",[aS]:"fire-perf",[lS]:"fire-perf-compat",[uS]:"fire-rc",[cS]:"fire-rc-compat",[hS]:"fire-gcs",[dS]:"fire-gcs-compat",[fS]:"fire-fst",[mS]:"fire-fst-compat",[pS]:"fire-vertex","fire-js":"fire-js",[gS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map,vS=new Map,Gd=new Map;function Bg(n,e){try{n.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ds(n){const e=n.name;if(Gd.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Gd.set(e,n);for(const t of lc.values())Bg(t,n);for(const t of vS.values())Bg(t,n);return!0}function Nc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function hn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ti=new fl("app","Firebase",ES);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=yS;function U_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Kd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ti.create("bad-app-name",{appName:String(o)});if(t||(t=O_()),!t)throw Ti.create("no-options");const l=lc.get(o);if(l){if(hs(t,l.options)&&hs(i,l.config))return l;throw Ti.create("duplicate-app",{appName:o})}const h=new CI(o);for(const p of Gd.values())h.addComponent(p);const f=new wS(t,i,h);return lc.set(o,f),f}function Rf(n=Kd){const e=lc.get(n);if(!e&&n===Kd&&O_())return U_();if(!e)throw Ti.create("no-app",{appName:n});return e}function tr(n,e,t){var i;let o=(i=_S[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(f.join(" "));return}ds(new Ri(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="firebase-heartbeat-database",IS=1,tl="firebase-heartbeat-store";let Od=null;function F_(){return Od||(Od=jI(TS,IS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ti.create("idb-open",{originalErrorMessage:n.message})})),Od}async function SS(n){try{const t=(await F_()).transaction(tl),i=await t.objectStore(tl).get(j_(n));return await t.done,i}catch(e){if(e instanceof cr)Mr.warn(e.message);else{const t=Ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function zg(n,e){try{const i=(await F_()).transaction(tl,"readwrite");await i.objectStore(tl).put(e,j_(n)),await i.done}catch(t){if(t instanceof cr)Mr.warn(t.message);else{const i=Ti.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(i.message)}}}function j_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=1024,AS=30;class CS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=$g();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>AS){const h=NS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Mr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$g(),{heartbeatsToSend:i,unsentEntries:o}=PS(this._heartbeatsCache.heartbeats),l=ac(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function $g(){return new Date().toISOString().substring(0,10)}function PS(n,e=RS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Hg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Hg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class kS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mI()?gI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await SS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return zg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return zg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Hg(n){return ac(JSON.stringify({version:2,heartbeats:n})).length}function NS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(n){ds(new Ri("platform-logger",e=>new $I(e),"PRIVATE")),ds(new Ri("heartbeat",e=>new CS(e),"PRIVATE")),tr(qd,jg,n),tr(qd,jg,"esm2017"),tr("fire-js","")}xS("");var Wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ii,B_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,D,M){for(var C=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)C[nt-2]=arguments[nt];return I.prototype[D].apply(k,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var k=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)k[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)k[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],D=N.g[2];var M=N.g[3],C=I+(M^A&(D^M))+k[0]+3614090360&4294967295;I=A+(C<<7&4294967295|C>>>25),C=M+(D^I&(A^D))+k[1]+3905402710&4294967295,M=I+(C<<12&4294967295|C>>>20),C=D+(A^M&(I^A))+k[2]+606105819&4294967295,D=M+(C<<17&4294967295|C>>>15),C=A+(I^D&(M^I))+k[3]+3250441966&4294967295,A=D+(C<<22&4294967295|C>>>10),C=I+(M^A&(D^M))+k[4]+4118548399&4294967295,I=A+(C<<7&4294967295|C>>>25),C=M+(D^I&(A^D))+k[5]+1200080426&4294967295,M=I+(C<<12&4294967295|C>>>20),C=D+(A^M&(I^A))+k[6]+2821735955&4294967295,D=M+(C<<17&4294967295|C>>>15),C=A+(I^D&(M^I))+k[7]+4249261313&4294967295,A=D+(C<<22&4294967295|C>>>10),C=I+(M^A&(D^M))+k[8]+1770035416&4294967295,I=A+(C<<7&4294967295|C>>>25),C=M+(D^I&(A^D))+k[9]+2336552879&4294967295,M=I+(C<<12&4294967295|C>>>20),C=D+(A^M&(I^A))+k[10]+4294925233&4294967295,D=M+(C<<17&4294967295|C>>>15),C=A+(I^D&(M^I))+k[11]+2304563134&4294967295,A=D+(C<<22&4294967295|C>>>10),C=I+(M^A&(D^M))+k[12]+1804603682&4294967295,I=A+(C<<7&4294967295|C>>>25),C=M+(D^I&(A^D))+k[13]+4254626195&4294967295,M=I+(C<<12&4294967295|C>>>20),C=D+(A^M&(I^A))+k[14]+2792965006&4294967295,D=M+(C<<17&4294967295|C>>>15),C=A+(I^D&(M^I))+k[15]+1236535329&4294967295,A=D+(C<<22&4294967295|C>>>10),C=I+(D^M&(A^D))+k[1]+4129170786&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^D&(I^A))+k[6]+3225465664&4294967295,M=I+(C<<9&4294967295|C>>>23),C=D+(I^A&(M^I))+k[11]+643717713&4294967295,D=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(D^M))+k[0]+3921069994&4294967295,A=D+(C<<20&4294967295|C>>>12),C=I+(D^M&(A^D))+k[5]+3593408605&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^D&(I^A))+k[10]+38016083&4294967295,M=I+(C<<9&4294967295|C>>>23),C=D+(I^A&(M^I))+k[15]+3634488961&4294967295,D=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(D^M))+k[4]+3889429448&4294967295,A=D+(C<<20&4294967295|C>>>12),C=I+(D^M&(A^D))+k[9]+568446438&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^D&(I^A))+k[14]+3275163606&4294967295,M=I+(C<<9&4294967295|C>>>23),C=D+(I^A&(M^I))+k[3]+4107603335&4294967295,D=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(D^M))+k[8]+1163531501&4294967295,A=D+(C<<20&4294967295|C>>>12),C=I+(D^M&(A^D))+k[13]+2850285829&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^D&(I^A))+k[2]+4243563512&4294967295,M=I+(C<<9&4294967295|C>>>23),C=D+(I^A&(M^I))+k[7]+1735328473&4294967295,D=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(D^M))+k[12]+2368359562&4294967295,A=D+(C<<20&4294967295|C>>>12),C=I+(A^D^M)+k[5]+4294588738&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^D)+k[8]+2272392833&4294967295,M=I+(C<<11&4294967295|C>>>21),C=D+(M^I^A)+k[11]+1839030562&4294967295,D=M+(C<<16&4294967295|C>>>16),C=A+(D^M^I)+k[14]+4259657740&4294967295,A=D+(C<<23&4294967295|C>>>9),C=I+(A^D^M)+k[1]+2763975236&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^D)+k[4]+1272893353&4294967295,M=I+(C<<11&4294967295|C>>>21),C=D+(M^I^A)+k[7]+4139469664&4294967295,D=M+(C<<16&4294967295|C>>>16),C=A+(D^M^I)+k[10]+3200236656&4294967295,A=D+(C<<23&4294967295|C>>>9),C=I+(A^D^M)+k[13]+681279174&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^D)+k[0]+3936430074&4294967295,M=I+(C<<11&4294967295|C>>>21),C=D+(M^I^A)+k[3]+3572445317&4294967295,D=M+(C<<16&4294967295|C>>>16),C=A+(D^M^I)+k[6]+76029189&4294967295,A=D+(C<<23&4294967295|C>>>9),C=I+(A^D^M)+k[9]+3654602809&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^D)+k[12]+3873151461&4294967295,M=I+(C<<11&4294967295|C>>>21),C=D+(M^I^A)+k[15]+530742520&4294967295,D=M+(C<<16&4294967295|C>>>16),C=A+(D^M^I)+k[2]+3299628645&4294967295,A=D+(C<<23&4294967295|C>>>9),C=I+(D^(A|~M))+k[0]+4096336452&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~D))+k[7]+1126891415&4294967295,M=I+(C<<10&4294967295|C>>>22),C=D+(I^(M|~A))+k[14]+2878612391&4294967295,D=M+(C<<15&4294967295|C>>>17),C=A+(M^(D|~I))+k[5]+4237533241&4294967295,A=D+(C<<21&4294967295|C>>>11),C=I+(D^(A|~M))+k[12]+1700485571&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~D))+k[3]+2399980690&4294967295,M=I+(C<<10&4294967295|C>>>22),C=D+(I^(M|~A))+k[10]+4293915773&4294967295,D=M+(C<<15&4294967295|C>>>17),C=A+(M^(D|~I))+k[1]+2240044497&4294967295,A=D+(C<<21&4294967295|C>>>11),C=I+(D^(A|~M))+k[8]+1873313359&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~D))+k[15]+4264355552&4294967295,M=I+(C<<10&4294967295|C>>>22),C=D+(I^(M|~A))+k[6]+2734768916&4294967295,D=M+(C<<15&4294967295|C>>>17),C=A+(M^(D|~I))+k[13]+1309151649&4294967295,A=D+(C<<21&4294967295|C>>>11),C=I+(D^(A|~M))+k[4]+4149444226&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~D))+k[11]+3174756917&4294967295,M=I+(C<<10&4294967295|C>>>22),C=D+(I^(M|~A))+k[2]+718787259&4294967295,D=M+(C<<15&4294967295|C>>>17),C=A+(M^(D|~I))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+M&4294967295}i.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,k=this.B,D=this.h,M=0;M<I;){if(D==0)for(;M<=A;)o(this,N,M),M+=this.blockSize;if(typeof N=="string"){for(;M<I;)if(k[D++]=N.charCodeAt(M++),D==this.blockSize){o(this,k),D=0;break}}else for(;M<I;)if(k[D++]=N[M++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=I},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var k=0;32>k;k+=8)N[A++]=this.g[I]>>>k&255;return N};function l(N,I){var A=f;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],k=!0,D=N.length-1;0<=D;D--){var M=N[D]|0;k&&M==I||(A[D]=M,k=!1)}this.g=A}var f={};function p(N){return-128<=N&&128>N?l(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return b(y(-N));for(var I=[],A=1,k=0;N>=A;k++)I[k]=N/A|0,A*=4294967296;return new h(I,0)}function E(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return b(E(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(I,8)),k=T,D=0;D<N.length;D+=8){var M=Math.min(8,N.length-D),C=parseInt(N.substring(D,D+M),I);8>M?(M=y(Math.pow(I,M)),k=k.j(M).add(y(C))):(k=k.j(A),k=k.add(y(C)))}return k}var T=p(0),R=p(1),O=p(16777216);n=h.prototype,n.m=function(){if(z(this))return-b(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*I,I*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(L(this))return"0";if(z(this))return"-"+b(this).toString(N);for(var I=y(Math.pow(N,6)),A=this,k="";;){var D=re(A,I).g;A=H(A,D.j(I));var M=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=D,L(A))return M+k;for(;6>M.length;)M="0"+M;k=M+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function L(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function z(N){return N.h==-1}n.l=function(N){return N=H(this,N),z(N)?-1:L(N)?0:1};function b(N){for(var I=N.g.length,A=[],k=0;k<I;k++)A[k]=~N.g[k];return new h(A,~N.h).add(R)}n.abs=function(){return z(this)?b(this):this},n.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0,D=0;D<=I;D++){var M=k+(this.i(D)&65535)+(N.i(D)&65535),C=(M>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);k=C>>>16,M&=65535,C&=65535,A[D]=C<<16|M}return new h(A,A[A.length-1]&-2147483648?-1:0)};function H(N,I){return N.add(b(I))}n.j=function(N){if(L(this)||L(N))return T;if(z(this))return z(N)?b(this).j(b(N)):b(b(this).j(N));if(z(N))return b(this.j(b(N)));if(0>this.l(O)&&0>N.l(O))return y(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<N.g.length;D++){var M=this.i(k)>>>16,C=this.i(k)&65535,nt=N.i(D)>>>16,Ot=N.i(D)&65535;A[2*k+2*D]+=C*Ot,Z(A,2*k+2*D),A[2*k+2*D+1]+=M*Ot,Z(A,2*k+2*D+1),A[2*k+2*D+1]+=C*nt,Z(A,2*k+2*D+1),A[2*k+2*D+2]+=M*nt,Z(A,2*k+2*D+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function Z(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function G(N,I){this.g=N,this.h=I}function re(N,I){if(L(I))throw Error("division by zero");if(L(N))return new G(T,T);if(z(N))return I=re(b(N),I),new G(b(I.g),b(I.h));if(z(I))return I=re(N,b(I)),new G(b(I.g),I.h);if(30<N.g.length){if(z(N)||z(I))throw Error("slowDivide_ only works with positive integers.");for(var A=R,k=I;0>=k.l(N);)A=Ie(A),k=Ie(k);var D=ve(A,1),M=ve(k,1);for(k=ve(k,2),A=ve(A,2);!L(k);){var C=M.add(k);0>=C.l(N)&&(D=D.add(A),M=C),k=ve(k,1),A=ve(A,1)}return I=H(N,D.j(I)),new G(D,I)}for(D=T;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),M=y(A),C=M.j(I);z(C)||0<C.l(N);)A-=k,M=y(A),C=M.j(I);L(M)&&(M=R),D=D.add(M),N=H(N,C)}return new G(D,N)}n.A=function(N){return re(this,N).h},n.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},n.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},n.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function Ie(N){for(var I=N.g.length+1,A=[],k=0;k<I;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function ve(N,I){var A=I>>5;I%=32;for(var k=N.g.length-A,D=[],M=0;M<k;M++)D[M]=0<I?N.i(M+A)>>>I|N.i(M+A+1)<<32-I:N.i(M+A);return new h(D,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,B_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,Ii=h}).apply(typeof Wg<"u"?Wg:typeof self<"u"?self:typeof window<"u"?window:{});var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z_,Ha,$_,Xu,Qd,H_,W_,q_;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ju=="object"&&ju];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var U=u[w];if(!(U in _))break e;_=_[U]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,U={next:function(){if(!w&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function R(u,m,_){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,R.apply(null,arguments)}function O(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function L(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,U,$){for(var te=Array(arguments.length-2),je=2;je<arguments.length;je++)te[je-2]=arguments[je];return m.prototype[U].apply(w,te)}}function z(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function b(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const U=u.length||0,$=w.length||0;u.length=U+$;for(let te=0;te<$;te++)u[U+te]=w[te]}else u.push(w)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Z(u){return/^[\s\xa0]*$/.test(u)}function G(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var Ie=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ve(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(_ in w)u[_]=w[_];for(let $=0;$<A.length;$++)_=A[$],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function D(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){f.setTimeout(()=>{throw u},0)}function C(){var u=pe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class nt{constructor(){this.h=this.g=null}add(m,_){const w=Ot.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Ot=new H(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ne=!1,pe=new nt,se=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var m=Ot;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ne=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u}();function Ce(u,m){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ie){e:{try{re(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}L(Ce,de);var De={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,m,_,w,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=U,this.key=++Ue,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function hr(u){this.src=u,this.g={},this.h=0}hr.prototype.add=function(u,m,_,w,U){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var te=$r(u,m,w,U);return-1<te?(m=u[te],_||(m.fa=!1)):(m=new $e(m,this.src,$,!!w,U),m.fa=_,u.push(m)),m};function As(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],U=Array.prototype.indexOf.call(w,m,void 0),$;($=0<=U)&&Array.prototype.splice.call(w,U,1),$&&(vt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function $r(u,m,_,w){for(var U=0;U<u.length;++U){var $=u[U];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==w)return U}return-1}var Oi="closure_lm_"+(1e6*Math.random()|0),Cs={};function $o(u,m,_,w,U){if(Array.isArray(m)){for(var $=0;$<m.length;$++)$o(u,m[$],_,w,U);return null}return _=qo(_),u&&u[Me]?u.K(m,_,y(w)?!!w.capture:!1,U):Ho(u,m,_,!1,w,U)}function Ho(u,m,_,w,U,$){if(!m)throw Error("Invalid event type");var te=y(U)?!!U.capture:!!U,je=ks(u);if(je||(u[Oi]=je=new hr(u)),_=je.add(m,_,w,te,$),_.proxy)return _;if(w=Il(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(U=te),U===void 0&&(U=!1),u.addEventListener(m.toString(),w,U);else if(u.attachEvent)u.attachEvent(fr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Il(){function u(_){return m.call(u.src,u.listener,_)}const m=Wo;return u}function Ps(u,m,_,w,U){if(Array.isArray(m))for(var $=0;$<m.length;$++)Ps(u,m[$],_,w,U);else w=y(w)?!!w.capture:!!w,_=qo(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=$r($,_,w,U),-1<_&&(vt($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=ks(u))&&(m=u.g[m.toString()],u=-1,m&&(u=$r(m,_,w,U)),(_=-1<u?m[u]:null)&&dr(_))}function dr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])As(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(fr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=ks(m))?(As(_,u),_.h==0&&(_.src=null,m[Oi]=null)):vt(u)}}}function fr(u){return u in Cs?Cs[u]:Cs[u]="on"+u}function Wo(u,m){if(u.da)u=!0;else{m=new Ce(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&dr(u),u=_.call(w,m)}return u}function ks(u){return u=u[Oi],u instanceof hr?u:null}var Ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function qo(u){return typeof u=="function"?u:(u[Ns]||(u[Ns]=function(m){return u.handleEvent(m)}),u[Ns])}function ht(){K.call(this),this.i=new hr(this),this.M=this,this.F=null}L(ht,K),ht.prototype[Me]=!0,ht.prototype.removeEventListener=function(u,m,_,w){Ps(this,u,m,_,w)};function dt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new de(m,u);else if(m instanceof de)m.target=m.target||u;else{var U=m;m=new de(w,u),k(m,U)}if(U=!0,_)for(var $=_.length-1;0<=$;$--){var te=m.g=_[$];U=pr(te,w,!0,m)&&U}if(te=m.g=u,U=pr(te,w,!0,m)&&U,U=pr(te,w,!1,m)&&U,_)for($=0;$<_.length;$++)te=m.g=_[$],U=pr(te,w,!1,m)&&U}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)vt(_[w]);delete u.g[m],u.h--}}this.F=null},ht.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ht.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function pr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,$=0;$<m.length;++$){var te=m[$];if(te&&!te.da&&te.capture==_){var je=te.listener,ft=te.ha||te.src;te.fa&&As(u.i,te),U=je.call(ft,w)!==!1&&U}}return U&&!w.defaultPrevented}function Ko(u,m,_){if(typeof u=="function")_&&(u=R(u,_));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Hr(u){u.g=Ko(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Li extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(u){K.call(this),this.h=u,this.g={}}L(Vi,K);var Go=[];function Qo(u){ve(u.g,function(m,_){this.g.hasOwnProperty(_)&&dr(m)},u),u.g={}}Vi.prototype.N=function(){Vi.aa.N.call(this),Qo(this)},Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xo=f.JSON.stringify,Yo=f.JSON.parse,Jo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function bi(){}bi.prototype.h=null;function xs(u){return u.h||(u.h=u.i())}function Ds(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zn(){de.call(this,"d")}L(zn,de);function Os(){de.call(this,"c")}L(Os,de);var $n={},Zo=null;function Mi(){return Zo=Zo||new ht}$n.La="serverreachability";function ea(u){de.call(this,$n.La,u)}L(ea,de);function mr(u){const m=Mi();dt(m,new ea(m))}$n.STAT_EVENT="statevent";function ta(u,m){de.call(this,$n.STAT_EVENT,u),this.stat=m}L(ta,de);function rt(u){const m=Mi();dt(m,new ta(m,u))}$n.Ma="timingevent";function Ls(u,m){de.call(this,$n.Ma,u),this.size=m}L(Ls,de);function Rn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Ui(){this.g=!0}Ui.prototype.xa=function(){this.g=!1};function Fi(u,m,_,w,U,$){u.info(function(){if(u.g)if($)for(var te="",je=$.split("&"),ft=0;ft<je.length;ft++){var Oe=je[ft].split("=");if(1<Oe.length){var Et=Oe[0];Oe=Oe[1];var ot=Et.split("_");te=2<=ot.length&&ot[1]=="type"?te+(Et+"="+Oe+"&"):te+(Et+"=redacted&")}}else te=null;else te=$;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+m+`
`+_+`
`+te})}function Vs(u,m,_,w,U,$,te){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+m+`
`+_+`
`+$+" "+te})}function An(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Xc(u,_)+(w?" "+w:"")})}function na(u,m){u.info(function(){return"TIMEOUT: "+m})}Ui.prototype.info=function(){};function Xc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var $=U[0];if($!="noop"&&$!="stop"&&$!="close")for(var te=1;te<U.length;te++)U[te]=""}}}}return Xo(_)}catch{return m}}var bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function ji(){}L(ji,bi),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Cn=new ji;function Pn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Vi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rl}function Rl(){this.i=null,this.g="",this.h=!1}var ra={},Ms={};function Us(u,m,_){u.L=1,u.v=Qr(sn(m)),u.m=_,u.P=!0,ia(u,null)}function ia(u,m){u.F=Date.now(),He(u),u.A=sn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Yr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Rl,u.g=$l(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Li(R(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Go[0]=U.toString()),U=Go);for(var $=0;$<U.length;$++){var te=$o(_,U[$],w||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),mr(),Fi(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Qt(u)==3?m.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Qt(this.g);var m=this.g.Ba();const yn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ca(this.g)))){this.J||ot!=4||m==7||(m==8||0>=yn?mr(3):mr(2)),Bi(this);var _=this.g.Z();this.X=_;t:if(Al(this)){var w=ca(this.g);u="";var U=w.length,$=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Wr(this);var te="";break t}this.h.i=new f.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!($&&m==U-1)});w.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,Vs(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ft=this.g;if((je=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(je)){var Oe=je;break t}}Oe=null}if(_=Oe)An(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sa(this,_);else{this.o=!1,this.s=3,rt(12),mn(this),Wr(this);break e}}if(this.P){_=!0;let an;for(;!this.J&&this.C<te.length;)if(an=Yc(this,te),an==Ms){ot==4&&(this.s=4,rt(14),_=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(an==ra){this.s=4,rt(15),An(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else An(this.i,this.l,an,null),sa(this,an);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||te.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)An(this.i,this.l,te,"[Invalid Chunked Response]"),mn(this),Wr(this);else if(0<te.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),da(Et),Et.M=!0,rt(11))}}else An(this.i,this.l,te,null),sa(this,te);ot==4&&mn(this),this.o&&!this.J&&(ot==4?Qs(this.j,this):(this.o=!1,He(this)))}else Hs(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),mn(this),Wr(this)}}}catch{}finally{}};function Al(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Yc(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Ms:(_=Number(m.substring(_,w)),isNaN(_)?ra:(w+=1,w+_>m.length?Ms:(m=m.slice(w,w+_),u.C=w+_,m)))}Pn.prototype.cancel=function(){this.J=!0,mn(this)};function He(u){u.S=Date.now()+u.I,Cl(u,u.I)}function Cl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(R(u.ba,u),m)}function Bi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(na(this.i,this.A),this.L!=2&&(mr(),rt(17)),mn(this),this.s=2,Wr(this)):Cl(this,this.S-u)};function Wr(u){u.j.G==0||u.J||Qs(u.j,u)}function mn(u){Bi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Qo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function sa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||$t(_.h,u))){if(!u.K&&$t(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Gs(_),On(_);else break e;Ks(_),rt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=Rn(R(_.Za,_),6e3));if(1>=kl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Er(_,11)}else if((u.K||_.g==u)&&Gs(_),!Z(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Oe=U[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const Et=Oe[3];Et!=null&&(_.la=Et,_.j.info("VER="+_.la));const ot=Oe[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const yn=Oe[5];yn!=null&&typeof yn=="number"&&0<yn&&(w=1.5*yn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const an=u.g;if(an){const Gi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var $=w.h;$.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(oa($,$.h),$.h=null))}if(w.D){const Ys=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Ys&&(w.ya=Ys,ze(w.I,w.D,Ys))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var te=u;if(w.qa=zl(w,w.J?w.ia:null,w.W),te.K){Nl(w.h,te);var je=te,ft=w.L;ft&&(je.I=ft),je.B&&(Bi(je),He(je)),w.g=te}else Ki(w);0<_.i.length&&Kn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Er(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Er(_,7):Ct(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}mr(4)}catch{}}var Pl=class{constructor(u,m){this.g=u,this.map=m}};function zi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function kl(u){return u.h?1:u.g?u.g.size:0}function $t(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function oa(u,m){u.g?u.g.add(m):u.h=m}function Nl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}zi.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return z(u.i)}function Fs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function js(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=js(u),w=Fs(u),U=w.length,$=0;$<U;$++)m.call(void 0,w[$],_&&_[$],u)}var $i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),U=null;if(0<=w){var $=u[_].substring(0,w);U=u[_].substring(w+1)}else $=u[_];m($,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function gr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof gr){this.h=u.h,Hi(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var m=u.i,_=new Hn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Gr(this,_),this.m=u.m}else u&&(m=String(u).match($i))?(this.h=!1,Hi(this,m[1]||"",!0),this.o=xe(m[2]||""),this.g=xe(m[3]||"",!0),Kr(this,m[4]),this.l=xe(m[5]||"",!0),Gr(this,m[6]||"",!0),this.m=xe(m[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}gr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Xr(m,Bs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Xr(m,Bs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Xr(_,_.charAt(0)=="/"?Ll:Ol,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Xr(_,aa)),u.join("")};function sn(u){return new gr(u)}function Hi(u,m,_){u.j=_?xe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Gr(u,m,_){m instanceof Hn?(u.i=m,Wn(u.i,u.h)):(_||(m=Xr(m,Vl)),u.i=new Hn(m,u.h))}function ze(u,m,_){u.i.set(m,_)}function Qr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Xr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Dl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Dl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Bs=/[#\/\?@]/g,Ol=/[#\?:]/g,Ll=/[#\?]/g,Vl=/[#\?@]/g,aa=/#/g;function Hn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&Jc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Hn.prototype,n.add=function(u,m){At(this),this.i=null,u=gn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function kn(u,m){At(u),m=gn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Nn(u,m){return At(u),m=gn(u,m),u.g.has(m)}n.forEach=function(u,m){At(this),this.g.forEach(function(_,w){_.forEach(function(U){u.call(m,U,w,this)},this)},this)},n.na=function(){At(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const U=u[w];for(let $=0;$<U.length;$++)_.push(m[w])}return _},n.V=function(u){At(this);let m=[];if(typeof u=="string")Nn(this,u)&&(m=m.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return At(this),this.i=null,u=gn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Yr(u,m,_){kn(u,m),0<_.length&&(u.i=null,u.g.set(gn(u,m),z(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const $=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var U=$;te[w]!==""&&(U+="="+encodeURIComponent(String(te[w]))),u.push(U)}}return this.i=u.join("&")};function gn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Wn(u,m){m&&!u.j&&(At(u),u.i=null,u.g.forEach(function(_,w){var U=w.toLowerCase();w!=U&&(kn(this,w),Yr(this,U,_))},u)),u.j=m}function Zc(u,m){const _=new Ui;if(f.Image){const w=new Image;w.onload=O(Gt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=O(Gt,_,"TestLoadImage: error",!1,m,w),w.onabort=O(Gt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=O(Gt,_,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function bl(u,m){const _=new Ui,w=new AbortController,U=setTimeout(()=>{w.abort(),Gt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then($=>{clearTimeout(U),$.ok?Gt(_,"TestPingServer: ok",!0,m):Gt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Gt(_,"TestPingServer: error",!1,m)})}function Gt(u,m,_,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(_)}catch{}}function eh(){this.g=new Jo}function Ml(u,m,_){const w=_||"";try{qr(u,function(U,$){let te=U;y(U)&&(te=Xo(U)),m.push(w+$+"="+encodeURIComponent(te))})}catch(U){throw m.push(w+"type="+encodeURIComponent("_badmap")),U}}function yr(u){this.l=u.Ub||null,this.j=u.eb||!1}L(yr,bi),yr.prototype.g=function(){return new Wi(this.l,this.j)},yr.prototype.i=function(u){return function(){return u}}({});function Wi(u,m){ht.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Wi,ht),n=Wi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ul(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ul(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?xn(this):Dn(this),this.readyState==3&&Ul(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,xn(this))},n.Qa=function(u){this.g&&(this.response=u,xn(this))},n.ga=function(){this.g&&xn(this)};function xn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function _r(u){let m="";return ve(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function Jr(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=_r(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,m,_))}function Ge(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Ge,ht);var th=/^https?$/i,la=["POST","PUT"];n=Ge.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?xs(this.o):xs(Cn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){qi(this,$);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)_.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const $ of w.keys())_.set($,w.get($));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),U=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(la,m,void 0))||w||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,te]of _)this.g.setRequestHeader($,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$s(this),this.u=!0,this.g.send(u),this.u=!1}catch($){qi(this,$)}};function qi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,zs(u),on(u)}function zs(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ua(this):this.bb())},n.bb=function(){ua(this)};function ua(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Qt(u)!=4||u.Z()!=2)){if(u.u&&Qt(u)==4)Ko(u.Ea,0,u);else if(dt(u,"readystatechange"),Qt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=te===0){var U=String(u.D).match($i)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),w=!th.test(U?U.toLowerCase():"")}_=w}if(_)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var $=2<Qt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",zs(u)}}finally{on(u)}}}}function on(u,m){if(u.g){$s(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||dt(u,"ready");try{_.onreadystatechange=w}catch{}}}function $s(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Qt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Yo(m)}};function ca(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Hs(u){const m={};u=(u.g&&2<=Qt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(Z(u[w]))continue;var _=D(u[w]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[U]||[];m[U]=$,$.push(_)}N(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ha(u){this.Aa=0,this.i=[],this.j=new Ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,u),this.cb=qn("retryDelaySeedMs",1e4,u),this.Wa=qn("forwardChannelMaxRetries",2,u),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(u&&u.concurrentRequestLimit),this.Da=new eh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ha.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){rt(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=zl(this,null,this.W),Kn(this)};function Ct(u){if(Ws(u),u.G==3){var m=u.U++,_=sn(u.I);if(ze(_,"SID",u.K),ze(_,"RID",m),ze(_,"TYPE","terminate"),vr(u,_),m=new Pn(u,u.j,m),m.L=2,m.v=Qr(sn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=$l(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}Bl(u)}function On(u){u.g&&(da(u),u.g.cancel(),u.g=null)}function Ws(u){On(u),u.u&&(f.clearTimeout(u.u),u.u=null),Gs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Kn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||se(),ne||(Be(),ne=!0),pe.add(m,u),u.B=0}}function nh(u,m){return kl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(R(u.Ga,u,m),jl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Pn(this,this.j,u);let $=this.o;if(this.S&&($?($=I($),k($,this.S)):$=this.S),this.m!==null||this.O||(U.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Zr(this,U,m),_=sn(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),vr(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(_r($)))+"&"+m:this.m&&Jr(_,this.m,$)),oa(this.h,U),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",m),ze(_,"SID","null"),U.T=!0,Us(U,_,null)):Us(U,_,m),this.G=2}}else this.G==3&&(u?qs(this,u):this.i.length==0||rn(this.h)||qs(this))};function qs(u,m){var _;m?_=m.l:_=u.U++;const w=sn(u.I);ze(w,"SID",u.K),ze(w,"RID",_),ze(w,"AID",u.T),vr(u,w),u.m&&u.o&&Jr(w,u.m,u.o),_=new Pn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Zr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),oa(u.h,_),Us(_,w,m)}function vr(u,m){u.H&&ve(u.H,function(_,w){ze(m,w,_)}),u.l&&qr({},function(_,w){ze(m,w,_)})}function Zr(u,m,_){_=Math.min(u.i.length,_);var w=u.l?R(u.l.Na,u.l,u):null;e:{var U=u.i;let $=-1;for(;;){const te=["count="+_];$==-1?0<_?($=U[0].g,te.push("ofs="+$)):$=0:te.push("ofs="+$);let je=!0;for(let ft=0;ft<_;ft++){let Oe=U[ft].g;const Et=U[ft].map;if(Oe-=$,0>Oe)$=Math.max(0,U[ft].g-100),je=!1;else try{Ml(Et,te,"req"+Oe+"_")}catch{w&&w(Et)}}if(je){w=te.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function Ki(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||se(),ne||(Be(),ne=!0),pe.add(m,u),u.v=0}}function Ks(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(R(u.Fa,u),jl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(R(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),On(this),Fl(this))};function da(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Fl(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),vr(u,m),u.m&&u.o&&Jr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Qr(sn(m)),_.m=null,_.P=!0,ia(_,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Ks(this),rt(19))};function Gs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Qs(u,m){var _=null;if(u.g==m){Gs(u),da(u),u.g=null;var w=2}else if($t(u.h,m))_=m.D,Nl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;w=Mi(),dt(w,new Ls(w,_)),Kn(u)}else Ki(u);else if(U=m.s,U==3||U==0&&0<m.X||!(w==1&&nh(u,m)||w==2&&Ks(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Er(u,5);break;case 4:Er(u,10);break;case 3:Er(u,6);break;default:Er(u,2)}}}function jl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Er(u,m){if(u.j.info("Error code "+m),m==2){var _=R(u.fb,u),w=u.Xa;const U=!w;w=new gr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Hi(w,"https"),Qr(w),U?Zc(w.toString(),_):bl(w.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(m),Bl(u),Ws(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Bl(u){if(u.G=0,u.ka=[],u.l){const m=xl(u.h);(m.length!=0||u.i.length!=0)&&(b(u.ka,m),b(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function zl(u,m,_){var w=_ instanceof gr?sn(_):new gr(_);if(w.g!="")m&&(w.g=m+"."+w.g),Kr(w,w.s);else{var U=f.location;w=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var $=new gr(null);w&&Hi($,w),m&&($.g=m),U&&Kr($,U),_&&($.l=_),w=$}return _=u.D,m=u.ya,_&&m&&ze(w,_,m),ze(w,"VER",u.la),vr(u,w),w}function $l(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new yr({eb:_})):new Ge(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fa(){}n=fa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xs(){}Xs.prototype.g=function(u,m){return new Ht(u,m)};function Ht(u,m){ht.call(this),this.g=new ha(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Z(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Z(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Gn(this)}L(Ht,ht),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Ct(this.g)},Ht.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Xo(u),u=_);m.i.push(new Pl(m.Ya++,u)),m.G==3&&Kn(m)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,Ht.aa.N.call(this)};function Hl(u){zn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}L(Hl,zn);function Wl(){Os.call(this),this.status=1}L(Wl,Os);function Gn(u){this.g=u}L(Gn,fa),Gn.prototype.ua=function(){dt(this.g,"a")},Gn.prototype.ta=function(u){dt(this.g,new Hl(u))},Gn.prototype.sa=function(u){dt(this.g,new Wl)},Gn.prototype.ra=function(){dt(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,q_=function(){return new Xs},W_=function(){return Mi()},H_=$n,Qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bs.NO_ERROR=0,bs.TIMEOUT=8,bs.HTTP_ERROR=6,Xu=bs,Sl.COMPLETE="complete",$_=Sl,Ds.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ha=Ds,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,z_=Ge}).apply(typeof ju<"u"?ju:typeof self<"u"?self:typeof window<"u"?window:{});const qg="@firebase/firestore",Kg="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new If("@firebase/firestore");function vo(){return fs.logLevel}function oe(n,...e){if(fs.logLevel<=ke.DEBUG){const t=e.map(Af);fs.debug(`Firestore (${Uo}): ${n}`,...t)}}function Ur(n,...e){if(fs.logLevel<=ke.ERROR){const t=e.map(Af);fs.error(`Firestore (${Uo}): ${n}`,...t)}}function Po(n,...e){if(fs.logLevel<=ke.WARN){const t=e.map(Af);fs.warn(`Firestore (${Uo}): ${n}`,...t)}}function Af(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+n;throw Ur(e),new Error(e)}function Fe(n,e){n||Ee()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends cr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(jt.UNAUTHENTICATED))}shutdown(){}}class OS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class LS{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Or,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Or)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string"),new K_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new jt(e)}}class VS{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class bS{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new VS(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MS{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,hn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Gg(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new Gg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=US(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ae(n,e){return n<e?-1:n>e?1:0}function Xd(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ae(i,o);{const l=G_(),h=FS(l.encode(Qg(n,t)),l.encode(Qg(e,t)));return h!==0?h:Ae(i,o)}}t+=i>65535?2:1}return Ae(n.length,e.length)}function Qg(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function FS(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ae(n[t],e[t]);return Ae(n.length,e.length)}function ko(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=-62135596800,Yg=1e6;class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Yg);return new yt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xg)throw new fe(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yg}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Xg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new yt(0,0))}static max(){return new Te(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="__name__";class Zn{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(),i===void 0?i=e.length-t:i>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=Zn.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=Zn.isNumericId(e),o=Zn.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?Zn.extractNumericId(e).compare(Zn.extractNumericId(t)):Xd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ii.fromString(e.substring(4,e.length-2))}}class Xe extends Zn{construct(e,t,i){return new Xe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new fe(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Xe(t)}static emptyPath(){return new Xe([])}}const jS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Zn{construct(e,t,i){return new xt(e,t,i)}static isValidIdentifier(e){return jS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jg}static keyField(){return new xt([Jg])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new fe(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new fe(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new fe(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Xe.fromString(e))}static fromName(e){return new ye(Xe.fromString(e).popFirst(5))}static empty(){return new ye(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=-1;function BS(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new yt(t+1,0):new yt(t,i));return new Ai(o,ye.empty(),e)}function zS(n){return new Ai(n.readTime,n.key,nl)}class Ai{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ai(Te.min(),ye.empty(),nl)}static max(){return new Ai(Te.max(),ye.empty(),nl)}}function $S(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==HS)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,i)=>{t(e)})}static reject(e){return new q((t,i)=>{i(e)})}static waitFor(e){return new q((t,i)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=q.resolve(!1);for(const i of e)t=t.next(o=>o?q.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new q((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{h[y]=E,++f,f===l&&i(h)},E=>o(E))}})}static doWhile(e,t){return new q((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function qS(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}xc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=-1;function Dc(n){return n==null}function uc(n){return n===0&&1/n==-1/0}function KS(n){return typeof n=="number"&&Number.isInteger(n)&&!uc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="";function GS(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zg(e)),e=QS(n.get(t),e);return Zg(e)}function QS(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case X_:t+="";break;default:t+=l}}return t}function Zg(n){return n+X_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Y_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bu(this.root,e,this.comparator,!0)}}class Bu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ty(this.data.getIterator())}getIteratorFrom(e){return new ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new jn([])}unionWith(e){let t=new _t(xt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ko(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new J_("Invalid base64 string: "+l):l}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const XS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(n){if(Fe(!!n),typeof n=="string"){let e=0;const t=XS.exec(n);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="server_timestamp",ev="__type__",tv="__previous_value__",nv="__local_write_time__";function Pf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ev])===null||t===void 0?void 0:t.stringValue)===Z_}function Oc(n){const e=n.mapValue.fields[tv];return Pf(e)?Oc(e):e}function rl(n){const e=Ci(n.mapValue.fields[nv].timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,t,i,o,l,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}const cc="(default)";class il{constructor(e,t){this.projectId=e,this.database=t||cc}static empty(){return new il("","")}get isDefaultDatabase(){return this.database===cc}isEqual(e){return e instanceof il&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="__type__",JS="__max__",zu={mapValue:{}},iv="__vector__",hc="value";function ki(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pf(n)?4:eR(n)?9007199254740991:ZS(n)?10:11:Ee()}function ar(n,e){if(n===e)return!0;const t=ki(n);if(t!==ki(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rl(n).isEqual(rl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ci(o.timestampValue),f=Ci(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Pi(o.bytesValue).isEqual(Pi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?uc(h)===uc(f):isNaN(h)&&isNaN(f)}return!1}(n,e);case 9:return ko(n.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(ey(h)!==ey(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!ar(h[p],f[p])))return!1;return!0}(n,e);default:return Ee()}}function sl(n,e){return(n.values||[]).find(t=>ar(t,e))!==void 0}function No(n,e){if(n===e)return 0;const t=ki(n),i=ki(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return function(l,h){const f=st(l.integerValue||l.doubleValue),p=st(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(n,e);case 3:return ny(n.timestampValue,e.timestampValue);case 4:return ny(rl(n),rl(e));case 5:return Xd(n.stringValue,e.stringValue);case 6:return function(l,h){const f=Pi(l),p=Pi(h);return f.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const E=Ae(f[y],p[y]);if(E!==0)return E}return Ae(f.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Ae(st(l.latitude),st(h.latitude));return f!==0?f:Ae(st(l.longitude),st(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ry(n.arrayValue,e.arrayValue);case 10:return function(l,h){var f,p,y,E;const T=l.fields||{},R=h.fields||{},O=(f=T[hc])===null||f===void 0?void 0:f.arrayValue,L=(p=R[hc])===null||p===void 0?void 0:p.arrayValue,z=Ae(((y=O==null?void 0:O.values)===null||y===void 0?void 0:y.length)||0,((E=L==null?void 0:L.values)===null||E===void 0?void 0:E.length)||0);return z!==0?z:ry(O,L)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===zu.mapValue&&h===zu.mapValue)return 0;if(l===zu.mapValue)return 1;if(h===zu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const R=Xd(p[T],E[T]);if(R!==0)return R;const O=No(f[p[T]],y[E[T]]);if(O!==0)return O}return Ae(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Ee()}}function ny(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=Ci(n),i=Ci(e),o=Ae(t.seconds,i.seconds);return o!==0?o:Ae(t.nanos,i.nanos)}function ry(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=No(t[o],i[o]);if(l)return l}return Ae(t.length,i.length)}function xo(n){return Yd(n)}function Yd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ci(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Pi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Yd(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Yd(t.fields[h])}`;return o+"}"}(n.mapValue):Ee()}function Yu(n){switch(ki(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(n);return e?16+Yu(e):16;case 5:return 2*n.stringValue.length;case 6:return Pi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Yu(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return ws(i.fields,(l,h)=>{o+=l.length+Yu(h)}),o}(n.mapValue);default:throw Ee()}}function Jd(n){return!!n&&"integerValue"in n}function kf(n){return!!n&&"arrayValue"in n}function iy(n){return!!n&&"nullValue"in n}function sy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ju(n){return!!n&&"mapValue"in n}function ZS(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rv])===null||t===void 0?void 0:t.stringValue)===iv}function Ga(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ws(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ga(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ga(n.arrayValue.values[t]);return e}return Object.assign({},n)}function eR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===JS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ju(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ga(t)}setAll(e){let t=xt.emptyPath(),i={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ga(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Ju(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Ju(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ws(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Sn(Ga(this.value))}}function sv(n){const e=[];return ws(n.fields,(t,i)=>{const o=new xt([t]);if(Ju(i)){const l=sv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Te.min(),Te.min(),Te.min(),Sn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Te.min(),Te.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Te.min(),Te.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.position=e,this.inclusive=t}}function oy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(h.referenceValue),t.key):i=No(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function ay(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ar(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t="asc"){this.field=e,this.dir=t}}function tR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{}class gt extends ov{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new rR(e,t,i):t==="array-contains"?new oR(e,i):t==="in"?new aR(e,i):t==="not-in"?new lR(e,i):t==="array-contains-any"?new uR(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new iR(e,i):new sR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(No(t,this.value)):t!==null&&ki(this.value)===ki(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lr extends ov{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new lr(e,t)}matches(e){return av(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function av(n){return n.op==="and"}function lv(n){return nR(n)&&av(n)}function nR(n){for(const e of n.filters)if(e instanceof lr)return!1;return!0}function Zd(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+xo(n.value);if(lv(n))return n.filters.map(e=>Zd(e)).join(",");{const e=n.filters.map(t=>Zd(t)).join(",");return`${n.op}(${e})`}}function uv(n,e){return n instanceof gt?function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&ar(i.value,o.value)}(n,e):n instanceof lr?function(i,o){return o instanceof lr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,f)=>l&&uv(h,o.filters[f]),!0):!1}(n,e):void Ee()}function cv(n){return n instanceof gt?function(t){return`${t.field.canonicalString()} ${t.op} ${xo(t.value)}`}(n):n instanceof lr?function(t){return t.op.toString()+" {"+t.getFilters().map(cv).join(" ,")+"}"}(n):"Filter"}class rR extends gt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class iR extends gt{constructor(e,t){super(e,"in",t),this.keys=hv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sR extends gt{constructor(e,t){super(e,"not-in",t),this.keys=hv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class oR extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kf(t)&&sl(t.arrayValue,this.value)}}class aR extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sl(this.value.arrayValue,t)}}class lR extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!sl(this.value.arrayValue,t)}}class uR extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>sl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.le=null}}function ly(n,e=null,t=[],i=[],o=null,l=null,h=null){return new cR(n,e,t,i,o,l,h)}function Nf(n){const e=Se(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Zd(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Dc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>xo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>xo(i)).join(",")),e.le=t}return e.le}function xf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!tR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!uv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ay(n.startAt,e.startAt)&&ay(n.endAt,e.endAt)}function ef(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function hR(n,e,t,i,o,l,h,f){return new Lc(n,e,t,i,o,l,h,f)}function Df(n){return new Lc(n)}function uy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dR(n){return n.collectionGroup!==null}function Qa(n){const e=Se(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new _t(xt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new fc(l,i))}),t.has(xt.keyField().canonicalString())||e.he.push(new fc(xt.keyField(),i))}return e.he}function nr(n){const e=Se(n);return e.Pe||(e.Pe=fR(e,Qa(n))),e.Pe}function fR(n,e){if(n.limitType==="F")return ly(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new fc(o.field,l)});const t=n.endAt?new dc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new dc(n.startAt.position,n.startAt.inclusive):null;return ly(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function tf(n,e,t){return new Lc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vc(n,e){return xf(nr(n),nr(e))&&n.limitType===e.limitType}function dv(n){return`${Nf(nr(n))}|lt:${n.limitType}`}function Eo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>cv(o)).join(", ")}]`),Dc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>xo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>xo(o)).join(",")),`Target(${i})`}(nr(n))}; limitType=${n.limitType})`}function bc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Qa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,f,p){const y=oy(h,f,p);return h.inclusive?y<=0:y<0}(i.startAt,Qa(i),o)||i.endAt&&!function(h,f,p){const y=oy(h,f,p);return h.inclusive?y>=0:y>0}(i.endAt,Qa(i),o))}(n,e)}function pR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fv(n){return(e,t)=>{let i=!1;for(const o of Qa(n)){const l=mR(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function mR(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?No(p,y):Ee()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Y_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new et(ye.comparator);function Fr(){return gR}const pv=new et(ye.comparator);function Wa(...n){let e=pv;for(const t of n)e=e.insert(t.key,t);return e}function mv(n){let e=pv;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function us(){return Xa()}function gv(){return Xa()}function Xa(){return new Ts(n=>n.toString(),(n,e)=>n.isEqual(e))}const yR=new et(ye.comparator),_R=new _t(ye.comparator);function Ne(...n){let e=_R;for(const t of n)e=e.add(t);return e}const vR=new _t(Ae);function ER(){return vR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function yv(n){return{integerValue:""+n}}function wR(n,e){return KS(e)?yv(e):Of(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this._=void 0}}function TR(n,e,t){return n instanceof pc?function(o,l){const h={fields:{[ev]:{stringValue:Z_},[nv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Pf(l)&&(l=Oc(l)),l&&(h.fields[tv]=l),{mapValue:h}}(t,e):n instanceof ol?vv(n,e):n instanceof al?Ev(n,e):function(o,l){const h=_v(o,l),f=cy(h)+cy(o.Ie);return Jd(h)&&Jd(o.Ie)?yv(f):Of(o.serializer,f)}(n,e)}function IR(n,e,t){return n instanceof ol?vv(n,e):n instanceof al?Ev(n,e):t}function _v(n,e){return n instanceof mc?function(i){return Jd(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class pc extends Mc{}class ol extends Mc{constructor(e){super(),this.elements=e}}function vv(n,e){const t=wv(e);for(const i of n.elements)t.some(o=>ar(o,i))||t.push(i);return{arrayValue:{values:t}}}class al extends Mc{constructor(e){super(),this.elements=e}}function Ev(n,e){let t=wv(e);for(const i of n.elements)t=t.filter(o=>!ar(o,i));return{arrayValue:{values:t}}}class mc extends Mc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function cy(n){return st(n.integerValue||n.doubleValue)}function wv(n){return kf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function SR(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof ol&&o instanceof ol||i instanceof al&&o instanceof al?ko(i.elements,o.elements,ar):i instanceof mc&&o instanceof mc?ar(i.Ie,o.Ie):i instanceof pc&&o instanceof pc}(n.transform,e.transform)}class RR{constructor(e,t){this.version=e,this.transformResults=t}}class Lr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Lr}static exists(e){return new Lr(void 0,e)}static updateTime(e){return new Lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zu(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Uc{}function Tv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Sv(n.key,Lr.none()):new ml(n.key,n.data,Lr.none());{const t=n.data,i=Sn.empty();let o=new _t(xt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Is(n.key,i,new jn(o.toArray()),Lr.none())}}function AR(n,e,t){n instanceof ml?function(o,l,h){const f=o.value.clone(),p=dy(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(n,e,t):n instanceof Is?function(o,l,h){if(!Zu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=dy(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(Iv(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ya(n,e,t,i){return n instanceof ml?function(l,h,f,p){if(!Zu(l.precondition,h))return f;const y=l.value.clone(),E=fy(l.fieldTransforms,p,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Is?function(l,h,f,p){if(!Zu(l.precondition,h))return f;const y=fy(l.fieldTransforms,p,h),E=h.data;return E.setAll(Iv(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,f){return Zu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(n,e,t)}function CR(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=_v(i.transform,o||null);l!=null&&(t===null&&(t=Sn.empty()),t.set(i.field,l))}return t||null}function hy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&ko(i,o,(l,h)=>SR(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ml extends Uc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Is extends Uc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Iv(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function dy(n,e,t){const i=new Map;Fe(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,IR(h,f,t[o]))}return i}function fy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,TR(l,h,e))}return i}class Sv extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PR extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&AR(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=gv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=Tv(h,f);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Te.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&ko(this.mutations,e.mutations,(t,i)=>hy(t,i))&&ko(this.baseMutations,e.baseMutations,(t,i)=>hy(t,i))}}class Lf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length);let o=function(){return yR}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Lf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Le;function DR(n){switch(n){case Y.OK:return Ee();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return Ee()}}function Rv(n){if(n===void 0)return Ur("GRPC error has no .code"),Y.UNKNOWN;switch(n){case lt.OK:return Y.OK;case lt.CANCELLED:return Y.CANCELLED;case lt.UNKNOWN:return Y.UNKNOWN;case lt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case lt.INTERNAL:return Y.INTERNAL;case lt.UNAVAILABLE:return Y.UNAVAILABLE;case lt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case lt.NOT_FOUND:return Y.NOT_FOUND;case lt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case lt.ABORTED:return Y.ABORTED;case lt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case lt.DATA_LOSS:return Y.DATA_LOSS;default:return Ee()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new Ii([4294967295,4294967295],0);function py(n){const e=G_().encode(n),t=new B_;return t.update(e),new Uint8Array(t.digest())}function my(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ii([t,i],0),new Ii([o,l],0)]}class Vf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new qa(`Invalid padding: ${t}`);if(i<0)throw new qa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new qa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new qa(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Ii.fromNumber(this.Ee)}Ae(e,t,i){let o=e.add(t.multiply(Ii.fromNumber(i)));return o.compare(OR)===1&&(o=new Ii([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=py(e),[i,o]=my(t);for(let l=0;l<this.hashCount;l++){const h=this.Ae(i,o,l);if(!this.Re(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Vf(l,o,t);return i.forEach(f=>h.insert(f)),h}insert(e){if(this.Ee===0)return;const t=py(e),[i,o]=my(t);for(let l=0;l<this.hashCount;l++){const h=this.Ae(i,o,l);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,gl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Fc(Te.min(),o,new et(Ae),Fr(),Ne())}}class gl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new gl(i,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,i,o){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=o}}class Av{constructor(e,t){this.targetId=e,this.ge=t}}class Cv{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class gy{constructor(){this.pe=0,this.ye=yy(),this.we=Dt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ne(),t=Ne(),i=Ne();return this.ye.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee()}}),new gl(this.we,this.Se,e,t,i)}Me(){this.be=!1,this.ye=yy()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Fe(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class LR{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Fr(),this.$e=$u(),this.Ue=$u(),this.Ke=new et(Ae)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,i=e.ge.count,o=this.Xe(t);if(o){const l=o.target;if(ef(l))if(i===0){const h=new ye(l.path);this.ze(t,h,Bt.newNoDocument(h,Te.min()))}else Fe(i===1);else{const h=this.et(t);if(h!==i){const f=this.tt(e),p=f?this.nt(f,e,h):1;if(p!==0){this.Ye(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Pi(i).toUint8Array()}catch(p){if(p instanceof J_)return Po("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Vf(h,o,l)}catch(p){return Po(p instanceof qa?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Ee===0?null:f}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.ke.it(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.ze(t,l,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((l,h)=>{const f=this.Xe(h);if(f){if(l.current&&ef(f.target)){const p=new ye(f.target.path);this._t(p).has(h)||this.ut(h,p)||this.ze(h,p,Bt.newNoDocument(p,e))}l.ve&&(t.set(h,l.Fe()),l.Me())}});let i=Ne();this.Ue.forEach((l,h)=>{let f=!0;h.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.Qe.forEach((l,h)=>h.setReadTime(e));const o=new Fc(e,t,this.Ke,this.Qe,i);return this.Qe=Fr(),this.$e=$u(),this.Ue=$u(),this.Ke=new et(Ae),o}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new gy,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new _t(Ae),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new _t(Ae),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new gy),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function $u(){return new et(ye.comparator)}function yy(){return new et(ye.comparator)}const VR={asc:"ASCENDING",desc:"DESCENDING"},bR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MR={and:"AND",or:"OR"};class UR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nf(n,e){return n.useProto3Json||Dc(e)?e:{value:e}}function gc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function FR(n,e){return gc(n,e.toTimestamp())}function rr(n){return Fe(!!n),Te.fromTimestamp(function(t){const i=Ci(t);return new yt(i.seconds,i.nanos)}(n))}function bf(n,e){return rf(n,e).canonicalString()}function rf(n,e){const t=function(o){return new Xe(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function kv(n){const e=Xe.fromString(n);return Fe(Lv(e)),e}function sf(n,e){return bf(n.databaseId,e.path)}function Ld(n,e){const t=kv(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(xv(t))}function Nv(n,e){return bf(n.databaseId,e)}function jR(n){const e=kv(n);return e.length===4?Xe.emptyPath():xv(e)}function of(n){return new Xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xv(n){return Fe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _y(n,e,t){return{name:sf(n,e),fields:t.value.mapValue.fields}}function BR(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Fe(E===void 0||typeof E=="string"),Dt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Dt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const E=y.code===void 0?Y.UNKNOWN:Rv(y.code);return new fe(E,y.message||"")}(h);t=new Cv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Ld(n,i.document.name),l=rr(i.document.updateTime),h=i.document.createTime?rr(i.document.createTime):Te.min(),f=new Sn({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,l,h,f),y=i.targetIds||[],E=i.removedTargetIds||[];t=new ec(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Ld(n,i.document),l=i.readTime?rr(i.readTime):Te.min(),h=Bt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new ec([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Ld(n,i.document),l=i.removedTargetIds||[];t=new ec([],l,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new xR(o,l),f=i.targetId;t=new Av(f,h)}}return t}function zR(n,e){let t;if(e instanceof ml)t={update:_y(n,e.key,e.value)};else if(e instanceof Sv)t={delete:sf(n,e.key)};else if(e instanceof Is)t={update:_y(n,e.key,e.data),updateMask:YR(e.fieldMask)};else{if(!(e instanceof PR))return Ee();t={verify:sf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const f=h.transform;if(f instanceof pc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ol)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof al)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof mc)return{fieldPath:h.field.canonicalString(),increment:f.Ie};throw Ee()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:FR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee()}(n,e.precondition)),t}function $R(n,e){return n&&n.length>0?(Fe(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?rr(o.updateTime):rr(l);return h.isEqual(Te.min())&&(h=rr(l)),new RR(h,o.transformResults||[])}(t,e))):[]}function HR(n,e){return{documents:[Nv(n,e.path)]}}function WR(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Nv(n,o);const l=function(y){if(y.length!==0)return Ov(lr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(E=>function(R){return{field:wo(R.field),direction:GR(R.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=nf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ht:t,parent:o}}function qR(n){let e=jR(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const R=Dv(T);return R instanceof lr&&lv(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(R=>function(L){return new fc(To(L.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(R))}(t.orderBy));let f=null;t.limit&&(f=function(T){let R;return R=typeof T=="object"?T.value:T,Dc(R)?null:R}(t.limit));let p=null;t.startAt&&(p=function(T){const R=!!T.before,O=T.values||[];return new dc(O,R)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const R=!T.before,O=T.values||[];return new dc(O,R)}(t.endAt)),hR(e,o,h,l,f,"F",p,y)}function KR(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Dv(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=To(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=To(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=To(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=To(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(n):n.fieldFilter!==void 0?function(t){return gt.create(To(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return lr.create(t.compositeFilter.filters.map(i=>Dv(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(n):Ee()}function GR(n){return VR[n]}function QR(n){return bR[n]}function XR(n){return MR[n]}function wo(n){return{fieldPath:n.canonicalString()}}function To(n){return xt.fromServerFormat(n.fieldPath)}function Ov(n){return n instanceof gt?function(t){if(t.op==="=="){if(sy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NAN"}};if(iy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NAN"}};if(iy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wo(t.field),op:QR(t.op),value:t.value}}}(n):n instanceof lr?function(t){const i=t.getFilters().map(o=>Ov(o));return i.length===1?i[0]:{compositeFilter:{op:XR(t.op),filters:i}}}(n):Ee()}function YR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,i,o,l=Te.min(),h=Te.min(),f=Dt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.Tt=e}}function ZR(n){const e=qR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?tf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.Tn=new tA}addToCollectionParentIndex(e,t){return this.Tn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Ai.min())}updateCollectionGroup(e,t,i){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class tA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new _t(Xe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new _t(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vv=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(Vv,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Do(0)}static Kn(){return new Do(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="LruGarbageCollector",nA=1048576;function wy([n,e],[t,i]){const o=Ae(n,t);return o===0?Ae(e,i):o}class rA{constructor(e){this.Hn=e,this.buffer=new _t(wy),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();wy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){oe(Ey,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jo(t)?oe(Ey,"Ignoring IndexedDB error during garbage collection: ",t):await Fo(t)}await this.er(3e5)})}}class sA{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return q.resolve(xc.ae);const i=new rA(t);return this.tr.forEachTarget(e,o=>i.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>i.Zn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(vy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vy):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,o,l,h,f,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,f=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),vo()<=ke.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function oA(n,e){return new sA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.changes=new Ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ya(i.mutation,o,jn.empty(),yt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ne()){const o=us();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=Wa();return l.forEach((f,p)=>{h=h.insert(f,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=us();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ne()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,i,o){let l=Fr();const h=Xa(),f=function(){return Xa()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Is)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Ya(E.mutation,y,E.mutation.getFieldMask(),yt.now())):h.set(y.key,jn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>{var T;return f.set(y,new lA(E,(T=h.get(y))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const i=Xa();let o=new et((h,f)=>h-f),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||jn.empty();E=f.applyToLocalView(y,E),i.set(p,E);const T=(o.get(f.batchId)||Ne()).add(p);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,E=p.value,T=gv();E.forEach(R=>{if(!l.has(R)){const O=Tv(t.get(R),i.get(R));O!==null&&T.set(R,O),l=l.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return q.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dR(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):q.resolve(us());let f=nl,p=l;return h.next(y=>q.forEach(y,(E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?q.resolve():this.remoteDocumentCache.getEntry(e,E).next(R=>{p=p.insert(E,R)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Ne())).next(E=>({batchId:f,changes:mv(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=Wa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Wa();return this.indexManager.getCollectionParents(e,l).next(f=>q.forEach(f,p=>{const y=function(T,R){return new Lc(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,R)=>{h=h.insert(T,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Bt.newInvalidDocument(E)))});let f=Wa();return h.forEach((p,y)=>{const E=l.get(p);E!==void 0&&Ya(E.mutation,y,jn.empty(),yt.now()),bc(t,y)&&(f=f.insert(p,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return q.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:rr(o.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:ZR(o.bundledQuery),readTime:rr(o.readTime)}}(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.overlays=new et(ye.comparator),this.Rr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=us();return q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Et(e,t,l)}),q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Rr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(i)),q.resolve()}getOverlaysForCollection(e,t,i){const o=us(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=us(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=us(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>f.set(y,E)),!(f.size()>=o)););return q.resolve(f)}Et(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(i.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new NR(t,i));let l=this.Rr.get(t);l===void 0&&(l=Ne(),this.Rr.set(t,l)),this.Rr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.Vr=new _t(St.mr),this.gr=new _t(St.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new St(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new St(e,t))}Sr(e,t){e.forEach(i=>this.removeReference(i,t))}br(e){const t=new ye(new Xe([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.gr.forEachInRange([i,o],h=>{this.wr(h),l.push(h.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ye(new Xe([])),i=new St(t,e),o=new St(t,e+1);let l=Ne();return this.gr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new St(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ye.comparator(e.key,t.key)||Ae(e.Cr,t.Cr)}static pr(e,t){return Ae(e.Cr,t.Cr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new _t(St.mr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new kR(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Mr=this.Mr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Nr(i),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Cf:this.Fr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([i,o],h=>{const f=this.Or(h.Cr);l.push(f)}),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new _t(Ae);return t.forEach(o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,h],f=>{i=i.add(f.Cr)})}),q.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const h=new St(new ye(l),0);let f=new _t(Ae);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.Cr)),!0)},h),q.resolve(this.Br(f))}Br(e){const t=[];return e.forEach(i=>{const o=this.Or(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return q.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new St(t,0),o=this.Mr.firstAfterOrEqual(i);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.kr=e,this.docs=function(){return new et(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return q.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Fr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))}),q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Fr();const h=t.path,f=new ye(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||$S(zS(E),i)<=0||(o.has(E.key)||bc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ee()}qr(e,t){return q.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new mA(this)}getSize(e){return q.resolve(this.size)}}class mA extends aA{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(i)}),q.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.persistence=e,this.Qr=new Ts(t=>Nf(t),xf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Mf,this.targetCount=0,this.Kr=Do.Un()}forEachTarget(e,t){return this.Qr.forEach((i,o)=>t(o)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),q.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Do(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.zn(t),q.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Qr.forEach((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Qr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),q.waitFor(l).next(()=>o)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return q.resolve(i)}addMatchingKeys(e,t,i){return this.Ur.yr(t,i),q.resolve()}removeMatchingKeys(e,t,i){this.Ur.Sr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Ur.vr(t);return q.resolve(i)}containsKey(e,t){return q.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new xc(0),this.zr=!1,this.zr=!0,this.jr=new dA,this.referenceDelegate=e(this),this.Hr=new gA(this),this.indexManager=new eA,this.remoteDocumentCache=function(o){return new pA(o)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new JR(t),this.Yr=new cA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new fA(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new yA(this.Gr.next());return this.referenceDelegate.Zr(),i(o).next(l=>this.referenceDelegate.Xr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}ei(e,t){return q.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class yA extends WS{constructor(e){super(),this.currentSequenceNumber=e}}class Uf{constructor(e){this.persistence=e,this.ti=new Mf,this.ni=null}static ri(e){return new Uf(e)}get ii(){if(this.ni)return this.ni;throw Ee()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),q.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),q.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ii.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.ii,i=>{const o=ye.fromPath(i);return this.si(e,o).next(l=>{l||t.removeEntry(o,Te.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return q.or([()=>q.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class yc{constructor(e,t){this.persistence=e,this.oi=new Ts(i=>GS(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=oA(this,t)}static ri(e,t){return new yc(e,t)}Zr(){}Xr(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return q.forEach(this.oi,(i,o)=>this.ar(e,i,o).next(l=>l?q.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(f=>{f||(i++,l.removeEntry(h,Te.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),q.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yu(e.data.value)),t}ar(e,t,i){return q.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=o}static Yi(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Ff(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return pI()?8:qS(zt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.rs(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.ss(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new _A;return this._s(e,t,h).next(f=>{if(l.result=f,this.Xi)return this.us(e,t,h,f.size)})}).next(()=>l.result)}us(e,t,i,o){return i.documentReadCount<this.es?(vo()<=ke.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),q.resolve()):(vo()<=ke.DEBUG&&oe("QueryEngine","Query:",Eo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ts*o?(vo()<=ke.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):q.resolve())}rs(e,t){if(uy(t))return q.resolve(null);let i=nr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=tf(t,null,"F"),i=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=Ne(...l);return this.ns.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.cs(t,f);return this.ls(t,y,h,p.readTime)?this.rs(e,tf(t,null,"F")):this.hs(e,y,t,p)}))})))}ss(e,t,i,o){return uy(t)||o.isEqual(Te.min())?q.resolve(null):this.ns.getDocuments(e,i).next(l=>{const h=this.cs(t,l);return this.ls(t,h,i,o)?q.resolve(null):(vo()<=ke.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Eo(t)),this.hs(e,h,t,BS(o,nl)).next(f=>f))})}cs(e,t){let i=new _t(fv(e));return t.forEach((o,l)=>{bc(e,l)&&(i=i.add(l))}),i}ls(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}_s(e,t,i){return vo()<=ke.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Eo(t)),this.ns.getDocumentsMatchingQuery(e,t,Ai.min(),i)}hs(e,t,i,o){return this.ns.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="LocalStore",EA=3e8;class wA{constructor(e,t,i,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new et(Ae),this.Is=new Ts(l=>Nf(l),xf),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uA(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function TA(n,e,t,i){return new wA(n,e,t,i)}async function Mv(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],f=[];let p=Ne();for(const y of o){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Rs:y,removedBatchIds:h,addedBatchIds:f}))})})}function IA(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(f,p,y,E){const T=y.batch,R=T.keys();let O=q.resolve();return R.forEach(L=>{O=O.next(()=>E.getEntry(p,L)).next(z=>{const b=y.docVersions.get(L);Fe(b!==null),z.version.compareTo(b)<0&&(T.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),E.addEntry(z)))})}),O.next(()=>f.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let p=Ne();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Uv(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function SA(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const f=[];e.targetChanges.forEach((E,T)=>{const R=o.get(T);if(!R)return;f.push(t.Hr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,E.addedDocuments,T)));let O=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(Dt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(E.resumeToken,i)),o=o.insert(T,O),function(z,b,H){return z.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=EA?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(R,O,E)&&f.push(t.Hr.updateTargetData(l,O))});let p=Fr(),y=Ne();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),f.push(RA(l,h,e.documentUpdates).next(E=>{p=E.Vs,y=E.fs})),!i.isEqual(Te.min())){const E=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(E)}return q.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.Ts=o,l))}function RA(n,e,t){let i=Ne(),o=Ne();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Fr();return t.forEach((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):oe(jf,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)}),{Vs:h,fs:o}})}function AA(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Cf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function CA(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Hr.getTargetData(i,e).next(l=>l?(o=l,q.resolve(o)):t.Hr.allocateTargetId(i).next(h=>(o=new Ei(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.Ts.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function af(n,e,t){const i=Se(n),o=i.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!jo(h))throw h;oe(jf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ts=i.Ts.remove(e),i.Is.delete(o.target)}function Ty(n,e,t){const i=Se(n);let o=Te.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,E){const T=Se(p),R=T.Is.get(E);return R!==void 0?q.resolve(T.Ts.get(R)):T.Hr.getTargetData(y,E)}(i,h,nr(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(h,f.targetId).next(p=>{l=p})}).next(()=>i.Ps.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:Ne())).next(f=>(PA(i,pR(e),f),{documents:f,gs:l})))}function PA(n,e,t){let i=n.Es.get(e)||Te.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Es.set(e,i)}class Iy{constructor(){this.activeTargetIds=ER()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kA{constructor(){this.ho=new Iy,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Iy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="ConnectivityMonitor";class Ry{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){oe(Sy,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){oe(Sy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu=null;function lf(){return Hu===null?Hu=function(){return 268435456+Math.round(2147483648*Math.random())}():Hu++,"0x"+Hu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="RestConnection",xA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class DA{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${o}`,this.wo=this.databaseId.database===cc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}So(e,t,i,o,l){const h=lf(),f=this.bo(e,t.toUriEncodedString());oe(Vd,`Sending RPC '${e}' ${h}:`,f,i);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,l),this.vo(e,f,p,i).then(y=>(oe(Vd,`Received RPC '${e}' ${h}: `,y),y),y=>{throw Po(Vd,`RPC '${e}' ${h} failed with error: `,y,"url: ",f,"request:",i),y})}Co(e,t,i,o,l,h){return this.So(e,t,i,o,l)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),i&&i.headers.forEach((o,l)=>e[l]=o)}bo(e,t){const i=xA[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class LA extends DA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,o){const l=lf();return new Promise((h,f)=>{const p=new z_;p.setWithCredentials(!0),p.listenOnce($_.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Xu.NO_ERROR:const E=p.getResponseJson();oe(Ft,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Xu.TIMEOUT:oe(Ft,`RPC '${e}' ${l} timed out`),f(new fe(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const T=p.getStatus();if(oe(Ft,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let R=p.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R==null?void 0:R.error;if(O&&O.status&&O.message){const L=function(b){const H=b.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(H)>=0?H:Y.UNKNOWN}(O.status);f(new fe(L,O.message))}else f(new fe(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new fe(Y.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{oe(Ft,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);oe(Ft,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}Wo(e,t,i){const o=lf(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=q_(),f=W_(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");oe(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=h.createWebChannel(E,p);let R=!1,O=!1;const L=new OA({Fo:b=>{O?oe(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(R||(oe(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),R=!0),oe(Ft,`RPC '${e}' stream ${o} sending:`,b),T.send(b))},Mo:()=>T.close()}),z=(b,H,Z)=>{b.listen(H,G=>{try{Z(G)}catch(re){setTimeout(()=>{throw re},0)}})};return z(T,Ha.EventType.OPEN,()=>{O||(oe(Ft,`RPC '${e}' stream ${o} transport opened.`),L.Qo())}),z(T,Ha.EventType.CLOSE,()=>{O||(O=!0,oe(Ft,`RPC '${e}' stream ${o} transport closed`),L.Uo())}),z(T,Ha.EventType.ERROR,b=>{O||(O=!0,Po(Ft,`RPC '${e}' stream ${o} transport errored:`,b),L.Uo(new fe(Y.UNAVAILABLE,"The operation could not be completed")))}),z(T,Ha.EventType.MESSAGE,b=>{var H;if(!O){const Z=b.data[0];Fe(!!Z);const G=Z,re=(G==null?void 0:G.error)||((H=G[0])===null||H===void 0?void 0:H.error);if(re){oe(Ft,`RPC '${e}' stream ${o} received error:`,re);const Ie=re.status;let ve=function(A){const k=lt[A];if(k!==void 0)return Rv(k)}(Ie),N=re.message;ve===void 0&&(ve=Y.INTERNAL,N="Unknown error status: "+Ie+" with message "+re.message),O=!0,L.Uo(new fe(ve,N)),T.close()}else oe(Ft,`RPC '${e}' stream ${o} received:`,Z),L.Ko(Z)}}),z(f,H_.STAT_EVENT,b=>{b.stat===Qd.PROXY?oe(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===Qd.NOPROXY&&oe(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{L.$o()},0),L}}function bd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n){return new UR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=o,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="PersistentStream";class jv{constructor(e,t,i,o,l,h,f,p){this.Ti=e,this.n_=i,this.r_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Fv(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.i_===t&&this.V_(i,o)},i=>{e(()=>{const o=new fe(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(o)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{i(()=>this.m_(o))}),this.stream.onMessage(o=>{i(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return oe(Ay,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(oe(Ay,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VA extends jv{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=BR(this.serializer,e),i=function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?rr(h.readTime):Te.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=of(this.serializer),t.addTarget=function(l,h){let f;const p=h.target;if(f=ef(p)?{documents:HR(l,p)}:{query:WR(l,p).ht},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Pv(l,h.resumeToken);const y=nf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Te.min())>0){f.readTime=gc(l,h.snapshotVersion.toTimestamp());const y=nf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const i=KR(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=of(this.serializer),t.removeTarget=e,this.I_(t)}}class bA extends jv{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=$R(e.writeResults,e.commitTime),i=rr(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=of(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>zR(this.serializer,i))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{}class UA extends MA{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new fe(Y.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.So(e,rf(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(Y.UNKNOWN,l.toString())})}Co(e,t,i,o,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.Co(e,rf(t,i),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new fe(Y.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class FA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ur(t),this.N_=!1):oe("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="RemoteStore";class jA{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(h=>{i.enqueueAndForget(async()=>{Ss(this)&&(oe(ps,"Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.W_.add(4),await yl(y),y.j_.set("Unknown"),y.W_.delete(4),await Bc(y)}(this))})}),this.j_=new FA(i,o)}}async function Bc(n){if(Ss(n))for(const e of n.G_)await e(!0)}async function yl(n){for(const e of n.G_)await e(!1)}function Bv(n,e){const t=Se(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Hf(t)?$f(t):Bo(t).c_()&&zf(t,e))}function Bf(n,e){const t=Se(n),i=Bo(t);t.K_.delete(e),i.c_()&&zv(t,e),t.K_.size===0&&(i.c_()?i.P_():Ss(t)&&t.j_.set("Unknown"))}function zf(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bo(n).y_(e)}function zv(n,e){n.H_.Ne(e),Bo(n).w_(e)}function $f(n){n.H_=new LR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Bo(n).start(),n.j_.B_()}function Hf(n){return Ss(n)&&!Bo(n).u_()&&n.K_.size>0}function Ss(n){return Se(n).W_.size===0}function $v(n){n.H_=void 0}async function BA(n){n.j_.set("Online")}async function zA(n){n.K_.forEach((e,t)=>{zf(n,e)})}async function $A(n,e){$v(n),Hf(n)?(n.j_.q_(e),$f(n)):n.j_.set("Unknown")}async function HA(n,e,t){if(n.j_.set("Online"),e instanceof Cv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.K_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.K_.delete(f),o.H_.removeTarget(f))}(n,e)}catch(i){oe(ps,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await _c(n,i)}else if(e instanceof ec?n.H_.We(e):e instanceof Av?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Te.min()))try{const i=await Uv(n.localStore);t.compareTo(i)>=0&&await function(l,h){const f=l.H_.ot(h);return f.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.K_.get(y);E&&l.K_.set(y,E.withResumeToken(p.resumeToken,h))}}),f.targetMismatches.forEach((p,y)=>{const E=l.K_.get(p);if(!E)return;l.K_.set(p,E.withResumeToken(Dt.EMPTY_BYTE_STRING,E.snapshotVersion)),zv(l,p);const T=new Ei(E.target,p,y,E.sequenceNumber);zf(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(i){oe(ps,"Failed to raise snapshot:",i),await _c(n,i)}}async function _c(n,e,t){if(!jo(e))throw e;n.W_.add(1),await yl(n),n.j_.set("Offline"),t||(t=()=>Uv(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe(ps,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Bc(n)})}function Hv(n,e){return e().catch(t=>_c(n,t,e))}async function zc(n){const e=Se(n),t=Ni(e);let i=e.U_.length>0?e.U_[e.U_.length-1].batchId:Cf;for(;WA(e);)try{const o=await AA(e.localStore,i);if(o===null){e.U_.length===0&&t.P_();break}i=o.batchId,qA(e,o)}catch(o){await _c(e,o)}Wv(e)&&qv(e)}function WA(n){return Ss(n)&&n.U_.length<10}function qA(n,e){n.U_.push(e);const t=Ni(n);t.c_()&&t.S_&&t.b_(e.mutations)}function Wv(n){return Ss(n)&&!Ni(n).u_()&&n.U_.length>0}function qv(n){Ni(n).start()}async function KA(n){Ni(n).C_()}async function GA(n){const e=Ni(n);for(const t of n.U_)e.b_(t.mutations)}async function QA(n,e,t){const i=n.U_.shift(),o=Lf.from(i,e,t);await Hv(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await zc(n)}async function XA(n,e){e&&Ni(n).S_&&await async function(i,o){if(function(h){return DR(h)&&h!==Y.ABORTED}(o.code)){const l=i.U_.shift();Ni(i).h_(),await Hv(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await zc(i)}}(n,e),Wv(n)&&qv(n)}async function Cy(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),oe(ps,"RemoteStore received new credentials");const i=Ss(t);t.W_.add(3),await yl(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Bc(t)}async function YA(n,e){const t=Se(n);e?(t.W_.delete(2),await Bc(t)):e||(t.W_.add(2),await yl(t),t.j_.set("Unknown"))}function Bo(n){return n.J_||(n.J_=function(t,i,o){const l=Se(t);return l.M_(),new VA(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{xo:BA.bind(null,n),No:zA.bind(null,n),Lo:$A.bind(null,n),p_:HA.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Hf(n)?$f(n):n.j_.set("Unknown")):(await n.J_.stop(),$v(n))})),n.J_}function Ni(n){return n.Y_||(n.Y_=function(t,i,o){const l=Se(t);return l.M_(),new bA(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:KA.bind(null,n),Lo:XA.bind(null,n),D_:GA.bind(null,n),v_:QA.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await zc(n)):(await n.Y_.stop(),n.U_.length>0&&(oe(ps,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Wf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qf(n,e){if(Ur("AsyncQueue",`${e}: ${n}`),jo(n))return new fe(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static emptySet(e){return new So(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=Wa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof So)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new So;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.Z_=new et(ye.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ee():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Oo{constructor(e,t,i,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Oo(e,t,So.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class ZA{constructor(){this.queries=ky(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=ky(),l.forEach((h,f)=>{for(const p of f.ta)p.onError(i)})})(this,new fe(Y.ABORTED,"Firestore shutting down"))}}function ky(){return new Ts(n=>dv(n),Vc)}async function Kv(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.na()&&e.ra()&&(i=2):(l=new JA,i=e.ra()?0:1);try{switch(i){case 0:l.ea=await t.onListen(o,!0);break;case 1:l.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=qf(h,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&Kf(t)}async function Gv(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.ta.indexOf(e);h>=0&&(l.ta.splice(h,1),l.ta.length===0?o=e.ra()?0:1:!l.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function eC(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.ta)f.oa(o)&&(i=!0);h.ea=o}}i&&Kf(t)}function tC(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.ta)l.onError(t);i.queries.delete(e)}function Kf(n){n.ia.forEach(e=>{e.next()})}var uf,Ny;(Ny=uf||(uf={}))._a="default",Ny.Cache="cache";class Qv{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Oo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==uf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.key=e}}class Yv{constructor(e){this.key=e}}class nC{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ne(),this.mutatedKeys=Ne(),this.ya=fv(e),this.wa=new So(this.ya)}get Sa(){return this.fa}ba(e,t){const i=t?t.Da:new Py,o=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const R=o.get(E),O=bc(this.query,T)?T:null,L=!!R&&this.mutatedKeys.has(R.key),z=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let b=!1;R&&O?R.data.isEqual(O.data)?L!==z&&(i.track({type:3,doc:O}),b=!0):this.va(R,O)||(i.track({type:2,doc:O}),b=!0,(p&&this.ya(O,p)>0||y&&this.ya(O,y)<0)&&(f=!0)):!R&&O?(i.track({type:0,doc:O}),b=!0):R&&!O&&(i.track({type:1,doc:R}),b=!0,(p||y)&&(f=!0)),b&&(O?(h=h.add(O),l=z?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{wa:h,Da:i,ls:f,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((E,T)=>function(O,L){const z=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return z(O)-z(L)}(E.type,T.type)||this.ya(E.doc,T.doc)),this.Ca(i),o=o!=null&&o;const f=t&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,h.length!==0||y?{snapshot:new Oo(this.query,e.wa,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:f}:{Ma:f}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Py,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ne(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new Yv(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new Xv(i))}),t}Oa(e){this.fa=e.gs,this.pa=Ne();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Oo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Gf="SyncEngine";class rC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class iC{constructor(e){this.key=e,this.Ba=!1}}class sC{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new Ts(f=>dv(f),Vc),this.qa=new Map,this.Qa=new Set,this.$a=new et(ye.comparator),this.Ua=new Map,this.Ka=new Mf,this.Wa={},this.Ga=new Map,this.za=Do.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function oC(n,e,t=!0){const i=rE(n);let o;const l=i.ka.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Na()):o=await Jv(i,e,t,!0),o}async function aC(n,e){const t=rE(n);await Jv(t,e,!0,!1)}async function Jv(n,e,t,i){const o=await CA(n.localStore,nr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await lC(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&Bv(n.remoteStore,o),f}async function lC(n,e,t,i,o){n.Ha=(T,R,O)=>async function(z,b,H,Z){let G=b.view.ba(H);G.ls&&(G=await Ty(z.localStore,b.query,!1).then(({documents:N})=>b.view.ba(N,G)));const re=Z&&Z.targetChanges.get(b.targetId),Ie=Z&&Z.targetMismatches.get(b.targetId)!=null,ve=b.view.applyChanges(G,z.isPrimaryClient,re,Ie);return Dy(z,b.targetId,ve.Ma),ve.snapshot}(n,T,R,O);const l=await Ty(n.localStore,e,!0),h=new nC(e,l.gs),f=h.ba(l.documents),p=gl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,p);Dy(n,t,y.Ma);const E=new rC(e,t,h);return n.ka.set(e,E),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),y.snapshot}async function uC(n,e,t){const i=Se(n),o=i.ka.get(e),l=i.qa.get(o.targetId);if(l.length>1)return i.qa.set(o.targetId,l.filter(h=>!Vc(h,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await af(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Bf(i.remoteStore,o.targetId),cf(i,o.targetId)}).catch(Fo)):(cf(i,o.targetId),await af(i.localStore,o.targetId,!0))}async function cC(n,e){const t=Se(n),i=t.ka.get(e),o=t.qa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Bf(t.remoteStore,i.targetId))}async function hC(n,e,t){const i=_C(n);try{const o=await function(h,f){const p=Se(h),y=yt.now(),E=f.reduce((O,L)=>O.add(L.key),Ne());let T,R;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let L=Fr(),z=Ne();return p.ds.getEntries(O,E).next(b=>{L=b,L.forEach((H,Z)=>{Z.isValidDocument()||(z=z.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,L)).next(b=>{T=b;const H=[];for(const Z of f){const G=CR(Z,T.get(Z.key).overlayedDocument);G!=null&&H.push(new Is(Z.key,G,sv(G.value.mapValue),Lr.exists(!0)))}return p.mutationQueue.addMutationBatch(O,y,H,f)}).next(b=>{R=b;const H=b.applyToLocalDocumentSet(T,z);return p.documentOverlayCache.saveOverlays(O,b.batchId,H)})}).then(()=>({batchId:R.batchId,changes:mv(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,f,p){let y=h.Wa[h.currentUser.toKey()];y||(y=new et(Ae)),y=y.insert(f,p),h.Wa[h.currentUser.toKey()]=y}(i,o.batchId,t),await _l(i,o.changes),await zc(i.remoteStore)}catch(o){const l=qf(o,"Failed to persist write");t.reject(l)}}async function Zv(n,e){const t=Se(n);try{const i=await SA(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ua.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?Fe(h.Ba):o.removedDocuments.size>0&&(Fe(h.Ba),h.Ba=!1))}),await _l(t,i,e)}catch(i){await Fo(i)}}function xy(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.ka.forEach((l,h)=>{const f=h.view.sa(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const p=Se(h);p.onlineState=f;let y=!1;p.queries.forEach((E,T)=>{for(const R of T.ta)R.sa(f)&&(y=!0)}),y&&Kf(p)}(i.eventManager,e),o.length&&i.La.p_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dC(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ua.get(e),l=o&&o.key;if(l){let h=new et(ye.comparator);h=h.insert(l,Bt.newNoDocument(l,Te.min()));const f=Ne().add(l),p=new Fc(Te.min(),new Map,new et(Ae),h,f);await Zv(i,p),i.$a=i.$a.remove(l),i.Ua.delete(e),Qf(i)}else await af(i.localStore,e,!1).then(()=>cf(i,e,t)).catch(Fo)}async function fC(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await IA(t.localStore,e);tE(t,i,null),eE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await _l(t,o)}catch(o){await Fo(o)}}async function pC(n,e,t){const i=Se(n);try{const o=await function(h,f){const p=Se(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,f).next(T=>(Fe(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);tE(i,e,t),eE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await _l(i,o)}catch(o){await Fo(o)}}function eE(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function tE(n,e,t){const i=Se(n);let o=i.Wa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Wa[i.currentUser.toKey()]=o}}function cf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(i=>{n.Ka.containsKey(i)||nE(n,i)})}function nE(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Bf(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),Qf(n))}function Dy(n,e,t){for(const i of t)i instanceof Xv?(n.Ka.addReference(i.key,e),mC(n,i)):i instanceof Yv?(oe(Gf,"Document no longer in limbo: "+i.key),n.Ka.removeReference(i.key,e),n.Ka.containsKey(i.key)||nE(n,i.key)):Ee()}function mC(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(oe(Gf,"New document in limbo: "+t),n.Qa.add(i),Qf(n))}function Qf(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ye(Xe.fromString(e)),i=n.za.next();n.Ua.set(i,new iC(t)),n.$a=n.$a.insert(t,i),Bv(n.remoteStore,new Ei(nr(Df(t.path)),i,"TargetPurposeLimboResolution",xc.ae))}}async function _l(n,e,t){const i=Se(n),o=[],l=[],h=[];i.ka.isEmpty()||(i.ka.forEach((f,p)=>{h.push(i.Ha(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Ff.Yi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),i.La.p_(o),await async function(p,y){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>q.forEach(y,R=>q.forEach(R.Hi,O=>E.persistence.referenceDelegate.addReference(T,R.targetId,O)).next(()=>q.forEach(R.Ji,O=>E.persistence.referenceDelegate.removeReference(T,R.targetId,O)))))}catch(T){if(!jo(T))throw T;oe(jf,"Failed to update sequence numbers: "+T)}for(const T of y){const R=T.targetId;if(!T.fromCache){const O=E.Ts.get(R),L=O.snapshotVersion,z=O.withLastLimboFreeSnapshotVersion(L);E.Ts=E.Ts.insert(R,z)}}}(i.localStore,l))}async function gC(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){oe(Gf,"User change. New user:",e.toKey());const i=await Mv(t.localStore,e);t.currentUser=e,function(l,h){l.Ga.forEach(f=>{f.forEach(p=>{p.reject(new fe(Y.CANCELLED,h))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await _l(t,i.Rs)}}function yC(n,e){const t=Se(n),i=t.Ua.get(e);if(i&&i.Ba)return Ne().add(i.key);{let o=Ne();const l=t.qa.get(e);if(!l)return o;for(const h of l){const f=t.ka.get(h);o=o.unionWith(f.view.Sa)}return o}}function rE(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dC.bind(null,e),e.La.p_=eC.bind(null,e.eventManager),e.La.Ja=tC.bind(null,e.eventManager),e}function _C(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pC.bind(null,e),e}class vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return TA(this.persistence,new vA,e.initialUser,this.serializer)}Xa(e){return new bv(Uf.ri,this.serializer)}Za(e){return new kA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vc.provider={build:()=>new vc};class vC extends vc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Fe(this.persistence.referenceDelegate instanceof yc);const i=this.persistence.referenceDelegate.garbageCollector;return new iA(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new bv(i=>yc.ri(i,t),this.serializer)}}class hf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>xy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=gC.bind(null,this.syncEngine),await YA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZA}()}createDatastore(e){const t=jc(e.databaseInfo.databaseId),i=function(l){return new LA(l)}(e.databaseInfo);return function(l,h,f,p){return new UA(l,h,f,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,f){return new jA(i,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>xy(this.syncEngine,t,0),function(){return Ry.D()?new Ry:new NA}())}createSyncEngine(e,t){return function(o,l,h,f,p,y,E){const T=new sC(o,l,h,f,p,y);return E&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);oe(ps,"RemoteStore shutting down."),l.W_.add(5),await yl(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hf.provider={build:()=>new hf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="FirestoreClient";class EC{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Q_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{oe(xi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(oe(xi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=qf(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Md(n,e){n.asyncQueue.verifyOperationInProgress(),oe(xi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Mv(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Oy(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wC(n);oe(xi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Cy(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Cy(e.remoteStore,o)),n._onlineComponents=e}async function wC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(xi,"Using user provided OfflineComponentProvider");try{await Md(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Po("Error using user provided cache. Falling back to memory cache: "+t),await Md(n,new vc)}}else oe(xi,"Using default OfflineComponentProvider"),await Md(n,new vC(void 0));return n._offlineComponents}async function sE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(xi,"Using user provided OnlineComponentProvider"),await Oy(n,n._uninitializedComponentsProvider._online)):(oe(xi,"Using default OnlineComponentProvider"),await Oy(n,new hf))),n._onlineComponents}function TC(n){return sE(n).then(e=>e.syncEngine)}async function oE(n){const e=await sE(n),t=e.eventManager;return t.onListen=oC.bind(null,e.syncEngine),t.onUnlisten=uC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cC.bind(null,e.syncEngine),t}function IC(n,e,t={}){const i=new Or;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,y){const E=new iE({next:R=>{E.su(),h.enqueueAndForget(()=>Gv(l,T));const O=R.docs.has(f);!O&&R.fromCache?y.reject(new fe(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&R.fromCache&&p&&p.source==="server"?y.reject(new fe(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new Qv(Df(f.path),E,{includeMetadataChanges:!0,Ta:!0});return Kv(l,T)}(await oE(n),n.asyncQueue,e,t,i)),i.promise}function SC(n,e,t={}){const i=new Or;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,y){const E=new iE({next:R=>{E.su(),h.enqueueAndForget(()=>Gv(l,T)),R.fromCache&&p.source==="server"?y.reject(new fe(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new Qv(f,E,{includeMetadataChanges:!0,Ta:!0});return Kv(l,T)}(await oE(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(n,e,t){if(!t)throw new fe(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function RC(n,e,t,i){if(e===!0&&i===!0)throw new fe(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Vy(n){if(!ye.isDocumentKey(n))throw new fe(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function by(n){if(ye.isDocumentKey(n))throw new fe(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function ms(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xf(n);throw new fe(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firestore.googleapis.com",My=!0;class Uy{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uE,this.ssl=My}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:My;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nA)throw new fe(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new fe(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new fe(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new fe(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new DS;switch(i.type){case"firstParty":return new bS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new fe(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Ly.get(t);i&&(oe("ComponentProvider","Removing Datastore"),Ly.delete(t),i.terminate())}(this),Promise.resolve()}}function AC(n,e,t,i={}){var o;const l=(n=ms(n,$c))._getSettings(),h=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;l.host!==uE&&l.host!==f&&Po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},l),{host:f,ssl:!1,emulatorOptions:i});if(!hs(p,h)&&(n._setSettings(p),i.mockUserToken)){let y,E;if(typeof i.mockUserToken=="string")y=i.mockUserToken,E=jt.MOCK_USER;else{y=V_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new fe(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new jt(T)}n._authCredentials=new OS(new K_(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Hc(this.firestore,e,this._query)}}class fn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class Si extends Hc{constructor(e,t,i){super(e,t,Df(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new ye(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function CC(n,e,...t){if(n=Rt(n),lE("collection","path",e),n instanceof $c){const i=Xe.fromString(e,...t);return by(i),new Si(n,null,i)}{if(!(n instanceof fn||n instanceof Si))throw new fe(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Xe.fromString(e,...t));return by(i),new Si(n.firestore,null,i)}}function cE(n,e,...t){if(n=Rt(n),arguments.length===1&&(e=Q_.newId()),lE("doc","path",e),n instanceof $c){const i=Xe.fromString(e,...t);return Vy(i),new fn(n,null,new ye(i))}{if(!(n instanceof fn||n instanceof Si))throw new fe(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Xe.fromString(e,...t));return Vy(i),new fn(n.firestore,n instanceof Si?n.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="AsyncQueue";class jy{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Fv(this,"async_queue_retry"),this.Su=()=>{const i=bd();i&&oe(Fy,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const t=bd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=bd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Or;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!jo(e))throw e;oe(Fy,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(i);throw Ur("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.pu=!1,i))));return this.bu=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Wf.createAndSchedule(this,e,t,i,l=>this.Fu(l));return this.fu.push(o),o}Du(){this.gu&&Ee()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Wc extends $c{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new jy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jy(e),this._firestoreClient=void 0,await e}}}function hE(n,e){const t=typeof n=="object"?n:Rf(),i=typeof n=="string"?n:cc,o=Nc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=D_("firestore");l&&AC(o,...l)}return o}function Yf(n){if(n._terminated)throw new fe(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PC(n),n._firestoreClient}function PC(n){var e,t,i;const o=n._freezeSettings(),l=function(f,p,y,E){return new YS(f,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,aE(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new EC(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lo(Dt.fromBase64String(e))}catch(t){throw new fe(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Lo(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=/^__.*__$/;class NC{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,t,this.fieldTransforms):new ml(e,this.data,t,this.fieldTransforms)}}function fE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class tp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new tp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:i,Qu:!1});return o.$u(e),o}Uu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:i,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ec(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(fE(this.Lu)&&kC.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class xC{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||jc(e)}ju(e,t,i,o=!1){return new tp({Lu:e,methodName:t,zu:i,path:xt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function DC(n){const e=n._freezeSettings(),t=jc(n._databaseId);return new xC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function OC(n,e,t,i,o,l={}){const h=n.ju(l.merge||l.mergeFields?2:0,e,t,o);yE("Data must be an object, but it was:",h,i);const f=mE(i,h);let p,y;if(l.merge)p=new jn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const R=LC(e,T,t);if(!h.contains(R))throw new fe(Y.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);bC(E,R)||E.push(R)}p=new jn(E),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new NC(new Sn(f),p,y)}function pE(n,e){if(gE(n=Rt(n)))return yE("Unsupported field value:",e,n),mE(n,e);if(n instanceof dE)return function(i,o){if(!fE(o.Lu))throw o.Wu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const f of i){let p=pE(f,o.Ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=Rt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return wR(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=yt.fromDate(i);return{timestampValue:gc(o.serializer,l)}}if(i instanceof yt){const l=new yt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:gc(o.serializer,l)}}if(i instanceof Zf)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Lo)return{bytesValue:Pv(o.serializer,i._byteString)};if(i instanceof fn){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:bf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof ep)return function(h,f){return{mapValue:{fields:{[rv]:{stringValue:iv},[hc]:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw f.Wu("VectorValues must only contain numeric values.");return Of(f.serializer,y)})}}}}}}(i,o);throw o.Wu(`Unsupported field value: ${Xf(i)}`)}(n,e)}function mE(n,e){const t={};return Y_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(n,(i,o)=>{const l=pE(o,e.qu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function gE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yt||n instanceof Zf||n instanceof Lo||n instanceof fn||n instanceof dE||n instanceof ep)}function yE(n,e,t){if(!gE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Xf(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function LC(n,e,t){if((e=Rt(e))instanceof Jf)return e._internalPath;if(typeof e=="string")return _E(n,e);throw Ec("Field path arguments must be of type string or ",n,!1,void 0,t)}const VC=new RegExp("[~\\*/\\[\\]]");function _E(n,e,t){if(e.search(VC)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Jf(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ec(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new fe(Y.INVALID_ARGUMENT,f+n+p)}function bC(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(EE("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MC extends vE{data(){return super.data()}}function EE(n,e){return typeof e=="string"?_E(n,e):e instanceof Jf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FC{convertValue(e,t="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ws(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[hc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new ep(l)}convertGeoPoint(e){return new Zf(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Oc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(rl(e));default:return null}}convertTimestamp(e){const t=Ci(e);return new yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Xe.fromString(e);Fe(Lv(i));const o=new il(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wE extends vE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(EE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class tc extends wE{data(e={}){return super.data(e)}}class BC{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ka(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new tc(this._firestore,this._userDataWriter,i.key,i,new Ka(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const p=new tc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ka(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new tc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ka(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:zC(f.type),doc:p,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(n){n=ms(n,fn);const e=ms(n.firestore,Wc);return IC(Yf(e),n._key).then(t=>KC(e,n,t))}class TE extends FC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,t)}}function HC(n){n=ms(n,Hc);const e=ms(n.firestore,Wc),t=Yf(e),i=new TE(e);return UC(n._query),SC(t,n._query).then(o=>new BC(e,i,n,o))}function WC(n,e,t){n=ms(n,fn);const i=ms(n.firestore,Wc),o=jC(n.converter,e);return qC(i,[OC(DC(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Lr.none())])}function qC(n,e){return function(i,o){const l=new Or;return i.asyncQueue.enqueueAndForget(async()=>hC(await TC(i),o,l)),l.promise}(Yf(n),e)}function KC(n,e,t){const i=t.docs.get(e._key),o=new TE(n);return new wE(n,o,e._key,i,new Ka(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Uo=o})(Es),ds(new Ri("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Wc(new LS(i.getProvider("auth-internal")),new MS(h,i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new fe(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new il(y.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),tr(qg,Kg,e),tr(qg,Kg,"esm2017")})();var GC="firebase",QC="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(GC,QC,"app");function np(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function IE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XC=IE,SE=new fl("auth","Firebase",IE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new If("@firebase/auth");function YC(n,...e){wc.logLevel<=ke.WARN&&wc.warn(`Auth (${Es}): ${n}`,...e)}function nc(n,...e){wc.logLevel<=ke.ERROR&&wc.error(`Auth (${Es}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,...e){throw rp(n,...e)}function ir(n,...e){return rp(n,...e)}function RE(n,e,t){const i=Object.assign(Object.assign({},XC()),{[e]:t});return new fl("auth","Firebase",i).create(e,{appName:n.name})}function Vr(n){return RE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return SE.create(n,...e)}function _e(n,e,...t){if(!n)throw rp(e,...t)}function kr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw nc(e),new Error(e)}function jr(n,e){n||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function JC(){return By()==="http:"||By()==="https:"}function By(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JC()||hI()||"connection"in navigator)?navigator.onLine:!0}function eP(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=lI()||dI()}get(){return ZC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n,e){jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=new vl(3e4,6e4);function Di(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zr(n,e,t,i,o={}){return CE(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=pl(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return cI()||(y.referrerPolicy="no-referrer"),AE.fetch()(PE(n,n.config.apiHost,t,f),y)})}async function CE(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},tP),e);try{const o=new iP(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Wu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Wu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Wu(n,"user-disabled",h);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw RE(n,E,y);Bn(n,E)}}catch(o){if(o instanceof cr)throw o;Bn(n,"network-request-failed",{message:String(o)})}}async function El(n,e,t,i,o={}){const l=await zr(n,e,t,i,o);return"mfaPendingCredential"in l&&Bn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function PE(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?ip(n.config,o):`${n.config.apiScheme}://${o}`}function rP(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ir(this.auth,"network-request-failed")),nP.get())})}}function Wu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ir(n,e,i);return o.customData._tokenResponse=t,o}function zy(n){return n!==void 0&&n.enterprise!==void 0}class sP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return rP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function oP(n,e){return zr(n,"GET","/v2/recaptchaConfig",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(n,e){return zr(n,"POST","/v1/accounts:delete",e)}async function kE(n,e){return zr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lP(n,e=!1){const t=Rt(n),i=await t.getIdToken(e),o=sp(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ja(Ud(o.auth_time)),issuedAtTime:Ja(Ud(o.iat)),expirationTime:Ja(Ud(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ud(n){return Number(n)*1e3}function sp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const o=N_(t);return o?JSON.parse(o):(nc("Failed to decode base64 JWT payload"),null)}catch(o){return nc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function $y(n){const e=sp(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof cr&&uP(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function uP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ja(this.lastLoginAt),this.creationTime=Ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Vo(n,kE(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?NE(l.providerUserInfo):[],f=dP(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new ff(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function hP(n){const e=Rt(n);await Tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dP(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function NE(n){return n.map(e=>{var{providerId:t}=e,i=np(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(n,e){const t=await CE(n,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=PE(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",AE.fetch()(h,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pP(n,e){return zr(n,"POST","/v2/accounts:revokeToken",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=$y(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await fP(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Ro;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=np(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new ff(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lP(this,e)}reload(){return hP(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Tc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await Vo(this,aP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,L=(h=t.photoURL)!==null&&h!==void 0?h:void 0,z=(f=t.tenantId)!==null&&f!==void 0?f:void 0,b=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Z=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:G,emailVerified:re,isAnonymous:Ie,providerData:ve,stsTokenManager:N}=t;_e(G&&N,e,"internal-error");const I=Ro.fromJSON(this.name,N);_e(typeof G=="string",e,"internal-error"),pi(T,e.name),pi(R,e.name),_e(typeof re=="boolean",e,"internal-error"),_e(typeof Ie=="boolean",e,"internal-error"),pi(O,e.name),pi(L,e.name),pi(z,e.name),pi(b,e.name),pi(H,e.name),pi(Z,e.name);const A=new Nr({uid:G,auth:e,email:R,emailVerified:re,displayName:T,isAnonymous:Ie,photoURL:L,phoneNumber:O,tenantId:z,stsTokenManager:I,createdAt:H,lastLoginAt:Z});return ve&&Array.isArray(ve)&&(A.providerData=ve.map(k=>Object.assign({},k))),b&&(A._redirectEventId=b),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new Ro;o.updateFromServerResponse(t);const l=new Nr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Tc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?NE(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Ro;f.updateFromIdToken(i);const p=new Nr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ff(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Map;function xr(n){jr(n instanceof Function,"Expected a class definition");let e=Hy.get(n);return e?(jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xE.type="NONE";const Wy=xE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n,e,t){return`firebase:${n}:${e}:${t}`}class Ao{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=rc(this.userKey,o.apiKey,l),this.fullPersistenceKey=rc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ao(xr(Wy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||xr(Wy);const h=rc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(h);if(E){const T=Nr._fromJSON(e,E);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ao(l,e,i):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Ao(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ME(e))return"Blackberry";if(UE(e))return"Webos";if(OE(e))return"Safari";if((e.includes("chrome/")||LE(e))&&!e.includes("edge/"))return"Chrome";if(bE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function DE(n=zt()){return/firefox\//i.test(n)}function OE(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LE(n=zt()){return/crios\//i.test(n)}function VE(n=zt()){return/iemobile/i.test(n)}function bE(n=zt()){return/android/i.test(n)}function ME(n=zt()){return/blackberry/i.test(n)}function UE(n=zt()){return/webos/i.test(n)}function op(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mP(n=zt()){var e;return op(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gP(){return fI()&&document.documentMode===10}function FE(n=zt()){return op(n)||bE(n)||UE(n)||ME(n)||/windows phone/i.test(n)||VE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n,e=[]){let t;switch(n){case"Browser":t=qy(zt());break;case"Worker":t=`${qy(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Es}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(n,e={}){return zr(n,"GET","/v2/passwordPolicy",Di(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=6;class EP{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:vP,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ky(this),this.idTokenSubscription=new Ky(this),this.beforeStateQueue=new yP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await kE(this,{idToken:e}),i=await Nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(hn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Tc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(Vr(this));const t=e?Rt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _P(this),t=new EP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await pP(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&YC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rs(n){return Rt(n)}class Ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=wI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TP(n){qc=n}function BE(n){return qc.loadJS(n)}function IP(){return qc.recaptchaEnterpriseScript}function SP(){return qc.gapiScript}function RP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class AP{constructor(){this.enterprise=new CP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class CP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const PP="recaptcha-enterprise",zE="NO_RECAPTCHA";class kP{constructor(e){this.type=PP,this.auth=Rs(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{oP(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new sP(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,h,f){const p=window.grecaptcha;zy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(zE)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new AP().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&zy(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=IP();p.length!==0&&(p+=f),BE(p).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Gy(n,e,t,i=!1,o=!1){const l=new kP(n);let h;if(o)h=zE;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function pf(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Gy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Gy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(n,e){const t=Nc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(hs(l,e??{}))return o;Bn(o,"already-initialized")}return t.initialize({options:e})}function xP(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(xr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function DP(n,e,t){const i=Rs(n);_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=$E(e),{host:h,port:f}=OP(e),p=f===null?"":`:${f}`,y={url:`${l}//${h}${p}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){_e(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),_e(hs(y,i.config.emulator)&&hs(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,LP()}function $E(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function OP(n){const e=$E(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Qy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Qy(h)}}}function Qy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function LP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function VP(n,e){return zr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(n,e){return El(n,"POST","/v1/accounts:signInWithPassword",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(n,e){return El(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}async function UP(n,e){return El(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends ap{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ll(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ll(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pf(e,t,"signInWithPassword",bP);case"emailLink":return MP(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pf(e,i,"signUpPassword",VP);case"emailLink":return UP(e,{idToken:t,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(n,e){return El(n,"POST","/v1/accounts:signInWithIdp",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="http://localhost";class gs extends ap{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=np(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new gs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Co(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Co(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Co(e,t)}buildRequest(){const e={requestUri:FP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BP(n){const e=za($a(n)).link,t=e?za($a(e)).deep_link_id:null,i=za($a(n)).deep_link_id;return(i?za($a(i)).link:null)||i||t||e||n}class lp{constructor(e){var t,i,o,l,h,f;const p=za($a(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,T=jP((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=BP(e);try{return new lp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,t){return ll._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=lp.parseLink(t);return _e(i,"argument-error"),ll._fromEmailAndCode(e,i.code,i.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends HE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends wl{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";mi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return gi.credential(t,i)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends wl{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.GITHUB_SIGN_IN_METHOD="github.com";yi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends wl{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return _i.credential(t,i)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(n,e){return El(n,"POST","/v1/accounts:signUp",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Nr._fromIdTokenResponse(e,i,o),h=Xy(i);return new ys({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Xy(i);return new ys({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Xy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends cr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Ic.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Ic(e,t,i,o)}}function WE(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ic._fromErrorAndOperation(n,l,e,i):l})}async function $P(n,e,t=!1){const i=await Vo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ys._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(n,e,t=!1){const{auth:i}=n;if(hn(i.app))return Promise.reject(Vr(i));const o="reauthenticate";try{const l=await Vo(n,WE(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=sp(l.idToken);_e(h,i,"internal-error");const{sub:f}=h;return _e(n.uid===f,i,"user-mismatch"),ys._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Bn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(n,e,t=!1){if(hn(n.app))return Promise.reject(Vr(n));const i="signIn",o=await WE(n,i,e),l=await ys._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function WP(n,e){return qE(Rs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(n){const e=Rs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qP(n,e,t){if(hn(n.app))return Promise.reject(Vr(n));const i=Rs(n),h=await pf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zP).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&KE(n),p}),f=await ys._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function KP(n,e,t){return hn(n.app)?Promise.reject(Vr(n)):WP(Rt(n),zo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&KE(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(n,e){return zr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Rt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Vo(i,GP(i.auth,l));i.displayName=h.displayName||null,i.photoURL=h.photoUrl||null;const f=i.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(h)}function XP(n,e,t,i){return Rt(n).onIdTokenChanged(e,t,i)}function YP(n,e,t){return Rt(n).beforeAuthStateChanged(e,t)}function GE(n,e,t,i){return Rt(n).onAuthStateChanged(e,t,i)}function JP(n){return Rt(n).signOut()}const Sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sc,"1"),this.storage.removeItem(Sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=1e3,ek=10;class XE extends QE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);gP()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ek):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ZP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}XE.type="LOCAL";const tk=XE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE extends QE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}YE.type="SESSION";const JE=YE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Kc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await nk(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=up("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function ik(n){sr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function sk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ok(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ak(){return ZE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="firebaseLocalStorageDb",lk=1,Rc="firebaseLocalStorage",tw="fbase_key";class Tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gc(n,e){return n.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function uk(){const n=indexedDB.deleteDatabase(ew);return new Tl(n).toPromise()}function mf(){const n=indexedDB.open(ew,lk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Rc,{keyPath:tw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Rc)?e(i):(i.close(),await uk(),e(await mf()))})})}async function Yy(n,e,t){const i=Gc(n,!0).put({[tw]:e,value:t});return new Tl(i).toPromise()}async function ck(n,e){const t=Gc(n,!1).get(e),i=await new Tl(t).toPromise();return i===void 0?null:i.value}function Jy(n,e){const t=Gc(n,!0).delete(e);return new Tl(t).toPromise()}const hk=800,dk=3;class nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>dk)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ZE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(ak()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sk(),!this.activeServiceWorker)return;this.sender=new rk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ok()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mf();return await Yy(e,Sc,"1"),await Jy(e,Sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Yy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>ck(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Gc(o,!1).getAll();return new Tl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nw.type="LOCAL";const fk=nw;new vl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(n,e){return e?xr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp extends ap{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mk(n){return qE(n.auth,new cp(n),n.bypassAuthState)}function gk(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),HP(t,new cp(n),n.bypassAuthState)}async function yk(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),$P(t,new cp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mk;case"linkViaPopup":case"linkViaRedirect":return yk;case"reauthViaPopup":case"reauthViaRedirect":return gk;default:Bn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new vl(2e3,1e4);class Io extends rw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_k.get())};e()}}Io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="pendingRedirect",ic=new Map;class Ek extends rw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ic.get(this.auth._key());if(!e){try{const i=await wk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ic.set(this.auth._key(),e)}return this.bypassAuthState||ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wk(n,e){const t=Sk(e),i=Ik(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function Tk(n,e){ic.set(n._key(),e)}function Ik(n){return xr(n._redirectPersistence)}function Sk(n){return rc(vk,n.config.apiKey,n.name)}async function Rk(n,e,t=!1){if(hn(n.app))return Promise.reject(Vr(n));const i=Rs(n),o=pk(i,e),h=await new Ek(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=10*60*1e3;class Ck{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!iw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ir(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ak&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function iw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(n,e={}){return zr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xk=/^https?/;async function Dk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await kk(n);for(const t of e)try{if(Ok(t))return}catch{}Bn(n,"unauthorized-domain")}function Ok(n){const e=df(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!xk.test(t))return!1;if(Nk.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=new vl(3e4,6e4);function e_(){const n=sr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Vk(n){return new Promise((e,t)=>{var i,o,l;function h(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),t(ir(n,"network-request-failed"))},timeout:Lk.get()})}if(!((o=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)h();else{const f=RP("iframefcb");return sr()[f]=()=>{gapi.load?h():t(ir(n,"network-request-failed"))},BE(`${SP()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw sc=null,e})}let sc=null;function bk(n){return sc=sc||Vk(n),sc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new vl(5e3,15e3),Uk="__/auth/iframe",Fk="emulator/auth/iframe",jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zk(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ip(e,Fk):`https://${n.config.authDomain}/${Uk}`,i={apiKey:e.apiKey,appName:n.name,v:Es},o=Bk.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function $k(n){const e=await bk(n),t=sr().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:zk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jk,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=ir(n,"network-request-failed"),f=sr().setTimeout(()=>{l(h)},Mk.get());function p(){sr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wk=500,qk=600,Kk="_blank",Gk="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qk(n,e,t,i=Wk,o=qk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},Hk),{width:i.toString(),height:o.toString(),top:l,left:h}),y=zt().toLowerCase();t&&(f=LE(y)?Kk:t),DE(y)&&(e=e||Gk,p.scrollbars="yes");const E=Object.entries(p).reduce((R,[O,L])=>`${R}${O}=${L},`,"");if(mP(y)&&f!=="_self")return Xk(e||"",f),new t_(null);const T=window.open(e||"",f,E);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new t_(T)}function Xk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="__/auth/handler",Jk="emulator/auth/handler",Zk=encodeURIComponent("fac");async function n_(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Es,eventId:o};if(e instanceof HE){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",EI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof wl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),y=p?`#${Zk}=${encodeURIComponent(p)}`:"";return`${e1(n)}?${pl(f).slice(1)}${y}`}function e1({config:n}){return n.emulator?ip(n,Jk):`https://${n.authDomain}/${Yk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="webStorageSupport";class t1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=JE,this._completeRedirectFn=Rk,this._overrideRedirectResult=Tk}async _openPopup(e,t,i,o){var l;jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await n_(e,t,i,df(),o);return Qk(e,h,up())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await n_(e,t,i,df(),o);return ik(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await $k(e),i=new Ck(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fd,{type:Fd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Fd];h!==void 0&&t(!!h),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return FE()||OE()||op()}}const n1=t1;var r_="@firebase/auth",i_="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function s1(n){ds(new Ri("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jE(n)},y=new wP(i,o,l,p);return xP(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ds(new Ri("auth-internal",e=>{const t=Rs(e.getProvider("auth").getImmediate());return(i=>new r1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(r_,i_,i1(n)),tr(r_,i_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=5*60,a1=L_("authIdTokenMaxAge")||o1;let s_=null;const l1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>a1)return;const o=t==null?void 0:t.token;s_!==o&&(s_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ul(n=Rf()){const e=Nc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NP(n,{popupRedirectResolver:n1,persistence:[fk,tk,JE]}),i=L_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=l1(l.toString());YP(t,h,()=>h(t.currentUser)),XP(t,f=>h(f))}}const o=x_("auth");return o&&DP(t,`http://${o}`),t}function u1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}TP({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=ir("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",u1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});s1("Browser");const c1={apiKey:"AIzaSyBoEvUB9A_1gilFXIS5yClPyI38knZHjFc",authDomain:"aoe2-gamensa.firebaseapp.com",projectId:"aoe2-gamensa",storageBucket:"aoe2-gamensa.firebasestorage.app",messagingSenderId:"23855349992",appId:"1:23855349992:web:064a14286b2ac93660095d",measurementId:"G-NPVTXZMSND"},Qc=U_(c1),sw=ul(Qc),ow=hE(Qc),h1=hE(Qc),d1=async()=>(await HC(CC(h1,"users"))).docs.map(e=>e.data());function f1({user:n}){const[e,t]=W.useState([]);return W.useEffect(()=>{(async()=>{const o=await d1();t(o)})()},[]),ce.jsxs("div",{className:"p-4",children:[ce.jsx("h1",{className:"text-2xl font-bold mb-4 text-center",children:"Jugadores Registrados"}),ce.jsx("div",{className:"overflow-x-auto",children:ce.jsxs("table",{className:"min-w-full border",children:[ce.jsx("thead",{children:ce.jsx("tr",{className:"bg-gray-200",children:ce.jsx("th",{className:"px-4 py-2 border",children:"Nombre"})})}),ce.jsx("tbody",{children:e.map((i,o)=>ce.jsx("tr",{className:"bg-white border-t",children:ce.jsx("td",{className:"px-4 py-2 border",children:i.name})},o))})]})})]})}async function p1(n,e){try{return{user:(await KP(sw,n,e)).user,error:null}}catch(t){return{user:null,error:t}}}function m1(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),h=Cc(),f=async p=>{p.preventDefault(),l("");const{user:y,error:E}=await p1(n,t);E?l(E.message):(console.log("Usuario logueado:",y),h("/"))};return ce.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:ce.jsxs("form",{onSubmit:f,className:"bg-white p-6 rounded shadow-md w-80",children:[ce.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Iniciar sesión"}),o&&ce.jsx("p",{className:"text-red-500 mb-2",children:o}),ce.jsx("input",{type:"email",placeholder:"Email",className:"w-full mb-3 px-3 py-2 border rounded",value:n,onChange:p=>e(p.target.value),required:!0}),ce.jsx("input",{type:"password",placeholder:"Contraseña",className:"w-full mb-4 px-3 py-2 border rounded",value:t,onChange:p=>i(p.target.value),required:!0}),ce.jsx("button",{type:"submit",className:"w-full bg-green-500 text-white py-2 rounded hover:bg-green-600",children:"Iniciar sesión"})]})})}async function g1(n,e,t){try{const o=(await qP(sw,n,e)).user;return await QP(o,{displayName:t}),await WC(cE(ow,"users",o.uid),{uid:o.uid,inGameName:t,email:o.email,isAdmin:!1}),{user:o,error:null}}catch(i){return{user:null,error:i}}}function y1(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),[h,f]=W.useState(""),p=Cc(),y=async E=>{E.preventDefault(),f("");const{user:T,error:R}=await g1(t,o,n);R?f(R.message):(console.log("Usuario registrado:",T),p("/"))};return ce.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:ce.jsxs("form",{onSubmit:y,className:"bg-white p-6 rounded shadow-md w-80",children:[ce.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Registrarse"}),h&&ce.jsx("p",{className:"text-red-500 mb-2",children:h}),ce.jsx("input",{type:"text",placeholder:"Nombre en Age of Empires II",className:"w-full mb-3 px-3 py-2 border rounded",value:n,onChange:E=>e(E.target.value),required:!0}),ce.jsx("input",{type:"email",placeholder:"Email",className:"w-full mb-3 px-3 py-2 border rounded",value:t,onChange:E=>i(E.target.value),required:!0}),ce.jsx("input",{type:"password",placeholder:"Contraseña",className:"w-full mb-4 px-3 py-2 border rounded",value:o,onChange:E=>l(E.target.value),required:!0}),ce.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600",children:"Registrarse"})]})})}function _1({user:n}){const e=ul(),t=()=>{JP(e).catch(i=>{console.error("Error al cerrar sesión:",i)})};return ce.jsxs("nav",{className:"bg-yellow-300 p-4 flex justify-between items-center shadow",children:[ce.jsx("div",{className:"text-xl font-bold",children:ce.jsx(ls,{to:"/",children:"AoE2 Gamensa"})}),ce.jsxs("div",{className:"flex gap-4",children:[ce.jsx(ls,{to:"/",className:"hover:underline",children:"Inicio"}),ce.jsx(ls,{to:"/upload",className:"hover:underline",children:"Subir Partida"}),n?ce.jsxs(ce.Fragment,{children:[ce.jsxs("span",{className:"text-sm",children:["Hola, ",n.email]}),ce.jsx("button",{onClick:t,className:"bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600",children:"Cerrar sesión"})]}):ce.jsxs(ce.Fragment,{children:[ce.jsx(ls,{to:"/login",className:"hover:underline",children:"Iniciar sesión"}),ce.jsx(ls,{to:"/register",className:"hover:underline",children:"Registrarse"})]})]})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="firebasestorage.googleapis.com",lw="storageBucket",v1=2*60*1e3,E1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends cr{constructor(e,t,i=0){super(jd(e),`Firebase Storage: ${t} (${jd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ut;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ut||(ut={}));function jd(n){return"storage/"+n}function hp(){const n="An unknown error occurred, please check the error payload for server response.";return new ct(ut.UNKNOWN,n)}function w1(n){return new ct(ut.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function T1(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ct(ut.UNAUTHENTICATED,n)}function I1(){return new ct(ut.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function S1(n){return new ct(ut.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function R1(){return new ct(ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function A1(){return new ct(ut.CANCELED,"User canceled the upload/download.")}function C1(n){return new ct(ut.INVALID_URL,"Invalid URL '"+n+"'.")}function P1(n){return new ct(ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function k1(){return new ct(ut.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+lw+"' property when initializing the app?")}function N1(){return new ct(ut.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function x1(n){return new ct(ut.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function gf(n){return new ct(ut.INVALID_ARGUMENT,n)}function uw(){return new ct(ut.APP_DELETED,"The Firebase app was deleted.")}function D1(n){return new ct(ut.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Za(n,e){return new ct(ut.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ja(n){throw new ct(ut.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=dn.makeFromUrl(e,t)}catch{return new dn(e,"")}if(i.path==="")return i;throw P1(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function y(re){re.path_=decodeURIComponent(re.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",O=new RegExp(`^https?://${T}/${E}/b/${o}/o${R}`,"i"),L={bucket:1,path:3},z=t===aw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",H=new RegExp(`^https?://${z}/${o}/${b}`,"i"),G=[{regex:f,indices:p,postModify:l},{regex:O,indices:L,postModify:y},{regex:H,indices:{bucket:1,path:2},postModify:y}];for(let re=0;re<G.length;re++){const Ie=G[re],ve=Ie.regex.exec(e);if(ve){const N=ve[Ie.indices.bucket];let I=ve[Ie.indices.path];I||(I=""),i=new dn(N,I),Ie.postModify(i);break}}if(i==null)throw C1(e);return i}}class O1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function p(){return f===2}let y=!1;function E(...b){y||(y=!0,e.apply(null,b))}function T(b){o=setTimeout(()=>{o=null,n(O,p())},b)}function R(){l&&clearTimeout(l)}function O(b,...H){if(y){R();return}if(b){R(),E.call(null,b,...H);return}if(p()||h){R(),E.call(null,b,...H);return}i<64&&(i*=2);let G;f===1?(f=2,G=0):G=(i+Math.random())*1e3,T(G)}let L=!1;function z(b){L||(L=!0,R(),!y&&(o!==null?(b||(f=2),clearTimeout(o),T(0)):b||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,z(!0)},t),z}function V1(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(n){return n!==void 0}function M1(n){return typeof n=="object"&&!Array.isArray(n)}function cw(n){return typeof n=="string"||n instanceof String}function o_(n){return dp()&&n instanceof Blob}function dp(){return typeof Blob<"u"}function a_(n,e,t,i){if(i<e)throw gf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw gf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function F1(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var cs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(cs||(cs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,t,i,o,l,h,f,p,y,E,T,R=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=T,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,L)=>{this.resolve_=O,this.reject_=L,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new qu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const p=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===cs.NO_ERROR,p=l.getStatus();if(!f||j1(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===cs.ABORT;i(!1,new qu(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new qu(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());b1(p)?l(p):l()}catch(p){h(p)}else if(f!==null){const p=hp();p.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,p)):h(p)}else if(o.canceled){const p=this.appDelete_?uw():A1();h(p)}else{const p=R1();h(p)}};this.canceled_?t(!1,new qu(!1,null,!0)):this.backoffId_=L1(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&V1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function z1(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function $1(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function H1(n,e){e&&(n["X-Firebase-GMPID"]=e)}function W1(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function q1(n,e,t,i,o,l,h=!0){const f=F1(n.urlParams),p=n.url+f,y=Object.assign({},n.headers);return H1(y,e),z1(y,t),$1(y,l),W1(y,i),new B1(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function G1(...n){const e=K1();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(dp())return new Blob(n);throw new ct(ut.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Q1(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(n){if(typeof atob>"u")throw x1("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bd{constructor(e,t){this.data=e,this.contentType=t||null}}function Y1(n,e){switch(n){case er.RAW:return new Bd(hw(e));case er.BASE64:case er.BASE64URL:return new Bd(dw(n,e));case er.DATA_URL:return new Bd(Z1(e),eN(e))}throw hp()}function hw(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=n.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function J1(n){let e;try{e=decodeURIComponent(n)}catch{throw Za(er.DATA_URL,"Malformed data URL.")}return hw(e)}function dw(n,e){switch(n){case er.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Za(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case er.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Za(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=X1(e)}catch(o){throw o.message.includes("polyfill")?o:Za(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class fw{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Za(er.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=tN(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Z1(n){const e=new fw(n);return e.base64?dw(er.BASE64,e.rest):J1(e.rest)}function eN(n){return new fw(n).contentType}function tN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){let i=0,o="";o_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(o_(this.data_)){const i=this.data_,o=Q1(i,e,t);return o===null?null:new vi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new vi(i,!0)}}static getBlob(...e){if(dp()){const t=e.map(i=>i instanceof vi?i.data_:i);return new vi(G1.apply(null,t))}else{const t=e.map(h=>cw(h)?Y1(er.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new vi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(n){let e;try{e=JSON.parse(n)}catch{return null}return M1(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function iN(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function pw(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(n,e){return e}class Kt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||sN}}let Ku=null;function oN(n){return!cw(n)||n.length<2?n:pw(n)}function aN(){if(Ku)return Ku;const n=[];n.push(new Kt("bucket")),n.push(new Kt("generation")),n.push(new Kt("metageneration")),n.push(new Kt("name","fullPath",!0));function e(l,h){return oN(h)}const t=new Kt("name");t.xform=e,n.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Kt("size");return o.xform=i,n.push(o),n.push(new Kt("timeCreated")),n.push(new Kt("updated")),n.push(new Kt("md5Hash",null,!0)),n.push(new Kt("cacheControl",null,!0)),n.push(new Kt("contentDisposition",null,!0)),n.push(new Kt("contentEncoding",null,!0)),n.push(new Kt("contentLanguage",null,!0)),n.push(new Kt("contentType",null,!0)),n.push(new Kt("metadata","customMetadata",!0)),Ku=n,Ku}function lN(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new dn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function uN(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return lN(i,n),i}function cN(n,e,t){const i=nN(e);return i===null?null:uN(n,i,t)}function hN(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class dN{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(n){if(!n)throw hp()}function pN(n,e){function t(i,o){const l=cN(n,o,e);return fN(l!==null),l}return t}function mN(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=I1():o=T1():t.getStatus()===402?o=w1(n.bucket):t.getStatus()===403?o=S1(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function gN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function yN(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=gN(null,e)),i}function _N(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let G="";for(let re=0;re<2;re++)G=G+Math.random().toString().slice(2);return G}const p=f();h["Content-Type"]="multipart/related; boundary="+p;const y=yN(e,i,o),E=hN(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,R=`\r
--`+p+"--",O=vi.getBlob(T,i,R);if(O===null)throw N1();const L={name:y.fullPath},z=U1(l,n.host,n._protocol),b="POST",H=n.maxUploadRetryTime,Z=new dN(z,b,pN(n,t),H);return Z.urlParams=L,Z.headers=h,Z.body=O.uploadData(),Z.errorHandler=mN(e),Z}class vN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=cs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=cs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=cs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw ja("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ja("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ja("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ja("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ja("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EN extends vN{initXhr(){this.xhr_.responseType="text"}}function wN(){return new EN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this._service=e,t instanceof dn?this._location=t:this._location=dn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new _s(e,t)}get root(){const e=new dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pw(this._location.path)}get storage(){return this._service}get parent(){const e=rN(this._location.path);if(e===null)return null;const t=new dn(this._location.bucket,e);return new _s(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw D1(e)}}function TN(n,e,t){n._throwIfRoot("uploadBytes");const i=_N(n.storage,n._location,aN(),new vi(e,!0),t);return n.storage.makeRequestWithTokens(i,wN).then(o=>({metadata:o,ref:n}))}function IN(n,e){const t=iN(n._location.path,e),i=new dn(n._location.bucket,t);return new _s(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(n){return/^[A-Za-z]+:\/\//.test(n)}function RN(n,e){return new _s(n,e)}function mw(n,e){if(n instanceof fp){const t=n;if(t._bucket==null)throw k1();const i=new _s(t,t._bucket);return e!=null?mw(i,e):i}else return e!==void 0?IN(n,e):n}function AN(n,e){if(e&&SN(e)){if(n instanceof fp)return RN(n,e);throw gf("To use ref(service, url), the first argument must be a Storage instance.")}else return mw(n,e)}function l_(n,e){const t=e==null?void 0:e[lw];return t==null?null:dn.makeFromBucketSpec(t,n)}function CN(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:V_(o,n.app.options.projectId))}class fp{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=aw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=v1,this._maxUploadRetryTime=E1,this._requests=new Set,o!=null?this._bucket=dn.makeFromBucketSpec(o,this._host):this._bucket=l_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dn.makeFromBucketSpec(this._url,e):this._bucket=l_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _s(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new O1(uw());{const h=q1(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const u_="@firebase/storage",c_="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="storage";function PN(n,e,t){return n=Rt(n),TN(n,e,t)}function kN(n,e){return n=Rt(n),AN(n,e)}function NN(n=Rf(),e){n=Rt(n);const i=Nc(n,gw).getImmediate({identifier:e}),o=D_("storage");return o&&xN(i,...o),i}function xN(n,e,t,i={}){CN(n,e,t,i)}function DN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new fp(t,i,o,e,Es)}function ON(){ds(new Ri(gw,DN,"PUBLIC").setMultipleInstances(!0)),tr(u_,c_,""),tr(u_,c_,"esm2017")}ON();function LN(){const[n,e]=W.useState(null),[t,i]=W.useState(""),[o,l]=W.useState(""),[h,f]=W.useState(!1),[p,y]=W.useState(!0);Cc(),W.useEffect(()=>{const R=ul(),O=GE(R,async L=>{if(L){const z=cE(ow,"users",L.uid),H=(await $C(z)).data();f((H==null?void 0:H.isAdmin)===!0)}y(!1)});return()=>O()},[]);const E=R=>{e(R.target.files[0])},T=async()=>{if(i(""),l(""),!n){i("Por favor selecciona un archivo.");return}if(!ul().currentUser){i("Debes iniciar sesión para subir partidas.");return}if(!h){i("No tienes permisos para subir partidas.");return}const L=NN(),z=kN(L,`recordings/${n.name}`);await PN(z,n),l("Archivo subido exitosamente. Pronto se procesará automáticamente."),e(null)};return p?ce.jsx("div",{className:"text-center mt-20",children:"Verificando permisos..."}):h?ce.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6",children:[ce.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Subir partida de Age of Empires II"}),t&&ce.jsx("p",{className:"text-red-500 mb-2",children:t}),o&&ce.jsx("p",{className:"text-green-500 mb-2",children:o}),ce.jsx("input",{type:"file",accept:".aoe2record",onChange:E,className:"mb-4"}),ce.jsx("button",{onClick:T,className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:"Subir Partida"})]}):ce.jsx("div",{className:"text-center mt-20 text-red-600",children:"No tenés permisos para subir partidas."})}const VN=ul(Qc),bN=n=>GE(VN,n);function MN(){const[n,e]=W.useState(null),[t,i]=W.useState(!0);return W.useEffect(()=>{const o=bN(l=>{e(l),i(!1)});return()=>o()},[]),t?ce.jsx("div",{className:"text-center mt-20",children:"Cargando..."}):ce.jsxs("div",{className:"bg-yellow-100 min-h-screen",children:[ce.jsx(_1,{user:n}),ce.jsxs(E0,{children:[ce.jsx(Ba,{path:"/",element:ce.jsx(f1,{user:n})}),ce.jsx(Ba,{path:"/login",element:ce.jsx(m1,{})}),ce.jsx(Ba,{path:"/register",element:ce.jsx(y1,{})}),ce.jsx(Ba,{path:"/upload",element:ce.jsx(LN,{})})]})]})}NT.createRoot(document.getElementById("root")).render(ce.jsx(IT.StrictMode,{children:ce.jsx($0,{children:ce.jsx(MN,{})})}));
