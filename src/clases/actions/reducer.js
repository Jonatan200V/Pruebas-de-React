const INCREMENT = "@counter/incremented";
const DECREMENT = "@counter/decremented";

const incremented = () => {
  console.log("HOLA");
  return {
    type: INCREMENT,
  };
};
const decremented = () => {
  return {
    type: DECREMENT,
  };
};

export { INCREMENT, DECREMENT, incremented, decremented };
