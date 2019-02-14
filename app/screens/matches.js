import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
} from 'react-native';

export default class Matches extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Matches</Text>
        <View>        
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:"blue",
    alignItems: 'center',
  },
  matches: {
    backgroundColor: '#fff',
    padding:45,
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:15
  },
});
