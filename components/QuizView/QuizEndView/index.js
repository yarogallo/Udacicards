import React from  'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {
	yellow,
	blue
} from '../../../helper/colors';
import TextButtion from '../../TextButton';

function QuizEndView(props) {
	const { 
		totalQuestions, 
		correctQuestions, 
		backToDeck,
		restartQuiz,
	} = props;
	const percent = Math.trunc(correctQuestions * 100 / totalQuestions);
	return(
		<View style={styles.container}>
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
		</View>
	);
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