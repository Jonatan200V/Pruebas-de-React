const incremented = () => {
  return { type: "@counter/incremented" };
};
const decremented = () => {
  return { type: "@counter/decremented" };
};
const reset = () => {
  return { type: "@counter/reset" };
};
export { incremented, decremented, reset };
