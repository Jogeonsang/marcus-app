import React, { Component } from 'react';
import './MemoItem.css';

class MemoItem extends Component {
  render() {
    const { text, id } = this.props;

    return (
      <div className="memo-item" >
          <div>{text}</div>
      </div>
    );
  }
}

export default MemoItem;
