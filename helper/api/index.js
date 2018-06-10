import { AsyncStorage } from 'react-native';

const DECKS = 'DECKS';

function reportErr(err) {
	console.error(err);
	return false;
}

export const getDecks = function() {
	return AsyncStorage.getItem(DECKS)
		.then(result => {
			return !result ? {}: JSON.parse(result);
		})
		.catch(err => reportErr(err));
};

export const saveDeckTitle = function(title) {
	return AsyncStorage.getItem(DECKS)
		.then(result => {
			let res = result ? JSON.parse(result) : {};
			res[title] ={ title: title, questions: [] };
			return AsyncStorage.setItem(DECKS, JSON.stringify(res))
				.catch(err => reportErr(err));
		})
		.catch(err => reportErr(err));
};

// export const addCardToDeck = function(title, card) {
// 	return AsyncStorage.getItem(DECKS)
// 			.then( result => {
// 				const tmp = JSON.parse(result);
// 				tmp[title].questions.push(card);
// 				AsyncStorage.setItem(DECKS, JSON.stringify(tmp));
// 			})
// 			.catch(err => reportErr(err));
// };

// export const getDeck = function(title) {
// 	AsyncStorage.getItem(title)
// 	.then(result => JSON.parse(result))
// 	.catch(err => reportErr(err));
// };

// 	AsyncStorage.mergeItem(title, JSON.stringify(valueToMerge))
// 	.then(result => !!result)
// 	.catch(err => reportErr(err));
// };