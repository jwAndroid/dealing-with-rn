import React, { useRef, useState } from 'react';
import {
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

const SignInScreen = ({ navigation, route }) => {
  const { isSignUp } = route.params || {};

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const createChangeTextHandler = ({ name, text }) => {
    setForm({ ...form, [name]: text });
  };

  // const createChangeTextHandler = name => value => {
  //   setForm({ ...form, [name]: value });
  // };

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
  };

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ ios: 'padding' })}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}>SocialMediaApp</Text>

        <View style={styles.form}>
          <BorderedInput
            hasMarginBottom
            placeholder="이메일"
            value={form.email}
            onChangeText={text =>
              createChangeTextHandler({ name: 'email', text })
            }
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleateType="email"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <BorderedInput
            placeholder="비밀번호"
            secureTextEntry
            hasMarginBottom={isSignUp}
            value={form.password}
            onChangeText={text =>
              createChangeTextHandler({ name: 'password', text })
            }
            ref={passwordRef}
            returnKeyType={isSignUp ? 'next' : 'done'}
            onSubmitEditing={() => {
              if (isSignUp) {
                confirmPasswordRef.current.focus();
              } else {
                onSubmit();
              }
            }}
          />

          {isSignUp && (
            <BorderedInput
              placeholder="비밀번호 확인"
              value={form.confirmPassword}
              onChangeText={text =>
                createChangeTextHandler({ name: 'confirmPassword', text })
              }
              // onChangeText={createChangeTextHandler('confirmPassword')}
            />
          )}

          <View style={styles.buttons}>
            {isSignUp ? (
              <>
                <CustomButton
                  title="회원가입"
                  hasMarginBottom
                  onPress={onSubmit}
                />

                <CustomButton
                  title="로그인"
                  theme="secondary"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </>
            ) : (
              <>
                <CustomButton
                  title="로그인"
                  hasMarginBottom
                  onPress={onSubmit}
                />

                <CustomButton
                  title="회원가입"
                  theme="secondary"
                  onPress={() => {
                    navigation.push('SignIn', { isSignUp: true });
                  }}
                />
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
