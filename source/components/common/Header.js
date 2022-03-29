import React from 'react';
import { Image } from 'react-native';

const logo = require('../../../assets/images/marvel-logo.png');

export default function Header() {
  return (
    <Image
      style={{ height: 40, width: 100, marginBottom: 20 }}
      source={logo}
    />
  );
}
