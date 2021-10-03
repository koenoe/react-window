// Type definitions for react-window 2.0
// Project: https://github.com/bvaughn/react-window/, http://react-window.now.sh
// Definitions by: Martynas Kadiša <https://github.com/martynaskadisa>
//                 Alex Guerra <https://github.com/heyimalex>
//                 John Gozde <https://github.com/jgoz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
  Component,
  ComponentType,
  CSSProperties,
  Ref,
  Key,
  FunctionComponent,
  ComponentClass,
} from 'react';

export type Layout = 'vertical' | 'horizontal';
export type ScrollDirection = 'forward' | 'backward';
export type Align = 'auto' | 'smart' | 'center' | 'end' | 'start';
export type PrerenderMode = 'none' | 'idle' | 'idle+debounce';

export interface ListChildComponentProps<T = any> {
  index: number;
  style: CSSProperties;
  data: T;
  hidden: boolean;
}

// This is supposed to represent the type of the first parameter to
// React.createElement.
export type ReactElementType =
  | FunctionComponent<any>
  | ComponentClass<any>
  | string;

export interface CommonProps<T = any> {
  /**
   * Optional CSS class to attach to outermost <div> element.
   */
  className?: string | undefined;
  /**
   * Tag name passed to document.createElement to create the inner container element. This is an advanced property; in most cases, the default ("div") should be used.
   */
  innerElementType?: ReactElementType | undefined;
  /**
   * Ref to attach to the inner container element. This is an advanced property.
   */
  innerRef?: Ref<any> | undefined;
  /**
   * Contextual data to be passed to the item renderer as a data prop. This is a light-weight alternative to React's built-in context API.
   *
   * Item data is useful for item renderers that are class components.
   */
  itemData?: T | undefined;
  /**
   * Tag name passed to document.createElement to create the outer container element. This is an advanced property; in most cases, the default ("div") should be used.
   */
  outerElementType?: ReactElementType | undefined;
  /**
   * Ref to attach to the outer container element. This is an advanced property.
   */
  outerRef?: Ref<any> | undefined;
  /**
   * Optional inline style to attach to outermost <div> element.
   */
  style?: CSSProperties | undefined;
}

export type ListItemKeySelector<T = any> = (index: number, data: T) => Key;

export interface ListOnItemsRenderedProps {
  visibleStartIndex: number;
  visibleStopIndex: number;
}

export interface ListProps<T = any> extends CommonProps<T> {
  /**
   * React component responsible for rendering the individual item specified by an index prop. This component also receives a style prop (used for positioning).
   *
   * If useIsScrolling is enabled for the list, the component also receives an additional isScrolling boolean prop.
   */
  children: ComponentType<ListChildComponentProps<T>>;
  /**
   * Height of the list.
   *
   * For vertical lists, this must be a number. It affects the number of rows that will be rendered (and displayed) at any given time.
   *
   * For horizontal lists, this can be a number or a string (e.g. "50%").
   */
  height: number | string;
  /**
   * Total number of items in the list. Note that only a few items will be rendered and displayed at a time.
   */
  itemCount: number;
  /**
   * Width of the list.
   *
   * For horizontal lists, this must be a number. It affects the number of columns that will be rendered (and displayed) at any given time.
   *
   * For vertical lists, this can be a number or a string (e.g. "50%").
   */
  width: number | string;
  /**
   * Layout/orientation of the list.
   *
   * Acceptable values are:
   * - "vertical" (default) - Up/down scrolling.
   * - "horizontal" - Left/right scrolling.
   *
   * Note that lists may scroll in both directions (depending on CSS) but content will only be windowed in the layout direction specified.
   */
  layout?: Layout | undefined;
  /**
   * Scroll offset for initial render.
   *
   * For vertical lists, this affects scrollTop. For horizontal lists, this affects scrollLeft.
   */
  initialScrollOffset?: number | undefined;
  /**
   * By default, lists will use an item's index as its key. This is okay if:
   *
   * - Your collections of items is never sorted or modified
   * - Your item renderer is not stateful and does not extend PureComponent
   *
   * If your list does not satisfy the above constraints, use the itemKey property to specify your own keys for items
   */
  itemKey?: ListItemKeySelector<T> | undefined;
  /**
   * Called when the items rendered by the list change.
   */
  onItemsRendered?: ((props: ListOnItemsRenderedProps) => any) | undefined;

  prerenderMode?: PrerenderMode;
  maxNumPrerenderRows?: number;
}

export interface FixedSizeListProps<T = any> extends ListProps<T> {
  /**
   * Size of a item in the direction being windowed. For vertical lists, this is the row height. For horizontal lists, this is the column width.
   */
  itemSize: number;
}

export interface VariableSizeListProps<T = any> extends ListProps<T> {
  /**
   * Estimated size of a item in the direction being windowed. For vertical lists, this is the row height. For horizontal lists, this is the column width.
   *
   * This value is used to calculated the estimated total size of a list before its items have all been measured. The total size impacts user scrolling behavior.
   * It is updated whenever new items are measured.
   */
  estimatedItemSize?: number | undefined;
  /**
   * Returns the size of a item in the direction being windowed. For vertical lists, this is the row height. For horizontal lists, this is the column width.
   */
  itemSize: (index: number) => number;
}

export class FixedSizeList<T = any> extends Component<FixedSizeListProps<T>> {
  /**
   * Scroll to the specified offset (scrollTop or scrollLeft, depending on the direction prop).
   */
  scrollTo(scrollOffset: number): void;
  /**
   * Scroll to the specified item.
   *
   * By default, the List will scroll as little as possible to ensure the item is visible.
   * You can control the alignment of the item though by specifying a second alignment parameter. Acceptable values are:
   *
   * - auto (default) - Scroll as little as possible to ensure the item is visible. (If the item is already visible, it won't scroll at all.)
   * - smart
   *   - If the item is already visible, don't scroll at all.
   *   - If it is less than one viewport away, scroll as little as possible so that it becomes visible.
   *   - If it is more than one viewport away, scroll so that it is centered within the list.
   * - center - Center align the item within the list.
   * - end - Align the item to the end of the list (the bottom for vertical lists or the right for horizontal lists).
   * - start - Align the item to the beginning of the list (the top for vertical lists or the left for horizontal lists).
   */
  scrollToItem(index: number, align?: Align): void;
}

export class VariableSizeList<T = any> extends Component<
  VariableSizeListProps<T>
> {
  /**
   * Scroll to the specified offset (scrollTop or scrollLeft, depending on the direction prop).
   */
  scrollTo(scrollOffset: number): void;
  /**
   * Scroll to the specified item.
   *
   * By default, the List will scroll as little as possible to ensure the item is visible.
   * You can control the alignment of the item though by specifying a second alignment parameter. Acceptable values are:
   *
   * - auto (default) - Scroll as little as possible to ensure the item is visible. (If the item is already visible, it won't scroll at all.)
   * - smart
   *   - If the item is already visible, don't scroll at all.
   *   - If it is less than one viewport away, scroll as little as possible so that it becomes visible.
   *   - If it is more than one viewport away, scroll so that it is centered within the list.
   * - center - Center align the item within the list.
   * - end - Align the item to the end of the list (the bottom for vertical lists or the right for horizontal lists).
   * - start - Align the item to the beginning of the list (the top for vertical lists or the left for horizontal lists).
   */
  scrollToItem(index: number, align?: Align): void;
  /**
   * VariableSizeList caches offsets and measurements for each index for performance purposes.
   * This method clears that cached data for all items after (and including) the specified index.
   * It should be called whenever a item's size changes. (Note that this is not a typical occurrence.)
   *
   * By default the list will automatically re-render after the index is reset.
   * If you would like to delay this re-render until e.g. a state update has completed in the parent component,
   * specify a value of false for the second, optional parameter.
   */
  resetAfterIndex(index: number, shouldForceUpdate?: boolean): void;
}

/**
 * Custom comparison function for React.memo().
 * It knows to compare individual style props and ignore the wrapper object.
 *
 * @see https://reactjs.org/docs/react-api.html#reactmemo
 */
export function areEqual(
  prevProps: Readonly<object>,
  nextProps: Readonly<object>
): boolean;

/**
 * Custom shouldComponentUpdate for class components.
 * It knows to compare individual style props and ignore the wrapper object.
 *
 * @see https://reactjs.org/docs/react-component.html#shouldcomponentupdate
 */
export function shouldComponentUpdate<P = {}, S = {}>(
  this: { props: P; state: S },
  nextProps: Readonly<P>,
  nextState: Readonly<S>
): boolean;
