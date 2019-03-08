import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {colors} from '../variables';

export default ({
  size = 'medium',
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
      width: {small: 15, medium: 35, large: 45}[size],
      height: {small: 15, medium: 35, large: 45}[size],
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
