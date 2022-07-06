/**
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import Greeting from './src/components/Greeting';

const App = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Greeting />
  </View>
);

// return , {} 생략

export default App;
