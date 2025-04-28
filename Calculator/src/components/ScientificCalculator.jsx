import React, { useState } from "react";
import { evaluate } from "mathjs";
import Paper from "@mui/material/Paper";

export default function ScientificCalculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  var items = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "(",
    ")",
    "√(",
    "^",
    "=",
    "+",
  ];

  return (
    <Paper
      elevation={24}
      style={{
        borderRadius: "20px",
        width: "30vw",
        height: "60vh",
        marginTop: "0%",
        marginLeft: "0%",
        position: "sticky",
      }}
    >
      <h2>Calculator</h2>
      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: "50vh",
          height: "5vh",
          borderRadius: "10px",
          padding: "5px",
          textAlign: "Right",
        }}
      />
      <br />
      <div>
        <div>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => {
                  if (item === "=") handleCalculate();
                  else if (item === "√(") handleClick("sqrt(");
                  else handleClick(item);
                }}
              >
                {item}
              </button>

              {console.log(index)}
              {(index + 1) % 4 == 0 && <br />}
            </React.Fragment>
          ))}
        </div>
        <button style={{ width: "300px" }} onClick={handleClear}>
          Clear
        </button>
      </div>
    </Paper>
  );
}
