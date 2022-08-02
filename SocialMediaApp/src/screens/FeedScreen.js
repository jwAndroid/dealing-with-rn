import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import PostCard from '../components/PostCard';
import usePosts from '../hooks/usePosts';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  spinner: {
    height: 64,
  },
});

function FeedScreen() {
  const { posts, noMorePost, refreshing, onLoadMore, onRefresh } = usePosts();

  const renderItem = useCallback(({ item }) => {
    return (
      <PostCard
        createdAt={item.createdAt}
        description={item.description}
        id={item.id}
        user={item.user}
        photoURL={item.photoURL}
      />
    );
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListFooterComponent={
        !noMorePost && (
          <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
        )
      }
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    />
  );
}

export default FeedScreen;
