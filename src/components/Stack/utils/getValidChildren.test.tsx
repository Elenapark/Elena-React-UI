import React from 'react';
import getValidChildren from './getValidChildren';

describe('getValidChildren', () => {
  it('should return valid jsx element', () => {
    const input = [<h1>title</h1>, 'text', 1];

    const result = getValidChildren(input);
    expect(result).toHaveLength(1);
  });
});
