import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  Pressable,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useState, PropsWithChildren} from 'react';

import Carousel, {Pagination} from 'react-native-snap-carousel';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const Demo = ({navigation}: any) => {
  const pagination = () => (
    <Pagination
      dotsLength={3}
      activeDotIndex={1}
      dotStyle={{
        width: 12,
        height: 12,
        borderRadius: 5000,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
      }}
      inactiveDotStyle={{}}
      inactiveDotOpacity={0.4}
      inactiveDotScale={1}
    />
  );

  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity
        style={{alignItems: 'flex-end', marginTop: 38, marginRight: 20}}
        onPress={() => navigation.navigate('Home')}>
        <LinearGradient
          colors={['#8205FF','rgba(207, 161, 254, 0.21)' ]}
          useAngle={true}
          angle={0}
          locations={[-0.7,1.5]}
          style={{
            borderRadius: 10,
            width: 80,
            height: 28,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{lineHeight: 20, color: '#FFFFFF',fontFamily:"Montserrat-Regular"}}>Skip </Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{alignItems: 'center'}}>
        <Image source={require('../../assets/homePage/demo.png')} style={{width:'94%',marginTop:64}} />
        <Text
      
          style={[styles.name,{
            fontFamily:"Montserrat-Bold",
            marginBottom: 7,
            marginTop:14,
            fontSize: 22,
            color: '#000000',
      lineHeight:27
        
          }]}>
          Manage your Tasks
        </Text>
        <Text style={{fontSize: 14, color: '#5D6065',lineHeight:17, textAlign: 'center',fontFamily:"Montserrat-Regular",}}>
          {`Organise all your to-do’s andlist your\n projects. Color tag them to set priority\n and categories`}
        </Text>
      </View>
      <View style={{alignItems: 'center',marginTop:22}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.01)', '#E906E0']}
            start={{x: 0.5075, y: -1.0149}}
            useAngle={false}
            style={{
              // width: 67,
              padding:23,
              // height: 67,
              borderRadius: 10000,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../../assets/homePage/arrow.png')} />
          </LinearGradient>
        </TouchableOpacity>
        <ImageBackground
          source={require('../../assets/homePage/Subtract.png')}
          style={{height: 107, width: '100%', position: 'relative'}}>
          <Text
            style={{
              fontSize: 14,
              color: '#FFFFFF',
              marginLeft: 20,
              marginTop: 19,
              fontFamily:"Montserrat-Regular"
            }}>
            Back
          </Text>
          {pagination()}
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
export default Demo;
const styles=StyleSheet.create({
  name:{
    // fontFamily:'Montserrat-Bold',
    // color:'blue'
  }
})
