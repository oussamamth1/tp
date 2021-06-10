if (self.CavalryLogger) { CavalryLogger.start_js(["2hMx0"]); }

__d("FeedReactComposerLazyLoadPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerLazyLoadPerfLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerLazyLoadPerfLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerLazyLoadPerfLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setInteractionDelay=function(a){this.$1.interaction_delay=a;return this};c.setLazyLoadDuration=function(a){this.$1.lazy_load_duration=a;return this};c.setPropsLoadDuration=function(a){this.$1.props_load_duration=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={interaction_delay:!0,lazy_load_duration:!0,props_load_duration:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ExtensibleSproutsItemType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACHIEVEMENT:"ACHIEVEMENT",ADVERTISE:"ADVERTISE",AIRBENDER_AVATAR:"AIRBENDER_AVATAR",APP_INTEGRATION_AODOCS:"APP_INTEGRATION_AODOCS",APP_INTEGRATION_BOX:"APP_INTEGRATION_BOX",APP_INTEGRATION_CORNERSTONE:"APP_INTEGRATION_CORNERSTONE",APP_INTEGRATION_DROPBOX:"APP_INTEGRATION_DROPBOX",APP_INTEGRATION_EGNYTE:"APP_INTEGRATION_EGNYTE",APP_INTEGRATION_GDRIVE:"APP_INTEGRATION_GDRIVE",APP_INTEGRATION_JIRA:"APP_INTEGRATION_JIRA",APP_INTEGRATION_ONEDRIVE:"APP_INTEGRATION_ONEDRIVE",APP_INTEGRATION_QUIP:"APP_INTEGRATION_QUIP",APP_INTEGRATION_SHAREPOINT:"APP_INTEGRATION_SHAREPOINT",APP_INTEGRATION_TASKS:"APP_INTEGRATION_TASKS",APP_INTEGRATION_TRELLO:"APP_INTEGRATION_TRELLO",APP_INTEGRATIONS_MENU:"APP_INTEGRATIONS_MENU",AUDIO:"AUDIO",BACKDATE:"BACKDATE",BIRTHDAY_CAMERA:"BIRTHDAY_CAMERA",BIRTHDAY_STICKER:"BIRTHDAY_STICKER",BREAKING_NEWS:"BREAKING_NEWS",CIVIC_CTA:"CIVIC_CTA",ELLIPSIS:"ELLIPSIS",FACECAST:"FACECAST",FILE:"FILE",FUN_FACT:"FUN_FACT",FUNDRAISER:"FUNDRAISER",GIF:"GIF",GROUP_JOIN_CTA:"GROUP_JOIN_CTA",GROUP_MEET_UP:"GROUP_MEET_UP",INSPIRATION_CAMERA:"INSPIRATION_CAMERA",LIFE_EVENT:"LIFE_EVENT",LIST:"LIST",LIVE_FORMAT:"LIVE_FORMAT",LIVING_ROOM:"LIVING_ROOM",LIVING_ROOM_PAGE:"LIVING_ROOM_PAGE",LIVING_ROOM_PROFILE:"LIVING_ROOM_PROFILE",LOCAL_ALERTS:"LOCAL_ALERTS",LOCAL_DEV_PLATFORM:"LOCAL_DEV_PLATFORM",LOCATION:"LOCATION",MARKDOWN:"MARKDOWN",MEDIA:"MEDIA",MILESTONE:"MILESTONE",MINUTIAE:"MINUTIAE",MOVIES:"MOVIES",MULTIMEDIA:"MULTIMEDIA",NOTE:"NOTE",PAGE_SELL:"PAGE_SELL",PHOTO:"PHOTO",PUBLISH_JOB_POST:"PUBLISH_JOB_POST",Q_AND_A:"Q_AND_A",RECOMMENDATION:"RECOMMENDATION",SELL:"SELL",SEND_GIFT:"SEND_GIFT",SPONSOR_TAG:"SPONSOR_TAG",STICKER:"STICKER",SUGGESTED_PHOTO:"SUGGESTED_PHOTO",SUPPORT_NOW:"SUPPORT_NOW",TAG_EVENT:"TAG_EVENT",TAG_EVENT_TICKET:"TAG_EVENT_TICKET",TAG_PRODUCT:"TAG_PRODUCT",TEXT_BACKGROUND:"TEXT_BACKGROUND",THREE_D_PHOTO:"THREE_D_PHOTO",THREESIXTY_CAPTURE:"THREESIXTY_CAPTURE",TODO_LIST:"TODO_LIST",VIDEO:"VIDEO",VISUAL_POLLS:"VISUAL_POLLS",WITH_TAG:"WITH_TAG",WORK_FILE:"WORK_FILE",WRITE_POST:"WRITE_POST",DISCUSSION:"DISCUSSION",MORE:"MORE",ANIMATED_EFFECTS:"ANIMATED_EFFECTS",CONTACT_YOUR_REPRESENTATIVE:"CONTACT_YOUR_REPRESENTATIVE",EVENTS:"EVENTS",FIND_PLAYERS:"FIND_PLAYERS",GET_BOOKINGS:"GET_BOOKINGS",GET_DIRECTIONS:"GET_DIRECTIONS",GET_MESSAGES:"GET_MESSAGES",GET_TICKET:"GET_TICKET",GET_PHONE_CALLS:"GET_PHONE_CALLS",GET_SHOPS:"GET_SHOPS",ORDER_FOOD:"ORDER_FOOD",PAGE_OFFER:"PAGE_OFFER",PAGE_RECOMMENDATIONS_ADD_TAGS:"PAGE_RECOMMENDATIONS_ADD_TAGS",PLAY_WITH_FRIENDS:"PLAY_WITH_FRIENDS",PLANETARIUM:"PLANETARIUM",SELL_MULTIPLE_ITEMS:"SELL_MULTIPLE_ITEMS",SALES_PROMO:"SALES_PROMO",SPOTIFY_SHARE:"SPOTIFY_SHARE",SUGGESTED_PHOTO_CAPTION:"SUGGESTED_PHOTO_CAPTION",TRANSLITERATION:"TRANSLITERATION",VIDEO_SUGGESTIONS:"VIDEO_SUGGESTIONS"})}),null);
__d("ReactComposerProfilePhoto.react",["cx","fbt","Image.react","Link.react","React"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;var i=40;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this,c="_3hvt",d=b("React").createElement(b("Image.react"),{className:"_bth",src:this.props.src,height:i,width:i}),e=h._("Profil de {name}",[h._param("name",this.props.profileName)]),f;this.props.profileDialogURI?f=b("React").createElement(b("Link.react"),{ajaxify:this.props.profileDialogURI,rel:"dialog","aria-label":e,className:c,href:this.props.profileURI,onClick:function(b){a.props.onClick(b),b.stopPropagation()},onFocus:function(a){a.stopPropagation(),a.nativeEvent.composerPropagationStopped=!0}},d):this.props.profileURI?f=b("React").createElement(b("Link.react"),{"aria-label":e,className:c,href:this.props.profileURI,onClick:this.props.onClick},d):f=b("React").createElement("div",{className:c},d);return f};return c}(b("React").PureComponent);c.PROFILE_PIC_WIDTH=i;c.propTypes={src:a.string.isRequired,profileName:a.string,profileURI:a.string,profileDialogURI:a.string,onClick:a.func};e.exports=c}),null);
__d("XReactFeedSproutsComposerXPropsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/lazy_load_composer/props/",{composer_id:{type:"String",required:!0}})}),null);
__d("ReactLazyLoadFeedSproutsComposerX.react",["cx","fbt","ix","Arbiter","AsyncRequest","ExtensibleSproutsItemType","FeedComposerIDStore","FeedReactComposerLazyLoadPerfTypedLogger","JSResource","React","ReactComposerAttachmentSelector.react","ReactComposerBody.react","ReactComposerFocusInline.react","ReactComposerProfilePhotoBlock.react","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfigTyped","SubscriptionsHandler","XReactFeedSproutsComposerXPropsController","XUICard.react","XUISpinner.react","emptyFunction","fbglyph","gkx","joinClasses","lazyLoadComponent","qex"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;var j=b("lazyLoadComponent")(b("JSResource")("ReactFeedSproutsComposerX.react").__setRef("ReactLazyLoadFeedSproutsComposerX.react"));c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={hadUserInteraction:!1,hasBeenHovered:!1,jsLoadingDuration:null,prefillAdditions:null,propsLoaded:!1,propsLoadingDuration:null},d.$4=null,d.firstInteractionTime=0,d.lazyLoadStartTime=0,d.lazyLoadEndTime=0,d.propsLoadStartTime=0,d.propsLoadEndTime=0,d.hasLoggedPerf=!1,d.$5=new(b("SubscriptionsHandler"))(),d.$6=function(){d.setState({hadUserInteraction:!0}),d.$7()},d.$8=function(){d.$7(),d.setState({hasBeenHovered:!0})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$7=function(){var a=this;this.$4===null&&(this.propsLoadStartTime=Date.now(),this.$5.addSubscriptions(b("Arbiter").subscribe("ReactLazyLoadFeedSproutsComposerX/propsLoaded/"+this.props.composerID,function(b,c){a.$1=c.contextConfig,a.$2=c.config,a.$3=c.prefillConfig,a.propsLoadEndTime=Date.now(),a.setState({propsLoaded:!0,propsLoadingDuration:a.propsLoadEndTime-a.propsLoadStartTime})})),this.$4=b("XReactFeedSproutsComposerXPropsController").getURIBuilder().setString("composer_id",this.props.composerID).getRequest(new(b("AsyncRequest"))()),this.$4.send())};d.componentDidMount=function(){var a=this;b("FeedComposerIDStore").set(this.props.composerID);this.$5.addSubscriptions(b("Arbiter").subscribe("ReactFeedComposerXBootloader/selectcomposer/"+this.props.composerID,function(b,c){c&&c.prefillAdditions&&a.setState({prefillAdditions:c.prefillAdditions}),a.$6()}))};d.componentDidUpdate=function(a,c){var d=this;this.state.hasBeenHovered&&!c.hasBeenHovered&&(this.lazyLoadStartTime=Date.now(),b("JSResource")("ReactFeedSproutsComposerX.react").__setRef("ReactLazyLoadFeedSproutsComposerX.react").load().done(function(a){d.lazyLoadEndTime=Date.now(),d.setState({jsLoadingDuration:d.lazyLoadEndTime-d.lazyLoadStartTime})}));this.state.hadUserInteraction&&!c.hadUserInteraction&&(this.firstInteractionTime=Date.now());this.state.hadUserInteraction&&!this.hasLoggedPerf&&this.state.jsLoadingDuration!==null&&this.state.propsLoadingDuration!==null&&(this.hasLoggedPerf=!0,new(b("FeedReactComposerLazyLoadPerfTypedLogger"))().setLazyLoadDuration(this.lazyLoadEndTime-this.lazyLoadStartTime).setPropsLoadDuration(this.propsLoadEndTime-this.propsLoadStartTime).setInteractionDelay(Math.max(Math.max(this.lazyLoadEndTime,this.propsLoadEndTime)-this.firstInteractionTime,0)).log())};d.componentWillUnmount=function(){this.$5&&this.$5.release()};c.propsLoaded=function(a,c,d){b("Arbiter").inform("ReactLazyLoadFeedSproutsComposerX/propsLoaded/"+a.composerID,{contextConfig:a,config:c,prefillConfig:d})};d.render=function(){var a=b("React").createElement(k,babelHelpers["extends"]({},this.props,{actorID:this.props.actorID,albumTab:this.props.albumTab,hideHeader:b("qex")._("780493"),liveVideoTab:!(b("qex")._("730782")||b("gkx")("796190")),loading:this.state.hadUserInteraction,onMouseOver:this.$8,onInteraction:this.$6,qAndATab:this.props.qAndATab,sproutsConfig:this.props.sproutsConfig,statusAttachmentConfig:this.props.statusAttachmentConfig,suppressHeaderIcons:b("qex")._("760895")||b("gkx")("796190")}));return b("React").createElement(b("ReactComposerFocusInline.react"),{composerID:this.props.composerID,actorID:this.props.actorID,gks:{lazySproutsExpand:b("gkx")("678359"),topPostButton:!1,hasHeader:!1,isSproutsComposer:!0,wideHeader:!1,hideFocusDismissButton:!1},enableFocusBehavior:!0},this.state.propsLoaded&&this.state.hadUserInteraction&&this.$1&&this.$2?b("React").createElement(b("React").Suspense,{fallback:a},b("React").createElement(j,{contextConfig:this.$1,config:this.$2,prefillConfig:Object.assign({},this.$3,this.state.prefillAdditions),wasStubbed:!0})):a)};return c}(b("React").Component);function k(a){var c=b("qex")._("730783")||b("gkx")("796190");return b("React").createElement("div",{className:"_1cx1 _4a8c _4aay _4ab3"+(b("qex")._("730784")?" _2qma":""),onFocus:a.onInteraction,onMouseOver:a.onMouseOver,onClick:a.onInteraction,role:"presentation"},b("React").createElement(b("XUICard.react"),{className:"_5n2b _36bx"+(a.loading?" _6rv6":""),"data-testid":"react-composer-root","data-test-actorid":a.actorID,id:a.composerID},a.hideHeader?null:b("React").createElement(l,{albumTab:a.albumTab&&!c,liveVideoTab:a.liveVideoTab,photoTab:a.liveVideoTab&&c,qAndATab:a.qAndATab,statusTab:a.statusAttachmentConfig.enabled,statusTabTitle:a.statusAttachmentConfig.defaultTabTitle,suppressIcons:a.suppressHeaderIcons}),b("React").createElement(b("ReactComposerBody.react"),a,b("React").createElement(n,a.statusAttachmentConfig)),a.sproutsConfig?b("React").createElement(o,{sproutsConfig:a.sproutsConfig}):null),a.loading?b("React").createElement("div",{className:"_6rv7"},b("React").createElement(b("XUISpinner.react"),{background:"dark",size:"large"})):null)}function l(a){var c=[];a.statusTab&&c.push(b("React").createElement(m,{icon:a.suppressIcons?null:i("123350"),key:"status_tab_selector",label:a.statusTabTitle,selected:!0}));a.photoTab&&c.push(b("React").createElement(m,{icon:a.suppressIcons?null:i("122530"),key:"media_tab_selector",label:h._("Photo\/Vid\u00e9o"),selected:!1}));a.albumTab&&c.push(b("React").createElement(m,{icon:a.suppressIcons?null:i("123370"),key:"album",label:h._("Album photo\/vid\u00e9o"),selected:!1}));a.liveVideoTab&&c.push(b("React").createElement(m,{icon:a.suppressIcons?null:i("123206"),key:"live_video_tab_selector",label:h._("Vid\u00e9o en direct"),selected:!1}));a.qAndATab&&c.push(b("React").createElement(m,{icon:a.suppressIcons?null:i("123482"),key:"qanda_tab_selector",label:h._("Questions\/r\u00e9ponses"),selected:!1}));return b("React").createElement("div",{className:"_3ubp _sg2"+(c.length<=1?" _76ge":"")+(a.suppressIcons?" _776n":"")},c)}function m(a){return b("React").createElement("span",{"data-testid":a.dataTestID,className:"_sg1"},b("React").createElement(b("ReactComposerAttachmentSelector.react"),babelHelpers["extends"]({onSelected:b("emptyFunction")},a)))}function n(a){return b("React").createElement("div",{className:"_i-o"},b("React").createElement("div",{className:"_3eny"},b("React").createElement(b("ReactComposerProfilePhotoBlock.react"),a,b("React").createElement("div",{className:b("joinClasses")("_1mwp"+(a.showProfilePic?" _5bu_":"")+" _17nh","navigationFocus")},b("React").createElement("div",{className:"_1p1t"},a.placeholderText)))))}function o(a){return b("React").createElement("div",{className:"_1j2v"},b("React").createElement(p,{sproutsConfig:a.sproutsConfig}))}var p=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getChildContext=function(){return{hasFinishedSproutPromotion:!!this.props.hasFinishedSproutPromotion,promotedSprout:this.props.sproutsPromotionConfig&&this.props.sproutsPromotionConfig.sprout,subtitle:this.props.sproutsPromotionConfig&&this.props.sproutsPromotionConfig.subtitle,promotionID:this.props.sproutsPromotionConfig&&this.props.sproutsPromotionConfig.promotionID}};d.render=function(){__p&&__p();var a=[];for(var c in this.props.sproutsConfig){var d=b("ExtensibleSproutsItemType")[c];if(!this.props.sproutsConfig[d].enabled===!0)continue;a.push(b("React").createElement(q,{key:c},b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:b("ReactComposerSproutsDefaultUIConfigTyped").sproutsUIConfigMap[d]})));if(a.length==3)break}return b("React").createElement("div",{className:"_16ve _7i31"},b("React").createElement("ul",{className:"_16vg"+(a.length===3?" _1oxv":"")},a,b("React").createElement(q,{key:"ELLIPSIS"},b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:{label:"",icon:i("28705"),iconSrc:"/images/composer/sprouts/composer_sprout_ellipsis.png",className:"_1gr3",loggingName:"ellipsis_sprout",webDriverTestID:"ellipsis-sprout"}}))))};return a}(b("React").PureComponent);p.childContextTypes={hasFinishedSproutPromotion:a.bool.isRequired,promotionID:a.number,promotedSprout:a.string,subtitle:a.string};function q(a){return b("React").createElement("li",{className:"_5xmp"},a.children)}e.exports=c}),null);