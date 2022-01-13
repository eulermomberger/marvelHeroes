import React from 'react';
import { FlatList, Image, View, Text } from 'react-native';

export default props => {

  const renderCharacters = ({ item: character }) => {
    return (
      <View>
        <Text>{character.name}</Text>
      </View>
    );
  }

  const { characters } = props;

  return (
    <FlatList
      data={characters}
      keyExtractor={e => `${e.id}`}
      renderItem={renderCharacters}
    />
  );
}
