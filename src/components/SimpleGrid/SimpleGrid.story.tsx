import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { SimpleGrid, CustomGridProps } from './SimpleGrid';

export default {
  title: 'SimpleGrid',
  component: SimpleGrid,
} as Meta<CustomGridProps>;

const style = {
  background: 'dodgerBlue',
  color: 'white',
  padding: '20px',
};

export const Default: FC = () => {
  return (
    <SimpleGrid column={3} spacingX={20} spacingY={10}>
      {Array(6)
        .fill(1)
        .map((_, idx) => {
          return <div style={{ ...style }}>{`grid-item${idx}`}</div>;
        })}
    </SimpleGrid>
  );
};
