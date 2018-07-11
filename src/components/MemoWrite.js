import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange,selectedContent }) => {
  return (
    <div className="Write">
      <textarea
        placeholder="title"
        name={selectedContent.id}
        value={selectedContent.text}
        onChange={onChange}
      />
    </div>
  );
};

export default MemoWrite;
