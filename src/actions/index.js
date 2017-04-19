export function selectBook(book) {
	console.log('A book has been selected: ', book.title);
	/*
	* selectBook is an ActionCreator, it needs to return an action, an object with a type property.
	*/
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}

// Action has two property/ value
// A type and a payload
// A payload further describes the condition of the action that has been triggered.
// Every action must have type which will describe the purpose of the action