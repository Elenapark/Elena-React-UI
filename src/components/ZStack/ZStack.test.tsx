import { render, screen } from '@testing-library/react';
import {Box} from '../Box/Box';
import React from 'react';
import {ZStack} from './ZStack';

const COLOR = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const children = COLOR.map((_, idx) => {
  return (
    <Box
      bg={COLOR[idx]}
      position="absolute"
      top={idx * 10}
      left={idx * 10}
      width={100}
      height={100}
      data-testid="zstack-child-comp"
    >
      {`box${idx}`}
    </Box>
  );
});

const renderStack = () => {
  const defaultProps = {
    className: 'test',
    children,
  };
  render(<ZStack {...defaultProps} />);
};

describe('<ZStack  />', () => {
  it('should render', () => {
    renderStack();
    expect(screen.getByTestId('zstack-comp')).toBeInTheDocument();
  });

  it('should render children', () => {
    renderStack();
    expect(screen.getAllByTestId('zstack-child-comp')).toHaveLength(6);
  });

  it('should have proper attribute', () => {
    renderStack();
    COLOR.map((_, idx) => {
      return expect(screen.getByText(`box${idx}`)).toHaveAttribute('style', `z-index: ${idx};`);
    });
  });
});
