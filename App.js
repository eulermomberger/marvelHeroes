/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import AppNavigation from './source/AppNavigation';
import AppStore from './source/AppStore';
import Spinner from './source/components/ui/Spinner';

const bebasNeue = require('./assets/fonts/BebasNeue-Regular.ttf');

export default function App() {
  const [fontsLoaded] = useFonts({
    'Bebas Neue': bebasNeue,
  });

  if (fontsLoaded) {
    return (
      <AppStore>
        <StatusBar style="dark" />
        <AppNavigation />
        <Spinner />
      </AppStore>
    );
  }

  return <></>;
}
