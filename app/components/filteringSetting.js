import React, {Component} from 'react'
import {
    StyleSheet, 
    PixelRatio, 
    View, 
    Slider, 
    Text, 
    Switch
} from 'react-native'

export default class FilteringSetting extends Component {
  state = {
    ageRangeValues: [19, 100],
    distanceValue: [5],
    showMen: false,
    showWomen: false,
  }
    
  render() {
    const {ageRangeValues, distanceValue, showMen, showWomen} = this.state
    return (
      <View style={styles.setting}>
        <View style={styles.label}>
            <Text>Distance</Text>
            <Text style={{color:'darkgrey'}}>{distanceValue}km</Text>
        </View>
        <Slider
            style={{margin:40}}
            min={1}
            max={30}
            values={distanceValue}
            onValuesChange={val => this.setState({distanceValue:val})}
        />
        <View style={styles.label}>
            <Text>Age Range</Text>
            <Text style={{color:'darkgrey'}}>{ageRangeValues.join('-')}</Text>
        </View>
        <Slider
            style={{margin:40}}
            min={18}
            max={70}
            values={ageRangeValues}
            onValuesChange={val => this.setState({ageRangeValues:val})}
        />
        <View style={styles.switch}>
            <Text>Show Men</Text>
            <Switch
            value={showMen}
            onValueChange={val => this.setState({showMen:val})}
            />
        </View>
        <View style={styles.switch}>
            <Text>Show Women</Text>
            <Switch
            value={showWomen}
            onValueChange={val => this.setState({showWomen:val})}
            />
        </View>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
    profile: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    setting: {
      backgroundColor: '#fff',
      width:'85%',
      borderRadius: 10, 
      borderWidth: 0.5,
      borderColor: 'lightgrey',
      justifyContent:'space-between' , 
    },
    label: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      top:'10%',
      marginLeft:30,
      marginRight:30,
      marginBottom:10,
    },
    switch: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginLeft:30,
      marginRight:30,
      marginBottom:20
    },
  })