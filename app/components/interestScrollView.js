import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native'

export default class SelectScrollView extends React.Component {
  render () {
    console.log(this.props)
    return (
      <TouchableHighlight 
      style={styles.button}
      onPress={this.props.onPress}
      >
      <View style={styles.buttoncontainer}>
        <Text style={styles.buttonText}>{this.props.interest}</Text>
      </View>
    </TouchableHighlight>
    )  
  }
}

const styles = StyleSheet.create({
    button: {
      flexDirection:'row',
      height:50,
      width:50,
      backgroundColor:"white",
      borderWidth: 0.5,
      borderColor: '#339af0',
      borderRadius: 50, 
      marginBottom: 15, 
    },
    buttoncontainer: {
      alignItems:'center',
      justifyContent:'center'  
    },
    buttonText: {
      color : '#206DDF',
      fontSize:15,
    } 

})

