import { useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Animated,
  Keyboard,
  useWindowDimensions,
  Platform,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  image: { width: '100%' },
  input: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    fontSize: 16,
  },
});
const UploadScreen = () => {
  const route = useRoute();
  const { res } = route.params || {};

  const { width } = useWindowDimensions();

  const animation = useRef(new Animated.Value(width)).current;

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const didShow = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardOpen(true),
    );

    const didHide = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardOpen(false),
    );

    return () => {
      didShow.remove();

      didHide.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isKeyboardOpen ? 0 : width,
      useNativeDriver: false,
      duration: 150,
      delay: 100,
    }).start();
  }, [animation, isKeyboardOpen, width]);

  return (
    <View style={styles.block}>
      <Animated.Image
        source={{ uri: res?.assets[0]?.uri }}
        style={[styles.image, { height: animation }]}
        resizeMode="cover"
      />

      <TextInput
        value={description}
        onChangeText={text => setDescription(text)}
        style={styles.input}
        multiline
        placeholder="이 사진에 대한 설명을 입력하세요..."
        textAlignVertical="top"
      />
    </View>
  );
};

export default UploadScreen;