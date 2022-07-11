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

const UserPicture = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      title: 'UserPicture',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title="back" onPress={() => navigation.pop()} />

      <Text style={styles.text}>UserPicture</Text>
    </View>
  );
};

export default UserPicture;
