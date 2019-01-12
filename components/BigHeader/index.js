import React from 'react';
import {View, Text} from 'react-native';

export default ({title}) => (
  <View style={{justifyContent: 'flex-start',}}>
    <Text style={{fontSize: 25, fontWeight: '600'}}>{title}</Text>
    <Text>This is header</Text>
  </View>
);
