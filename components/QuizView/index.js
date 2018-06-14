import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import TextButton from '../TextButton';
import { connect } from 'react-redux';
import { red, green, light } from '../../helper/colors';
import QuizEndView from './QuizEndView';

class QuizView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			correctQuestions: 0,
			showAnswer: false,
			bounce: new Animated.Value(0) 
		};
		this.pressCorrectButtonHandler = this.pressCorrectButtonHandler.bind(this);
		this.toggleAnswearHandler = this.toggleAnswearHandler.bind(this);
		this.pressButtonHandler = this.pressButtonHandler.bind(this);
		this.navigateBackToDeck = this.navigateBackToDeck.bind(this);
		this.restartQuiz = this.restartQuiz.bind(this);
	}
	
	static navigationOptions() {
		return {
			title: 'quiz',
			headerBackTitle: null
		};
	}
	
	componentDidMount() {
		this.performAnimation();
	}
	
	performAnimation() {
		Animated.sequence([
			Animated.timing(
				this.state.bounce,
				{
					toValue: 1.5,
					useNativeDriver: true
				}
			),
			Animated.timing(
				this.state.bounce,
				{
					toValue: 1,
					useNativeDriver: true
				}
			),
		]).start();
	}
	
	
	pressCorrectButtonHandler() {
		this.setState({
			correctQuestions: this.state.correctQuestions + 1,
		});
	}
	
	pressButtonHandler() {
		this.setState({
			currentIndex: this.state.currentIndex + 1,
			showAnswer: false,
		});
		this.performAnimation();
	}
	
	toggleAnswearHandler() {
		this.setState((prevState) => ({
			showAnswer: !prevState.showAnswer
		}));
	}
	
	navigateBackToDeck() {
		this.props.navigation.navigate('DeckView', { deck: this.props.title });
	}
	
	restartQuiz() {
		this.setState({
			currentIndex: 0,
			correctQuestions: 0,
			showAnswer: false,
		});
		this.performAnimation();
	}
	
	render() {
		const { listQuestions, title } = this.props;
		const { currentIndex, showAnswer, correctQuestions, bounce } = this.state;
		const totalQuestions = listQuestions.length;
		return(
			<View style={styles.container}>
			{ currentIndex === totalQuestions
				? <QuizEndView 
					totalQuestions={totalQuestions} 
					correctQuestions={correctQuestions} 
					deck={title}
					backToDeck={this.navigateBackToDeck}
					restartQuiz={this.restartQuiz}/>
				:<View style={styles.container}>
					<View style={{marginBottom: 20}}>
						<Text style={styles.quizCounter}>{`${currentIndex + 1}/${totalQuestions}`}</Text>
					</View>
					<View style={{marginBottom: 40}}>	
						<Text style={styles.text}>{
							showAnswer ? listQuestions[currentIndex].answer : listQuestions[currentIndex].question
						}</Text>
					</View>
					<Animated.View style={{
							marginBottom: 40,
							transform: [{scale: bounce}]
						}}>
						<Button 
							title={ showAnswer ? "question" : "answer"}
							textStyle={[styles.headerText, {
								textDecorationColor: red
							}]}
							raised= { Platform.OS === "ios" ? true : false}
							buttonStyle={{
								backgroundColor: "transparent",
								borderColor: "transparent",
							}}
							containerStyle={{ marginTop: 20 }}
							onPress={this.toggleAnswearHandler}/>
					</Animated.View>
					<View>
						<TextButton 
							text="Correct" 
							styleBtn={[styles.quizBtn, {backgroundColor: green, marginBottom: 20}]} 
							styleTextBtn={styles.textBtn}
							onPress={() => {
								this.pressButtonHandler();
								this.pressCorrectButtonHandler();
							}}/>
						<TextButton 
							text="Incorrect" 
							styleBtn={[styles.quizBtn, {backgroundColor: red}]} 
							styleTextBtn={styles.textBtn}
							onPress={() => {
								this.pressButtonHandler();	
							}}/>
					</View>
				</View>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: light,
		justifyContent: 'flex-start',
		alignItems: 'stretch'
	},
	quizCounter: {
		fontWeight: '500',
		fontSize: 20
	},
	headerText: {
		color: red,
		fontWeight: '800',
		fontSize: 20,
		marginBottom: 10,
		textAlign: 'center'
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
		textAlign: 'center'
	},
	quizBtn: {
		alignSelf: 'stretch',
		borderColor: 'transparent',
		width: 250,
		alignSelf: 'center'
	},
	textBtn: {
		color: light
	}
	
});

function mapStateToProps(state, { navigation }) {
	const title = navigation.getParam('deck');
	return {
		title,
		listQuestions: [...state[title].questions]
	};
}

export default connect(mapStateToProps)(QuizView);