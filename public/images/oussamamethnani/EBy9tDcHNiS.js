if (self.CavalryLogger) { CavalryLogger.start_js(["nAfWo"]); }

__d("MessengerGameTopBar.react",["cx","fbt","FRXEntryPoint","FRXURI","InstantGamesEvent","InstantGamesTypedLogger","NFXStoryLocation","PopoverMenu.react","React","ReactXUIMenu","XUICloseButton.react","XUIDotsButton.react","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;var i=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){var a,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(a=d=c.call.apply(c,[this].concat(f))||this,d.$2=function(){return d.$1(b("InstantGamesEvent").MENU_SHOW)},d.$3=function(){return d.$1(b("InstantGamesEvent").MENU_FEEDBACK)},a)||babelHelpers.assertThisInitialized(d)}var d=a.prototype;d.$1=function(a){new(b("InstantGamesTypedLogger"))().setEvent(a).setSource("messenger_spotlight").setAppID(this.props.gameID).log()};d.render=function(){if(!b("gkx")("684469"))return null;var a=b("FRXURI").withEntReportable({reportable_ent_token:this.props.gameID,story_location:b("NFXStoryLocation").INSTANT_GAMES_MESSENGER,entry_point:b("FRXEntryPoint").FEEDBACK_BUTTON});a=b("React").createElement(b("ReactXUIMenu"),null,b("React").createElement(b("ReactXUIMenu").Item,{ajaxify:a,rel:"dialogue",onClick:this.$3},h._("Donner son avis")));return b("React").createElement(b("PopoverMenu.react"),{alignh:"right",menu:a},b("React").createElement(b("XUIDotsButton.react"),{className:"_6yhb",onClick:this.$2,size:"large",shade:"light"}))};return a}(b("React").PureComponent);i.propTypes={gameID:a.string};c=function(a){return b("React").createElement("div",{className:"_6yhc"},b("React").createElement(i,{gameID:a.gameID}),b("React").createElement(b("XUICloseButton.react"),{className:"_6yhb",onClick:a.onClose,shade:"light",size:"large"}))};c.propTypes={gameID:a.string,onClose:a.func};e.exports=c}),null);
__d("MessengerGamesQuicksilverPlayerContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"gameID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"gameID"}],c={kind:"InlineFragment",type:"Application",selections:[{kind:"LinkedField",alias:"gameInfo",name:"instant_game_info",storageKey:null,args:null,concreteType:"GamesInstantPlayStyleInfo",plural:!1,selections:[{kind:"ScalarField",alias:"orientation",name:"game_orientation",args:null,storageKey:null}]}]};return{kind:"Request",fragment:{kind:"Fragment",name:"MessengerGamesQuicksilverPlayerContainerQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[c]}]},operation:{kind:"Operation",name:"MessengerGamesQuicksilverPlayerContainerQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},c]}]},params:{operationKind:"query",name:"MessengerGamesQuicksilverPlayerContainerQuery",id:"1727228563959327",text:null,metadata:{}}}}();e.exports=a}),null);
__d("MessengerGamesRenderGameFailedDialog.react",["fbt","MessengerDialog.react","MessengerDialogBodyReact.bs","MessengerDialogHeaderReact.re","MessengerDialogs.bs","MessengerDialogTitleReact.re","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("MessengerDialogBodyReact.bs").jsComponent,i=b("MessengerDialogHeaderReact.re").component,j=b("MessengerDialogTitleReact.re").component;function a(){return b("React").createElement(b("MessengerDialog.react"),{onToggle:function(a){a||b("MessengerDialogs.bs").removeDialog()}},b("React").createElement(i,null,b("React").createElement(j,null,g._("\u00c9chec de l\u2019action"))),b("React").createElement(h,null,g._("Veuillez fermer le jeu avant d\u2019en d\u00e9marrer un nouveau.")))}e.exports=a}),null);
__d("MessengerMobileWindow.react",["cx","MessengerPhotoViewCloseLink.react","React","SpotlightViewer"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.background,d=a.fontSize,e=a.onHide,f=a.open,g=a.children,h=a.onClose,i=a.sidebar,j=a.topbar;a=babelHelpers.objectWithoutPropertiesLoose(a,["background","fontSize","onHide","open","children","onClose","sidebar","topbar"]);return b("React").createElement(b("SpotlightViewer"),{onHide:e,open:f,rootClassName:"_7yx"+(c==="light"?" _1lwq":"")},b("React").createElement("div",{className:"_3xsg"},b("React").createElement("div",babelHelpers["extends"]({className:"_7yy"},a),b("React").createElement("div",{className:"_7yz"}),b("React").createElement("div",{className:(this.props.orientation==="landscape"?"_pxe":"")+(this.props.orientation==="landscape"&&i?" _466h":"")+(this.props.orientation==="portrait"?" _pxf":"")+(this.props.orientation==="portrait"&&i?" _466r":"")+" _7y-"+(d==="auto"?" _5q__":"")},b("React").createElement("div",{className:"_5uag"},g)),j!==void 0?j:b("React").createElement(b("MessengerPhotoViewCloseLink.react"),{onClick:h,customTooltip:null})),i))};return c}(b("React").Component);c.defaultProps={background:"light",fontSize:"auto",orientation:"portrait"};c.propTypes={background:a.string.isRequired,fontSize:a.string.isRequired,onClose:a.func.isRequired,onHide:a.func.isRequired,open:a.bool.isRequired};e.exports=c}),null);
__d("MessengerGamesQuicksilverPlayerContainer.react",["Arbiter","BootloadOnRender.react","GamesInstantPlaySupportedOrientation","GamesQuicksilverAnalyticsInfo","GamesQuicksilverFunnelLogger","GamesQuicksilverPlayer.react","InstantGamesGateKeepers","JSResource","LazyComponent.react","MercuryConfig","MessengerDialogs.bs","MessengerGamesRenderGameFailedDialog.react","MessengerGameTopBar.react","MessengerMobileWindow.react","QuicksilverSources","React","RelayFBEnvironment","RelayModern","MessengerGamesQuicksilverPlayerContainerQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("GamesQuicksilverFunnelLogger").getDefaultFunnelName;a=b("React").PropTypes;var i=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var j=b("MercuryConfig").ShowInGameChat;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var d,e;for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(d=e=a.call.apply(a,[this].concat(g))||this,e.state={contextSourceID:e.props.initialContextSourceID,contextType:e.props.initialContextType,entryPointData:e.props.initialEntryPointData,gameID:e.props.initialGameID,open:!0,previousGameID:null,source:e.props.initialSource,isGamesQuicksilverPlayerContainerRendered:!1},e.$4=function(){e.setState({open:!1})},e.$5=function(){if(e.$2){e.$2=!1;return}c.$3=null;e.props.onHide()},e.$6=function(a){e.$2=!0,e.setState({contextSourceID:a.contextSourceID,contextType:a.contextType,entryPointData:a.entryPointData,gameID:a.newGameID,previousGameID:a.previousGameID,source:b("QuicksilverSources").GAME_SWITCH})},e.$7=function(a){e.$2=!0,e.setState({contextSourceID:e.props.initialContextSourceID,contextType:e.props.initialContextType,entryPointData:null,gameID:a,previousGameID:null,source:e.props.initialSource})},d)||babelHelpers.assertThisInitialized(e)}var d=c.prototype;d.componentDidMount=function(){this.$1=b("Arbiter").subscribeOnce(["instant_games_quit"],this.$4),c.$3===null&&(c.$3=this),this.setState({isGamesQuicksilverPlayerContainerRendered:this===c.$3})};d.componentWillUnmount=function(){if(this.$1===null)return;b("Arbiter").unsubscribe(this.$1)};d.render=function(){__p&&__p();var a=this;if(b("InstantGamesGateKeepers").messenger_dot_com_instant_games_disabled)return null;if(!this.state.isGamesQuicksilverPlayerContainerRendered&&c.$3!==null&&j){b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(b("MessengerGamesRenderGameFailedDialog.react"),null)});return null}var d=this.props,e=d.sourceID,f=d.invitationID;d=this.state;var k=d.contextSourceID,l=d.contextType,m=d.entryPointData,n=d.gameID,o=d.previousGameID,p=d.source;return b("React").createElement(i,{environment:b("RelayFBEnvironment"),query:g||(g=function(){return b("MessengerGamesQuicksilverPlayerContainerQuery.graphql")}),render:function(c){c.error;c=c.props;if(c){c=(c=c)!=null?(c=c.node)!=null?(c=c.gameInfo)!=null?c.orientation:c:c:c;c=c&&Object.prototype.hasOwnProperty.call(b("GamesInstantPlaySupportedOrientation"),c)?b("GamesInstantPlaySupportedOrientation")[c]:b("GamesInstantPlaySupportedOrientation").PORTRAIT;var d=b("React").createElement(b("BootloadOnRender.react"),{component:b("React").createElement(b("LazyComponent.react"),{gameID:n,onChangeGame:a.$7,threadID:a.props.threadID}),loader:b("JSResource")("MessengerGameSideBar.react").__setRef("MessengerGamesQuicksilverPlayerContainer.react"),placeholder:b("React").createElement("div",null)});return b("React").createElement(b("MessengerMobileWindow.react"),{background:"dark",fontSize:"fixed",onHide:a.$5,onClose:a.$5,open:a.state.open,orientation:c,sidebar:d,topbar:b("React").createElement(b("MessengerGameTopBar.react"),{gameID:n,onClose:a.$5})},b("React").createElement(b("GamesQuicksilverPlayer.react"),{analyticsInfo:new(b("GamesQuicksilverAnalyticsInfo"))(h(),p,e||"",0,f),appId:n,autoplay:!0,blockMobileScroll:!1,contextSourceID:k,contextType:l,enabled:a.props.enabled?a.props.enabled:!0,entryPointData:m,onMessengerGameSwitch:a.$6,previousGameID:o,shouldShowAfterShare:a.props.shouldShowAfterShare?a.props.shouldShowAfterShare:!1,gamesTabInboxUnitLoggingData:a.props.gamesTabInboxUnitLoggingData}))}return b("React").createElement("div",null)},variables:{gameID:this.state.gameID}})};return c}(b("React").PureComponent);c.$3=null;c.propTypes={initialContextSourceID:a.string,initialContextType:a.string.isRequired,initialEntryPointData:a.string,initialGameID:a.string.isRequired,onHide:a.func.isRequired,initialSource:a.string.isRequired,sourceID:a.string,invitationID:a.string};e.exports=c}),null);
__d("GamesPresenceIcon.react",["ix","cx","Image.react","InstantGameContextType","MercuryIDs","MessengerDialogs.bs","MessengerGamesQuicksilverPlayerContainer.react","QuicksilverSources","React","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={playerOpen:!1},d.$1=function(){if(d.state.playerOpen)return;var a=d.props.gameID;if(!a)return;b("MessengerDialogs.bs").showDialog(function(){return d.$2(a)});d.setState({playerOpen:!0})},d.$3=function(){b("MessengerDialogs.bs").removeAllDialogs(),d.setState({playerOpen:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(a){var c=this.props.userID?b("InstantGameContextType").THREAD:b("InstantGameContextType").SOLO,d=this.props.userID;return b("React").createElement(b("MessengerGamesQuicksilverPlayerContainer.react"),{initialContextSourceID:d,initialContextType:c,initialGameID:a,initialSource:b("QuicksilverSources").WWW_CHAT_SIDEBAR_PRESENCE,key:a,onHide:this.$3,sourceID:this.props.userID,threadID:this.props.userID?b("MercuryIDs").getThreadIDFromUserID(this.props.userID):null})};d.render=function(){return b("React").createElement("div",{className:"_46b2"},b("React").createElement(b("Image.react"),{className:"_46b3",onClick:this.$1,src:g("579343")}))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("GamesPresenceIconContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"userID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"userID"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"InlineFragment",type:"User",selections:[{kind:"LinkedField",alias:"activeInstantGame",name:"active_instant_game",storageKey:null,args:null,concreteType:"Application",plural:!1,selections:[c]}]};return{kind:"Request",fragment:{kind:"Fragment",name:"GamesPresenceIconContainerQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[d]}]},operation:{kind:"Operation",name:"GamesPresenceIconContainerQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},c,d]}]},params:{operationKind:"query",name:"GamesPresenceIconContainerQuery",id:"1737971296282322",text:null,metadata:{}}}}();e.exports=a}),null);
__d("GamesPresenceIconContainer.react",["GamesPresenceIcon.react","React","RelayFBEnvironment","RelayModern","GamesPresenceIconContainerQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("RelayModern").QueryRenderer;b("RelayModern").graphql;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this;return b("React").createElement(h,{environment:b("RelayFBEnvironment"),query:g||(g=function(){return b("GamesPresenceIconContainerQuery.graphql")}),render:function(c){c.error;c=c.props;if(c){c=(c=c)!=null?(c=c.node)!=null?(c=c.activeInstantGame)!=null?c.id:c:c:c;return b("React").createElement(b("GamesPresenceIcon.react"),{gameID:c,userID:a.props.userID})}return b("React").createElement(b("GamesPresenceIcon.react"),null)},variables:{userID:this.props.userID}})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("ChatSidebarItemUserPlayingGameInfoContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"userID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"userID"}],c={kind:"LinkedField",alias:"gameInfo",name:"instant_game_info",storageKey:null,args:null,concreteType:"GamesInstantPlayStyleInfo",plural:!1,selections:[{kind:"ScalarField",alias:"iconURI",name:"icon_uri",args:null,storageKey:null},{kind:"ScalarField",alias:"gameName",name:"game_name",args:null,storageKey:null},{kind:"ScalarField",alias:"gameID",name:"instant_game_id",args:null,storageKey:null}]},d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"ChatSidebarItemUserPlayingGameInfoContainerQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"User",selections:[{kind:"LinkedField",alias:"activeInstantGame",name:"active_instant_game",storageKey:null,args:null,concreteType:"Application",plural:!1,selections:[c]}]}]}]},operation:{kind:"Operation",name:"ChatSidebarItemUserPlayingGameInfoContainerQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d,{kind:"InlineFragment",type:"User",selections:[{kind:"LinkedField",alias:"activeInstantGame",name:"active_instant_game",storageKey:null,args:null,concreteType:"Application",plural:!1,selections:[c,d]}]}]}]},params:{operationKind:"query",name:"ChatSidebarItemUserPlayingGameInfoContainerQuery",id:"1798665183548958",text:null,metadata:{}}}}();e.exports=a}),null);
__d("ChatSidebarItemUserPlayingGameInfo.react",["cx","fbt","Image.react","InstantGameContextType","MercuryIDs","MessengerDialogs.bs","MessengerGamesQuicksilverPlayerContainer.react","QuicksilverSources","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={playerOpen:!1},d.$3=function(){b("MessengerDialogs.bs").removeAllDialogs(),d.setState({playerOpen:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this,c=this.props.gameID,d=this.props.gameName,e=this.props.iconURI;return!c||!d||!e?b("React").createElement("div",{className:"_2wi1"},b("React").createElement("div",{className:"_2wi2"},this.props.originalElement)):b("React").createElement("div",{className:"_2wi1"},b("React").createElement("div",{className:"_2wi2"},this.props.originalElement),b("React").createElement("div",{className:"_2wi4",onClick:function(){a.$1(c)},role:"link",tabIndex:"0"},b("React").createElement(b("Image.react"),{src:e,className:"_2wi5"}),b("React").createElement("div",{className:"_2wi6"},h._("Partie en cours")," ",d)))};d.$1=function(a){var c=this;if(this.state.playerOpen)return;b("MessengerDialogs.bs").showDialog(function(){return c.$2(a)});this.setState({playerOpen:!0})};d.$2=function(a){var c=this.props.threadFBID?b("InstantGameContextType").THREAD:b("InstantGameContextType").SOLO,d=this.props.threadFBID;return b("React").createElement(b("MessengerGamesQuicksilverPlayerContainer.react"),{initialContextSourceID:d,initialContextType:c,initialGameID:a,key:a,onHide:this.$3,initialSource:b("QuicksilverSources").WWW_CHAT_SIDEBAR_PRESENCE,sourceID:this.props.threadFBID,threadID:b("MercuryIDs").getThreadIDFromUserID(this.props.threadFBID)})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("ChatSidebarItemUserPlayingGameInfoContainer.react",["ChatSidebarItemUserPlayingGameInfo.react","React","RelayFBEnvironment","RelayModern","ChatSidebarItemUserPlayingGameInfoContainerQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("RelayModern").QueryRenderer;b("RelayModern").graphql;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this,c=this.props,d=c.userID,e=c.originalElement;return b("React").createElement(h,{environment:b("RelayFBEnvironment"),query:g||(g=function(){return b("ChatSidebarItemUserPlayingGameInfoContainerQuery.graphql")}),render:function(c){__p&&__p();c.error;c=c.props;if(c){var d,f;f=(f=c)!=null?(f=f.node)!=null?(f=f.activeInstantGame)!=null?(f=f.gameInfo)!=null?f.iconURI:f:f:f:f;d=(d=c)!=null?(d=d.node)!=null?(d=d.activeInstantGame)!=null?(d=d.gameInfo)!=null?d.gameName:d:d:d:d;c=(c=c)!=null?(c=c.node)!=null?(c=c.activeInstantGame)!=null?(c=c.gameInfo)!=null?c.gameID:c:c:c:c;return b("React").createElement(b("ChatSidebarItemUserPlayingGameInfo.react"),{gameName:d,iconURI:f,gameID:c,originalElement:e,threadFBID:a.props.userID})}return e},variables:{userID:d}})};return c}(b("React").PureComponent);e.exports=a}),null);