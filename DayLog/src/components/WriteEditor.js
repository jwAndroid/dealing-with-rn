import React, { useRef } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  block: { flex: 1, padding: 16 },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

const WriteEditor = ({ title, body, onChangeTitle, onChangeBody }) => {
  const bodyRef = useRef();

  return (
    <View style={styles.block}>
      <TextInput
        value={title}
        onChangeText={onChangeTitle}
        style={styles.titleInput}
        returnKeyType="next"
        placeholder="제목을 입력하세요"
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />

      <TextInput
        value={body}
        ref={bodyRef}
        onChangeText={onChangeBody}
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        placeholder="당신의 오늘을 기록해보세요"
      />
    </View>
  );
};

export default WriteEditor;
