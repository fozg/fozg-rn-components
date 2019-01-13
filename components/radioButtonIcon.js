import React from 'react';
import {TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons'

import {styles, size, colors} from '../variables';

export default ({
  children,
  size = 'MEDIUM',
  color = colors.black,
  icon,
  seletedIcon,
  seletedColor = colors.red,
  isSeleted,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: isSeleted ? colors.gray : colors.lightgray,
      width: {SMALL: 15, MEDIUM: 35, LARGE: 45}[size],
      height: {SMALL: 15, MEDIUM: 35, LARGE: 45}[size],
      borderRadius: 30
    }}
  >{children}</TouchableOpacity>
)