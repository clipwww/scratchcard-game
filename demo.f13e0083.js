parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(F){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return T()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(F){return{type:"throw",arg:F}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function g(){}function d(){}function m(){}var w={};u(w,i,function(){return this});var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return d.prototype=m,u(b,"constructor",m),u(m,"constructor",d),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,a,function(){return this}),t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),u(b,i,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}
},{}],"Izzp":[function(require,module,exports) {
"use strict";var e=this;Object.defineProperty(exports,"__esModule",{value:!0}),exports.setTransition=exports.createEventManager=exports.loadImage=void 0;var t=function(e){return new Promise(function(t,n){var r=new Image;r.src=e,r.complete?t(r):(r.onload=function(){t(r)},r.onerror=function(e){n(e)})})};exports.loadImage=t;var n=function(){var t={};return{addEventListener:function(e,n){e=e.toLowerCase(),t.hasOwnProperty(e)||(t[e]=[]),t[e].indexOf(n)<0&&t[e].push(n)},removeEventListener:function(e,n){e=e.toLowerCase(),t.hasOwnProperty(e)||(t[e]=[]);var r=t[e].indexOf(n);r<0&&t[e].splice(r,1)},dispatchEvent:function(n){if(n=n.toLowerCase(),t.hasOwnProperty(n)){for(var r=t[n].length,o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];for(var i=0;i<r;i++){var c;(c=t[n][i]).call.apply(c,[e].concat(a))}}}}};exports.createEventManager=n;var r=function(e,t){e.style.OTransition=t,e.style.MozTransition=t,e.style.msTransition=t,e.style.webkitTransition=t,e.style.transition=t};exports.setTransition=r;
},{}],"usrG":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventEnum=void 0,function(e){e.Init="init",e.ImageLoaded="imageLoaded",e.Scratch="scratch",e.Finish="finish"}(e=exports.EventEnum||(exports.EventEnum={}));
},{}],"fUdq":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function u(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createScratchcardGame=exports.EventEnum=exports.ConfigVM=void 0;var t=require("./lib"),n=require("./view-models");Object.defineProperty(exports,"ConfigVM",{enumerable:!0,get:function(){return n.ConfigVM}}),Object.defineProperty(exports,"EventEnum",{enumerable:!0,get:function(){return n.EventEnum}});var o=function(e){if(e.changedTouches){var t=e.changedTouches[0];return{pageX:t.pageX,pageY:t.pageY}}return{pageX:e.pageX,pageY:e.pageY}},r=function(e,t){var n=t.pageX,o=t.pageY,r=e.offsetParent;return{x:n-(null==r?void 0:r.offsetLeft),y:o-(null==r?void 0:r.offsetTop)}},i=function(i){var a,u=i.el,c=i.backImgSrc,s=i.lineWidth,d=void 0===s?40:s,v=i.hideDuration,m=void 0===v?400:v,l=document.querySelector(u),f=t.createEventManager(),p=f.addEventListener,g=f.removeEventListener,h=f.dispatchEvent,E=!1,y=!0,L=!1,b=document.createElement("canvas"),x=function(e){if(!E)return!0;var t=r(b,o(e)),n=t.x,i=t.y;return I(n,i),!1},w=function(){E=!0},C=function(){E=!1,y=!0},S=function(){document.addEventListener("mousemove",x),document.addEventListener("touchmove",x),document.addEventListener("touchstart",w),document.addEventListener("mousedown",w),document.addEventListener("touchend",C),document.addEventListener("mouseup",C)},P=function(){b.width=l.clientWidth,b.height=l.clientHeight;var e=b.getContext("2d");e.globalCompositeOperation="copy",e.drawImage(a,0,0,b.width,b.height),e.globalCompositeOperation="destination-out"},I=function(e,t){if(!L){var o=b.getContext("2d");o.lineWidth=d,o.lineCap="round",o.lineJoin="round",o.strokeStyle="rgba(0,0,0,1)",y&&(o.beginPath(),y=!1,o.moveTo(e+.01,t)),o.lineTo(e,t),o.stroke(),h(n.EventEnum.Scratch),M()>=100&&T()}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e<1&&(e=1),e*=4;for(var t=b.getContext("2d").getImageData(0,0,b.width,b.height).data,n=t.length,o=n/e|0,r=0,i=0;i<n;i+=e)0!==t[i]&&r++;return 100-Math.floor(r/o*100)},T=function(){L=!0,b.style.opacity="1",b.style.opacity="0",h(n.EventEnum.Finish)};return e(void 0,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.style.visibility="hidden",l.draggable=!1,l.style.userSelect="none",l.style.position="relative",b.draggable=!1,b.style.userSelect="none",b.style.position="absolute",b.style.top="0",b.style.left="0",t.setTransition(b,"opacity ".concat(m/1e3,"s")),e.next=12,t.loadImage(c);case 12:a=e.sent,h(n.EventEnum.ImageLoaded),P(),S(),l.append(b),l.style.visibility="visible",h(n.EventEnum.Init);case 19:case"end":return e.stop()}},e)})),{$el:l,reset:function(){y=!0,L=!1,b.style.opacity="1",P()},finish:T,destroy:function(){b.remove(),document.removeEventListener("mousemove",x),document.removeEventListener("touchmove",x),document.removeEventListener("touchstart",w),document.removeEventListener("mousedown",w),document.removeEventListener("touchend",C),document.removeEventListener("mouseup",C)},scratchedPercentage:M,supportsCanvas:function(){return!!document.createElement("canvas").getContext},addEventListener:p,removeEventListener:g}};exports.createScratchcardGame=i;
},{"./lib":"Izzp","./view-models":"usrG"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("regenerator-runtime/runtime");var e=require("../src/index"),t=e.createScratchcardGame({el:"#app",backImgSrc:"./images/img-scratch-top.png"}),n=t.finish,r=t.reset,c=t.destroy,d=t.scratchedPercentage,i=t.addEventListener;function s(){r(),document.getElementById("js-text").innerText=""}i(e.EventEnum.Scratch,function(){var e=d();document.getElementById("js-text").innerText="刮開 ".concat(e,"% 了"),e>70&&n()}),window.addEventListener("resize",s),document.getElementById("js-finish").addEventListener("click",n),document.getElementById("js-reset").addEventListener("click",s),document.getElementById("js-destroy").addEventListener("click",c);
},{"regenerator-runtime/runtime":"QVnC","../src/index":"fUdq"}]},{},["QCba"], null)
//# sourceMappingURL=https://cdn.jsdelivr.net/gh/clipwww/scratchcard-game@gh-pages/demo.f13e0083.js.map