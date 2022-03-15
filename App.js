// fetch('https://jsonplaceholder.typicode.com/albums')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (posts) {
//     console.log(posts);
//   });
// *******************************
// // Get API

// import React, {Component} from 'react';
// import {View, Text} from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor');
//   }
//   componentWillMount(){
//     console.log('Will Mount')
//   }
//   render() {
//     console.log('render');
//     return (
//       <View>
//         <Text style={{marginTop: 100, textAlign: 'center'}}>Hello World</Text>
//       </View>
//     );
//   }
//   componentDidMount() {
//     console.log('Did Mount')
//   }
// }

// *****************************
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={{fontSize: 100}}>{counter}</Text>
      <TouchableOpacity
        style={{backgroundColor: 'red'}}
        onPress={() => {
          setCounter(counter + 1);
        }}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'green'}}
        onPress={() => {
          setCounter(counter - 1);
        }}>
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

// const styles = StyleSheet.create({});
// ************************************
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  //State
  const [fullName, setFullName] = useState({
    name: 'name',
    familyName: 'family',
  });

  //useEffect
  useEffect(() => {
    console.log('useEffect has been called!');
    setFullName({name: 'Viet Anh', familyName: 'Kun'});
    
  }, []);

  return (
    <View>
      <Text>Name: {fullName.name}</Text>
      <Text>Family Name: {fullName.familyName}</Text>
    </View>
  );
};
export default App;
