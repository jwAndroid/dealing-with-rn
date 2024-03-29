import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './SignInScreen';
import WelcomScreen from './WelcomScreen';
import UploadScreen from './UploadScreen';
import { useUserContext } from '../contexts/UserContext';
import MainTab from './MainTab';
import { subscribeAuth } from '../firebase/authentication';
import { getUser } from '../firebase/users';
import ModifyScreen from './ModifyScreen';
import SettingScreen from './SettingScreen';

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

          <Stack.Screen name="Upload" component={UploadScreen} />
          <Stack.Screen
            name="Modify"
            component={ModifyScreen}
            options={{ title: '설명 수정', headerBackTitle: '뒤로가기' }}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{ title: '설정', headerBackTitle: '뒤로가기' }}
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
