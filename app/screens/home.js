
import React, {Component} from 'react'
import {
  View, 
  ScrollView, 
  Image, 
  Text,
  StyleSheet
} from 'react-native'
import Card from '../components/card'
import HomeMatchesButton from '../components/homeMatchesButton';
import HomeSettingButton from '../components/homeSettingButton';
import HomeButton from '../components/homeButton';
import SelectScrollView from '../components/interestScrollView'
import { FontAwesome } from '@expo/vector-icons'

export default class App extends Component {
  state = {
    profileIndex: 0,
    userInfo: null,     
    interests:[],
    photos:[],
    profiles:[]  
  }
  nextCard = (swipedRight, filterMessage) => {
    console.log('On home',filterMessage)
    this.setState({profileIndex: this.state.profileIndex + 1})
    if (swipedRight) {
      // here put functino when scroll to the right
      console.log('liked')
    } else {
      console.log('skip')
      // here put functino when scroll to the left
    }
  }

  selectionMove = (value) => {
    this.setState({ gender: value })
  }

  getUserInfo = () => {
    const request = async () => {
      let getProfiles = []
      const response = await fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users/")
      const json = await response.json()
        console.log(json)
        for (let i = json.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
          [json[i], json[j]] = [json[j], json[i]]; // swap elements
        }
        console.log(json)        
        json.map((el) => {
        if(el.email !== this.props.navigation.state.params){
          getProfiles.push(el)
        } else {
          this.setState({ userInfo : el})
        }
      })
      this.setState({profiles : getProfiles})
    }
    request()
  }

  componentDidMount () {
    this.getUserInfo()
  }

  render() {
    const { profileIndex, profiles } = this.state
    const listOfInterests = ['Environment', "Music", "Business", "Fortune", "Personality", "Knowledge", "Exercise", "Appearance"]
    const interestColors = ['greenyellow', 'orange', '#f06595', '#ff6b6b', '#cc5de8', '#339af0', '#fcc419', '#20c997']
    return (
      <View style={{flex: 1, flexDirection:"column", alignItems:'stretch'}}>
        <View style={{flex: 2, flexDirection:"row", alignItems:'stretch', justifyContent:'space-between', marginBottom:10}}>
          <HomeSettingButton onPress={ () => {this.props.navigation.navigate('Profile', { userInfo : this.state.userInfo})}}/>
          <HomeButton />          
          <HomeMatchesButton onPress={ () => {this.props.navigation.navigate('Matches', /*{need to push user id to get the information about login user to get the Mathches info}*/)}}/>
        </View>
        <View style={{flex:2, backgroundColor:'white', flexDirection:"row", padding:6}}>
          <ScrollView horizontal={true}>
            {listOfInterests.map((el, i) => {
              return (
                <SelectScrollView
                  key={i}
                  interest = {el}
                  color = {interestColors[i]}
                />
              )
            })}
          </ScrollView> 
        </View>
        <View style={{flex:0.5}}>        
          <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
            <View style={{flexDirection:"row", marginLeft:10}}>
              <FontAwesome name="arrow-left" size={20} color={'#4dabf7'}/>
              <Text style={styles.text}>SKIP</Text>
            </View>              
            <View style={{flexDirection:"row", marginRight:10}}>
              <Text style={styles.text}>LIKE</Text>
              <FontAwesome name="arrow-right" size={20} color={'#e64980'}/>
            </View>
          </View>                 
        </View>
        <View style={{flex: 11}}>
            {
              
              profiles.slice(profileIndex, profileIndex + 20).reverse().map((profile) => {
            return (
              <Card
                key={profile.id}
                profile={profile}
                onSwipeOff={this.nextCard}
              />
            )})}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color:"#adb5bd",
    fontWeight:"bold",
    marginLeft: 10,
    marginRight: 10
  } 
})