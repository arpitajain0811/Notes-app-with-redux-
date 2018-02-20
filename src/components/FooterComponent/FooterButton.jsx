import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Footer.css';
import { changePageState, putNote } from '../../redux/actions';

const Footer = props => (
  <div className="Footer">
  
  <button
    onClick={() => props.changeState()}
  >
    {props.text}
  </button>
  <button onClick={()=>props.putsNote()}>Sync</button>
  </div>
);
const mapDispatchToProps = dispatch => ({
  changeState: () => {
    dispatch(changePageState());
  },
  putsNote:()=>{
    dispatch(putNote());
  },
});
export default connect(null, mapDispatchToProps)(Footer);
Footer.propTypes = {
  text: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
  putsNote:PropTypes.func.isRequired,
};

