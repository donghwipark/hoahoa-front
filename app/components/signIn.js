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
  state = {

    email: '',
    password: ''
  }

  signIn = () => {
    return fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users")
      .then((response) => response.json())
      .then((response) => {
        if ( (response[1].email ===this.state.email) && (response[1].password === this.state.password) ) {
          this.props.onPress()
        } else {
          alert('Email or password is wrong')
        }
      })
      .catch((error) => {
        console.error(error)  
    })
  }
  render () {
    return (
      <View style={{padding: 10}}>
        <TextInput style = {styles.input}
          placeholder='Username'
          onChangeText={(text) => this.setState({email: text})}
          />
        <TextInput style = {styles.input}
          placeholder='Password'
          secureTextEntry
          onChangeText={(text) => this.setState({password: text})}
        />
      <View style={{margin:7}} />
        <Button
          color="black" 
          onPress={this.signIn}
          title="Sign In"
        />
      </View>
    )  
  }
}

const styles = StyleSheet.create({
  input:{
    height: 40,
    width: 220,
    backgroundColor: '#ced4da',
    marginBottom: 10,
    borderRadius: 50, 
    //color: 'black'  
  }
})