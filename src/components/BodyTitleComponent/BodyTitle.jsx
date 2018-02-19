import React from 'react';
import PropTypes from 'prop-types';
import './BodyTitle.css';

const BodyTitle = props => (
  <div className="noteTitle" >
    <span><b>{props.text}</b></span>
    <button><b>en</b></button>
  </div>
);

export default BodyTitle;

BodyTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
