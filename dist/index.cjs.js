'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var _assertThisInitialized = _interopDefault(require('@babel/runtime/helpers/assertThisInitialized'));
var _inheritsLoose = _interopDefault(require('@babel/runtime/helpers/inheritsLoose'));
var memoizeOne = _interopDefault(require('memoize-one'));
var react = require('react');
var scheduler = _interopDefault(require('scheduler'));
var _objectWithoutPropertiesLoose = _interopDefault(require('@babel/runtime/helpers/objectWithoutPropertiesLoose'));

// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var IdlePriority = scheduler.unstable_IdlePriority,
    runWithPriority = scheduler.unstable_runWithPriority;
var DEFAULT_MAX_NUM_PRERENDER_ROWS = 15;
var DEBOUNCE_INTERVAL = 150;

var defaultItemKey = function defaultItemKey(index, data) {
  return index;
};

function createListComponent(_ref) {
  var _class, _temp;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _temp = _class = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized(_this));
      _this._outerRef = void 0;
      _this._innerRef = void 0;
      _this._prerenderOverscanRowsTimeoutID = null;
      _this._clearStyleCacheTimeoutID = null;
      _this.state = {
        instance: _assertThisInitialized(_this),
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoizeOne(function (visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps);
          var isHorizontal = layout === 'horizontal';
          var transform = isHorizontal ? "translate3d(" + _offset + "px, 0px, 0px)" : "translate3d(0px, " + _offset + "px, 0px)";
          itemStyleCache[index] = style = {
            transform: transform,
            height: !isHorizontal ? size : 0,
            width: isHorizontal ? size : 0,
            willChange: 'transform',
            transition: 'none'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoizeOne(function (_, __, ___) {
        return {};
      });

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._innerRefSetter = function (ref) {
        var innerRef = _this.props.innerRef;
        _this._innerRef = ref;

        if (typeof innerRef === 'function') {
          innerRef(ref);
        } else if (innerRef != null && typeof innerRef === 'object' && innerRef.hasOwnProperty('current')) {
          innerRef.current = ref;
        }
      };

      _this._clearStyleCache = function () {
        _this._clearStyleCacheTimeoutID = null; // Clear style cache after state update has been committed.

        _this._getItemStyleCache(-1, null);
      };

      _this._prerenderOverscanRows = function () {
        _this._prerenderOverscanRowsTimeoutID = null;
        runWithPriority(IdlePriority, function () {
          _this.setState(function (prevState) {
            var _this$props2 = _this.props,
                itemCount = _this$props2.itemCount,
                maxNumPrerenderRows = _this$props2.maxNumPrerenderRows;

            var _this$_getRangeToRend = _this._getRangeToRender(prevState.scrollOffset),
                startIndex = _this$_getRangeToRend[0],
                stopIndex = _this$_getRangeToRend[1];

            var numRowsPerViewport = stopIndex - startIndex;
            var numPrerenderRows = Math.min(numRowsPerViewport, maxNumPrerenderRows);
            var nextStartIndex = Math.max(0, startIndex - numPrerenderRows);
            var nextStopIndex = Math.min(itemCount - 1, stopIndex + numPrerenderRows);

            if (prevState.startIndex === nextStartIndex && prevState.stopIndex === nextStopIndex) {
              return null;
            }

            return {
              startIndex: nextStartIndex,
              stopIndex: nextStopIndex
            };
          });
        });
      };

      var initialScrollOffset = props.initialScrollOffset;
      var scrollOffset = typeof initialScrollOffset === 'number' ? initialScrollOffset : 0;

      var _this$_getRangeToRend2 = _this._getRangeToRender(scrollOffset),
          _startIndex = _this$_getRangeToRend2[0],
          _stopIndex = _this$_getRangeToRend2[1];

      _this.state = {
        instance: _assertThisInitialized(_this),
        scrollDirection: 'forward',
        scrollOffset: scrollOffset,
        scrollUpdateWasRequested: typeof initialScrollOffset === 'number',
        startIndex: _startIndex,
        stopIndex: _stopIndex
      };
      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      var _this2 = this;

      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        var _this2$_getRangeToRen = _this2._getRangeToRender(scrollOffset),
            startIndex = _this2$_getRangeToRen[0],
            stopIndex = _this2$_getRangeToRen[1];

        var isSubset = startIndex >= prevState.startIndex && stopIndex <= prevState.stopIndex;
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true,
          startIndex: isSubset ? prevState.startIndex : startIndex,
          stopIndex: isSubset ? prevState.stopIndex : stopIndex
        };
      });
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      this._commitHook();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this._commitHook();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._prerenderOverscanRowsTimeoutID !== null) {
        cancelTimeout(this._prerenderOverscanRowsTimeoutID);
      }

      if (this._clearStyleCacheTimeoutID !== null) {
        cancelTimeout(this._clearStyleCacheTimeoutID);
      }
    };

    _proto.render = function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          innerElementType = _this$props3.innerElementType,
          itemCount = _this$props3.itemCount,
          itemData = _this$props3.itemData,
          _this$props3$itemKey = _this$props3.itemKey,
          itemKey = _this$props3$itemKey === void 0 ? defaultItemKey : _this$props3$itemKey,
          outerElementType = _this$props3.outerElementType,
          style = _this$props3.style;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          startIndex = _this$state.startIndex,
          stopIndex = _this$state.stopIndex;

      var _this$_getRangeToRend3 = this._getRangeToRender(scrollOffset),
          visibleStartIndex = _this$_getRangeToRend3[0],
          visibleStopIndex = _this$_getRangeToRend3[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          var hidden = _index < visibleStartIndex || _index > visibleStopIndex;
          items.push(react.createElement(children, {
            data: itemData,
            hidden: hidden,
            index: _index,
            key: itemKey(_index, itemData),
            style: this._getItemStyle(_index)
          }));
        }
      }

      return react.createElement(outerElementType || 'div', {
        className: className,
        ref: this._outerRefSetter,
        style: _extends({
          position: 'relative',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          contain: 'layout'
        }, style)
      }, react.createElement(innerElementType || 'div', {
        children: items,
        ref: this._innerRefSetter,
        style: {
          position: 'relative',
          willChange: 'transform',
          contain: 'layout',
          pointerEvents: 'none'
        }
      }));
    };

    _proto._commitHook = function _commitHook() {
      var _this$props4 = this.props,
          layout = _this$props4.layout,
          itemCount = _this$props4.itemCount,
          prerenderMode = _this$props4.prerenderMode;
      var _this$state2 = this.state,
          scrollOffset = _this$state2.scrollOffset,
          scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._innerRef != null) {
        var innerRef = this._innerRef;

        if (layout === 'horizontal') {
          innerRef.style.transform = "translate3d(-" + scrollOffset + "px, 0px, 0px)";
        } else {
          innerRef.style.transform = "translate3d(0px, -" + scrollOffset + "px, 0px)";
        }
      }

      if (itemCount > 0) {
        this._callPropsCallbacks();
      } // Clear style cache after scrolling has stopped.
      // This enables us to cache during the most perfrormance sensitive times (when scrolling)
      // while also preventing the cache from growing unbounded.


      this._clearStyleCacheDebounced(); // Schedule an update to pre-render rows at idle priority.
      // This will make the list more responsive to subsequent scrolling.


      if (typeof runWithPriority === 'function') {
        if (prerenderMode === 'idle') {
          this._prerenderOverscanRows();
        } else if (prerenderMode === 'idle+debounce') {
          this._prerenderOverscanRowsDebounced();
        }
      }
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;
        var _scrollOffset = this.state.scrollOffset;

        if (itemCount > 0) {
          var _this$_getRangeToRend4 = this._getRangeToRender(_scrollOffset),
              _visibleStartIndex = _this$_getRangeToRend4[0],
              _visibleStopIndex = _this$_getRangeToRend4[1];

          this._callOnItemsRendered(_visibleStartIndex, _visibleStopIndex);
        }
      }
    } // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    ;

    _proto._getRangeToRender = function _getRangeToRender(scrollOffset) {
      var itemCount = this.props.itemCount;

      if (itemCount === 0) {
        return [0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps);
      return [Math.max(0, startIndex - 1), Math.max(0, Math.min(itemCount - 1, stopIndex + 1))];
    };

    _proto._clearStyleCacheDebounced = function _clearStyleCacheDebounced() {
      if (this._clearStyleCacheTimeoutID !== null) {
        cancelTimeout(this._clearStyleCacheTimeoutID);
      }

      this._clearStyleCacheTimeoutID = requestTimeout(this._clearStyleCache, DEBOUNCE_INTERVAL);
    };

    _proto._prerenderOverscanRowsDebounced = function _prerenderOverscanRowsDebounced() {
      if (this._prerenderOverscanRowsTimeoutID !== null) {
        cancelTimeout(this._prerenderOverscanRowsTimeoutID);
      }

      this._prerenderOverscanRowsTimeoutID = requestTimeout(this._prerenderOverscanRows, DEBOUNCE_INTERVAL);
    };

    return List;
  }(react.PureComponent), _class.defaultProps = {
    itemData: undefined,
    layout: 'vertical',
    maxNumPrerenderRows: DEFAULT_MAX_NUM_PRERENDER_ROWS
  }, _temp;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (process.env.NODE_ENV !== 'production') {
    var isHorizontal = layout === 'horizontal';

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

var getItemMetadata = function getItemMetadata(props, index, instanceProps) {
  var _ref = props,
      itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

var findNearestItem = function findNearestItem(props, instanceProps, offset) {
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
  var itemCount = props.itemCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata(props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap,
      estimatedItemSize = _ref3.estimatedItemSize,
      lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

var VariableSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(props, index, instanceProps) {
    return getItemMetadata(props, index, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index, instanceProps) {
    return instanceProps.itemMetadataMap[index].size;
  },
  getEstimatedTotalSize: getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps) {
    var height = props.height,
        layout = props.layout,
        width = props.width;
    var isHorizontal = layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
    // To ensure it reflects actual measurements instead of just estimates.

    var estimatedTotalSize = getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
    return findNearestItem(props, instanceProps, offset);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var height = props.height,
        itemCount = props.itemCount,
        layout = props.layout,
        width = props.width;
    var isHorizontal = layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref4 = props,
        estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredIndex: -1
    };

    instance.resetAfterIndex = function (index, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref5) {
    var itemSize = _ref5.itemSize;

    if (process.env.NODE_ENV !== 'production') {
      if (typeof itemSize !== 'function') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

var FixedSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    var isHorizontal = layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    var isHorizontal = layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (process.env.NODE_ENV !== 'production') {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

var _excluded = ["style"],
    _excluded2 = ["style"];
// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = _objectWithoutPropertiesLoose(prevProps, _excluded);

  var nextStyle = nextProps.style,
      nextRest = _objectWithoutPropertiesLoose(nextProps, _excluded2);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}

exports.FixedSizeList = FixedSizeList;
exports.VariableSizeList = VariableSizeList;
exports.areEqual = areEqual;
exports.shouldComponentUpdate = shouldComponentUpdate;
//# sourceMappingURL=index.cjs.js.map
