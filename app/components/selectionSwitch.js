import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'
import SwitchSelector from "react-native-switch-selector";

export default class SelectionButton extends React.Component {
  render () {
    return (        
        <View style={styles.selection}>
        <SwitchSelector
            style={{alignItems:'center', height: '80%'}}
            initial={0}
            onPress={this.props.onPress} 
            textColor='#adb5bd'
            selectedColor='white'
            buttonColor='#206DDF'
            borderColor='#206DDF'
            hasPadding
            options={[
                { value: "Like", imageIcon:require('../images/skip.png') }, //images.feminino = require('./path_to/assets/img/feminino.png')
                { value: "Skip", imageIcon:require('../images/heart.png') } //images.masculino = require('./path_to/assets/img/masculino.png')
            ]}
        />
        </View>
    )  
  }
}

const styles = StyleSheet.create({
  selection :{
    flex:1,
    alignItems:'center',
    width: '70%',
  }, 
})
  