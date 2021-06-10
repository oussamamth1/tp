if (self.CavalryLogger) { CavalryLogger.start_js(["TBp3a"]); }

__d("AsyncLayout",["AjaxPipeRequest","Arbiter","AsyncRequest","AsyncResponse","CSS","DOM","FaceliftGating","HTML","NavigationMessage","PageTransitionsRegistrar","URI","$","emptyFunction","ge","goURI","requireWeak"],(function(a,b,c,d,e,f){__p&&__p();var g;b("requireWeak")("PageTransitions",function(a){g=a});a=function(){"use strict";__p&&__p();function a(a){this.canvasID=a,b("ge")("rightCol")&&(this.auxiliaryID="rightCol"),b("ge")("headerArea")&&(this.headerID="headerArea"),b("ge")("toolbarContainer")&&(this.toolbarID="toolbarContainer"),this.waitingForAux=!1,b("PageTransitionsRegistrar").registerHandler(this.catchPageTransition.bind(this)),this.subscription=b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this.onNavigate.bind(this)),b("Arbiter").inform("AsyncLayout/initialized",null,"state")}var c=a.prototype;c.catchPageTransition=function(a){this.subscription.unsubscribe();return!1};c.getCanvasID=function(a){return a.sidecol?"contentCol":"contentArea"};c.onNavigate=function(a,c){__p&&__p();a=c.useAjaxPipe;c=c.params;if(c.endpoint){this.request&&(this.request.setFinallyHandler(b("emptyFunction")),this.request.abort());if(a)c.xui_grid=b("FaceliftGating").hasXUIGrid,this.request=new(b("AjaxPipeRequest"))(this.getCanvasID(c),c.endpoint).setData(c).setFinallyHandler(this.finallyHandler.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFirstResponseCallback(this.firstResponseCallback.bind(this)).send();else{c.handled=!0;this.waitingForAux=c.sidecol;a=!!c.iframe;a=new(b("AsyncRequest"))().setOption("useIframeTransport",a).setURI(new(b("URI"))(c.endpoint)).setReadOnly(!0).setMethod("GET").setData(c).setHandler(this.onResponse.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFinallyHandler(this.finallyHandler.bind(this));this.request=a;a.send()}}};c.receivedAux=function(a){!this.waitingForAux,this.waitingForAux=!1,b("DOM").setContent(b("$")(this.auxiliaryID),b("HTML")(a))};c.onResponse=function(a){__p&&__p();var c=a.getPayload();if(c.redirect)b("goURI")(c.redirect);else{var d=c.html||c;b("DOM").setContent(b("$")(this.canvasID),b("HTML")(d));c.side_html&&this.auxiliaryID&&this.receivedAux(c.side_html);if(this.headerID&&!c.keep_header){d=b("$")(this.headerID);b("DOM").setContent(d,b("HTML")(c.header_html||""));b("CSS").conditionShow(d,c.header_html)}c.toolbar_html&&this.toolbarID&&b("DOM").setContent(b("$")(this.toolbarID),b("HTML")(c.toolbar_html));c.js&&new Function(c.js)();b("CSS").conditionClass(b("$")("contentCol"),"hasRightCol",this.auxiliaryID&&!c.noRightSide);d=b("ge")("rightCol");d&&c.noRightSide&&b("DOM").empty(d)}c=a.getRequest().getData();b("Arbiter").inform(b("NavigationMessage").NAVIGATION_COMPLETED,c.key)};c.errorHandler=function(a){b("AsyncResponse").verboseErrorHandler(a),b("Arbiter").inform(b("NavigationMessage").NAVIGATION_FAILED),this.request=null};c.firstResponseCallback=function(){window.scrollTo(0,0),b("Arbiter").inform(b("NavigationMessage").NAVIGATION_FIRST_RESPONSE)};c.finallyHandler=function(a){this.request=null,g&&g.transitionComplete(!0),b("Arbiter").inform(b("NavigationMessage").NAVIGATION_COMPLETED)};return a}();e.exports=a}),null);
__d("AbstractDockingElement",["Arbiter","Event","Run","SubscriptionsHandler","onEnclosingPageletDestroy","queryThenMutateDOM","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=null;function i(){b("queryThenMutateDOM")(function(){return g.forEach(function(a){return a.queryDOM()})},function(){return g.forEach(function(a){return a.updateWithCache()})},"AbstractDockingElement")}function j(){h||(h=new(b("SubscriptionsHandler"))(),h.addSubscriptions(b("Event").listen(window,"scroll",i),b("Event").listen(window,"resize",i),b("Run").onLeave(function(){while(g.length)k(g[0])})),h=h);return h}function k(a){__p&&__p();try{a.onPageletDestroyed&&b("Arbiter").unsubscribe(a.onPageletDestroyed)}catch(a){}finally{a.onPageletDestroyed=null}if(!h||g.indexOf(a)===-1)return;b("removeFromArray")(g,a);if(g.length)return;h.release();h=null}e.exports={register:function(c,d,e){var a=j(),f={onPageletDestroyed:a.addSubscriptions(b("onEnclosingPageletDestroy")(c,function(){k(f)})),queryDOM:d,updateWithCache:e};g.push(f)}}}),null);
__d("DirectionalDockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","Scroll","Style","UITinyViewportAction","UserAgent","ViewportBounds","getElementPosition","getStyleProperty","queryThenMutateDOM"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!0,i=!1,j=b("UserAgent").isBrowser("Safari < 10")||b("UserAgent").isBrowser("Mobile Safari < 10");a=function(){"use strict";__p&&__p();function a(a){this.$5=0,this.$2=null,this.$7=!1,this.$12=a,this.$8=0,this.$11=null,this.$13=0,this.register(),this.$14=b("ViewportBounds").getTop(),b("Style").set(this.$12,"width",this.$12.getBoundingClientRect().width+"px"),this.$9=b("DOM").create("div"),b("CSS").addClass(this.$9,"_lwx"),b("Style").set(this.$9,"position","relative"),b("DOM").replace(this.$12,this.$9),b("DOM").appendContent(this.$9,this.$12),this.update()}var c=a.prototype;c.register=function(){b("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};c.subscribe=function(a,c,d){this.$1||(this.$1=new(b("Arbiter"))());return this.$1.subscribe(a,c,d)};c.destroy=function(){b("DOM").replace(this.$9,this.$12)};c.__queryDOM=function(){__p&&__p();var a=-b("getElementPosition")(this.$9).y;a!==this.$13&&(this.$15=a>this.$13?i:h,this.$13=a);this.$6=this.$12.getBoundingClientRect();a=document;var c=a.body;a=a.documentElement;if(c&&a){var d=a.clientHeight;a=a.scrollHeight;this.$7=b("Scroll").getTop(c)+d>Math.max(d,a)}if(j){this.$11=b("getElementPosition")(this.$9);c=parseInt(b("getStyleProperty")(this.$12,"left"),10);this.$11&&!isNaN(c)&&c!==this.$11.x&&(this.$11=babelHelpers["extends"]({},this.$11,{x:c}))}this.$12.style.position==="fixed"&&(this.$5=b("getElementPosition")(this.$12).y+this.$13)};c.$16=function(a,c,d){if(c===this.$4&&a===this.$3&&d===this.$2)return;var e=a!==this.$3,f={};c!==this.$4&&(f.top=c+"px",this.$4=c);a!==this.$3&&(f.position=a,this.$3=a);j&&(d!==this.$2&&(f.left=typeof d==="number"?d+"px":"auto",this.$2=d));b("Style").apply(this.$12,f);e&&this.$1&&this.$1.inform("changedposition")};c.$17=function(){this.$16("fixed",this.$14,this.$11?this.$11.x:null)};c.$18=function(){this.$16("fixed",this.$8,this.$11?this.$11.x:null)};c.$19=function(){this.$16("absolute",this.$5,null)};c.unfixAndScrollBy=function(a){this.$5=Math.max(0,this.$5-a),this.$19()};c.translateY=function(a){var c=b("getElementPosition")(this.$12).y,d=b("getElementPosition")(this.$9).y;c=c-d;this.$5=a+c;this.$19()};c.__updateWithCache=function(){__p&&__p();var a=Math.round(this.$6.height);a!==this.$10&&(b("Style").set(this.$9,"height",a+"px"),this.$10=a,this.$1&&this.$1.inform("changedheight"));if(this.$7)return;if(this.$13+this.$14<0||b("UITinyViewportAction").isTiny()){this.$5=0;this.$19();b("Arbiter").inform("reflow");return}this.$15===i&&this.$13+this.$8>=this.$5?this.$18():this.$15===h&&this.$13+this.$14<=this.$5?this.$17():this.$19();b("Arbiter").inform("reflow")};c.update=function(){var a=this;b("queryThenMutateDOM")(function(){a.__queryDOM()},function(){a.__updateWithCache()})};c.setOffset=function(a){return this.setOffsetAndTop(a,this.$14)};c.setOffsetAndTop=function(a,c){var d=this;b("queryThenMutateDOM")(function(){d.__queryDOM(),d.$8=Math.round(a),d.$14=c},function(){d.__updateWithCache()});return this};c.setTop=function(a){return this.setOffsetAndTop(this.$8,a)};c.getPlaceholder=function(){return this.$9};c.getRoot=function(){return this.$12};return a}();e.exports=a}),null);
__d("DockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","DOMDimensions","Style","UIGridColumnsConfig","UITinyViewportAction","UserAgent","getElementPosition"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("UserAgent").isBrowser("Safari")||b("UserAgent").isBrowser("Mobile Safari < 11");a=function(){"use strict";__p&&__p();function a(a){this.$12=a,this.$9=b("DOM").create("div"),b("CSS").addClass(this.$9,"_1pfm"),b("Style").set(this.$9,"position","relative"),b("DOM").replace(this.$12,this.$9),b("DOM").appendContent(this.$9,this.$12),this.$8=0,this.register(),this.update()}var c=a.prototype;c.register=function(){b("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};c.subscribe=function(a,c,d){this.$1||(this.$1=new(b("Arbiter"))());return this.$1.subscribe(a,c,d)};c.__queryDOM=function(){this.$11=b("getElementPosition")(this.getPlaceholder()),this.$5=b("DOMDimensions").getElementDimensions(this.$12)};c.__updateWithCache=function(){__p&&__p();var a=this.$8,c=this.getPlaceholder(),d=!b("UIGridColumnsConfig").responsive_rhc_when_narrow&&b("UITinyViewportAction").isTiny();if(!d&&this.$11.y<=a){!this.$7&&this.$12.parentNode&&(b("CSS").addClass(this.$12,"fixed_elem"),this.$7=!0);var e;this.$4!==a&&(e={},e.top=a+"px",this.$4=a);d=this.$5.width;d!==this.$3&&(e=e||{},e.width=d+"px",this.$3=d);if(h){a=this.$11.x;a!==this.$2&&(e=e||{},e.left=a+"px",this.$2=a)}e&&b("Style").apply(this.$12,e);d=this.$5.height;b("Style").set(c,"height",d+"px");(d+1<this.$10||d-1>this.$10)&&(this.$10=d,this.$1&&this.$1.inform("changedheight"))}else this.$7&&(b("Style").set(c,"height",""),b("Style").apply(this.$12,{left:"",top:"",width:""}),b("CSS").removeClass(this.$12,"fixed_elem"),this.$7=!1,this.$2=null,this.$3=null,this.$4=null)};c.update=function(){this.__queryDOM(),this.__updateWithCache()};c.getPlaceholder=function(){return this.$9};c.getRoot=function(){return this.$12};c.setOffset=function(a){this.$8=a;this.update();return this};return a}();e.exports=a}),null);
__d("StickyRHC",["csx","Arbiter","DirectionalDockingElement","DockingElement","DOMDimensions","DOMQuery","Event","Run","SubscriptionsHandler","ViewportBounds","$","ge","getElementPosition","getViewportDimensions","removeFromArray","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=35,i=[],j;function k(a,c){__p&&__p();if(!c||!c.dom_id){i.forEach(l);return}a=b("$")(c.dom_id);for(var c=0;c<i.length;c++)if(b("DOMQuery").contains(i[c].getRoot(),a)){l(i[c]);return}}function l(a){var c=a.getRoot(),d=a.updateOffset.bind(a);a=b("DOMQuery").scry(c,"img.img");a.forEach(function(a){if(a.complete||a.getAttribute("height")||a.naturalHeight===void 0&&a.naturalHeight!==0)return;var c=function(){d(),e.remove(),f.remove(),g.remove()},e=b("Event").listen(a,"load",c),f=b("Event").listen(a,"error",c),g=b("Event").listen(a,"abort",c)});d()}function m(){i.forEach(function(a){a.updateOffset()})}function n(){m(),m()}function o(a){var c=b("DOMQuery").scry(a,"._4-u2"),d=b("DOMQuery").scry(a,"._4-u3"),e=b("DOMQuery").scry(a,".uiHeader");a=b("DOMQuery").scry(a,".ego_unit");return[].concat(c,d,e,a).filter(function(a){return s(a)!==0})}function p(a){return b("getElementPosition")(a).y}function q(a,b){return a-b}function r(){return s(b("ge")("pageFooter"))}function s(a){return a?b("DOMDimensions").getElementDimensions(a).height:0}var t=a(m);function a(a){return function(c){return b("Arbiter").subscribe(c,a)}}c=function(){"use strict";__p&&__p();function a(a,c,d,e){__p&&__p();var f=this;d===void 0&&(d=!0);this.$1=a;this.$2=c?new(b("DirectionalDockingElement"))(a):new(b("DockingElement"))(a);this.$3=d;this.$2.subscribe("changedheight",this.updateOffset.bind(this));this.updateOffset();l(this);i.length||(j=new(b("SubscriptionsHandler"))(),j.addSubscriptions(t("header_loaded"),t("responsive_rhc_loaded"),t("ad_home_pagelet_loaded"),b("Arbiter").subscribe("netego_loaded",k),b("Arbiter").subscribe("video_fullscreen_change",n),b("Event").listen(window,"resize",b("throttle")(m))));b("Run").onLeave(function(){return f.destroy()});i.push(this)}a.getInstances=function(){return i};var c=a.prototype;c.getRoot=function(){return this.$1};c.subscribe=function(a,b){return this.$2.subscribe(a,b)};c.destroy=function(){this.$2=null,b("removeFromArray")(i,this),!i.length&&j&&(j.release(),j=null)};c.unfixAndScrollBy=function(a){this.$2&&this.$2.unfixAndScrollBy(a)};c.updateOffset=function(){this.$2&&this.$2.setOffset(this.calculateRHCOffset())};c.calculateRHCOffset=function(){__p&&__p();var a=this.getRoot(),b=s(a),c=u(),d=v();if(b<d)return c;if(this.$3){var e=o(a).map(p).sort(q);a=b+p(a);for(var e=e,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;h=a-h;if(h<d)return c-(b-h)}}return c-(b-d)};return a}();function u(){return b("ViewportBounds").getTop()}function v(){var a=u(),c=b("getViewportDimensions")().height,d=r();return c-a-h-d}e.exports=c}),null);
__d("XUISubNavigationLoader",["csx","cx","AjaxPipeRequest","CSS","DOM","FIGEntityPageLayout","PageHooks","PageTransitions","PageTransitionsRegistrar","Parent","Run","createCancelableFunction"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="._3o_h",j="content_container",k="_4t7n",l="._4t7n",m="_2fvv",n="_2yap",o="._2yap",p="._6ng8",q="_6ng8",r=null,s=[],t=[],u=null;function v(a){for(var c=0;c<s.length;c++){var d=s[c];if(d(a))return!0}b("Run").onLeave(function(){b("PageTransitionsRegistrar").removeHandler(v,6),t.forEach(function(a){return a()}),t=[],s=[]});return!1}var w={setLoading:function(a,c){b("CSS").conditionClass(a,k,c)},setSelected:function(a,c){__p&&__p();c===void 0&&(c=!1);var d=b("Parent").byClass(a,m);b("DOM").scry(d,i).forEach(function(a){b("DOM").remove(a)});b("DOM").scry(d,o).forEach(function(a){b("CSS").removeClass(a,n)});c&&b("DOM").scry(d,p).forEach(function(a){b("CSS").removeClass(a,q)});b("CSS").addClass(a,n);c&&b("CSS").addClass(a,q)},cancelRequest:function(a){r&&(r.abort(),r=null,b("DOM").scry(b("Parent").byClass(a,m),l).forEach(function(a){b("CSS").removeClass(a,k)}))},sendRequest:function(a,c,d,e){e===void 0&&(e=!1),w.cancelRequest(d),w.setSelected(d,e),w.setLoading(d,!0),b("PageHooks").runHooks("onleavehooks"),r=new(b("AjaxPipeRequest"))(j,c).setData(babelHelpers["extends"]({},a.getQueryData(),{path:a.getPath()})).setFirstResponseHandler(function(){w.setLoading(d,!1)}).setFinallyHandler(function(){r=null,b("FIGEntityPageLayout").update(),b("PageTransitions").transitionComplete(!0)}).send()},registerHandler:function(a){s.length||b("PageTransitionsRegistrar").registerHandler(v,6),u&&u.remove(),s.push(a)},onLeave:function(a){!s.length&&!u&&(u=b("Run").onLeave(function(){t.forEach(function(a){return a()}),t=[]}));a=b("createCancelableFunction")(a);t.push(a);return{remove:function(){a.cancel()}}}};e.exports=w}),null);
__d("EntityPageDirectionalDockingElement",["DirectionalDockingElement","EntityPageDockingElementController"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.register=function(){b("EntityPageDockingElementController").register(this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};return c}(b("DirectionalDockingElement"));e.exports=a}),null);
__d("EntityPageDockingElementController",["Event","SubscriptionsHandler","XUISubNavigationLoader","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=null,i=b("throttle")(function(){b("queryThenMutateDOM")(function(){return g.forEach(function(a){return a.queryDOM()})},function(){return g.forEach(function(a){return a.updateWithCache()})},"EntityPageDockingElementController")});a={register:function(a,c){h||(h=new(b("SubscriptionsHandler"))(),h.addSubscriptions(b("Event").listen(window,"scroll",i),b("Event").listen(window,"resize",i),b("XUISubNavigationLoader").onLeave(function(){g=[],h&&(h.release(),h=null)})));a={queryDOM:a,updateWithCache:c};g.push(a)}};e.exports=a}),null);
__d("getEntityPageDockingElementOffset",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a,b,c){__p&&__p();var d=c.getRootBoundingClientRect(),e=d.height,f=d.top;d=c.getPlaceholderBoundingClientRect();var g=d.top;d=a-e;c=c.getSections();if(c){c=Array.from(c).map(function(a){return g+a.getBoundingClientRect().top-f});c.sort(function(a,b){return a-b});for(var h=0,i=c.length;h<i;h++){var j=c[h]-g;if(e-j<a-b){d=b-j;break}}}return d};e.exports=a}),null);
__d("EntityPageRegion",["DirectionalDockingElement","getElementRect","getEntityPageDockingElementOffset","memoize","uniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,c,d){__p&&__p();var e=this;this.$9=function(){return b("getElementRect")(e.$1.getPlaceholder())};this.$10=function(){return b("getElementRect")(e.$1.getRoot())};this.$1=a;this.$2=b("uniqueID")();this.$3=0;this.$4=!1;this.$5=d;this.$6=c;this.$7=0;this.$8=!1;this.getPlaceholderBoundingClientRect=b("memoize")(this.$9);this.getRootBoundingClientRect=b("memoize")(this.$10)}var c=a.prototype;c.calculateOffset=function(a,c){if(this.$5)return this.$5(a,c,this);if(this.getRootBoundingClientRect().height+c<a)return c;else return b("getEntityPageDockingElementOffset")(a,c,this)};c.getID=function(){return this.$2};c.getOffset=function(){return this.$3};c.getTop=function(){return this.$7};c.getSections=function(){var a=this.$6;return!a?null:this.$1.getPlaceholder().querySelectorAll(a)};c.setOffset=function(a){if(a===this.$3)return;this.$3=a;this.$4=!0};c.setTop=function(a){if(a===this.$7)return;this.$7=a;this.$8=!0};c.update=function(){var a=this.$4,c=this.$8,d=this.$1,e=this.$3,f=this.$7;d instanceof b("DirectionalDockingElement")&&c?a?d.setOffsetAndTop(e,f):d.setTop(f):a&&d.setOffset(e);this.$4=!1;this.$8=!1;this.getPlaceholderBoundingClientRect=b("memoize")(this.$9);this.getRootBoundingClientRect=b("memoize")(this.$10)};return a}();e.exports=a}),null);
__d("SimpleObjectsPool",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=[]}var b=a.prototype;b.get=function(){if(this.$2.length)return this.$2.pop();else{var a=this.$1;return new a()}};b.put=function(a){a instanceof this.$1||g(0,4227),this.$2.push(a)};return a}();e.exports=a}),null);
__d("PersistentAnimationFrame",["SimpleObjectsPool","Visibility","cancelAnimationFrame","requestAnimationFrame"],(function(a,b,c,d,e,f){__p&&__p();var g=16,h,i={},j=!0;function k(){h||(h=new(b("SimpleObjectsPool"))(l));return h}var l=function(){"use strict";__p&&__p();function a(){var a=this;this.$1=function(){a.callback(),a.$2(),k().put(a)}}a.request=function(a){return!a?0:k().get().request(a)};a.cancel=function(a){if(a===0)return;a=i[String(a)];a&&a.cancel()};var c=a.prototype;c.request=function(a){j&&m();this.callback=a;this.hidden=b("Visibility").isHidden();this.hidden?this.intID=setTimeout(this.$1,g):this.intID=b("requestAnimationFrame")(this.$1);this.strID=String(this.intID);i[this.strID]=this;return this.intID};c.cancel=function(){this.strID&&(this.hidden?clearTimeout(this.intID):b("cancelAnimationFrame")(this.intID),this.$2(),k().put(this))};c.$2=function(){delete i[this.strID],delete this.intID,delete this.strID,delete this.callback,delete this.hidden};return a}();function m(){j=!1,b("Visibility").addListener(b("Visibility").HIDDEN,n),b("Visibility").addListener(b("Visibility").VISIBLE,n)}function n(){Object.keys(i).forEach(function(a){a=i[a];var b=a.callback;a.cancel();b()})}e.exports=l}),null);
__d("requestPersistentAnimationFrame",["PersistentAnimationFrame"],(function(a,b,c,d,e,f){"use strict";e.exports=b("PersistentAnimationFrame").request}),null);
__d("ResizeEventHandler",["requestPersistentAnimationFrame"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){var c=this;this.$1=!1;this.handleEvent=function(){c.$1===!1&&(c.$1=!0,b("requestPersistentAnimationFrame")(c.$3))};this.$3=function(){c.$1=!1,c.$2()};this.$2=a};e.exports=a}),null);
__d("FIGEntityPageLayout",["Arbiter","DirectionalDockingElement","EntityPageConfig","EntityPageDirectionalDockingElement","EntityPageRegion","Event","MutationObserver","ResizeEventHandler","Run","SubscriptionsHandler","ViewportBounds","XUISubNavigationLoader","getViewportDimensions","queryThenMutateDOM","removeFromArray","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=null,i=null,j=null,k=null,l={attributes:!1,characterData:!0,childList:!0,subtree:!0};function m(){__p&&__p();b("queryThenMutateDOM")(function(){__p&&__p();var a=b("getViewportDimensions")().height,c=b("ViewportBounds").getTop();g.sort(function(a,b){return a.getPlaceholderBoundingClientRect().top<b.getPlaceholderBoundingClientRect().top?-1:1});g.forEach(function(b){__p&&__p();var d=b.getRootBoundingClientRect(),e=d.width;d=b.getPlaceholderBoundingClientRect();var f=d.left,h=d.top,i=c;g.forEach(function(a){var c=a.getRootBoundingClientRect(),d=c.height;c=c.width;var g=a.getPlaceholderBoundingClientRect(),j=g.left;g=g.top;b!==a&&g+d<=h&&Math.min(f+e,j+c)>=Math.max(f,j)&&(i+=d+a.getOffset()-a.getTop())});d=b.calculateOffset(a,i);b.setOffset(d);b.setTop(i)})},function(){g.forEach(function(a,b){a.update()})},"EntityPageLayout")}function n(){o();j||(j=new(b("SubscriptionsHandler"))(),j.addSubscriptions(b("Run").onLeave(p)));return j}function o(){i||(i=new(b("SubscriptionsHandler"))(),i.addSubscriptions(b("ViewportBounds").subscribe("change",m),b("Arbiter").subscribe("footerLoaded",m),b("Event").listen(window,"resize",b("throttle")(m)),b("XUISubNavigationLoader").onLeave(function(){i&&(i.release(),i=null),k&&(k.disconnect(),k=null),h&&(h=null)})));return i}function p(){j&&(j.release(),j=null)}function q(a,c,d,e,f){var i=new(b("EntityPageRegion"))(d,c?c.join(","):null,f);g.push(i);m();e.addSubscriptions(d.subscribe("changedheight",m),b("Event").listen(a,"resize",m));b("EntityPageConfig").hasMutationObserver&&(k||(h=new(b("ResizeEventHandler"))(m),k=new(b("MutationObserver"))(h.handleEvent)),k.observe(a,l));return function(){b("removeFromArray")(g,i),g.length===0&&p()}}a={register:function(a,c,d,e){var f=d?new d(a):new(b("DirectionalDockingElement"))(a),g=q(a,c,f,n(),e);return{remove:function(){g(),f.destroy()}}},registerAcrossTransitions:function(a,c,d,e){var f=d?new d(a):new(b("EntityPageDirectionalDockingElement"))(a),g=q(a,c,f,o(),e);return{remove:function(){g(),f.destroy()}}},update:m};e.exports=a}),null);
__d("XUISubNavigation",["cx","CSS","Event","Parent","SubscriptionsHandler","URI","XUISubNavigationLoader"],(function(a,b,c,d,e,f,g){__p&&__p();var h="_8ue",i="_2yaa",j=!1;a=function(){"use strict";__p&&__p();function a(a,c,d){__p&&__p();var e=this;d===void 0&&(d=!1);this.$1=a;this.$3=d;b("XUISubNavigationLoader").registerHandler(function(a){return e.$4(a)});this.$2=new(b("SubscriptionsHandler"))();this.$2&&this.$2.addSubscriptions(b("Event").listen(this.$1,"click",function(a){a=b("Parent").byClass(a.target,i);a instanceof HTMLElement&&a.getAttribute("data-endpoint")&&b("XUISubNavigationLoader").setSelected(a,e.$3)}),b("Event").listen(this.$1,"focusin",this.$5.bind(this)),b("Event").listen(this.$1,"focusout",this.$6.bind(this)),b("XUISubNavigationLoader").onLeave(this.destroy.bind(this)));c&&(this.$2&&this.$2.addSubscriptions(b("Event").listen(c,"click",function(a){a.preventDefault(),b("CSS").addClass(e.$1,"_5rll"),b("Event").fire(e.$1,"resize")})))}var c=a.prototype;c.destroy=function(){this.$2&&this.$2.release(),this.$2=null};c.$5=function(a){a=b("Parent").byClass(a.target,i);a&&b("CSS").addClass(a,h)};c.$6=function(a){var c=b("Parent").byClass(a.target,i);c&&!c.contains(a.relatedTarget)&&b("CSS").removeClass(c,h)};c.$4=function(a){__p&&__p();if(j){j=!1;return!1}var c=a.getPath(),d=Array.prototype.find.call(this.$1.getElementsByTagName("a"),function(a){return new(b("URI"))(a.href).getPath()===c&&a.hasAttribute("data-endpoint")});if(d){var e=b("Parent").byClass(d,i);if(e instanceof HTMLElement){b("XUISubNavigationLoader").sendRequest(a,new(b("URI"))(d.getAttribute("data-endpoint")),e,this.$3);return!0}return!1}return!1};a.skipNextTransition=function(){j=!0};return a}();e.exports=a}),null);