import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WriteHeader from '../components/WriteHeader';

const styles = StyleSheet.create({
  block: { flex: 1 },
});

const WriteScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
    </SafeAreaView>
  );
};

export default WriteScreen;
