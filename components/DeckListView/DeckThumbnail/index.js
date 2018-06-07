import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
	green,
	red
} from '../../../helper/colors';

function DeckThumbnail(props) {
	const { deck, onPress } = props;
	const { item } = deck;
	
	return(
		<TouchableOpacity style={styles.thumbnailDeck} onPress={onPress}>
			<View style={{alignSelf: 'center',marginRight: 10}}>
				<Text style={styles.cardTitle}>{item.title}</Text>
				<Text style={styles.cardCounter}>{item.nroCards} Cards</Text>
			</View>
			<View style={{alignSelf: "center"}}>
				<Icon name="arrow-right" size={40} color={red}/>
			</View>
		</TouchableOpacity>
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
	}
}

export default DeckThumbnail; 