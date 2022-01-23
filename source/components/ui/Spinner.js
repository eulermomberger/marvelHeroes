import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

export default () => {
  const spinner = useSelector(state => state.ui.spinner);

  return (
    <Modal
      transparent={true}
      visible={spinner}
    >
      <View style={styles.wrapper}>
        <ActivityIndicator
          animating={spinner}
          color='#FFF'
          size='large'
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }

});
