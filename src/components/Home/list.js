import React, { Component } from 'react';

import './index.scss'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <ul>
        {
          this.props.list.map((item, i) =>
            <li key={i} >
              <div className="list_header">
                <div>
                  <img src={item.author.avatar} alt=""/>
                   {item.author.name}
                </div>
                <span>{item.column.name}</span>
              </div>
              <div className="list_title">
                <p>{item.title}</p>
                <img src={item.cover_url} alt=""/>
              </div>
              <p className="list_text">
                {item.desc}
              </p>
              <p className="list_footer">
                <span><i className = "iconfont icon-shoucang"></i>  {item.likers_count}</span>
                <span><i className = "iconfont icon-L4"></i>  {item.comment_count}</span>
              </p>
            </li>
          )
        }
      </ul>
    )
  }
}

export default List;
