import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  books: BooksReducer, // Step 2
  activeBook: ActiveBook // Step 2
});

export default rootReducer;

// Step 2: Wiring of Reducer over here.

// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
