import React, {Component } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Platform, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
	green,
	red
} from '../../../helper/colors';

class DeckThumbnail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeIn: new Animated.Value(0),
			scale: new Animated.Value(0)	
		};
	}
	componentDidMount() {
		Animated.sequence([
			Animated.timing(
				this.state.fadeIn,
				{
					toValue: 1,
					useNativeDriver: true
				}
			),
			Animated.timing(
				this.state.scale,
				{
					toValue: 1,
					useNativeDriver: true
				}
			)
		]).start();
	}
	render() {
		const { deck, onPressItem } = this.props;
		const { item } = deck;
		const { fadeIn, scale } = this.state;
		return(
			<TouchableOpacity style={styles.thumbnailDeck} onPress={() => onPressItem(item.title)}>
				<Animated.View style={{
						alignSelf: 'center',
						marginRight: 10,
						opacity: fadeIn
					}}>
					<Text style={styles.cardTitle}>
						{item.title}</Text>
					<Text style={styles.cardCounter}>{item.nroCards} Cards</Text>
				</Animated.View>
				<Animated.View style={{
						alignSelf: "center",
						transform: [{
							scale: scale
						}]
					}}>
					<Icon name="arrow-right" size={40} color={red}/>
				</Animated.View>
			</TouchableOpacity>
		);
	}
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

const styles = StyleSheet.create({
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
});

export default ThumbnailList;
