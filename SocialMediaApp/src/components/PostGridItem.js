import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  Image,
  Pressable,
} from 'react-native';

const styles = StyleSheet.create({
  block: { margin: 0.5 },
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    height: '100%',
  },
});

function PostGridItem({ post }) {
  const navigation = useNavigation();

  const dimension = useWindowDimensions();
  const size = dimension.width / 3;

  const onPress = () => {
    navigation.navigate('Post', { post });
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1,
          width: size,
          height: size,
        },
        styles.block,
      ]}>
      <Image
        style={styles.image}
        source={{ uri: post.photoURL }}
        resizeMethod="resize"
        resizeMode="cover"
      />
    </Pressable>
  );
}

export default PostGridItem;
