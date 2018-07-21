import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Login from './components/Login';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
	  <StatusBar
	  backgroundColor="#1c313a"
	  barstyle="light-content"
	  />
		
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
