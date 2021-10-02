!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self).ReactWindow={},e.React)}(this,(function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function a(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(r=e[n],o=t[n],!(r===o||i(r)&&i(o)))return!1;var r,o;return!0}function l(e,t){var n;void 0===t&&(t=a);var r,o=[],i=!1;return function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&n===this&&t(a,o)||(r=e.apply(this,a),i=!0,n=this,o=a),r}}function s(e,t){return e(t={exports:{}},t.exports),t.exports}var u=s((function(e,t){var n,r,o,i;if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,c=null,f=function e(){if(null!==u)try{var n=t.unstable_now();u(!0,n),u=null}catch(t){throw setTimeout(e,0),t}};n=function(e){null!==u?setTimeout(n,0,e):(u=e,setTimeout(f,0))},r=function(e,t){c=setTimeout(e,t)},o=function(){clearTimeout(c)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,p=window.clearTimeout;if("undefined"!=typeof console){var h=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,v=null,b=-1,_=5,y=0;t.unstable_shouldYield=function(){return t.unstable_now()>=y},i=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5};var g=new MessageChannel,w=g.port2;g.port1.onmessage=function(){if(null!==v){var e=t.unstable_now();y=e+_;try{v(!0,e)?w.postMessage(null):(m=!1,v=null)}catch(e){throw w.postMessage(null),e}}else m=!1},n=function(e){v=e,m||(m=!0,w.postMessage(null))},r=function(e,n){b=d((function(){e(t.unstable_now())}),n)},o=function(){p(b),b=-1}}function I(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<M(o,t)))break e;e[r]=t,e[n]=o,n=r}}function x(e){return void 0===(e=e[0])?null:e}function S(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var i=2*(r+1)-1,a=e[i],l=i+1,s=e[l];if(void 0!==a&&0>M(a,n))void 0!==s&&0>M(s,a)?(e[r]=s,e[l]=n,r=l):(e[r]=a,e[i]=n,r=i);else{if(!(void 0!==s&&0>M(s,n)))break e;e[r]=s,e[l]=n,r=l}}}return t}return null}function M(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var k=[],T=[],R=1,P=null,O=3,C=!1,z=!1,F=!1;function D(e){for(var t=x(T);null!==t;){if(null===t.callback)S(T);else{if(!(t.startTime<=e))break;S(T),t.sortIndex=t.expirationTime,I(k,t)}t=x(T)}}function A(e){if(F=!1,D(e),!z)if(null!==x(k))z=!0,n(E);else{var t=x(T);null!==t&&r(A,t.startTime-e)}}function E(e,n){z=!1,F&&(F=!1,o()),C=!0;var i=O;try{for(D(n),P=x(k);null!==P&&(!(P.expirationTime>n)||e&&!t.unstable_shouldYield());){var a=P.callback;if("function"==typeof a){P.callback=null,O=P.priorityLevel;var l=a(P.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?P.callback=l:P===x(k)&&S(k),D(n)}else S(k);P=x(k)}if(null!==P)var s=!0;else{var u=x(T);null!==u&&r(A,u.startTime-n),s=!1}return s}finally{P=null,O=i,C=!1}}var q=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){z||C||(z=!0,n(E))},t.unstable_getCurrentPriorityLevel=function(){return O},t.unstable_getFirstCallbackNode=function(){return x(k)},t.unstable_next=function(e){switch(O){case 1:case 2:case 3:var t=3;break;default:t=O}var n=O;O=t;try{return e()}finally{O=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=q,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},t.unstable_scheduleCallback=function(e,i,a){var l=t.unstable_now();switch("object"==typeof a&&null!==a?a="number"==typeof(a=a.delay)&&0<a?l+a:l:a=l,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:R++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>l?(e.sortIndex=a,I(T,e),null===x(k)&&e===x(T)&&(F?o():F=!0,r(A,a-l))):(e.sortIndex=s,I(k,e),z||C||(z=!0,n(E))),e},t.unstable_wrapCallback=function(e){var t=O;return function(){var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}}})),c=(u.unstable_now,u.unstable_shouldYield,u.unstable_forceFrameRate,u.unstable_IdlePriority,u.unstable_ImmediatePriority,u.unstable_LowPriority,u.unstable_NormalPriority,u.unstable_Profiling,u.unstable_UserBlockingPriority,u.unstable_cancelCallback,u.unstable_continueExecution,u.unstable_getCurrentPriorityLevel,u.unstable_getFirstCallbackNode,u.unstable_next,u.unstable_pauseExecution,u.unstable_requestPaint,u.unstable_runWithPriority,u.unstable_scheduleCallback,u.unstable_wrapCallback,s((function(e,t){!function(){var e,n,r,o;if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,u=null,c=function e(){if(null!==s)try{var n=t.unstable_now();s(!0,n),s=null}catch(t){throw setTimeout(e,0),t}};e=function(t){null!==s?setTimeout(e,0,t):(s=t,setTimeout(c,0))},n=function(e,t){u=setTimeout(e,t)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},o=t.unstable_forceFrameRate=function(){}}else{var f=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var p=window.requestAnimationFrame,h=window.cancelAnimationFrame;"function"!=typeof p&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,v=null,b=-1,_=5,y=0;t.unstable_shouldYield=function(){return t.unstable_now()>=y},o=function(){},t.unstable_forceFrameRate=function(e){e<0||e>125?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=e>0?Math.floor(1e3/e):5};var g=new MessageChannel,w=g.port2;g.port1.onmessage=function(){if(null!==v){var e=t.unstable_now();y=e+_;try{v(!0,e)?w.postMessage(null):(m=!1,v=null)}catch(e){throw w.postMessage(null),e}}else m=!1},e=function(e){v=e,m||(m=!0,w.postMessage(null))},n=function(e,n){b=f((function(){e(t.unstable_now())}),n)},r=function(){d(b),b=-1}}function I(e,t){var n=e.length;e.push(t),function(e,t,n){var r=n;for(;;){var o=r-1>>>1,i=e[o];if(!(void 0!==i&&M(i,t)>0))return;e[o]=t,e[r]=i,r=o}}(e,t,n)}function x(e){var t=e[0];return void 0===t?null:t}function S(e){var t=e[0];if(void 0!==t){var n=e.pop();return n!==t&&(e[0]=n,function(e,t,n){var r=n,o=e.length;for(;r<o;){var i=2*(r+1)-1,a=e[i],l=i+1,s=e[l];if(void 0!==a&&M(a,t)<0)void 0!==s&&M(s,a)<0?(e[r]=s,e[l]=t,r=l):(e[r]=a,e[i]=t,r=i);else{if(!(void 0!==s&&M(s,t)<0))return;e[r]=s,e[l]=t,r=l}}}(e,n,0)),t}return null}function M(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var k=[],T=[],R=1,P=null,O=3,C=!1,z=!1,F=!1;function D(e){for(var t=x(T);null!==t;){if(null===t.callback)S(T);else{if(!(t.startTime<=e))return;S(T),t.sortIndex=t.expirationTime,I(k,t)}t=x(T)}}function A(t){if(F=!1,D(t),!z)if(null!==x(k))z=!0,e(E);else{var r=x(T);null!==r&&n(A,r.startTime-t)}}function E(e,t){z=!1,F&&(F=!1,r()),C=!0;var n=O;try{return q(e,t)}finally{P=null,O=n,C=!1}}function q(e,r){var o=r;for(D(o),P=x(k);null!==P&&(!(P.expirationTime>o)||e&&!t.unstable_shouldYield());){var i=P.callback;if("function"==typeof i){P.callback=null,O=P.priorityLevel;var a=i(P.expirationTime<=o);o=t.unstable_now(),"function"==typeof a?P.callback=a:P===x(k)&&S(k),D(o)}else S(k);P=x(k)}if(null!==P)return!0;var l=x(T);return null!==l&&n(A,l.startTime-o),!1}var j=o;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){z||C||(z=!0,e(E))},t.unstable_getCurrentPriorityLevel=function(){return O},t.unstable_getFirstCallbackNode=function(){return x(k)},t.unstable_next=function(e){var t;switch(O){case 1:case 2:case 3:t=3;break;default:t=O}var n=O;O=t;try{return e()}finally{O=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=j,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},t.unstable_scheduleCallback=function(o,i,a){var l,s,u=t.unstable_now();if("object"==typeof a&&null!==a){var c=a.delay;l="number"==typeof c&&c>0?u+c:u}else l=u;switch(o){case 1:s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;case 3:default:s=5e3}var f=l+s,d={id:R++,callback:i,priorityLevel:o,startTime:l,expirationTime:f,sortIndex:-1};return l>u?(d.sortIndex=l,I(T,d),null===x(k)&&d===x(T)&&(F?r():F=!0,n(A,l-u))):(d.sortIndex=f,I(k,d),z||C||(z=!0,e(E))),d},t.unstable_wrapCallback=function(e){var t=O;return function(){var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}}}()}))),f=(c.unstable_now,c.unstable_shouldYield,c.unstable_forceFrameRate,c.unstable_IdlePriority,c.unstable_ImmediatePriority,c.unstable_LowPriority,c.unstable_NormalPriority,c.unstable_Profiling,c.unstable_UserBlockingPriority,c.unstable_cancelCallback,c.unstable_continueExecution,c.unstable_getCurrentPriorityLevel,c.unstable_getFirstCallbackNode,c.unstable_next,c.unstable_pauseExecution,c.unstable_requestPaint,c.unstable_runWithPriority,c.unstable_scheduleCallback,c.unstable_wrapCallback,s((function(e){e.exports=c}))),d="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function p(e){cancelAnimationFrame(e.id)}function h(e,t){var n=d();var r={id:requestAnimationFrame((function o(){d()-n>=t?e.call(null):r.id=requestAnimationFrame(o)}))};return r}var m=f.unstable_IdlePriority,v=f.unstable_runWithPriority,b={hidden:!0},_=function(e,t){return e};function y(e){var i,a,s=e.getItemOffset,u=(e.getEstimatedTotalSize,e.getItemSize),c=e.getOffsetForIndexAndAlignment,f=e.getStartIndexForOffset,d=e.getStopIndexForStartIndex,y=e.initInstanceProps,w=e.shouldResetStyleCacheOnItemSizeChange,I=e.validateProps;return a=i=function(e){var i,a;function x(t){var n;(n=e.call(this,t)||this)._instanceProps=y(n.props,r(n)),n._outerRef=void 0,n._innerRef=void 0,n._resetIsScrollingTimeoutId=null,n._prerenderOverscanRowsTimeoutID=null,n._callOnItemsRendered=void 0,n._callOnItemsRendered=l((function(e,t){return n.props.onItemsRendered({visibleStartIndex:e,visibleStopIndex:t})})),n._callOnScroll=void 0,n._callOnScroll=l((function(e,t,r){return n.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:r})})),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,r=n.props,o=r.itemSize,i=r.layout,a=n._getItemStyleCache(w&&o,w&&i);if(a.hasOwnProperty(e))t=a[e];else{var l=s(n.props,e,n._instanceProps),c=u(n.props,e,n._instanceProps),f="horizontal"===i,d=f?"translate3d("+l+"px, 0px, 0px)":"translate3d(0px, "+l+"px, 0px)";a[e]=t={transform:d,height:f?0:c,width:f?c:0,willChange:"transform",transition:"none"}}return t},n._getItemStyleCache=void 0,n._getItemStyleCache=l((function(e,t,n){return{}})),n._onScrollHorizontal=function(e){var t=e.currentTarget,r=t.clientWidth,o=t.scrollLeft,i=t.scrollWidth;n.setState((function(e){if(e.scrollOffset===o)return null;var t=o;t=Math.max(0,Math.min(t,i-r));var a=n._getRangeToRender(t),l=a[0],s=a[1],u=l>=e.startIndex&&s<=e.stopIndex;return{isScrolling:!0,scrollDirection:e.scrollOffset<o?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1,startIndex:u?e.startIndex:l,stopIndex:u?e.stopIndex:s}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(e){var t=e.currentTarget,r=t.clientHeight,o=t.scrollHeight,i=t.scrollTop;n.setState((function(e){if(e.scrollOffset===i)return null;var t=Math.max(0,Math.min(i,o-r)),a=n._getRangeToRender(t),l=a[0],s=a[1],u=l>=e.startIndex&&s<=e.stopIndex;return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1,startIndex:u?e.startIndex:l,stopIndex:u?e.stopIndex:s}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._innerRefSetter=function(e){var t=n.props.innerRef;n._innerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._prerenderOverscanRows=function(){n._prerenderOverscanRowsTimeoutID=null,v(m,(function(){n.setState((function(e){var t=n.props,r=t.itemCount,o=t.maxNumPrerenderRows,i=void 0===o?15:o,a=n._getRangeToRender(e.scrollOffset),l=a[0],s=a[1],u=s-l,c=Math.min(u,i),f=Math.max(0,l-c),d=Math.min(r-1,s+c);return e.startIndex===f&&e.stopIndex===d?null:{startIndex:f,stopIndex:d}}))}))},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&p(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=h(n._resetIsScrolling,150)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))};var o=t.initialScrollOffset,i="number"==typeof o?o:0,a=n._getRangeToRender(i),c=a[0],f=a[1];return n.state={instance:r(n),isScrolling:!1,scrollDirection:"forward",scrollOffset:i,scrollUpdateWasRequested:"number"==typeof o,startIndex:c,stopIndex:f},n}a=e,(i=x).prototype=Object.create(a.prototype),i.prototype.constructor=i,o(i,a),x.getDerivedStateFromProps=function(e,t){return g(e,t),I(e),null};var S=x.prototype;return S.scrollTo=function(e){var t=this;e=Math.max(0,e),this.setState((function(n){if(n.scrollOffset===e)return null;var r=t._getRangeToRender(e),o=r[0],i=r[1],a=o>=n.startIndex&&i<=n.stopIndex;return{scrollDirection:n.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0,startIndex:a?n.startIndex:o,stopIndex:a?n.stopIndex:i}}),this._resetIsScrollingDebounced)},S.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,r=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(c(this.props,e,t,r,this._instanceProps))},S.componentDidMount=function(){this._commitHook()},S.componentDidUpdate=function(){this._commitHook()},S.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&p(this._resetIsScrollingTimeoutId),null!==this._prerenderOverscanRowsTimeoutID&&p(this._prerenderOverscanRowsTimeoutID)},S.render=function(){var e=this.props,r=e.itemRenderer,o=e.className,i=e.innerElementType,a=e.itemCount,l=e.itemData,s=e.itemKey,u=void 0===s?_:s,c=e.layout,f=e.outerElementType,d=e.style,p=this.state,h=p.isScrolling,m=p.scrollOffset,v=p.startIndex,y=p.stopIndex,g="horizontal"===c?this._onScrollHorizontal:this._onScrollVertical,w=this._getRangeToRender(m),I=w[0],x=w[1],S=[];if(a>0)for(var M=v;M<=y;M++){var k=M<I||M>x?b:null;S.push(r({data:l,domProperties:k,key:u(M,l),index:M,isScrolling:h,style:this._getItemStyle(M)}))}return t.createElement(f||"div",{className:o,onScroll:g,ref:this._outerRefSetter,style:n({position:"relative",WebkitOverflowScrolling:"touch",willChange:"transform",contain:"layout"},d)},t.createElement(i||"div",{children:S,ref:this._innerRefSetter,style:{position:"relative",willChange:"transform",contain:"layout",pointerEvents:"none"}}))},S._commitHook=function(){var e=this.props,t=e.layout,n=e.itemCount,r=e.prerenderMode,o=this.state,i=o.scrollOffset;if(o.scrollUpdateWasRequested&&null!=this._innerRef){var a=this._innerRef;a.style.transform="horizontal"===t?"translate3d(-"+i+"px, 0px, 0px)":"translate3d(0px, -"+i+"px, 0px)"}n>0&&this._callPropsCallbacks(),"function"==typeof v&&("idle"===r?this._prerenderOverscanRows():"idle+debounce"===r&&this._prerenderOverscanRowsDebounced())},S._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered){var e=this.props.itemCount,t=this.state.scrollOffset;if(e>0){var n=this._getRangeToRender(t),r=n[0],o=n[1];this._callOnItemsRendered(r,o)}}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},S._getRangeToRender=function(e){var t=this.props.itemCount;if(0===t)return[0,0];var n=f(this.props,e,this._instanceProps),r=d(this.props,n,e,this._instanceProps);return[Math.max(0,n-1),Math.max(0,Math.min(t-1,r+1))]},S._prerenderOverscanRowsDebounced=function(){null!==this._prerenderOverscanRowsTimeoutID&&p(this._prerenderOverscanRowsTimeoutID),this._prerenderOverscanRowsTimeoutID=h(this._prerenderOverscanRows,150)},x}(t.PureComponent),i.defaultProps={itemData:void 0,layout:"vertical"},a}var g=function(e,t){var n=e.height,r=e.layout,o=(e.innerTagName,e.outerTagName,e.width),i=(t.instance,"horizontal"===r);switch(r){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". "'+r+'" was specified.')}if(i&&"number"!=typeof o)throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. "'+(null===o?"null":typeof o)+'" was specified.');if(!i&&"number"!=typeof n)throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. "'+(null===n?"null":typeof n)+'" was specified.')},w=function(e,t,n){var r=e.itemSize,o=n.itemMetadataMap,i=n.lastMeasuredIndex;if(t>i){var a=0;if(i>=0){var l=o[i];a=l.offset+l.size}for(var s=i+1;s<=t;s++){var u=r(s);o[s]={offset:a,size:u},a+=u}n.lastMeasuredIndex=t}return o[t]},I=function(e,t,n,r,o){for(;r<=n;){var i=r+Math.floor((n-r)/2),a=w(e,i,t).offset;if(a===o)return i;a<o?r=i+1:a>o&&(n=i-1)}return r>0?r-1:0},x=function(e,t,n,r){for(var o=e.itemCount,i=1;n<o&&w(e,n,t).offset<r;)n+=i,i*=2;return I(e,t,Math.min(n,o-1),Math.floor(n/2),r)},S=function(e,t){var n=e.itemCount,r=t.itemMetadataMap,o=t.estimatedItemSize,i=t.lastMeasuredIndex,a=0;if(i>=n&&(i=n-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(n-i-1)*o},M=y({getItemOffset:function(e,t,n){return w(e,t,n).offset},getItemSize:function(e,t,n){return n.itemMetadataMap[t].size},getEstimatedTotalSize:S,getOffsetForIndexAndAlignment:function(e,t,n,r,o){var i=e.height,a=e.layout,l=e.width,s="horizontal"===a?l:i,u=w(e,t,o),c=S(e,o),f=Math.max(0,Math.min(c-s,u.offset)),d=Math.max(0,u.offset-s+u.size);switch("smart"===n&&(n=r>=d-s&&r<=f+s?"auto":"center"),n){case"start":return f;case"end":return d;case"center":return Math.round(d+(f-d)/2);case"auto":default:return r>=d&&r<=f?r:r<d?d:f}},getStartIndexForOffset:function(e,t,n){return function(e,t,n){var r=t.itemMetadataMap,o=t.lastMeasuredIndex;return(o>0?r[o].offset:0)>=n?I(e,t,o,0,n):x(e,t,Math.max(0,o),n)}(e,n,t)},getStopIndexForStartIndex:function(e,t,n,r){for(var o=e.height,i=e.itemCount,a=e.layout,l=e.width,s="horizontal"===a?l:o,u=w(e,t,r),c=n+s,f=u.offset+u.size,d=t;d<i-1&&f<c;)d++,f+=w(e,d,r).size;return d},initInstanceProps:function(e,t){var n={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,r){void 0===r&&(r=!0),n.lastMeasuredIndex=Math.min(n.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),r&&t.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){var t=e.itemSize;if("function"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a function. "'+(null===t?"null":typeof t)+'" was specified.')}}),k=y({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,n,r){e.direction;var o=e.height,i=e.itemCount,a=e.itemSize,l=e.layout,s=e.width,u="horizontal"===l?s:o,c=Math.max(0,i*a-u),f=Math.min(c,t*a),d=Math.max(0,t*a-u+a);switch("smart"===n&&(n=r>=d-u&&r<=f+u?"auto":"center"),n){case"start":return f;case"end":return d;case"center":var p=Math.round(d+(f-d)/2);return p<Math.ceil(u/2)?0:p>c+Math.floor(u/2)?c:p;case"auto":default:return r>=d&&r<=f?r:r<d?d:f}},getStartIndexForOffset:function(e,t){var n=e.itemCount,r=e.itemSize;return Math.max(0,Math.min(n-1,Math.floor(t/r)))},getStopIndexForStartIndex:function(e,t,n){e.direction;var r=e.height,o=e.itemCount,i=e.itemSize,a=e.layout,l=e.width,s=t*i,u="horizontal"===a?l:r,c=Math.ceil((u+n-s)/i);return Math.max(0,Math.min(o-1,t+c-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.itemSize;if("number"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.')}});function T(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function R(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}var P=["style"],O=["style"];function C(e,t){var n=e.style,r=T(e,P),o=t.style,i=T(t,O);return!R(n,o)&&!R(r,i)}e.FixedSizeList=k,e.VariableSizeList=M,e.areEqual=C,e.shouldComponentUpdate=function(e,t){return!C(this.props,e)||R(this.state,t)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index-dev.umd.js.map
