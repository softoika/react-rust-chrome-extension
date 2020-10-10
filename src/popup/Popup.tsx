import React from "react";
import ReactDOM from "react-dom";
import { GameOfLifeCanvas } from "./GameOfLifeCanvas";

const Popup: React.FC = () => {
  return <GameOfLifeCanvas />;
};

ReactDOM.render(<Popup />, document.getElementById("root"));
