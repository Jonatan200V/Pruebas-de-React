import { CREATE_NOTES, DELETE_NOTES } from "../services/reducerNotes";

const createNotes = (note) => {
  return {
    type: CREATE_NOTES,
    note,
  };
};
const deleteNotes = (id) => {
  return {
    type: DELETE_NOTES,
    id,
  };
};

export { createNotes, deleteNotes };
