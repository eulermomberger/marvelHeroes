import React, { useState } from 'react';
import {
  Keyboard,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import * as charactersActions from '../../../actions/characters';
import * as uiActions from '../../../actions/ui';
import api from '../../../services/api';

export default function ModalFilter() {
  const visible = useSelector((state) => state.ui.visibleModalFilter);
  const nameStartsWith = useSelector((state) => state.characters.board?.params?.nameStartsWith);

  const [name, setName] = useState(nameStartsWith);

  const dispatch = useDispatch();

  const _closeModal = () => {
    dispatch(uiActions.setVisibleModalFilter(false));
  };

  const _getCharacters = async () => {
    try {
      dispatch(uiActions.setSpinner(true));

      const params = { offset: 0, limit: 20 };

      if (name && name !== '') {
        params.nameStartsWith = name;
      }

      const { data } = await api.characters.fetch(params);

      dispatch(charactersActions.setCharactersBoard({
        characters: data.data.results,
        params: { offset: 0, nameStartsWith: name },
        total: data.data.total,
      }));

      _closeModal();
      dispatch(uiActions.setSpinner(false));
    } catch {
      dispatch(uiActions.setSpinner(false));
    }
  };

  return (
    <Modal visible={visible} transparent animationType='slide'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.safeAreaModal}>
          <View style={styles.containerModal}>
            <View style={styles.headerModal}>
              <FontAwesome
                onPress={_closeModal}
                name='close'
                color='#FFF'
                size={30}
              />
            </View>
            <View style={styles.bodyModal}>
              <View style={styles.viewInput}>
                <TextInput
                  autoFocus
                  placeholder='Nome'
                  placeholderTextColor='#000'
                  onChangeText={(value) => setName(value)}
                  value={name}
                  style={styles.inputName}
                />
              </View>
            </View>
            <View style={styles.footerModal}>
              <TouchableOpacity style={styles.buttonFilter} onPress={_getCharacters}>
                <Text style={styles.textFilter}>Filtrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({

  safeAreaModal: {
    flex: 1,
    alignItems: 'center',
  },

  containerModal: {
    backgroundColor: '#1b1b1bf2',
    borderColor: '#FFF',
    borderWidth: 2,
    marginTop: 50,
    height: 200,
    width: '95%',
    borderRadius: 20,
  },

  headerModal: {
    flexDirection: 'row',
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 2,
  },

  bodyModal: {
    flex: 3,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  viewInput: {
    width: '100%',
    height: 30,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
  },

  inputName: {
    paddingHorizontal: 10,
  },

  footerModal: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  buttonFilter: {
    backgroundColor: '#4169E1',
    borderRadius: 50,
    width: '100%',
    height: 30,
    justifyContent: 'center',
  },

  textFilter: {
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

});
