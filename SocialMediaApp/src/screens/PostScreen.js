import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import PostCard from '../components/PostCard';

const styles = StyleSheet.create({
  block: { flex: 1 },
  contentContainer: {
    paddingBottom: 40,
  },
});

function PostScreen() {
  const route = useRoute();
  const { post } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <PostCard
        id={post.id}
        user={post.user}
        photoURL={post.photoURL}
        description={post.description}
        createdAt={post.createdAt}
      />
    </ScrollView>
  );
}

export default PostScreen;
