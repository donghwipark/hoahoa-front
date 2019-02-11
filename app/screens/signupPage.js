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
import {MaterialCommunityIcons, FontAwesome, Entypo} from '@expo/vector-icons'
import SignUp from '../components/signup'

export default class SignUpPage extends React.Component {
  state = {
    email: '',
    password: '',
    nickname: '',
  }
  render () {
    return (
      <View> 
        <SignUp/>
      </View>  
    )  
  }
}

const styles = StyleSheet.create({
 
})