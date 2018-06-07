import React, { Component } from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet, TextInput} from 'react-native';
import TextButton from '../TextButton';
import {
	light,
	red,
	yellow,
	blue,
	green
} from '../../helper/colors';

class AddCardView extends Component {
	constructor() {
		super();
		this.state = {
			question: 'Enter the question',
			answer: 'Enter the answer',
		};
		this.onChangeTextHandler = this.onChangeTextHandler.bind(this);
		this.resetAnswer = this.resetAnswer.bind(this);
		this.resetQuestion = this.resetQuestion.bind(this);
	}
	
	onChangeTextHandler(evt) {
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState( () => ({[name]: value}));
	}
	submitNewCard() {
		this.setState({ question: '', answer: ''});
	} 
	resetAnswer() {
		this.setState({
			answer: ''
		});
	}
	resetQuestion() {
		this.setState({
			question: ''
		});
	}
	render() {
		return(
			<KeyboardAvoidingView 
				style={styles.container}
				behavior="padding" 
				enabled>
				<TextInput
					style={styles.inputText}
					value={this.state.question}
					name="question"
					multiline={true}
					onChange={ evt => this.onChangeTextHandler(evt)}
					onFocus={this.resetQuestion}/>
				<TextInput
					style={styles.inputText}
					value={this.state.answer}
					multiline={true}
					name="answer"
					onChange={ evt => this.onChangeTextHandler(evt)}
					onFocus={this.resetAnswer}/>
				<TextButton
					text="Submit"
					styleBtn={styles.submitBtn}
					styleTextBtn={styles.textBtn}
				/>
			</KeyboardAvoidingView>
		);
	}	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center'	
	},
	inputText: {
		color: green,
		fontSize: 20,
		borderWidth: 1,
		height: 60,
		padding: 10,
		borderColor: blue,
		borderRadius: 7,
		marginBottom: 20,
		alignSelf: 'stretch'	
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

export default AddCardView;
