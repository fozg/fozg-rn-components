import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from '../variables';
import {getThemeFromProps} from '../utils';

export default ({
  title,
  ...props
}) => {
  let theme = getThemeFromProps(props);
  return (
    <TouchableOpacity
      style={[
        coreStyles,
        styles.button.view[theme]
      ]}
    >
      <Text style={styles.button.text[theme]}>{title}</Text>
    </TouchableOpacity>
  )
}

const coreStyles = {
  paddingLeft: 20,
  paddingRight: 20,
  height: 40,
  borderRadius: 40,
  shadowOffset: {width: 0, height: 3},
  shadowColor: '#000',
  shadowRadius: 2,
  shadowOpacity: .15,
  alignSelf: "flex-start",
  flexDirection: "row",
  elevation: 2,
  alignItems: 'center'
}