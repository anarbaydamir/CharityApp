import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Default from './src/default/screen/Default'
import Login from './src/login/screen/Login'
import Registration from './src/registration/screen/Registration'
export default class App extends Component{
  render () {
    return (
    //  <Default/>
    <Registration />
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
