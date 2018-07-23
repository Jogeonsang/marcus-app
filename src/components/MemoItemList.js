import React, { Component } from 'react';
import MemoItem from './MemoItem';

class MemoItemList extends Component {
  render() {
    const { memos, onWrite, onRemove, onChange } = this.props;

    const memoList = memos.map(
      ({id, text, checked}) => (
        <MemoItem
          id={id}
          text={text}
          checked={checked}
          onWrite={onWrite}
          onRemove={onRemove}
          onChange={onChange}
          key={id}
        />
      )
    );

    return (
      <div>
        {memoList}
      </div>
    );
  }
}


export default MemoItemList;
