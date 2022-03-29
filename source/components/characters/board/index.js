import React from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';

import * as uiActions from '../../../actions/ui';

export default function CharactersBoard(props) {
  const dispatch = useDispatch();

  const _goToSearchScreen = () => {
    dispatch(uiActions.setVisibleModalFilter(true));
  };

  const _goToShowScreen = (character) => {
    const { navigation } = props;
    navigation.navigate('CharacteresShowScreen', { id: character.id });
  };

  const renderCharacters = ({ item: character }) => (
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

  const renderHeader = () => (
    <>
      <View style={styles.viewHeader}>
        <Text style={styles.textTitle}>LISTA DE PERSONAGENS DA MARVEL</Text>
        <TouchableOpacity style={styles.buttonSearch} onPress={_goToSearchScreen}>
          <FontAwesome5
            name='search'
            color='#FFF'
            size={20}
          />
        </TouchableOpacity>
      </View>
    </>
  );

  const { characters, onEndReached } = props;

  return (
    <FlatList
      data={characters}
      keyExtractor={(e) => `${e.id}`}
      renderItem={renderCharacters}
      ListHeaderComponent={renderHeader}
      onEndReachedThreshold={5}
      onEndReached={onEndReached}
    />
  );
}

const styles = StyleSheet.create({

  viewHeader: {
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textTitle: {
    color: '#FFF',
    fontSize: 22,
    fontFamily: 'Bebas Neue',
    flex: 6,
  },

  buttonSearch: {
    flex: 1,
    alignItems: 'flex-end',
  },

  cardCharacter: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  viewDetails: {
    backgroundColor: '#AA0006',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },

  textName: {
    color: '#FFF',
    fontSize: 20,
  },

  textSeeMore: {
    color: '#FFF',
    fontStyle: 'italic',
  },

});
