import React from "react"
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import {MaterialCommunityIcons, FontAwesome, MaterialIcons} from '@expo/vector-icons'
import SignUpButton from '../components/signUpButton'
//will add bubble functions to select 8 keywords

export default class SignUpPhotoAdd extends React.Component {
  state = {
    aboutme: ''
  }

  handleAboutMeInfo = (text) => {
    this.setState({ aboutme: text })
  }

  render () {
    return (
      <View style={{flex:1, flexDirection:"column", margin:10}}>
        <View>
          <View style={styles.buttoncontainer}>
            <FontAwesome name="heart" size={20} color={'black'}/>  
            <TextInput style = {styles.input}
              placeholder='    About me'
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>  
        </View>
        <TouchableHighlight style={styles.buttoncontainer} onPress={this.signIn}>        
          <View style={styles.loginButtoncontainer}>
            <FontAwesome name="sign-in" size={20} color={'#495057'}/>
            <Text style={styles.buttonText}>Add photo</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.facebookButton} >
          <SignUpButton onPress={this.signUp} />
        </View>
      </View>  
    )  
  }
}

const styles = StyleSheet.create({
  buttoncontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    height: 40,
    width: 200,
    backgroundColor: '#ced4da',
    marginBottom: 10,
    borderRadius: 50, 
  },
  loginButton: {
    height:40,
    width:220,
    backgroundColor:"#74c0fc",
    flexDirection:'column',
    alignItems:'center',
    borderRadius: 50, 
    marginBottom: 5, 
    justifyContent:'center'  
  },
  loginButtoncontainer: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : '#495057',
    fontSize:15,
    marginLeft:15 
  } 
})