import {createStackNavigator, createAppContainer} from 'react-navigation'
//import * as firebase from 'firebase'
import Home from './screens/home'
import Login from './screens/login'
import Setting from './screens/setting'
import Matches from './screens/matches'
import SignUp from './screens/signup'
import SignUpAddInfo from './screens/signupAddInfo'
import SignUpPhoto from './screens/signupPhoto'
import Start from './screens/start'
import Profile from './screens/profile'

// const firebaseConfig = {
//   apiKey: "AIzaSyD-8l49UiX0H8vLUS28h7KxpdnQXj_tCZU",
//   databaseURL: "https://clonetinder-c7909.firebaseio.com",
// }
// firebase.initializeApp(firebaseConfig)

const RouteConfigs = createStackNavigator(
  {
    Start: {screen:Start},
    Login: {screen:Login},
    Home: {screen:Home},
    Setting: {screen:Setting},
    Matches: {screen:Matches},
    SignUp: {screen:SignUp},
    SignUpAddInfo: {screen:SignUpAddInfo},
    SignUpPhoto: {screen:SignUpPhoto},
    Profile: {screen:Profile}
  },
  {
    headerMode:'none',
  }
)

export default createAppContainer(RouteConfigs)