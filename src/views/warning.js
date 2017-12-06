import React from 'react'

import './warning.scss'

function Warning(props) {
  return <button className={`button_warning btn-${props.visible}`} data-id={props.uid}> {props.text} </button>
}

export default Warning;
