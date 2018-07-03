import React, { Component } from 'react';

class MemoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <MemoItemList text = "안녕"/>
        <MemoItemList text = "안녕"/>
        <MemoItemList text = "안녕"/>
      </div>
    );
  }
}

export default MemoItemList;
