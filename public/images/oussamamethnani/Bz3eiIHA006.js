if (self.CavalryLogger) { CavalryLogger.start_js(["nr+vp"]); }

__d("SubscriptionLevels",[],(function(a,b,c,d,e,f){a=Object.freeze({ALL:"162318810514679",DEFAULT:"271670892858696",TOP:"266156873403755"});e.exports=a}),null);
__d("EditSubscriptions",["csx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","MenuDeprecated","Parent","SubscriptionLevels","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){__p&&__p();var h=45,i=[b("SubscriptionLevels").ALL,b("SubscriptionLevels").DEFAULT,b("SubscriptionLevels").TOP],j={},k={},l={},m={},n={},o={},p={},q={},r={},s={},t={},u="/ajax/follow/follow_profile.php",v="/ajax/follow/unfollow_profile.php",w="/ajax/settings/notifications/notify_me.php",x={},y={},z={},A=null,B={};function C(a){return i.includes(a)}function D(a,c,d,e){__p&&__p();e=b("Parent").byClass(e,"uiMenuItem")||b("Parent").bySelector(e,"._54ni");var f=b("getOrCreateDOMID")(a);if(!e||!b("DOM").contains(a,e))return;else if(b("CSS").hasClass(e,"SubscribeMenuSubscribeCheckbox")){l[c]?I(f,c):H(f,c);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuUnsubscribe")){I(f,c);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuSettingsItem")){U(a,!0);return!1}else if(b("CSS").hasClass(e,"SubscriptionMenuGoBack")){U(a,!1);return!1}else if(b("CSS").hasClass(e,"SubscriptionMenuItem")){F(a,c,d,e);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuNotifyMeCheckbox")){E(a,c);return!1}}function E(a,b){m[b]?Y(a,b):X(a,b)}function F(a,c,d,e){if(b("CSS").hasClass(e,"SubscriptionMenuLevel")){if(b("MenuDeprecated").isItemChecked(e))return;S(a,c,L(e),!0,d)}else b("CSS").hasClass(e,"SubscriptionMenuCategory")?P(c,e,!b("MenuDeprecated").isItemChecked(e),!0,d):b("CSS").hasClass(e,"SubscriptionAppStory")&&R(c,e,!b("MenuDeprecated").isItemChecked(e),d)}function G(a){return B[a]?B[a]:0}function H(a,c){var d={profile_id:c};b("Arbiter").inform("FollowingUser",d);b("Arbiter").inform(b("FeedBlacklistButton").UNBLACKLIST,d);new(b("AsyncRequest"))().setURI(u).setMethod("POST").setData({profile_id:c,location:G(a)}).setErrorHandler(b("Arbiter").inform.bind(null,"FollowUserFail",d)).send()}function I(a,c){var d={profile_id:c};b("Arbiter").inform("UnfollowingUser",d);b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,d);new(b("AsyncRequest"))().setURI(v).setMethod("POST").setData({profile_id:c,location:G(a)}).setErrorHandler(b("Arbiter").inform.bind(null,"UnfollowUserFail",d)).send()}function J(a,c,d){c={profile_id:a,level:q[a],custom_categories:r[a],location:d};new(b("AsyncRequest"))().setURI("/ajax/follow/manage_subscriptions.php").setData(c).send()}function K(a,c){__p&&__p();var d=r[c]||[],e=b("MenuDeprecated").getItems(a);e.forEach(function(a){if(b("CSS").hasClass(a,"SubscriptionMenuCategory")){var e=L(a);d.includes(e)?N(a):O(a)}else if(b("CSS").hasClass(a,"SubscriptionAppStory")){e=L(a);z[c]&&z[c][e]?N(a):O(a)}});S(a,c,q[c],!1)}function L(a){a=b("DOM").scry(a,"input")[0];return a&&a.value}function M(a){return b("DOM").find(a,"a.itemAnchor")}function N(a){b("CSS").addClass(a,"checked"),M(a).setAttribute("aria-checked",!0)}function O(a){b("CSS").removeClass(a,"checked"),M(a).setAttribute("aria-checked",!1)}function P(a,b,c,d,e){__p&&__p();c?N(b):O(b);b=L(b);if(C(b))c&&Q(a,b);else if(c)r[a].includes(b)||r[a].push(b);else{c=r[a].indexOf(b);c!==-1&&r[a].splice(c,1)}d&&J(a,b,e)}function Q(a,c){q[a]=c,b("Arbiter").inform("SubscriptionLevelUpdated",{profile_id:a,level:c})}function R(a,c,d,e){e="/ajax/feed/filter_action/";var f=L(c),g={actor_id:a,app_id:f};d?(N(c),e+="resubscribe_user_app/",g.action="resubscribe_user_app",z[a]||(z[a]={}),z[a][f]=!0):(O(c),e+="unsubscribe_user_app_checkbox/",g.action="unsubscribe_user_app_checkbox",z[a]&&(z[a][f]=!1));new(b("AsyncRequest"))().setURI(e).setData(g).send()}function S(a,c,d,e,f){a=b("DOM").scry(a,".SubscriptionMenuLevel");var g=null;a.forEach(function(a){L(a)==d?g=a:b("MenuDeprecated").isItemChecked(a)&&P(c,a,!1,!1)});g&&P(c,g,!0,e,f)}function T(a,c,d){l[c]=d;b("CSS").conditionClass(a,"isUnsubscribed",!d);c=b("DOM").scry(a,"li.SubscribeMenuSubscribeCheckbox");if(c.length!==0){a=c[0];d?N(a):O(a)}}function U(a,c){b("CSS").conditionClass(a,"subscriptionMenuOpen",c)}function V(a,c,d){c=b("DOM").find(a,".FriendListSubscriptionsMenu");var e=b("DOM").find(c,".uiMenuInner");A!=null&&A.forEach(function(a){e.removeChild(a)});d.forEach(function(a){e.appendChild(a)});A=d}b("Arbiter").subscribe("UnfollowUser",function(a,b){s[b.profile_id]&&(Q(b.profile_id,s[b.profile_id]),r[b.profile_id]=t[b.profile_id].slice())});b("Arbiter").subscribe("UpdateSubscriptionLevel",function(a,c){a=c.profile_id+"";c=c.level+"";Q(a,c);var d;for(d in j)if(j[d]===a){var e=b("ge")(d);e&&S(e,a,c,!1)}});b("Arbiter").subscribe("listeditor/close_editor",function(){var a;for(a in j){var c=b("ge")(a);c&&U(c,!1)}});function W(a,c,d){__p&&__p();m[c]=d;c=y[c];if(c){d?c.select():c.deselect();return}c=b("DOM").scry(a,"li.SubscribeMenuNotifyMeCheckbox");if(c.length!==0){c=c[0];b("CSS").conditionShow(c,!0);a=b("DOM").scry(a,"li.SubscribeMenuNotifyMeCheckboxSeparator");a.length>0&&b("CSS").conditionShow(a[0],!0);d?N(c):O(c)}}function X(a,c){a={profile_id:c};b("Arbiter").inform("EnableNotifsForUser",a);new(b("AsyncRequest"))().setURI(w).setMethod("POST").setData({notifier_id:c,enable:!0}).setErrorHandler(b("Arbiter").inform.bind(null,"EnableNotifsForUserFail",a)).send()}function Y(a,c){a={profile_id:c};b("Arbiter").inform("DisableNotifsForUser",a);new(b("AsyncRequest"))().setURI(w).setMethod("POST").setData({notifier_id:c,enable:!1}).setErrorHandler(b("Arbiter").inform.bind(null,"DisableNotifsForUserFail",a)).send()}c={init:function(a,c,d){__p&&__p();var e=b("getOrCreateDOMID")(a);B[e]=d;j[e]||b("Event").listen(a,"click",function(b){return D(a,j[e],d,b.getTarget())});d===h&&x[c].length&&V(a,c,x[c]);q[c]&&K(a,c);j[e]=c;b("CSS").conditionClass(a,"NonFriendSubscriptionMenu",!k[c]);b("CSS").conditionClass(a,"cannotSubscribe",!n[c]);b("CSS").conditionClass(a,"noSubscriptionLevels",o[c]&&!p[c]);b("CSS").conditionClass(a,"noSubscribeCheckbox",!k[c]&&!o[c]);T(a,c,l[c]);W(a,c,m[c]);b("Arbiter").subscribe(["FollowUser","FollowingUser","UnfollowUserFail"],function(b,d){d.profile_id==c&&T(a,c,!0)}.bind(this));b("Arbiter").subscribe(["UnfollowUser","UnfollowingUser","FollowUserFail"],function(d,e){e.profile_id==c&&(b("Arbiter").inform("SubMenu/Reset"),T(a,c,!1))}.bind(this));b("Arbiter").subscribe(["EnableNotifsForUser","DisableNotifsForUserFail"],function(b,d){d.profile_id==c&&W(a,c,!0)}.bind(this));b("Arbiter").subscribe(["DisableNotifsForUser","EnableNotifsForUserFail"],function(b,d){d.profile_id==c&&W(a,c,!1)}.bind(this));b("Arbiter").subscribe("listeditor/friend_lists_changed",function(b,c){if(c.notify_state){b=c.added_uid?c.added_uid:c.removed_uid;W(a,b,c.notify_state.is_notified)}}.bind(this))},getSubscriptions:function(a){return{level:q[a],custom_categories:r[a]}},registerTimelineNotifySelector:function(a,c){var d=a.getInitialMenu(),e=a.getContentRoot();d.forEachItem(function(a){var d=a.getRoot();b("CSS").hasClass(d,"SubscribeMenuNotifyMeCheckbox")&&(y[c]=a,W(e,c,m[c]))});d.subscribe("itemclick",function(a,b){b.item===y[c]&&E(e,c);return!0})},toggleNotificationsOnJoin:function(a,b){m[a]!==b&&E(null,a)},setSubscriptions:function(a,b,c,d,e,f,g,h,i,j,q,u){Q(a,g+""),k[a]=b,l[a]=c,n[a]=d,o[a]=e,p[a]=f,s[a]=i+"",r[a]=h.map(String),t[a]=j.map(String),x[a]=u,m[a]=q}};e.exports=a.EditSubscriptions||c}),null);
__d("ConnectionsPYMLTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setLikeSource=function(a){this.$1.like_source=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={event:!0,like_source:!0,page_id:!0,time:!0,weight:!0};e.exports=a}),null);
__d("EgoActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMP:1,CLICK:2,CONVERSION:4,SUPPRESS:8,NEXT:16,ERROR:32,XOUT:24,NONE:0})}),null);
__d("EgoPageServiceConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FAN:"fan",UNFAN:"unfan",PAGE_VIEW:"page_view",FRIEND_VIEW:"friend_view",SEE_ALL:"see_all",ADD_INTEREST:"add_interest",CONTEXT_ITEM:"tap_context_item",BOOST_POST:"tap_boost_post",WATCH_AS_PAGE:"watch_as_page",UNWATCH_AS_PAGE:"unwatch_as_page",SHOP_VIEW:"shop_view",MESSAGE:"message",FOLLOW:"follow",UNFOLLOW:"unfollow",SUBSCRIBE:"subscribe"})}),null);
__d("XPubcontentInteractionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/suggestions/interaction_logging/",{})}),null);
__d("PageFanning",["ActorURI","Animation","AsyncRequest","ConnectionsPYMLTypedLogger","CSS","DOM","EgoActionType","EgoPageServiceConstants","Parent","URI","XPubcontentInteractionLoggingController","$","collectDataAttributes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={setFanStatus:function(a,c,d,e,f,i,j){__p&&__p();var k={ft:{}};a&&(k={ft:b("collectDataAttributes")(a,["ft"]).ft});var l=new(b("URI"))(window.location.href).getQueryData();d&&(l.ref==="pyml_feed"?new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("profile").setPageID(parseInt(c,10)).log():l.ref==="pyml_permalink"&&new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("post_permalink").setPageID(parseInt(c,10)).log());f=f||function(b){b=b.getPayload();if(!b||!a)return;b.reload?g.reloadOnFanStatusChanged():h(a,b)};l={fbpage_id:c,add:d,reload:e};j!=null&&Object.assign(l,j);Object.assign(l,k);c="/ajax/pages/fan_status.php";j!=null&&j.actor_id!=null&&(c=b("ActorURI").create(c,j.actor_id));e=new(b("AsyncRequest"))().setURI(c).setData(l).setNectarModuleDataSafe(a).setHandler(f);i&&e.setErrorHandler(i);e.send();if(j.fan_origin==="PSYM"&&d&&j.egodata!==null){k={q:j.egodata,action:b("EgoPageServiceConstants").FAN,action_type:b("EgoActionType").CONVERSION};new(b("AsyncRequest"))().setMethod("POST").setURI(b("XPubcontentInteractionLoggingController").getURIBuilder().getURI()).setData(k).send()}return!1},reloadOnFanStatusChanged:function(){var a=b("URI").getRequestURI();window.location.href=a},toggleLikeOnFanStatusChanged:function(a,c){var d=b("$")("liked_pages_like_action_"+a);a=b("$")("liked_pages_undo_action_"+a);b("CSS").conditionClass(d,"hidden_elem",c);b("CSS").conditionClass(a,"hidden_elem",!c)}};function h(a,c){var d=c.feedback;if(!d)return;b("Parent").byClass(a,"fbTimelineEscapeSectionItem")&&(a=b("Parent").byClass(a,"fan_status_inactive")||a);var e=b("DOM").create("span",{className:"fan_status_inactive"},d);a.parentNode.replaceChild(e,a);d=function(){c.can_repeat_action&&e.parentNode.replaceChild(a,e)};new(b("Animation"))(e).duration(3e3).checkpoint().to("backgroundColor","#FFFFFF").duration(1e3).ondone(d).go()}e.exports=g}),null);
__d("PagesLikeFollowNotifActions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INIT_DATA:"init_data",LIKE:"like",UNLIKE:"unlike",FOLLOW_CHANGED:"follow_changed",SNOOZE_CHANGED:"snooze_changed",NOTIF_CHANGE:"notif_change",NOTIF_ALL_ON:"notif_all_on",NOTIF_ALL_OFF:"notif_all_off",NEWS_FEED_CHANGE:"news_feed_change"})}),null);
__d("PagesLikeFollowNotifDispatcher",["Arbiter","ExplicitRegistrationReactDispatcher","PageLikeConstants","PagesLikeFollowNotifActions","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;c=new(b("SubscriptionsHandler"))();c.addSubscriptions(b("Arbiter").subscribe(b("PageLikeConstants").LIKED,function(a,b){return d.dispatchLike(b.profile_id)}),b("Arbiter").subscribe(b("PageLikeConstants").UNLIKED,function(a,b){return d.dispatchUnlike(b.profile_id)}));return d}var d=c.prototype;d.dispatchLike=function(a){this.dispatch({type:b("PagesLikeFollowNotifActions").LIKE,data:{pageID:a,likeStatus:!0}})};d.dispatchUnlike=function(a){this.dispatch({type:b("PagesLikeFollowNotifActions").UNLIKE,data:{pageID:a,likeStatus:!1}})};return c}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("PagesFollowStore",["FluxReduceStore","PagesLikeFollowNotifActions","PagesLikeFollowNotifDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return{}};d.reduce=function(a,c){var d=babelHelpers["extends"]({},a);switch(c.type){case b("PagesLikeFollowNotifActions").INIT_DATA:if(c.data.pageID in a)return a;d[c.data.pageID]=c.data.followStatus;return d;case b("PagesLikeFollowNotifActions").FOLLOW_CHANGED:d[c.data.pageID]=c.data.followStatus;return d}return a};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("PagesLikeFollowNotifDispatcher"))}),null);
__d("ProfileEscapeHatch",["Arbiter","CSS","ProfileTabUtils","Run"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=!1;function i(a){g.forEach(function(c){b("CSS").conditionShow(c.getRoot(),!b("ProfileTabUtils").isOverviewTab(a))})}a=function(){"use strict";__p&&__p();function a(a){this.$1=a;g.push(this);if(!h){var c=b("Arbiter").subscribe("TimelineController/sectionKeyChange",function(a,b){return i(b[0])});b("Run").onLeave(function(){g=[],c.unsubscribe()});h=!0}}var c=a.prototype;c.getRoot=function(){return this.$1};return a}();e.exports=a}),null);