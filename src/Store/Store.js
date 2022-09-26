import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";
import { reducerCounter } from "../clases/services/reducer";
import { reducerNotes } from "../clases/services/reducerNotes";
const reducer = combineReducers({
  count: reducerCounter,
  notes: reducerNotes,
});
const store = createStore(reducer, composeWithDevTools());
export { store };
