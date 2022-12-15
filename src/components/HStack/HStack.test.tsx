import { render, screen } from '@testing-library/react';
import React from 'react';
import HStack from './HStack';

const children = [<h2 id="test">hello</h2>, <h1>hi</h1>, 7, 'elenapark'];

describe('<HStack />', () => {
  it('should render', () => {
    const defaultProps = {
      className: 'hstack test',
      children,
    };
    render(<HStack {...defaultProps} />);
    expect(screen.getByTestId('stack-component')).toMatchSnapshot();
  });

  it('should render children', () => {
    const defaultProps = {
      className: 'hstack test',
      children,
    };
    render(<HStack {...defaultProps} />);
    expect(screen.getAllByTestId('stack-child-comp')).toHaveLength(4);
  });

  it('should allow custom className', () => {
    const defaultProps = {
      className: 'hstack-test',
      children,
    };
    render(<HStack {...defaultProps} />);
    expect(screen.getByTestId('stack-component')).toHaveClass('hstack-test');
  });

  it('should only return row direction stack', () => {
    const defaultProps = {
      className: 'hstack-test',
      children,
    };
    render(<HStack {...defaultProps} />);
    expect(screen.getByTestId('stack-component')).toHaveAttribute('direction', 'row');
  });
});
