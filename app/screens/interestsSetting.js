import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
} from 'react-native';
import BubbleSelection from '../components/bubbleSelection'
export default class InterestsSetting extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upContainer}>
          <Text style={styles.text}>What are your interests?</Text>
          <Text style={styles.underText}>find your interest keywords</Text>
        </View>       
        <BubbleSelection/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  upContainer: {
    backgroundColor:"#206DDF",
    alignItems: 'center',
    width:'100%',
    height:'40%',
  },
  text:{
    color:'white',
    fontSize:30,
    top:'30%',
    fontWeight:'bold',
    marginBottom:5
  },
  underText:{
    color:'#868e96',
    fontSize:17,
    top:'25%',
  }
});
