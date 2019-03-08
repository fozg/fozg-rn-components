import React from 'react';
import {Text} from 'react-native';

import {theme} from '../variables';

export default ({children}) => (
  <Text
    style={theme.h4}
  >{children}</Text>
)