"use strict";var h=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var g=h(function(O,o){
var f=require('@stdlib/ndarray-base-dtype/dist'),q=require('@stdlib/ndarray-base-shape/dist'),c=require('@stdlib/ndarray-base-strides/dist'),d=require('@stdlib/ndarray-base-offset/dist'),l=require('@stdlib/ndarray-base-order/dist'),D=require('@stdlib/ndarray-base-data-buffer/dist');function S(r,a,v){var s,t,n,i,u,p,e;for(n=q(r,!1),i=c(r,!1),u=n.length,s=[],t=[],e=0;e<u;e++)t.push(n[e]),s.push(i[e]);for(p=u>0?i[u-1]:i[0],e=0;e<a;e++)t.push(1),s.push(p);return new r.constructor(f(r),D(r),t,s,d(r),l(r),{readonly:!v})}o.exports=S
});var m=g();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
