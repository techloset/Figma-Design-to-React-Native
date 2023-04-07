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
  } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation:any=useNavigation()
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{padding:3}}>

    <Image source={require('../../assets/homePage/new.png')}/>
      </TouchableOpacity>
    <Text style={styles.text}>Todays Tasks</Text>
    <Image 

source={require('../../assets/homePage/Profile.png')}/>

  </View>
  )
}

export default Header
const styles=StyleSheet.create({
    text:{
      fontFamily:"Montserrat-Bold",
      fontSize:18,
      color:'#000000'
    },
    container:{
      flexDirection:'row',
      paddingHorizontal:20,
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:'8%',
      marginBottom:28
    }
  })