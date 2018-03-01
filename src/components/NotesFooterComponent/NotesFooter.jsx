import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveNote } from '../../redux/actions';
import './NotesFooter.css';

function NotesFooter(props) {
  return (
    <div className="NoteFooter">
      <button className="Save" onClick={() => { props.saveNote(); }}>
        <Link className="Save" to="/saved">
          <b>Save</b>
        </Link>
      </button>
      <span className="Characters">{props.characters} characters</span>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  saveNote: () => {
    dispatch(saveNote());
  },
});

const mapStateToProps = state => ({
  characters: state.characters,
});
export default connect(mapStateToProps, mapDispatchToProps)(NotesFooter);
NotesFooter.propTypes = {
  characters: PropTypes.number.isRequired,
  saveNote: PropTypes.func.isRequired,
};
