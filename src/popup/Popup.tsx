import React from "react";
import ReactDOM from "react-dom";
import * as wasm from "wasm-game-of-life";

wasm.greet();

const Popup: React.FC = () => {
  return <div>Hello, {"React"}</div>;
};

ReactDOM.render(<Popup />, document.getElementById("root"));
