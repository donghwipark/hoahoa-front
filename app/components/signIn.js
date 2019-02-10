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
import {MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'

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
          <View style={styles.buttoncontainer}>
            <MaterialCommunityIcons name="email" size={20} color={'black'}/>
            <TextInput style = {styles.input}
            placeholder='    Username'
            onChangeText={(text) => this.setState({email: text})}
            />
          </View>
        </View>
        <View>
          <View style={styles.buttoncontainer}>
            <FontAwesome name="user-secret" size={20} color={'black'}/>  
            <TextInput style = {styles.input}
              placeholder='    Password'
              secureTextEntry
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>  
        <View style={{margin:0}} />
          <TouchableHighlight 
            style={styles.loginButton}
            onPress={this.signIn}>        
            <View style={styles.loginButtoncontainer}>
              <FontAwesome name="sign-in" size={20} color={'#495057'}/>
              <Text style={styles.buttonText}>Login</Text>
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
    color : '#495057',
    fontSize:15,
    marginLeft:15 
  } 
})