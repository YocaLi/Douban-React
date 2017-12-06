import React, { Component }  from 'react'
import { Link } from 'react-router'
import './index.scss';

class Navigation extends Component {
  render() {
    return (
      <div className="douban">
        <header>
          <div className="header_info">
            <div className="header_left">
                <Link to='/home'></Link>
            </div>
            <div className="header_right">
              <Link to='/movie'>电影</Link>
              <Link to='/book'>图书</Link>
              <Link to='/network'>广播</Link>
              <Link to='/group'>小组</Link>
              <Link to='/seach'></Link>
            </div>
          </div>
          {
            /*
            备注：下面的div使用来承载路由的内容的
            */
          }
        </header>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Navigation;
