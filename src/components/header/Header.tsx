import { View, Text,Image ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react';
const Header = () => {
  return (
    <View style={[styles.common,{paddingHorizontal:20,marginTop:'8%'}]}>
<View style={[styles.common,styles.gap]}>
<TouchableOpacity>

<Image

source={require('../../assets/homePage/Menu.png')}/>
</TouchableOpacity>

<Text style={styles.txt}>June 03, 2020</Text>
</View>
<TouchableOpacity>

<Image 

source={require('../../assets/homePage/Profile.png')}/>
</TouchableOpacity>
    </View>
  )
}

export default Header
const styles=StyleSheet.create({
  common:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },txt:{
    fontSize:13,
color:'#5D6065',
fontFamily:"Montserrat-Regular"
  },
  gap:{
gap:29
  }
})