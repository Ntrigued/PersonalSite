(()=>{"use strict";var e,t={8432:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var n=o(r(5311)),a=r(5781),i=r(6024),l=function(e){(0,n.default)("#tab-new a.task-type-choice, #tab-new a.choose-different-task-type",e.body).on("click",(function(){return e.loadUrl(this.href),!1})),(0,n.default)("form.task-create",e.body).on("submit",(function(){return(0,i.submitCreationForm)(e,this,{errorContainerSelector:"#tab-new"}),!1}))},u={chooser:function(e,t){function r(t){(0,n.default)("a.task-choice",t).on("click",(function(){return e.loadUrl(this.href),!1})),(0,n.default)(".pagination a",t).on("click",(function(){return o.fetchResults(this.href),!1})),(0,a.initTabs)()}var o=new i.SearchController({form:(0,n.default)("form.task-search",e.body),containerElement:e.body,resultsContainerSelector:"#search-results",onLoadResults:function(e){r(e)},inputDelay:50});o.attachSearchInput("#id_q"),o.attachSearchFilter("#id_task_type"),r(e.body),l(e)},task_chosen:function(e,t){e.respond("taskChosen",t.result),e.close()},reshow_create_tab:function(e,t){(0,n.default)("#tab-new",e.body).html(t.htmlFragment),l(e)}};window.TASK_CHOOSER_MODAL_ONLOAD_HANDLERS=u},5311:e=>{e.exports=jQuery}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],l=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[u])))?r.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=342,(()=>{var e={342:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,l,u]=r,s=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(u)var c=u(o)}for(t&&t(r);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},r=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[751],(()=>o(8432)));n=o.O(n)})();