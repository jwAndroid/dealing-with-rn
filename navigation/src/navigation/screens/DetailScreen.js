import React from 'react';
import {Button, Text, View} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>화면 아이디:{route.params.id}</Text>

      <View style={{flexDirection: 'row'}}>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />

        <Button title="뒤로가기" onPress={() => navigation.pop()} />

        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

export default DetailScreen;
