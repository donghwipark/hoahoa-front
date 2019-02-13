import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'

export default class SelectScrollView extends React.Component {
  render () {
    return (
      <View style={styles.view}>
        <Text >Interest</Text>
        <Text>ScrollView</Text>  
      </View>
    )  
  }
}

const styles = StyleSheet.create({
  view: {
    top:'40%',
    backgroundColor:'#206DDF',
    padding: 35
  },
})