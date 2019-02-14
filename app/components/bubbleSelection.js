import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   Animated,
   PanResponder,
   TouchableOpacity,
   TouchableWithoutFeedback,
   Easing,
   LayoutAnimation
} from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class BubbleSelection extends React.Component {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
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
    const movingMarginOne = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [-200, -100 , -50, -100, -200]
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
      outputRange: [200, 100, 0, 100, 200]
    })
    const movingSix = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-200, 100, -200]
    }) 
    const movingEight = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-200, 100, -200]
    })
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [-200, -100, 100, -100, -200]
    })
    const movingMarginTop = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [-200, -100, 0, 100, 150]
    }) 


    const movingMarginSeven = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [100, 80, 50, 70, 100]
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
              onPress={()=>(console.log(1))}>
              <Text style={styles.buttonText}>1</Text>
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
              width: 100,
              height: 100,
              }}>
            <TouchableWithoutFeedback 
              onPress={()=>(console.log(2))}>
              <Text style={styles.buttonText}>2</Text>
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
              width: 100,
              height: 100,
              }}>
            <TouchableWithoutFeedback 
              onPress={()=>(console.log(3))}>
              <Text style={styles.buttonText}>3</Text>
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
              width: 100,
              height: 100,
              }}>
            <TouchableWithoutFeedback 
              onPress={()=>(console.log(4))}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableWithoutFeedback>        
          </Animated.View>
        </View>
        <View>
          <Animated.View style={{
              marginTop:movingFive,
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
              onPress={()=>(console.log(5))}>
              <Text style={styles.buttonText}>5</Text>
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
            width: 100,
            height: 100,
            }}>
          <TouchableWithoutFeedback 
            onPress={()=>(console.log(6))}>
            <Text style={styles.buttonText}>6</Text>
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
              width: 100,
              height: 100,
              backgroundColor: '#fcc419'}}>
            <TouchableWithoutFeedback 
              onPress={()=>(console.log(7))}>
              <Text style={styles.buttonText}>7</Text>
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
              onPress={()=>(console.log(8))}>
              <Text style={styles.buttonText}>8</Text>
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
      fontSize: 24,
      color: 'white',
      padding:20,
    }
})



