import React from 'react';
import { Image } from 'react-native';

export default () => {
  return (
    <Image
      style={{ height: 40, width: 100, marginBottom: 20 }}
      source={require('../../../assets/images/marvel-logo.png')}
    />
  );
}
