import React, { Component } from 'react';
import './App.css';
import MemoWriteForm from './components/Memo-Write-Form';

class App extends Component {
  render() {
    return (
      <main className = "Form">
        <div className = "Memo-Info">
        </div>
        <div className = "Memo-Write">
        <MemoWriteForm>
        </MemoWriteForm>
        </div>
      </main>
    );
  }
}

export default App;
