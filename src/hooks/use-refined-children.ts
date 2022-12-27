import React, { isValidElement } from 'react';


type StyleFunction = ((idx: number) => React.CSSProperties)
interface Args {
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties | StyleFunction;
}

const useRefinedChildren = ({ children, style }: Args) => {
  return React.Children.map(children, (child, idx) => {
    if (isValidElement(child)) {
      let childStyle: React.CSSProperties = null;
      if (Object.keys(style as React.CSSProperties).length > 0) {
        childStyle = style as React.CSSProperties;
      } else {
        childStyle = (style as StyleFunction)(idx);
      }

      const clonedChild = React.cloneElement(child, {
        ...child.props,
        key: `zstack-item${idx}`,
        'data-testid': 'zstack-child-comp',
        style: { ...childStyle, ...child.props.style },
      });

      return clonedChild;
    } else {
      return (
        <div key = {`stack-item${idx}`
    }
      data - testid = 'stack-child-comp' >
        { child }
        < /div>;
    )
    }
  });
};

export default useRefinedChildren;
