import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../components/CustomButton';

const styles = StyleSheet.create({
  spinnerWrapper: {
    marginTop: 64,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginTop: 64,
  },
});

const SignButtons = ({ isSignUp, onSubmit, loading }) => {
  const navigation = useNavigation();

  const primaryTitle = isSignUp ? '회원가입' : '로그인';
  const secondaryTitle = isSignUp ? '로그인' : '회원가입';

  const onSecondaryButtonPress = () => {
    if (isSignUp) {
      navigation.goBack();
    } else {
      navigation.push('SignIn', { isSignUp: true });
    }
  };

  if (loading) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size={32} color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={styles.buttons}>
      <CustomButton title={primaryTitle} hasMarginBottom onPress={onSubmit} />

      <CustomButton
        title={secondaryTitle}
        theme="secondary"
        onPress={onSecondaryButtonPress}
      />
    </View>
  );
};

export default SignButtons;
