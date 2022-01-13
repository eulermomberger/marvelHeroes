import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';

import CharactersBoard from '../../components/characters/board';

import * as charactersActions from '../../actions/characters';
import api from '../../services/api';

export default () => {

  const board = useSelector(state => state.characters.board);
  const dispatch = useDispatch();

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const { data } = await api.characters.fetch();
    dispatch(charactersActions.setCharactersBoard({
      characters: data.data.results,
      page: 0,
      total: data.data.total
    }));
  } 

  return (
    <SafeAreaView style={styles.board}>
      <CharactersBoard characters={board.characters} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  board: {
    padding: 25
  }
});
