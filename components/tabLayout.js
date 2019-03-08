import React from 'react';
import {View, ScrollView} from 'react-native';
import TabHeader from './tabHeader';

export default ({title, children, ...rest}) => (
  <View>
    <TabHeader title={title} {...rest} />
    <ScrollView style={styles.tabContent}>
      {children}
    </ScrollView>
  </View>
);

const styles = {
  container: {
    flex: 1
  },
  tabContent: {
    flex: 1,
    padding: 10
  }
}