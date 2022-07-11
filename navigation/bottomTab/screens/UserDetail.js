import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});

const UserDetail = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: '유저상세화면',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title="back" onPress={() => navigation.pop()} />

      <Text style={styles.text}>유저 상세</Text>

      <Button
        title="유저 사진 화면"
        onPress={() => navigation.push('UserPic')}
      />
    </View>
  );
};

export default UserDetail;
