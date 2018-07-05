import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange}) => {
  return (
    <div className="Write">
      <input placeholder = "title" value={value} onChange={onChange}/>
    </div>
  );
};

export default MemoWrite;
