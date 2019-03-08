import React from 'react';
import {Text} from 'react-native';
import {theme} from '../variables';

export const Primary = ({children, style, ...props}) => (
  <Text 
    style={[theme.text.primary, style]} 
    {...props}
  >
    {children}
  </Text>
)

Primary.Primary = Primary;
Primary.Secondary = ({children, style, ...props}) => (
  <Text 
    style={[theme.text.secondary, style]} 
    {...props}
  >
    {children}
  </Text>
)

export default Primary;
