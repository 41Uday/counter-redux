import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => dispatch({ type: "INC" })}
        style={{ marginRight: 10 }}
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
    </div>
  );
}

export default App;
