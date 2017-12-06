import React, { Component } from 'react';

import './cell.scss'

class cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curCard: ''
    }
  }

  render() {
    return (
      <ul className="cell_list">
      {
         this.props.list.map((item, i)=>
               <li key={i}>
                  <div className="cell_title">
                    <span> {item.title} </span>
                    <span>更多<i className = "iconfont icon-arrow-right"></i> </span>
                  </div>

                  <ul className="cell_goods">
                    {
                      item.arr.map((list, index)=>
                        <li key={index}>
                          <img src={list.cover.url} alt="" />
                          <span> {list.title} </span>
                        </li>
                      )
                    }
                  </ul>
              </li>
          )
       }
      </ul>
    )
  }
}

export default cell;
