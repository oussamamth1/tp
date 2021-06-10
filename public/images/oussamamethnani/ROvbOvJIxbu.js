if (self.CavalryLogger) { CavalryLogger.start_js(["p\/ARO"]); }

__d("FeedPollOverlayFBBTimeStateController",["VideoPlayerLoggerSource","VideoPollsLoggerEvent","VideoPollsTypedLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=Object.freeze({HIDDEN:"Hidden",EXPANDED:"Expanded"});a=function(){__p&&__p();function a(a,c,d,e,f,h,i){__p&&__p();var j=this;this.$11=function(a){a=j.$1.getSource()!==b("VideoPlayerLoggerSource").TAHOE&&j.$12(a.position);a?j.$13(g.EXPANDED):j.$13(g.HIDDEN);return};this.$1=c;this.$5=a;this.$3=d;this.$4=e;this.$7=f;this.$8=!1;this.$9=h;this.$10=i;this.$2=this.$1.addListener("updateStatus",this.$11)}var c=a.prototype;c.registerComponentControl=function(a){this.$6=a};c.destroy=function(){this.$2.remove()};c.$13=function(a){a===g.EXPANDED&&this.$8===!1&&(new(b("VideoPollsTypedLogger"))().setEvent(b("VideoPollsLoggerEvent").WWW_FEED_INLINE_FBB_RENDERED).setVideoPollID(this.$7).setOwnerID(this.$10).setVideoID(this.$9).log(),this.$8=!0),this.$5=a,this.$6(a)};c.$12=function(a){return a>=this.$3&&(this.$4<0||a<this.$4)};return a}();e.exports={FeedPollOverlayFBBTimeStateController:a,FeedPollOverlayFBBViewStates:g}}),null);
__d("FeedPollOverlayFBBPill.react",["cx","fbt","Arbiter","FeedPollOverlayFBBTimeStateController","React","ShimButton.react","VideoPollsLoggerEvent","VideoPollsTypedLogger"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("FeedPollOverlayFBBTimeStateController").FeedPollOverlayFBBTimeStateController,j=b("FeedPollOverlayFBBTimeStateController").FeedPollOverlayFBBViewStates;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={viewState:j.HIDDEN,stateController:new i(j.HIDDEN,b.props.vpc,b.props.startTimeStamp,b.props.endTimeStamp,b.props.pollID,b.props.videoID,b.props.ownerID),hasViewerEverVoted:b.props.hasViewerEverVoted};b.$1=!1;b.$2=b.state.stateController;return b}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$2.registerComponentControl(function(b){a.setState({viewState:b})});var c=function(b,c){return a.setState({hasViewerEverVoted:!0})};b("Arbiter").subscribe("PollTaken"+this.props.pollID,c)};d.componentWillUnmount=function(){this.$2.destroy()};d.expandVideo=function(){var a={pluginID:"VOD_"+String(this.props.startTimeStamp)};b("Arbiter").inform("FeedPollPillClicked",a);new(b("VideoPollsTypedLogger"))().setEvent(b("VideoPollsLoggerEvent").WWW_FEED_INLINE_FBB_CLICKED).setVideoPollID(this.props.pollID).setOwnerID(this.props.ownerID).setVideoID(this.props.videoID).log();this.props.vpc.clickVideo()};d.render=function(){var a=null;this.state.viewState===j.EXPANDED&&(a=this.state.hasViewerEverVoted?b("React").createElement(b("ShimButton.react"),{onClick:this.expandVideo.bind(this),className:"_7b8l"},b("React").createElement("div",{className:"_7b90"},b("React").createElement("i",{className:"_7b91"}))):b("React").createElement(b("ShimButton.react"),{onClick:this.expandVideo.bind(this),className:"_7b8l"},b("React").createElement("div",{className:"_7b92"},b("React").createElement("div",{className:"_7b93"},b("React").createElement("i",{className:"_7b91"})),b("React").createElement("div",{className:"_7b94"},h._("R\u00e9pondre au sondage")))));return a};return c}(b("React").Component);e.exports=a}),null);