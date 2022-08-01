import React from 'react';
import { Image } from 'react-native';

function Avatar({ source, size }) {
  return (
    <Image
      source={source}
      resizeMode="cover"
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  );
}

Avatar.defaultProps = {
  size: 32,
};

export default Avatar;
