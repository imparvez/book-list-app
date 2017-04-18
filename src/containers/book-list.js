import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
	renderList(){
		return this.props.books.map((book) =>{
			return (
				<li key={book.title} className="list-group-item" >{book.title}</li>
			)
		})
	}

	render(){
		console.log('Books: ',this.props.books);
		return(
			<ul className="list-group col-sm-4"> {this.renderList()} </ul>
		)
	}
}

/*
* This function is a glue between react and redux
*/
function mapStateToProps(state){
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);

// connect takes and function(mapStateToProps) and container(BookList)

// A container is a component that has a direct connection to the state managed by redux

// Container called as smart component

// Other than that it is a dump component that doesn't have direct connection to redux