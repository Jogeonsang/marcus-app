import React from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  onCreate : PropTypes.func
};

Header.defaultProps = {
  onCreate: () => console.warn('onCreate not defined')
};

export default Header;
