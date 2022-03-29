import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CharacteresBoardScreen from '../screens/characters/BoardScreen';
import CharacteresShowScreen from '../screens/characters/ShowScreen';
import HeaderButton from '../components/common/HeaderButton';

import defaultScreenOptions from './defaultScreenOptions';

export default function CharacteresNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='CharacteresBoardScreen'
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name='CharacteresBoardScreen'
        component={CharacteresBoardScreen}
      />
      <Stack.Screen
        name='CharacteresShowScreen'
        component={CharacteresShowScreen}
        options={({ navigation }) => ({
          headerLeft: () => <HeaderButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}
