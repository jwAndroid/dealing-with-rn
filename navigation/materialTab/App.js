/**
 * @format
 */

import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomPager from './screens/BottomPager';
// import TopPager from './screens/TopPager';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  const nameMap = {
    Home: '홈',
    Search: '검색',
    Notification: '알림',
    Message: '메세지',
  };

  return nameMap[routeName];
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Top" component={TopPager} /> */}
        <Stack.Screen
          name="Bottom"
          component={BottomPager}
          options={({ route }) => ({
            title: getHeaderTitle(route),
          })}
        />

        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
