/**
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from './screens/BottomTab';
import DetailScreen from './screens/DetailScreen';
import UserDetail from './screens/UserDetail';
import UserPicture from './screens/UserPicture';

const Stack = createNativeStackNavigator();

/**
 * 바텀 탭 네비게이션과 스택을 함께 사용함.
 * App.js 에서 BottomTab 을 가장 먼저 보이게 한다음에
 * DetailScreen 을 깔아주어서 다른 화면으로 갈 수 있도록 함.
 * 이렇게 하면 다른 스택으로 가도 바텀탭이 사라지게 할 수 있다.
 * 바텀탭 에서 다른 화면으로 가도록 화면 목록 컴포넌트들을 모두 정의해줘야한다.
 */

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="User" component={UserDetail} />
        <Stack.Screen name="UserPic" component={UserPicture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
