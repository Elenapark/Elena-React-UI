import styled from 'styled-components';
import cx from 'classnames';
import React, { isValidElement, ReactNode } from 'react';
import { color, ColorProps, flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';

export type ZStackProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps;

export interface CustomZStackProps {
  className?: string;
  children?: ReactNode;
  [x: string]: any;
}

const ZStack: FCC<CustomZStackProps> = ({ className, children, ...props }) => {
  const refinedChildren = React.Children.map(children, (child, idx) => {
    const positionStyle: React.CSSProperties = {
      zIndex: idx,
    };
    if (isValidElement(child)) {
      const clonedChild = React.cloneElement(child, {
        ...child.props,
        key: `zstack-item${idx}`,
        'data-testid': 'zstack-child-comp',
        style: { ...positionStyle, ...child.props.style },
      });

      return clonedChild;
    }
  });
  return (
    <StyledZStack data-testid="zstack-comp" className={cx('zstack', className)} {...props}>
      {refinedChildren}
    </StyledZStack>
  );
};

export default ZStack;

const StyledZStack = styled.div<CustomZStackProps>`
  ${space}
  ${layout} 
  ${color}  
  ${flexbox} 
  position:relative;
`;
