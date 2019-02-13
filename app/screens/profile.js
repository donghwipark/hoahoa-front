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
import { Button, Icon } from 'react-native-elements';

export default class Profile extends React.Component {
  goBack = () => {}
  hoahoaSettingMove = () => {
    this.props.navigation.navigate('Setting')
  }
  profileDetailsMove = () => {
    this.props.navigation.navigate('PrivateDetails')
  }
  interestingSetting = () => {
    this.props.navigation.navigate('InterestsSetting')
  }
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
        <View style={styles.bottomContainer}>
          <View style={{flex:1, flexDirection:'row'}}>
            <Button
              onPress={this.hoahoaSettingMove}
              title="Hoa?Hoa! Setting"
              icon={{
                name: 'user',
                type: 'font-awesome',
                size: 20,
                color: 'grey',
              }}
              iconLeft
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700', color:'#495057' }}
              buttonStyle={{
                backgroundColor:'#f1f3f5',
                borderRadius: 10,
                shadowColor: 'grey',
                shadowOpacity: 1.0,
                shadowOffset: { height: 2, width: 0 },
                height:60                
              }}
              containerStyle={{ width: '80%' }}
              />
          </View>
          <View style={{flex:1, flexDirection:'row'}}>
            <Button
              onPress={this.profileDetailsMove}
              title="Private Details"
              icon={{
                name: 'pencil',
                type: 'font-awesome',
                size: 20,
                color: 'grey',
              }}
              iconLeft
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700', color:'#495057' }}
              buttonStyle={{
                backgroundColor:'#f1f3f5',
                borderRadius: 10,
                shadowColor: 'grey',
                shadowOpacity: 1.0,
                shadowOffset: { height: 2, width: 0 },
                height:60                
              }}
              containerStyle={{ width: '80%' }}
              />
          </View>
          <View style={{flex:1, flexDirection:'row'}}>
            <Button
              onPress={this.interestingSetting}
              title="Interests Setting"
              icon={{
                name: 'heart',
                type: 'font-awesome',
                size: 20,
                color: 'grey',
              }}
              style={{
                color:'grey'
              }}
              iconLeft
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700', color:'#495057' }}
              buttonStyle={{
                backgroundColor:'#f1f3f5',
                borderRadius: 10,
                shadowColor: 'grey',
                shadowOpacity: 1.0,
                shadowOffset: { height: 2, width: 0 },
                height:60                
              }}
              containerStyle={{ width: '80%' }}
              />
          </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:7,
    backgroundColor:'#206DDF',
  },
  bottomContainer: {
    padding:40,
    flex:8,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center',
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