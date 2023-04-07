import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  SafeAreaView,
  PanResponder,
  Animated
} from 'react-native';
import React, {useEffect, useState} from 'react';
const {width}=Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';
const DATA = [
  {
    id: 1,
    day: 'Mon',
  },
  {
    id: 2,
    day: 'Tue',
  },
  {
    id: 3,
    day: 'Thu',
    bg: true,
  },
  {
    id: 4,
    day: 'Fri',
  },
  {
    id: 5,
    day: 'Sat',
  },
  {
    id: 6,
    day: 'Sun',
  },
];
const Item = (props: any) => {
  return (
    <>
      <View style={{paddingBottom: 1}}>
        <View
          style={{
            borderRadius: 30,
            width: 59,
            
            height: 96,
            backgroundColor: props.bg ? '#FF9D00' : '#FFFFFF',
            marginHorizontal: 13,
            
          
            gap: 13,

            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
         

            elevation: 2,
          }}>
       
          <Text
            style={{
              fontFamily:"Montserrat-Bold",
              fontSize: 36,
              color: props.bg ? 'white' : 'black',
            }}>
            {props.id}
          </Text>
          <Text style={{fontSize: 18, color: props.bg ? 'white' : 'black',fontFamily:"Montserrat-Bold",}}>
            {props.day}
          </Text>
        </View>
      </View>
    </>
  );
};
const Calendar = () => {
  
  const navigation:any=useNavigation()



  return (
    <View style={{marginTop: 2}}>
      <View style={[styles.container, {marginBottom: 35}]}>
        <View>
          <Text style={styles.text}>June, 03</Text>
          <Text style={{fontSize: 13, color: '#5D6065',fontFamily:"Montserrat-Regular",}}>16 task today</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{padding:3}}>

        <Image source={require('../../assets/taskScreen/icon.png')} />
        </TouchableOpacity>
      </View>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({item, index}) => <Item {...item} index={index} />}
          horizontal={true}
          keyExtractor={(item: any) => item.id}
          showsHorizontalScrollIndicator={false}
         
        />
      
<Pressable style={{alignItems:"flex-end",marginTop:17,marginBottom:6}}  >

          <View style={{backgroundColor:'rgba(150, 45, 255, 0.5)',height:1,width:'60%',position:"relative"}} >


          <View style={{backgroundColor:'rgba(150, 45, 255, 0.7)',width:12,height:12,borderRadius:100,position:'absolute',bottom:-6,left:-5}} >
          </View>


          </View>
</Pressable>
       

      </SafeAreaView>
    </View>
  );
};

export default Calendar;
const styles = StyleSheet.create({
  text: {
    fontFamily:"Montserrat-Bold",
    fontSize: 24,
    color: '#000000',
  },
  taskText: {
    color: '#5D6065',
    fontSize: 100,
    fontFamily:"Montserrat-Bold",
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
