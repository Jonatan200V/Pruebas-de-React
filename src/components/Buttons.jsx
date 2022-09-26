import { incremented, decremented, reset } from "../services/actions";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(decremented())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default Buttons;
