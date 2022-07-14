import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FeedList from '../components/FeedList';

import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../context/LogContext';

const styles = StyleSheet.create({
  block: { flex: 1 },
});

const FeedsScreen = () => {
  const { logs } = useContext(LogContext);

  const [hidden, setHidden] = useState(false);

  const onScrollToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrollToBottom={onScrollToBottom} />

      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

export default FeedsScreen;
