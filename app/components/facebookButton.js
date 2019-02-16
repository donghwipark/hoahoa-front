import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { LinearGradient } from 'expo';

export default class FacebookButton extends React.Component {

  
  render () {
    return (
      <TouchableHighlight 
        style={styles.button}
        onPress={this.props.onPress}
        >
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
    height:50,
    width:250,
    backgroundColor:"#3b5998",
    flexDirection:'column',
    borderRadius: 50, 
    marginBottom: 15, 
  },
  buttoncontainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : 'white',
    fontSize:18,
    marginLeft:15 
  } 
})