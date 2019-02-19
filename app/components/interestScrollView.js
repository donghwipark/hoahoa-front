import React from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native'

export default class SelectScrollView extends React.Component {
  state = {
    interest : ''
  }
  render () {
    return (
      <TouchableHighlight 
        style={{
          flexDirection:'row',
          height:'70%',
          alignItems:'center',
          justifyContent:'center',  
          backgroundColor:this.props.color,
          borderRadius: 20, 
          padding:10,
          marginLeft:5,
          marginRight:5
        }}
        onPress={() => {
          this.setState({interest:this.props.interest})
          console.log(this.state.interest)
        }
      }
      >
        <View>
          <Text style={styles.buttonText}>{this.props.interest}</Text>
        </View>
      </TouchableHighlight>
    )  
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color : 'white',
    fontSize:20,
    padding:5
  } 
})

