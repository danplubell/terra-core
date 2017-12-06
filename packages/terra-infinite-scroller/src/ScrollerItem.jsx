import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ScrollerItem.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The content element to be placed inside the list item for display.
   */
  children: PropTypes.node,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  height: PropTypes.number,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  index: PropTypes.number,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  children: [],
  height: undefined,
};

const ScrollerItem = ({
    children,
    height,
    index,
    refCallback,
    ...customProps
  }) => {
  const scrollerItemClassNames = cx([
    'scroller-item',
    customProps.className,
  ]);

  let customStyle;
  if (height) {
    customStyle = customProps.style || {};
    customStyle.height = `${height}`;
  }

  const updateRef = (node) => {
    if (refCallback) {
      refCallback(node, index);
    }
  };

  return (
    <div {...customProps} {...customStyle} className={scrollerItemClassNames} ref={updateRef}>
      {children}
    </div>
  );
};

ScrollerItem.propTypes = propTypes;
ScrollerItem.defaultProps = defaultProps;

export default ScrollerItem;