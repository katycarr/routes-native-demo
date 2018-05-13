import React from 'react'
import {View, TextInput, Button, AsyncStorage} from 'react-native'

class LoginScreen extends React.Component {
  state = {
    name: 'Name...'
  }

  async setName(value) {
    try {
      await AsyncStorage.setItem('name', value);
    } catch (error) {
      console.log(error)
    }
  }

  handlePress = () => {
    this.setName(this.state.name)
    this.props.navigation.navigate('Home')
  }

  render() {
    return(
      <View>
        <TextInput
          onChangeText={name => this.setState({name})}
          value={this.state.name}
          />
        <Button
          onPress={this.handlePress}
          title='submit'
          />
      </View>
    )
  }
}

export default LoginScreen
