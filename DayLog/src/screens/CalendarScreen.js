import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LogContext from '../context/LogContext';

const styles = StyleSheet.create({
  block: {},
});

const CalendarScreen = () => {
  const { text } = useContext(LogContext);

  return (
    <View style={styles.block}>
      <Text>{text}</Text>
    </View>
  );
};

export default CalendarScreen;
