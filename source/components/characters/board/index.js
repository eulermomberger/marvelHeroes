import React from 'react';
import { FlatList, Image, View, Text, StyleSheet } from 'react-native';

export default props => {

  const renderCharacters = ({ item: character }) => {
    return (
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
    );
  }

  const renderHeader = () => {
    return (
      <>
        <View style={styles.viewLogo}>
          <Image style={styles.imgLogo} source={require('../../../../assets/images/marvel-logo.png')} />
        </View>
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

  viewLogo: {
    alignItems: 'center'
  },

  imgLogo: {
    height: 40,
    width: 100
  },

  viewText: {
    paddingHorizontal: 25,
    marginVertical: 25
  },

  textTitle: {
    color: '#FFF',
    fontSize: 22,
    fontFamily: 'Bebas Neue'
  },

  cardCharacter: {
    paddingHorizontal: 25,
    marginBottom: 25
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
