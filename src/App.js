import React, { Component } from 'react';
import MemoTemplate from './components/MemoTemplate';
import Header from './components/Info_Header';
import MemoItemList from './components/MemoItemList';
import Write from './components/MemoWrite';
class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input : '',
    memos : [
      { id: 0, text: 'Hello', checked: false },
      { id: 1, text: 'Welcome to', checked: true },
      { id: 2, text: 'Marcusapp', checked: false }
    ],
    selectedContent : ''
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, memos } = this.state;
    this.setState({
      input: '', // input을 비우고
      // concat을 사용하여 배열에 추가
      memos: memos.concat({
        id : this.id++,
        text : '',
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 contol+N 이면 handleCreate 호출
    if(e.key === 'Ctrl+N') {
      this.handleCreate();
    }
  }

  handleWrite = (id) => {
    console.log(id);
    const { memos } = this.state;
    const index = memos.findIndex(todo => todo.id === id);
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
    const { input, memos,selectedContent } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleRemove,
      handleWrite
    } = this;

    return (
      <MemoTemplate
        info={(
          <Header
            onCreate = {handleCreate}
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
      />}>

      </MemoTemplate>
    );
  }
}

export default App;
