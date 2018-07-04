import React, { Component } from 'react';
import MemoItem from './MemoItem';

class MemoItemList extends Component {
  render() {
    const { memos, onToggle, onRemove } = this.props;

    const memoList = memos.map(
      ({id, text, checked}) => (
        <MemoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
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
