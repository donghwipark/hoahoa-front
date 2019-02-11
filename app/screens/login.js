import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableHighlight,
} from 'react-native';
import FacebookButton from '../components/facebookButton'
import KakaotalkButton from '../components/kakaotalkButton'
import SignIn from '../components/signIn';
import SignUpButton from '../components/signUpButton';

export default class Login extends React.Component {
  login = () => {
    this.props.navigation.navigate('Home')
  }
  signUp = () => {
    this.props.navigation.navigate('SignUp')
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{position:'absolute', width:400, height:200, backgroundColor:'#206DDF'}}></View>
        <View style={{position:'absolute', width:400, height:200, backgroundColor:'#206DDF'}}></View>
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Sign In</Text>
        <View style={styles.login}>
          <SignIn onPress={this.login}/>
        </View>
        <View style={styles.facebookButton} >
          <FacebookButton onPress={this.login} />
        </View>
        <View style={styles.kakaotalkButton}>
          <KakaotalkButton onPress={this.login} />
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <Text style={{fontSize:20, color:'grey'}}>Don't have an account?</Text>
          <TouchableHighlight onPress={this.signUp}>        
            <View>
              <Text style={{fontWeight:'bold', fontSize:20, color:'#495057'}}> Create Now</Text>
            </View>
          </TouchableHighlight>       
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#206DDF",
    flex: 1,
    alignItems: 'center',
  },
  login: {
    backgroundColor: '#fff',
    padding:30,
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:30
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
});
