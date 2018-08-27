import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange,selectedID, onTodo }) => {
  return (
    <div className="Write">
      <textarea className = "Title"
        placeholder="H1"
        name={selectedID.id}
        value={selectedID.text}
        onChange={onChange}
      />
    </div>
  );
};

export default MemoWrite;
