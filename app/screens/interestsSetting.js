import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
} from 'react-native';

export default class InterestsSetting extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>what are your interests</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"blue",
    alignItems: 'center',
  }
});
