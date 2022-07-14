import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import LogContext from '../context/LogContext';

const styles = StyleSheet.create({
  block: { flex: 1, backgroundColor: 'white' },
  avoidingView: { flex: 1 },
});

const WriteScreen = ({ route }) => {
  const log = route.params?.log;

  const [title, setTtitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');

  const navigation = useNavigation();

  const { onCreate, onModify } = useContext(LogContext);

  const onSave = () => {
    // onModify({} : Object) {}
    if (log) {
      onModify({
        id: log.id,
        date: log.date,
        title,
        body,
      });
      // log 가 값이 존재할때 === 수정
      // log 가 존재하지 않을때 === 새로 만드는 객체
    } else {
      onCreate({
        title,
        body,
        date: new Date().toISOString(),
      });
    }

    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />

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
