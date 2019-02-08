import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default class KakaotalkButton extends React.Component {
  render () {
    return (
      <TouchableHighlight 
        style={styles.button}>
        <View style={styles.buttoncontainer}>
          <Ionicons name="ios-chatbubbles" size={20} color={'black'}/>
          <Text style={styles.buttonText}>Login with Kakaotalk</Text>
        </View>
      </TouchableHighlight>
    )  
  }
}

const styles = StyleSheet.create({
  button: {
    height:40,
    width:220,
    backgroundColor:"#fef01b",
    flexDirection:'column',

    borderRadius: 50,  
  },
  buttoncontainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : 'black',
    fontSize:15,
    marginLeft:15 
  } 
})