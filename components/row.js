import React from 'react';
import {View} from 'react-native';

export default ({children, style}) => (
  <View style={[
    {flexDirection: 'row', alignItems: 'center'},
    style
  ]}>{children}</View>
)