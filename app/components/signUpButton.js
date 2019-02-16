import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
import { LinearGradient } from 'expo';

export default class signUpButton extends React.Component {
  login() {this.props.navigation.navigate('SignUp')}
  render () {
    return (
      <TouchableHighlight 
        style={styles.button}
        onPress={this.props.onPress}
      >        
        <View style={styles.buttoncontainer}>
          <LinearGradient
            colors={['#4dabf7', '#206DDF', '#1864ab']}
            style={{ alignItems: 'center', borderRadius: 50,    height:50,    flexDirection:'row',
            justifyContent:'center', width:250, 
          }}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </LinearGradient>
        </View>
      </TouchableHighlight>
    )  
  }
}

const styles = StyleSheet.create({
  button: {
    height:50,
    width:250,
    backgroundColor:"#206DDF",
    flexDirection:'column',
    borderRadius: 50, 
    marginBottom: 10, 
  },
  buttoncontainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : 'white',
    fontSize:30, 
  },
   
})