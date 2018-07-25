import React, { Component } from 'react';
import './MemoItem.css';
import LinesEllipsis from 'react-lines-ellipsis'

class MemoItem extends Component {
  render() {
    const { text, checked, id, onWrite, onRemove} = this.props;

    return (
      <div className="memo-item" onClick={(e) => onWrite(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`memo-text ${checked && 'checked'}`}>
          <div><LinesEllipsis
            text={text}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
            /></div>
        </div>
        {
          checked && (<div className="checked-mark"></div>)
        }
      </div>
    );
  }
}

export default MemoItem;
