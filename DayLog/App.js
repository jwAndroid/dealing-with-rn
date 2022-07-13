/**
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './src/navigation/RootStack';
import { LogContextProvider } from './src/context/LogContext';

const App = () => {
  return (
    <LogContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </LogContextProvider>
  );
};

export default App;
