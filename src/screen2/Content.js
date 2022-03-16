import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Detail from './Detail';
import Chart from './Chart';
const Content = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon
          name="location"
          color="#FFF"
          size={28}
          style={{marginRight: 25}}
        />
        <Icon name="calendar" color="#FFF" size={28} />
      </View>
      {/* nhiet do */}
      <View style={styles.temperature}>
        <Text style={{fontSize: 22, color: '#FFF'}}>VƯỜN SÂM NGỌC LINH</Text>
        <Text style={{fontSize: 16, color: '#FFF'}}>
          T.5, 19 Tháng 12 09:14
        </Text>
        <View style={styles.heat}>
          {/* <Icon name="calendar" color="#FFF" size={28} style={{width: 48, height: 48}} /> */}
          <Text style={{fontSize: 68, color: '#FFF', marginVertical: 10}}>
            24°C
          </Text>
        </View>
        <Text style={{fontSize: 18, color: '#FFF', marginBottom: 2}}>
          Có mây, nắng nhẹ
        </Text>
        <Text style={{fontSize: 15, color: '#FFF'}}>
          (1200m so với mực nước biển)
        </Text>
      </View>
      {/* Detail */}
      <Detail />
      <Chart/>

    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    // width: 375,
    height: 812,
    backgroundColor: '#018622',
  },
  icon: {
    position: 'absolute',
    flexDirection: 'row',
    marginLeft: 290,
    marginTop: 16,
  },
  temperature: {
    alignItems: 'center',
    marginTop: 65,
    marginBottom: 20
  },
  heat: {
    flexDirection: 'row',
  },
});
