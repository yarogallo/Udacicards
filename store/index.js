import { createStore } from 'redux';
import { reducer } from '../reducers';

const deckStore = createStore(
	reducer
); 

export default deckStore;