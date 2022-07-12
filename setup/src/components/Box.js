import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'orange',
  },
  round: {
    borderRadius: 10,
  },
});

const Box = ({how}) => {
  return <View style={[styles.box, how ? styles.round : null]} />;
};

export default Box;
