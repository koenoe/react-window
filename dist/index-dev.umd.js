!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self).ReactWindow={},e.React)}(this,function(e,t){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var o=function(e,t){return e.length===t.length&&e.every(function(e,r){return n=e,o=t[r],n===o;var n,o})};function i(e,t){var r;void 0===t&&(t=o);var n,i=[],a=!1;return function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return a&&r===this&&t(s,i)?n:(n=e.apply(this,s),a=!0,r=this,i=s,n)}}var a="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function s(e){cancelAnimationFrame(e.id)}var l=150,c=function(e,t){return e},u=null;function f(e){var o,u,f=e.getItemOffset,p=(e.getEstimatedTotalSize,e.getItemSize),h=e.getOffsetForIndexAndAlignment,m=e.getStartIndexForOffset,v=e.getStopIndexForStartIndex,S=e.initInstanceProps,g=e.shouldResetStyleCacheOnItemSizeChange,y=e.validateProps;return u=o=function(e){var o,u;function I(t){var r;return(r=e.call(this,t)||this)._instanceProps=S(r.props,n(n(r))),r._outerRef=void 0,r._innerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:n(n(r)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=i(function(e,t,n,o){return r.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:n,visibleStopIndex:o})}),r._callOnScroll=void 0,r._callOnScroll=i(function(e,t,n){return r.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:n})}),r._getItemStyle=void 0,r._getItemStyle=function(e){var t,n=r.props,o=n.itemSize,i=n.layout,a=r._getItemStyleCache(g&&o,g&&i);if(a.hasOwnProperty(e))t=a[e];else{var s=f(r.props,e,r._instanceProps),l=p(r.props,e,r._instanceProps),c="horizontal"===i,u=c?s:0;a[e]=t={left:u,right:void 0,top:c?0:s,height:c?"100%":l,width:c?l:"100%"}}return t},r._getItemStyleCache=void 0,r._getItemStyleCache=i(function(e,t,r){return{}}),r._onScrollHorizontal=function(e){var t=e.currentTarget,n=t.clientWidth,o=t.scrollLeft,i=t.scrollWidth;r.setState(function(e){if(e.scrollOffset===o)return null;var t=o;return t=Math.max(0,Math.min(t,i-n)),{isScrolling:!0,scrollDirection:e.scrollOffset<o?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._onScrollVertical=function(e){var t=e.currentTarget,n=t.clientHeight,o=t.scrollHeight,i=t.scrollTop;r.setState(function(e){if(e.scrollOffset===i)return null;var t=Math.max(0,Math.min(i,o-n));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._innerRefSetter=function(e){var t=r.props.innerRef;r._innerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){var e,t,n,o;null!==r._resetIsScrollingTimeoutId&&s(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=(e=r._resetIsScrolling,t=l,n=a(),o={id:requestAnimationFrame(function r(){a()-n>=t?e.call(null):o.id=requestAnimationFrame(r)})})},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},function(){r._getItemStyleCache(-1,null)})},r}u=e,(o=I).prototype=Object.create(u.prototype),o.prototype.constructor=o,o.__proto__=u,I.getDerivedStateFromProps=function(e,t){return d(e,t),y(e),null};var _=I.prototype;return _.scrollTo=function(e){e=Math.max(0,e),this.setState(function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},_.scrollToItem=function(e,t){void 0===t&&(t="auto");var r=this.props.itemCount,n=this.state.scrollOffset;e=Math.max(0,Math.min(e,r-1)),this.scrollTo(h(this.props,e,t,n,this._instanceProps))},_.componentDidMount=function(){var e=this.props,t=e.initialScrollOffset,r=e.layout;if("number"==typeof t&&null!=this._innerRef){var n=this._innerRef;n.style.transform="horizontal"===r?"translate3d(-"+t+"px, 0px, 0px)":"translate3d(0px, -"+t+"px, 0px)"}this._callPropsCallbacks()},_.componentDidUpdate=function(){var e=this.props.layout,t=this.state,r=t.scrollOffset;if(t.scrollUpdateWasRequested&&null!=this._innerRef){var n=this._innerRef;n.style.transform="horizontal"===e?"translate3d(-"+r+"px, 0px, 0px)":"translate3d(0px, -"+r+"px, 0px)"}this._callPropsCallbacks()},_.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},_.render=function(){var e=this.props,n=e.children,o=e.className,i=e.innerElementType,a=e.innerTagName,s=e.itemCount,l=e.itemData,u=e.itemKey,f=void 0===u?c:u,d=e.layout,p=e.outerElementType,h=e.outerTagName,m=e.style,v=e.useIsScrolling,S=this.state.isScrolling,g="horizontal"===d?this._onScrollHorizontal:this._onScrollVertical,y=this._getRangeToRender(),I=y[0],_=y[1],x=[];if(s>0)for(var w=I;w<=_;w++)x.push(t.createElement(n,{data:l,key:f(w,l),index:w,isScrolling:v?S:void 0,style:this._getItemStyle(w)}));return t.createElement(p||h||"div",{className:o,onScroll:g,ref:this._outerRefSetter,style:r({position:"relative",WebkitOverflowScrolling:"touch",willChange:"transform",contain:"layout"},m)},t.createElement(i||a||"div",{children:x,ref:this._innerRefSetter,style:{position:"relative",willChange:"transform",contain:"layout"}}))},_._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],r=e[1],n=e[2],o=e[3];this._callOnItemsRendered(t,r,n,o)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,s=i.scrollOffset,l=i.scrollUpdateWasRequested;this._callOnScroll(a,s,l)}},_._getRangeToRender=function(){var e=this.props,t=e.itemCount,r=e.overscanCount,n=this.state,o=n.isScrolling,i=n.scrollDirection,a=n.scrollOffset;if(0===t)return[0,0,0,0];var s=m(this.props,a,this._instanceProps),l=v(this.props,s,a,this._instanceProps),c=o&&"backward"!==i?1:Math.max(1,r),u=o&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,s-c),Math.max(0,Math.min(t-1,l+u)),s,l]},I}(t.PureComponent),o.defaultProps={itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},u}"undefined"!=typeof window&&void 0!==window.WeakSet&&(u=new WeakSet);var d=function(e,t){var r=e.children,n=e.height,o=e.layout,i=e.innerTagName,a=e.outerTagName,s=e.width,l=t.instance;null==i&&null==a||u&&!u.has(l)&&(u.add(l),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));var c="horizontal"===o;switch(o){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". "'+o+'" was specified.')}if(null==r)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===r?"null":typeof r)+'" was specified.');if(c&&"number"!=typeof s)throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. "'+(null===s?"null":typeof s)+'" was specified.');if(!c&&"number"!=typeof n)throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. "'+(null===n?"null":typeof n)+'" was specified.')},p=function(e,t,r){var n=e.itemSize,o=r.itemMetadataMap,i=r.lastMeasuredIndex;if(t>i){var a=0;if(i>=0){var s=o[i];a=s.offset+s.size}for(var l=i+1;l<=t;l++){var c=n(l);o[l]={offset:a,size:c},a+=c}r.lastMeasuredIndex=t}return o[t]},h=function(e,t,r,n,o){for(;n<=r;){var i=n+Math.floor((r-n)/2),a=p(e,i,t).offset;if(a===o)return i;a<o?n=i+1:a>o&&(r=i-1)}return n>0?n-1:0},m=function(e,t,r,n){for(var o=e.itemCount,i=1;r<o&&p(e,r,t).offset<n;)r+=i,i*=2;return h(e,t,Math.min(r,o-1),Math.floor(r/2),n)},v=function(e,t){var r=e.itemCount,n=t.itemMetadataMap,o=t.estimatedItemSize,i=t.lastMeasuredIndex,a=0;if(i>=r&&(i=r-1),i>=0){var s=n[i];a=s.offset+s.size}return a+(r-i-1)*o},S=f({getItemOffset:function(e,t,r){return p(e,t,r).offset},getItemSize:function(e,t,r){return r.itemMetadataMap[t].size},getEstimatedTotalSize:v,getOffsetForIndexAndAlignment:function(e,t,r,n,o){var i=e.direction,a=e.height,s=e.layout,l=e.width,c="horizontal"===i||"horizontal"===s?l:a,u=p(e,t,o),f=v(e,o),d=Math.max(0,Math.min(f-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===r&&(r=n>=h-c&&n<=d+c?"auto":"center"),r){case"start":return d;case"end":return h;case"center":return Math.round(h+(d-h)/2);case"auto":default:return n>=h&&n<=d?n:n<h?h:d}},getStartIndexForOffset:function(e,t,r){return function(e,t,r){var n=t.itemMetadataMap,o=t.lastMeasuredIndex;return(o>0?n[o].offset:0)>=r?h(e,t,o,0,r):m(e,t,Math.max(0,o),r)}(e,r,t)},getStopIndexForStartIndex:function(e,t,r,n){for(var o=e.direction,i=e.height,a=e.itemCount,s=e.layout,l=e.width,c="horizontal"===o||"horizontal"===s?l:i,u=p(e,t,n),f=r+c,d=u.offset+u.size,h=t;h<a-1&&d<f;)d+=p(e,++h,n).size;return h},initInstanceProps:function(e,t){var r={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,n){void 0===n&&(n=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),n&&t.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){var t=e.itemSize;if("function"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a function. "'+(null===t?"null":typeof t)+'" was specified.')}}),g=f({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,r,n){var o=e.direction,i=e.height,a=e.itemCount,s=e.itemSize,l=e.layout,c=e.width,u="horizontal"===o||"horizontal"===l?c:i,f=Math.max(0,a*s-u),d=Math.min(f,t*s),p=Math.max(0,t*s-u+s);switch("smart"===r&&(r=n>=p-u&&n<=d+u?"auto":"center"),r){case"start":return d;case"end":return p;case"center":var h=Math.round(p+(d-p)/2);return h<Math.ceil(u/2)?0:h>f+Math.floor(u/2)?f:h;case"auto":default:return n>=p&&n<=d?n:n<p?p:d}},getStartIndexForOffset:function(e,t){var r=e.itemCount,n=e.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/n)))},getStopIndexForStartIndex:function(e,t,r){var n=e.direction,o=e.height,i=e.itemCount,a=e.itemSize,s=e.layout,l=e.width,c=t*a,u="horizontal"===n||"horizontal"===s?l:o,f=Math.ceil((u+r-c)/a);return Math.max(0,Math.min(i-1,t+f-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.itemSize;if("number"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.')}});function y(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function I(e,t){for(var r in e)if(!(r in t))return!0;for(var n in t)if(e[n]!==t[n])return!0;return!1}function _(e,t){var r=e.style,n=y(e,["style"]),o=t.style,i=y(t,["style"]);return!I(r,o)&&!I(n,i)}e.VariableSizeList=S,e.FixedSizeList=g,e.areEqual=_,e.shouldComponentUpdate=function(e,t){return!_(this.props,e)||I(this.state,t)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index-dev.umd.js.map
