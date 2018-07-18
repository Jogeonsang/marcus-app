import React from 'react';
import './MemoWrite.css';

const MemoWrite = ({value, onChange,selectedContent, onTodo }) => {
  return (
    <div className="Write">
      <textarea className = "Title"
        placeholder="H1"
        name={selectedContent.id}
        value={selectedContent.text}
        onChange={onChange}
      />
      <div className="CheckList" onClick={() => onTodo}>
      </div>
    </div>
  );
};

export default MemoWrite;
