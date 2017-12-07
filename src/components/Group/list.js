import React, { Component } from 'react'

import './group.scss'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <ul className='group_list'>
        {
          this.props.list.map((item, index) =>
            <li key={index}>
              <h4>{item.title}</h4>
              <ul className='group_list_con'>
                {
                  item.arr.map((m, i) =>
                    <li key={i}>
                      <div className="group_list_del">
                        <div className="group_list_img">
                          <img src = {m.url} alt=''/>
                          <span> {m.name} </span>
                        </div>
                        <span className="group_list_num"> {m.num} </span>
                      </div>
                      <p className="group_list_int"> {m.des} </p>
                    </li>
                  )
                }
              </ul>
              <a>更多相关小组</a>
            </li>
          )
        }
      </ul>
    )
  }
}

export default List
