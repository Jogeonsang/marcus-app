import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange,selectedContent,memos}) => {
  console.log(selectedContent);
  return (
    <div className="Write">
      <input value={selectedContent.text} onChange={this.onChange}  />
    </div>
  );
};

export default MemoWrite;
