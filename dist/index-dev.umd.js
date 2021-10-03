!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self).ReactWindow={},e.React)}(this,(function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var o=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function i(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(r=e[n],a=t[n],!(r===a||o(r)&&o(a)))return!1;var r,a;return!0}function l(e,t){var n;void 0===t&&(t=i);var r,a=[],o=!1;return function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return o&&n===this&&t(i,a)||(r=e.apply(this,i),o=!0,n=this,a=i),r}}function s(e,t){return e(t={exports:{}},t.exports),t.exports}var u=s((function(e,t){var n,r,a,o;if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,c=null,f=function e(){if(null!==u)try{var n=t.unstable_now();u(!0,n),u=null}catch(t){throw setTimeout(e,0),t}};n=function(e){null!==u?setTimeout(n,0,e):(u=e,setTimeout(f,0))},r=function(e,t){c=setTimeout(e,t)},a=function(){clearTimeout(c)},t.unstable_shouldYield=function(){return!1},o=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,p=window.clearTimeout;if("undefined"!=typeof console){var h=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,b=null,v=-1,y=5,_=0;t.unstable_shouldYield=function(){return t.unstable_now()>=_},o=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<e?Math.floor(1e3/e):5};var w=new MessageChannel,g=w.port2;w.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();_=e+y;try{b(!0,e)?g.postMessage(null):(m=!1,b=null)}catch(e){throw g.postMessage(null),e}}else m=!1},n=function(e){b=e,m||(m=!0,g.postMessage(null))},r=function(e,n){v=d((function(){e(t.unstable_now())}),n)},a=function(){p(v),v=-1}}function x(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,a=e[r];if(!(void 0!==a&&0<k(a,t)))break e;e[r]=t,e[n]=a,n=r}}function I(e){return void 0===(e=e[0])?null:e}function S(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length;r<a;){var o=2*(r+1)-1,i=e[o],l=o+1,s=e[l];if(void 0!==i&&0>k(i,n))void 0!==s&&0>k(s,i)?(e[r]=s,e[l]=n,r=l):(e[r]=i,e[o]=n,r=o);else{if(!(void 0!==s&&0>k(s,n)))break e;e[r]=s,e[l]=n,r=l}}}return t}return null}function k(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var C=[],M=[],T=1,P=null,R=3,O=!1,z=!1,F=!1;function D(e){for(var t=I(M);null!==t;){if(null===t.callback)S(M);else{if(!(t.startTime<=e))break;S(M),t.sortIndex=t.expirationTime,x(C,t)}t=I(M)}}function E(e){if(F=!1,D(e),!z)if(null!==I(C))z=!0,n(A);else{var t=I(M);null!==t&&r(E,t.startTime-e)}}function A(e,n){z=!1,F&&(F=!1,a()),O=!0;var o=R;try{for(D(n),P=I(C);null!==P&&(!(P.expirationTime>n)||e&&!t.unstable_shouldYield());){var i=P.callback;if("function"==typeof i){P.callback=null,R=P.priorityLevel;var l=i(P.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?P.callback=l:P===I(C)&&S(C),D(n)}else S(C);P=I(C)}if(null!==P)var s=!0;else{var u=I(M);null!==u&&r(E,u.startTime-n),s=!1}return s}finally{P=null,R=o,O=!1}}var j=o;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){z||O||(z=!0,n(A))},t.unstable_getCurrentPriorityLevel=function(){return R},t.unstable_getFirstCallbackNode=function(){return I(C)},t.unstable_next=function(e){switch(R){case 1:case 2:case 3:var t=3;break;default:t=R}var n=R;R=t;try{return e()}finally{R=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=j,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=R;R=e;try{return t()}finally{R=n}},t.unstable_scheduleCallback=function(e,o,i){var l=t.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?l+i:l:i=l,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:T++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>l?(e.sortIndex=i,x(M,e),null===I(C)&&e===I(M)&&(F?a():F=!0,r(E,i-l))):(e.sortIndex=s,x(C,e),z||O||(z=!0,n(A))),e},t.unstable_wrapCallback=function(e){var t=R;return function(){var n=R;R=t;try{return e.apply(this,arguments)}finally{R=n}}}})),c=(u.unstable_now,u.unstable_shouldYield,u.unstable_forceFrameRate,u.unstable_IdlePriority,u.unstable_ImmediatePriority,u.unstable_LowPriority,u.unstable_NormalPriority,u.unstable_Profiling,u.unstable_UserBlockingPriority,u.unstable_cancelCallback,u.unstable_continueExecution,u.unstable_getCurrentPriorityLevel,u.unstable_getFirstCallbackNode,u.unstable_next,u.unstable_pauseExecution,u.unstable_requestPaint,u.unstable_runWithPriority,u.unstable_scheduleCallback,u.unstable_wrapCallback,s((function(e,t){!function(){var e,n,r,a;if("object"==typeof performance&&"function"==typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();t.unstable_now=function(){return i.now()-l}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,u=null,c=function e(){if(null!==s)try{var n=t.unstable_now();s(!0,n),s=null}catch(t){throw setTimeout(e,0),t}};e=function(t){null!==s?setTimeout(e,0,t):(s=t,setTimeout(c,0))},n=function(e,t){u=setTimeout(e,t)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var f=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var p=window.requestAnimationFrame,h=window.cancelAnimationFrame;"function"!=typeof p&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,b=null,v=-1,y=5,_=0;t.unstable_shouldYield=function(){return t.unstable_now()>=_},a=function(){},t.unstable_forceFrameRate=function(e){e<0||e>125?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=e>0?Math.floor(1e3/e):5};var w=new MessageChannel,g=w.port2;w.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();_=e+y;try{b(!0,e)?g.postMessage(null):(m=!1,b=null)}catch(e){throw g.postMessage(null),e}}else m=!1},e=function(e){b=e,m||(m=!0,g.postMessage(null))},n=function(e,n){v=f((function(){e(t.unstable_now())}),n)},r=function(){d(v),v=-1}}function x(e,t){var n=e.length;e.push(t),function(e,t,n){var r=n;for(;;){var a=r-1>>>1,o=e[a];if(!(void 0!==o&&k(o,t)>0))return;e[a]=t,e[r]=o,r=a}}(e,t,n)}function I(e){var t=e[0];return void 0===t?null:t}function S(e){var t=e[0];if(void 0!==t){var n=e.pop();return n!==t&&(e[0]=n,function(e,t,n){var r=n,a=e.length;for(;r<a;){var o=2*(r+1)-1,i=e[o],l=o+1,s=e[l];if(void 0!==i&&k(i,t)<0)void 0!==s&&k(s,i)<0?(e[r]=s,e[l]=t,r=l):(e[r]=i,e[o]=t,r=o);else{if(!(void 0!==s&&k(s,t)<0))return;e[r]=s,e[l]=t,r=l}}}(e,n,0)),t}return null}function k(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var C=[],M=[],T=1,P=null,R=3,O=!1,z=!1,F=!1;function D(e){for(var t=I(M);null!==t;){if(null===t.callback)S(M);else{if(!(t.startTime<=e))return;S(M),t.sortIndex=t.expirationTime,x(C,t)}t=I(M)}}function E(t){if(F=!1,D(t),!z)if(null!==I(C))z=!0,e(A);else{var r=I(M);null!==r&&n(E,r.startTime-t)}}function A(e,t){z=!1,F&&(F=!1,r()),O=!0;var n=R;try{return j(e,t)}finally{P=null,R=n,O=!1}}function j(e,r){var a=r;for(D(a),P=I(C);null!==P&&(!(P.expirationTime>a)||e&&!t.unstable_shouldYield());){var o=P.callback;if("function"==typeof o){P.callback=null,R=P.priorityLevel;var i=o(P.expirationTime<=a);a=t.unstable_now(),"function"==typeof i?P.callback=i:P===I(C)&&S(C),D(a)}else S(C);P=I(C)}if(null!==P)return!0;var l=I(M);return null!==l&&n(E,l.startTime-a),!1}var N=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){z||O||(z=!0,e(A))},t.unstable_getCurrentPriorityLevel=function(){return R},t.unstable_getFirstCallbackNode=function(){return I(C)},t.unstable_next=function(e){var t;switch(R){case 1:case 2:case 3:t=3;break;default:t=R}var n=R;R=t;try{return e()}finally{R=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=N,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=R;R=e;try{return t()}finally{R=n}},t.unstable_scheduleCallback=function(a,o,i){var l,s,u=t.unstable_now();if("object"==typeof i&&null!==i){var c=i.delay;l="number"==typeof c&&c>0?u+c:u}else l=u;switch(a){case 1:s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;case 3:default:s=5e3}var f=l+s,d={id:T++,callback:o,priorityLevel:a,startTime:l,expirationTime:f,sortIndex:-1};return l>u?(d.sortIndex=l,x(M,d),null===I(C)&&d===I(M)&&(F?r():F=!0,n(E,l-u))):(d.sortIndex=f,x(C,d),z||O||(z=!0,e(A))),d},t.unstable_wrapCallback=function(e){var t=R;return function(){var n=R;R=t;try{return e.apply(this,arguments)}finally{R=n}}}}()}))),f=(c.unstable_now,c.unstable_shouldYield,c.unstable_forceFrameRate,c.unstable_IdlePriority,c.unstable_ImmediatePriority,c.unstable_LowPriority,c.unstable_NormalPriority,c.unstable_Profiling,c.unstable_UserBlockingPriority,c.unstable_cancelCallback,c.unstable_continueExecution,c.unstable_getCurrentPriorityLevel,c.unstable_getFirstCallbackNode,c.unstable_next,c.unstable_pauseExecution,c.unstable_requestPaint,c.unstable_runWithPriority,c.unstable_scheduleCallback,c.unstable_wrapCallback,s((function(e){e.exports=c}))),d="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function p(e){cancelAnimationFrame(e.id)}function h(e,t){var n=d();var r={id:requestAnimationFrame((function a(){d()-n>=t?e.call(null):r.id=requestAnimationFrame(a)}))};return r}var m=f.unstable_IdlePriority,b=f.unstable_runWithPriority,v=function(e,t){return e};function y(e){var o,i,s=e.getItemOffset,u=(e.getEstimatedTotalSize,e.getItemSize),c=e.getOffsetForIndexAndAlignment,f=e.getStartIndexForOffset,d=e.getStopIndexForStartIndex,y=e.initInstanceProps,w=e.shouldResetStyleCacheOnItemSizeChange,g=e.validateProps;return i=o=function(e){var o,i;function x(t){var n;(n=e.call(this,t)||this)._instanceProps=y(n.props,r(n)),n._outerRef=void 0,n._innerRef=void 0,n._prerenderOverscanRowsTimeoutID=null,n._clearStyleCacheTimeoutID=null,n.state={instance:r(n),scrollDirection:"forward",scrollOffset:"number"==typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=l((function(e,t){return n.props.onItemsRendered({visibleStartIndex:e,visibleStopIndex:t})})),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,r=n.props,a=r.itemSize,o=r.layout,i=n._getItemStyleCache(w&&a,w&&o);if(i.hasOwnProperty(e))t=i[e];else{var l=s(n.props,e,n._instanceProps),c=u(n.props,e,n._instanceProps),f="horizontal"===o,d=f?"translate3d("+l+"px, 0px, 0px)":"translate3d(0px, "+l+"px, 0px)";i[e]=t={transform:d,height:f?0:c,width:f?c:0,willChange:"transform",transition:"none"}}return t},n._getItemStyleCache=void 0,n._getItemStyleCache=l((function(e,t,n){return{}})),n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._innerRefSetter=function(e){var t=n.props.innerRef;n._innerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._clearStyleCache=function(){n._clearStyleCacheTimeoutID=null,n._getItemStyleCache(-1,null)},n._prerenderOverscanRows=function(){n._prerenderOverscanRowsTimeoutID=null,b(m,(function(){n.setState((function(e){var t=n.props,r=t.itemCount,a=t.maxNumPrerenderRows,o=n._getRangeToRender(e.scrollOffset),i=o[0],l=o[1],s=l-i,u=Math.min(s,a),c=Math.max(0,i-u),f=Math.min(r-1,l+u);return e.startIndex===c&&e.stopIndex===f?null:{startIndex:c,stopIndex:f}}))}))};var a=t.initialScrollOffset,o="number"==typeof a?a:0,i=n._getRangeToRender(o),c=i[0],f=i[1];return n.state={instance:r(n),scrollDirection:"forward",scrollOffset:o,scrollUpdateWasRequested:"number"==typeof a,startIndex:c,stopIndex:f},n}i=e,(o=x).prototype=Object.create(i.prototype),o.prototype.constructor=o,a(o,i),x.getDerivedStateFromProps=function(e,t){return _(e,t),g(e),null};var I=x.prototype;return I.scrollTo=function(e){var t=this;e=Math.max(0,e),this.setState((function(n){if(n.scrollOffset===e)return null;var r=t._getRangeToRender(e),a=r[0],o=r[1],i=a>=n.startIndex&&o<=n.stopIndex;return{scrollDirection:n.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0,startIndex:i?n.startIndex:a,stopIndex:i?n.stopIndex:o}}))},I.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,r=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(c(this.props,e,t,r,this._instanceProps))},I.componentDidMount=function(){this._commitHook()},I.componentDidUpdate=function(){this._commitHook()},I.componentWillUnmount=function(){null!==this._prerenderOverscanRowsTimeoutID&&p(this._prerenderOverscanRowsTimeoutID),null!==this._clearStyleCacheTimeoutID&&p(this._clearStyleCacheTimeoutID)},I.render=function(){var e=this.props,r=e.children,a=e.className,o=e.innerElementType,i=e.itemCount,l=e.itemData,s=e.itemKey,u=void 0===s?v:s,c=e.outerElementType,f=e.style,d=this.state,p=d.scrollOffset,h=d.startIndex,m=d.stopIndex,b=this._getRangeToRender(p),y=b[0],_=b[1],w=[];if(i>0)for(var g=h;g<=m;g++){var x=g<y||g>_;w.push(t.createElement(r,{data:l,hidden:x,key:u(g,l),index:g,style:this._getItemStyle(g)}))}return t.createElement(c||"div",{className:a,ref:this._outerRefSetter,style:n({position:"relative",WebkitOverflowScrolling:"touch",willChange:"transform",contain:"layout"},f)},t.createElement(o||"div",{children:w,ref:this._innerRefSetter,style:{position:"relative",willChange:"transform",contain:"layout",pointerEvents:"none"}}))},I._commitHook=function(){var e=this.props,t=e.layout,n=e.itemCount,r=e.prerenderMode,a=this.state,o=a.scrollOffset;if(a.scrollUpdateWasRequested&&null!=this._innerRef){var i=this._innerRef;i.style.transform="horizontal"===t?"translate3d(-"+o+"px, 0px, 0px)":"translate3d(0px, -"+o+"px, 0px)"}n>0&&this._callPropsCallbacks(),this._clearStyleCacheDebounced(),"function"==typeof b&&("idle"===r?this._prerenderOverscanRows():"idle+debounce"===r&&this._prerenderOverscanRowsDebounced())},I._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered){var e=this.props.itemCount,t=this.state.scrollOffset;if(e>0){var n=this._getRangeToRender(t),r=n[0],a=n[1];this._callOnItemsRendered(r,a)}}},I._getRangeToRender=function(e){var t=this.props.itemCount;if(0===t)return[0,0];var n=f(this.props,e,this._instanceProps),r=d(this.props,n,e,this._instanceProps);return[Math.max(0,n-1),Math.max(0,Math.min(t-1,r+1))]},I._clearStyleCacheDebounced=function(){null!==this._clearStyleCacheTimeoutID&&p(this._clearStyleCacheTimeoutID),this._clearStyleCacheTimeoutID=h(this._clearStyleCache,150)},I._prerenderOverscanRowsDebounced=function(){null!==this._prerenderOverscanRowsTimeoutID&&p(this._prerenderOverscanRowsTimeoutID),this._prerenderOverscanRowsTimeoutID=h(this._prerenderOverscanRows,150)},x}(t.PureComponent),o.defaultProps={itemData:void 0,layout:"vertical",maxNumPrerenderRows:15},i}var _=function(e,t){var n=e.children,r=e.height,a=e.layout,o=(e.innerTagName,e.outerTagName,e.width),i=(t.instance,"horizontal"===a);switch(a){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". "'+a+'" was specified.')}if(null==n)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===n?"null":typeof n)+'" was specified.');if(i&&"number"!=typeof o)throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. "'+(null===o?"null":typeof o)+'" was specified.');if(!i&&"number"!=typeof r)throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. "'+(null===r?"null":typeof r)+'" was specified.')},w=function(e,t,n){var r=e.itemSize,a=n.itemMetadataMap,o=n.lastMeasuredIndex;if(t>o){var i=0;if(o>=0){var l=a[o];i=l.offset+l.size}for(var s=o+1;s<=t;s++){var u=r(s);a[s]={offset:i,size:u},i+=u}n.lastMeasuredIndex=t}return a[t]},g=function(e,t,n,r,a){for(;r<=n;){var o=r+Math.floor((n-r)/2),i=w(e,o,t).offset;if(i===a)return o;i<a?r=o+1:i>a&&(n=o-1)}return r>0?r-1:0},x=function(e,t,n,r){for(var a=e.itemCount,o=1;n<a&&w(e,n,t).offset<r;)n+=o,o*=2;return g(e,t,Math.min(n,a-1),Math.floor(n/2),r)},I=function(e,t){var n=e.itemCount,r=t.itemMetadataMap,a=t.estimatedItemSize,o=t.lastMeasuredIndex,i=0;if(o>=n&&(o=n-1),o>=0){var l=r[o];i=l.offset+l.size}return i+(n-o-1)*a},S=y({getItemOffset:function(e,t,n){return w(e,t,n).offset},getItemSize:function(e,t,n){return n.itemMetadataMap[t].size},getEstimatedTotalSize:I,getOffsetForIndexAndAlignment:function(e,t,n,r,a){var o=e.height,i=e.layout,l=e.width,s="horizontal"===i?l:o,u=w(e,t,a),c=I(e,a),f=Math.max(0,Math.min(c-s,u.offset)),d=Math.max(0,u.offset-s+u.size);switch("smart"===n&&(n=r>=d-s&&r<=f+s?"auto":"center"),n){case"start":return f;case"end":return d;case"center":return Math.round(d+(f-d)/2);case"auto":default:return r>=d&&r<=f?r:r<d?d:f}},getStartIndexForOffset:function(e,t,n){return function(e,t,n){var r=t.itemMetadataMap,a=t.lastMeasuredIndex;return(a>0?r[a].offset:0)>=n?g(e,t,a,0,n):x(e,t,Math.max(0,a),n)}(e,n,t)},getStopIndexForStartIndex:function(e,t,n,r){for(var a=e.height,o=e.itemCount,i=e.layout,l=e.width,s="horizontal"===i?l:a,u=w(e,t,r),c=n+s,f=u.offset+u.size,d=t;d<o-1&&f<c;)d++,f+=w(e,d,r).size;return d},initInstanceProps:function(e,t){var n={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,r){void 0===r&&(r=!0),n.lastMeasuredIndex=Math.min(n.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),r&&t.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){var t=e.itemSize;if("function"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a function. "'+(null===t?"null":typeof t)+'" was specified.')}}),k=y({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,n,r){e.direction;var a=e.height,o=e.itemCount,i=e.itemSize,l=e.layout,s=e.width,u="horizontal"===l?s:a,c=Math.max(0,o*i-u),f=Math.min(c,t*i),d=Math.max(0,t*i-u+i);switch("smart"===n&&(n=r>=d-u&&r<=f+u?"auto":"center"),n){case"start":return f;case"end":return d;case"center":var p=Math.round(d+(f-d)/2);return p<Math.ceil(u/2)?0:p>c+Math.floor(u/2)?c:p;case"auto":default:return r>=d&&r<=f?r:r<d?d:f}},getStartIndexForOffset:function(e,t){var n=e.itemCount,r=e.itemSize;return Math.max(0,Math.min(n-1,Math.floor(t/r)))},getStopIndexForStartIndex:function(e,t,n){e.direction;var r=e.height,a=e.itemCount,o=e.itemSize,i=e.layout,l=e.width,s=t*o,u="horizontal"===i?l:r,c=Math.ceil((u+n-s)/o);return Math.max(0,Math.min(a-1,t+c-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.itemSize;if("number"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.')}});function C(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function M(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}var T=["style"],P=["style"];function R(e,t){var n=e.style,r=C(e,T),a=t.style,o=C(t,P);return!M(n,a)&&!M(r,o)}e.FixedSizeList=k,e.VariableSizeList=S,e.areEqual=R,e.shouldComponentUpdate=function(e,t){return!R(this.props,e)||M(this.state,t)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index-dev.umd.js.map