import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {styles, size, colors} from '../variables';

export default ({
  size = 'MEDIUM',
  color = colors.black,
  icon,
  seletedIcon = icon,
  seletedColor = colors.white,
  isSeleted,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: isSeleted ? colors.red: colors.lightgray,
      width: {SMALL: 15, MEDIUM: 35, LARGE: 45}[size],
      height: {SMALL: 15, MEDIUM: 35, LARGE: 45}[size],
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30
    }}
  >
    <Icon 
      name={isSeleted ? seletedIcon : icon} 
      color={isSeleted ? seletedColor : color}
      size={23}
    />
  </TouchableOpacity>
)