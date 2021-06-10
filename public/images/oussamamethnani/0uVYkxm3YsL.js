if (self.CavalryLogger) { CavalryLogger.start_js(["5KI1V"]); }

__d("BrowseEmptyResult",["csx","DOMQuery","UIPagelet","$"],(function(a,b,c,d,e,f,g){__p&&__p();a={init:function(a,c,d){__p&&__p();var e=[],f=!1;if(a===null)return;for(var g=0;g<a.length;g++){var h=b("$")(a[g]);if(a[g]==="initial_browse_result"){var i=b("DOMQuery").scry(h,"._58b7");i.length>0&&(f=!0)}if(h!==null&&h.textContent){i=b("DOMQuery").scry(h,"._jyu");h=i!=null;h||e.push(a[g])}}e.length===0&&!f&&(a&&a.length===0,b("UIPagelet").loadFromEndpoint("BrowsePageletNoContentError",c,d,{usePipe:!1}))}};e.exports=a}),null);
__d("BrowseMouseSpeedTracker",["Event","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();var g=50,h=null,i=null,j=[],k={x:0,y:0},l=0,m=[{x:0,y:0},{x:0,y:0}];function n(){m[l].x=k.x,m[l].y=k.y,l=(l+1)%2}function o(){var a=m[0].x-m[1].x,b=m[0].y-m[1].y;return Math.sqrt(a*a+b*b)*(1e3/g)}function p(){if(h)return;i=b("Event").listen(document.body,"mousemove",function(a){k.x=a.pageX||a.screenX,k.y=a.pageY||a.screenY});h=window.setInterval(function(){n(),r(o())},g)}function q(){h&&(window.clearInterval(h),i.remove(),h=null)}function r(a){j.forEach(function(b){a<b.velocity&&(b.callback(a),s(b))})}function s(a){b("removeFromArray")(j,a),j.length||q()}a={addTrigger:function(a,b){a={velocity:a,callback:b};p();j.push(a);return{remove:s.bind(null,a)}}};e.exports=a}),null);
__d("BrowseRunOnLeave",["Run"],(function(a,b,c,d,e,f){a={register:function(a){b("Run").onLeave(a),this.handlers=(this.handlers||[]).concat(a)},cleanup:function(){this.handlers.forEach(function(a){return a.call(null,{})}),this.handlers=[]}};e.exports=a}),null);
__d("BrowseMouse",["cx","BrowseMouseSpeedTracker","BrowseRunOnLeave","CSS","DataStore","DOM","Event","Parent","Toggler","removeFromArray"],(function(a,b,c,d,e,f,g){__p&&__p();var h=500,i="_3u0",j="_3u1",k=null,l=[];function m(a){return b("Parent").byClass(a,j)}function n(a){return"browse-"+(a?"over":"out")}function a(a){return b("CSS").addClass(a,j)}function c(a,c,d,e){var f=m(c);e||l.push({element:c,callback:d});if(f){e=n(a);c=b("DataStore").get(f,e,[]);b("DataStore").set(f,e,c.concat(d));return f}}function o(a,c){if(a){b("CSS").conditionClass(a,i,c);a=b("DataStore").get(a,n(c));a&&a.forEach(function(a){a()})}}function p(a){var c=a.element;["browse-over","browse-out"].forEach(function(d){var e=b("DataStore").get(c,d);e&&(b("removeFromArray")(e,a.callback),e.length||b("DataStore").remove(c,d))})}function d(){__p&&__p();var a=null;if(k)return;k=b("Event").listen(document.body,"mouseover",function(c){__p&&__p();var d=m(c.getTarget());if(!d||d==a)return;var e=null,f=null,g=!1;a=d;var i=b("BrowseMouseSpeedTracker").addTrigger(h,function(){o(d,!0),g=!0}),j=function(){i.remove(),l.remove(),e&&e.remove(),f&&f.unsubscribe()},k=function(){j(),g&&o(d,!1),a=null},l=b("Event").listen(d,"mouseleave",function(){var a=b("Toggler").getActive();a&&b("DOM").contains(d,a)?(f=b("Toggler").subscribe("hide",k),e=b("Event").listen(d,"mouseover",j)):k()})});b("BrowseRunOnLeave").register(function(){while(l.length)p(l.pop())})}f={init:d,makeTarget:a,onMouseOver:c.bind(null,!0),onMouseOut:c.bind(null,!1),removeListeners:p};e.exports=f}),null);
__d("BrowseScrollingPager",["Arbiter","CSS","DOM","OnVisible","Run","SubscriptionsHandler","UIPagelet"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=800,h=[],i,j=0;a=function(){__p&&__p();function a(a,c,d){__p&&__p();var e=this;this.$9=!1;this.$10=function(){var a=e.$1;if(a==null)return;else e.$6!=null?(b("CSS").show(a),e.$5.addSubscriptions(new(b("OnVisible"))(a,e.$11,!1,e.$3))):b("CSS").hide(a)};this.$11=function(){__p&&__p();var a;if(e.$9)return;a=(a=e.$1)==null?void 0:a.firstElementChild;a!=null&&b("CSS").show(a);e.$8=b("DOM").create("div",{id:e.$12()});b("DOM").insertBefore(e.$1,e.$8);if(e.$8==null)return;e.$7=b("UIPagelet").loadFromEndpoint("BrowseScrollingSetPagelet",e.$8.id,babelHelpers["extends"]({},e.$2,e.$6),{constHeight:!0,displayCallback:e.$13})};this.$13=function(a){try{a()}catch(a){e.$9=!0}finally{a=(a=e.$1)==null?void 0:a.firstElementChild;a!=null&&b("CSS").hide(a)}};this.$1=a;this.$2=c;this.$3=d!=null?d:g;this.$5=new(b("SubscriptionsHandler"))();i!=null&&(this.pageletComplete(i),i=null);b("Run").onCleanupOrLeave(a,function(){return e.destroy()})}var c=a.prototype;c.pageletComplete=function(a){this.$6=a,b("Arbiter").inform("BrowseScrollingPageletLoaded"),setTimeout(this.$10,1e3)};c.destroy=function(){this.$7!=null&&this.$7.cancel(),this.$1=null,this.$5.release()};c.$12=function(){return"fbBrowseScrollingPagerContainer"+j++};a.initNew=function(b){var c=b.loadingNode,d=b.globalData;b=b.prefetchPixels;c=new a(c,d,b);h.push(c)};a.init=function(b,c,d,e,f,g,h){a.initNew({loadingNode:b,globalData:c,prefetchPixels:d})};a.pageletComplete=function(a){var b=h[h.length-1];b?b.pageletComplete(a):i=a};return a}();b("Arbiter").subscribe("BrowseScrollingPager/destroyIfNotLast",function(){if(h.length>1){var a=h.pop();a.destroy()}});e.exports=a}),null);
__d("BrowseWindowTransitions",["Arbiter","BrowseClientEventLogger","Event","NavigationMessage","Run","SearchFunnelLogger","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(a,c,d,e,f,g,h){__p&&__p();var i=this;this.subscriptions=new(b("SubscriptionsHandler"))();this.currentSessionID=a;this.currentVertical=c;this.logData("window_load");b("Run").onLeave(function(){i.logData("window_transition_to_fb_page"),i.cleanup()});this.unLoadAttached||(this.unLoadAttached=!0,b("Run").onUnload(function(){i.logData("window_unloaded")}));this.subscriptions.addSubscriptions(b("Event").listen(window,"focus",function(){i.logData("window_focus")}),b("Event").listen(window,"blur",function(){i.logData("window_blur")}),b("Arbiter").subscribe("pre_page_transition",function(a,b){i.logData("window_pre_page_transition")}),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,function(a,b){i.logData("window_transition_to_LHC"),i.cleanup()}),b("Arbiter").subscribe("BlueBar/homeClick",function(){i.logData("window_transition_to_home_click"),i.cleanup()}))},logData:function(a){b("BrowseClientEventLogger").logData(a,this.currentSessionID,this.currentVertical)},cleanup:function(){this.subscriptions.release()}};e.exports=a}),null);
__d("DesktopVisibilityTracking",["Arbiter","ErrorUtils","LitestandMessages","Run","VisibilityTracking","VisibilityTrackingConfig"],(function(a,b,c,d,e,f){var g={init:function(){g.instance===void 0&&(g.instance=new(b("VisibilityTracking"))(b("VisibilityTrackingConfig")),g.instance.listeners.addSubscriptions(b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED],b("ErrorUtils").guard(function(){g.instance.refreshAndFireEvent()},"VisibilityTracking")))),b("Run").onLoad(function(){g.instance.refreshAndFireEvent()})}};e.exports=g}),null);
__d("ChatSidebarUtil",["Bootloader","ChatSidebarActions","ChatSidebarStore","ChatSidebarVisibility","DOM","SidebarType","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={ensureLoaded:function(){__p&&__p();if(!b("ChatSidebarStore").isEnabled())return;if(b("ChatSidebarStore").isLoaded())return;if(b("ge")("pagelet_sidebar"))return;b("Bootloader").loadModules(["UIPagelet"],function(a){var c=b("DOM").create("div",{id:"pagelet_sidebar"});b("DOM").appendContent(document.body,c);a.loadFromEndpoint("SidebarPagelet","pagelet_sidebar")},"ChatSidebarUtil");b("ChatSidebarActions").loaded()},hide:function(){if(!b("ChatSidebarStore").isEnabled())return;b("ChatSidebarActions").disable()},unhide:function(){if(b("ChatSidebarStore").isEnabled())return;b("ChatSidebarVisibility").shouldShowSidebarIgnoreEnabled(null,function(a,c){b("ChatSidebarActions").enable(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)})}};e.exports=a}),null);
__d("SearchSnippetsHighlighter",["csx","NodeHighlighter","concatMap","mayHaveConnectedCharacters"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=babelHelpers["extends"]({},b("NodeHighlighter"),{getHighlightCandidates:function(){return["._glo","._glm","._l1a"]},highlight:function(a,c){__p&&__p();var d=this;if(c.some(b("mayHaveConnectedCharacters")))return;var e=b("concatMap")(function(c){return b("concatMap")(d.getTextNodes.bind(d),d.searchNodes(a,c))},this.getHighlightCandidates());for(var e=e,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(f){if(g>=e.length)break;i=e[g++]}else{g=e.next();if(g.done)break;i=g.value}i=i;if(i.parentNode==null)return}b("NodeHighlighter").highlight.call(h,a,c)}});e.exports=h}),null);