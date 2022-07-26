import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import CoustomButton from '../components/CustomButton';

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
});

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>SocialMediaApp</Text>

      <View style={styles.form}>
        <BorderedInput hasMarginBottom />
        <BorderedInput />

        <View style={styles.buttons}>
          <CustomButton title="로그인" hasMarginBottom />
          <CustomButton title="회원가입" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
