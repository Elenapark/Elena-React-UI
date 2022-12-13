import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import Stack, { CustomStackProps } from './Stack';

export default {
  title: 'Stack',
  component: Stack,
} as Meta<CustomStackProps>;

export const Default: FC = () => {
  return (
    <Stack backgroundColor="pink" spacing="24px">
      <span>Child1</span>
      <span>Child2</span>
      <span>Child3</span>
    </Stack>
  );
};
