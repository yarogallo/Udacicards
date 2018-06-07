import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListView from './components/DeckListView';

const data = [
	{title: 'react', nroCards: 20},
	{title: 'redux', nroCards: 2},
	{title: 'react-native', nroCards: 10},
	{title: 'angular', nroCards: 6},
];

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <DeckListView deckList={data}/>
      </View>
    );
  }
}

