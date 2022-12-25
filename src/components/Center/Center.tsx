import React from 'react';
import { Box, BoxProps } from '../Box/Box';

const defaultStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export type CenterProps = BoxProps;

export const Center: FCC<CenterProps> = ({ children, ...props }) => {
  return (
    <Box {...defaultStyles} {...props} data-testid="center-comp">
      {children}
    </Box>
  );
};
