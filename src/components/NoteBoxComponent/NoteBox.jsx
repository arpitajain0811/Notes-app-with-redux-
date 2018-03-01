import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NoteBox.css';
import { editNote } from '../../redux/actions/index';

const NoteBox = props => (
  <Link to="new" className="NoteLink">
    <div className="Notebox" onClick={() => props.editingNote(props.id)}>
      <div className="NoteHeading">{props.title}</div>
      <div className="NoteContent">{props.content}</div>
    </div>
  </Link>
);
const mapDispatchToProps = dispatch => ({
  editingNote: (id) => {
    dispatch(editNote(id));
  },
});
export default connect(null, mapDispatchToProps)(NoteBox);
NoteBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  editingNote: PropTypes.func.isRequired,
};
