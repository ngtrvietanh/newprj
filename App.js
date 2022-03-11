import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign'
import login from "./src/screen/login";

const App = () => {
  
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0);
  const [isDoneValue1, setIsDoneValue1] = useState(false);

  useEffect(() => {
    getDefaultValue()
  },[])


  const getDefaultValue = async () => {
    try {
      const param1 = await AsyncStorage.getItem('VALUE1')
      const param2 = await AsyncStorage.getItem('VALUE2')
      const sum = await AsyncStorage.getItem('SUM')
      setValue1(param1 ?? 0)
      setValue2(param2 ?? 0)
      setCount(sum ?? 0)
    } catch(e) {
      // error reading value
    }
  }

  const onPress = () => {
    const sum = value1 + value2;
    setCount(sum);
    saveValue(); 
  }
  const onPress1 = () => {
    if(isDoneValue1) setValue2(1);
    else setValue1(1);
  }
  const onPress2 = () => {
    if(isDoneValue1) setValue2(2);
    else setValue1(2);
  }
  const onPress3 = () => {
    if(isDoneValue1) setValue2(3);
    else setValue1(3);
  }
  const onPress4 = () => {
    setIsDoneValue1(true)
    setValue1(parseInt(count));
    setValue2(0);
  };

  const saveValue = async () => {
    try {
      await AsyncStorage.setItem('VALUE1', value1.toString());
      await AsyncStorage.setItem('VALUE2', value2.toString());
      await AsyncStorage.setItem('SUM', `${value1 + value2}`);
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="left" color="red" size={50} />
      <View style={styles.countContainer}>
        <Text>{`${value1} + ${value2} = ${count}`}</Text>
      </View>
      <View style={styles.number}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress1}
      >
        <Text>1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={onPress2}
      >
        <Text>2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress3}
        style={styles.button}
      >
        <Text>3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress4}
      >
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>=</Text>
      </TouchableOpacity>
      </View>
      {/* <Icon
    name='meh'
    color='red' /> */}
    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    margin: 5,
    width: 80,
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  number: {
    alignItems: "center",
    padding: 10
  }
});

export default App;