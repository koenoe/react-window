!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self).ReactWindow={},e.React)}(this,(function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var o=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function i(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(r=e[n],a=t[n],!(r===a||o(r)&&o(a)))return!1;var r,a;return!0}function s(e,t){var n;void 0===t&&(t=i);var r,a=[],o=!1;return function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return o&&n===this&&t(i,a)||(r=e.apply(this,i),o=!0,n=this,a=i),r}}function l(e,t){return e(t={exports:{}},t.exports),t.exports}var u=l((function(e,t){var n,r,a,o;if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,c=null,f=function e(){if(null!==u)try{var n=t.unstable_now();u(!0,n),u=null}catch(t){throw setTimeout(e,0),t}};n=function(e){null!==u?setTimeout(n,0,e):(u=e,setTimeout(f,0))},r=function(e,t){c=setTimeout(e,t)},a=function(){clearTimeout(c)},t.unstable_shouldYield=function(){return!1},o=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,p=window.clearTimeout;if("undefined"!=typeof console){var h=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,v=null,_=-1,b=5,y=0;t.unstable_shouldYield=function(){return t.unstable_now()>=y},o=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<e?Math.floor(1e3/e):5};var x=new MessageChannel,I=x.port2;x.port1.onmessage=function(){if(null!==v){var e=t.unstable_now();y=e+b;try{v(!0,e)?I.postMessage(null):(m=!1,v=null)}catch(e){throw I.postMessage(null),e}}else m=!1},n=function(e){v=e,m||(m=!0,I.postMessage(null))},r=function(e,n){_=d((function(){e(t.unstable_now())}),n)},a=function(){p(_),_=-1}}function g(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,a=e[r];if(!(void 0!==a&&0<M(a,t)))break e;e[r]=t,e[n]=a,n=r}}function w(e){return void 0===(e=e[0])?null:e}function S(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length;r<a;){var o=2*(r+1)-1,i=e[o],s=o+1,l=e[s];if(void 0!==i&&0>M(i,n))void 0!==l&&0>M(l,i)?(e[r]=l,e[s]=n,r=s):(e[r]=i,e[o]=n,r=o);else{if(!(void 0!==l&&0>M(l,n)))break e;e[r]=l,e[s]=n,r=s}}}return t}return null}function M(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var C=[],R=[],P=1,O=null,T=3,k=!1,z=!1,D=!1;function F(e){for(var t=w(R);null!==t;){if(null===t.callback)S(R);else{if(!(t.startTime<=e))break;S(R),t.sortIndex=t.expirationTime,g(C,t)}t=w(R)}}function E(e){if(D=!1,F(e),!z)if(null!==w(C))z=!0,n(j);else{var t=w(R);null!==t&&r(E,t.startTime-e)}}function j(e,n){z=!1,D&&(D=!1,a()),k=!0;var o=T;try{for(F(n),O=w(C);null!==O&&(!(O.expirationTime>n)||e&&!t.unstable_shouldYield());){var i=O.callback;if("function"==typeof i){O.callback=null,T=O.priorityLevel;var s=i(O.expirationTime<=n);n=t.unstable_now(),"function"==typeof s?O.callback=s:O===w(C)&&S(C),F(n)}else S(C);O=w(C)}if(null!==O)var l=!0;else{var u=w(R);null!==u&&r(E,u.startTime-n),l=!1}return l}finally{O=null,T=o,k=!1}}var A=o;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){z||k||(z=!0,n(j))},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_getFirstCallbackNode=function(){return w(C)},t.unstable_next=function(e){switch(T){case 1:case 2:case 3:var t=3;break;default:t=T}var n=T;T=t;try{return e()}finally{T=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=A,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=T;T=e;try{return t()}finally{T=n}},t.unstable_scheduleCallback=function(e,o,i){var s=t.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?s+i:s:i=s,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:P++,callback:o,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>s?(e.sortIndex=i,g(R,e),null===w(C)&&e===w(R)&&(D?a():D=!0,r(E,i-s))):(e.sortIndex=l,g(C,e),z||k||(z=!0,n(j))),e},t.unstable_wrapCallback=function(e){var t=T;return function(){var n=T;T=t;try{return e.apply(this,arguments)}finally{T=n}}}})),c=(u.unstable_now,u.unstable_shouldYield,u.unstable_forceFrameRate,u.unstable_IdlePriority,u.unstable_ImmediatePriority,u.unstable_LowPriority,u.unstable_NormalPriority,u.unstable_Profiling,u.unstable_UserBlockingPriority,u.unstable_cancelCallback,u.unstable_continueExecution,u.unstable_getCurrentPriorityLevel,u.unstable_getFirstCallbackNode,u.unstable_next,u.unstable_pauseExecution,u.unstable_requestPaint,u.unstable_runWithPriority,u.unstable_scheduleCallback,u.unstable_wrapCallback,l((function(e,t){}))),f=(c.unstable_now,c.unstable_shouldYield,c.unstable_forceFrameRate,c.unstable_IdlePriority,c.unstable_ImmediatePriority,c.unstable_LowPriority,c.unstable_NormalPriority,c.unstable_Profiling,c.unstable_UserBlockingPriority,c.unstable_cancelCallback,c.unstable_continueExecution,c.unstable_getCurrentPriorityLevel,c.unstable_getFirstCallbackNode,c.unstable_next,c.unstable_pauseExecution,c.unstable_requestPaint,c.unstable_runWithPriority,c.unstable_scheduleCallback,c.unstable_wrapCallback,l((function(e){e.exports=u}))),d="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function p(e){cancelAnimationFrame(e.id)}function h(e,t){var n=d();var r={id:requestAnimationFrame((function a(){d()-n>=t?e.call(null):r.id=requestAnimationFrame(a)}))};return r}var m=f.unstable_IdlePriority,v=f.unstable_runWithPriority,_=function(e,t){return e};function b(e){var o,i,l=e.getItemOffset,u=(e.getEstimatedTotalSize,e.getItemSize),c=e.getOffsetForIndexAndAlignment,f=e.getStartIndexForOffset,d=e.getStopIndexForStartIndex,b=e.initInstanceProps,x=e.shouldResetStyleCacheOnItemSizeChange,I=e.validateProps;return i=o=function(e){var o,i;function g(t){var n;(n=e.call(this,t)||this)._instanceProps=b(n.props,r(n)),n._outerRef=void 0,n._innerRef=void 0,n._prerenderOverscanRowsTimeoutID=null,n._clearStyleCacheTimeoutID=null,n._callOnItemsRendered=void 0,n._callOnItemsRendered=s((function(e,t){return n.props.onItemsRendered({visibleStartIndex:e,visibleStopIndex:t})})),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,r=n.props,a=r.itemSize,o=r.layout,i=n._getItemStyleCache(x&&a,x&&o);if(i.hasOwnProperty(e))t=i[e];else{var s=l(n.props,e,n._instanceProps),c=u(n.props,e,n._instanceProps),f="horizontal"===o,d=f?"translate3d("+s+"px, 0px, 0px)":"translate3d(0px, "+s+"px, 0px)";i[e]=t={transform:d,height:f?0:c,width:f?c:0,willChange:"transform",transition:"none"}}return t},n._getItemStyleCache=void 0,n._getItemStyleCache=s((function(e,t,n){return{}})),n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._innerRefSetter=function(e){var t=n.props.innerRef;n._innerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._prerenderOverscanRows=function(){n._prerenderOverscanRowsTimeoutID=null,v(m,(function(){n.setState((function(e){var t=n.props,r=t.itemCount,a=t.maxNumPrerenderRows,o=void 0===a?15:a,i=n._getRangeToRender(e.scrollOffset),s=i[0],l=i[1],u=l-s,c=Math.min(u,o),f=Math.max(0,s-c),d=Math.min(r-1,l+c);return e.startIndex===f&&e.stopIndex===d?null:{startIndex:f,stopIndex:d}}))}))};var a=t.initialScrollOffset,o="number"==typeof a?a:0,i=n._getRangeToRender(o),c=i[0],f=i[1];return n.state={instance:r(n),scrollDirection:"forward",scrollOffset:o,scrollUpdateWasRequested:"number"==typeof a,startIndex:c,stopIndex:f},n}i=e,(o=g).prototype=Object.create(i.prototype),o.prototype.constructor=o,a(o,i),g.getDerivedStateFromProps=function(e,t){return y(e,t),I(e),null};var w=g.prototype;return w.scrollTo=function(e){var t=this;e=Math.max(0,e),this.setState((function(n){if(n.scrollOffset===e)return null;var r=t._getRangeToRender(e),a=r[0],o=r[1],i=a>=n.startIndex&&o<=n.stopIndex;return{scrollDirection:n.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0,startIndex:i?n.startIndex:a,stopIndex:i?n.stopIndex:o}}))},w.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,r=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(c(this.props,e,t,r,this._instanceProps))},w.componentDidMount=function(){this._commitHook()},w.componentDidUpdate=function(){this._commitHook()},w.componentWillUnmount=function(){null!==this._prerenderOverscanRowsTimeoutID&&p(this._prerenderOverscanRowsTimeoutID),null!==this._clearStyleCacheTimeoutID&&p(this._clearStyleCacheTimeoutID)},w.render=function(){var e=this.props,r=e.children,a=e.className,o=e.innerElementType,i=e.itemCount,s=e.itemData,l=e.itemKey,u=void 0===l?_:l,c=e.outerElementType,f=e.style,d=this.state,p=d.scrollOffset,h=d.startIndex,m=d.stopIndex,v=this._getRangeToRender(p),b=v[0],y=v[1],x=[];if(i>0)for(var I=h;I<=m;I++){var g=I<b||I>y;x.push(t.createElement(r,{data:s,hidden:g,key:u(I,s),index:I,style:this._getItemStyle(I)}))}return t.createElement(c||"div",{className:a,ref:this._outerRefSetter,style:n({position:"relative",WebkitOverflowScrolling:"touch",willChange:"transform",contain:"layout"},f)},t.createElement(o||"div",{children:x,ref:this._innerRefSetter,style:{position:"relative",willChange:"transform",contain:"layout",pointerEvents:"none"}}))},w._commitHook=function(){var e=this.props,t=e.layout,n=e.itemCount,r=e.prerenderMode,a=this.state,o=a.scrollOffset;if(a.scrollUpdateWasRequested&&null!=this._innerRef){var i=this._innerRef;i.style.transform="horizontal"===t?"translate3d(-"+o+"px, 0px, 0px)":"translate3d(0px, -"+o+"px, 0px)"}n>0&&this._callPropsCallbacks(),this._clearStyleCacheDebounced(),"function"==typeof v&&("idle"===r?this._prerenderOverscanRows():"idle+debounce"===r&&this._prerenderOverscanRowsDebounced())},w._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered){var e=this.props.itemCount,t=this.state.scrollOffset;if(e>0){var n=this._getRangeToRender(t),r=n[0],a=n[1];this._callOnItemsRendered(r,a)}}},w._getRangeToRender=function(e){var t=this.props,n=t.itemCount,r=t.overscanCount,a=void 0===r?1:r,o=this.state.scrollDirection;if(0===n)return[0,0];var i=f(this.props,e,this._instanceProps),s=d(this.props,i,e,this._instanceProps),l="backward"===o?Math.max(1,a):1,u="forward"===o?Math.max(1,a):1;return[Math.max(0,i-l),Math.max(0,Math.min(n-1,s+u))]},w._clearStyleCacheDebounced=function(){null!==this._clearStyleCacheTimeoutID&&p(this._clearStyleCacheTimeoutID),this._clearStyleCacheTimeoutID=h(this._clearStyleCache,150)},w._clearStyleCache=function(){this._getItemStyleCache(-1,null)},w._prerenderOverscanRowsDebounced=function(){null!==this._prerenderOverscanRowsTimeoutID&&p(this._prerenderOverscanRowsTimeoutID),this._prerenderOverscanRowsTimeoutID=h(this._prerenderOverscanRows,150)},g}(t.PureComponent),o.defaultProps={itemData:void 0,layout:"vertical"},i}var y=function(e,t){e.children,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},x=function(e,t,n){var r=e.itemSize,a=n.itemMetadataMap,o=n.lastMeasuredIndex;if(t>o){var i=0;if(o>=0){var s=a[o];i=s.offset+s.size}for(var l=o+1;l<=t;l++){var u=r(l);a[l]={offset:i,size:u},i+=u}n.lastMeasuredIndex=t}return a[t]},I=function(e,t,n,r,a){for(;r<=n;){var o=r+Math.floor((n-r)/2),i=x(e,o,t).offset;if(i===a)return o;i<a?r=o+1:i>a&&(n=o-1)}return r>0?r-1:0},g=function(e,t,n,r){for(var a=e.itemCount,o=1;n<a&&x(e,n,t).offset<r;)n+=o,o*=2;return I(e,t,Math.min(n,a-1),Math.floor(n/2),r)},w=function(e,t){var n=e.itemCount,r=t.itemMetadataMap,a=t.estimatedItemSize,o=t.lastMeasuredIndex,i=0;if(o>=n&&(o=n-1),o>=0){var s=r[o];i=s.offset+s.size}return i+(n-o-1)*a},S=b({getItemOffset:function(e,t,n){return x(e,t,n).offset},getItemSize:function(e,t,n){return n.itemMetadataMap[t].size},getEstimatedTotalSize:w,getOffsetForIndexAndAlignment:function(e,t,n,r,a){var o=e.height,i=e.layout,s=e.width,l="horizontal"===i?s:o,u=x(e,t,a),c=w(e,a),f=Math.max(0,Math.min(c-l,u.offset)),d=Math.max(0,u.offset-l+u.size);switch("smart"===n&&(n=r>=d-l&&r<=f+l?"auto":"center"),n){case"start":return f;case"end":return d;case"center":return Math.round(d+(f-d)/2);case"auto":default:return r>=d&&r<=f?r:r<d?d:f}},getStartIndexForOffset:function(e,t,n){return function(e,t,n){var r=t.itemMetadataMap,a=t.lastMeasuredIndex;return(a>0?r[a].offset:0)>=n?I(e,t,a,0,n):g(e,t,Math.max(0,a),n)}(e,n,t)},getStopIndexForStartIndex:function(e,t,n,r){for(var a=e.height,o=e.itemCount,i=e.layout,s=e.width,l="horizontal"===i?s:a,u=x(e,t,r),c=n+l,f=u.offset+u.size,d=t;d<o-1&&f<c;)d++,f+=x(e,d,r).size;return d},initInstanceProps:function(e,t){var n={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,r){void 0===r&&(r=!0),n.lastMeasuredIndex=Math.min(n.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),r&&t.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}}),M=b({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,n,r){e.direction;var a=e.height,o=e.itemCount,i=e.itemSize,s=e.layout,l=e.width,u="horizontal"===s?l:a,c=Math.max(0,o*i-u),f=Math.min(c,t*i),d=Math.max(0,t*i-u+i);switch("smart"===n&&(n=r>=d-u&&r<=f+u?"auto":"center"),n){case"start":return f;case"end":return d;case"center":var p=Math.round(d+(f-d)/2);return p<Math.ceil(u/2)?0:p>c+Math.floor(u/2)?c:p;case"auto":default:return r>=d&&r<=f?r:r<d?d:f}},getStartIndexForOffset:function(e,t){var n=e.itemCount,r=e.itemSize;return Math.max(0,Math.min(n-1,Math.floor(t/r)))},getStopIndexForStartIndex:function(e,t,n){e.direction;var r=e.height,a=e.itemCount,o=e.itemSize,i=e.layout,s=e.width,l=t*o,u="horizontal"===i?s:r,c=Math.ceil((u+n-l)/o);return Math.max(0,Math.min(a-1,t+c-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}});function C(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function R(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}var P=["style"],O=["style"];function T(e,t){var n=e.style,r=C(e,P),a=t.style,o=C(t,O);return!R(n,a)&&!R(r,o)}e.FixedSizeList=M,e.VariableSizeList=S,e.areEqual=T,e.shouldComponentUpdate=function(e,t){return!T(this.props,e)||R(this.state,t)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index-prod.umd.js.map
