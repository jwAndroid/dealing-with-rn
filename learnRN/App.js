/**
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import Box from './src/components/Box';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Box how />
    </View>
  );
};

export default App;
