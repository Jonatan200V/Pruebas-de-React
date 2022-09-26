const CREATE_NOTES = "@created/notes";
const DELETE_NOTES = "@delete/notes";
const INITIAL_STATE = [
  {
    id: 1,
    note: "Hola mundo de nuevo",
  },
  {
    id: 2,
    note: "Aprendiendo Redux",
  },
];
const reducerNotes = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case CREATE_NOTES:
      return (state = [...state, { id: state.length + 1, note: action.note }]);

    case DELETE_NOTES:
      return (state = state.filter((note) => note.id !== action.id));

    default:
      return state;
  }
};

export { reducerNotes, CREATE_NOTES, DELETE_NOTES };
