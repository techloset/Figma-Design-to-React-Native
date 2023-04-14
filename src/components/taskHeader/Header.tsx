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
const { width, height } = Dimensions.get('window')
const Header = () => {
  const navigation: any = useNavigation()
  return (
    <View style={[styles.container, { marginTop: height * 0.08 ,backgroundColor: '#FFFFFF' }]} >
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ padding: 3 }}>

        <Image source={require('../../assets/homePage/new.png')} />
      </TouchableOpacity>
      <Text style={[styles.text]}>Todays Tasks</Text>
      
      <TouchableOpacity  >
   

          <Image

            source={require('../../assets/homePage/Profile.png')}  />
       

      </TouchableOpacity>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    color: '#000000'
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '8%',
    marginBottom: 28
  }
})