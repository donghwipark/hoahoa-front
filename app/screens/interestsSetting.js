import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableHighlight
} from 'react-native';
import BubbleSelection from '../components/bubbleSelection'
import { LinearGradient } from 'expo';

export default class InterestsSetting extends React.Component {
  state = {
    interests:[]
  }
  
  sendUserInterest (id) {
    console.log(id)
    return fetch(`http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users/${id}/interest`,{
      method:'POST',
      headers: {
          
          "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.interests)  
    })
      .then((response) => response.json())
      .then((response) => {
        if(response) {
          alert('Sign up success, Please Sign in')
          this.props.navigation.navigate('Login')
        }
      })
      .catch((error) => {
        console.error(error)  
    })
  }

  render() {
    const id = this.props.navigation.state.params
    console.log(id)
    return (
      <View style={styles.container}>
        <View style={styles.upContainer}>
          <LinearGradient
            colors={['#4dabf7', '#206DDF', '#1864ab']}
            style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'#206DDF'}}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
          </LinearGradient>  
          <Text style={styles.text}>What are your interests?</Text>
          <Text style={styles.underText}>find your interest keywords</Text>
          <View style={{position:'relative', justifyContent:'center', top:'45%'}}> 
            <TouchableHighlight 
              style={styles.nextButton}
              onPress={() => {this.sendUserInterest(id)}}>
              <View style={styles.nextButtoncontainer}>
                <Text style={styles.buttonText}>Apply</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>       
        <View style={styles.bubble}>
          <BubbleSelection interests={this.state.interests} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
  },
  upContainer: {
    position:'relative',
    backgroundColor:"#206DDF",
    alignItems: 'center',
    width:'100%',
    height:200,
    marginBottom:220,
  },
  text:{
    color:'white',
    fontSize:30,
    top:'30%',
    fontWeight:'bold',
    marginBottom:10
  },
  underText:{
    color:'#868e96',
    fontSize:17,
    top:'25%',
  },
  bubble:{
    position:'relative',
    marginBottom:5,
    marginTop:5,
    padding:15
  },
  nextButton: {
    height:50,
    width:200,
    position:"absolute",
    backgroundColor:"white",
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
    color:'grey',
    fontSize:30,
    fontWeight:"bold",
  }
});
