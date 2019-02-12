import React from "react"
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import {MaterialCommunityIcons, FontAwesome, MaterialIcons} from '@expo/vector-icons'
import UploadPhoto from '../components/uploadPhoto'
// will seperately add information about birthday, gender, location  

export default class SignUpPhoto extends React.Component {
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
  nextPage = () => {
    this.props.navigation.navigate('Home')
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={{position:'absolute', width:'100%', height:'50%', backgroundColor:'#206DDF'}}></View>
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Sign Up</Text>
        <View style={styles.signin}>
          <UploadPhoto onPress={this.nextPage}/>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <Text style={{fontSize:20, color:'grey'}}>Already have an account?</Text>
          <TouchableHighlight onPress={this.signIn}>        
            <View>
              <Text style={{fontWeight:'bold', fontSize:20, color:'#495057'}}> Sign In</Text>
            </View>
          </TouchableHighlight>       
        </View>
      </View>
    )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  signin: {
    width: '83%',
    padding:30,
    backgroundColor:'white',
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:20
  },
  text:{
    alignItems: 'center',
    justifyContent:'center', 
    marginBottom: 15,
    marginTop: 15
  }
})