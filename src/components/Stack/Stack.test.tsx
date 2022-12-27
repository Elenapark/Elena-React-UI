import { render, screen } from '@testing-library/react';
import React from 'react';
import {Stack} from './Stack';

const invalidChildren = [1, 'text', <div>child1</div>];
const validChildren = [<div id="add">child1</div>, <div>child2</div>];

const renderStack = (children: any) => {
  const defaultProps = {
    direction: 'row',
    className: 'test',
    children,
  };
  render(<Stack {...defaultProps} />);
};

describe('<Stack />', () => {
  describe('when children valid', () => {
    it('should render', () => {
      renderStack(validChildren);
      expect(screen.getByTestId('stack-component')).toBeInTheDocument();
    });

    it('should render children', () => {
      renderStack(validChildren);
      expect(screen.getAllByTestId('stack-child-comp')).toHaveLength(2);
      expect(screen.getByText('child1')).toHaveProperty('id');
    });

    it('should allow custom classname', () => {
      renderStack(validChildren);
      expect(screen.getByTestId('stack-component')).toHaveProperty('className');
    });
  });

  describe('when children is invalid', () => {
    it('should make its children to be valid anyway', () => {
      renderStack(invalidChildren);
      expect(screen.queryAllByTestId('stack-child-comp')).toHaveLength(3);
    });
  });
});
