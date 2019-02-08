import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableHighlight,
} from 'react-native';
import FacebookButton from './facebookButton'
import KakaotalkButton from './kakaotalkButton'


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Image 
          style={{width:400, height:200}}
          source={require('./assets/splash.png')}
        />
        <View style={styles.login}>
          <Text>Sign in</Text>
        </View>
        <View style={styles.facebookButton} >
          <FacebookButton />
        </View>
        <View style={styles.kakaotalkButton}>
          <KakaotalkButton />
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
    backgroundColor: 'white',
    margin: 10,
    marginTop: 150,
    marginBottom: 100,
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
