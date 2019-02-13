import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
} from 'react-native';

export default class PrivateDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Private Details</Text>
       
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
