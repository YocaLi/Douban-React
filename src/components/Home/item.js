import React from 'react';

// 定义一个木偶组件
function Item(props) {
  return (
    <a href={props.link}>{props.text}</a>
  )
}

export default Item;
