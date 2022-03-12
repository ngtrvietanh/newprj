import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchItem = () => {
  return (
    <View>
      <Icon name="search1" size={30} color="#900" />
      <TextInput style={styles.input} placeholder="Nhap vao day" />
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
