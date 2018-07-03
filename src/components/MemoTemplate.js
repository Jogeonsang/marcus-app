import React from 'react';
import './MemoTemplate.css';

const MemoTemplate = ({info, write}) => {
  return (
    <main className="Memo-template">
      <div className="info-wrapper">
        { info }
      </div>
      <div className="write-wrapper">
        { write }
      </div>
    </main>
  );
};

export default MemoTemplate;
