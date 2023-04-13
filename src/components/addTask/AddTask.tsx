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
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const {width,  height} = Dimensions.get('window');

const Data = [
  {
    id: 1,
    sidetime: '9 PM',
    heading: 'Landing page design',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 2,
    sidetime: '12 AM',
    heading: 'Landing page design',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 3,
    sidetime: '12 PM',
    heading: 'Mobile App prototypying',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 4,
    sidetime: '12 PM',
    heading: 'Night out with girlfriend',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 5,
    sidetime: '12 PM',
    heading: 'Landing page design',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 6,
    sidetime: '12 PM',
    heading: 'Landing page design',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 7,
    sidetime: '12 PM',
    heading: 'Landing page design',
    estimateTime: '12 pm - 3pm',
  },
];

const Block = ({heading, estimateTime, index}: any) => {
  return (


<>
      <Text
        style={{
          color: index == 0 ? 'white' : '#6C6868',
          fontFamily:"Montserrat-Bold",
        }}>
        {heading}
      </Text>
      <Text style={{color: index == 0 ? 'white' : '#6C6868',fontSize:10,fontFamily:"Montserrat-Regular",}}>
        {estimateTime}
      </Text>
    </>
  );
};
const AddTask = ({sidetime, heading, estimateTime, index}: any) => {
  // const type=index==0?View:LinearGradient
  return (
    <View
      style={{
        borderBottomColor: 'rgba(215, 215, 215, 0.3)',
        // backgroundColor:index==0?'#00F0FF':'#FDFDFD',
        paddingBottom: 12,
        borderBottomWidth: 1,
        marginLeft: 21,
        marginRight:  width>=350?25:10,
        marginBottom:  index==Data.length-1?15:0,
        paddingTop: index==0? 10:34,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap:width>=350?28:10
      }}>
      <Text style={{fontSize: 13, color: 'rgba(93, 96, 101, 0.5)',fontFamily:"Montserrat-Regular",}}>
        {sidetime}
      </Text>

     
      {
        index == 0 ? (
       
        
          <LinearGradient
   
            colors={['#00F0FF', '#03B0BC']}
            style={[styles.container,{backgroundColor:'#00F0FF',flexGrow:0.7, elevation: 20,
            shadowColor: '#03B0BC',}]}>

          <Block {...{estimateTime, heading, index}} />
        

       
          </LinearGradient>
        ) : (
          <View
          style={[styles.container,{backgroundColor:'#FFFFFF',flexGrow:0.7}]}>
        
            <Block {...{estimateTime, heading, index}} />
        </View>
        )}
        
      
    </View>
  );
};

export default () => {
  return (
    <FlatList
      data={Data}
      renderItem={({item, index}) => <AddTask {...item} index={index} />}
      horizontal={false}
      scrollEnabled={true}
      keyExtractor={(item): any => item.id}
      showsVerticalScrollIndicator={true}
    />
  );
};
const styles=StyleSheet.create({
  container:{
    paddingLeft: 24,
    paddingVertical: 13,
    gap: 5,
   
    borderRadius: 15,
    shadowColor: '#000',
 
    shadowOpacity: 0.5,
    shadowRadius: 10,

    elevation: 1,
  }
})
