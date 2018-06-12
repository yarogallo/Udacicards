import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import AddDeckView from '../AddDeckView';
import DeckListView from '../DeckListView';
import { red, green, light } from '../../helper/colors';

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
	title: 'deck',
	animationEnabled: true,
	tabBarPosition: 'top',
	tabBarOptions: {
		initialRouteName: 'Home',
		activeTintColor: red,
		inactiveTintColor: green,
		showIcon: false,
		labelStyle: {
			fontSize: 20,
			fontWeight: '500',
		},
		style: {
			height: 60,
			backgroundColor: light,
		}
	}
});


export default TabNavigator; 
