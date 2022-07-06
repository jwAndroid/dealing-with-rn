import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
});

const AddTodo = () => {
  return (
    <View style={styles.block}>
      <TextInput placeholder="할일을 입력하세요." style={styles.input} />
    </View>
  );
};

export default AddTodo;
