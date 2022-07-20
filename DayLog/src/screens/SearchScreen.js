import React, { useContext, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import SearchContext from '../context/SearchContext';
import LogContext from '../context/LogContext';
import FeedList from '../components/FeedList';
import EmptySearchResult from '../components/EmptySearchResult';

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

  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  if (filiterdList.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
      <FeedList logs={filiterdList} />
    </View>
  );
};

export default SearchScreen;
