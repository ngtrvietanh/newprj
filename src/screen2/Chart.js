import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const DATA = [
  {
    time: '03:00',
    icon: 'icloud',
    wet: '30%',
    tem: '18%',
    chart: 18,
  },
  {
    time: '06:00',
    icon: 'light-down',
    wet: '20%',
    tem: '20%',
    chart: 20,
  },
  {
    time: '09:00',
    icon: 'light-up',
    wet: '10%',
    tem: '24%',
    chart: 24,
  },
  {
    time: '12:00',
    icon: 'light-down',
    wet: '10%',
    tem: '27%',
    chart: 27,
  },
  {
    time: '15:00',
    icon: 'icloud',
    wet: '40%',
    tem: '24%',
    chart: 24,
  },
];
const ChartItem = props => {
  const {time, icon, wet, tem, chart} = props;
  return (
    <View style={styles.container}>
      <View style={{width: 80,height:150, justifyContent:'space-between'}}>
        <View>
          <Text style={{color: '#FFF', textAlign:'center', fontSize: 18, marginTop:5, marginBottom: 10}}>{time}</Text>
          <Icon name={icon} color="#FFF" size={28} style={{  textAlign: 'center', marginBottom: 8 }} />
          <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 15}}>{wet}</Text>
        </View>
        {/* ************* */}
        <View>
          <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 15}}>{tem}</Text>
          <View style={{alignItems:'center'}}><View
            style={{
              height: chart * 1,
              width: 6,
              borderRadius: 3,
              backgroundColor: '#FFF',
              alignItems: 'center'
            }}
          /></View>
        </View>
      </View>
    </View>
  );
};
const Chart = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({item}) => <ChartItem {...item} />}
        // keyExtractor={item => item.number}
      />
    </View>
  );
};
export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',

  },
});
