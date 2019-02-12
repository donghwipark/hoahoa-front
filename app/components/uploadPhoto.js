import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,TouchableHighlight } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

export default class UploadPhoto extends React.Component {
  state = {
    image: 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/donghwipark.png',
  };

  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    if (!cancelled) this.setState({ image: uri });
  };

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    this.setState({ image: uri });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Upload your photo</Text>
        <Image style={styles.image} source={{ uri: this.state.image }} />
        <View style={styles.row}>
          <Button onPress={this.selectPicture}>Gallery</Button>
          <Button onPress={this.takePicture}>Camera</Button>
        </View>
        <View style={{margin:0}}> 
          <TouchableHighlight 
            style={styles.nextButton}
            onPress={this.props.onPress}>
            <View style={styles.nextButtoncontainer}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttontext}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color:'#868e96',
    marginBottom:10
  },
  buttontext: {
    fontSize: 15,
    color:'white'
  },
  row: { flexDirection: 'row' },
  image: { width: 300, height: 300, backgroundColor: 'gray', borderRadius:10 },
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: '#206DDF',
    borderRadius: 10
  },
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    height:50,
    width:250,
    backgroundColor:"#206DDF",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',  
    borderRadius: 50, 
    marginBottom: 5, 
  },
  nextButtoncontainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'  
  },
  buttonText: {
    color : 'white',
    fontSize:30,
  },
});
