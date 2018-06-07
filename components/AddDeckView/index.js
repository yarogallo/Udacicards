import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import TextButton from '../TextButton';
import { 
	green,
	blue,
	light
 } from '../../helper/colors';

class AddDeckView extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		};
		this.submitDeckTitle = this.submitDeckTitle.bind(this);
	}
	changeValueHandler(value) {
		this.setState(() => {
			return {value};
		});
	}
	submitDeckTitle() {
		this.setState({
			value: ''
		});
		//check that the input is not empty
		//add the deck to data base
		//navigate to default view
	}
	render() {
		return(
			<KeyboardAvoidingView 
				style={styles.container} 
				behavior="padding" 
				enable={true}
				keyboardVerticalOffset={5}>
				<Text style={styles.text}>Enter title of your new deck:</Text>
				<TextInput
					style={styles.inputForm}
					value={this.state.value}
					onChangeText={ text => this.changeValueHandler(text)}
				/>
				<TextButton 
					text="Submit" 
					styleBtn={styles.submitBtn}
					styleTextBtn={styles.textBtn}
					onPress={this.submitDeckTitle}/>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		padding: 15,
		backgroundColor: light
	},
	text: {
		color: green,
		fontSize: 30,
		fontWeight: '100',
		marginBottom: 30,
		textAlign: 'center'
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
		width: 200
	},
	textBtn: {
		color: green
	}
});

export default AddDeckView;