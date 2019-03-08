import React from 'react';
import {View} from 'react-native';

import {colors} from '../variables';

export default ({
  children,
  size = 'medium'
}) => (
  <View
    style={{
      backgroundColor: colors.red,
      width: 40,
      height: 40,
      borderRadius: 40
    }}
  >{children}</View>
)