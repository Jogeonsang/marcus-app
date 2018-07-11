import React from 'react';
import './Info_Header.css';

const Header = ({ onCreate }) => {
  return (
    <div className="Header">
      <input
        placeholder = "메모 검색"
      />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Header;
