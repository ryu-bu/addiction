(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{357:function(t,a){function s(t){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=function(){return[]},s.resolve=s,t.exports=s,s.id=357},363:function(t,a,s){"use strict";s.r(a);s(93),s(94);var e={data:function(){return{pages:[]}},mounted:function(){var t=this;this.$site.pages.forEach((function(a){"article"===a.frontmatter.type&&t.pages.push(a)}))}},r=s(42),i=Object(r.a)(e,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-container"},t._l(t.pages,(function(a){return e("router-link",{attrs:{to:a.path}},[e("div",{staticClass:"post-card"},[e("img",{staticClass:"article-image",attrs:{src:s(357)(a.frontmatter.image)}}),t._v(" "),e("div",{staticClass:"page-detail"},[e("div",{staticClass:"page-title"},[t._v(t._s(a.frontmatter.title))]),t._v(" "),e("div",{staticClass:"page-description"},[t._v(t._s(a.frontmatter.description))]),t._v(" "),e("div",{staticClass:"page-author"},[t._v("Author: "+t._s(a.frontmatter.author))])])])])})),1)}),[],!1,null,null,null);a.default=i.exports}}]);