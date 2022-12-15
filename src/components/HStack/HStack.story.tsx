import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import HStack from './HStack';
import { CustomStackProps } from 'components/Stack';

export default {
  title: 'HStack',
  component: HStack,
} as Meta<Omit<CustomStackProps, 'direction'>>;

export const Default: FC = () => {
  return (
    <HStack spacing="24px">
      <div style={{ background: 'pink' }}>Child1</div>
      <div style={{ background: 'pink' }}>Child2</div>
      <div style={{ background: 'pink' }}>Child3</div>
    </HStack>
  );
};
