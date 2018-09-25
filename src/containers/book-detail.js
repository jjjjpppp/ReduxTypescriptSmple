import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index.tsx'
import { bindActionCreators } from 'redux';

export class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return(
      <div>
        <h3>Title: {this.props.book.title}</h3>
        <h3>Pages: {this.props.book.pages}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
