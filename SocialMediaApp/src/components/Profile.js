import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getUser } from '../firebase/users';
import Avatar from './Avatar';
import PostGridItem from './PostGridItem';
import usePosts from '../hooks/usePosts';

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  block: {
    flex: 1,
  },
  userInfo: {
    paddingTop: 80,
    paddingBottom: 64,
    alignItems: 'center',
  },
  username: {
    marginTop: 8,
    fontSize: 24,
    color: '#424242',
  },
  bottomSpinner: {
    height: 128,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
});

function Profile({ userId }) {
  const [user, setUser] = useState(null);
  const { posts, noMorePost, refreshing, onLoadMore, onRefresh } = usePosts();

  useEffect(() => {
    getUser(userId).then(setUser);
  }, [userId]);

  const renderItem = useCallback(({ item }) => {
    return <PostGridItem post={item} />;
  }, []);

  if (!user || !posts) {
    return (
      <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
    );
  }

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={3}
      style={styles.block}
      ListHeaderComponent={
        <View style={styles.userInfo}>
          <Avatar source={{ uri: user.photoURL }} size={128} />

          <Text style={styles.username}>{user.displayName}</Text>
        </View>
      }
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.25}
      ListFooterComponent={
        !noMorePost && (
          <ActivityIndicator
            style={styles.bottomSpinner}
            size={32}
            color="#6200ee"
          />
        )
      }
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    />
  );
}

export default Profile;
