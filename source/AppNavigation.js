import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharacteresBoardScreen from './screens/characters/BoardScreen';

export default () => {
  const Stack = createStackNavigator();

  const CharacteresNavigation = () => {
    return (
      <Stack.Navigator initialRouteName='CharacteresBoardScreen'>
        <Stack.Screen name='CharacteresBoardScreen' component={CharacteresBoardScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CharacteresNavigation'>
        <Stack.Screen name='CharacteresNavigation' component={CharacteresNavigation} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
