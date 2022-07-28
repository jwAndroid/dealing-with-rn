import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './SignInScreen';
import WelcomScreen from './WelcomScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Welcom"
        component={WelcomScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
