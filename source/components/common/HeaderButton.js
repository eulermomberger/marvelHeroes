import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default props => {
  const { navigation } = props;

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={{ paddingLeft: 20 }}>
        <FontAwesome5
          name='chevron-left'
          color='#FFF'
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
};
