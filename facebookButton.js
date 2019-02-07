import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default class FacebookButton extends React.Component {
  render () {
    return (
      <TouchableHighlight 
        style={styles.button}>
        <View style={styles.buttoncontainer}>
          <FontAwesome name="facebook" size={20} color={'white'}/>
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </View>
      </TouchableHighlight>
    )  
  }
}

const styles = StyleSheet.create({
  button: {
    height:40,
    width:220,
    backgroundColor:"#3b5998",
    borderRadius: 50,  
  },
  buttoncontainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : 'white',
    fontSize:15,
    marginLeft:15 
  } 
})