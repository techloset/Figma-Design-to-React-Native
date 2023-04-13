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
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/taskHeader/Header';
import Calendar from '../../components/calendarDemo/Calendar';
import AddTask from '../../components/addTask/AddTask';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

const TaskScreen = () => {
  return (
    <>
<View style={{
        flex: 1,
        backgroundColor:"#FDFDFD"

}}>

       <LinearGradient
     
        colors={['#FF48F8', '#E906E0']}
       
        style={{
          paddingHorizontal: '20%',
          paddingVertical: 20,
          borderRadius: 15,
          position:'absolute',
          left:'16%',
          right:'16%',
          bottom: 19,
          zIndex:10,
          elevation: 15,

          shadowColor: '#FF48F8'
        }}>
          <TouchableOpacity>

        <Text style={{color: '#FFFFFF', fontSize: 14,  fontFamily:"Montserrat-Bold",textAlign:"center",
}}>
          Add New Task
        </Text>
          </TouchableOpacity>
      </LinearGradient>

      <Header />
      <Calendar />
    <View
      style={{
        flex: 1,
zIndex:0,marginBottom:75
      }}>
      
  
        <AddTask />
    </View>
</View>

    </>

  );
};

export default TaskScreen;
const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '8%',
  },
});
