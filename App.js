import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import StackNavigator from './components/StackNavigator';
import CustomStatusBar from './components/CustomStatusBar';
import deckStore from './store';
import {light} from './helper/colors';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={deckStore}>
          <View style={{flex: 1}}>
            <CustomStatusBar backgroundColor={light} barStyle="light-content"/>
            <StackNavigator />
          </View>  
      </Provider>   
    );
  }
}

