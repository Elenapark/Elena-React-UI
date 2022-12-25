import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Center, CenterProps } from './Center';

export default {
  title: 'Center',
  component: Center,
} as Meta<CenterProps>;

const styles = {
  backgroundColor: 'tomato',
  padding: '20px',
  width: '400px',
  color: '#fff',
};

export const Default: FC = () => {
  return <Center {...styles}>I'm center</Center>;
};
