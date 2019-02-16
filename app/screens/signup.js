import React from "react"
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';
import {MaterialCommunityIcons, FontAwesome, MaterialIcons, Entypo} from '@expo/vector-icons'
import { LinearGradient } from 'expo';

export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    nickname: '',
    age:'',
    gender:'',
    photo:'',
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
  render () {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#4dabf7', '#206DDF', '#1864ab']}
          style={{position:'absolute', width:'100%', height:'50%', backgroundColor:'#206DDF'}}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
        </LinearGradient>        
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Sign Up</Text>
        <View style={styles.signin}>
          <View >
            <Text style={styles.text}>E-Mail</Text>
            <View style={styles.buttoncontainer}>
              <TextInput style = {styles.input}
                placeholder='Email'
                onChangeText={(text) => this.setState({email: text})}
              />
              <MaterialCommunityIcons name="email" size={20} color={'#adb5bd'}/>
            </View>
          </View>
          <View>
            <Text style={styles.text}>Nickname</Text>
            <View style={styles.buttoncontainer}>
              <TextInput style = {styles.input}
                placeholder='Nickname'
                onChangeText={(text) => this.setState({nickname: text})}
              />
              <MaterialCommunityIcons name="account-location" size={20} color={'#adb5bd'}/>  
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
          </View>
          <View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.buttoncontainer}>
              <TextInput style = {styles.input}
                placeholder='Checking password'
                secureTextEntry
                onChangeText={(text) => this.setState({password: text})}
              />
              <Entypo name="eye" size={20} color={'#adb5bd'}/>  
            </View>  
          </View >
          <View style={{margin:0}}> 
            <TouchableHighlight 
              style={styles.nextButton}
              onPress={() => {
                this.props.navigation.navigate('SignUpAddInfo', this.state)
              }}>
              <View style={styles.nextButtoncontainer}>
                <LinearGradient
                  colors={['#4dabf7', '#206DDF', '#1864ab']}
                  style={{ alignItems: 'center', borderRadius: 50,    height:50,    flexDirection:'row',
                  justifyContent:'center', width:250, 
                }}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </LinearGradient>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <Text style={{fontSize:20, color:'grey'}}>Already have an account?</Text>
          <TouchableHighlight onPress={() => {
            this.props.navigation.navigate('Login')
          }}>        
            <View>
              <Text style={{fontWeight:'bold', fontSize:20, color:'grey'}}> Sign In</Text>
            </View>
          </TouchableHighlight>       
        </View>
      </View>
    )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  signin: {
    backgroundColor: '#fff',
    padding: 45,
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:20
  },
  facebookButton: {
    alignItems: 'center',
  },
  kakaotalkButton:{
    alignItems: 'center',
  },
  text:{
    alignItems: 'center',
    justifyContent:'center', 
    marginBottom: 15,
    marginTop: 15
  },
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
    width: '80%',
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
  } 
})