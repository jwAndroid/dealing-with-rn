import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image source={require('../assets/images/circle.png')} />

      <Text style={styles.description}>야호~! 할 일이 없습니다</Text>
    </View>
  );
};

export default Empty;
