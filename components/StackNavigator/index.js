import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import DeckView from '../DeckView';
import AddCardView from '../AddCardView';
import TabNavigator from '../TabNavigator';
import QuizView from '../QuizView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
import { light, green, black } from '../../helper/colors';

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
			 title: 'Udacicards',
			 headerBackTitle: null,
			 headerTitleStyle: {
				 fontWeight: '500',
				 fontSize: 30,
				 marginBottom: 10
			 }
		 }
	 },
	 DeckView: {
	   screen: DeckView,
	 },
	 AddCardView: {
	   screen: AddCardView
	 },
	 QuizView: {
		 screen: QuizView
	 }
  }, {
	initialRouteName: 'Home',
	navigationOptions: {
		headerBackImage: () =>  <HeaderImg tintColor={black}/>,
		headerStyle: {
			backgroundColor: light,
		},
		headerTitleStyle: {
			fontSize: 20,
		}, 
		headerTintColor: black
	},
	headerMode: Platform.OS === 'ios' ? 'float': 'screen'
  });
  
  export default StackNavigator;
  
  