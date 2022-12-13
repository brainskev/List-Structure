"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{615:(n,e,t)=>{var r=t(892),i=t.n(r),o=t(760),a=t.n(o),s=t(311),c=t.n(s),l=t(192),d=t.n(l),p=t(60),u=t.n(p),f=t(865),m=t.n(f),h=t(802),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),i()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;class g{static displayToDo(){[{description:"Read a book",completed:!1,index:0},{description:"Read the bible",completed:!1,index:1},{description:"Write my daily plan",completed:!1,index:2},{description:"Attend Microverse Classes",completed:!1,index:3}].forEach((n=>g.addTodo(n)))}static addTodo(n){const e=document.querySelector(".list"),t=document.createElement("li");t.innerHTML=`\n    <li class="listItems">\n                <input type="checkbox" name="select" id="" class="check" />\n                <p class="title">${n.description}</p>\n                <i id="moreicon" class="fa-solid fa-ellipsis-vertical"></i>\n              </li>\n    `,e.appendChild(t)}}document.addEventListener("DOMContentLoaded",g.displayToDo())},802:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(933),i=t.n(r),o=t(476),a=t.n(o)()(i());a.push([n.id,"body {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .todo-form {\n    box-shadow: 0 4px 4px 4px rgba(216, 216, 216, 0.762);\n    border: 0.2px solid rgba(216, 216, 216, 0.762);\n    width: 80vw;\n    background: white;\n    margin-top: 10vh;\n  }\n  \n  .title {\n    display: flex;\n    align-items: center;\n  }\n  \n  h3 {\n    padding: 3% 0;\n    font-size: 1.2rem;\n    margin: 0;\n    color: rgb(119, 119, 119);\n    font-weight: 600;\n    width: 90.1%;\n  }\n  \n  .input {\n    outline: none;\n    width: 90%;\n    border: none;\n    background: none;\n    font-style: italic;\n    font-size: 1.2rem;\n    padding: 2% 0;\n  }\n  \n  .list {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  \n  .listItems {\n    width: 100vw;\n  }\n  \n  list li p {\n    display: flex;\n    justify-content: flex-start;\n    width: 87%;\n  }\n  \n  h3,\n  input {\n    margin-left: 4% !important;\n  }\n  \n  .list li {\n    padding: 16px;\n    border-bottom: 0.5px solid rgba(207, 207, 207, 0.762);\n    font-size: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  input.check {\n    width: 1rem;\n    height: 1rem;\n    margin-right: 2%;\n  }\n  \n  .remove {\n    padding: 0;\n    height: 1rem;\n  }\n  \n  .btn-clear-all {\n    width: 100%;\n    margin: 0;\n    padding: 2%;\n    text-align: center;\n    background: rgba(239, 239, 239, 0.887);\n    border: none;\n    color: rgb(97, 97, 97);\n    font-size: 1rem;\n  }\n  ",""]);const s=a},476:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},933:n=>{n.exports=function(n){return n[1]}},892:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=r(n,i),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},311:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},192:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},760:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},865:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},n=>{n(n.s=615)}]);