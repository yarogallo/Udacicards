import React, { Component} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DeckThumbnail from './DeckThumbnail';
import { green, light } from '../../helper/colors';

const data = [
	{title: 'react', nroCards: 20},
	{title: 'redux', nroCards: 2},
	{title: 'react-native', nroCards: 10},
	{title: 'angular', nroCards: 6},
];

class DeckListView extends Component {
	constructor(props) {
		super(props);
		this.navigateToDeckView = this.navigateToDeckView.bind(this);
	}
	navigateToDeckView(){
		return this.props.navigation.navigate('DeckView');
	}
	
	render() {
		const { deckList } = {deckList: data};
		return(
			<View style={styles.container}>
				<FlatList
					data={deckList}
					keyExtractor={ deck => deck.title }
					renderItem={ deck => <DeckThumbnail deck={deck} onPress={this.navigateToDeckView}/> }
					ItemSeparatorComponent={ () => <View style={{height: 1, backgroundColor: green}}/> }
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		alignItems: 'stretch',
		backgroundColor: light
	},
});

export default DeckListView;