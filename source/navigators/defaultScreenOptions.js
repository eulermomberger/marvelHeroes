import React from 'react';

import Header from '../components/common/Header';

export default function defaultScreenOptions() {
  return {
    headerTitle: () => <Header />,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#1B1B1B',
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      shadowColor: 'transparent',
      elevation: 0,
    },
  };
}
