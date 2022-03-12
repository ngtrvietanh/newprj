import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InfoItem = props => {
  const {name, email, number} = props;
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>{number}</Text>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
  },
});
