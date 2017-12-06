import React, { Component } from 'react'

import AdList from './adList'
import Footer from '../../views/footer'
import './network.scss';

// 登录发广播
class LoginForAd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false
    }
  }
  render() {
    return(
      <div className="network_login">
        <div className="login_headImg">
          {
            this.state.login ? <img src={require('../../assets/images/head_img.png')} alt=''/>
                             : <img src={require('../../assets/images/head_info.png')} alt=''/>
          }
          <span>登录发广播</span>
        </div>
        <div className="login_forAd">
          <i className="iconfont icon-bianji"></i>
          <i className="iconfont icon-zhaoxiang"></i>
        </div>
      </div>
    )
  }
}

class Group extends Component {
  constructor(props) {
    super(props)
    this.state = {
      networkList: []
    }
  }

  componentDidMount() {
    fetch('../../../network.json')
      .then(
          (response) => {
            return response.json();
          }
        ).then(
          (data) => {
            console.log('Request successful', data.items);
            this.setState({
              networkList: data.items
            }, () => {
              console.log(this.state.networkList);
            })
          }
        ).catch(function(error) {
            console.log('Request failed', error);
        });
  }
  render() {
    return (
      <div>
        <div className="network_header">
          <span>打开App, 回复广播</span>
          <span>
            <a>极速下载</a>
            <a>打开</a>
          </span>
        </div>
        <LoginForAd/>
        <AdList list = { this.state.networkList } />
        <Footer text = '在 App 中刷广播更愉快'/>
      </div>
    )
  }
}

export default Group;
