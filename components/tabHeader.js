import React from 'react';
import {View, Text} from 'react-native';

import H1 from './h1';
import Row from './row';
import Avatar from './avatar';
import Spacing from './spcing';

export default ({title, avatar, rightControls}) => (
  <Row style={{paddingTop: 42, padding: 10}}>
    {avatar && <>
      <Avatar />
      <Spacing />
    </>}
    <H1>{title}</H1>
    {rightControls && <Row style={{justifyContent: 'flex-end', flex: 1}}>{rightControls}</Row>}
  </Row>
);
