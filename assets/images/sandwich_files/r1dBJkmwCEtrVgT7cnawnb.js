;/*FB_PKG_DELIM*/

__d("CometNotificationsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6459056614213709"}),null);
__d("CometNotificationsRootQuery$Parameters",["CometNotificationsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometNotificationsRootQuery_facebookRelayOperation"),metadata:{},name:"CometNotificationsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometListCellHoverActions.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={action:{marginStart:"x1i64zmx",$$css:!0},menuButtonContainer:{display:"x78zum5",pointerEvents:"x67bb7w",position:"x10l6tqk",top:"xwa60dl",transform:"x1cb1t30",$$css:!0},menuButtonContainerFar:{end:"x84fkku",$$css:!0},menuButtonContainerNear:{end:"x1923su1",$$css:!0},visuallyHidden:{WebkitClipPath:"xqvhz8l",clip:"x1qvwoe0",clipPath:"xd0x92v",height:"xjm9jq1",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"x1i1rx1s",$$css:!0}};function a(a){var b=a.children,d=a.hidden;a=a.showNear;return h.jsx("div",{className:c("stylex")(i.menuButtonContainer,a===!0?i.menuButtonContainerNear:i.menuButtonContainerFar,d&&i.visuallyHidden),children:Array.isArray(b)?b.filter(function(a){return a!=null}).map(function(a,b){return h.jsx("div",{className:"x1i64zmx",children:a},b)}):b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometListCellHoverButton.react",["fbt","ix","CometCircleButton.react","CometDeferredPopoverTrigger.react","CometEntryPointPopoverTrigger.react","CometLazyPopoverTrigger.react","FocusWithinHandler.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useCallback,l={buttonShadow:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",boxShadow:"x10xjkym",$$css:!0}};function a(a){var b=a.label,e=a.onFocusChange,f=a.onHoverChange,g=a.onMenuStateChange,m=a.onPress,n=a.size,o=a.testid,p=k(function(a){g!=null&&g(a)},[g]),q=k(function(a,g,k,o,p){return j.jsx("div",{ref:a,children:j.jsx(c("FocusWithinHandler.react"),{onFocusChange:e,children:function(a){return j.jsx("div",{className:c("stylex")(!a&&l.buttonShadow),children:j.jsx(c("CometCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("484387"),20),label:b!=null?b:h._("__JHASH__oYmrdmuxyrt__JHASH__"),onHoverIn:function(a){k&&k(a),f&&f(!0)},onHoverOut:function(){o&&o(),f&&f(!1)},onPress:function(){m&&m(),g()},onPressIn:p,size:(a=n)!=null?a:36,testid:void 0,type:"overlay"})})}})})},[e,b,f,m,o,n]);o={align:"middle",fallback:a.popoverFallback,onVisibilityChange:p,popoverProps:a.popoverProps,position:"below"};if(a.popoverTriggerType==="lazy")return j.jsx(c("CometLazyPopoverTrigger.react"),babelHelpers["extends"]({},o,{popoverResource:a.popoverResource,children:function(a,b){return q(a,b)}}));else if(a.popoverTriggerType==="entryPoint"){p=o.popoverProps;var r=babelHelpers.objectWithoutPropertiesLoose(o,["popoverProps"]);return j.jsx(c("CometEntryPointPopoverTrigger.react"),babelHelpers["extends"]({},r,{entryPointParams:a.entryPointParams,otherProps:p,popoverEntryPoint:a.popoverEntryPoint,preloadTrigger:"button_aggressive",children:function(a,b,c,d,e,f){return q(a,b,d,e,f)}}))}else return j.jsx(c("CometDeferredPopoverTrigger.react"),babelHelpers["extends"]({},o,{popoverResource:a.popoverResource,children:function(a,b){return q(a,b)}}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometNotificationsMutationLogger",["QuickPerformanceLogger","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h=c("qpl")._(3473469,"7351"),i="client_action",j="status",k="seen_state",l=0;function m(a,b){var d;b===void 0&&(b=null);var e=l++;c("QuickPerformanceLogger").markerStart(h,e);c("QuickPerformanceLogger").markerAnnotate(h,{string:(d={},d[i]=a,d)},{instanceKey:e});c("QuickPerformanceLogger").markerAnnotate(h,{string:(a={},a[j]="started",a)},{instanceKey:e});c("QuickPerformanceLogger").markerAnnotate(h,{string:{environment:"MAIN_SURFACE"}},{instanceKey:e});if(b){c("QuickPerformanceLogger").markerAnnotate(h,{string:(d={},d[k]=b,d)},{instanceKey:e})}return p(e)}function n(a){var b;c("QuickPerformanceLogger").markerAnnotate(h,{string:(b={},b[j]="success",b)},{instanceKey:a});c("QuickPerformanceLogger").markerEnd(h,2,a)}function o(a,b){c("QuickPerformanceLogger").markerAnnotate(h,{string:{status:"error"}},{instanceKey:a}),c("QuickPerformanceLogger").markerAnnotate(h,{string:{error_localized_description:b==null?void 0:b.message}},{instanceKey:a}),c("QuickPerformanceLogger").markerAnnotate(h,{string:{error_domain:b==null?void 0:b.name}},{instanceKey:a}),c("QuickPerformanceLogger").markerEnd(h,87,a)}function p(a){return{logOnError:function(b){return o(a,b)},logOnSuccess:function(){return n(a)}}}function a(){return m("HIDE")}function b(){return m("MARK_ALL_AS_READ")}function d(){return m("MARK_ALL_AS_SEEN")}function e(a){return m("MARK_AS_READ",a)}function f(){return m("MARK_AS_SEEN")}function q(a){return m("MARK_AS_UNREAD",a)}function r(){return m("UNHIDE")}g.notificationHideStart=a;g.notificationMarkAllAsReadStart=b;g.notificationMarkAllAsSeenStart=d;g.notificationMarkAsReadStart=e;g.notificationMarkAsSeenStart=f;g.notificationMarkAsUnreadStart=q;g.notificationUnhideStart=r}),98);
__d("NotificationsStoriesEnvironmentConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({MAIN_SURFACE:"MAIN_SURFACE",COMET_DESKTOP:"COMET_DESKTOP",MOBILE:"MOBILE",MOBILE_WIDGET:"MOBILE_WIDGET",LOCKSCREEN_WIDGET:"LOCKSCREEN_WIDGET",PUSH:"PUSH",EMAIL:"EMAIL",BEEPER:"BEEPER",NOTIF_HEAD:"NOTIF_HEAD",CONVERSATION_HUB:"CONVERSATION_HUB",SERVER:"SERVER",TEST:"TEST",INTERN_NOTIFS:"INTERN_NOTIFS",UNKNOWN:"UNKNOWN",ADS_UNIFIED_NAV:"ADS_UNIFIED_NAV",ADS_MANAGER_APP:"ADS_MANAGER_APP",PAGES:"PAGES",IPHONE_IMMERSIVE:"IPHONE_IMMERSIVE",GROUPS:"GROUPS",GROUPS_SOCIAL:"GROUPS_SOCIAL",GROUPS_TAB:"GROUPS_TAB",GROUP_ADDS:"GROUP_ADDS",FACEBOOK_ANALYTICS:"FACEBOOK_ANALYTICS",FACEBOOK_MENTIONS:"FACEBOOK_MENTIONS",EVENTS:"EVENTS",MARKETPLACE:"MARKETPLACE",GAMES_DESKTOP:"GAMES_DESKTOP",VIDEO_HOME:"VIDEO_HOME",VIDEO_APP:"VIDEO_APP",WATCH_QUEUE:"WATCH_QUEUE",MESSENGER_ACTIVITY_TAB:"MESSENGER_ACTIVITY_TAB",MESSENGER_PEOPLE_TAB:"MESSENGER_PEOPLE_TAB",PAGE_ADMIN_FILTER:"PAGE_ADMIN_FILTER",PAGE_ADMIN_RICH_UPDATES:"PAGE_ADMIN_RICH_UPDATES",MENTION_FILTER:"MENTION_FILTER",WATCH:"WATCH",GAMING_APP:"GAMING_APP",GAMES_APP_TOP_UNIT:"GAMES_APP_TOP_UNIT",GAMES_TAB:"GAMES_TAB",KOTOTORO_APP:"KOTOTORO_APP",CARDIEM_SURFACE:"CARDIEM_SURFACE",JOBS:"JOBS",INTL_LOCPLAT:"INTL_LOCPLAT",DEVSITE:"devsite",CREATOR_STUDIO:"CREATOR_STUDIO",CREATOR_STUDIO_MOBILE:"CREATOR_STUDIO_MOBILE",CPX_INSIGHTS_RECOMMENDATIONS:"CPX_INSIGHTS_RECOMMENDATIONS",BUSINESS_HOME:"BUSINESS_HOME",BIZAPP_ALERT:"BIZAPP_ALERT",BIZAPP:"BIZAPP",BIZ_NOTIFICATION:"BIZ_NOTIFICATION",DATING_INACTIVE_USER_WATERFALL:"DATING_INACTIVE_USER_WATERFALL",NEWS_TAB:"NEWS_TAB",NEWS_TAB_NOTIF_SHEET:"NEWS_TAB_NOTIF_SHEET",DATING_TAB:"DATING_TAB",TODAY_IN:"TODAY_IN",MEMORIES:"MEMORIES",FRIENDS_TAB:"FRIENDS_TAB",IG_TOURNAMENT_MENU:"IG_TOURNAMENT_MENU",CORONAVIRUS_HUB_TAB:"CORONAVIRUS_HUB_TAB",PAGE_TAB_BADGING:"PAGE_TAB_BADGING",NEIGHBORHOODS_TAB:"NEIGHBORHOODS_TAB",CAMPUS_TAB:"CAMPUS_TAB",SHOP_TAB:"SHOP_TAB",DIRECT_SUPPORT_ADMIN_PANEL:"DIRECT_SUPPORT_ADMIN_PANEL",PRODASH_TAB:"PRODASH_TAB",BUSINESS_CONSOLE:"BUSINESS_CONSOLE",WORKSTREAM:"WORKSTREAM",PREVIEW:"PREVIEW",MOBILE_CENTER_TAB:"MOBILE_CENTER_TAB",FB_SHORTS_TAB:"FB_SHORTS_TAB",FEEDS:"FEEDS",WEARABLE_APP:"WEARABLE_APP",HORIZON:"HORIZON",COURIER:"COURIER",FEEDBACK_TILES:"FEEDBACK_TILES",WEB_DESKTOP:"WEB_DESKTOP",MESSENGER_FAMILY_CENTER:"MESSENGER_FAMILY_CENTER"});f["default"]=a}),66);
__d("CometNotificationsRoot.entrypoint",["CometNotificationsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a={count:15,environment:"MAIN_SURFACE",filter_tokens:(a=a==null?void 0:(a=a.passthroughProps)==null?void 0:a.filterTokens)!=null?a:[],scale:d("WebPixelRatio").get()};return{queries:{notificationsRootQueryReference:{parameters:b("CometNotificationsRootQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometNotificationsRoot.react").__setRef("CometNotificationsRoot.entrypoint")};g["default"]=a}),98);
__d("CometNotificationsTimestamp.react",["CometRelativeTimestamp.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.date,d=a.format;a=a.seenAndRead;return a?h.jsx(c("TetraText.react"),{color:"secondary",testid:void 0,type:"body4",children:h.jsx(c("CometRelativeTimestamp.react"),{date:b,format:(a=d)!=null?a:"normal"})}):h.jsx(c("TetraText.react"),{color:"highlight",testid:void 0,type:"bodyLink4",children:h.jsx(c("CometRelativeTimestamp.react"),{date:b,format:(a=d)!=null?a:"normal"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useNotificationsEnvironmentFromContext",["CometNotificationsRootContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(c("CometNotificationsRootContext"));a=a.source;a=(a=a)!=null?a:"MAIN_SURFACE";return a}g["default"]=a}),98);
__d("isBusinessURI",["isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("isFacebookURI")(a)&&a.getSubdomain()==="business"}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometUFIReactionsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6792508917466402"}),null);
__d("CometUFIReactionsDialogQuery$Parameters",["CometUFIReactionsDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometUFIReactionsDialogQuery_facebookRelayOperation"),metadata:{},name:"CometUFIReactionsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("isNotOutlierReactionComet_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:{mask:!1},name:"isNotOutlierReactionComet_feedback",selections:[{alias:null,args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"viewer_feedback_reaction_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"Feedback",abstractKey:null};e.exports=a}),null);
__d("isNotOutlierReactionComet_topReactionsEdge.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"isNotOutlierReactionComet_topReactionsEdge",selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"TopReactionsEdge",abstractKey:null};e.exports=a}),null);
__d("getReactionSVGSource",["cr:4569","cr:4571","cr:4573","cr:4575","cr:4578","cr:5747","cr:8049","cr:8050","cr:8051","cr:8052","cr:8053","cr:8054","cr:8055","cr:8056"],(function(a,b,c,d,e,f,g){"use strict";d=1;e=2;f=3;var h=4,i=7,j=8,k=11,l=12,m=16,n={ANGER:{detailed:b("cr:4571"),regular:b("cr:4569")},DOROTHY:{detailed:"/images/ufi/reactions/svg/thankful.svg",regular:"/images/ufi/reactions/svg/thankful.svg"},HAHA:{detailed:b("cr:4575"),regular:b("cr:4573")},LIKE:{detailed:b("cr:5747"),regular:b("cr:4578")},LOVE:{detailed:b("cr:8050"),regular:b("cr:8049")},SORRY:{detailed:b("cr:8052"),regular:b("cr:8051")},SUPPORT:{detailed:b("cr:8054"),regular:b("cr:8053")},TOTO:{detailed:"/images/ufi/reactions/svg/pride.svg",regular:"/images/ufi/reactions/svg/pride.svg"},WOW:{detailed:b("cr:8056"),regular:b("cr:8055")}},o=(b={},b[j]=n.ANGER,b[k]=n.DOROTHY,b[h]=n.HAHA,b[d]=n.LIKE,b[e]=n.LOVE,b[i]=n.SORRY,b[m]=n.SUPPORT,b[l]=n.TOTO,b[f]=n.WOW,b),p=(j={},j["444813342392137"]=n.ANGER,j["1663186627268800"]=n.DOROTHY,j["115940658764963"]=n.HAHA,j["1635855486666999"]=n.LIKE,j["1678524932434102"]=n.LOVE,j["908563459236466"]=n.SORRY,j["613557422527858"]=n.SUPPORT,j["899779720071651"]=n.TOTO,j["478547315650144"]=n.WOW,j);function a(a,b){b===void 0&&(b=!1);var c;typeof a==="string"&&(c=n[a]);typeof a==="number"&&(c=o[a.toString()]);return b?(a=c)==null?void 0:a.detailed:(b=c)==null?void 0:b.regular}function c(a,b){b===void 0&&(b=!1);a=p[a];return b?a==null?void 0:a.detailed:a==null?void 0:a.regular}g.getReactionSVGSource=a;g.getReactionSVGSourceByID=c}),98);
__d("CometReactionIcon.react",["getReactionSVGSource","react","recoverableViolation","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var e=a.alt,f=a.reactionID,g=a.role,i=d("getReactionSVGSource").getReactionSVGSourceByID(f,a.size!=null&&a.size>=24);if(i==null){c("recoverableViolation")("Could not render unsupported reaction id "+f+".","comet_ui");return null}return h.jsx("img",{alt:e,className:c("stylex")(a.xstyle),"data-testid":void 0,height:a.size,ref:b,role:g,src:i,width:a.size})}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(h.forwardRef(a));g["default"]=b}),98);
__d("CometLazyTooltip.react",["BaseTooltip.react","CometTooltipImpl.react","lazyLoadComponent","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useMemo;function a(a){var b=a.delayContentMs;b=b===void 0?0:b;var d=a.delayTooltipMs;d=d===void 0?300:d;var e=a.onVisibilityChange,f=a.tooltipProps,g=a.tooltipResource;a=babelHelpers.objectWithoutPropertiesLoose(a,["delayContentMs","delayTooltipMs","onVisibilityChange","tooltipProps","tooltipResource"]);var k=i(function(a){a&&g.preload(),e&&e(a)},[e,g]),l=j(function(){return c("lazyLoadComponent")(g)},[g]);return h.jsx(c("BaseTooltip.react"),babelHelpers["extends"]({delayContentMs:b,delayTooltipMs:d,onVisibilityChange:k,tooltip:h.jsx(l,babelHelpers["extends"]({},f)),tooltipImpl:c("CometTooltipImpl.react")},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLoggedOutCTAStrings",["fbt","CometLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");a=Object.freeze({createNewAccountText:h._("__JHASH__o-Xd7MMTxJE__JHASH__"),emailText:h._("__JHASH__5CF6ihB7q1G__JHASH__"),footerTitle:h._("__JHASH__NbzY3velFEE__JHASH__"),forgotPasswordText:h._("__JHASH__pwGVF1qBy_c__JHASH__"),getCPATextWithUrl:function(a){return h._("__JHASH__gRxMGuAaUcu__JHASH__",[h._implicitParam("=m1",i.jsx(c("CometLink.react"),{color:"highlight",href:a,target:"_blank",children:h._("__JHASH__U0F8td9ffpE__JHASH__")}))])},getDSATextWithUrl:function(a){return h._("__JHASH___zdx-D9WC3X__JHASH__",[h._implicitParam("=m1",i.jsx(c("CometLink.react"),{color:"highlight",href:a,target:"_blank",testid:void 0,children:h._("__JHASH__2hADRYVzjEZ__JHASH__")}))])},getFooterSeeMoreOfText:function(a){return h._("__JHASH__CKf13Q0abbP__JHASH__",[h._param("name-of-owner",a)])},getFrenchLawTextWithUrl:function(a){return h._("__JHASH__SQ2qRCMoLPP__JHASH__",[h._implicitParam("=m1",i.jsx(c("CometLink.react"),{color:"highlight",href:a,target:"_blank",children:h._("__JHASH__oMQmVbRSOps__JHASH__")}))])},getNetzdgTextWithUrl:function(a){return h._("__JHASH__VnMB11bfe3G__JHASH__",[h._implicitParam("=m1",i.jsx(c("CometLink.react"),{color:"highlight",href:a,target:"_blank",children:h._("__JHASH__RyxydFql_HO__JHASH__")}))])},passwordText:h._("__JHASH__Ngl2DQ6axho__JHASH__"),popupTitle:h._("__JHASH__DrbC1e1yF8x__JHASH__")});g["default"]=a}),98);
__d("CometUFIReactionsDialog.entrypoint",["CometUFIReactionsDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.feedbackTargetID;a=a.reactionID;return{queries:{cometUFIReactionsQueryReference:{options:{fetchPolicy:"store-and-network"},parameters:b("CometUFIReactionsDialogQuery$Parameters"),variables:{feedbackTargetID:c,reactionID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometUFIReactionsDialog.react").__setRef("CometUFIReactionsDialog.entrypoint")};g["default"]=a}),98);
__d("CometUFITooltip.react",["CometErrorBoundary.react","CometLazyTooltip.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useState;function a(a){var b=a.align;b=b===void 0?"middle":b;var d=a.children,e=a.delayContentMs;e=e===void 0?0:e;var f=a.delayTooltipMs;f=f===void 0?75:f;var g=a.headline,k=a.tooltipContentComponent;a=a.tooltipContentProps;var l=j(0),m=l[0],n=l[1];l=i(function(a){a&&n(m+1)},[m,n]);b=h.jsx(c("CometLazyTooltip.react"),{align:b,delayContentMs:e,delayTooltipMs:f,headline:g,onVisibilityChange:l,tooltipProps:babelHelpers["extends"]({},a,{shownCount:m}),tooltipResource:k,children:d});return h.jsx(c("CometErrorBoundary.react"),{fallback:function(){return d},children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("isNotOutlierReactionComet",["isNotOutlierReactionComet_feedback.graphql","isNotOutlierReactionComet_topReactionsEdge.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=.05;h!==void 0?h:h=b("isNotOutlierReactionComet_feedback.graphql");i!==void 0?i:i=b("isNotOutlierReactionComet_topReactionsEdge.graphql");function a(a){var b;b=(b=a==null?void 0:(b=a.reactors)==null?void 0:b.count)!=null?b:0;var c=Math.ceil(b*j);return function(b){var d;if(((d=a.viewer_feedback_reaction_info)==null?void 0:d.id)!==((d=b.node)==null?void 0:d.id)){return((d=b.reaction_count)!=null?d:0)>=c}else return!0}}g["default"]=a}),98);