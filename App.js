import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableHighlight,
} from 'react-native';
import FacebookButton from './facebookButton'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{width:400, height:200}}
          source={require('./assets/splash.png')}
        />
        <View style={styles.login}>
          <Text>Sign in</Text>
        </View>
        <FacebookButton/>
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
  },
});
