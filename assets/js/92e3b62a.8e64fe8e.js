"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[2230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(r),y=a,f=m["".concat(i,".").concat(y)]||m[y]||p[y]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],u={title:"v0.8.1",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},i=void 0,l={permalink:"/nestjs-query/blog/2020/04/08/v0.8.1",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-04-08-v0.8.1.md",source:"@site/blog/2020-04-08-v0.8.1.md",title:"v0.8.1",description:'* FIXED] Mysql error "LIMIT in subquery" [#77',date:"2020-04-08T00:00:00.000Z",formattedDate:"April 8, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"patch",permalink:"/nestjs-query/blog/tags/patch"}],readingTime:.09,hasTruncateMarker:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],frontMatter:{title:"v0.8.1",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},prevItem:{title:"v0.8.3",permalink:"/nestjs-query/blog/2020/04/15/v0.8.3"},nextItem:{title:"v0.8.0",permalink:"/nestjs-query/blog/2020/04/07/v0.8.0"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[FIXED]",' Mysql error "LIMIT in subquery" ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/issues/77"},"#77"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Changed ",(0,o.kt)("inlineCode",{parentName:"li"},"nestjs-query/query-typeorm")," to not use subqueries to fetch relations.")))))}y.isMDXComponent=!0}}]);