import {createStackNavigator, createAppContainer} from 'react-navigation'
//import * as firebase from 'firebase'
import Home from './screens/home'
import Login from './screens/login'
import Setting from './screens/setting'
import Matches from './screens/matches'
import SignUp from './screens/signup'

// const firebaseConfig = {
//   apiKey: "AIzaSyD-8l49UiX0H8vLUS28h7KxpdnQXj_tCZU",
//   databaseURL: "https://clonetinder-c7909.firebaseio.com",
// }

// firebase.initializeApp(firebaseConfig)

const RouteConfigs = createStackNavigator(
  {
    Login: {screen:Login},
    Home: {screen:Home},
    Setting: {screen:Setting},
    Matches: {screen:Matches},
    SignUp: {screen:SignUp},
  },
  {
    headerMode:'none',
  }
)


export default createAppContainer(RouteConfigs)