import React, { Component } from 'react'

import Cell from '../../views/cell'
import Footer from '../../views/footer'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: []
    }
  }
  componentDidMount() {
    fetch('../../../movie.json')
      .then(
          (response) => {
            return response.json();
          }
        ).then(
          (data) => {
            console.log('Request successful', data.info);
            this.setState({
              movieList: data.info
            })
          }
        ).catch(function(error) {
            console.log('Request failed', error);
        });
  }
  render() {
    return (
      <div>
        <Cell list = {this.state.movieList}/>
        <Footer text = '我们的精神角落'/>
      </div>
    )
  }
}

export default Movie;
