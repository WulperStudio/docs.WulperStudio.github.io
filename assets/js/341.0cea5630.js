(self.webpackChunkwulper_studio_docs=self.webpackChunkwulper_studio_docs||[]).push([[341],{8617:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="iconExternalLink_3J9K",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,c=void 0===l?13.5:l;return r.createElement("svg",{width:n,height:c,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},4478:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),c=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,i=e.height,o=void 0===i?30:i,s=e.className,u=(0,a.Z)(e,c);return l.createElement("svg",(0,r.Z)({className:s,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},u),l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},341:function(e,t,n){"use strict";n.d(t,{Z:function(){return he}});var r=n(7294),a=n(6010),l=n(4973),c=n(9306),i="skipToContent_1oUP";function o(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null);return(0,c.SL)((function(t){var n=t.location;e.current&&!n.hash&&o(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&o(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u="announcementBar_3WsW",m="announcementBarClose_38nx",d="announcementBarContent_3EUC",f="announcementBarCloseable_3myR";var v=function(){var e,t=(0,c.nT)(),n=t.isClosed,i=t.close,o=(0,c.LU)().announcementBar;if(!o)return null;var s=o.content,v=o.backgroundColor,h=o.textColor,g=o.isCloseable;return!s||g&&n?null:r.createElement("div",{className:u,style:{backgroundColor:v,color:h},role:"banner"},r.createElement("div",{className:(0,a.Z)(d,(e={},e[f]=g,e)),dangerouslySetInnerHTML:{__html:s}}),g?r.createElement("button",{type:"button",className:(0,a.Z)(m,"clean-btn"),onClick:i,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=n(2122),g=function(){return null},b=n(2263),E={toggle:"toggle_71bT"},p=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.dark),style:n},t)},k=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.light),style:n},t)},Z=(0,r.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,c=e.disabled,i=e.onChange,o=(0,r.useState)(l),s=o[0],u=o[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":c})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function w(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,l=t.lightIcon,i=t.lightIconStyle,o=(0,b.Z)().isClient;return r.createElement(Z,(0,h.Z)({disabled:!o,icons:{checked:r.createElement(p,{icon:n,style:a}),unchecked:r.createElement(k,{icon:l,style:i})}},e))}var _=n(5350),N=n(5977),C=n(7898),y=function(e){var t=(0,N.TH)(),n=(0,r.useState)(e),a=n[0],l=n[1],i=(0,r.useRef)(!1),o=(0,r.useState)(0),s=o[0],u=o[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,C.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)l(!0);else{if(i.current)return i.current=!1,void l(!1);a&&0===r&&l(!0);var c=document.documentElement.scrollHeight-s,o=window.innerHeight;a&&r>=a?l(!1):r+o<c&&l(!0)}}),[s,i]),(0,c.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},I=n(1839),L=n(3783),D=n(9756),T=n(5525),x=["width","height"],B=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,l=void 0===a?20:a,c=(0,D.Z)(e,x);return r.createElement("svg",(0,h.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},c),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},S=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function A(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,l=(0,D.Z)(e,S),i=(0,b.Z)().i18n,o=i.currentLocale,s=i.locales,u=i.localeConfigs,m=(0,c.l5)();function d(e){return u[e].label}var f=s.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===o?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),g=t?"Languages":d(o);return r.createElement(T.Z,(0,h.Z)({},l,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(B,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,g)),items:v}))}function M(e){return e.mobile?null:r.createElement(g,null)}var U=["type"],R={default:function(){return T.Z},localeDropdown:function(){return A},search:function(){return M},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function P(e){var t=e.type,n=(0,D.Z)(e,U),a=function(e){void 0===e&&(e="default");var t=R[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(t);return r.createElement(a,n)}var V=n(5537),H=n(4478),W="displayOnlyInLargeViewport_GrZ2",z="navbarHideable_2qcr",O="navbarHidden_3yey",G="right";var q=function(){var e,t=(0,c.LU)(),n=t.navbar,l=n.items,i=n.hideOnScroll,o=n.style,s=t.colorMode.disableSwitch,u=(0,r.useState)(!1),m=u[0],d=u[1],f=(0,_.Z)(),v=f.isDarkTheme,b=f.setLightTheme,E=f.setDarkTheme,p=y(i),k=p.navbarRef,Z=p.isNavbarVisible;(0,I.Z)(m);var N=(0,r.useCallback)((function(){d(!0)}),[d]),C=(0,r.useCallback)((function(){d(!1)}),[d]),D=(0,r.useCallback)((function(e){return e.target.checked?E():b()}),[b,E]),T=(0,L.Z)();(0,r.useEffect)((function(){T===L.D.desktop&&d(!1)}),[T]);var x=l.some((function(e){return"search"===e.type})),B=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:G)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:G)}))}}(l),S=B.leftItems,A=B.rightItems;return r.createElement("nav",{ref:k,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":m},e[z]=i,e[O]=i&&!Z,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:N,onKeyDown:N},r.createElement(H.Z,null)),r.createElement(V.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),S.map((function(e,t){return r.createElement(P,(0,h.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},A.map((function(e,t){return r.createElement(P,(0,h.Z)({},e,{key:t}))})),!s&&r.createElement(w,{className:W,checked:v,onChange:D}),!x&&r.createElement(g,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(V.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:C}),!s&&m&&r.createElement(w,{checked:v,onChange:D})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.createElement(P,(0,h.Z)({mobile:!0},e,{onClick:C,key:t}))})))))))},j=n(5536),F=n(412),J=(0,c.WA)("theme"),K="light",Q="dark",Y=function(e){return e===Q?Q:K},X=function(e){(0,c.WA)("theme").set(Y(e))},$=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,l=(0,r.useState)(function(e){return F.Z.canUseDOM?Y(document.documentElement.getAttribute("data-theme")):Y(e)}(t)),i=l[0],o=l[1],s=(0,r.useCallback)((function(){o(K),X(K)}),[]),u=(0,r.useCallback)((function(){o(Q),X(Q)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",Y(i))}),[i]),(0,r.useEffect)((function(){if(!n)try{var e=J.get();null!==e&&o(Y(e))}catch(t){console.error(t)}}),[o]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?Q:K)}))}),[]),{isDarkTheme:i===Q,setLightTheme:s,setDarkTheme:u}},ee=n(2924);var te=function(e){var t=$(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return r.createElement(ee.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:l}},e.children)},ne="docusaurus.tab.",re=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ne)){var n=t.substring(ne.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},ae=(0,r.createContext)(void 0);var le=function(e){var t=re(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(ae.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function ce(e){var t=e.children;return r.createElement(te,null,r.createElement(c.pl,null,r.createElement(le,null,r.createElement(c.L5,null,t))))}var ie=n(9105),oe=n(4996);function se(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(ie.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var ue=n(1217);function me(){var e=(0,b.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return r.createElement(ie.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function de(e){var t=e.permalink,n=(0,b.Z)().siteConfig.url,a=function(){var e=(0,b.Z)().siteConfig.url,t=(0,N.TH)().pathname;return e+(0,oe.Z)(t)}(),l=t?""+n+t:a;return r.createElement(ie.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function fe(e){var t=(0,b.Z)(),n=t.siteConfig,a=n.favicon,l=n.themeConfig,i=l.metadatas,o=l.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,g=e.keywords,E=e.searchMetadatas,p=(0,oe.Z)(a),k=(0,c.pe)(d),Z=u,w=m[u].direction;return r.createElement(r.Fragment,null,r.createElement(ie.Z,null,r.createElement("html",{lang:Z,dir:w}),a&&r.createElement("link",{rel:"shortcut icon",href:p}),r.createElement("title",null,k),r.createElement("meta",{property:"og:title",content:k}),v||o&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(ue.Z,{description:f,keywords:g,image:v}),r.createElement(de,null),r.createElement(me,null),r.createElement(se,(0,h.Z)({tag:c.HX,locale:u},E)),r.createElement(ie.Z,null,i.map((function(e,t){return r.createElement("meta",(0,h.Z)({key:"metadata_"+t},e))}))))}var ve=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var he=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,i=e.pageClassName;return ve(),r.createElement(ce,null,r.createElement(fe,e),r.createElement(s,null),r.createElement(v,null),r.createElement(q,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,l,i)},t),!n&&r.createElement(j.Z,null))}},5537:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),c=n(6742),i=n(8465),o=n(4996),s=n(2263),u=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,g=t.isClient,b=e.imageClassName,E=e.titleClassName,p=(0,a.Z)(e,u),k=(0,o.Z)(h.href||"/"),Z={light:(0,o.Z)(h.src),dark:(0,o.Z)(h.srcDark||h.src)};return l.createElement(c.Z,(0,r.Z)({to:k},p,h.target&&{target:h.target}),h.src&&l.createElement(i.Z,{key:g,className:b,sources:Z,alt:h.alt||f||m}),null!=f&&l.createElement("b",{className:E},f))}},5525:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),c=n(6010),i=n(6742),o=n(4996),s=n(5977),u=n(9306),m=n(8617),d=n(3919),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["items","position","className"],h=["className"],g=["items","className","position"],b=["className"],E=["mobile"],p="dropdown__link--active";function k(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,s=e.href,u=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,g=e.prependBaseUrlToHref,b=(0,a.Z)(e,f),E=(0,o.Z)(c),k=(0,o.Z)(t),Z=(0,o.Z)(s,{forcePrependBaseUrl:!0}),w=u&&s&&!(0,d.Z)(s),_=h===p;return l.createElement(i.Z,(0,r.Z)({},s?{href:g?Z:s}:Object.assign({isNavLink:!0,activeClassName:h,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),b),w?l.createElement("span",null,u,l.createElement(m.Z,_&&{width:12,height:12})):u)}function Z(e){var t,n=e.items,i=e.position,o=e.className,s=(0,a.Z)(e,v),u=(0,l.useRef)(null),m=(0,l.useRef)(null),d=(0,l.useState)(!1),f=d[0],g=d[1];(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),(0,c.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?l.createElement("div",{ref:u,className:(0,c.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":f})},l.createElement(k,(0,r.Z)({className:b(o)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!f))}}),null!=(t=s.children)?t:s.label),l.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var c=e.className,i=(0,a.Z)(e,h);return l.createElement("li",{key:t},l.createElement(k,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:p,className:b(c,!0)},i)))})))):l.createElement(k,(0,r.Z)({className:b(o)},s))}function w(e){var t,n,i,o=e.items,m=e.className,d=(e.position,(0,a.Z)(e,g)),f=(0,l.useRef)(null),v=(0,s.TH)().pathname,h=(0,l.useState)((function(){var e;return null==(e=!(null!=o&&o.some((function(e){return(0,u.Mg)(e.to,v)}))))||e})),E=h[0],p=h[1],Z=function(e,t){return void 0===t&&(t=!1),(0,c.Z)("menu__link",{"menu__link--sublist":t},e)};if(!o)return l.createElement("li",{className:"menu__list-item"},l.createElement(k,(0,r.Z)({className:Z(m)},d)));var w=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return l.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":E})},l.createElement(k,(0,r.Z)({role:"button",className:Z(m,!0)},d,{onClick:function(e){e.preventDefault(),p((function(e){return!e}))}}),null!=(i=d.children)?i:d.label),l.createElement("ul",{className:"menu__list",ref:f,style:{height:E?void 0:w}},o.map((function(e,t){var n=e.className,c=(0,a.Z)(e,b);return l.createElement("li",{className:"menu__list-item",key:t},l.createElement(k,(0,r.Z)({activeClassName:"menu__link--active",className:Z(n)},c,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,E),c=n?w:Z;return l.createElement(c,r)}},6400:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),a=n(9756),l=n(7294),c=n(5525),i=n(907),o=n(6010),s=n(9306),u=n(8780),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,m),g=(0,i.Iw)(v),b=g.activeVersion,E=g.activeDoc,p=(0,s.J)(v).preferredVersion,k=(0,i.yW)(v),Z=function(e,t){var n,r=(n=[]).concat.apply(n,e.map((function(e){return e.docs}))),a=r.find((function(e){return e.id===t}));if(!a){var l=r.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+l)}return a}((0,u.uniq)([b,p,k].filter(Boolean)),n);return l.createElement(c.Z,(0,r.Z)({exact:!0},h,{className:(0,o.Z)(h.className,(t={},t[d]=E&&E.sidebar===Z.sidebar,t)),label:null!=f?f:Z.id,to:Z.path}))}},9308:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),l=n(7294),c=n(5525),i=n(907),o=n(9306),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,a.Z)(e,s),b=(0,i.Iw)(d),E=(0,i.gB)(d),p=(0,i.yW)(d),k=(0,o.J)(d),Z=k.preferredVersion,w=k.savePreferredVersionName;var _=function(){var e=E.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){w(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),N=null!=(t=null!=(n=b.activeVersion)?n:Z)?t:p,C=m&&_?"Versions":N.label,y=m&&_?void 0:u(N).path;return l.createElement(c.Z,(0,r.Z)({},g,{mobile:m,label:C,to:y,items:_,isActive:f?function(){return!1}:void 0}))}},7250:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),c=n(5525),i=n(907),o=n(9306),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,i.zu)(m),v=(0,o.J)(m).preferredVersion,h=(0,i.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return l.createElement(c.Z,(0,r.Z)({},d,{label:b,to:E}))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},8465:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),l=n(7294),c=n(6010),i=n(2263),o=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,i.Z)().isClient,n=(0,o.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,g.map((function(e){return l.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,c.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},1839:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},7898:function(e,t,n){"use strict";var r=n(7294),a=n(412),l=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(l()),a=function(){var t=l();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3783:function(e,t,n){"use strict";n.d(t,{D:function(){return l}});var r=n(7294),a=n(412),l={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?l.desktop:l.mobile}var n=(0,r.useState)(t),c=n[0],i=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){i(t())}}),[]),c}}}]);