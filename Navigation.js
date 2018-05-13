// import two screens
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
// import StackNavigator
import { StackNavigator } from 'react-navigation'

const BaseNavigation = StackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen}
});

export default BaseNavigation;
