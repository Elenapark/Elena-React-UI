import React, { isValidElement } from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  grid,
  GridProps,
} from 'styled-system';

export interface SimpleGridProps {
  column: number;
  spacingX?: number | string;
  spacingY?: number | string;
  children?: React.ReactNode;
  [x: string]: any;
}

export type CustomGridProps = SimpleGridProps & SpaceProps & LayoutProps & ColorProps & FlexboxProps & GridProps;

const SimpleGrid: FCC<CustomGridProps> = ({ column = 2, spacingX = 10, spacingY = 10, children, ...props }) => {
  const refinedChildren = React.Children.map(children, (child, idx) => {
    if (isValidElement(child)) {
      const clonedChild = React.cloneElement(child, {
        ...child.props,
        key: `SimpleGrid-item${idx}`,
        'data-testid': 'simple-grid-item-comp',
      });

      return clonedChild;
    } else {
      return (
        <div key={`SimpleGrid-item${idx}`} data-testid="simple-grid-item-comp">
          {child}
        </div>
      );
    }
  });

  return (
    <StyledSimpleGrid data-testid="simple-grid-comp" column={column} spacingX={spacingX} spacingY={spacingY} {...props}>
      {refinedChildren}
    </StyledSimpleGrid>
  );
};

export default SimpleGrid;

const StyledSimpleGrid = styled.div<SimpleGridProps>`
  ${color}
  ${flexbox}
	${layout}
	${space}
	${grid}

  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.column},1fr)`};
  grid-column-gap: ${(props) => `${props.spacingX}px`};
  grid-row-gap: ${(props) => `${props.spacingY}px`};
`;
