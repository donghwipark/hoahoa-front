import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
} from 'react-native';
import SignUpButton from '../components/signUpButton';
import SignInButton from '../components/signInButton'

export default class Start extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{width:100, height:100, marginTop:130}}
          source={require('../images/homeIcon.png')}
        />
        <Image 
          style={{width:250, height:50, marginTop:30, marginBottom: 20}}
          source={require('../images/hoahoa.png')}
        />
        <Text style={{fontSize:20, marginBottom: 140, color:'grey'}}>find your friend</Text>        
        <View style={styles.facebookButton} >
          <SignUpButton onPress={() => {
            this.props.navigation.navigate('SignUp')
          }}/>
        </View>
        <View style={styles.facebookButton} >
          <SignInButton onPress={() => {
            this.props.navigation.navigate('Login')
          }} />
        </View> 
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    alignItems: 'center',
  }
});
