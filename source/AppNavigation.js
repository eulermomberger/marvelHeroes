import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharacteresBoardScreen from './screens/characters/BoardScreen';
import CharacteresShowScreen from './screens/characters/ShowScreen';

import Header from './components/common/Header';
import HeaderButton from './components/common/HeaderButton';

export default () => {
  const Stack = createStackNavigator();

  const defaultScreenOptions = {
    headerTitle: props => <Header {...props} />,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#1B1B1B',
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      shadowColor: 'transparent',
      elevation: 0
    }
  };

  const CharacteresNavigation = () => {
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
            headerLeft: () => (
              <HeaderButton navigation={navigation} />
            )
          })}
        />
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
