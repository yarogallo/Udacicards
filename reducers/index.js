import { 
	ADD_DECK, 
	SET_INITIAL_DECKS,
	ADD_CARD_TO_DECK
 } from '../actions';

const initialState = {};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_DECK:
			return {
				...state,
				[action.title]: {
					title: action.title,
					questions: []
				}
			};
		case SET_INITIAL_DECKS: 
			return {
				...state,
				...action.decks
			}
		case ADD_CARD_TO_DECK: 
			return {
				...state,
				[action.title]: {
					...state[action.title],
					questions: [...state[action.title].questions, action.card]
				}
			}		
		default:
			return state;
	}
}


