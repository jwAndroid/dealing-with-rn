import React, { useContext, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import SearchContext from '../context/SearchContext';
import LogContext from '../context/LogContext';
import FeedList from '../components/FeedList';

const styles = StyleSheet.create({
  block: { flex: 1 },
});

const SearchScreen = ({ navigation }) => {
  const { keyword } = useContext(SearchContext);
  const { logs } = useContext(LogContext);

  const filiterdList = useMemo(() => {
    return keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  }, [keyword, logs]);

  return (
    <View style={styles.block}>
      <FeedList logs={filiterdList} />
    </View>
  );
};

export default SearchScreen;
