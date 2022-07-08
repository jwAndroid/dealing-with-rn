/**
 * @format
 */

import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: '개발환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두 리스트 만들어보기', done: true},
  ]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

    const todo = {
      id: nextId,
      text,
      done: false,
    };

    // setTodos([...todo , ...todos])
    setTodos(todos.concat(todo));
  };

  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead date={today} />

          {todos.length === 0 ? <Empty /> : <TodoList todos={todos} />}

          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
