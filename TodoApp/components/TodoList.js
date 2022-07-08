import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

const TodoList = ({todos, onToggle}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => {
        return (
          <TodoItem
            id={item.id}
            done={item.done}
            text={item.text}
            onToggle={onToggle}
          />
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TodoList;
