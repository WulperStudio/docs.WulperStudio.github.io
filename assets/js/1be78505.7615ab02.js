(self.webpackChunkwulper_studio_docs=self.webpackChunkwulper_studio_docs||[]).push([[514,388],{3616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Q}});var n=a(7294),r=a(3905),o=a(2263),i=a(6291),l=a(341),c=a(2122),s=a(9756),d=a(6010),u=a(9306),m=a(1839),b=a(3783),p=a(7898),f=a(6742),h=a(3919),v=a(5537),E=function(e){return n.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},_=a(4478),g=a(8617),k=a(4973),C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",S="sidebarLogo_3h0W",I="menu_Bmed",y="menuLinkText_2aKo",T="menuWithAnnouncementBar_2WvA",M="collapseSidebarButton_1CGd",A="collapseSidebarButtonIcon_3E-R",w="sidebarMenuIcon_fgN0",L="sidebarMenuCloseIcon_1lpH",R=["items"],x=["item","onItemClick","collapsible","activePath"],B=["item","onItemClick","activePath","collapsible"],P=function e(t,a){return"link"===t.type?(0,u.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},H=(0,n.memo)((function(e){var t=e.items,a=(0,s.Z)(e,R);return t.map((function(e,t){return n.createElement(D,(0,c.Z)({key:t,item:e},a))}))}));function D(e){switch(e.item.type){case"category":return n.createElement(W,e);case"link":default:return n.createElement(F,e)}}function W(e){var t,a=e.item,r=e.onItemClick,o=e.collapsible,i=e.activePath,l=(0,s.Z)(e,x),m=a.items,b=a.label,p=P(a,i),f=(0,u.D9)(p),h=(0,n.useState)((function(){return!!o&&(!p&&a.collapsed)})),v=h[0],E=h[1],_=(0,n.useRef)(null),g=(0,n.useState)(void 0),k=g[0],C=g[1],N=function(e){var t;void 0===e&&(e=!0),C(e?(null==(t=_.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){p&&!f&&v&&E(!1)}),[p,f,v]);var Z=(0,n.useCallback)((function(e){e.preventDefault(),k||N(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[k]);return 0===m.length?null:n.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":v})},n.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&p},t[y]=!o,t)),onClick:o?Z:void 0,href:o?"#!":void 0},l),b),n.createElement("ul",{className:"menu__list",ref:_,style:{height:k},onTransitionEnd:function(){v||N(!1)}},n.createElement(H,{items:m,tabIndex:v?"-1":"0",onItemClick:r,collapsible:o,activePath:i})))}function F(e){var t=e.item,a=e.onItemClick,r=e.activePath,o=(e.collapsible,(0,s.Z)(e,B)),i=t.href,l=t.label,u=P(t,r);return n.createElement("li",{className:"menu__list-item",key:l},n.createElement(f.Z,(0,c.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:i},(0,h.Z)(i)&&{isNavLink:!0,exact:!0,onClick:a},o),(0,h.Z)(i)?l:n.createElement("span",null,l,n.createElement(g.Z,null))))}function U(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",M),onClick:t},n.createElement(E,{className:A}))}function O(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,d.Z)(w,L)},"\xd7"):n.createElement(_.Z,{className:w,height:24,width:24}))}var K=function(e){var t,a,r=e.path,o=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,c=e.onCollapse,s=e.isHidden,f=function(){var e=(0,u.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,p.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),h=(0,u.LU)(),E=h.navbar.hideOnScroll,_=h.hideableSidebar,g=(0,u.nT)().isClosed,y=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,m.Z)(t);var r=(0,b.Z)();return(0,n.useEffect)((function(){r===b.D.desktop&&a(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),M=y.showResponsiveSidebar,A=y.closeResponsiveSidebar,w=y.toggleResponsiveSidebar;return n.createElement("div",{className:(0,d.Z)(C,(t={},t[N]=E,t[Z]=s,t))},E&&n.createElement(v.Z,{tabIndex:-1,className:S}),n.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",I,(a={"menu--show":M},a[T]=!g&&f,a)),"aria-label":(0,k.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(O,{responsiveSidebarOpened:M,onClick:w}),n.createElement("ul",{className:"menu__list"},n.createElement(H,{items:o,onItemClick:A,collapsible:l,activePath:r}))),_&&n.createElement(U,{onClick:c}))},z=a(7277),J=a(4608),Y=a(5977),q={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function G(e){var t,a,i,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,o.Z)(),h=f.siteConfig,v=f.isClient,_=b.pluginId,g=b.version,C=function(e){var t,a=e.versionMetadata,n=e.currentDocRoute,r=a.permalinkToSidebar,o=a.docsSidebars,i=r[n.path]||r[(t=n.path,t.endsWith("/")?t:t+"/")]||r[function(e){return e.endsWith("/")?e.slice(0,-1):e}(n.path)];return{sidebar:o[i],sidebarName:i}}({versionMetadata:b,currentDocRoute:m}),N=C.sidebarName,Z=C.sidebar,S=(0,n.useState)(!1),I=S[0],y=S[1],T=(0,n.useState)(!1),M=T[0],A=T[1],w=(0,n.useCallback)((function(){M&&A(!1),y(!I)}),[M]);return n.createElement(l.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:g,tag:(0,u.os)(_,g)}},n.createElement("div",{className:q.docPage},Z&&n.createElement("aside",{className:(0,d.Z)(q.docSidebarContainer,(t={},t[q.docSidebarContainerHidden]=I,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(q.docSidebarContainer)&&I&&A(!0)}},n.createElement(K,{key:N,sidebar:Z,path:m.path,sidebarCollapsible:null==(a=null==(i=h.themeConfig)?void 0:i.sidebarCollapsible)||a,onCollapse:w,isHidden:M}),M&&n.createElement("div",{className:q.collapsedDocSidebar,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:w,onClick:w},n.createElement(E,{className:q.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,d.Z)(q.docMainContainer,(c={},c[q.docMainContainerEnhanced]=I||!Z,c))},n.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",q.docItemWrapper,(s={},s[q.docItemWrapperEnhanced]=I,s))},n.createElement(r.Zo,{components:z.Z},p)))))}var Q=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,Y.LX)(r.pathname,e)}));return o?n.createElement(G,{currentDocRoute:o,versionMetadata:a},(0,i.Z)(t,{versionMetadata:a})):n.createElement(J.default,e)}},4608:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(341),o=a(4973);t.default=function(){return n.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},5536:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var n=a(2122),r=a(9756),o=a(7294),i=a(6010),l=a(6742),c=a(9306),s=a(4996),d="footerLogoLink_qW4Z",u=a(8465),m=["to","href","label","prependBaseUrlToHref"];function b(e){var t=e.to,a=e.href,i=e.label,c=e.prependBaseUrlToHref,d=(0,r.Z)(e,m),u=(0,s.Z)(t),b=(0,s.Z)(a,{forcePrependBaseUrl:!0});return o.createElement(l.Z,(0,n.Z)({className:"footer__link-item"},a?{href:c?b:a}:{to:u},d),i)}var p=function(e){var t=e.sources,a=e.alt;return o.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var f=function(){var e=(0,c.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,u=t.logo,m=void 0===u?{}:u,f={light:(0,s.Z)(m.src),dark:(0,s.Z)(m.srcDark||m.src)};return e?o.createElement("footer",{className:(0,i.Z)("footer",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},r&&r.length>0&&o.createElement("div",{className:"row footer__links"},r.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(b,e))}))):null)}))),(m||a)&&o.createElement("div",{className:"footer__bottom text--center"},m&&(m.src||m.srcDark)&&o.createElement("div",{className:"margin-bottom--sm"},m.href?o.createElement(l.Z,{href:m.href,className:d},o.createElement(p,{alt:m.alt,sources:f})):o.createElement(p,{alt:m.alt,sources:f}))))):null}}}]);