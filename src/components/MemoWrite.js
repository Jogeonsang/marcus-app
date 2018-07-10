import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange,selectedContent,memos}) => {
  console.log(selectedContent);
  return (
    <div className="Write">
      <input type="memos.text" value={selectedContent.text} onChange={e => onChange(e)}  />
    </div>
  );
};

export default MemoWrite;
