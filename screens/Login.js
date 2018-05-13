import React from 'react'
import {View, TextInput, Button} from 'react-native'

class LoginScreen extends React.Component {
  state = {
    name: 'Name...'
  }

  render() {
    return(
      <View>
        <TextInput
          onChangeText={name => this.setState({name})}
          value={this.state.name}
          />
      </View>
    )
  }

}

export default LoginScreen
