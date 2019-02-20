import React from "react"
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import SwitchSelector from "react-native-switch-selector";
// will seperately add information about birthday, gender, location  
import { LinearGradient } from 'expo'
import { FontAwesome } from '@expo/vector-icons';
import { Keyboard } from 'react-native' 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class SignUpAddInfo extends React.Component {
  handleKeyDown (e) {
    if(e.nativeEvent.key == "Enter"){
      Keyboard.dismiss()
    }
  }

  render () {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <LinearGradient
          colors={['#4dabf7', '#206DDF', '#1864ab']}
          style={{position:'absolute', width:'100%', height:'50%', backgroundColor:'#206DDF'}}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
        </LinearGradient>  
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Sign Up</Text>
        <View style={styles.signin}>
          <View style={styles.input}>
            <Text style={styles.text}>Birthday</Text>
            <View style={styles.datecontainer}>
              <DatePicker style = {styles.input}
                minDate="1900-01-01"
                maxDate="2000-01-01"
                confirmBtnText = "Confirm"
                cancelBtnText = "Cancel"
                onDateChange = {
                  (value) => {
                    let age = moment().diff(value, 'years')
                    this.props.navigation.setParams({ age: age })
                }}
              />
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>Gender</Text>
            <View>
              <SwitchSelector
                style={{alignItems:'center', padding:5}}
                initial={0}
                onPress={
                  
                  (value) => this.props.navigation.setParams({ gender: value })
                } 
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
          <View style={styles.input}>
            <Text style={styles.text}>About me</Text>
              <View style={styles.buttoncontainer}>
                <TextInput 
                  style = {styles.input}
                  maxLength = {20}
                 multiline={true}
                  placeholder='about me'
                  onKeyPress={this.handleKeyDown}
                  onChangeText={(value) => this.props.navigation.setParams({ aboutme: value })}
                />
              <FontAwesome name="info-circle" size={20} color={'#adb5bd'}/>  
            </View>  
          </View>
          <View style={styles.input}> 
            <TouchableHighlight 
              style={styles.nextButton}
              onPress={() => {
                this.props.navigation.navigate('SignUpPhoto', this.props.navigation.state)
            }}>
              <View style={styles.nextButtoncontainer}>
                <LinearGradient
                  colors={['#4dabf7', '#206DDF', '#1864ab']}
                  style={{ alignItems: 'center', borderRadius: 50,    height:50,    flexDirection:'row',
                  justifyContent:'center', width:250
                }}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </LinearGradient>
              </View>
            </TouchableHighlight>
          </View>         
        </View>
      </KeyboardAwareScrollView>
    )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  signin: {
    flex:1,
    backgroundColor: '#fff',
    width:'90%',
    height:'50%',
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom: 80,
    padding:30
  },
  text:{
    alignItems: 'center',
    justifyContent:'center', 
    marginBottom:  5,
    marginTop: 15
  },
  datecontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 5,
  },
  buttoncontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:'#adb5bd',
  },
  input:{
    height: 40,
    width: 250,
    flex:1
  },
  nextButton: {
    height:50,
    width:250,
    backgroundColor:"#206DDF",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',  
    borderRadius: 50, 
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