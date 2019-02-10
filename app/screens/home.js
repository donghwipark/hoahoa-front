
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
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
            {profiles.slice(profileIndex, profileIndex + 20).reverse().map((profile) => {
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
    id: '1',
    name: '한혜경',
    birthday: '8/17/1992',
    bio: '개발자',
    profilePhoto: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/hanleader.png'
  },
  {
    id: '2',
    name: '김세준',
    birthday: '8/17/1993',
    bio: '개발자',
    profilePhoto: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/KimSejun.png'
  },
  {
    id: '3',
    name: '박동휘',
    birthday: '8/17/1987',
    bio: '개발자',
    profilePhoto: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/donghwipark.png'
  },
  {
    id: '4',
    name: '강도희',
    birthday: '8/17/1995',
    bio: '대학생',
    profilePhoto: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/1542021060031.jpg'
  },
  {
    id: '5',
    name: '박준홍',
    birthday: '8/17/2000',
    bio: '대학생',
    profilePhoto: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/Screen+Shot+2019-02-09+at+9.45.59+PM.png'
  },
  {
    id: '6',
    name: '김범규',
    birthday: '8/17/2000',
    bio: '대학생',
    profilePhoto: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/Image+from+iOS.jpg'
  },
  {
    id: '7',
    name: '박지혜',
    birthday: '8/17/1993',
    bio: '대학생',
    profilePhoto: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/IMG_3402.JPG'
  },
  {
    id: '8',
    name: '김선재',
    birthday: '8/17/2000',
    bio: '대학생',
    profilePhoto: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/Image+from+iOS+(1).jpg'
  },
]