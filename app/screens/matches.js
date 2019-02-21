import React from 'react';
import {
   StyleSheet,
   Text,
   PixelRatio,
   View,
   Image,
   ScrollView
} from 'react-native';
import { LinearGradient } from 'expo'

export default class Matches extends React.Component {
  state = {
    matches : []
  }
  componentDidMount () {
    // need to put fetch function here to get the matches information

  }

  getMatchesInfo = (id) => {
    const request = async () => {
      let getMatches = []
      const response = await fetch(`http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users/match/${id}`)
      const json = await response.json()
      console.log('match info',json)
      json.map((el) => { getMatches.push(el) })
      this.setState({matches : getMatches})
    }
    request()
  }

  render() {
    //console.log('matches',this.props)
    const imageSize = PixelRatio.getPixelSizeForLayoutSize(50)
    const image = this.props.navigation.state.params.userInfo.pictures[0].picture_address
    const nickname = this.props.navigation.state.params.userInfo.nickname
    const { id } = this.props.navigation.state.params.userInfo
    this.getMatchesInfo(id)
    return (
      <View style={styles.container}>
        <View>
          <LinearGradient
            colors={['#4dabf7', '#206DDF', '#1864ab']}
            style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'#206DDF'}}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
          </LinearGradient> 
          <View>
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
        </View>
        <View style={{flex:2, backgroundColor:'white', flexDirection:"row", padding:6}}>
          <ScrollView horizontal={true}>
            {this.state.matches.map((el, i) => {
              // image get from id
              return (
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
              )
            })}
          </ScrollView> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  matches: {
    flex:2,
    backgroundColor: '#fff',
  },
  profile: {
    marginTop:70,
    alignItems:'center',
    justifyContent:'center',
  },
  profileInfo: {
    flexDirection:'row',  
    alignItems:'center',
    justifyContent:'center',
  },
});
