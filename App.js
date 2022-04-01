import React, {useEffect} from 'react';
import {View, FlatList, Button} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/AntDesign'
// import login from "./src/screen/login";
// import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import SearchItem from './src/screens/SearchItem';
import InfoItem from './src/screens/InfoItem';
import OneSignal from 'react-native-onesignal';
import {Mixpanel} from 'mixpanel-react-native';

const mixpanel = new Mixpanel('55ac6350b23feb8f9cc7703ee1566c03');
mixpanel.init();

const DATA = [
  {
    name: 'NGUYỄN HUY TRUNG',
    email: 'huytrung2290@gmail.com',
    number: 1234567,
  },
  {
    name: 'PHÙNG HOÀI NAM',
    email: 'hoainam123@gmail.com',
    number: 987654321,
  },
  {
    name: 'ĐỖ THỊ THANH HÀ',
    email: 'hathanh1973@gmail.com',
    number: 34634523,
  },
];

const App = () => {
  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('ac69d44c-d359-4113-8751-e37a6f072761');
    //END OneSignal Init Code

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <SearchItem />
      <Button
        title="Select Premium Plannnnnnn"
        onPress={() => mixpanel.track('Plan Selected', {Plan: 'Premium'})}
      />
      <FlatList
        data={DATA}
        renderItem={({item}) => <InfoItem {...item} />}
        keyExtractor={item => item.number}
      />
    </View>
  );
};
export default App;

// Flatlist

// const A = async () => {
//    const response = await setTimeout(function (){
//   console.log('Finish');},1000);
//   const response2 = await setTimeout(function (){
//     console.log('Finish2');},1000);
//   const response3 = await setTimeout(function (){
//     console.log('Finish3');},1000);
//   console.log(response, response2, response3)}
// A();
