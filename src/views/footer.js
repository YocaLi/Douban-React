import React, {Component} from 'react'

import './footer.scss'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };
    this._check = this._checkUserAgent.bind(this);
  }

  _checkUserAgent(){
     var browser={
         versions:function(){
             var u = navigator.userAgent;
             return {
                 trident: u.indexOf('Trident') > -1, //IE内核
                 presto: u.indexOf('Presto') > -1, //opera内核
                 webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                 mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                 ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                 android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                 iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone
                 iPad: u.indexOf('iPad') > -1, //是否iPad
             };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
     };

     if( browser.versions.ios || browser.versions.iPhone || browser.versions.iPad){
         this.setState({
           text: '免费下载 iOS 客户端'
         }, () => {
           console.log(this.state.text)
         })
     }else if( browser.versions.android ){
       this.setState({
         text: '免费下载 Android 客户端'
       }, () => {
         console.log(this.state.text)
       })
     }
  }

  componentDidMount() {
    this._check();
  }
  render() {
    return (
      <div className="footer">
        <div className="footer_text">
          <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" alt=""/>
          <div>
            <span>豆瓣</span>
            <span>{this.props.text}</span>
          </div>
        </div>

        <div className="footer_download">
          <a>{this.state.text}</a>
        </div>
      </div>
    )
  }
}

export default Footer
