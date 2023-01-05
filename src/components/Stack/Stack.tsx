import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import cx from 'classnames';

import { color, ColorProps, flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';
import useRefinedChildren from '../../hooks/use-refined-children';

interface CustomStackProps {
  direction?: string;
  spacing?: number | string;
  className?: string;
  children?: ReactNode;
  [x: string]: any;
}

export type StackProps = CustomStackProps & SpaceProps & LayoutProps & ColorProps & FlexboxProps;

export const Stack: FCC<StackProps> = ({
  direction = 'column',
  spacing = '8px',
  className,
  children,
  ...props
}): ReactElement | null => {
  const refinedChildren = useRefinedChildren({ children, className });

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

const StyledStack = styled.div<StackProps>`
  ${space}
  ${layout} 
  ${color}  
  ${flexbox}
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.spacing};
`;
