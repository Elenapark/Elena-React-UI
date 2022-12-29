import React from 'react';
import { SimpleGrid } from './SimpleGrid';
import { render, screen } from '@testing-library/react';

const children = [<div>그리드1</div>, <div>그리드2</div>];

const defaultProps = {
  column: 2,
  spacingX: 10,
  spacingY: 10,
  children,
  className: 'simple-grid',
};

describe('<SimpleGrid />', () => {
  it('should render', () => {
    render(<SimpleGrid {...defaultProps} />);
    expect(screen.getByTestId('simple-grid-comp')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<SimpleGrid {...defaultProps} />);
    expect(screen.getAllByTestId('simple-grid-child-comp')).toHaveLength(2);
  });

  it('has grid styling', () => {
    render(<SimpleGrid {...defaultProps} />);
    expect(screen.getByTestId('simple-grid-comp')).toHaveStyle(`display: grid`);
    expect(screen.getByTestId('simple-grid-comp')).toHaveStyle(`grid-template-columns: repeat(2,1fr)`);
  });
});
