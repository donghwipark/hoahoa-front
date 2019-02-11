import React from "react"
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';
import {MaterialCommunityIcons, FontAwesome, MaterialIcons} from '@expo/vector-icons'
import SignUpOne from '../components/signupOne'
import SignUpTwo from '../components/signupTwo'

export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    nickname: '',
  }
  signIn = () => {
    this.props.navigation.navigate('Login')
  }
  nextPage = () => {
    this.props.navigation.navigate('SignUpAddInfo')
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={{position:'absolute', width:400, height:200, backgroundColor:'#206DDF'}}></View>
        <View style={{position:'absolute', width:400, height:200, backgroundColor:'#206DDF'}}></View>
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Sign Up</Text>
        <View style={styles.signin}>
          <SignUpOne onPress={this.nextPage}/>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <Text style={{fontSize:20, color:'grey'}}>Already have an account?</Text>
          <TouchableHighlight onPress={this.signIn}>        
            <View>
              <Text style={{fontWeight:'bold', fontSize:20, color:'#495057'}}> Sign In</Text>
            </View>
          </TouchableHighlight>       
        </View>
      </View>
    )  
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#206DDF",
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
  }
})