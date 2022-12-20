import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import ZStack, { CustomZStackProps } from './ZStack';
import Box from '../Box/Box';

const COLOR = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

export default {
  title: 'ZStack',
  component: ZStack,
} as Meta<CustomZStackProps>;

export const Default: FC = () => {
  return (
    <ZStack>
      {COLOR.map((_, idx) => {
        return (
          <Box bg={COLOR[idx]} position="absolute" top={idx * 10} left={idx * 10} width={100} height={100}>
            {`box${idx}`}
          </Box>
        );
      })}
    </ZStack>
  );
};
