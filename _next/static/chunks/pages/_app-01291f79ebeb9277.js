(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(7155)}])},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,l=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a,u=(a=t(7294))&&a.__esModule?a:{default:a},l=t(1003),i=t(880),c=t(9246);var f={};function s(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=i.useRouter(),a=u.default.useMemo((function(){var r=o(l.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,h=u.default.useRef(d),y=u.default.useRef(p),v=e.children,m=e.replace,b=e.shallow,g=e.scroll,_=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var j=(r=u.default.Children.only(v))&&"object"===typeof r&&r.ref,w=o(c.useIntersection({rootMargin:"200px"}),3),L=w[0],x=w[1],O=w[2],C=u.default.useCallback((function(e){y.current===p&&h.current===d||(O(),y.current=p,h.current=d),L(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,O,L]);u.default.useEffect((function(){var e=x&&t&&l.isLocalURL(d),r="undefined"!==typeof _?_:n&&n.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,x,_,t,n]);var E={ref:C,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,u,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:i,scroll:u}))}(e,n,d,p,m,b,g,_)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof _?_:n&&n.locale,M=n&&n.isLocaleDomain&&l.getDomainLocale(p,k,n&&n.locales,n&&n.domainLocales);E.href=M||l.addBasePath(l.addLocale(p,k,n&&n.defaultLocale))}return u.default.cloneElement(r,E)};r.default=d,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,l=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(r?r.current:null),2),y=h[0],v=h[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=i.get(n):(r=i.get(t),c.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,u=n.elements;return u.set(e,r),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var r=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:t}))}),[n,y,t,d]),b=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!l&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&v(r.current)}),[r]),[m,d,b]};var a=t(7294),u=t(4686),l="undefined"!==typeof IntersectionObserver;var i=new Map,c=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},7155:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var n=t(5893),o=(t(7039),t(3855)),a=t.n(o),u=t(1664),l=t.n(u),i=function(){return(0,n.jsx)("header",{className:a().header,children:(0,n.jsxs)("div",{className:a().headerWrapper,children:[(0,n.jsx)("div",{className:a().headerLogo,children:(0,n.jsx)(l(),{href:"/",children:"sh1ma.dev"})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{className:a().headerLinkList,children:(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/about",children:"About"})})})})]})})};function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}var s=function(e){var r=e.Component,t=e.pageProps;return(0,n.jsxs)("div",{className:"app",children:[(0,n.jsx)(i,{}),(0,n.jsx)(r,f({},t))]})}},3855:function(e){e.exports={header:"CommonHeader_header__DxlyP",headerWrapper:"CommonHeader_headerWrapper__Z8YgN",headerLogo:"CommonHeader_headerLogo__l1gac",headerLinkList:"CommonHeader_headerLinkList__aH4no"}},7039:function(){},1664:function(e,r,t){e.exports=t(1551)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(6363),r(880)}));var t=e.O();_N_E=t}]);