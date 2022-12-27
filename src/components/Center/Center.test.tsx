import { render, screen } from '@testing-library/react';
import React from 'react';
import {Center} from './Center';

const children = "I'm Center!";

const defaultProps = {
  children,
};
describe('<Center />', () => {
  it('should render', () => {
    render(<Center {...defaultProps} />);

    expect(screen.getByTestId('center-comp')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<Center {...defaultProps} />);

    expect(screen.getByText(/I'm Center/i)).toBeInTheDocument();
  });

  it('should have proper center styles', () => {
    render(<Center {...defaultProps} />);

    expect(screen.getByTestId('center-comp')).toHaveStyle(`
    display:flex; justify-content:center;align-items:center; 
    `);
  });
});
