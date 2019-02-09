import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Switch,
   Slider
} from 'react-native';
import CircleImage from '../components/circleImage'

export default class Matches extends React.Component {
  state = {
    ageRangeValues: [19, 24],
    distanceValue: [5],
    showMen: false,
    showWomen: false,
  }

  render() {
    //const {first_name, work, id} = this.props.user
    const {ageRangeValues, distanceValue, showMen, showWomen} = this.state
    //const bio = (work && work[0] && work[0].position) ? work[0].position.name : null
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <CircleImage />
          <Text style={{fontSize:20}}>박동휘</Text>
          <Text style={{fontSize:15, color:'darkgrey'}}>개발자</Text>
        </View>
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
  container: {
    flex:1,
    backgroundColor:'white',
  },
  profile: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  label: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:20,
    marginRight:20,
  },
  switch: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:20,
  },
})