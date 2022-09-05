import React from "react";
import { useState } from "react";
import "./App.css";
import fetchLight from "./actions/fetch-light";
import standard from "./actions/standard";
import Light from "./components/Light";
import Button from "./components/Button";

const App = () => {
  // App variables
  const lightColors = ["red", "yellow", "green"];
  const [mode, setMode] = useState("Normal");
  const [lit, setLit] = useState("red");
  const [count, setCount] = useState(0);

  // Click Events
  const normal = () => setCount(count + 1, setLit(standard(count)));

  const random = async () => setLit(await fetchLight());

  const changeMode = () => {
    if (mode === "Normal") {
      setMode("Random");
    } else {
      setMode("Normal");
    }
  };

  // App Export
  return (
    <div className="app-container">
      <div className="button-container">
        Current Mode: <Button handleClick={changeMode} text={mode} />
      </div>
      <div className="light-container">
        {lightColors.map((color) => (
          <Light key={color} color={color} lit={lit} />
        ))}
      </div>
      <div className="button-container">
        <Button
          handleClick={mode === "Normal" ? normal : random}
          text="Change!"
        />
      </div>
    </div>
  );
};

export default App;
