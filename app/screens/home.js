
import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Card from '../components/card'
import HomeMatchesButton from '../components/homeMatchesButton';
import HomeSettingButton from '../components/homeSettingButton';
import HomeButton from '../components/homeButton';
import SelectScrollView from '../components/interestScrollView'

export default class App extends Component {
  state = {
    profileIndex: 0,  
    gender: '',
    email: '',
    age:'',
    nickname:'',
    interests:[],
    photos:[],
    profiles:[]  
  }
  nextCard = () => {
    this.setState({profileIndex: this.state.profileIndex + 1})
  }


  selectionMove = (value) => {
    this.setState({ gender: value })
  }

  getUserInfo = () => {
    const request = async () => {
      let getProfiles = []
      const response = await fetch("http://ec2-18-217-132-110.us-east-2.compute.amazonaws.com:3005/api/users/")
      const json = await response.json()
      json.map((el) => { getProfiles.push(el)})
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
    return (
      <View style={{flex: 1, flexDirection:"column", alignItems:'stretch'}}>
        <View style={{flex: 2, flexDirection:"row", alignItems:'stretch', justifyContent:'space-between', marginBottom:10}}>
          <HomeSettingButton onPress={ () => {this.props.navigation.navigate('Profile')}}/>
          <HomeButton />          
          <HomeMatchesButton onPress={ () => {this.props.navigation.navigate('Matches')}}/>
        </View>
        <View style={{flex:2.5, backgroundColor:'#206DDF', flexDirection:"row"}}>
            {listOfInterests.map((el, i) => {
              return (
                <SelectScrollView
                  key={i}
                  interest = {el}
                />
              )
            })}
        </View> 
        <View style={{flex: 10}}>
            {profiles.slice(profileIndex, profileIndex + 20).reverse().map((profile) => {
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

