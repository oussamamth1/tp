if (self.CavalryLogger) { CavalryLogger.start_js(["RWiyT"]); }

__d("AdsInstagramFields",["errorCode"],(function(a,b,c,d,e,f,g){"use strict";a={INSTAGRAM_ACCOUNT_ERROR_KEYS:new Set([1815199,1815238,1815207,1772103]),INSTAGRAM_LEAD_FORM_ERROR_KEYS:new Set([1815482,1815458,1815463]),INSTAGRAM_SPECIFIC_IMAGE_ERROR_KEYS:new Set([2016004,2016005,2016007,2016006,1772069,1772077,1772073,1772130]),INSTAGRAM_SPECIFIC_PAGE_POST_ERROR_KEYS:new Set([1815390]),INSTAGRAM_SPECIFIC_CTA_ERROR_KEYS:new Set([1772081]),INSTAGRAM_SPECIFIC_DESTINATION_ERROR_KEYS:new Set([1815605,1772139,1815294]),INSTAGRAM_VIDEO_ERROR_KEYS:new Set([2016008,2238019,2238028,2238018,1772074,1772076,1772130,1772048,1772049,1772122,1772171,1772173,1772095,1772063])};e.exports=a}),null);
__d("AdsUEditorContextType",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c={hostID:a.string.isRequired,adgroupIDsForSelectedCampaignGroupsSelector:a.func.isRequired,adgroupsForSelectedCampaignGroupsSelector:a.func.isRequired,campaignIDsForSelectedCampaignGroupsSelector:a.func.isRequired,campaignsForSelectedCampaignGroupsSelector:a.func.isRequired,campaignGroupSelector:a.func.isRequired,campaignGroupCombinedErrorsSelector:a.func.isRequired,campaignGroupCrossValidationErrorsSelector:a.func.isRequired,campaignGroupErrorsSelector:a.func.isRequired,campaignGroupPublishStatusSelector:a.func.isRequired,selectedCampaignGroupIDsSelector:a.func.isRequired,selectedCampaignGroupsSelector:a.func.isRequired};d=babelHelpers["extends"]({},c,{adgroupIDsForSelectedCampaignsSelector:a.func.isRequired,adgroupsForSelectedCampaignsSelector:a.func.isRequired,campaignSelector:a.func.isRequired,campaignCombinedErrorsSelector:a.func.isRequired,campaignErrorsSelector:a.func.isRequired,campaignPublishStatusSelector:a.func.isRequired,selectedCampaignIDsSelector:a.func.isRequired,selectedCampaignsSelector:a.func.isRequired,selectedRawCampaignsSelector:a.func.isRequired});f=babelHelpers["extends"]({},d,{adgroupSelector:a.func.isRequired,adgroupPublishStatusSelector:a.func.isRequired,adgroupCombinedErrorsSelector:a.func.isRequired,adgroupErrorsSelector:a.func.isRequired,adgroupErrorMessageSpecSelector_DEPRECATED:a.func.isRequired,customSelectors_ASK_ACE_TEAM_BEFORE_USING:a.shape({isSlideshowSelectedSelector:a.func.isRequired}),selectedAdgroupIDsSelector:a.func.isRequired,selectedAdgroupsSelector:a.func.isRequired});e.exports=babelHelpers["extends"]({campaignGroup:{campaignGroupEditorContext:a.shape(c)},campaign:{campaignEditorContext:a.shape(d)},adgroup:{adgroupEditorContext:a.shape(f)}},{})}),null);
__d("GradientBox.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;var h={up:"_344j",left:"_344k",down:"_344l",right:"_344m"},i={white:"_344n",black:"_344o"};c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("joinClasses")(h[this.props.direction],i[this.props.color]);return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a)}))};return c}(b("React").Component);c.propTypes={direction:a.oneOf(["up","down","right","left"]),color:a.oneOf(["black","white"])};c.defaultProps={direction:"right",color:"black"};e.exports=c}),null);
__d("StoreAndPropBasedStateMixin",["invariant","FluxMixinLegacyInstrumentation","StoreBasedStateMixinHelper","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("FluxMixinLegacyInstrumentation").addInstrumentation({_callCalculateState:function(a){return this.constructor.calculateState(a)},getInitialState:function(){this._onInitialStateForInstrumentation&&this._onInitialStateForInstrumentation();return this._callCalculateState(this.props)},UNSAFE_componentWillMount:function(){__p&&__p();var a=this;this.constructor.calculateState||g(0,3582);this._recalculateStateID=null;var d=function(){if(a.isMounted()){var b=a._collectStoreEmitsForInstrumentation?a._collectStoreEmitsForInstrumentation():null,c=a._callCalculateState(a.props),d=a._getCurrentDispatchForInstrumentation&&a._getCurrentDispatchForInstrumentation();a.setState(a._logStoreEmitsForInstrumentation!=null?function(){b!=null&&a._logStoreEmitsForInstrumentation&&a._logStoreEmitsForInstrumentation(b,d);return c}:c)}a._recalculateStateID=null};this._mixin=new(b("StoreBasedStateMixinHelper"))(c);this._mixin.subscribeCallback(function(){a._recalculateStateID===null&&(a._recalculateStateID=b("setImmediate")(d))},this._addStoreEmitForInstrumentation)},UNSAFE_componentWillReceiveProps:function(a){var b=this,c=this._callCalculateState(a),d=this._getCurrentDispatchForInstrumentation&&this._getCurrentDispatchForInstrumentation();this.setState(this._onReceivePropsForInstrumentation?function(){b._onReceivePropsForInstrumentation&&b._onReceivePropsForInstrumentation(d);return c}:c)},componentWillUnmount:function(){this._mixin&&this._mixin.release(),this._mixin=null}})};e.exports=a}),null);
__d("DraftTreeAdapter",["invariant","generateRandomKey"],(function(a,b,c,d,e,f,g){__p&&__p();var h=function(a,b){a=[].concat(a).reverse();while(a.length){var c=a.pop();b(c);c=c.children;Array.isArray(c)||g(0,2517);a=a.concat([].concat(c.reverse()))}},i=function(a){if(!(a&&a.type))return!1;a=a.type;return a==="unordered-list-item"||a==="ordered-list-item"},j=function(a){Array.isArray(a.children)&&(a.children=a.children.map(function(b){return b.type===a.type?babelHelpers["extends"]({},b,{depth:(a.depth||0)+1}):b}))};a={fromRawTreeStateToRawState:function(a){__p&&__p();var b=a.blocks,c=[];Array.isArray(b)||g(0,2518);if(!Array.isArray(b)||!b.length)return a;h(b,function(a){var b=babelHelpers["extends"]({},a);if(i(a)){b.depth=b.depth||0;j(a);if(a.children!=null&&a.children.length>0)return}delete b.children;c.push(b)});a.blocks=c;return babelHelpers["extends"]({},a,{blocks:c})},fromRawStateToRawTreeState:function(a){__p&&__p();var c=[],d=[];a.blocks.forEach(function(a){__p&&__p();var e=i(a),f=a.depth||0,g=babelHelpers["extends"]({},a,{children:[]});if(!e){c.push(g);return}e=d[0];if(e==null&&f===0)c.push(g);else if(e==null||e.depth<f-1){a={key:b("generateRandomKey")(),text:"",depth:f-1,type:a.type,children:[],entityRanges:[],inlineStyleRanges:[]};d.unshift(a);f===1?c.push(a):e!=null&&e.children.push(a);a.children.push(g)}else if(e.depth===f-1)e.children.push(g);else{while(e!=null&&e.depth>=f)d.shift(),e=d[0];f>0?e.children.push(g):c.push(g)}});return babelHelpers["extends"]({},a,{blocks:c})}};e.exports=a}),null);
__d("DraftTreeInvariants",["warning"],(function(a,b,c,d,e,f){__p&&__p();a={isValidBlock:function(a,c){__p&&__p();var d=a.getKey(),e=a.getParentKey();if(e!=null){e=c.get(e);if(!e.getChildKeys().includes(d)){b("warning")(!0,"Tree is missing parent -> child pointer on %s",d);return!1}}e=a.getChildKeys().map(function(a){return c.get(a)});if(!e.every(function(a){return a.getParentKey()===d})){b("warning")(!0,"Tree is missing child -> parent pointer on %s",d);return!1}e=a.getPrevSiblingKey();if(e!=null){var f=c.get(e);if(f.getNextSiblingKey()!==d){b("warning")(!0,"Tree is missing nextSibling pointer on %s's prevSibling",d);return!1}}f=a.getNextSiblingKey();if(f!=null){var g=c.get(f);if(g.getPrevSiblingKey()!==d){b("warning")(!0,"Tree is missing prevSibling pointer on %s's nextSibling",d);return!1}}if(f!==null&&e!==null&&e===f){b("warning")(!0,"Tree has a two-node cycle at %s",d);return!1}if(a.text!=""&&a.getChildKeys().size>0){b("warning")(!0,"Leaf node %s has children",d);return!1}return!0},isConnectedTree:function(a){__p&&__p();var c=a.toArray().filter(function(a){return a.getParentKey()==null&&a.getPrevSiblingKey()==null});if(c.length!==1){b("warning")(!0,"Tree is not connected. More or less than one first node");return!1}c=c.shift();var d=0;c=c.getKey();var e=[];while(c!=null){var f=a.get(c),g=f.getChildKeys(),h=f.getNextSiblingKey();if(g.size>0){h!=null&&e.unshift(h);h=g.map(function(b){return a.get(b)});g=h.find(function(a){return a.getPrevSiblingKey()==null});if(g==null){b("warning")(!0,"%s has no first child",c);return!1}c=g.getKey()}else f.getNextSiblingKey()!=null?c=f.getNextSiblingKey():c=e.shift();d++}if(d!==a.size){b("warning")(!0,"Tree is not connected. %s nodes were seen instead of %s",d,a.size);return!1}return!0},isValidTree:function(a){var b=this,c=a.toArray();return!c.every(function(c){return b.isValidBlock(c,a)})?!1:this.isConnectedTree(a)}};e.exports=a}),null);
__d("createCharacterList",["CharacterMetadata","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").List;function a(a,c){a=a.map(function(a,d){d=c[d];return b("CharacterMetadata").create({style:a,entity:d})});return g(a)}e.exports=a}),null);
__d("decodeEntityRanges",["UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("UnicodeUtils").substr;function a(a,b){var c=Array(a.length).fill(null);b&&b.forEach(function(b){var d=g(a,0,b.offset).length,e=d+g(a,b.offset,b.length).length;for(var d=d;d<e;d++)c[d]=b.key});return c}e.exports=a}),null);
__d("decodeInlineStyleRanges",["immutable","UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("immutable").OrderedSet;var g=b("UnicodeUtils").substr,h=c();function a(a,b){var c=Array(a.length).fill(h);b&&b.forEach(function(b){var d=g(a,0,b.offset).length,e=d+g(a,b.offset,b.length).length;while(d<e)c[d]=c[d].add(b.style),d++});return c}e.exports=a}),null);
__d("convertFromRawToDraftState",["invariant","ContentBlock","ContentBlockNode","ContentState","DraftEntity","DraftTreeAdapter","DraftTreeInvariants","SelectionState","createCharacterList","decodeEntityRanges","decodeInlineStyleRanges","generateRandomKey","gkx","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("gkx")("676842"),i=b("immutable").List,j=b("immutable").Map,k=b("immutable").OrderedMap,l=function(a,c){var d=a.key,e=a.type,f=a.data,g=a.text,h=a.depth;g={text:g,depth:h||0,type:e||"unstyled",key:d||b("generateRandomKey")(),data:j(f),characterList:m(a,c)};return g},m=function(a,c){var d=a.text,e=a.entityRanges;a=a.inlineStyleRanges;e=e||[];a=a||[];return b("createCharacterList")(b("decodeInlineStyleRanges")(d,a),b("decodeEntityRanges")(d,e.filter(function(a){return Object.prototype.hasOwnProperty.call(c,a.key)}).map(function(a){return babelHelpers["extends"]({},a,{key:c[a.key]})})))},n=function(a){return babelHelpers["extends"]({},a,{key:a.key||b("generateRandomKey")()})},o=function(a,b,c){b=b.map(function(a){return babelHelpers["extends"]({},a,{parentRef:c})});return a.concat(b.reverse())},p=function(a,c){__p&&__p();return a.map(n).reduce(function(d,e,f){__p&&__p();Array.isArray(e.children)||g(0,5197);var h=e.children.map(n);e=new(b("ContentBlockNode"))(babelHelpers["extends"]({},l(e,c),{prevSibling:f===0?null:a[f-1].key,nextSibling:f===a.length-1?null:a[f+1].key,children:i(h.map(function(a){return a.key}))}));d=d.set(e.getKey(),e);f=o([],h,e);while(f.length>0){h=f.pop();e=h.parentRef;var j=e.getChildKeys(),k=j.indexOf(h.key),m=Array.isArray(h.children);if(!m){m||g(0,5197);break}m=h.children.map(n);h=new(b("ContentBlockNode"))(babelHelpers["extends"]({},l(h,c),{parent:e.getKey(),children:i(m.map(function(a){return a.key})),prevSibling:k===0?null:j.get(k-1),nextSibling:k===j.size-1?null:j.get(k+1)}));d=d.set(h.getKey(),h);f=o(f,m,h)}return d},k())},q=function(a,c){return k(a.map(function(a){a=new(b("ContentBlock"))(l(a,c));return[a.getKey(),a]}))},r=function(a,c){var d=a.blocks.find(function(a){return Array.isArray(a.children)&&a.children.length>0}),e=h&&!d?b("DraftTreeAdapter").fromRawStateToRawTreeState(a).blocks:a.blocks;if(!h)return q(d?b("DraftTreeAdapter").fromRawTreeStateToRawState(a).blocks:e,c);d=p(e,c);return d},s=function(a){var c=a.entityMap,d={};Object.keys(c).forEach(function(a){var e=c[a],f=e.type,g=e.mutability;e=e.data;d[a]=b("DraftEntity").__create(f,g,e||{})});return d};a=function(a){Array.isArray(a.blocks)||g(0,5199);var c=s(a);a=r(a,c);var d=a.isEmpty()?new(b("SelectionState"))():b("SelectionState").createEmpty(a.first().getKey());return new(b("ContentState"))({blockMap:a,entityMap:c,selectionBefore:d,selectionAfter:d})};e.exports=a}),null);
__d("decodeBlocks",["ComposedBlockType","ComposedInlineStyle","convertFromRawToDraftState","mapObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){a=a.map(function(a){var b=a.type,c=a.inlineStyleRanges;a=babelHelpers.objectWithoutPropertiesLoose(a,["type","inlineStyleRanges"]);return babelHelpers["extends"]({type:g[b]||"unstyled",inlineStyleRanges:(c||[]).map(function(a){return babelHelpers["extends"]({},a,{style:h[a.style]})})},a)});c=b("mapObject")(c,function(a){return{type:a.getType(),mutability:a.getMutability(),data:a.getData()}});return b("convertFromRawToDraftState")({blocks:a,entityMap:c})}var g={};g[b("ComposedBlockType").UNSTYLED]="unstyled";g[b("ComposedBlockType").PARAGRAPH]="paragraph";g[b("ComposedBlockType").BLOCKQUOTE]="blockquote";g[b("ComposedBlockType").ORDERED_LIST_ITEM]="ordered-list-item";g[b("ComposedBlockType").UNORDERED_LIST_ITEM]="unordered-list-item";g[b("ComposedBlockType").CODE]="code-block";g[b("ComposedBlockType").HEADER_ONE]="header-one";g[b("ComposedBlockType").HEADER_TWO]="header-two";g[b("ComposedBlockType").MEDIA]="atomic";g[b("ComposedBlockType").PULLQUOTE]="pullquote";var h={};h[b("ComposedInlineStyle").BOLD]="BOLD";h[b("ComposedInlineStyle").CODE]="CODE";h[b("ComposedInlineStyle").ITALIC]="ITALIC";h[b("ComposedInlineStyle").STRIKETHROUGH]="STRIKETHROUGH";h[b("ComposedInlineStyle").UNDERLINE]="UNDERLINE";e.exports=a}),null);