const charLimit = 120;
const defaultState = {
  page: false,
  limit: false,
  characters: charLimit,
  noteTitle: '',
  noteBody: '',
  savedNotes: [],
  edit: false,
  id: 0,
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'changeState': {
      return {
        ...state,
        noteBody: '',
        noteTitle: '',
        characters: charLimit,
        page: false,
      };
    }
    // case 'putNote':{
    //   fetch('/notes', {
    //     body: JSON.stringify(state.savedNotes),
    //     headers: {
    //       'content-type': 'application/json'
    //     },
    //     method: 'PUT',
    //   }).then((response)=>{response.json()
    //     .then((response)=>{console.log(response.message)})});
    //   break;
    // }
    case 'getNote': {
      return {
        ...state,
        savedNotes: state.savedNotes.concat(action.payload.notesArray.slice()),
      };
    }
    case 'editNote': {
      const savedNotesArray = state.savedNotes.slice();
      for (let i = 0; i < savedNotesArray.length; i += 1) {
        if (savedNotesArray[i].noteId === action.payload.noteId) {
          return {
            ...state,
            noteTitle: savedNotesArray[i].noteTitle,
            noteBody: savedNotesArray[i].noteBody,
            characters: charLimit - savedNotesArray[i].noteBody.length,
            page: false,
            edit: true,
            id: action.payload.noteId,
          };
        }
      }
      break;
    }
    case 'changeBody': {
      if (action.payload.noteBody.target.value.length > charLimit) {
        const note = action.payload.noteBody.target.value.slice(0, charLimit);
        return {
          ...state,
          limit: true,
          characters: charLimit - note.length,
          noteBody: note,
        };
      }
      return {
        ...state,
        limit: false,
        characters: charLimit - action.payload.noteBody.target.value.length,
        noteBody: action.payload.noteBody.target.value,
      };
    }
    case 'changeTitle': {
      return {
        ...state,
        noteTitle: action.payload.noteTitle.target.value,
      };
    }
    case 'saveNote': {
      if (!state.edit) {
        if (state.noteTitle && state.noteBody) {
          const note = { noteId: Date.now(), noteTitle: state.noteTitle, noteBody: state.noteBody };
          const prevNotes = state.savedNotes.slice();
          prevNotes.push(note);
          // state.saveNewNote(prevNotes);
          return {
            ...state,
            savedNotes: prevNotes,
            noteTitle: '',
            noteBody: '',
            characters: charLimit,
            page: true,
          };
        }
      } else {
        const noteId = state.id;
        const savedNotesArray = state.savedNotes.slice();
        for (let i = 0; i < savedNotesArray.length; i += 1) {
          if (savedNotesArray[i].noteId === noteId) {
            savedNotesArray[i].noteTitle = state.noteTitle;
            savedNotesArray[i].noteBody = state.noteBody;
            // this.props.saveEdited(savedNotesArray.slice());
            return {
              ...state,
              savedNotes: savedNotesArray.slice(),
              edit: false,
              page: true,
            };
          }
        }
      }
      break;
    }
    default: {
      return state;
    }
  }
};
export default reducer;
