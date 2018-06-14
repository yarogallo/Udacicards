import { AsyncStorage } from 'react-native';

const DECKS = 'DECKS';
const NOTIFICATION_ID = 'NOTIFICATION_ID';

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

export const addCard = function(title, card) {
	 return AsyncStorage.getItem(DECKS)
			.then( result => {
				let res = JSON.parse(result);
				res[title].questions.push(card);
				return AsyncStorage.setItem(DECKS, JSON.stringify(res))
						.catch(err => reportErr(err));
			})
			.catch(err => reportErr(err));
};

export function checkNotification() {
	return AsyncStorage.getItem(NOTIFICATION_ID)
			.then( result => JSON.parse(result));
}

export function setNotificationId(localNotificationId) {
	return AsyncStorage.setItem(NOTIFICATION_ID, JSON.stringify(localNotificationId))
}

export function removeNotification() {
	return AsyncStorage.removeItem(NOTIFICATION_ID);
}