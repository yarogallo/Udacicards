import React from 'react';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import AddDeckView from '../AddDeckView';
import DeckListView from '../DeckListView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { red, yellow, green, light } from '../../helper/colors';

 const TabNavigator = createMaterialTopTabNavigator({
	Home: {
		screen: DeckListView,
		navigationOptions: {
			tabBarLabel: 'Decks',
		}
	},
	AddDeck: {
		screen: AddDeckView,
		navigationOptions: {
			tabBarLabel: 'New Deck'
		}
	}
}, {
	animationEnabled: true,
	tabBarPosition: 'top',
	tabBarOptions: {
		initialRouteName: 'Home',
		activeTintColor: red,
		inactiveTintColor: green,
		showIcon: false,
		labelStyle: {
			fontSize: 20,
			fontWeight: 'bold',
		},
		style: {
			height: 60,
			backgroundColor: light,
			shadowColor: green,
			shadowOffset: {
				width: 0,
				height: 2
			},
			shadowOpacity: 0.2,
			shadowRadius: 2	
		}
	}
});


export default TabNavigator; 
