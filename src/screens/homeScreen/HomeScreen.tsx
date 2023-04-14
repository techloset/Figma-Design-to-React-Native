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
    <View style={{justifyContent:'space-around',flex:1,gap:10}}>
    <Header />
    <MyTasks />
    <Section />
    </View>

  )
}
const HomePage = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FDFDFD", gap: 10 }}>
{

height>=800?<Component></Component>:<ScrollView>
<Component></Component>
</ScrollView>
}
      <Footer />
    </View>

    // </View>
  );
};

export default HomePage;
