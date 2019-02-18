import React from 'react';
import {
   Image,
   PixelRatio,
   StyleSheet,
   Text,
   View,
} from 'react-native';
import CircleImage from '../components/circleImage'
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

export default class Profile extends React.Component {
  componentDidMount () {
    // need to get the functions to get user information before rending from the props
  }
  render() {
    console.log('userinfo to the setting',this.props.navigation.state.params.userInfo)
    const imageSize = PixelRatio.getPixelSizeForLayoutSize(50)
    const fbImage = 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/donghwipark.png'
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
                  source={{uri:fbImage}}
                  style={{width:imageSize, height:imageSize, borderRadius:imageSize / 2}}
                />
              </View>
              <View style={styles.profileInfo}>
                <Text style={{fontSize:30, color:'white'}}>Donghwi Park</Text>
                <Text style={{fontSize:20, color:'darkgrey'}}> Edit</Text>
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
              onPress={ () => { this.props.navigation.navigate('InterestsSetting')} }
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