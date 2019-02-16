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
import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons'
import { LinearGradient } from 'expo';

export default class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  signIn = () => {
    console.log(this.state.email)
    return fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/login",{
      method:'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })  
    })
      .then((response) => response.json())
      .then((response) => {
        this.getUserInfo()
        if (response.error) {
          alert(response.error)
        } else {
          console.log(response)
          this.props.onPress()
        }
      })
      .catch((error) => {
        console.error(error)  
    })
  }

  getUserInfo = () => {
    return fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users/")
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          alert(response.error)
        } else {
          console.log('유저정보',response)
        }
      })
      .catch((error) => {
        console.error(error)  
    })
  }

  render () {
    return (
      <View style={{padding: 10}}>
        <View>
          <Text style={styles.text}>E-Mail</Text>
          <View style={styles.buttoncontainer}>  
            <TextInput style = {styles.input}
              placeholder='email@'
              onChangeText={(text) => this.setState({email: text})}
            />
            <MaterialCommunityIcons name="email" size={20} color={'#adb5bd'}/>
          </View>
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <View style={styles.buttoncontainer}>  
            <TextInput style = {styles.input}
              placeholder='Password'
              secureTextEntry
              onChangeText={(text) => this.setState({password: text})}
            />
            <Entypo name="eye" size={20} color={'#adb5bd'}/>  
          </View>  
        <View style={{margin:0}} />
          <TouchableHighlight 
            style={styles.loginButton}
            onPress={this.signIn}>        
            <View style={styles.loginButtoncontainer}>
              <LinearGradient
                colors={['#4dabf7', '#206DDF', '#1864ab']}
                style={{ alignItems: 'center', borderRadius: 50,    height:50,    flexDirection:'row',
                justifyContent:'center', width:250, 
              }}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </LinearGradient>  
            </View>
          </TouchableHighlight>
        </View>
      </View>  
    )  
  }
}

const styles = StyleSheet.create({
  buttoncontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:'#adb5bd',
    marginBottom: 20,
  },
  input:{
    flex:1,
    height: 40,
    width: 290,
  },
  loginButton: {
    height:50,
    width:250,
    backgroundColor:"#206DDF",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',  
    borderRadius: 50, 
    marginBottom: 5, 
  },
  loginButtoncontainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : 'white',
    fontSize:30,
    marginLeft:15 
  },
  text: {
    color : '#adb5bd',
    marginBottom:0
  }
})