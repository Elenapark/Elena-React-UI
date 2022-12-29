import { render, screen } from '@testing-library/react';
import React from 'react';
import { HStack } from './HStack';

const children = [<h2 id="test">hello</h2>, <h1>hi</h1>, 7, 'elenapark'];

const renderStack = () => {
  const defaultProps = {
    className: 'hstack',
    children,
  };
  render(<HStack {...defaultProps} />);
};

describe('<HStack />', () => {
  it('should only return row direction stack', () => {
    renderStack();
    expect(screen.getByTestId('stack-component')).toHaveAttribute('direction', 'row');
  });
});
