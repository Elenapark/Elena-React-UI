import { getByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import Stack from './Stack';

const childrenElement = (
  <>
    <div>child1</div>
    <div>child2</div>
  </>
);

const defaultProps = {
  direction: 'row',
  children: childrenElement,
};

describe('<Stack />', () => {
  it('should render', () => {
    render(<Stack {...defaultProps} />);

    expect(screen.getByTestId('stack-component')).toMatchSnapshot();
  });

  it('should render children', () => {
    render(<Stack {...defaultProps} />);
    expect(screen.getByText(/child1/i)).toBeInTheDocument();
    expect(screen.getByText(/child2/i)).toBeInTheDocument();
  });

  it('should allow custom classname', () => {
    const customProps = {
      ...defaultProps,
      className: 'test',
    };
    render(<Stack {...customProps} />);

    expect(screen.getByTestId('stack-component')).toHaveProperty('className');
  });

  it('only allows its children to be JSX element.', () => {
    render(<Stack {...defaultProps} />);

    expect(screen.getByTestId('stack-child-comp')).toBeInTheDocument();
  });
});
