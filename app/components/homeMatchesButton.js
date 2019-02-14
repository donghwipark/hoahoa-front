import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import {SimpleLineIcons} from '@expo/vector-icons'


export default class homeMatchesButton extends React.Component {
  render () {
    return (
      <View>
        <TouchableHighlight style={styles.button} onPress={this.props.onPress}>       
          <View>
            <SimpleLineIcons name="bubble" size={40} color={'#868e96'}/>
          </View>
        </TouchableHighlight>
      </View>
    )  
  }
}

const styles = StyleSheet.create({
  button: {
    height:50,
    width:50,
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