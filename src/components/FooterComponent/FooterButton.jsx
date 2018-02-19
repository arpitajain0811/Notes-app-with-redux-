import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Footer.css';
import { changePageState } from '../../redux/actions';

const Footer = props => (
  <button
    className="Footer"
    onClick={() => props.changeState()}
  >
    {props.text}
  </button>
);
const mapDispatchToProps = dispatch => ({
  changeState: () => {
    dispatch(changePageState());
  },
});
export default connect(null, mapDispatchToProps)(Footer);
Footer.propTypes = {
  text: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
};

