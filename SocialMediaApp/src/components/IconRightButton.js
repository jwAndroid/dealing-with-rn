import React from 'react';
import { StyleSheet, View, Pressable, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  block: {
    marginRight: -8,
    borderRadius: 24,
    overflow: 'hidden',
  },
  circle: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const IconRightButton = ({ name, color, onPress }) => {
  return (
    <View style={styles.block}>
      <Pressable
        style={({ pressed }) => [
          styles.circle,
          Platform.OS === 'ios' &&
            pressed && {
              opacity: 0.3,
            },
        ]}
        onPress={onPress}
        android_ripple={{ color: '#eee' }}>
        <Icon name={name} color={color} size={24} />
      </Pressable>
    </View>
  );
};

export default IconRightButton;
