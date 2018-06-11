import React, { Component} from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { green, light } from '../../helper/colors';
import { getDecks } from '../../helper/api';
import ThumbnailList from './ThumbnailList';
import { connect } from 'react-redux';
import { setInitialDecks } from '../../actions';

class DeckListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
		this.navigateToDeckView = this.navigateToDeckView.bind(this);
	}
	
	componentDidMount() {
		getDecks()
		.then(result => {
			this.props.dispatch(setInitialDecks(result));
			this.setState({
				loading: false
			});
		});
	}
	
	navigateToDeckView(deck){
		this.props.navigation.navigate('DeckView', { deck });
	}
	
	render() {
		const { deckListThumnail } = this.props;
		const { loading } = this.state;
		return(
			<View style={styles.container}>
			   {loading
				? <ActivityIndicator size="large" color={green}/>
				: <ThumbnailList 
					deckListThumnail={deckListThumnail} 
					onPressListDeck={this.navigateToDeckView}
					/>}
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

function mapStateToProps(state) {
	const deckListThumnail = Object.keys(state).reverse().map( key => {
		return {
			title: state[key].title,
			nroCards: state[key].questions.length
		};
	});
	return {
		deckListThumnail,
	};
}

export default connect(mapStateToProps)(DeckListView);