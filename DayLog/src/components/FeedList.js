import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FeedListItem from './FeedListItem';

const styles = StyleSheet.create({
  block: { flex: 1 },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

const FeedList = ({ logs, onScrollToBottom }) => {
  const onScroll = e => {
    const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;

    const distanceFromEnd =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceFromEnd < 72) {
      onScrollToBottom(true);
    } else {
      onScrollToBottom(false);
    }
  };

  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      onScroll={onScroll}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default FeedList;
