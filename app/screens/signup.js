import React from "react"
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import {MaterialCommunityIcons, FontAwesome, MaterialIcons} from '@expo/vector-icons'
import SignUpOne from '../components/signupOne'

export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    nickname: '',
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleNickname = (text) => {
    this.setState({ nickname: text })
  }
  signUp = (email, pass) => {
    alert('email: ' + this.state.email + ' password: ' + this.state.pass)
  }
  nextPage = () => {
    this.props.navigation.navigate('SignUpAddInfo')
  }
  // signIn = () => {
  //   return fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       const checkEmailAndPassword = (element) => {
  //         if ( (element.email ===this.state.email) && (element.password === this.state.password) ) {
  //           return true
  //         }
  //       }        
  //       if (response.some(checkEmailAndPassword)) {
  //         this.props.onPress()  
  //       } else {
  //         alert('Email or password is wrong')
  //       }     
  //     })
  //     .catch((error) => {
  //       console.error(error)  
  //   })
  // }
  render () {
    return (
      <View>
        <SignUpOne/>
      </View>  
    )  
  }
}

const styles = StyleSheet.create({
  buttoncontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    height: 40,
    width: 200,
    backgroundColor: '#ced4da',
    marginBottom: 10,
    borderRadius: 50, 
  },
  loginButton: {
    height:40,
    width:220,
    backgroundColor:"#74c0fc",
    flexDirection:'column',
    alignItems:'center',
    borderRadius: 50, 
    marginBottom: 5, 
    justifyContent:'center'  
  },
  loginButtoncontainer: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : '#495057',
    fontSize:15,
    marginLeft:15 
  } 
})