import React from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import SwitchSelector from "react-native-switch-selector";
// will seperately add information about birthday, gender, location  
import { LinearGradient } from 'expo'

export default class SignUpAddInfo extends React.Component {
  render () {
    return (
      <View style={styles.container}>
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
    flex:1,
    backgroundColor: '#fff',
    width:'90%',
    height:'50%',
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:0,
    padding:20
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
    marginBottom: 5,
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
    marginBottom:10,
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