import React from 'react';
import getNodeText from './getNodeText';

describe('getNodeText', () => {
  it('should retreive jsx element text', () => {
    const input = (
      <h1>
        나는<span>바보</span>다
      </h1>
    );

    const result = getNodeText(input);
    expect(result).toBe('나는바보다');
  });
});
