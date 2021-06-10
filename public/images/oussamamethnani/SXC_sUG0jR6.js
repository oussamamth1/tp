if (self.CavalryLogger) { CavalryLogger.start_js(["7rtru"]); }

__d("FBRTCParticipantCallState",[],(function(a,b,c,d,e,f){e.exports={UNKNOWN:0,DISCONNECTED:1,NO_ANSWER:2,REJECTED:3,UNREACHABLE:4,CONNECTION_DROPPED:5,CONTACTING:6,RINGING:7,CONNECTING:8,CONNECTED:9,PARTICIPANT_LIMIT_REACHED:10,IN_ANOTHER_CALL:11,RING_TYPE_UNSUPPORTED:12}}),null);
__d("RTWebStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={busy:g._("Occup\u00e9(e)"),callAgain:g._("Rappeler"),callEnded:g._("Appel termin\u00e9"),callFailed:g._("\u00c9chec de l\u2019appel"),callInterrupted:g._("Appel interrompu"),cannotConnect:g._("Impossible de connecter l\u2019appel"),chatLinksLeftVideoChat:g._("Vous avez quitt\u00e9 la discussion vid\u00e9o de groupe"),clientEncryptionError:g._("Erreur de chiffrement client"),close:g._("Fermer"),connected:g._("Connect\u00e9"),connecting:g._("Connexion..."),connectionDropped:g._("Connexion interrompue"),connectionLost:g._("Connexion perdue"),contacting:g._("Mise en relation..."),copiedVideoChatLink:g._("Copi\u00e9"),copyVideoChatLink:g._("Copier le lien vers la discussion vid\u00e9o"),disconnected:g._("D\u00e9connect\u00e9"),dismiss:g._("Fermer"),hangingUp:g._("D\u00e9marrage..."),inactive:g._("Appel inactif"),inAnotherCall:g._("D\u00e9j\u00e0 en ligne"),incomingVideoChat:g._("Discussion vid\u00e9o entrante"),invalidStreamConfiguration:g._("Trop de clients connect\u00e9s au salon"),noAnswer:g._("Pas de r\u00e9ponse"),notNow:g._("Plus tard"),participantLimitReached:g._("Limite des participants atteinte"),pleaseWait:g._("Veuillez patienter..."),profilePictureAlt:g._("Photo de profil"),reconnecting:g._("Reconnexion..."),redial:g._("Recomposer le num\u00e9ro"),ringing:g._("\u00c7a sonne..."),switchToWiFi:g._("Passez en Wi-Fi pour appeler"),unreachable:g._("Injoignable"),userVideoOff:function(a){return g._("La cam\u00e9ra de {name} est d\u00e9sactiv\u00e9e",[g._param("name",a)])},viewerVideoOff:g._("Ta cam\u00e9ra est d\u00e9sactiv\u00e9e"),waitingForOthers:g._("En attente d\u2019autres personnes\u2026")};e.exports=a}),null);
__d("RTCUserRecord",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record({FBID:"UNDEFINED",isGuestUser:!1,isMessengerUser:!1,isPartiesUser:!1,lastConnectedAt:0,participantState:null,profilePictureUrl:null,profileUrl:null,roomLocation:null,screenStreams:b("immutable").Set(),streams:b("immutable").Set(),userName:"",userShortName:"",vanity:""});c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e.exports=c}),null);
__d("RTCUser",["FBRTCConstants","FBRTCParticipantCallState","RTCUserRecord","immutable","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FBRTCConstants").MediaContentTypes;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.clone=function(){return new c(this.toObject())};d.setParticipantState=function(a){return(!this.participantState||this.participantState.state!==b("FBRTCParticipantCallState").CONNECTED)&&a.state===b("FBRTCParticipantCallState").CONNECTED?this.set("participantState",a).set("lastConnectedAt",Date.now()):!this.participantState||this.participantState.state!==a.state?this.set("participantState",a):this};d.getParticipantState=function(){return this.participantState&&this.participantState.state};d.hasAudio=function(){return this.getAllStreamAudioTracks().some(function(a){return a.length>0})};d.hasVideo=function(){return this.streams.some(function(a){return a.getVideoTracks().length>0})};d.hasLiveVideoTracks=function(){return this.streams.some(function(a){return a.getVideoTracks().some(function(a){return a.readyState==="live"})})};d.isAudioMuted=function(){var a=this;return!this.hasAudio()?!0:this.getAllStreamAudioTracks().every(function(b){return a.areAllTracksMuted(b)})};d.isVideoMuted=function(){var a=this;return!this.hasVideo()?!0:this.streams.every(function(b){return a.areAllTracksMuted(b.getVideoTracks())})};d.areAllTracksMuted=function(a){return!a.some(function(a){return a.enabled})};d.hasFunctioningVideoTrack=function(){return!this.hasVideo()?!1:this.streams.every(function(a){return a.getVideoTracks().some(function(a){return a.enabled&&!a.muted})})};d.toggleMuteAudio=function(a){var b=this;this.getAllStreamAudioTracks().forEach(function(a){return b.$RTCUser1(a)});return this.clone()};d.toggleMuteVideo=function(a){var b=this;this.streams.forEach(function(c){b.$RTCUser1(c.getVideoTracks(),a)});return this.clone()};d.stopVideo=function(){var a=this;this.streams.forEach(function(b){b.getVideoTracks().forEach(function(c){a.$RTCUser1(b.getVideoTracks(),!0),c.readyState!=="ended"&&(c.onended&&c.onended(),c.stop())})});return this.clone()};d.getAllStreamAudioTracks=function(){return this.streams.concat(this.screenStreams).map(function(a){return a.getAudioTracks()})};d.hasStream=function(){return!this.streams.isEmpty()};d.addStream=function(a){return this.set("streams",this.streams.add(b("nullthrows")(a)))};d.removeStream=function(a){return this.set("streams",this.streams["delete"](a))};d.getStream=function(){return this.hasStream()?this.streams.first():null};d.getActiveStream=function(){return this.hasStream()?this.streams.find(function(a){return"active"in a&&a.active}):null};d.replaceStream=function(a,b){return!this.streams.contains(a)?this:this.set("streams",this.streams["delete"](a).add(b))};d.removeAllStreams=function(){return this.set("streams",b("immutable").Set())};d.getScreenStream=function(){return this.screenStreams&&this.hasScreenStream()?this.screenStreams.first():null};d.hasScreenStream=function(){return!this.screenStreams.isEmpty()};d.addScreenStream=function(a){return this.set("screenStreams",this.screenStreams.add(a))};d.removeScreenStream=function(a){return this.set("screenStreams",this.screenStreams["delete"](a))};d.removeAllScreenStreams=function(){return this.set("screenStreams",b("immutable").Set())};d.replaceScreenStream=function(a,b){if(!this.screenStreams.contains(a))return this;return a===b?this:this.set("screenStreams",this.screenStreams.add(b)["delete"](a))};d.setRoomLocation=function(a){return this.set("roomLocation",a)};d.getRoomLocation=function(){return this.roomLocation};d.$RTCUser1=function(a,b){var c=b!=null?!b:this.areAllTracksMuted(a);a.forEach(function(a){return a.enabled=c})};d.getMediaTypeForTracks=function(){var a=new Map(),b=this.getScreenStream();b&&b.getVideoTracks().forEach(function(b){return a.set(b.id,g.SCREEN)});return a};return c}(b("RTCUserRecord"));e.exports=a}),null);
__d("RTCCallTitle.react",["MercuryIDs","MercuryParticipantListRenderer","React","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();var c=a.displayViewerName,d=a.viewer,e=a.participants;a=a.className;var f=b("MercuryIDs").getParticipantIDFromUserID(d);d=Object.keys(e.toJS());d.length>1&&(d=d.filter(function(a){return a!==f||c}));d=d.map(function(a){return e.get(a)});d=new(b("MercuryParticipantListRenderer"))().setUseShortName(!1).setUseAndSeparator(!1).renderParticipantList(d);return b("React").createElement("span",{className:a},d)};e.exports=a}),null);
__d("MessengerProfileImageWrapperReact.bs",["cx","cssVar","React","ReactDOMRe.bs","CurrentUser","ReasonReact.bs","TooltipData","joinClasses","bs_js_primitive","MessagingThreadType","getViewportDimensions","LazyWorkMultiCompanyChatTooltipReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").statelessComponent("MessengerProfileImageWrapperReact");function j(a,c,d,e,f,g,h,j,k,l,m,n){__p&&__p();var o=l!==void 0?l:"",p=function(){__p&&__p();if(c!==void 0)return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon _67in"},b("bs_js_primitive").valFromOption(c)));else{var a;if(d!==void 0||e!==void 0||k!==void 0)a=1;else return null;if(a===1)if(m)if(e!==void 0)if(b("CurrentUser").isWorkUser())return null;else{a=e;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon"+(a?" _1zvi":"")+(a?"":" _2poo")}))}else if(k!==void 0)if(b("CurrentUser").isWorkUser()){a=k;var f=j!==void 0?j>45:!1;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("ReasonReact.bs").element(void 0,void 0,b("LazyWorkMultiCompanyChatTooltipReact.bs").make([b("React").createElement("div",{className:(a&&!f?"_4rwy":"")+(a&&f?" _2zb5":"")})])))}else return null;else if(b("CurrentUser").isWorkUser())return null;else{a=d;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon"+(a?" _2poo":"")+(a?"":" _2pop")}))}else return null}};return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(){__p&&__p();var c=j!==void 0?""+(String(j)+"px"):"auto",d=g!==void 0?g===b("MessagingThreadType").ROOM:!1,e;if(h!==void 0){var i=h;if(i==="")e={};else{var k=b("getViewportDimensions")().width,l=parseInt("700px".replace("px",""),10);k=k<=l;l=k?"above":"left";e=Object.assign({},b("TooltipData").propsFor(i,l))}}else e={};k=d?{background:f!==void 0?f:"#0084ff",height:c,width:c}:{height:c,width:c};i={className:b("joinClasses")("_4ldz",o),style:{height:c,width:c}};a!==void 0&&(i["aria-hidden"]=b("bs_js_primitive").valFromOption(a));return b("React").cloneElement(b("React").createElement("div",i,b("ReactDOMRe.bs").createElementVariadic("div",{className:"_4ld-"+(d?" _180i":""),style:k},n),p(0)),e)},i[9],i[10],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){var c=a.className;return j(b("bs_js_primitive").nullable_to_opt(a.ariaHidden),b("bs_js_primitive").nullable_to_opt(a.customBadge),b("bs_js_primitive").nullable_to_opt(a.isMessengerUser),void 0,b("bs_js_primitive").nullable_to_opt(a.threadColor),b("bs_js_primitive").nullable_to_opt(a.threadType),b("bs_js_primitive").nullable_to_opt(a.tooltipContent),b("bs_js_primitive").nullable_to_opt(a.size),a.isMultiCompany,c==null?"":c,a.showBadge,[].concat(a.children))});f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MessengerContactImage.react",["Image.react","MessengerProfileImageWrapperReact.bs","React"],(function(a,b,c,d,e,f){__p&&__p();var g=b("MessengerProfileImageWrapperReact.bs").jsComponent;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:this.props.className},b("React").createElement(g,{isMessengerUser:this.props.isMessengerUser,isPartiesUser:this.props.isPartiesUser,size:this.props.size,customBadge:this.props.customBadge,showBadge:!1},b("React").createElement(b("Image.react"),{alt:"",height:this.props.size,src:this.props.src,width:this.props.size})))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("MessengerScrollableArea.react",["cx","React","ReactDOM","ScrollableArea.react","Style","UserAgent","clearImmediate","joinClasses","setImmediate","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=20;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$1=!1;d.$2=null;d.$4=function(){if(d.$1){var a;d.props.onScroll&&(a=d.props).onScroll.apply(a,arguments)}};d.$5=function(){__p&&__p();if(!b("UserAgent").isBrowser("IE"))return;if(!d.refs||!d.refs.scrollable)return;var a=d.refs.scrollable.refs.wrap,c=d.refs.scrollable.refs.body;if(!c||!a)return;c=b("ReactDOM").findDOMNode(c);a=b("ReactDOM").findDOMNode(a);a=a.offsetWidth-a.clientWidth;a>0&&b("Style").set(c,"margin-right",-a+"px")};d.$3=b("throttle")(d.$4,50);return d}var d=c.prototype;d.componentDidMount=function(){this.$2=b("setImmediate")(this.$5),this.$1=!0};d.componentWillUnmount=function(){b("clearImmediate")(this.$2),this.$1=!1};d.render=function(){var a=this.props.needsFastScrollHandler?this.$4:this.$3;return b("React").createElement(b("ScrollableArea.react"),{className:b("joinClasses")("_5f0v",this.props.className),height:this.props.height,onScroll:a,persistent:!0,ref:"scrollable",shadow:!1,tabIndex:this.props.tabIndex,width:this.props.width},this.props.children)};d.getArea=function(){return this.refs.scrollable.getArea()};d.scrollToBottom=function(a){var b=this.getArea();b&&this.scrollToPosition(b.getScrollHeight(),!!a)};d.scrollToTop=function(a){var b=this.getArea();b&&b.scrollToTop(!!a)};d.scrollToPosition=function(a,b,c){b===void 0&&(b=!1);c===void 0&&(c={});var d=this.getArea();if(!d)return;d.setScrollTop(a,b,c)};d.isScrolledToBottom=function(){return this.isScrolledToBottomWithHeight(0)};d.isScrolledToBottomWithHeight=function(a){var b=this.getArea();return!b?!1:b.getScrollTop()+b.getClientHeight()+a>=b.getScrollHeight()-h};d.isScrolledToTop=function(){var a=this.getArea();return!a?!0:a.getScrollTop()<=h};d.getScrollTop=function(){var a=this.getArea();return!a?0:a.getScrollTop()};return c}(b("React").Component);e.exports=a}),null);
__d("MessengerSpinnerReact.bs",["cx","ix","fbt","Image.bs","ReasonReact.bs","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=h("86853"),k=h("86857"),l=h("86854"),m=b("ReasonReact.bs").statelessComponent("MessengerSpinnerReact");function n(a,c,d,e){__p&&__p();var f=a!==void 0?a:"",g=c!==void 0?c:"blue",h=d!==void 0?d:24,n=function(){var a=h===24;if(a){a=g==="blue";if(a)return j;else return k}else return l};return[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],function(){return b("ReasonReact.bs").element(void 0,void 0,b("Image.bs").make(b("joinClasses")(f,"_3u55 _3qh2"),void 0,i._("Chargement..."),!0,n(0),h,void 0,h,void 0,[]))},m[9],m[10],m[11],m[12]]}a=b("ReasonReact.bs").wrapReasonForJs(m,function(a){var b=a.className,c=a.color;a=a.size;return n(b==null?"":b,c==null?"blue":c,a==null?24:a,[])});c=32;d=24;f.large_size=c;f.medium_size=d;f.blue_src=j;f.grey_src=k;f.large_blue_src=l;f.component=m;f.make=n;f.jsComponent=a}),null);
__d("MessengerSpinner.react",["MessengerSpinnerReact.bs"],(function(a,b,c,d,e,f){e.exports=b("MessengerSpinnerReact.bs").jsComponent,e.exports.large_size=b("MessengerSpinnerReact.bs").large_size,e.exports.medium_size=b("MessengerSpinnerReact.bs").medium_size}),null);
__d("MercuryThreadImageReact.bs",["ReasonReact.bs","bs_js_null_undefined","MercuryThreadImage.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f){return b("ReasonReact.bs").wrapJsForReason(b("MercuryThreadImage.react"),{size:b("bs_js_null_undefined").fromOption(a),thread:c,useBackground:b("bs_js_null_undefined").fromOption(d),viewer:e},f)}f.make=a}),null);
__d("MessengerContactImageReact.bs",["Image.bs","React","bs_belt_Option","ReasonReact.bs","bs_js_primitive","bs_js_null_undefined","MessengerContactImage.react","MessengerProfileImageWrapperReact.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReasonReact.bs").statelessComponent("MessengerContactImageReact");function h(a,c,d,e,f,h,i,j){var k=i!==void 0?i:!1;return[g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],function(){return b("React").createElement("div",{className:b("bs_belt_Option").getWithDefault(a,"")},b("ReasonReact.bs").element(void 0,void 0,b("MessengerProfileImageWrapperReact.bs").make(!0,c,d,e,void 0,void 0,void 0,f,k,void 0,k,[b("ReasonReact.bs").element(void 0,void 0,b("Image.bs").make(void 0,"",void 0,void 0,h,f,void 0,f,void 0,[]))])))},g[9],g[10],g[11],g[12]]}c=b("ReasonReact.bs").wrapReasonForJs(g,function(a){return h(b("bs_js_primitive").nullable_to_opt(a.className),b("bs_js_primitive").nullable_to_opt(a.customBadge),b("bs_js_primitive").nullable_to_opt(a.isMessengerUser),b("bs_js_primitive").nullable_to_opt(a.isPartiesUser),a.size,b("bs_js_primitive").nullable_to_opt(a.src),b("bs_js_primitive").nullable_to_opt(a.isMultiCompany),[])});function a(a,c,d,e,f,g,h,i){return b("ReasonReact.bs").wrapJsForReason(b("MessengerContactImage.react"),{className:b("bs_js_null_undefined").fromOption(a),customBadge:b("bs_js_null_undefined").fromOption(c),isMessengerUser:b("bs_js_null_undefined").fromOption(d),isPartiesUser:b("bs_js_null_undefined").fromOption(e),size:f,src:b("bs_js_null_undefined").fromOption(g),isMultiCompany:b("bs_js_null_undefined").fromOption(h)},i)}d=[a];e=b("bs_belt_Option").getWithDefault;f.$pipe$unknown=e;f.component=g;f.make=h;f.jsComponent=c;f.StraightJSComponent=d}),null);
__d("OptionType.bs",["bs_curry","bs_js_primitive"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){if(a!==void 0)if(c!==void 0)return b("bs_curry")._2(d,b("bs_js_primitive").valFromOption(a),b("bs_js_primitive").valFromOption(c));else return!1;else return c===void 0}function c(a,c){if(a!==void 0)if(c!==void 0)return b("bs_js_primitive").valFromOption(a)===b("bs_js_primitive").valFromOption(c);else return!1;else return c===void 0}f.equals=a;f.equalsReference=c}),null);
__d("MessengerThreadImageReact.bs",["cx","React","Utils.bs","MercuryIDs","OptionType.bs","ReasonReact.bs","bs_js_primitive","WorkForeignEntityInfo.bs","MercuryThreadImageReact.bs","MessengerProfileImageWrapperReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c){__p&&__p();var d=a.other_user_fbid,e=c.size;a=b("MercuryIDs").isCanonical(a.thread_id);if(d==null||!(a&&e!==0))return!1;else{a=b("MercuryIDs").getParticipantIDFromUserID(d);e=c.get(a);if(!(e==null)&&!(e==null))return e.is_messenger_user;else return!1}}var i=b("ReasonReact.bs").statelessComponentWithRetainedProps("MessengerThreadImageReact");function j(a,c,d,e,f,g,j,k,l){__p&&__p();var m=c!==void 0?c:!1,n=d!==void 0?d:!1,o=e!==void 0?e:!1;return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],function(a){var c=a[1][2];a=a[0][2];if(a[0]!==c[0]||a[3]!==c[3]||!b("OptionType.bs").equalsReference(a[4],c[4])||a[5]!==c[5]||a[6]!==c[6]||a[1]!==c[1]||a[2]!==c[2]||a[7]!==c[7])return!0;else return a[8]!==c[8]},function(){var c=!b("WorkForeignEntityInfo.bs").areAllCoworkers(g),d=c?void 0:n?b("bs_js_primitive").some(b("React").createElement("div",{className:"_466z"})):m?b("bs_js_primitive").some(b("React").createElement("div",{className:"_4670"})):void 0,e={};a!==void 0&&(e.className=b("bs_js_primitive").valFromOption(a));return b("React").createElement("div",e,b("ReasonReact.bs").element(void 0,void 0,b("MessengerProfileImageWrapperReact.bs").make(void 0,d,h(j,g),void 0,b("bs_js_primitive").nullable_to_opt(j.solid_color),b("bs_js_primitive").nullable_to_opt(j.thread_type),void 0,f,c,void 0,o&&b("MercuryIDs").isCanonical(j.thread_id)||c,[b("ReasonReact.bs").element(void 0,void 0,b("MercuryThreadImageReact.bs").make(f,j,!0,k,[]))])))},i[9],[a,m,n,o,f,h(j,g),!b("WorkForeignEntityInfo.bs").areAllCoworkers(g),j,k],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return j(b("bs_js_primitive").nullable_to_opt(a.className),b("Utils.bs").isTruthy(a.isPresenceForWork),b("Utils.bs").isTruthy(a.isDoNotDisturb),b("Utils.bs").isTruthy(a.showBadge),b("bs_js_primitive").nullable_to_opt(a.size),a.participants,a.thread,a.viewer,[])});f.getIsMessengerUser=h;f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MessengerDialogTitleReact.bs",["cx","React","bs_belt_Option","ReasonReact.bs","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("ReasonReact.bs").statelessComponent("MessengerDialogTitleReact");function a(a,c){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(){var d=b("bs_belt_Option").getWithDefault(a,!1);return b("React").createElement("div",{className:b("joinClasses")("_19jt",d?"autofocus":"")},c)},h[9],h[10],h[11],h[12]]}f.component=h;f.make=a}),null);
__d("MessengerDialogTitleReact.re",["bs_curry","MessengerDialogTitleReact.bs","ReasonReact.bs"],(function(a,b,c,d,e,f){a=b("ReasonReact.bs").wrapReasonForJs(b("MessengerDialogTitleReact.bs").component,function(a){return b("bs_curry")._2(b("MessengerDialogTitleReact.bs").make,a.autofocus,a.children)});f.component=a;f["default"]=a}),null);
__d("MessengerAttributionTagsStore",["MessengerActions","MessengerStore"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$MessengerAttributionTagsStore1={messagingTags:null,threadID:null};return b}var d=c.prototype;d.getState=function(){return this.$MessengerAttributionTagsStore1};d.__onDispatch=function(a){switch(a.type){case b("MessengerActions").Types.UPDATE_THREAD_TAG:this.$MessengerAttributionTagsStore1.messagingTags=a.messagingTags;this.$MessengerAttributionTagsStore1.threadID=a.threadID;this.emitChange();break;case b("MessengerActions").Types.SELECT_THREAD:this.$MessengerAttributionTagsStore1.messagingTags=null;this.$MessengerAttributionTagsStore1.threadID=null;this.emitChange();break}};return c}(b("MessengerStore"));e.exports=new a()}),null);
__d("MNPlatformAttributionTags",[],(function(a,b,c,d,e,f){e.exports={ATTRIBUTION_TAGS_PREFIX:"bnp:trigger:",CUSTOMER_CHAT_PLUGIN:"customer_chat_plugin",MESSENGERDOTCOM:"messengerdotcom",MESSENGER_WEB:"messenger_web",MESSENGER_WEB_SEARCH:"messenger_web_search",M_DOT_ME:"m_dot_me"}}),null);
__d("MessengerDiscoveryLoggingEnums",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTRYPOINT_PREFIX:"entrypoint:"})}),null);
__d("MessengerDiscoveryEntryPointsLoggingHelper",["MessengerDiscoveryEntryPoint","MessengerDiscoveryLoggingEnums"],(function(a,b,c,d,e,f){"use strict";a={getEntryPointsLoggingTagStr:function(a){if(a.length==0||Object.values(b("MessengerDiscoveryEntryPoint")).indexOf(a[0])==-1)throw new Error("Please use enums in MessengerDiscoveryEntryPoints class");return b("MessengerDiscoveryLoggingEnums").ENTRYPOINT_PREFIX+a.join(":")}};e.exports=a}),null);
__d("MNPlatformTagsDataManager",["MessagingSourceEnum","MessengerActions","MessengerAttributionTagsStore","MessengerDiscoveryEntryPoint","MessengerDiscoveryEntryPointsLoggingHelper","MNPlatformAttributionTags"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={getTags:function(a){__p&&__p();a===void 0&&(a=null);var c=null,d=null;switch(a){case b("MessagingSourceEnum").PAGES_MESSAGE_SHORTLINK:c=b("MNPlatformAttributionTags").M_DOT_ME;break;case b("MessagingSourceEnum").MESSENGER_WEB:c=b("MNPlatformAttributionTags").MESSENGER_WEB;break;case b("MessagingSourceEnum").MESSENGER_WEB_SEARCH:c=b("MNPlatformAttributionTags").MESSENGER_WEB_SEARCH;d=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_WEB_SEARCH]);break;case b("MessagingSourceEnum").CUSTOMER_CHAT_PLUGIN:c=b("MNPlatformAttributionTags").CUSTOMER_CHAT_PLUGIN;break;case b("MessagingSourceEnum").PAGE_PLUGIN_MESSAGE:c=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_PAGES_PLUGIN]);break;default:c="";break}a=[c];d!==null&&a.push(d);return a},updateThreadTabAfterSelectThread:function(a,c){a===void 0&&(a=null);c===void 0&&(c=null);a=this.getTags(a);b("MessengerActions").changeThreadTag(a,c)},hasThreadTags:function(a){var c=b("MessengerAttributionTagsStore").getState();return!!(c.messagingTags&&a&&c.threadID&&c.threadID.toString()===a)},getThreadTags:function(){var a=b("MessengerAttributionTagsStore").getState();return a.messagingTags}}}),null);
__d("MessengerRTCGroupCallContactListItem.react",["cx","fbt","ix","FBRTCParticipantCallState","Image.react","Link.react","MessengerContactImageReact.bs","React","RTWebStrings","emptyFunction"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("MessengerContactImageReact.bs").jsComponent,k=(a={},a[b("FBRTCParticipantCallState").DISCONNECTED]=b("RTWebStrings").disconnected,a[b("FBRTCParticipantCallState").NO_ANSWER]=b("RTWebStrings").noAnswer,a[b("FBRTCParticipantCallState").REJECTED]=b("RTWebStrings").noAnswer,a[b("FBRTCParticipantCallState").UNREACHABLE]=b("RTWebStrings").unreachable,a[b("FBRTCParticipantCallState").CONNECTION_DROPPED]=b("RTWebStrings").connectionDropped,a[b("FBRTCParticipantCallState").CONTACTING]=b("RTWebStrings").contacting,a[b("FBRTCParticipantCallState").RINGING]=b("RTWebStrings").ringing,a[b("FBRTCParticipantCallState").CONNECTING]=b("RTWebStrings").connecting,a[b("FBRTCParticipantCallState").CONNECTED]=b("RTWebStrings").connected,a[b("FBRTCParticipantCallState").PARTICIPANT_LIMIT_REACHED]=b("RTWebStrings").participantLimitReached,a[b("FBRTCParticipantCallState").IN_ANOTHER_CALL]=b("RTWebStrings").inAnotherCall,a),l=32;c=function(a){var c=a.isSelected,d=a.onClick,e=a.user,f=a.dataTestID;a=a.participantState;return b("React").createElement(b("Link.react"),{"aria-checked":c,className:"_4nvn",onClick:o(a)?b("emptyFunction"):d,"data-testid":f,role:"checkbox"},b("React").createElement(j,{className:"_4nvr",isMessengerUser:e.isMessengerUser,isPartiesUser:e.isPartiesUser,size:l,src:e.profilePictureUrl}),b("React").createElement("div",{className:"_4nvs"},b("React").createElement("div",{className:"_4nvt"},b("React").createElement("div",{className:"_4nv_"},e.userName),b("React").createElement(m,{user:e,participantState:a})),b("React").createElement(n,{isSelected:c,participantState:a})))};var m=function(a){var c=a.user;a=a.participantState;if(a){a=k[a.state]||h._("Inconnu");return b("React").createElement("div",{className:"_4nw0"},a)}return c.vanity?b("React").createElement("div",{className:"_4nw0"},"@",c.vanity):null},n=function(a){var c=a.isSelected;a=a.participantState;if(o(a))return b("React").createElement("div",{className:"_1j79"},h._("En conversation"));else if(c)return b("React").createElement("div",{className:"_1j79"},b("React").createElement(b("Image.react"),{src:i("86852")}));return null};function o(a){if(!a)return!1;switch(a.state){case b("FBRTCParticipantCallState").CONTACTING:case b("FBRTCParticipantCallState").RINGING:case b("FBRTCParticipantCallState").CONNECTING:case b("FBRTCParticipantCallState").CONNECTED:return!0;default:return!1}}e.exports=c}),null);
__d("MessengerRTCGroupCallContactList.react",["cx","MessengerRTCGroupCallContactListItem.react","MessengerScrollableArea.react","React","VideoCallWebDriverIDs","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){var c=a.isParticipantSelected,d=a.onClick,e=a.remoteUsers;a=a.participantStates;var f=a===void 0?b("immutable").Map():a;a=e.map(function(a){return b("React").createElement(b("MessengerRTCGroupCallContactListItem.react"),{isSelected:c.get(a.FBID),key:a.FBID,onClick:function(){return d(a.FBID)},user:a,dataTestID:b("VideoCallWebDriverIDs").RTC_PICKER_DIALOG_CONTACT_LIST_ITEM+a.FBID,participantState:f.get(a.FBID)})});return b("React").createElement(b("MessengerScrollableArea.react"),{className:"_12zw"},a)};e.exports=a}),null);
__d("MessengerRTCGroupCallThreadRow.react",["cx","fbt","MercuryParticipantsImage.react","MercuryThreadTitle_DEPRECATED.react","MessengerProfileImageWrapperReact.bs","MessengerThreadImageReact.bs","React","RTCCallTitle.react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("MessengerProfileImageWrapperReact.bs").jsComponent,j=b("MessengerThreadImageReact.bs").jsComponent,k=function(){return b("React").createElement("div",{className:"_1apf"},h._("Les personnes que vous ajoutez \u00e0 cette vid\u00e9o de groupe verront les messages pr\u00e9c\u00e9dents de cette conversation."))},l=function(){return b("React").createElement("div",{className:"_1ydy"},h._("Vous \u00eates sur le point d\u2019appeler des personnes que vous avez bloqu\u00e9es."))};a=function(a){var c=a.thread,d=a.displayAddMemberWarning,e=a.displayBlockedMemberWarning,f=a.participants,g=a.viewerID;babelHelpers.objectWithoutPropertiesLoose(a,["thread","displayAddMemberWarning","displayBlockedMemberWarning","participants","viewerID"]);return b("React").createElement("div",{className:"_5y31"},c&&c.image_src?b("React").createElement(j,{className:"_5y32",participants:f,thread:c,viewer:g}):b("React").createElement(i,{className:"_5y32",showBadge:!1},b("React").createElement(b("MercuryParticipantsImage.react"),{participants:Object.keys(f.toJS()),size:50})),b("React").createElement("div",{className:"_5y34"},c&&c.name?b("React").createElement(b("MercuryThreadTitle_DEPRECATED.react"),{className:"_5y37",thread:c,viewer:g}):b("React").createElement(b("RTCCallTitle.react"),{className:"_5y37",participants:f,viewer:g}),d?b("React").createElement(k,null):null,e?b("React").createElement(l,null):null))};e.exports=a}),null);
__d("MessengerTypeaheadUtils",["fbt","ix","MercuryTypeaheadConstants","MessengerEnvironment","ReactDOM","SearchableEntry","immutable","mapObject"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("immutable").OrderedMap,j=500,k=100,l="__special_search_entry__",m=[b("MercuryTypeaheadConstants").SEARCH_TYPE,b("MercuryTypeaheadConstants").FRIEND_TYPE,b("MercuryTypeaheadConstants").FB4C_TYPE,b("MercuryTypeaheadConstants").MESSAGE_TYPE,b("MercuryTypeaheadConstants").THREAD_TYPE,b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE,b("MercuryTypeaheadConstants").NON_FRIEND_TYPE,b("MercuryTypeaheadConstants").PAGE_TYPE,b("MercuryTypeaheadConstants").GAME_TYPE],n=(a={},a[b("MercuryTypeaheadConstants").SEARCH_TYPE]={header:""},a[b("MercuryTypeaheadConstants").FRIEND_TYPE]={header:g._("Contacts")},a[b("MercuryTypeaheadConstants").FB4C_TYPE]={header:g._("Coll\u00e8gues")},a[b("MercuryTypeaheadConstants").MESSAGE_TYPE]={header:g._("Messages")},a[b("MercuryTypeaheadConstants").THREAD_TYPE]={header:g._("Conversations de groupe")},a[b("MercuryTypeaheadConstants").PAGE_TYPE]={header:g._("Entreprises")},a[b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE]={header:g._("Salles de r\u00e9union")},a[b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE]={header:g._("Bots")},a[b("MercuryTypeaheadConstants").NON_FRIEND_TYPE]={header:g._("Plus de personnes")},a.game={header:g._("Jeux")},a);c={sortEntries:function(a,c){__p&&__p();var d=[],e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[],m=[];a.forEach(function(a){__p&&__p();switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:f.push(a);break;case b("MercuryTypeaheadConstants").MESSAGE_TYPE:g.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:h.push(a);break;case b("MercuryTypeaheadConstants").PAGE_TYPE:case b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE:j.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:i.push(a);break;case b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE:k.push(a);break;case b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE:l.push(a);break;case b("MercuryTypeaheadConstants").SEARCH_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").GAME_TYPE:m.push(a);break}});return d.concat(e,f,g,h,k,l,i,j,m)},sortEntriesWithoutPages:function(a){__p&&__p();var c=[],d=[],e=[],f=[];a.forEach(function(a){switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:c.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return c.concat(d,e,f)},sortEntriesWithoutGroupsOrViewer:function(a,c){__p&&__p();var d=[],e=[],f=[];a.forEach(function(a){if(a.getUniqueID()===c)return;switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return d.concat(e,f)},getEntryOrder:function(a,b){if(b==null)return m;else return b},orderEntries:function(a,c){var d=this,e=[];this.getEntryOrder(c).filter(function(a){return a!==b("MercuryTypeaheadConstants").SEARCH_TYPE}).concat(b("MercuryTypeaheadConstants").SEARCH_TYPE).forEach(function(b){return e.push.apply(e,a.filter(function(a){return d.areSectionsEqual(a.getType(),b)}))});return e},buildSingleSection:function(a){return i([["",a]])},buildListSections:function(a,c,d){__p&&__p();if(!a.length)return i();d=this.getEntryOrder(c,d);var e=b("mapObject")(n,function(a){return babelHelpers["extends"]({},a,{entries:[]})});e[b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE]=e[b("MercuryTypeaheadConstants").PAGE_TYPE];a.forEach(function(a){var b=a.getType();e[b]&&e[b].entries.push(a)});return i(d.filter(function(a){return e[a].entries.length}).map(function(a){return[e[a].header,e[a].entries]}))},buildCustomSection:function(a,b){var c;return c={},c[a]=b,c},areSectionsEqual:function(a,c){return a===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE?c===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE||c===b("MercuryTypeaheadConstants").PAGE_TYPE:a===c},scrollEntryIntoView:function(a,c){var d=b("ReactDOM").findDOMNode(c),e=c.getScrollTop(),f=a.offsetTop-e;d=d.offsetHeight-a.offsetHeight;a=Math.abs(d-f);f>=d&&a<=k?c.scrollToPosition(e+f-d,!0,{duration:j}):f<0&&a<=d+k&&c.scrollToPosition(e+f,!0,{duration:j})},getMessageSearchEntry:function(a){return!b("MessengerEnvironment").messengerui||a.length<2?null:new(b("SearchableEntry"))({uniqueID:l,title:g._("Rechercher \u00ab\u00a0{queryString}\u00a0\u00bb dans les messages",[g._param("queryString",a)]),photo:h("86924"),type:b("MercuryTypeaheadConstants").SEARCH_TYPE})},isMessageSearchEntry:function(a){return a.getUniqueID()===l}};e.exports=c}),null);