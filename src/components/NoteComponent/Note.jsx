import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Note.css';
import { changeTitle, changeBody } from '../../redux/actions/index';

const Note = props => (
  <div className="Note">
    <div className="HeadingBox">
      <input
        onChange={(text) => { props.onTitleChange(text); }}
        type="text"
        placeholder="Tasks for today"
        value={props.title}
      />
    </div>
    <div className="NoteInstructionContainer">
      <span className="NoteInstruction">Please type your note below</span>
      <i className="fa fa-file-text-o" aria-hidden="true" />
    </div>
    <div className="NoteArea">
      <textarea
        value={props.note}
        className={props.limit ? 'Warning' : ''}
        onChange={(text) => { props.onTextChange(text); }}
      />
    </div>
  </div>
);
const mapDispatchToProps = dispatch => ({
  onTitleChange: (text) => {
    dispatch(changeTitle(text));
  },
  onTextChange: (text) => {
    dispatch(changeBody(text));
  },
});
const mapStateToProps = state => ({
  title: state.noteTitle,
  note: state.noteBody,
  limit: state.limit,
});
export default connect(mapStateToProps, mapDispatchToProps)(Note);
Note.propTypes = {
  note: PropTypes.string.isRequired,
  limit: PropTypes.bool.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

