//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CreateAppContainer} from 'react-navigation';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen.js'
import SearchScreen from './screens/SearchScreen.js'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}}
const TabNavigator=CreateBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})
const AppContainer=CreateAppContainer(TabNavigator);
