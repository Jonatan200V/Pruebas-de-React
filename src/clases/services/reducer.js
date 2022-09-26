import { INCREMENT, DECREMENT } from "../actions/reducer";
const INITIAL_STATE = 0;

const reducerCounter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return (state = state + 1);
    case DECREMENT:
      return (state = state - 1);
    default:
      return state;
  }
};
export { reducerCounter };
