import React from 'react';
import { View } from 'react-native';
import StackNavigator from './components/StackNavigator';
import { TabNavigatorIos } from './components/TabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StackNavigator />
      </View>     
    );
  }
}

