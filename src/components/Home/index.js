import React, { Component } from 'react';

import Item from './item'
import List from './list'
import './index.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeList: []
    }
  }

  componentDidMount() {
    fetch('../../../list.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
      .then(
          (response) => {
            return response.json();
          }
        ).then(
          (data) => {
            console.log('Request successful', data.info);
            this.setState({
                homeList: data.info
            })
          }
        ).catch(function(error) {
            console.log('Request failed', error);
        });

    console.log(this.state.homeList);
  }
  render () {
    return (
      <div className="home">
        <div className="quick_entry">
          <Item text='影院热映' link='影院热映'/>
          <Item text='跳骚市场' link='跳骚市场'/>
          <Item text='豆瓣时间' link='豆瓣时间'/>
          <Item text='使用豆瓣App' link='使用豆瓣App'/>
        </div>
        <div className="home_context">
          <List list={this.state.homeList}/>
        </div>
      </div>
    )
  }
}

export default Home;
