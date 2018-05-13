import React from 'react'
// import two screens
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
// import StackNavigator
import { StackNavigator } from 'react-navigation'
// import navigator
// import BaseNavigation from './Navigation'

const App = StackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen}
});

export default App
