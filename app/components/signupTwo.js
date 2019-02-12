import React from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import {Picker} from 'native-base'
import DatePicker from 'react-native-datepicker'
import {MaterialCommunityIcons, FontAwesome, MaterialIcons, Entypo} from '@expo/vector-icons'
import SwitchSelector from "react-native-switch-selector";

const Item = Picker.Item

export default class SignUpTwo extends React.Component {
  state = {
    email: '',
    photo: '',
    gender: '',
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleNickname = (text) => {
    this.setState({ nickname: text })
  }
  nextPage = () => {
    this.props.navigation.navigate('SignUpPhoto')
  }
  render () {
    return (
      <View>
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
        <View>
          <Text style={styles.text}>Gender</Text>
          <View>
            <SwitchSelector
              style={{alignItems:'center'}}
              initial={0}
              onPress={console.log(this.state.gender)} 
              textColor='#adb5bd'
              selectedColor='white'
              buttonColor='#206DDF'
              options={[
                  { label: "Female", value: "female" }, 
                  { label: "Male", value: "male"}
              ]}
            />
          </View>
        </View>     
        <View style={{margin:0}}> 
          <TouchableHighlight 
            style={styles.nextButton}
            onPress={this.props.onPress}>
            <View style={styles.nextButtoncontainer}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>  
    )  
  }
}

const styles = StyleSheet.create({
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
    flex:1,
    height: 40,
    width: 290,
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
    fontSize:35,
    marginLeft:15 
  },
  text: {
    color : '#adb5bd',
  } 
})