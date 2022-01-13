import React from 'react';
import { StatusBar } from 'expo-status-bar';

import AppNavigation from './source/AppNavigation';
import AppStore from './source/AppStore';

export default () => {
  return (
    <AppStore>
      <StatusBar style='dark'/>
      <AppNavigation/>
    </AppStore>
  );
}
