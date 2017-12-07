import React, { Component } from 'react'

import Toast from './Toast'
import './warning.scss'

class Warning extends Component {
    constructor(props){
        super(props)
        this.state={
          display: this.props.display
        }
        this.commonInfo = this._commonInfo.bind(this)
    }

    _commonInfo(){
        let uci = this.props.uid;
        console.log(uci);
        Toast.info("举报成功 ~", 3000);
    }

    componentWillReceiveProps(nextProps){
        if(this.state.display){
            this.setState ({
              display: nextProps.display > this.props.display
            })
        }
    }

    render() {
      return (
        <div className=''>

          <span onClick={()=>{
              this.setState({
                  display: !this.state.display
              })
            }}>
            <i className="iconfont icon-jubao"></i>
          </span>

          <button onClick={this.commonInfo} style={{display: this.state.display ? 'block' : 'none'}}
                   className={`button_warning btn-${this.props.visible}`}
                   data-id={this.props.uid}>
              {this.props.text}
          </button>
        </div>
      )
    }
}

export default Warning;
