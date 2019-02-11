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

export default class SignUpOne extends React.Component {
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

  render () {
    return (
      <View>
        <View >
          <View style={styles.buttoncontainer}>
            <MaterialCommunityIcons name="email" size={20} color={'black'}/>
            <TextInput style = {styles.input}
              placeholder='    Email'
              onChangeText={(text) => this.setState({email: text})}
            />
          </View>
        </View>
        <View>
          <View style={styles.buttoncontainer}>
            <MaterialCommunityIcons name="account-location" size={20} color={'black'}/>  
            <TextInput style = {styles.input}
              placeholder='    Nickname'
              onChangeText={(text) => this.setState({password: text})}
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
        </View>
        <View>
          <View style={styles.buttoncontainer}>
            <FontAwesome name="user-secret" size={20} color={'black'}/>  
            <TextInput style = {styles.input}
              placeholder='    Checking password'
              secureTextEntry
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>  
        </View> 
        <TouchableHighlight 
          style={styles.button}
          onPress={this.nextPage}>
          <View style={styles.buttoncontainer}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableHighlight>
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