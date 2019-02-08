
import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import Card from '../components/card'
import HomeMatchesButton from '../components/homeMatchesButton';
import HomeSettingButton from '../components/homeSettingButton';
import HomeButton from '../components/homeButton';

export default class App extends Component {
  state = {
    profileIndex: 0,  
  }

  nextCard = () => {
    this.setState({profileIndex: this.state.profileIndex + 1})
  }

  moveSetting = () => {
    this.props.navigation.navigate('Setting')
  }

  moveMatches = () => {
    this.props.navigation.navigate('Matches')
  }

  render() {
    const {profileIndex} = this.state
    return (
      <View>
        <View style={{flex: 1, flexDirection:"row", justifyContent: 'space-between'}}>
          <HomeSettingButton onPress={this.moveSetting}/>
          <HomeButton />          
          <HomeMatchesButton onPress={this.moveMatches}/>
        </View>
        <View>
            {profiles.slice(profileIndex, profileIndex + 6).reverse().map((profile) => {
            return (
                <Card
                key={profile.id}
                profile={profile}
                onSwipeOff={this.nextCard}
                />
            )
            })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navigation :{

  }, 
  setting : {
  },
  mathces: {
    backgroundColor: 'lightgray'
  }, 
})

const profiles = [
  {
    id: '259389830744794',
    name: 'Candice',
    birthday: '10/18/1986',
    bio: 'Supermodel',
  },
  {
    id: '720115413',
    name: 'Alessandra',
    birthday: '1/10/1989',
    bio: 'Dancer',
  },
  {
    id: '169571172540',
    name: 'Miranda',
    birthday: '12/12/1983',
    bio: 'Doctor',
  },
  {
    id: '1476279359358140',
    name: 'Alissa',
    birthday: '2/11/1990',
    bio: 'Comedian',
  },
  {
    id: '912478262117011',
    name: 'Rosie',
    birthday: '9/4/1989',
    bio: 'Artist',
  },
  {
    id: '173567062703796',
    name: 'Kendall',
    birthday: '8/17/1992',
    bio: 'Truck Driver',
  },
]