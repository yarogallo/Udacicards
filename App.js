import React from 'react';
import { View } from 'react-native';
import StackNavigator from './components/StackNavigator';
import CustomStatusBar from './components/CustomStatusBar';
import {light} from './helper/colors';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomStatusBar backgroundColor={light} />
        <StackNavigator />
      </View>     
    );
  }
}

