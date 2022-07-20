/**
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './src/navigation/RootStack';
import { LogContextProvider } from './src/context/LogContext';
import { SearchContextProvider } from './src/context/SearchContext';

const App = () => {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
};

export default App;
