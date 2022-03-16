import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Icon name="left" color="black" size={28} />
        <Text style={styles.textHeader}>Điều kiện môi trường</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 65,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  textHeader: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginLeft: 20
  },
});
