import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {BigHeader} from './libs';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BigHeader title="Fozg" />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },  
});
