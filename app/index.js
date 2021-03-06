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
import InterestsSetting from './screens/interestsSetting'
import PrivateDetails from './screens/privateDetails'
// const firebaseConfig = {
//   apiKey: "AIzaSyD-8l49UiX0H8vLUS28h7KxpdnQXj_tCZU",
//   databaseURL: "https://clonetinder-c7909.firebaseio.com",
// }
// firebase.initializeApp(firebaseConfig)

const RouteConfigs = createStackNavigator(
  {
    Start: {screen:Start},
    SignUp: {screen:SignUp},
    SignUpAddInfo: {screen:SignUpAddInfo},
    SignUpPhoto: {screen:SignUpPhoto},
    Login: {screen:Login},
    Home: {screen:Home},
    Matches: {screen:Matches},
    Profile: {screen:Profile},
    Setting: {screen:Setting},
    InterestsSetting: {screen:InterestsSetting},
    PrivateDetails: {screen:PrivateDetails}
  },
  {
    headerMode:'none',
  }
)

export default createAppContainer(RouteConfigs)