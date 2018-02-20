import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Footer.css';
import { changePageState } from '../../redux/actions';
const putsNote=(savedNotes)=>{
  fetch('/notes', {
    body: JSON.stringify(savedNotes), 
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT', 
  }).then((response)=>{response.json()
    .then((response)=>{console.log(response.message)})});
}
const Footer = props => (
  <div className="FooterButtons">
  
  <button class="Button" onClick={() => props.changeState()}>
    {props.text}
  </button>
  <button class="Button" onClick={()=>putsNote(props.savedNotes)}>Sync</button>
  </div>
);
const mapDispatchToProps = dispatch => ({
  changeState: () => {
    dispatch(changePageState());
  },
});
const mapStateToProps = state => ({
  savedNotes: state.savedNotes,
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
Footer.propTypes = {
  text: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
  savedNotes:PropTypes.arrayOf(PropTypes.object).isRequired,
};

