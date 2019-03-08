import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../variables';

export default ({
  children,
  color = 'gray',
  style,
  ...props
}) => (
  <View
    style={[
      styles.coreStyles,
      {
        backgroundColor: color
      },
      style
    ]}
  >
    <Text
      style={{color: textColorMap[color]}}
    >{children}</Text>
  </View>
)

const textColorMap = {
  gray: "#fff"
}

const styles = {
  coreStyles: {
    borderRadius: 20,
    paddingLeft: 6,
    paddingRight: 6,
    alignSelf: 'flex-start',
  },
  coreTextStyles: {
    color: colors.white
  }
}