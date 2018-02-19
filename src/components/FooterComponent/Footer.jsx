import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = props => (
  <div className="Footer">
    <b>{props.text}</b>
  </div>
);

export default Footer;
Footer.propTypes = {
  text: PropTypes.string.isRequired,
};
