import React, { Component } from 'react';
import MemoTemplate from './components/MemoTemplate';
import Header from './components/Info_Header';
import MemoItemList from './components/MemoItemList';
import Write from './components/MemoWrite';
class App extends Component {

  render() {
    return (
      <MemoTemplate info={<Header/>}  write={<Write/>}>
      </MemoTemplate>

    );
  }
}

export default App;
