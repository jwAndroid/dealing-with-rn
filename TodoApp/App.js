/**
 * @format
 */

import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  avoid: {
    flex: 1,
  },
});

const App = () => {
  const today = new Date();

  // KeyboardAvoidingView 에 적용시킬 컴포넌트를 넣어줘야한다.
  // 인풋만 넣으면 안된다.

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead date={today} />

          <Empty />

          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
