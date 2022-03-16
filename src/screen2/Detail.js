import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const Detail = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text1}>Độ ẩm</Text>
          <Icon name="calendar" color="#FFF" size={28} />
        </View>
        <View
          style={{
            backgroundColor: 'red',
            alignSelf: 'center',
            width: 1,
          }}
        />
        <View style={styles.container1}>
          <Text style={styles.text1}>Độ che phủ rừng</Text>
          <Icon name="calendar" color="#FFF" size={28} />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text1}>Biên độ nhiệt trong ngày</Text>
          <Text style={styles.text1}>(01:00) 24°C - 24°C (13:00)</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  container1: {
    zIndex: 1,
    height: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '50%',
    alignItems: 'center',
    paddingTop: 10,
  },

  container2: {
    height: 90,
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  text1: {
    color: '#FFF',
    marginBottom: 5,
    fontSize: 16,
    zIndex: 10,
  },
});
