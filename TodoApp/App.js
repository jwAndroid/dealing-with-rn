/**
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <DateHead date={today} />
        <Empty />

        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
