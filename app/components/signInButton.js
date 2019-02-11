import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'

export default class signInButton extends React.Component {
  login() {this.props.navigation.navigate('login')}
  render () {
    return (
      <TouchableHighlight 
        style={styles.button}
        onPress={this.login}
        >        
        <View style={styles.buttoncontainer}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </TouchableHighlight>
    )  
  }
}

const styles = StyleSheet.create({
  button: {
    height:60,
    width:280,
    backgroundColor:"white",
    flexDirection:'column',
    borderWidth: 0.5,
    borderColor: '#206DDF',
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
    color : '#206DDF',
    fontSize:35,
  } 
})