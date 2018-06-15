import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import TextButton from '../TextButton';
import { connect } from 'react-redux';
import { addDeck } from '../../actions';
import { 
	yellow,
	blue,
	light,
	red
 } from '../../helper/colors';
 import { saveDeckTitle } from '../../helper/api';

class AddDeckView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.submitDeckTitle = this.submitDeckTitle.bind(this);
		this.resetValue = this.resetValue.bind(this);
	}
	changeValueHandler(value) {
		this.setState(() => {
			return {value};
		});
	}
	resetValue() {
		this.setState({
			value: ''
		});
	}
	submitDeckTitle() {
		const { value } = this.state;
		const { navigate } = this.props.navigation;
		if(this.state.value.length !== 0){
			saveDeckTitle(value);
			this.props.dispatch(addDeck(this.state.value));
			this.resetValue();
			navigate('DeckView', {
				deck: value
			});
		}
	}
	render() {
		return(
			<KeyboardAvoidingView 
				style={styles.container} 
				behavior="padding" 
				enable={true}
				keyboardVerticalOffset={5}>
				<View>
					<Text style={styles.text}>Enter title of your new deck:</Text>
					<TextInput
						style={styles.inputForm}
						value={this.state.value}
						onChangeText={ text => this.changeValueHandler(text)}
					/>
				</View>
				<TextButton 
					text="Submit" 
					styleBtn={styles.submitBtn}
					styleTextBtn={styles.textBtn}
					onPress={this.submitDeckTitle}/>
				<View style={{ height: 60 }} />
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'stretch',
		padding: 15,
		backgroundColor: light
	},
	text: {
		color: red,
		fontSize: 20,
		fontWeight: '800',
		marginBottom: 30,
		textAlign: 'center',
		textDecorationStyle: 'solid',
		textDecorationLine: 'underline',
	},
	inputForm: {
		borderColor: blue,
		borderWidth: 1,
		height: 60,
		padding: 10,
		fontSize: 20,
		marginBottom: 20,
		borderRadius: 7
	},
	submitBtn: {
		backgroundColor: blue,
		borderColor: blue,
		width: 200,
		alignSelf: 'center'
	},
	textBtn: {
		color: yellow
	}
});

export default connect()(AddDeckView);