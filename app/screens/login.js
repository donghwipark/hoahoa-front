import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
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
      <View>
        <Image 
          style={{width:400, height:200}}
          source={require('../images/icon.png')}
        />
        <View style={styles.login}>
          <SignIn onPress={this.login}/>
        </View>
        <Text>Or login with</Text>
        <View style={styles.facebookButton} >
          <FacebookButton onPress={this.login} />
        </View>
        <View style={styles.kakaotalkButton}>
          <KakaotalkButton onPress={this.login} />
        </View>       
        <Text style={styles.text}>Don't have any account?</Text>
        <View style={styles.facebookButton} >
          <SignUpButton onPress={this.signUp} />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flex: 1,
    alignItems: 'center',
  },
  login: {
    backgroundColor: '#fff',
    //margin: 10,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 0,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',

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
