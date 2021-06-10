if (self.CavalryLogger) { CavalryLogger.start_js(["pKA6H"]); }

__d("RTCCallType",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({AUDIO_ONLY:"AUDIO_ONLY",VIDEO_ONLY:"VIDEO_ONLY",AUDIO_VIDEO:"AUDIO_VIDEO",NO_AUDIO_VIDEO:"NO_AUDIO_VIDEO"});e.exports=a}),null);
__d("MediaStream",[],(function(a,b,c,d,e,f){e.exports=window.MediaStream||window.webkitMediaStream}),null);
__d("RTCAudio.react",["cx","FBRTCUtils","MediaStream","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PureComponent;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this;return b("React").createElement("audio",{autoPlay:!0,className:b("joinClasses")(this.props.className,"_8md"),controls:!1,muted:this.props.muted,ref:function(b){return a.$1=b}})};d.componentDidMount=function(){this.$2(),this.$3()};d.$2=function(){__p&&__p();if(!this.$1)return;var a=this.props.mediaStream;if(a&&a.getVideoTracks().length>0){var c=new(b("MediaStream"))();for(var d=a.getAudioTracks(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;c.addTrack(g)}b("FBRTCUtils").attachMediaStream(this.$1,c)}else b("FBRTCUtils").attachMediaStream(this.$1,a)};d.$3=function(){if(!this.$1)return;var a=this.props.audioSinkID;a&&this.$1.setSinkId&&this.$1.setSinkId(a)};d.componentDidUpdate=function(a){var b=a.audioSinkID;a=a.mediaStream;a!==this.props.mediaStream&&this.$2();b!==this.props.audioSinkID&&this.$3()};return c}(a);c.defaultProps={muted:!1};e.exports=c}),null);
__d("RTCIncallAudio.react",["React","RTCAudio.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PureComponent;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.audioSinkID;a.className;var d=a.mediaStream;a=babelHelpers.objectWithoutPropertiesLoose(a,["audioSinkID","className","mediaStream"]);return b("React").createElement("div",a,b("React").createElement(b("RTCAudio.react"),{audioSinkID:c,mediaStream:d}))};return c}(a);e.exports=c}),null);
__d("BanzaiScribe",["Banzai"],(function(a,b,c,d,e,f){function a(a){return{log:function(c,d,e){d=[d];e!=null&&d.push(e);b("Banzai").post("scribe:"+c,d,a)}}}c=a({});c.create=a;e.exports=c}),null);
__d("SamplingPolicyBase",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){throw new Error("Tried to instantiate SamplingPolicyBase")}var b=a.prototype;b.getName=function(){return this.name};b.isSampled=function(){typeof this.sampled==="undefined"&&(this.sampled=this.decideIfSampled());return this.sampled};return a}();e.exports=a}),null);
__d("FbtraceForcedByServerPolicy",["FbtraceForcedByServer","SamplingPolicyBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(){this.name="FbtraceForcedByServerPolicy"}h.get=function(){typeof g==="undefined"&&(g=new h());return g};function a(){return b("FbtraceForcedByServer").forced}Object.assign(h.prototype,b("SamplingPolicyBase").prototype,{decideIfSampled:a});e.exports=h}),null);
__d("guardFunction",[],(function(a,b,c,d,e,f){function a(a,b,c){return function(){a.apply(c||this,arguments)&&b.apply(c||this,arguments)}}e.exports=a}),null);
__d("Fbtrace",["Arbiter","ArtilleryTraceIDUtils","BanzaiScribe","FbtraceForcedByServer","FbtraceForcedByServerPolicy","SiteData","guardFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(){Object.assign(this,g)}Object.assign(g,{isOn:function(){return!1},replySend:function(a,b){},requestSend:function(a,b,c){l(a,b);return{metadata:function(){return void 0},replyReceive:function(a){}}}});var h=new g();function i(a,c,d){__p&&__p();if(!a)throw{name:"ArgumentError",message:"no valid service name specified"};if(!c)throw{name:"ArgumentError",message:"no valid version specified"};var e=b("BanzaiScribe"),f=0,g=b("ArtilleryTraceIDUtils").newTraceId(),h=b("ArtilleryTraceIDUtils").newObjectId(),j=b("ArtilleryTraceIDUtils").traceIdToBucket(g),k={service:a,version:c},m=function a(b){if(typeof b==="undefined")return"undefined";typeof b!=="string"&&(b=a(JSON.stringify(b)));return b},n=function(a){var b="";for(var c in a)b.length>0&&(b+="\x02"),b+=m(c)+"\x03"+m(a[c]);return b},o=function(c,b,d,a,e){f++;return[e,f,g,c,b,m(d),n(a)].join("\x01")},p=function(c,b,d,a,f){!f&&typeof f==="undefined"&&(f=Date.now()*1e3);c=o(c,b,d,a,f);e.log("fbtrace",c,j)},q=function(){return h};p(b("ArtilleryTraceIDUtils").getDummyId(),h,"#rqrecv",Object.assign(d||{},k));Object.assign(this,i,{replySend:function(c,a){a=babelHelpers["extends"]({},a,k,{success:c?"true":"false"}),p(b("ArtilleryTraceIDUtils").getDummyId(),h,"#rpsend",a)},requestSend:function(d,e,a){l(d,e);var f=q(),c=b("ArtilleryTraceIDUtils").newObjectId();a=babelHelpers["extends"]({},a,k,{op:d,"remote:service":e});p(f,c,"#rqsend",a);return{metadata:function(){return g+c},replyReceive:function(a){p(f,c,"#rprecv",Object.assign(a||{},k))},parentNode:this}}})}Object.assign(i,{isOn:function(){return!0}});function j(){return h}function k(a,c,d){d=d||{};d.init=!0;var e=b("FbtraceForcedByServerPolicy").get();if(e.isSampled())return new i(a,c,d);else return new g()}function l(a,b){if(!a)throw{name:"ArgumentError",message:"no valid operation specified"};if(!b)throw{name:"ArgumentError",message:"no valid remote:service specified"}}function a(a,b){var c=h;h=a;try{a=b()}finally{h=c}return a}c=function(a,c){__p&&__p();a=j();c=c.request;var d=!1;!a.isOn()&&b("FbtraceForcedByServer").forced&&/\/upload\/(?:composer|photos)\/|\/ajax\/composerx\/attachment\/media\//.test(c.uri.toString())&&(a=k("photo_upload_kludge",String(b("SiteData").client_revision||"dev"),{policy:"PhotoUpload"}),d=!0);if(a.isOn()){d=d?{policy:"PhotoUpload"}:{};c.userActionId&&(d.user_action_id=c.userActionId);a=a.requestSend(c.uri.toString(),"www",d);c.fbtraceRemoteNode=a;c.transport.setRequestHeader("X-Fbtrace-Meta",a.metadata())}};d=function(a,b){b.request.fbtraceRemoteNode.replyReceive({is_last:b.response.is_last,success:!0}),setTimeout(function(){b.request.fbtraceRemoteNode.parentNode.replySend(!0,{})},0)};f=function(a,b){b.request.fbtraceRemoteNode.replyReceive({is_last:b.response.is_last,success:!1,error_code:b.response.error,error_summary:b.response.errorSummary,error_description:b.response.errorDescription}),setTimeout(function(){b.request.fbtraceRemoteNode.parentNode.replySend(!1,{})},0)};var m=function(a,b){return b.request.fbtraceRemoteNode};b("Arbiter").subscribe("AsyncRequest/will_send",c);b("Arbiter").subscribe("AsyncRequest/response",b("guardFunction")(m,d));b("Arbiter").subscribe("AsyncRequest/error",b("guardFunction")(m,f));e.exports={defaultNode:j,requestReceive:k,withDefaultNode:a}}),null);
__d("ResizeListener",["EventListener","SubscriptionList","requestAnimationFrame"],(function(a,b,c,d,e,f){"use strict";var g,h=!1,i=new(b("SubscriptionList"))(function(){g=b("EventListener").listen(window,"resize",j)},function(){g.remove()});function j(){h||(h=!0,b("requestAnimationFrame")(function(){i.fireCallbacks(),h=!1}))}e.exports=i}),null);
__d("memoizeLastByArgs",["MemoizationInstrumentation","shallowArrayEqual"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=c||a.name||"unknown",f=null;c=function(){__p&&__p();for(var c=arguments.length,g=new Array(c),h=0;h<c;h++)g[h]=arguments[h];var i=b("MemoizationInstrumentation").onFunctionCall(e.id,d),j=!0;if(!(f!=null&&b("shallowArrayEqual")(g,f.args))){j=!1;var k=a.apply(void 0,g);f==null?f={args:g,ret:k}:(f.args=g,f.ret=k)}i&&i(j);return f.ret};return c}e.exports=a}),null);