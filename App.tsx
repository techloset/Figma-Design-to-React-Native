import React from 'react';
import {View, Text, StyleSheet, ScrollView,Button} from 'react-native';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import DemoScreen from './src/screens/demoScreen/DemoScreen';
import TaskScreen from './src/screens/taskScreen/TaskScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const MyComponent = () => {
  return (
        <NavigationContainer>

           <Stack.Navigator initialRouteName='Demo' screenOptions={{headerShown:false}}>

     <Stack.Screen name="Home" component={HomeScreen} />
     <Stack.Screen name="Demo" component={DemoScreen} />       
    <Stack.Screen name="Task" component={TaskScreen} />
    {/* <TaskScreen></TaskScreen> */}
    {/* <DemoScreen></DemoScreen> */}

          </Stack.Navigator>
        </NavigationContainer>
 
  );
};

// const styles = StyleSheet.create({
//   container: {                                      
//     // flex: 1,

//     // backgroundColor: 'red',
//   },
// });

export default MyComponent;
