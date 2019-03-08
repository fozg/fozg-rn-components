import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../variables';
import {upperFirstLetter} from '../utils';

function buildLabel (colo, size) {
  return ({
    children,
    color = colo,
    style,
  }) => (
    <View
      style={[
        styles.coreStyles,
        {
          backgroundColor: colors[colo]
        },
        style
      ]}
    >
      <Text
        style={{
          color: textColorMap[color],
          fontSize: {
            small: 10,
            medium: 14,
            large: 16
          }[size]
        }}
      >{children}</Text>
    </View>
  )
  
}

const Label = buildLabel('gray', 'medium');

let colorAvailable = ['gray', 'red', 'primary', 'dark'];
let sizeAvaiable = ['small', 'medium', 'large'];

colorAvailable.forEach(c => {
  Label[upperFirstLetter(c)] = buildLabel(c, 'medium');
  sizeAvaiable.forEach(s => {
    Label[upperFirstLetter(c)][upperFirstLetter(s)] = buildLabel(c, s);
  })
})

// Label.Red = buildLabel('red', 'medium');
// Label.Primary = buildLabel('primary', 'medium');
// Label.Dark = buildLabel('dark', 'medium');

export default Label;

const textColorMap = {
  gray: "#fff",
  red: "#fff",
  primary: "#fff",
  white: "#000",
  dark: "#fff"
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