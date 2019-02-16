import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Switch,
   Slider, 
   Image
} from 'react-native';
import FilteringSetting from '../components/filteringSetting'
import { LinearGradient } from 'expo';

export default class Setting extends React.Component {
  state = {
    ageRangeValues: [19, 24],
    distanceValue: [5],
    showMen: false,
    showWomen: false,
  }

  render() {
    //const {first_name, work, id} = this.props.user
    //const bio = (work && work[0] && work[0].position) ? work[0].position.name : null
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
        <Text style={{fontSize:30, color:'#fff', marginBottom:30}} >Setting</Text>
        <FilteringSetting />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
    alignItems: 'center',
  },
  profile: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  label: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:20,
    marginRight:20,
  },
  switch: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:20,
  },
})