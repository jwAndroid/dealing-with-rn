import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './SignInScreen';
import WelcomScreen from './WelcomScreen';
import UploadScreen from './UploadScreen';
import { useUserContext } from '../contexts/UserContext';
import MainTab from './MainTab';
import { subscribeAuth } from '../firebase/authentication';
import { getUser } from '../firebase/users';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const unsubscribe = subscribeAuth(async currentUser => {
      unsubscribe();

      if (!currentUser) {
        return;
      }

      const profile = await getUser(currentUser.uid);

      if (!profile) {
        return;
      }

      setUser(profile);
    });
  }, [setUser]);

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Welcome"
            component={WelcomScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
