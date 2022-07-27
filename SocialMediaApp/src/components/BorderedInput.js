import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
  },
  margin: {
    marginBottom: 16,
  },
});

const BorderedInput = ({ hasMarginBottom, ...rest }, ref) => {
  return (
    <TextInput
      ref={ref}
      style={[styles.input, hasMarginBottom && styles.margin]}
      {...rest}
    />
  );
};

export default React.forwardRef(BorderedInput);
