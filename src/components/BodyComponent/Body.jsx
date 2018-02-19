import React from 'react';
// import PropTypes from 'prop-types';
import './Body.css';
import BodyTitle from '../BodyTitleComponent/BodyTitle';
import NotesFooter from '../NotesFooterComponent/NotesFooter';
import Note from '../NoteComponent/Note';

const Body = () => (
  <div className="Body">
    <BodyTitle text="Note Title" />
    <Note />
    <NotesFooter />
  </div>
);

export default Body;

