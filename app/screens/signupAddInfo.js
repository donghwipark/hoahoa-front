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
import DatePicker from 'react-native-datepicker'
import SwitchSelector from "react-native-switch-selector";

import {MaterialCommunityIcons, FontAwesome, MaterialIcons} from '@expo/vector-icons'
import SignUpTwo from '../components/signupTwo'
// will seperately add information about birthday, gender, location  

export default class SignUpAddInfo extends React.Component {
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
      <View style={styles.container}>
        <View style={{position:'absolute', width:'100%', height:'50%', backgroundColor:'#206DDF'}}></View>
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Sign Up</Text>
        <View style={styles.signin}>
          <View>
            <Text style={styles.text}>Birthday</Text>
            <View style={styles.datecontainer}>
              <DatePicker style = {styles.input}
                minDate="1950-05-01"
                maxDate="2000-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(date) => {console.log(date)}}
                />
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>Gender</Text>
            <View>
              <SwitchSelector
                style={{alignItems:'center', marginBottom:35}}
                initial={0}
                onPress={console.log(this.state.gender)} 
                textColor='#adb5bd'
                selectedColor='white'
                buttonColor='#206DDF'
                options={[
                    { label: "Female", value: "woman" }, 
                    { label: "Male", value: "man"}
                ]}
              />
            </View>
          </View>     
          <View style={{margin:0}}> 
            <TouchableHighlight 
              style={styles.nextButton}
              onPress={() => {
                this.props.navigation.navigate('SignUpPhoto')
              }}>
              <View style={styles.nextButtoncontainer}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableHighlight>
          </View>
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
    backgroundColor: '#fff',
    padding: 45,
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:20
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
  },
  datecontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  buttoncontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:'#adb5bd',
    marginBottom: 20,
  },
  input:{
    height: 40,
    width: 250,
    marginBottom:50
  },
  nextButton: {
    height:50,
    width:250,
    backgroundColor:"#206DDF",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',  
    borderRadius: 50, 
    marginBottom: 5, 
  },
  nextButtoncontainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : 'white',
    fontSize:30,
    marginLeft:15 
  },
  text: {
    color : '#adb5bd',
    marginBottom: 10
  } 
})