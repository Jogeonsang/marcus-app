import React, { Component } from 'react';
import MemoItem from './MemoItem';

class MemoItemList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div>
        <MemoItem text="안녕"/>
        <MemoItem text="안녕"/>
        <MemoItem text="안녕"/>
      </div>
    );
  }
}

export default MemoItemList;
