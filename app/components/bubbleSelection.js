import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Animated,
   TouchableWithoutFeedback,
   Easing,
} from 'react-native';

export default class BubbleSelection extends React.Component {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
  }

  checkInterestsLength (interests) {
    if( interests.length > 2 ) {
      alert('You can only choose three interests')
      return false
    } else {
      return true
    }
  }

  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  render() {
    console.log(this.props)
    const { interests } = this.props 
    const movingMarginOne = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-200, -130, -200]
    }) 
    const movingMarginTwo = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [110, 0, -200, 0, 110]
    })
    const movingThree = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [-150, 0, 100, 0, -150]
    }) 
    const movingMarginFour = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [-200, -100, 100, -100, -200]
    })
    const movingFive = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [150, 100, 0, 100, 150]
    })
    const movingSix = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-200, 100, -200]
    }) 
    const movingMarginSeven = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-20, 40, -20]
    })
    const movingEight = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-200, 100, -200]
    })
    return (
      <View style={styles.bubbles}>
        <View>
          <Animated.View style={{
              marginTop:movingMarginOne,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'greenyellow',
              borderRadius: 100,
              position:'absolute',
              width: 100,
              height: 100,
              }}>
            <TouchableWithoutFeedback 
              onPress={
                ()=>{
                  this.checkInterestsLength(interests) && interests.push('Exercise')
                  console.log(interests)
            }}>
              <Text style={styles.buttonText}>Exercise</Text>
            </TouchableWithoutFeedback>        
          </Animated.View>
        </View>           
        <View>
          <Animated.View style={{
              margin: movingMarginTwo,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'orange',
              borderRadius: 100,
              position:'absolute',
              width: 80,
              height: 80,
              }}>
            <TouchableWithoutFeedback 
              onPress={
                ()=>{
                  this.checkInterestsLength(interests) && interests.push('Music')
                  console.log(interests)}
              }>
              <Text style={styles.buttonText}>Music</Text>
            </TouchableWithoutFeedback>        
          </Animated.View>
        </View>
        <View>
          <Animated.View style={{
              marginLeft: movingThree,
              marginTop:-100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f06595',
              borderRadius: 100,
              position:'absolute',
              width: 120,
              height: 120,
              }}>
            <TouchableWithoutFeedback 
              onPress={
                ()=>{
                  this.checkInterestsLength(interests) && interests.push('Appearance')
                  console.log(interests)}
              }>
              <Text style={styles.buttonText}>Appearance</Text>
            </TouchableWithoutFeedback>        
          </Animated.View>
        </View>
        <View>
          <Animated.View style={{
              margin:movingMarginFour,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ff6b6b',
              borderRadius: 100,
              position:'absolute',
              width: 120,
              height: 120,
              }}>
            <TouchableWithoutFeedback 
              onPress={
                ()=>{
                  this.checkInterestsLength(interests) && interests.push('Knowledge')
                  console.log(interests)}
              }>
              <Text style={styles.buttonText}>Knowledge</Text>
            </TouchableWithoutFeedback>        
          </Animated.View>
        </View>
        <View>
          <Animated.View style={{
              marginTop:movingFive,
              marginLeft:-100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#cc5de8',
              borderRadius: 100,
              position:'absolute',
              width: 100,
              height: 100,
              }}>
            <TouchableWithoutFeedback 
              onPress={
                ()=>{
                  this.checkInterestsLength(interests) && interests.push('Fortune')
                  console.log(interests)}
              }>
              <Text style={styles.buttonText}>Fortune</Text>
            </TouchableWithoutFeedback>        
          </Animated.View>
        </View>
      <View>
        <Animated.View style={{
            marginTop:movingSix,
            marginLeft:-200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#339af0',
            position:'absolute',
            borderRadius: 100,
            width: 120,
            height: 120,
            }}>
          <TouchableWithoutFeedback 
              onPress={
                ()=>{
                  this.checkInterestsLength(interests) && interests.push('Environment')
                  console.log(interests)}
              }>
              <Text style={styles.buttonText}>Environment</Text>
          </TouchableWithoutFeedback>        
        </Animated.View>
      </View>
      <View>
          <Animated.View style={{
              marginLeft: movingMarginSeven,
              marginTop:100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              position:'absolute',
              width: 110,
              height: 110,
              backgroundColor: '#fcc419'}}>
            <TouchableWithoutFeedback 
              onPress={
                ()=>{
                  this.checkInterestsLength(interests) && interests.push('Personality')
                  console.log(interests)}
              }>
              <Text style={styles.buttonText}>Personality</Text>
            </TouchableWithoutFeedback>        
          </Animated.View>
        </View>
        <View>
          <Animated.View style={{
              marginLeft:movingEight,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#20c997',
              position:'absolute',
              borderRadius: 100,
              width: 100,
              height: 100,
              margin:10,
              }}>
            <TouchableWithoutFeedback 
              onPress={
                ()=>{
                  this.checkInterestsLength(interests) && interests.push('Business')
                  console.log(interests)}
              }>
              <Text style={styles.buttonText}>Business</Text>
            </TouchableWithoutFeedback>        
          </Animated.View>
        </View>  
      </View>
    )    
  }
}

const styles = StyleSheet.create({
  button: {
      padding: 24,
      backgroundColor:'red'
    },
  bubbles:{
    margin:10
  },  
  buttonText: {
      fontSize: 20,
      color: 'white',
      padding:3,
    }
})



