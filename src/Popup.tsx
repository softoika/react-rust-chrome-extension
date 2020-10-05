import React from "react";
import ReactDOM from "react-dom";

import("wasm-game-of-life").then((wasm) => wasm.greet());

const Popup: React.FC = () => {
  return <div>Hello, {"React"}</div>;
};

ReactDOM.render(<Popup />, document.getElementById("root"));
