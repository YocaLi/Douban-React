import React, { Component } from 'react'

import './warning.scss'

class Warning extends Component {
    constructor(props){
        super(props)
        this.state={
          display:this.props.display
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.state.display){
            this.state={
              display:nextProps.display
            }
        }
    }

    render() {
      return (
        <div className=''>

          <span onClick={()=>{
              this.setState({
                  display:!this.state.display
              })
            }}>
            <i className="iconfont icon-jubao"></i>
          </span>

          <button  style={{display: this.state.display ? 'block' : 'none'}}
                   className={`button_warning btn-${this.props.visible}`}
                   data-id={this.props.uid}>
              {this.props.text}
          </button>
        </div>
      )
    }
}

export default Warning;
