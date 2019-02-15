import React from "react"
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
// will seperately add information about birthday, gender, location  

export default class SignUpPhoto extends React.Component {
  signUp = () => {
    console.log(this.state.email)
    return fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/signup",{
      method:'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(this.props.navigation.state.params)  
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response) 
      })
      .catch((error) => {
        console.log('Network Error')
        console.error(error)  
    })
  }
  state = {
    image: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/donghwipark.png', 
  }
  
  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    if (!cancelled) this.setState({ image: uri });
  };

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });
    this.setState({ image: uri });
  };

  render () {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={{position:'absolute', width:'100%', height:'50%', backgroundColor:'#206DDF'}}></View>
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Sign Up</Text>
        <View style={styles.signin}>
          
        <View style={styles.containerPhoto}>
        <Text style={styles.text}>Upload your photo</Text>
        <Image style={styles.image} source={{ uri: this.state.image }} />
        <View style={styles.row}>
          <Button onPress={this.selectPicture}>Gallery</Button>
          <Button onPress={this.takePicture}>Camera</Button>
        </View>
        <View style={{margin:0}}> 
          <TouchableHighlight 
            style={styles.nextButton}
            onPress={this.signUp}>
            <View style={styles.nextButtoncontainer}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <Text style={{fontSize:20, color:'grey'}}>Already have an account?</Text>
          <TouchableHighlight onPress={
            () => {this.props.navigation.navigate('Login')}
          }>        
            <View>
              <Text style={{fontWeight:'bold', fontSize:20, color:'#495057'}}> Sign In</Text>
            </View>
          </TouchableHighlight>       
        </View>
      </View>
    )  
  }
}

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttontext}>{children}</Text>
  </TouchableOpacity>
);

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
  text: {
    fontSize: 17,
    color:'#868e96',
    marginBottom:10
  },
  buttontext: {
    fontSize: 15,
    color:'white'
  },
  row: { 
    flexDirection: 'row' 
  },
  image: {
    width: 300,
    height: 300, 
    backgroundColor: 'gray', 
    borderRadius:10 
  },
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: '#206DDF',
    borderRadius: 10
  },
  containerPhoto: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
})