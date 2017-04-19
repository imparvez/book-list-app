import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // Binding all the action creator through all the reducers

class BookList extends Component{
	renderList(){
		return this.props.books.map((book) =>{
			return (
				<li 
					onClick={()=> this.props.selectBook(book)}
					key={book.title} 
					className="list-group-item" >
					{book.title}
				</li>
			)
		})
	}

	render(){
		return(
			<ul className="list-group col-sm-4"> {this.renderList()} </ul>
		)
	}
}

/*
* This function is a glue between react and redux
*/
function mapStateToProps(state){
	/* 
	* whatever is returned will show up as props inside of BookList
	*/
	return {
		books: state.books
	};
}

/*
* Anything returned from this function will end up as props on the BookList container
*/
function mapDispatchToProps(dispatch){
	/*
	* Whenever selectBook is called, the result should be passed to all reducers
	*/
	return bindActionCreators({
		selectBook: selectBook
	}, dispatch)
}

// dispatch: act as a funnel where he gets the action and spit it to all the reducer in APP


/* 
* Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. 
* Make it available as a props
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// connect takes and function(mapStateToProps) and container(BookList)

// A container is a component that has a direct connection to the state managed by redux

// Container called as smart component

// Other than that it is a dump component that doesn't have direct connection to redux