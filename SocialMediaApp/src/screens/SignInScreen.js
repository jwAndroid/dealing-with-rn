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

import SignInForm from '../components/SignInForm';
import SignButtons from '../components/SignButtons';
import { signIn, signUp } from '../firebase/authentication';

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
});

const SignInScreen = ({ navigation, route }) => {
  const { isSignUp } = route.params || {};

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState();

  const createChangeTextHandler = ({ name, text }) => {
    setForm({ ...form, [name]: text });
  };

  // const createChangeTextHandler = name => value => {
  //   setForm({ ...form, [name]: value });
  // };

  const onSubmit = async () => {
    Keyboard.dismiss();

    const { email, password } = form;

    const info = { email, password };

    setLoading(true);

    try {
      const { user } = isSignUp ? await signUp(info) : await signIn(info);

      console.log(user);
    } catch (e) {
      Alert.alert('실패');

      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ ios: 'padding' })}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}>SocialMediaApp</Text>

        <View style={styles.form}>
          <SignInForm
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            form={form}
            createChangeTextHandler={createChangeTextHandler}
          />

          <SignButtons
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            loading={loading}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
