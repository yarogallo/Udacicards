import { ADD_DECK, SET_INITIAL_DECKS } from '../actions';

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
		default:
			return state;
	}
}


