import React from 'react';
import './MemoTemplate.css';

const MemoTemplate = ({info, write, item}) => {
  return (
    <main className="Memo-template">
      <div className="info-wrapper">
        { info }
        <div className="info-item">
          {item}
        </div>
      </div>
      <div className="write-wrapper">
        { write }
      </div>
    </main>
  );
};

export default MemoTemplate;
