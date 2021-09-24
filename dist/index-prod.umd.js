!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t=t||self).ReactWindow={},t.React)}(this,function(t,e){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var o=function(t,e){return t.length===e.length&&t.every(function(t,r){return n=t,o=e[r],n===o;var n,o})};function i(t,e){var r;void 0===e&&(e=o);var n,i=[],a=!1;return function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return a&&r===this&&e(s,i)?n:(n=t.apply(this,s),a=!0,r=this,i=s,n)}}var a="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function s(t){cancelAnimationFrame(t.id)}var l=150,c=function(t,e){return t};function u(t){var o,u,d=t.getItemOffset,h=(t.getEstimatedTotalSize,t.getItemSize),p=t.getOffsetForIndexAndAlignment,m=t.getStartIndexForOffset,S=t.getStopIndexForStartIndex,v=t.initInstanceProps,g=t.shouldResetStyleCacheOnItemSizeChange,I=t.validateProps;return u=o=function(t){var o,u;function y(e){var r;return(r=t.call(this,e)||this)._instanceProps=v(r.props,n(n(r))),r._outerRef=void 0,r._innerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:n(n(r)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=i(function(t,e,n,o){return r.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:n,visibleStopIndex:o})}),r._callOnScroll=void 0,r._callOnScroll=i(function(t,e,n){return r.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:n})}),r._getItemStyle=void 0,r._getItemStyle=function(t){var e,n=r.props,o=n.direction,i=n.itemSize,a=n.layout,s=r._getItemStyleCache(g&&i,g&&a,g&&o);if(s.hasOwnProperty(t))e=s[t];else{var l=d(r.props,t,r._instanceProps),c=h(r.props,t,r._instanceProps),u="horizontal"===o||"horizontal"===a,f=u?l:0;s[t]=e={left:f,right:void 0,top:u?0:l,height:u?"100%":c,width:u?c:"100%"}}return e},r._getItemStyleCache=void 0,r._getItemStyleCache=i(function(t,e,r){return{}}),r._onScrollHorizontal=function(t){var e=t.currentTarget,n=e.clientWidth,o=e.scrollLeft,i=e.scrollWidth;r.setState(function(t){if(t.scrollOffset===o)return null;var e=o;return e=Math.max(0,Math.min(e,i-n)),{isScrolling:!0,scrollDirection:t.scrollOffset<o?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._onScrollVertical=function(t){var e=t.currentTarget,n=e.clientHeight,o=e.scrollHeight,i=e.scrollTop;r.setState(function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,o-n));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._outerRefSetter=function(t){var e=r.props.outerRef;r._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},r._innerRefSetter=function(t){var e=r.props.innerRef;r._innerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},r._resetIsScrollingDebounced=function(){var t,e,n,o;null!==r._resetIsScrollingTimeoutId&&s(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=(t=r._resetIsScrolling,e=l,n=a(),o={id:requestAnimationFrame(function r(){a()-n>=e?t.call(null):o.id=requestAnimationFrame(r)})})},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},function(){r._getItemStyleCache(-1,null)})},r}u=t,(o=y).prototype=Object.create(u.prototype),o.prototype.constructor=o,o.__proto__=u,y.getDerivedStateFromProps=function(t,e){return f(t,e),I(t),null};var _=y.prototype;return _.scrollTo=function(t){t=Math.max(0,t),this.setState(function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},_.scrollToItem=function(t,e){void 0===e&&(e="auto");var r=this.props.itemCount,n=this.state.scrollOffset;t=Math.max(0,Math.min(t,r-1)),this.scrollTo(p(this.props,t,e,n,this._instanceProps))},_.componentDidMount=function(){var t=this.props,e=t.direction,r=t.initialScrollOffset,n=t.layout;if("number"==typeof r&&null!=this._innerRef){var o=this._innerRef;o.style.transform="horizontal"===e||"horizontal"===n?"translate3d(-"+r+"px, 0px, 0px)":"translate3d(0px, -"+r+"px, 0px)"}this._callPropsCallbacks()},_.componentDidUpdate=function(){var t=this.props,e=t.direction,r=t.layout,n=this.state,o=n.scrollOffset;if(n.scrollUpdateWasRequested&&null!=this._innerRef){var i=this._innerRef;i.style.transform="horizontal"===e||"horizontal"===r?"translate3d(-"+o+"px, 0px, 0px)":"translate3d(0px, -"+o+"px, 0px)"}this._callPropsCallbacks()},_.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},_.render=function(){var t=this.props,n=t.children,o=t.className,i=t.direction,a=t.innerElementType,s=t.innerTagName,l=t.itemCount,u=t.itemData,f=t.itemKey,d=void 0===f?c:f,h=t.layout,p=t.outerElementType,m=t.outerTagName,S=t.style,v=t.useIsScrolling,g=this.state.isScrolling,I="horizontal"===i||"horizontal"===h?this._onScrollHorizontal:this._onScrollVertical,y=this._getRangeToRender(),_=y[0],x=y[1],M=[];if(l>0)for(var z=_;z<=x;z++)M.push(e.createElement(n,{data:u,key:d(z,u),index:z,isScrolling:v?g:void 0,style:this._getItemStyle(z)}));return e.createElement(p||m||"div",{className:o,onScroll:I,ref:this._outerRefSetter,style:r({position:"relative",WebkitOverflowScrolling:"touch",willChange:"transform",contain:"layout"},S)},e.createElement(a||s||"div",{children:M,ref:this._innerRefSetter,style:{position:"relative",willChange:"transform",contain:"layout",backfaceVisibility:"hidden",transformStyle:"preserve-3d"}}))},_._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],r=t[1],n=t[2],o=t[3];this._callOnItemsRendered(e,r,n,o)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,s=i.scrollOffset,l=i.scrollUpdateWasRequested;this._callOnScroll(a,s,l)}},_._getRangeToRender=function(){var t=this.props,e=t.itemCount,r=t.overscanCount,n=this.state,o=n.isScrolling,i=n.scrollDirection,a=n.scrollOffset;if(0===e)return[0,0,0,0];var s=m(this.props,a,this._instanceProps),l=S(this.props,s,a,this._instanceProps),c=o&&"backward"!==i?1:Math.max(1,r),u=o&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,s-c),Math.max(0,Math.min(e-1,l+u)),s,l]},y}(e.PureComponent),o.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},u}var f=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},d=function(t,e,r){var n=t.itemSize,o=r.itemMetadataMap,i=r.lastMeasuredIndex;if(e>i){var a=0;if(i>=0){var s=o[i];a=s.offset+s.size}for(var l=i+1;l<=e;l++){var c=n(l);o[l]={offset:a,size:c},a+=c}r.lastMeasuredIndex=e}return o[e]},h=function(t,e,r,n,o){for(;n<=r;){var i=n+Math.floor((r-n)/2),a=d(t,i,e).offset;if(a===o)return i;a<o?n=i+1:a>o&&(r=i-1)}return n>0?n-1:0},p=function(t,e,r,n){for(var o=t.itemCount,i=1;r<o&&d(t,r,e).offset<n;)r+=i,i*=2;return h(t,e,Math.min(r,o-1),Math.floor(r/2),n)},m=function(t,e){var r=t.itemCount,n=e.itemMetadataMap,o=e.estimatedItemSize,i=e.lastMeasuredIndex,a=0;if(i>=r&&(i=r-1),i>=0){var s=n[i];a=s.offset+s.size}return a+(r-i-1)*o},S=u({getItemOffset:function(t,e,r){return d(t,e,r).offset},getItemSize:function(t,e,r){return r.itemMetadataMap[e].size},getEstimatedTotalSize:m,getOffsetForIndexAndAlignment:function(t,e,r,n,o){var i=t.direction,a=t.height,s=t.layout,l=t.width,c="horizontal"===i||"horizontal"===s?l:a,u=d(t,e,o),f=m(t,o),h=Math.max(0,Math.min(f-c,u.offset)),p=Math.max(0,u.offset-c+u.size);switch("smart"===r&&(r=n>=p-c&&n<=h+c?"auto":"center"),r){case"start":return h;case"end":return p;case"center":return Math.round(p+(h-p)/2);case"auto":default:return n>=p&&n<=h?n:n<p?p:h}},getStartIndexForOffset:function(t,e,r){return function(t,e,r){var n=e.itemMetadataMap,o=e.lastMeasuredIndex;return(o>0?n[o].offset:0)>=r?h(t,e,o,0,r):p(t,e,Math.max(0,o),r)}(t,r,e)},getStopIndexForStartIndex:function(t,e,r,n){for(var o=t.direction,i=t.height,a=t.itemCount,s=t.layout,l=t.width,c="horizontal"===o||"horizontal"===s?l:i,u=d(t,e,n),f=r+c,h=u.offset+u.size,p=e;p<a-1&&h<f;)h+=d(t,++p,n).size;return p},initInstanceProps:function(t,e){var r={itemMetadataMap:{},estimatedItemSize:t.estimatedItemSize||50,lastMeasuredIndex:-1};return e.resetAfterIndex=function(t,n){void 0===n&&(n=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,t-1),e._getItemStyleCache(-1),n&&e.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),v=u({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,r,n){var o=t.direction,i=t.height,a=t.itemCount,s=t.itemSize,l=t.layout,c=t.width,u="horizontal"===o||"horizontal"===l?c:i,f=Math.max(0,a*s-u),d=Math.min(f,e*s),h=Math.max(0,e*s-u+s);switch("smart"===r&&(r=n>=h-u&&n<=d+u?"auto":"center"),r){case"start":return d;case"end":return h;case"center":var p=Math.round(h+(d-h)/2);return p<Math.ceil(u/2)?0:p>f+Math.floor(u/2)?f:p;case"auto":default:return n>=h&&n<=d?n:n<h?h:d}},getStartIndexForOffset:function(t,e){var r=t.itemCount,n=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(e/n)))},getStopIndexForStartIndex:function(t,e,r){var n=t.direction,o=t.height,i=t.itemCount,a=t.itemSize,s=t.layout,l=t.width,c=e*a,u="horizontal"===n||"horizontal"===s?l:o,f=Math.ceil((u+r-c)/a);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function g(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}function I(t,e){for(var r in t)if(!(r in e))return!0;for(var n in e)if(t[n]!==e[n])return!0;return!1}function y(t,e){var r=t.style,n=g(t,["style"]),o=e.style,i=g(e,["style"]);return!I(r,o)&&!I(n,i)}t.VariableSizeList=S,t.FixedSizeList=v,t.areEqual=y,t.shouldComponentUpdate=function(t,e){return!y(this.props,t)||I(this.state,e)},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index-prod.umd.js.map
