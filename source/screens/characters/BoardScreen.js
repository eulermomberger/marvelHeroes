import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CharactersBoard from '../../components/characters/board';
import ModalFilter from '../../components/characters/board/ModalFilter';

import * as charactersActions from '../../actions/characters';
import * as uiActions from '../../actions/ui';
import api from '../../services/api';

export default props => {

  const board = useSelector(state => state.characters.board);
  const dispatch = useDispatch();

  useEffect(() => {
    _getCharacters(0);
  }, []);

  const _getCharacters = async offset => {
    try {
      dispatch(uiActions.setSpinner(true));

      const { data } = await api.characters.fetch({ ...board.params, offset, limit: 20 });
      dispatch(charactersActions.setCharactersBoard({
        characters: data.data.results,
        params: { ...board.params, offset },
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

    _getCharacters(20 + board.params?.offset);
  }

  const { navigation } = props;
  return (
    <>
      <SafeAreaView style={styles.board}>
        <CharactersBoard
          characters={board.characters}
          navigation={navigation}
          onEndReached={_onEndReached}
        />
      </SafeAreaView>

      <ModalFilter/>
    </>
  );
}

const styles = StyleSheet.create({

  board: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  }

});
