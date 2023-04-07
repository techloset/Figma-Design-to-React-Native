import {StyleSheet, View, Text,ScrollView, Dimensions} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../components/header/Header';
import MyTasks from '../../components/tasks/MyTasks';
import Demo from '../demoScreen/DemoScreen';
import Section from '../../components/onGoingSection/Section';
import Footer from '../../components/footer/Footer';
// import { Dimensions} from 'react-native';
const {height}=Dimensions.get('screen')

const HomePage = ({ navigation }:any) => {
  return (
    <ScrollView  style={{height:height}}>
      <View style={{height:height,flex:1,justifyContent:'space-between',backgroundColor:"#FDFDFD"}}>

      <Header/>
      <MyTasks/>
      <Section/>
      <Footer />
      </View>

    </ScrollView>
  );
};

export default HomePage;
