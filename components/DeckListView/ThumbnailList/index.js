import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
	green,
	red
} from '../../../helper/colors';

function DeckThumbnail({ deck, onPressItem }) {
	const { item } = deck;
	return(
		<TouchableOpacity style={styles.thumbnailDeck} onPress={() => onPressItem(item.title)}>
			<View style={{alignSelf: 'center',marginRight: 10}}>
				<Text style={styles.cardTitle}>
					{item.title}</Text>
				<Text style={styles.cardCounter}>{item.nroCards} Cards</Text>
			</View>
			<View style={{alignSelf: "center"}}>
				<Icon name="arrow-right" size={40} color={red}/>
			</View>
		</TouchableOpacity>
	);
}


function ThumbnailList(props) {
	const { deckListThumnail, onPressListDeck } = props;
	if (deckListThumnail.length === 0 ) {
		return(
			<View style={styles.noDeckListed}>
				<Ionicon name={Platform === 'ios'? 'ios-book': 'md-book'} size={80} color={red}/>
				<Text style={[styles.cardTitle, {textAlign: 'center'}]}>Add a new deck to start practicing</Text>
			</View>
		);
	}
	return(		
		 <FlatList
			data={deckListThumnail}
			keyExtractor={ deck => deck.title }
			renderItem={ deck => <DeckThumbnail deck={deck} onPressItem={onPressListDeck}/> }
			ItemSeparatorComponent={ () => <View style={{height: 1, backgroundColor: green}}/> }
		/>
	);
}

const styles = {
	thumbnailDeck: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 25,
		paddingBottom: 25,
	},

	cardTitle: {
		color: green,
		fontSize: 40,
		marginBottom: 10,
		fontWeight: 'bold',
		textAlign: 'left',
	},	
	cardCounter: {
		color: red,
		fontSize: 30,
		textAlign: 'left',
	},
	noDeckListed: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
		
	}
}

export default ThumbnailList;
