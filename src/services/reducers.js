const INITIAL_STATE = 0;
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@counter/incremented":
      return state + 1;
    case "@counter/decremented":
      return state - 1;
    case "@counter/reset":
      return (state = 0);
    default:
      return 0;
  }
};
export { reducer };
