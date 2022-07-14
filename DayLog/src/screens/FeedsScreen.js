import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import FeedList from '../components/FeedList';

import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../context/LogContext';

const styles = StyleSheet.create({
  block: { flex: 1 },
});

const FeedsScreen = () => {
  const { logs } = useContext(LogContext);

  console.log(JSON.stringify(logs, null, 2));

  return (
    <View style={styles.block}>
      <FeedList logs={logs} />

      <FloatingWriteButton />
    </View>
  );
};

export default FeedsScreen;
