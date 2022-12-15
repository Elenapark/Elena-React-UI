import React from 'react';
import Box, { BoxProps } from '../Box/Box';

const defaultStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Center: FCC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box {...defaultStyles} {...props}>
      {children}
    </Box>
  );
};

export default Center;
