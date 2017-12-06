import React, { Component } from 'react'

import Cell from '../../views/cell.js'
import Footer from '../../views/footer'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booksList: []
    }
  }
  componentDidMount() {
    fetch('../../../book.json')
      .then(
          (response) => {
            return response.json();
          }
        ).then(
          (data) => {
            console.log('Request successful', data.info);
            this.setState({
              booksList: data.info
            })
          }
        ).catch(function(error) {
            console.log('Request failed', error);
        });
  }
  render() {
    return (
      <div>
        <Cell list={ this.state.booksList }/>
        <Footer text = '我们的精神角落'/>
      </div>
    )
  }
}

export default Book;
