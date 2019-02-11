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
import {MaterialCommunityIcons, FontAwesome, MaterialIcons, Entypo} from '@expo/vector-icons'

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
          <Text style={styles.text}>E-Mail</Text>
          <View style={styles.buttoncontainer}>
            <TextInput style = {styles.input}
              placeholder='    Email'
              onChangeText={(text) => this.setState({email: text})}
            />
            <MaterialCommunityIcons name="email" size={20} color={'#adb5bd'}/>
          </View>
        </View>
        <View>
          <Text style={styles.text}>E-Mail</Text>
          <View style={styles.buttoncontainer}>
            <TextInput style = {styles.input}
              placeholder='    Nickname'
              onChangeText={(text) => this.setState({password: text})}
            />
            <MaterialCommunityIcons name="account-location" size={20} color={'#adb5bd'}/>  
          </View>  
        </View>
        <View>
          <Text style={styles.text}>E-Mail</Text>
          <View style={styles.buttoncontainer}>
            <TextInput style = {styles.input}
              placeholder='    Password'
              secureTextEntry
              onChangeText={(text) => this.setState({password: text})}
            />
            <Entypo name="eye" size={20} color={'#adb5bd'}/>  
          </View>  
        </View>
        <View>
          <Text style={styles.text}>E-Mail</Text>
          <View style={styles.buttoncontainer}>
            <TextInput style = {styles.input}
              placeholder='    Checking password'
              secureTextEntry
              onChangeText={(text) => this.setState({password: text})}
            />
            <Entypo name="eye" size={20} color={'#adb5bd'}/>  
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
    borderBottomWidth:1,
    borderBottomColor:'#adb5bd',
    marginBottom: 20,
  },
  input:{
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
    color : '#495057',
    fontSize:15,
    marginLeft:15 
  },
  text: {
    color : '#adb5bd',
    marginBottom:0
  } 
})