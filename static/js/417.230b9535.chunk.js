"use strict";(self.webpackChunkcampervan_ukraine=self.webpackChunkcampervan_ukraine||[]).push([[417],{490:(e,a,n)=>{n.d(a,{LW:()=>p,v3:()=>u,AK:()=>m});var t="NOT_FOUND";var r=function(e,a){return e===a};function s(e,a){var n="object"===typeof a?a:{equalityCheck:a},s=n.equalityCheck,i=void 0===s?r:s,c=n.maxSize,l=void 0===c?1:c,o=n.resultEqualityCheck,d=function(e){return function(a,n){if(null===a||null===n||a.length!==n.length)return!1;for(var t=a.length,r=0;r<t;r++)if(!e(a[r],n[r]))return!1;return!0}}(i),u=1===l?function(e){var a;return{get:function(n){return a&&e(a.key,n)?a.value:t},put:function(e,n){a={key:e,value:n}},getEntries:function(){return a?[a]:[]},clear:function(){a=void 0}}}(d):function(e,a){var n=[];function r(e){var r=n.findIndex((function(n){return a(e,n.key)}));if(r>-1){var s=n[r];return r>0&&(n.splice(r,1),n.unshift(s)),s.value}return t}return{get:r,put:function(a,s){r(a)===t&&(n.unshift({key:a,value:s}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(l,d);function m(){var a=u.get(arguments);if(a===t){if(a=e.apply(null,arguments),o){var n=u.getEntries().find((function(e){return o(e.value,a)}));n&&(a=n.value)}u.put(arguments,a)}return a}return m.clearCache=function(){return u.clear()},m}function i(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),t=1;t<a;t++)n[t-1]=arguments[t];return function(){for(var a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];var s,i=0,c={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(c=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var o=c.memoizeOptions,d=void 0===o?n:o,u=Array.isArray(d)?d:[d],m=function(e){var a=Array.isArray(e[0])?e[0]:e;if(!a.every((function(e){return"function"===typeof e}))){var n=a.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return a}(t),p=e.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(u)),v=e((function(){for(var e=[],a=m.length,n=0;n<a;n++)e.push(m[n].apply(null,arguments));return s=p.apply(null,e)}));return Object.assign(v,{resultFunc:l,memoizedResultFunc:p,dependencies:m,lastResult:function(){return s},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v}}var c=i(s);const l=e=>e.filter.pagination,o=c([e=>e.campers.items,e=>e.campers.favorite],((e,a)=>{const n=new Set(a);return e.map((e=>({...e,isFav:n.has(e.id)})))})),d=c([o,e=>e.filter],((e,a)=>{const n=a.filterType.filter((e=>e.isSelected));n.length>0&&(e=e.filter((e=>n.some((a=>a.key===e.form)))));const t=a.filterEquipment.filter((e=>e.isSelected)),r=t.flatMap((e=>e.keys));r.length>0&&(e=e.filter((e=>r.every((a=>e.details.some((e=>e.id===a)))))));const s=t.find((e=>e.keys.includes("transmission")));s&&(e=e.filter((e=>e.details.some((e=>s.keys.includes(e.id)&&s.value===e.value)))));const i=a.filterLocation.toLocaleLowerCase();return i.length>0&&(e=e.filter((e=>e.location.toLowerCase().includes(i)))),e})),u=c([d,l],((e,a)=>e.slice(0,a.perPage*a.page))),m=c([d,l],((e,a)=>({page:a.page,hasNextPage:e.length-a.perPage*a.page>0,perPage:a.perPage}))),p=c([o],(e=>e.filter((e=>e.isFav))))},575:(e,a,n)=>{n.d(a,{A:()=>M});const t={list:"CamperList_list__9c3CG"};var r=n(990),s=n(325),i=n(43);const c={categories:"CategoryItem_categories__VGP3E",categoriesIcon:"CategoryItem_categoriesIcon__2at7E",categoriesText:"CategoryItem_categoriesText__Xrub6"};var l=n(579);const o={engine:m,transmission:m,airConditioner:()=>"AC",beds:u};function d(e,a){return 1==a?function(e){return p(e)}(e):u(e,a)}function u(e,a){return"".concat(a," ").concat(e)}function m(e,a){return p(a+"")}function p(e){return e[0].toUpperCase()+e.substring(1)}function v(e){let{label:a,value:n}=e;const t=function(e,a){const n=o[e]||{};return{id:e,text:"function"===typeof n?n(e,a):d(e,a),icon:e}}(a,n);return(0,l.jsxs)("div",{className:c.categories,children:[(0,l.jsx)("svg",{className:c.categoriesIcon,children:(0,l.jsx)("use",{xlinkHref:"icons.svg#icon-"+t.icon})}),t.text]})}const f={categories:"CategoryList_categories__HWRZR",showMore:"CategoryList_showMore__V-ttB"};function _(e){let{details:a}=e;const[n,t]=(0,i.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:f.categories,children:a.slice(0,n?-1:7).map((e=>(0,l.jsx)(v,{label:e.id,value:e.value},e.id)))}),!n&&(0,l.jsx)("div",{className:f.showMore,onClick:()=>t(!0),children:"show all \u25be"})]})}const g={card:"Camper_card__IBv5f",cardContent:"Camper_cardContent__JPACi",cardImage:"Camper_cardImage__BIQMJ",text:"Camper_text__tmmdi",cardDetails:"Camper_cardDetails__qM3Tj",container:"Camper_container__cg+j9",header:"Camper_header__epMHk",headerLeft:"Camper_headerLeft__0ec8v",price:"Camper_price__QyQYw",favIcon:"Camper_favIcon__ln4Ah",ratingIcon:"Camper_ratingIcon__0L5CA",rating:"Camper_rating__Byz54",additionalInfo:"Camper_additionalInfo__P2Q3P",supportingText:"Camper_supportingText__2o3CS"};function h(e){let{el:a,showModal:n}=e;const t=(0,r.j)();return(0,l.jsx)("div",{className:g.card,children:(0,l.jsxs)("div",{className:g.cardContent,children:[(0,l.jsx)("div",{className:g.cardImage,children:(0,l.jsx)("img",{src:a.galleryUrls[0],alt:a.name})}),(0,l.jsxs)("div",{className:g.cardDetails,children:[(0,l.jsxs)("div",{className:g.container,children:[(0,l.jsxs)("div",{className:g.header,children:[(0,l.jsx)("div",{className:g.title,children:(0,l.jsx)("h1",{children:a.name})}),(0,l.jsxs)("div",{className:g.headerLeft,children:[(0,l.jsxs)("div",{className:g.price,children:["\u20ac",a.price.toFixed(2).toLocaleString()]}),(0,l.jsx)("svg",{className:g.favIcon,onClick:()=>t((0,s.dw)(a.id)),children:(0,l.jsx)("use",{xlinkHref:"icons.svg#icon-"+(a.isFav?"fav_heart":"heart")})})]})]}),(0,l.jsxs)("div",{className:g.additionalInfo,children:[(0,l.jsxs)("div",{className:g.text,children:[(0,l.jsx)("svg",{className:g.favIcon,children:(0,l.jsx)("use",{xlinkHref:"icons.svg#icon-star"})}),(0,l.jsxs)("div",{className:g.rating,children:[a.rating,"(",a.reviews.length," Reviews)"]})]}),(0,l.jsxs)("div",{className:g.text,children:[(0,l.jsx)("svg",{className:g.favIcon,children:(0,l.jsx)("use",{xlinkHref:"icons.svg#icon-location"})}),(0,l.jsx)("div",{className:g.location,children:a.location})]})]})]}),(0,l.jsx)("div",{className:g.supportingText,children:a.description}),(0,l.jsx)(_,{details:a.details}),(0,l.jsx)("button",{className:"accentButton",onClick:()=>n(a),children:"Show more"})]})]})})}var x=n(950);const j={modalContainer:"Modal_modalContainer__qBXLN",modalHeader:"Modal_modalHeader__Ee1C-"},C=document.getElementById("modal-root"),y=e=>{let{children:a,onClose:n}=e;(0,i.useEffect)((()=>{const e=e=>{"Escape"===e.code&&n()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[n]);return(0,x.createPortal)((0,l.jsx)("div",{className:"overlay",onClick:e=>{e.currentTarget===e.target&&n()},children:(0,l.jsxs)("div",{className:j.modalContainer,children:[(0,l.jsx)("div",{className:j.modalHeader,children:(0,l.jsx)("svg",{className:j.favIcon,onClick:n,children:(0,l.jsx)("use",{xlinkHref:"icons.svg#icon-close"})})}),a]})}),C)},N={cardContent:"CamperDetails_cardContent__OfuxF",gallery:"CamperDetails_gallery__xyqA1",cardImage:"CamperDetails_cardImage__qvqZ3",text:"CamperDetails_text__tkkDT",cardDetails:"CamperDetails_cardDetails__ZpZVK",container:"CamperDetails_container__suue2",header:"CamperDetails_header__lcLYW",headerLeft:"CamperDetails_headerLeft__4LNc5",title:"CamperDetails_title__9xa66",price:"CamperDetails_price__vNgfB",favIcon:"CamperDetails_favIcon__jtnJ7",ratingIcon:"CamperDetails_ratingIcon__05cMB",rating:"CamperDetails_rating__+Ymzu",location:"CamperDetails_location__MK7b3",additionalInfo:"CamperDetails_additionalInfo__n5Utc",supportingText:"CamperDetails_supportingText__R53UZ"};function I(e){let{el:a,showModal:n}=e;return(0,l.jsxs)("div",{className:N.cardContent,children:[(0,l.jsxs)("div",{className:N.header,children:[(0,l.jsx)("div",{className:N.title,children:(0,l.jsx)("h1",{children:a.name})}),(0,l.jsxs)("div",{className:N.additionalInfo,children:[(0,l.jsxs)("div",{className:N.text,children:[(0,l.jsx)("svg",{className:N.favIcon,children:(0,l.jsx)("use",{xlinkHref:"icons.svg#icon-star"})}),(0,l.jsxs)("div",{className:N.rating,children:[a.rating,"(",a.reviews.length," Reviews)"]})]}),(0,l.jsxs)("div",{className:N.text,children:[(0,l.jsx)("svg",{className:N.favIcon,children:(0,l.jsx)("use",{xlinkHref:"icons.svg#icon-location"})}),(0,l.jsx)("div",{className:N.location,children:a.location})]})]}),(0,l.jsxs)("div",{className:N.price,children:["\u20ac",a.price.toFixed(2).toLocaleString()]})]}),(0,l.jsxs)("div",{className:N.cardDetails,children:[(0,l.jsxs)("div",{className:N.gallery,children:[(0,l.jsx)("div",{className:N.cardImage,children:(0,l.jsx)("img",{src:a.galleryUrls[0],alt:a.name})}),(0,l.jsx)("div",{className:N.cardImage,children:(0,l.jsx)("img",{src:a.galleryUrls[1],alt:a.name})}),(0,l.jsx)("div",{className:N.cardImage,children:(0,l.jsx)("img",{src:a.galleryUrls[2],alt:a.name})})]}),(0,l.jsx)("div",{className:N.supportingText,children:a.description}),(0,l.jsx)(_,{details:a.details})]})]})}const k="Message_info__wv0Jn",w="Message_warning__-C1KS",D="Message_error__Dd2nR";class L extends i.Component{render(){return{info:(0,l.jsx)("div",{className:k,children:this.props.message}),warning:(0,l.jsx)("div",{className:w,children:this.props.message}),error:(0,l.jsx)("div",{className:D,children:this.props.message})}[this.props.level]}}function M(e){let{campers:a}=e;const[n,r]=(0,i.useState)(null),s=e=>{r(n?null:e)};return a.length?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:t.list,children:a.map((e=>(0,l.jsx)(h,{el:e,showModal:s},e.id)))}),n&&(0,l.jsx)(y,{onClose:()=>s(),children:(0,l.jsx)(I,{el:n,showModal:s},n.id)})]}):(0,l.jsx)(L,{level:"info",message:"Campers by your filters aren't available"})}L.defaultProps={level:"warning"}}}]);
//# sourceMappingURL=417.230b9535.chunk.js.map