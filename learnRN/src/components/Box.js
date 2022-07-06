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

const Box = props => {
  return <View style={[styles.box, props.how ? styles.round : null]} />;
};

export default Box;
