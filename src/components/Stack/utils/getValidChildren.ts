import { Children, isValidElement } from 'react';

// valid한 JSX element만 가져오기
const getValidChildren = (children: React.ReactNode) => {
  if (!children) return;

  return Children.toArray(children).filter((child) => isValidElement(child));
};

export default getValidChildren;
