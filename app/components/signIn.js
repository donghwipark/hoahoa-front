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

export default class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  signIn = () => {
    return fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users")
      .then((response) => response.json())
      .then((response) => {
        const checkEmailAndPassword = (element) => {
          if ( (element.email ===this.state.email) && (element.password === this.state.password) ) {
            return true
          }
        }        
        if (response.some(checkEmailAndPassword)) {
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
              <Text style={styles.buttonText}>Sign In</Text>
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