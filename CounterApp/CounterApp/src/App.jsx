import { Paper } from "@mui/material";
import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Paper style={{ marginLeft: "500px" }}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={increment}>➕ Increment</button>

        <button onClick={decrement} disabled={count === 0}>
          ➖ Decrement
        </button>
        <button style={{ textAlign: "center" }} onClick={reset}>
          <GrPowerReset /> Reset
        </button>
      </div>
    </Paper>
  );
}

export default App;
