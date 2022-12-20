import React from 'react';
import Stack from '../Stack/Stack';
import { CustomStackProps } from '../Stack/Stack';

const HStack: FCC<Omit<CustomStackProps, 'direction'>> = ({ spacing, className, children, ...props }) => {
  return (
    <Stack direction="row" spacing={spacing} className={className} {...props}>
      {children}
    </Stack>
  );
};

export default HStack;
