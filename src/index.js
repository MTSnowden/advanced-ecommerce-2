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
    <App state={state} changeCategory = {changeCategory} currentCategory ={currentCategory} />,
    document.getElementById("root")
  );
}


render();
export default changeCategory;
// need to export?
