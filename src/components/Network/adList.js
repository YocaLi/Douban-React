import React, { Component } from 'react'

import Warning from '../../views/warning'
import './network.scss'

class AdList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clickProps:{
        visible: 'hidden',
        name: '举报'
      }
    }
    this.formatUrl = this._formatUrl.bind(this);
    this.handleClick = this._handleClick.bind(this);
  }

  // 点击举报
  _handleClick() {
    this.setState({
      clickProps:{
        visible: 'show',
        name: '举报'
      }
    });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  // 格式化文本链接
  _formatUrl(text){
      var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
      var matchUrl = reg.exec(text);

      // exec 用于获取正则匹配的内容
      if (reg.exec(text) != null) {
        console.log(matchUrl);
        console.log(matchUrl[0]);
        var newText = text.replace(reg, "<a target='_self' href='"+matchUrl[0]+"' target='_blank'>"+ matchUrl[0]+"</a>");
      }

      return newText;
  }

  componentDidUpdate() {

  }

  render(){
    return (
      <ul className='network_list'>
        {
          this.props.list.map((item, i) =>
            <li key = {i} className='first_li'>
              <img className='heard_img' src={item.status.author.avatar} alt=''/>
              <div className='list_con'>
                <div className='list_info'>
                  <p>
                    <span>{item.status.author.name}</span>
                    <span>{item.status.activity}</span>
                  </p>
                  <p> {item.status.create_time} </p>
                </div>

                {
                  item.status.card ?

                  <div className='list_card'>
                    <p>{item.status.card.title}</p>
                    <p>{item.status.card.subtitle}</p>
                  </div>

                  :

                  <div>

                    <div className='list_text' dangerouslySetInnerHTML={{__html: this.formatUrl(item.status.text)}}></div>

                    <ul>
                      {
                        item.status.images.map((list, index)=>
                          <li key={index}>
                            <img src={list.large.url} alt='' width='48'/>
                          </li>
                        )
                      }
                    </ul>

                  </div>
                }

                <div className='list_footer'>
                  <div>
                    <span> <i className="iconfont icon-zan"></i> {item.status.like_count} </span>
                    <span> <i className="iconfont icon-pl"></i> {item.status.comments_count} </span>
                    <span> <i className="iconfont icon-fenxiang1"></i> {item.status.reshares_count} </span>
                  </div>
                  <div>
                    <span onClick={this.handleClick}> <i className="iconfont icon-jubao"></i> </span>
                    <Warning
                      visible={this.state.clickProps.visible}
                      uid={item.status.id}
                      text={this.state.clickProps.name}
                    />
                  </div>
                </div>

              </div>
            </li>
          )
        }
      </ul>
    )
  }
}

export default AdList;
