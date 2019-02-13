import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Switch,
   Slider,
   Ionicons,
   FontAwesome,
   TouchableHighlight
} from 'react-native';
import CircleImage from '../components/circleImage'

export default class Profile extends React.Component {


  render() {
    return (
      <View style={{flex:1}}>  
        <View style={styles.container}>
            <View style={styles.profile}>
              <CircleImage/>
              <View style={styles.profileInfo}>
                <Text style={{fontSize:30, color:'white'}}>Donghwi Park</Text>
                <Text style={{fontSize:30, color:'darkgrey'}}> Edit</Text>
              </View>
            </View>
        </View>
        <View style={styles.settingContainer}>
           
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#206DDF',
  },
  settingContainer: {
    flex:1,
    backgroundColor:'white',
    height:'50%'
  },    
  image: {
    padding:'#206DDF',
  },
  profile: {
    flex:1,
    marginTop:90,
    alignItems:'center',
    justifyContent:'center',
  },
  profileInfo: {
    flexDirection:'row',  
    alignItems:'center',
    justifyContent:'center',
  },
})


{/* <TouchableHighlight>
<View>  
  <Ionicons name="ios-settings" size={20} color={'white'}/>
  <Text>Hoa?Hoa! Setting</Text>
</View>  
</TouchableHighlight>
<TouchableHighlight>
<View>  
  <FontAwesome name="pen" size={20} color={'white'}/>
  <Text>Private Details</Text>
</View>  
</TouchableHighlight>
<TouchableHighlight>
<View>  
  <FontAwesome name="heart" size={20} color={'white'}/>
  <Text>Interests Setting</Text>
</View>  
</TouchableHighlight> */}