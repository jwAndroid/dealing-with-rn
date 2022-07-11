import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HeaderlessScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Header 가 없네?</Text>

        <Button onPress={() => navigation.pop()} title="back" />
      </View>
    </SafeAreaView>
  );
};

export default HeaderlessScreen;
