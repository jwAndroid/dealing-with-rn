import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: '홈 스크린'});
  }, [navigation]);

  return (
    <View
      style={{flex: 1, paddingVertical: 50, justifyContent: 'space-between'}}>
      <View style={{margin: 5}}>
        <Text>Home</Text>

        <Button title="drawer open" onPress={() => navigation.openDrawer()} />

        <Button
          title="open setting"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>

      <Button
        title="detail screen id:1 open"
        onPress={() => navigation.push('Detail', {id: 1})}
      />

      <Button
        title="detail screen id:2 open"
        onPress={() => navigation.push('Detail', {id: 2})}
      />

      <Button
        title="detail screen id:3 open"
        onPress={() => navigation.push('Detail', {id: 3})}
      />

      <Button
        title="headerless screen open"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
};

export default HomeScreen;
