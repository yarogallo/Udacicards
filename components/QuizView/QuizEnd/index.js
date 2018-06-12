import React from  'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {
	yellow,
	green,
	light,
	red
} from '../../../helper/colors';
import TextButtion from '../../TextButton';


function QuizEnd(props) {
	const { totalQuestions, totalCorrectQuestions } = props;
	const percent = Math.trunc(totalCorrectQuestions * 100 / totalQuestions);
	return(
		<View style={styles.container}>
			<Text style={styles.headerText}>Your final score is: </Text>
			<Text style={styles.text}>Correct answered: { totalCorrectQuestions } question(s).</Text>
			<Text style={styles.text}>Total: { totalQuestions } questions.</Text>
			<Text style={styles.text}> That represent {percent}% </Text>
			<View>
				<TextButtion 
					text="Restart Quiz"
					styleTextBtn={styles.btnText}
					styleBtn={styles.btn}
				/>
				<TextButtion 
					text="Back to Deck"
					styleTextBtn={styles.btnText}
					styleBtn={styles.btn}
				/>
			</View>
		</View>
	);
}

QuizEnd.propTypes = {
	totalQuestions: PropTypes.number.isRequired,
	totalCorrectQuestions: PropTypes.number.isRequired	
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: yellow,
		borderRadius: 5,
		
	},
	headerText: {
		fontSize: 30,
		color: green
	},
	text: {
		fontSize: 20,
		color: green,
		textAlign: 'center'
	},
	btnText: {
		color: light
	},
	btn: {
		backgroundColor: red,
		borderColor: red,
		maxWidth: 300,
		margin: 20
	}
});



export default QuizEnd;