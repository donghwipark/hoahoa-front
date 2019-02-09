import React from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'


export default class HomeButton extends React.Component {
  render () {
    return (
        <Image 
        style={styles.button}
        source={require('../images/homeIcon.png')}
        />   
    )  
  }
}

const styles = StyleSheet.create({
  button: {
    height:50,
    width:50,
    margin:25,
    marginTop:50,
  }
})