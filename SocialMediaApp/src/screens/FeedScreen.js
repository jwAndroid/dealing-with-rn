import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import PostCard from '../components/PostCard';
import { getPosts } from '../firebase/posts';

function FeedScreen() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

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
    />
  );
}

export default FeedScreen;
