/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
const Song = props => {
  return (
    <View style={styles.item}>
      <Text style={styles.title2}>Hom nay la thu 2</Text>
    </View>
  );
};

export default Song;

const styles = StyleSheet.create({
  item: {
    height: 250,
    width: 343,
    alignSelf: 'center',
    marginVertical: 5,
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  title1: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  title2: {
    marginVertical: 3,
    marginLeft: 10,
    textAlign: 'center'
  },
});
