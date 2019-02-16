import React from 'react';
import {
   StyleSheet,
   Text,
   TextInput,
   View,
   Image,
   TouchableHighlight,
} from 'react-native';
import FacebookButton from '../components/facebookButton'
import KakaotalkButton from '../components/kakaotalkButton'
import { LinearGradient } from 'expo';
import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons'

export default class Login extends React.Component {
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
        if (response.error) {
          alert(response.error)
        } else {
          console.log(response)
          this.props.navigation.navigate('Home')
        }
      })
      .catch((error) => {
        console.error(error)  
    })
  }

  render() {
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
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Sign In</Text>
        <View style={styles.login}>
          <View>
            <Text style={styles.textInput}>E-Mail</Text>
            <View style={styles.buttoncontainer}>  
              <TextInput style = {styles.input}
                placeholder='email@'
                onChangeText={(text) => this.setState({email: text})}
              />
              <MaterialCommunityIcons name="email" size={20} color={'#adb5bd'}/>
            </View>
          </View>
          <View>
            <Text style={styles.textInput}>Password</Text>
            <View style={styles.buttoncontainer}>  
              <TextInput style = {styles.input}
                placeholder='Password'
                secureTextEntry
                onChangeText={(text) => this.setState({password: text})}
              />
              <Entypo name="eye" size={20} color={'#adb5bd'}/>  
            </View>  
          <View/>
            <TouchableHighlight 
              style={styles.loginButton}
              onPress={this.signIn}>        
              <View style={styles.loginButtoncontainer}>
                <LinearGradient
                  colors={['#4dabf7', '#206DDF', '#1864ab']}
                  style={{ alignItems: 'center', borderRadius: 50, height:50, flexDirection:'row', width:250, justifyContent:'center' }}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={styles.buttonText}>Sign In</Text>
                </LinearGradient>  
              </View>
            </TouchableHighlight>
          </View>

        </View>
        <View style={styles.facebookButton} >
          <FacebookButton onPress={this.login} />
        </View>
        <View style={styles.kakaotalkButton}>
          <KakaotalkButton onPress={() =>
            this.props.navigation.push('Home', {
           })} />
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <Text style={{fontSize:20, color:'grey'}}>Don't have an account?</Text>
          <TouchableHighlight onPress={
            () => {this.props.navigation.navigate('SignUp')}
          }>        
            <View>
              <Text style={{fontWeight:'bold', fontSize:20, color:'grey'}}> Create Now</Text>
            </View>
          </TouchableHighlight>       
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
    alignItems: 'center',
  },
  login: {
    backgroundColor: '#fff',
    padding:45,
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:15
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
    width: 280,
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
  textInput: {
    color : '#adb5bd',
    marginBottom:0
  }
});
