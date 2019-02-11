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
        <Image 
          style={{width:100, height:80, backgroundColor:'white'}}
          source={require('../images/homeIcon.png')}
        />
        <Text>Sign In</Text>
        <View style={styles.login}>
          <SignIn onPress={this.login}/>
        </View>
        <View style={styles.facebookButton} >
          <FacebookButton onPress={this.login} />
        </View>
        <View style={styles.kakaotalkButton}>
          <KakaotalkButton onPress={this.login} />
        </View>
        <View>
          <Text>Don't have an account?</Text>
            <TouchableHighlight onPress={this.signUp}>        
              <View>
                <Text style={{}}>Create Now</Text>
              </View>
            </TouchableHighlight>       
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
    padding:40,

    borderWidth: 0.5,
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
