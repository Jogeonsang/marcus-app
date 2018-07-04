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
    ]
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
        text : input,
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

  handleToggle = (id) => {
    const { memos } = this.state;

    // 파라미터로 받은 id 값을 가지고 몇번째 아이템인지 찾습니다.
    const index = memos.findIndex(memo => memo.id === id);
    const selected = memos[index]; //선택한 객체

    const nextMemos = [...memos]; //배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextMemos[index] = {
      ...selected,
      checked: !selected.checked
    };

  this.setState({
    meoms : nextMemos
  });
}

  handleRemove = (id) => {
    const { memos } = this.state;
    this.setState({
      memos : memos.filter(memo => memo.id !== id)
    });
  }

  render() {
    const { input, memos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
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
            onKeyPress = {handleKeyPress}
            onChange = {handleChange}
            onToggle = {handleToggle}
            />
          )}
      item={<MemoItemList memos={memos} onToggle={handleToggle} onRemove={handleRemove}/>}>
      </MemoTemplate>
    );
  }
}

export default App;
