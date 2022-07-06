import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: 'orange',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

const DateHead = ({date}) => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  const {top} = useSafeAreaInsets();

  return (
    <View>
      <View style={styles.container}>
        <StatusBar backgroundColor="#26a69a" barStyle="dark-content" />

        <View style={styles.block}>
          <Text style={styles.dateText}>{`${y}년 ${m}월 ${d}일`}</Text>
        </View>
      </View>
    </View>
  );
};

export default DateHead;
