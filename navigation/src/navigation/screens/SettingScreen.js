import React from 'react';
import {Button, Text, View} from 'react-native';

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Text>setting screen</Text>

      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SettingScreen;
