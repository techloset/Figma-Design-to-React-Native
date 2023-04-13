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
const {width,  height} = Dimensions.get('window');

const Demo = ({navigation}: any) => {
  const pagination = () => (
    <Pagination
      dotsLength={3}
      activeDotIndex={1}
      dotStyle={{
        width: 12,
        height: 12,
        borderRadius: 5000,
        // gap:5,
        marginHorizontal: -3,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
      }}
      inactiveDotStyle={{}}
      inactiveDotOpacity={0.4}
      inactiveDotScale={1}
    />
  );

  return (
    <View style={{flex: 1, justifyContent:'space-between'}}>
      <TouchableOpacity
        style={{alignItems: 'flex-end', marginTop: 35, marginRight: 20}}
        onPress={() => navigation.navigate('Home')}>
        <LinearGradient
          colors={['#BA76FE','rgba(207, 161, 254, 0.4)' ]}
          // #D9B4FE
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
<View>
<View style={{aspectRatio:350/313,}}>
<Image source={require('../../assets/homePage/demo.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}} />
</View>
      <View style={{alignItems: 'center',}}>



        <Text
      
          style={[styles.name,{
            fontFamily:"Montserrat-Bold",
            marginBottom: 7,
            // marginTop:14,
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

      <View style={{alignItems: 'center',marginTop:26}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <LinearGradient
            colors={['rgba(244, 143, 240,.7)', 'rgb(237, 60, 230)']}
            // start={{x: 0.5075, y: -1.0149}}
            // useAngle={false}
            style={{
              padding:23,
              borderRadius: 10000,
              justifyContent: 'center',
              alignItems: 'center',
              // marginTop:60
            }}>
            <Image source={require('../../assets/homePage/arrow.png')} />
          </LinearGradient>
        </TouchableOpacity>

        <ImageBackground
source={require("../../assets/homePage/Subtract.png")}
          style={{ width: '100%', }}>
            
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
          <View style={{alignItems:"center"}}>

          </View>
          {pagination()}
        </ImageBackground>
      </View>
</View>

    </View>
  );
};
export default Demo;
const styles=StyleSheet.create({
  name:{
    // fontFamily:'Montserrat-Bold',
    // color:'blue'
  }
})
