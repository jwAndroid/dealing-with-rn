import React, { useRef } from 'react';

import BorderedInput from './BorderedInput';

const SignInForm = ({ isSignUp, onSubmit, form, createChangeTextHandler }) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <>
      <BorderedInput
        hasMarginBottom
        placeholder="이메일"
        value={form.email}
        onChangeText={text => createChangeTextHandler({ name: 'email', text })}
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
    </>
  );
};

export default SignInForm;
