import React from 'react';
import { StyleSheet, View, Pressable, Text, Platform } from 'react-native';

const styles = StyleSheet.create({
  overflow: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  wrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200ee',
  },
  primaryWrapper: {
    backgroundColor: '#6200ee',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#fff',
  },
  margin: {
    marginBottom: 8,
  },
});

const CustomButton = ({ onPress, title, hasMarginBottom, theme }) => {
  const isPrimary = theme === 'primary';

  return (
    <View style={[styles.overflow, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.wrapper,
          Platform.OS === 'ios' && pressed && { opacity: 0.5 },
        ]}
        android_ripple={{ color: '#fff' }}>
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText,
          ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

CustomButton.defaultProps = {
  theme: 'primary',
};

export default CustomButton;
