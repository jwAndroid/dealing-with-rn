import React from 'react';
import {Button, Text, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  const HomeScreen = ({navigation}) => {
    return (
      <View>
        <Text>Home</Text>
        <Button title="drawer open" onPress={() => navigation.openDrawer()} />

        <Button
          title="Setting open"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    );
  };

  const SettingScreen = ({navigation}) => {
    return (
      <View>
        <Text>Setting</Text>
        <Button title="go back" onPress={() => navigation.goBack()} />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        darwerPosition="left"
        backBehavior="history">
        <Drawer.Screen name="Home" component={HomeScreen} />

        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
