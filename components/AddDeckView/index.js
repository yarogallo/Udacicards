import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import TextButton from '../TextButton';
import { 
	green,
	blue
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
					autoFocus={true}
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
		padding: 15
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
		borderWidth: 2,
		padding: 25,
		marginBottom: 20,
		borderRadius: 7
	},
	submitBtn: {
		backgroundColor: blue,
		borderColor: blue
	},
	textBtn: {
		color: green
	}
});

export default AddDeckView;