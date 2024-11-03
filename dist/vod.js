(()=>{"use strict";var e={266:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,'.dragging{-ms-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;user-select:none;cursor:row-resize}.myBox{order:1;width:100%;height:250px;position:relative}.myBox .cloned-chat-area{padding-bottom:10px}.chat-toggle-btn{display:inline-flex;align-items:center;justify-content:center;letter-spacing:-0.3px;line-height:0;background-color:#4263ba;width:65px;height:25px;border-radius:17px;color:#fff;font-family:"NGB","AppleGothic",sans-serif;font-size:16px}#chat_wrapper{height:100%;position:relative}.selected_chat_area{order:1;width:100%;height:35%;will-change:scroll-position;left:0;right:0;top:40px;bottom:113px;padding:0;z-index:1;overflow:auto;overflow-x:hidden}#handle-container{width:100%;order:2;cursor:row-resize}#tbc-resize-handle{display:flex;height:.5rem;border-top:2px solid #adaaaa;margin:.5rem}.main_chat_area{margin-top:10px;order:3;height:65%;will-change:scroll-position;left:0;right:0;top:40px;bottom:113px;padding:0;z-index:1;overflow:auto;overflow-x:hidden}#chat_area[data-mngr*=chat_two_line] .chatting-list-item .message-container .message-text{display:block}#chat_area[data-mngr*=chat_sort] .chatting-list-item .message-container .username button{width:105%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#chat_area[data-mngr*=chat_sort] .chatting-list-item .message-container{display:flex;gap:0 5px}#chat_area[data-mngr*=chat_sort] .chatting-list-item .message-container .username{flex:0 0 auto;width:126px;margin:0;line-height:1.5}#chat_area[data-mngr*=chat_sort] .chatting-list-item .message-container .message-text{flex:1}',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var h=r(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(f);else{var p=a(f,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var c=n(e,a),l=0;l<o.length;l++){var u=r(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),a=r.n(n),o=r(569),i=r.n(o),s=r(565),c=r.n(s),l=r(216),u=r.n(l),d=r(589),h=r.n(d),f=r(266),p={};function g(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){g(o,n,a,i,s,"next",e)}function s(e){g(o,n,a,i,s,"throw",e)}i(void 0)}))}}function v(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}p.styleTagTransform=h(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=u(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals,m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("nicks")];case 1:return(e=t.sent()).nicks?[2,e.nicks]:[2,[]]}}))})),m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("ids")];case 1:return(e=t.sent()).ids?[2,e.ids]:[2,[]]}}))})),m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("toggle")];case 1:return(e=t.sent()).toggle?[2,e.toggle]:[2,{streamer:!1,manager:!1,topfan:!1,gudok:!1,fan:!1,user:!1}]}}))}));var y=function(){var e=m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("collector")];case 1:return(e=t.sent()).collector?[2,e.collector]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("chatSetting")];case 1:return(e=t.sent()).chatSetting?[2,e.chatSetting]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("chatTwoLine")];case 1:return(e=t.sent()).chatTwoLine?[2,e.chatTwoLine]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("fanBadge")];case 1:return(e=t.sent()).fanBadge?[2,e.fanBadge]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("subscribeBadge")];case 1:return(e=t.sent()).subscribeBadge?[2,e.subscribeBadge]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),S=function(){var e=m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("supportBadge")];case 1:return(e=t.sent()).supportBadge?[2,e.supportBadge]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("topFanBadge")];case 1:return(e=t.sent()).topFanBadge?[2,e.topFanBadge]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("divider")];case 1:return(e=t.sent()).divider?[2,e.divider]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),q=function(){var e=m((function(){var e;return v(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("highlight")];case 1:return(e=t.sent()).highlight?[2,e.highlight]:[2,{isUse:!0}]}}))}));return function(){return e.apply(this,arguments)}}();function P(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function U(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){P(o,n,a,i,s,"next",e)}function s(e){P(o,n,a,i,s,"throw",e)}i(void 0)}))}}function L(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var k,B,T,C,I,z,N,M,O,R,F,H,j={childList:!0,subtree:!0},Z=[],G=[],D=!1;function Y(){return J.apply(this,arguments)}function J(){return(J=U((function(){return L(this,(function(e){return chrome.storage.local.get("nicks").then((function(e){Z=e.nicks?e.nicks:[]})),[2]}))}))).apply(this,arguments)}function V(){return K.apply(this,arguments)}function K(){return(K=U((function(){return L(this,(function(e){return chrome.storage.local.get("ids").then((function(e){G=e.ids?e.ids:[]})),[2]}))}))).apply(this,arguments)}function Q(){return W.apply(this,arguments)}function W(){return(W=U((function(){return L(this,(function(e){return chrome.storage.local.get("toggle").then((function(e){k=e.toggle?e.toggle:{streamer:!1,manager:!1,topfan:!1,gudok:!1,fan:!1,user:!1}})),[2]}))}))).apply(this,arguments)}var X,$=function(e,t){e.forEach((function(e){e.addedNodes.forEach((function(e){if(null!=e.parentNode&&"DIV"==e.nodeName){var t=e.querySelector(".message-container");if(null==t)return;var r=t.querySelector(".username");if(null==r)return;var n=r.querySelector("button");if(null==n)return;var a=n.lastElementChild.getAttribute("user_id"),o=n.lastElementChild.getAttribute("user_nick"),i=t.parentElement.getAttribute("user-type");if(null==a)return;if(null==o)return;if(null==i)return;if(z.isUse){var s=e.querySelector(".thumb");null!=s&&s.style.setProperty("display","none")}else{var c=e.querySelector(".thumb");null!=c&&c.style.setProperty("display","inline-block")}if(N.isUse){var l=e.querySelector(".grade-badge-vip");null!=l&&l.style.setProperty("display","none")}else{var u=e.querySelector(".grade-badge-vip");null!=u&&u.style.removeProperty("display")}if(M.isUse){var d=e.querySelector(".grade-badge-fan");null!=d&&d.style.setProperty("display","none")}else{var h=e.querySelector(".grade-badge-fan");null!=h&&h.style.removeProperty("display")}if(O.isUse){var f=e.querySelector(".grade-badge-support");null!=f&&f.style.setProperty("display","none")}else{var p=e.querySelector(".grade-badge-support");null!=p&&p.style.removeProperty("display")}if(R.isUse){var g=e.querySelector(".author");if(null!=g){var m=g.innerText;g.innerText=m+" : "}}else{var v=e.querySelector(".author");if(null!=v){var y=v.innerText,b=y.indexOf(" : ");-1!=b&&(v.innerText=y.substring(b))}}(function(e,t,r){var n,a=0,o=t.indexOf("(");return n=-1==o?t:t.substring(0,o),Z.forEach((function(t){t.isNickname&&t.user==e&&(a=1)})),G.forEach((function(e){e.isNickname||e.user!=n||(a=1)})),("streamer"==r&&k.streamer||"manager"==r&&k.manager||"vip"==r&&k.topfan||"subscribe"==r&&k.gudok||"fan"==r&&k.fan||""==r&&k.user)&&(a=1),1==a})(o,a,i)&&null!=X&&(X.appendChild(e.cloneNode(!0)),F.isUse&&(t.style.borderLeft="4px solid rgb(255, 193, 7)",t.style.paddingLeft="10px",t.style.marginLeft="-16px"),X.scrollTop=X.scrollHeight)}}))}))};function ee(){return te.apply(this,arguments)}function te(){return te=U((function(){var e,t,r,n,a,o,i,s;return L(this,(function(c){return e=document.getElementById("chatbox_height"),t=document.querySelector(".area_header"),r=document.getElementById("chatArea"),null==e||null==r||null==t||(X=r.cloneNode(),n=r.parentNode,a=(null==e?void 0:e.clientHeight)-(null==t?void 0:t.clientHeight)-20,(o=document.createElement("div")).id="afreeca-chat-list-container",o.style.setProperty("width","100%"),o.style.setProperty("height",a+"px"),o.style.setProperty("will-change","scroll-position"),r.classList.add("live-area"),X.classList.add("filter-area"),X.style.display="none",X.style.height="30%",X.style.top="0px",X.style.position="relative",i=document.createElement("div"),(s=document.createElement("div")).id="tbc-resize-handle",i.id="handle-container",i.style.position="relative",i.appendChild(s),i.style.display="none",i.addEventListener("mousedown",ce),i.addEventListener("touchstart",ce),i.appendChild(s),o.appendChild(X),o.appendChild(i),o.appendChild(r),n.appendChild(o)),[2]}))})),te.apply(this,arguments)}function re(){return ne.apply(this,arguments)}function ne(){return ne=U((function(){var e,t,r,n;return L(this,(function(a){switch(a.label){case 0:return null==(e=document.getElementById("afreeca-chat-list-container"))?[2]:(e.style.setProperty("position","absolute"),X.style.removeProperty("display"),null==(t=document.getElementById("handle-container"))?[2]:(t.style.removeProperty("display"),null==(r=document.querySelector(".live-area"))?[2]:(r.style.setProperty("position","relative"),r.style.setProperty("top","0px"),[4,chrome.storage.local.get("position")])));case 1:return n=a.sent(),[4,chrome.storage.local.get("containerRatio")];case 2:return de(a.sent().containerRatio,n.position),[2]}}))})),ne.apply(this,arguments)}function ae(){var e=document.getElementById("afreeca-chat-list-container");if(null!=e){e.style.removeProperty("position");var t=document.querySelector(".filter-area");if(null!=t){t.style.setProperty("display","none");var r=document.getElementById("handle-container");if(null!=r){r.style.setProperty("display","none");var n=document.querySelector(".live-area");null!=n&&(n.style.removeProperty("position"),n.style.removeProperty("height"),n.style.removeProperty("top"))}}}}new ResizeObserver((function(e){var t=!0,r=!1,n=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value.contentRect.height,s=document.querySelector(".area_header");if(null==s)return;var c=i-s.clientHeight-20;null==T?(T=c,re()):T!=c&&(T=c,document.querySelector(".filter-area"),re())}}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}})),setTimeout(U((function(){var e,t,r,n;return L(this,(function(a){switch(a.label){case 0:return(H=document.getElementById("chatArea"))?[4,ee()]:[2];case 1:return a.sent(),[4,Y()];case 2:return a.sent(),[4,V()];case 3:return a.sent(),[4,Q()];case 4:return a.sent(),[4,y()];case 5:return B=a.sent(),[4,b()];case 6:return C=a.sent(),[4,w()];case 7:return I=a.sent(),[4,_()];case 8:return z=a.sent(),[4,E()];case 9:return N=a.sent(),[4,x()];case 10:return M=a.sent(),[4,S()];case 11:return O=a.sent(),[4,q()];case 12:return F=a.sent(),[4,A()];case 13:return R=a.sent(),e=document.querySelector(".filter-area"),t=document.querySelector(".live-area"),null==e||null==t?[2]:(I.isUse?(t.setAttribute("data-mngr","chat_two_line"),e.setAttribute("data-mngr","chat_two_line")):C.isUse?(t.setAttribute("data-mngr","chat_sort"),e.setAttribute("data-mngr","chat_sort")):(t.removeAttribute("data-mngr"),e.removeAttribute("data-mngr")),C.isUse?(t.setAttribute("data-mngr","chat_sort"),e.setAttribute("data-mngr","chat_sort")):I.isUse?(t.setAttribute("data-mngr","chat_two_line"),e.setAttribute("data-mngr","chat_two_line")):(t.removeAttribute("data-mngr"),e.removeAttribute("data-mngr")),B.isUse?[4,re()]:[3,15]);case 14:return a.sent(),[3,16];case 15:ae(),a.label=16;case 16:return r=new MutationObserver($),H&&r.observe(H,j),null!=(n=document.getElementById("chatting_area"))&&he.observe(n),[2]}}))})),600),chrome.storage.local.onChanged.addListener(function(){var e=U((function(e){var t,r;return L(this,(function(e){switch(e.label){case 0:return[4,Y()];case 1:return e.sent(),[4,V()];case 2:return e.sent(),[4,Q()];case 3:return e.sent(),[4,y()];case 4:return B=e.sent(),[4,b()];case 5:return C=e.sent(),[4,w()];case 6:return I=e.sent(),[4,_()];case 7:return z=e.sent(),[4,E()];case 8:return N=e.sent(),[4,x()];case 9:return M=e.sent(),[4,S()];case 10:return O=e.sent(),[4,q()];case 11:return F=e.sent(),[4,A()];case 12:return R=e.sent(),t=document.querySelector(".filter-area"),r=document.querySelector(".live-area"),null==t||null==r?[2]:(I.isUse?(r.setAttribute("data-mngr","chat_two_line"),t.setAttribute("data-mngr","chat_two_line")):C.isUse?(r.setAttribute("data-mngr","chat_sort"),t.setAttribute("data-mngr","chat_sort")):(r.removeAttribute("data-mngr"),t.removeAttribute("data-mngr")),C.isUse?(r.setAttribute("data-mngr","chat_sort"),t.setAttribute("data-mngr","chat_sort")):I.isUse?(r.setAttribute("data-mngr","chat_two_line"),t.setAttribute("data-mngr","chat_two_line")):(r.removeAttribute("data-mngr"),t.removeAttribute("data-mngr")),B.isUse?[4,re()]:[3,14]);case 13:return e.sent(),[3,15];case 14:ae(),e.label=15;case 15:return[2]}}))}));return function(t){return e.apply(this,arguments)}}());var oe="up",ie=0,se=function(e){return"1"===e.style.order?"up":"down"},ce=function(e){if(e.preventDefault(),X){if(D){var t=document.querySelector(".live-area");if(null==t)return;t.classList.add("freeze"),oe=se(t)}else X.classList.add("freeze"),oe=se(X);window.addEventListener("mousemove",le),window.addEventListener("touchmove",le),window.addEventListener("mouseup",ue),window.addEventListener("touchend",ue)}},le=function(e){var t=document.getElementById("afreeca-chat-list-container"),r="touches"in e?e.touches[0].clientY:e.clientY,n=0;if(t){var a=t.getBoundingClientRect();n=a.height-77-62,ie=100*(1-(r-a.y-77)/n),de(ie=Math.max(0,Math.min(100,Math.round(ie))),oe)}},ue=function(){if(D){var e=document.querySelector(".live-area");if(null==e)return;e.classList.remove("freeze")}else X.classList.remove("freeze");chrome.storage.local.set({containerRatio:ie,position:oe}),window.removeEventListener("mousemove",le),window.removeEventListener("touchmove",le),window.removeEventListener("mouseup",ue),window.removeEventListener("touchend",ue)};function de(e,t){0!=e&&(e=e||30);var r,n=0===e?1:10===e?0:1,a=0===e?0:10===e?1:0;if(1<=e&&e<=100&&(a=parseFloat((.01*e).toFixed(2)),n=parseFloat((1-a).toFixed(2))),"down"===t&&(n=(r=[a,n])[0],a=r[1]),D){var o=document.querySelector(".filter-area"),i=document.querySelector(".live-area");if(!o||!i)return;o.style.height="".concat(100*n,"%"),i.style.height="".concat(100*a,"%")}else{var s=document.querySelector(".live-area"),c=document.querySelector(".filter-area");if(!s||!c)return;s.style.height="".concat(100*n,"%"),c.style.height="".concat(100*a,"%")}}var he=new ResizeObserver((function(e){var t=!0,r=!1,n=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value.contentRect.height,s=document.querySelector(".area_header");if(null==s)return;var c=i-s.clientHeight-20,l=document.getElementById("afreeca-chat-list-container");if(null==l)return;var u=document.querySelector(".filter-area");if(null==u)return;var d=document.querySelector(".live-area");if(null==d)return;if(l.style.setProperty("height",c+"px"),B.isUse){re();var h=u.style.height.indexOf("%"),f=u.style.height.substring(0,h),p=100-Number(f);d.style.setProperty("height",p+"%")}else ae()}}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}}))})()})();