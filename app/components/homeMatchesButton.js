import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'


export default class homeMatchesButton extends React.Component {
  render () {
    return (
      <View>
        <TouchableHighlight style={styles.button} onPress={this.props.onPress}>       
          <View>
            <MaterialIcons name="chat" size={40} color={'#868e96'}/>
          </View>
        </TouchableHighlight>
          <Text style={styles.buttonText}>Setting</Text>
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
    //flexDirection:'column',    
  },
  buttonText: {
    color : 'black',
    fontSize:15,
    marginLeft:15 
  } 
})