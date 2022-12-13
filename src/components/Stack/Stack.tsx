import React, { Children, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import cx from 'classnames';

import { color, ColorProps, flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';
import getValidChildren from './utils/getValidChildren';

export interface CustomStackProps {
  direction?: string;
  spacing?: number | string;
  className?: string;
  children?: ReactNode;
  [x: string]: any;
}

export type StackProps = CustomStackProps & SpaceProps & LayoutProps & ColorProps & FlexboxProps;

const Stack: FCC<StackProps> = ({
  direction = 'column',
  spacing = '8px',
  className,
  children,
  ...props
}): ReactElement | null => {
  const validChildren = getValidChildren(children) ?? [];
  const refinedChildren = validChildren?.map((child, idx) => {
    return (
      <div key={`stack-item${idx}`} data-testid="stack-child-comp">
        {child}
      </div>
    );
  });

  return (
    <StyledStack
      data-testid="stack-component"
      direction={direction}
      spacing={spacing}
      className={cx('stack', className)}
      {...props}
    >
      {refinedChildren}
    </StyledStack>
  );
};

export default Stack;

const StyledStack = styled.div<CustomStackProps>`
  ${space}
  ${layout} 
  ${color}  
  ${flexbox}
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.spacing};
`;
