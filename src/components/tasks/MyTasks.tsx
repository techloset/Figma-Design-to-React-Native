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
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import type {PropsWithChildren} from 'react';
import {useNavigation} from '@react-navigation/native';
const {width,  height} = Dimensions.get('window');
type propData = PropsWithChildren<{
  colors: string[];
  angle: number;
  locations: number[];
  text: string;
  tasks: string;
  arrowPosition: string;
  containerHeight?:number;
  path:any;
  styling:any;
}>;
const Data = ({colors, angle, locations, text, tasks,arrowPosition,containerHeight,path,styling}: propData) => {
  return (
    <LinearGradient
      useAngle={true}
      {...{angle, locations, colors}}
      style={[styles.bg, {flexDirection:'row',justifyContent:width>=400?'space-around':'space-between',alignItems:arrowPosition=='top'?'flex-start':'flex-end',...styling}]}>

      <View >

        <Image source={path}  />
      <Text style={[styles.txt, styles.color,]}>{text}</Text>
      <Text style={[styles.color, styles.txt2]}>{tasks} </Text>
      </View>
        <View style={{}}>
        <Image source={require('../../assets/homePage/Vector.png')}  style={{width:width<=340?15:22,resizeMode:'contain'}} />
        </View>
    </LinearGradient>
  );
};
const MyTasks = () => {
  const navigation: any = useNavigation();
  return (
    <View >
      
      <Text
        style={[styles.space,{
          fontSize: 18,
      
          color: 'black',
         marginBottom:12,
         fontFamily:"Montserrat-Bold"
        }]}>
        My Tasks
      </Text>

      <View
        style={[styles.space,{flexDirection: 'row', justifyContent:'space-between',gap:10,}]}>

        {/* First two cards red and purple */}

        <View style={{gap: 15, flexGrow: 1}}>
          <Data
            {...{
              colors: ['#FF005C', '#FF699F'],
              angle: 10.53,
              locations: [0.2506, 0.7551],
              text: `Mobile App\nDesign`,
              tasks: '10Tasks',
              arrowPosition:'top',
              path:require('../../assets/homePage/1.png'),
              styling:{
paddingTop:24,
paddingRight:17,
paddingBottom:21
              }
            }}
          />
           <Data
            {...{
              colors:['#8205FF', '#CFA1FE'],
              angle: 23.37,
              locations: [0.062, 1.07],
              text: `Logo`,
              tasks: '2 Tasks',
              arrowPosition:'bottom',
              path:require('../../assets/homePage/3.png'),
              styling:{
                paddingTop:17,
paddingRight:21,
paddingBottom:11
              }
            }}
            
          />
          
        </View>
        {/* Next two cards yellow and blue */}

        <View style={{gap: 18, flexGrow: 1}}>
        <Data
            {...{
              colors:['rgba(243, 104, 3, 0.99)', '#FFCA0F'],
              angle: 28.14,
              locations: [0.17, 1.02],
              text: `Pending`,
              tasks: '16 Tasks',
              arrowPosition:'top',
              path:require('../../assets/homePage/2.png'),
              style:true,
              styling:{
                paddingTop:16,
                paddingRight:13,
                paddingBottom:9
              }
            }}
          />
        <Data
            {...{
              colors:['#00F0FF', 'rgba(0, 240, 255, 0.5)'],
              angle: 18.51,
              locations: [0.54, 1],
              text: `Website\nDesign`,
              tasks: '16 Tasks',
              arrowPosition:'bottom',
              path:require('../../assets/homePage/4.png'),
              style:true,
              height: 206,
              styling:{
                paddingTop:22,
                paddingRight:13,
                paddingBottom:15
              }
            }}
          />
        
   
        </View>
      </View>
  


    </View>
  );
};

export default MyTasks;
const styles = StyleSheet.create({
  bg:{

    borderRadius: 20,
    paddingLeft: 19,
  },
 
  txt: {
    paddingBottom: 11,
    paddingTop: 0,
    fontFamily:"Montserrat-Bold",
    fontSize: 14,
    lineHeight: 17,
   
  },
  color: {
    color: '#FFFFFF',
  },
  txt2: {
    fontFamily:"Montserrat-Regular",
    fontSize: 9,
    lineHeight: 10,
  },
  ml: {
    marginLeft: 6,
  },


  space:{
    paddingRight:20,paddingLeft:22
  }
});
