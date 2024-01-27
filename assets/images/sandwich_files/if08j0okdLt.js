;/*FB_PKG_DELIM*/

__d("FriendingCometFriendRequestSendMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6523509764398491"}),null);
__d("FriendingCometFriendRequestSendMutation.graphql",["FriendingCometFriendRequestSendMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},f=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}],g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestSendMutation",selections:[{alias:null,args:c,concreteType:"FriendRequestSendResponsePayload",kind:"LinkedField",name:"friend_request_send",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requestees",plural:!0,selections:[d,e,{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'},{args:null,kind:"FragmentSpread",name:"ProfileCometTimelineTabTopBanner_user"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestSendMutation",selections:[{alias:null,args:c,concreteType:"FriendRequestSendResponsePayload",kind:"LinkedField",name:"friend_request_send",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requestees",plural:!0,selections:[d,e,{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[g,{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},d,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'},{alias:null,args:[{kind:"Literal",name:"render_location",value:"TIMELINE_TAB_TOP"},{kind:"Literal",name:"supported",value:"10EN4t"}],concreteType:null,kind:"LinkedField",name:"comet_profile_banner",plural:!1,selections:[g,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfilePlusCometAdminNotice_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePlusAdminNoticeRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfileCometTransparencyInformBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"TransparencyInformContent",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfileCometAppealBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfileAppealBanner",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfileCometBannerGeneric_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfileBanner",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"FriendingCometProfilePYMKHScroll_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePYMKBanner",abstractKey:null},{kind:"InlineFragment",selections:[d],type:"Node",abstractKey:"__isNode"}],storageKey:'comet_profile_banner(render_location:"TIMELINE_TAB_TOP",supported:"10EN4t")'}],storageKey:null}],storageKey:null}]},params:{id:b("FriendingCometFriendRequestSendMutation_facebookRelayOperation"),metadata:{},name:"FriendingCometFriendRequestSendMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("ProfileCometActionFriendRequestHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null},f=[b];return{kind:"SplitOperation",metadata:{},name:"ProfileCometActionFriendRequestHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"restrictable_profile_owner",plural:!1,selections:[a,{kind:"InlineFragment",selections:[b,c,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},d,e],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[b,c,d,e],type:"RestrictedUser",abstractKey:null},{kind:"InlineFragment",selections:f,type:"Node",abstractKey:"__isNode"}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:f,storageKey:null}],type:"ProfileActionFriendRequest",abstractKey:null},b],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionFriendRequestHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionFriendRequestHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"restrictable_profile_owner",plural:!1,selections:[{kind:"InlineFragment",selections:a,type:"User",abstractKey:null},{kind:"InlineFragment",selections:a,type:"RestrictedUser",abstractKey:null}],storageKey:null}],type:"ProfileActionFriendRequest",abstractKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometActiveFriendMenu_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometIncomingFriendRequestMenu_action"}],storageKey:null}],type:"ProfileActionFriendRequestHandler",abstractKey:null}}();e.exports=a}),null);
__d("CometProfileListDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6436112523110723"}),null);
__d("CometProfileListDialogQuery$Parameters",["CometProfileListDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometProfileListDialogQuery_facebookRelayOperation"),metadata:{},name:"CometProfileListDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("RecommendationsUnitContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9979363518803632"}),null);
__d("RecommendationsUnitContainerQuery$Parameters",["RecommendationsUnitContainerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("RecommendationsUnitContainerQuery_facebookRelayOperation"),metadata:{},name:"RecommendationsUnitContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("RecommendationsUnitContext_recommendationUnitFragmentRef.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RecommendationsUnitContext_recommendationUnitFragmentRef",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"if_viewer_can_see_pymk_unit_on_initial_load",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}],type:"XFBProfileEntityConvergenceHeaderRenderer",abstractKey:null};e.exports=a}),null);
__d("CIXShowErrorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(function(){});g["default"]=b}),98);
__d("useCIXShowErrorScreen",["CIXShowErrorContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){return h(c("CIXShowErrorContext"))}g["default"]=a}),98);
__d("CIXDialogScreenFooter.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={footer:{borderTop:"xzg4506",display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"x1qughib",paddingBottom:"x1l90r2v",$$css:!0},stretchButtons:{flexGrow:"x1iyjqo2",$$css:!0}};function a(a){return h.jsxs("div",{className:"xzg4506 x78zum5 xdt5ytf x1qughib x1l90r2v",children:[a.debug!==void 0&&h.jsx("div",{children:a.debug}),h.jsx("div",{className:c("stylex")(a.stretchButtons===!0&&i.stretchButtons),children:a.buttons})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometOnOutsideClick.react",["react","useOnOutsideClick"],(function(a,b,c,d,e,f,g){"use strict";d("react");function a(a){var b=a.children;a=a.onOutsideClick;a=c("useOnOutsideClick")(a);return b(a)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ContactRemovalRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{}}},root:c("JSResourceForInteraction")("ContactRemovalRoot.react").__setRef("ContactRemovalRoot.entrypoint")};g["default"]=a}),98);
__d("useCrisisGenericErrorDialog",["react","useCometAlertDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(){var a=c("useCometAlertDialog")();return h(function(b){a({body:b.description,title:b.summary})},[a])}g["default"]=a}),98);
__d("FriendRequestError",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({SELF_OVER_FRIEND_LIMIT:1431006,SELF_OVER_FRIEND_LIMIT_SUBSCRIBED:1431016,SIGMA_WARN:1407026});f["default"]=a}),66);
__d("FriendingCometErrorHandler.react",["fbt","CometRelayErrorHandling","FriendRequestError","JSResourceForInteraction","SilenceableErrorMessageUtils","cometPushToast","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react").useCallback,j=c("JSResourceForInteraction")("FriendingCometErrorDialog.react").__setRef("FriendingCometErrorHandler.react");function a(a){var b=c("useCometLazyDialog")(j),e=b[0],f=i(function(b){var g=d("SilenceableErrorMessageUtils").getMetadataFromError(b);if(d("SilenceableErrorMessageUtils").shouldHideErrorMessage(g))return;b.name==="NetworkTransportError"?d("cometPushToast").cometPushErrorToast({message:h._("__JHASH__J83gzDrVB2V__JHASH__")},5e3):(b.code===c("FriendRequestError").SELF_OVER_FRIEND_LIMIT||b.code===c("FriendRequestError").SELF_OVER_FRIEND_LIMIT_SUBSCRIBED||b.code===c("FriendRequestError").SIGMA_WARN)&&(d("CometRelayErrorHandling").markErrorAsHandled(b),e({addFriendErrorHandler:f,addFriendId:a.addFriendId,addFriendSource:a.addFriendSource,error:b}))},[a.addFriendId,a.addFriendSource,e]);return f}g.useFriendingErrorHandler=a}),98);
__d("ProfileActionFriendingMutationUtils",["fbt","ProfileActionMutationUtils","WebPixelRatio"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){var c="";switch(a){case"ARE_FRIENDS":c=h._("__JHASH__kIlAncPZYc2__JHASH__").toString();break;case"CAN_REQUEST":c=h._("__JHASH__uAh7V35Fiq0__JHASH__").toString();break;case"INCOMING_REQUEST":c=h._("__JHASH__2MCmiN_h7kP__JHASH__").toString();break;case"OUTGOING_REQUEST":c=h._("__JHASH__UNPMiVpVS7t__JHASH__").toString();break}return{__typename:"ProfileActionFriendRequest",icon_image:{height:16*d("WebPixelRatio").get(),scale:d("WebPixelRatio").get(),uri:null,width:16*d("WebPixelRatio").get()},id:d("ProfileActionMutationUtils").getProfileActionID(b,1),is_optimistic_update:!0,title:{text:c}}}g.getOptimisticActionForFriendshipStatus=a}),98);
__d("FriendingCometFriendRequestSendMutation",["CometRelay","FriendingCometFriendRequestSendMutation.graphql","ProfileActionFriendingMutationUtils","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("FriendingCometFriendRequestSendMutation.graphql");function a(a){var b=a.acknowledgeWarn,c=a.environment,e=a.navigationChain,f=a.onError,g=a.profileRef,h=a.pymkLocation,j=a.receiverID;a=a.source;return d("CometRelay").commitMutation(c,{mutation:i,onError:f,optimisticResponse:{friend_request_send:{friend_requestees:[{comet_profile_banner:null,friendship_status:"OUTGOING_REQUEST",id:j,profile_action:d("ProfileActionFriendingMutationUtils").getOptimisticActionForFriendshipStatus("OUTGOING_REQUEST",j)}]}},variables:{input:{attribution_id_v2:e,friend_requestee_ids:[j],people_you_may_know_location:h,refs:[g],source:a,warn_ack_for_ids:b===!0?[j]:[]},scale:d("WebPixelRatio").get()}})}g.commit=a}),98);
__d("CometRelayInsightsLogger",["ODS"],(function(a,b,c,d,e,f,g){"use strict";function a(a){switch(a.name){case"pendingoperation.found":var b=a.fragmentOwner.node.operation.name;a=a.pendingOperations.some(function(a){return a.node.operation.name!==b});d("ODS").bumpEntityKey(6119,"relay_insights",a?"pending_operation_found.other":"pending_operation_found.parent");break;default:break}}g.log=a}),98);
__d("RecommendationsUnit.entrypoint",["JSResourceForInteraction","RecommendationsUnitContainerQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.parentID;a=a.renderLocation;return{queries:{queryReference:{parameters:c("RecommendationsUnitContainerQuery$Parameters"),variables:{parentID:b,renderLocation:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("RecommendationsUnitContainer.react").__setRef("RecommendationsUnit.entrypoint")};b=a;g["default"]=b}),98);
__d("RecommendationsUnitCardGlimmer.react",["CometAspectRatioContainer.react","CometCard.react","CometColumn.react","CometColumnItem.react","CometGlimmer.react","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={buttonGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xc9qbxq",$$css:!0},contentColumn:{maxWidth:"x193iq5w",$$css:!0},contentRoot:{display:"x78zum5",height:"x5yr21d",$$css:!0},imageGlimmer:{height:"x5yr21d",width:"xh8yej3",$$css:!0},root:{display:"x78zum5",flexGrow:"x1iyjqo2",height:"x5yr21d",$$css:!0},subtitleGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xlup9mm",width:"x65xoit",$$css:!0},titleGlimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x1qx5ct2",width:"xktia5q",$$css:!0}},j=function(){};function a(a){var b=a.index;a=a.onVisible;a=a===void 0?j:a;a=c("useVisibilityObserver")({onVisible:a,options:{rootMargin:200}});return h.jsx("div",{className:"x78zum5 x1iyjqo2 x5yr21d",children:h.jsx(c("CometCard.react"),{background:"white",border:"solid",dropShadow:2,expanding:!0,ref:a,children:h.jsx("div",{className:"x78zum5 x5yr21d",children:h.jsxs(c("CometColumn.react"),{expanding:!0,spacing:16,xstyle:i.contentColumn,children:[h.jsx(c("CometColumnItem.react"),{children:h.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:1.5,children:h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.imageGlimmer})})}),h.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,children:h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.titleGlimmer})}),h.jsx(c("CometColumnItem.react"),{expanding:!0,paddingHorizontal:16,children:h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.subtitleGlimmer})}),h.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingVertical:16,verticalAlign:"bottom",children:h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.buttonGlimmer})})]})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("RecommendationsUnitGlimmer.react",["CometGlimmer.react","CometHScroll.react","CometRow.react","CometRowItem.react","RecommendationsUnitCardGlimmer.react","gkx","range","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={linkGlimmer:{borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",height:"x1qx5ct2",marginBottom:"x12nagc",width:"x1exxlbk",$$css:!0},root:{borderTop:"xzg4506",borderEnd:"xycxndf",borderBottom:"xua58t2",borderStart:"x4xrfw5",borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",boxShadow:"xev17xk",marginTop:"x1xmf6yo",paddingTop:"xz9dl7a",paddingEnd:"x1pi30zi",paddingBottom:"xjkvuk6",paddingStart:"x1swvt13",$$css:!0},titleGlimmer:{borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",height:"x1qx5ct2",width:"x1oysuqx",$$css:!0}},j=c("gkx")("1296384")?196:150;function a(){var a=c("range")(0,5).map(function(a){return h.jsx(d("CometHScroll.react").Child,{children:h.jsx(c("RecommendationsUnitCardGlimmer.react"),{index:a})},a)});return h.jsxs("div",{className:"xzg4506 xycxndf xua58t2 x4xrfw5 x1lq5wgf xgqcy7u x30kzoy x9jhf4c xev17xk x1xmf6yo xz9dl7a x1pi30zi xjkvuk6 x1swvt13",children:[h.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingTop:0,spacingVertical:0,children:[h.jsx(c("CometRowItem.react"),{children:h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.titleGlimmer})}),h.jsx(c("CometRowItem.react"),{children:h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.linkGlimmer})})]}),h.jsx(d("CometHScroll.react").Container,{cardWidth:{minWidth:j,type:"responsive"},gap:8,children:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("RecommendationsUnitContext",["CometPlaceholder.react","CometRelay","RecommendationsUnit.entrypoint","RecommendationsUnitContext_recommendationUnitFragmentRef.graphql","RecommendationsUnitGlimmer.react","RelayHooks","react","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useMemo,k=e.useState;e=function(){};var l=function(){return!1},m=i.createContext({chainExpandRecommendationsUnit:l,isRecommendationsUnitExpanded:!1,parentID:null,recommendationsUnitEntryPointContainer:null,setIsRecommendationsUnitExpanded:e,shouldExpandOnInitialLoad:!1,toggleIsRecommendationsUnitExpanded:e});function a(a){var e=a.children,f=a.parentID,g=a.recommendationUnitFragmentRef,l=a.renderLocation;a=d("RelayHooks").useFragment(h!==void 0?h:h=b("RecommendationsUnitContext_recommendationUnitFragmentRef.graphql"),g);g=c("useCometRelayEntrypointContextualEnvironmentProvider")();g=d("CometRelay").useEntryPointLoader(g,c("RecommendationsUnit.entrypoint"));var n=g[0],o=g[1];a=(a==null?void 0:(g=a.user)==null?void 0:g.if_viewer_can_see_pymk_unit_on_initial_load)!=null;g=k(a);var p=g[0],q=g[1];g=k(n!=null||a);var r=g[0],s=g[1],t=j(function(){var a;return n!=null?i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("RecommendationsUnitGlimmer.react"),{}),children:i.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:n,props:{isExpanded:(a=r)!=null?a:!1}})}):null},[r,n]);a=k(!1);var u=a[0],v=a[1];g=j(function(){return{chainExpandRecommendationsUnit:function(){if(!u&&!r){o({parentID:f,renderLocation:l});v(!0);s(!0);return!0}return!1},isRecommendationsUnitExpanded:r,parentID:f,recommendationsUnitEntryPointContainer:t,setIsRecommendationsUnitExpanded:function(a){a?(o({parentID:f,renderLocation:l}),v(!0),s(!0)):s(!1)},shouldExpandOnInitialLoad:p,toggleIsRecommendationsUnitExpanded:function(){o({parentID:f,renderLocation:l}),r||v(!0),p&&q(!1),s(function(a){return!a})}}},[r,t,u,o,f,l,p]);return i.jsx(m.Provider,{value:g,children:e})}a.displayName=a.name+" [from "+f.id+"]";g.noOpFunc=e;g.noOpBoolFunc=l;g.RecommendationsUnitContext=m;g.RecommendationsUnitContextProvider=a}),98);
__d("useRecommendationsUnitChaining",["RecommendationsUnitContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(d("RecommendationsUnitContext").RecommendationsUnitContext),b=a.chainExpandRecommendationsUnit,c=a.parentID;return{chainExpandRecommendationsUnit:function(a){a=a.matchParentID;return a==null||a===c?b():!1}}}g["default"]=a}),98);
__d("ProfileCometActionFriendRequestHandler.react",["Actor","CometHovercardGroupContext","CometLazyPopoverTrigger.react","CometRelay","FriendingCometErrorHandler.react","FriendingCometFriendRequestSendMutation","JSResourceForInteraction","ProfileCometActionFriendRequestHandler_handler.graphql","ProfileCometContextualProfileContext","ProfileCometExplicitConnectionsEventLogger","ProfileCometExplicitConnectionsImpressionLogger","promiseDone","react","recoverableViolation","useMinifiedProductAttribution","useRecommendationsUnitChaining"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l=c("JSResourceForInteraction")("ProfileCometActiveFriendMenu.react").__setRef("ProfileCometActionFriendRequestHandler.react"),m=c("JSResourceForInteraction")("ProfileCometIncomingFriendRequestMenu.react").__setRef("ProfileCometActionFriendRequestHandler.react"),n=c("JSResourceForInteraction")("FriendingCometFriendRequestCancelMutation").__setRef("ProfileCometActionFriendRequestHandler.react");function a(a){var e,f,g=a.children,o=a.handler,p=a.popoverPosition;a=a.source;var q=d("CometRelay").useRelayEnvironment();o=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometActionFriendRequestHandler_handler.graphql"),o);o=o.profile_action;var r=(o==null?void 0:(e=o.restrictable_profile_owner)==null?void 0:e.id)||"0";r==="0"&&c("recoverableViolation")("Missing profile ID","profile_comet");e=c("useRecommendationsUnitChaining")();var s=e.chainExpandRecommendationsUnit,t;switch(a){case"WWW_COMET_HOVERCARD":t="hovercard";break;case"WWW_COMET_PROFILE_FRIENDS_TAB":t="profile_friends";break;default:t="profile_button";break}var u=d("FriendingCometErrorHandler.react").useFriendingErrorHandler({addFriendId:r,addFriendSource:"profile_button"}),v=c("useMinifiedProductAttribution")();e=k(c("ProfileCometContextualProfileContext"));e=e.groupID;var w=k(c("CometHovercardGroupContext"));w=w.groupID;var x=(e=e||w)!=null?e:"";w=d("Actor").useActor();e=w[0];w=c("ProfileCometExplicitConnectionsImpressionLogger")(e,x,r,"EC_FRIEND_REQUEST_BUTTON_VIEWED","CONTEXTUAL_VIEW");var y=c("ProfileCometExplicitConnectionsEventLogger")(e,x,r);e=j(function(){x!==""&&y("EC_FRIEND_REQUEST_BUTTON_CLICKED","CONTEXTUAL_VIEW"),s({matchParentID:r}),d("FriendingCometFriendRequestSendMutation").commit({environment:q,navigationChain:v,onError:u,receiverID:r,source:t})},[s,q,u,t,x,y,v,r]);var z=j(function(){c("promiseDone")(n.load().then(function(a){a=a.commit;a({environment:q,navigationChain:v,onError:u,receiverID:r,source:"profile"})}))},[q,u,v,r]);f=o==null?void 0:(f=o.restrictable_profile_owner)==null?void 0:f.friendship_status;if(f==null){c("recoverableViolation")("Failed to fetch friendship status for profile "+r,"profile_comet");return null}var A=null;switch(f){case"ARE_FRIENDS":A=l;break;case"CAN_REQUEST":return g({onPress:e,ref:x!==""?w:function(){}});case"INCOMING_REQUEST":A=m;break;case"OUTGOING_REQUEST":return g({onPress:z});case"CANNOT_REQUEST":return null;default:c("recoverableViolation")("Unknown friendship status "+f+" for profile "+r,"profile_comet");return null}return!A||!o?g({}):i.jsx(c("CometLazyPopoverTrigger.react"),{popoverProps:{action:o,source:a},popoverResource:A,position:p,preloadTrigger:"button",children:function(a,b,c,d,e,f){return g({onHoverIn:d,onHoverOut:e,onPress:b,onPressIn:f,ref:a})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometProfileListDialog.entrypoint",["CometProfileListDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.listType;a=a.sourceID;return{queries:{cometMutualFriendsQueryReference:{parameters:b("CometProfileListDialogQuery$Parameters"),variables:{listType:c,scale:d("WebPixelRatio").get(),sourceID:a}}}}},root:c("JSResourceForInteraction")("CometProfileListDialog.react").__setRef("CometProfileListDialog.entrypoint")};g["default"]=a}),98);
__d("legacy:cookie",["Cookie"],(function(a,b,c,d,e,f){a.getCookie=b("Cookie").get,a.setCookie=b("Cookie").set,a.clearCookie=b("Cookie").clear}),3);
__d("LoginDialog",["Cookie","setInterval"],(function(a,b,c,d,e,f,g){function a(){c("setInterval")(function(){c("Cookie").get("c_user")&&window.location.reload()},5e3)}function b(){window.location.reload()}g.pollLoginCookies=a;g.onClose=b}),98);
__d("ServerRedirect",["ReloadPage","URI"],(function(a,b,c,d,e,f,g){function a(a,b,d){c("URI").go(a,b,d)}function b(){d("ReloadPage").now()}g.redirectPageTo=a;g.reloadPage=b}),98);
__d("partitionArray",[],(function(a,b,c,d,e,f){function a(a,b,c){var d=[],e=[];a.forEach(function(f,g){b.call(c,f,g,a)?d.push(f):e.push(f)});return[d,e]}f["default"]=a}),66);
__d("IntlCLDRNumberType02",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===0||a===1)return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType36",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===0||a===1)return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType43",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===1)return c("IntlVariations").NUMBER_ONE;else if(a%10>=2&&a%10<=4&&(a%100<12||a%100>14))return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_MANY}};b=a;g["default"]=b}),98);
__d("XCometAvatarEditorControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/profile/avatar/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("RelayEventLogger",["err","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h=new Map(),i="client:root:viewer",j='client:root:viewer:__CometNewsFeed_viewer_news_feed_comet_news_feed(orderby:["TOP_STORIES"])',k='__CometNewsFeed_viewer_news_feed_comet_news_feed(orderby:["TOP_STORIES"])';function a(a,b){var e=[],f={get:function(){return[].concat(e)},log:function(a){if(a.name==="store.publish"){var f=a.source,g=!1;if(f.has(i)){var h=f.get(i);g=h==null||d("relay-runtime").Record.getValue(h,k)===null}(g||f.has(j))&&(a.stack=c("err")("<trace>").stack)}e.push(a);while(e.length>b)e.shift()}};h.set(a,f);return f}function b(a){return h.get(a)}g.create=a;g.get=b}),98);
__d("useFxGrowthIdentitySyncingFalcoEventLogger",["Actor","FXUtils","promiseDone","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("FxGrowthIdentitySyncingFalcoEvent").__setRef("useFxGrowthIdentitySyncingFalcoEventLogger");function a(){var a=d("Actor").useActor(),b=a[0];return h(function(a){c("promiseDone")(i.load(),function(c){c.log(function(){return babelHelpers["extends"]({},a,{initiator_account_id:b,initiator_account_type:d("FXUtils").getFXClientActorAccountType()})})})},[b])}g["default"]=a}),98);