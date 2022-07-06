import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
});

const AddTodo = () => {
  const [value, setValue] = useState('');

  const onChangeText = text => {
    setValue(text);
  };

  const onSubmitEditing = () => {
    setValue('할일을 입력하세요.');
  };

  return (
    <View style={styles.block}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder="할일을 입력하세요."
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="done"
      />
    </View>
  );
};

export default AddTodo;
