import React from 'react';
import {Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />

      <Button
        title="detail 2 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />

      <Button
        title="detail 3 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
    </View>
  );
};

export default HomeScreen;
