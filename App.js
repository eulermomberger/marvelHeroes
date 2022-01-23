import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import AppNavigation from './source/AppNavigation';
import AppStore from './source/AppStore';
import Spinner from './source/components/ui/Spinner';

export default () => {

  const [fontsLoaded] = useFonts({
    'Bebas Neue': require('./assets/fonts/BebasNeue-Regular.ttf')
  });

  if (fontsLoaded) {
    return (
      <AppStore>
        <StatusBar style='dark'/>
        <AppNavigation/>
        <Spinner/>
      </AppStore>
    );
  } else {
    return <></>
  }
}
