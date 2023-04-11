import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../components/header/Header';
import MyTasks from '../../components/tasks/MyTasks';
import Demo from '../demoScreen/DemoScreen';
import Section from '../../components/onGoingSection/Section';
import Footer from '../../components/footer/Footer';
// import { Dimensions} from 'react-native';
const { height,width } = Dimensions.get('window')
const Component=()=>{
  return(
    <>
    <Header />
    <MyTasks />
    <Section />
    </>

  )
}
const HomePage = ({ navigation }: any) => {
  return (
    // <View  style={{height:height}}>
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: "#FDFDFD", gap: 10 }}>
{

width>=355?<Component></Component>:<ScrollView >
      <Component></Component>
</ScrollView>
}
      <Footer />
    </View>

    // </View>
  );
};

export default HomePage;
