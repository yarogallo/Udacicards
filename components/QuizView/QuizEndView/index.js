import React, { Component } from  'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import PropTypes from 'prop-types';
import {
	yellow,
	blue
} from '../../../helper/colors';
import TextButtion from '../../TextButton';
import { clearNotificationForToday } from '../../../helper/utils';

class QuizEndView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeIn: new Animated.Value(0)
		};
	}
	componentDidMount() {
		clearNotificationForToday();
		Animated.timing(
			this.state.fadeIn,
			{
				toValue: 1,
				duration: 1000
			}
		).start();
	}
	render() {
		const { 
			totalQuestions, 
			correctQuestions, 
			backToDeck,
			restartQuiz,
		} = this.props;
		const { fadeIn } = this.state;
		const percent = Math.trunc(correctQuestions * 100 / totalQuestions);
		return(
			<Animated.View style={[styles.container, {
				opacity: fadeIn
			}]}>
				<View>
					<Text style={styles.text}>Correct: { correctQuestions } question(s).</Text>
					<Text style={styles.text}>Total: { totalQuestions } questions.</Text>
					<Text style={styles.text}> That represent {percent}% </Text>
				</View>
				<View>
					<TextButtion 
						text="Restart Quiz"
						styleTextBtn={styles.btnText}
						styleBtn={styles.btn}
						onPress={restartQuiz}
					/>
					<TextButtion 
						text="Back to Deck"
						styleTextBtn={styles.btnText}
						styleBtn={styles.btn}
						onPress={backToDeck}
					/>
				</View>
			</Animated.View>
		);
	}
}

QuizEndView.propTypes = {
	deck: PropTypes.string.isRequired,
	totalQuestions: PropTypes.number.isRequired,
	correctQuestions: PropTypes.number.isRequired,
	restartQuiz: PropTypes.func,
	backToDeck: PropTypes.func	
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius: 5,
		
	},
	text: {
		fontSize: 30,
		textAlign: 'left'
	},
	btnText: {
		color: yellow
	},
	btn: {
		backgroundColor: blue,
		borderColor: blue,
		maxWidth: 250,
		margin: 20
	}
});



export default QuizEndView;