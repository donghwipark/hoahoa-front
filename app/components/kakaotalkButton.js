import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo';

export default class KakaotalkButton extends React.Component {
  login() {this.props.navigation.navigate('Home')}
  render () {
    return (
      <TouchableHighlight 
        style={styles.button}
        onPress={this.props.onPress}
        >
        <View style={styles.buttoncontainer}>
          <LinearGradient
            colors={['#ffec99', '#fef01b', '#fef01b']}
            style={{ alignItems: 'center', borderRadius: 50,    height:50,    flexDirection:'row',
            justifyContent:'center', width:250, 
          }}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="ios-chatbubbles" size={20} color={'black'}/>
            <Text style={styles.buttonText}>Login with Kakaotalk</Text>
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
    backgroundColor:"#fef01b",
    flexDirection:'column',
    marginBottom: 30,
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
    fontSize:18,
    marginLeft:15 
  } 
})