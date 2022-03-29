import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharacteresNavigation from './navigators/CharacteresNavigation';

export default function AppNavigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CharacteresNavigation'>
        <Stack.Screen
          name='CharacteresNavigation'
          component={CharacteresNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
