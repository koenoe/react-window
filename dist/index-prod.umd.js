!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t=t||self).ReactWindow={},t.React)}(this,function(t,e){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var i=function(t,e){return t.length===e.length&&t.every(function(t,n){return r=t,o=e[n],r===o;var r,o})};function a(t,e){var n;void 0===e&&(e=i);var r,o=[],a=!1;return function(){for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return a&&n===this&&e(l,o)?r:(r=t.apply(this,l),a=!0,n=this,o=l,r)}}var l="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function s(t){cancelAnimationFrame(t.id)}function c(t,e){var n=l();var r={id:requestAnimationFrame(function o(){l()-n>=e?t.call(null):r.id=requestAnimationFrame(o)})};return r}var u=-1;var f=null;function d(t){if(void 0===t&&(t=!1),null===f||t){var e=document.createElement("div"),n=e.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),o=r.style;return o.width="100px",o.height="100px",e.appendChild(r),document.body.appendChild(e),e.scrollLeft>0?f="positive-descending":(e.scrollLeft=1,f=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),f}return f}var h=150,m=function(t){var e=t.columnIndex;t.data;return t.rowIndex+":"+e};function p(t){var i,l,f=t.getColumnOffset,p=t.getColumnStartIndexForOffset,g=t.getColumnStopIndexForStartIndex,S=t.getColumnWidth,I=t.getEstimatedTotalHeight,x=t.getEstimatedTotalWidth,M=t.getOffsetForColumnAndAlignment,w=t.getOffsetForRowAndAlignment,_=t.getRowHeight,C=t.getRowOffset,R=t.getRowStartIndexForOffset,y=t.getRowStopIndexForStartIndex,O=t.initInstanceProps,T=t.shouldResetStyleCacheOnItemSizeChange,z=t.validateProps;return l=i=function(t){function i(e){var n;return(n=t.call(this,e)||this)._instanceProps=O(n.props,o(o(n))),n._resetIsScrollingTimeoutId=null,n._outerRef=void 0,n.state={instance:o(o(n)),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof n.props.initialScrollLeft?n.props.initialScrollLeft:0,scrollTop:"number"==typeof n.props.initialScrollTop?n.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},n._callOnItemsRendered=void 0,n._callOnItemsRendered=a(function(t,e,r,o,i,a,l,s){return n.props.onItemsRendered({overscanColumnStartIndex:t,overscanColumnStopIndex:e,overscanRowStartIndex:r,overscanRowStopIndex:o,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})}),n._callOnScroll=void 0,n._callOnScroll=a(function(t,e,r,o,i){return n.props.onScroll({horizontalScrollDirection:r,scrollLeft:t,scrollTop:e,verticalScrollDirection:o,scrollUpdateWasRequested:i})}),n._getItemStyle=void 0,n._getItemStyle=function(t,e){var r,o=n.props,i=o.columnWidth,a=o.direction,l=o.rowHeight,s=n._getItemStyleCache(T&&i,T&&a,T&&l),c=t+":"+e;if(s.hasOwnProperty(c))r=s[c];else{var u=f(n.props,e,n._instanceProps),d="rtl"===a;s[c]=r={position:"absolute",left:d?void 0:u,right:d?u:void 0,top:C(n.props,t,n._instanceProps),height:_(n.props,t,n._instanceProps),width:S(n.props,e,n._instanceProps)}}return r},n._getItemStyleCache=void 0,n._getItemStyleCache=a(function(t,e,n){return{}}),n._onScroll=function(t){var e=t.currentTarget,r=e.clientHeight,o=e.clientWidth,i=e.scrollLeft,a=e.scrollTop,l=e.scrollHeight,s=e.scrollWidth;n.setState(function(t){if(t.scrollLeft===i&&t.scrollTop===a)return null;var e=n.props.direction,c=i;if("rtl"===e)switch(d()){case"negative":c=-i;break;case"positive-descending":c=s-o-i}c=Math.max(0,Math.min(c,s-o));var u=Math.max(0,Math.min(a,l-r));return{isScrolling:!0,horizontalScrollDirection:t.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:t.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}},n._resetIsScrollingDebounced)},n._outerRefSetter=function(t){var e=n.props.outerRef;n._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&s(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=c(n._resetIsScrolling,h)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},function(){n._getItemStyleCache(-1)})},n}r(i,t),i.getDerivedStateFromProps=function(t,e){return v(t,e),z(t),null};var l=i.prototype;return l.scrollTo=function(t){var e=t.scrollLeft,n=t.scrollTop;void 0!==e&&(e=Math.max(0,e)),void 0!==n&&(n=Math.max(0,n)),this.setState(function(t){return void 0===e&&(e=t.scrollLeft),void 0===n&&(n=t.scrollTop),t.scrollLeft===e&&t.scrollTop===n?null:{horizontalScrollDirection:t.scrollLeft<e?"forward":"backward",scrollLeft:e,scrollTop:n,scrollUpdateWasRequested:!0,verticalScrollDirection:t.scrollTop<n?"forward":"backward"}},this._resetIsScrollingDebounced)},l.scrollToItem=function(t){var e=t.align,n=void 0===e?"auto":e,r=t.columnIndex,o=t.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,f=this.state,d=f.scrollLeft,h=f.scrollTop,m=function(t){if(void 0===t&&(t=!1),-1===u||t){var e=document.createElement("div"),n=e.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(e),u=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return u}();void 0!==r&&(r=Math.max(0,Math.min(r,a-1))),void 0!==o&&(o=Math.max(0,Math.min(o,s-1)));var p=I(this.props,this._instanceProps),v=x(this.props,this._instanceProps)>c?m:0,g=p>l?m:0;this.scrollTo({scrollLeft:void 0!==r?M(this.props,r,n,d,this._instanceProps,g):d,scrollTop:void 0!==o?w(this.props,o,n,h,this._instanceProps,v):h})},l.componentDidMount=function(){var t=this.props,e=t.initialScrollLeft,n=t.initialScrollTop;if(null!=this._outerRef){var r=this._outerRef;"number"==typeof e&&(r.scrollLeft=e),"number"==typeof n&&(r.scrollTop=n)}this._callPropsCallbacks()},l.componentDidUpdate=function(){var t=this.props.direction,e=this.state,n=e.scrollLeft,r=e.scrollTop;if(e.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("rtl"===t)switch(d()){case"negative":o.scrollLeft=-n;break;case"positive-ascending":o.scrollLeft=n;break;default:var i=o.clientWidth,a=o.scrollWidth;o.scrollLeft=a-i-n}else o.scrollLeft=Math.max(0,n);o.scrollTop=Math.max(0,r)}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var t=this.props,r=t.children,o=t.className,i=t.columnCount,a=t.direction,l=t.height,s=t.innerRef,c=t.innerElementType,u=t.innerTagName,f=t.itemData,d=t.itemKey,h=void 0===d?m:d,p=t.outerElementType,v=t.outerTagName,g=t.rowCount,S=t.style,M=t.useIsScrolling,w=t.width,_=this.state.isScrolling,C=this._getHorizontalRangeToRender(),R=C[0],y=C[1],O=this._getVerticalRangeToRender(),T=O[0],z=O[1],b=[];if(i>0&&g)for(var P=T;P<=z;P++)for(var W=R;W<=y;W++)b.push(e.createElement(r,{columnIndex:W,data:f,isScrolling:M?_:void 0,key:h({columnIndex:W,data:f,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var D=I(this.props,this._instanceProps),F=x(this.props,this._instanceProps);return e.createElement(p||v||"div",{className:o,onScroll:this._onScroll,ref:this._outerRefSetter,style:n({position:"relative",height:l,width:w,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},S)},e.createElement(c||u||"div",{children:b,ref:s,style:{height:D,pointerEvents:_?"none":void 0,width:F}}))},l._callPropsCallbacks=function(){var t=this.props,e=t.columnCount,n=t.onItemsRendered,r=t.onScroll,o=t.rowCount;if("function"==typeof n&&e>0&&o>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),f=u[0],d=u[1],h=u[2],m=u[3];this._callOnItemsRendered(a,l,f,d,s,c,h,m)}if("function"==typeof r){var p=this.state,v=p.horizontalScrollDirection,g=p.scrollLeft,S=p.scrollTop,I=p.scrollUpdateWasRequested,x=p.verticalScrollDirection;this._callOnScroll(g,S,v,x,I)}},l._getHorizontalRangeToRender=function(){var t=this.props,e=t.columnCount,n=t.overscanColumnCount,r=t.overscanColumnsCount,o=t.overscanCount,i=t.rowCount,a=this.state,l=a.horizontalScrollDirection,s=a.isScrolling,c=a.scrollLeft,u=n||r||o||1;if(0===e||0===i)return[0,0,0,0];var f=p(this.props,c,this._instanceProps),d=g(this.props,f,c,this._instanceProps),h=s&&"backward"!==l?1:Math.max(1,u),m=s&&"forward"!==l?1:Math.max(1,u);return[Math.max(0,f-h),Math.max(0,Math.min(e-1,d+m)),f,d]},l._getVerticalRangeToRender=function(){var t=this.props,e=t.columnCount,n=t.overscanCount,r=t.overscanRowCount,o=t.overscanRowsCount,i=t.rowCount,a=this.state,l=a.isScrolling,s=a.verticalScrollDirection,c=a.scrollTop,u=r||o||n||1;if(0===e||0===i)return[0,0,0,0];var f=R(this.props,c,this._instanceProps),d=y(this.props,f,c,this._instanceProps),h=l&&"backward"!==s?1:Math.max(1,u),m=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,f-h),Math.max(0,Math.min(i-1,d+m)),f,d]},i}(e.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},l}var v=function(t,e){t.children,t.direction,t.height,t.innerTagName,t.outerTagName,t.overscanColumnsCount,t.overscanCount,t.overscanRowsCount,t.width,e.instance},g=function(t,e){var n=t.rowCount,r=e.rowMetadataMap,o=e.estimatedRowHeight,i=e.lastMeasuredRowIndex,a=0;if(i>=n&&(i=n-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(n-i-1)*o},S=function(t,e){var n=t.columnCount,r=e.columnMetadataMap,o=e.estimatedColumnWidth,i=e.lastMeasuredColumnIndex,a=0;if(i>=n&&(i=n-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(n-i-1)*o},I=function(t,e,n,r){var o,i,a;if("column"===t?(o=r.columnMetadataMap,i=e.columnWidth,a=r.lastMeasuredColumnIndex):(o=r.rowMetadataMap,i=e.rowHeight,a=r.lastMeasuredRowIndex),n>a){var l=0;if(a>=0){var s=o[a];l=s.offset+s.size}for(var c=a+1;c<=n;c++){var u=i(c);o[c]={offset:l,size:u},l+=u}"column"===t?r.lastMeasuredColumnIndex=n:r.lastMeasuredRowIndex=n}return o[n]},x=function(t,e,n,r){var o,i;return"column"===t?(o=n.columnMetadataMap,i=n.lastMeasuredColumnIndex):(o=n.rowMetadataMap,i=n.lastMeasuredRowIndex),(i>0?o[i].offset:0)>=r?M(t,e,n,i,0,r):w(t,e,n,Math.max(0,i),r)},M=function(t,e,n,r,o,i){for(;o<=r;){var a=o+Math.floor((r-o)/2),l=I(t,e,a,n).offset;if(l===i)return a;l<i?o=a+1:l>i&&(r=a-1)}return o>0?o-1:0},w=function(t,e,n,r,o){for(var i="column"===t?e.columnCount:e.rowCount,a=1;r<i&&I(t,e,r,n).offset<o;)r+=a,a*=2;return M(t,e,n,Math.min(r,i-1),Math.floor(r/2),o)},_=function(t,e,n,r,o,i,a){var l="column"===t?e.width:e.height,s=I(t,e,n,i),c="column"===t?S(e,i):g(e,i),u=Math.max(0,Math.min(c-l,s.offset)),f=Math.max(0,s.offset-l+a+s.size);switch("smart"===r&&(r=o>=f-l&&o<=u+l?"auto":"center"),r){case"start":return u;case"end":return f;case"center":return Math.round(f+(u-f)/2);case"auto":default:return o>=f&&o<=u?o:f>u?f:o<f?f:u}},C=p({getColumnOffset:function(t,e,n){return I("column",t,e,n).offset},getColumnStartIndexForOffset:function(t,e,n){return x("column",t,n,e)},getColumnStopIndexForStartIndex:function(t,e,n,r){for(var o=t.columnCount,i=t.width,a=I("column",t,e,r),l=n+i,s=a.offset+a.size,c=e;c<o-1&&s<l;)s+=I("column",t,++c,r).size;return c},getColumnWidth:function(t,e,n){return n.columnMetadataMap[e].size},getEstimatedTotalHeight:g,getEstimatedTotalWidth:S,getOffsetForColumnAndAlignment:function(t,e,n,r,o,i){return _("column",t,e,n,r,o,i)},getOffsetForRowAndAlignment:function(t,e,n,r,o,i){return _("row",t,e,n,r,o,i)},getRowOffset:function(t,e,n){return I("row",t,e,n).offset},getRowHeight:function(t,e,n){return n.rowMetadataMap[e].size},getRowStartIndexForOffset:function(t,e,n){return x("row",t,n,e)},getRowStopIndexForStartIndex:function(t,e,n,r){for(var o=t.rowCount,i=t.height,a=I("row",t,e,r),l=n+i,s=a.offset+a.size,c=e;c<o-1&&s<l;)s+=I("row",t,++c,r).size;return c},initInstanceProps:function(t,e){var n=t,r={columnMetadataMap:{},estimatedColumnWidth:n.estimatedColumnWidth||50,estimatedRowHeight:n.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return e.resetAfterColumnIndex=function(t,n){void 0===n&&(n=!0),e.resetAfterIndices({columnIndex:t,shouldForceUpdate:n})},e.resetAfterRowIndex=function(t,n){void 0===n&&(n=!0),e.resetAfterIndices({rowIndex:t,shouldForceUpdate:n})},e.resetAfterIndices=function(t){var n=t.columnIndex,o=t.rowIndex,i=t.shouldForceUpdate,a=void 0===i||i;"number"==typeof n&&(r.lastMeasuredColumnIndex=Math.min(r.lastMeasuredColumnIndex,n-1)),"number"==typeof o&&(r.lastMeasuredRowIndex=Math.min(r.lastMeasuredRowIndex,o-1)),e._getItemStyleCache(-1),a&&e.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.columnWidth,t.rowHeight}}),R=150,y=function(t,e){return t};function O(t){var i,l,u=t.getItemOffset,f=(t.getEstimatedTotalSize,t.getItemSize),d=t.getOffsetForIndexAndAlignment,h=t.getStartIndexForOffset,m=t.getStopIndexForStartIndex,p=t.initInstanceProps,v=t.shouldResetStyleCacheOnItemSizeChange,g=t.validateProps;return l=i=function(t){function i(e){var n;return(n=t.call(this,e)||this)._instanceProps=p(n.props,o(o(n))),n._outerRef=void 0,n._innerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:o(o(n)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=a(function(t,e,r,o){return n.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:r,visibleStopIndex:o})}),n._callOnScroll=void 0,n._callOnScroll=a(function(t,e,r){return n.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:r})}),n._getItemStyle=void 0,n._getItemStyle=function(t){var e,r=n.props,o=r.direction,i=r.itemSize,a=r.layout,l=n._getItemStyleCache(v&&i,v&&a,v&&o);if(l.hasOwnProperty(t))e=l[t];else{var s=u(n.props,t,n._instanceProps),c=f(n.props,t,n._instanceProps),d="horizontal"===o||"horizontal"===a,h=d?s:0;l[t]=e={left:h,right:void 0,top:d?0:s,height:d?"100%":c,width:d?c:"100%"}}return e},n._getItemStyleCache=void 0,n._getItemStyleCache=a(function(t,e,n){return{}}),n._onScrollHorizontal=function(t){var e=t.currentTarget,r=e.clientWidth,o=e.scrollLeft,i=e.scrollWidth;n.setState(function(t){if(t.scrollOffset===o)return null;var e=o;return e=Math.max(0,Math.min(e,i-r)),{isScrolling:!0,scrollDirection:t.scrollOffset<o?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}},n._resetIsScrollingDebounced)},n._onScrollVertical=function(t){var e=t.currentTarget,r=e.clientHeight,o=e.scrollHeight,i=e.scrollTop;n.setState(function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,o-r));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}},n._resetIsScrollingDebounced)},n._outerRefSetter=function(t){var e=n.props.outerRef;n._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},n._innerRefSetter=function(t){var e=n.props.innerRef;n._innerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&s(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=c(n._resetIsScrolling,R)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},function(){n._getItemStyleCache(-1,null)})},n}r(i,t),i.getDerivedStateFromProps=function(t,e){return T(t,e),g(t),null};var l=i.prototype;return l.scrollTo=function(t){t=Math.max(0,t),this.setState(function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},l.scrollToItem=function(t,e){void 0===e&&(e="auto");var n=this.props.itemCount,r=this.state.scrollOffset;t=Math.max(0,Math.min(t,n-1)),this.scrollTo(d(this.props,t,e,r,this._instanceProps))},l.componentDidMount=function(){var t=this.props,e=t.direction,n=t.initialScrollOffset,r=t.layout;if("number"==typeof n&&null!=this._innerRef){var o=this._innerRef;o.style.transform="horizontal"===e||"horizontal"===r?"translate3d(-"+n+"px, 0px, 0px)":"translate3d(0px, -"+n+"px, 0px)"}this._callPropsCallbacks()},l.componentDidUpdate=function(){var t=this.props,e=t.direction,n=t.layout,r=this.state,o=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._innerRef){var i=this._innerRef;i.style.transform="horizontal"===e||"horizontal"===n?"translate3d(-"+o+"px, 0px, 0px)":"translate3d(0px, -"+o+"px, 0px)"}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var t=this.props,r=t.children,o=t.className,i=t.direction,a=t.innerElementType,l=t.innerTagName,s=t.itemCount,c=t.itemData,u=t.itemKey,f=void 0===u?y:u,d=t.layout,h=t.outerElementType,m=t.outerTagName,p=t.style,v=t.useIsScrolling,g=this.state.isScrolling,S="horizontal"===i||"horizontal"===d?this._onScrollHorizontal:this._onScrollVertical,I=this._getRangeToRender(),x=I[0],M=I[1],w=[];if(s>0)for(var _=x;_<=M;_++)w.push(e.createElement(r,{data:c,key:f(_,c),index:_,isScrolling:v?g:void 0,style:this._getItemStyle(_)}));return e.createElement(h||m||"div",{className:o,onScroll:S,ref:this._outerRefSetter,style:n({position:"relative",WebkitOverflowScrolling:"touch",willChange:"transform",contain:"layout"},p)},e.createElement(a||l||"div",{children:w,ref:this._innerRefSetter,style:{position:"relative",willChange:"transform",contain:"layout",backfaceVisibility:"hidden",transformStyle:"preserve-3d"}}))},l._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],n=t[1],r=t[2],o=t[3];this._callOnItemsRendered(e,n,r,o)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},l._getRangeToRender=function(){var t=this.props,e=t.itemCount,n=t.overscanCount,r=this.state,o=r.isScrolling,i=r.scrollDirection,a=r.scrollOffset;if(0===e)return[0,0,0,0];var l=h(this.props,a,this._instanceProps),s=m(this.props,l,a,this._instanceProps),c=o&&"backward"!==i?1:Math.max(1,n),u=o&&"forward"!==i?1:Math.max(1,n);return[Math.max(0,l-c),Math.max(0,Math.min(e-1,s+u)),l,s]},i}(e.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},l}var T=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},z=function(t,e,n){var r=t.itemSize,o=n.itemMetadataMap,i=n.lastMeasuredIndex;if(e>i){var a=0;if(i>=0){var l=o[i];a=l.offset+l.size}for(var s=i+1;s<=e;s++){var c=r(s);o[s]={offset:a,size:c},a+=c}n.lastMeasuredIndex=e}return o[e]},b=function(t,e,n,r,o){for(;r<=n;){var i=r+Math.floor((n-r)/2),a=z(t,i,e).offset;if(a===o)return i;a<o?r=i+1:a>o&&(n=i-1)}return r>0?r-1:0},P=function(t,e,n,r){for(var o=t.itemCount,i=1;n<o&&z(t,n,e).offset<r;)n+=i,i*=2;return b(t,e,Math.min(n,o-1),Math.floor(n/2),r)},W=function(t,e){var n=t.itemCount,r=e.itemMetadataMap,o=e.estimatedItemSize,i=e.lastMeasuredIndex,a=0;if(i>=n&&(i=n-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(n-i-1)*o},D=O({getItemOffset:function(t,e,n){return z(t,e,n).offset},getItemSize:function(t,e,n){return n.itemMetadataMap[e].size},getEstimatedTotalSize:W,getOffsetForIndexAndAlignment:function(t,e,n,r,o){var i=t.direction,a=t.height,l=t.layout,s=t.width,c="horizontal"===i||"horizontal"===l?s:a,u=z(t,e,o),f=W(t,o),d=Math.max(0,Math.min(f-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===n&&(n=r>=h-c&&r<=d+c?"auto":"center"),n){case"start":return d;case"end":return h;case"center":return Math.round(h+(d-h)/2);case"auto":default:return r>=h&&r<=d?r:r<h?h:d}},getStartIndexForOffset:function(t,e,n){return function(t,e,n){var r=e.itemMetadataMap,o=e.lastMeasuredIndex;return(o>0?r[o].offset:0)>=n?b(t,e,o,0,n):P(t,e,Math.max(0,o),n)}(t,n,e)},getStopIndexForStartIndex:function(t,e,n,r){for(var o=t.direction,i=t.height,a=t.itemCount,l=t.layout,s=t.width,c="horizontal"===o||"horizontal"===l?s:i,u=z(t,e,r),f=n+c,d=u.offset+u.size,h=e;h<a-1&&d<f;)d+=z(t,++h,r).size;return h},initInstanceProps:function(t,e){var n={itemMetadataMap:{},estimatedItemSize:t.estimatedItemSize||50,lastMeasuredIndex:-1};return e.resetAfterIndex=function(t,r){void 0===r&&(r=!0),n.lastMeasuredIndex=Math.min(n.lastMeasuredIndex,t-1),e._getItemStyleCache(-1),r&&e.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),F=p({getColumnOffset:function(t,e){return e*t.columnWidth},getColumnWidth:function(t,e){return t.columnWidth},getRowOffset:function(t,e){return e*t.rowHeight},getRowHeight:function(t,e){return t.rowHeight},getEstimatedTotalHeight:function(t){var e=t.rowCount;return t.rowHeight*e},getEstimatedTotalWidth:function(t){var e=t.columnCount;return t.columnWidth*e},getOffsetForColumnAndAlignment:function(t,e,n,r,o,i){var a=t.columnCount,l=t.columnWidth,s=t.width,c=Math.max(0,a*l-s),u=Math.min(c,e*l),f=Math.max(0,e*l-s+i+l);switch("smart"===n&&(n=r>=f-s&&r<=u+s?"auto":"center"),n){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(s/2)?0:d>c+Math.floor(s/2)?c:d;case"auto":default:return r>=f&&r<=u?r:f>u?f:r<f?f:u}},getOffsetForRowAndAlignment:function(t,e,n,r,o,i){var a=t.rowHeight,l=t.height,s=t.rowCount,c=Math.max(0,s*a-l),u=Math.min(c,e*a),f=Math.max(0,e*a-l+i+a);switch("smart"===n&&(n=r>=f-l&&r<=u+l?"auto":"center"),n){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(l/2)?0:d>c+Math.floor(l/2)?c:d;case"auto":default:return r>=f&&r<=u?r:f>u?f:r<f?f:u}},getColumnStartIndexForOffset:function(t,e){var n=t.columnWidth,r=t.columnCount;return Math.max(0,Math.min(r-1,Math.floor(e/n)))},getColumnStopIndexForStartIndex:function(t,e,n){var r=t.columnWidth,o=t.columnCount,i=t.width,a=e*r,l=Math.ceil((i+n-a)/r);return Math.max(0,Math.min(o-1,e+l-1))},getRowStartIndexForOffset:function(t,e){var n=t.rowHeight,r=t.rowCount;return Math.max(0,Math.min(r-1,Math.floor(e/n)))},getRowStopIndexForStartIndex:function(t,e,n){var r=t.rowHeight,o=t.rowCount,i=t.height,a=e*r,l=Math.ceil((i+n-a)/r);return Math.max(0,Math.min(o-1,e+l-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.columnWidth,t.rowHeight}}),L=O({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,n,r){var o=t.direction,i=t.height,a=t.itemCount,l=t.itemSize,s=t.layout,c=t.width,u="horizontal"===o||"horizontal"===s?c:i,f=Math.max(0,a*l-u),d=Math.min(f,e*l),h=Math.max(0,e*l-u+l);switch("smart"===n&&(n=r>=h-u&&r<=d+u?"auto":"center"),n){case"start":return d;case"end":return h;case"center":var m=Math.round(h+(d-h)/2);return m<Math.ceil(u/2)?0:m>f+Math.floor(u/2)?f:m;case"auto":default:return r>=h&&r<=d?r:r<h?h:d}},getStartIndexForOffset:function(t,e){var n=t.itemCount,r=t.itemSize;return Math.max(0,Math.min(n-1,Math.floor(e/r)))},getStopIndexForStartIndex:function(t,e,n){var r=t.direction,o=t.height,i=t.itemCount,a=t.itemSize,l=t.layout,s=t.width,c=e*a,u="horizontal"===r||"horizontal"===l?s:o,f=Math.ceil((u+n-c)/a);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function A(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}function H(t,e){for(var n in t)if(!(n in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1}function k(t,e){var n=t.style,r=A(t,["style"]),o=e.style,i=A(e,["style"]);return!H(n,o)&&!H(r,i)}t.VariableSizeGrid=C,t.VariableSizeList=D,t.FixedSizeGrid=F,t.FixedSizeList=L,t.areEqual=k,t.shouldComponentUpdate=function(t,e){return!k(this.props,t)||H(this.state,e)},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index-prod.umd.js.map
