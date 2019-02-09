import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default class signUpButton extends React.Component {
  login() {this.props.navigation.navigate('SignUp')}
  render () {
    return (
      <TouchableHighlight 
        style={styles.button}
        onPress={this.props.onPress}
        >        
        <View style={styles.buttoncontainer}>
          <MaterialCommunityIcons name="sign-text" size={20} color={'#495057'}/>
          <Text style={styles.buttonText}>Sign up with Hoahoa</Text>
        </View>
      </TouchableHighlight>
    )  
  }
}

const styles = StyleSheet.create({
  button: {
    height:40,
    width:220,
    backgroundColor:"#4dabf7",
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
    color : '#495057',
    fontSize:15,
    marginLeft:15 
  } 
})