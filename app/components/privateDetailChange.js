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
import {Entypo} from '@expo/vector-icons'
import { LinearGradient } from 'expo'

export default class PrivateDetailChange extends React.Component {
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
  signUp = () => {
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <View style={styles.changePassword}>
        <View>
          <Text style={styles.text}>Current Password</Text>
          <View style={styles.buttoncontainer}>
            <TextInput style = {styles.input}
              placeholder='    Password'
              onChangeText={(text) => this.setState({password: text})}
            />
            <Entypo name="eye" size={20} color={'#adb5bd'}/> 
          </View>  
        </View>
        <View>
          <Text style={styles.text}>Changing Password</Text>
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
          <Text style={styles.text}>Checking Password</Text>
          <View style={styles.buttoncontainer}>
            <TextInput style = {styles.input}
              placeholder='    Checking password'
              secureTextEntry
              onChangeText={(text) => this.setState({password: text})}
            />
            <Entypo name="eye" size={20} color={'#adb5bd'}/>  
          </View>  
        </View >
        <View style={{margin:0}}> 
          <TouchableHighlight 
            style={styles.nextButton}
            onPress={this.props.onPress}>
            <View style={styles.nextButtoncontainer}>
              <LinearGradient
                  colors={['#4dabf7', '#206DDF', '#1864ab']}
                  style={{ alignItems: 'center', borderRadius: 50,    height:50,    flexDirection:'row',
                  justifyContent:'center', width:250, 
                }}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
              >
                <Text style={styles.buttonText}>Change</Text>
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
    height: 40,
    width: 250,
  },
  nextButton: {
    height:50,
    width:250,
    backgroundColor:"#206DDF",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',  
    borderRadius: 50, 
    marginBottom: 5, 
  },
  nextButtoncontainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : 'white',
    fontSize:30,
  },
  text: {
    color : '#adb5bd',
    marginBottom:0
  } ,
  changePassword: {
    backgroundColor: '#fff',
    padding:45,
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:15
  },
})