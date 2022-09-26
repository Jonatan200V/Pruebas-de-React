import Buttons from "./components/Buttons";
import { useSelector } from "react-redux";
const App = () => {
  const store = useSelector((state) => state);

  return (
    <div>
      <Buttons />

      {store}
    </div>
  );
};

export default App;
