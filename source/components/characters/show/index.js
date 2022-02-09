import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default props => {
  const { character } = props;

  return (
    <>
      <View style={styles.viewName}>
        <Text style={styles.title}>{character.name}</Text>
      </View>
      <View style={styles.viewImage}>
        <Image
          style={styles.image}
          source={{ uri: `${character?.thumbnail?.path}.${character?.thumbnail?.extension}` }}
        />
      </View>
      <View style={styles.viewList}>
        <Text style={styles.title}>Quadrinhos</Text>
        {
          character?.comics?.items?.map((comic, key) => {
            return <Text key={key} style={styles.textList} >{comic.name}</Text>;
          })
        }
      </View>
      <View style={styles.viewList}>
        <Text style={styles.title}>Séries</Text>
        {
          character?.series?.items?.map((serie, key) => {
            return <Text key={key} style={styles.textList} >{serie.name}</Text>;
          })
        }
      </View>
      <View style={styles.viewList}>
        <Text style={styles.title}>Histórias</Text>
        {
          character?.stories?.items?.map((story, key) => {
            return <Text key={key} style={styles.textList} >{story.name}</Text>;
          })
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  viewName: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },

  title: {
    color: '#FFF',
    fontSize: 22,
    fontFamily: 'Bebas Neue'
  },

  viewImage: {
    padding: 20
  },

  image: {
    height: 250,
    width: '100%',
    borderRadius: 10
  },

  viewList: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },

  textList: {
    color: '#FFF',
    fontSize: 14
  }

});
