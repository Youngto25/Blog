!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!x[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===b&&_()}(e,t),n&&n(e,t)};var t,r=!0,o="1480fcf70129d6eddb55",i=1e4,c={},a=[],s=[];function l(e){var n=L[e];if(!n)return M;var r=function(r){return n.hot.active?(L[r]?-1===L[r].parents.indexOf(e)&&L[r].parents.push(e):(a=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),M(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var i in M)Object.prototype.hasOwnProperty.call(M,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===f&&p("prepare"),b++,M.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===f&&(g[e]||E(e),0===b&&0===y&&_())}},r.t=function(e,n){return 1&n&&(e=r(e)),M.t(e,-2&n)},r}function d(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:O,apply:j,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:c[e]};return t=void 0,n}var u=[],f="idle";function p(e){f=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,v,m,y=0,b=0,g={},w={},x={};function k(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=M.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return p("idle"),null;w={},g={},x=e.c,m=e.h,p("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});v={};return E(0),"prepare"===f&&0===b&&0===y&&_(),n});var n}function E(e){x[e]?(w[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):g[e]=!0}function _(){p("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return j(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(k(t));e.resolve(n)}}function j(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,i,s,l;function d(e){for(var n=[e],t={},r=n.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((s=L[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<s.parents.length;a++){var l=s.parents[a],d=L[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(d.hot._acceptedDependencies[i]?(t[l]||(t[l]=[]),u(t[l],[i])):(delete t[l],n.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},y=[],b={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var O;l=k(w);var E=!1,_=!1,j=!1,A="";switch((O=v[w]?d(l):{type:"disposed",moduleId:w}).chain&&(A="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+O.moduleId+A));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+A));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(E=new Error("Aborted because "+l+" is not accepted"+A));break;case"accepted":n.onAccepted&&n.onAccepted(O),_=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),j=!0;break;default:throw new Error("Unexception type "+O.type)}if(E)return p("abort"),Promise.reject(E);if(_)for(l in b[l]=v[l],u(y,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,l)&&(h[l]||(h[l]=[]),u(h[l],O.outdatedDependencies[l]));j&&(u(y,[O.moduleId]),b[l]=g)}var D,H=[];for(r=0;r<y.length;r++)l=y[r],L[l]&&L[l].hot._selfAccepted&&b[l]!==g&&H.push({module:l,errorHandler:L[l].hot._selfAccepted});p("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var z,S,U=y.slice();U.length>0;)if(l=U.pop(),s=L[l]){var R={},C=s.hot._disposeHandlers;for(i=0;i<C.length;i++)(t=C[i])(R);for(c[l]=R,s.hot.active=!1,delete L[l],delete h[l],i=0;i<s.children.length;i++){var I=L[s.children[i]];I&&((D=I.parents.indexOf(l))>=0&&I.parents.splice(D,1))}}for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(s=L[l]))for(S=h[l],i=0;i<S.length;i++)z=S[i],(D=s.children.indexOf(z))>=0&&s.children.splice(D,1);for(l in p("apply"),o=m,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var q=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(s=L[l])){S=h[l];var T=[];for(r=0;r<S.length;r++)if(z=S[r],t=s.hot._acceptedDependencies[z]){if(-1!==T.indexOf(t))continue;T.push(t)}for(r=0;r<T.length;r++){t=T[r];try{t(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[r],error:e}),n.ignoreErrored||q||(q=e)}}}for(r=0;r<H.length;r++){var P=H[r];l=P.module,a=[l];try{M(l)}catch(e){if("function"==typeof P.errorHandler)try{P.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),n.ignoreErrored||q||(q=t),q||(q=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||q||(q=e)}}return q?(p("fail"),Promise.reject(q)):(p("idle"),new Promise(function(e){e(y)}))}var L={};function M(n){if(L[n])return L[n].exports;var t=L[n]={i:n,l:!1,exports:{},hot:d(n),parents:(s=a,a=[],s),children:[]};return e[n].call(t.exports,t,t.exports,l(n)),t.l=!0,t.exports}M.m=e,M.c=L,M.d=function(e,n,t){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(M.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)M.d(t,r,function(n){return e[n]}.bind(null,r));return t},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="",M.h=function(){return o},l(1)(M.s=1)}([function(e,n,t){(e.exports=t(3)(!1)).push([e.i,"ul,\nol {\n  list-style: none; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  overflow: hidden; }\n\n#canvas {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0; }\n\nbutton {\n  margin: 0;\n  position: fixed;\n  top: 0;\n  right: 0; }\n\n.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden; }\n\n.actions {\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 20px; }\n\n.actions > svg {\n  width: 1.5em;\n  height: 1.5em;\n  transition: all 0.3s;\n  margin: 0 10px; }\n\n.actions > svg.active {\n  fill: red;\n  transform: scale(1.2); }\n\n.colors {\n  position: fixed;\n  top: 60px;\n  left: 28px; }\n\n.colors > li {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);\n  margin: 10px 0;\n  transition: all 0.3s; }\n\n.colors > li.black {\n  background: black; }\n\n.colors > li.red {\n  background: red; }\n\n.colors > li.green {\n  background: green; }\n\n.colors > li.blue {\n  background: blue; }\n\n.colors > li.active {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.95);\n  transform: scale(1.2); }\n\n.sizes {\n  position: fixed;\n  left: 28px;\n  top: 180px; }\n\n.sizes > li {\n  margin: 20px 0;\n  transition: all 0.3s; }\n\n.sizes > .thin {\n  height: 3px;\n  width: 20px;\n  background: black; }\n\n.sizes > .thick {\n  height: 6px;\n  width: 20px;\n  background: black; }\n\n.sizes .thin.active,\n.sizes .thick.active {\n  background: red;\n  transform: scaleY(1.2);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.95); }\n\n.remind {\n  position: fixed;\n  width: 84px;\n  height: 36px;\n  background: #353b48;\n  border-radius: 0 0 8px 8px;\n  left: 50%;\n  margin-left: -42px;\n  transform: translateY(-100%);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.remind .text {\n  height: 20px;\n  line-height: 20px;\n  font-size: 12px;\n  color: #f5f6fa; }\n",""])},function(e,n,t){"use strict";t.r(n);t(2),t(6);const r=e=>document.querySelector(e);let o=[{id:"brush",content:"画笔"},{id:"eraser",content:"橡皮"},{id:"clear",content:"清空"},{id:"download",content:"保存"},{id:"black",content:"黑色画笔"},{id:"red",content:"红色画笔"},{id:"green",content:"绿色画笔"},{id:"blue",content:"蓝色画笔"},{id:"thin",content:"细"},{id:"thick",content:"粗"}],i=document.getElementById("canvas"),c=i.getContext("2d"),a=5,s=!1,l=!1,d={x:void 0,y:void 0};function u(e,n,t,r){c.beginPath(),c.moveTo(e,n),c.lineWidth=a,c.lineTo(t,r),c.stroke(),c.closePath()}function f(e){o.forEach(n=>{n.id===e&&(r(".remind .text").innerHTML=n.content)}),r(".remind").style="transform: translateY(0);transition: transform 0.5s;",setTimeout(()=>{r(".remind").style.transform="translateY(-100%)"},2e3)}function p(e,n){c.fillStyle=n,c.strokeStyle=n,black.classList.remove("active"),red.classList.remove("active"),green.classList.remove("active"),blue.classList.remove("active"),e.classList.add("active")}function h(){let e=document.documentElement.clientWidth,n=document.documentElement.clientHeight;i.width=e,i.height=n}h(),window.addEventListener("resize",h),"ontouchstart"in document.body?(i.ontouchstart=function(e){l=!0;let n=e.touches[0].clientX,t=e.touches[0].clientY;s?c.clearRect(n-5,t-5,10,10):d={x:n,y:t}},i.ontouchmove=function(e){if(l){let n=e.touches[0].clientX,t=e.touches[0].clientY;if(s)c.clearRect(n-5,t-5,10,10);else{let e={x:n,y:t};u(d.x,d.y,e.x,e.y),d=e}}},i.ontouchend=function(e){l=!1}):(i.onmousedown=function(e){l=!0;let n=e.clientX,t=e.clientY;s?c.clearRect(n-5,t-5,10,10):d={x:n,y:t}},i.onmousemove=function(e){if(l){let n=e.clientX,t=e.clientY;if(s)c.clearRect(n-5,t-5,10,10);else{let e={x:n,y:t};u(d.x,d.y,e.x,e.y),d=e}}},i.onmouseup=function(e){l=!1}),brush.onclick=function(){s=!1,brush.classList.add("active"),eraser.classList.remove("active")},eraser.onclick=function(){s=!0,eraser.classList.add("active"),brush.classList.remove("active")},clear.onclick=function(){c.clearRect(0,0,i.width,i.height)},download.onclick=function(){let e=i.toDataURL("image/png"),n=document.createElement("a");document.body.appendChild(n),n.href=e,n.download="我的画",n.target="_blank",n.click()},r(".colors").addEventListener("click",function(e){let n=e.target,t=e.target.id;"black"===t?p(n,"black"):"red"===t?p(n,"red"):"green"===t?p(n,"green"):"blue"===t&&p(n,"blue"),f(t)}),r(".sizes").addEventListener("click",function(e){"thin"===e.target.id?(a=5,thin.classList.add("active"),thick.classList.remove("active")):"thick"===e.target.id&&(a=10,thin.classList.remove("active"),thick.classList.add("active")),f(e.target.id)})},function(e,n,t){var r=t(0);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=t(4)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(0,function(){var n=t(0);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(n)}),e.hot.dispose(function(){i()})},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[t].concat(i).concat([o]).join("\n")}var c,a,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var a=e[c];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="(".concat(a[2],") and (").concat(t,")")),n.push(a))}},n}},function(e,n,t){var r,o,i={},c=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),s=null,l=0,d=[],u=t(5);function f(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var c=0;c<o.parts.length;c++)o.parts[c](r.parts[c]);for(;c<r.parts.length;c++)o.parts.push(b(r.parts[c],n))}else{var a=[];for(c=0;c<r.parts.length;c++)a.push(b(r.parts[c],n));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],c=n.base?i[0]+n.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[c]?r[c].parts.push(a):t.push(r[c]={id:c,parts:[a]})}return t}function h(e,n){var t=a(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,t);t.insertBefore(n,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return y(n,e.attrs),h(e,n),n}function y(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function b(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var c=l++;t=s||(s=m(n)),r=x.bind(null,t,c,!1),o=x.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(n,e.attrs),h(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var c=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,t,n),o=function(){v(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){v(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=c()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return f(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var c=t[o];(a=i[c.id]).refs--,r.push(a)}e&&f(p(e,n),n);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}};var g,w=(g=[],function(e,n){return g[e]=n,g.filter(Boolean).join("\n")});function x(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(n,o);else{var i=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(i,c[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n){!function(e){var n,t='<svg><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M512 64q17.664 0 30.176 12.512t12.512 30.176l0 494.336 140.32-140.672q12.32-12.32 30.336-12.32 18.336 0 30.496 12.16t12.16 30.496q0 18.016-12.32 30.336l-213.344 213.344q-12.32 12.32-30.336 12.32t-30.336-12.32l-213.344-213.344q-12.32-12.992-12.32-30.336 0-17.664 12.512-30.176t30.176-12.512q18.016 0 30.336 12.32l140.32 140.672 0-494.336q0-17.664 12.512-30.176t30.176-12.512zM938.656 661.344q17.664 0 30.176 12.512t12.512 30.176l0 170.656q0 53.344-36.992 90.336-37.664 37.664-90.016 37.664l-683.68 0q-52.32 0-90.656-37.344-37.344-38.336-37.344-90.656l0-170.656q0-17.664 12.512-30.176t30.176-12.512 30.176 12.512 12.512 30.176l0 170.656q0 17.664 12.512 30.176t30.176 12.512l683.68 0q17.344 0 29.504-12.512t12.16-30.176l0-170.656q0-17.664 12.512-30.176t30.176-12.512z"  ></path></symbol><symbol id="icon-clear" viewBox="0 0 1024 1024"><path d="M662 872c16.59 0 30-13.41 30-30l0-420c0-16.59-13.41-30-30-30s-30 13.41-30 30l0 420c0 16.59 13.41 30 30 30zM362 872c16.56 0 30-13.41 30-30l0-420c0-16.59-13.44-30-30-30s-30 13.41-30 30l0 420c0 16.59 13.44 30 30 30zM902 212l-120 0 0-60c0-66.27-53.73-120-120-120l-300 0c-66.27 0-120 53.73-120 120l0 60-120 0-90 90c0 16.59 13.44 30 30 30l90 0 0 600c0 33.12 26.88 60 60 60l600 0c33.12 0 60-26.88 60-60l0-600 90 0c16.59 0 30-13.41 30-30l-90-90zM332 152c0-33.12 26.88-60 60-60l240 0c33.12 0 60 26.88 60 60l0 60-360 0 0-60zM812 902c0 16.59-13.41 30-30 30l-540 0c-16.56 0-30-13.41-30-30l0-570 600 0 0 570zM512 872c16.59 0 30-13.41 30-30l0-420c0-16.59-13.41-30-30-30s-30 13.41-30 30l0 420c0 16.59 13.41 30 30 30z"  ></path></symbol><symbol id="icon-eraser" viewBox="0 0 1024 1024"><path d="M442.37406815 442.26484148h-241.99774815A34.56417185 34.56417185 0 0 0 165.80001185 476.80474075v69.17688888a34.57630815 34.57630815 0 0 0 34.57630815 34.57630815H822.68918518A34.57630815 34.57630815 0 0 0 857.22908445 545.98162963v-69.17688888A34.56417185 34.56417185 0 0 0 822.68918518 442.26484148H580.65502815V131.11447703a34.57630815 34.57630815 0 0 0-34.56417185-34.57630814h-69.17688889a34.57630815 34.57630815 0 0 0-34.57630816 34.57630814z m-69.1768889-69.17688889V96.53816889a69.17688889 69.17688889 0 0 1 69.1768889-69.17688889h138.28096a69.17688889 69.17688889 0 0 1 69.17688888 69.17688889v276.58619259h207.39716742a69.17688889 69.17688889 0 0 1 69.17688888 69.17688889v138.35377778a69.17688889 69.17688889 0 0 1-69.17688888 69.17688888v276.44055705a69.17688889 69.17688889 0 0 1-69.1768889 69.17688889H234.94049185a69.17688889 69.17688889 0 0 1-69.17688888-69.17688889V649.69841778a69.17688889 69.17688889 0 0 1-69.17688889-69.17688889V442.26484148a69.17688889 69.17688889 0 0 1 69.17688889-69.17688889z m414.8914252 276.61046519H234.94049185v241.99774814a34.58844445 34.58844445 0 0 0 34.57630815 34.57630816H753.5122963a34.57630815 34.57630815 0 0 0 34.57630815-34.57630816z"  ></path><path d="M684.33540741 718.83889778a34.56417185 34.56417185 0 0 1 34.57630814 34.57630814v172.85726816h-69.17688888V753.41520592A34.56417185 34.56417185 0 0 1 684.33540741 718.83889778zM546.0908563 787.97937778a34.56417185 34.56417185 0 0 1 34.56417185 34.57630814v103.71678816h-69.1768889v-103.71678816a34.56417185 34.56417185 0 0 1 34.57630816-34.57630814zM407.79776 857.11985778a34.57630815 34.57630815 0 0 1 34.57630815 34.57630814v34.57630816h-69.1768889v-34.57630816a34.57630815 34.57630815 0 0 1 34.56417186-34.57630814z"  ></path></symbol><symbol id="icon-brush" viewBox="0 0 1024 1024"><path d="M124.8 941.38666667a33.65333333 33.65333333 0 0 1-32.14933333-43.616c83.63733333-269.792 83.776-269.93066667 91.43466666-277.792l505.312-518.82666667a67.34933333 67.34933333 0 0 1 96.45866667 0L912.85333333 231.552a66.96533333 66.96533333 0 0 1 0 93.93066667l-506.528 520.10666666c-8.10666667 8.05333333-8.24533333 8.192-271.072 94.13333334a33.80266667 33.80266667 0 0 1-10.45333333 1.664z m112.544-279.60533334C229.33333333 685.57866667 201.14133333 775.62666667 176.288 855.46666667c77.06666667-25.30133333 163.52-53.86666667 187.008-62.13333334l501.33333333-514.77333333-126.99733333-130.432z m143.82933333 160.8z m0 0"  ></path><path d="M763.73333333 456.94933333a33.504 33.504 0 0 1-23.79733333-9.86666666l-151.46666667-151.46666667a33.65333333 33.65333333 0 0 1 47.60533334-47.59466667l151.46666666 151.46666667A33.664 33.664 0 0 1 763.73333333 456.94933333z m0 0"  ></path><path d="M928.56533333 859.104H524.64v50.496a33.65333333 33.65333333 0 0 0 33.664 33.65333333H894.93333333a33.65333333 33.65333333 0 0 0 33.65333334-33.65333333z m0 0"  ></path></symbol></svg>';if((n=document.getElementsByTagName("script"))[n.length-1].getAttribute("data-injectcss")&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(n){console&&console.log(n)}}!function(n){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(n,0);else{var t=function(){document.removeEventListener("DOMContentLoaded",t,!1),n()};document.addEventListener("DOMContentLoaded",t,!1)}else document.attachEvent&&(o=n,i=e.document,c=!1,(a=function(){try{i.documentElement.doScroll("left")}catch(e){return void setTimeout(a,50)}r()})(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,r())});function r(){c||(c=!0,o())}var o,i,c,a}(function(){var e,n;(e=document.createElement("div")).innerHTML=t,t=null,(n=e.getElementsByTagName("svg")[0])&&(n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.style.width=0,n.style.height=0,n.style.overflow="hidden",function(e,n){n.firstChild?function(e,n){n.parentNode.insertBefore(e,n)}(e,n.firstChild):n.appendChild(e)}(n,document.body))})}(window)}]);