// @flow

import memoizeOne from 'memoize-one';
import { createElement, PureComponent } from 'react';
import { cancelTimeout, requestTimeout } from './timer';

import type { TimeoutID } from './timer';

export type ScrollToAlign = 'auto' | 'smart' | 'center' | 'start' | 'end';

type itemSize = number | ((index: number) => number);
type Layout = 'horizontal' | 'vertical';
type Style = {
  [string]: mixed,
};

type RenderComponentProps<T> = {|
  data: T,
  index: number,
  hidden: boolean,
  style: Object,
|};
type RenderComponent<T> = React$ComponentType<$Shape<RenderComponentProps<T>>>;

type ScrollDirection = 'forward' | 'backward';

type onItemsRenderedCallback = ({
  overscanStartIndex: number,
  overscanStopIndex: number,
  visibleStartIndex: number,
  visibleStopIndex: number,
}) => void;

type ItemStyleCache = { [index: number]: Object };

type OuterProps = {|
  children: React$Node,
  className: string | void,
  style: Style,
|};

type InnerProps = {|
  children: React$Node,
  style: Style,
|};

export type Props<T> = {|
  children: RenderComponent<T>,
  className?: string,
  height: number | string,
  initialScrollOffset?: number,
  innerRef?: any,
  innerElementType?: string | React$AbstractComponent<InnerProps, any>,
  itemCount: number,
  itemData: T,
  itemKey?: (index: number, data: T) => any,
  itemSize: itemSize,
  layout: Layout,
  onItemsRendered?: onItemsRenderedCallback,
  outerRef?: any,
  outerElementType?: string | React$AbstractComponent<OuterProps, any>,
  overscanCount: number,
  style?: Style,
  width: number | string,
|};

type State = {|
  instance: any,
  scrollDirection: ScrollDirection,
  scrollOffset: number,
  scrollUpdateWasRequested: boolean,
|};

type GetItemOffset = (
  props: Props<any>,
  index: number,
  instanceProps: any
) => number;
type GetItemSize = (
  props: Props<any>,
  index: number,
  instanceProps: any
) => number;
type GetEstimatedTotalSize = (props: Props<any>, instanceProps: any) => number;
type GetOffsetForIndexAndAlignment = (
  props: Props<any>,
  index: number,
  align: ScrollToAlign,
  scrollOffset: number,
  instanceProps: any
) => number;
type GetStartIndexForOffset = (
  props: Props<any>,
  offset: number,
  instanceProps: any
) => number;
type GetStopIndexForStartIndex = (
  props: Props<any>,
  startIndex: number,
  scrollOffset: number,
  instanceProps: any
) => number;
type InitInstanceProps = (props: Props<any>, instance: any) => any;
type ValidateProps = (props: Props<any>) => void;

const DEBOUNCE_INTERVAL = 150;

const defaultItemKey = (index: number, data: any) => index;

export default function createListComponent({
  getItemOffset,
  getEstimatedTotalSize,
  getItemSize,
  getOffsetForIndexAndAlignment,
  getStartIndexForOffset,
  getStopIndexForStartIndex,
  initInstanceProps,
  shouldResetStyleCacheOnItemSizeChange,
  validateProps,
}: {|
  getItemOffset: GetItemOffset,
  getEstimatedTotalSize: GetEstimatedTotalSize,
  getItemSize: GetItemSize,
  getOffsetForIndexAndAlignment: GetOffsetForIndexAndAlignment,
  getStartIndexForOffset: GetStartIndexForOffset,
  getStopIndexForStartIndex: GetStopIndexForStartIndex,
  initInstanceProps: InitInstanceProps,
  shouldResetStyleCacheOnItemSizeChange: boolean,
  validateProps: ValidateProps,
|}) {
  return class List<T> extends PureComponent<Props<T>, State> {
    _instanceProps: any = initInstanceProps(this.props, this);
    _outerRef: ?HTMLDivElement;
    _innerRef: ?HTMLDivElement;
    _clearStyleCacheTimeoutID: TimeoutID | null = null;

    static defaultProps = {
      itemData: undefined,
      layout: 'vertical',
      overscanCount: 2,
    };

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    constructor(props: Props<T>) {
      super(props);

      const { initialScrollOffset } = props;

      const scrollOffset =
        typeof initialScrollOffset === 'number' ? initialScrollOffset : 0;

      this.state = {
        instance: this,
        scrollDirection: 'forward',
        scrollOffset,
        scrollUpdateWasRequested: typeof initialScrollOffset === 'number',
      };
    }

    static getDerivedStateFromProps(
      nextProps: Props<T>,
      prevState: State
    ): $Shape<State> | null {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    }

    scrollTo(scrollOffset: number): void {
      scrollOffset = Math.max(0, scrollOffset);

      this.setState(prevState => {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection:
            prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true,
        };
      });
    }

    scrollToItem(index: number, align: ScrollToAlign = 'auto'): void {
      const { itemCount } = this.props;
      const { scrollOffset } = this.state;

      index = Math.max(0, Math.min(index, itemCount - 1));

      this.scrollTo(
        getOffsetForIndexAndAlignment(
          this.props,
          index,
          align,
          scrollOffset,
          this._instanceProps
        )
      );
    }

    componentDidMount() {
      this._commitHook();
    }

    componentDidUpdate() {
      this._commitHook();
    }

    componentWillUnmount() {
      if (this._clearStyleCacheTimeoutID !== null) {
        cancelTimeout(this._clearStyleCacheTimeoutID);
      }
    }

    render() {
      const {
        children,
        className,
        innerElementType,
        itemCount,
        itemData,
        itemKey = defaultItemKey,
        outerElementType,
        style,
      } = this.props;

      const [
        startIndex,
        stopIndex,
        visibleStartIndex,
        visibleStopIndex,
      ] = this._getRangeToRender();

      const items = [];
      if (itemCount > 0) {
        for (let index = startIndex; index <= stopIndex; index++) {
          const hidden = index < visibleStartIndex || index > visibleStopIndex;
          items.push(
            createElement(children, {
              data: itemData,
              key: itemKey(index, itemData),
              index,
              hidden,
              style: this._getItemStyle(index),
            })
          );
        }
      }

      return createElement(
        outerElementType || 'div',
        {
          className,
          ref: this._outerRefSetter,
          style: {
            position: 'relative',
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform',
            contain: 'layout',
            ...style,
          },
        },
        createElement(innerElementType || 'div', {
          children: items,
          ref: this._innerRefSetter,
          style: {
            position: 'relative',
            willChange: 'transform',
            contain: 'layout',
            pointerEvents: 'none',
          },
        })
      );
    }

    _commitHook() {
      const { layout, itemCount } = this.props;
      const { scrollOffset, scrollUpdateWasRequested } = this.state;

      if (scrollUpdateWasRequested && this._innerRef != null) {
        const innerRef = ((this._innerRef: any): HTMLElement);

        if (layout === 'horizontal') {
          innerRef.style.transform = `translate3d(-${scrollOffset}px, 0px, 0px)`;
        } else {
          innerRef.style.transform = `translate3d(0px, -${scrollOffset}px, 0px)`;
        }
      }

      if (itemCount > 0) {
        this._callPropsCallbacks();
      }

      // Clear style cache after scrolling has stopped.
      // This enables us to cache during the most perfrormance sensitive times (when scrolling)
      // while also preventing the cache from growing unbounded.
      this._clearStyleCacheDebounced();
    }

    _callOnItemsRendered: (
      overscanStartIndex: number,
      overscanStopIndex: number,
      visibleStartIndex: number,
      visibleStopIndex: number
    ) => void;
    _callOnItemsRendered = memoizeOne(
      (
        overscanStartIndex: number,
        overscanStopIndex: number,
        visibleStartIndex: number,
        visibleStopIndex: number
      ) =>
        ((this.props.onItemsRendered: any): onItemsRenderedCallback)({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex,
        })
    );

    _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        const { itemCount } = this.props;
        if (itemCount > 0) {
          const [
            overscanStartIndex,
            overscanStopIndex,
            visibleStartIndex,
            visibleStopIndex,
          ] = this._getRangeToRender();
          this._callOnItemsRendered(
            overscanStartIndex,
            overscanStopIndex,
            visibleStartIndex,
            visibleStopIndex
          );
        }
      }
    }

    // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    _getItemStyle: (index: number) => Object;
    _getItemStyle = (index: number): Object => {
      const { itemSize, layout } = this.props;

      const itemStyleCache = this._getItemStyleCache(
        shouldResetStyleCacheOnItemSizeChange && itemSize,
        shouldResetStyleCacheOnItemSizeChange && layout
      );

      let style;
      if (itemStyleCache.hasOwnProperty(index)) {
        style = itemStyleCache[index];
      } else {
        const offset = getItemOffset(this.props, index, this._instanceProps);
        const size = getItemSize(this.props, index, this._instanceProps);
        const isHorizontal = layout === 'horizontal';

        const transform = isHorizontal
          ? `translate3d(${offset}px, 0px, 0px)`
          : `translate3d(0px, ${offset}px, 0px)`;

        itemStyleCache[index] = style = {
          transform,
          height: !isHorizontal ? size : 0,
          width: isHorizontal ? size : 0,
          willChange: 'transform',
          transition: 'none',
        };
      }

      return style;
    };

    _getItemStyleCache: (_: any, __: any, ___: any) => ItemStyleCache;
    _getItemStyleCache = memoizeOne((_: any, __: any, ___: any) => ({}));

    _getRangeToRender(): [number, number, number, number] {
      const { itemCount, overscanCount } = this.props;
      const { scrollDirection, scrollOffset } = this.state;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      const startIndex = getStartIndexForOffset(
        this.props,
        scrollOffset,
        this._instanceProps
      );
      const stopIndex = getStopIndexForStartIndex(
        this.props,
        startIndex,
        scrollOffset,
        this._instanceProps
      );

      const overscanBackward =
        scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      const overscanForward =
        scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;

      return [
        Math.max(0, startIndex - overscanBackward),
        Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)),
        startIndex,
        stopIndex,
      ];
    }

    _outerRefSetter = (ref: any): void => {
      const { outerRef } = this.props;

      this._outerRef = ((ref: any): HTMLDivElement);

      if (typeof outerRef === 'function') {
        outerRef(ref);
      } else if (
        outerRef != null &&
        typeof outerRef === 'object' &&
        outerRef.hasOwnProperty('current')
      ) {
        outerRef.current = ref;
      }
    };

    _innerRefSetter = (ref: any): void => {
      const { innerRef } = this.props;

      this._innerRef = ((ref: any): HTMLDivElement);

      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (
        innerRef != null &&
        typeof innerRef === 'object' &&
        innerRef.hasOwnProperty('current')
      ) {
        innerRef.current = ref;
      }
    };

    _clearStyleCacheDebounced() {
      if (this._clearStyleCacheTimeoutID !== null) {
        cancelTimeout(this._clearStyleCacheTimeoutID);
      }

      this._clearStyleCacheTimeoutID = requestTimeout(
        this._clearStyleCache,
        DEBOUNCE_INTERVAL
      );
    }

    _clearStyleCache = () => {
      this._clearStyleCacheTimeoutID = null;

      // Clear style cache after state update has been committed.
      this._getItemStyleCache(-1, null);
    };
  };
}

// NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

const validateSharedProps = (
  { children, height, layout, innerTagName, outerTagName, width }: Props<any>,
  { instance }: State
): void => {
  if (process.env.NODE_ENV !== 'production') {
    const isHorizontal = layout === 'horizontal';

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;
      default:
        throw Error(
          'An invalid "layout" prop has been specified. ' +
            'Value should be either "horizontal" or "vertical". ' +
            `"${layout}" was specified.`
        );
    }

    if (children == null) {
      throw Error(
        'An invalid "children" prop has been specified. ' +
          'Value should be a React component. ' +
          `"${children === null ? 'null' : typeof children}" was specified.`
      );
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error(
        'An invalid "width" prop has been specified. ' +
          'Horizontal lists must specify a number for width. ' +
          `"${width === null ? 'null' : typeof width}" was specified.`
      );
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error(
        'An invalid "height" prop has been specified. ' +
          'Vertical lists must specify a number for height. ' +
          `"${height === null ? 'null' : typeof height}" was specified.`
      );
    }
  }
};
