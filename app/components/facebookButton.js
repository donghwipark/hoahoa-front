import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default class FacebookButton extends React.Component {
  login() {this.props.navigation.navigate('Home')}
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
    height:40,
    width:220,
    backgroundColor:"#3b5998",
    flexDirection:'column',
    borderRadius: 50, 
    marginBottom: 5, 
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