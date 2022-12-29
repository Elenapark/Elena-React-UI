import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Box } from '../Box/Box';
import { ZStack, ZStackProps } from './ZStack';

const COLOR = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

export default {
  title: 'ZStack',
  component: ZStack,
} as Meta<ZStackProps>;

export const Default: FC = () => {
  return (
    <ZStack>
      {COLOR.map((_, idx) => {
        return (
          <Box bg={COLOR[idx]} position="absolute" top={idx * 10} left={idx * 10} zIndex={idx} width={100} height={100}>
            {`box${idx}`}
          </Box>
        );
      })}
    </ZStack>
  );
};
