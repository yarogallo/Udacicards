import React, { Component} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DeckThumbnail from './DeckThumbnail';
import { green } from '../../helper/colors';

class DeckListView extends Component {
	render() {
		const { deckList } = this.props;
		return(
			<View style={styles.container}>
				<FlatList
					data={deckList}
					keyExtractor={ deck => deck.title }
					renderItem={ deck => <DeckThumbnail deck={deck} onPress={() => {}}/> }
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
	},
});

export default DeckListView;