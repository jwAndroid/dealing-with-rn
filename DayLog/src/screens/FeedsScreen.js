import React, { useContext } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import LogContext from '../context/LogContext';

const styles = StyleSheet.create({
  block: {},
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

const FeedsScreen = () => {
  const { text, setText } = useContext(LogContext);

  console.log(text);

  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="입력하세요"
        style={styles.input}
      />
    </View>
  );
};

export default FeedsScreen;
