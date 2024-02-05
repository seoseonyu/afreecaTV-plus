(()=>{"use strict";var e={266:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,'.dragging{-ms-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;user-select:none;cursor:row-resize}.myBox{order:1;width:100%;height:250px;position:relative}.myBox .cloned-chat-area{padding-bottom:10px}.chat-toggle-btn{display:inline-flex;align-items:center;justify-content:center;letter-spacing:-0.3px;line-height:0;background-color:#4263ba;width:65px;height:25px;border-radius:17px;color:#fff;font-family:"NGB","AppleGothic",sans-serif;font-size:16px}#chat_wrapper{height:100%;position:relative}.selected_chat_area{order:1;width:100%;height:35%;will-change:scroll-position;left:0;right:0;top:40px;bottom:113px;padding:0;z-index:1;overflow:auto;overflow-x:hidden}#handle-container{width:100%;order:2;cursor:row-resize}#tbc-resize-handle{display:flex;height:.5rem;border-top:2px solid #adaaaa;margin:.5rem}.main_chat_area{margin-top:10px;order:3;height:65%;will-change:scroll-position;left:0;right:0;top:40px;bottom:113px;padding:0;z-index:1;overflow:auto;overflow-x:hidden}',""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],c=n.base?s[0]+n.base:s[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var f=r(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,n);n.byIndex=l,t.splice(l,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=r(a[i]);t[l].references--}for(var s=n(e,o),c=0;c<a.length;c++){var u=r(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),l=r(565),s=r.n(l),c=r(216),u=r.n(c),d=r(589),f=r.n(d),p=r(266),h={};function y(e,t,r,n,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){y(a,n,o,i,l,"next",e)}function l(e){y(a,n,o,i,l,"throw",e)}i(void 0)}))}}function m(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}h.styleTagTransform=f(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,v((function(){var e;return m(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("nicks")];case 1:return(e=t.sent()).nicks?[2,e.nicks]:[2,[]]}}))})),v((function(){var e;return m(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("ids")];case 1:return(e=t.sent()).ids?[2,e.ids]:[2,[]]}}))})),v((function(){var e;return m(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("toggle")];case 1:return(e=t.sent()).toggle?[2,e.toggle]:[2,{streamer:!1,manager:!1,topfan:!1,gudok:!1,fan:!1,user:!1}]}}))}));var g=function(){var e=v((function(){var e;return m(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("collector")];case 1:return(e=t.sent()).collector?[2,e.collector]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=v((function(){var e;return m(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("chatSetting")];case 1:return(e=t.sent()).chatSetting?[2,e.chatSetting]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}();function b(e,t,r,n,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){b(a,n,o,i,l,"next",e)}function l(e){b(a,n,o,i,l,"throw",e)}i(void 0)}))}}function E(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var P,S,L,q,C,B={childList:!0,subtree:!0},k=[],I=[],H=!1;function _(){return M.apply(this,arguments)}function M(){return(M=x((function(){return E(this,(function(e){return chrome.storage.local.get("nicks").then((function(e){k=e.nicks?e.nicks:[]})),[2]}))}))).apply(this,arguments)}function T(){return z.apply(this,arguments)}function z(){return(z=x((function(){return E(this,(function(e){return chrome.storage.local.get("ids").then((function(e){I=e.ids?e.ids:[]})),[2]}))}))).apply(this,arguments)}function A(){return N.apply(this,arguments)}function N(){return(N=x((function(){return E(this,(function(e){return chrome.storage.local.get("toggle").then((function(e){P=e.toggle?e.toggle:{streamer:!1,manager:!1,topfan:!1,gudok:!1,fan:!1,user:!1}})),[2]}))}))).apply(this,arguments)}var R,O=function(e,t){e.forEach((function(e){e.addedNodes.forEach((function(e){if(null!=e.parentNode&&"DIV"==e.nodeName){var t=e.querySelector(".message-container");if(null==t)return;var r=t.querySelector(".username");if(null==r)return;var n=r.querySelector("button");if(null==n)return;var o=n.getAttribute("user_id"),a=n.getAttribute("user_nick"),i=n.getAttribute("grade");if(null==o)return;if(null==a)return;if(null==i)return;var l=e.querySelector(".message-container"),s=e.querySelector(".message-text"),c=e.querySelector(".msg"),u=e.querySelector(".username");if(null==u)return;if(null==c)return;if(null==s||null==l)return;q.isUse?(u.firstElementChild.style.setProperty("overflow","hidden"),u.firstElementChild.style.setProperty("text-overflow","ellipsis"),u.firstElementChild.style.setProperty("white-space","nowrap"),l.style.setProperty("gap","0 5px"),l.style.setProperty("display","flex"),u.style.setProperty("flex","0 0 8em"),u.style.setProperty("width","8em"),s.style.setProperty("flex","1"),c.style.setProperty("line-height","1.3")):(u.firstElementChild.style.removeProperty("overflow"),u.firstElementChild.style.removeProperty("text-overflow"),u.firstElementChild.style.removeProperty("white-space"),l.style.removeProperty("gap"),l.style.removeProperty("display"),u.style.removeProperty("flex"),u.style.removeProperty("width"),s.style.removeProperty("flex"),c.style.setProperty("line-height","1.3")),function(e,t,r){var n,o=0,a=t.indexOf("(");return n=-1==a?t:t.substring(0,a),k.forEach((function(t){t.isNickname&&t.user==e&&(o=1)})),I.forEach((function(e){e.isNickname||e.user!=n||(o=1)})),("bj"==r&&P.streamer||"manager"==r&&P.manager||"topfan"==r&&P.topfan||"gudok"==r&&P.gudok||"fan"==r&&P.fan||"user"==r&&P.user)&&(o=1),1==o}(a,o,i)&&null!=R&&(R.appendChild(e.cloneNode(!0)),R.scrollTop=R.scrollHeight)}}))}))};function Z(){return U.apply(this,arguments)}function U(){return U=x((function(){var e,t,r,n,o,a,i,l,s;return E(this,(function(c){return e=document.getElementById("chatbox"),t=document.getElementById("actionbox"),r=document.querySelector(".area_header"),n=document.getElementById("chat_area"),null==e||null==n||null==t||null==r||(R=n.cloneNode(),o=n.parentNode,a=(null==e?void 0:e.clientHeight)-(null==t?void 0:t.clientHeight)-(null==r?void 0:r.clientHeight)-20,(i=document.createElement("div")).id="afreeca-chat-list-container",i.style.setProperty("width","100%"),i.style.setProperty("height",a+"px"),i.style.setProperty("will-change","scroll-position"),n.classList.add("live-area"),R.classList.add("filter-area"),R.style.display="none",R.style.height="30%",R.style.top="0px",R.style.position="relative",l=document.createElement("div"),(s=document.createElement("div")).id="tbc-resize-handle",l.id="handle-container",l.style.position="relative",l.appendChild(s),l.style.display="none",l.addEventListener("mousedown",J),l.addEventListener("touchstart",J),l.appendChild(s),i.appendChild(R),i.appendChild(l),i.appendChild(n),o.appendChild(i)),[2]}))})),U.apply(this,arguments)}function D(){return F.apply(this,arguments)}function F(){return F=x((function(){var e,t,r,n;return E(this,(function(o){switch(o.label){case 0:return null==(e=document.getElementById("afreeca-chat-list-container"))?[2]:(e.style.setProperty("position","absolute"),R.style.removeProperty("display"),null==(t=document.getElementById("handle-container"))?[2]:(t.style.removeProperty("display"),null==(r=document.querySelector(".live-area"))?[2]:(r.style.setProperty("position","relative"),r.style.setProperty("top","0px"),[4,chrome.storage.local.get("position")])));case 1:return n=o.sent(),[4,chrome.storage.local.get("containerRatio")];case 2:return Q(o.sent().containerRatio,n.position),[2]}}))})),F.apply(this,arguments)}function V(){var e=document.getElementById("afreeca-chat-list-container");if(null!=e){e.style.removeProperty("position");var t=document.querySelector(".filter-area");if(null!=t){t.style.setProperty("display","none");var r=document.getElementById("handle-container");if(null!=r){r.style.setProperty("display","none");var n=document.querySelector(".live-area");null!=n&&(n.style.removeProperty("position"),n.style.removeProperty("height"),n.style.removeProperty("top"))}}}}new ResizeObserver((function(e){var t=!0,r=!1,n=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value.contentRect.height,l=document.getElementById("actionbox"),s=document.querySelector(".area_header");if(null==l||null==s)return;var c=i-l.clientHeight-s.clientHeight-20;null==L?(L=c,D()):L!=c&&(L=c,document.querySelector(".filter-area"),D())}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}})),window.addEventListener("load",x((function(){var e;return E(this,(function(t){switch(t.label){case 0:return(C=document.getElementById("chat_area"))?[4,Z()]:[2];case 1:return t.sent(),[4,_()];case 2:return t.sent(),[4,T()];case 3:return t.sent(),[4,A()];case 4:return t.sent(),[4,g()];case 5:return S=t.sent(),[4,w()];case 6:return q=t.sent(),S.isUse?[4,D()]:[3,8];case 7:return t.sent(),[3,9];case 8:V(),t.label=9;case 9:return function(){var e=document.querySelector(".player_item_list"),t=null==e?void 0:e.querySelector("ul"),r=document.createElement("li");r.classList.add("share");var n=document.createElement("div");n.classList.add("sub_tooltip"),n.innerText="방송 캡처",n.style.setProperty("transform","translate(-80%, 0)");var o=document.createElement("span");o.innerText="방송 캡처";var a=document.createElement("button");a.addEventListener("click",(function(e){e.preventDefault();try{var t=document.getElementById("livePlayer"),r=document.createElement("canvas");r.width=t.videoWidth,r.height=t.videoHeight;var n=r.getContext("2d");if(!n)return;n.drawImage(t,0,0,r.width,r.height);var o=r.toDataURL("image/png"),a=document.createElement("a");a.href=o,a.download="afreecaTV_plus_".concat((new Date).getTime(),".png"),a.click()}catch(e){}})),a.style.setProperty("width","21px"),a.style.setProperty("height","21px"),a.innerHTML='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M3,9A1,1,0,0,0,4,8V5A1,1,0,0,1,5,4H8A1,1,0,0,0,8,2H5A3,3,0,0,0,2,5V8A1,1,0,0,0,3,9ZM8,20H5a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14ZM19,2H16a1,1,0,0,0,0,2h3a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,19,2Zm2,13a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H16a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V16A1,1,0,0,0,21,15Z" fill="#6563ff"/> </svg>';var i=a.querySelector("svg");null!=i&&(i.style.setProperty("vertical-align","middle"),a.appendChild(o),r.appendChild(a),r.appendChild(n),null==t||t.appendChild(r))}(),function(){var e=document.querySelector(".player_item_list"),t=null==e?void 0:e.querySelector("ul"),r=document.createElement("li");r.classList.add("share");var n=document.createElement("div");n.classList.add("sub_tooltip"),n.innerText="콜렉터 상하변경",n.style.setProperty("transform","translate(-80%, 0)");var o=document.createElement("span");o.innerText="콜렉터 상하변경";var a=document.createElement("button");a.addEventListener("click",(function(e){e.preventDefault();try{var t=document.getElementById("afreeca-chat-list-container");if(null==t)return;var r=document.querySelector(".filter-area"),n=document.querySelector(".live-area"),o=document.getElementById("handle-container");r&&n&&(H?(H=!1,t.insertBefore(r,o),t.insertBefore(n,null)):(H=!0,t.insertBefore(n,o),t.insertBefore(r,null)))}catch(e){}})),a.style.setProperty("width","21px"),a.style.setProperty("height","21px"),a.innerHTML='<svg id="Layer_1" style="enable-background:new 0 0 120 120;" version="1.1" viewBox="0 0 120 120" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">\n\t.st0{fill:none;}\n\t.st1{fill:#386BFF;}\n\t.st2{fill:#5DE88B;}\n</style><line class="st0" x1="60" x2="60" y1="-67.7" y2="-73.2"/><g><path class="st1" d="M55.4,46.1L37.3,21.5c-1.2-1.6-3.6-1.6-4.7,0L14.4,46.1c-1.4,1.9,0,4.7,2.4,4.7h8.3v46c0,1.6,1.3,2.9,2.9,2.9   h13.8c1.6,0,2.9-1.3,2.9-2.9v-46H53C55.4,50.8,56.8,48.1,55.4,46.1z"/><path class="st2" d="M105.6,73.9L87.5,98.5c-1.2,1.6-3.6,1.6-4.7,0L64.6,73.9c-1.4-1.9,0-4.7,2.4-4.7h8.2v-46   c0-1.6,1.3-2.9,2.9-2.9H92c1.6,0,2.9,1.3,2.9,2.9v46h8.3C105.6,69.2,107,71.9,105.6,73.9z"/></g></svg>';var i=a.querySelector("svg");null!=i&&(i.style.setProperty("vertical-align","middle"),a.appendChild(o),r.appendChild(a),r.appendChild(n),null==t||t.appendChild(r))}(),e=new MutationObserver(O),C&&e.observe(C,B),[2]}}))}))),chrome.storage.local.onChanged.addListener(function(){var e=x((function(e){return E(this,(function(e){switch(e.label){case 0:return[4,_()];case 1:return e.sent(),[4,T()];case 2:return e.sent(),[4,A()];case 3:return e.sent(),[4,g()];case 4:return S=e.sent(),[4,w()];case 5:return q=e.sent(),S.isUse?[4,D()]:[3,7];case 6:return e.sent(),[3,8];case 7:V(),e.label=8;case 8:return[2]}}))}));return function(t){return e.apply(this,arguments)}}());var j="up",G=0,Y=function(e){return"1"===e.style.order?"up":"down"},J=function(e){if(e.preventDefault(),R){if(H){var t=document.querySelector(".live-area");if(null==t)return;t.classList.add("freeze"),j=Y(t)}else R.classList.add("freeze"),j=Y(R);window.addEventListener("mousemove",W),window.addEventListener("touchmove",W),window.addEventListener("mouseup",K),window.addEventListener("touchend",K)}},W=function(e){var t=document.getElementById("afreeca-chat-list-container"),r="touches"in e?e.touches[0].clientY:e.clientY,n=0;if(t){var o=t.getBoundingClientRect();n=o.height-77-62,G=100*(1-(r-o.y-77)/n),Q(G=Math.max(0,Math.min(100,Math.round(G))),j)}},K=function(){if(H){var e=document.querySelector(".live-area");if(null==e)return;e.classList.remove("freeze")}else R.classList.remove("freeze");chrome.storage.local.set({containerRatio:G,position:j}),window.removeEventListener("mousemove",W),window.removeEventListener("touchmove",W),window.removeEventListener("mouseup",K),window.removeEventListener("touchend",K)};function Q(e,t){0!=e&&(e=e||30);var r,n=0===e?1:10===e?0:1,o=0===e?0:10===e?1:0;if(1<=e&&e<=100&&(o=parseFloat((.01*e).toFixed(2)),n=parseFloat((1-o).toFixed(2))),"down"===t&&(n=(r=[o,n])[0],o=r[1]),H){var a=document.querySelector(".filter-area"),i=document.querySelector(".live-area");if(!a||!i)return;a.style.height="".concat(100*n,"%"),i.style.height="".concat(100*o,"%")}else{var l=document.querySelector(".live-area"),s=document.querySelector(".filter-area");if(!l||!s)return;l.style.height="".concat(100*n,"%"),s.style.height="".concat(100*o,"%")}}var X=new ResizeObserver((function(e){var t=!0,r=!1,n=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value.contentRect.height,l=document.getElementById("actionbox"),s=document.querySelector(".area_header");if(null==l||null==s)return;var c=i-l.clientHeight-s.clientHeight-20,u=document.getElementById("afreeca-chat-list-container");if(null==u)return;var d=document.querySelector(".filter-area");if(null==d)return;var f=document.querySelector(".live-area");if(null==f)return;if(u.style.setProperty("height",c+"px"),S.isUse){D();var p=d.style.height.indexOf("%"),h=d.style.height.substring(0,p),y=100-Number(h);f.style.setProperty("height",y+"%")}else V()}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}})),$=document.getElementById("chatbox");null!=$&&X.observe($);var ee=new ResizeObserver((function(e){var t=!0,r=!1,n=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){o.value;var i=document.getElementById("chatbox"),l=document.getElementById("actionbox"),s=document.querySelector(".area_header");if(null==i||null==l||null==s)return;var c=i.clientHeight-l.clientHeight-s.clientHeight-20,u=document.getElementById("afreeca-chat-list-container");if(null==u)return;var d=document.querySelector(".filter-area");if(null==d)return;var f=document.querySelector(".live-area");if(null==f)return;if(u.style.setProperty("height",c+"px"),S.isUse){D();var p=d.style.height.indexOf("%"),h=d.style.height.substring(0,p),y=100-Number(h);f.style.setProperty("height",y+"%")}else V()}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}})),te=document.getElementById("actionbox");null!=te&&ee.observe(te)})()})();