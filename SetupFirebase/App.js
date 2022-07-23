/**
 * @format
 */

import React, { memo, useCallback } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';

import { db } from './src/config';

const App = () => {
  const add = useCallback(async () => {
    const ref = 'user/items/1';

    const obj = {
      one: 'one',
      two: 'two',
    };

    await addDoc(collection(db, ref), obj);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableHighlight onPress={add}>
        <Text style={{ fontSize: 50, color: 'black' }}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

export default memo(App);
