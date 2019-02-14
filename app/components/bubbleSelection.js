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
        duration: 5000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }


  render() {
    const marginLeft = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 200]
    })
    const marginTop = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-200, 200]
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
          <View>
            <Animated.View style={{
                marginLeft,
                marginTop,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'greenyellow',
                borderRadius: 100,
                width: 50,
                height: 50,
                backgroundColor: 'blue'}}>
              <TouchableWithoutFeedback 
                onPress={()=>(console.log(1))}>
                <Text style={styles.buttonText}>1</Text>
              </TouchableWithoutFeedback>        
            </Animated.View>
          </View>           
          <View>
            <Animated.View style={{
                marginLeft,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'greenyellow',
                borderRadius: 100,
                width: 50,
                height: 50,
                backgroundColor: 'orange'}}>
              <TouchableWithoutFeedback 
                onPress={()=>(console.log(2))}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableWithoutFeedback>        
            </Animated.View>
          </View>
          <View>
            <Animated.View style={{
                movingMargin,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
                borderRadius: 100,
                width: 50,
                height: 50,
                backgroundColor: 'green'}}>
              <TouchableWithoutFeedback 
                onPress={()=>(console.log(3))}>
                <Text style={styles.buttonText}>3</Text>
              </TouchableWithoutFeedback>        
            </Animated.View>
          </View>
          <View>
            <Animated.View style={{
                marginLeft,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
                borderRadius: 100,
                width: 50,
                height: 50,
                backgroundColor: 'green'}}>
              <TouchableWithoutFeedback 
                onPress={()=>(console.log(4))}>
                <Text style={styles.buttonText}>4</Text>
              </TouchableWithoutFeedback>        
            </Animated.View>
          </View>
          <View>
            <Animated.View style={{
                marginLeft,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
                borderRadius: 100,
                width: 50,
                height: 50,
                backgroundColor: 'green'}}>
              <TouchableWithoutFeedback 
                onPress={()=>(console.log(5))}>
                <Text style={styles.buttonText}>5</Text>
              </TouchableWithoutFeedback>        
            </Animated.View>
          </View>
          <View>
            <Animated.View style={{
                marginLeft,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
                borderRadius: 100,
                width: 50,
                height: 50,
                backgroundColor: 'green'}}>
              <TouchableWithoutFeedback 
                onPress={()=>(console.log(6))}>
                <Text style={styles.buttonText}>6</Text>
              </TouchableWithoutFeedback>        
            </Animated.View>
          </View>
          <View>
            <Animated.View style={{
                marginLeft,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
                borderRadius: 100,
                width: 50,
                height: 50,
                backgroundColor: 'green'}}>
              <TouchableWithoutFeedback 
                onPress={()=>(console.log(7))}>
                <Text style={styles.buttonText}>7</Text>
              </TouchableWithoutFeedback>        
            </Animated.View>
          </View>
          <View>
            <Animated.View style={{
                marginLeft,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
                borderRadius: 100,
                width: 50,
                height: 50,
                margin:10,
                backgroundColor: 'green'}}>
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
      color: 'white',
      padding:20,
    }
})