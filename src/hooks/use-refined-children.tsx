import React, { isValidElement } from 'react';

interface Args {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const useRefinedChildren = ({ children, className, style }: Args) => {
  return React.Children.map(children, (child, idx) => {
    if (isValidElement(child)) {
      const clonedChild = React.cloneElement(child, {
        ...child.props,
        key: `${className}-item${idx}`,
        'data-testid': `${className}-child-comp`,
        style: { ...style, ...child.props.style },
      });

      return clonedChild;
    } else {
      return (
        <div key={`${className}-item${idx}`} data-testid={`${className}-child-comp`}>
          {child}
        </div>
      );
    }
  });
};

export default useRefinedChildren;
