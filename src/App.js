import React, { Component } from 'react';
import MemoTemplate from './components/MemoTemplate';
import Header from './components/Info_Header';
import MemoItemList from './components/MemoItemList';
import Write from './components/MemoWrite';

import { connect } from 'react-redux';
import * as Actions from './Actions';

class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input : '',
    memos : [
      { id: 0, text: '안녕하세요!', checked: false },
      { id: 1, text: 'Marcus Memo App 입니다.', checked: false },
      { id: 2, text: '편안하게 무언가 적어보세요!', checked: false }
    ],
    selectedContent : '',
    Keyword : ''
  }


  handleChange = (e) => {
    const { memos, input } = this.state;
    const { target: { value, name } } = e;

    const memo = memos.filter(memo => memo.id === Number(name));

    const prevMemos = memos.filter(memo => memo.id !== Number(name));

    memo[0].text = value;

    this.setState(prevState => {
      return Object.assign(
        {},
        {
          memos: [...memo, ...prevMemos]
        }
      );
    });
  };

/*  handleCreate = () => {
    const { input, memos } = this.state;

    this.setState({
      input: '', // input을 비우고
      // concat을 사용하여 배열에 추가
      memos: memos.concat({
        id : this.id++,
        text : '',
        checked: true
      })
    });
  } */

  handleKeyPress = (e) => {
    // 눌려진 키가 contol+N 이면 handleCreate 호출
    if(e.key === 'Ctrl+N') {
      this.handleCreate();
    }
  }

  handleWrite = (id) => {
    console.log(id);
    const { memos } = this.state;
    const index = memos.findIndex(memo => memo.id === id);
    const selected = memos[index];

    this.setState({
      selectedContent : selected
    })
  }

  handleRemove = (id) => {
    const { memos } = this.state;
    this.setState({
      memos : memos.filter(memo => memo.id !== id)
    });
  }

  render() {
    const { input, memos,selectedContent, onCreate } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleRemove,
      handleWrite,
      handleKeyword,
      handleSelect
    } = this;

    return (
      <MemoTemplate
        info={(
          <Header
            onCreate = {handleCreate}
            onKeyword = {handleKeyword}
          />)}
        write={(
          <Write
            value = {input}
            onChange = {handleChange}
            memos={memos}
            selectedContent={selectedContent}
            />
          )}
      item={
      <MemoItemList
        memos={memos}
        onWrite={handleWrite}
        onRemove={handleRemove}
        onChange={handleChange}
        onSelect={handleSelect}
      />}>

      </MemoTemplate>
    );
  }
}
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(Actions.create)
});

export default connect(null, mapToDispatch)(App);
