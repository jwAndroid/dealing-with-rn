import React, { useMemo } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';

import { useUserContext } from '../contexts/UserContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Avatar from './Avatar';
import ActionSheetModal from './ActionSheetModal';
import usePostActions from '../hooks/usePostActions';

const styles = StyleSheet.create({
  block: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  paddingBlock: {
    paddingHorizontal: 16,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayName: {
    lineHeight: 16,
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    aspectRatio: 1,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  date: {
    color: '#757575',
    fontSize: 12,
    lineHeight: 18,
  },
});

function PostCard({ user, photoURL, description, createdAt, id }) {
  const navigation = useNavigation();
  const routeNames = useNavigationState(state => state.routeNames);

  const { isSelecting, onPressMore, onClose, actions } = usePostActions(
    id,
    description,
  );

  const { user: me } = useUserContext();
  const isMyPost = me.id === user.id;

  const date = useMemo(
    () => (createdAt ? new Date(createdAt._seconds * 1000) : new Date()),
    [createdAt],
  );

  const onOpenProfile = () => {
    if (routeNames.find(routeName => routeName === 'MyProfile')) {
      navigation.navigate('MyProfile');
    } else {
      navigation.navigate('Profile', {
        userId: user.id,
        displayName: user.displayName,
      });
    }
  };

  return (
    <>
      <View style={styles.block}>
        <View style={[styles.head, styles.paddingBlock]}>
          <Pressable style={styles.profile} onPress={onOpenProfile}>
            <Avatar source={{ uri: user.photoURL }} />

            <Text style={styles.displayName}>{user.displayName}</Text>
          </Pressable>

          {isMyPost && (
            <Pressable hitSlop={8} onPress={onPressMore}>
              <Icon name="more-vert" size={20} />
            </Pressable>
          )}
        </View>

        <Image
          source={{ uri: photoURL }}
          style={styles.image}
          resizeMethod="resize"
          resizeMode="cover"
        />

        <View style={styles.paddingBlock}>
          <Text style={styles.description}>{description}</Text>

          <Text style={styles.date} date={date}>
            {date.toLocaleString()}
          </Text>
        </View>
      </View>

      <ActionSheetModal
        visible={isSelecting}
        actions={actions}
        onClose={onClose}
      />
    </>
  );
}

export default PostCard;
