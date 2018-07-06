import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange,selectedContent}) => {
console.log(selectedContent)
  return (
    <div className="Write">
      <input value={selectedContent.text} onChange={onChange} />
    </div>
  );
};

export default MemoWrite;
