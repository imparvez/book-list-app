import React, {Component} from 'react';
import { connect } from 'react-redux';
import { activeBook } from '../actions/index';

class BookDetail extends Component {
	render(){
		if(!this.props.book){
			return <div>Select a book to get started.</div>
		}
		//console.log("BOOK DETAIL: ", this.props.book);
		return (
			<div>
				<h3>Details For: </h3>
				<p>Book Title: {this.props.book.title}</p>
				<p>Book Pages: {this.props.book.pages}</p>
			</div>
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
		book: state.activeBook
	};
}


export default connect(mapStateToProps)(BookDetail);