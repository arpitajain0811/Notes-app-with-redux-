import React from 'react';
import FooterButton from '../FooterComponent/FooterButton';
import SavedNotes from '../SavedNotesComponent/SavedNotes';

const SavedNotesContainer = () => (
  <div className="SavedNotesContainer">
    <SavedNotes />
    <FooterButton
      text="Create new Note"
    />
  </div>
);
export default SavedNotesContainer;
