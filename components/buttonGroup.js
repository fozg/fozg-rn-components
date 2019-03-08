import React from 'react';
import Row from './row';

export default ({
  children,
  block,
  ...props
}) => (
  <Row 
  >
    {
      React.Children.map(children, (child, index) => (
        React.cloneElement(child, {
          style: {
            borderTopLeftRadius: index !== 0 ? 0 : 50,
            borderBottomLeftRadius: index !== 0 ? 0 : 50,
            borderTopRightRadius: index !== children.length - 1 ? 0 : 50,
            borderBottomRightRadius: index !==  children.length - 1 ? 0 : 50,
            flex: block ? 1 : -1,
          },
          block: block,
          ...props
        })
      ))
    }
  </Row>
)
