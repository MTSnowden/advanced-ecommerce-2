import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

const currentCategory = 'tires'

function changeCategory(category) {
  category = currentCategory;
  render()
}

function render() {
  ReactDOM.render(
    <App state={state} />,
    document.getElementById("root")
  );
}


render();
export default changeCategory;
