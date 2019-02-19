import React from "react"
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo';

export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    checkingPassword: '',
    nickname: '',
    aboutme:'',
    age:'',
    gender:'',
    photo:'',
  }

  validation(values) {
    const errors = {};
    const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
    if (!emailPattern.test(values)) {
      errors.email = 'Enter a valid email';
      return alert(errors.email);
    }

    if (!emailPattern.test(values)) {
      errors.email = 'Enter a valid email';
      return alert(errors.email);
    }

    if(this.state.nickname.length === 0){
      alert("Input nickname");
      return false;
    }

    if(this.state.password !== this.state.checkingPassword ) {
      return alert('Yout password input is incorrect')
    }
    
    this.chkPwd(this.state.password) && this.props.navigation.navigate('SignUpAddInfo', this.state)
  }
 
  chkPwd (str) {
    var pw = str;
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
   
    if(pw.length < 8 || pw.length > 20){
     alert("Your password must be between 8 and 20 characters.");
     return false;
    }
    if(pw.search(/₩s/) != -1){
     alert("Input without blank");
     return false;
    } 
    if(num < 0 || eng < 0 || spe < 0 ){
     alert("Your password must contain at least one special character, number and letter"); 
     return false;
    }
    return true
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
                placeholder='At least 8 chracters'
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
                onChangeText={(text) => this.setState({checkingPassword: text})}
              />
              <Entypo name="eye" size={20} color={'#adb5bd'}/>  
            </View>  
          </View >
          <View style={{margin:0}}> 
            <TouchableHighlight 
              style={styles.nextButton}
              onPress={
                () => (this.props.navigation.navigate('SignUpAddInfo', this.state))}
                //() => this.validation(this.state.email)}
              >
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