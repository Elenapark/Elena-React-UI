import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import Center from './Center';
import { BoxProps } from 'components/Box';

export default {
  title: 'Center',
  component: Center,
} as Meta<BoxProps>;

const styles = {
  backgroundColor: 'tomato',
  padding: '20px',
  width: '400px',
  color: '#fff',
};

export const Default: FC = () => {
  return <Center {...styles}>I'm center</Center>;
};
