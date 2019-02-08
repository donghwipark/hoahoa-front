import React from 'react'
import {
  StyleSheet,
  View,
  Text,  
} from 'react-native'


export default class Profile extends React.Component {
  render () {
    return (
      <View style={styles.container}>
          <Text style={{fontSize:20}}>Mathces</Text>
      </View>  
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',  
  },
  profile: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }  
})