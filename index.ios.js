/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TabBarIOS,
  Text,
  View
} from 'react-native';

import PersonShowScreen from './app/screens/PersonShowScreen'
import PeopleIndexScreen from './app/screens/PeopleIndexScreen'
import ProfileScreen from './app/screens/ProfileScreen'

export default class BridgesAppExample extends Component {
  constructor() {
    super();
    this.state = {selectedTab: 'tabOne'}
  }
  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "PeopleIndex":
        return (
          <PeopleIndexScreen
            {...globalNavigatorProps} />
        )
      case "PersonShow":
        return (
        <PersonShowScreen
            {...globalNavigatorProps} 
            question = {route.question}/>
        )
      case "Profile":
        return (
        <ProfileScreen
            {...globalNavigatorProps} />
        )
      default:
        return (
        <PeopleIndexScreen
          {...globalNavigatorProps} />
        )
    }
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item 
        systemIcon="search"
        selected={this.state.selectedTab == 'tabOne'}
        onPress={() => this.setTab('tabOne')}>
          <Navigator 
          initialRoute={{ident: "PeopleIndex"}}
          ref="appNavigator"
          renderScene={this._renderScene} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        systemIcon="contacts"
        selected={this.state.selectedTab == 'tabTwo'}
        onPress={() => this.setTab('tabTwo')}>
          <Navigator 
          initialRoute={{ident: "Profile"}}
          ref="appNavigator"
          renderScene={this._renderScene} />
          </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

AppRegistry.registerComponent('BridgesAppExample', () => BridgesAppExample);
