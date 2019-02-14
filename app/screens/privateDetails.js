import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
} from 'react-native';
import PrivateDetailChange from '../components/privateDetailChange'

export default class PrivateDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{position:'absolute', width:'100%', height:'50%', backgroundColor:'#206DDF'}}></View>
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}}>Change Password</Text>
        <View>        
          <PrivateDetailChange />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
    alignItems: 'center',
  },

});
