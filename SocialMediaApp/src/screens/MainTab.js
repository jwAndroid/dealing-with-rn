import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { useUserContext } from '../contexts/UserContext';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    zIndex: 0,
  },
});

const MainTab = () => {
  const { user } = useUserContext();

  return (
    <View style={styles.block}>
      {user.photoURL && (
        <Image
          source={{ uri: user.photoURL }}
          style={{ width: 128, height: 128, marginBottom: 16 }}
          resizeMode="cover"
        />
      )}

      <Text>Hello , {user.displayName}</Text>
    </View>
  );
};

export default MainTab;
