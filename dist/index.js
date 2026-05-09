"use strict";var h=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var o=h(function(O,p){
var f=require('@stdlib/ndarray-base-dtype/dist'),q=require('@stdlib/ndarray-base-shape/dist'),c=require('@stdlib/ndarray-base-strides/dist'),d=require('@stdlib/ndarray-base-offset/dist'),l=require('@stdlib/ndarray-base-order/dist'),D=require('@stdlib/ndarray-base-data-buffer/dist');function S(r,a,g){var s,t,v,i,u,n,e;for(v=q(r,!1),i=c(r,!1),u=v.length,s=[],t=[],e=0;e<u;e++)t.push(v[e]),s.push(i[e]);for(n=u>0?i[u-1]:i[0],e=0;e<a;e++)t.push(1),s.push(n);return new r.constructor(f(r),D(r),t,s,d(r),l(r),{readonly:!g})}p.exports=S
});var m=o();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
