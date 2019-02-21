import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
} from 'react-native';
import PrivateDetailChange from '../components/privateDetailChange'
import { LinearGradient } from 'expo';

export default class PrivateDetails extends React.Component {
  onDeleteNavigation () {
    () => {this.props.navigation.navigate('Start')}
  }

  render() {
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
          style={{width:100, height:100, backgroundColor:'white', marginBottom:10,borderRadius: 10, top:'10%'}}
          source={require('../images/homeIcon.png')}
        />
        <Text style={{fontSize:30, color:'#fff', marginBottom:30, top:'10%'}}>Private Setting</Text>
        <View style={{top:'10%'}}>        
          <PrivateDetailChange onDelete={ () => {this.props.navigation.navigate('Start')} } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
    alignItems: 'center',
  },

});
