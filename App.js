import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import StackNavigator from './components/StackNavigator';
import CustomStatusBar from './components/CustomStatusBar';
import deckStore from './store';
import {light, green} from './helper/colors';
import { setNotifications } from './helper/utils';


export default class App extends Component {
  componentDidMount() {
    setNotifications();
  }
  render() {
    return (
      <Provider store={deckStore}>
          <View style={{flex: 1}}>
            <CustomStatusBar backgroundColor={green} />
            <StackNavigator/>
          </View>  
      </Provider>   
    );
  }
}

