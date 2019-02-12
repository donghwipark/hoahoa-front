import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default class HomeSettingButton extends React.Component {
  login() {this.props.navigation.navigate('Home')}
  render () {
    return (
      <View>
        <TouchableHighlight style={styles.button} onPress={this.props.onPress}>       
          <View>
            <FontAwesome name="cog" size={40} color={'#868e96'}/>
          </View>
        </TouchableHighlight>
      </View>
    )  
  }
}

const styles = StyleSheet.create({
  button: {
    height:40,
    width:40,
    margin:15,
    marginTop:50,
  },
  buttonText: {
    color : 'black',
    fontSize:15,
    marginLeft:15 
  } 
})