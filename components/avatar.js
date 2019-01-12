import React from 'react';
import {View} from 'react-native';

import {styles, size, colors} from '../variables';

export default ({
  children,
  size = 'MEDIUM'
}) => (
  <View
    style={{
      backgroundColor: colors.gray,
      width: 40,
      height: 40,
      borderRadius: 40
    }}
  >{children}</View>
)