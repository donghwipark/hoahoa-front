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

// will seperately add information about birthday, gender, location  

export default class SignupAddInfo extends React.Component {
  state = {
    birthday: '',
    gender: '',
    location: '',
  }
  handleBirthday = (text) => {
    this.setState({ birthday: text })
  }
  handlePassword = (text) => {
    this.setState({ gender: text })
  }
  handleNickname = (text) => {
    this.setState({ location: text })
  }
  render () {
    return (
      <View style={{flex:1, flexDirection:"column", margin:10}}>
        <View>
          <View style={styles.buttoncontainer}>
            <FontAwesome name="birthday-cake" size={20} color={'black'}/>  
            <TextInput style = {styles.input}
              placeholder='    Birthday'
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>  
        </View>
        <View>
          <View style={styles.buttoncontainer}>
            <MaterialIcons name="location-city" size={20} color={'black'}/>  
            <TextInput style = {styles.input}
              placeholder='    Location city'
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>  
        </View>
        <View>
          <View style={styles.buttoncontainer}>
            <MaterialCommunityIcons name="human-male-female" size={20} color={'black'}/>  
            <TextInput style = {styles.input}
              placeholder='    Gender'
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>  
        </View> 
        <TouchableHighlight style={styles.buttoncontainer} onPress={this.signIn}>        
          <View style={styles.loginButtoncontainer}>
            <FontAwesome name="sign-in" size={20} color={'#495057'}/>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableHighlight>
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