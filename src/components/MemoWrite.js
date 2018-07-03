import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange, onKeyPress}) => {
  return (
    <div className="Write">
      <input placeholder = "title" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
    </div>
  );
};

export default MemoWrite;
