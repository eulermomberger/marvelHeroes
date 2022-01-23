import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CharactersBoard from '../../components/characters/board';

import * as charactersActions from '../../actions/characters';
import * as uiActions from '../../actions/ui';
import api from '../../services/api';

export default () => {

  const board = useSelector(state => state.characters.board);
  const dispatch = useDispatch();

  useEffect(() => {
    _getCharacters(0);
  }, []);

  const _getCharacters = async offset => {
    try {
      dispatch(uiActions.setSpinner(true));

      const { data } = await api.characters.fetch({ offset, limit: 20 });
      dispatch(charactersActions.setCharactersBoard({
        characters: data.data.results,
        offset,
        total: data.data.total
      }));

      dispatch(uiActions.setSpinner(false));
    } catch {
      dispatch(uiActions.setSpinner(false));
    }
  }

  const _onEndReached = () => {
    if (board.total <= board.characters.length) {
      return;
    }

    _getCharacters(20 + board.offset);
  }

  return (
    <SafeAreaView style={styles.board}>
      <CharactersBoard
        characters={board.characters}
        onEndReached={_onEndReached}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  board: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  }

});
