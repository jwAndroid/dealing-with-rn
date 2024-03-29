import React, { useState } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import ActionSheetModal from './ActionSheetModal';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    height: 54,
    width: 54,
    left: '50%',
    zIndex: 5,
    borderRadius: 27,
    transform: [
      {
        translateX: -27,
      },
    ],
    ...Platform.select({
      ios: {
        shadowColor: '#4d4d4d',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        overflow: 'hidden',
      },
    }),
  },
  circle: {
    backgroundColor: '#6200ee',
    borderRadius: 27,
    height: 54,
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TABBAR_HEIGHT = 49;

const imagePickerOptions = {
  mediaType: 'photo',
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === 'android',
};

const CameraButton = () => {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const bottom = Platform.select({
    android: TABBAR_HEIGHT / 2,
    ios: TABBAR_HEIGHT / 2 + insets.bottom - 4,
  });

  const onPickImage = res => {
    if (res.didCancle || !res) {
      return;
    }

    navigation.push('Upload', { res });
  };

  const onLaunchCamera = () => {
    launchCamera(imagePickerOptions, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOptions, onPickImage);
  };

  const onPress = () => {
    if (Platform.OS === 'android') {
      setModalVisible(true);
      return;
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: '사진 업로드',
        options: ['카메라로 촬영하기', '사진 선택하기', '취소'],
        cancelButtonIndex: 2,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          onLaunchCamera();
        } else if (buttonIndex === 1) {
          onLaunchImageLibrary();
        }
      },
    );
  };

  return (
    <View>
      <View style={[styles.wrapper, { bottom }]}>
        <Pressable
          android_ripple={{ color: '#fff' }}
          style={styles.circle}
          onPress={onPress}>
          <Icon name="camera-alt" color="white" size={24} />
        </Pressable>
      </View>

      <ActionSheetModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        actions={[
          {
            icon: 'camera-alt',
            text: '카메라로 촬영하기',
            onPress: onLaunchCamera,
          },
          {
            icon: 'photo',
            text: '사진 선택하기',
            onPress: onLaunchImageLibrary,
          },
        ]}
      />
    </View>
  );
};

export default CameraButton;
