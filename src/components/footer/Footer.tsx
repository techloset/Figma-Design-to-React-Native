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
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const Footer = () => {
    const navigation: any = useNavigation();
  return (
    <ImageBackground
    source={require('../../assets/homePage/bg.png')}
    style={{ position: 'relative',height:80}}>
      {/* bottom + icon */}
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={{position: 'absolute', bottom: -30}}
        onPress={() => navigation.navigate('Task')}>
        <LinearGradient
           colors={['rgba(244, 143, 240,.7)', 'rgb(237, 60, 230)']}
          style={{
            width: 67,
            height: 67,
            borderRadius: 10000,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: '700', color: '#FFFFFF'}}>
            +
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
      }}>
      <View style={{flexDirection: 'row', gap: 35, paddingLeft: 20 }}>
        {[
          require('../../assets/homePage/11.png'),
          require('../../assets/homePage/Option.png'),
        ].map((src, index) => (
          <Image
            source={src}
           
            key={index + 5}></Image> 
        ))}
      </View>
      <View style={{flexDirection: 'row', gap: 35, paddingRight: 20}}>
        {[
          require('../../assets/homePage/Option2.png'),
          require('../../assets/homePage/g.png'),
        ].map((src, index) => (
          <Image
            source={src}
   
            key={index + 10}></Image>
        ))}
      </View>
    </View>
  </ImageBackground>
  )
}

export default Footer