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

export default class Login extends React.Component {
  login = () => {
    this.props.navigation.navigate('Home')
  }


  render() {
    return (
      <View>
        <Image 
          style={{width:400, height:200}}
          source={require('../images/icon.png')}
        />
        <View style={styles.login}>
          <SignIn/>
        </View>
        <View style={styles.facebookButton} >
          <FacebookButton onPress={this.login} />
        </View>
        <View style={styles.kakaotalkButton}>
          <KakaotalkButton onPress={this.login} />
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
    margin: 10,
    marginTop: 100,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    justifyContent:'center' , 
    alignItems: 'center',

  },
  facebookButton: {
    alignItems: 'center',
  },
  kakaotalkButton:{
    alignItems: 'center',
  }
});
