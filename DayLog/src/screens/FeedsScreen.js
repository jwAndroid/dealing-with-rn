import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../context/LogContext';

const styles = StyleSheet.create({
  block: { flex: 1 },
});

const FeedsScreen = () => {
  const { logs } = useContext(LogContext);

  console.log(logs);

  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

export default FeedsScreen;
