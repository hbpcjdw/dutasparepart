(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{JRXK:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),c=n("HaE+"),u=n("1OyB"),o=n("vuIU"),i=n("Ji7U"),s=n("md7G"),l=n("foSv"),p=n("q1tI"),f=n.n(p),d=n("/y5a"),_=n("Tt/Y"),h=n("JNwe"),E=n("jgJj"),m=n("2bTU"),O=n("24c+"),R=n("+Xit"),v=n("ViP6"),S=n("yiWZ"),C=n("rh/e"),P=n("e54x"),y=f.a.createElement,T=function(){return y("div",{className:"ps-product--detail"},y("div",{className:"ps-product__header"},y(v.a,{product:P.b}),y(C.a,{product:P.b})),y(S.a,null))},b=n("yUax"),g=n("spCc"),I=n("/MKj"),A=n("689t"),M=n("ypqY"),w=f.a.createElement;function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var L=function(t){Object(i.a)(n,t);var e=j(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){if(this.props.query){this.props.dispatch(Object(A.b)(["customer_bought","shop-recommend-items","widget_same_brand"]))}this.props.dispatch(Object(M.j)("3"))}},{key:"render",value:function(){return w("div",{className:"layout--product"},w(_.a,null),w(b.a,null),w(g.a,null),w(O.a,{breacrumb:[{text:"Home",url:"/"},{text:"Consumer Electrics",url:"/shop"},{text:"Refrigerators",url:"/shop"},{text:"Marshall Kilburn Portable Wireless Speaker"}],layout:"fullwidth"}),w("div",{className:"ps-page--product"},w("div",{className:"container"},w("div",{className:"ps-page__container"},w("div",{className:"ps-page__left"},w(T,null)),w("div",{className:"ps-page__right"},w(R.a,{collectionSlug:"widget_same_brand"}))),w(E.a,{collectionSlug:"customer_bought"}),w(m.a,{collectionSlug:"shop-recommend-items"}))),w(h.a,null),w(d.a,null))}}],[{key:"getInitialProps",value:function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{query:e.query});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(p.Component);e.default=Object(I.b)()(L)},JsPy:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/extended",function(){return n("JRXK")}])},RwQk:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),c=n("BVei"),u=n("gm2J"),o=a.a.createElement;e.a=function(t){var e=t.url;return o("img",{src:!1===c.a?"".concat(u.c).concat(e):e,alt:"martfury-image"})}},ViP6:function(t,e,n){"use strict";var r=n("wx14"),a=n("1OyB"),c=n("vuIU"),u=n("JX7q"),o=n("Ji7U"),i=n("md7G"),s=n("foSv"),l=n("rePB"),p=n("q1tI"),f=n.n(p),d=n("OS56"),_=n.n(d),h=n("s5ri"),E=n("3o9y"),m=n("1VNF"),O=n("gm2J"),R=n("BVei"),v=n("RwQk"),S=(n("x3Bu"),f.a.createElement);function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var P=function(t){Object(o.a)(n,t);var e=C(n);function n(t){var r;return Object(a.a)(this,n),r=e.call(this,t),Object(l.a)(Object(u.a)(r),"handleOpenLightbox",(function(t,e){t.preventDefault(),r.setState({photoIndex:e,isOpen:!0})})),r.state={galleryCarousel:null,variantCarousel:null,photoIndex:0,isOpen:!1},r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({galleryCarousel:this.slider1,variantCarousel:this.slider2})}},{key:"render",value:function(){var t=this,e={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:S(h.a,null),prevArrow:S(E.a,null)},n=this.props.product,a=this.state,c=a.photoIndex,u=a.isOpen,o=[];return n.ImageList.map((function(t){!1===R.a?o.push("".concat(O.c).concat(t.ImageProductPath)):o.push(t.url)})),S("div",{className:"ps-product__thumbnail","data-vertical":"false"},S("figure",null,S("div",{className:"ps-wrapper"},S(_.a,Object(r.a)({},e,{ref:function(e){return t.slider1=e},asNavFor:this.state.variantCarousel,className:"ps-product__gallery ps-carousel inside"}),n.ImageList.map((function(e,n){return S("div",{className:"item",key:e.id},S("a",{href:"#",onClick:function(e){return t.handleOpenLightbox(e,n)}},S(v.a,{url:e.ImageProductPath})))}))))),S(_.a,{asNavFor:this.state.galleryCarousel,ref:function(e){return t.slider2=e},swipeToSlide:!0,arrows:!1,slidesToShow:6,vertical:!1,infinite:!1,focusOnSelect:!0,className:"ps-product__variants"},n.ImageList.map((function(t){return S("div",{className:"item",key:t.id},S(v.a,{url:t.ImageProductPath}))}))),u&&S(m.a,{mainSrc:o[c],nextSrc:o[(c+1)%o.length],prevSrc:o[(c+o.length-1)%o.length],onCloseRequest:function(){return t.setState({isOpen:!1})},onMovePrevRequest:function(){return t.setState({photoIndex:(c+o.length-1)%o.length})},onMoveNextRequest:function(){return t.setState({photoIndex:(c+1)%o.length})}}))}}]),n}(p.Component);e.a=P},gm2J:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return u}));var r=n("vDqi"),a=n.n(r),c="".concat("http://182.23.68.188:7542","/api/"),u="".concat("http://182.23.68.188:7542");e.b=a.a.create({baseUrl:c,headers:{Accept:"application/json"}})},q8Yi:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return o}));var r={GET_COMPARE_LIST:"GET_COMPARE_LIST",GET_COMPARE_LIST_SUCCESS:"GET_COMPARE_LIST_SUCCESS",GET_COMPARE_LIST_ERROR:"GET_COMPARE_LIST_ERROR",ADD_ITEM_COMPARE:"ADD_ITEM_COMPARE",REMOVE_ITEM_COMPARE:"REMOVE_ITEM_COMPARE",UPDATE_COMPARE_LIST:"UPDATE_COMPARE_LIST",UPDATE_COMPARE_LIST_SUCCESS:"UPDATE_COMPARE_LIST_SUCCESS",UPDATE_COMPARE_LIST_ERROR:"UPDATE_COMPARE_LIST_ERROR",CLEAR_COMPARE_LIST:"CLEAR_COMPARE_LIST"};function a(t){return{type:r.GET_COMPARE_LIST_SUCCESS,data:t}}function c(t){return{type:r.ADD_ITEM_COMPARE,product:t}}function u(t){return{type:r.REMOVE_ITEM_COMPARE,product:t}}function o(t){return{type:r.UPDATE_COMPARE_LIST_SUCCESS,payload:t}}}},[["JsPy",1,2,0,3,4,5,6,7,8,9,10,11,14,15,31]]]);