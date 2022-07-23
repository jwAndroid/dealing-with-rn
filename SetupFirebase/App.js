/**
 * @format
 */

import React, { memo, useCallback, useEffect } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';

import { db } from './src/config';
import { async } from '@firebase/util';

const App = () => {
  const onAdd = useCallback(async () => {
    const ref = 'cities/SF/1';

    const obj = {
      one: 'one',
      two: 'two',
    };

    await addDoc(collection(db, ref), obj);
  }, []);

  const onRead = useCallback(async () => {
    const ref = collection(db, 'cities/SF/1');

    const snapshot = await getDocs(ref);

    snapshot.forEach(item => console.log(item.data()));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableHighlight onPress={onAdd}>
        <Text style={{ fontSize: 50, color: 'black' }}>+</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={onRead}>
        <Text style={{ fontSize: 50, color: 'black' }}>get doc</Text>
      </TouchableHighlight>
    </View>
  );
};

export default memo(App);
