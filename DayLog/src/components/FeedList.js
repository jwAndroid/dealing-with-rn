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

const FeedList = ({ logs }) => {
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default FeedList;
