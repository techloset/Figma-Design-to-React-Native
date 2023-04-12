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
    id:0,
    day: 'Mon',
  },
  {
    id: 1,
    day: 'Tue',
  },
  {
    id: 2,
    day: 'Thu',
    bg: true,
  },
  {
    id: 3,
    day: 'Fri',
  },
  {
    id: 4,
    day: 'Sat',
  },
  {
    id: 5,
    day: 'Sun',
  },
];
const Item = (props: any) => {
  console.log(props);
  
const {state,setState,item}=props

  return (
    <>
  
      <Pressable style={{paddingBottom: 17,backgroundColor:'#FFFFFF'}} onPress={()=>setState(item.id)  }>
        <View
          style={{
            borderRadius: 30,
            width: 59,
            
            height: 96,
            backgroundColor: state==item.id? '#FF9D00' : '#FFFFFF',
            marginHorizontal: 13,
            
          
            gap: 13,

            alignItems: 'center',
            elevation: 15,

            shadowColor: '#52006A',

          }}>
          <Text
            style={{
              fontFamily:"Montserrat-Bold",
              fontSize: 36,
              color:state==item.id ?'white':'black',
              
            }}>
            {item.id}
          </Text>
          <Text style={{fontSize: 18, color:state==item.id ? 'white' : 'black',fontFamily:"Montserrat-Bold",}}>
            {item.day}
          </Text>
        </View>
      </Pressable>
    </>
  );
};
const Calendar = () => {
  const [state,setState]=useState(3)
  console.log(state);
  
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
          renderItem={({item, index}) => <Item {...{item,state,setState}} index={index} />}
          horizontal={true}
          keyExtractor={(item: any) => item.id}
          showsHorizontalScrollIndicator={false}
         
        />
      
<Pressable style={{alignItems:"flex-end",marginBottom:6}}  >
  

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
