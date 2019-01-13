import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {styles, size, colors} from '../variables';

export default ({
  size = 'MEDIUM',
  color = colors.black,
  icon,
  selectedIcon = icon,
  selectedColor = colors.white,
  isSelected,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: isSelected ? colors.black : colors.lightgray,
      width: {SMALL: 15, MEDIUM: 35, LARGE: 45}[size],
      height: {SMALL: 15, MEDIUM: 35, LARGE: 45}[size],
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
    }}
  >
    <Icon 
      name={isSelected ? selectedIcon : icon} 
      color={isSelected ? selectedColor : color}
      size={23}
    />
  </TouchableOpacity>
)