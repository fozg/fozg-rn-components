import React from 'react';
import {View, TextInput} from 'react-native';
import {colors} from '../variables'

export default ({
  style,
  ...props
}) => (
  <TextInput
    {...props}
    style={[coreStyles, style]}
  ></TextInput>
);

const coreStyles = {
  padding: 10,
  backgroundColor: colors.lightgray,
  color: colors.black,
  fontWeight: '400',
  outline: 'none',
  placeholderColor: 'red',
  borderRadius: 10,
  // alignSelf: 'stretch',
  flex: 1
}