import React from 'react';
import { FlatList, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {

  const _goToShowScreen = character => {
    const { navigation } = props;
    navigation.navigate('CharacteresShowScreen', { id: character.id })
  }

  const renderCharacters = ({ item: character }) => {
    return (
      <TouchableOpacity onPress={() => _goToShowScreen(character)}>
        <View style={styles.cardCharacter}>
          <Image
            style={styles.image}
            source={{ uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }}
          />
          <View style={styles.viewDetails}>
            <Text style={styles.textName}>
              {character.name}
            </Text>
            <Text style={styles.textSeeMore}>
              Ver mais...
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const renderHeader = () => {
    return (
      <>
        <View style={styles.viewText}>
          <Text style={styles.textTitle}>LISTA DE PERSONAGENS DA MARVEL</Text>
        </View>
      </>
    );
  }

  const { characters, onEndReached } = props;

  return (
    <FlatList
      data={characters}
      keyExtractor={e => `${e.id}`}
      renderItem={renderCharacters}
      ListHeaderComponent={renderHeader}
      onEndReachedThreshold={5}
      onEndReached={onEndReached}
    />
  );
}

const styles = StyleSheet.create({

  viewText: {
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 20
  },

  textTitle: {
    color: '#FFF',
    fontSize: 22,
    fontFamily: 'Bebas Neue'
  },

  cardCharacter: {
    paddingHorizontal: 20,
    marginBottom: 20
  },

  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  viewDetails: {
    backgroundColor: '#AA0006',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },

  textName: {
    color: '#FFF',
    fontSize: 20
  },

  textSeeMore: {
    color: '#FFF',
    fontStyle: 'italic'
  }

});
