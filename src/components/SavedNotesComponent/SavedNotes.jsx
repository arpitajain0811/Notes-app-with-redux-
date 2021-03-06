import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SavedNotes.css';
import NoteBox from '../NoteBoxComponent/NoteBox';

const SavedNotes = (props) => {
  const noteHolder = [];
  for (let i = 0; i < props.notesArray.length; i += 1) {
    noteHolder.push((<NoteBox
      id={props.notesArray[i].noteId}
      title={props.notesArray[i].noteTitle}
      content={props.notesArray[i].noteBody}
    />
    ));
  }

  return (
    <div className="SavedNotesBody">
      {noteHolder}
    </div>
  );
};
const mapStateToProps = state => ({
  notesArray: state.savedNotes,
});
export default connect(mapStateToProps, null)(SavedNotes);
SavedNotes.propTypes = {
  notesArray: PropTypes.string.isRequired,
};
