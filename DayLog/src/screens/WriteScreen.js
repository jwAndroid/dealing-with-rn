import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';

const styles = StyleSheet.create({
  block: { flex: 1, backgroundColor: 'white' },
  avoidingView: { flex: 1 },
});

const WriteScreen = () => {
  const [title, setTtitle] = useState();
  const [body, setBody] = useState();

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader />

        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={text => setTtitle(text)}
          // 한줄로 onChangeTitle={setTtitle} 가 가능하다.
          onChangeBody={text => setBody(text)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteScreen;
