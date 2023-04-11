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

const Section = () => {
  return (
    <View
        style={[styles.space,{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom:4,
  
       
        }]}>
        <View >
          <Text
            style={{
              color: '#6C6868',
              fontSize: 24,
                     fontFamily:"Montserrat-Bold",
              
              lineHeight: 29,
            }}>
            On Going
          </Text>
          <Text
            style={[
              {
                color: '#000000',
                fontSize: 14,
                       fontFamily:"Montserrat-Bold",
                lineHeight: 17,
              },
            ]}>
            {`Startup website design
with responsive`}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              marginTop: 8,
            }}>
            <Image
              source={require('../../assets/homePage/c.png')}
            />
            <Text style={{color: 'rgba(93, 96, 101, 0.5)', fontSize: 9, fontFamily:"Montserrat-Regular",}}>
              9:00AM - 12:00PM
            </Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Complete: 80%</Text>
          </Pressable>
        </View>
        <View style={{alignItems: 'flex-end', gap: 14}}>
          <Text style={styles.seeAllText}>See all</Text>
          <Image
            source={require('../../assets/homePage/tick.png')}
            style={{width: 94, height: 118}}></Image>
        </View>
      </View>
  )
}

export default Section
const styles=StyleSheet.create({
    space:{
        paddingRight:20,paddingLeft:22
      },
      seeAllText: {
        fontFamily:"Montserrat-Regular",
        fontSize: 12,
        lineHeight: 15,
    
        color: '#FF0C64',
      },  button: {
        backgroundColor: 'rgba(246, 163, 243, 0.28)',
        borderRadius: 5,
    
        width: 98,
        marginTop: 22,
      },
      buttonText: {
        paddingVertical: 5,
        color: '#EE41E7',
        fontFamily:"Montserrat-Bold",
        fontSize: 9,
        lineHeight: 11,
        textAlign: 'center',
      },
})