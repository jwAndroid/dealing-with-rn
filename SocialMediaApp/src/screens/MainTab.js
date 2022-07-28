import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      <Text>Hello , {user.displayName}</Text>
    </View>
  );
};

export default MainTab;
