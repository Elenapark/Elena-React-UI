import React from 'react';
import { Stack, StackProps } from '../Stack/Stack';

export const HStack: FCC<Omit<StackProps, 'direction'>> = ({ spacing, className, children, ...props }) => {
  return (
    <Stack direction="row" spacing={spacing} className={className} {...props}>
      {children}
    </Stack>
  );
};
