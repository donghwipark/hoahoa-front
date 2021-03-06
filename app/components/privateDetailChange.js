import React from "react"
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import {Entypo} from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import AwesomeAlert from "react-native-awesome-alerts"

export default class PrivateDetailChange extends React.Component {
  state = {
    email: '',
    password: '',
    nickname: '',
    showAlert: false
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };


  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleNickname = (text) => {
    this.setState({ nickname: text })
  }
  signUp = () => {
    this.props.navigation.navigate('Home')
  }

  logout () {
    console.log('logout func here')
    const a = this.props.navigation.state.params.params
    return fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/signup",{
      method:'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(a)  
    })
      .then((response) => response.json())
      .then((response) => {
          alert('Sign up success, Please Sign in')
          this.props.navigation.navigate('Login')
      })
      .catch((error) => {
        console.error(error)  
    })
  }

  deleteID = () => {
//   const request = async () => {
//     let getMatches = []
//     const response = await fetch(`http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users/delete/${id}`)
//     const json = await response.json()
//     json.map((el) => { getMatches.push(el) })
//     this.setState({matches : getMatches})
//   }
//   request()
  }

  render () {
    const {showAlert} = this.state;
    const {onDelete } = this.props

    return (
      <View style={styles.changePassword}>       
        <View style={{marginBotom:20}}> 
          <TouchableHighlight 
            style={styles.nextButton}
            onPress={onDelete}>
            <View style={styles.nextButtoncontainer}>
              <LinearGradient
                colors={['#4dabf7', '#206DDF', '#1864ab']}
                style={{ alignItems: 'center', borderRadius: 50, height:50, flexDirection:'row', justifyContent:'center', width:250 }}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.buttonText}>Logout</Text>
              </LinearGradient>  
            </View>
          </TouchableHighlight>
        </View>
        <View > 
          <TouchableHighlight 
            style={styles.nextButton}
            onPress={this.showAlert}>
            <View style={styles.nextButtoncontainer}>
              <LinearGradient
                  colors={['#4dabf7', '#206DDF', '#1864ab']}
                  style={{ alignItems: 'center', borderRadius: 50,    height:50,    flexDirection:'row',
                  justifyContent:'center', width:250, 
                }}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
              >
                <Text style={styles.buttonText}>Delete ID</Text>
              </LinearGradient>  
            </View>          
          </TouchableHighlight>
            <AwesomeAlert
              show={showAlert}
              showProgress={false}
              title="Alert"
              message="Are you sure to delete your ID?"
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={true}
              cancelText="No, cancel"
              confirmText="Yes, delete it"
              confirmButtonColor="#206DDF"
              onCancelPressed={() => {
                this.hideAlert();
                console.log('canceled it')
              }}
              onConfirmPressed={() => {
                this.hideAlert();
                this.deleteID()
                onDelete()
              }}
            />
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
    borderBottomWidth:1,
    borderBottomColor:'#adb5bd',
    marginBottom: 20,
  },
  input:{
    height: 40,
    width: 250,
  },
  nextButton: {
    height:50,
    width:250,
    backgroundColor:"#206DDF",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',  
    borderRadius: 50, 
    marginBottom: 10, 
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
  },
  text: {
    color : '#adb5bd',
    marginBottom:0
  } ,
  changePassword: {
    backgroundColor: '#fff',
    padding:35,
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:15,
    top:'40%'
  },
})