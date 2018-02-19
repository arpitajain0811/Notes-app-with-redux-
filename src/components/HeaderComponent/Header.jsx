import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';


const Header = props => (
  <div className="Header">
    <b>{props.text}</b>
  </div>
);

export default Header;

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

