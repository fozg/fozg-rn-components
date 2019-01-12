import React from 'react';
import {Text} from 'react-native';

import {styles} from '../variables';

export default ({children}) => (
  <Text
    style={styles.h1}
  >{children}</Text>
)