import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange, onKeyPress}) => {
  return (
    <div className="Write">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
    </div>
  );
};

export default MemoWrite;
