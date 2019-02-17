import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
} from 'react-native';
import { LinearGradient } from 'expo'

export default class Matches extends React.Component {
  state = {
    matches : []
  }
  componentDidMount () {
    // need to put fetch function here to get the matches information
    // getUserInfo = () => {
    //   const request = async () => {
    //     let getMatches = []
    //     const response = await fetch(`http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users/match/${id}`)
    //     const json = await response.json()
    //     json.map((el) => { getMatches.push(el) })
    //     this.setState({matches : getMatches})
    //   }
    //   request()
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#4dabf7', '#206DDF', '#1864ab']}
          style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'#206DDF'}}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
        </LinearGradient> 
        <Image 
          style={{width:100, height:100, backgroundColor:'white', borderRadius: 10, marginTop:60}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Matches</Text>
        <View>        
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:"#206DDF",
    alignItems: 'center',
  },
  matches: {
    backgroundColor: '#fff',
    padding:45,
    borderRadius: 10, 
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent:'center' , 
    alignItems: 'center',
    marginBottom:15
  },
});
