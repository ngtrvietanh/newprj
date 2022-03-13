// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Song from './src/screens/Song';
import SongLists from './src/screens/SongLists';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={SongLists} />
        <Stack.Screen name="Song" component={Song} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
