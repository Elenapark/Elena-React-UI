import styled from 'styled-components';
import cx from 'classnames';
import React, { ReactNode } from 'react';
import { color, ColorProps, flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';
import useRefinedChildren from '../../hooks/use-refined-children';

interface CustomZStackProps {
  className?: string;
  children?: ReactNode;

  [x: string]: any;
}

export type ZStackProps = CustomZStackProps & SpaceProps & LayoutProps & ColorProps & FlexboxProps;

export const ZStack: FCC<ZStackProps> = ({ className, children, ...props }) => {
  const refinedChildren = useRefinedChildren({
    children,
    className,
  });

  return (
    <StyledZStack data-testid="zstack-comp" className={cx('zstack', className)} {...props}>
      {refinedChildren}
    </StyledZStack>
  );
};

const StyledZStack = styled.div<ZStackProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  position: relative;
`;
