import styled from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  position,
  PositionProps,
} from 'styled-system';
import React from 'react';

const StyledBox = styled.div`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${position}
`;

export type BoxProps = PositionProps & SpaceProps & LayoutProps & ColorProps & FlexboxProps;

const Box: FCC<BoxProps> = (props: any) => {
  return <StyledBox {...props} data-testid={props['data-testid'] ?? 'box-comp'} />;
};

export default Box;
