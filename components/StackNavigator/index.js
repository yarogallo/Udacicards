import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import DeckListView from '../DeckListView';
import DeckView from '../DeckView';
import AddCardView from '../AddCardView';
import TabNavigator from '../TabNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
import { light, green } from '../../helper/colors';

const styles = StyleSheet.create({
	header: {
	  backgroundColor: green,                                                                                                                
	  paddingLeft: 15,
	},
	iconStyle: {
		paddingRight: 10,
	  paddingLeft: 15
	}
  });
  
function HeaderImg(props) {
	return(
	  <Ionicons 
		name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} 
		size={30} 
		color={props.tintColor}
		style={styles.iconStyle}/>
	);
  }
  
  const StackNavigator = createStackNavigator({
	 Home: {
	   screen: TabNavigator,
	   navigationOptions: {
		   header: null
	   }
	 },
	 DeckView: {
	   screen: DeckView,
	 },
	 AddCardView: {
	   screen: AddCardView
	 }
  }, {
	initialRouteName: 'Home',
	navigationOptions: {
	  headerBackImage: () =>  <HeaderImg tintColor={green}/>,
	  headerStyle: {
		backgroundColor: light,
		height: 60,
		shadowColor: green,
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.2,
		shadowRadius: 2      
	  }
	},
	headerMode: Platform.OS === 'ios' ? 'float': 'screen'
  });
  
  export default StackNavigator;
  
  