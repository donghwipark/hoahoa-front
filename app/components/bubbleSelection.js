import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   Animated,
   TouchableOpacity,
   TouchableWithoutFeedback,
   Easing
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
    const marginLeft = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 300]
      })
      const opacity = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 1, 0]
      })
      const movingMargin = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 300, 0]
      })
      const textSize = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [18, 32, 18]
      })
      const rotateX = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '180deg', '0deg']
      })
      return (
        <View style={styles.container}>
          <Animated.View
            onPress={()=>(console.log(1))}
            style={{
              marginLeft,
              height: 30,
              width: 40,
              backgroundColor: 'red'}} />
          <Animated.View
            style={{
              opacity,
              marginTop: 10,
              height: 30,
              width: 40,
              backgroundColor: 'blue'}} />
          <Animated.View
            style={{
              marginLeft: movingMargin,
              marginTop: 10,
              height: 30,
              width: 40,
              backgroundColor: 'orange'}} />
          <Animated.Text
            style={{
              fontSize: textSize,
              marginTop: 10,
              color: 'green'}} >
              Animated Text!
          </Animated.Text>
          <View>
            <Animated.View style={styles.tennisBall}>
              <TouchableWithoutFeedback style={styles.button} onPress={()=>(console.log(1))}>
                <Text style={styles.buttonText}>Press</Text>
              </TouchableWithoutFeedback>        
            </Animated.View>
          </View> 
        </View>
    )    
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 150
    },
    tennisBall: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'greenyellow',
        borderRadius: 100,
        width: 100,
        height: 100,
      },
    button: {
        paddingTop: 24,
        paddingBottom: 24,
        backgroundColor:'red'
      },
    buttonText: {
        fontSize: 24,
        color: '#333',
      }
  })