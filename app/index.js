import {createStackNavigator, createAppContainer} from 'react-navigation'
//import * as firebase from 'firebase'
import Home from './screens/home'
import Login from './screens/login'


// const firebaseConfig = {
//   apiKey: "AIzaSyD-8l49UiX0H8vLUS28h7KxpdnQXj_tCZU",
//   databaseURL: "https://clonetinder-c7909.firebaseio.com",
// }

// firebase.initializeApp(firebaseConfig)

const RouteConfigs = createStackNavigator({
  Login: {screen:Login},
  Home: {screen:Home},
})

const StackNavigatorConfig = {
  headerMode:'none',
}

export default createAppContainer(RouteConfigs, StackNavigatorConfig)