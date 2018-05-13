import React from 'react'
import {View, Text, AsyncStorage, Button} from 'react-native'


class HomeScreen extends React.Component {
  state = {
    name: null
  }

  async getName() {
    try {
      const name = await AsyncStorage.getItem('name');
      if (!name) {
        this.props.navigation.navigate('Login')
      } else if (name !== null) {
        this.setState({name})
      }
    } catch (error) {
      console.log(error)
    }
  }

  logout = () => {
    AsyncStorage.removeItem('name')
    this.props.navigation.navigate('Login')
  }

  componentDidMount = () => {
    this.getName()
  }

  render() {

    return(
      <View>
        <Text>Hello {this.state.name}</Text>
        <Button
          onPress={this.logout}
          title='Logout'
          />
      </View>
    )
  }

}

export default HomeScreen
