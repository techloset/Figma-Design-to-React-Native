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
const Data = [
  {
    id: 1,
    sidetime: '9 PM',
    heading: ' Landing page design',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 2,
    sidetime: '12 AM',
    heading: ' Landing page design',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 3,
    sidetime: '12 PM',
    heading: ' Mobile App prototypying',
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
    heading: ' Landing page design',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 6,
    sidetime: '12 PM',
    heading: ' Landing page design',
    estimateTime: '12 pm - 3pm',
  },
  {
    id: 7,
    sidetime: '12 PM',
    heading: ' Landing page design',
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
        marginRight: 25,
        paddingTop: index==0? 6:34,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 13, color: 'rgba(93, 96, 101, 0.5)',fontFamily:"Montserrat-Regular",}}>
        {sidetime}
      </Text>

     
      {
        index == 0 ? (
       
        
          // <LinearGradient
          //   useAngle={true}
          //   angle={166}
          //   locations={[0.15, 0.6]}
          //   colors={['#00F0FF', '#03B0BC']}>
            <View
            style={[styles.container,{backgroundColor:'#00F0FF'}]}>

          <Block {...{estimateTime, heading, index}} />
        

       
        </View>
          // </LinearGradient>
        ) : (
          <View
          style={[styles.container,{backgroundColor:'#FFFFFF'}]}>
        
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
    width: '68%',
    paddingLeft: 24,
    paddingVertical: 13,
    gap: 5,
   
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,

    elevation: 2,
  }
})
