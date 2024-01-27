;/*FB_PKG_DELIM*/

__d("useCometTwoButtonDialog",["CometDialogLoadingState.react","react","requireDeferred","useCometDeferredDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("requireDeferred")("CometTwoButtonDialogImpl.react").__setRef("useCometTwoButtonDialog");function j(){return h.jsx(c("CometDialogLoadingState.react"),{})}j.displayName=j.name+" [from "+f.id+"]";function a(){var a=c("useCometDeferredDialog")(i,j);return[a]}g["default"]=a}),98);
__d("composerEditorStateViewStateReducer",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){switch(b.type){case"update_editor_state":if(b.editorState!==a.editorState)return babelHelpers["extends"]({},a,{editorState:b.editorState});break;case"update_draft_editor_state":var c=a.editorState;if(c!=null&&c.__type==="editor-state-based"&&c.draftEditorState!==b.draftEditorState)return babelHelpers["extends"]({},a,{editorState:babelHelpers["extends"]({},c,{draftEditorState:b.draftEditorState})});break}return a}f["default"]=a}),66);
__d("Keys",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LEFT_WINDOW_KEY:91,RIGHT_WINDOW_KEY:92,SELECT_KEY:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL_POINT:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMI_COLON:186,EQUAL_SIGN:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRAKET:221,SINGLE_QUOTE:222});f["default"]=a}),66);
__d("DraftEditorFlushControlled",["ReactDOMComet"],(function(a,b,c,d,e,f){e.exports=b("ReactDOMComet").flushSync}),null);
__d("getRangeClientRects",["invariant","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";c=b("UserAgent").isBrowser("Chrome");function a(a){var b=a.cloneRange(),c=[];for(var d=a.endContainer;d!=null;d=d.parentNode){var e=d===a.commonAncestorContainer;e?b.setStart(a.startContainer,a.startOffset):b.setStart(b.endContainer,0);var f=Array.from(b.getClientRects());c.push(f);if(e){c.reverse();return(f=[]).concat.apply(f,c)}b.setEndBefore(d)}g(0,578)}d=c?a:function(a){return Array.from(a.getClientRects())};e.exports=d}),null);
__d("isSoftNewlineEvent",["Keys"],(function(a,b,c,d,e,f){"use strict";function a(a){return a.which===b("Keys").RETURN&&(a.getModifierState("Shift")||a.getModifierState("Alt")||a.getModifierState("Control"))}e.exports=a}),null);
__d("KeyBindingUtil",["UserAgent","isSoftNewlineEvent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h={isCtrlKeyCommand:function(a){return!!a.ctrlKey&&!a.altKey},isOptionKeyCommand:function(a){return g&&a.altKey},usesMacOSHeuristics:function(){return g},hasCommandModifier:function(a){return g?!!a.metaKey&&!a.altKey:h.isCtrlKeyCommand(a)},isSoftNewlineEvent:b("isSoftNewlineEvent")};e.exports=h}),null);
__d("getDefaultKeyBinding",["KeyBindingUtil","Keys","UserAgent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h=g&&b("UserAgent").isBrowser("Firefox < 29"),i=b("KeyBindingUtil").hasCommandModifier,j=b("KeyBindingUtil").isCtrlKeyCommand;function k(a){return g&&a.altKey||j(a)}function l(a){return!i(a)?null:a.shiftKey?"redo":"undo"}function m(a){return!g&&a.shiftKey?null:k(a)?"delete-word":"delete"}function n(a){return i(a)&&g?"backspace-to-start-of-line":k(a)?"backspace-word":"backspace"}function a(a){switch(a.keyCode){case 66:return i(a)?"bold":null;case 68:return j(a)?"delete":null;case 72:return j(a)?"backspace":null;case 73:return i(a)?"italic":null;case 74:return i(a)?"code":null;case 75:return g&&j(a)?"secondary-cut":null;case 77:return j(a)?"split-block":null;case 79:return j(a)?"split-block":null;case 84:return g&&j(a)?"transpose-characters":null;case 85:return i(a)?"underline":null;case 87:return g&&j(a)?"backspace-word":null;case 88:return i(a)&&a.shiftKey?"strikethrough":null;case 89:return j(a)?g?"secondary-paste":"redo":null;case 90:return l(a)||null;case 187:return i(a)?"superscript":null;case 189:return i(a)?"subscript":null;case b("Keys").RETURN:return"split-block";case b("Keys").DELETE:return m(a);case b("Keys").BACKSPACE:return n(a);case b("Keys").LEFT:return h&&i(a)?"move-selection-to-start-of-block":null;case b("Keys").RIGHT:return h&&i(a)?"move-selection-to-end-of-block":null;default:return null}}e.exports=a}),null);
__d("adjustBlockDepthForContentState",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c,d){var e=b.getStartKey(),f=b.getEndKey(),g=a.getBlockMap(),h=g.toSeq().skipUntil(function(a,b){return b===e}).takeUntil(function(a,b){return b===f}).concat([[f,g.get(f)]]).map(function(a){var b=a.getDepth()+c;b=Math.max(0,b);d!=null&&(b=Math.min(b,d));return a.set("depth",b)});g=g.merge(h);return a.merge({blockMap:g,selectionBefore:b,selectionAfter:b})}e.exports=a}),null);
__d("RichTextEditorUtil",["DraftModifier","EditorState","adjustBlockDepthForContentState","nullthrows"],(function(a,b,c,d,e,f){"use strict";var g={currentBlockContainsLink:function(a){var b=a.getSelection(),c=a.getCurrentContent();return c.getBlockForKey(b.getAnchorKey()).getCharacterList().slice(b.getStartOffset(),b.getEndOffset()).some(function(a){a=a.getEntity();return!!a&&c.getEntity(a).getType()==="LINK"})},getCurrentBlockType:function(a){var b=a.getSelection();return a.getCurrentContent().getBlockForKey(b.getStartKey()).getType()},getDataObjectForLinkURL:function(a){return{url:a.toString()}},handleKeyCommand:function(a,b,c){switch(b){case"bold":return g.toggleInlineStyle(a,"BOLD");case"italic":return g.toggleInlineStyle(a,"ITALIC");case"underline":return g.toggleInlineStyle(a,"UNDERLINE");case"strikethrough":return g.toggleInlineStyle(a,"STRIKETHROUGH");case"subscript":return g.toggleInlineStyle(a,"SUBSCRIPT");case"superscript":return g.toggleInlineStyle(a,"SUPERSCRIPT");case"code":return g.toggleCode(a);case"backspace":case"backspace-word":case"backspace-to-start-of-line":return g.onBackspace(a);case"delete":case"delete-word":case"delete-to-end-of-block":return g.onDelete(a);default:return null}},insertSoftNewline:function(a){var c=b("DraftModifier").insertText(a.getCurrentContent(),a.getSelection(),"\n",a.getCurrentInlineStyle(),null);a=b("EditorState").push(a,c,"insert-characters");return b("EditorState").forceSelection(a,c.getSelectionAfter())},onBackspace:function(a){var c=a.getSelection();if(!c.isCollapsed()||c.getAnchorOffset()||c.getFocusOffset())return null;var d=a.getCurrentContent(),e=c.getStartKey();e=d.getBlockBefore(e);if(e&&e.getType()==="atomic"){e=d.getBlockMap()["delete"](e.getKey());e=d.merge({blockMap:e,selectionAfter:c});if(e!==d)return b("EditorState").push(a,e,"remove-range")}c=g.tryToRemoveBlockStyle(a);return c?b("EditorState").push(a,c,"change-block-type"):null},onDelete:function(a){var c=a.getSelection();if(!c.isCollapsed())return null;var d=a.getCurrentContent(),e=c.getStartKey(),f=d.getBlockForKey(e);f=f.getLength();if(c.getStartOffset()<f)return null;f=d.getBlockAfter(e);if(!f||f.getType()!=="atomic")return null;e=c.merge({focusKey:f.getKey(),focusOffset:f.getLength()});c=b("DraftModifier").removeRange(d,e,"forward");return c!==d?b("EditorState").push(a,c,"remove-range"):null},onTab:function(a,c){var d=c.getSelection(),e=d.getAnchorKey(),f=c.getCurrentContent();e=f.getBlockForKey(e);e=e.getType();if(e!=="unordered-list-item"&&e!=="ordered-list-item")return c;a.preventDefault();e=b("adjustBlockDepthForContentState")(f,d,a.shiftKey?-1:1);return b("EditorState").push(c,e,"adjust-depth")},toggleBlockType:function(a,c){var d=a.getSelection(),e=d.getStartKey(),f=d.getEndKey(),g=a.getCurrentContent(),h=d;if(e!==f&&d.getEndOffset()===0){var i=b("nullthrows")(g.getBlockBefore(f));f=i.getKey();h=h.merge({anchorKey:e,anchorOffset:d.getStartOffset(),focusKey:f,focusOffset:i.getLength(),isBackward:!1})}d=g.getBlockMap().skipWhile(function(a,b){return b!==e}).reverse().skipWhile(function(a,b){return b!==f}).some(function(a){return a.getType()==="atomic"});if(d)return a;i=g.getBlockForKey(e).getType()===c?"unstyled":c;return b("EditorState").push(a,b("DraftModifier").setBlockType(g,h,i),"change-block-type")},toggleCode:function(a){var b=a.getSelection(),c=b.getAnchorKey(),d=b.getFocusKey();return b.isCollapsed()||c!==d?g.toggleBlockType(a,"code-block"):g.toggleInlineStyle(a,"CODE")},toggleInlineStyle:function(a,c){var d=a.getSelection(),e=a.getCurrentInlineStyle();if(d.isCollapsed())return b("EditorState").setInlineStyleOverride(a,e.has(c)?e.remove(c):e.add(c));var f=a.getCurrentContent();e.has(c)?e=b("DraftModifier").removeInlineStyle(f,d,c):e=b("DraftModifier").applyInlineStyle(f,d,c);return b("EditorState").push(a,e,"change-inline-style")},toggleLink:function(a,c,d){c=b("DraftModifier").applyEntity(a.getCurrentContent(),c,d);return b("EditorState").push(a,c,"apply-entity")},tryToRemoveBlockStyle:function(a){var c=a.getSelection(),d=c.getAnchorOffset();if(c.isCollapsed()&&d===0){d=c.getAnchorKey();a=a.getCurrentContent();var e=a.getBlockForKey(d);e=e.getType();d=a.getBlockBefore(d);if(e==="code-block"&&d&&d.getType()==="code-block"&&d.getLength()!==0)return null;if(e!=="unstyled")return b("DraftModifier").setBlockType(a,c,"unstyled")}return null}};e.exports=g}),null);
__d("AudienceOverridesClientFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("5615");b=d("FalcoLoggerInternal").create("audience_overrides_client",a);e=b;g["default"]=e}),98);