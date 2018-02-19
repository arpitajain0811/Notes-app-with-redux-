export const changePageState = () => ({
  type: 'changeState',
});
export const saveNote = () => ({
  type: 'saveNote',
});
export const changeTitle = noteTitle => ({
  type: 'changeTitle',
  payload: {
    noteTitle,
  },
});
export const changeBody = noteBody => ({
  type: 'changeBody',
  payload: {
    noteBody,
  },
});
export const editNote = noteId => ({
  type: 'editNote',
  payload: {
    noteId,
  },
});
