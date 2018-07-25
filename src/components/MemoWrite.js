import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange,selectedID, onTodo }) => {
  console.log(selectedID)
  return (
    <div className="Write">
      <textarea className = "Title"
        placeholder="H1"
        name={selectedID.id}
        value={selectedID.text}
        onChange={onChange}
      />
      <div className="CheckList" onClick={() => onTodo}>
      </div>
    </div>
  );
};

export default MemoWrite;
