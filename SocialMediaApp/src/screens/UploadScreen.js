import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Animated,
  Keyboard,
  useWindowDimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import storage from '@react-native-firebase/storage';
import { v4 } from 'uuid';

import IconRightButton from '../components/IconRightButton';
import { useUserContext } from '../contexts/UserContext';
import { createPost } from '../firebase/posts';
import events from '../eventBus/events';

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
  const { user } = useUserContext();

  const route = useRoute();
  const { res } = route.params || {};

  const { width } = useWindowDimensions();

  const animation = useRef(new Animated.Value(width)).current;

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  const onSubmit = useCallback(async () => {
    navigation.pop();

    const asset = res.assets[0];

    const extension = asset.fileName.split('.').pop();
    const reference = storage().ref(`/photo/${user.id}/${v4()}.${extension}`);

    if (Platform.OS === 'android') {
      await reference.putString(asset.base64, 'base64', {
        contentType: asset.type,
      });
    } else {
      await reference.putFile(asset.uri);
    }

    const photoURL = await reference.getDownloadURL();

    await createPost({ description, photoURL, user });

    events.emit('refresh');
  }, [navigation, res.assets, description, user]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconRightButton onPress={onSubmit} name="send" />,
    });
  }, [navigation, onSubmit]);

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
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'height' })}
      style={styles.block}
      keyboardVerticalOffset={Platform.select({
        ios: 180,
      })}>
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
    </KeyboardAvoidingView>
  );
};

export default UploadScreen;
