import useRefinedChildren from '../../hooks/use-refined-children';
import React from 'react';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

export interface SimpleGridProps {
  column: number;
  spacingX?: number | string;
  spacingY?: number | string;
  children?: React.ReactNode;
  className?: string;
  [x: string]: any;
}

export type CustomGridProps = SimpleGridProps & SpaceProps & ColorProps;

export const SimpleGrid: FCC<CustomGridProps> = ({
  column = 2,
  spacingX = 10,
  spacingY = 10,
  children,
  className,
  ...props
}) => {
  const refinedChildren = useRefinedChildren({ children, className });

  return (
    <StyledSimpleGrid data-testid="simple-grid-comp" column={column} spacingX={spacingX} spacingY={spacingY} {...props}>
      {refinedChildren}
    </StyledSimpleGrid>
  );
};

const StyledSimpleGrid = styled.div<CustomGridProps>`
  ${color}
  ${space}

  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.column},1fr)`};
  grid-column-gap: ${(props) => `${props.spacingX}px`};
  grid-row-gap: ${(props) => `${props.spacingY}px`};
`;
