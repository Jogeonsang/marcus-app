import React, { Component } from 'react';
import './App.css';
import MemoWriteForm from './components/Memo-Write-Form';

class App extends Component {
  render() {
    return (
      <div className = "Form">
        <div className = "Memo-Info">
          <div className = "Serch-bar">
            <input />
          </div>
          <div className = "Info-section">
            <ul class = "Memo-Item">
              <li><p>안녕</p></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className = "Memo-Write">
          <MemoWriteForm />
        </div>
      </div>
    );
  }
}

export default App;
