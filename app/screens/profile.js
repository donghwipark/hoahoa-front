import React from 'react';
import {
   Image,
   PixelRatio,
   StyleSheet,
   Text,
   View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

export default class Profile extends React.Component {
  componentDidMount () {
    // TODO : need to get the functions to get user information before rending from the props
  }
  render() {
    const imageSize = PixelRatio.getPixelSizeForLayoutSize(50)
    const image = this.props.navigation.state.params.userInfo.pictures[0].picture_address
    const nickname = this.props.navigation.state.params.userInfo.nickname
    const { id } = this.props.navigation.state.params.userInfo
    return (
      <View style={{flex:1}}>  
        <View style={styles.container}>
          <LinearGradient
            colors={['#4dabf7', '#206DDF', '#1864ab']}
            style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'#206DDF'}}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
          </LinearGradient>
          <View style={styles.profile}>
            <View>
              <Image
                source={{uri:image}}
                style={{width:imageSize, height:imageSize, borderRadius:imageSize / 2}}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={{fontSize:30, color:'white', padding:10}}>{nickname}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{flex:1, flexDirection:'row'}}>
            <Button
              onPress={ 
                () => { this.props.navigation.navigate('Setting') }
              }
              title="Hoa?Hoa! Setting"
              icon={{
                name: 'user',
                type: 'font-awesome',
                size: 20,
                color: 'grey',
              }}
              iconLeft
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700', color:'grey' }}
              buttonStyle={{
                backgroundColor:'#fff',
                borderRadius: 10,
                shadowColor: 'grey',
                shadowOpacity: 0.3,
                shadowOffset: { height: 2, width: 0 },
                height:60                
              }}
              containerStyle={{ width: '80%' }}
              />
          </View>
          <View style={{flex:1, flexDirection:'row'}}>
            <Button
              onPress={ 
                () => { this.props.navigation.navigate('PrivateDetails') }
              }
              title="Private Details"
              icon={{
                name: 'pencil',
                type: 'font-awesome',
                size: 20,
                color: 'grey',
              }}
              iconLeft
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700', color:'grey' }}
              buttonStyle={{
                backgroundColor:'#fff',
                borderRadius: 10,
                shadowColor: 'grey',
                shadowOpacity: 0.3,
                shadowOffset: { height: 2, width: 0 },
                height:60                
              }}
              containerStyle={{ width: '80%' }}
              />
          </View>
          <View style={{flex:1, flexDirection:'row'}}>
            <Button
              onPress={ () => { this.props.navigation.navigate('InterestsSetting', id)} }
              title="Interests Setting"
              icon={{
                name: 'heart',
                type: 'font-awesome',
                size: 20,
                color: 'grey',
              }}
              style={{ color:'grey' }}
              iconLeft
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700', color:'grey' }}
              buttonStyle={{
                backgroundColor:'#fff',
                borderRadius: 10,
                shadowColor: 'grey',
                shadowOpacity: 0.3,
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
    flex:9,
    backgroundColor:'#206DDF',
    marginBottom:40
  },
  bottomContainer: {
    padding:40,
    flex:10,
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
    marginTop:70,
    alignItems:'center',
    justifyContent:'center',
  },
  profileInfo: {
    flexDirection:'row',  
    alignItems:'center',
    justifyContent:'center',
  },
})