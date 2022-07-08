import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  image: {
    width: 20,
    height: 20,
  },
});

const TodoItem = ({id, text, done, onToggle}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image
              style={styles.image}
              source={require('../assets/images/circle.png')}
            />
          )}
        </View>
      </TouchableOpacity>

      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
    </View>
  );
};

export default TodoItem;
