import React from "react";
import ReactDOM from "react-dom";
import { Universe } from "wasm-game-of-life";

Universe.new();

const Popup: React.FC = () => {
  return <div>Hello, {"React"}</div>;
};

ReactDOM.render(<Popup />, document.getElementById("root"));
