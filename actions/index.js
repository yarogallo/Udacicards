export const ADD_DECK = 'ADD_DECK';
export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const SET_INITIAL_DECKS = 'SET_INITIAL_DECKS';

export function addDeck(title) {
	return {
		type: ADD_DECK,
		title,
	};
}

export function setInitialDecks(decks) {
	return {
		type: SET_INITIAL_DECKS,
		decks,
	}
}

export function getAllDecks() {
	return {
		type: GET_ALL_DECKS
	};
}