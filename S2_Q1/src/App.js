import { useEffect } from "react";
import "./App.css";

import {
  useNumberInput,
  useSelectInput,
  useWindowSize,
  useCalculateReducer,
} from "./hooks";

function App() {
  const { state, dispatch } = useCalculateReducer();
  const { numberValue, handleNumberChange } = useNumberInput();
  const { selectedValue, handleSelectChange } = useSelectInput({
    defaultValue:
      state.calculateType === "IS_PRIME" ? "isPrime" : "isFibonacci",
  });
  const windowSize = useWindowSize();

  useEffect(() => {
    console.log("selectedValue", selectedValue);
    if (selectedValue === "isPrime") {
      dispatch({ type: "IS_PRIME", payload: { number: numberValue } });
    } else {
      dispatch({ type: "IS_FIBONACCI", payload: { number: numberValue } });
    }
  }, [numberValue, selectedValue, dispatch]);

  return (
    <div className="App" style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "100%",
          width: "100%",
          height: "100vh",
          overflowX: windowSize.width < 600 ? "scroll" : "auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFDFD3",
            minWidth: "200px",
            padding: "1rem",
          }}
        >
          <input
            type="number"
            value={numberValue}
            onChange={handleNumberChange}
            style={{ width: "100px" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#FEC8D8",
            minWidth: "100px",
            width: "100%",
            padding: "1rem",
          }}
        >
          <select
            style={{ width: "100px" }}
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="isPrime">isPrime</option>
            <option value="isFibonacci">isFibonacci</option>
          </select>
        </div>
        <div
          style={{
            backgroundColor: "#E0BBE4",
            minWidth: "300px",
            padding: "1rem",
          }}
        >
          {state.isTrue ? "True" : "False"}
        </div>
      </div>
    </div>
  );
}

export default App;
