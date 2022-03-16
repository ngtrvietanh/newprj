// /* eslint-disable prettier/prettier */
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   Image,
//   ScrollView,
//   TouchableOpacity
// } from 'react-native';
// import React from 'react';
// // import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger'
// import Icon from 'react-native-vector-icons/AntDesign';
// const DATA = [
//   {
//     id: 1,
//     img: 'https://i.ytimg.com/vi/RaoBKCKIDAI/maxresdefault.jpg',
//     name: 'Chạy về nơi phía anh',
//     singer: 'Khắc Việt',
//     date: '14/02/2022',
//   },
//   {
//     id: 2,
//     img: 'https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg',
//     name: 'Chạy về khóc với anh',
//     singer: 'ERIK',
//     date: '14/03/2022',
//   },
//   {
//     id: 3,
//     img: 'https://i.ytimg.com/vi/uyw3Z9JEbvA/maxresdefault.jpg',
//     name: 'Vươn tầm',
//     singer: 'Jombie FT. Danhka',
//     date: '14/03/2022',
//   },
// ];
// const Song = props => {
//   const {img, name, singer, date, navigation } = props;
//   return (
//     <TouchableOpacity style={styles.item} onPress={() => {
//       navigation.navigate('Song')
//     }}>
//       <Image source={{uri: img}} style={{height: 168, width: '100%'}} />
//       <Text style={styles.title1}>{name}</Text>
//       <Text style={styles.title2}>Singer: {singer}</Text>
//       <Text style={styles.title2}>{date}</Text>
//     </TouchableOpacity>
//   );
// };
// const SongLists = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Icon name="left" color="#FFF" size={28} />
//         <Text style={styles.textHeader}>Danh sach</Text>
//       </View>
//       <View style={styles.container}>
//         <FlatList data={DATA} renderItem={({ item }) => <Song {...item} navigation={navigation}/>} />
//       </View>
//     </View>
//   );
// };

// export default SongLists;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F9FE',
//   },
//   header: {
//     height: 88,
//     backgroundColor: 'green',
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     paddingHorizontal: 16,
//     paddingBottom: 12,
//   },
//   textHeader: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '600',
//     textTransform: 'uppercase',
//     marginLeft: 8,
//   },
//   item: {
//     height: 250,
//     width: 343,
//     alignSelf: 'center',
//     marginVertical: 5,
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,
//     elevation: 12,
//   },
//   title1: {
//     marginTop: 5,
//     fontWeight: 'bold',
//     fontSize: 18,
//     marginLeft: 10,
//   },
//   title2: {
//     marginVertical: 3,
//     marginLeft: 10,
//   },
// });

// // Flatlist

// // const A = async () => {
// //    const response = await setTimeout(function (){
// //   console.log('Finish');},1000);
// //   const response2 = await setTimeout(function (){
// //     console.log('Finish2');},1000);
// //   const response3 = await setTimeout(function (){
// //     console.log('Finish3');},1000);
// //   console.log(response, response2, response3)}
// // A();
