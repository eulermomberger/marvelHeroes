import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CharactersShow from '../../components/characters/show';

import * as charactersActions from '../../actions/characters';
import * as uiActions from '../../actions/ui';
import api from '../../services/api';

export default props => {
  const character = useSelector(state => state.characters.show);
  const dispatch = useDispatch();

  useEffect(() => {
    _getCharacter();

    return () => {
      dispatch(charactersActions.resetCharactersShow());
    }
  }, []);

  const _getCharacter = async () => {
    try {
      dispatch(uiActions.setSpinner(true));

      const { route } = props;
      const { data } = await api.characters.fetchOne(route.params?.id);

      dispatch(charactersActions.setCharactersShow(data.data.results[0]));
      dispatch(uiActions.setSpinner(false));
    } catch {
      dispatch(uiActions.setSpinner(false));
    }
  }

  return (
    <ScrollView style={styles.board}>
      <CharactersShow
        character={character}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  board: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  }

});
