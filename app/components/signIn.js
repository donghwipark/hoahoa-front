import React from "react"
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button
} from 'react-native';

export default class SignIn extends React.Component {
  getTextInput = () => {
    const payload = {
      name: this.name
    }  
    console.log(payload)  
  } 

  signIn = () => {
    return fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users")
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => {
      console.error(error)  
    })
  }
  render () {
    return (
      <View style={{padding: 10}}>

        <TextInput style = {styles.input}
                     placeholder='Username'
                     onChangeText={(text) => this.name = text}             
        />

        <TextInput style = {styles.input}
                     placeholder='Password' />

      <View style={{margin:7}} />
        <Button
          color="black" 
          onPress={this.getTextInput}
          title="Sign In"
        />
      </View>
    )  
  }
}

const styles = StyleSheet.create({
  
  input:{
    height: 10,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 20,
    color: '#fff'  
  }
})