import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {theme} from '../variables';
import {getColorSysNameFromProps} from '../utils';

export default ({
  title,
  block = false,
  size = 'medium',
  style,
  ...props
}) => {
  let colorSysTheme = getColorSysNameFromProps(props);
  let alignSelf = block ? 'stretch' : 'flex-start';
  return (
    <TouchableOpacity
      style={[
        coreStyles,
        theme.button.view[colorSysTheme],
        {
          alignSelf,
          height: sizeHeightStyles[size]
        },
        style
      ]}
      {...props}
    >
      <Text style={theme.button.text[colorSysTheme]}>{title}</Text>
    </TouchableOpacity>
  )
}

const sizeHeightStyles = {
  small: 25,
  medium: 40,
  large: 55
}

const coreStyles = {
  paddingLeft: 20,
  paddingRight: 20,
  height: 40,
  borderRadius: 10,
  shadowOffset: {width: 0, height: 3},
  shadowColor: '#000',
  shadowRadius: 2,
  shadowOpacity: .15,
  justifyContent: 'center',
  flexDirection: "row",
  elevation: 2,
  alignItems: 'center'
}