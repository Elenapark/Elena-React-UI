import { Children, isValidElement } from 'react';

const getValidChildren = (children: React.ReactNode) => {
  if (!children) return;

  return Children.toArray(children).filter((child) => isValidElement(child));
};

export default getValidChildren;
