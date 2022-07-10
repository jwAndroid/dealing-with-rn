import React, {useEffect} from 'react';
import {Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: '홈 스크린'});
  }, [navigation]);

  return (
    <View>
      <Button
        title="detail id 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />

      <Button
        title="detail id 2 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />

      <Button
        title="detail id 3 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
    </View>
  );
};

export default HomeScreen;
