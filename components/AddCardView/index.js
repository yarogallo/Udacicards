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
	constructor(props) {
		super(props);
		this.state = {
			question: 'Ex: What is a component',
			answer: 'Components are like javascrit functions ...',
		};
		this.onChangeTextHandler = this.onChangeTextHandler.bind(this);
		this.resetAnswer = this.resetAnswer.bind(this);
		this.resetQuestion = this.resetQuestion.bind(this);
		this.submitNewCard = this.submitNewCard.bind(this);
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
				<View>
					<Text style={styles.label}>Enter the question</Text>
					<TextInput
						style={styles.inputText}
						value={this.state.question}
						name="question"
						multiline={true}
						onChange={ evt => this.onChangeTextHandler(evt)}
						onFocus={this.resetQuestion}/>
					<Text style={styles.label}>Enter the answer</Text>	
					<TextInput
						style={styles.inputText}
						value={this.state.answer}
						multiline={true}
						name="answer"
						onChange={ evt => this.onChangeTextHandler(evt)}
						onFocus={this.resetAnswer}/>
				</View>
				<TextButton
					text="Submit"
					styleBtn={styles.submitBtn}
					styleTextBtn={styles.textBtn}
					onPress={this.submitNewCard}
				/>
			</KeyboardAvoidingView>
		);
	}	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		justifyContent: 'space-around',
		alignItems: 'stretch',
		backgroundColor: light	
	},
	inputText: {
		color: green,
		fontSize: 20,
		borderWidth: 1,
		height: 60,
		padding: 10,
		borderColor: blue,
		borderRadius: 7,
		marginBottom: 15,
	},
	submitBtn: {
		backgroundColor: blue,
		borderColor: blue,
		width: 200,
		alignSelf: 'center'
	},
	textBtn: {
		color: green
	},
	label: {
		color: red,
		fontSize: 20,
		fontWeight: '800',
		marginBottom: 10,
		textDecorationColor: red,
		textDecorationStyle: 'solid',
		textDecorationLine: 'underline',
		textAlign: 'center'
	}
});

export default AddCardView;
