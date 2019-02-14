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
        <View style={styles.bubble}>
          <BubbleSelection />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
  },
  upContainer: {
    position:'relative',
    backgroundColor:"#206DDF",
    alignItems: 'center',
    width:'100%',
    height:200,
    marginBottom:220,
  },
  text:{
    color:'white',
    fontSize:30,
    top:'30%',
    fontWeight:'bold',
    marginBottom:10
  },
  underText:{
    color:'#868e96',
    fontSize:17,
    top:'25%',
  },
  bubble:{
    position:'relative',
    marginBottom:5,
    marginTop:5,
    padding:15
  }
});
