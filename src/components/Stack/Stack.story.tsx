import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Stack, StackProps } from './Stack';

export default {
  title: 'Stack',
  component: Stack,
} as Meta<StackProps>;

export const Default: FC = () => {
  return (
    <Stack spacing="24px">
      <div style={{ background: 'pink' }}>Child1</div>
      <div style={{ background: 'pink' }}>Child2</div>
      <div style={{ background: 'pink' }}>Child3</div>
    </Stack>
  );
};
