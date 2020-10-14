import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Default from './src/default/screen/Default'
import Login from './src/login/screen/Login'
export default class App extends Component{
  render () {
    return (
    //  <Default/>
    <Login />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
