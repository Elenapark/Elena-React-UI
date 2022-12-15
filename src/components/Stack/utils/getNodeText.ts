// ReactNode에서 Text 추출하기

const getNodeText = (node: React.ReactNode): any => {
  if (['string', 'number'].includes(typeof node)) return node;
  if (node instanceof Array) return node.map(getNodeText).join('');
  if (typeof node === 'object' && node) return getNodeText(node.props.children);
};

export default getNodeText;
