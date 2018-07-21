import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Comming soon');
  }

  render() {
    return (
      <View style={styles.container}>
  <Image style={styles.imagetxt}
  source={require('../components/logo.png')} /> 
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
		
		<Image style={styles.imagetxt}
  source={require('../components/learn.png')} /> 
		
		 
      </View>
    );
  }
}

const styles = StyleSheet.create({
	imagetxt: {
		width: 300,
    height: 100,
    padding: 10,
    borderWidth: 4,
    marginBottom: 20,
	},
	
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
	},
	krce: {
		width: 321,
    height: 321,
    padding: 30,
    borderWidth: 40,
    marginBottom: 20,
	},
 
});
