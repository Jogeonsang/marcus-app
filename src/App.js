import React, { Component } from 'react';
import MemoTemplate from './components/MemoTemplate';
import Header from './components/Info_Header';
import MemoItemList from './components/MemoItemList';
import Write from './components/MemoWrite';

import { connect } from 'react-redux';
import * as Actions from './Actions';

class App extends Component {


  handleChange = (e) => {
    const { memos, input, selectedID } = this.props;
    const { target: { value } } = e;
    this.props.onUpdate({value, selectedID});
  };

  handleRemove = (id) => {
    const { memos } = this.props;
    this.setState({
      memos : memos.filter(memo => memo.id !== id)
    });
  }

  render() {
    const { onCreate, memos, input, selectedID, onSelect } = this.props;
    const {
      handleChange,
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
            onCreate = {onCreate}
            onKeyword = {handleKeyword}
          />)}
        write={(
          <Write
            value = {input}
            onChange = {handleChange}
            memos={memos}
            selectedID={selectedID}
            />
          )}
      item={
      <MemoItemList
        memos={memos}
        onWrite={onSelect}
        onRemove={handleRemove}
        onChange={handleChange}
        onSelect={handleSelect}
      />}>

      </MemoTemplate>
    );
  }
}

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    memos: state.memos,
    selectedID: state.selectedID,
});

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(Actions.create()),
    onSelect: (id) => dispatch(Actions.select(id)),
    onUpdate: (data) => dispatch(Actions.update(data)),
    onClear : (value) => dispatch(Actions.clear(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
